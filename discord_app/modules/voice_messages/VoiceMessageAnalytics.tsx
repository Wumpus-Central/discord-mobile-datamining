// === Module 11092: logVoiceMessagePlaybackStarted ===

// Module 11092 (logVoiceMessagePlaybackStarted)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/voice_messages/VoiceMessageAnalytics.tsx");

export const VoiceMessageRecordingResult = { SENT: "sent", CANCELLED_DURATION: "cancelled_duration", CANCELLED_USER_REQUESTED: "cancelled_user_requested", CANCELLED_GESTURE_CONFLICT: "cancelled_gesture_conflict", CANCELLED_ON_BACKGROUND: "cancelled_on_background" };
export const logVoiceMessagePlaybackStarted = function logVoiceMessagePlaybackStarted(messageId, totalDurationSecs, startDurationSecs, id) {
  let tmp = totalDurationSecs;
  let obj = expandEventPropertiesDefault;
  obj = { message_id: messageId, total_duration_secs: totalDurationSecs, start_duration_secs: null, sender_user_id: null };
  if (totalDurationSecs == null) {
    tmp = startDurationSecs;
  }
  obj[2] = Math.min(tmp, startDurationSecs);
  obj[3] = id;
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, obj);
};
export const logVoiceMessagePlaybackEnded = function logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, id, durationListeningSecs) {
  let tmp = totalDurationSecs;
  let obj = expandEventPropertiesDefault;
  obj = { message_id: messageId, total_duration_secs: totalDurationSecs, end_duration_secs: null, sender_user_id: null, duration_listening_secs: null };
  if (totalDurationSecs == null) {
    tmp = endDurationSecs;
  }
  obj[2] = Math.min(tmp, endDurationSecs);
  obj[3] = id;
  obj[4] = durationListeningSecs;
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, obj);
};
export const logVoiceMessagePlaybackFailed = function logVoiceMessagePlaybackFailed(messageId, errorMessage) {
  let obj = expandEventPropertiesDefault;
  obj = { message_id: messageId, error_message: errorMessage };
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, obj);
};