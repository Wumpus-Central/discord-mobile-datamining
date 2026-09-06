// === Module 16007: PanelsConfig ===

// Module 16007 (PanelsConfig)
import native from "native" /* 1178 */;
import size from "module_2" /* 2 */;

function isTimingConfig(duration) {
  return null != duration && null != duration.duration;
}
isTimingConfig.__closure = {};
isTimingConfig.__workletHash = 14033676769786;
isTimingConfig.__initData = { code: "function isTimingConfig_PanelsConfigTsx1(obj){return obj!=null&&obj.duration!=null;}" };
let obj = { mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
obj = { damping: 30 };
const merged = Object.assign(obj);
obj = { damping: 20 };
const merged1 = Object.assign(obj);
const obj1 = { duration: 250, easing: native.STANDARD_EASING };
const obj2 = { duration: 200, easing: native.STANDARD_EASING };
const obj3 = { swipeSidePanelOpen: { duration: 250, easing: native.DECELERATED_EASING }, swipeSidePanelClose: null, nonSwipeSidePanelOpen: null, nonSwipeSidePanelClose: null, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
const obj4 = { duration: 250, easing: native.DECELERATED_EASING };
obj3.swipeSidePanelClose = { duration: 200, easing: native.DECELERATED_EASING };
obj3.nonSwipeSidePanelOpen = obj1;
obj3.nonSwipeSidePanelClose = obj2;
const result = size.fileFinishedImporting("modules/panels/native/PanelsConfig.tsx");

export { isTimingConfig };
export const SIDE_PANEL_OPEN_DURATION_MS = 250;
export const SIDE_PANEL_CLOSE_DURATION_MS = 200;
export const DEFAULT_PANELS_ANIMATION_CONFIG = { swipeSidePanelOpen: obj, swipeSidePanelClose: obj, nonSwipeSidePanelOpen: obj1, nonSwipeSidePanelClose: obj2, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
export const ANDROID_PANELS_ANIMATION_CONFIG = obj3;