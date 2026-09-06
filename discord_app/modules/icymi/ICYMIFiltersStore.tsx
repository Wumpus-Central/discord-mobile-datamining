// discord_app/modules/icymi/ICYMIFiltersStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ICYMITypes from "ICYMITypes.tsx";

require = fn;
let filters = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ICYMIFiltersStore extends DeviceSettingsStore {}
const prototype = ICYMIFiltersStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  filters = obj;
};
prototype["filterStaffContent"] = function filterStaffContent() {
  return true === filters.filterStaffContent;
};
prototype["getDoubleTapBehavior"] = function getDoubleTapBehavior() {
  let DEFAULT = filters.doubleTapBehavior;
  if (DEFAULT == null) {
    DEFAULT = ICYMITypes.GravityICYMIDoubleTapBehavior.DEFAULT;
  }
  return DEFAULT;
};
prototype["getState"] = function getState() {
  return filters;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return filters;
};
ICYMIFiltersStore.displayName = "ICYMIFiltersStore";
ICYMIFiltersStore.persistKey = "ICYMIFiltersStore";
const iCYMIFiltersStore = new ICYMIFiltersStore(DispatcherDefault, {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default iCYMIFiltersStore;
