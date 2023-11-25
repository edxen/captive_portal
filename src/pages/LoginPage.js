import React, { useRef, Fragment } from 'react';
import Button from '../components/Button';
import { Exclamation } from '../components/Icons';

const LoginPage = ({ state }) => {
  const { text, flags, updateFlags } = state;
  const inputRef = useRef(null);
  const handleConnect = () => {
    updateFlags({ disconnected: false, expired: false, waiting: false, errorText: '' });
    if (inputRef.current.value === '' || inputRef.current.value.length === 0) {
      updateFlags({ errorText: text.error.access_code_blank });
    } else {
      updateFlags({ waiting: true, input: inputRef.current.value });
    }
  };
  const handleKeyPress = (event) => (event.key === 'Enter' || event.keyCode === 13) && handleConnect();

  const inputBaseClass = '  rounded p-2 cursor-pointer md:w-7/12 text-zinc-800 placeholder:text-lg ';
  const inputErrorClass = ' border-2 border-rose-600 ';

  return (
    <Fragment>
      <div className='text-center mb-6'>
        {text.access_code.instructions}
      </div>

      {(flags.disconnected || flags.expired) && (
        <div className='text-center mb-6'>
          <div className='flex-center bg-red-800 bg-opacity-75 text-white-800 px-6 py-2 rounded-xl'>
            <i><Exclamation /></i>
            {flags.expired ? text.error.connection_expired : text.error.connection_disconnected}
          </div>
        </div>
      )}

      <div className='flex-col-center w-full mb-6'>
        <div className='flex-center w-full flex-wrap mb-2'>
          <label className='p-2 pe-4'>{text.access_code.label}</label>

          <input ref={inputRef}
            onKeyDown={handleKeyPress}
            className={flags.errorText ? inputBaseClass + inputErrorClass : inputBaseClass}
            placeholder={text.access_code.placeholder}
            defaultValue={flags.input} />
        </div>

        <div className='text-rose-600'>{flags.errorText}</div>
      </div >

      <Button onClick={handleConnect} disable={flags.waiting && true} label={text.connect} labelDisabled={text.loading} />
    </Fragment>
  );
};

export default LoginPage;