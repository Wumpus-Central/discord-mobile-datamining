// _runtime/01656_jSWorkletsModule.js
import JSWorklets from "01657_JSWorklets.js";
import NativeWorklets from "01658_NativeWorklets.js";
import 01641__ from "metro/01641__.js";

if (module_1641.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;