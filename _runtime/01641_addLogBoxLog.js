// _runtime/01641_addLogBoxLog.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const LogBox = get_ActivityIndicator.LogBox;
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
