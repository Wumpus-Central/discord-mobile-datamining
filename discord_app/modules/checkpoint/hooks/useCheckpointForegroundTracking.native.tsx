// discord_app/modules/checkpoint/hooks/useCheckpointForegroundTracking.native.tsx
import CheckpointSessionAnalyticsManagerDefault from "../tracking/CheckpointSessionAnalyticsManager.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = fn;
const AppStates = fn(1072).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointForegroundTracking.native.tsx");

export default function useCheckpointForegroundTracking() {
  items = [AppStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => state.getState() === constants.ACTIVE);
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    CheckpointSessionAnalyticsManagerDefault.setForeground(stateFromStores);
  }, items1);
}
