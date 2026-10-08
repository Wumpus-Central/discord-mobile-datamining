// === Module 1664: jSReanimatedModule ===

// Module 1664 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1665 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1681 */;
import module_1658 from "module_1658" /* 1658 */;

if (module_1658.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;