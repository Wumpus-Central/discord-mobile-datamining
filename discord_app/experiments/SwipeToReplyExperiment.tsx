// === Module 12312: SwipeToReplyExperiment ===

// Module 12312 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 12313 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 12314 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
}