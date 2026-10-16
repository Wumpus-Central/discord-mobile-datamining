// _runtime/01676_jSWorkletsModule.js
import JSWorklets from "01677_JSWorklets.js";
import NativeWorklets from "01678_NativeWorklets.js";
import 01661__ from "metro/01661__.js";

if (module_1661.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;