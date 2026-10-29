// discord_app/modules/rtc/SecureFramesTracking.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import UserProfileAnalyticsUtils from "../user_profile/UserProfileAnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
const AnalyticEvents = fn(1084).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesTracking.tsx");

export function trackRTCPanelViewed(channelId) {
  channelId = channelId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null, selected_tab: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  obj2.selected_tab = channelId.selectedTab;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.RTC_PANEL_VIEWED, obj2);
}
export function trackE2EEUserVerificationViewed(userId) {
  const channelId = userId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_VIEWED, obj2);
}
export function trackE2EEUserVerified(channelId) {
  channelId = channelId.channelId;
  ({ userId, analyticsLocation } = channelId);
  const obj2 = { channel_id: channelId, guild_id: null, location: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  obj2.location = analyticsLocation;
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFIED, obj2);
}
export function trackE2EEUserVerificationFailed(channelId) {
  channelId = channelId.channelId;
  ({ userId, keyVersion, reason } = channelId);
  const obj2 = { channel_id: channelId, guild_id: null, failure_reason: null, key_version: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  obj2.failure_reason = reason;
  obj2.key_version = "" + keyVersion;
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_FAILED, obj2);
}
export function trackE2EEUserVerificationShareClicked(userId) {
  const channelId = userId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_SHARE_CLICKED, obj2);
}
export function trackE2EEUserVerificationCopied(userId) {
  const channelId = userId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(UserProfileAnalyticsUtils.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_CODE_COPIED, obj2);
}
export function trackE2EECallVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_SHARE_CLICKED, obj2);
}
export function trackE2EECallVerificationCopied(channelId) {
  channelId = channelId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_CODE_COPIED, obj2);
}
export function trackE2EEStreamVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_SHARE_CLICKED, obj2);
}
export function trackE2EEStreamVerificationCopied(channelId) {
  channelId = channelId.channelId;
  const obj2 = { channel_id: channelId, guild_id: null };
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_CODE_COPIED, obj2);
}
export function trackE2EESettingsUserDelete() {
  AnalyticsUtilsDefault.track(AnalyticEvents.E2EE_SETTINGS_USER_DELETE);
}
export function trackE2EESettingsDeviceDelete() {
  AnalyticsUtilsDefault.track(AnalyticEvents.E2EE_SETTINGS_DEVICE_DELETE);
}
export function trackE2EEPublicKeyMismatch(arg0) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.E2EE_PUBLIC_KEY_MISMATCH, { key_version: "" + arg0 });
}
