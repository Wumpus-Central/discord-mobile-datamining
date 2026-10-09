// === Module 1674: jSWorkletsModule ===

// Module 1674 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1675 */;
import NativeWorklets from "NativeWorklets" /* 1676 */;
import module_1659 from "module_1659" /* 1659 */;

if (module_1659.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;