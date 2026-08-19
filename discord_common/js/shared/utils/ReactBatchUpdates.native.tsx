// discord_common/js/shared/utils/ReactBatchUpdates.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

const unstable_batchedUpdates = get_ActivityIndicator.unstable_batchedUpdates;
const result = obj132.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(fn) {
  unstable_batchedUpdates(fn);
};