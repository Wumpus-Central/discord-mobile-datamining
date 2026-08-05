// discord_app/modules/multi_account/MultiAccountSwitchStore.tsx
import initialize from "initialize";
import { AnalyticEvents } from "ME";
import { Store } from "initialize";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { createFastConnectSocket } from "../gateway/native/fast_connect.tsx";

const require = arg1;
let closure_6 = new require("createFastConnectSocket")("MultiAccountSwitchStore");
let c7 = null;
let c8 = null;
let c9 = null;
let c10 = null;
let c11 = false;
let c12 = false;
let c13 = false;
let c14 = null;
class MultiAccountSwitchStore extends Store {
}
const prototype = MultiAccountSwitchStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(initialize);
};
prototype["getIsSwitchingAccount"] = function getIsSwitchingAccount() {
  return c11;
};
prototype["getSwitchResult"] = function getSwitchResult() {
  return c14;
};
MultiAccountSwitchStore.displayName = "MultiAccountSwitchStore";
const multiAccountSwitchStore = new MultiAccountSwitchStore(require("dispatcher"), {
  MULTI_ACCOUNT_SWITCH_START: function handleSwitchStart(arg0) {
    let c10;
    let c9;
    ({ targetUserId: c9, location: c10 } = arg0);
  },
  MULTI_ACCOUNT_SWITCH_TIMEOUT: function handleSwitchTimeout() {
    let obj = expandEventProperties;
    obj = { from_user_id: c8, to_user_id: c9, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
    const users = authStore.getUsers();
    obj[2] = users.map((id) => id.id);
    obj[3] = c12;
    obj[4] = c10;
    obj.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TIMEOUT, obj);
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (isSwitchingAccount.isSwitchingAccount) {
      let closure_8 = c7;
      let goHomeAfterSwitching = isSwitchingAccount.goHomeAfterSwitching;
      let obj = { current_user_id: null, expected_user_id: null, fast_connect_user_id: null, switch_origin: null };
      obj[0] = c7;
      obj[1] = c9;
      obj[2] = createFastConnectSocket.getLastFastConnectIdentifyUserId();
      obj[3] = c10;
      tmp2.log("logout from account switch", obj);
      const obj3 = createFastConnectSocket;
    } else {
      goHomeAfterSwitching = false;
      obj = importAll(707);
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
        let obj = importAll(707);
        let token = obj.getToken(id);
        let obj1 = importAll(707);
        const token1 = obj1.getToken();
        let tmp8 = null != c9;
        if (tmp8) {
          tmp8 = id !== c9;
        }
        if (null != token && null != token1 && token !== token1) {
          obj = {};
          obj = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
          obj[0] = c8;
          obj[1] = c9;
          obj[2] = id;
          let obj4 = id(15);
          obj[3] = obj4.getLastFastConnectIdentifyUserId();
          let users = authStore.getUsers();
          obj[4] = users.map((id) => id.id);
          obj[5] = c12;
          obj[6] = c10;
          let merged = Object.assign(obj);
          obj.user_token_exists = null != token;
          obj.main_token_exists = null != token1;
          obj.is_token_mismatch = tmp10;
          obj.is_user_mismatch = tmp8;
          tmp2.log("Token mismatch on account switch connection open", obj);
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
      obj1[4] = users1.map((id) => id.id);
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
          tmp35 = tmp2;
          tmp2.log("Account switch success", obj1);
        }
      } else {
        track(obj2.MULTI_ACCOUNT_SWITCH_FAILURE, obj1);
        let flag2 = c11;
        if (c11) {
          flag2 = true;
        }
        if (flag2) {
          tmp2.log("Account switch failure", obj1);
        }
      }
      obj2 = { success: null, navigateHome: null };
      obj2[0] = tmp26;
      tmp26 = c13;
      obj2[1] = c13;
      let c14 = obj2;
      const obj8 = id(15);
    } else {
      c14 = null;
      const token2 = importAll(707).getToken();
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
          const mapped = users2.map((id) => id.id);
          const found = mapped.filter((arg0) => {
            let tmp = arg0 !== id;
            if (tmp) {
              tmp = outer1_2(outer1_3[4]).getToken(arg0) === map;
              const obj = outer1_2(outer1_3[4]);
            }
            return tmp;
          });
          if (0 !== found.length) {
            let tmp41Result = tmp41(707);
            let tmp46 = tmp41Result.getToken(id2) === token2;
            let obj3 = {};
            obj4 = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            obj4[0] = c8;
            obj4[1] = c9;
            obj4[2] = id2;
            obj4[3] = id(15).getLastFastConnectIdentifyUserId();
            const users3 = obj11.getUsers();
            obj4[4] = users3.map((id) => id.id);
            obj4[5] = c12;
            obj4[6] = c10;
            const merged1 = Object.assign(obj4);
            obj3.colliding_user_ids = found;
            if (!tmp46) {
              tmp46 = tmp60;
            }
            obj3.is_already_corrupted = tmp46;
            tmp2.log("setToken about to introduce per-user token collision", obj3);
            const obj17 = id(15);
            tmp60 = found.length >= 2;
            map(698).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, obj3);
            const obj12 = map(698);
          }
          obj11 = authStore;
        }
        tmp41Result = tmp41(707);
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
        const item = users4.forEach((id) => {
          id = id.id;
          const token = outer1_2(outer1_3[4]).getToken(id);
          if (null != token) {
            if ("" !== token) {
              let items = map.get(token);
              if (items == null) {
                items = [];
              }
              items.push(id);
              const result = map.set(token, items);
              const obj2 = map;
            }
          }
        });
        const item1 = map.forEach((colliding_user_ids) => {
          if (colliding_user_ids.length >= 2) {
            let obj = {};
            obj = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            obj[0] = c8;
            obj[1] = c9;
            obj[2] = id;
            obj[3] = id(outer1_3[3]).getLastFastConnectIdentifyUserId();
            const users = outer1_4.getUsers();
            obj[4] = users.map((id) => id.id);
            obj[5] = c12;
            obj[6] = c10;
            const merged = Object.assign(obj);
            obj.colliding_user_ids = colliding_user_ids;
            outer1_6.log("Per-user token collision detected", obj);
            const obj3 = id(outer1_3[3]);
            map(outer1_3[5]).track(outer1_5.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, obj);
            const obj4 = map(outer1_3[5]);
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
let obj = {
  MULTI_ACCOUNT_SWITCH_START: function handleSwitchStart(arg0) {
    let c10;
    let c9;
    ({ targetUserId: c9, location: c10 } = arg0);
  },
  MULTI_ACCOUNT_SWITCH_TIMEOUT: function handleSwitchTimeout() {
    let obj = expandEventProperties;
    obj = { from_user_id: c8, to_user_id: c9, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
    const users = authStore.getUsers();
    obj[2] = users.map((id) => id.id);
    obj[3] = c12;
    obj[4] = c10;
    obj.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TIMEOUT, obj);
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (isSwitchingAccount.isSwitchingAccount) {
      let closure_8 = c7;
      let goHomeAfterSwitching = isSwitchingAccount.goHomeAfterSwitching;
      let obj = { current_user_id: null, expected_user_id: null, fast_connect_user_id: null, switch_origin: null };
      obj[0] = c7;
      obj[1] = c9;
      obj[2] = createFastConnectSocket.getLastFastConnectIdentifyUserId();
      obj[3] = c10;
      tmp2.log("logout from account switch", obj);
      const obj3 = createFastConnectSocket;
    } else {
      goHomeAfterSwitching = false;
      obj = importAll(707);
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
        let obj = importAll(707);
        let token = obj.getToken(id);
        let obj1 = importAll(707);
        const token1 = obj1.getToken();
        let tmp8 = null != c9;
        if (tmp8) {
          tmp8 = id !== c9;
        }
        if (null != token && null != token1 && token !== token1) {
          obj = {};
          obj = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
          obj[0] = c8;
          obj[1] = c9;
          obj[2] = id;
          let obj4 = id(15);
          obj[3] = obj4.getLastFastConnectIdentifyUserId();
          let users = authStore.getUsers();
          obj[4] = users.map((id) => id.id);
          obj[5] = c12;
          obj[6] = c10;
          let merged = Object.assign(obj);
          obj.user_token_exists = null != token;
          obj.main_token_exists = null != token1;
          obj.is_token_mismatch = tmp10;
          obj.is_user_mismatch = tmp8;
          tmp2.log("Token mismatch on account switch connection open", obj);
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
      obj1[4] = users1.map((id) => id.id);
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
          tmp35 = tmp2;
          tmp2.log("Account switch success", obj1);
        }
      } else {
        track(obj2.MULTI_ACCOUNT_SWITCH_FAILURE, obj1);
        let flag2 = c11;
        if (c11) {
          flag2 = true;
        }
        if (flag2) {
          tmp2.log("Account switch failure", obj1);
        }
      }
      obj2 = { success: null, navigateHome: null };
      obj2[0] = tmp26;
      tmp26 = c13;
      obj2[1] = c13;
      let c14 = obj2;
      const obj8 = id(15);
    } else {
      c14 = null;
      const token2 = importAll(707).getToken();
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
          const mapped = users2.map((id) => id.id);
          const found = mapped.filter((arg0) => {
            let tmp = arg0 !== id;
            if (tmp) {
              tmp = outer1_2(outer1_3[4]).getToken(arg0) === map;
              const obj = outer1_2(outer1_3[4]);
            }
            return tmp;
          });
          if (0 !== found.length) {
            let tmp41Result = tmp41(707);
            let tmp46 = tmp41Result.getToken(id2) === token2;
            let obj3 = {};
            obj4 = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            obj4[0] = c8;
            obj4[1] = c9;
            obj4[2] = id2;
            obj4[3] = id(15).getLastFastConnectIdentifyUserId();
            const users3 = obj11.getUsers();
            obj4[4] = users3.map((id) => id.id);
            obj4[5] = c12;
            obj4[6] = c10;
            const merged1 = Object.assign(obj4);
            obj3.colliding_user_ids = found;
            if (!tmp46) {
              tmp46 = tmp60;
            }
            obj3.is_already_corrupted = tmp46;
            tmp2.log("setToken about to introduce per-user token collision", obj3);
            const obj17 = id(15);
            tmp60 = found.length >= 2;
            map(698).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, obj3);
            const obj12 = map(698);
          }
          obj11 = authStore;
        }
        tmp41Result = tmp41(707);
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
        const item = users4.forEach((id) => {
          id = id.id;
          const token = outer1_2(outer1_3[4]).getToken(id);
          if (null != token) {
            if ("" !== token) {
              let items = map.get(token);
              if (items == null) {
                items = [];
              }
              items.push(id);
              const result = map.set(token, items);
              const obj2 = map;
            }
          }
        });
        const item1 = map.forEach((colliding_user_ids) => {
          if (colliding_user_ids.length >= 2) {
            let obj = {};
            obj = { from_user_id: null, to_user_id: null, actual_user_id: null, fast_connect_user_id: null, linked_user_ids: null, has_ever_connected: null, switch_origin: null };
            obj[0] = c8;
            obj[1] = c9;
            obj[2] = id;
            obj[3] = id(outer1_3[3]).getLastFastConnectIdentifyUserId();
            const users = outer1_4.getUsers();
            obj[4] = users.map((id) => id.id);
            obj[5] = c12;
            obj[6] = c10;
            const merged = Object.assign(obj);
            obj.colliding_user_ids = colliding_user_ids;
            outer1_6.log("Per-user token collision detected", obj);
            const obj3 = id(outer1_3[3]);
            map(outer1_3[5]).track(outer1_5.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, obj);
            const obj4 = map(outer1_3[5]);
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
};
const tmp2 = new require("createFastConnectSocket")("MultiAccountSwitchStore");
let result = require("timestamp").fileFinishedImporting("modules/multi_account/MultiAccountSwitchStore.tsx");

export default multiAccountSwitchStore;