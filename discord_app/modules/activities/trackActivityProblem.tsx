// === Module 17359: trackActivityProblem ===

// Module 17359 (trackActivityProblem)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/activities/trackActivityProblem.tsx");

export default function trackActivityProblem(arg0) {
  ({ channel, activityApplication, analyticsData } = arg0);
  ({ problem, embeddedActivityLocation, feedback } = arg0);
  if (analyticsData === undefined) {
    analyticsData = {};
  }
  ({ rating, location: _location } = arg0);
  if (rating === undefined) {
    rating = null;
  }
  const obj = { reason: problem, guild_id: null, channel_id: null, application_id: null, application_name: null, location: null, rating: null, feedback: null, embedded_activity_location_kind: null, rtc_connection_id: null, media_session_id: null };
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  obj.guild_id = guildId;
  let id;
  if (channel != null) {
    id = channel.id;
  }
  obj.channel_id = id;
  let id1;
  if (activityApplication != null) {
    id1 = activityApplication.id;
  }
  obj.application_id = id1;
  let name;
  if (activityApplication != null) {
    name = activityApplication.name;
  }
  obj.application_name = name;
  obj.location = _location;
  obj.rating = rating;
  obj.feedback = feedback;
  obj.embedded_activity_location_kind = embeddedActivityLocation.kind;
  ({ rtc_connection_id: obj2.rtc_connection_id, media_session_id: obj2.media_session_id } = analyticsData);
  obj.track(AnalyticEvents.ACTIVITY_REPORT_PROBLEM, obj);
};