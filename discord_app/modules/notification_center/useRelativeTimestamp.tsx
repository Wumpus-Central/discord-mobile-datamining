// === Module 15301: useRelativeTimestamp ===

// Module 15301 (useRelativeTimestamp)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = callback(React.useState(() => timestamp(4967).getRelativeTimestamp(timestamp, flag)), 2);
  closure_2 = tmp[1];
  const items = [timestamp, flag];
  const effect = React.useEffect(() => {
    dependencyMap(timestamp(4967).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(687).Millis.DAY) {
      if (diff >= flag(687).Millis.HOUR) {
        let MINUTE = flag(687).Millis.HOUR;
      } else {
        MINUTE = flag(687).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        callback2(callback(closure_1_2[2]).getRelativeTimestamp(callback, closure_1));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(4967);
  }, items);
  return tmp[0];
};