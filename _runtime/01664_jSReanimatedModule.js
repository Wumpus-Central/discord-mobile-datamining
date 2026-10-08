// _runtime/01664_jSReanimatedModule.js
import _makeShareableClone from "01665__makeShareableClone.js";
import NativeReanimatedModule from "01681_NativeReanimatedModule.js";
import 01658__ from "metro/01658__.js";

if (module_1658.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;