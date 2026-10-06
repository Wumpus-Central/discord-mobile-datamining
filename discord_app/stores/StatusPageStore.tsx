// === Module 13583: StatusPageStore ===

// Module 13583 (StatusPageStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const MaintenanceStore_str = "MaintenanceStore";
let incident = null;
let maintenance = null;
let id = null;
const Store = get_initializedDefault.Store;
class MaintenanceStore extends Store {
  initialize() {
    const Storage = Storage2.Storage;
    id = Storage.get(MaintenanceStore_str);
  }
  getIncident() {
    return incident;
  }
  getScheduledMaintenance() {
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
          const self = this;
          const self2 = this;
          const timestamp = Date.now();
          tmp3 = null;
          new Date(scheduled_until);
        }
      }
    }
    return tmp3;
  }
}
const prototype = MaintenanceStore.prototype;
MaintenanceStore.displayName = "MaintenanceStore";
const obj = {
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
      const result = Storage.set(MaintenanceStore_str, id);
    }
  }
};
const maintenanceStore = new MaintenanceStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/StatusPageStore.tsx");

export default maintenanceStore;