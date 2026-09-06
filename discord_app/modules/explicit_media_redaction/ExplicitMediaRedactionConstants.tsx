// === Module 7601: ExplicitMediaRedactionConstants ===

// Module 7601 (ExplicitMediaRedactionConstants)
import MessageEmbedTypes from "MessageEmbedTypes" /* 1095 */;
import size from "module_2" /* 2 */;

const items = [MessageEmbedTypes.MessageEmbedTypes.IMAGE, MessageEmbedTypes.MessageEmbedTypes.VIDEO, MessageEmbedTypes.MessageEmbedTypes.GIFV];
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionConstants.tsx");

export const USER_SETTING_ACTION_SHEET_KEY = "SensitiveMediaFilterSetting";
export const EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_LEARN_MORE_ACTION_SHEET_KEY = "ExplicitMediaLearnMoreActionSheet";
export const EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaSenderFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY = "ExplicitMediaSettingsActionSheet";
export const SUPPORTED_EMBED_TYPES = new Set(items);
export const EXPLICIT_MEDIA_MIN_WIDTH = 146;
export const EXPLICIT_MEDIA_MIN_HEIGHT = 212;