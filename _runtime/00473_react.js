// _runtime/00473_react.js
import react from "00019_react.js";

export default {
  install() {},
  uninstall() {},
  isInstalled() {
    return false;
  },
  ignoreLogs(arg0) {},
  ignoreAllLogs(arg0) {},
  clearAllLogs() {},
  addLog(arg0) {},
  addConsoleLog(arg0) {
    const substr = [...arguments].slice();
  },
  addException(arg0) {},
};
