import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("getRelativeTimestamp").fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  let closure_2;
  const tmp = callback(React.useState(() => timestamp(5931).getRelativeTimestamp(timestamp, flag)), 2);
  closure_2 = tmp[1];
  const items = [timestamp, flag];
  const effect = React.useEffect(() => {
    dependencyMap(timestamp(5931).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(687).Millis.DAY) {
      if (diff >= tmp4(687).Millis.HOUR) {
        let MINUTE = tmp4(687).Millis.HOUR;
      } else {
        MINUTE = tmp4(687).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        callback2(callback(outer1_2[2]).getRelativeTimestamp(callback, closure_1));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(5931);
  }, items);
  return tmp[0];
};