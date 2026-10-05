// discord_app/modules/age_assurance/native/AgeVerificationAuthSession.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react from "../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModuleIOS.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2, closure_3, closure_7, error, value;

function release() {
  obj = c7;
  if (c7 != null) {
    obj.remove();
  }
  c7 = null;
  closure_5.setState({ isOpen: false });
}
function discard() {
  obj = c7;
  if (c7 != null) {
    obj.remove();
  }
  c7 = null;
  closure_5.setState({ isOpen: false });
  c6 = false;
}
let obj = function _openAgeVerificationAuthSession() {
  let state;
  obj = _asyncToGenerator(async (value) => {
    let c5 = 0;
    c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj4;
      function subscribeToFinish() {
        obj = closure_7;
        if (closure_7 != null) {
          obj.remove();
        }
        const obj2 = error(closure_1_2[3]);
        closure_7 = obj2.onAuthSessionDidFinish(closure_1_8);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              error = tmp4;
              value = undefined;
              const obj8 = PlatformUtils;
              const tmp30 = value;
              if (obj8.isIOS()) {
                subscribeToFinish();
                state.setState({ isOpen: true });
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj4.openAuthSessionURL(tmp30, true), done: false };
                obj4 = react_nativeDefault;
                return obj5;
              } else {
                c6 = 3;
                return { value: false, done: true };
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            error = closure_3;
            const obj6 = { error };
            closure_130_4.warn("Failed to open the verification auth session", obj6);
            closure_130_9();
            c6 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const tmp6 = value;
            if (!tmp6) {
              closure_130_9();
            }
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp24) {
          closure_3 = tmp24;
          if (0 === c4) {
            c6 = 3;
            throw tmp24;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_4 = new LoggerDefault("AgeVerificationAuthSession");
new LoggerDefault("AgeVerificationAuthSession");
let closure_5 = module_570.create(() => ({ isOpen: false }));
let c6 = false;
let c7 = null;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isOpen) {
      return isOpen.isOpen;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_5(first);
}) : (() => closure_5((isOpen) => isOpen.isOpen));
function getIsAgeVerificationAuthSessionOpen() {
  return closure_5.getState().isOpen;
}
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationAuthSession.tsx");

export const openAgeVerificationAuthSession = function openAgeVerificationAuthSession() {
  return obj(...arguments);
};
export const closeAgeVerificationAuthSession = function closeAgeVerificationAuthSession() {
  const isOpen = closure_5.getState().isOpen;
  const obj2 = c7;
  if (c7 != null) {
    obj2.remove();
  }
  c7 = null;
  closure_5.setState({ isOpen: false });
  c6 = false;
  if (isOpen) {
    const obj3 = react_nativeDefault;
    obj3.closeAuthSession();
  }
};
export function getIsAgeVerificationAuthSessionAwaitingResult() {
  return c6;
}
export const useIsAgeVerificationAuthSessionOpen = tmp3;
export { getIsAgeVerificationAuthSessionOpen };