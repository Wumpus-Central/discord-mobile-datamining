// _runtime/01659_jSReanimatedModule.js
import _makeShareableClone from "01660__makeShareableClone.js";
import NativeReanimatedModule from "01676_NativeReanimatedModule.js";
import 01653__ from "metro/01653__.js";

if (module_1653.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;