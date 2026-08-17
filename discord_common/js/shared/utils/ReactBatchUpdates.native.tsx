// discord_common/js/shared/utils/ReactBatchUpdates.native.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

const unstable_batchedUpdates = get_ActivityIndicator.unstable_batchedUpdates;
const result = set.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(arg0) {
  unstable_batchedUpdates(arg0);
};