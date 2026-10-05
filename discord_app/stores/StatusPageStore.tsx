// discord_app/stores/StatusPageStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  },
};
const maintenanceStore = new MaintenanceStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/StatusPageStore.tsx");

export default maintenanceStore;
