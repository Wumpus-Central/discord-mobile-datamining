// === Module 1652: jSReanimatedModule ===

// Module 1652 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1653 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1669 */;
import module_1646 from "module_1646" /* 1646 */;

if (module_1646.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;