// === Module 1665: jSReanimatedModule ===

// Module 1665 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1666 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1682 */;
import module_1659 from "module_1659" /* 1659 */;

if (module_1659.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;