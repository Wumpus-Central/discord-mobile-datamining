// === Module 10834: ConjureDevicePermissionStore ===

// Module 10834 (ConjureDevicePermissionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

let obj = { users: {} };
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
prototype["getDecision"] = function getDecision(applicationId, item10010) {
  const id = AuthenticationStore.getId();
  let tmp2 = null;
  if (null != id) {
    let tmp5;
    if (obj.users[id] != null) {
      if (tmp4[applicationId] != null) {
        tmp5 = tmp7[item10010];
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
  return obj;
};
ConjureDevicePermissionStore.displayName = "ConjureDevicePermissionStore";
ConjureDevicePermissionStore.persistKey = "ConjureDevicePermissionStore";
obj = {
  CONJURE_DEVICE_PERMISSIONS_DECIDE: function handleDecide(arg0) {
    ({ applicationId, permissions } = arg0);
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else {
      const users = obj.users;
      let tmp4 = users[id];
      if (tmp4 == null) {
        obj = {};
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
      const obj3 = {};
      const merged = Object.assign(obj);
      obj = obj3;
    }
  },
  CONJURE_DEVICE_PERMISSIONS_RESET: function handleReset(permissions) {
    permissions = permissions.permissions;
    closure_0 = undefined;
    const id = AuthenticationStore.getId();
    let tmp4 = null;
    if (null != id) {
      let tmp7;
      if (obj.users[id] != null) {
        tmp7 = tmp6[permissions.applicationId];
      }
      tmp4 = tmp7;
    }
    closure_0 = tmp4;
    if (null != tmp4) {
      if (permissions.some((item) => null != closure_0[item])) {
        for (const item10021 of permissions) {
          delete tmp[tmp2];
          continue;
        }
        obj = {};
        const merged = Object.assign(obj);
      }
    }
    return false;
  }
};
const conjureDevicePermissionStore = new ConjureDevicePermissionStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/ConjureDevicePermissionStore.tsx");

export default conjureDevicePermissionStore;