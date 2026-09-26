// === Module 1656: jSWorkletsModule ===

// Module 1656 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1657 */;
import NativeWorklets from "NativeWorklets" /* 1658 */;
import module_1641 from "module_1641" /* 1641 */;

if (module_1641.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;