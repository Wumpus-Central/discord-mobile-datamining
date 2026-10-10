// === Module 13218: ConjureOverlayBackgroundStore ===

// Module 13218 (ConjureOverlayBackgroundStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const map = new Map();
const Store = initializeDefault.Store;
class ConjureOverlayBackgroundStore extends Store {
}
ConjureOverlayBackgroundStore.prototype["getBackground"] = function getBackground(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureOverlayBackgroundStore = new ConjureOverlayBackgroundStore(DispatcherDefault, {
  CONJURE_OVERLAY_BACKGROUND_SET: function handleOverlayBackgroundSet(blur) {
    const result = map.set(blur.projectId, { blur: blur.blur, imageEtag: blur.imageEtag });
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/ConjureOverlayBackgroundStore.tsx");

export default conjureOverlayBackgroundStore;