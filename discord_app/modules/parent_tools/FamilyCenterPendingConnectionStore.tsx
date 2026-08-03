// === Module 4472: initialize ===

// Module 4472 (initialize)
import { PersistedStore } from "initialize";

let c0 = null;
class FamilyCenterPendingConnectionStore extends PersistedStore {
}
const prototype = FamilyCenterPendingConnectionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = null;
  }
  let c0 = tmp;
};
prototype["getState"] = function getState() {
  return c0;
};
prototype["getPendingConnection"] = function getPendingConnection() {
  return c0;
};
FamilyCenterPendingConnectionStore.displayName = "FamilyCenterPendingConnectionStore";
FamilyCenterPendingConnectionStore.persistKey = "FamilyCenterPendingConnectionStore";
const familyCenterPendingConnectionStore = new FamilyCenterPendingConnectionStore(require("dispatcher"), {
  FAMILY_CENTER_PENDING_CONNECTION_SET: function handleSet(teenId) {
    let closure_0 = { teenId: teenId.teenId, linkCode: teenId.linkCode };
  },
  FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function handleClear() {
    let c0 = null;
  },
  LOGOUT: function handleLogout() {
    let c0 = null;
  }
});
const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterPendingConnectionStore.tsx");

export default familyCenterPendingConnectionStore;