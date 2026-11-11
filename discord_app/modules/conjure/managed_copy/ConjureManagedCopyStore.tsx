// === Module 7310: ConjureManagedCopyStore ===

// Module 7310 (ConjureManagedCopyStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

const map = new Map();
const map1 = new Map();
const map2 = new Map();
const Store = initializeDefault.Store;
class ConjureManagedCopyStore extends Store {
}
const prototype = ConjureManagedCopyStore.prototype;
prototype["getCopy"] = function getCopy(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLastSync"] = function getLastSync(arg0) {
  value = map1.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getDownstreamUpdates"] = function getDownstreamUpdates(arg0) {
  value = map2.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureManagedCopyStore = new ConjureManagedCopyStore(DispatcherDefault, {
  CONJURE_COPY_STATE_SET: function handleCopyStateSet(arg0) {
    ({ projectId, event } = arg0);
    map2.delete(projectId);
    const obj = { sourceProjectId: event.source_project_id, sourceName: null, sourceApplicationId: null, updatesPaused: null };
    let source_name = event.source_name;
    if (source_name == null) {
      source_name = null;
    }
    obj.sourceName = source_name;
    let prop = event.source_application_id;
    if (prop == null) {
      prop = null;
    }
    obj.sourceApplicationId = prop;
    obj.updatesPaused = true === event.updates_paused;
    const result = map.set(projectId, obj);
  },
  CONJURE_COPY_SYNC_SET: function handleCopySyncSet(event) {
    event = event.event;
    const parsed = Date.parse(event.at);
    const obj = { status: event.status, atMs: null };
    let tmp3 = null;
    if (!Number.isNaN(parsed)) {
      tmp3 = parsed;
    }
    obj.atMs = tmp3;
    const result = map1.set(event.projectId, obj);
  },
  CONJURE_DOWNSTREAM_UPDATES_SET: function handleDownstreamUpdatesSet(event) {
    event = event.event;
    const obj = { enabled: event.enabled, pending: false, error: null };
    let error = event.error;
    if (error == null) {
      error = null;
    }
    obj.error = error;
    const result = map2.set(event.projectId, obj);
  },
  CONJURE_DOWNSTREAM_UPDATES_REQUEST: function handleDownstreamUpdatesRequest(projectId) {
    projectId = projectId.projectId;
    let flag = null != map2.get(projectId);
    if (flag) {
      const obj2 = { enabled: projectId.enabled, pending: true, error: null };
      const result = map2.set(projectId, obj2);
      flag = true;
    }
    return flag;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/managed_copy/ConjureManagedCopyStore.tsx");

export default conjureManagedCopyStore;