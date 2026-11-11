// === Module 7252: SelfPresenceStore ===

// Module 7252 (SelfPresenceStore)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef1342 from "module_1342" /* 1342 */;
import UserSettings from "UserSettings" /* 5068 */;
import ActivityTypes from "ActivityTypes" /* 6006 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 8465 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10797 */;
import isGuildSpaceEmbeddedActivityDefault from "isGuildSpaceEmbeddedActivity" /* 15874 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5091 */;
import SpotifyStore from "SpotifyStore" /* 7226 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import DetectableGameStore from "DetectableGameStore" /* 2156 */;
import IdleStore from "IdleStore" /* 6978 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2160 */;
import LocalActivityStore from "LocalActivityStore" /* 7253 */;
import PresenceStore from "PresenceStore" /* 6005 */;
import SessionsStore from "SessionsStore" /* 6010 */;

require = fn;
function filterPlayingActivities(arg0) {
  if (0 === arg0.length) {
    return arg0;
  } else {
    items = [];
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
  if (isGuildSpaceEmbeddedActivityDefault(type)) {
    return false;
  } else {
    type = type.type;
    if (ActivityTypes.ActivityTypes.LISTENING === type) {
      if (isListeningOnSpotifyDefault(type)) {
        let shouldShowActivityResult = SpotifyStore.shouldShowActivity();
      } else {
        shouldShowActivityResult = null != type.application_id;
        if (shouldShowActivityResult) {
          shouldShowActivityResult = LibraryApplicationUtils.shouldShareApplicationActivity(type.application_id, LibraryApplicationStore);
          const tmp3Result = LibraryApplicationUtils;
        }
      }
      return shouldShowActivityResult;
    } else if (ActivityTypes.ActivityTypes.PLAYING === type) {
      if (null != type.application_id) {
        let result = LibraryApplicationUtils.shouldShareApplicationActivity(type.application_id, LibraryApplicationStore);
        const tmp3Result4 = LibraryApplicationUtils;
      } else {
        const searchGamesByNameResult = DetectableGameStore.searchGamesByName(type.name);
        if (1 === searchGamesByNameResult.length) {
          result = LibraryApplicationUtils.shouldShareApplicationActivity(searchGamesByNameResult[0], LibraryApplicationStore);
          const tmp3Result5 = LibraryApplicationUtils;
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
        const tmp3Result6 = LibraryApplicationUtils;
      }
      return result1;
    }
  }
}
function handleUpdate() {
  num = IdleStore.getIdleSince();
  if (num == null) {
    num = 0;
  }
  closure_22 = IdleStore.isAFK();
  if (c23) {
    IDLE = closure_18;
    let ONLINE = closure_18;
  } else if (c16) {
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
  if (!c23) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = LocalActivityStore.getActivities();
      found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    if (!_modDef1342(found, found)) {
      closure_21 = filterPlayingActivities(found);
      flag = true;
    }
    remoteActivities = SessionsStore.getRemoteActivities();
    if (remoteActivities !== remoteActivities) {
      flag = true;
    }
    hiddenActivities = SessionsStore.getHiddenActivities();
    if (flag) {
      items = [];
      const tmp12Result = applyDefault;
      HermesBuiltin.arraySpread(remoteActivities.filter((type) => type.type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS), HermesBuiltin.arraySpread(found, 0));
      const arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
      const tmp12ResultResult = tmp12Result(items.sort(sortActivity));
      const iter = tmp12Result(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
      closure_27 = filterPlayingActivities(tmp12Result(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value());
      valueResult = tmp12Result(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value();
    }
  }
  found = [];
}
function handleConnectionOpen() {
  c23 = false;
  const UNKNOWN = StatusTypes.UNKNOWN;
  handleUpdate();
  const result = PresenceStore.setCurrentUserOnConnectionOpen(IDLE, valueResult);
}
const sortActivity = fn(6005).sortActivity;
const Constants = fn(1072);
const StatusTypes = Constants.StatusTypes;
const AppStates = Constants.AppStates;
let c16 = false;
({ ONLINE: IDLE, UNKNOWN: closure_18 } = StatusTypes);
let found = [];
let activities = [];
const afk = false;
let c23 = true;
let remoteActivities = Object.freeze([]);
let hiddenActivities = Object.freeze([]);
let closure_27 = [];
const Store = initializeDefault.Store;
class SelfPresenceStore extends Store {
}
const prototype = SelfPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, DetectableGameStore, EmbeddedActivitiesStore, IdleStore, LibraryApplicationStore, LocalActivityStore, PresenceStore, SessionsStore, SpotifyStore, UserSettingsProtoStore);
  items = [LocalActivityStore];
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
  return flag ? closure_27 : closure_21;
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
    c23 = false;
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
    c23 = true;
    closure_18 = IDLE;
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
    if (state.state === AppStates.ACTIVE) {
      if (c16) {
        c16 = false;
        handleUpdate();
      }
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;