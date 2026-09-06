// discord_app/modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

let categories = [];
let closure_1 = null;
const Store = initializeDefault.Store;
class ApplicationDirectoryCategoriesStore extends Store {}
const prototype = ApplicationDirectoryCategoriesStore.prototype;
prototype["getLastFetchTimeMs"] = function getLastFetchTimeMs() {
  return closure_1;
};
prototype["getCategories"] = function getCategories() {
  return categories;
};
prototype["getCategory"] = function getCategory(arg0) {
  closure_0 = arg0;
  return categories.find((id) => id.id === closure_0);
};
ApplicationDirectoryCategoriesStore.displayName = "ApplicationDirectoryCategoriesStore";
const applicationDirectoryCategoriesStore = new ApplicationDirectoryCategoriesStore(DispatcherDefault, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function handleFetchAppDirectoryCategoriesSuccess(categories) {
    categories = categories.categories;
    closure_1 = Date.now();
  },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx",
);

export default applicationDirectoryCategoriesStore;
