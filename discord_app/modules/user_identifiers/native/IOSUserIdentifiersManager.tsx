// === Module 17579: IOSUserIdentifiersManager ===

// Module 17579 (IOSUserIdentifiersManager)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let _self, c1, c4;

const NativeModules = react_native.NativeModules;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_7 = { APP_TRANSACTION_UNAVAILABLE: "native_unavailable", APP_TRANSACTION_CANCELLED: "native_cancelled", APP_TRANSACTION_NETWORK_ERROR: "native_network", APP_TRANSACTION_ERROR: "native_error" };
class IOSUserIdentifiersManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.syncedUserIds = new Set();
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return applyArgumentsResult.onPostConnectionOpen();
      }
    };
    new Set();
    return applyArgumentsResult;
  }
  onPostConnectionOpen() {
    const self = this;
    return (async () => {
      let currentUser;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj7 = v3(dependencyMap[5]);
              const tmp12 = v3;
              if (obj7.isIOS()) {
                const tmp12Result = tmp12(dependencyMap[6]);
                if (tmp12Result.isIOSAppTransactionIdTrackingEnabled("IOSUserIdentifiersManager")) {
                  currentUser = currentUser.getCurrentUser();
                  if (null != currentUser) {
                    const syncedUserIds = self.syncedUserIds;
                    if (!syncedUserIds.has(currentUser.id)) {
                      const syncedUserIds2 = self.syncedUserIds;
                      syncedUserIds2.add(currentUser.id);
                      c1 = 1;
                      v3 = 1;
                      const obj5 = { value: self.syncAppTransactionId(), done: false };
                      return obj5;
                    }
                  }
                }
              }
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp8) {
          v3 = 3;
          throw tmp8;
        }
      }
    })();
  }
  syncAppTransactionId() {
    const self = this;
    return (async () => {
      let closure_0;
      let closure_1;
      let closure_2;
      let obj7;
      let tmp38;
      let verified;
      function getNativeReason(code) {
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
      }
      _self = tmp4;
      const DCDAppTransactionManager = c4.DCDAppTransactionManager;
      await DCDAppTransactionManager.getAppTransactionId();
      if (2 === c4) {
        if (arg0 === 1) {
          let c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          let c3 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp38 = value;
          const appTransactionId = tmp38.appTransactionId;
          verified = tmp38.verified;
          c3 = 0;
          if (null != appTransactionId) {
            if ("" !== appTransactionId) {
              c3 = 2;
              const HTTP = _self(tmp38[7]).HTTP;
              const request = { url: "/users/@me/app-transaction-ids", body: obj7, rejectWithError: true };
              obj7 = { app_transaction_id: appTransactionId };
              c4 = 4;
              c5 = 1;
              const obj8 = { value: HTTP.post(request), done: false };
              return obj8;
            }
          }
          closure_129_0.trackSync("empty_id", null, verified);
        }
      } else if (3 === c4) {
        c3 = 0;
        let closure_4 = tmp38;
        closure_129_0.trackSync("http_error", closure_4, verified);
        c5 = 3;
        const obj9 = { value: undefined, done: true };
        return obj9;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c3 = 0;
        closure_129_0.trackSync("synced", null, verified);
      }
      await "IconComponent";
      let closure_3 = tmp38;
      closure_129_0.trackSync(getNativeReason(closure_3), closure_3);
    })();
  }
  trackSync(empty_id, arg1, verified) {
    let obj3;
    if (null != arg1) {
      const obj2 = { tags: obj3 };
      obj3 = { source: "ios_user_identifiers_manager", step: "sync_app_transaction_id", reason: empty_id };
      const obj = SentryUtilsDefault;
      obj.captureException(arg1, obj2);
    }
    const obj4 = AnalyticsUtilsDefault;
    const obj5 = { success: "synced" === empty_id, reason: empty_id, verified };
    obj4.track(AnalyticEvents.APP_TRANSACTION_ID_SYNCED, obj5);
  }
}
const prototype = IOSUserIdentifiersManager.prototype;
const iOSUserIdentifiersManager = new IOSUserIdentifiersManager();
const result = size.fileFinishedImporting("modules/user_identifiers/native/IOSUserIdentifiersManager.tsx");

export default iOSUserIdentifiersManager;