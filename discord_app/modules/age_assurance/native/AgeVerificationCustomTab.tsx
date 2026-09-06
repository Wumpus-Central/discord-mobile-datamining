// discord_app/modules/age_assurance/native/AgeVerificationCustomTab.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeBrowserManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function withTimeout(arg0) {
  const promise = new Promise((arg0, arg1) => {
    closure_1 = arg1;
    const timeout = setTimeout(() => {
      const error = new Error("Custom Tab launch timed out");
      return closure_1(error);
    }, 5000);
    arg0.then(
      (result) => {
        clearTimeout(closure_2);
        closure_0(result);
      },
      (arg0) => {
        clearTimeout(closure_2);
        closure_1(arg0);
      },
    );
  });
  return promise;
}
function subscribeToClose() {
  if (_null != null) {
    _null.remove();
  }
  _null = NativeBrowserManagerModuleDefault.onTrackedCustomTabClosed(() => {
    if (_null != null) {
      _null.remove();
    }
    _null = null;
    state.setState({ isOpen: false, copy: null });
  });
}
let closure_10 = async function _openAgeVerificationCustomTab(arg0) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            if (obj9.isAndroid()) {
              subscribeToClose();
              c7 = true;
              const obj1 = { isOpen: true, copy };
              state.setState(obj1);
              c5 = 1;
              let obj4 = NativeBrowserManagerModuleDefault;
              c6 = 2;
              c7 = 1;
              const obj2 = { value: withTimeout(obj4.openTrackedCustomTab(closure_0)), done: false };
              return obj2;
            } else {
              c7 = 3;
              return { value: false, done: true };
            }
            obj9 = PlatformUtils;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_1 = closure_4;
          const obj3 = { error: closure_130_1 };
          closure_131_4.warn("Failed to open the verification Custom Tab", obj3);
          closure_131_12();
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_0 = value;
          if (!closure_130_0) {
            closure_131_12();
          }
          c5 = 0;
          c7 = 3;
          obj = { value: closure_130_0, done: true };
          return obj;
        }
      } catch (tmp29) {
        closure_4 = tmp29;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp29;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_11 = async function _resumeAgeVerificationCustomTab() {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          if (obj7.isAndroid()) {
            if (!getIsAgeVerificationCustomTabOpen()) {
              c3 = 1;
              let obj2 = NativeBrowserManagerModuleDefault;
              c4 = 2;
              c5 = 1;
              const obj1 = { value: withTimeout(obj2.resumeTrackedCustomTab()), done: false };
              return obj1;
            }
          }
          obj7 = PlatformUtils;
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_0 = closure_2;
          obj2 = { error: closure_128_0 };
          closure_129_4.warn("Failed to resume the verification Custom Tab", obj2);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            closure_129_9();
            closure_129_7 = true;
            closure_129_6.setState({ isOpen: true });
            c3 = 0;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
      c5 = 3;
    } catch (tmp23) {
      closure_2 = tmp23;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp23;
      } else {
        c4 = tmp;
      }
    }
  }
};
function releaseAgeVerificationCustomTab() {
  if (_null != null) {
    _null.remove();
  }
  _null = null;
  c7 = false;
  closure_6.setState({ isOpen: false, copy: null });
}
function getIsAgeVerificationCustomTabOpen() {
  return closure_6.getState().isOpen;
}
let closure_4 = new LoggerDefault("AgeVerificationCustomTab");
const module_560 = fn(560);
let closure_6 = module_560.create(() => ({ isOpen: false, copy: null }));
let c7 = false;
let c8 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationCustomTab.tsx");

export const openAgeVerificationCustomTab = function openAgeVerificationCustomTab() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resumeAgeVerificationCustomTab = function resumeAgeVerificationCustomTab() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setAgeVerificationCustomTabCopy = function setAgeVerificationCustomTabCopy(copy) {
  let obj = closure_6;
  if (closure_6.getState().isOpen) {
    obj = { copy };
    obj.setState(obj);
  }
};
export { releaseAgeVerificationCustomTab };
export function getIsAgeVerificationCustomTabAwaitingResult() {
  return c7;
}
export const useIsAgeVerificationCustomTabOpen = function useIsAgeVerificationCustomTabOpen() {
  return closure_6((isOpen) => isOpen.isOpen);
};
export const useAgeVerificationCustomTabCopy = function useAgeVerificationCustomTabCopy() {
  return closure_6((copy) => copy.copy);
};
export { getIsAgeVerificationCustomTabOpen };
