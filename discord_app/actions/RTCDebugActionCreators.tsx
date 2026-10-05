// === Module 9723: RTCDebugActionCreators ===

// Module 9723 (RTCDebugActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DiscordNativeDefault from "DiscordNative" /* 4490 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 9311 */;
import RTCDebugStore from "RTCDebugStore" /* 9722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj2);
  const obj3 = DispatcherDefault;
  obj3.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj2);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  const tmp = trackVoiceAndVideoSettingsUpdateDefault;
  tmp("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj2);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj2);
};
export const chooseReplayPath = function chooseReplayPath() {
  let items;
  const fileManager = DiscordNativeDefault.fileManager;
  let obj = { filters: items };
  items = [{ name: "All Files", extensions: ["*"] }];
  const showOpenDialogResult = fileManager.showOpenDialog(obj);
  showOpenDialogResult.then((result) => {
    let str = "";
    if (0 !== result.length) {
      str = result[0];
    }
    const obj = DispatcherDefault;
    obj.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str });
  });
};