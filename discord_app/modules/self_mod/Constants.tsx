// discord_app/modules/self_mod/Constants.tsx
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/self_mod/Constants.tsx");

export const LOCATION_CONTEXT_MOBILE = "SAFETY_WARNING_BANNER_MOBILE";
export const LOCATION_CONTEXT_WEB = "SAFETY_WARNING_BANNER_WEB";
export const UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY = "STRANGER_DANGER_UPVOTE_FEEDBACK_CONFIRMED";
export const DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY = "STRANGER_DANGER_DOWNVOTE_FEEDBACK_CONFIRMED";
export const STRANGER_DANGER_MORE_TIPS_MODAL_KEY = "STRANGER_DANGER_MORE_TIPS_MODAL";
export const SAFETY_TIPS_GRADIENT_START_COLOR = "#5865f200";
export const SAFETY_TIPS_GRADIENT_END_COLOR = "#5865F2";
export const FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR = "#5865f226";
export const TOAST_CHECKMARK_ICON_COLOR = "status-positive";
export const TOAST_SHIELD_ICON_COLOR = "text-brand";
export const TAKEOVER_MODAL_KEY = "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL";
export const VIBING_WUMPUS_MODAL_KEY = "INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_MODAL";
export const CRISIS_TEXT_LINE_URL = "https://www.crisistextline.org/";
export const CRISIS_TEXT_LINE_SMS_URI = "sms:741-741?body=DISCORD";
export const NOFILTR_URL = "https://nofiltr.org/resources-hub/";
export const THROUGHLINE_URL = "https://discord.findahelpline.com/";
export const REPORTED_USER_CONFIRMATION_TOAST_KEY = "STRANGER_DANGER_WARNING_REPORTED_USER_CONFIRMED";
export const MODAL_LOCATION_CONTEXT_MOBILE = "InappropriateConversationModal-mobile";
export const MODAL_LOCATION_CONTEXT_WEB = "InappropriateConversationModal-web";
export const ACTION_SHEET_CONTEXT_MOBILE = "SafetyToolsActionSheet-mobile";
export const SAFETY_TOOLS_MODAL_KEY = "PRIVATE_DM_SAFETY_TOOLS_MODAL";
export const WEB_SAFETY_TOOLS_CONTEXT = "SafetyToolsActionSheet-web";
export const getSafetyToolsActionSheetKey = function getSafetyToolsActionSheetKey(arg0) {
  return "SAFETY_TOOLS_ACTION_SHEET_" + arg0;
};
export const getStrangerDangerSafetyTips = function getStrangerDangerSafetyTips() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t["26fDv4"]), , ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t.togDfk);
  const intl3 = getSystemLocale.intl;
  items[2] = intl3.string(getSystemLocale.t.O4Ljca);
  return items;
};
export const getInappropriateConversationsSafetyTips = function getInappropriateConversationsSafetyTips() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.bCWw8l), , ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t.mzSucz);
  const intl3 = getSystemLocale.intl;
  items[2] = intl3.string(getSystemLocale.t.ZkmC7s);
  return items;
};
export const SAFETY_TOOLS_IGNORED_USER_TOAST_KEY = "SAFETY_TOOLS_IGNORED_USER_CONFIRMED";
export const SAFETY_TOOLS_UNIGNORED_USER_TOAST_KEY = "SAFETY_TOOLS_UNIGNORED_USER_CONFIRMED";