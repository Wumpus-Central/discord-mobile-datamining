// discord_app/modules/icymi/ICYMIFiltersStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import MessageEmbedTypes from "ICYMITypes.tsx";

require = fn;
let closure_2 = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ICYMIFiltersStore extends DeviceSettingsStore {
}
const prototype = ICYMIFiltersStore.prototype;
prototype["initialize"] = function initialize(arg0) {

};
prototype["filterStaffContent"] = function filterStaffContent() {
  return true === closure_2.filterStaffContent;
};
prototype["getDoubleTapBehavior"] = function getDoubleTapBehavior() {
  let DEFAULT = closure_2.doubleTapBehavior;
  if (DEFAULT == null) {
    DEFAULT = MessageEmbedTypes.GravityICYMIDoubleTapBehavior.DEFAULT;
  }
  return DEFAULT;
};
prototype["getState"] = function getState() {
  return closure_2;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_2;
};
ICYMIFiltersStore.displayName = "ICYMIFiltersStore";
ICYMIFiltersStore.persistKey = "ICYMIFiltersStore";
const iCYMIFiltersStore = new ICYMIFiltersStore(dispatcherDefault, {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  }
});
const result = require("obj132").fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default iCYMIFiltersStore;