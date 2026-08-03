// === Module 15005: isTimingConfig ===

// Module 15005 (isTimingConfig)
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
const obj1 = { duration: 250, easing: require("Button").STANDARD_EASING };
const obj2 = { duration: 200, easing: require("Button").STANDARD_EASING };
const obj3 = { swipeSidePanelOpen: null, swipeSidePanelClose: null, nonSwipeSidePanelOpen: null, nonSwipeSidePanelClose: null, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
obj3[0] = { duration: 250, easing: require("Button").DECELERATED_EASING };
const obj4 = { duration: 250, easing: require("Button").DECELERATED_EASING };
obj3[1] = { duration: 200, easing: require("Button").DECELERATED_EASING };
obj3[2] = obj1;
obj3[3] = obj2;
const obj5 = { duration: 200, easing: require("Button").DECELERATED_EASING };
const result = require("set").fileFinishedImporting("modules/panels/native/PanelsConfig.tsx");

export { isTimingConfig };
export const SIDE_PANEL_OPEN_DURATION_MS = 250;
export const SIDE_PANEL_CLOSE_DURATION_MS = 200;
export const DEFAULT_PANELS_ANIMATION_CONFIG = { swipeSidePanelOpen: obj, swipeSidePanelClose: obj, nonSwipeSidePanelOpen: obj1, nonSwipeSidePanelClose: obj2, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
export const ANDROID_PANELS_ANIMATION_CONFIG = obj3;