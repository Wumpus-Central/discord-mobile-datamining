// discord_app/modules/icymi/ICYMIFiltersStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ICYMITypes from "ICYMITypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

let filters = {};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ICYMIFiltersStore extends DeviceSettingsStore {
  initialize(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    filters = obj;
  }
  filterStaffContent() {
    return true === filters.filterStaffContent;
  }
  getDoubleTapBehavior() {
    let DEFAULT = filters.doubleTapBehavior;
    if (DEFAULT == null) {
      DEFAULT = ICYMITypes.GravityICYMIDoubleTapBehavior.DEFAULT;
    }
    return DEFAULT;
  }
  getState() {
    return filters;
  }
  getUserAgnosticState() {
    return filters;
  }
}
const prototype = ICYMIFiltersStore.prototype;
ICYMIFiltersStore.displayName = "ICYMIFiltersStore";
ICYMIFiltersStore.persistKey = "ICYMIFiltersStore";
let obj = {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  },
};
const iCYMIFiltersStore = new ICYMIFiltersStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default iCYMIFiltersStore;
