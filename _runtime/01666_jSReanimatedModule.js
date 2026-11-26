// === Module 1666: jSReanimatedModule ===

// Module 1666 (jSReanimatedModule)
import _mod1667 from "module_1667" /* 1667 */;
import JSReanimated from "JSReanimated" /* 1696 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1701 */;

if (_mod1667.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;