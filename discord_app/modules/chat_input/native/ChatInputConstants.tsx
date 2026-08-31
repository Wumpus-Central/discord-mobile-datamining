// === Module 11502: TextAreaCta ===

// Module 11502 (TextAreaCta)
import set from "set" /* 2 */;
import Button from "Button" /* 1297 */;

let obj = { easing: Button.STANDARD_EASING, duration: 250 };
obj = { easing: Button.STANDARD_EASING, duration: 50 };
obj = { easing: Button.STANDARD_EASING, duration: 100 };
const obj1 = { easing: Button.STANDARD_EASING, duration: 200 };
const result = set.fileFinishedImporting("modules/chat_input/native/ChatInputConstants.tsx");

export const TextAreaCta = { CHANNEL_LIST: "channel_list", CHANNEL_LINK: "channel_link", BACK_TO_HOME: "back_to_home", VERIFY_PHONE: "verify_phone", VERIFY_EMAIL: "verify_email", JOIN_GUILD: "join_guild", FOLLOW_ANNOUNCEMENT: "follow_announcement", BACK_TO_DISCOVERY: "back_to_discovery", MEMBER_VERIFICATION: "member_verification", MEMBER_VERIFICATION_CONFIRMED: "member_verification_confirmed", MEMBER_VERIFICATION_REJECTED: "member_verification_rejected", UNBLOCK: "unblock" };
export const ChatInputActionType = { PHOTOS: 0, [0]: "PHOTOS", APPS: 1, [1]: "APPS", THREAD: 2, [2]: "THREAD", NITRO_GIFT: 3, [3]: "NITRO_GIFT", ALL_PHOTOS: 4, [4]: "ALL_PHOTOS", CAMERA: 5, [5]: "CAMERA" };
export const ChatInputOmniButtonActionType = { OPENED: "opened", CLOSED: "dismissed" };
export const CHAT_INPUT_ACTION_BUTTON_SIZE = 40;
export const CHAT_INPUT_ACTION_BUTTON_MARGIN = 4;
export const CHAT_INPUT_ACTION_BUTTON_WIDTH = 48;
export const CHAT_INPUT_PILL_PADDING = 2;
export const CHAT_INPUT_PILL_CONTENT_SIZE = 36;
export const CHAT_INPUT_MORE_BUTTON_WIDTH = 36;
export const CHAT_INPUT_HORIZONTAL_PADDING = 12;
export const CHAT_INPUT_HORIZONTAL_PADDING_PARENT = 4;
export const CHAT_INPUT_HEIGHT = 54;
export const CHAT_INPUT_TIMING_CONFIG = obj;
export const CHAT_INPUT_FLOATING_COLLAPSED_SCALE = 0.5;
export const CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG = obj;
export const CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG = obj;
export const CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG = obj1;
export const CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG = { mass: 0.5, damping: 13, stiffness: 400 };
export const CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS = 50;