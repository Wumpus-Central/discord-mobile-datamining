// discord_app/modules/location_metadata/stores/LocationMetadataStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import CountryCodeUtils from "../../i18n/CountryCodeUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
