// === Module 12010: GestureConstants ===

// Module 12010 (GestureConstants)
import _mod1655 from "module_1655" /* 1655 */;
import size from "module_2" /* 2 */;

const obj = { duration: 200, easing: null };
const Easing = _mod1655.Easing;
const Easing2 = _mod1655.Easing;
obj.easing = Easing.out(Easing2.poly(4));
const obj2 = { duration: 200, easing: null };
const Easing3 = _mod1655.Easing;
obj2.easing = Easing3.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("modules/gesture_handlers/native/GestureConstants.tsx");

export const PULL_GESTURE_ACTIVATION_DISTANCE = 10;
export const PULL_GESTURE_RESISTANCE = 3;
export const FLING_MIN_VELOCITY = 50;
export const FLING_MIN_DISTANCE = 40;
export const PULL_GESTURE_SNAP_TIMING = obj;
export const PULL_GESTURE_UNSNAP_TIMING = obj2;