// discord_app/modules/in_app_notifications/native/InAppNotificationConstants.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod4115 from "../../reanimated/ReanimatedRexport.tsx";

const obj = { duration: 220, easing: null };
const Easing = _mod4115.Easing;
obj[1] = Easing.bezier(0.16, 1, 0.3, 1);
const set = new Set([10, 25]);
const result = obj132.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationConstants.tsx");

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