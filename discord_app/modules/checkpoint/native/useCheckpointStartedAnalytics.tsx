// === Module 12647: useCheckpointStartedAnalytics ===

// Module 12647 (useCheckpointStartedAnalytics)
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import Tracking from "Tracking" /* 12618 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12619 */;
import AppStateStore from "AppStateStore" /* 2119 */;

require = fn;
const AppStates = fn(1071).AppStates;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointStartedAnalytics.tsx");

export default function useCheckpointStartedAnalytics(arg0) {
  closure_0 = arg0;
  useMountEffectDefault(() => {
    const obj = CheckpointSessionAnalyticsManagerDefault;
    obj.initialize({ isForeground: AppStateStore.getState() === AppStates.ACTIVE });
    const obj2 = { isForeground: AppStateStore.getState() === AppStates.ACTIVE };
    const result = Tracking.trackCheckpoint2026Started(closure_0);
  });
};