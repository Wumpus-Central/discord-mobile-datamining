// === Module 9658: CALL_ACTION_BAR_HEIGHT ===

// Module 9658 (CALL_ACTION_BAR_HEIGHT)
import set from "set" /* 2 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8762 */;

const result = set.fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = function useGetStageRTCPanelHeight(stateFromStores) {
  const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(stateFromStores);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
};
export const useGetActionBarHeight = function useGetActionBarHeight(id) {
  const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(id);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
};