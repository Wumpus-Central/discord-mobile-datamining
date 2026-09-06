// discord_app/modules/notifications/friend_online/FriendOnlineTimerStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";

const HOUR = DurationsDefault.Millis.HOUR;
let obj = { lastReportedAtMs: null };
let closure_2 = obj;
const PersistedStore = initializeDefault.PersistedStore;
class FriendOnlineTimerStore extends PersistedStore {}
const prototype = FriendOnlineTimerStore.prototype;
prototype["initialize"] = function initialize() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  if (tmp == null) {
    tmp = obj;
  }
  closure_2 = tmp;
};
prototype["isCooldownElapsed"] = function isCooldownElapsed() {
  let tmp = null == closure_2.lastReportedAtMs;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - closure_2.lastReportedAtMs >= HOUR;
  }
  return tmp;
};
prototype["getState"] = function getState() {
  return closure_2;
};
FriendOnlineTimerStore.displayName = "FriendOnlineTimerStore";
FriendOnlineTimerStore.persistKey = "FriendOnlineTimerStore";
obj = {
  FRIEND_ONLINE_TIMER_REPORTED: function setLastReportedAtMs(timestampMs) {
    closure_2.lastReportedAtMs = timestampMs.timestampMs;
    return true;
  },
};
const friendOnlineTimerStore = new FriendOnlineTimerStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimerStore.tsx");

export default friendOnlineTimerStore;
