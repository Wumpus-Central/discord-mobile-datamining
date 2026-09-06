// === Module 12397: ApplicationCommandDiscoveryManager ===

// Module 12397 (ApplicationCommandDiscoveryManager)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const useCommandDiscoveryManager = module_560.create(() => ({ initialSectionId: "Array" }));
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export { useCommandDiscoveryManager };
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(() => ({ initialSectionId })));
};