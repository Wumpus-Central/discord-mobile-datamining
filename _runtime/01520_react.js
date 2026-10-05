// _runtime/01520_react.js
import react from "00019_react.js";

const obj = {
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
};

export const NavigationBuilderContext = react.createContext(obj);
