// === Module 11569: useCommandDiscoveryManager ===

// Module 11569 (useCommandDiscoveryManager)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

const obj = keys.create(() => ({ initialSectionId: "r" }));
const result = set.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_2.setState(() => ({ initialSectionId: closure_0 })));
};