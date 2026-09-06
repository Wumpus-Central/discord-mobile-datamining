// === Module 17404: IOSUserIdentifiersManager ===

// Module 17404 (IOSUserIdentifiersManager)
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let require = fn;
const NativeModules = fn(17).NativeModules;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_7 = { APP_TRANSACTION_UNAVAILABLE: "native_unavailable", APP_TRANSACTION_CANCELLED: "native_cancelled", APP_TRANSACTION_NETWORK_ERROR: "native_network", APP_TRANSACTION_ERROR: "native_error" };
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
  return (async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (obj7.isIOS()) {
              if (tmp14Result.isIOSAppTransactionIdTrackingEnabled("IOSUserIdentifiersManager")) {
                currentUser = currentUser.getCurrentUser();
                if (null != currentUser) {
                  const syncedUserIds = self.syncedUserIds;
                  if (!syncedUserIds.has(currentUser.id)) {
                    const syncedUserIds2 = obj3.syncedUserIds;
                    syncedUserIds2.add(currentUser.id);
                    c1 = 1;
                    v3 = 1;
                    const obj1 = { value: obj3.syncAppTransactionId(), done: false };
                    return obj1;
                  }
                }
              }
              tmp14Result = tmp14(tmp15[6]);
            }
            obj7 = v3(dependencyMap[5]);
            tmp14 = v3;
            tmp15 = dependencyMap;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        }
        v3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        v3 = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["syncAppTransactionId"] = function syncAppTransactionId() {
  const self = this;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            _self = tmp7;
            let appTransactionId;
            let verified;
            closure_128_2 = undefined;
            c3 = 1;
            const DCDAppTransactionManager = c4.DCDAppTransactionManager;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: DCDAppTransactionManager.getAppTransactionId(), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_3 = tmp41;
          closure_129_0.trackSync((function getNativeReason(code) {
            code = undefined;
            if (code != null) {
              code = code.code;
            }
            let str = "native_error";
            if (typeof code === "string") {
              let str2 = closure_1_7[code];
              if (str2 == null) {
                str2 = "native_error";
              }
              str = str2;
            }
            return str;
          })(closure_128_3), closure_128_3);
          c5 = 3;
          const obj2 = { value: undefined, done: true };
          return obj2;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_2 = value;
              appTransactionId = closure_128_2.appTransactionId;
              verified = closure_128_2.verified;
              c3 = 0;
              if (null != appTransactionId) {
                if ("" !== appTransactionId) {
                  c3 = 2;
                  const HTTP = _self(tmp41[7]).HTTP;
                  const request = { url: "/users/@me/app-transaction-ids", body: null, rejectWithError: true };
                  const obj4 = { app_transaction_id: appTransactionId };
                  request.body = obj4;
                  c4 = 4;
                  c5 = 1;
                  const obj5 = { value: HTTP.post(request), done: false };
                  return obj5;
                }
              }
              closure_129_0.trackSync("empty_id", null, verified);
              c5 = 3;
            }
          } else if (3 === tmp7) {
            c3 = 0;
            closure_128_4 = tmp41;
            closure_129_0.trackSync("http_error", closure_128_4, verified);
            c5 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
            closure_129_0.trackSync("synced", null, verified);
          }
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp41) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp41;
        } else if (tmp === tmp43) {
          c4 = tmp;
        } else {
          c4 = tmp2;
        }
      }
    }
  })();
};
prototype["trackSync"] = function trackSync(empty_id, arg1, verified) {
  if (null != arg1) {
    let obj = { tags: null };
    obj = { source: "ios_user_identifiers_manager", step: "sync_app_transaction_id", reason: empty_id };
    obj.tags = obj;
    obj.captureException(arg1, obj);
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_TRANSACTION_ID_SYNCED, { success: "synced" === empty_id, reason: empty_id, verified });
};
const iOSUserIdentifiersManager = new IOSUserIdentifiersManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_identifiers/native/IOSUserIdentifiersManager.tsx");

export default iOSUserIdentifiersManager;