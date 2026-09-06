// discord_app/experiments/SwipeToReplyExperiment.tsx
import LaunchPadConstants from "../modules/launchpad/native/LaunchPadConstants.tsx";
import useLaunchPadTypeDefault from "../modules/launchpad/native/useLaunchPadType.tsx";
import size from "../../_runtime/metro/00002__.js";

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
