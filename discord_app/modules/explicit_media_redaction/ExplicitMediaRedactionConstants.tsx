// === Module 7355: USER_SETTING_ACTION_SHEET_KEY ===

// Module 7355 (USER_SETTING_ACTION_SHEET_KEY)
import MessageEmbedTypes from "MessageEmbedTypes" /* 690 */;
import set from "set" /* 2 */;

const items = [MessageEmbedTypes.MessageEmbedTypes.IMAGE, MessageEmbedTypes.MessageEmbedTypes.VIDEO, MessageEmbedTypes.MessageEmbedTypes.GIFV];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionConstants.tsx");

export const USER_SETTING_ACTION_SHEET_KEY = "SensitiveMediaFilterSetting";
export const EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_LEARN_MORE_ACTION_SHEET_KEY = "ExplicitMediaLearnMoreActionSheet";
export const EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaSenderFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY = "ExplicitMediaSettingsActionSheet";
export const SUPPORTED_EMBED_TYPES = set;
export const EXPLICIT_MEDIA_MIN_WIDTH = 146;
export const EXPLICIT_MEDIA_MIN_HEIGHT = 212;