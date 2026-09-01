// discord_app/modules/application_commands/ApplicationCommandDiscoveryManager.tsx
import set from "../../../_runtime/00002_set.js";
import keys from "../../../_runtime/00644_keys.js";

const obj = keys.create(() => ({ initialSectionId: "r" }));
const result = set.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() =>
    closure_1_2.setState(() => ({ initialSectionId: closure_0 })),
  );
};
