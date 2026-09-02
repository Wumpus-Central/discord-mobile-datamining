// === Module 8710: withTimeout ===

// Module 8710 (withTimeout)
import timestampDefault from "timestamp" /* 3 */;
import enforcingDefault from "enforcing" /* 4444 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import keys from "keys" /* 641 */;

const require = arg1;
function withTimeout(arg0) {
  closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    closure_1 = arg1;
    const timeout = setTimeout(() => {
      error = new Error("Custom Tab launch timed out");
      return callback2(error);
    }, 5000);
    arg0.then((arg0) => {
      clearTimeout(closure_2);
      callback(arg0);
    }, (arg0) => {
      clearTimeout(closure_2);
      callback2(arg0);
    });
  });
}
function subscribeToClose() {
  if (closure_8 != null) {
    closure_8.remove();
  }
  closure_8 = enforcingDefault.onTrackedCustomTabClosed(() => {
    if (c8 != null) {
      c8.remove();
    }
    c8 = null;
    state.setState({ isOpen: false, copy: null });
  });
}
function _openAgeVerificationCustomTab() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          if (0 === state) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              let callback;
              if (obj9.isAndroid()) {
                closure_1_9();
                c7 = true;
                obj1 = { isOpen: true, copy: null };
                obj1[1] = tmp38;
                state.setState(obj1);
                let v0 = 1;
                let obj4 = callback2(tmp40[3]);
                state = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = v0(obj4.openTrackedCustomTab(tmp37));
                return obj2;
              } else {
                c7 = 3;
                return { value: false, done: true };
              }
              obj9 = callback(closure_1_2[4]);
              tmp37 = callback;
              tmp38 = callback2;
              tmp40 = closure_1_2;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            callback2 = logger;
            const obj3 = { error: null };
            obj3[0] = callback2;
            logger.warn("Failed to open the verification Custom Tab", obj3);
            callback3();
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            c7 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            callback = arg1;
            if (!callback) {
              callback3();
            }
            v0 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = callback;
            return obj;
          }
        } catch (tmp29) {
          logger = tmp29;
          if (tmp4 === v0) {
            c7 = tmp2;
            throw tmp29;
          } else {
            state = tmp;
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
function _resumeAgeVerificationCustomTab() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        v0 = 2;
        if (0 === logger) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            if (obj7.isAndroid()) {
              if (!closure_1_13()) {
                c3 = 1;
                let obj2 = closure_1_1(tmp32[3]);
                logger = 2;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = v0(obj2.resumeTrackedCustomTab());
                return obj1;
              }
            }
            obj7 = closure_1_0(closure_1_2[4]);
            tmp32 = closure_1_2;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_0 = closure_2;
            obj2 = { error: null };
            obj2[0] = closure_0;
            logger.warn("Failed to resume the verification Custom Tab", obj2);
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            if (arg1) {
              callback();
              c7 = true;
              state.setState({ isOpen: true });
              c3 = 0;
            } else {
              c3 = 0;
              v0 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c3 = 0;
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0 = 3;
      } catch (tmp23) {
        closure_2 = tmp23;
        if (tmp4 === c3) {
          v0 = tmp2;
          throw tmp23;
        } else {
          logger = tmp;
        }
      }
    }
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function releaseAgeVerificationCustomTab() {
  if (c8 != null) {
    c8.remove();
  }
  c8 = null;
  c7 = false;
  store.setState({ isOpen: false, copy: null });
}
function getIsAgeVerificationCustomTabOpen() {
  return store.getState().isOpen;
}
let closure_4 = new timestampDefault("AgeVerificationCustomTab");
let closure_6 = keys.create(() => ({ isOpen: false, copy: null }));
let c7 = false;
let c8 = null;
const tmp2 = new timestampDefault("AgeVerificationCustomTab");
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationCustomTab.tsx");

export const openAgeVerificationCustomTab = function openAgeVerificationCustomTab(webviewUrl, externalWindow) {
  const self = this;
  const apply = _openAgeVerificationCustomTab.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resumeAgeVerificationCustomTab = function resumeAgeVerificationCustomTab() {
  const self = this;
  const apply = _resumeAgeVerificationCustomTab.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setAgeVerificationCustomTabCopy = function setAgeVerificationCustomTabCopy(arg0) {
  let obj = store;
  if (store.getState().isOpen) {
    obj = { copy: null };
    obj[0] = arg0;
    obj.setState(obj);
  }
};
export { releaseAgeVerificationCustomTab };
export function getIsAgeVerificationCustomTabAwaitingResult() {
  return c7;
}
export const useIsAgeVerificationCustomTabOpen = function useIsAgeVerificationCustomTabOpen() {
  return store((isOpen) => isOpen.isOpen);
};
export const useAgeVerificationCustomTabCopy = function useAgeVerificationCustomTabCopy() {
  return store((copy) => copy.copy);
};
export { getIsAgeVerificationCustomTabOpen };