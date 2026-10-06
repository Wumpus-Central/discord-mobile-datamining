// === Module 11498: VoiceMessageAnalytics ===

// Module 11498 (VoiceMessageAnalytics)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/voice_messages/VoiceMessageAnalytics.tsx");

export const VoiceMessageRecordingResult = { SENT: "sent", CANCELLED_DURATION: "cancelled_duration", CANCELLED_USER_REQUESTED: "cancelled_user_requested", CANCELLED_GESTURE_CONFLICT: "cancelled_gesture_conflict", CANCELLED_ON_BACKGROUND: "cancelled_on_background" };
export const logVoiceMessagePlaybackStarted = function logVoiceMessagePlaybackStarted(messageId, totalDurationSecs, startDurationSecs, id) {
  let min;
  let tmp = totalDurationSecs;
  const obj = { message_id: messageId, total_duration_secs: totalDurationSecs, start_duration_secs: min(tmp, startDurationSecs), sender_user_id: id };
  const track = AnalyticsUtilsDefault.track;
  const VOICE_MESSAGE_PLAYBACK_STARTED = AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED;
  const _Math = Math;
  min = Math.min;
  AnalyticsUtilsDefault;
  if (totalDurationSecs == null) {
    tmp = startDurationSecs;
  }
  track(VOICE_MESSAGE_PLAYBACK_STARTED, obj);
};
export const logVoiceMessagePlaybackEnded = function logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, id, durationListeningSecs) {
  let min;
  let tmp = totalDurationSecs;
  const obj = { message_id: messageId, total_duration_secs: totalDurationSecs, end_duration_secs: min(tmp, endDurationSecs), sender_user_id: id, duration_listening_secs: durationListeningSecs };
  const track = AnalyticsUtilsDefault.track;
  const VOICE_MESSAGE_PLAYBACK_ENDED = AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED;
  const _Math = Math;
  min = Math.min;
  AnalyticsUtilsDefault;
  if (totalDurationSecs == null) {
    tmp = endDurationSecs;
  }
  track(VOICE_MESSAGE_PLAYBACK_ENDED, obj);
};
export const logVoiceMessagePlaybackFailed = function logVoiceMessagePlaybackFailed(messageId, errorMessage) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { message_id: messageId, error_message: errorMessage };
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, obj2);
};