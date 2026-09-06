// discord_app/modules/gateway/qos/DerivedQosDataStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import setDerivedQosData from "DerivedQosDataStorage.native.tsx";
import closure_2 from "../../../stores/AuthenticationStore.tsx";

require = arg1;
let closure_3 = {};
const PersistedStore = initializeDefault.PersistedStore;
class DerivedQosDataStore extends PersistedStore {}
const prototype = DerivedQosDataStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  this.waitFor(closure_2);
  if (arg0 == null) {
    obj = {};
  }
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getForCurrentUser"] = function getForCurrentUser() {
  const tmp = dependencyMap[id.getId(id)];
  let data;
  if (tmp != null) {
    data = tmp.data;
  }
  return data;
};
prototype["getForUser"] = function getForUser(userId) {
  let data;
  if (dependencyMap[userId] != null) {
    data = tmp.data;
  }
  return data;
};
DerivedQosDataStore.displayName = "DerivedQosDataStore";
DerivedQosDataStore.persistKey = "DerivedQosDataStore";
const derivedQosDataStore = new DerivedQosDataStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(qosToken) {
    if (null == qosToken.qosToken) {
      setDerivedQosData.setDerivedQosData(qosToken.user.id, null);
      let flag = null != dependencyMap[qosToken.user.id];
      if (flag) {
        const id = qosToken.user.id;
        delete tmp2[tmp];
        flag = true;
      }
      let tmp4 = flag;
      const obj2 = setDerivedQosData;
    } else {
      setDerivedQosData.setDerivedQosData(qosToken.user.id, qosToken.qosToken);
      let data;
      if (dependencyMap[qosToken.user.id] != null) {
        data = tmp16.data;
      }
      tmp4 = data !== qosToken.qosToken;
      if (tmp4) {
        const obj = { data: null, updatedAt: null };
        obj[0] = qosToken.qosToken;
        const _Date = Date;
        obj[1] = Date.now();
        dependencyMap[qosToken.user.id] = obj;
      }
      const obj3 = setDerivedQosData;
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
        setDerivedQosData.setDerivedQosData(isSwitchingAccount.userId, null);
        const obj = setDerivedQosData;
      }
      tmp3 = tmp5;
    }
    return tmp3;
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemoveAccount(userId) {
    delete tmp2[tmp];
    setDerivedQosData.setDerivedQosData(userId.userId, null);
  },
});
const result = require("set").fileFinishedImporting("modules/gateway/qos/DerivedQosDataStore.tsx");

export default derivedQosDataStore;
