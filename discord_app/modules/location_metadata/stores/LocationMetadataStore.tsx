// === Module 10755: LocationMetadataStore ===

// Module 10755 (LocationMetadataStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5632 */;
import size from "module_2" /* 2 */;

({ getDefaultCountryCode: closure_0, getCountryCodeByAlpha2: closure_1 } = CountryCodeUtils);
let closure_2 = null;
let c3 = null;
const Store = initializeDefault.Store;
class LocationMetadataStore extends Store {
}
const prototype = LocationMetadataStore.prototype;
prototype["getCountryCode"] = function getCountryCode() {
  return closure_2;
};
prototype["getMinimumAge"] = function getMinimumAge() {
  return c3;
};
LocationMetadataStore.displayName = "LocationMetadataStore";
const locationMetadataStore = new LocationMetadataStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
    let flag = null != countryCode;
    if (flag) {
      let tmp2 = framebus(countryCode);
      if (tmp2 == null) {
        tmp2 = React();
      }
      closure_2 = tmp2;
      flag = true;
    }
    return flag;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(arg0) {
    ({ countryCode, minimumAge } = arg0);
    let flag = null != countryCode;
    if (flag) {
      let tmp2 = framebus(countryCode);
      if (tmp2 == null) {
        tmp2 = React();
      }
      closure_2 = tmp2;
      flag = true;
    }
    if (minimumAge == null) {
      minimumAge = null;
    }
    if (minimumAge !== c3) {
      c3 = minimumAge;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    let flag = null != c3;
    if (flag) {
      c3 = null;
      flag = true;
    }
    return flag;
  }
});
const result = size.fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default locationMetadataStore;