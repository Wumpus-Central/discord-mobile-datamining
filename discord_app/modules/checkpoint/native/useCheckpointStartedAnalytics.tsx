// discord_app/modules/checkpoint/native/useCheckpointStartedAnalytics.tsx
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import Tracking from "../tracking/Tracking.tsx";
import CheckpointSessionAnalyticsManagerDefault from "../tracking/CheckpointSessionAnalyticsManager.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

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
}
