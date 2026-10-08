// === Module 1673: jSWorkletsModule ===

// Module 1673 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1674 */;
import NativeWorklets from "NativeWorklets" /* 1675 */;
import module_1658 from "module_1658" /* 1658 */;

if (module_1658.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;