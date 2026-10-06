// === Module 18049: FriendOnlineTimerStore ===

// Module 18049 (FriendOnlineTimerStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import size from "module_2" /* 2 */;

let closure_2;

const HOUR = DurationsDefault.Millis.HOUR;
const obj = { lastReportedAtMs: null };
const React2 = obj;
const PersistedStore = get_initializedDefault.PersistedStore;
class FriendOnlineTimerStore extends PersistedStore {
  initialize() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = obj;
    }
    if (tmp == null) {
      tmp = obj;
    }
    closure_2 = tmp;
  }
  isCooldownElapsed() {
    let tmp = null == closure_2.lastReportedAtMs;
    if (!tmp) {
      const _Date = Date;
      tmp = Date.now() - closure_2.lastReportedAtMs >= HOUR;
    }
    return tmp;
  }
  getState() {
    return closure_2;
  }
}
const prototype = FriendOnlineTimerStore.prototype;
FriendOnlineTimerStore.displayName = "FriendOnlineTimerStore";
FriendOnlineTimerStore.persistKey = "FriendOnlineTimerStore";
const obj2 = {
  FRIEND_ONLINE_TIMER_REPORTED: function setLastReportedAtMs(timestampMs) {
    closure_2.lastReportedAtMs = timestampMs.timestampMs;
    return true;
  }
};
const friendOnlineTimerStore = new FriendOnlineTimerStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimerStore.tsx");

export default friendOnlineTimerStore;