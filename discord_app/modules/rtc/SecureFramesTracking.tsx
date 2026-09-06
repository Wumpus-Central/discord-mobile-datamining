// === Module 9161: SecureFramesTracking ===

// Module 9161 (SecureFramesTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8191 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesTracking.tsx");

export const trackRTCPanelViewed = function trackRTCPanelViewed(channelId) {
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id: null, selected_tab: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.selected_tab = channelId.selectedTab;
  obj.trackWithMetadata(AnalyticEvents.RTC_PANEL_VIEWED, obj);
};
export const trackE2EEUserVerificationViewed = function trackE2EEUserVerificationViewed(userId) {
  const channelId = userId.channelId;
  const obj = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_VIEWED, obj);
};
export const trackE2EEUserVerified = function trackE2EEUserVerified(channelId) {
  channelId = channelId.channelId;
  ({ userId, analyticsLocation } = channelId);
  const obj = { channel_id: channelId, guild_id: null, location: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.location = analyticsLocation;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFIED, obj);
};
export const trackE2EEUserVerificationFailed = function trackE2EEUserVerificationFailed(channelId) {
  channelId = channelId.channelId;
  ({ userId, keyVersion, reason } = channelId);
  const obj = { channel_id: channelId, guild_id: null, failure_reason: null, key_version: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.failure_reason = reason;
  obj.key_version = "" + keyVersion;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_FAILED, obj);
};
export const trackE2EEUserVerificationShareClicked = function trackE2EEUserVerificationShareClicked(userId) {
  const channelId = userId.channelId;
  const obj = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEUserVerificationCopied = function trackE2EEUserVerificationCopied(userId) {
  const channelId = userId.channelId;
  const obj = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EECallVerificationShareClicked = function trackE2EECallVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EECallVerificationCopied = function trackE2EECallVerificationCopied(channelId) {
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EEStreamVerificationShareClicked = function trackE2EEStreamVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEStreamVerificationCopied = function trackE2EEStreamVerificationCopied(channelId) {
  channelId = channelId.channelId;
  const obj = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EESettingsUserDelete = function trackE2EESettingsUserDelete() {
  AnalyticsUtilsDefault.track(AnalyticEvents.E2EE_SETTINGS_USER_DELETE);
};
export const trackE2EESettingsDeviceDelete = function trackE2EESettingsDeviceDelete() {
  AnalyticsUtilsDefault.track(AnalyticEvents.E2EE_SETTINGS_DEVICE_DELETE);
};
export const trackE2EEPublicKeyMismatch = function trackE2EEPublicKeyMismatch(arg0) {
  const obj = { key_version: "" + arg0 };
  obj.track(AnalyticEvents.E2EE_PUBLIC_KEY_MISMATCH, obj);
};