// discord_app/modules/media_keyboard/native/MediaKeyboardConstants.tsx
import set from "../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";

if (isMetaQuest.isMetaQuest()) {
  let obj = { slotHeight: 24, barColor: null, barWidth: null, barHeight: null, barMarginTop: null };
  obj[1] = ThemesDefault.colors.BACKGROUND_MOD_STRONG;
  obj[2] = ThemesDefault.space.PX_64;
  obj[3] = ThemesDefault.space.PX_8;
  obj[4] = ThemesDefault.space.PX_16;
} else {
  obj = { slotHeight: 16, barColor: null, barWidth: null, barHeight: null, barMarginTop: null };
  obj[1] = ThemesDefault.colors.BACKGROUND_MOD_MUTED;
  obj[2] = ThemesDefault.space.PX_32;
  obj[3] = ThemesDefault.space.PX_4;
  obj[4] = ThemesDefault.space.PX_4;
}
const result = set.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardConstants.tsx");

export const DRAG_HANDLE = obj;
export const HEADER_HANDLE_HEIGHT = obj.slotHeight;
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
