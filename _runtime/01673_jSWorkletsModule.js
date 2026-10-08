// _runtime/01673_jSWorkletsModule.js
import JSWorklets from "01674_JSWorklets.js";
import NativeWorklets from "01675_NativeWorklets.js";
import 01658__ from "metro/01658__.js";

if (module_1658.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;