// === Module 1530: NavigationBuilderContext ===

// Module 1530 (NavigationBuilderContext)
import noopAll from "noop" /* 19 */;


export const NavigationBuilderContext = noopAll.createContext({
  onDispatchAction(target, arg1) {

  },
  onEmitEvent() {

  },
  onOptionsChange() {

  },
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
  }
});