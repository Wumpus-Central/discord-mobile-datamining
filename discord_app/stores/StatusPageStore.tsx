// discord_app/stores/StatusPageStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

require = fn;
const MaintenanceStore = "MaintenanceStore";
let c3 = null;
let c4 = null;
let c5 = null;
const Store = initializeDefault.Store;
class MaintenanceStore extends Store {
}
const prototype = MaintenanceStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  closure_5 = Storage.get(MaintenanceStore);
};
prototype["getIncident"] = function getIncident() {
  return c3;
};
prototype["getScheduledMaintenance"] = function getScheduledMaintenance() {
  let scheduled_until;
  if (_null != null) {
    scheduled_until = _null.scheduled_until;
  }
  if (scheduled_until == null) {
    let scheduled_for;
    if (_null != null) {
      scheduled_for = _null.scheduled_for;
    }
    scheduled_until = scheduled_for;
  }
  let tmp3 = null;
  if (null != _null) {
    tmp3 = null;
    if (_null.id !== c5) {
      if (null == scheduled_until) {
        tmp3 = _null;
      } else {
        const _Date = Date;
        const _Date2 = Date;
        const timestamp = Date.now();
        tmp3 = null;
        const date = new Date(scheduled_until);
      }
    }
  }
  return tmp3;
};
MaintenanceStore.displayName = "MaintenanceStore";
const maintenanceStore = new MaintenanceStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c3 = null;
  },
  STATUS_PAGE_INCIDENT: function handleIncident(incident) {
    incident = incident.incident;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function handleScheduledMaintenance(maintenance) {
    maintenance = maintenance.maintenance;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function handleScheduledMaintenanceAck() {
    if (null == _null) {
      return false;
    } else {
      const id = _null.id;
      const Storage = Storage2.Storage;
      const result = Storage.set(MaintenanceStore, id);
    }
  }
});
let result = require("obj132").fileFinishedImporting("stores/StatusPageStore.tsx");

export default maintenanceStore;