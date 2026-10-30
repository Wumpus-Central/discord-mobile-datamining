// === Module 1669: jSWorkletsModule ===

// Module 1669 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1670 */;
import NativeWorklets from "NativeWorklets" /* 1671 */;
import module_1654 from "module_1654" /* 1654 */;

if (module_1654.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;