// === Module 9382: SecureFramesTracking ===

// Module 9382 (SecureFramesTracking)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7873 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/rtc/SecureFramesTracking.tsx");

export const trackRTCPanelViewed = function trackRTCPanelViewed(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const selectedTab = channelId.selectedTab;
  const obj = { channel_id: channelId, guild_id, selected_tab: selectedTab };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const RTC_PANEL_VIEWED = AnalyticEvents.RTC_PANEL_VIEWED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  trackWithMetadata(RTC_PANEL_VIEWED, obj);
};
export const trackE2EEUserVerificationViewed = function trackE2EEUserVerificationViewed(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const obj = { channel_id: channelId, guild_id };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_USER_VERIFICATION_VIEWED = AnalyticEvents.E2EE_USER_VERIFICATION_VIEWED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const obj2 = UserProfileAnalyticsUtils;
  const merged = Object.assign(obj2.getTrackUserRelationshipProperties({ userId }));
  trackWithMetadata(E2EE_USER_VERIFICATION_VIEWED, obj);
};
export const trackE2EEUserVerified = function trackE2EEUserVerified(channelId) {
  let analyticsLocation;
  let guild_id;
  let userId;
  channelId = channelId.channelId;
  ({ userId, analyticsLocation } = channelId);
  const obj = { channel_id: channelId, guild_id, location: analyticsLocation };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_USER_VERIFIED = AnalyticEvents.E2EE_USER_VERIFIED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const obj2 = UserProfileAnalyticsUtils;
  const merged = Object.assign(obj2.getTrackUserRelationshipProperties({ userId }));
  trackWithMetadata(E2EE_USER_VERIFIED, obj);
};
export const trackE2EEUserVerificationFailed = function trackE2EEUserVerificationFailed(channelId) {
  let guild_id;
  let keyVersion;
  let reason;
  let userId;
  channelId = channelId.channelId;
  ({ userId, keyVersion, reason } = channelId);
  const obj = { channel_id: channelId, guild_id, failure_reason: reason, key_version: "" + keyVersion };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_USER_VERIFICATION_FAILED = AnalyticEvents.E2EE_USER_VERIFICATION_FAILED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const obj2 = UserProfileAnalyticsUtils;
  const merged = Object.assign(obj2.getTrackUserRelationshipProperties({ userId }));
  trackWithMetadata(E2EE_USER_VERIFICATION_FAILED, obj);
};
export const trackE2EEUserVerificationShareClicked = function trackE2EEUserVerificationShareClicked(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const obj = { channel_id: channelId, guild_id };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_USER_VERIFICATION_SHARE_CLICKED = AnalyticEvents.E2EE_USER_VERIFICATION_SHARE_CLICKED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const obj2 = UserProfileAnalyticsUtils;
  const merged = Object.assign(obj2.getTrackUserRelationshipProperties({ userId }));
  trackWithMetadata(E2EE_USER_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEUserVerificationCopied = function trackE2EEUserVerificationCopied(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const obj = { channel_id: channelId, guild_id };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_USER_VERIFICATION_CODE_COPIED = AnalyticEvents.E2EE_USER_VERIFICATION_CODE_COPIED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const obj2 = UserProfileAnalyticsUtils;
  const merged = Object.assign(obj2.getTrackUserRelationshipProperties({ userId }));
  trackWithMetadata(E2EE_USER_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EECallVerificationShareClicked = function trackE2EECallVerificationShareClicked(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_CALL_VERIFICATION_SHARE_CLICKED = AnalyticEvents.E2EE_CALL_VERIFICATION_SHARE_CLICKED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  trackWithMetadata(E2EE_CALL_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EECallVerificationCopied = function trackE2EECallVerificationCopied(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_CALL_VERIFICATION_CODE_COPIED = AnalyticEvents.E2EE_CALL_VERIFICATION_CODE_COPIED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  trackWithMetadata(E2EE_CALL_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EEStreamVerificationShareClicked = function trackE2EEStreamVerificationShareClicked(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_STREAM_VERIFICATION_SHARE_CLICKED = AnalyticEvents.E2EE_STREAM_VERIFICATION_SHARE_CLICKED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  trackWithMetadata(E2EE_STREAM_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEStreamVerificationCopied = function trackE2EEStreamVerificationCopied(channelId) {
  let guild_id;
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const E2EE_STREAM_VERIFICATION_CODE_COPIED = AnalyticEvents.E2EE_STREAM_VERIFICATION_CODE_COPIED;
  AppAnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  trackWithMetadata(E2EE_STREAM_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EESettingsUserDelete = function trackE2EESettingsUserDelete() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.E2EE_SETTINGS_USER_DELETE);
};
export const trackE2EESettingsDeviceDelete = function trackE2EESettingsDeviceDelete() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.E2EE_SETTINGS_DEVICE_DELETE);
};
export const trackE2EEPublicKeyMismatch = function trackE2EEPublicKeyMismatch(arg0) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { key_version: "" + arg0 };
  obj.track(AnalyticEvents.E2EE_PUBLIC_KEY_MISMATCH, obj2);
};