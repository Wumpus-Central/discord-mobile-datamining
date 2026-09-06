// === Module 1513: NavigationBuilderContext ===

// Module 1513 (NavigationBuilderContext)
import noop from "module_19" /* 19 */;


export const NavigationBuilderContext = noop.createContext({
  onDispatchAction() {

  },
  onEmitEvent() {

  },
  onOptionsChange() {

  },
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
  }
});