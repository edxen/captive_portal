import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

import { workingCodes } from './components/Utils';
import { CloseBtn } from './components/Icons';

import Translations from './components/Translations';
import ChangeLanguage from './components/ChangeLanguage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import WaitingPage from './pages/WaitingPage';
import ConnectedPage from './pages/ConnectedPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

import RenderPage from './components/RenderPage';
import LocalStorage from './components/LocalStorage';

const initialFlags = {
  input: '',
  language: true,
  waiting: true,
  connected: false,
  reconnected: false,
  disconnected: false,
  expired: false,
  error: false,
  errorText: '',
};

const App = () => {
  const [flags, setFlags] = useState(initialFlags);
  const [delayedExecution, setDelayedExecution] = useState(false);
  const [language, setLanguage] = useState('en');

  const updateFlags = useCallback((value) => setFlags(prevFlags => ({ ...prevFlags, ...value })), []);

  const browserLanguageCode = navigator.language || navigator.userLanguage;

  const updateLanguageCode = (browserLanguageCode, supportedLanguages, setLanguage) => {
    for (const code in supportedLanguages) {
      if (browserLanguageCode.toLowerCase().startsWith(code) ||
        (code === 'zh-tw' && browserLanguageCode.toLowerCase().startsWith('zh-tw')) ||
        (code === 'zh-cn' && browserLanguageCode.toLowerCase().startsWith('zh'))) {
        setLanguage(code);
        break;
      }
    }
  };

  const text = Translations.text[language];
  const state = { text, language, setLanguage, updateFlags, flags, setFlags, delayedExecution, setDelayedExecution };

  useEffect(() => {
    document.title = text.title;
    updateLanguageCode(browserLanguageCode, Translations.languages, setLanguage);

    const loadedData = LocalStorage().load();
    if (loadedData) updateFlags({ ...loadedData.flags, waiting: true, reconnected: true });
  }, []);


  const [display, setDisplay] = useState(true);
  const toggleDisplay = () => setDisplay(!display);

  RenderPage({ state });

  return (
    <div className='flex-col-center mt-20 font-smooch-regular text-xl'>
      {
        display && !flags.connected && (
          <div className="flex-center fixed bottom-0 mb-3 mx-6 border border-transparent rounded-md bg-white bg-opacity-75 p-4">
            <div className="flex-col-center">
              <div> {text.demo} </div>
              <div>
                {workingCodes.map((item, index) => (
                  <span key={index}><span className='font-smooch-bold'>{item.code} </span>({item.minutes} {item.minutes > 1 ? text.connected.time.minutes : text.connected.time.minute}), </span>
                ))}
              </div>
            </div>
            <i onClick={toggleDisplay} className="cursor-pointer text"><CloseBtn /></i>
          </div>
        )
      }
      {flags.language &&
        <div className='min-w-min w-3/4 lg:w-1/2'>
          <ChangeLanguage state={state} />
        </div>
      }
      <div className='min-w-min w-3/4 lg:w-1/2 border border-transparent rounded-md rounded-tr-none bg-zinc-900'>

        <Header state={state} />

        <div className='flex-col-center mb-10 p-4 px-8 text-white text-center'>
          {
            flags.waiting
              ? <WaitingPage state={state} />
              : flags.error
                ? <ErrorPage state={state} />
                : flags.connected
                  ? <ConnectedPage state={state} />
                  : <LoginPage state={state} />
          }
        </div>

        <Footer state={state} />

      </div>
    </div>

  );
};

export default App;
