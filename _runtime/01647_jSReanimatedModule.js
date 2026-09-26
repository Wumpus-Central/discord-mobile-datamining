// === Module 1647: jSReanimatedModule ===

// Module 1647 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1648 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1664 */;
import module_1641 from "module_1641" /* 1641 */;

if (module_1641.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;