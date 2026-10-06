// === Module 9073: LocationMetadataStore ===

// Module 9073 (LocationMetadataStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5111 */;
import size from "module_2" /* 2 */;

let _window;
let map;
function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = map(countryCode);
    if (tmp2 == null) {
      tmp2 = React();
    }
    closure_2 = tmp2;
  }
}
({ getDefaultCountryCode: _window, getCountryCodeByAlpha2: map } = CountryCodeUtils);
let closure_2 = null;
const Store = get_initializedDefault.Store;
class LocationMetadataStore extends Store {
  getCountryCode() {
    return closure_2;
  }
}
const prototype = LocationMetadataStore.prototype;
LocationMetadataStore.displayName = "LocationMetadataStore";
const obj = { CONNECTION_OPEN: handleSetLocationMetadata, SET_LOCATION_METADATA: handleSetLocationMetadata };
const locationMetadataStore = new LocationMetadataStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default locationMetadataStore;