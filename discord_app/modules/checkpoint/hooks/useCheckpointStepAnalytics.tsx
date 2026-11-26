// === Module 12649: useCheckpointStepAnalytics ===

// Module 12649 (useCheckpointStepAnalytics)
import useMountEffect from "useMountEffect" /* 5604 */;
import Tracking from "Tracking" /* 12618 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12619 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointStepAnalytics.tsx");

export function useCheckpointStepAnalytics(route) {
  closure_0 = route;
  items = [route];
  const effect = noop.useEffect(() => {
    CheckpointSessionAnalyticsManagerDefault.setStepName(closure_0);
    const result = Tracking.trackCheckpoint2026StepViewed(closure_0);
  }, items);
}
export function useCheckpointCloseAnalytics() {
  const unmountEffect = useMountEffect.useUnmountEffect(() => {
    CheckpointSessionAnalyticsManagerDefault.stop();
    const obj2 = Tracking;
    const result = obj2.trackCheckpoint2026Closed(CheckpointSessionAnalyticsManagerDefault.getStepName());
  });
}