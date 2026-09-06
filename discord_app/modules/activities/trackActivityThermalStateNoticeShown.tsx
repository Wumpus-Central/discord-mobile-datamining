// discord_app/modules/activities/trackActivityThermalStateNoticeShown.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import embeddedActivityLocationUtils from "utils/embeddedActivityLocationUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export const trackActivityThermalStateNoticeShown = function trackActivityThermalStateNoticeShown() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let obj = embeddedActivityLocationUtils;
  let _location;
  if (currentEmbeddedActivity != null) {
    _location = currentEmbeddedActivity.location;
  }
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  const basicChannel = ChannelStore.getBasicChannel(embeddedActivityLocationChannelId);
  let compositeInstanceId;
  if (currentEmbeddedActivity != null) {
    compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
  }
  let applicationId;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  obj = {
    channel_id: embeddedActivityLocationChannelId,
    application_id: applicationId,
    activity_session_id: compositeInstanceId,
    guild_id: null,
    media_session_id: null,
  };
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.media_session_id = RTCConnectionStore.getMediaSessionId();
  AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN, obj);
};
