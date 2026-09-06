// === Module 13717: LocationMetadataStore ===

// Module 13717 (LocationMetadataStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import CountryCodeUtils from "CountryCodeUtils" /* 4776 */;
import size from "module_2" /* 2 */;

function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = framebus(countryCode);
    if (tmp2 == null) {
      tmp2 = React();
    }
    closure_2 = tmp2;
  }
}
({ getDefaultCountryCode: closure_0, getCountryCodeByAlpha2: closure_1 } = CountryCodeUtils);
let closure_2 = null;
const Store = initializeDefault.Store;
class LocationMetadataStore extends Store {
}
LocationMetadataStore.prototype["getCountryCode"] = function getCountryCode() {
  return closure_2;
};
LocationMetadataStore.displayName = "LocationMetadataStore";
const locationMetadataStore = new LocationMetadataStore(DispatcherDefault, { CONNECTION_OPEN: handleSetLocationMetadata, SET_LOCATION_METADATA: handleSetLocationMetadata });
const result = size.fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default locationMetadataStore;