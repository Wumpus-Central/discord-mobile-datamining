// === Module 12849: useCheckpointHasUserStats ===

// Module 12849 (useCheckpointHasUserStats)
import initialize from "initialize" /* 504 */;
import CheckpointStore from "CheckpointStore" /* 12620 */;

require = fn;
const CheckpointFetchStates = fn(12620).CheckpointFetchStates;
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