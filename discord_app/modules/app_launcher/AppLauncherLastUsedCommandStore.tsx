// === Module 11758: AppLauncherLastUsedCommandStore ===

// Module 11758 (AppLauncherLastUsedCommandStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import size from "module_2" /* 2 */;

let closure_0 = 10 * DurationsDefault.Millis.MINUTE;
const PersistedStore = get_initializedDefault.PersistedStore;
class AppLauncherLastUsedCommandStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      ({ lastUsedCommandId: closure_1.lastUsedCommandId, lastUsedTimeMs: closure_1.lastUsedTimeMs } = arg0);
    }
  }
  getState() {
    return lastUsedTimeMs;
  }
  getLastUsedCommandId() {
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
  }
}
const prototype = AppLauncherLastUsedCommandStore.prototype;
AppLauncherLastUsedCommandStore.displayName = "AppLauncherLastUsedCommandStore";
AppLauncherLastUsedCommandStore.persistKey = "AppLauncherLastUsedCommandStore";
const obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    lastUsedTimeMs.lastUsedCommandId = command.command.id;
    lastUsedTimeMs.lastUsedTimeMs = Date.now();
  }
};
const appLauncherLastUsedCommandStore = new AppLauncherLastUsedCommandStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/app_launcher/AppLauncherLastUsedCommandStore.tsx");

export default appLauncherLastUsedCommandStore;