// _runtime/01665_jSReanimatedModule.js
import _makeShareableClone from "01666__makeShareableClone.js";
import NativeReanimatedModule from "01682_NativeReanimatedModule.js";
import 01659__ from "metro/01659__.js";

if (module_1659.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;