// discord_app/modules/user_identifiers/native/IOSUserIdentifiersManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { NativeModules } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

let require = arg1;
initializeDefault;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
                const currentUser = closure_1_5.getCurrentUser();
                if (null != currentUser) {
                  c1 = 1;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = v0.syncAppTransactionId(currentUser);
                  return obj1;
                }
              }
              tmp15Result = tmp15(tmp16[6]);
            }
            obj6 = v0(closure_1_2[5]);
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
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["syncAppTransactionId"] = function syncAppTransactionId(currentUser) {
  closure_0 = currentUser;
  return callback(function*() {
    closure_1 = tmp3;
    c3 = 1;
    const DCDAppTransactionManager = obj.DCDAppTransactionManager;
    yield DCDAppTransactionManager.getAppTransactionId();
    if (1 === tmp7) {
      c3 = 0;
      closure_1 = closure_2;
      let obj6 = closure_1_1(closure_1_2[9]);
      const obj2 = { tags: null };
      obj2[0] = { source: "ios_user_identifiers_manager", step: "sync_app_transaction_id" };
      obj6.captureException(closure_1, obj2);
      closure_1_1(closure_1_2[8]).track(closure_1_6.APP_TRANSACTION_ID_SYNCED, { success: false });
      c5 = 3;
      const obj9 = closure_1_1(closure_1_2[8]);
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
        const appTransactionId = arg1.appTransactionId;
        if (null != appTransactionId) {
          if ("" !== appTransactionId) {
            const appTransactionIds = appTransactionId.appTransactionIds;
            let hasItem;
            if (appTransactionIds != null) {
              hasItem = appTransactionIds.includes(c0);
            }
            if (hasItem) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const HTTP = appTransactionId(closure_1_2[7]).HTTP;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      obj = closure_1_1(closure_1_2[8]);
      obj.track(closure_1_6.APP_TRANSACTION_ID_SYNCED, { success: true });
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  })();
};
const iOSUserIdentifiersManager = new IOSUserIdentifiersManager();
const result = require("set").fileFinishedImporting("modules/user_identifiers/native/IOSUserIdentifiersManager.tsx");

export default iOSUserIdentifiersManager;