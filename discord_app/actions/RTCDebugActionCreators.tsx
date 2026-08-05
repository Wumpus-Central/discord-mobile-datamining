import { dispatcher } from "../Dispatcher.tsx";
import { set } from "../lib/DiscordNative.tsx";
import { trackVoiceAndVideoDebuggingSettingsUpdated } from "../modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx";
// discord_app/actions/RTCDebugActionCreators.tsx
import updateStats from "updateStats";

const result = require("trackVoiceAndVideoDebuggingSettingsUpdated").fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  let obj = dispatcher;
  obj = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj);
  dispatcher.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  dispatcher.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  dispatcher.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  let obj = dispatcher;
  obj = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoDebuggingSettingsUpdated("connection_replay_log_enabled", value, updateStats.shouldRecordNextConnection());
  let obj = dispatcher;
  obj = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  let obj = dispatcher;
  obj = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj);
};
export const chooseReplayPath = function chooseReplayPath() {
  const fileManager = set.fileManager;
  const items = [{ name: "All Files", extensions: ["*"] }];
  fileManager.showOpenDialog({ filters: items }).then((arg0) => {
    let str = "";
    if (0 !== arg0.length) {
      str = arg0[0];
    }
    callback(table[1]).dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str });
  });
};