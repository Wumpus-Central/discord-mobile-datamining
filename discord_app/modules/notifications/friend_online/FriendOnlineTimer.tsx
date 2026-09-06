// === Module 17807: FriendOnlineTimer ===

// Module 17807 (FriendOnlineTimer)
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import UserSettings from "UserSettings" /* 1935 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import FriendOnlineTimerStore from "FriendOnlineTimerStore" /* 17808 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
let closure_9 = async function _reportSessionMeaningfullyOnline() {
  closure_1 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  let obj1 = { url: constants.USER_MEANINGFULLY_ONLINE, rejectWithError: true };
  await HTTP.post(obj1);
  if (1 === tmp7) {
    c3 = 0;
    closure_128_0 = closure_2;
    if (closure_128_0 instanceof closure_129_0(closure_129_2[6]).HTTPResponseError) {
      if (429 === closure_128_0.status) {
        obj1 = closure_129_1(closure_129_2[8]);
        let obj3 = { type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: null };
        const _Date = Date;
        obj3.timestampMs = Date.now();
        obj1.dispatch(obj3);
        c5 = 3;
      }
    }
    obj3 = closure_129_1(closure_129_2[7]);
    obj3.captureException(closure_128_0, { tags: { app_context: "session_timer" } });
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
const Endpoints = fn(1074).Endpoints;
const StatusTypes = fn(1085).StatusTypes;
let closure_8 = 5 * DurationsDefault.Millis.MINUTE;
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
      SELF_PRESENCE_STORE_UPDATE() {
            return applyArgumentsResult.start();
          }
    };
    applyArgumentsResult.start = function start() {
      const NotifyFriendsOnComeOnline = UserSettings.NotifyFriendsOnComeOnline;
      let setting = NotifyFriendsOnComeOnline.getSetting();
      if (setting) {
        setting = FriendOnlineTimerStore.isCooldownElapsed();
      }
      if (setting) {
        setting = null == applyArgumentsResult.timerId;
      }
      if (setting) {
        let items = [, ];
        ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
        setting = items.includes(SelfPresenceStore.getStatus());
      }
      if (setting) {
        const _setTimeout = setTimeout;
        applyArgumentsResult.timerId = setTimeout(() => {
          closure_1_0.timerId = null;
          const items = [, ];
          ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
          let hasItem = items.includes(status.getStatus());
          if (hasItem) {
            hasItem = cooldownElapsed.isCooldownElapsed();
          }
          if (hasItem) {
            (function reportSessionMeaningfullyOnline() {
              const self = this;
              const apply = closure_1_9.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          }
        }, closure_8);
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