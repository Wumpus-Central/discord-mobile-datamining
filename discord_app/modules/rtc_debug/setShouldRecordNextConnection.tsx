// === Module 6011: setShouldRecordNextConnection ===

// Module 6011 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 6012 */;
import RTCDebugStore from "RTCDebugStore" /* 5918 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoSettingsUpdateDefault("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value });
};