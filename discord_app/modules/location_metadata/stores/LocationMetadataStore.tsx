// discord_app/modules/location_metadata/stores/LocationMetadataStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import CountryCodeUtils from "../../i18n/CountryCodeUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
class LocationMetadataStore extends Store {}
LocationMetadataStore.prototype["getCountryCode"] = function getCountryCode() {
  return closure_2;
};
LocationMetadataStore.displayName = "LocationMetadataStore";
const locationMetadataStore = new LocationMetadataStore(DispatcherDefault, {
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata,
});
const result = size.fileFinishedImporting("modules/location_metadata/stores/LocationMetadataStore.tsx");

export default locationMetadataStore;
