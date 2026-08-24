// === Module 8620: handleSetLocationMetadata ===

// Module 8620 (handleSetLocationMetadata)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DEFAULT_COUNTRY_CODE_NAME from "DEFAULT_COUNTRY_CODE_NAME" /* 4077 */;

function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = getCountryCodeByAlpha2(countryCode);
    if (tmp2 == null) {
      tmp2 = getDefaultCountryCode();
    }
    closure_3 = tmp2;
  }
}
const getDefaultCountryCode = DEFAULT_COUNTRY_CODE_NAME.getDefaultCountryCode;
const getCountryCodeByAlpha2 = DEFAULT_COUNTRY_CODE_NAME.getCountryCodeByAlpha2;
let closure_3 = getDefaultCountryCode();
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
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
const phoneStore = new PhoneStore(dispatcherDefault, {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata
});
const result = set.fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default phoneStore;