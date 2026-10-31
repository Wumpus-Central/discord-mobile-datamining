// discord_app/modules/voice_panel/native/dock/VoicePanelDockConstants.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import GestureConstants from "../../../gesture_handlers/native/GestureConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const IS_IOS = VoicePanelConstants.IS_IOS;
const sum = nativeDefault.space.PX_24 + nativeDefault.space.PX_4;
let closure_1 = sum;
const PX_16 = nativeDefault.space.PX_16;
function getDockInset(arg0) {
  return sum + (PX_16 - sum) * arg0;
}
getDockInset.__closure = { DOCK_PADDING_HORIZONTAL: sum, DOCK_PADDING_HORIZONTAL_PRESSED: PX_16 };
getDockInset.__workletHash = 14458064168941;
getDockInset.__initData = {
  code: "function getDockInset_VoicePanelDockConstantsTsx1(pressed){const{DOCK_PADDING_HORIZONTAL,DOCK_PADDING_HORIZONTAL_PRESSED}=this.__closure;return DOCK_PADDING_HORIZONTAL+(DOCK_PADDING_HORIZONTAL_PRESSED-DOCK_PADDING_HORIZONTAL)*pressed;}",
};
const diff = nativeDefault.space.PX_16 - 4;
let c3 = diff;
const PX_24 = nativeDefault.space.PX_24;
function getVoicePanelDockPaddingBottom(arg0) {
  if (IS_IOS) {
    let bound = PX_24;
  } else {
    const _Math = Math;
    bound = Math.max(PX_24, arg0);
  }
  return bound;
}
getVoicePanelDockPaddingBottom.__closure = { IS_IOS, DOCK_PADDING_BOTTOM_MIN: PX_24 };
getVoicePanelDockPaddingBottom.__workletHash = 11572795728510;
getVoicePanelDockPaddingBottom.__initData = {
  code: "function getVoicePanelDockPaddingBottom_VoicePanelDockConstantsTsx2(safeAreaBottom){const{IS_IOS,DOCK_PADDING_BOTTOM_MIN}=this.__closure;return IS_IOS?DOCK_PADDING_BOTTOM_MIN:Math.max(DOCK_PADDING_BOTTOM_MIN,safeAreaBottom);}",
};
function getVoicePanelDockHeight(arg0) {
  if (typeof getVoicePanelDockPaddingBottom === "function") {
    if (IS_IOS) {
      let bound = PX_24;
    } else {
      const _Math = Math;
      bound = Math.max(PX_24, arg0);
    }
    return tmp + 40 + bound;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
getVoicePanelDockHeight.__closure = { DOCK_PADDING_TOP: diff, DOCK_ROW_HEIGHT: 40, getVoicePanelDockPaddingBottom };
getVoicePanelDockHeight.__workletHash = 14003451949817;
getVoicePanelDockHeight.__initData = {
  code: "function getVoicePanelDockHeight_VoicePanelDockConstantsTsx3(safeAreaBottom){const{DOCK_PADDING_TOP,DOCK_ROW_HEIGHT,getVoicePanelDockPaddingBottom}=this.__closure;return DOCK_PADDING_TOP+DOCK_ROW_HEIGHT+getVoicePanelDockPaddingBottom(safeAreaBottom);}",
};
const result = 1 / GestureConstants.PULL_GESTURE_RESISTANCE;
const result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockConstants.tsx");

export const DOCK_ROW_HEIGHT = 40;
export const DOCK_TILE_SIZE = 32;
export const DOCK_TILE_RADIUS = nativeDefault.radii.sm;
export const DOCK_GLYPH_GAP = nativeDefault.space.PX_4;
export const DOCK_PADDING_HORIZONTAL = sum;
export { getDockInset };
export const DOCK_PADDING_TOP = diff;
export { getVoicePanelDockHeight };
export function getVoicePanelDockButtonsTop(arg0) {
  return arg0 - diff - 4;
}
export const DOCK_GAP = nativeDefault.space.PX_12;
export const DOCK_DRAG_HANDLE_WIDTH = 48;
export const DOCK_DRAG_HANDLE_TOP = nativeDefault.space.PX_8;
export const DOCK_PULL_SNAP_DISTANCE = 160;
export const DOCK_PULL_SNAP_GIVE = 160 * (1 - result);
export const DOCK_EXPAND_GESTURE_CANCEL_DISTANCE = 24;
export const DOCK_TAP_MAX_MOVEMENT = 8;
export const DOCK_SETTLE_PROGRESS = 0.12;
export const DOCK_PRESS_EXTENSION = nativeDefault.space.PX_8;
export const DOCK_PRESS_PHYSICS = { mass: 0.4, damping: 26, stiffness: 320, overshootClamping: true };
