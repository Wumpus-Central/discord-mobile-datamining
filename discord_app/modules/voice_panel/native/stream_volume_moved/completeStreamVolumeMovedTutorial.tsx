// === Module 15798: completeStreamVolumeMovedTutorial ===

// Module 15798 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 5143 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5156 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5342 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 15797 */;
import size from "module_2" /* 2 */;

const hideStreamVolumeCoachmark = StreamVolumeMovedStore.hideStreamVolumeCoachmark;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/completeStreamVolumeMovedTutorial.tsx");

export default function completeStreamVolumeMovedTutorial() {
  hideStreamVolumeCoachmark();
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE, { dismissAction: ContentDismissActionType.INDIRECT_ACTION });
};