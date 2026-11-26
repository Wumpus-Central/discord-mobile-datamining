// _runtime/01666_jSReanimatedModule.js
import _mod1667 from "metro/01667__.js";
import JSReanimated from "01696_JSReanimated.js";
import NativeReanimatedModule from "01701_NativeReanimatedModule.js";

if (_mod1667.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
