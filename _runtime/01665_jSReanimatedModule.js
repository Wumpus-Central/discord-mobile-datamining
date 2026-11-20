// _runtime/01665_jSReanimatedModule.js
import _mod1666 from "metro/01666__.js";
import JSReanimated from "01695_JSReanimated.js";
import NativeReanimatedModule from "01700_NativeReanimatedModule.js";

if (_mod1666.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
