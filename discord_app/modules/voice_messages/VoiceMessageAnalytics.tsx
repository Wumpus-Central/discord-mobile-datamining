// discord_app/modules/voice_messages/VoiceMessageAnalytics.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/voice_messages/VoiceMessageAnalytics.tsx");

export const VoiceMessageRecordingResult = {
  SENT: "sent",
  CANCELLED_DURATION: "cancelled_duration",
  CANCELLED_USER_REQUESTED: "cancelled_user_requested",
  CANCELLED_GESTURE_CONFLICT: "cancelled_gesture_conflict",
  CANCELLED_ON_BACKGROUND: "cancelled_on_background",
};
export const logVoiceMessagePlaybackStarted = function logVoiceMessagePlaybackStarted(
  messageId,
  totalDurationSecs,
  startDurationSecs,
  id,
) {
  let tmp = totalDurationSecs;
  const obj = {
    message_id: messageId,
    total_duration_secs: totalDurationSecs,
    start_duration_secs: null,
    sender_user_id: null,
  };
  if (totalDurationSecs == null) {
    tmp = startDurationSecs;
  }
  obj.start_duration_secs = Math.min(tmp, startDurationSecs);
  obj.sender_user_id = id;
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, obj);
};
export const logVoiceMessagePlaybackEnded = function logVoiceMessagePlaybackEnded(
  messageId,
  totalDurationSecs,
  endDurationSecs,
  id,
  durationListeningSecs,
) {
  let tmp = totalDurationSecs;
  const obj = {
    message_id: messageId,
    total_duration_secs: totalDurationSecs,
    end_duration_secs: null,
    sender_user_id: null,
    duration_listening_secs: null,
  };
  if (totalDurationSecs == null) {
    tmp = endDurationSecs;
  }
  obj.end_duration_secs = Math.min(tmp, endDurationSecs);
  obj.sender_user_id = id;
  obj.duration_listening_secs = durationListeningSecs;
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, obj);
};
export const logVoiceMessagePlaybackFailed = function logVoiceMessagePlaybackFailed(messageId, errorMessage) {
  const obj = { message_id: messageId, error_message: errorMessage };
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, obj);
};
