// discord_app/actions/RTCDebugActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import obj132Default from "../lib/DiscordNative.tsx";
import trackVoiceAndVideoDebuggingSettingsUpdatedDefault from "../modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx";
import updateStats from "../stores/RTCDebugStore.tsx";

const result = require("obj132").fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  const obj = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj);
  dispatcherDefault.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  dispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  dispatcherDefault.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  const obj = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoDebuggingSettingsUpdatedDefault("connection_replay_log_enabled", value, closure_2.shouldRecordNextConnection());
  const obj = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  const obj = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj);
};
export const chooseReplayPath = function chooseReplayPath() {
  const fileManager = obj132Default.fileManager;
  const items = [{ name: "All Files", extensions: ["*"] }];
  fileManager.showOpenDialog({ filters: items }).then((result) => {
    let str = "";
    if (0 !== result.length) {
      str = result[0];
    }
    callback(table[1]).dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str });
  });
};