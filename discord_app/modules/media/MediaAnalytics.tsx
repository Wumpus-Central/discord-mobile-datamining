// discord_app/modules/media/MediaAnalytics.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/media/MediaAnalytics.tsx");

export const logMediaAttachmentPlaybackStarted = function logMediaAttachmentPlaybackStarted(
  messageChannel,
  found,
  totalDurationSecs,
  messageId,
  startDurationSecs,
  id,
) {
  let tmp = totalDurationSecs;
  const obj2 = {
    guild_id: messageChannel.guild_id,
    channel_id: messageChannel.id,
    channel_type: messageChannel.type,
    type: found.content_type,
    flags: found.flags,
    size: found.size,
    duration: totalDurationSecs,
    message_id: messageId,
    attachment_id: found.id,
    start_duration_secs: null,
    sender_user_id: null,
  };
  if (totalDurationSecs == null) {
    tmp = startDurationSecs;
  }
  obj2.start_duration_secs = Math.min(tmp, startDurationSecs);
  obj2.sender_user_id = id;
  AnalyticsUtilsDefault.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, obj2);
};
export const logMediaAttachmentPlaybackEnded = function logMediaAttachmentPlaybackEnded(
  messageId,
  totalDurationSecs,
  endDurationSecs,
  id,
  durationListeningSecs,
  found,
) {
  let tmp = totalDurationSecs;
  const obj2 = {
    message_id: messageId,
    total_duration_secs: totalDurationSecs,
    end_duration_secs: null,
    sender_user_id: null,
    duration_listening_secs: null,
    type: null,
  };
  if (totalDurationSecs == null) {
    tmp = endDurationSecs;
  }
  obj2.end_duration_secs = Math.min(tmp, endDurationSecs);
  obj2.sender_user_id = id;
  obj2.duration_listening_secs = durationListeningSecs;
  obj2.type = found.content_type;
  AnalyticsUtilsDefault.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_ENDED, obj2);
};
