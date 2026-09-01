// _runtime/01671_jSWorkletsModule.js
import JSWorklets from "01672_JSWorklets.js";
import NativeWorklets from "01673_NativeWorklets.js";
import isJest from "01656_isJest.js";

if (isJest.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
