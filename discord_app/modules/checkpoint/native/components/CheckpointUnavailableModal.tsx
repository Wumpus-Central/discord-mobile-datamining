// discord_app/modules/checkpoint/native/components/CheckpointUnavailableModal.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3495 from "../../Checkpoint2026.messages.js";
import useCheckpointStartedAnalyticsDefault from "../useCheckpointStartedAnalytics.tsx";
import useCheckpointStepAnalytics from "../../hooks/useCheckpointStepAnalytics.tsx";
import useCheckpointForegroundTrackingDefault from "../../hooks/useCheckpointForegroundTracking.native.tsx";
import useCheckpointMusicDefault from "../useCheckpointMusic.tsx";
import CheckpointMessageModalDefault from "CheckpointMessageModal.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointUnavailableModal.tsx");

export default function CheckpointUnavailableModal(source) {
  useCheckpointStartedAnalyticsDefault(source.source);
  useCheckpointMusicDefault();
  const checkpointCloseAnalytics = useCheckpointStepAnalytics.useCheckpointCloseAnalytics();
  useCheckpointForegroundTrackingDefault();
  const obj2 = { message: null };
  const intl = util.intl;
  obj2.message = intl.string(_modDef3495.IaTl5H);
  return jsx(CheckpointMessageModalDefault, { message: null });
}
