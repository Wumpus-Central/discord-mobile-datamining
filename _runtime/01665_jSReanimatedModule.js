// === Module 1665: jSReanimatedModule ===

// Module 1665 (jSReanimatedModule)
import _mod1666 from "module_1666" /* 1666 */;
import JSReanimated from "JSReanimated" /* 1695 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1700 */;

if (_mod1666.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;