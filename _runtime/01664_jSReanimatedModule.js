// _runtime/01664_jSReanimatedModule.js
import _mod1665 from "metro/01665__.js";
import JSReanimated from "01694_JSReanimated.js";
import NativeReanimatedModule from "01699_NativeReanimatedModule.js";

if (_mod1665.IS_JEST) {
  const _module = JSReanimated;
  let jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = NativeReanimatedModule;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
