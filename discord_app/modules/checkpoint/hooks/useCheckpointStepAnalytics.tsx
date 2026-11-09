// === Module 13691: useCheckpointStepAnalytics ===

// Module 13691 (useCheckpointStepAnalytics)
import useMountEffect from "useMountEffect" /* 5721 */;
import Tracking from "Tracking" /* 13666 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 13667 */;
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
    const obj = Tracking;
    const result = obj.trackCheckpoint2026Closed(CheckpointSessionAnalyticsManagerDefault.getStepName());
  });
}