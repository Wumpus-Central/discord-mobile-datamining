// === Module 1667: jSReanimatedModule ===

// Module 1667 (jSReanimatedModule)
import _mod1668 from "module_1668" /* 1668 */;
import JSReanimated from "JSReanimated" /* 1697 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1702 */;

if (_mod1668.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;