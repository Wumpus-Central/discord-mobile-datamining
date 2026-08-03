import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("collectGuildAnalyticsMetadata").fileFinishedImporting("modules/rtc/SecureFramesTracking.tsx");

export const trackRTCPanelViewed = function trackRTCPanelViewed(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null, selected_tab: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj[2] = channelId.selectedTab;
  obj.trackWithMetadata(AnalyticEvents.RTC_PANEL_VIEWED, obj);
};
export const trackE2EEUserVerificationViewed = function trackE2EEUserVerificationViewed(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  const merged = Object.assign(require(8443) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_VIEWED, obj);
};
export const trackE2EEUserVerified = function trackE2EEUserVerified(channelId) {
  let analyticsLocation;
  let userId;
  channelId = channelId.channelId;
  ({ userId, analyticsLocation } = channelId);
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null, location: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj[2] = analyticsLocation;
  const merged = Object.assign(require(8443) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFIED, obj);
};
export const trackE2EEUserVerificationFailed = function trackE2EEUserVerificationFailed(channelId) {
  let keyVersion;
  let reason;
  let userId;
  channelId = channelId.channelId;
  ({ userId, keyVersion, reason } = channelId);
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null, failure_reason: null, key_version: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj[2] = reason;
  obj[3] = "" + keyVersion;
  const merged = Object.assign(require(8443) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_FAILED, obj);
};
export const trackE2EEUserVerificationShareClicked = function trackE2EEUserVerificationShareClicked(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  const merged = Object.assign(require(8443) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEUserVerificationCopied = function trackE2EEUserVerificationCopied(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  const merged = Object.assign(require(8443) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EECallVerificationShareClicked = function trackE2EECallVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EECallVerificationCopied = function trackE2EECallVerificationCopied(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EEStreamVerificationShareClicked = function trackE2EEStreamVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEStreamVerificationCopied = function trackE2EEStreamVerificationCopied(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4450);
  obj = { channel_id: channelId, guild_id: null };
  const channel = store.getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EESettingsUserDelete = function trackE2EESettingsUserDelete() {
  importDefault(698).track(AnalyticEvents.E2EE_SETTINGS_USER_DELETE);
};
export const trackE2EESettingsDeviceDelete = function trackE2EESettingsDeviceDelete() {
  importDefault(698).track(AnalyticEvents.E2EE_SETTINGS_DEVICE_DELETE);
};
export const trackE2EEPublicKeyMismatch = function trackE2EEPublicKeyMismatch(closure_0) {
  let obj = importDefault(698);
  obj = { key_version: "" + closure_0 };
  obj.track(AnalyticEvents.E2EE_PUBLIC_KEY_MISMATCH, obj);
};