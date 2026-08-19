// === Module 1672: jSWorkletsModule ===

// Module 1672 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1673 */;
import NativeWorklets from "NativeWorklets" /* 1674 */;
import isJest from "isJest" /* 1657 */;

if (isJest.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;