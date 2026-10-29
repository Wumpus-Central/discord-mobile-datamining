// === Module 5868: setShouldRecordNextConnection ===

// Module 5868 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 5869 */;
import RTCDebugStore from "RTCDebugStore" /* 5775 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoSettingsUpdateDefault("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value });
};