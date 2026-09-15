// discord_app/modules/keyboard/native/KeyCommands.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import NativeKeyCommandsModule_mod from "../../../../discord_common/js/packages/rtn-codegen/js/NativeKeyCommandsModule.tsx";

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
  items[HermesBuiltin.arraySpread(length, 0)] = arg0;
  if (null == closure_5) {
    closure_5 = NativeKeyCommandsModule.onKeyCommand((eventName) => {
      let diff = length.length - 1;
      if (0 <= diff) {
        while (true) {
          let obj = length[diff];
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
      const items = [...map.values()];
      closure_0(dependencyMap[1]).setKeyCommands(items.map(toNativeKeyCommand));
    });
  }
  length = items;
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
      const items = [...map.values()];
      closure_0(dependencyMap[1]).setKeyCommands(items.map(toNativeKeyCommand));
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
