// === Module 1645: jSReanimatedModule ===

// Module 1645 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1646 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1662 */;
import module_1639 from "module_1639" /* 1639 */;

if (module_1639.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;