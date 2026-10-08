// === Module 8359: useAvatarDecorationIfNotExpired ===

// Module 8359 (useAvatarDecorationIfNotExpired)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1984 */;
import Timers from "Timers" /* 2058 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const MAX_TIMEOUT_MS = fn(1085).MAX_TIMEOUT_MS;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAvatarDecorationIfNotExpired(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  [first, _slicedToArray] = noop.useState(false);
  noop = noop.useRef(null);
  if (cResult[0] !== arg0) {
    const fn = function s() {
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
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  if (cResult[3] !== first) {
    const fn2 = function l() {
      if (first) {
        const current = ref.current;
        if (current != null) {
          current.stop();
        }
      }
    };
    const items1 = [first];
    cResult[3] = first;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp8 = items1;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const effect1 = obj2.useEffect(tmp7, tmp8);
  let tmp10;
  if (!first) {
    tmp10 = arg0;
  }
  return tmp10;
}) : (function useAvatarDecorationIfNotExpired(arg0) {
  closure_0 = arg0;
  [first, _slicedToArray] = noop.useState(false);
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
});