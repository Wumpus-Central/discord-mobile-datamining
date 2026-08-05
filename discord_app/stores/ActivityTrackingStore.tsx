// discord_app/stores/ActivityTrackingStore.tsx
import initialize from "initialize";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import fetchFingerprint from "fetchFingerprint";
import gameFromServer from "gameFromServer";
import setLibraryApplications from "setLibraryApplications";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import { Distributors } from "ME";
import { Storage } from "Storage";
import { Store } from "initialize";
import { Storage } from "../../discord_common/js/packages/storage/Storage.tsx";
import { ActivitiesActionCreators } from "../actions/ActivitiesActionCreators.tsx";
import { removeExecutablePathPrefix } from "../modules/game_detection/GameAnalyticsUtils.tsx";
import { getComboId } from "../utils/LibraryApplicationUtils.tsx";

const require = arg1;
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
  const Storage = Storage.Storage;
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
  let obj = _getComboId;
  const result = obj.shouldShareApplicationActivity(applicationId.applicationId, setLibraryApplications);
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
  ActivitiesActionCreators.updateActivity(obj);
  applicationId.updatedAt = timestamp;
  if (null == dependencyMap[applicationId.applicationId]) {
    const interval = new tmp3(4140).Interval();
    tmp11[applicationId.applicationId] = interval;
    interval.start(closure_12, () => {
      outer1_18(closure_0);
    });
  }
  if (!flag) {
    obj[applicationId.applicationId] = applicationId;
    const Storage = tmp3(595).Storage;
    const result1 = Storage.set(ActivityTrackingStore, obj);
  }
}
function handleRunningGamesChange(flag) {
  let obj;
  if (flag === undefined) {
    flag = true;
  }
  visibleRunningGames = visibleRunningGames.getVisibleRunningGames();
  const set = new Set();
  const iter = visibleRunningGames[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = gameFromServer;
    let findGameResult = gameFromServer.findGame(nextResult);
    let tmp6 = findGameResult;
    if (null != findGameResult) {
      let tmp19 = findGameResult;
      let addResult = set.add(tmp6.id);
      let tmp21 = obj;
      if (!(tmp6.id in obj)) {
        obj = { applicationId: null, updatedAt: null, distributor: null, exePath: null };
        let tmp8 = findGameResult;
        obj[0] = tmp6.id;
        let _Date = Date;
        let tmp7 = updateActivity;
        obj[1] = Date.now();
        let tmp9 = nextResult;
        obj[2] = tmp3.distributor;
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let obj3 = removeExecutablePathPrefix;
        let str = tmp3.exePath;
        if (str == null) {
          str = "";
        }
        obj[3] = obj3.removeExecutablePathPrefix(str);
        let tmp7Result = tmp7(obj);
      }
    }
    continue;
  }
  const keys = Object.keys(obj);
  for (const item10052 of keys) {
    let tmp14 = item10052;
    if (!set.has(item10052)) {
      let tmp15 = stopActivity;
      let tmp16 = obj;
      let tmp17 = item10052;
      let tmp18 = stopActivity(obj[tmp14], flag);
    }
    continue;
  }
}
function handleLogout() {
  const keys = Object.keys(obj);
  while (tmp2 !== undefined) {
    let tmp4 = stopActivity;
    let tmp5 = obj;
    let tmp6 = stopActivity(obj[tmp3]);
    continue;
  }
  let c16 = false;
}
const ActivityTrackingStore = "ActivityTrackingStore";
let closure_12 = 30 * require("set").Millis.MINUTE;
let closure_13 = 5 * require("set").Millis.MINUTE;
let obj = Storage.get("ActivityTrackingStore");
if (obj == null) {
  obj = {};
}
let closure_15 = {};
let c16 = false;
class ActivityTrackingStore extends Store {
}
const prototype = ActivityTrackingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, gameFromServer, setLibraryApplications, createRTCConnection, initialize, handleConnectionOpen, handleConnectionClosedOrResumed);
  const items = [handleConnectionClosedOrResumed];
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
        let tmp9 = updateActivity;
        let tmp10 = obj;
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
      const Storage = Storage.Storage;
      const result = Storage.set(ActivityTrackingStore, tmp2);
    }
  },
  ACTIVITY_UPDATE_FAIL: function handleActivityUpdateFail(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      tmp2.token = null;
      tmp2.updatedAt = null;
      const Storage = Storage.Storage;
      const result = Storage.set(ActivityTrackingStore, tmp);
    }
  }
};
const activityTrackingStore = new ActivityTrackingStore(require("dispatcher"), obj);
let result = require("fetchFingerprint").fileFinishedImporting("stores/ActivityTrackingStore.tsx");

export default activityTrackingStore;