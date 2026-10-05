// === Module 9798: SafetyWarningUtils ===

// Module 9798 (SafetyWarningUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/self_mod/shared/SafetyWarningUtils.tsx");

export const trackViewedEvent = function trackViewedEvent(SAFETY_WARNING_MODAL_VIEWED, warningId) {
  let channelId;
  let parsed;
  let senderId;
  let warningType;
  warningId = warningId.warningId;
  ({ channelId, senderId, warningType } = warningId);
  const obj = { channel_id: channelId, warning_id: parsed, warning_type: warningType, other_user_id: senderId };
  parsed = undefined;
  const track = AnalyticsUtilsDefault.track;
  AnalyticsUtilsDefault;
  if (null != warningId) {
    const _parseInt = parseInt;
    parsed = parseInt(warningId);
  }
  track(SAFETY_WARNING_MODAL_VIEWED, obj);
};
export const ViewNameTypes = { SAFETY_WARNING_BANNER: "safety_warning_banner", SAFETY_TAKEOVER_MODAL: "safety_takeover_modal", SAFETY_TOOLS_NUDGE_TOOLTIP: "safety_tools_nudge_tooltip", SAFETY_TOOLS_BUTTON: "safety_tools_button" };
export const trackNamedViewEvent = function trackNamedViewEvent(warningId) {
  let channelId;
  let isNudgeWarning;
  let parsed;
  let senderId;
  let viewName;
  let warningType;
  warningId = warningId.warningId;
  ({ channelId, senderId, warningType, viewName, isNudgeWarning } = warningId);
  const obj = { channel_id: channelId, warning_id: parsed, warning_type: warningType, other_user_id: senderId, view_name: viewName, is_nudge_warning: isNudgeWarning };
  parsed = undefined;
  const track = AnalyticsUtilsDefault.track;
  const SAFETY_WARNING_VIEWED = AnalyticEvents.SAFETY_WARNING_VIEWED;
  AnalyticsUtilsDefault;
  if (null != warningId) {
    const _parseInt = parseInt;
    parsed = parseInt(warningId);
  }
  track(SAFETY_WARNING_VIEWED, obj);
};
export const CtaEventTypes = { OPEN_MORE_TIPS: "open_more_tips", USER_BANNER_DISMISS: "user_banner_dismiss", USER_BANNER_BLOCK_CONFIRM: "user_banner_block_confirm", USER_BANNER_BLOCK_AND_REPORT_CONFIRM: "user_banner_block_and_report_confirm", USER_BANNER_BLOCK_CANCEL: "user_banner_block_cancel", USER_BANNER_OPEN_SAFETY_TOOLS: "user_banner_open_safety_tools", USER_BANNER_IGNORE_CONFIRM: "user_banner_ignore_confirm", USER_BANNER_MUTE: "user_banner_mute", USER_MODAL_BLOCK_CONFIRM: "user_modal_block_confirm", USER_MODAL_BLOCK_CANCEL: "user_modal_block_cancel", USER_TAKEOVER_MODAL_DISMISS: "user_takeover_modal_dismiss", USER_TAKEOVER_MODAL_TAKE_ACTION: "user_takeover_modal_take_action", USER_TAKEOVER_MODAL_SAFETY_TIPS: "user_takeover_modal_safety_tips", USER_TAKEOVER_MODAL_BLOCK: "user_takeover_modal_block", USER_TAKEOVER_MODAL_UNBLOCK: "user_takeover_modal_unblock", USER_TAKEOVER_MODAL_REPORT: "user_takeover_modal_report", USER_TAKEOVER_MODAL_NO_FILTR: "user_takeover_modal_no_filtr", USER_TAKEOVER_MODAL_THROUGHLINE: "user_takeover_modal_throughline", USER_TAKEOVER_MODAL_CTL: "user_takeover_modal_ctl", USER_TAKEOVER_MODAL_CTL_SMS: "user_takeover_modal_ctl_sms", USER_TAKEOVER_MODAL_CTL_WEB: "user_takeover_modal_ctl_web", USER_SAFETY_TOOLS_BUTTON_CLICK: "user_safety_tools_button_click", USER_SAFETY_TOOLS_IGNORE: "user_safety_tools_ignore", USER_SAFETY_TOOLS_UNIGNORE: "user_safety_tools_unignore", USER_SAFETY_TOOLS_BLOCK_CONFIRM: "user_safety_tools_block_confirm", USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM: "user_safety_tools_block_and_report_confirm", USER_SAFETY_TOOLS_BLOCK_CANCEL: "user_safety_tools_block_cancel", USER_SAFETY_TOOLS_UNBLOCK: "user_safety_tools_unblock", USER_SAFETY_TOOLS_REPORT: "user_safety_tools_report", USER_SAFETY_TOOLS_NO_FILTR: "user_safety_tools_no_filtr", USER_SAFETY_TOOLS_THROUGHLINE: "user_safety_tools_throughline", USER_SAFETY_TOOLS_CTL: "user_safety_tools_ctl", USER_SAFETY_TOOLS_CTL_SMS: "user_safety_tools_ctl_sms", USER_SAFETY_TOOLS_CTL_WEB: "user_safety_tools_ctl_web", USER_SAFETY_TOOLS_VIBING_WUMPUS: "user_safety_tools_vibing_wumpus", USER_SAFETY_TOOLS_SAFETY_TIPS: "user_safety_tools_safety_tips", USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS: "user_safety_tools_about_safety_alerts", USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS: "user_safety_tools_about_safety_alerts_dismiss", USER_SAFETY_TOOLS_DISMISS: "user_safety_tools_dismiss", USER_MODAL_LEARN_MORE: "user_modal_learn_more", USER_MODAL_MUTE: "user_modal_mute", USER_MODAL_UNMUTE: "user_modal_unmute", USER_MODAL_IGNORE: "user_modal_ignore", USER_MODAL_UNIGNORE: "user_modal_unignore", FEEDBACK_UPVOTE: "feedback_upvote", FEEDBACK_DOWNVOTE: "feedback_downvote" };
export const trackCtaEvent = function trackCtaEvent(warningId) {
  let channelId;
  let cta;
  let isNudgeWarning;
  let parsed;
  let senderId;
  let warningType;
  warningId = warningId.warningId;
  ({ channelId, senderId, warningType, cta, isNudgeWarning } = warningId);
  const obj = { channel_id: channelId, warning_id: parsed, warning_type: warningType, other_user_id: senderId, cta, is_nudge_warning: isNudgeWarning };
  parsed = undefined;
  const track = AnalyticsUtilsDefault.track;
  const SAFETY_WARNING_CTA_CLICKED = AnalyticEvents.SAFETY_WARNING_CTA_CLICKED;
  AnalyticsUtilsDefault;
  if (null != warningId) {
    const _parseInt = parseInt;
    parsed = parseInt(warningId);
  }
  track(SAFETY_WARNING_CTA_CLICKED, obj);
};
export const getUserIsTeen = function getUserIsTeen() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};