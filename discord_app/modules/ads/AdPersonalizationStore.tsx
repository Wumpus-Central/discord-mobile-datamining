// === Module 13684: AdPersonalizationStore ===

// Module 13684 (AdPersonalizationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

function reset() {

}
const Store = initializeDefault.Store;
class AdPersonalizationStore extends Store {
}
AdPersonalizationStore.prototype["isTogglesDisabled"] = function isTogglesDisabled() {
  return flag;
};
const adPersonalizationStore = new AdPersonalizationStore(DispatcherDefault, {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: function handleAdPersonalizationTogglesRestricted(disabled) {
    flag = disabled.disabled;
    if (flag == null) {
      flag = false;
    }
  },
  CONNECTION_OPEN: reset,
  LOGOUT: reset
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default adPersonalizationStore;