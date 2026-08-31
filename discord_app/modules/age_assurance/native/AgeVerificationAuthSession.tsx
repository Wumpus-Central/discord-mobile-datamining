// === Module 8664: discard ===

// Module 8664 (discard)
import timestampDefault from "timestamp" /* 3 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import keys from "keys" /* 644 */;

const require = arg1;
function discard() {
  if (c8 != null) {
    c8.remove();
  }
  c8 = null;
  store.setState({ isOpen: false });
  c7 = false;
}
function _openAgeVerificationAuthSession() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (state === 2) {
        state = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          state = 2;
          if (0 === logger) {
            if (arg0 === 1) {
              state = 3;
              throw arg1;
            } else if (arg0 === 2) {
              state = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              let callback;
              if (obj7.isIOS()) {
                (function subscribeToFinish() {
                  if (closure_8 != null) {
                    closure_8.remove();
                  }
                  closure_8 = new closure_3(c4).addListener("authSessionDidFinish", () => {
                    if (c8 != null) {
                      c8.remove();
                    }
                    c8 = null;
                    state.setState({ isOpen: false });
                  });
                })();
                state.setState({ isOpen: true });
                c7 = true;
                c4 = 1;
                logger = 2;
                state = 1;
                obj1 = { value: null, done: false };
                obj1[0] = c4.openAuthSessionURL(tmp35);
                return obj1;
              } else {
                state = 3;
                return { value: false, done: true };
              }
              obj7 = callback(closure_1_1[4]);
              tmp35 = callback;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_1 = closure_3;
            const obj2 = { error: null };
            obj2[0] = closure_1;
            logger.warn("Failed to open the verification auth session", obj2);
            callback2();
            state = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            state = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            state = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            callback = arg1;
            if (!callback) {
              callback2();
            }
            c4 = 0;
            state = 3;
            obj = { value: null, done: true };
            obj[0] = callback;
            return obj;
          }
        } catch (tmp27) {
          closure_3 = tmp27;
          if (tmp4 === c4) {
            state = tmp2;
            throw tmp27;
          } else {
            logger = tmp;
          }
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const BrowserManager = get_ActivityIndicator.NativeModules.BrowserManager;
let closure_5 = new timestampDefault("AgeVerificationAuthSession");
let closure_6 = keys.create(() => ({ isOpen: false }));
let c7 = false;
let c8 = null;
const tmp3 = new timestampDefault("AgeVerificationAuthSession");
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationAuthSession.tsx");

export const openAgeVerificationAuthSession = function openAgeVerificationAuthSession(webviewUrl) {
  const self = this;
  const apply = _openAgeVerificationAuthSession.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const closeAgeVerificationAuthSession = function closeAgeVerificationAuthSession() {
  if (c8 != null) {
    c8.remove();
  }
  c8 = null;
  store.setState({ isOpen: false });
  c7 = false;
  if (store.getState().isOpen) {
    BrowserManager.closeAuthSession();
  }
};
export function getIsAgeVerificationAuthSessionAwaitingResult() {
  return c7;
}
export const useIsAgeVerificationAuthSessionOpen = function useIsAgeVerificationAuthSessionOpen() {
  return store((isOpen) => isOpen.isOpen);
};
export const getIsAgeVerificationAuthSessionOpen = function getIsAgeVerificationAuthSessionOpen() {
  return store.getState().isOpen;
};