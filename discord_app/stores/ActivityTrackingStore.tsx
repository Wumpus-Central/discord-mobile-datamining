// === Module 13554: ActivityTrackingStore ===

// Module 13554 (ActivityTrackingStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import GameAnalyticsUtils from "GameAnalyticsUtils" /* 5019 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11133 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DetectableGameStore from "DetectableGameStore" /* 2024 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 6902 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

function stopActivity(arg0) {
  if (flag) {
    updateActivity(arg0, true);
  }
  if (null != closure_15[arg0.applicationId]) {
    closure_15[arg0.applicationId].stop();
    delete tmp3[arg0.applicationId];
  }
  delete closure_15[arg0.applicationId][arg0.applicationId];
  const Storage = Storage2.Storage;
  const result = Storage.set(ActivityTrackingStore_str, obj);
}
function updateActivity(applicationId) {
  let distributor;
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
  const obj2 = { applicationId: applicationId.applicationId, distributor, shareActivity: result, token: applicationId.token, duration: Math.floor(num / 1000), closed: flag, exePath: applicationId.exePath, voiceChannelId, sessionId, mediaSessionId };
  updateActivity = ActivitiesActionCreatorsDefault.updateActivity;
  ActivitiesActionCreatorsDefault;
  if (applicationId.isDiscordApplication) {
    distributor = Distributors.DISCORD;
  } else {
    distributor = applicationId.distributor;
  }
  updateActivity(obj2);
  applicationId.updatedAt = timestamp;
  if (null == closure_15[applicationId.applicationId]) {
    applicationId = applicationId.applicationId;
    const self = this;
    const self2 = this;
    const interval = new tmp3(2046).Interval();
    tmp12[applicationId] = interval;
    interval.start(closure_12, () => {
      updateActivity(applicationId);
    });
  }
  if (!flag) {
    obj[applicationId.applicationId] = applicationId;
    const Storage = tmp3(510).Storage;
    const result1 = Storage.set(ActivityTrackingStore_str, obj);
  }
}
function handleRunningGamesChange() {
  let removeExecutablePathPrefix;
  let str;
  const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
  set = new Set();
  const iter = visibleRunningGames[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let findGameResult = DetectableGameStore.findGame(nextResult);
    let tmp6 = findGameResult;
    if (null != findGameResult) {
      let addResult = set.add(tmp6.id);
      if (!(tmp6.id in obj)) {
        obj = { applicationId: tmp6.id, updatedAt: Date.now(), distributor: tmp3.distributor, exePath: removeExecutablePathPrefix(str) };
        let _Date = Date;
        let tmp12 = GameAnalyticsUtils;
        str = tmp3.exePath;
        removeExecutablePathPrefix = tmp12.removeExecutablePathPrefix;
        if (str == null) {
          str = "";
        }
        let tmp7Result = updateActivity(obj);
      }
    }
    continue;
  }
  const keys = Object.keys(obj);
  for (const item10052 of keys) {
    if (!set.has(item10052)) {
      let tmp19 = stopActivity(obj[item10052], flag);
    }
    continue;
  }
}
function handleLogout() {
  const keys = Object.keys(obj);
  const tmp2 = keys[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp6 = stopActivity(obj[tmp3]);
    continue;
  }
  c16 = false;
}
const Distributors = Constants.Distributors;
const ActivityTrackingStore_str = "ActivityTrackingStore";
let closure_12 = 30 * DurationsDefault.Millis.MINUTE;
let closure_13 = 5 * DurationsDefault.Millis.MINUTE;
let Storage = Storage2.Storage;
let obj = Storage.get("ActivityTrackingStore");
if (obj == null) {
  obj = {};
}
let closure_15 = {};
let c16 = false;
const Store = get_initializedDefault.Store;
class ActivityTrackingStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, DetectableGameStore, LibraryApplicationStore, RTCConnectionStore, RunningGameStore, SelectedChannelStore, UserSettingsProtoStore);
    const items = [UserSettingsProtoStore];
    this.syncWith(items, handleRunningGamesChange);
  }
  getActivities() {
    return obj;
  }
}
const prototype = ActivityTrackingStore.prototype;
ActivityTrackingStore.displayName = "ActivityTrackingStore";
let obj2 = {
  RUNNING_GAMES_CHANGE() {
    handleRunningGamesChange();
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const tmp = c16;
    if (tmp) {
      return false;
    } else {
      const _Object = Object;
      const keys = Object.keys(obj);
      const tmp6 = keys[Symbol.iterator]();
      while (tmp6 !== undefined) {
        let tmp12 = updateActivity(obj[tmp8]);
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
      obj[arg0.applicationId].token = tmp;
      const Storage = Storage2.Storage;
      const result = Storage.set(ActivityTrackingStore_str, tmp2);
    }
  },
  ACTIVITY_UPDATE_FAIL: function handleActivityUpdateFail(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      obj[arg0.applicationId].token = null;
      obj[arg0.applicationId].updatedAt = null;
      const Storage = Storage2.Storage;
      const result = Storage.set(ActivityTrackingStore_str, tmp);
    }
  }
};
const activityTrackingStore = new ActivityTrackingStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("stores/ActivityTrackingStore.tsx");

export default activityTrackingStore;