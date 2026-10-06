// === Module 13459: MultiAccountSwitchStore ===

// Module 13459 (MultiAccountSwitchStore)
import LoggerDefault from "Logger" /* 3 */;
import fast_connect from "fast_connect" /* 15 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import TokenManagerAll from "TokenManager" /* 1111 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MultiAccountStore from "MultiAccountStore" /* 12071 */;
import size from "module_2" /* 2 */;

let _null, c11, from_user_id, has_ever_connected, map, navigateHome, switch_origin;

const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("MultiAccountSwitchStore");
let c7 = null;
let c8 = null;
let c9 = null;
let c10 = null;
let isSwitchingAccount = false;
let c12 = false;
let c13 = false;
let c14 = null;
const tmp2 = new LoggerDefault("MultiAccountSwitchStore");
const Store = get_initializedDefault.Store;
class MultiAccountSwitchStore extends Store {
  initialize() {
    this.waitFor(MultiAccountStore);
  }
  getIsSwitchingAccount() {
    return isSwitchingAccount;
  }
  getSwitchResult() {
    return c14;
  }
  getTargetUserId() {
    return c9;
  }
}
const prototype = MultiAccountSwitchStore.prototype;
MultiAccountSwitchStore.displayName = "MultiAccountSwitchStore";
let obj = {
  MULTI_ACCOUNT_SWITCH_START: function handleSwitchStart(arg0) {
    let c10;
    let c9;
    ({ targetUserId: c9, location: c10 } = arg0);
  },
  MULTI_ACCOUNT_SWITCH_TIMEOUT: function handleSwitchTimeout() {
    let users;
    const obj = { from_user_id, to_user_id: _null, linked_user_ids: users.map((id) => id.id), has_ever_connected, switch_origin };
    const track = AnalyticsUtilsDefault.track;
    const MULTI_ACCOUNT_SWITCH_TIMEOUT = AnalyticEvents.MULTI_ACCOUNT_SWITCH_TIMEOUT;
    AnalyticsUtilsDefault;
    users = MultiAccountStore.getUsers();
    track(MULTI_ACCOUNT_SWITCH_TIMEOUT, obj);
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    let obj3;
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (isSwitchingAccount) {
      let c8 = current_user_id;
      let goHomeAfterSwitching = isSwitchingAccount.goHomeAfterSwitching;
      const log = logger.log;
      const obj2 = { current_user_id, expected_user_id: _null, fast_connect_user_id: obj3.getLastFastConnectIdentifyUserId(), switch_origin };
      obj3 = fast_connect;
      log("logout from account switch", obj2);
    } else {
      goHomeAfterSwitching = false;
      const obj = TokenManagerAll;
      obj.removeToken(current_user_id);
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    let c10;
    let c12;
    let c13;
    let c8;
    let c9;
    let id2;
    let obj17;
    let obj5;
    let obj8;
    let token2;
    let users;
    let users1;
    let users3;
    const f114951 = (id) => id.id;
    user = user.user;
    let tmp = c11;
    if (tmp) {
      let id = user.id;
      const tmp3 = c11 && true;
      if (tmp3) {
        let obj = TokenManagerAll;
        let token = obj.getToken(id);
        let obj2 = TokenManagerAll;
        const token1 = obj2.getToken();
        const tmp10 = null != _null && id !== _null;
        if (null != token && null != token1 && token !== token1) {
          let obj3 = { user_token_exists: null != token, main_token_exists: null != token1, is_token_mismatch: null != token && null != token1 && token !== token1, is_user_mismatch: tmp10 };
          let obj4 = { from_user_id, to_user_id: _null, actual_user_id: id, fast_connect_user_id: obj5.getLastFastConnectIdentifyUserId(), linked_user_ids: users.map(f114951), has_ever_connected, switch_origin };
          obj5 = id2(15);
          users = MultiAccountStore.getUsers();
          let merged = Object.assign(obj4);
          logger.log("Token mismatch on account switch connection open", obj3);
          const obj6 = token2(1252);
          obj6.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, obj3);
        }
      }
      const obj7 = { from_user_id, to_user_id: _null, actual_user_id: user.id, fast_connect_user_id: obj8.getLastFastConnectIdentifyUserId(), linked_user_ids: users1.map(f114951), has_ever_connected, switch_origin };
      obj8 = id2(15);
      users1 = MultiAccountStore.getUsers();
      const track = token2(1252).track;
      token2(1252);
      if (from_user_id !== user.id) {
        track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_SUCCESS, obj7);
        const tmp44 = c11 && true;
        if (tmp44) {
          logger.log("Account switch success", obj7);
        }
      } else {
        track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_FAILURE, obj7);
        const tmp40 = c11 && true;
        if (tmp40) {
          logger.log("Account switch failure", obj7);
        }
      }
      c14 = { success: from_user_id !== user.id, navigateHome };
      const obj9 = { success: from_user_id !== user.id, navigateHome };
    } else {
      c14 = null;
    }
    const obj10 = TokenManagerAll;
    token2 = obj10.getToken();
    const tmp51 = null != token2 && "" !== token2;
    if (tmp51) {
      id2 = user.id;
      const tmp52 = c11 && true;
      if (tmp52) {
        const users2 = MultiAccountStore.getUsers();
        const mapped = users2.map((id) => id.id);
        const found = mapped.filter((item) => {
          let tmp = item !== id2;
          if (tmp) {
            const obj = TokenManagerAll;
            tmp = obj.getToken(item) === token2;
          }
          return tmp;
        });
        if (0 !== found.length) {
          const tmp48Result = TokenManagerAll;
          let tmp53 = tmp48Result.getToken(id2) === token2;
          const obj13 = { colliding_user_ids: found, is_already_corrupted: tmp53 };
          const obj14 = { from_user_id, to_user_id: _null, actual_user_id: id2, fast_connect_user_id: obj17.getLastFastConnectIdentifyUserId(), linked_user_ids: users3.map(f114951), has_ever_connected, switch_origin };
          const tmp66 = found.length >= 2;
          obj17 = id2(15);
          users3 = MultiAccountStore.getUsers();
          const merged1 = Object.assign(obj14);
          if (!tmp53) {
            tmp53 = tmp66;
          }
          logger.log("setToken about to introduce per-user token collision", obj13);
          const obj12 = token2(1252);
          obj12.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, obj13);
        }
      }
      const tmp48Result2 = TokenManagerAll;
      tmp48Result2.setToken(token2, user.id);
    }
    id = user.id;
    map = undefined;
    const tmp60 = c11 && true;
    if (tmp60) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const users4 = MultiAccountStore.getUsers();
      const item = users4.forEach((id) => {
        id = id.id;
        const obj = TokenManagerAll;
        const token = obj.getToken(id);
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
      const item1 = map.forEach((colliding_user_ids) => {
        let obj3;
        if (colliding_user_ids.length >= 2) {
          const obj = { colliding_user_ids };
          const obj2 = { from_user_id, to_user_id, actual_user_id: id, fast_connect_user_id: obj3.getLastFastConnectIdentifyUserId(), linked_user_ids: users.map(f114951), has_ever_connected, switch_origin };
          obj3 = id2(dependencyMap[3]);
          users = users.getUsers();
          const merged = Object.assign(obj2);
          logger.log("Per-user token collision detected", obj);
          const obj4 = token2(dependencyMap[5]);
          obj4.track(constants.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, obj);
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
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    if (40004 === code.code) {
      if (isSwitchingAccount) {
        let c8 = null;
        let c9 = null;
        let c10 = null;
        let c13 = false;
      }
    }
    return false;
  }
};
const multiAccountSwitchStore = new MultiAccountSwitchStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/multi_account/MultiAccountSwitchStore.tsx");

export default multiAccountSwitchStore;