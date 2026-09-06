// === Module 10095: InAppNotificationConstants ===

// Module 10095 (InAppNotificationConstants)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import size from "module_2" /* 2 */;

const obj = { duration: 220, easing: null };
const Easing = ReanimatedRexport.Easing;
obj.easing = Easing.bezier(0.16, 1, 0.3, 1);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationConstants.tsx");

export const REACTION_MILESTONE_COUNTS = new Set([10, 25]);
export const IN_APP_NOTIFICATION_MAX_HEIGHT = 96;
export const NOTIFICATION_MAX_WIDTH = 480;
export const NOTIFICATION_PREVIEW_LINE_CLAMP = 2;
export const RIGHT_ACCESSORY_LEFT_MARGIN = nativeDefault.space.PX_8;
export const NOTIFICATION_CONTAINER_MARGIN = nativeDefault.space.PX_16;
export const PAN_INPUT_RANGE = [-100, 0, 100];
export const MIN_SWIPE_DISTANCE = 25;
export const MIN_SWIPE_VELOCITY = 100;
export const STARTED_SWIPE_THRESHOLD = 5;
export const extrapolateConfig = { extrapolateRight: "clamp", extrapolateLeft: "clamp" };
export const DEFAULT_ANIMATION_TIMING = obj;