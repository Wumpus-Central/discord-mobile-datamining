// === Module 6570: SelfPresenceStore ===

// Module 6570 (SelfPresenceStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef1342 from "module_1342" /* 1342 */;
import UserSettings from "UserSettings" /* 4839 */;
import ActivityTypes from "ActivityTypes" /* 5762 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 7580 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10762 */;
import SpotifyStore from "SpotifyStore" /* 6571 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import DetectableGameStore from "DetectableGameStore" /* 2032 */;
import IdleStore from "IdleStore" /* 6705 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2036 */;
import LocalActivityStore from "LocalActivityStore" /* 11524 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import SessionsStore from "SessionsStore" /* 5766 */;

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
      if (nextResult.type === ActivityTypes.ActivityTypes.PLAYING) {
        let arr = items1.push(tmp4);
      } else {
        let arr2 = items.push(tmp4);
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
function shouldShowActivity(type) {
  type = type.type;
  if (ActivityTypes.ActivityTypes.LISTENING === type) {
    if (isListeningOnSpotifyDefault(type)) {
      let shouldShowActivityResult = SpotifyStore.shouldShowActivity();
    } else {
      shouldShowActivityResult = null != type.application_id;
      if (shouldShowActivityResult) {
        shouldShowActivityResult = LibraryApplicationUtils.shouldShareApplicationActivity(type.application_id, LibraryApplicationStore);
        const tmpResult = LibraryApplicationUtils;
      }
    }
    return shouldShowActivityResult;
  } else if (ActivityTypes.ActivityTypes.PLAYING === type) {
    if (null != type.application_id) {
      let result = LibraryApplicationUtils.shouldShareApplicationActivity(type.application_id, LibraryApplicationStore);
      const tmpResult4 = LibraryApplicationUtils;
    } else {
      const searchGamesByNameResult = DetectableGameStore.searchGamesByName(type.name);
      if (1 === searchGamesByNameResult.length) {
        result = LibraryApplicationUtils.shouldShareApplicationActivity(searchGamesByNameResult[0], LibraryApplicationStore);
        const tmpResult5 = LibraryApplicationUtils;
      } else {
        const ShowCurrentGame = UserSettings.ShowCurrentGame;
        result = ShowCurrentGame.getSetting();
      }
    }
    return result;
  } else {
    if (ActivityTypes.ActivityTypes.STREAMING !== type) {
      const WATCHING = ActivityTypes.ActivityTypes.WATCHING;
    }
    let result1 = null == type.application_id;
    if (!result1) {
      result1 = LibraryApplicationUtils.shouldShareApplicationActivity(type.application_id, LibraryApplicationStore);
      const tmpResult6 = LibraryApplicationUtils;
    }
    return result1;
  }
}
function handleUpdate() {
  num = IdleStore.getIdleSince();
  if (num == null) {
    num = 0;
  }
  closure_20 = IdleStore.isAFK();
  if (c21) {
    IDLE = closure_16;
    let ONLINE = closure_16;
  } else if (c14) {
    const INVISIBLE = StatusTypes.INVISIBLE;
    IDLE = INVISIBLE;
    ONLINE = INVISIBLE;
  } else {
    const StatusSetting = UserSettings.StatusSetting;
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
  if (!c21) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = LocalActivityStore.getActivities();
      found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    if (!_modDef1342(found, found)) {
      closure_19 = filterPlayingActivities(found);
      flag = true;
    }
    remoteActivities = SessionsStore.getRemoteActivities();
    if (remoteActivities !== remoteActivities) {
      flag = true;
    }
    hiddenActivities = SessionsStore.getHiddenActivities();
    if (flag) {
      const items = [];
      const tmp12Result = _modDef12;
      HermesBuiltin.arraySpread(remoteActivities.filter((type) => type.type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS), HermesBuiltin.arraySpread(found, 0));
      const arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
      const tmp12ResultResult = tmp12Result(items.sort(sortActivity));
      const iter = tmp12Result(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
      closure_25 = filterPlayingActivities(tmp12Result(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value());
      valueResult = tmp12Result(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value();
    }
  }
  found = [];
}
function handleConnectionOpen() {
  c21 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = PresenceStore.setCurrentUserOnConnectionOpen(IDLE, valueResult);
}
const sortActivity = fn(5761).sortActivity;
const Constants = fn(1072);
const StatusTypes = Constants.StatusTypes;
const AppStates = Constants.AppStates;
let c14 = false;
({ ONLINE: IDLE, UNKNOWN: closure_16 } = StatusTypes);
let found = [];
let activities = [];
const afk = false;
let c21 = true;
let remoteActivities = Object.freeze([]);
let hiddenActivities = Object.freeze([]);
let closure_25 = [];
const Store = initializeDefault.Store;
class SelfPresenceStore extends Store {
}
const prototype = SelfPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(DetectableGameStore, IdleStore, LibraryApplicationStore, LocalActivityStore, PresenceStore, SessionsStore, SpotifyStore, UserSettingsProtoStore);
  const items = [LocalActivityStore];
  this.syncWith(items, handleUpdate);
};
prototype["getLocalPresence"] = function getLocalPresence() {
  return { status: IDLE, since: num, activities, afk };
};
prototype["getStatus"] = function getStatus() {
  return IDLE;
};
prototype["getActivities"] = function getActivities() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  return flag ? closure_25 : closure_19;
};
prototype["getUnfilteredActivities"] = function getUnfilteredActivities() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  return flag ? valueResult : found;
};
prototype["getHiddenActivities"] = function getHiddenActivities() {
  return hiddenActivities;
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
prototype["findActivity"] = function findActivity(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  activities = this.getActivities(flag);
  return activities.find(arg0);
};
SelfPresenceStore.displayName = "SelfPresenceStore";
const selfPresenceStore = new SelfPresenceStore(DispatcherDefault, {
  START_SESSION: handleUpdate,
  CONNECTION_OPEN: function handleConnectionOpenTracked() {
    c21 = false;
    const UNKNOWN = StatusTypes.UNKNOWN;
    handleUpdate();
    const result = PresenceStore.setCurrentUserOnConnectionOpen(IDLE, valueResult);
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
    c21 = true;
    closure_16 = IDLE;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    c14 = false;
    handleUpdate();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === AppStates.ACTIVE) {
      if (c14) {
        c14 = false;
        handleUpdate();
      }
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;