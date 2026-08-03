import DEFAULT_COUNTRY_CODE_NAME from "DEFAULT_COUNTRY_CODE_NAME";
import { DeviceSettingsStore } from "initialize";

function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = getCountryCodeByAlpha2(countryCode);
    if (tmp2 == null) {
      tmp2 = getDefaultCountryCode();
    }
    let closure_3 = tmp2;
  }
}
const getDefaultCountryCode = DEFAULT_COUNTRY_CODE_NAME.getDefaultCountryCode;
const getCountryCodeByAlpha2 = DEFAULT_COUNTRY_CODE_NAME.getCountryCodeByAlpha2;
let closure_3 = getDefaultCountryCode();
class PhoneStore extends DeviceSettingsStore {
}
const prototype = PhoneStore.prototype;
prototype["initialize"] = function initialize(selectedCountryCode) {
  if (null != selectedCountryCode) {
    selectedCountryCode = selectedCountryCode.selectedCountryCode;
  }
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { selectedCountryCode: closure_0 };
};
prototype["getCountryCode"] = function getCountryCode() {
  return null != closure_0 ? closure_0 : closure_3;
};
PhoneStore.displayName = "PhoneStore";
PhoneStore.persistKey = "PhoneStore";
const phoneStore = new PhoneStore(require("dispatcher"), {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata
});
const result = require("dispatcher").fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default phoneStore;