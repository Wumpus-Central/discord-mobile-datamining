// === Module 17693: PhoneVerificationStore ===

// Module 17693 (PhoneVerificationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

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
  }
};
const phoneVerificationStore = new PhoneVerificationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default phoneVerificationStore;