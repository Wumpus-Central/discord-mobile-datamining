// _runtime/01652_jSReanimatedModule.js
import _makeShareableClone from "01653__makeShareableClone.js";
import NativeReanimatedModule from "01669_NativeReanimatedModule.js";
import 01646__ from "metro/01646__.js";

if (module_1646.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;