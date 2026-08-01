// === Module 8909: useIsPersistentSecureFramesFingerprint ===

// Module 8909 (useIsPersistentSecureFramesFingerprint)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import createRTCConnection from "createRTCConnection";
import { SECURE_FRAMES_PUBLIC_KEY_VERSION as closure_6 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx");

export const useIsPersistentSecureFramesFingerprint = function useIsPersistentSecureFramesFingerprint(userId) {
  let c3;
  let tmp4;
  userId = userId.userId;
  let _require = userId;
  let stateFromStores;
  let callback;
  let callback2;
  let React;
  callback = undefined;
  const items = [callback];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => callback.getSecureFramesRosterMapEntry(closure_0));
  const loading = callback2(React.useState(true), 2);
  callback = loading[1];
  let obj = _require(stateFromStores[5]);
  [tmp4, c3] = callback2(React.useState(false), 2);
  const isOtherUserKeyPersistent = callback2(React.useState(false), 2);
  React = isOtherUserKeyPersistent[1];
  _require = undefined;
  _require = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c3 = tmp4;
              let initialize = tmp8;
              initialize = undefined;
              c3 = undefined;
              let noop;
              outer1_2(true);
              let c5 = 2;
              initialize = outer2_6;
              c6 = 3;
              c7 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = callback(stateFromStores[6]).isCurrentUserPublicKeyMatch(outer2_6);
              return obj1;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            outer1_2(false);
            throw noop;
          } else {
            if (2 === tmp8) {
              c5 = 1;
              outer1_3(false);
              outer1_4(false);
              c5 = 0;
              outer1_2(false);
              c7 = 3;
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                outer1_2(false);
                c7 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                outer1_3 = arg1;
                obj1 = callback(stateFromStores[6]);
                c6 = 4;
                c7 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj1.isPublicKeyMatch(callback, closure_1, outer1_2);
                return obj3;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              noop = arg1;
              outer1_3(c3);
              outer1_4(noop);
              c5 = 1;
            }
            c5 = 0;
            outer1_2(false);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp51) {
          noop = tmp51;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp51;
          } else if (tmp2 === tmp53) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const items1 = [stateFromStores, callback, userId];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      _undefined(false);
      callback2(false);
      callback(false);
    } else {
      callback(closure_0, tmp);
    }
  }, items1);
  return { loading: loading[0], isCurrentUserKeyPersistent, isOtherUserKeyPersistent: isOtherUserKeyPersistent[0] };
};