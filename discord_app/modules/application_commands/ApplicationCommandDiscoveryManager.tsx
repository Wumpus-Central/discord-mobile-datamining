// === Module 12397: useCommandDiscoveryManager ===

// Module 12397 (useCommandDiscoveryManager)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

const obj = keys.create(() => ({ initialSectionId: "Array" }));
const result = set.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  _require(1249).batchUpdates(() => closure_1_2.setState(() => ({ initialSectionId: closure_0 })));
};