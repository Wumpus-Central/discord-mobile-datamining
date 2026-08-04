import timestamp from "timestamp";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import ME from "ME";
import str2 from "str2";

let c10;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
                let obj5 = outer1_2(outer1_3[6]);
                token = obj5.getToken(tmp40.id);
                if (null == token) {
                  c6 = 3;
                  return { value: null, done: true };
                } else {
                  let c4 = 1;
                  const HTTP = lib(outer1_3[7]).HTTP;
                  const obj1 = { url: null, headers: null, rejectWithError: false };
                  obj1[0] = outer1_9.DEVICES_SYNC_TOKEN;
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
            obj = callback(11698);
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
  const _getOrRefreshPushSyncToken = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ DEVICE_TOKEN: error, DEVICE_VOIP_TOKEN: metroImportAll, Endpoints: c9 } = ME);
({ BUNDLE_ID: c10, DEVICE_PUSH_VOIP_PROVIDER: unpackModuleId, getDevicePushProvider: closure_12, IS_QUEST_RELEASE: map1 } = require("str2"));
let closure_14 = new require("ME")("PushNotificationActionCreators");
let obj = {
  registerDevice(token, flag) {
    if (flag === undefined) {
      flag = false;
    }
    const canUseMultiAccountNotifications = obj.canUseMultiAccountNotifications;
    tmp4.log("Registering push notification token: " + token + ", is voip:" + flag + ", multi-account:" + canUseMultiAccountNotifications);
    const Storage = require(595) /* Storage */.Storage;
    const result = Storage.set(flag ? closure_8 : closure_7, token);
    if (canUseMultiAccountNotifications) {
      const self = this;
      let syncDeviceResult = this.syncDevice(token, flag);
    } else {
      obj = importDefault(5094);
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
      const obj1 = { event: null };
      obj1[0] = tmp2(503).NetworkActionNames.USER_REGISTER_DEVICE_TOKEN;
      obj[3] = obj1;
      syncDeviceResult = obj.post(obj);
      const tmp2Result = tmp2(500);
    }
    return syncDeviceResult;
  },
  syncDevice(token, flag) {
    let closure_0 = token;
    if (flag === undefined) {
      flag = false;
    }
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp5;
              let id = tmp2;
              id = undefined;
              closure_1 = undefined;
              v0 = undefined;
              id = outer1_6.getId();
              const validUsers = outer1_5.getValidUsers();
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
              v0 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = Promise.all(sorted.map(outer1_15));
              return obj1;
            }
          } else {
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
                    const HTTP = outer1_0(530).HTTP;
                    const obj3 = { url: null, body: null, rejectWithError: false };
                    obj3[0] = outer1_9.DEVICES_SYNC;
                    if (closure_1) {
                      let tmp9 = outer1_11;
                    } else {
                      tmp9 = outer1_12();
                    }
                    const obj4 = { provider: null, token: null, push_sync_tokens: null, bypass_server_throttling_supported: null, bundle_id: null };
                    obj4[0] = tmp9;
                    obj4[1] = outer1_0;
                    obj4[2] = closure_1.filter(outer1_0(1351).isNotNullish);
                    obj2 = outer1_0(500);
                    let isAndroidResult = obj2.isAndroid();
                    if (isAndroidResult) {
                      isAndroidResult = !outer1_13;
                    }
                    obj4[3] = isAndroidResult;
                    obj4[4] = outer1_10;
                    obj3[1] = obj4;
                    v0 = 2;
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
                const result = v0(11698).invalidatePushSyncTokens(v0.body.invalid_push_sync_tokens);
                const obj9 = v0(11698);
              }
            }
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp23) {
          dependencyMap = tmp;
          throw tmp23;
        }
      }
    })();
  },
  unregisterDevice(token) {
    tmp4.log("Unregistering push notification token: " + token);
    let obj = importDefault(5094);
    obj = { url: constants.DEVICES, body: null, trackedActionData: null, rejectWithError: false };
    obj = { provider: callback2(), token };
    obj[1] = obj;
    obj[2] = { event: require(503) /* encodeProperties */.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN };
    return obj.delete(obj);
  }
};
const tmp4 = new require("ME")("PushNotificationActionCreators");
let result = require("fetchFingerprint").fileFinishedImporting("actions/native/PushNotificationActionCreators.tsx");

export default obj;
export const setPushPermissionState = function setPushPermissionState(PROMPT_SEEN) {
  let closure_0 = PROMPT_SEEN;
  importDefault(709).wait(() => {
    let obj = outer1_1(outer1_3[15]);
    obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_STATE", permissionState: closure_0 };
    obj.dispatch(obj);
  });
};
export const setPushPermissionReactivationSeen = function setPushPermissionReactivationSeen(promptType) {
  let obj = importDefault(709);
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN", promptType };
  obj.dispatch(obj);
};
export const setPushNotificationPermissionEligibleForPrompt = function setPushNotificationPermissionEligibleForPrompt(CHANNEL_BANNER) {
  let obj = importDefault(709);
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE", promptType: CHANNEL_BANNER };
  obj.dispatch(obj);
};
export const updateNotificationAuthorizationStatus = function updateNotificationAuthorizationStatus(closure_0) {
  let obj = importDefault(709);
  obj = { type: "PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE", authorizationStatus: closure_0 };
  obj.dispatch(obj);
};