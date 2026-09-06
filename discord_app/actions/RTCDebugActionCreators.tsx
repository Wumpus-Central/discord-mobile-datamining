// === Module 10039: RTCDebugActionCreators ===

// Module 10039 (RTCDebugActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DiscordNativeDefault from "DiscordNative" /* 4182 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 9094 */;
import RTCDebugStore from "RTCDebugStore" /* 10038 */;

const size = fn(2);
const result = size.fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  const obj = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj);
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  DispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  const obj = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoSettingsUpdateDefault("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  const obj = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj);
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