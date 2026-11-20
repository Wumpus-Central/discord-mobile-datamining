// === Module 1713: WorkletsTurboModule ===

// Module 1713 (WorkletsTurboModule)
import _mod1708 from "module_1708" /* 1708 */;
import WorkletsModuleDefault from "WorkletsModule" /* 1714 */;

let importDefaultResult = null;
if (globalThis.__RUNTIME_KIND === _mod1708.RuntimeKind.ReactNative) {
  importDefaultResult = WorkletsModuleDefault;
}

export const WorkletsTurboModule = importDefaultResult;