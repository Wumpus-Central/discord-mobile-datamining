// === Module 20295: FriendOnlineTimer ===

// Module 20295 (FriendOnlineTimer)
import DurationsDefault from "Durations" /* 1088 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import UserSettings from "UserSettings" /* 4868 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7654 */;
import FriendOnlineTimerStore from "FriendOnlineTimerStore" /* 20296 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;

require = fn;
let closure_10 = async function _reportSessionMeaningfullyOnline() {
  closure_1 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: constants.USER_MEANINGFULLY_ONLINE, rejectWithError: true });
  if (1 === tmp7) {
    c3 = 0;
    closure_128_0 = closure_2;
    if (closure_128_0 instanceof closure_129_0(closure_129_2[7]).HTTPResponseError) {
      if (429 === closure_128_0.status) {
        const obj8 = { type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: null };
        const _Date = Date;
        obj8.timestampMs = Date.now();
        closure_129_1(closure_129_2[9]).dispatch(obj8);
        c5 = 3;
        closure_129_1(closure_129_2[9]);
      }
    }
    closure_129_1(closure_129_2[8]).captureException(closure_128_0, { tags: { app_context: "session_timer" } });
    c5 = 3;
    return { value: undefined, done: true };
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return value;
};
const Endpoints = fn(1071).Endpoints;
const StatusTypes = fn(1082).StatusTypes;
let closure_9 = 5 * DurationsDefault.Millis.MINUTE;
class FriendOnlineTimerManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.timerId = null;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.start();
          },
      CONNECTION_RESUMED() {
            return applyArgumentsResult.start();
          },
      CONNECTION_CLOSED() {
            return applyArgumentsResult.clear();
          },
      CONNECTION_INTERRUPTED() {
            return applyArgumentsResult.clear();
          },
      LOGOUT() {
            return applyArgumentsResult.clear();
          },
      SELF_PRESENCE_STORE_UPDATE() {
            return applyArgumentsResult.start();
          }
    };
    applyArgumentsResult.start = function start() {
      let isAuthenticatedResult = AuthenticationStore.isAuthenticated();
      if (isAuthenticatedResult) {
        const NotifyFriendsOnComeOnline = UserSettings.NotifyFriendsOnComeOnline;
        isAuthenticatedResult = NotifyFriendsOnComeOnline.getSetting();
      }
      if (isAuthenticatedResult) {
        isAuthenticatedResult = FriendOnlineTimerStore.isCooldownElapsed();
      }
      if (isAuthenticatedResult) {
        isAuthenticatedResult = null == applyArgumentsResult.timerId;
      }
      if (isAuthenticatedResult) {
        items = [, ];
        ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
        isAuthenticatedResult = items.includes(SelfPresenceStore.getStatus());
      }
      if (isAuthenticatedResult) {
        const _setTimeout = setTimeout;
        applyArgumentsResult.timerId = setTimeout(() => {
          closure_1_0.timerId = null;
          let isAuthenticatedResult = authenticated.isAuthenticated();
          if (isAuthenticatedResult) {
            items = [, ];
            ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
            isAuthenticatedResult = items.includes(status.getStatus());
          }
          if (isAuthenticatedResult) {
            isAuthenticatedResult = cooldownElapsed.isCooldownElapsed();
          }
          if (isAuthenticatedResult) {
            (function reportSessionMeaningfullyOnline() {
              const self = this;
              const apply = closure_1_10.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          }
        }, closure_9);
      }
    };
    applyArgumentsResult.clear = function clear() {
      if (null != applyArgumentsResult.timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(applyArgumentsResult.timerId);
        applyArgumentsResult.timerId = null;
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = FriendOnlineTimerManager.prototype;
prototype["_initialize"] = function _initialize() {

};
prototype["_terminate"] = function _terminate() {
  this.clear();
};
const friendOnlineTimerManager = new FriendOnlineTimerManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimer.tsx");

export default friendOnlineTimerManager;