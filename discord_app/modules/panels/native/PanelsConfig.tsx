// === Module 15367: isTimingConfig ===

// Module 15367 (isTimingConfig)
import set from "set" /* 2 */;
import Button from "Button" /* 1297 */;

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
const obj1 = { duration: 250, easing: Button.STANDARD_EASING };
const obj2 = { duration: 200, easing: Button.STANDARD_EASING };
const obj3 = { swipeSidePanelOpen: { duration: 250, easing: Button.DECELERATED_EASING }, swipeSidePanelClose: null, nonSwipeSidePanelOpen: null, nonSwipeSidePanelClose: null, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
const obj4 = { duration: 250, easing: Button.DECELERATED_EASING };
obj3[1] = { duration: 200, easing: Button.DECELERATED_EASING };
obj3[2] = obj1;
obj3[3] = obj2;
const obj5 = { duration: 200, easing: Button.DECELERATED_EASING };
const result = set.fileFinishedImporting("modules/panels/native/PanelsConfig.tsx");

export { isTimingConfig };
export const SIDE_PANEL_OPEN_DURATION_MS = 250;
export const SIDE_PANEL_CLOSE_DURATION_MS = 200;
export const DEFAULT_PANELS_ANIMATION_CONFIG = { swipeSidePanelOpen: obj, swipeSidePanelClose: obj, nonSwipeSidePanelOpen: obj1, nonSwipeSidePanelClose: obj2, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
export const ANDROID_PANELS_ANIMATION_CONFIG = obj3;