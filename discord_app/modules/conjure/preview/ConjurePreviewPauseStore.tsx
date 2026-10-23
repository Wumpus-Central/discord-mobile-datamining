// === Module 10740: ConjurePreviewPauseStore ===

// Module 10740 (ConjurePreviewPauseStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const set = new Set();
const Store = initializeDefault.Store;
class ConjurePreviewPauseStore extends Store {
}
ConjurePreviewPauseStore.prototype["isPaused"] = function isPaused(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
const conjurePreviewPauseStore = new ConjurePreviewPauseStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === set.size) {
      return false;
    } else {
      set.clear();
    }
  },
  CONJURE_PREVIEW_PAUSED_SET: function handlePausedSet(arg0) {
    ({ projectId, paused } = arg0);
    if (set.has(projectId) === paused) {
      return false;
    } else if (paused) {
      set.add(projectId);
    } else {
      set.delete(projectId);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewPauseStore.tsx");

export default conjurePreviewPauseStore;