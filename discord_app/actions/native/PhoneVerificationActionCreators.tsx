// === Module 8653: dispatcher ===

// Module 8653 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    dispatcherDefault.dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    dispatcherDefault.dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};