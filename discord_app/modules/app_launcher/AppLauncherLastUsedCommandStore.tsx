// === Module 11692: initialize ===

// Module 11692 (initialize)
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = 10 * setDefault.Millis.MINUTE;
let closure_1 = { lastUsedCommandId: null, lastUsedTimeMs: null };
const PersistedStore = initializeDefault.PersistedStore;
class AppLauncherLastUsedCommandStore extends PersistedStore {
}
const prototype = AppLauncherLastUsedCommandStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    ({ lastUsedCommandId: closure_1.lastUsedCommandId, lastUsedTimeMs: closure_1.lastUsedTimeMs } = arg0);
  }
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getLastUsedCommandId"] = function getLastUsedCommandId() {
  let lastUsedCommandId = null;
  if (null != lastUsedTimeMs.lastUsedTimeMs) {
    lastUsedCommandId = null;
    if (null != tmp2.lastUsedCommandId) {
      if (tmp > tmp2.lastUsedTimeMs + closure_0) {
        tmp2.lastUsedCommandId = null;
        tmp2.lastUsedTimeMs = null;
      }
      lastUsedCommandId = tmp2.lastUsedCommandId;
    }
  }
  return lastUsedCommandId;
};
AppLauncherLastUsedCommandStore.displayName = "AppLauncherLastUsedCommandStore";
AppLauncherLastUsedCommandStore.persistKey = "AppLauncherLastUsedCommandStore";
const appLauncherLastUsedCommandStore = new AppLauncherLastUsedCommandStore(dispatcherDefault, {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    closure_1.lastUsedCommandId = command.command.id;
    closure_1.lastUsedTimeMs = Date.now();
  }
});
const result = require("set").fileFinishedImporting("modules/app_launcher/AppLauncherLastUsedCommandStore.tsx");

export default appLauncherLastUsedCommandStore;