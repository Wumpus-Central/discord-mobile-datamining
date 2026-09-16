// === Module 5056: KeyCommands ===

// Module 5056 (KeyCommands)
import noop from "module_19" /* 19 */;
import NativeKeyCommandsModule_mod from "NativeKeyCommandsModule" /* 5057 */;

function toNativeKeyCommand(eventName) {
  return { eventName: eventName.eventName, input: eventName.input, modifierFlags: eventName.modifierFlags, discoverabilityTitle: eventName.discoverabilityTitle };
}
function registerKeyCommand(arg0) {
  const items = [];
  items[HermesBuiltin.arraySpread(closure_3, 0)] = arg0;
  closure_3 = items;
  if (null == closure_5) {
    closure_5 = NativeKeyCommandsModule.onKeyCommand((eventName) => {
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
  if (!c4) {
    c4 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c4 = false;
      const map = new Map();
      for (const item10012 of closure_1_3) {
        let result = map.set(item10012.eventName, item10012);
        continue;
      }
      items = [...map.values()];
      closure_0(closure_1_1[1]).setKeyCommands(items.map(closure_1_6));
    });
  }
}
function unregisterKeyCommand(arg0) {
  closure_0 = arg0;
  closure_3 = closure_3.filter((item) => item !== closure_0);
  if (!c4) {
    c4 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c4 = false;
      const map = new Map();
      for (const item10012 of closure_1_3) {
        let result = map.set(item10012.eventName, item10012);
        continue;
      }
      items = [...map.values()];
      closure_0(closure_1_1[1]).setKeyCommands(items.map(closure_1_6));
    });
  }
}
let NativeKeyCommandsModule = NativeKeyCommandsModule_mod;
let closure_3 = [];
let c4 = false;
let closure_5 = null;
NativeKeyCommandsModule = NativeKeyCommandsModule.getConstants();
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/KeyCommands.tsx");

export const KeyModifierFlags = NativeKeyCommandsModule;
export const KeyInputs = { ESCAPE: "UIKeyInputEscape" };
export const subscribeKeyCommand = function subscribeKeyCommand(arg0) {
  importDefault = arg0;
  let items = [];
  items[HermesBuiltin.arraySpread(items, 0)] = arg0;
  if (null == closure_5) {
    closure_5 = NativeKeyCommandsModule.onKeyCommand((eventName) => {
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
  if (!c4) {
    c4 = true;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c4 = false;
      const map = new Map();
      for (const item10012 of closure_1_3) {
        let result = map.set(item10012.eventName, item10012);
        continue;
      }
      items = [...map.values()];
      closure_0(closure_1_1[1]).setKeyCommands(items.map(closure_1_6));
    });
  }
  return () => {
    items = items.filter((item) => item !== closure_0);
    if (!c4) {
      c4 = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        c4 = false;
        const map = new Map();
        for (const item10012 of closure_1_3) {
          let result = map.set(item10012.eventName, item10012);
          continue;
        }
        items = [...map.values()];
        closure_0(closure_1_1[1]).setKeyCommands(items.map(closure_1_6));
      });
    }
  };
};
export const useKeyCommands = function useKeyCommands(memo) {
  const items = [memo];
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
};