// === Module 1641: addLogBoxLog ===

// Module 1641 (addLogBoxLog)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const LogBox = get_ActivityIndicator.LogBox;
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