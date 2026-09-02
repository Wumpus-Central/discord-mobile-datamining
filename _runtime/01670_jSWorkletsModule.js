// _runtime/01670_jSWorkletsModule.js
import JSWorklets from "01671_JSWorklets.js";
import NativeWorklets from "01672_NativeWorklets.js";
import isJest from "01655_isJest.js";

if (isJest.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
