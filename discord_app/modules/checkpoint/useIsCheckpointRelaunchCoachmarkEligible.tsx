// === Module 18160: useIsCheckpointRelaunchCoachmarkEligible ===

// Module 18160 (useIsCheckpointRelaunchCoachmarkEligible)
import dismissible_content from "dismissible_content" /* 4876 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5075 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6769 */;
import useIsCheckpointOpen from "useIsCheckpointOpen" /* 18161 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointRelaunchCoachmarkEligible.tsx");

export const CHECKPOINT_RELAUNCH_COACHMARK_SOURCE = "relaunch_coachmark";
export function useIsCheckpointRelaunchCoachmarkEligible(YouBar) {
  let isCheckpointIntroEnabled = CheckpointExperiments.useIsCheckpointIntroEnabled(YouBar);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO);
  const isCheckpointOpen = useIsCheckpointOpen.useIsCheckpointOpen();
  noop.useRef(isCheckpointOpen);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp4[1];
  items = [isCheckpointOpen];
  const effect = noop.useEffect(() => {
    if (isCheckpointOpen !== ref.current) {
      ref.current = isCheckpointOpen;
      if (!isCheckpointOpen) {
        closure_2(true);
      }
    }
  }, items);
  if (isCheckpointIntroEnabled) {
    isCheckpointIntroEnabled = result;
  }
  if (isCheckpointIntroEnabled) {
    isCheckpointIntroEnabled = !isCheckpointOpen;
  }
  if (isCheckpointIntroEnabled) {
    isCheckpointIntroEnabled = tmp4[0];
  }
  return isCheckpointIntroEnabled;
}