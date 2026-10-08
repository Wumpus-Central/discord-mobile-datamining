// discord_app/modules/rtc_debug/setShouldRecordNextConnection.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import trackVoiceAndVideoSettingsUpdateDefault from "../user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx";
import RTCDebugStore from "../../stores/RTCDebugStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoSettingsUpdateDefault(
    "connection_replay_log_enabled",
    value,
    RTCDebugStore.shouldRecordNextConnection(),
  );
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value });
}
