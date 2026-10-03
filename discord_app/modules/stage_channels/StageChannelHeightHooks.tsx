// === Module 9604: StageChannelHeightHooks ===

// Module 9604 (StageChannelHeightHooks)
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8277 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
}) : ((arg0) => {
  const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
});
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = tmp2;
export const useGetActionBarHeight = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
}) : ((arg0) => {
  const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
});