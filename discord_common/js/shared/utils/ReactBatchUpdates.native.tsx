// === Module 705: batchUpdates ===

// Module 705 (batchUpdates)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const unstable_batchedUpdates = get_ActivityIndicator.unstable_batchedUpdates;
const result = obj132.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(fn) {
  unstable_batchedUpdates(fn);
};