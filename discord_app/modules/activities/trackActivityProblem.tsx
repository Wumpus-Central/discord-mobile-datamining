// === Module 16645: trackActivityProblem ===

// Module 16645 (trackActivityProblem)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/activities/trackActivityProblem.tsx");

export default function trackActivityProblem(arg0) {
  let _location;
  let activityApplication;
  let analyticsData;
  let channel;
  let embeddedActivityLocation;
  let feedback;
  let guildId;
  let id;
  let id1;
  let name;
  let problem;
  let rating;
  ({ channel, activityApplication, analyticsData } = arg0);
  ({ problem, embeddedActivityLocation, feedback } = arg0);
  if (analyticsData === undefined) {
    analyticsData = {};
  }
  ({ rating, location: _location } = arg0);
  if (rating === undefined) {
    rating = null;
  }
  const obj = { reason: problem, guild_id: guildId, channel_id: id, application_id: id1, application_name: name, location: _location, rating, feedback, embedded_activity_location_kind: embeddedActivityLocation.kind, rtc_connection_id: null, media_session_id: null };
  guildId = undefined;
  const track = AnalyticsUtilsDefault.track;
  const ACTIVITY_REPORT_PROBLEM = AnalyticEvents.ACTIVITY_REPORT_PROBLEM;
  AnalyticsUtilsDefault;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  id1 = undefined;
  if (activityApplication != null) {
    id1 = activityApplication.id;
  }
  name = undefined;
  if (activityApplication != null) {
    name = activityApplication.name;
  }
  ({ rtc_connection_id: obj.rtc_connection_id, media_session_id: obj.media_session_id } = analyticsData);
  track(ACTIVITY_REPORT_PROBLEM, obj);
};