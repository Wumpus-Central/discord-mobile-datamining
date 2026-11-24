// discord_app/modules/checkpoint/useIsCheckpointRelaunchCoachmarkEligible.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import CheckpointExperiments from "CheckpointExperiments.tsx";
import useIsCheckpointOpen from "useIsCheckpointOpen.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointRelaunchCoachmarkEligible.tsx");

export const CHECKPOINT_RELAUNCH_COACHMARK_SOURCE = "relaunch_coachmark";
export function useIsCheckpointRelaunchCoachmarkEligible(YouBar) {
  let isCheckpointIntroEnabled = CheckpointExperiments.useIsCheckpointIntroEnabled(YouBar);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
    dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO,
  );
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
