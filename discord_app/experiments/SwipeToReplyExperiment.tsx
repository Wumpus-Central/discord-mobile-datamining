// discord_app/experiments/SwipeToReplyExperiment.tsx
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";
import { useLaunchPadType } from "../modules/launchpad/native/useLaunchPadType.tsx";

const result = require("useIsSwipeToMemberListEnabled").fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadType() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};