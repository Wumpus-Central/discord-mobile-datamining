// discord_app/actions/native/PhoneVerificationActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";

const result = set.fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    dispatcherDefault.dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    dispatcherDefault.dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};