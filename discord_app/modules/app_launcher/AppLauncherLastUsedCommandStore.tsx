// === Module 11297: initialize ===

// Module 11297 (initialize)
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = 10 * obj132Default.Millis.MINUTE;
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
    if (null != lastUsedTimeMs.lastUsedCommandId) {
      if (tmp > lastUsedTimeMs.lastUsedTimeMs + closure_0) {
        lastUsedTimeMs.lastUsedCommandId = null;
        lastUsedTimeMs.lastUsedTimeMs = null;
      }
      lastUsedCommandId = lastUsedTimeMs.lastUsedCommandId;
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
const result = require("obj132").fileFinishedImporting("modules/app_launcher/AppLauncherLastUsedCommandStore.tsx");

export default appLauncherLastUsedCommandStore;