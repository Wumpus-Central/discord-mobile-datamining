// _runtime/01655_jSWorkletsModule.js
import JSWorklets from "01656_JSWorklets.js";
import NativeWorklets from "01657_NativeWorklets.js";
import 01640__ from "metro/01640__.js";

if (module_1640.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;