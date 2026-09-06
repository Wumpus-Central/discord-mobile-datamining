// === Module 11874: MediaAnalytics ===

// Module 11874 (MediaAnalytics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/media/MediaAnalytics.tsx");

export const logMediaAttachmentPlaybackStarted = function logMediaAttachmentPlaybackStarted(messageChannel, found, totalDurationSecs, messageId, startDurationSecs, id) {
  let tmp = totalDurationSecs;
  const obj = { guild_id: messageChannel.guild_id, channel_id: messageChannel.id, channel_type: messageChannel.type, type: found.content_type, flags: found.flags, size: found.size, duration: totalDurationSecs, message_id: messageId, attachment_id: found.id, start_duration_secs: null, sender_user_id: null };
  if (totalDurationSecs == null) {
    tmp = startDurationSecs;
  }
  obj.start_duration_secs = Math.min(tmp, startDurationSecs);
  obj.sender_user_id = id;
  obj.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, obj);
};
export const logMediaAttachmentPlaybackEnded = function logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, id, durationListeningSecs, found) {
  let tmp = totalDurationSecs;
  const obj = { message_id: messageId, total_duration_secs: totalDurationSecs, end_duration_secs: null, sender_user_id: null, duration_listening_secs: null, type: null };
  if (totalDurationSecs == null) {
    tmp = endDurationSecs;
  }
  obj.end_duration_secs = Math.min(tmp, endDurationSecs);
  obj.sender_user_id = id;
  obj.duration_listening_secs = durationListeningSecs;
  obj.type = found.content_type;
  obj.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_ENDED, obj);
};