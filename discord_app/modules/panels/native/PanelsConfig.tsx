// === Module 15968: PanelsConfig ===

// Module 15968 (PanelsConfig)
import native from "native" /* 1188 */;
import size from "module_2" /* 2 */;

function isTimingConfig(duration) {
  return null != duration && null != duration.duration;
}
isTimingConfig.__closure = {};
isTimingConfig.__workletHash = 14033676769786;
isTimingConfig.__initData = { code: "function isTimingConfig_PanelsConfigTsx1(obj){return obj!=null&&obj.duration!=null;}" };
const obj = { mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
const obj2 = { damping: 30 };
const merged = Object.assign(obj);
const obj3 = { damping: 20 };
const merged1 = Object.assign(obj);
const obj4 = { duration: 250, easing: native.STANDARD_EASING };
const obj5 = { duration: 200, easing: native.STANDARD_EASING };
const obj6 = { swipeSidePanelOpen: { duration: 250, easing: native.DECELERATED_EASING }, swipeSidePanelClose: { duration: 200, easing: native.DECELERATED_EASING }, nonSwipeSidePanelOpen: obj4, nonSwipeSidePanelClose: obj5, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
({ duration: 250, easing: native.DECELERATED_EASING });
({ duration: 200, easing: native.DECELERATED_EASING });
const result = size.fileFinishedImporting("modules/panels/native/PanelsConfig.tsx");

export { isTimingConfig };
export const SIDE_PANEL_OPEN_DURATION_MS = 250;
export const SIDE_PANEL_CLOSE_DURATION_MS = 200;
export const DEFAULT_PANELS_ANIMATION_CONFIG = { swipeSidePanelOpen: obj2, swipeSidePanelClose: obj3, nonSwipeSidePanelOpen: obj4, nonSwipeSidePanelClose: obj5, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
export const ANDROID_PANELS_ANIMATION_CONFIG = obj6;