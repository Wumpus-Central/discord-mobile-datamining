// discord_app/modules/application_commands/ApplicationCommandDiscoveryManager.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import keys from "../../../_runtime/00644_keys.js";

const obj = keys.create(() => ({ initialSectionId: "r" }));
const result = obj132.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => obj.setState(() => ({ initialSectionId: closure_0 })));
};