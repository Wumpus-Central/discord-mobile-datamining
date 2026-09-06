// === Module 13629: MultiAccountSwitchStore ===

// Module 13629 (MultiAccountSwitchStore)
import LoggerDefault from "Logger" /* 3 */;
import fast_connect from "fast_connect" /* 15 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TokenManagerAll from "TokenManager" /* 1099 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import MultiAccountStore from "MultiAccountStore" /* 12413 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const logger = new LoggerDefault("MultiAccountSwitchStore");
let c7 = null;
let c8 = null;
let c9 = null;
let c10 = null;
let isSwitchingAccount = false;
let c12 = false;
let c13 = false;
let c14 = null;
const Store = initializeDefault.Store;
class MultiAccountSwitchStore extends Store {
}
const prototype = MultiAccountSwitchStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(MultiAccountStore);
};
prototype["getIsSwitchingAccount"] = function getIsSwitchingAccount() {
  return isSwitchingAccount;
};
prototype["getSwitchResult"] = function getSwitchResult() {
  return c14;
};
prototype["getTargetUserId"] = function getTargetUserId() {
  return c9;
};
MultiAccountSwitchStore.displayName = "MultiAccountSwitchStore";
const multiAccountSwitchStore = new MultiAccountSwitchStore(DispatcherDefault, {
  MULTI_ACCOUNT_SWITCH_START: function handleSwitchStart(arg0) {
    ({ targetUserId: c9, location: c10 } = arg0);
  },
  MULTI_ACCOUNT_SWITCH_TIMEOUT: function handleSwitchTimeout() {
    const obj = { from_user_id, to_user_id: _null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
    const users = MultiAccountStore.getUsers();
    obj.linked_user_ids = users.map((id) => id.id);
    obj.has_ever_connected = has_ever_connected;
    obj.switch_origin = switch_origin;
    obj.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TIMEOUT, obj);
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (isSwitchingAccount.isSwitchingAccount) {
      c8 = current_user_id;
      let goHomeAfterSwitching = isSwitchingAccount.goHomeAfterSwitching;
      let obj = { current_user_id, expected_user_id: _null, fast_connect_user_id: fast_connect.getLastFastConnectIdentifyUserId(), switch_origin };
      logger.log("logout from account switch", obj);
    } else {
      goHomeAfterSwitching = false;
      obj = TokenManagerAll;
      obj.removeToken(current_user_id);
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
        let obj = TokenManagerAll;
        let token = obj.getToken(id);
        let obj1 = TokenManagerAll;
        const token1 = obj1.getToken();
        let tmp8 = null != _null;
        if (tmp8) {
          tmp8 = id !== _null;
        }
        if (null != token && null != token1 && token !== token1) {
          obj = {};
          obj = { from_user_id, to_user_id: _null, actual_user_id: id, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
          let obj4 = id2(15);
          obj.fast_connect_user_id = obj4.getLastFastConnectIdentifyUserId();
          let users = MultiAccountStore.getUsers();
          obj.linked_user_ids = users.map((id) => id.id);
          obj.has_ever_connected = has_ever_connected;
          obj.switch_origin = switch_origin;
          let merged = Object.assign(obj);
          obj.user_token_exists = null != token;
          obj.main_token_exists = null != token1;
          obj.is_token_mismatch = tmp10;
          obj.is_user_mismatch = tmp8;
          logger.log("Token mismatch on account switch connection open", obj);
          token2(1242).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, obj);
          const obj6 = token2(1242);
        }
      }
      let tmp26 = from_user_id !== user.id;
      obj1 = { from_user_id, to_user_id: _null, actual_user_id: user.id, fast_connect_user_id: id2(15).getLastFastConnectIdentifyUserId(), linked_user_ids: null, has_ever_connected: null, switch_origin: null };
      const users1 = MultiAccountStore.getUsers();
      obj1.linked_user_ids = users1.map((id) => id.id);
      obj1.has_ever_connected = has_ever_connected;
      obj1.switch_origin = switch_origin;
      let tmp35 = token2(1242);
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
      obj2 = { success: tmp26, navigateHome: null };
      tmp26 = navigateHome;
      obj2.navigateHome = navigateHome;
      c14 = obj2;
      const obj8 = id2(15);
    } else {
      c14 = null;
      token2 = TokenManagerAll.getToken();
      let tmp45 = null != token2;
      if (tmp45) {
        tmp45 = "" !== token2;
      }
      if (tmp45) {
        id2 = user.id;
        let flag4 = c11;
        if (c11) {
          flag4 = true;
        }
        if (flag4) {
          const users2 = MultiAccountStore.getUsers();
          const mapped = users2.map((id) => id.id);
          const found = mapped.filter((item) => {
            let tmp = item !== id2;
            if (tmp) {
              tmp = TokenManagerAll.getToken(item) === token2;
            }
            return tmp;
          });
          if (0 !== found.length) {
            let tmp41Result = TokenManagerAll;
            let tmp46 = tmp41Result.getToken(id2) === token2;
            let obj3 = {};
            obj4 = { from_user_id, to_user_id: _null, actual_user_id: id2, fast_connect_user_id: id2(15).getLastFastConnectIdentifyUserId(), linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            const users3 = MultiAccountStore.getUsers();
            obj4.linked_user_ids = users3.map((id) => id.id);
            obj4.has_ever_connected = has_ever_connected;
            obj4.switch_origin = switch_origin;
            const merged1 = Object.assign(obj4);
            obj3.colliding_user_ids = found;
            if (!tmp46) {
              tmp46 = tmp60;
            }
            obj3.is_already_corrupted = tmp46;
            logger.log("setToken about to introduce per-user token collision", obj3);
            const obj17 = id2(15);
            tmp60 = found.length >= 2;
            token2(1242).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, obj3);
            const obj12 = token2(1242);
          }
        }
        tmp41Result = TokenManagerAll;
        tmp41Result.setToken(token2, user.id);
      }
      const id3 = user.id;
      closure_129_1 = undefined;
      let flag5 = c11;
      if (c11) {
        flag5 = true;
      }
      if (flag5) {
        const _Map = Map;
        const map = new Map();
        closure_129_1 = map;
        const users4 = MultiAccountStore.getUsers();
        const item = users4.forEach((id) => {
          id = id.id;
          const token = TokenManagerAll.getToken(id);
          if (null != token) {
            if ("" !== token) {
              let items = token2.get(token);
              if (items == null) {
                items = [];
              }
              items.push(id);
              const result = token2.set(token, items);
            }
          }
        });
        const item1 = map.forEach((colliding_user_ids) => {
          if (colliding_user_ids.length >= 2) {
            let obj = {};
            obj = { from_user_id, to_user_id, actual_user_id: id2, fast_connect_user_id: fast_connect.getLastFastConnectIdentifyUserId(), linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            const users = MultiAccountStore.getUsers();
            obj.linked_user_ids = users.map((id) => id.id);
            obj.has_ever_connected = has_ever_connected;
            obj.switch_origin = switch_origin;
            const merged = Object.assign(obj);
            obj.colliding_user_ids = colliding_user_ids;
            logger.log("Per-user token collision detected", obj);
            AnalyticsUtilsDefault.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, obj);
          }
        });
      }
      from_user_id = null;
      _null = null;
      switch_origin = null;
      c11 = false;
      navigateHome = false;
      has_ever_connected = true;
      id = user.id;
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    if (40004 === code.code) {
      if (isSwitchingAccount) {
        c8 = null;
        c9 = null;
        c10 = null;
        c13 = false;
      }
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/MultiAccountSwitchStore.tsx");

export default multiAccountSwitchStore;