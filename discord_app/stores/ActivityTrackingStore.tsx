// === Module 13292: stopActivity ===

// Module 13292 (stopActivity)
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import removeExecutablePathPrefix from "removeExecutablePathPrefix" /* 4642 */;
import _modDef10673 from "module_10673" /* 10673 */;
import initialize from "initialize" /* 4504 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import gameFromServer from "gameFromServer" /* 4509 */;
import setLibraryApplications from "setLibraryApplications" /* 4512 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import { Distributors } from "ME" /* 676 */;
import { Storage } from "Storage" /* 595 */;

require = fn;
function stopActivity(applicationId, flag) {
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
  const _require = applicationId;
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
  obj = _require(4520);
  const result = obj.shouldShareApplicationActivity(applicationId.applicationId, closure_7);
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  sessionId = sessionId.getSessionId();
  mediaSessionId = mediaSessionId.getMediaSessionId();
  obj = { applicationId: applicationId.applicationId, distributor: null, shareActivity: null, token: null, duration: null, closed: null, exePath: null, voiceChannelId: null, sessionId: null, mediaSessionId: null };
  if (applicationId.isDiscordApplication) {
    let distributor = Distributors.DISCORD;
  } else {
    distributor = applicationId.distributor;
  }
  obj[1] = distributor;
  obj[2] = result;
  obj[3] = applicationId.token;
  obj[4] = Math.floor(num / 1000);
  obj[5] = flag;
  obj[6] = applicationId.exePath;
  obj[7] = voiceChannelId;
  obj[8] = sessionId;
  obj[9] = mediaSessionId;
  _modDef10673.updateActivity(obj);
  applicationId.updatedAt = timestamp;
  if (null == dependencyMap[applicationId.applicationId]) {
    const interval = new tmp3(4259).Interval();
    tmp11[applicationId.applicationId] = interval;
    interval.start(closure_12, () => {
      updateActivity(closure_0);
    });
  }
  if (!flag) {
    obj[applicationId.applicationId] = applicationId;
    const Storage = tmp3(595).Storage;
    const result1 = Storage.set(ActivityTrackingStore, obj);
  }
}
function handleRunningGamesChange(flag) {
  if (flag === undefined) {
    flag = true;
  }
  visibleRunningGames = visibleRunningGames.getVisibleRunningGames();
  const set = new Set();
  const iter = visibleRunningGames[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let findGameResult = closure_6.findGame(nextResult);
    let tmp6 = findGameResult;
    if (null != findGameResult) {
      let addResult = set.add(tmp6.id);
      if (!(tmp6.id in obj)) {
        obj = { applicationId: null, updatedAt: null, distributor: null, exePath: null };
        obj[0] = tmp6.id;
        let _Date = Date;
        obj[1] = Date.now();
        obj[2] = tmp3.distributor;
        let obj3 = removeExecutablePathPrefix;
        let str = tmp3.exePath;
        if (str == null) {
          str = "";
        }
        obj[3] = obj3.removeExecutablePathPrefix(str);
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
const ActivityTrackingStore = "ActivityTrackingStore";
let closure_12 = 30 * obj132Default.Millis.MINUTE;
let closure_13 = 5 * obj132Default.Millis.MINUTE;
let obj = Storage.get("ActivityTrackingStore");
if (obj == null) {
  obj = {};
}
let closure_15 = {};
let c16 = false;
const Store = initializeDefault.Store;
class ActivityTrackingStore extends Store {
}
const prototype = ActivityTrackingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_6, closure_7, closure_8, closure_3, closure_9, closure_4);
  const items = [closure_4];
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
const activityTrackingStore = new ActivityTrackingStore(dispatcherDefault, obj);
let result = require("obj132").fileFinishedImporting("stores/ActivityTrackingStore.tsx");

export default activityTrackingStore;