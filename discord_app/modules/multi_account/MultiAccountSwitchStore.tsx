// === Module 13268: initialize ===

// Module 13268 (initialize)
import timestampDefault from "timestamp" /* 3 */;
import createFastConnectSocket from "createFastConnectSocket" /* 15 */;
import initializeDefault from "initialize" /* 589 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import setSecondaryTokenAll from "setSecondaryToken" /* 707 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import initialize from "initialize" /* 11585 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = fn;
let closure_6 = new timestampDefault("MultiAccountSwitchStore");
let c7 = null;
let c8 = null;
let c9 = null;
let c10 = null;
let c11 = false;
let c12 = false;
let c13 = false;
let c14 = null;
const Store = initializeDefault.Store;
class MultiAccountSwitchStore extends Store {
}
const prototype = MultiAccountSwitchStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4);
};
prototype["getIsSwitchingAccount"] = function getIsSwitchingAccount() {
  return c11;
};
prototype["getSwitchResult"] = function getSwitchResult() {
  return c14;
};
MultiAccountSwitchStore.displayName = "MultiAccountSwitchStore";
const multiAccountSwitchStore = new MultiAccountSwitchStore(dispatcherDefault, {
  MULTI_ACCOUNT_SWITCH_START: function handleSwitchStart(arg0) {
    ({ targetUserId: c9, location: c10 } = arg0);
  },
  MULTI_ACCOUNT_SWITCH_TIMEOUT: function handleSwitchTimeout() {
    const obj = { from_user_id: c8, to_user_id: c9, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
    const users = authStore.getUsers();
    obj[2] = users.map((item, index) => item.id);
    obj[3] = c12;
    obj[4] = c10;
    obj.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TIMEOUT, obj);
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (isSwitchingAccount.isSwitchingAccount) {
      closure_8 = c7;
      let goHomeAfterSwitching = isSwitchingAccount.goHomeAfterSwitching;
      let obj = { current_user_id: null, expected_user_id: null, fast_connect_user_id: null, switch_origin: null };
      obj[0] = c7;
      obj[1] = c9;
      obj[2] = createFastConnectSocket.getLastFastConnectIdentifyUserId();
      obj[3] = c10;
      logger.log("logout from account switch", obj);
    } else {
      goHomeAfterSwitching = false;
      obj = setSecondaryTokenAll;
      obj.removeToken(c7);
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    if (c11) {
      let id = user.id;
      let flag = c11;
      if (c11) {
        flag = true;
      }
      if (flag) {
        let obj = setSecondaryTokenAll;
        let token = obj.getToken(id);
        obj1 = setSecondaryTokenAll;
        const token1 = obj1.getToken();
        let tmp8 = null != c9;
        if (tmp8) {
          tmp8 = id !== c9;
        }
        if (null != token && null != token1 && token !== token1) {
          obj = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
          obj[0] = c8;
          obj[1] = c9;
          obj[2] = id;
          let obj4 = id(15);
          obj[3] = obj4.getLastFastConnectIdentifyUserId();
          let users = authStore.getUsers();
          obj[4] = users.map((item, index) => item.id);
          obj[5] = c12;
          obj[6] = c10;
          let merged = Object.assign(obj);
          obj.user_token_exists = null != token;
          obj.main_token_exists = null != token1;
          obj.is_token_mismatch = tmp10;
          obj.is_user_mismatch = tmp8;
          logger.log("Token mismatch on account switch connection open", obj);
          map(698).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, obj);
          const obj6 = map(698);
        }
      }
      let tmp26 = c8 !== user.id;
      obj1 = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
      obj1[0] = c8;
      obj1[1] = c9;
      obj1[2] = user.id;
      obj1[3] = id(15).getLastFastConnectIdentifyUserId();
      const users1 = authStore.getUsers();
      obj1[4] = users1.map((item, index) => item.id);
      obj1[5] = c12;
      obj1[6] = c10;
      let tmp35 = map(698);
      const track = tmp35.track;
      let obj2 = AnalyticEvents;
      if (tmp26) {
        track(obj2.MULTI_ACCOUNT_SWITCH_SUCCESS, obj1);
        let flag3 = c11;
        if (c11) {
          flag3 = true;
        }
        if (flag3) {
          tmp35 = logger;
          logger.log("Account switch success", obj1);
        }
      } else {
        track(obj2.MULTI_ACCOUNT_SWITCH_FAILURE, obj1);
        let flag2 = c11;
        if (c11) {
          flag2 = true;
        }
        if (flag2) {
          logger.log("Account switch failure", obj1);
        }
      }
      obj2 = { success: null, navigateHome: null };
      obj2[0] = tmp26;
      tmp26 = c13;
      obj2[1] = c13;
      c14 = obj2;
      const obj8 = id(15);
    } else {
      c14 = null;
      const token2 = setSecondaryTokenAll.getToken();
      let tmp45 = null != token2;
      if (tmp45) {
        tmp45 = "" !== token2;
      }
      if (tmp45) {
        const id2 = user.id;
        id = id2;
        map = token2;
        let flag4 = c11;
        if (c11) {
          flag4 = true;
        }
        if (flag4) {
          const users2 = authStore.getUsers();
          const mapped = users2.map((item, index) => item.id);
          const found = mapped.filter((item, index) => {
            let tmp = item !== id;
            if (tmp) {
              tmp = setSecondaryTokenAll.getToken(item) === map;
            }
            return tmp;
          });
          if (0 !== found.length) {
            let tmp41Result = setSecondaryTokenAll;
            let tmp46 = tmp41Result.getToken(id2) === token2;
            let obj3 = {};
            obj4 = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            obj4[0] = c8;
            obj4[1] = c9;
            obj4[2] = id2;
            obj4[3] = id(15).getLastFastConnectIdentifyUserId();
            const users3 = authStore.getUsers();
            obj4[4] = users3.map((item, index) => item.id);
            obj4[5] = c12;
            obj4[6] = c10;
            const merged1 = Object.assign(obj4);
            obj3.colliding_user_ids = found;
            if (!tmp46) {
              tmp46 = tmp60;
            }
            obj3.is_already_corrupted = tmp46;
            logger.log("setToken about to introduce per-user token collision", obj3);
            const obj17 = id(15);
            tmp60 = found.length >= 2;
            map(698).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, obj3);
            const obj12 = map(698);
          }
        }
        tmp41Result = setSecondaryTokenAll;
        tmp41Result.setToken(token2, user.id);
      }
      id = user.id;
      map = undefined;
      let flag5 = c11;
      if (c11) {
        flag5 = true;
      }
      if (flag5) {
        const _Map = Map;
        map = new Map();
        const users4 = authStore.getUsers();
        const item = users4.forEach((item, index) => {
          id = item.id;
          const token = setSecondaryTokenAll.getToken(id);
          if (null != token) {
            if ("" !== token) {
              let items = map.get(token);
              if (items == null) {
                items = [];
              }
              items.push(id);
              const result = map.set(token, items);
            }
          }
        });
        const item1 = map.forEach((item, index) => {
          if (item.length >= 2) {
            const obj = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            obj[0] = c8;
            obj[1] = c9;
            obj[2] = id;
            obj[3] = id(dependencyMap[3]).getLastFastConnectIdentifyUserId();
            const users = closure_1_4.getUsers();
            obj[4] = users.map((item, index) => item.id);
            obj[5] = c12;
            obj[6] = c10;
            const merged = Object.assign(obj);
            obj.colliding_user_ids = item;
            closure_1_6.log("Per-user token collision detected", obj);
            const obj3 = id(dependencyMap[3]);
            map(dependencyMap[5]).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, obj);
            const obj4 = map(dependencyMap[5]);
          }
        });
      }
      c8 = null;
      c9 = null;
      c10 = null;
      c11 = false;
      c13 = false;
      c12 = true;
      id = user.id;
    }
  }
});
const tmp2 = new timestampDefault("MultiAccountSwitchStore");
let result = require("obj132").fileFinishedImporting("modules/multi_account/MultiAccountSwitchStore.tsx");

export default multiAccountSwitchStore;