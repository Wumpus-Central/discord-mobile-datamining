// === Module 12493: InAppNotificationConstants ===

// Module 12493 (InAppNotificationConstants)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import size from "module_2" /* 2 */;

let Easing;
const set = new Set([10, 25]);
const PX_8 = nativeDefault.space.PX_8;
const obj = { duration: 220, easing: Easing.bezier(0.16, 1, 0.3, 1) };
const PX_16 = nativeDefault.space.PX_16;
Easing = ReanimatedRexport.Easing;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationConstants.tsx");

export const REACTION_MILESTONE_COUNTS = set;
export const IN_APP_NOTIFICATION_MAX_HEIGHT = 96;
export const NOTIFICATION_MAX_WIDTH = 480;
export const NOTIFICATION_PREVIEW_LINE_CLAMP = 2;
export const RIGHT_ACCESSORY_LEFT_MARGIN = PX_8;
export const NOTIFICATION_CONTAINER_MARGIN = PX_16;
export const PAN_INPUT_RANGE = [-100, 0, 100];
export const MIN_SWIPE_DISTANCE = 25;
export const MIN_SWIPE_VELOCITY = 100;
export const STARTED_SWIPE_THRESHOLD = 5;
export const extrapolateConfig = { extrapolateRight: "clamp", extrapolateLeft: "clamp" };
export const DEFAULT_ANIMATION_TIMING = obj;