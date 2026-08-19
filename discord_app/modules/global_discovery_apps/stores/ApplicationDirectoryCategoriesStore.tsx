// === Module 11248: getLastFetchTimeMs ===

// Module 11248 (getLastFetchTimeMs)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = [];
let c1 = null;
const Store = initializeDefault.Store;
class ApplicationDirectoryCategoriesStore extends Store {
}
const prototype = ApplicationDirectoryCategoriesStore.prototype;
prototype["getLastFetchTimeMs"] = function getLastFetchTimeMs() {
  return c1;
};
prototype["getCategories"] = function getCategories() {
  return closure_0;
};
prototype["getCategory"] = function getCategory(arg0) {
  closure_0 = arg0;
  return closure_0.find((item, index) => item.id === closure_0);
};
ApplicationDirectoryCategoriesStore.displayName = "ApplicationDirectoryCategoriesStore";
const applicationDirectoryCategoriesStore = new ApplicationDirectoryCategoriesStore(dispatcherDefault, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function handleFetchAppDirectoryCategoriesSuccess(categories) {
    categories = categories.categories;
    closure_1 = Date.now();
  }
});
const result = require("obj132").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx");

export default applicationDirectoryCategoriesStore;