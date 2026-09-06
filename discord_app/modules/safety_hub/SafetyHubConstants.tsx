// === Module 8419: SafetyHubView ===

// Module 8419 (SafetyHubView)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import encodeProperties from "encodeProperties" /* 1250 */;

const AnalyticsSections = ME.AnalyticsSections;
let obj = { SETTINGS: "SETTINGS", ACCOUNT_STANDING: "ACCOUNT_STANDING", GUILD_SETTINGS: "GUILD_SETTINGS", ENCRYPTION: "ENCRYPTION", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_PRIVACY: "DATA_PRIVACY" };
const items = [, , ];
({ SETTINGS: arr[0], ACCOUNT_STANDING: arr[1], ENCRYPTION: arr[2] } = obj);
obj = { SPEED_BUMP: AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP, COLLECT_SIGNAL: AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL, CONFIRM_SUBMISSION: AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION, REQUEST_SENT: AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT, THANKS: AnalyticsSections.APPEAL_INGESTION_THANKS, SPAM: AnalyticsSections.APPEAL_INGESTION_SPAM };
obj = { DIDNT_VIOLATE_POLICY: 0, [0]: "DIDNT_VIOLATE_POLICY", TOO_STRICT_UNFAIR: 1, [1]: "TOO_STRICT_UNFAIR", DONT_AGREE_PENALTY: 2, [2]: "DONT_AGREE_PENALTY", SOMETHING_ELSE: 3, [3]: "SOMETHING_ELSE" };
const items1 = [, , , ];
({ DIDNT_VIOLATE_POLICY: arr2[0], TOO_STRICT_UNFAIR: arr2[1], DONT_AGREE_PENALTY: arr2[2], SOMETHING_ELSE: arr2[3] } = obj);
const obj1 = { impression_group: null };
const frozen = Object.freeze(obj);
obj1[0] = encodeProperties.ImpressionGroups.APPEAL_INGESTION;
const obj2 = { SPEED_BUMP: "speed-bump", COLLECT_SIGNAL: "collect-signal", CONFIRM_SUBMISSION: "confirm-submission", REQUEST_SENT: "request-sent", THANKS: "thanks" };
const result = set.fileFinishedImporting("modules/safety_hub/SafetyHubConstants.tsx");
const prototype = function SafetyHubLinks() {
  return Object.create(new.target.prototype);
}.prototype;
prototype.TOS_LINK = "https://discord.com/terms";
prototype.COMMUNITY_GUIDELINES = "https://discord.com/guidelines";
prototype.APPEALS_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
prototype.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847";
prototype.AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
prototype.SPAM_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
prototype.LEARN_MORE_UU_APPEAL_LINK = "https://support.discord.com/hc/articles/360041820932";
prototype.APP_APPEAL_LINK = "https://dis.gd/app-appeal";
class SafetyHubPolicyNoticeKeys {
}
SafetyHubPolicyNoticeKeys.CLASSIFICATION_ID = "classification_id";
SafetyHubPolicyNoticeKeys.INCIDENT_TIMESTAMP = "incident_time";
const prototype2 = function SafetySystemNotificationEmbedKeys() {
  return Object.create(new.target.prototype);
}.prototype;
prototype2.ICON_TYPE = "icon_type";
prototype2.HEADER = "header";
prototype2.BODY = "body";
prototype2.CTAS = "ctas";
prototype2.TIMESTAMP = "timestamp";
prototype2.THEME = "theme";
prototype2.CLIENT_VERSION_MESSAGE = "client_version_message";
prototype2.LEARN_MORE_LINK = "learn_more_link";
prototype2.CLASSIFICATION_ID = "classification_id";

export const SafetyHubView = obj;
export const SafetyHubViewOrder = items;
export const AGE_APPEAL_ACTION_SHEET_NAME = "AUTOMATED_UNDERAGE_APPEAL";
export const SafetyHubLinks = prototype;
export { SafetyHubPolicyNoticeKeys };
export const SafetySystemNotificationCtaType = { POLICY_VIOLATION_DETAIL: "policy_violation_detail", LEARN_MORE_LINK: "learn_more_link" };
export const SafetySystemNotificationEmbedKeys = prototype2;
export const SafetyHubAnalyticsActions = { ViewViolationDetail: 0, [0]: "ViewViolationDetail", ViewViolationsDropdown: 1, [1]: "ViewViolationsDropdown", ClickLetUsKnow: 2, [2]: "ClickLetUsKnow", ClickAgeVerificationLink: 3, [3]: "ClickAgeVerificationLink", ClickSpamWebformLink: 4, [4]: "ClickSpamWebformLink", ClickLearnMoreLink: 5, [5]: "ClickLearnMoreLink", ClickCommunityGuidelinesLink: 6, [6]: "ClickCommunityGuidelinesLink", ClickWarningSystemHelpcenterLink: 7, [7]: "ClickWarningSystemHelpcenterLink", ClickAppAppealLink: 8, [8]: "ClickAppAppealLink" };
export const SafetyHubAnalyticsActionSource = { SystemDM: 0, [0]: "SystemDM", StandingTab: 1, [1]: "StandingTab", AppealIngestion: 2, [2]: "AppealIngestion" };
export const AppealIngestionSections = frozen;
export const AppealIngestionSignal = obj;
export const AppealIngestionSignalOrder = items1;
export const DEFAULT_MEDIA_MAX_WIDTH = 372;
export const DEFAULT_MEDIA_MAX_HEIGHT = 279;
export const VIDEO_PLACEHOLDER_WIDTH = 250;
export const VIDEO_PLACEHOLDER_HEIGHT = 250;
export const VIDEO_PLACEHOLDER_FILENAME = "video.png";
export const APPEAL_INGESTION_IMPRESSION_PROPERTIES = obj1;
export const AppealIngestionSlideTypes = obj2;
export const AppealIngestionSlidesOrder = { [obj2.SPEED_BUMP]: { next: obj2.COLLECT_SIGNAL, prev: null }, [obj2.COLLECT_SIGNAL]: { next: obj2.CONFIRM_SUBMISSION, prev: obj2.SPEED_BUMP }, [obj2.CONFIRM_SUBMISSION]: { next: obj2.REQUEST_SENT, prev: obj2.COLLECT_SIGNAL }, [obj2.REQUEST_SENT]: { next: null, prev: null } };
export const ViolationType = { USER: 1, [1]: "USER", GUILD_OWNER: 2, [2]: "GUILD_OWNER", GUILD_MEMBER: 3, [3]: "GUILD_MEMBER" };
export const SuspendedAgeCheckStatus = { PENDING: 1, [1]: "PENDING", UNBANNED: 2, [2]: "UNBANNED", VERIFIED_OTHER_VIOLATIONS_REMAIN: 3, [3]: "VERIFIED_OTHER_VIOLATIONS_REMAIN", UNDERAGE: 4, [4]: "UNDERAGE", UNDERAGE_MANUAL_REVIEW: 5, [5]: "UNDERAGE_MANUAL_REVIEW" };
export const AgeCheckStatus = { LOADING: "loading", ERROR: "error", SUCCESS: "success", FAILURE: "failure", NONE: "none", VERIFIED: "verified", VERIFIED_OTHER_VIOLATIONS_REMAIN: "verified_other_violations_remain", UNDERAGE: "underage", UNDERAGE_MANUAL_REVIEW: "underage_manual_review" };
export const AGE_CHECK_POLL_DELAY_MS = 2000;
export const AGE_CHECK_POLL_INTERVAL_MS = 15000;
export const AGE_CHECK_MAX_POLL_ATTEMPTS = 5;