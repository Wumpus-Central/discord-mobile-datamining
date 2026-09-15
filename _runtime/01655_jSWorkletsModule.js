// === Module 1655: jSWorkletsModule ===

// Module 1655 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1656 */;
import NativeWorklets from "NativeWorklets" /* 1657 */;
import module_1640 from "module_1640" /* 1640 */;

if (module_1640.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;