// discord_app/modules/parent_tools/FamilyCenterPendingConnectionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

let c0 = null;
const PersistedStore = initializeDefault.PersistedStore;
class FamilyCenterPendingConnectionStore extends PersistedStore {
}
const prototype = FamilyCenterPendingConnectionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = null;
  }
  c0 = tmp;
};
prototype["getState"] = function getState() {
  return c0;
};
prototype["getPendingConnection"] = function getPendingConnection() {
  return c0;
};
FamilyCenterPendingConnectionStore.displayName = "FamilyCenterPendingConnectionStore";
FamilyCenterPendingConnectionStore.persistKey = "FamilyCenterPendingConnectionStore";
const familyCenterPendingConnectionStore = new FamilyCenterPendingConnectionStore(dispatcherDefault, {
  FAMILY_CENTER_PENDING_CONNECTION_SET: function handleSet(teenId) {
    closure_0 = { teenId: teenId.teenId, linkCode: teenId.linkCode };
  },
  FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function handleClear() {
    c0 = null;
  },
  LOGOUT: function handleLogout() {
    c0 = null;
  }
});
const result = require("obj132").fileFinishedImporting("modules/parent_tools/FamilyCenterPendingConnectionStore.tsx");

export default familyCenterPendingConnectionStore;