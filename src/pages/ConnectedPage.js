import { useState, useEffect, Fragment } from "react";

import Button from "../components/Button";
import { workingCodes, Time, formatTime, msInMinutes, calculateRemainingTime } from '../components/Utils';
import LocalStorage from "../components/LocalStorage";

const ConnectedPage = ({ state }) => {
  const { text, flags, updateFlags } = state;
  const { save, load } = LocalStorage();
  const [data, setData] = useState(false);
  const currentTime = Time();

  const accessCode = flags.input;
  const foundCode = workingCodes.find(access => access.code === parseInt(accessCode, 10));
  const plan = { minutes: foundCode ? foundCode.minutes : 0 };
  plan.duration = msInMinutes(plan.minutes);

  const [user, setUser] = useState({
    timestamp: Date.now(),
    plan
  });
  const updateUser = (value) => setUser((prevUser => ({ ...prevUser, ...value })));
  const updateData = (value) => setData((prevData => ({ ...prevData, ...value })));

  const [remainingTime, updateRemainingTime] = useState(user.plan.duration);

  useEffect(() => {
    updateRemainingTime(calculateRemainingTime(user.plan.minutes, currentTime, user.timestamp));
    if (data && (data.user.timestamp + data.user.plan.duration <= Date.now())) handleExpire();
  }, [currentTime]);

  useEffect(() => {
    if (!flags.disconnected) {
      const loadedData = load();

      if (!data) {
        if (loadedData) {
          if (flags.reconnected) updateFlags({ ...loadedData.flags, reconnected: true });
          else updateFlags({ ...loadedData.flags });
          updateUser({ ...loadedData.user });
          updateData(loadedData);
        } else {
          updateData({ flags, user });
        }
      } else {
        save(data);
      }
    }
  }, [flags, user, data, flags.disconnected]);

  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => setDisplay(!display);
  const handleDisconnect = () => updateFlags({ input: '', waiting: true, disconnected: true });
  const handleExpire = () => updateFlags({ input: '', waiting: true, expired: true });

  return (
    <Fragment>
      <div className="mb-2 text-xl"> {!flags.reconnected ? text.connected.success : text.reconnected.welcome} </div>
      <div className="mb-4">{!flags.reconnected ? text.connected.details : text.reconnected.details}</div>

      <div className='flex w-10/12 sm:w-6/12 justify-between text-left flex-wrap mb-2'>
        <div>{text.connected.duration}: </div>
        <div className="text-orange-300">{user.plan.minutes} {user.plan.minutes > 1 ? text.connected.time.minutes : text.connected.time.minute}</div>
      </div>

      {remainingTime !== user.plan.duration &&
        <Fragment>
          <div className='flex w-10/12 sm:w-6/12 justify-between text-left flex-wrap mb-4'>
            <div>{text.connected.remaining_time}: </div>
            <div className="text-orange-300">{formatTime(remainingTime)}</div>
          </div>
          {
            !display
              ? <Button onClick={toggleDisplay} label={text.connected.expire} labelDisabled={text.loading} />
              :
              <div>
                {text.connected.confirm_label}
                <div className="flex-center pt-2">
                  <Button onClick={toggleDisplay} label={text.connected.cancel} labelDisabled={text.loading} alt={true} />
                  <Button onClick={handleDisconnect} label={text.connected.confirm} labelDisabled={text.loading} />
                </div>
              </div>
          }
        </Fragment>
      }
    </Fragment>
  );
};

export default ConnectedPage;
