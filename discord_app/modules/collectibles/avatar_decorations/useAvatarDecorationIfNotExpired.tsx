// === Module 7930: useAvatarDecorationIfNotExpired ===

// Module 7930 (useAvatarDecorationIfNotExpired)
import Constants from "Constants" /* 1085 */;
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1972 */;
import Timers from "Timers" /* 2046 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const MAX_TIMEOUT_MS = Constants.MAX_TIMEOUT_MS;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_2;
  let first;
  let ref;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(6);
  [first, _slicedToArray] = react.useState(false);
  react = react.useRef(null);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      function maybeScheduleExpirationCheck() {
        if (null != maybeScheduleExpirationCheck) {
          if ("expiresAt" in maybeScheduleExpirationCheck) {
            if (null != maybeScheduleExpirationCheck.expiresAt) {
              const obj = AvatarDecorationUtils;
              const result = obj.isAvatarDecorationExpired(maybeScheduleExpirationCheck);
              closure_2(result);
              const _Date = Date;
              const result1 = 1000 * maybeScheduleExpirationCheck.expiresAt;
              const diff = result1 - Date.now();
              if (!result) {
                if (0 < diff) {
                  const self = this;
                  const self2 = this;
                  const timeout = new Timers.Timeout();
                  const _Math = Math;
                  timeout.start(Math.min(MAX_TIMEOUT_MS, diff), () => {
                    maybeScheduleExpirationCheck();
                  });
                  ref.current = timeout;
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
    tmp5 = items;
    tmp4 = fn;
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
    tmp8 = items1;
    tmp7 = fn2;
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
}) : ((arg0) => {
  let closure_2;
  let first;
  let ref;
  let closure_0 = arg0;
  [first, _slicedToArray] = react.useState(false);
  react = react.useRef(null);
  const items = [arg0];
  const effect = react.useEffect(() => {
    function maybeScheduleExpirationCheck() {
      if (null != maybeScheduleExpirationCheck) {
        if ("expiresAt" in maybeScheduleExpirationCheck) {
          if (null != maybeScheduleExpirationCheck.expiresAt) {
            const obj = AvatarDecorationUtils;
            const result = obj.isAvatarDecorationExpired(maybeScheduleExpirationCheck);
            closure_2(result);
            const _Date = Date;
            const result1 = 1000 * maybeScheduleExpirationCheck.expiresAt;
            const diff = result1 - Date.now();
            if (!result) {
              if (0 < diff) {
                const self = this;
                const self2 = this;
                const timeout = new Timers.Timeout();
                const _Math = Math;
                timeout.start(Math.min(MAX_TIMEOUT_MS, diff), () => {
                  maybeScheduleExpirationCheck();
                });
                ref.current = timeout;
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
  const effect1 = react.useEffect(() => {
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
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default tmp2;