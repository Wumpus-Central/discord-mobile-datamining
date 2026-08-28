// === Module 4439: MESSAGE_GROUP_SPACING ===

// Module 4439 (MESSAGE_GROUP_SPACING)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import setDefault from "set" /* 687 */;
import importDefaultResult from "fails" /* 584 */;

const ChannelStreamTypes = ME.ChannelStreamTypes;
let obj = { timeout: null, backoff: null, retries: 8 };
obj = { response: null, deadline: null };
const frozen = Object.freeze({ referencedAvatarProfile: false, referencedUsernameProfile: false, interactionAvatarProfile: false, interactionUsernameProfile: false, interactionData: false, avatarProfile: false, usernameProfile: false, emojiPicker: false, emojiBurstPicker: false, moreUtilities: false, contextMenu: false });
obj[0] = 10 * setDefault.Millis.SECOND;
obj[1] = setDefault.Millis.MINUTE;
obj[0] = obj;
const result = 0.5 * setDefault.Millis.SECOND;
importDefaultResult = new importDefaultResult(result, 60 * setDefault.Millis.SECOND);
obj[1] = importDefaultResult;
const result1 = set.fileFinishedImporting("modules/messages/MessageConstants.tsx");

export const MESSAGE_GROUP_SPACING = [0, 4, 8, 16, 24];
export const DEFAULT_COZY_SPACING = 16;
export const DEFAULT_COMPACT_SPACING = 0;
export const DEFAULT_POPOUTS = frozen;
export const MESSAGE_PADDING = 16;
export const PLACEHOLDER_BUFFER = 16;
export const NEW_MESSAGE_BAR_BUFFER = 32;
export const NEW_MESSAGE_BAR_BUFFER_LARGE = 64;
export const NEW_MESSAGE_BAR_ID = "---new-messages-bar";
export const LEGACY_SPOILER_ATTACHMENT_PREFIX = "SPOILER_";
export const DEFAULT_GUILD_OFFICIAL_COLOR = 3447003;
export const GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR = 687865856;
export const GUILD_OFFICIAL_HIGHLIGHT_ALPHA = 0.16;
export const FileUploadErrorTypes = { ERROR_SOURCE_UNKNOWN: "ERROR_SOURCE_UNKNOWN", PRECOMPRESSION_SUM_TOO_LARGE: "PRECOMPRESSION_SUM_TOO_LARGE", PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE: "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", POSTCOMPRESSION_SUM_TOO_LARGE: "POSTCOMPRESSION_SUM_TOO_LARGE", POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE: "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", UPLOAD_ATTACHMENT_MAX_SIZE_ERROR: "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", EXPLICIT_CONTENT: "EXPLICIT_CONTENT" };
export const MessageTagTypes = { SYSTEM_DM_TAG_SYSTEM_TYPE: "a", BOT_TAG_SERVER_TYPE: "b", BOT_TAG_BOT_TYPE: "d", POLL_TYPE: "g" };
export const DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE = 209715200;
export const isChannelStreamMessage = function isChannelStreamMessage(type) {
  return type.type === ChannelStreamTypes.MESSAGE;
};
export const MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS = obj;
export const MessageSendLocation = { PUSH_NOTIFICATION: "push_notification", CHAT_INPUT: "chat_input", SHARE_MODAL: "share_modal", VOICE_MESSAGE: "voice_message", THREAD_CREATION: "thread_creation", FORWARDING: "forwarding", USER_PROFILE: "user_profile", RETRY: "explicit_retry", OVERLAY: "overlay", ACTIVITY_SHARE: "activity_share", ICYMI: "icymi", INSTANT_UPLOAD: "instant_upload", APP_COMMAND: "app_command", PRIVATE_MESSAGE_COMMAND: "private_message_command", POLL_CREATION: "poll_creation", SHARE_CUSTOM_THEME: "share_custom_theme", GIF_REPLY: "gif_reply", STICKER_REPLY: "sticker_reply", SEND_WAVE: "send_wave", GIFTING: "gifting", CONTENT_INVENTORY_MEMBERLIST: "content_inventory_memberlist", GREET: "greet", SOCIAL_LAYER_STOREFRONT: "social_layer_storefront", COLLECTIBLES_SHOP: "collectibles_shop", GAME_SERVER_SHOP: "game_server_shop", MEDIA_MENTION: "media_mention", OTHER: "other" };