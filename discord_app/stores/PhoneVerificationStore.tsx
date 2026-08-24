// discord_app/stores/PhoneVerificationStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

let c0 = false;
const Store = initializeDefault.Store;
class PhoneVerificationStore extends Store {
}
PhoneVerificationStore.prototype["getCountrySelectorOpened"] = function getCountrySelectorOpened() {
  return c0;
};
PhoneVerificationStore.displayName = "PhoneVerificationStore";
const phoneVerificationStore = new PhoneVerificationStore(dispatcherDefault, {
  VERIFICATION_OPEN_COUNTRY_SELECTOR: function handleOpenCountry() {
    c0 = true;
  },
  VERIFICATION_CLOSE_COUNTRY_SELECTOR: function handleCloseCountrySelector() {
    c0 = false;
  }
});
const result = require("set").fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default phoneVerificationStore;