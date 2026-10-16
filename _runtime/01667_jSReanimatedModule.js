// _runtime/01667_jSReanimatedModule.js
import _makeShareableClone from "01668__makeShareableClone.js";
import NativeReanimatedModule from "01684_NativeReanimatedModule.js";
import 01661__ from "metro/01661__.js";

if (module_1661.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;