// _runtime/01660_jSReanimatedModule.js
import _makeShareableClone from "01661__makeShareableClone.js";
import NativeReanimatedModule from "01677_NativeReanimatedModule.js";
import 01654__ from "metro/01654__.js";

if (module_1654.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;