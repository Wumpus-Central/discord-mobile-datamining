// === Module 1652: jSReanimatedModule ===

// Module 1652 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1653 */;
import _mod1669 from "module_1669" /* 1669 */;
import module_1646 from "module_1646" /* 1646 */;

let jSReanimatedModule;
if (module_1646.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1669;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;