// === Module 13168: ConjureLiveReloadStore ===

// Module 13168 (ConjureLiveReloadStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const map = new Map();
const Store = initializeDefault.Store;
class ConjureLiveReloadStore extends Store {
}
ConjureLiveReloadStore.prototype["getLiveReload"] = function getLiveReload(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureLiveReloadStore = new ConjureLiveReloadStore(DispatcherDefault, {
  CONJURE_LIVE_RELOAD_SET: function handleLiveReloadSet(enabled) {
    const result = map.set(enabled.projectId, { enabled: enabled.enabled, error: enabled.error, phase: enabled.phase, step: enabled.step });
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/live_reload/ConjureLiveReloadStore.tsx");

export default conjureLiveReloadStore;