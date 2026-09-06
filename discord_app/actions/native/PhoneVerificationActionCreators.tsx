// === Module 7076: PhoneVerificationActionCreators ===

// Module 7076 (PhoneVerificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    DispatcherDefault.dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    DispatcherDefault.dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};