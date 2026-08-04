import { DeviceSettingsStore } from "initialize";

const require = arg1;
let closure_2 = {};
class ICYMIFiltersStore extends DeviceSettingsStore {
}
const prototype = ICYMIFiltersStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
};
prototype["filterStaffContent"] = function filterStaffContent() {
  return true === closure_2.filterStaffContent;
};
prototype["getDoubleTapBehavior"] = function getDoubleTapBehavior() {
  let DEFAULT = closure_2.doubleTapBehavior;
  if (DEFAULT == null) {
    DEFAULT = require(7224) /* MessageEmbedTypes */.GravityICYMIDoubleTapBehavior.DEFAULT;
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
const iCYMIFiltersStore = new ICYMIFiltersStore(require("dispatcher"), {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default iCYMIFiltersStore;