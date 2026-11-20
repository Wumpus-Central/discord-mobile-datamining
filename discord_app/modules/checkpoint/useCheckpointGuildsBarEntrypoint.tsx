// discord_app/modules/checkpoint/useCheckpointGuildsBarEntrypoint.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const ContentDismissActionType = fn(4640).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/useCheckpointGuildsBarEntrypoint.tsx");

export const CHECKPOINT_GUILDS_BAR_SOURCE = "guilds_bar";
export function useCheckpointGuildsBarEntrypoint(GuildsBar) {
  const isCheckpointIntroEnabled = markAsDismissed(visible[3]).useIsCheckpointIntroEnabled(GuildsBar);
  const obj = markAsDismissed(visible[3]);
  if (isCheckpointIntroEnabled) {
    items = [tmp(tmp2[5]).DismissibleContent.BUILD_A_BEAR_INTRO];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp4 = isCheckpointOpen(markAsDismissed(visible[4]).useSelectedDismissibleContent(items1), 2);
  markAsDismissed = tmp4[1];
  visible = tmp4[0] === tmp(tmp2[5]).DismissibleContent.BUILD_A_BEAR_INTRO;
  const obj2 = markAsDismissed(visible[4]);
  isCheckpointOpen = markAsDismissed(visible[6]).useIsCheckpointOpen();
  const items2 = [visible, isCheckpointOpen, markAsDismissed];
  const effect = noop.useEffect(() => {
    let tmp = visible;
    if (visible) {
      tmp = isCheckpointOpen;
    }
    if (tmp) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items2);
  return { visible, markAsDismissed };
}
