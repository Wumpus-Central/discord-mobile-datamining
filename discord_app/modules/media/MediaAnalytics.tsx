// discord_app/modules/media/MediaAnalytics.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/media/MediaAnalytics.tsx");

export const logMediaAttachmentPlaybackStarted = function logMediaAttachmentPlaybackStarted(messageChannel, found, totalDurationSecs, messageId, startDurationSecs, id) {
  let tmp = totalDurationSecs;
  const obj = { guild_id: messageChannel.guild_id, channel_id: messageChannel.id, channel_type: messageChannel.type, type: found.content_type, flags: found.flags, size: found.size, duration: totalDurationSecs, message_id: messageId, attachment_id: found.id, start_duration_secs: null, sender_user_id: null };
  if (totalDurationSecs == null) {
    tmp = startDurationSecs;
  }
  obj[9] = Math.min(tmp, startDurationSecs);
  obj[10] = id;
  obj.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, obj);
};
export const logMediaAttachmentPlaybackEnded = function logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, id, durationListeningSecs, found) {
  let tmp = totalDurationSecs;
  const obj = { message_id: messageId, total_duration_secs: totalDurationSecs, end_duration_secs: null, sender_user_id: null, duration_listening_secs: null, type: null };
  if (totalDurationSecs == null) {
    tmp = endDurationSecs;
  }
  obj[2] = Math.min(tmp, endDurationSecs);
  obj[3] = id;
  obj[4] = durationListeningSecs;
  obj[5] = found.content_type;
  obj.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_ENDED, obj);
};