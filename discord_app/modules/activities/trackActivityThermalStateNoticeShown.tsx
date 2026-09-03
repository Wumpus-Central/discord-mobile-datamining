// === Module 16889: trackActivityThermalStateNoticeShown ===

// Module 16889 (trackActivityThermalStateNoticeShown)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4110 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "createRTCConnection" /* 4554 */;
import closure_5 from "participantFromServer" /* 1385 */;
import { AnalyticEvents } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

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