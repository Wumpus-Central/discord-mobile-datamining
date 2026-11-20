// _runtime/01713_WorkletsTurboModule.js
import _mod1708 from "metro/01708__.js";
import WorkletsModuleDefault from "01714_WorkletsModule.js";

let importDefaultResult = null;
if (globalThis.__RUNTIME_KIND === _mod1708.RuntimeKind.ReactNative) {
  importDefaultResult = WorkletsModuleDefault;
}

export const WorkletsTurboModule = importDefaultResult;
