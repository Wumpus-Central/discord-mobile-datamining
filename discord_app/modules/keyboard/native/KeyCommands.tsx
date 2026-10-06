// discord_app/modules/keyboard/native/KeyCommands.tsx
import react from "../../../../_runtime/00019_react.js";
import react_native_mod from "../../../../discord_common/js/packages/rtn-codegen/js/NativeKeyCommandsModule.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, map;

const f91030 = () => {
  c5 = false;
  map = new Map();
  for (const item10012 of closure_1_4) {
    let result = map.set(item10012.eventName, item10012);
    continue;
  }
  items = [...map.values()];
  const obj2 = closure_1_1(closure_1_2[1]);
  obj2.setKeyCommands(items.map(closure_1_7));
};
function toNativeKeyCommand(eventName) {
  return {
    eventName: eventName.eventName,
    input: eventName.input,
    modifierFlags: eventName.modifierFlags,
    discoverabilityTitle: eventName.discoverabilityTitle,
  };
}
function registerKeyCommand(arg0) {
  const items = [];
  items[HermesBuiltin.arraySpread(items, closure_4, 0)] = arg0;
  closure_4 = items;
  if (null == closure_6) {
    const obj = react_native;
    closure_6 = obj.onKeyCommand((eventName) => {
      let diff = items.length - 1;
      if (0 <= diff) {
        while (true) {
          let obj = items[diff];
          if (obj.eventName === eventName.eventName) {
            if (obj.onKeyCommand(eventName)) {
              break;
            }
          }
          diff = diff - 1;
        }
      }
    });
  }
  const tmp4 = c5;
  if (!tmp4) {
    c5 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(f91030);
  }
}
function unregisterKeyCommand(arg0) {
  let closure_0 = arg0;
  closure_4 = closure_4.filter((item) => item !== closure_0);
  const tmp = c5;
  if (!tmp) {
    c5 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(f91030);
  }
}
let react_native = react_native_mod;
let closure_4 = [];
let c5 = false;
let closure_6 = null;
react_native = react_native.getConstants();
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      let tmp3;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] !== arg0) {
        const fn = function i() {
          let tmp2 = closure_0[Symbol.iterator]();
          while (tmp2 !== undefined) {
            let tmp5 = registerKeyCommand(tmp3);
            continue;
          }
          return () => {
            const tmp2 = closure_1_0[Symbol.iterator]();
            while (tmp2 !== undefined) {
              let tmp5 = unregisterKeyCommand(tmp3);
              continue;
            }
          };
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      const effect = react.useEffect(() => {
        let tmp2 = closure_0[Symbol.iterator]();
        while (tmp2 !== undefined) {
          let tmp5 = registerKeyCommand(tmp3);
          continue;
        }
        return () => {
          const tmp2 = closure_1_0[Symbol.iterator]();
          while (tmp2 !== undefined) {
            let tmp5 = unregisterKeyCommand(tmp3);
            continue;
          }
        };
      }, items);
    };
let result = size.fileFinishedImporting("modules/keyboard/native/KeyCommands.tsx");

export const KeyModifierFlags = react_native;
export const KeyInputs = { ESCAPE: "UIKeyInputEscape" };
export const subscribeKeyCommand = function subscribeKeyCommand(arg0) {
  let closure_0 = arg0;
  let items = [];
  items[HermesBuiltin.arraySpread(items, items, 0)] = arg0;
  if (null == closure_6) {
    let obj = react_native;
    closure_6 = obj.onKeyCommand((eventName) => {
      let diff = items.length - 1;
      if (0 <= diff) {
        while (true) {
          let obj = items[diff];
          if (obj.eventName === eventName.eventName) {
            if (obj.onKeyCommand(eventName)) {
              break;
            }
          }
          diff = diff - 1;
        }
      }
    });
  }
  const tmp4 = c5;
  if (!tmp4) {
    c5 = true;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(f91030);
  }
  return () => {
    items = items.filter((item) => item !== closure_0);
    const tmp = c5;
    if (!tmp) {
      c5 = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(f91030);
    }
  };
};
export const useKeyCommands = tmp3;
