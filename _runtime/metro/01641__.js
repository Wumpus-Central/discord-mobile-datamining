// === Module 1641: ? ===

// Module 1641
import _mod17 from "module_17" /* 17 */;

const LogBox = _mod17.LogBox;
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