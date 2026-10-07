// _runtime/01661_jSWorkletsModule.js
import JSWorklets from "01662_JSWorklets.js";
import NativeWorklets from "01663_NativeWorklets.js";
import 01646__ from "metro/01646__.js";

if (module_1646.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;