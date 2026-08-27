// === Module 8039: useAvatarDecorationIfNotExpired ===

// Module 8039 (useAvatarDecorationIfNotExpired)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { MAX_TIMEOUT_MS } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default function useAvatarDecorationIfNotExpired(arg0) {
  closure_0 = arg0;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  callback = tmp[1];
  React = React.useRef(null);
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeScheduleExpirationCheck() {
      if (null != maybeScheduleExpirationCheck) {
        if ("expiresAt" in tmp) {
          if (null != tmp.expiresAt) {
            const result = maybeScheduleExpirationCheck(first[3]).isAvatarDecorationExpired(tmp);
            closure_1_2(result);
            const _Date = Date;
            const result1 = 1000 * tmp.expiresAt;
            const diff = result1 - Date.now();
            if (!result) {
              if (0 < diff) {
                const timeout = new tmp3(tmp4[4]).Timeout();
                const _Math = Math;
                timeout.start(Math.min(closure_2_4, diff), () => {
                  callback();
                });
                closure_1_3.current = timeout;
              }
            }
            const obj = maybeScheduleExpirationCheck(first[3]);
            tmp3 = maybeScheduleExpirationCheck;
            tmp4 = first;
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