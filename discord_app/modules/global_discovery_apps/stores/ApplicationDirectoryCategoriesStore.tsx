// === Module 11700: ApplicationDirectoryCategoriesStore ===

// Module 11700 (ApplicationDirectoryCategoriesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let categories = [];
let closure_1 = null;
const Store = get_initializedDefault.Store;
class ApplicationDirectoryCategoriesStore extends Store {
  getLastFetchTimeMs() {
    return closure_1;
  }
  getCategories() {
    return categories;
  }
  getCategory(arg0) {
    let closure_0 = arg0;
    return categories.find((id) => id.id === closure_0);
  }
}
const prototype = ApplicationDirectoryCategoriesStore.prototype;
ApplicationDirectoryCategoriesStore.displayName = "ApplicationDirectoryCategoriesStore";
const obj = {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function handleFetchAppDirectoryCategoriesSuccess(categories) {
    categories = categories.categories;
    closure_1 = Date.now();
  }
};
const applicationDirectoryCategoriesStore = new ApplicationDirectoryCategoriesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx");

export default applicationDirectoryCategoriesStore;