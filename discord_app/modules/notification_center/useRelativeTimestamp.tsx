// discord_app/modules/notification_center/useRelativeTimestamp.tsx
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  closure_2 = undefined;
  const tmp = callback(React.useState(() => timestamp(7386).getRelativeTimestamp(timestamp, flag)), 2);
  closure_2 = tmp[1];
  const items = [timestamp, flag];
  const effect = React.useEffect(() => {
    dependencyMap(timestamp(7386).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(687).Millis.DAY) {
      if (diff >= tmp4(687).Millis.HOUR) {
        let MINUTE = tmp4(687).Millis.HOUR;
      } else {
        MINUTE = tmp4(687).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        callback2(callback(closure_1_2[2]).getRelativeTimestamp(callback, closure_1));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(7386);
  }, items);
  return tmp[0];
};