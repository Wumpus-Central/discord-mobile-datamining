// === Module 7265: ForegroundServiceManager ===

// Module 7265 (ForegroundServiceManager)
import react_native from "react-native" /* 17 */;
import _modDef1342 from "module_1342" /* 1342 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7266 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
class ForegroundServiceManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.serviceNotifications = new Map();
    obj.serviceNotificationIdentifier = 1;
    obj.handleChange = function handleChange() {
      if (obj.serviceNotifications.size > 0) {
        const ForegroundServiceModule2 = NativeModules.ForegroundServiceModule;
        const serviceNotifications = tmp2.serviceNotifications;
        const startService = ForegroundServiceModule2.startService;
        const items = [];
        HermesBuiltin.arraySpread(items, serviceNotifications.values(), 0);
        startService(items);
      } else {
        const ForegroundServiceModule = NativeModules.ForegroundServiceModule;
        ForegroundServiceModule.stopService();
      }
    };
    new Map();
    return obj;
  }
  initialize() {

  }
  terminate() {

  }
  addServiceHandler(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((fn) => {
      const serviceNotificationIdentifier = self.serviceNotificationIdentifier;
      self.serviceNotificationIdentifier = self.serviceNotificationIdentifier + 1;
      self.updateServiceHandler(serviceNotificationIdentifier, closure_0);
      fn(serviceNotificationIdentifier);
    });
    return promise;
  }
  updateServiceHandler(arg0, usesGateway) {
    const self = this;
    if (null == usesGateway) {
      const serviceNotifications2 = self.serviceNotifications;
      if (serviceNotifications2.has(arg0)) {
        const _HermesInternal3 = HermesInternal;
        const obj2 = RequestGatewaySocketAll;
        obj2.stopRequest("ForegroundService:" + arg0);
        const serviceNotifications3 = self.serviceNotifications;
        serviceNotifications3.delete(arg0);
        self.handleChange();
      }
    } else {
      const serviceNotifications4 = self.serviceNotifications;
      const tmp16 = _modDef1342;
      if (!tmp16(serviceNotifications4.get(arg0), usesGateway)) {
        usesGateway = usesGateway.usesGateway;
        obj = RequestGatewaySocketAll;
        if (usesGateway) {
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
    }
  }
  removeServiceHandler(arg0) {
    this.updateServiceHandler(arg0, null);
  }
  isForegroundServiceRunning(arg0) {
    const ForegroundServiceModule = NativeModules.ForegroundServiceModule;
    ForegroundServiceModule.isServiceRunning(arg0);
  }
}
const prototype = ForegroundServiceManager.prototype;
let obj = Object.create(ForegroundServiceManager.prototype);
const map = new Map();
obj.serviceNotifications = map;
obj.serviceNotificationIdentifier = 1;
obj.handleChange = function handleChange() {
  if (obj.serviceNotifications.size > 0) {
    const ForegroundServiceModule2 = NativeModules.ForegroundServiceModule;
    const serviceNotifications = tmp2.serviceNotifications;
    const startService = ForegroundServiceModule2.startService;
    const items = [];
    HermesBuiltin.arraySpread(items, serviceNotifications.values(), 0);
    startService(items);
  } else {
    const ForegroundServiceModule = NativeModules.ForegroundServiceModule;
    ForegroundServiceModule.stopService();
  }
};
class ForegroundServiceLifecycleManager extends LifecycleManager {
  _initialize() {
    obj.initialize();
  }
  _terminate() {
    obj.terminate();
  }
  addServiceHandler(arg0) {
    return obj.addServiceHandler(arg0);
  }
  updateServiceHandler(arg0, arg1) {
    obj.updateServiceHandler(arg0, arg1);
  }
  removeServiceHandler(arg0) {
    obj.removeServiceHandler(arg0);
  }
  isForegroundServiceRunning(arg0) {
    const result = obj.isForegroundServiceRunning(arg0);
  }
}
const prototype2 = ForegroundServiceLifecycleManager.prototype;
const foregroundServiceLifecycleManager = new ForegroundServiceLifecycleManager();
let result = size.fileFinishedImporting("modules/foreground_service/mobile/ForegroundServiceManager.android.tsx");

export default foregroundServiceLifecycleManager;