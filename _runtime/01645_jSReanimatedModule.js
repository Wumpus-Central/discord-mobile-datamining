// _runtime/01645_jSReanimatedModule.js
import _makeShareableClone from "01646__makeShareableClone.js";
import NativeReanimatedModule from "01662_NativeReanimatedModule.js";
import 01639__ from "metro/01639__.js";

if (module_1639.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;