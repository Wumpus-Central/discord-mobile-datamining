// _runtime/01648_react-native.js
import react_native from "00017_react-native.js";

const LogBox = react_native.LogBox;
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
