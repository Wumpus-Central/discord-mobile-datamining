// === Module 17080: trackActivityProblem ===

// Module 17080 (trackActivityProblem)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
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
  const obj3 = { reason: problem, guild_id: null, channel_id: null, application_id: null, application_name: null, location: null, rating: null, feedback: null, embedded_activity_location_kind: null, rtc_connection_id: null, media_session_id: null };
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  obj3.guild_id = guildId;
  let id;
  if (channel != null) {
    id = channel.id;
  }
  obj3.channel_id = id;
  let id1;
  if (activityApplication != null) {
    id1 = activityApplication.id;
  }
  obj3.application_id = id1;
  let name;
  if (activityApplication != null) {
    name = activityApplication.name;
  }
  obj3.application_name = name;
  obj3.location = _location;
  obj3.rating = rating;
  obj3.feedback = feedback;
  obj3.embedded_activity_location_kind = embeddedActivityLocation.kind;
  ({ rtc_connection_id: obj2.rtc_connection_id, media_session_id: obj2.media_session_id } = analyticsData);
  AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_REPORT_PROBLEM, obj3);
};