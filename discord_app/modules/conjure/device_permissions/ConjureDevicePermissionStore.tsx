// === Module 15660: ConjureDevicePermissionStore ===

// Module 15660 (ConjureDevicePermissionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ConjureDevicePermissionStore extends DeviceSettingsStore {
}
const prototype = ConjureDevicePermissionStore.prototype;
prototype["initialize"] = function initialize(users) {
  this.waitFor(AuthenticationStore);
  users = undefined;
  if (users != null) {
    users = users.users;
  }
  if (users == null) {
    users = {};
  }
};
prototype["getDecision"] = function getDecision(applicationId, permission) {
  const id = AuthenticationStore.getId();
  let tmp2 = null;
  if (null != id) {
    let tmp5;
    if (obj3.users[id] != null) {
      if (tmp4[applicationId] != null) {
        tmp5 = tmp7[permission];
      }
    }
    if (tmp5 == null) {
      tmp5 = null;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj3;
};
ConjureDevicePermissionStore.displayName = "ConjureDevicePermissionStore";
ConjureDevicePermissionStore.persistKey = "ConjureDevicePermissionStore";
const conjureDevicePermissionStore = new ConjureDevicePermissionStore(DispatcherDefault, {
  CONJURE_DEVICE_PERMISSIONS_DECIDE: function handleDecide(arg0) {
    ({ applicationId, permissions } = arg0);
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else {
      const users = obj3.users;
      let tmp4 = users[id];
      if (tmp4 == null) {
        const obj = {};
        users[id] = obj;
        tmp4 = obj;
      }
      let tmp5 = tmp4[applicationId];
      if (tmp5 == null) {
        const obj2 = {};
        tmp4[applicationId] = obj2;
        tmp5 = obj2;
      }
      const tmp7 = permissions[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let str3 = "denied";
        if (tmp) {
          str3 = "granted";
        }
        tmp5[tmp9] = str3;
        continue;
      }
      obj3 = {};
      const merged = Object.assign(obj3);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/ConjureDevicePermissionStore.tsx");

export default conjureDevicePermissionStore;