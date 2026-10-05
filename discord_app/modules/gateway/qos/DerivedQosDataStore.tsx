// === Module 501: DerivedQosDataStore ===

// Module 501 (DerivedQosDataStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DerivedQosDataStorage from "DerivedQosDataStorage" /* 13958 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let obj = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class DerivedQosDataStore extends PersistedStore {
  initialize(arg0) {
    this.waitFor(AuthenticationStore);
  }
  getState() {
    return obj;
  }
  getForCurrentUser() {
    const tmp = obj[AuthenticationStore.getId(AuthenticationStore)];
    let data;
    if (tmp != null) {
      data = tmp.data;
    }
    return data;
  }
  getForUser(userId) {
    let data;
    if (obj[userId] != null) {
      data = tmp.data;
    }
    return data;
  }
}
const prototype = DerivedQosDataStore.prototype;
DerivedQosDataStore.displayName = "DerivedQosDataStore";
DerivedQosDataStore.persistKey = "DerivedQosDataStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(qosToken) {
    let tmp2;
    if (null == qosToken.qosToken) {
      const obj2 = DerivedQosDataStorage;
      obj2.setDerivedQosData(qosToken.user.id, null);
      let flag = null != obj[qosToken.user.id];
      if (flag) {
        delete obj[qosToken.user.id];
        flag = true;
      }
      tmp2 = flag;
    } else {
      const obj3 = DerivedQosDataStorage;
      obj3.setDerivedQosData(qosToken.user.id, qosToken.qosToken);
      let data;
      if (obj[qosToken.user.id] != null) {
        data = tmp13.data;
      }
      tmp2 = data !== qosToken.qosToken;
      if (tmp2) {
        obj = { data: qosToken.qosToken, updatedAt: Date.now() };
        const _Date = Date;
        const id = qosToken.user.id;
        obj[id] = obj;
      }
    }
    return tmp2;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    let tmp = !isSwitchingAccount.isSwitchingAccount;
    if (tmp) {
      if (null != isSwitchingAccount.userId) {
        delete obj[isSwitchingAccount.userId];
        obj = DerivedQosDataStorage;
        obj.setDerivedQosData(isSwitchingAccount.userId, null);
      }
      tmp = tmp3;
    }
    return tmp;
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemoveAccount(userId) {
    delete obj[userId.userId];
    obj = DerivedQosDataStorage;
    obj.setDerivedQosData(userId.userId, null);
  }
};
const derivedQosDataStore = new DerivedQosDataStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStore.tsx");

export default derivedQosDataStore;