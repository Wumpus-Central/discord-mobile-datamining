// === Module 11914: getOrRefreshPushSyncToken ===

// Module 11914 (getOrRefreshPushSyncToken)
import timestampDefault from "timestamp" /* 3 */;
import encodeProperties from "encodeProperties" /* 503 */;
import Storage2 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef4679 from "module_4679" /* 4679 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "initialize" /* 11915 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import ME from "ME" /* 676 */;
import str2 from "str2" /* 6020 */;

require = arg1;
function getOrRefreshPushSyncToken() {
  const self = this;
  const apply = _getOrRefreshPushSyncToken.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getOrRefreshPushSyncToken() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let callback = tmp3;
              let token = tmp5;
              token = undefined;
              if (null == lib.pushSyncToken) {
                let obj5 = closure_1_2(closure_1_3[6]);
                token = obj5.getToken(tmp40.id);
                if (null == token) {
                  c6 = 3;
                  return { value: null, done: true };
                } else {
                  c4 = 1;
                  const HTTP = lib(closure_1_3[7]).HTTP;
                  obj1 = { url: null, headers: null, rejectWithError: false };
                  obj1[0] = closure_1_9.DEVICES_SYNC_TOKEN;
                  const obj2 = { authorization: null };
                  obj2[0] = token;
                  obj1[1] = obj2;
                  c5 = 2;
                  c6 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = HTTP.get(obj1);
                  return obj3;
                }
              } else {
                c6 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = tmp40.pushSyncToken;
                return obj4;
              }
            }
          } else if (1 === tmp8) {
            c4 = 0;
            callback = dependencyMap;
            obj3 = token(1208);
            obj3.captureException(callback);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            token = body.body.token;
            c4 = 0;
            obj = callback(11919);
            obj.updatePushSyncToken(lib.id, token);
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = token;
            return obj6;
          }
        } catch (tmp31) {
          dependencyMap = tmp31;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp31;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ DEVICE_TOKEN: error, DEVICE_VOIP_TOKEN: closure_8, Endpoints: c9 } = ME);
({ BUNDLE_ID: c10, DEVICE_PUSH_VOIP_PROVIDER: unpackModuleId, getDevicePushProvider: closure_12, IS_QUEST_RELEASE: map1 } = require("str2"));
let closure_14 = new timestampDefault("PushNotificationActionCreators");
let obj = {
  registerDevice(token, flag) {
    if (flag === undefined) {
      flag = false;
    }
    const canUseMultiAccountNotifications = obj.canUseMultiAccountNotifications;
    logger.log("Registering push notification token: " + token + ", is voip:" + flag + ", multi-account:" + canUseMultiAccountNotifications);
    const Storage = Storage2.Storage;
    const result = Storage.set(flag ? closure_8 : closure_7, token);
    if (canUseMultiAccountNotifications) {
      const self = this;
      let syncDeviceResult = this.syncDevice(token, flag);
    } else {
      obj = _modDef4679;
      obj = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: false };
      obj[0] = constants.DEVICES;
      if (flag) {
        let tmp8 = closure_11;
      } else {
        tmp8 = callback2();
      }
      obj = { provider: null, token: null, bypass_server_throttling_supported: null, bundle_id: null };
      obj[0] = tmp8;
      obj[1] = token;
      let isAndroidResult = tmp2(500).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = !closure_13;
      }
      obj[2] = isAndroidResult;
      obj[3] = closure_10;
      obj[1] = obj;
      obj1 = { event: null };
      obj1[0] = tmp2(503).NetworkActionNames.USER_REGISTER_DEVICE_TOKEN;
      obj[3] = obj1;
      syncDeviceResult = obj.post(obj);
      const tmp2Result = tmp2(500);
    }
    return syncDeviceResult;
  },
  syncDevice(token, flag) {
    closure_0 = token;
    if (flag === undefined) {
      flag = false;
    }
    return callback(function*() {
      let id = tmp2;
      id = closure_1_6.getId();
      const validUsers = closure_1_5.getValidUsers();
      const sorted = validUsers.sort((id, id2) => {
        let num = -1;
        if (id.id !== closure_0) {
          let num2 = 0;
          if (id2.id === tmp) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      });
      yield Promise.all(sorted.map(closure_1_15));
      if (1 === tmp5) {
        if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_1 = arg1;
          if (closure_1.length >= 1) {
            if (null != closure_1[0]) {
              const HTTP = closure_1_0(530).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: false };
              obj3[0] = closure_1_9.DEVICES_SYNC;
              if (closure_1) {
                let tmp9 = closure_1_11;
              } else {
                tmp9 = closure_1_12();
              }
              const obj4 = { provider: null, token: null, push_sync_tokens: null, bypass_server_throttling_supported: null, bundle_id: null };
              obj4[0] = tmp9;
              obj4[1] = closure_1_0;
              obj4[2] = closure_1.filter(closure_1_0(1370).isNotNullish);
              obj2 = closure_1_0(500);
              let isAndroidResult = obj2.isAndroid();
              if (isAndroidResult) {
                isAndroidResult = !closure_1_13;
              }
              obj4[3] = isAndroidResult;
              obj4[4] = closure_1_10;
              obj3[1] = obj4;
              let v0 = 2;
              dependencyMap = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.put(obj3);
              return obj5;
            }
          }
          dependencyMap = 3;
        }
      } else if (arg0 === 1) {
        dependencyMap = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        v0 = arg1;
        if (v0.body.invalid_push_sync_tokens.length > 0) {
          const result = v0(11919).invalidatePushSyncTokens(v0.body.invalid_push_sync_tokens);
          const obj9 = v0(11919);
        }
      }
      return arg1;
    })();
  },
  unregisterDevice(token) {
    logger.log("Unregistering push notification token: " + token);
    let obj = _modDef4679;
    obj = { url: constants.DEVICES, body: null, trackedActionData: null, rejectWithError: false };
    obj = { provider: callback2(), token };
    obj[1] = obj;
    obj[2] = { event: encodeProperties.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN };
    return obj.delete(obj);
  }
};
const tmp4 = new timestampDefault("PushNotificationActionCreators");
let result = require("set").fileFinishedImporting("actions/native/PushNotificationActionCreators.tsx");

export default obj;
export const setPushPermissionState = function setPushPermissionState(PROMPT_SEEN) {
  closure_0 = PROMPT_SEEN;
  dispatcherDefault.wait(() => {
    let obj = closure_1_1(closure_1_3[15]);
    obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_STATE", permissionState: closure_0 };
    obj.dispatch(obj);
  });
};
export const setPushPermissionReactivationSeen = function setPushPermissionReactivationSeen(promptType) {
  let obj = dispatcherDefault;
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN", promptType };
  obj.dispatch(obj);
};
export const setPushNotificationPermissionEligibleForPrompt = function setPushNotificationPermissionEligibleForPrompt(CHANNEL_BANNER) {
  let obj = dispatcherDefault;
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE", promptType: CHANNEL_BANNER };
  obj.dispatch(obj);
};
export const updateNotificationAuthorizationStatus = function updateNotificationAuthorizationStatus(closure_0) {
  let obj = dispatcherDefault;
  obj = { type: "PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE", authorizationStatus: closure_0 };
  obj.dispatch(obj);
};