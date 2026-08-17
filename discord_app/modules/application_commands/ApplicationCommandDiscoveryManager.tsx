// discord_app/modules/application_commands/ApplicationCommandDiscoveryManager.tsx
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;
import { batchUpdates } from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const obj = keys.create(() => ({ initialSectionId: "r" }));
const result = set.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => closure_1_2.setState(() => ({ initialSectionId: closure_0 })));
};