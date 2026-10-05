// discord_app/modules/parent_tools/FamilyCenterPendingConnectionStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const familyCenterPendingConnectionStore = new FamilyCenterPendingConnectionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterPendingConnectionStore.tsx");

export default familyCenterPendingConnectionStore;
