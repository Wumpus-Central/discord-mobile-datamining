// discord_app/modules/activities/trackActivityThermalStateNoticeShown.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import getEmbeddedActivityLocationChannelId from "utils/embeddedActivityLocationUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createRTCConnection from "../../stores/RTCConnectionStore.tsx";
import participantFromServer from "EmbeddedActivitiesStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export const trackActivityThermalStateNoticeShown = function trackActivityThermalStateNoticeShown() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  let obj = getEmbeddedActivityLocationChannelId;
  let _location;
  if (currentEmbeddedActivity != null) {
    _location = currentEmbeddedActivity.location;
  }
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
  let compositeInstanceId;
  if (currentEmbeddedActivity != null) {
    compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
  }
  let applicationId;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, guild_id: null, media_session_id: null };
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  obj[3] = guild_id;
  obj[4] = mediaSessionId.getMediaSessionId();
  expandEventPropertiesDefault.track(AnalyticEvents.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN, obj);
};