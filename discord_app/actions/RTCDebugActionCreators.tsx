// discord_app/actions/RTCDebugActionCreators.tsx
import updateStats from "updateStats";

const result = require("trackVoiceAndVideoDebuggingSettingsUpdated").fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj);
  require("../Dispatcher.tsx").dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  require("../Dispatcher.tsx").dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  require("../Dispatcher.tsx").dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  require("../modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx")("connection_replay_log_enabled", value, updateStats.shouldRecordNextConnection());
  let obj = require("../Dispatcher.tsx");
  obj = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj);
};
export const chooseReplayPath = function chooseReplayPath() {
  const fileManager = require("../lib/DiscordNative.tsx").fileManager;
  const items = [{ name: "All Files", extensions: ["*"] }];
  fileManager.showOpenDialog({ filters: items }).then((arg0) => {
    let str = "";
    if (0 !== arg0.length) {
      str = arg0[0];
    }
    callback(table[1]).dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str });
  });
};