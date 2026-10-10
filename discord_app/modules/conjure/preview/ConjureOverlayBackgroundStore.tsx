// discord_app/modules/conjure/preview/ConjureOverlayBackgroundStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

const map = new Map();
const Store = initializeDefault.Store;
class ConjureOverlayBackgroundStore extends Store {}
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/ConjureOverlayBackgroundStore.tsx");

export default conjureOverlayBackgroundStore;
