import { useStageBlockedUsersCount } from "useStageBlockedUsersCount.tsx";
// discord_app/modules/stage_channels/StageChannelHeightHooks.tsx
const result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = function useGetStageRTCPanelHeight(stateFromStores) {
  const stageBlockedUsersCount = useStageBlockedUsersCount /* useStageBlockedUsersCount */.useStageBlockedUsersCount(stateFromStores);
  useStageBlockedUsersCount /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
};
export const useGetActionBarHeight = function useGetActionBarHeight(id) {
  const stageBlockedUsersCount = useStageBlockedUsersCount /* useStageBlockedUsersCount */.useStageBlockedUsersCount(id);
  useStageBlockedUsersCount /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
};