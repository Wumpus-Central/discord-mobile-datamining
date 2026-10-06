// === Module 18048: FriendOnlineTimer ===

// Module 18048 (FriendOnlineTimer)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import DurationsDefault from "Durations" /* 1102 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import UserSettings from "UserSettings" /* 2028 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5445 */;
import FriendOnlineTimerStore from "FriendOnlineTimerStore" /* 18049 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let obj = function _reportSessionMeaningfullyOnline() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let status;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            status = tmp4;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.USER_MEANINGFULLY_ONLINE, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.post(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            status = closure_2;
            const obj7 = { tags: { app_context: "session_timer" } };
            const obj3 = closure_129_1(closure_129_2[7]);
            obj3.captureException(status, obj7);
            c5 = 3;
            const obj8 = { value: undefined, done: true };
            return obj8;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          const obj9 = { type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() };
          const _Date = Date;
          const dispatch = closure_129_1(closure_129_2[8]).dispatch;
          const tmp17 = closure_129_1(closure_129_2[8]);
          dispatch(obj9);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        closure_2 = tmp28;
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const StatusTypes = Constants2.StatusTypes;
let closure_8 = 5 * DurationsDefault.Millis.MINUTE;
class FriendOnlineTimerManager extends AutomaticLifecycleManager {
  constructor() {
    let cooldownElapsed;
    let status;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.timerId = null;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.start();
      },
      CONNECTION_RESUMED() {
        return require.start();
      },
      CONNECTION_CLOSED() {
        return require.clear();
      },
      CONNECTION_INTERRUPTED() {
        return require.clear();
      },
      SELF_PRESENCE_STORE_UPDATE() {
        return require.start();
      }
    };
    applyArgumentsResult.start = function start() {
      const NotifyFriendsOnComeOnline = UserSettings.NotifyFriendsOnComeOnline;
      let setting = NotifyFriendsOnComeOnline.getSetting() && FriendOnlineTimerStore.isCooldownElapsed() && null == require.timerId;
      if (setting) {
        let items = [, ];
        ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
        setting = items.includes(SelfPresenceStore.getStatus());
      }
      if (setting) {
        const _setTimeout = setTimeout;
        require.timerId = setTimeout(() => {
          function reportSessionMeaningfullyOnline() {
            return closure_1_9(...arguments);
          }
          closure_1_0.timerId = null;
          const items = [, ];
          ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
          const hasItem = items.includes(status.getStatus()) && cooldownElapsed.isCooldownElapsed();
          if (hasItem) {
            reportSessionMeaningfullyOnline();
          }
        }, closure_8);
      }
    };
    applyArgumentsResult.clear = function clear() {
      if (null != require.timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(require.timerId);
        require.timerId = null;
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {

  }
  _terminate() {
    this.clear();
  }
}
const prototype = FriendOnlineTimerManager.prototype;
const friendOnlineTimerManager = new FriendOnlineTimerManager();
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimer.tsx");

export default friendOnlineTimerManager;