// _runtime/01652_jSReanimatedModule.js
import _updatePropsJS from "01653__updatePropsJS.js";
import _mod1669 from "metro/01669__.js";
import 01646__ from "metro/01646__.js";

let jSReanimatedModule;
if (module_1646.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1669;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;