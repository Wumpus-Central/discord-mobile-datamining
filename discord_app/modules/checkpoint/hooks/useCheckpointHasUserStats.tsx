// === Module 12804: useCheckpointHasUserStats ===

// Module 12804 (useCheckpointHasUserStats)
import initialize from "initialize" /* 504 */;
import CheckpointStore from "CheckpointStore" /* 12571 */;

require = fn;
const CheckpointFetchStates = fn(12571).CheckpointFetchStates;
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