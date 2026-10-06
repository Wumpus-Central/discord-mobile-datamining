// === Module 5109: FamilyCenterPendingConnectionStore ===

// Module 5109 (FamilyCenterPendingConnectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c0 = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class FamilyCenterPendingConnectionStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = null;
    }
    c0 = tmp;
  }
  getState() {
    return c0;
  }
  getPendingConnection() {
    return c0;
  }
}
const prototype = FamilyCenterPendingConnectionStore.prototype;
FamilyCenterPendingConnectionStore.displayName = "FamilyCenterPendingConnectionStore";
FamilyCenterPendingConnectionStore.persistKey = "FamilyCenterPendingConnectionStore";
const obj = {
  FAMILY_CENTER_PENDING_CONNECTION_SET: function handleSet(teenId) {
    c0 = { teenId: teenId.teenId, linkCode: teenId.linkCode };
  },
  FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function handleClear() {
    c0 = null;
  },
  LOGOUT: function handleLogout() {
    c0 = null;
  }
};
const familyCenterPendingConnectionStore = new FamilyCenterPendingConnectionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterPendingConnectionStore.tsx");

export default familyCenterPendingConnectionStore;