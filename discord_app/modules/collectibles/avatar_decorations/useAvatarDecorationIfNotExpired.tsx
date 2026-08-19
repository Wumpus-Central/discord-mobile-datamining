// === Module 8410: useAvatarDecorationIfNotExpired ===

// Module 8410 (useAvatarDecorationIfNotExpired)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { MAX_TIMEOUT_MS } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default function useAvatarDecorationIfNotExpired(arg0) {
  closure_0 = arg0;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  callback = tmp[1];
  React = React.useRef(null);
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeScheduleExpirationCheck(arg0) {
      if (null != maybeScheduleExpirationCheck) {
        if ("expiresAt" in maybeScheduleExpirationCheck) {
          if (null != maybeScheduleExpirationCheck.expiresAt) {
            const result = maybeScheduleExpirationCheck(first[3]).isAvatarDecorationExpired(maybeScheduleExpirationCheck);
            closure_1_2(result);
            const _Date = Date;
            const result1 = 1000 * maybeScheduleExpirationCheck.expiresAt;
            const diff = result1 - Date.now();
            if (!result) {
              if (0 < diff) {
                const timeout = new maybeScheduleExpirationCheck(first[4]).Timeout();
                const _Math = Math;
                timeout.start(Math.min(MAX_TIMEOUT_MS, diff), () => {
                  callback();
                });
                closure_1_3.current = timeout;
              }
            }
            const obj = maybeScheduleExpirationCheck(first[3]);
          }
        }
      }
      closure_1_2(false);
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
  const effect1 = React.useEffect(() => {
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