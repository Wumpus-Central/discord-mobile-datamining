// _runtime/01712_WorkletsTurboModule.js
import _mod1707 from "metro/01707__.js";
import WorkletsModuleDefault from "01713_WorkletsModule.js";

let importDefaultResult = null;
if (globalThis.__RUNTIME_KIND === _mod1707.RuntimeKind.ReactNative) {
  importDefaultResult = WorkletsModuleDefault;
}

export const WorkletsTurboModule = importDefaultResult;
