// === Module 17900: trackActivityThermalStateNoticeShown ===

// Module 17900 (trackActivityThermalStateNoticeShown)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4739 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export const trackActivityThermalStateNoticeShown = function trackActivityThermalStateNoticeShown() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let _location;
  if (currentEmbeddedActivity != null) {
    _location = currentEmbeddedActivity.location;
  }
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  const basicChannel = ChannelStore.getBasicChannel(embeddedActivityLocationChannelId);
  let compositeInstanceId;
  if (currentEmbeddedActivity != null) {
    compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
  }
  let applicationId;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  const obj3 = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, guild_id: null, media_session_id: null };
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  obj3.guild_id = guild_id;
  obj3.media_session_id = RTCConnectionStore.getMediaSessionId();
  AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN, obj3);
};