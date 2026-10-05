// discord_app/actions/native/PushNotificationActionCreators.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import TokenManagerAll from "../../../discord_common/js/shared/lib/TokenManager.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import Constants2 from "../../modules/multi_account/Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import MultiAccountStore from "../../modules/multi_account/MultiAccountStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import Constants from "../../Constants.tsx";
import PushNotificationConstants from "../../modules/push_notifications/PushNotificationConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3, closure_2, closure_3, getToken;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function getOrRefreshPushSyncToken() {
  return obj(...arguments);
}
let body = function _getOrRefreshPushSyncToken() {
  let obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj6;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let token;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              token = undefined;
              getToken = user.pushSyncToken;
              if (null == getToken) {
                getToken = TokenManagerAll.getToken;
                TokenManagerAll;
                token = getToken(user.id);
                if (null == token) {
                  c6 = 3;
                  return { value: null, done: true };
                } else {
                  c4 = 1;
                  const HTTP = HTTPUtils.HTTP;
                  const obj5 = { url: constants.DEVICES_SYNC_TOKEN, headers: obj6, rejectWithError: false };
                  obj6 = { authorization: token };
                  getToken = HTTP.get(obj5);
                  c5 = 2;
                  c6 = 1;
                  return { value: getToken, done: false };
                }
              } else {
                c6 = 3;
                return { value: user.pushSyncToken, done: true };
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            closure_2 = closure_3;
            const obj4 = closure_130_1(closure_130_3[9]);
            obj4.captureException(closure_2);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            token = value.body.token;
            c4 = 0;
            const obj = closure_130_2(closure_130_3[10]);
            obj.updatePushSyncToken(user.id, token);
            getToken = token;
            c6 = 3;
            return { value: getToken, done: true };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ DEVICE_TOKEN: metroImportDefault, DEVICE_VOIP_TOKEN: metroImportAll, Endpoints: c9 } = Constants);
const MAX_PUSH_SYNC_ACCOUNTS = Constants2.MAX_PUSH_SYNC_ACCOUNTS;
({
  BUNDLE_ID: unpackModuleId,
  DEVICE_PUSH_VOIP_PROVIDER: closure_12,
  getDevicePushProvider: map1,
  IS_QUEST_RELEASE: closure_14,
} = PushNotificationConstants);
const tmp4 = new LoggerDefault("PushNotificationActionCreators");
const logger = tmp4;
body = {
  registerDevice(token) {
    let isAndroidResult;
    let obj2;
    let syncDeviceResult;
    const canUseMultiAccountNotifications = MultiAccountStore.canUseMultiAccountNotifications;
    logger.log(
      "Registering push notification token: " +
        token +
        ", is voip:" +
        flag +
        ", multi-account:" +
        canUseMultiAccountNotifications,
    );
    const Storage = Storage2.Storage;
    const result = Storage.set(flag ? metroImportAll : metroImportDefault, token);
    if (canUseMultiAccountNotifications) {
      const self = this;
      syncDeviceResult = this.syncDevice(token, flag);
    } else {
      let tmp9;
      const request = {
        url: constants.DEVICES,
        body,
        oldFormErrors: true,
        trackedActionData: obj2,
        rejectWithError: false,
      };
      const post = TrackedHTTPUtilsDefault.post;
      TrackedHTTPUtilsDefault;
      if (flag) {
        tmp9 = closure_12;
      } else {
        tmp9 = map1();
      }
      body = { provider: tmp9, token, bypass_server_throttling_supported: isAndroidResult, bundle_id: unpackModuleId };
      const tmp2Result = PlatformUtils;
      isAndroidResult = tmp2Result.isAndroid() && !authStore2;
      obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_REGISTER_DEVICE_TOKEN };
      syncDeviceResult = post(request);
    }
    return syncDeviceResult;
  },
  syncDevice(token) {
    let flag;
    let closure_0 = token;
    if (flag === undefined) {
      flag = false;
    }
    return (async () => {
      let closure_0;
      let isAndroidResult;
      let obj7;
      let v2;
      let validUsers;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let closure_1;
          let tmp;
          let num = 2;
          c3 = 2;
          let num2 = 0;
          if (0 === v2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = undefined;
              tmp = id.getId();
              validUsers = validUsers.getValidUsers();
              const sorted = validUsers.sort((id, id2) => {
                let num = -1;
                if (id.id !== closure_1_0) {
                  let num2 = 0;
                  if (id2.id === tmp) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              });
              const substr = sorted.slice(0, MAX_PUSH_SYNC_ACCOUNTS);
              v2 = 1;
              c3 = 1;
              const obj5 = { value: all(substr.map(getOrRefreshPushSyncToken)), done: false };
              return obj5;
            }
          } else {
            if (1 === v2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_1 = value;
                if (closure_1.length >= 1) {
                  if (null != closure_1[0]) {
                    let tmp8;
                    const HTTP = tmp(c3[8]).HTTP;
                    const request = { url: constants.DEVICES_SYNC, body: obj7, rejectWithError: false };
                    const put = HTTP.put;
                    if (closure_129_1) {
                      tmp8 = closure_1_12;
                    } else {
                      tmp8 = closure_1_13();
                    }
                    obj7 = {
                      provider: tmp8,
                      token,
                      push_sync_tokens: closure_1.filter(tmp(c3[15]).isNotNullish),
                      bypass_server_throttling_supported: isAndroidResult,
                      bundle_id,
                    };
                    const obj3 = tmp(c3[13]);
                    isAndroidResult = obj3.isAndroid() && !closure_1_14;
                    v2 = 2;
                    c3 = 1;
                    const obj8 = { value: put(request), done: false };
                    return obj8;
                  }
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v2 = value;
              if (v2.body.invalid_push_sync_tokens.length > 0) {
                const obj9 = v2(c3[10]);
                const result = obj9.invalidatePushSyncTokens(v2.body.invalid_push_sync_tokens);
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          c3 = 3;
          throw tmp22;
        }
      }
    })();
  },
  unregisterDevice(token) {
    logger.log("Unregistering push notification token: " + token);
    const request = {
      url: constants.DEVICES,
      body,
      trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN },
      rejectWithError: false,
    };
    const tmp2 = TrackedHTTPUtilsDefault;
    body = { provider: map1(), token };
    const _delete = tmp2.delete;
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN });
    return _delete(request);
  },
};
let result = size.fileFinishedImporting("actions/native/PushNotificationActionCreators.tsx");

export default body;
export const setPushPermissionState = function setPushPermissionState(PROMPT_SEEN) {
  const permissionState = PROMPT_SEEN;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "PUSH_NOTIFICATION_PERMISSION_SET_STATE", permissionState };
    obj.dispatch(obj2);
  });
};
export const setPushPermissionReactivationSeen = function setPushPermissionReactivationSeen(promptType) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN", promptType };
  obj.dispatch(obj2);
};
export const setPushNotificationPermissionEligibleForPrompt = function setPushNotificationPermissionEligibleForPrompt(
  CHANNEL_BANNER,
) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE", promptType: CHANNEL_BANNER };
  obj.dispatch(obj2);
};
export const updateNotificationAuthorizationStatus = function updateNotificationAuthorizationStatus(
  authorizationStatus,
) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE", authorizationStatus };
  obj.dispatch(obj2);
};
