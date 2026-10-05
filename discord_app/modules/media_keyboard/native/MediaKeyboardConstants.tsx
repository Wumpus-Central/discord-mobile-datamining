// discord_app/modules/media_keyboard/native/MediaKeyboardConstants.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
if (MetaQuestUtils.isMetaQuest()) {
  obj2 = {
    slotHeight: 24,
    barColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    barWidth: nativeDefault.space.PX_64,
    barHeight: nativeDefault.space.PX_8,
    barMarginTop: nativeDefault.space.PX_16,
  };
  const obj = {
    slotHeight: 24,
    barColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    barWidth: nativeDefault.space.PX_64,
    barHeight: nativeDefault.space.PX_8,
    barMarginTop: nativeDefault.space.PX_16,
  };
} else {
  obj2 = {
    slotHeight: 16,
    barColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    barWidth: nativeDefault.space.PX_32,
    barHeight: nativeDefault.space.PX_4,
    barMarginTop: nativeDefault.space.PX_4,
  };
}
const slotHeight = obj2.slotHeight;
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardConstants.tsx");

export const DRAG_HANDLE = obj2;
export const HEADER_HANDLE_HEIGHT = slotHeight;
export const MediaKeyboardTarget = {
  CHAT: 0,
  [0]: "CHAT",
  COMMAND: 1,
  [1]: "COMMAND",
  APP_LAUNCHER: 2,
  [2]: "APP_LAUNCHER",
  INTERACTION_MODAL: 3,
  [3]: "INTERACTION_MODAL",
};
export const InAppCameraUsedViews = { FULLY_EXPANDED: "fully expanded" };
export const InAppCameraUsedCameraPreviewTypes = {
  CAMERA_TILE: "camera tile",
  CAMERA_BUTTON: "camera button",
  TAKE_A_PHOTO_BUTTON: "take a photo button",
};
export const MediaPickerActionSheetEngagedActions = {
  FULLY_EXPANDED: "fully expanded",
  VIEW_ALL_CLICKED: "view all clicked",
  MEDIA_SELECTED: "media selected",
};
export const MEDIA_PICKER_SEND_BUTTON_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
