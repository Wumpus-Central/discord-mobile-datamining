// === Module 1659: jSReanimatedModule ===

// Module 1659 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1660 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1676 */;
import module_1653 from "module_1653" /* 1653 */;

if (module_1653.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;