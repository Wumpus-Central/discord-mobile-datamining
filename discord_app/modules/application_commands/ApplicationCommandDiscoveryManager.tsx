// discord_app/modules/application_commands/ApplicationCommandDiscoveryManager.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const useCommandDiscoveryManager = module_560.create(() => ({ initialSectionId: "Array" }));
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export { useCommandDiscoveryManager };
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(() => ({ initialSectionId })));
};