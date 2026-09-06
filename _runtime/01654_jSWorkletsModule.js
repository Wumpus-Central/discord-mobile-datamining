// === Module 1654: jSWorkletsModule ===

// Module 1654 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1655 */;
import NativeWorklets from "NativeWorklets" /* 1656 */;
import module_1639 from "module_1639" /* 1639 */;

if (module_1639.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;