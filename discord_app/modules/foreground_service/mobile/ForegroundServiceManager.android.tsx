// discord_app/modules/foreground_service/mobile/ForegroundServiceManager.android.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import setRequestedByAll from "setRequestedBy" /* 675 */;
import initializeDefault from "initialize" /* 4720 */;

let obj = importDefault;
const NativeModules = get_ActivityIndicator.NativeModules;
class ForegroundServiceManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj.serviceNotifications = map;
    obj.serviceNotificationIdentifier = 1;
    obj.handleChange = function handleChange() {
      if (obj.serviceNotifications.size > 0) {
        const ForegroundServiceModule2 = closure_1_3.ForegroundServiceModule;
        const serviceNotifications = tmp.serviceNotifications;
        const items = [];
        HermesBuiltin.arraySpread(serviceNotifications.values(), 0);
        ForegroundServiceModule2.startService(items);
      } else {
        const ForegroundServiceModule = closure_1_3.ForegroundServiceModule;
        ForegroundServiceModule.stopService();
      }
    };
    return obj;
  }
}
const prototype = ForegroundServiceManager.prototype;
prototype["initialize"] = function initialize() {

};
prototype["terminate"] = function terminate() {

};
prototype["addServiceHandler"] = function addServiceHandler(arg0) {
  const self = this;
  closure_0 = arg0;
  return new Promise((arg0) => {
    const serviceNotificationIdentifier = self.serviceNotificationIdentifier;
    self.serviceNotificationIdentifier = self.serviceNotificationIdentifier + 1;
    self.updateServiceHandler(serviceNotificationIdentifier, closure_0);
    arg0(serviceNotificationIdentifier);
  });
};
prototype["updateServiceHandler"] = function updateServiceHandler(arg0, usesGateway) {
  const self = this;
  if (null == usesGateway) {
    const serviceNotifications2 = self.serviceNotifications;
    if (serviceNotifications2.has(arg0)) {
      const _HermesInternal3 = HermesInternal;
      setRequestedByAll.stopRequest("ForegroundService:" + arg0);
      const serviceNotifications3 = self.serviceNotifications;
      serviceNotifications3.delete(arg0);
      self.handleChange();
      const obj2 = setRequestedByAll;
    }
  } else {
    const serviceNotifications4 = self.serviceNotifications;
    if (!tmp16(serviceNotifications4.get(arg0), usesGateway)) {
      obj = setRequestedByAll;
      if (usesGateway.usesGateway) {
        const _HermesInternal2 = HermesInternal;
        obj.setRequestedBy("ForegroundService:" + arg0);
      } else {
        const _HermesInternal = HermesInternal;
        obj.stopRequest("ForegroundService:" + arg0);
      }
      const serviceNotifications = self.serviceNotifications;
      const result = serviceNotifications.set(arg0, usesGateway);
      self.handleChange();
    }
    tmp16 = obj(659);
  }
};
prototype["removeServiceHandler"] = function removeServiceHandler(arg0) {
  this.updateServiceHandler(arg0, null);
};
prototype["isForegroundServiceRunning"] = function isForegroundServiceRunning(arg0) {
  const ForegroundServiceModule = NativeModules.ForegroundServiceModule;
  ForegroundServiceModule.isServiceRunning(arg0);
};
obj = Object.create(ForegroundServiceManager.prototype);
obj.serviceNotifications = new Map();
obj.serviceNotificationIdentifier = 1;
obj.handleChange = function handleChange() {
  if (obj.serviceNotifications.size > 0) {
    const ForegroundServiceModule2 = closure_1_3.ForegroundServiceModule;
    const serviceNotifications = tmp.serviceNotifications;
    const items = [];
    HermesBuiltin.arraySpread(serviceNotifications.values(), 0);
    ForegroundServiceModule2.startService(items);
  } else {
    const ForegroundServiceModule = closure_1_3.ForegroundServiceModule;
    ForegroundServiceModule.stopService();
  }
};
initializeDefault;
class ForegroundServiceLifecycleManager extends tmp4 {
}
const prototype2 = ForegroundServiceLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  obj.initialize();
};
prototype2["_terminate"] = function _terminate() {
  obj.terminate();
};
prototype2["addServiceHandler"] = function addServiceHandler(arg0) {
  return obj.addServiceHandler(arg0);
};
prototype2["updateServiceHandler"] = function updateServiceHandler(arg0, arg1) {
  obj.updateServiceHandler(arg0, arg1);
};
prototype2["removeServiceHandler"] = function removeServiceHandler(arg0) {
  obj.removeServiceHandler(arg0);
};
prototype2["isForegroundServiceRunning"] = function isForegroundServiceRunning(arg0) {
  const result = obj.isForegroundServiceRunning(arg0);
};
const foregroundServiceLifecycleManager = new ForegroundServiceLifecycleManager();
const map = new Map();
let result = set.fileFinishedImporting("modules/foreground_service/mobile/ForegroundServiceManager.android.tsx");

export default foregroundServiceLifecycleManager;