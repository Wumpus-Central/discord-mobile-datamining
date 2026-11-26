// === Module 12933: CheckpointUnavailableModal ===

// Module 12933 (CheckpointUnavailableModal)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1112 */;
import _modDef3495 from "module_3495" /* 3495 */;
import useCheckpointStartedAnalyticsDefault from "useCheckpointStartedAnalytics" /* 12647 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 12649 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 12651 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12662 */;
import CheckpointMessageModalDefault from "CheckpointMessageModal" /* 12932 */;
import size from "module_2" /* 2 */;

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
};