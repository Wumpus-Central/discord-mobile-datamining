// === Module 12850: handleSetLocationMetadata ===

// Module 12850 (handleSetLocationMetadata)
import DEFAULT_COUNTRY_CODE_NAME from "DEFAULT_COUNTRY_CODE_NAME";
import { Store } from "initialize";

let c0;
let closure_1;
function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = callback2(countryCode);
    if (tmp2 == null) {
      tmp2 = callback();
    }
    let c2 = tmp2;
  }
}
({ getDefaultCountryCode: c0, getCountryCodeByAlpha2: closure_1 } = DEFAULT_COUNTRY_CODE_NAME);
let c2 = null;
class LocationMetadataStore extends Store {
}
LocationMetadataStore.prototype["getCountryCode"] = function getCountryCode() {
  return c2;
};
LocationMetadataStore.displayName = "LocationMetadataStore";
const locationMetadataStore = new LocationMetadataStore(require("dispatcher"), { CONNECTION_OPEN: handleSetLocationMetadata, SET_LOCATION_METADATA: handleSetLocationMetadata });
const result = require("dispatcher").fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default locationMetadataStore;