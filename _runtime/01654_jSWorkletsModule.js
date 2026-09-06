// _runtime/01654_jSWorkletsModule.js
import JSWorklets from "01655_JSWorklets.js";
import NativeWorklets from "01656_NativeWorklets.js";
import 01639__ from "metro/01639__.js";

if (module_1639.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;