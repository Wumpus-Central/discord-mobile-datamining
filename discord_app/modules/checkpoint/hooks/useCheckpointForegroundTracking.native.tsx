// === Module 12651: useCheckpointForegroundTracking ===

// Module 12651 (useCheckpointForegroundTracking)
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12619 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 2119 */;

const require = fn;
const AppStates = fn(1071).AppStates;
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