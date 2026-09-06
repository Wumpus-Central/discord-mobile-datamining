// discord_app/stores/StatusPageStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";

require = fn;
const MaintenanceStore = "MaintenanceStore";
let incident = null;
let maintenance = null;
let id = null;
const Store = initializeDefault.Store;
class MaintenanceStore extends Store {}
const prototype = MaintenanceStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  id = Storage.get(MaintenanceStore);
};
prototype["getIncident"] = function getIncident() {
  return incident;
};
prototype["getScheduledMaintenance"] = function getScheduledMaintenance() {
  let scheduled_until;
  if (maintenance != null) {
    scheduled_until = maintenance.scheduled_until;
  }
  if (scheduled_until == null) {
    let scheduled_for;
    if (maintenance != null) {
      scheduled_for = maintenance.scheduled_for;
    }
    scheduled_until = scheduled_for;
  }
  let tmp3 = null;
  if (null != maintenance) {
    tmp3 = null;
    if (maintenance.id !== id) {
      if (null == scheduled_until) {
        tmp3 = maintenance;
      } else {
        const _Date = Date;
        const _Date2 = Date;
        const timestamp = Date.now();
        const date = new Date(scheduled_until);
        tmp3 = null;
      }
    }
  }
  return tmp3;
};
MaintenanceStore.displayName = "MaintenanceStore";
const maintenanceStore = new MaintenanceStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    incident = null;
  },
  STATUS_PAGE_INCIDENT: function handleIncident(incident) {
    incident = incident.incident;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function handleScheduledMaintenance(maintenance) {
    maintenance = maintenance.maintenance;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function handleScheduledMaintenanceAck() {
    if (null == maintenance) {
      return false;
    } else {
      id = maintenance.id;
      const Storage = Storage2.Storage;
      const result = Storage.set(MaintenanceStore, id);
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/StatusPageStore.tsx");

export default maintenanceStore;
