// discord_app/actions/native/PushNotificationActionCreators.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import TokenManagerAll from "../../../discord_common/js/shared/lib/TokenManager.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import MultiAccountStore from "../../modules/multi_account/MultiAccountStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
function getOrRefreshPushSyncToken() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _getOrRefreshPushSyncToken(arg0) {
  let pushSyncToken = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp5;
            closure_129_0 = pushSyncToken;
            let token2;
            if (null == pushSyncToken.pushSyncToken) {
              let obj5 = TokenManagerAll;
              const token = obj5.getToken(pushSyncToken.id);
              if (null == token) {
                c6 = 3;
                return { value: null, done: true };
              } else {
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj1 = { url: constants.DEVICES_SYNC_TOKEN, headers: null, rejectWithError: false };
                const obj2 = { authorization: token };
                obj1.headers = obj2;
                c5 = 2;
                c6 = 1;
                let obj3 = { value: HTTP.get(obj1), done: false };
                return obj3;
              }
            } else {
              c6 = 3;
              const obj4 = { value: pushSyncToken.pushSyncToken, done: true };
              return obj4;
            }
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_129_2 = closure_3;
          obj3 = closure_130_1(closure_130_3[8]);
          obj3.captureException(closure_129_2);
          c6 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj5 = { value, done: true };
          return obj5;
        } else {
          token2 = value.body.token;
          c4 = 0;
          obj = closure_130_2(closure_130_3[9]);
          obj.updatePushSyncToken(closure_129_0.id, token2);
          c6 = 3;
          const obj6 = { value: token2, done: true };
          return obj6;
        }
      } catch (tmp31) {
        closure_3 = tmp31;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp31;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const Constants = fn(1074);
({ DEVICE_TOKEN: closure_7, DEVICE_VOIP_TOKEN: closure_8, Endpoints: closure_9 } = Constants);
const PushNotificationConstants = fn(6596);
({
  BUNDLE_ID: c10,
  DEVICE_PUSH_VOIP_PROVIDER: closure_11,
  getDevicePushProvider: closure_12,
  IS_QUEST_RELEASE: map1,
} = PushNotificationConstants);
const logger = new LoggerDefault("PushNotificationActionCreators");
const size = fn(2);
let result = size.fileFinishedImporting("actions/native/PushNotificationActionCreators.tsx");

export default {
  registerDevice(token) {
    if (flag === undefined) {
      flag = false;
    }
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
    const result = Storage.set(flag ? React6 : React5, token);
    if (canUseMultiAccountNotifications) {
      const self = this;
      let syncDeviceResult = this.syncDevice(token, flag);
    } else {
      let obj = TrackedHTTPUtilsDefault;
      const request = {
        url: constants.DEVICES,
        body: null,
        oldFormErrors: true,
        trackedActionData: null,
        rejectWithError: false,
      };
      if (flag) {
        let tmp8 = closure_1_11;
      } else {
        tmp8 = closure_1_12();
      }
      obj = { provider: tmp8, token, bypass_server_throttling_supported: null, bundle_id: null };
      let isAndroidResult = PlatformUtils.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = !map1;
      }
      obj.bypass_server_throttling_supported = isAndroidResult;
      obj.bundle_id = bundle_id;
      request.body = obj;
      obj = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_REGISTER_DEVICE_TOKEN };
      request.trackedActionData = obj;
      syncDeviceResult = obj.post(request);
      const tmp2Result = PlatformUtils;
    }
    return syncDeviceResult;
  },
  syncDevice(token) {
    closure_0 = token;
    if (flag === undefined) {
      flag = false;
    }
    return (async () => {
      const id2 = id.getId();
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
      await Promise.all(sorted.map(closure_1_15));
      if (1 === tmp5) {
        if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_1 = value;
          if (closure_128_1.length >= 1) {
            if (null != closure_128_1[0]) {
              const HTTP = tmp2(1272).HTTP;
              const request = { url: constants.DEVICES_SYNC, body: null, rejectWithError: false };
              if (closure_129_1) {
                let tmp9 = closure_1_11;
              } else {
                tmp9 = closure_1_12();
              }
              const obj3 = {
                provider: tmp9,
                token: closure_129_0,
                push_sync_tokens: closure_128_1.filter(tmp2(1369).isNotNullish),
                bypass_server_throttling_supported: null,
                bundle_id: null,
              };
              obj2 = tmp2(1115);
              let isAndroidResult = obj2.isAndroid();
              if (isAndroidResult) {
                isAndroidResult = !closure_1_13;
              }
              obj3.bypass_server_throttling_supported = isAndroidResult;
              obj3.bundle_id = bundle_id;
              request.body = obj3;
              const v2 = 2;
              dependencyMap = 1;
              return { value: HTTP.put(request), done: false };
            }
          }
          dependencyMap = 3;
        }
      } else if (arg0 === 1) {
        dependencyMap = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_2 = value;
        if (closure_128_2.body.invalid_push_sync_tokens.length > 0) {
          const result = v2(12417).invalidatePushSyncTokens(closure_128_2.body.invalid_push_sync_tokens);
          v2(12417);
        }
      }
      return value;
    })();
  },
  unregisterDevice(token) {
    logger.log("Unregistering push notification token: " + token);
    const request = { url: constants.DEVICES, body: null, trackedActionData: null, rejectWithError: false };
    let obj = { provider: closure_1_12(), token };
    request.body = obj;
    obj = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN };
    request.trackedActionData = obj;
    return obj.delete(request);
  },
};
export const setPushPermissionState = function setPushPermissionState(PROMPT_SEEN) {
  const permissionState = PROMPT_SEEN;
  DispatcherDefault.wait(() => {
    const obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_STATE", permissionState };
    obj.dispatch(obj);
  });
};
export const setPushPermissionReactivationSeen = function setPushPermissionReactivationSeen(promptType) {
  const obj = { type: "PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN", promptType };
  obj.dispatch(obj);
};
export const setPushNotificationPermissionEligibleForPrompt = function setPushNotificationPermissionEligibleForPrompt(
  CHANNEL_BANNER,
) {
  const obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE", promptType: CHANNEL_BANNER };
  obj.dispatch(obj);
};
export const updateNotificationAuthorizationStatus = function updateNotificationAuthorizationStatus(
  authorizationStatus,
) {
  const obj = { type: "PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE", authorizationStatus };
  obj.dispatch(obj);
};
