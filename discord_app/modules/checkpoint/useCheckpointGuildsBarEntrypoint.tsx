// discord_app/modules/checkpoint/useCheckpointGuildsBarEntrypoint.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import CheckpointExperiments from "CheckpointExperiments.tsx";
import useSelectedDismissibleContent from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
const ContentDismissActionType = fn(4763).ContentDismissActionType;
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
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO,
    { dismissAction: INDIRECT_ACTION },
  );
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
