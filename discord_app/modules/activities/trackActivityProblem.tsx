// === Module 16571: trackActivityProblem ===

// Module 16571 (trackActivityProblem)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/activities/trackActivityProblem.tsx");

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
  let obj = expandEventPropertiesDefault;
  obj = { reason: problem, guild_id: null, channel_id: null, application_id: null, application_name: null, location: null, rating: null, feedback: null, embedded_activity_location_kind: null, rtc_connection_id: null, media_session_id: null };
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  obj[1] = guildId;
  let id;
  if (channel != null) {
    id = channel.id;
  }
  obj[2] = id;
  let id1;
  if (activityApplication != null) {
    id1 = activityApplication.id;
  }
  obj[3] = id1;
  let name;
  if (activityApplication != null) {
    name = activityApplication.name;
  }
  obj[4] = name;
  obj[5] = _location;
  obj[6] = rating;
  obj[7] = feedback;
  obj[8] = embeddedActivityLocation.kind;
  ({ rtc_connection_id: obj2[9], media_session_id: obj2[10] } = analyticsData);
  obj.track(AnalyticEvents.ACTIVITY_REPORT_PROBLEM, obj);
};