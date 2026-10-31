// === Module 1668: jSWorkletsModule ===

// Module 1668 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1669 */;
import NativeWorklets from "NativeWorklets" /* 1670 */;
import module_1653 from "module_1653" /* 1653 */;

if (module_1653.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;