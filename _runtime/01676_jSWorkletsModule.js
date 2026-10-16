// === Module 1676: jSWorkletsModule ===

// Module 1676 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1677 */;
import NativeWorklets from "NativeWorklets" /* 1678 */;
import module_1661 from "module_1661" /* 1661 */;

if (module_1661.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;