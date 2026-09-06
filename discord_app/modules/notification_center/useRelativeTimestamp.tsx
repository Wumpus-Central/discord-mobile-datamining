// === Module 16036: useRelativeTimestamp ===

// Module 16036 (useRelativeTimestamp)
import NotificationCenterUtils from "NotificationCenterUtils" /* 7641 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(() => NotificationCenterUtils.getRelativeTimestamp(timestamp, flag)), 2);
  dependencyMap = tmp[1];
  const items = [timestamp, flag];
  const effect = noop.useEffect(() => {
    dependencyMap(timestamp(7641).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(1090).Millis.DAY) {
      if (diff >= flag(1090).Millis.HOUR) {
        let MINUTE = flag(1090).Millis.HOUR;
      } else {
        MINUTE = flag(1090).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        dependencyMap(timestamp(7641).getRelativeTimestamp(closure_0, flag));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(7641);
  }, items);
  return tmp[0];
};