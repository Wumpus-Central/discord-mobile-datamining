// === Module 501: DerivedQosDataStore ===

// Module 501 (DerivedQosDataStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DerivedQosDataStorage from "DerivedQosDataStorage" /* 14194 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let obj = {};
const PersistedStore = initializeDefault.PersistedStore;
class DerivedQosDataStore extends PersistedStore {
}
const prototype = DerivedQosDataStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(AuthenticationStore);
  if (arg0 == null) {
    obj = {};
  }
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getForCurrentUser"] = function getForCurrentUser() {
  const tmp = obj[AuthenticationStore.getId(AuthenticationStore)];
  let data;
  if (tmp != null) {
    data = tmp.data;
  }
  return data;
};
prototype["getForUser"] = function getForUser(userId) {
  let data;
  if (obj[userId] != null) {
    data = tmp.data;
  }
  return data;
};
DerivedQosDataStore.displayName = "DerivedQosDataStore";
DerivedQosDataStore.persistKey = "DerivedQosDataStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(qosToken) {
    if (null == qosToken.qosToken) {
      DerivedQosDataStorage.setDerivedQosData(qosToken.user.id, null);
      let flag = null != obj[qosToken.user.id];
      if (flag) {
        const id = qosToken.user.id;
        delete tmp2[tmp];
        flag = true;
      }
      let tmp4 = flag;
    } else {
      DerivedQosDataStorage.setDerivedQosData(qosToken.user.id, qosToken.qosToken);
      let data;
      if (obj[qosToken.user.id] != null) {
        data = tmp16.data;
      }
      tmp4 = data !== qosToken.qosToken;
      if (tmp4) {
        obj = { data: qosToken.qosToken, updatedAt: null };
        const _Date = Date;
        obj.updatedAt = Date.now();
        obj[qosToken.user.id] = obj;
      }
    }
    return tmp4;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    let tmp3 = !isSwitchingAccount;
    if (!isSwitchingAccount) {
      if (null != isSwitchingAccount.userId) {
        const userId = isSwitchingAccount.userId;
        delete tmp2[tmp];
        obj = DerivedQosDataStorage;
        obj.setDerivedQosData(isSwitchingAccount.userId, null);
      }
      tmp3 = tmp5;
    }
    return tmp3;
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemoveAccount(userId) {
    delete tmp2[tmp];
    DerivedQosDataStorage.setDerivedQosData(userId.userId, null);
  }
};
const derivedQosDataStore = new DerivedQosDataStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStore.tsx");

export default derivedQosDataStore;