// discord_app/modules/location_metadata/stores/LocationMetadataStore.tsx
import set from "../../../../_runtime/00002_set.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import DEFAULT_COUNTRY_CODE_NAME from "../../i18n/CountryCodeUtils.tsx";

function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = callback2(countryCode);
    if (tmp2 == null) {
      tmp2 = callback();
    }
    closure_2 = tmp2;
  }
}
({ getDefaultCountryCode: c0, getCountryCodeByAlpha2: closure_1 } = DEFAULT_COUNTRY_CODE_NAME);
let c2 = null;
const Store = initializeDefault.Store;
class LocationMetadataStore extends Store {
}
LocationMetadataStore.prototype["getCountryCode"] = function getCountryCode() {
  return c2;
};
LocationMetadataStore.displayName = "LocationMetadataStore";
const locationMetadataStore = new LocationMetadataStore(dispatcherDefault, { CONNECTION_OPEN: handleSetLocationMetadata, SET_LOCATION_METADATA: handleSetLocationMetadata });
const result = set.fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default locationMetadataStore;