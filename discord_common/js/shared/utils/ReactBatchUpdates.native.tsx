// === Module 1249: ReactBatchUpdates ===

// Module 1249 (ReactBatchUpdates)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const unstable_batchedUpdates = _mod17.unstable_batchedUpdates;
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(fn) {
  unstable_batchedUpdates(fn);
};