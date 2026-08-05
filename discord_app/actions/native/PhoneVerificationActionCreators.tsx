// discord_app/actions/native/PhoneVerificationActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/native/PhoneVerificationActionCreators.tsx");

export default {
  openCountrySelector() {
    require("../../Dispatcher.tsx").dispatch({ type: "VERIFICATION_OPEN_COUNTRY_SELECTOR" });
  },
  setCountrySelectorClosed() {
    require("../../Dispatcher.tsx").dispatch({ type: "VERIFICATION_CLOSE_COUNTRY_SELECTOR" });
  }
};