// === Module 11534: SwipeToReplyExperiment ===

// Module 11534 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11535 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11536 */;
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