// === Module 1607: MediaKeyboardConstants ===

// Module 1607 (MediaKeyboardConstants)
import nativeDefault from "native" /* 576 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import size from "module_2" /* 2 */;

if (MetaQuestUtils.isMetaQuest()) {
  let obj = { slotHeight: 24, barColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, barWidth: nativeDefault.space.PX_64, barHeight: nativeDefault.space.PX_8, barMarginTop: nativeDefault.space.PX_16 };
} else {
  obj = { slotHeight: 16, barColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, barWidth: nativeDefault.space.PX_32, barHeight: nativeDefault.space.PX_4, barMarginTop: nativeDefault.space.PX_4 };
}
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardConstants.tsx");

export const DRAG_HANDLE = obj;
export const HEADER_HANDLE_HEIGHT = obj.slotHeight;
export const MediaKeyboardTarget = { CHAT: 0, [0]: "CHAT", COMMAND: 1, [1]: "COMMAND", APP_LAUNCHER: 2, [2]: "APP_LAUNCHER", INTERACTION_MODAL: 3, [3]: "INTERACTION_MODAL" };
export const InAppCameraUsedViews = { FULLY_EXPANDED: "fully expanded" };
export const InAppCameraUsedCameraPreviewTypes = { CAMERA_TILE: "camera tile", CAMERA_BUTTON: "camera button", TAKE_A_PHOTO_BUTTON: "take a photo button" };
export const MediaPickerActionSheetEngagedActions = { FULLY_EXPANDED: "fully expanded", VIEW_ALL_CLICKED: "view all clicked", MEDIA_SELECTED: "media selected" };
export const MEDIA_PICKER_SEND_BUTTON_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };