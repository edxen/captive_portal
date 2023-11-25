import { useEffect, useCallback, Fragment } from "react";
import { msInSeconds, workingCodes } from "../components/Utils";
import LocalStorage from "../components/LocalStorage";

const WaitingPage = ({ state }) => {
  const { text, updateFlags, flags, delayedExecution, setDelayedExecution } = state;
  const { deleteKey } = LocalStorage();

  const renderNextPage = useCallback(() => {
    let waitSeconds = 2;

    if (flags.language) updateFlags({ language: false });
    if (flags.waiting) {
      waitSeconds = 1;
      setDelayedExecution(true);
    } else if (flags.input || flags.disconnected || flags.expired) setDelayedExecution(true);

    let timer;
    if (delayedExecution) {
      timer = setTimeout(() => {
        updateFlags({ waiting: false, language: true });
        if (flags.disconnected || flags.expired) {
          deleteKey();
          updateFlags({ reconnected: false, connected: false });
        } else {
          if (flags.input) {
            const success = workingCodes.some(accessCode => flags.input === accessCode.code.toString());
            updateFlags({ expired: false, disconnected: false });
            if (!success) {
              updateFlags({ errorText: text.error.access_code_invalid });
            } else {
              updateFlags({ connected: true });
            }
          }
        }
        setDelayedExecution(false);
      }, msInSeconds(waitSeconds));
    }
    return () => clearTimeout(timer);
  }, [delayedExecution, flags, setDelayedExecution, text, updateFlags, deleteKey]);

  useEffect(() => {
    renderNextPage();
  }, [renderNextPage]);

  return (
    <Fragment>
      <div className="loader mb-6"></div>
      <div>
        {flags.input && !flags.reconnected ? text.please_wait_connect : text.please_wait}
      </div>
    </Fragment>
  );
};

export default WaitingPage;