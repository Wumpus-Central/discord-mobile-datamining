// _runtime/01661_jSWorkletsModule.js
import _mod1662 from "metro/01662__.js";
import _mod1663 from "metro/01663__.js";
import 01646__ from "metro/01646__.js";

let jSWorkletsModule;
if (module_1646.shouldBeUseWeb()) {
  const _module1 = _mod1662;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1663;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;