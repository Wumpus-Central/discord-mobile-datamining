// discord_app/modules/phone/PhoneStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import CountryCodeUtils from "../i18n/CountryCodeUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class PhoneStore extends DeviceSettingsStore {}
const prototype = PhoneStore.prototype;
prototype["initialize"] = function initialize(selectedCountryCode) {
  if (null != selectedCountryCode) {
    countryCode = selectedCountryCode.selectedCountryCode;
  }
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { selectedCountryCode: countryCode };
};
prototype["getCountryCode"] = function getCountryCode() {
  return null != countryCode ? countryCode : closure_3;
};
PhoneStore.displayName = "PhoneStore";
PhoneStore.persistKey = "PhoneStore";
const phoneStore = new PhoneStore(DispatcherDefault, {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata,
});
const result = size.fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default phoneStore;
