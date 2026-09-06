// discord_app/stores/LocalActivityStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import _modDef1332 from "../../_runtime/metro/01332__.js";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import ActivityFlagUtils from "../modules/activities/utils/ActivityFlagUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../modules/activities/EmbeddedActivitiesStore.tsx";
import ApplicationStore from "../modules/applications/ApplicationStore.tsx";
import RunningGameStore from "../modules/game_detection/RunningGameStore.native.tsx";
import FirstPartyRichPresenceStore from "../modules/rich_presence/FirstPartyRichPresenceStore.tsx";
import SpotifyStore from "../modules/spotify/SpotifyStore.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import ApplicationStreamingStore from "ApplicationStreamingStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import DetectableGameStore from "DetectableGameStore.tsx";
import ExternalStreamingStore from "ExternalStreamingStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import SessionsStore from "SessionsStore.tsx";

require = fn;
function updateActivities() {
  items = [];
  const CustomStatusSetting = UserSettings.CustomStatusSetting;
  const setting = CustomStatusSetting.getSetting();
  let tmp4 = null != setting;
  if (tmp4) {
    let tmp5 = "0" === setting.expiresAtMs;
    if (!tmp5) {
      const _Date = Date;
      const _Number = Number;
      const date = new Date(Number(setting.expiresAtMs));
      const _Date2 = Date;
      const time = date.getTime();
      const date1 = new Date();
      tmp5 = time - date1.getTime() > 0;
    }
    tmp4 = tmp5;
  }
  if (tmp4) {
    let tmpResult = tmp(11110);
    items.push(tmpResult.getActivityFromCustomStatus(setting));
  }
  const items1 = [...FirstPartyRichPresenceStore.getActivities()];
  items.push.apply(items1);
  const stream = ExternalStreamingStore.getStream();
  if (null != stream) {
    let obj = { type: constants.STREAMING };
    const merged = Object.assign(stream);
    items.push(obj);
  }
  const set = new Set();
  let arr2 = _modDef12;
  const item = arr2.forEach(closure_20, (arg0) => {
    [, tmp] = arg0;
    if (null != tmp.application_id) {
      set.add(tmp.name);
      items.push(tmp);
    }
  });
  const tmp24 = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  const visibleGame = RunningGameStore.getVisibleGame();
  if (tmp24) {
    const streamerActiveStreamMetadata = ApplicationStreamingStore.getStreamerActiveStreamMetadata();
    const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
    let pid;
    if (streamerActiveStreamMetadata != null) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let tmp29 = null;
    if (null != pid) {
      let found = visibleRunningGames.find((pid) => pid.pid === streamerActiveStreamMetadata.pid);
      if (found == null) {
        found = null;
      }
      tmp29 = found;
    }
    let tmp31 = null == tmp29;
    if (tmp31) {
      id = undefined;
      if (streamerActiveStreamMetadata != null) {
        id = streamerActiveStreamMetadata.id;
      }
      tmp31 = null != id;
    }
    if (tmp31) {
      let found1 = visibleRunningGames.find((id) => id.id === streamerActiveStreamMetadata.id);
      if (found1 == null) {
        found1 = null;
      }
      tmp29 = found1;
    }
    if (null != tmp29) {
      let tmp26 = tmp29;
      if (null == c25) {
        let start = tmp29.start;
        if (start == null) {
          const _Date3 = Date;
          start = Date.now();
        }
        c25 = start;
        tmp26 = tmp29;
      }
    } else {
      c25 = null;
      tmp26 = visibleGame;
    }
  } else {
    c25 = null;
    tmp26 = visibleGame;
  }
  let tmp35 = null != tmp26 && null != tmp26.name;
  if (tmp35) {
    let hasItem = set.has(tmp26.name);
    if (!hasItem) {
      tmpResult = tmp(11461);
      const items2 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(SessionsStore.getRemoteActivities(), arraySpreadResult);
      hasItem = tmpResult.doesGameHaveRichPresence(tmp26, items2);
    }
    tmp35 = hasItem;
  }
  if (null != tmp26) {
    if (null != tmp26.name) {
      if (!tmp35) {
        if (!tmp43) {
          const findGameResult = DetectableGameStore.findGame(tmp26);
          obj = { type: constants.PLAYING, name: null, application_id: null, timestamps: null };
          ({ name: obj9.name, id } = tmp26);
          if (id == null) {
            let id1;
            if (findGameResult != null) {
              id1 = findGameResult.id;
            }
            id = id1;
          }
          obj.application_id = id;
          let start2 = c25;
          if (c25 == null) {
            start2 = tmp26.start;
          }
          const obj1 = { start: start2 };
          obj.timestamps = obj1;
          const merged1 = Object.assign(tmp(4690).maybeAddAdditionalGameMetadata(tmp26));
          items.push(obj);
          const tmpResult1 = tmp(4690);
        }
      }
    }
  }
  const activity = SpotifyStore.getActivity();
  if (null != activity) {
    const obj2 = { type: constants.LISTENING };
    const merged2 = Object.assign(activity);
    arr2 = items.push(obj2);
  }
}
const Constants = fn(1074);
({ ActivityFlags: closure_16, ActivityGamePlatforms: closure_17, ActivityTypes: closure_18 } = Constants);
let items = [];
const dependencyMap = {};
let closure_21 = {};
let c22 = 0;
const dependencyMap2 = {};
const dependencyMap3 = {};
let c25 = null;
const Store = initializeDefault.Store;
class LocalActivityStore extends Store {}
const prototype = LocalActivityStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    ApplicationStore,
    ApplicationStreamingStore,
    ChannelStore,
    EmbeddedActivitiesStore,
    ExternalStreamingStore,
    FirstPartyRichPresenceStore,
    DetectableGameStore,
    RunningGameStore,
    SelectedChannelStore,
    SessionsStore,
    SpotifyStore,
    UserSettingsProtoStore,
  );
  items = [FirstPartyRichPresenceStore];
  this.syncWith(items, () => {
    updateActivities();
  });
};
prototype["getActivities"] = function getActivities() {
  return items;
};
prototype["getPrimaryActivity"] = function getPrimaryActivity() {
  return items[0];
};
prototype["getApplicationActivity"] = function getApplicationActivity(arg0) {
  closure_0 = arg0;
  return this.findActivity((application_id) => application_id.application_id === closure_0);
};
prototype["getCustomStatusActivity"] = function getCustomStatusActivity() {
  return this.findActivity((type) => type.type === constants.CUSTOM_STATUS);
};
prototype["findActivity"] = function findActivity(_messages) {
  return items.find(_messages);
};
prototype["getApplicationActivities"] = function getApplicationActivities() {
  return closure_20;
};
prototype["getActivityForPID"] = function getActivityForPID(arg0) {
  const values = Object.values(closure_20);
  const obj = values[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    if (tmp4[0] === arg0) {
      obj.return();
      return tmp5;
    }
  }
  return null;
};
prototype["getApplicationIdForPID"] = function getApplicationIdForPID(pid) {
  const entries = Object.entries(closure_21);
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let tmp7 = _slicedToArray(tmp5[1], 2);
    if (tmp7[0] === pid) {
      obj.return();
      return tmp8;
    }
    continue;
  }
};
LocalActivityStore.displayName = "LocalActivityStore";
const localActivityStore = new LocalActivityStore(DispatcherDefault, {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const merged = Object.assign(localActivities.localActivities);
    closure_20 = {};
    updateActivities();
  },
  START_SESSION: function handleStartSession() {
    closure_20 = {};
    closure_21 = {};
    c22 = 0;
    closure_23 = {};
    closure_24 = {};
    updateActivities();
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    ({ socketId, pid, applicationId, activity, partyPrivacy } = arg0);
    closure_0 = undefined;
    let tmp3 = dependencyMap2[socketId];
    if (null == tmp3) {
      const sum = c22 + 1;
      c22 = sum;
      dependencyMap2[socketId] = sum;
      tmp3 = sum;
    }
    let flag = false;
    if (null != pid) {
      closure_0 = tmp8;
      let someResult = null != tmp8;
      if (someResult) {
        const _Object = Object;
        const keys = Object.keys(closure_21);
        someResult = keys.some((item) => closure_23[item] === closure_0);
      }
      flag = false;
      if (tmp12) {
        flag = tmp3 !== tmp8;
        dependencyMap3[pid] = tmp3;
      }
      tmp12 = null == dependencyMap3[pid] || tmp3 >= dependencyMap3[pid] || !someResult;
    }
    if (null == activity) {
      let tmp17 = null == dependencyMap[socketId];
    } else {
      items = [pid, activity, partyPrivacy];
      tmp17 = _modDef1332(dependencyMap[socketId], items);
    }
    let tmp19 = null == applicationId;
    if (!tmp19) {
      const items1 = [pid, applicationId];
      tmp19 = _modDef1332(closure_21[socketId], items1);
    }
    if (tmp17) {
      if (tmp19) {
        if (!flag) {
          return false;
        }
      }
    }
    if (null != applicationId) {
      const items2 = [pid, applicationId];
      closure_21[socketId] = items2;
    }
    if (null != activity) {
      const items3 = [pid, activity, partyPrivacy];
      dependencyMap[socketId] = items3;
    } else {
      delete tmp[tmp2];
    }
    updateActivities();
  },
  RPC_APP_CONNECTED: function handleRPCAppConnected(socketId) {
    const sum = c22 + 1;
    c22 = sum;
    closure_23[socketId.socketId] = sum;
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    delete tmp[tmp2];
    delete tmp[tmp2];
    updateActivities();
  },
  RUNNING_GAMES_CHANGE: updateActivities,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: updateActivities,
  SPOTIFY_PLAYER_STATE: updateActivities,
  SPOTIFY_PLAYER_PLAY: updateActivities,
  STREAMING_UPDATE: updateActivities,
  USER_CONNECTIONS_UPDATE: updateActivities,
  STREAM_START: updateActivities,
  STREAM_STOP: updateActivities,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    (function recalculateActivityPartyPrivacyFlags() {
      obj = {};
      let flag = false;
      const entries = Object.entries(obj);
      while (tmp2 !== undefined) {
        let tmp5 = _slicedToArray(tmp3, 2);
        let first = tmp5[0];
        let tmp7 = _slicedToArray(tmp5[1], 3);
        [tmp8, tmp9] = tmp7;
        let tmp10 = tmp9;
        let tmp11 = tmp7[2];
        let num = tmp9.flags;
        if (num == null) {
          num = 0;
        }
        let tmp12 = num;
        let tmp13 = require;
        let obj2 = ActivityFlagUtils;
        let tmp15 = tmp9;
        let obj3 = FlagUtils;
        let num2;
        if (tmp10 != null) {
          num2 = tmp10.flags;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let hasFlagResult = obj3.hasFlag(num2, constants.INSTANCE);
        let tmp13Result = tmp13(11462);
        let activityFlags = obj2.computeActivityFlags(
          tmp15,
          hasFlagResult,
          tmp10.platform === constants2.EMBEDDED,
          tmp13Result.isContextlessEmbeddedActivity(tmp10),
          tmp11,
        );
        if (activityFlags !== tmp12) {
          items = [tmp8, ,];
          obj = {};
          let merged = Object.assign(tmp10);
          obj.flags = tmp24;
          items[1] = obj;
          items[2] = tmp11;
          obj[first] = items;
          flag = true;
        } else {
          let items1 = [tmp8, ,];
          items1[1] = tmp10;
          items1[2] = tmp11;
          obj[first] = items1;
        }
        continue;
      }
      let str = "NO_CHANGES";
      if (flag) {
        str = "APPLICATION_ACTIVITIES_CHANGED";
      }
      return str;
    })();
    updateActivities();
  },
  EMBEDDED_ACTIVITY_CLOSE: updateActivities,
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities,
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/LocalActivityStore.tsx");

export default localActivityStore;
