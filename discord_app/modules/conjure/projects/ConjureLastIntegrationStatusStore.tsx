// === Module 10758: ConjureLastIntegrationStatusStore ===

// Module 10758 (ConjureLastIntegrationStatusStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

let obj = { statuses: [] };
let closure_1 = obj;
const PersistedStore = initializeDefault.PersistedStore;
class ConjureLastIntegrationStatusStore extends PersistedStore {
}
const prototype = ConjureLastIntegrationStatusStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_1 = tmp;
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getIntegrationStatus"] = function getIntegrationStatus(arg0) {
  closure_0 = arg0;
  const statuses = closure_1.statuses;
  const found = statuses.find((projectId) => projectId.projectId === closure_0);
  let status;
  if (found != null) {
    status = found.status;
  }
  if (status == null) {
    status = null;
  }
  return status;
};
ConjureLastIntegrationStatusStore.displayName = "ConjureLastIntegrationStatusStore";
ConjureLastIntegrationStatusStore.persistKey = "ConjureLastIntegrationStatus";
const conjureLastIntegrationStatusStore = new ConjureLastIntegrationStatusStore(DispatcherDefault, {
  CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function handleIntegrationStatusUpdate(projectId) {
    projectId = projectId.projectId;
    const statuses = closure_1.statuses;
    obj = { statuses: null };
    const items = [];
    items[HermesBuiltin.arraySpread(statuses.filter((projectId) => projectId.projectId !== projectId), 0)] = { projectId, status: projectId.integrationStatus };
    obj.statuses = items.slice(-20);
    closure_1 = obj;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    const statuses = closure_1.statuses;
    if (statuses.some((projectId) => projectId.projectId === projectId)) {
      obj = { statuses: null };
      const statuses1 = closure_1.statuses;
      obj.statuses = statuses1.filter((projectId) => projectId.projectId !== projectId);
      closure_1 = obj;
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    closure_1 = obj;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/ConjureLastIntegrationStatusStore.tsx");

export default conjureLastIntegrationStatusStore;