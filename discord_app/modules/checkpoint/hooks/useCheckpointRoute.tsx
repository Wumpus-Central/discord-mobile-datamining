// === Module 13678: useCheckpointRoute ===

// Module 13678 (useCheckpointRoute)
import CheckpointNavigation from "CheckpointNavigation" /* 6570 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13658 */;
import CheckpointFlows from "CheckpointFlows" /* 13675 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13656 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointRoute.tsx");

export default function useCheckpointRoute(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(() => {
    const progress = CheckpointStore.progress;
    if (null != CheckpointStore.character) {
      let stage = CheckpointNavigation.CheckpointCharacterStage.SUMMARY;
    } else if (progress != null) {
      stage = progress.stage;
    }
    const checkpointRoutes = CheckpointFlows.getCheckpointRoutes({ flow: stage, stats: CheckpointStore.stats });
    let HOME = checkpointRoutes.find((item) => stage(first[3]).getCheckpointRoutePresentation(item).characterStage === stage);
    if (HOME == null) {
      HOME = CheckpointNavigation.CheckpointRoute.HOME;
    }
    return HOME;
  }), 2);
  const first = tmp[0];
  items = [first];
  const effect = noop.useEffect(() => {
    const obj = CheckpointNavigation;
    const result = CheckpointActionCreators.saveCheckpointProgress(obj.getCheckpointRoutePresentation(first).characterStage);
  }, items);
  const items1 = [first, tmp[1]];
  return items1;
};