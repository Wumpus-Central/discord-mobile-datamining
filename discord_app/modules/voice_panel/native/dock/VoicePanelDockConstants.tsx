// discord_app/modules/voice_panel/native/dock/VoicePanelDockConstants.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";

let sum = nativeDefault.space.PX_24 + nativeDefault.space.PX_4;
const items = [
  {
    code: "(function getDockInset_VoicePanelDockConstantsTsx1(pressed){let[DOCK_PADDING_HORIZONTAL,DOCK_PADDING_HORIZONTAL_PRESSED]=this.__closure;return DOCK_PADDING_HORIZONTAL+(DOCK_PADDING_HORIZONTAL_PRESSED-DOCK_PADDING_HORIZONTAL)*pressed;})",
  },
  sum,
  nativeDefault.space.PX_16,
];
let c0;
let c1;
[tmp3, tmp4, tmp5] = items;
function getDockInset(arg0) {
  return c0 + (c1 - c0) * arg0;
}
const items1 = [tmp4, tmp5];
getDockInset.__closure = items1;
getDockInset.__workletHash = 14543646828628;
getDockInset.__initData = tmp3;
const diff = nativeDefault.space.PX_16 - 4;
let closure_129_0 = diff;
const items2 = [
  {
    code: "(function getVoicePanelDockPaddingBottom_VoicePanelDockConstantsTsx2(safeAreaBottom){let[IS_IOS,DOCK_PADDING_BOTTOM_MIN]=this.__closure;return IS_IOS?DOCK_PADDING_BOTTOM_MIN:Math.max(DOCK_PADDING_BOTTOM_MIN,safeAreaBottom);})",
  },
  fn(11363).IS_IOS,
  nativeDefault.space.PX_24,
];
let closure_130_0;
let closure_130_1;
[tmp7, tmp8, tmp9] = items2;
function getVoicePanelDockPaddingBottom(arg0) {
  if (c0) {
    let bound = c1;
  } else {
    const _Math = Math;
    bound = Math.max(c1, arg0);
  }
  return bound;
}
const items3 = [tmp8, tmp9];
getVoicePanelDockPaddingBottom.__closure = items3;
getVoicePanelDockPaddingBottom.__workletHash = 1051676343655;
getVoicePanelDockPaddingBottom.__initData = tmp7;
const items4 = [
  {
    code: "(function getVoicePanelDockHeight_VoicePanelDockConstantsTsx3(safeAreaBottom){let[DOCK_PADDING_TOP,DOCK_ROW_HEIGHT,getVoicePanelDockPaddingBottom]=this.__closure;return DOCK_PADDING_TOP+DOCK_ROW_HEIGHT+getVoicePanelDockPaddingBottom(safeAreaBottom);})",
  },
  diff,
  40,
  getVoicePanelDockPaddingBottom,
];
let closure_131_0;
let closure_131_1;
let closure_131_2;
[tmp10, tmp11, tmp12, tmp13] = items4;
function getVoicePanelDockHeight(arg0) {
  const sum = c0 + c1;
  return sum + React2(arg0);
}
const items5 = [tmp11, tmp12, tmp13];
getVoicePanelDockHeight.__closure = items5;
getVoicePanelDockHeight.__workletHash = 8239861783104;
getVoicePanelDockHeight.__initData = tmp10;
const result = 1 / fn(11382).PULL_GESTURE_RESISTANCE;
const size = fn(2);
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
  return arg0 - c0 - 4;
}
export const DOCK_GAP = nativeDefault.space.PX_12;
export const DOCK_FADE_TIMING = { duration: 200 };
export const DOCK_DRAG_HANDLE_WIDTH = 48;
export const DOCK_DRAG_HANDLE_TOP = nativeDefault.space.PX_8;
export const DOCK_PULL_SNAP_DISTANCE = 160;
export const DOCK_PULL_SNAP_GIVE = 160 * (1 - result);
export const DOCK_EXPAND_GESTURE_CANCEL_DISTANCE = 24;
export const DOCK_TAP_MAX_MOVEMENT = 8;
export const DOCK_SETTLE_PROGRESS = 0.12;
export const DOCK_PRESS_EXTENSION = nativeDefault.space.PX_8;
export const DOCK_PRESS_PHYSICS = { mass: 0.4, damping: 26, stiffness: 320, overshootClamping: true };
