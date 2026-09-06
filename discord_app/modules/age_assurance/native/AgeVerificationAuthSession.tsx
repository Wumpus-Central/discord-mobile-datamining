// === Module 8425: AgeVerificationAuthSession ===

// Module 8425 (AgeVerificationAuthSession)
import LoggerDefault from "Logger" /* 3 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function discard() {
  if (_null != null) {
    _null.remove();
  }
  _null = null;
  closure_6.setState({ isOpen: false });
  c7 = false;
}
let closure_10 = async function _openAgeVerificationAuthSession(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          if (obj7.isIOS()) {
            (function subscribeToFinish() {
              if (_null != null) {
                _null.remove();
              }
              _null = new closure_1_3(closure_1_4).addListener("authSessionDidFinish", () => {
                if (_null != null) {
                  _null.remove();
                }
                _null = null;
                state.setState({ isOpen: false });
              });
            })();
            state.setState({ isOpen: true });
            c7 = true;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj1 = { value: BrowserManager.openAuthSessionURL(closure_0), done: false };
            return obj1;
          } else {
            c6 = 3;
            return { value: false, done: true };
          }
          obj7 = PlatformUtils;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const obj2 = { error: closure_129_1 };
        closure_130_5.warn("Failed to open the verification auth session", obj2);
        closure_130_9();
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_129_0 = value;
        if (!closure_129_0) {
          closure_130_9();
        }
        c4 = 0;
        c6 = 3;
        obj = { value: closure_129_0, done: true };
        return obj;
      }
    } catch (tmp27) {
      closure_3 = tmp27;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp27;
      } else {
        c5 = tmp;
      }
    }
  }
};
get_ActivityIndicator = fn(17);
const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const BrowserManager = get_ActivityIndicator.NativeModules.BrowserManager;
let closure_5 = new LoggerDefault("AgeVerificationAuthSession");
const module_560 = fn(560);
let closure_6 = module_560.create(() => ({ isOpen: false }));
let c7 = false;
let c8 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationAuthSession.tsx");

export const openAgeVerificationAuthSession = function openAgeVerificationAuthSession() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const closeAgeVerificationAuthSession = function closeAgeVerificationAuthSession() {
  if (c8 != null) {
    obj2.remove();
  }
  c8 = null;
  closure_6.setState({ isOpen: false });
  c7 = false;
  if (closure_6.getState().isOpen) {
    BrowserManager.closeAuthSession();
  }
  obj2 = c8;
};
export function getIsAgeVerificationAuthSessionAwaitingResult() {
  return c7;
}
export const useIsAgeVerificationAuthSessionOpen = function useIsAgeVerificationAuthSessionOpen() {
  return closure_6((isOpen) => isOpen.isOpen);
};
export const getIsAgeVerificationAuthSessionOpen = function getIsAgeVerificationAuthSessionOpen() {
  return closure_6.getState().isOpen;
};