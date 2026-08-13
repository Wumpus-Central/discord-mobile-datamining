// discord_app/stores/LocalActivityStore.tsx
import _slicedToArray from "_slicedToArray";
import participantFromServer from "participantFromServer";
import addApplication from "addApplication";
import initialize from "initialize";
import updateActivities from "updateActivities";
import upsertAccount from "upsertAccount";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import reset from "reset";
import ensureGuildLoaded from "ensureGuildLoaded";
import gameFromServer from "gameFromServer";
import makeTwitchRequest from "makeTwitchRequest";
import handleConnectionOpen from "handleConnectionOpen";
import handleUpdate from "handleUpdate";
import ME from "ME";
import { Store } from "initialize";
import { isUndefinedOrNull } from "../../_runtime/00659_isUndefinedOrNull.js";

let closure_16;
let closure_17;
let closure_18;
const require = arg1;
function updateActivities() {
  let id;
  const items = [];
  const CustomStatusSetting = items(streamerActiveStreamMetadata[14]).CustomStatusSetting;
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
    let tmpResult = tmp(tmp2[15]);
    items.push(tmpResult.getActivityFromCustomStatus(setting));
  }
  const items1 = [...updateActivities.getActivities()];
  items.push.apply(items1);
  stream = stream.getStream();
  if (null != stream) {
    let obj = { type: null };
    obj[0] = constants.STREAMING;
    const merged = Object.assign(stream);
    items.push(obj);
  }
  const set = new Set();
  let arr2 = set(tmp2[16]);
  const item = arr2.forEach(closure_20, (arg0) => {
    let tmp;
    [, tmp] = arg0;
    if (null != tmp.application_id) {
      set.add(tmp.name);
      items.push(tmp);
    }
  });
  const tmp24 = null != currentUserActiveStream.getCurrentUserActiveStream();
  visibleGame = visibleGame.getVisibleGame();
  if (tmp24) {
    streamerActiveStreamMetadata = currentUserActiveStream.getStreamerActiveStreamMetadata();
    const visibleRunningGames = visibleGame.getVisibleRunningGames();
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
      if (null == c21) {
        let start = tmp29.start;
        if (start == null) {
          const _Date3 = Date;
          start = Date.now();
        }
        c21 = start;
        tmp26 = tmp29;
      }
    } else {
      c21 = null;
      tmp26 = visibleGame;
    }
  } else {
    c21 = null;
    tmp26 = visibleGame;
  }
  let tmp35 = null != tmp26 && null != tmp26.name;
  if (tmp35) {
    let hasItem = set.has(tmp26.name);
    if (!hasItem) {
      tmpResult = tmp(tmp2[17]);
      const items2 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(remoteActivities.getRemoteActivities(), arraySpreadResult);
      hasItem = tmpResult.doesGameHaveRichPresence(tmp26, items2);
    }
    tmp35 = hasItem;
  }
  if (null != tmp26) {
    if (null != tmp26.name) {
      if (!tmp35) {
        if (!tmp43) {
          const findGameResult = gameFromServer.findGame(tmp26);
          obj = { type: null, name: null, application_id: null, timestamps: null };
          obj[0] = constants.PLAYING;
          ({ name: obj9[1], id } = tmp26);
          if (id == null) {
            let id1;
            if (findGameResult != null) {
              id1 = findGameResult.id;
            }
            id = id1;
          }
          obj[2] = id;
          let start2 = c21;
          if (c21 == null) {
            start2 = tmp26.start;
          }
          const obj1 = { start: null };
          obj1[0] = start2;
          obj[3] = obj1;
          const merged1 = Object.assign(tmp(tmp2[18]).maybeAddAdditionalGameMetadata(tmp26));
          items.push(obj);
          const tmpResult1 = tmp(tmp2[18]);
        }
      }
    }
  }
  activity = activity.getActivity();
  if (null != activity) {
    const obj2 = { type: null };
    obj2[0] = constants.LISTENING;
    const merged2 = Object.assign(activity);
    arr2 = items.push(obj2);
  }
}
({ ActivityFlags: closure_16, ActivityGamePlatforms: closure_17, ActivityTypes: closure_18 } = ME);
let closure_19 = [];
let closure_20 = {};
let c21 = null;
class LocalActivityStore extends Store {
}
const prototype = LocalActivityStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(addApplication, reset, ensureGuildLoaded, participantFromServer, makeTwitchRequest, updateActivities, gameFromServer, initialize, handleConnectionOpen, handleUpdate, upsertAccount, handleConnectionClosedOrResumed);
  const items = [updateActivities];
  this.syncWith(items, () => {
    callback();
  });
};
prototype["getActivities"] = function getActivities() {
  return closure_19;
};
prototype["getPrimaryActivity"] = function getPrimaryActivity() {
  return closure_19[0];
};
prototype["getApplicationActivity"] = function getApplicationActivity(arg0) {
  let closure_0 = arg0;
  return this.findActivity((application_id) => application_id.application_id === closure_0);
};
prototype["getCustomStatusActivity"] = function getCustomStatusActivity() {
  return this.findActivity((type) => type.type === constants.CUSTOM_STATUS);
};
prototype["findActivity"] = function findActivity(participantFromServer) {
  return closure_19.find(participantFromServer);
};
prototype["getApplicationActivities"] = function getApplicationActivities() {
  return closure_20;
};
prototype["getActivityForPID"] = function getActivityForPID(arg0) {
  const values = Object.values(closure_20);
  const obj = values[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    if (tmp4[0] === arg0) {
      let tmp6 = obj;
      obj.return();
      return tmp5;
    }
  }
  return null;
};
LocalActivityStore.displayName = "LocalActivityStore";
const localActivityStore = new LocalActivityStore(require("dispatcher"), {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const obj = {};
    const merged = Object.assign(localActivities.localActivities);
    updateActivities();
  },
  START_SESSION: function handleStartSession() {
    let closure_20 = {};
    updateActivities();
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    let activity;
    let partyPrivacy;
    let pid;
    let socketId;
    ({ socketId, pid, activity, partyPrivacy } = arg0);
    const items = [pid, activity, partyPrivacy];
    if (isUndefinedOrNull(table[socketId], items)) {
      return false;
    } else {
      if (null != activity) {
        const items1 = [pid, activity, partyPrivacy];
        table[socketId] = items1;
      } else {
        delete tmp[tmp2];
      }
      updateActivities();
    }
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
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
      let tmp8;
      let tmp9;
      let obj = {};
      let flag = false;
      const entries = Object.entries(obj);
      while (tmp2 !== undefined) {
        let tmp4 = callback2;
        let tmp5 = callback2(tmp3, 2);
        let first = tmp5[0];
        let tmp7 = callback2(tmp5[1], 3);
        [tmp8, tmp9] = tmp7;
        let tmp10 = tmp9;
        let tmp11 = tmp7[2];
        let num = tmp9.flags;
        if (num == null) {
          num = 0;
        }
        let tmp12 = num;
        let tmp13 = callback;
        let tmp14 = dependencyMap;
        let obj2 = callback(10401);
        let tmp15 = tmp9;
        let obj3 = callback(1403);
        let num2;
        if (tmp10 != null) {
          num2 = tmp10.flags;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let tmp16 = constants;
        let tmp18 = tmp9;
        let tmp19 = constants2;
        let hasFlagResult = obj3.hasFlag(num2, constants.INSTANCE);
        let tmp13Result = tmp13(10401);
        let tmp20 = tmp11;
        let tmp21 = obj2;
        let tmp22 = tmp10;
        let activityFlags = obj2.computeActivityFlags(tmp15, hasFlagResult, tmp10.platform === constants2.EMBEDDED, tmp13Result.isContextlessEmbeddedActivity(tmp10), tmp11);
        let tmp25 = num;
        if (activityFlags !== tmp12) {
          let tmp30 = first;
          let tmp31 = tmp8;
          let items = [tmp8, , ];
          obj = {};
          let tmp32 = tmp9;
          let tmp33 = obj;
          let merged = Object.assign(tmp10);
          let tmp35 = activityFlags;
          obj.flags = tmp24;
          items[1] = obj;
          let tmp36 = tmp11;
          items[2] = tmp11;
          obj[first] = items;
          flag = true;
        } else {
          let tmp26 = first;
          let tmp27 = tmp8;
          let items1 = [tmp8, , ];
          let tmp28 = tmp9;
          items1[1] = tmp10;
          let tmp29 = tmp11;
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
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities
});
const result = require("addApplication").fileFinishedImporting("stores/LocalActivityStore.tsx");

export default localActivityStore;