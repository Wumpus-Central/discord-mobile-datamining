// discord_app/modules/notifications/friend_online/FriendOnlineTimerStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import setDefault from "../../../utils/Durations.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";

const HOUR = setDefault.Millis.HOUR;
let obj = { lastReportedAtMs: null };
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
  let tmp = null == obj.lastReportedAtMs;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - obj.lastReportedAtMs >= HOUR;
  }
  return tmp;
};
prototype["getState"] = function getState() {
  return obj;
};
FriendOnlineTimerStore.displayName = "FriendOnlineTimerStore";
FriendOnlineTimerStore.persistKey = "FriendOnlineTimerStore";
obj = {
  FRIEND_ONLINE_TIMER_REPORTED: function setLastReportedAtMs(timestampMs) {
    obj.lastReportedAtMs = timestampMs.timestampMs;
    return true;
  },
};
const friendOnlineTimerStore = new FriendOnlineTimerStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimerStore.tsx");

export default friendOnlineTimerStore;
