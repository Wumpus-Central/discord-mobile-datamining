// === Module 14265: useCheckpointForegroundTracking ===

// Module 14265 (useCheckpointForegroundTracking)
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 14252 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 2120 */;

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
};