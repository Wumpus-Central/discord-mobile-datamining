// _runtime/01513_NavigationBuilderContext.js
import noop from "metro/00019__.js";

export const NavigationBuilderContext = noop.createContext({
  onDispatchAction() {},
  onEmitEvent() {},
  onOptionsChange() {},
  getIsStateEmitted() {
    return false;
  },
  scheduleUpdate() {
    const error = new Error("Couldn't find a context for scheduling updates.");
    throw error;
  },
  flushUpdates() {
    const error = new Error("Couldn't find a context for flushing updates.");
    throw error;
  },
});
