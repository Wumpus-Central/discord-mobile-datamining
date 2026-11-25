// === Module 14942: ConjureServerWidgetStore ===

// Module 14942 (ConjureServerWidgetStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6904 */;

require = fn;
function offersServerWidget(install_scope) {
  let tmp = "guild" === install_scope.install_scope;
  if (tmp) {
    const supported_surfaces = install_scope.supported_surfaces;
    let hasItem;
    if (supported_surfaces != null) {
      hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET);
    }
    tmp = true === hasItem;
  }
  return tmp;
}
const items = [];
let closure_3 = items;
let unattempted = "unattempted";
const Store = initializeDefault.Store;
class ConjureServerWidgetStore extends Store {
}
const prototype = ConjureServerWidgetStore.prototype;
prototype["getProjects"] = function getProjects() {
  return closure_3;
};
prototype["getProject"] = function getProject(arg0) {
  closure_0 = arg0;
  return closure_3.find((application_id) => application_id.application_id === closure_0);
};
prototype["getFetchState"] = function getFetchState() {
  return unattempted;
};
ConjureServerWidgetStore.displayName = "ConjureServerWidgetStore";
const conjureServerWidgetStore = new ConjureServerWidgetStore(DispatcherDefault, {
  CONJURE_SERVER_PROFILE_WIDGETS_FETCH_START: function handleFetchStart() {
    unattempted = "loading";
  },
  CONJURE_SERVER_PROFILE_WIDGETS_FETCH_SUCCESS: function handleFetchSuccess(projects) {
    projects = projects.projects;
    let found = projects.filter(offersServerWidget);
    if (0 === found.length) {
      found = items;
    }
    closure_3 = found;
    unattempted = "success";
  },
  CONJURE_SERVER_PROFILE_WIDGETS_FETCH_FAIL: function handleFetchFail() {
    unattempted = "error";
  },
  LOGOUT: function handleLogout() {
    closure_3 = items;
    unattempted = "unattempted";
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_widgets/ConjureServerWidgetStore.tsx");

export default conjureServerWidgetStore;