// === Module 17329: trackStreamProblem ===

// Module 17329 (trackStreamProblem)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/go_live/utils/trackStreamProblem.tsx");

export default function trackStreamProblem(arg0) {
  ({ stream, streamApplication, analyticsData, rating } = arg0);
  ({ problem, feedback, location: _location } = arg0);
  if (rating === undefined) {
    rating = null;
  }
  ({ category, variant } = arg0);
  const obj2 = { reason: problem, category, reason_variant: variant, streamer_user_id: stream.ownerId, stream_channel_id: stream.channelId, guild_id: stream.guildId, application_id: null, application_name: null, location: null, rating: null, feedback: null };
  let id = null;
  if (null != streamApplication) {
    id = streamApplication.id;
  }
  obj2.application_id = id;
  let name = null;
  if (null != streamApplication) {
    name = streamApplication.name;
  }
  obj2.application_name = name;
  obj2.location = _location;
  obj2.rating = rating;
  obj2.feedback = feedback;
  const merged = Object.assign(analyticsData);
  AnalyticsUtilsDefault.track(AnalyticEvents.STREAM_REPORT_PROBLEM, obj2);
};