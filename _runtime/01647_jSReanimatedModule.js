// _runtime/01647_jSReanimatedModule.js
import _makeShareableClone from "01648__makeShareableClone.js";
import NativeReanimatedModule from "01664_NativeReanimatedModule.js";
import 01641__ from "metro/01641__.js";

if (module_1641.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;