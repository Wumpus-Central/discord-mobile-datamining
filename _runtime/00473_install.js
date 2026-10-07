// _runtime/00473_install.js
import noop from "metro/00019__.js";

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
