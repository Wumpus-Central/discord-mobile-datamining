// === Module 1648: react-native ===

// Module 1648 (react-native)
import react_native from "react-native" /* 17 */;

const LogBox = react_native.LogBox;
let fn;
if (LogBox != null) {
  const addLog = LogBox.addLog;
  if (addLog != null) {
    fn = addLog.bind(LogBox);
  }
}
if (fn == null) {
  fn = () => {

  };
}

export const addLogBoxLog = fn;