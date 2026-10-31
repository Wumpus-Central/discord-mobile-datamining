// _runtime/01668_jSWorkletsModule.js
import JSWorklets from "01669_JSWorklets.js";
import NativeWorklets from "01670_NativeWorklets.js";
import 01653__ from "metro/01653__.js";

if (module_1653.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;