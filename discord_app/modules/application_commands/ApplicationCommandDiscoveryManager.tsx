// discord_app/modules/application_commands/ApplicationCommandDiscoveryManager.tsx
import keys from "keys";
import { batchUpdates } from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const obj = keys.create(() => ({ initialSectionId: "r" }));
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_2.setState(() => ({ initialSectionId: closure_0 })));
};