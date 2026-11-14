// === Module 15764: completeStreamVolumeMovedTutorial ===

// Module 15764 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 5139 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5348 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 15763 */;
import size from "module_2" /* 2 */;

const hideStreamVolumeCoachmark = StreamVolumeMovedStore.hideStreamVolumeCoachmark;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/completeStreamVolumeMovedTutorial.tsx");

export default function completeStreamVolumeMovedTutorial() {
  hideStreamVolumeCoachmark();
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE, { dismissAction: ContentDismissActionType.INDIRECT_ACTION });
};