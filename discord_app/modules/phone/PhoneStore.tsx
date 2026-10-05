// === Module 6430: PhoneStore ===

// Module 6430 (PhoneStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5105 */;
import size from "module_2" /* 2 */;

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
const getDefaultCountryCode = CountryCodeUtils.getDefaultCountryCode;
const getCountryCodeByAlpha2 = CountryCodeUtils.getCountryCodeByAlpha2;
let closure_3 = getDefaultCountryCode();
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class PhoneStore extends DeviceSettingsStore {
  initialize(selectedCountryCode) {
    if (null != selectedCountryCode) {
      countryCode = selectedCountryCode.selectedCountryCode;
    }
  }
  getUserAgnosticState() {
    return { selectedCountryCode: countryCode };
  }
  getCountryCode() {
    return null != countryCode ? countryCode : closure_3;
  }
}
const prototype = PhoneStore.prototype;
PhoneStore.displayName = "PhoneStore";
PhoneStore.persistKey = "PhoneStore";
const obj = {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata
};
const phoneStore = new PhoneStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default phoneStore;