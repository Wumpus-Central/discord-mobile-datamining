// _runtime/01715_WorkletsTurboModule.js
import _mod1710 from "metro/01710__.js";
import WorkletsModuleDefault from "01716_WorkletsModule.js";

let importDefaultResult = null;
if (globalThis.__RUNTIME_KIND === _mod1710.RuntimeKind.ReactNative) {
  importDefaultResult = WorkletsModuleDefault;
}

export const WorkletsTurboModule = importDefaultResult;
