// discord_app/modules/stage_channels/StageChannelHeightHooks.tsx
import useStageBlockedUsersCount from "useStageBlockedUsersCount.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
      useStageBlockedUsersCount;
      if (stageBlockedUsersCount > 0) {
        let num = 88;
      } else {
        num = 68;
      }
      return num;
    }
  : (arg0) => {
      const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
      useStageBlockedUsersCount;
      if (stageBlockedUsersCount > 0) {
        let num = 88;
      } else {
        num = 68;
      }
      return num;
    };
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = tmp2;
export const useGetActionBarHeight = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
      useStageBlockedUsersCount;
      if (stageBlockedUsersCount > 0) {
        let num = 132;
      } else {
        num = 112;
      }
      return num;
    }
  : (arg0) => {
      const stageBlockedUsersCount = useStageBlockedUsersCount.useStageBlockedUsersCount(arg0);
      useStageBlockedUsersCount;
      if (stageBlockedUsersCount > 0) {
        let num = 132;
      } else {
        num = 112;
      }
      return num;
    };
