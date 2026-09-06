// discord_app/modules/notification_center/useRelativeTimestamp.tsx
import NotificationCenterUtils from "NotificationCenterUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(
    noop.useState(() => NotificationCenterUtils.getRelativeTimestamp(timestamp, flag)),
    2,
  );
  dependencyMap = tmp[1];
  const items = [timestamp, flag];
  const effect = noop.useEffect(() => {
    dependencyMap(timestamp(7641).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(1090).Millis.DAY) {
      if (diff >= tmp4(1090).Millis.HOUR) {
        let MINUTE = tmp4(1090).Millis.HOUR;
      } else {
        MINUTE = tmp4(1090).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(
        () => {
          dependencyMap(timestamp(7641).getRelativeTimestamp(closure_0, flag));
        },
        MINUTE,
        MINUTE - (diff % MINUTE),
      );
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(7641);
  }, items);
  return tmp[0];
};
