// === Module 12580: useCheckpointGuildsBarEntrypoint ===

// Module 12580 (useCheckpointGuildsBarEntrypoint)
import dismissible_content from "dismissible_content" /* 4845 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6738 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 9519 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const ContentDismissActionType = fn(4858).ContentDismissActionType;
const guilds_bar = "guilds_bar";
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/useCheckpointGuildsBarEntrypoint.tsx");

export const CHECKPOINT_GUILDS_BAR_SOURCE = "guilds_bar";
export function dismissCheckpointIntro(arg0) {
  if (arg0 === guilds_bar) {
    let INDIRECT_ACTION = ContentDismissActionType.TAKE_ACTION;
  } else {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO, { dismissAction: INDIRECT_ACTION });
}
export function useCheckpointGuildsBarEntrypoint(GuildsBar) {
  const isCheckpointIntroEnabled = CheckpointExperiments.useIsCheckpointIntroEnabled(GuildsBar);
  if (isCheckpointIntroEnabled) {
    items = [dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp4 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items1), 2);
  [tmp5, tmp6] = tmp4;
  return { visible: tmp5 === dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO, markAsDismissed: tmp6 };
}