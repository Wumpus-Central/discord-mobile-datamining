// _runtime/01667_jSReanimatedModule.js
import _mod1668 from "metro/01668__.js";
import JSReanimated from "01697_JSReanimated.js";
import NativeReanimatedModule from "01702_NativeReanimatedModule.js";

if (_mod1668.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
