// === Module 1664: jSReanimatedModule ===

// Module 1664 (jSReanimatedModule)
import _mod1665 from "module_1665" /* 1665 */;
import JSReanimated from "JSReanimated" /* 1694 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1699 */;

if (_mod1665.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;