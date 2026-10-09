// === Module 5372: KeyCommands ===

// Module 5372 (KeyCommands)
import noop from "module_19" /* 19 */;
import NativeKeyCommandsModule_mod from "NativeKeyCommandsModule" /* 5373 */;

const require = globalThis.__r;

const require = fn;
function toNativeKeyCommand(eventName) {
  return { eventName: eventName.eventName, input: eventName.input, modifierFlags: eventName.modifierFlags, discoverabilityTitle: eventName.discoverabilityTitle };
}
function registerKeyCommand(arg0) {
  const items = [];
  items[HermesBuiltin.arraySpread(closure_4, 0)] = arg0;
  closure_4 = items;
  if (null == closure_6) {
    closure_6 = NativeKeyCommandsModule.onKeyCommand((eventName) => {
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
  if (!c5) {
    c5 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c5 = false;
      const map = new Map();
      for (const item10012 of closure_1_4) {
        let result = map.set(item10012.eventName, item10012);
        continue;
      }
      items = [...map.values()];
      closure_1_1(closure_1_2[1]).setKeyCommands(items.map(closure_1_7));
    });
  }
}
function unregisterKeyCommand(arg0) {
  closure_0 = arg0;
  closure_4 = closure_4.filter((item) => item !== closure_0);
  if (!c5) {
    c5 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c5 = false;
      const map = new Map();
      for (const item10012 of closure_1_4) {
        let result = map.set(item10012.eventName, item10012);
        continue;
      }
      items = [...map.values()];
      closure_1_1(closure_1_2[1]).setKeyCommands(items.map(closure_1_7));
    });
  }
}
let NativeKeyCommandsModule = NativeKeyCommandsModule_mod;
let closure_4 = [];
let c5 = false;
let closure_6 = null;
NativeKeyCommandsModule = NativeKeyCommandsModule.getConstants();
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/KeyCommands.tsx");

export const KeyModifierFlags = NativeKeyCommandsModule;
export const KeyInputs = { ESCAPE: "UIKeyInputEscape" };
export const subscribeKeyCommand = function subscribeKeyCommand(arg0) {
  closure_0 = arg0;
  let items = [];
  items[HermesBuiltin.arraySpread(items, 0)] = arg0;
  if (null == closure_6) {
    closure_6 = NativeKeyCommandsModule.onKeyCommand((eventName) => {
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
  if (!c5) {
    c5 = true;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c5 = false;
      const map = new Map();
      for (const item10012 of closure_1_4) {
        let result = map.set(item10012.eventName, item10012);
        continue;
      }
      items = [...map.values()];
      closure_1_1(closure_1_2[1]).setKeyCommands(items.map(closure_1_7));
    });
  }
  return () => {
    items = items.filter((item) => item !== closure_0);
    if (!c5) {
      c5 = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        c5 = false;
        const map = new Map();
        for (const item10012 of closure_1_4) {
          let result = map.set(item10012.eventName, item10012);
          continue;
        }
        items = [...map.values()];
        closure_1_1(closure_1_2[1]).setKeyCommands(items.map(closure_1_7));
      });
    }
  };
};
export const useKeyCommands = ReactCompilerGating.isReactCompilerEnabled() ? (function useKeyCommands(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      while (tmp2 !== undefined) {
        let tmp5 = registerKeyCommand(tmp3);
        continue;
      }
      return () => {
        while (tmp2 !== undefined) {
          let tmp5 = unregisterKeyCommand(tmp3);
          continue;
        }
        tmp2 = dependencyMap[Symbol.iterator]();
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useKeyCommands(arg0) {
  dependencyMap = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    while (tmp2 !== undefined) {
      let tmp5 = registerKeyCommand(tmp3);
      continue;
    }
    return () => {
      while (tmp2 !== undefined) {
        let tmp5 = unregisterKeyCommand(tmp3);
        continue;
      }
      tmp2 = dependencyMap[Symbol.iterator]();
    };
  }, items);
});