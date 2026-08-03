// === Module 16254: onPostConnectionOpen ===

// Module 16254 (onPostConnectionOpen)
import set from "set";
import { NativeModules } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticEvents } from "ME";
import "initialize";

let require = arg1;
class IOSUserIdentifiersManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
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
            if (obj6.isIOS()) {
              if (tmp15Result.isIOSAppTransactionIdTrackingEnabled("IOSUserIdentifiersManager")) {
                const currentUser = outer1_5.getCurrentUser();
                if (null != currentUser) {
                  c1 = 1;
                  v0 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = v0.syncAppTransactionId(currentUser);
                  return obj1;
                }
              }
              tmp15Result = tmp15(tmp16[6]);
            }
            obj6 = v0(outer1_2[5]);
            tmp15 = v0;
            tmp16 = outer1_2;
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
prototype["syncAppTransactionId"] = function syncAppTransactionId(currentUser) {
  let closure_0 = currentUser;
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
            let closure_1 = tmp3;
            let c0 = tmp7;
            c0 = undefined;
            let c3 = 1;
            const DCDAppTransactionManager = obj.DCDAppTransactionManager;
            obj = 2;
            c5 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = DCDAppTransactionManager.getAppTransactionId();
            return obj1;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_1 = closure_2;
            let obj6 = outer1_1(outer1_2[9]);
            const obj2 = { tags: null };
            obj2[0] = { source: "ios_user_identifiers_manager", step: "sync_app_transaction_id" };
            obj6.captureException(closure_1, obj2);
            outer1_1(outer1_2[8]).track(outer1_6.APP_TRANSACTION_ID_SYNCED, { success: false });
            c5 = 3;
            const obj9 = outer1_1(outer1_2[8]);
          } else if (2 === tmp7) {
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
              const outer1_0 = arg1.appTransactionId;
              if (null != outer1_0) {
                if ("" !== outer1_0) {
                  const appTransactionIds = outer1_0.appTransactionIds;
                  let hasItem;
                  if (appTransactionIds != null) {
                    hasItem = appTransactionIds.includes(c0);
                  }
                  if (hasItem) {
                    c3 = 0;
                    c5 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    const HTTP = outer1_0(outer1_2[7]).HTTP;
                    const obj4 = { url: "/users/@me/app-transaction-ids", body: null, rejectWithError: true };
                    const obj5 = { app_transaction_id: null };
                    obj5[0] = c0;
                    obj4[1] = obj5;
                    obj = 3;
                    c5 = 1;
                    obj6 = { value: null, done: false };
                    obj6[0] = HTTP.post(obj4);
                    return obj6;
                  }
                }
              }
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = outer1_1(outer1_2[8]);
            obj.track(outer1_6.APP_TRANSACTION_ID_SYNCED, { success: true });
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        }
      } catch (tmp34) {
        closure_2 = tmp34;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp34;
        } else {
          obj = tmp;
        }
      }
    }
  })();
};
const iOSUserIdentifiersManager = new IOSUserIdentifiersManager();
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_identifiers/native/IOSUserIdentifiersManager.tsx");

export default iOSUserIdentifiersManager;