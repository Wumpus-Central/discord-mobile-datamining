// _runtime/01674_jSWorkletsModule.js
import JSWorklets from "01675_JSWorklets.js";
import NativeWorklets from "01676_NativeWorklets.js";
import 01659__ from "metro/01659__.js";

if (module_1659.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;