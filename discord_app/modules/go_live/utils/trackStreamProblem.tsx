// === Module 17032: trackStreamProblem ===

// Module 17032 (trackStreamProblem)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/go_live/utils/trackStreamProblem.tsx");

export default function trackStreamProblem(arg0) {
  ({ stream, streamApplication, analyticsData, rating } = arg0);
  ({ problem, feedback, location: _location } = arg0);
  if (rating === undefined) {
    rating = null;
  }
  ({ category, variant } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { reason: problem, category, reason_variant: variant, streamer_user_id: stream.ownerId, stream_channel_id: stream.channelId, guild_id: stream.guildId, application_id: null, application_name: null, location: null, rating: null, feedback: null };
  let id = null;
  if (null != streamApplication) {
    id = streamApplication.id;
  }
  obj[6] = id;
  let name = null;
  if (null != streamApplication) {
    name = streamApplication.name;
  }
  obj[7] = name;
  obj[8] = _location;
  obj[9] = rating;
  obj[10] = feedback;
  const merged = Object.assign(analyticsData);
  obj.track(AnalyticEvents.STREAM_REPORT_PROBLEM, obj);
};