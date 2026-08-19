// === Module 7250: filterPlayingActivities ===

// Module 7250 (filterPlayingActivities)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import isUndefinedOrNullDefault from "isUndefinedOrNull" /* 659 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hasFlag from "hasFlag" /* 1403 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import getComboId from "getComboId" /* 4520 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 7261 */;
import upsertAccount from "upsertAccount" /* 7241 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import gameFromServer from "gameFromServer" /* 4509 */;
import checkIdleAFK from "checkIdleAFK" /* 4974 */;
import setLibraryApplications from "setLibraryApplications" /* 4512 */;
import updateActivities from "updateActivities" /* 7251 */;
import sortActivity from "sortActivity" /* 4559 */;
import { sortActivity } from "sortActivity" /* 4559 */;
import handleUpdate2 from "handleUpdate" /* 4541 */;
import ME from "ME" /* 676 */;

require = fn;
function filterPlayingActivities(arg0) {
  if (0 === arg0.length) {
    return arg0;
  } else {
    const items = [];
    const items1 = [];
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (nextResult.type === constants2.PLAYING) {
        let arr = items1.push(tmp4);
      } else {
        arr = items.push(tmp4);
      }
      continue;
    }
    if (0 === items1.length) {
      return arg0;
    } else if (1 === items1.length) {
      return arg0;
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items1, 0);
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items, 0)] = items2.sort(sortActivity)[0];
      return items3.sort(sortActivity);
    }
  }
}
function shouldShowActivity(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  if (obj.hasFlag(num, constants.CONTEXTLESS)) {
    return true;
  } else {
    const type = flags.type;
    if (constants2.LISTENING === type) {
      if (isListeningOnSpotifyDefault(flags)) {
        let shouldShowActivityResult = closure_3.shouldShowActivity();
      } else {
        shouldShowActivityResult = null != flags.application_id;
        if (shouldShowActivityResult) {
          let tmpResult = getComboId;
          shouldShowActivityResult = tmpResult.shouldShareApplicationActivity(flags.application_id, closure_7);
        }
      }
      return shouldShowActivityResult;
    } else if (constants2.PLAYING === type) {
      if (null != flags.application_id) {
        tmpResult = getComboId;
        let result = tmpResult.shouldShareApplicationActivity(flags.application_id, closure_7);
      } else {
        const searchGamesByNameResult = closure_5.searchGamesByName(flags.name);
        if (1 === searchGamesByNameResult.length) {
          result = getComboId.shouldShareApplicationActivity(searchGamesByNameResult[0], closure_7);
          const tmpResult1 = getComboId;
        } else {
          const ShowCurrentGame = explicitContentFromProto.ShowCurrentGame;
          result = ShowCurrentGame.getSetting();
        }
      }
      return result;
    } else {
      if (constants2.STREAMING !== type) {
        const WATCHING = constants2.WATCHING;
      }
      let result1 = null == flags.application_id;
      if (!result1) {
        result1 = getComboId.shouldShareApplicationActivity(flags.application_id, closure_7);
        const tmpResult2 = getComboId;
      }
      return result1;
    }
  }
  obj = hasFlag;
}
function handleUpdate() {
  let num = idleSince.getIdleSince();
  if (num == null) {
    num = 0;
  }
  closure_22 = idleSince.isAFK();
  if (c23) {
    let IDLE = closure_18;
    let ONLINE = closure_18;
  } else if (c16) {
    const INVISIBLE = StatusTypes.INVISIBLE;
    IDLE = INVISIBLE;
    ONLINE = INVISIBLE;
  } else {
    const StatusSetting = explicitContentFromProto.StatusSetting;
    ONLINE = StatusSetting.getSetting();
    if (ONLINE === StatusTypes.UNKNOWN) {
      ONLINE = StatusTypes.ONLINE;
    }
    IDLE = ONLINE;
  }
  let tmp7 = ONLINE === StatusTypes.ONLINE;
  if (tmp7) {
    tmp7 = num > 0;
  }
  if (tmp7) {
    IDLE = StatusTypes.IDLE;
  }
  if (!c23) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = activities.getActivities();
      let found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    if (!isUndefinedOrNullDefault(found, found)) {
      closure_21 = filterPlayingActivities(found);
      flag = true;
    }
    remoteActivities = remoteActivities.getRemoteActivities();
    if (remoteActivities !== remoteActivities) {
      flag = true;
    }
    const hiddenActivities = remoteActivities.getHiddenActivities();
    if (flag) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(remoteActivities.filter((item, index) => item.type !== constants.CUSTOM_STATUS), arraySpreadResult);
      const tmp12Result = applyDefault;
      const tmp12ResultResult = applyDefault(items.sort(sortActivity));
      const iter = applyDefault(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
      closure_27 = filterPlayingActivities(applyDefault(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value());
      const valueResult = applyDefault(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value();
    }
  }
  found = [];
}
function handleConnectionOpen() {
  c23 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = authStore.setCurrentUserOnConnectionOpen(closure_17, closure_26);
}
const StatusTypes = ME.StatusTypes;
({ ActivityFlags: map1, ActivityTypes: closure_14, AppStates: closure_15 } = ME);
let c16 = false;
({ ONLINE: closure_17, UNKNOWN: closure_18 } = StatusTypes);
let c19 = 0;
let closure_20 = [];
let closure_21 = [];
let c22 = false;
let c23 = true;
let closure_24 = Object.freeze([]);
let closure_25 = Object.freeze([]);
let closure_26 = [];
let closure_27 = [];
const Store = initializeDefault.Store;
class SelfPresenceStore extends Store {
}
const prototype = SelfPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_6, closure_7, closure_8, closure_9, closure_11, closure_3, closure_4);
  const items = [closure_8];
  this.syncWith(items, handleUpdate);
};
prototype["getLocalPresence"] = function getLocalPresence() {
  return { status: closure_17, since: c19, activities: closure_21, afk: c22 };
};
prototype["getStatus"] = function getStatus() {
  return closure_17;
};
prototype["getActivities"] = function getActivities() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  return flag ? closure_27 : closure_21;
};
prototype["getUnfilteredActivities"] = function getUnfilteredActivities() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  return flag ? closure_26 : closure_20;
};
prototype["getHiddenActivities"] = function getHiddenActivities() {
  return closure_25;
};
prototype["getPrimaryActivity"] = function getPrimaryActivity() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  return this.getActivities(flag)[0];
};
prototype["getApplicationActivity"] = function getApplicationActivity(arg0) {
  closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  return this.findActivity((application_id) => application_id.application_id === closure_0, flag);
};
prototype["findActivity"] = function findActivity(closure_4) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const activities = this.getActivities(flag);
  return activities.find(closure_4);
};
SelfPresenceStore.displayName = "SelfPresenceStore";
const selfPresenceStore = new SelfPresenceStore(dispatcherDefault, {
  START_SESSION: handleUpdate,
  CONNECTION_OPEN: function handleConnectionOpenTracked() {
    c23 = false;
    const UNKNOWN = StatusTypes.UNKNOWN;
    handleUpdate();
    const result = authStore.setCurrentUserOnConnectionOpen(closure_17, closure_26);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CONNECTION_CLOSED: handleUpdate,
  IDLE: handleUpdate,
  AFK: handleUpdate,
  RUNNING_GAMES_CHANGE: handleUpdate,
  STREAMING_UPDATE: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  LOCAL_ACTIVITY_UPDATE: handleUpdate,
  SPOTIFY_PLAYER_STATE: handleUpdate,
  SPOTIFY_PLAYER_PLAY: handleUpdate,
  USER_CONNECTIONS_UPDATE: handleUpdate,
  SESSIONS_REPLACE: handleUpdate,
  RPC_APP_DISCONNECTED: handleUpdate,
  LIBRARY_FETCH_SUCCESS: handleUpdate,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: handleUpdate,
  LOGOUT: function handleLogout() {
    c23 = true;
    closure_18 = closure_17;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    c16 = false;
    handleUpdate();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === constants3.ACTIVE) {
      if (c16) {
        c16 = false;
        handleUpdate();
      }
    }
    return false;
  }
});
let result = require("obj132").fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;