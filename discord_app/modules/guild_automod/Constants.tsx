// discord_app/modules/guild_automod/Constants.tsx
import set from "set" /* 2 */;
import AutomodTriggerType from "AutomodTriggerType" /* 11043 */;
import AutomodEventType from "AutomodEventType" /* 11044 */;
import AutomodActionType from "AutomodActionType" /* 11045 */;

const items = [AutomodTriggerType.AutomodTriggerType.USER_PROFILE, AutomodTriggerType.AutomodTriggerType.SERVER_POLICY, AutomodTriggerType.AutomodTriggerType.MENTION_SPAM, AutomodTriggerType.AutomodTriggerType.ML_SPAM, AutomodTriggerType.AutomodTriggerType.DEFAULT_KEYWORD_LIST, AutomodTriggerType.AutomodTriggerType.KEYWORD];
const result = set.fileFinishedImporting("modules/guild_automod/Constants.tsx");

export const AutomodEventType = AutomodEventType.AutomodEventType;
export const AutomodTriggerType = AutomodTriggerType.AutomodTriggerType;
export const AutomodActionType = AutomodActionType.AutomodActionType;
export const KeywordPreset = { PROFANITY: 1, [1]: "PROFANITY", SEXUAL_CONTENT: 2, [2]: "SEXUAL_CONTENT", SLURS: 3, [3]: "SLURS" };
export const AUTOMOD_TRIGGER_TYPES = items;
export const MAX_KEYWORDS_PER_KEYWORD_FILTER = 1000;
export const MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE = 100;
export const MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE = 1000;
export const MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER = 10;
export const MAX_CHARACTERS_PER_KEYWORD = 60;
export const MIN_CHARACTERS_PER_KEYWORD = 1;
export const MIN_REGEX_PATTERN_LENGTH = 1;
export const MAX_REGEX_PATTERN_LENGTH = 260;
export const MAX_RULE_NAME_LENGTH = 100;
export const MIN_MENTION_SPAM_LIMIT = 1;
export const MAX_MENTION_SPAM_LIMIT = 50;
export const MENTION_SPAM_LIMIT_DEFAULT = 20;
export const MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH = 300;
export const SUBMIT_FEEDBACK_MODAL_KEY = "automod-submit-feedback";
export const QUARANTINE_USER_ALERT_KEY = "automod-profile-quarantine-alert";