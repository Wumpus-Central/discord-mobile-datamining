// === Module 13743: ActivityTrackingStore ===

// Module 13743 (ActivityTrackingStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import GameAnalyticsUtils from "GameAnalyticsUtils" /* 4689 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11472 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DetectableGameStore from "DetectableGameStore" /* 1931 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 7397 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
function stopActivity(applicationId) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    updateActivity(applicationId, true);
  }
  if (null != dependencyMap[applicationId.applicationId]) {
    obj.stop();
    applicationId = applicationId.applicationId;
    delete tmp3[tmp2];
  }
  delete tmp3[tmp];
  const Storage = Storage2.Storage;
  const result = Storage.set(ActivityTrackingStore, obj);
}
function updateActivity(applicationId) {
  _require = applicationId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const timestamp = Date.now();
  let num = 0;
  if (null != applicationId.updatedAt) {
    num = timestamp - applicationId.updatedAt;
  }
  if (num > closure_12 + closure_13) {
    num = 0;
  }
  obj = require("LibraryApplicationUtils");
  const result = obj.shouldShareApplicationActivity(applicationId.applicationId, LibraryApplicationStore);
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const sessionId = AuthenticationStore.getSessionId();
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  obj = { applicationId: applicationId.applicationId, distributor: null, shareActivity: null, token: null, duration: null, closed: null, exePath: null, voiceChannelId: null, sessionId: null, mediaSessionId: null };
  if (applicationId.isDiscordApplication) {
    let distributor = Distributors.DISCORD;
  } else {
    distributor = applicationId.distributor;
  }
  obj.distributor = distributor;
  obj.shareActivity = result;
  obj.token = applicationId.token;
  obj.duration = Math.floor(num / 1000);
  obj.closed = flag;
  obj.exePath = applicationId.exePath;
  obj.voiceChannelId = voiceChannelId;
  obj.sessionId = sessionId;
  obj.mediaSessionId = mediaSessionId;
  ActivitiesActionCreatorsDefault.updateActivity(obj);
  applicationId.updatedAt = timestamp;
  if (null == dependencyMap[applicationId.applicationId]) {
    const interval = new tmp3(4447).Interval();
    tmp11[applicationId.applicationId] = interval;
    interval.start(closure_12, () => {
      updateActivity(closure_0);
    });
  }
  if (!flag) {
    obj[applicationId.applicationId] = applicationId;
    const Storage = tmp3(510).Storage;
    const result1 = Storage.set(ActivityTrackingStore, obj);
  }
}
function handleRunningGamesChange() {
  if (flag === undefined) {
    flag = true;
  }
  const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
  const set = new Set();
  const iter = visibleRunningGames[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let findGameResult = DetectableGameStore.findGame(nextResult);
    let tmp6 = findGameResult;
    if (null != findGameResult) {
      let addResult = set.add(tmp6.id);
      if (!(tmp6.id in obj)) {
        obj = { applicationId: null, updatedAt: null, distributor: null, exePath: null };
        obj.applicationId = tmp6.id;
        let _Date = Date;
        obj.updatedAt = Date.now();
        obj.distributor = tmp3.distributor;
        let obj3 = GameAnalyticsUtils;
        let str = tmp3.exePath;
        if (str == null) {
          str = "";
        }
        obj.exePath = obj3.removeExecutablePathPrefix(str);
        let tmp7Result = updateActivity(obj);
      }
    }
    continue;
  }
  const keys = Object.keys(obj);
  for (const item10052 of keys) {
    if (!set.has(item10052)) {
      let tmp18 = stopActivity(obj[item10052], flag);
    }
    continue;
  }
}
function handleLogout() {
  const keys = Object.keys(obj);
  while (tmp2 !== undefined) {
    let tmp6 = stopActivity(obj[tmp3]);
    continue;
  }
  c16 = false;
  tmp2 = keys[Symbol.iterator]();
}
const Distributors = fn(1074).Distributors;
const ActivityTrackingStore = "ActivityTrackingStore";
let closure_12 = 30 * DurationsDefault.Millis.MINUTE;
let closure_13 = 5 * DurationsDefault.Millis.MINUTE;
let Storage = fn(510).Storage;
let obj = Storage.get("ActivityTrackingStore");
if (obj == null) {
  obj = {};
}
const dependencyMap = {};
let c16 = false;
const Store = initializeDefault.Store;
class ActivityTrackingStore extends Store {
}
const prototype = ActivityTrackingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, DetectableGameStore, LibraryApplicationStore, RTCConnectionStore, RunningGameStore, SelectedChannelStore, UserSettingsProtoStore);
  const items = [UserSettingsProtoStore];
  this.syncWith(items, handleRunningGamesChange);
};
prototype["getActivities"] = function getActivities() {
  return obj;
};
ActivityTrackingStore.displayName = "ActivityTrackingStore";
obj = {
  RUNNING_GAMES_CHANGE() {
    handleRunningGamesChange();
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (c16) {
      return false;
    } else {
      const _Object = Object;
      const keys = Object.keys(obj);
      const tmp5 = keys[Symbol.iterator]();
      while (tmp5 !== undefined) {
        let tmp11 = updateActivity(obj[tmp7]);
        continue;
      }
      handleRunningGamesChange(false);
      c16 = true;
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    if (4004 === code.code) {
      handleLogout();
    }
  },
  LOGOUT: handleLogout,
  ACTIVITY_UPDATE_SUCCESS: function handleActivityUpdate(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      tmp3.token = tmp;
      const Storage = Storage2.Storage;
      const result = Storage.set(ActivityTrackingStore, tmp2);
    }
  },
  ACTIVITY_UPDATE_FAIL: function handleActivityUpdateFail(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      tmp2.token = null;
      tmp2.updatedAt = null;
      const Storage = Storage2.Storage;
      const result = Storage.set(ActivityTrackingStore, tmp);
    }
  }
};
const activityTrackingStore = new ActivityTrackingStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("stores/ActivityTrackingStore.tsx");

export default activityTrackingStore;