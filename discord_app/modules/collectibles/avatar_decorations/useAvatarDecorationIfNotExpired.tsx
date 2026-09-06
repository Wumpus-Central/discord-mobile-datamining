// === Module 8258: useAvatarDecorationIfNotExpired ===

// Module 8258 (useAvatarDecorationIfNotExpired)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1881 */;
import Timers from "Timers" /* 4447 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const MAX_TIMEOUT_MS = fn(1074).MAX_TIMEOUT_MS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default function useAvatarDecorationIfNotExpired(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  _slicedToArray = tmp[1];
  noop = noop.useRef(null);
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function maybeScheduleExpirationCheck() {
      if (null != maybeScheduleExpirationCheck) {
        if ("expiresAt" in maybeScheduleExpirationCheck) {
          if (null != maybeScheduleExpirationCheck.expiresAt) {
            const result = AvatarDecorationUtils.isAvatarDecorationExpired(maybeScheduleExpirationCheck);
            closure_2(result);
            const _Date = Date;
            const result1 = 1000 * maybeScheduleExpirationCheck.expiresAt;
            const diff = result1 - Date.now();
            if (!result) {
              if (0 < diff) {
                const timeout = new Timers.Timeout();
                const _Math = Math;
                timeout.start(Math.min(MAX_TIMEOUT_MS, diff), () => {
                  maybeScheduleExpirationCheck();
                });
                closure_3.current = timeout;
              }
            }
          }
        }
      }
      closure_2(false);
    }
    let result = maybeScheduleExpirationCheck();
    return () => {
      const current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    };
  }, items);
  const items1 = [first];
  const effect1 = noop.useEffect(() => {
    if (first) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
    }
  }, items1);
  let tmp5;
  if (!first) {
    tmp5 = arg0;
  }
  return tmp5;
};