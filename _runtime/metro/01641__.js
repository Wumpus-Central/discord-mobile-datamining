// _runtime/metro/01641__.js
import _mod17 from "00017__.js";

const LogBox = _mod17.LogBox;
let fn;
if (LogBox != null) {
  const addLog = LogBox.addLog;
  if (addLog != null) {
    fn = addLog.bind(LogBox);
  }
}
if (fn == null) {
  fn = () => {};
}

export const addLogBoxLog = fn;
