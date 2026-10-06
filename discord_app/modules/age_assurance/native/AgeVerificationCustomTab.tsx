// === Module 8133: AgeVerificationCustomTab ===

// Module 8133 (AgeVerificationCustomTab)
import LoggerDefault from "Logger" /* 3 */;
import react from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault from "react-native" /* 4858 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4, closure_2, closure_3;

function withTimeout(arg0) {
  const promise = new Promise((arg0, arg1) => {
    let closure_1 = arg1;
    const timeout = setTimeout(() => {
      const error = new Error("Custom Tab launch timed out");
      return closure_1(error);
    }, 5000);
    arg0.then((result) => {
      clearTimeout(closure_2);
      closure_0(result);
    }, (arg0) => {
      clearTimeout(closure_2);
      closure_1(arg0);
    });
  });
  return promise;
}
function subscribeToClose() {
  let state;
  obj = c8;
  if (c8 != null) {
    obj.remove();
  }
  const obj2 = react_nativeDefault;
  c8 = obj2.onTrackedCustomTabClosed(() => {
    obj = c8;
    if (c8 != null) {
      obj.remove();
    }
    c8 = null;
    state.setState({ isOpen: false, copy: null });
  });
}
let obj = function _openAgeVerificationCustomTab() {
  let state;
  obj = _asyncToGenerator(async (value, error) => {
    let c6 = 0;
    c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj5;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              value = undefined;
              const obj9 = PlatformUtils;
              const tmp32 = value;
              const tmp33 = error;
              if (obj9.isAndroid()) {
                subscribeToClose();
                const obj4 = { isOpen: true, copy: tmp33 };
                state.setState(obj4);
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj6 = { value: withTimeout(obj5.openTrackedCustomTab(tmp32)), done: false };
                obj5 = react_nativeDefault;
                return obj6;
              } else {
                c7 = 3;
                return { value: false, done: true };
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            error = closure_4;
            const obj7 = { error };
            closure_131_4.warn("Failed to open the verification Custom Tab", obj7);
            closure_131_12();
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const tmp6 = value;
            if (!tmp6) {
              closure_131_12();
            }
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp26) {
          closure_4 = tmp26;
          if (0 === c5) {
            c7 = 3;
            throw tmp26;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _resumeAgeVerificationCustomTab() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let error;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            error = tmp4;
            const obj7 = PlatformUtils;
            if (obj7.isAndroid()) {
              if (!getIsAgeVerificationCustomTabOpen()) {
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: withTimeout(obj3.resumeTrackedCustomTab()), done: false };
                obj3 = react_nativeDefault;
                return obj5;
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          error = closure_2;
          const obj6 = { error };
          logger.warn("Failed to resume the verification Custom Tab", obj6);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else if (value) {
          closure_129_9();
          c7 = true;
          state.setState({ isOpen: true });
          c3 = 0;
        } else {
          c3 = 0;
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c5 = 3;
          throw tmp20;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function releaseAgeVerificationCustomTab() {
  obj = c8;
  if (c8 != null) {
    obj.remove();
  }
  c8 = null;
  c7 = false;
  closure_6.setState({ isOpen: false, copy: null });
}
function getIsAgeVerificationCustomTabOpen() {
  return closure_6.getState().isOpen;
}
let closure_4 = new LoggerDefault("AgeVerificationCustomTab");
const tmp2 = new LoggerDefault("AgeVerificationCustomTab");
let closure_6 = module_570.create(() => ({ isOpen: false, copy: null }));
let c7 = false;
let c8 = null;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isOpen) {
      return isOpen.isOpen;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((isOpen) => isOpen.isOpen));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(copy) {
      return copy.copy;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((copy) => copy.copy));
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationCustomTab.tsx");

export const openAgeVerificationCustomTab = function openAgeVerificationCustomTab() {
  return obj(...arguments);
};
export const resumeAgeVerificationCustomTab = function resumeAgeVerificationCustomTab() {
  return obj(...arguments);
};
export const setAgeVerificationCustomTabCopy = function setAgeVerificationCustomTabCopy(copy) {
  if (closure_6.getState().isOpen) {
    const obj2 = { copy };
    closure_6.setState(obj2);
  }
};
export { releaseAgeVerificationCustomTab };
export function getIsAgeVerificationCustomTabAwaitingResult() {
  return c7;
}
export const useIsAgeVerificationCustomTabOpen = tmp3;
export const useAgeVerificationCustomTabCopy = tmp4;
export { getIsAgeVerificationCustomTabOpen };