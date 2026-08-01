// === Module 11260: getLastFetchTimeMs ===

// Module 11260 (getLastFetchTimeMs)
import { Store } from "initialize";

let closure_0 = [];
let c1 = null;
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
  let closure_0 = arg0;
  return closure_0.find((id) => id.id === closure_0);
};
ApplicationDirectoryCategoriesStore.displayName = "ApplicationDirectoryCategoriesStore";
const applicationDirectoryCategoriesStore = new ApplicationDirectoryCategoriesStore(require("dispatcher"), {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function handleFetchAppDirectoryCategoriesSuccess(categories) {
    categories = categories.categories;
    let closure_1 = Date.now();
  }
});
const result = require("set").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx");

export default applicationDirectoryCategoriesStore;