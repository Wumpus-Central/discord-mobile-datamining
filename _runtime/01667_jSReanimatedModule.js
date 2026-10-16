// === Module 1667: jSReanimatedModule ===

// Module 1667 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1668 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1684 */;
import module_1661 from "module_1661" /* 1661 */;

if (module_1661.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;