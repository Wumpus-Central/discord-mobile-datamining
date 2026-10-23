// === Module 10710: ConjureLiveReloadStore ===

// Module 10710 (ConjureLiveReloadStore)
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
  CONJURE_LIVE_RELOAD_SET: function handleLiveReloadSet(background) {
    background = background.background;
    if (true === background) {
      const obj2 = { background };
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const result = map.set(background.projectId, { enabled: background.enabled, error: background.error, phase: background.phase, step: background.step });
    const obj = { enabled: background.enabled, error: background.error, phase: background.phase, step: background.step };
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/live_reload/ConjureLiveReloadStore.tsx");

export default conjureLiveReloadStore;