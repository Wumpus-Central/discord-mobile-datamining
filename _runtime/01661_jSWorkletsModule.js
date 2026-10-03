// === Module 1661: jSWorkletsModule ===

// Module 1661 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1662 */;
import NativeWorklets from "NativeWorklets" /* 1663 */;
import module_1646 from "module_1646" /* 1646 */;

if (module_1646.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;