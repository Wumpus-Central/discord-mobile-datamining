// discord_app/modules/gesture_handlers/native/GestureConstants.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { duration: 200, easing: null };
const Easing = ReanimatedRexport.Easing;
const Easing2 = ReanimatedRexport.Easing;
obj.easing = Easing.out(Easing2.poly(4));
const obj2 = { duration: 200, easing: null };
const Easing3 = ReanimatedRexport.Easing;
obj2.easing = Easing3.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("modules/gesture_handlers/native/GestureConstants.tsx");

export const PULL_GESTURE_ACTIVATION_DISTANCE = 10;
export const PULL_GESTURE_RESISTANCE = 3;
export const FLING_MIN_VELOCITY = 50;
export const FLING_MIN_DISTANCE = 40;
export const PULL_GESTURE_SNAP_TIMING = obj;
export const PULL_GESTURE_UNSNAP_TIMING = obj2;
