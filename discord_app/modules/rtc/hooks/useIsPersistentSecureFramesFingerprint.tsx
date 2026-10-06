// === Module 9388: useIsPersistentSecureFramesFingerprint ===

// Module 9388 (useIsPersistentSecureFramesFingerprint)
import SecureFramesConstants from "SecureFramesConstants" /* 9380 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_2;

let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_5 = SecureFramesConstants.SECURE_FRAMES_PUBLIC_KEY_VERSION;
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx");

export const useIsPersistentSecureFramesFingerprint = function useIsPersistentSecureFramesFingerprint(userId) {
  let _undefined;
  let c3;
  let closure_4;
  let isOtherUserKeyPersistent;
  let loading;
  let tmp4;
  userId = userId.userId;
  const userKey = userId.userKey;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  [loading, _asyncToGenerator] = react.useState(true);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, c3] = tmp3;
  [isOtherUserKeyPersistent, react] = react.useState(false);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
    let closure_3;
    let obj2;
    let obj5;
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let tmp47;
      let c5;
      try {
        let tmp;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = undefined;
            tmp = undefined;
            tmp47 = undefined;
            closure_2(true);
            c5 = 2;
            closure_2 = callback;
            c6 = 3;
            c7 = 1;
            const obj6 = { value: obj5.isCurrentUserPublicKeyMatch(callback), done: false };
            obj5 = closure_0(userKey[4]);
            return obj6;
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_2(false);
          throw tmp47;
        } else {
          if (2 === c6) {
            c5 = 1;
            tmp(false);
            tmp47(false);
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_2(false);
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              tmp = value;
              c6 = 4;
              c7 = 1;
              const obj8 = { value: obj2.isPublicKeyMatch(closure_0, closure_1, closure_2), done: false };
              obj2 = closure_0(userKey[4]);
              return obj8;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_2(false);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp47 = value;
            tmp(tmp);
            tmp47(tmp47);
            c5 = 1;
          }
          c5 = 0;
          closure_2(false);
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp47) {
        if (0 === c5) {
          c7 = 3;
          throw tmp47;
        } else if (1 === tmp49) {
          c6 = 1;
        } else {
          c6 = 2;
        }
      }
    }
  });
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const items = [userKey, callback, userId];
  const effect = react.useEffect(() => {
    if (null == userKey) {
      _undefined(false);
      closure_4(false);
      closure_2(false);
    } else {
      callback(userId, tmp);
    }
  }, items);
  return { loading, isCurrentUserKeyPersistent, isOtherUserKeyPersistent };
};