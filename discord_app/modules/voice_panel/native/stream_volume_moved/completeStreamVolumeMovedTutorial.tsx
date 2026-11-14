// discord_app/modules/voice_panel/native/stream_volume_moved/completeStreamVolumeMovedTutorial.tsx
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import StreamVolumeMovedStore from "StreamVolumeMovedStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const hideStreamVolumeCoachmark = StreamVolumeMovedStore.hideStreamVolumeCoachmark;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting(
  "modules/voice_panel/native/stream_volume_moved/completeStreamVolumeMovedTutorial.tsx",
);

export default function completeStreamVolumeMovedTutorial() {
  hideStreamVolumeCoachmark();
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE,
    { dismissAction: ContentDismissActionType.INDIRECT_ACTION },
  );
}
