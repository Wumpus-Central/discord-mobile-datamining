// === Module 1715: WorkletsTurboModule ===

// Module 1715 (WorkletsTurboModule)
import _mod1710 from "module_1710" /* 1710 */;
import WorkletsModuleDefault from "WorkletsModule" /* 1716 */;

let importDefaultResult = null;
if (globalThis.__RUNTIME_KIND === _mod1710.RuntimeKind.ReactNative) {
  importDefaultResult = WorkletsModuleDefault;
}

export const WorkletsTurboModule = importDefaultResult;