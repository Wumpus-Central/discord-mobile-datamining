// _runtime/01646_jSReanimatedModule.js
import _makeShareableClone from "01647__makeShareableClone.js";
import NativeReanimatedModule from "01663_NativeReanimatedModule.js";
import 01640__ from "metro/01640__.js";

if (module_1640.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;