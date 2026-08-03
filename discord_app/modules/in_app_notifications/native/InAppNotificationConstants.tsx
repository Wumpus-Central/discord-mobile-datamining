// === Module 10414: set ===

// Module 10414 (set)
import { Easing } from "module_4116";
import set from "set";

let set = new Set([10, 25]);
const obj = { duration: 220, easing: null };
obj[1] = Easing.bezier(0.16, 1, 0.3, 1);
const result = set.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationConstants.tsx");

export const REACTION_MILESTONE_COUNTS = set;
export const IN_APP_NOTIFICATION_MAX_HEIGHT = 96;
export const NOTIFICATION_MAX_WIDTH = 480;
export const NOTIFICATION_PREVIEW_LINE_CLAMP = 2;
export const EXPANDABLE_MIN_WINDOW_HEIGHT = 500;
export const RIGHT_ACCESSORY_LEFT_MARGIN = require("Themes").space.PX_8;
export const NOTIFICATION_CONTAINER_MARGIN = require("Themes").space.PX_16;
export const PAN_INPUT_RANGE = [-100, 0, 100];
export const NOTIFICATION_BOB_RANGE = 20;
export const MIN_SWIPE_DISTANCE = 25;
export const MIN_SWIPE_VELOCITY = 100;
export const STARTED_SWIPE_THRESHOLD = 5;
export const extrapolateConfig = { extrapolateRight: "clamp", extrapolateLeft: "clamp" };
export const DEFAULT_ANIMATION_TIMING = obj;