// discord_app/modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_5 = fn(9152).SECURE_FRAMES_PUBLIC_KEY_VERSION;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx");

export const useIsPersistentSecureFramesFingerprint = function useIsPersistentSecureFramesFingerprint(userId) {
  userId = userId.userId;
  const userKey = userId.userKey;
  _slicedToArray = undefined;
  noop = undefined;
  const loading = _slicedToArray(noop.useState(true), 2);
  asyncGeneratorStep = loading[1];
  [tmp3, c3] = _slicedToArray(noop.useState(false), 2);
  const isOtherUserKeyPersistent = _slicedToArray(noop.useState(false), 2);
  noop = isOtherUserKeyPersistent[1];
  closure_0 = asyncGeneratorStep(async (arg0, arg1) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp8;
            closure_130_0 = closure_0;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_2(true);
            c5 = 2;
            closure_130_2 = callback;
            c6 = 3;
            c7 = 1;
            let obj1 = { value: closure_0(userKey[4]).isCurrentUserPublicKeyMatch(callback), done: false };
            return obj1;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_2(false);
          throw tmp51;
        } else {
          if (2 === tmp8) {
            c5 = 1;
            tmp4(false);
            tmp51(false);
            c5 = 0;
            closure_2(false);
            c7 = 3;
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_2(false);
              c7 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_130_3 = value;
              obj1 = closure_0(userKey[4]);
              c6 = 4;
              c7 = 1;
              const obj3 = { value: obj1.isPublicKeyMatch(closure_130_0, closure_130_1, closure_130_2), done: false };
              return obj3;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_4 = value;
            tmp4(closure_130_3);
            tmp51(closure_130_4);
            c5 = 1;
          }
          c5 = 0;
          closure_2(false);
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp51) {
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
  });
  const callback = noop.useCallback(function () {
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
  const effect = noop.useEffect(() => {
    if (null == userKey) {
      _undefined(false);
      closure_4(false);
      closure_2(false);
    } else {
      callback(closure_0, tmp);
    }
  }, items);
  return { loading: loading[0], isCurrentUserKeyPersistent, isOtherUserKeyPersistent: isOtherUserKeyPersistent[0] };
};
