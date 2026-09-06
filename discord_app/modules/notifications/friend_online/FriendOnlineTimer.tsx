// === Module 17807: _reportSessionMeaningfullyOnline ===

// Module 17807 (_reportSessionMeaningfullyOnline)
import setDefault from "set" /* 1090 */;
import initializeDefault from "initialize" /* 7118 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "filterPlayingActivities" /* 5279 */;
import closure_5 from "initialize" /* 17808 */;
import { Endpoints } from "ME" /* 1074 */;
import { StatusTypes } from "sum" /* 1085 */;

let require = arg1;
function _reportSessionMeaningfullyOnline() {
  const self = this;
  const tmp = callback(function*() {
    const callback = tmp3;
    c3 = 1;
    const HTTP = closure_1_0(closure_1_2[6]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_6.USER_MEANINGFULLY_ONLINE;
    yield HTTP.post(obj1);
    if (1 === tmp7) {
      c3 = 0;
      const lib = dependencyMap;
      if (lib instanceof lib(1272).HTTPResponseError) {
        if (429 === lib.status) {
          obj1 = callback(573);
          let obj3 = { type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: null };
          const _Date = Date;
          obj3[1] = Date.now();
          obj1.dispatch(obj3);
          c5 = 3;
        }
      }
      obj3 = callback(1232);
      const obj4 = { tags: null };
      obj4[0] = { app_context: "session_timer" };
      obj3.captureException(lib, obj4);
      c5 = 3;
      const obj5 = { value: null, done: true };
      obj5[0] = undefined;
      return obj5;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = 5 * setDefault.Millis.MINUTE;
initializeDefault;
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
      const NotifyFriendsOnComeOnline = applyArgumentsResult(closure_1_2[10]).NotifyFriendsOnComeOnline;
      let setting = NotifyFriendsOnComeOnline.getSetting();
      if (setting) {
        setting = closure_1_5.isCooldownElapsed();
      }
      if (setting) {
        setting = null == applyArgumentsResult.timerId;
      }
      if (setting) {
        let items = [, ];
        ({ ONLINE: arr[0], STREAMING: arr[1] } = closure_1_7);
        setting = items.includes(closure_1_4.getStatus());
      }
      if (setting) {
        const _setTimeout = setTimeout;
        applyArgumentsResult.timerId = setTimeout(() => {
          closure_0.timerId = null;
          const items = [, ];
          ({ ONLINE: arr[0], STREAMING: arr[1] } = closure_1_7);
          let hasItem = items.includes(closure_1_4.getStatus());
          if (hasItem) {
            hasItem = closure_1_5.isCooldownElapsed();
          }
          if (hasItem) {
            (function reportSessionMeaningfullyOnline() {
              const self = this;
              const apply = closure_9.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          }
        }, closure_1_8);
      }
    };
    applyArgumentsResult.clear = function clear() {
      if (null != applyArgumentsResult.timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.timerId);
        tmp.timerId = null;
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
const result = require("set").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimer.tsx");

export default friendOnlineTimerManager;