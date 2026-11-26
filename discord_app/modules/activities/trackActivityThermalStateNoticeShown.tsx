// === Module 19438: trackActivityThermalStateNoticeShown ===

// Module 19438 (trackActivityThermalStateNoticeShown)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4964 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5851 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4891 */;

require = fn;
const AnalyticEvents = fn(1071).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export function trackActivityThermalStateNoticeShown() {
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
}