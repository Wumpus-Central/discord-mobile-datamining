// === Module 16736: _reportSessionMeaningfullyOnline ===

// Module 16736 (_reportSessionMeaningfullyOnline)
import set from "set";
import filterPlayingActivities from "filterPlayingActivities";
import initialize from "initialize";
import { Endpoints } from "ME";
import { StatusTypes } from "sum";
import "initialize";

let require = arg1;
function _reportSessionMeaningfullyOnline() {
  const self = this;
  const tmp = callback(function*() {
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
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let lib = tmp7;
            let c3 = 1;
            const HTTP = outer1_0(outer1_2[6]).HTTP;
            let obj1 = { url: null, rejectWithError: true };
            obj1[0] = outer1_6.USER_MEANINGFULLY_ONLINE;
            c4 = 2;
            c5 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.post(obj1);
            return obj2;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            lib = dependencyMap;
            if (lib instanceof lib(530).HTTPResponseError) {
              if (429 === lib.status) {
                obj1 = callback(709);
                let obj3 = { type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: null };
                const _Date = Date;
                obj3[1] = Date.now();
                obj1.dispatch(obj3);
                c5 = 3;
              }
            }
            obj3 = callback(1208);
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
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp30) {
        dependencyMap = tmp30;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp30;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _reportSessionMeaningfullyOnline = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = 5 * require("set").Millis.MINUTE;
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
      const NotifyFriendsOnComeOnline = applyArgumentsResult(outer1_2[10]).NotifyFriendsOnComeOnline;
      let setting = NotifyFriendsOnComeOnline.getSetting();
      if (setting) {
        setting = outer1_5.isCooldownElapsed();
      }
      if (setting) {
        setting = null == applyArgumentsResult.timerId;
      }
      if (setting) {
        let items = [, ];
        ({ ONLINE: arr[0], STREAMING: arr[1] } = outer1_7);
        setting = items.includes(outer1_4.getStatus());
      }
      if (setting) {
        const _setTimeout = setTimeout;
        applyArgumentsResult.timerId = setTimeout(() => {
          closure_0.timerId = null;
          const items = [, ];
          ({ ONLINE: arr[0], STREAMING: arr[1] } = outer1_7);
          let hasItem = items.includes(outer1_4.getStatus());
          if (hasItem) {
            hasItem = outer1_5.isCooldownElapsed();
          }
          if (hasItem) {
            (function reportSessionMeaningfullyOnline() {
              const self = this;
              const apply = closure_9.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          }
        }, outer1_8);
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
const result = require("initialize").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimer.tsx");

export default friendOnlineTimerManager;