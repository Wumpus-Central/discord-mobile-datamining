// === Module 14948: completeStreamVolumeMovedTutorial ===

// Module 14948 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 4876 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4889 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5075 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 14947 */;
import size from "module_2" /* 2 */;

const hideStreamVolumeCoachmark = StreamVolumeMovedStore.hideStreamVolumeCoachmark;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/completeStreamVolumeMovedTutorial.tsx");

export default function completeStreamVolumeMovedTutorial() {
  hideStreamVolumeCoachmark();
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE, { dismissAction: ContentDismissActionType.INDIRECT_ACTION });
};