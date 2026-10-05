// discord_app/stores/PhoneVerificationStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

let c0 = false;
const Store = get_initializedDefault.Store;
class PhoneVerificationStore extends Store {
  getCountrySelectorOpened() {
    return c0;
  }
}
const prototype = PhoneVerificationStore.prototype;
PhoneVerificationStore.displayName = "PhoneVerificationStore";
const obj = {
  VERIFICATION_OPEN_COUNTRY_SELECTOR: function handleOpenCountry() {
    c0 = true;
  },
  VERIFICATION_CLOSE_COUNTRY_SELECTOR: function handleCloseCountrySelector() {
    c0 = false;
  },
};
const phoneVerificationStore = new PhoneVerificationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default phoneVerificationStore;
