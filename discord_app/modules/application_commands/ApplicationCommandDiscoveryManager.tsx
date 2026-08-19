// === Module 11569: useCommandDiscoveryManager ===

// Module 11569 (useCommandDiscoveryManager)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 644 */;

const obj = keys.create(() => ({ initialSectionId: "r" }));
const result = obj132.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => obj.setState(() => ({ initialSectionId: closure_0 })));
};