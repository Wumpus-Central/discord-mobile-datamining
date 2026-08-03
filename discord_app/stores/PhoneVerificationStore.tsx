import { Store } from "initialize";

let c0 = false;
class PhoneVerificationStore extends Store {
}
PhoneVerificationStore.prototype["getCountrySelectorOpened"] = function getCountrySelectorOpened() {
  return c0;
};
PhoneVerificationStore.displayName = "PhoneVerificationStore";
const phoneVerificationStore = new PhoneVerificationStore(require("dispatcher"), {
  VERIFICATION_OPEN_COUNTRY_SELECTOR: function handleOpenCountry() {
    let c0 = true;
  },
  VERIFICATION_CLOSE_COUNTRY_SELECTOR: function handleCloseCountrySelector() {
    let c0 = false;
  }
});
const result = require("set").fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default phoneVerificationStore;