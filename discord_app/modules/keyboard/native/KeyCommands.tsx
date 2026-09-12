// === Module 14666: KeyCommands ===

// Module 14666 (KeyCommands)
import noop from "module_19" /* 19 */;
import NativeKeyCommandsModule from "NativeKeyCommandsModule" /* 14667 */;

function toNativeKeyCommand(eventName) {
  return { eventName: eventName.eventName, input: eventName.input, modifierFlags: eventName.modifierFlags, discoverabilityTitle: eventName.discoverabilityTitle };
}
function registerKeyCommand(arg0) {
  const items = [];
  items[HermesBuiltin.arraySpread(closure_3, 0)] = arg0;
  closure_3 = items;
  if (null == closure_5) {
    closure_5 = NativeKeyCommandsModule.onKeyCommand((arg0) => {
      const eventName = arg0;
      const found = closure_1_3.find((eventName) => eventName.eventName === eventName.eventName);
      if (found != null) {
        found.onKeyCommand(arg0);
      }
    });
  }
  if (!c4) {
    c4 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c4 = false;
      eventName(dependencyMap[1]).setKeyCommands(closure_1_3.map(toNativeKeyCommand));
    });
  }
}
function unregisterKeyCommand(eventName) {
  closure_3 = closure_3.filter((eventName) => eventName.eventName !== closure_0);
  if (!c4) {
    c4 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c4 = false;
      eventName(dependencyMap[1]).setKeyCommands(closure_1_3.map(toNativeKeyCommand));
    });
  }
}
let closure_3 = [];
let c4 = false;
let closure_5 = null;
NativeKeyCommandsModule = NativeKeyCommandsModule.getConstants();
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyCommands.tsx");

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
        let tmp5 = unregisterKeyCommand(tmp3.eventName);
        continue;
      }
      tmp2 = dependencyMap[Symbol.iterator]();
    };
  }, items);
};