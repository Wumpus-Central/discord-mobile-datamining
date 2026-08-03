import { PersistedStore } from "initialize";

const HOUR = require("set").Millis.HOUR;
let obj = { lastReportedAtMs: null };
class FriendOnlineTimerStore extends PersistedStore {
}
const prototype = FriendOnlineTimerStore.prototype;
prototype["initialize"] = function initialize() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  if (tmp == null) {
    tmp = obj;
  }
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
  }
};
const friendOnlineTimerStore = new FriendOnlineTimerStore(require("dispatcher"), obj);
const result = require("dispatcher").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimerStore.tsx");

export default friendOnlineTimerStore;