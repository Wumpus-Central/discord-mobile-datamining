// _runtime/01714_WorkletsTurboModule.js
import _mod1709 from "metro/01709__.js";
import WorkletsModuleDefault from "01715_WorkletsModule.js";

let importDefaultResult = null;
if (globalThis.__RUNTIME_KIND === _mod1709.RuntimeKind.ReactNative) {
  importDefaultResult = WorkletsModuleDefault;
}

export const WorkletsTurboModule = importDefaultResult;
