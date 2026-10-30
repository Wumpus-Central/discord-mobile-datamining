// _runtime/01669_jSWorkletsModule.js
import JSWorklets from "01670_JSWorklets.js";
import NativeWorklets from "01671_NativeWorklets.js";
import 01654__ from "metro/01654__.js";

if (module_1654.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;