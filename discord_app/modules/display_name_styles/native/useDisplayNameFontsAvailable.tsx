// discord_app/modules/display_name_styles/native/useDisplayNameFontsAvailable.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeOnDemandResourceModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeOnDemandResourceModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function isAvailable() {
  if (hasOnDemandResourceResult == null) {
    const isIOSResult = PlatformUtils.isIOS();
    hasOnDemandResourceResult = !isIOSResult;
    if (isIOSResult) {
      hasOnDemandResourceResult = NativeOnDemandResourceModuleDefault.hasOnDemandResource(fonts);
    }
  }
  return hasOnDemandResourceResult;
}
function load() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _load() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          if (!isAvailable()) {
            if (!c9) {
              c9 = true;
              closure_128_0 = false;
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: NativeOnDemandResourceModuleDefault.fetchOnDemandResource(fonts), done: false };
              return obj5;
            }
          }
          c4 = 3;
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
          closure_128_0 = false;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          c2 = 0;
        }
        closure_129_9 = false;
        if (!closure_128_0) {
          (function retryWhenActive() {
            if (!c10) {
              c10 = true;
              closure_0 = closure_6.addEventListener("change", (event) => {
                if ("active" === event) {
                  closure_0.remove();
                  c10 = false;
                  closure_2_12();
                }
              });
            }
          })();
        }
      }
      closure_129_3 = true;
      const item = closure_129_8.forEach((fn) => fn());
    } catch (tmp20) {
      if (tmp4 === c2) {
        c4 = tmp2;
        throw tmp20;
      } else {
        c3 = tmp;
      }
    }
  }
};
function subscribe(arg0) {
  closure_0 = arg0;
  set.add(arg0);
  load();
  return () => {
    set.delete(closure_0);
  };
}
const useSyncExternalStore = fn(19).useSyncExternalStore;
const AppState = fn(17).AppState;
const fonts = "fonts";
const set = new Set();
let c9 = false;
let c10 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/useDisplayNameFontsAvailable.tsx");

export function useDisplayNameFontsAvailable() {
  return useSyncExternalStore(subscribe, isAvailable);
}
