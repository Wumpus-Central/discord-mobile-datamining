// === Module 1661: jSWorkletsModule ===

// Module 1661 (jSWorkletsModule)
import _mod1662 from "module_1662" /* 1662 */;
import _mod1663 from "module_1663" /* 1663 */;
import module_1646 from "module_1646" /* 1646 */;

let jSWorkletsModule;
if (module_1646.shouldBeUseWeb()) {
  const _module1 = _mod1662;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1663;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;