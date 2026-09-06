// discord_app/modules/in_app_notifications/native/InAppNotificationConstants.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod4296 from "../../reanimated/ReanimatedRexport.tsx";
import set from "../../../../_runtime/00002_set.js";

let set = new Set([10, 25]);
const obj = { duration: 220, easing: null };
const Easing = _mod4296.Easing;
obj[1] = Easing.bezier(0.16, 1, 0.3, 1);
const result = set.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationConstants.tsx");

export const REACTION_MILESTONE_COUNTS = set;
export const IN_APP_NOTIFICATION_MAX_HEIGHT = 96;
export const NOTIFICATION_MAX_WIDTH = 480;
export const NOTIFICATION_PREVIEW_LINE_CLAMP = 2;
export const RIGHT_ACCESSORY_LEFT_MARGIN = ThemesDefault.space.PX_8;
export const NOTIFICATION_CONTAINER_MARGIN = ThemesDefault.space.PX_16;
export const PAN_INPUT_RANGE = [-100, 0, 100];
export const MIN_SWIPE_DISTANCE = 25;
export const MIN_SWIPE_VELOCITY = 100;
export const STARTED_SWIPE_THRESHOLD = 5;
export const extrapolateConfig = { extrapolateRight: "clamp", extrapolateLeft: "clamp" };
export const DEFAULT_ANIMATION_TIMING = obj;
