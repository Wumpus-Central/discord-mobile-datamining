// === Module 17428: trackActivityThermalStateNoticeShown ===

// Module 17428 (trackActivityThermalStateNoticeShown)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4351 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4745 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
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