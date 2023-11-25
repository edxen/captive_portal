import { useState, useEffect, useRef } from 'react';
import Translations from "./Translations";
import { ChevronDown, ChevronUp } from './Icons';

const ChangeLanguage = ({ state }) => {
  const { language, setLanguage, updateFlags } = state;
  const { languages } = Translations;

  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => (overlayRef.current && !overlayRef.current.contains(event.target)) && setDisplay(false);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (event) => {
    setLanguage(event.target.id);
    updateFlags({ waiting: true });
  };
  const currentLanguage = languages[language];

  const currentBaseClass = ' flex-center px-2 bg-white cursor-pointer hover:bg-orange-300 hover:text-white ';
  const listBaseClass = ' px-2 hover:text-white  hover:bg-orange-300 ';
  const languageGroup = ['zh-cn', 'zh-tw', 'ko', 'ja', 'ar', 'ru'];

  const handleClass = (code) => {
    let match = false;
    languageGroup.forEach((item) => item === code && (match = true));
    if (match) match = 'font-smooch-regular text-[14px] ';
    return match;
  };

  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => setDisplay(!display);

  return (
    <div className="flex flex-col text-right">
      <div className='flex justify-end'>
        <div onClick={toggleDisplay} className={handleClass(language) + currentBaseClass}>
          <i className='pr-1'>
            {!display
              ? <ChevronDown />
              : <ChevronUp />
            }
          </i>
          {currentLanguage}
        </div>
      </div>

      <div className='flex justify-end'>
        <div ref={overlayRef} className="absolute w-[120px] bg-white cursor-pointer" onClick={toggleDisplay} style={{ display: display ? 'block' : 'none' }}>
          {
            display && (
              Object.entries(languages).map(([code, text]) => (
                code !== language && (
                  <div onClick={changeLanguage} id={code} className={handleClass(code) + listBaseClass} key={code}>
                    {text}
                  </div>
                )
              ))
            )
          }
        </div>
      </div>
    </div >
  );
};

export default ChangeLanguage;
