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
  let min;
  let tmp = totalDurationSecs;
  const obj = {
    guild_id: messageChannel.guild_id,
    channel_id: messageChannel.id,
    channel_type: messageChannel.type,
    type: found.content_type,
    flags: found.flags,
    size: found.size,
    duration: totalDurationSecs,
    message_id: messageId,
    attachment_id: found.id,
    start_duration_secs: min(tmp, startDurationSecs),
    sender_user_id: id,
  };
  const track = AnalyticsUtilsDefault.track;
  const MEDIA_ATTACHMENT_PLAYBACK_STARTED = AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED;
  const _Math = Math;
  min = Math.min;
  AnalyticsUtilsDefault;
  if (totalDurationSecs == null) {
    tmp = startDurationSecs;
  }
  track(MEDIA_ATTACHMENT_PLAYBACK_STARTED, obj);
};
export const logMediaAttachmentPlaybackEnded = function logMediaAttachmentPlaybackEnded(
  messageId,
  totalDurationSecs,
  endDurationSecs,
  id,
  durationListeningSecs,
  found,
) {
  let min;
  let tmp = totalDurationSecs;
  const obj = {
    message_id: messageId,
    total_duration_secs: totalDurationSecs,
    end_duration_secs: min(tmp, endDurationSecs),
    sender_user_id: id,
    duration_listening_secs: durationListeningSecs,
    type: found.content_type,
  };
  const track = AnalyticsUtilsDefault.track;
  const MEDIA_ATTACHMENT_PLAYBACK_ENDED = AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_ENDED;
  const _Math = Math;
  min = Math.min;
  AnalyticsUtilsDefault;
  if (totalDurationSecs == null) {
    tmp = endDurationSecs;
  }
  track(MEDIA_ATTACHMENT_PLAYBACK_ENDED, obj);
};
