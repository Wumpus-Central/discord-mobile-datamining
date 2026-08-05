// discord_app/actions/native/PhoneVerificationActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    dispatcher.dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    dispatcher.dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};