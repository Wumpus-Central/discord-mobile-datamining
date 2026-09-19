// === Module 10295: RTCDebugActionCreators ===

// Module 10295 (RTCDebugActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DiscordNativeDefault from "DiscordNative" /* 4377 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 9915 */;
import RTCDebugStore from "RTCDebugStore" /* 10294 */;

const size = fn(2);
const result = size.fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_OPEN", section });
  const obj2 = { type: "RTC_DEBUG_MODAL_OPEN", section };
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_SET_SECTION", section });
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoSettingsUpdateDefault("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value });
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality });
};
export const chooseReplayPath = function chooseReplayPath() {
  const fileManager = DiscordNativeDefault.fileManager;
  const obj = { filters: null };
  const items = [{ name: "All Files", extensions: ["*"] }];
  obj.filters = items;
  fileManager.showOpenDialog(obj).then((result) => {
    let str = "";
    if (0 !== result.length) {
      str = result[0];
    }
    DispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str });
  });
};