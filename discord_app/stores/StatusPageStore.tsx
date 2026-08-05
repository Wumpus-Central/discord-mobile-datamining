// discord_app/stores/StatusPageStore.tsx
import { Store } from "initialize";
import { Storage } from "../../discord_common/js/packages/storage/Storage.tsx";

const require = arg1;
const MaintenanceStore = "MaintenanceStore";
let c3 = null;
let c4 = null;
let c5 = null;
class MaintenanceStore extends Store {
}
const prototype = MaintenanceStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage.Storage;
  let closure_5 = Storage.get(MaintenanceStore);
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
        const date = new Date(scheduled_until);
        tmp3 = null;
      }
    }
  }
  return tmp3;
};
MaintenanceStore.displayName = "MaintenanceStore";
const maintenanceStore = new MaintenanceStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c3 = null;
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
      const Storage = Storage.Storage;
      const result = Storage.set(MaintenanceStore, id);
    }
  }
});
let result = require("dispatcher").fileFinishedImporting("stores/StatusPageStore.tsx");

export default maintenanceStore;