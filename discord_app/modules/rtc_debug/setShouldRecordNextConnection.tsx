// === Module 5681: setShouldRecordNextConnection ===

// Module 5681 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 5682 */;
import RTCDebugStore from "RTCDebugStore" /* 5587 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoSettingsUpdateDefault("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value });
};