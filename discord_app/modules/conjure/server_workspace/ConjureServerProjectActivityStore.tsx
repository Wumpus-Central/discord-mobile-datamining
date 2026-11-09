// === Module 15886: ConjureServerProjectActivityStore ===

// Module 15886 (ConjureServerProjectActivityStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

function markRunning(id) {
  const result = map.set(id, Date.now());
  set.add(id);
}
let map = new Map();
let set = new Set();
const Store = initializeDefault.Store;
class ConjureServerProjectActivityStore extends Store {
}
ConjureServerProjectActivityStore.prototype["getTurnStartedAt"] = function getTurnStartedAt(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
ConjureServerProjectActivityStore.displayName = "ConjureServerProjectActivityStore";
const conjureServerProjectActivityStore = new ConjureServerProjectActivityStore(DispatcherDefault, {
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let flag = false;
    const iter = arg0.projects[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (true !== nextResult.running) {
        let deleteResult = set.delete(tmp2.id);
      } else if (!set.has(tmp2.id)) {
        let tmp7 = markRunning(tmp2.id);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  CONJURE_PROJECT_RUNNING_UPDATE: function handleRunningUpdate(projectId) {
    projectId = projectId.projectId;
    if (projectId.running) {
      const _Date = Date;
      const result = map.set(projectId, Date.now());
      set.add(projectId);
      let flag = true;
    } else {
      set.delete(projectId);
      flag = false;
    }
    return flag;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set.delete(projectId);
    return map.delete(projectId);
  },
  LOGOUT: function handleLogout() {
    map = new Map();
    set = new Set();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/ConjureServerProjectActivityStore.tsx");

export default conjureServerProjectActivityStore;