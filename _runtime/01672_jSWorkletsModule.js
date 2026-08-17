// _runtime/01672_jSWorkletsModule.js
import JSWorklets from "01673_JSWorklets.js";
import NativeWorklets from "01674_NativeWorklets.js";
import isJest from "01657_isJest.js";

if (isJest.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;