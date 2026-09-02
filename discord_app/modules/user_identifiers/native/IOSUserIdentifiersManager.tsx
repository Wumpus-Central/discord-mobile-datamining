// === Module 17218: onPostConnectionOpen ===

// Module 17218 (onPostConnectionOpen)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import _modDef1205 from "module_1205" /* 1205 */;
import initializeDefault from "initialize" /* 5494 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import { AnalyticEvents } from "ME" /* 673 */;

let require = arg1;
let closure_7 = { APP_TRANSACTION_UNAVAILABLE: "native_unavailable", APP_TRANSACTION_CANCELLED: "native_cancelled", APP_TRANSACTION_NETWORK_ERROR: "native_network", APP_TRANSACTION_ERROR: "native_error" };
initializeDefault;
class IOSUserIdentifiersManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    set = new Set();
    applyArgumentsResult.syncedUserIds = set;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.onPostConnectionOpen();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = IOSUserIdentifiersManager.prototype;
prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const self = this;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (obj7.isIOS()) {
              if (tmp15Result.isIOSAppTransactionIdTrackingEnabled("IOSUserIdentifiersManager")) {
                const currentUser = closure_1_5.getCurrentUser();
                if (null != currentUser) {
                  const syncedUserIds = v0.syncedUserIds;
                  if (!syncedUserIds.has(currentUser.id)) {
                    const syncedUserIds2 = obj3.syncedUserIds;
                    syncedUserIds2.add(currentUser.id);
                    c1 = 1;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj3.syncAppTransactionId();
                    return obj1;
                  }
                }
              }
              tmp15Result = tmp15(tmp16[6]);
            }
            obj7 = v0(closure_1_2[5]);
            tmp15 = v0;
            tmp16 = closure_1_2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["syncAppTransactionId"] = function syncAppTransactionId() {
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === obj) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let verified = tmp3;
            let appTransactionId = tmp7;
            appTransactionId = undefined;
            verified = undefined;
            closure_2 = undefined;
            c3 = 1;
            const DCDAppTransactionManager = obj.DCDAppTransactionManager;
            obj = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = DCDAppTransactionManager.getAppTransactionId();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_3 = closure_2;
          appTransactionId.trackSync((function getNativeReason(closure_3) {
            let code;
            if (closure_3 != null) {
              code = closure_3.code;
            }
            let str = "native_error";
            if (typeof code === "string") {
              let str2 = table[code];
              if (str2 == null) {
                str2 = "native_error";
              }
              str = str2;
            }
            return str;
          })(closure_3), closure_3);
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = undefined;
          return obj2;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_2 = arg1;
              appTransactionId = closure_2.appTransactionId;
              verified = closure_2.verified;
              c3 = 0;
              if (null != appTransactionId) {
                if ("" !== appTransactionId) {
                  c3 = 2;
                  const HTTP = closure_1_0(closure_1_2[7]).HTTP;
                  const obj4 = { url: "/users/@me/app-transaction-ids", body: null, rejectWithError: true };
                  const obj5 = { app_transaction_id: null };
                  obj5[0] = appTransactionId;
                  obj4[1] = obj5;
                  obj = 4;
                  c5 = 1;
                  const obj6 = { value: null, done: false };
                  obj6[0] = HTTP.post(obj4);
                  return obj6;
                }
              }
              appTransactionId.trackSync("empty_id", null, verified);
              c5 = 3;
            }
          } else if (3 === tmp7) {
            c3 = 0;
            obj = closure_2;
            appTransactionId.trackSync("http_error", obj, verified);
            c5 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = undefined;
            return obj7;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c3 = 0;
            appTransactionId.trackSync("synced", null, verified);
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp41) {
        closure_2 = tmp41;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp41;
        } else if (tmp === tmp43) {
          obj = tmp;
        } else {
          obj = tmp2;
        }
      }
    }
  })();
};
prototype["trackSync"] = function trackSync(empty_id, c4, verified) {
  if (null != c4) {
    let obj = _modDef1205;
    obj = { tags: null };
    obj = { source: "ios_user_identifiers_manager", step: "sync_app_transaction_id", reason: null };
    obj[2] = empty_id;
    obj[0] = obj;
    obj.captureException(c4, obj);
  }
  expandEventPropertiesDefault.track(AnalyticEvents.APP_TRANSACTION_ID_SYNCED, { success: "synced" === empty_id, reason: empty_id, verified });
};
const iOSUserIdentifiersManager = new IOSUserIdentifiersManager();
const result = require("set").fileFinishedImporting("modules/user_identifiers/native/IOSUserIdentifiersManager.tsx");

export default iOSUserIdentifiersManager;