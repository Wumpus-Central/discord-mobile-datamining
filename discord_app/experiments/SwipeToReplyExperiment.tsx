// discord_app/experiments/SwipeToReplyExperiment.tsx
import LaunchPadConstants from "../modules/launchpad/native/LaunchPadConstants.tsx";
import useLaunchPadTypeDefault from "../modules/launchpad/native/useLaunchPadType.tsx";
import SwipeToMemberListUtils from "../modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
      const obj = SwipeToMemberListUtils;
      const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
      return tmp2;
    }
  : () => {
      const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
      const obj = SwipeToMemberListUtils;
      const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
      return tmp2;
    };
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = tmp2;
