// discord_app/modules/checkpoint/hooks/useCheckpointRoute.tsx
import CheckpointNavigation from "../CheckpointNavigation.tsx";
import CheckpointActionCreators from "../CheckpointActionCreators.tsx";
import CheckpointFlows from "../CheckpointFlows.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointRoute.tsx");

export default function useCheckpointRoute(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(
    noop.useState(() => {
      const progress = CheckpointStore.progress;
      if (CheckpointStore.isCharacterCreatorEnabled) {
        if (null != tmp2) {
          let stage = CheckpointNavigation.CheckpointCharacterStage.SUMMARY;
        } else if (progress != null) {
          stage = progress.stage;
        }
        const obj2 = { flow: tmp, stats: tmp3 };
        const checkpointRoutes = CheckpointFlows.getCheckpointRoutes(obj2);
        let HOME2 = checkpointRoutes.find(
          (item) => stage(first[3]).getCheckpointRoutePresentation(item).characterStage === stage,
        );
        if (HOME2 == null) {
          HOME2 = CheckpointNavigation.CheckpointRoute.HOME;
        }
        let HOME = HOME2;
      } else {
        HOME = CheckpointNavigation.CheckpointRoute.HOME;
      }
      return HOME;
    }),
    2,
  );
  const first = tmp[0];
  items = [first];
  const effect = noop.useEffect(() => {
    if (CheckpointStore.isCharacterCreatorEnabled) {
      const obj = CheckpointNavigation;
      const result = CheckpointActionCreators.saveCheckpointProgress(
        obj.getCheckpointRoutePresentation(first).characterStage,
      );
    }
  }, items);
  const items1 = [first, tmp[1]];
  return items1;
}
