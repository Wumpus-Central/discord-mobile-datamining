// _runtime/01529_NavigationBuilderContext.js
import noopAll from "00019_noop.js";

export const NavigationBuilderContext = noopAll.createContext({
  onDispatchAction(target, arg1) {},
  onEmitEvent() {},
  onOptionsChange() {},
  getIsStateEmitted() {
    return false;
  },
  scheduleUpdate() {
    error = new Error("Couldn't find a context for scheduling updates.");
    throw error;
  },
  flushUpdates() {
    error = new Error("Couldn't find a context for flushing updates.");
    throw error;
  },
});
