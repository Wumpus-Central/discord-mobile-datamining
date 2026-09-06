// discord_app/modules/ads/AdPersonalizationStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

function reset() {}
const Store = initializeDefault.Store;
class AdPersonalizationStore extends Store {}
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
  LOGOUT: reset,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default adPersonalizationStore;
