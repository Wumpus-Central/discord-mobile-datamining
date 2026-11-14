// discord_app/modules/checkpoint/hooks/useCheckpointStepAnalytics.tsx
import useMountEffect from "../../../hooks/useMountEffect.tsx";
import Tracking from "../tracking/Tracking.tsx";
import CheckpointSessionAnalyticsManagerDefault from "../tracking/CheckpointSessionAnalyticsManager.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
