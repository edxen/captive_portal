const Button = ({ onClick, disable, label, labelDisabled, alt }) => {
  if (!disable) disable = false;

  const baseClass = 'font-smooch-bold rounded px-4 py-1  transition-colors disabled:opacity-50 disabled:pointer-events-none';

  return (
    <div className='text-zinc-800'>
      <button onClick={onClick}
        className={!alt ? 'bg-orange-300 hover:bg-orange-400 ' + baseClass : 'mr-4 bg-white hover:bg-gray-400 ' + baseClass}
        disabled={disable && true}>
        {!disable ? label : labelDisabled}
      </button>
    </div>
  );
};

export default Button;
