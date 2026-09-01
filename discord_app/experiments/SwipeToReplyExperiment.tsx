// discord_app/experiments/SwipeToReplyExperiment.tsx
import set from "../../_runtime/00002_set.js";
import LAUNCH_PAD_SPRING_CONFIG from "../modules/launchpad/native/LaunchPadConstants.tsx";
import useLaunchPadTypeDefault from "../modules/launchpad/native/useLaunchPadType.tsx";

const LaunchPadTypes = LAUNCH_PAD_SPRING_CONFIG.LaunchPadTypes;
const result = set.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
