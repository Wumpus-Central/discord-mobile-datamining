// discord_app/modules/age_assurance/AgeVerificationAnalyticsUtils.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationAnalyticsUtils.tsx");

export const AgeVerificationModalEntryPoint = {
  GET_STARTED_MODAL: "get_started_modal",
  RETRY_MODAL: "retry_modal",
  NSFW_GUILD: "nsfw_guild",
  NSFW_AGE_GATE: "nsfw_age_gate",
  OBSCURED_MEDIA: "obscured_media",
  SYSTEM_DM_RETRY_BUTTON: "system_dm_retry_button",
  SYSTEM_DM_MANUAL_REVIEW: "system_dm_manual_review",
  DEV_TOOLS_QUICK_ACTIONS: "dev_tools_quick_actions",
  SENSITIVE_MEDIA_FILTER_SETTINGS: "sensitive_media_filter_settings",
  SENSITIVE_MEDIA_LEARN_MORE: "sensitive_media_learn_more",
  MESSAGE_REQUESTS_SETTINGS: "message_requests_settings",
  ACCOUNT_AGE_GROUP: "account_age_group",
  FORUM_POST_MEDIA_PREVIEW: "forum_post_media_preview",
  SEARCH_MEDIA_PREVIEW: "search_media_preview",
  CONTENT_AND_SOCIAL_NOTICE: "content_and_social_notice",
  DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL: "dev_tools_age_verification_retry_modal",
  SAFETY_FLOWS: "safety_flows",
  AUTOMATED_UNDERAGE_APPEALS: "automated_underage_appeals",
  EXPRESSIVE_GET_STARTED: "expressive_get_started",
  STAGE_CHANNEL_RAISE_HAND: "stage_channel_raise_hand",
  STAGE_CHANNEL_AGE_VERIFICATION_PROMPT: "stage_channel_age_verification_prompt",
  START_STAGE_PROMPT: "start_stage_prompt",
  AGE_RESTRICTED_DM_COMMANDS_SETTINGS: "age_restricted_dm_commands_settings",
  AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS: "age_restricted_servers_access_settings",
  FAMILY_CENTER_CONNECTION: "family_center_connection",
  PARENTAL_CONSENT_LOCKOUT: "parental_consent_lockout",
  TINY_BRONCO_POPOVER: "tiny_bronco_popover",
};
export const AgeVerificationModalVersion = {
  PRIMARY: 1,
  [1]: "PRIMARY",
  RETRY: 2,
  [2]: "RETRY",
  EXPRESSIVE_PRIMARY: 3,
  [3]: "EXPRESSIVE_PRIMARY",
  SAFETY_FLOWS: 4,
  [4]: "SAFETY_FLOWS",
  EXPRESSIVE_V2: 5,
  [5]: "EXPRESSIVE_V2",
};
export const AgeVerificationModalCta = {
  MANUAL_REVIEW_REQUEST: "manual_review_request",
  LEARN_MORE: "learn_more",
  GET_STARTED: "get_started",
  SYSTEM_DMS_LEARN_MORE: "system_dms_learn_more",
  TRUSTED_PROVIDERS: "trusted_providers",
  METHOD_SELECT: "method_select",
  LOG_OUT: "log_out",
};
export const AgeVerificationDmCta = {
  RETRY: "retry",
  CONNECT_TO_TEEN: "connect_to_teen",
  MANUAL_REVIEW: "manual_review",
};
export const NsfwSpaceWarningModalType = {
  NSFW_CHANNEL_AGE_VERIFY: "nsfw_channel_age_verify",
  NSFW_CHANNEL_UNDERAGE: "nsfw_channel_underage",
  NSFW_CHANNEL_VERIFIED: "nsfw_channel_verified",
  GUILD_LARGE_SERVER: "guild_large_server",
  GUILD_LARGE_SERVER_UNDERAGE: "guild_large_server_underage",
  NSFW_EMBEDDED_ACTIVITY: "nsfw_embedded_activity",
  NSFW_APP_LISTING: "nsfw_app_listing",
  SPOILER_CHANNEL: "spoiler_channel",
};
export const NsfwSpaceWarningModalCta = {
  NSFW_CHANNEL_AGREE_CTA: "nsfw_channel_agree_cta",
  NSFW_CHANNEL_DISAGREE_CTA: "nsfw_channel_disagree_cta",
};
export const trackAgeVerificationModalViewed = function trackAgeVerificationModalViewed(
  memo,
  EXPRESSIVE_PRIMARY,
  entryPoint,
) {
  const obj = { modal_session_id: memo, modal_version: EXPRESSIVE_PRIMARY, entry_point: entryPoint };
  obj.track(AnalyticEvents.AGE_VERIFICATION_MODAL_VIEWED, obj);
};
export const trackAgeVerificationModalClicked = function trackAgeVerificationModalClicked(
  modalSessionId,
  EXPRESSIVE_V2,
  METHOD_SELECT,
  GOOGLE_WALLET,
) {
  const obj = {
    modal_session_id: modalSessionId,
    modal_version: EXPRESSIVE_V2,
    cta: METHOD_SELECT,
    method: GOOGLE_WALLET,
  };
  obj.track(AnalyticEvents.AGE_VERIFICATION_MODAL_CLICKED, obj);
};
export const trackAgeVerificationDmClicked = function trackAgeVerificationDmClicked(CONNECT_TO_TEEN, channelId) {
  const obj = { cta: CONNECT_TO_TEEN, channel_id: channelId };
  obj.track(AnalyticEvents.AGE_VERIFICATION_DM_CLICKED, obj);
};
export const trackNsfwSpaceWarningModalViewed = function trackNsfwSpaceWarningModalViewed(
  modalType,
  channelId,
  guildId,
) {
  const obj = { channel_id: channelId, guild_id: guildId, modal_type: modalType };
  obj.track(AnalyticEvents.NSFW_SPACE_WARNING_MODAL_VIEWED, obj);
};
export const trackNsfwSpaceWarningModalClicked = function trackNsfwSpaceWarningModalClicked(
  NSFW_CHANNEL_AGREE_CTA,
  modalType,
  channelId,
  guildId,
) {
  let channel = null;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  let topic;
  if (channel != null) {
    topic = channel.topic;
  }
  let tmp4 = null != topic;
  if (tmp4) {
    tmp4 = "" !== channel.topic.trim();
  }
  const obj = {
    cta: NSFW_CHANNEL_AGREE_CTA,
    modal_type: modalType,
    channel_id: channelId,
    guild_id: guildId,
    has_channel_topic: tmp4,
  };
  obj.track(AnalyticEvents.NSFW_SPACE_WARNING_MODAL_CLICKED, obj);
};
export const AgeVerificationToastType = {
  VERIFIED_TEEN: "verified_teen",
  VERIFIED_ADULT: "verified_adult",
  ERROR: "error",
  FAE_FAILED: "fae_failed",
  ID_FAILED: "id_failed",
  UNDERAGE: "underage",
};
export const trackAgeVerificationToastViewed = function trackAgeVerificationToastViewed(toast_type) {
  const obj = { toast_type };
  obj.track(AnalyticEvents.AGE_VERIFICATION_TOAST_VIEWED, obj);
};
