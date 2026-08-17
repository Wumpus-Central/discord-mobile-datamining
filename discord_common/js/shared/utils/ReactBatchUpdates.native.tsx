// discord_common/js/shared/utils/ReactBatchUpdates.native.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const unstable_batchedUpdates = get_ActivityIndicator.unstable_batchedUpdates;
const result = set.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(arg0) {
  unstable_batchedUpdates(arg0);
};