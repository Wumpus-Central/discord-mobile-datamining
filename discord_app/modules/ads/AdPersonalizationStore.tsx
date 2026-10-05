// discord_app/modules/ads/AdPersonalizationStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function reset() {}
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
  LOGOUT: reset,
};
const adPersonalizationStore = new AdPersonalizationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default adPersonalizationStore;
