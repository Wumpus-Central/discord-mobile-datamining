// discord_app/modules/checkpoint/hooks/useCheckpointHasUserStats.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const CheckpointFetchStates = fn(14253).CheckpointFetchStates;
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
}
