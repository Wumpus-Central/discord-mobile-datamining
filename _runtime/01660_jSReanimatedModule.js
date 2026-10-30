// === Module 1660: jSReanimatedModule ===

// Module 1660 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1661 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1677 */;
import module_1654 from "module_1654" /* 1654 */;

if (module_1654.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;