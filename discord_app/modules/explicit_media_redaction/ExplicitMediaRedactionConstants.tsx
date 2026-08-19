// === Module 5004: USER_SETTING_ACTION_SHEET_KEY ===

// Module 5004 (USER_SETTING_ACTION_SHEET_KEY)
import obj132 from "obj132" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 693 */;

const items = [MessageEmbedTypes.MessageEmbedTypes.IMAGE, MessageEmbedTypes.MessageEmbedTypes.VIDEO, MessageEmbedTypes.MessageEmbedTypes.GIFV];
const set = new Set(items);
const result = obj132.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionConstants.tsx");

export const USER_SETTING_ACTION_SHEET_KEY = "SensitiveMediaFilterSetting";
export const EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_LEARN_MORE_ACTION_SHEET_KEY = "ExplicitMediaLearnMoreActionSheet";
export const EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaSenderFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY = "ExplicitMediaSettingsActionSheet";
export const SUPPORTED_EMBED_TYPES = set;
export const EXPLICIT_MEDIA_MIN_WIDTH = 146;
export const EXPLICIT_MEDIA_MIN_HEIGHT = 212;