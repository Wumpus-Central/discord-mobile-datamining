// discord_app/modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { SECURE_FRAMES_PUBLIC_KEY_VERSION as closure_5 } from "../SecureFramesConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx");

export const useIsPersistentSecureFramesFingerprint = function useIsPersistentSecureFramesFingerprint(userId) {
  userId = userId.userId;
  closure_0 = userId;
  const userKey = userId.userKey;
  let callback;
  let callback2;
  let React;
  callback = undefined;
  const loading = callback2(React.useState(true), 2);
  callback = loading[1];
  [tmp3, c3] = callback2(React.useState(false), 2);
  const isOtherUserKeyPersistent = callback2(React.useState(false), 2);
  React = isOtherUserKeyPersistent[1];
  closure_0 = undefined;
  closure_0 = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
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
              c3 = tmp4;
              closure_2 = tmp8;
              closure_2 = undefined;
              c3 = undefined;
              closure_4 = undefined;
              closure_1_2(true);
              c5 = 2;
              closure_2 = callback;
              c6 = 3;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(userKey[4]).isCurrentUserPublicKeyMatch(callback);
              return obj1;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            closure_1_2(false);
            throw closure_4;
          } else {
            if (2 === tmp8) {
              c5 = 1;
              callback2(false);
              closure_1_4(false);
              c5 = 0;
              closure_1_2(false);
              c7 = 3;
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_1_2(false);
                c7 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                callback2 = arg1;
                obj1 = callback(userKey[4]);
                c6 = 4;
                c7 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj1.isPublicKeyMatch(callback, closure_1, closure_1_2);
                return obj3;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_4 = arg1;
              callback2(c3);
              closure_1_4(closure_4);
              c5 = 1;
            }
            c5 = 0;
            closure_1_2(false);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp51) {
          closure_4 = tmp51;
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
  callback = React.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const items = [userKey, callback, userId];
  const effect = React.useEffect(() => {
    if (null == userKey) {
      _undefined(false);
      callback2(false);
      callback(false);
    } else {
      callback(closure_0, tmp);
    }
  }, items);
  return { loading: loading[0], isCurrentUserKeyPersistent, isOtherUserKeyPersistent: isOtherUserKeyPersistent[0] };
};
