// === Module 12600: useCheckpointHasUserStats ===

// Module 12600 (useCheckpointHasUserStats)
import initialize from "initialize" /* 504 */;
import CheckpointStore from "CheckpointStore" /* 12370 */;

require = fn;
const CheckpointFetchStates = fn(12370).CheckpointFetchStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointHasUserStats.tsx");

export default function useCheckpointHasUserStats() {
  items = [CheckpointStore];
  return initialize.useStateFromStores(items, () => {
    let tmp = CheckpointStore.fetchState !== constants.SUCCESS;
    if (!tmp) {
      tmp = null != CheckpointStore.stats;
    }
    return tmp;
  });
};