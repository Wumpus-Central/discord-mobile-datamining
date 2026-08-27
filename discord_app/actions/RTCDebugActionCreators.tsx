// === Module 10042: open ===

// Module 10042 (open)
import dispatcherDefault from "dispatcher" /* 709 */;
import setDefault from "set" /* 4072 */;
import trackVoiceAndVideoDebuggingSettingsUpdatedDefault from "trackVoiceAndVideoDebuggingSettingsUpdated" /* 9706 */;
import closure_2 from "updateStats" /* 10041 */;

const result = require("set").fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  let obj = dispatcherDefault;
  obj = { type: "RTC_DEBUG_MODAL_OPEN", section };
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
  let obj = dispatcherDefault;
  obj = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  trackVoiceAndVideoDebuggingSettingsUpdatedDefault("connection_replay_log_enabled", value, closure_2.shouldRecordNextConnection());
  let obj = dispatcherDefault;
  obj = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  let obj = dispatcherDefault;
  obj = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj);
};
export const chooseReplayPath = function chooseReplayPath() {
  const fileManager = setDefault.fileManager;
  const items = [{ name: "All Files", extensions: ["*"] }];
  fileManager.showOpenDialog({ filters: items }).then((arg0) => {
    let str = "";
    if (0 !== arg0.length) {
      str = arg0[0];
    }
    callback(table[1]).dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str });
  });
};