// === Module 13511: AdPersonalizationStore ===

// Module 13511 (AdPersonalizationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function reset() {

}
let flag = false;
const Store = get_initializedDefault.Store;
class AdPersonalizationStore extends Store {
  isTogglesDisabled() {
    return flag;
  }
}
const prototype = AdPersonalizationStore.prototype;
const obj = {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: function handleAdPersonalizationTogglesRestricted(disabled) {
    flag = disabled.disabled;
    if (flag == null) {
      flag = false;
    }
  },
  CONNECTION_OPEN: reset,
  LOGOUT: reset
};
const adPersonalizationStore = new AdPersonalizationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default adPersonalizationStore;