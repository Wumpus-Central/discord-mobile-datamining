// === Module 5445: SelfPresenceStore ===

// Module 5445 (SelfPresenceStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef1342 from "module_1342" /* 1342 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import UserSettings from "UserSettings" /* 2028 */;
import PresenceStore2 from "PresenceStore" /* 4936 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 6914 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10638 */;
import SpotifyStore from "SpotifyStore" /* 5446 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import DetectableGameStore from "DetectableGameStore" /* 2024 */;
import IdleStore from "IdleStore" /* 5574 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 6912 */;
import LocalActivityStore from "LocalActivityStore" /* 11129 */;
import SessionsStore from "SessionsStore" /* 4914 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const PresenceStore = PresenceStore2;

let IDLE;
let closure_14;
let closure_15;
let closure_18;
let map1;
function filterPlayingActivities(arg0) {
  if (0 === arg0.length) {
    return arg0;
  } else {
    const items = [];
    const items1 = [];
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (nextResult.type === constants2.PLAYING) {
        let arr = items1.push(tmp5);
      } else {
        let arr2 = items.push(tmp5);
      }
      continue;
    }
    if (0 === items1.length) {
      return arg0;
    } else if (1 === items1.length) {
      return arg0;
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, items1, 0);
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items3, items, 0)] = items2.sort(sortActivity)[0];
      return items3.sort(sortActivity);
    }
  }
}
function shouldShowActivity(flags) {
  num = flags.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  if (hasFlag(num, map1.CONTEXTLESS)) {
    return true;
  } else {
    const type = flags.type;
    if (constants2.LISTENING === type) {
      let shouldShowActivityResult;
      if (isListeningOnSpotifyDefault(flags)) {
        shouldShowActivityResult = SpotifyStore.shouldShowActivity();
      } else {
        shouldShowActivityResult = null != flags.application_id;
        if (shouldShowActivityResult) {
          const application_id3 = flags.application_id;
          const tmpResult = LibraryApplicationUtils;
          shouldShowActivityResult = tmpResult.shouldShareApplicationActivity(application_id3, LibraryApplicationStore);
        }
      }
      return shouldShowActivityResult;
    } else if (constants2.PLAYING === type) {
      let result;
      if (null != flags.application_id) {
        const application_id2 = flags.application_id;
        const tmpResult4 = LibraryApplicationUtils;
        result = tmpResult4.shouldShareApplicationActivity(application_id2, LibraryApplicationStore);
      } else {
        const searchGamesByNameResult = DetectableGameStore.searchGamesByName(flags.name);
        if (1 === searchGamesByNameResult.length) {
          const first = searchGamesByNameResult[0];
          const tmpResult5 = LibraryApplicationUtils;
          result = tmpResult5.shouldShareApplicationActivity(first, LibraryApplicationStore);
        } else {
          const ShowCurrentGame = UserSettings.ShowCurrentGame;
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
        const application_id = flags.application_id;
        const tmpResult6 = LibraryApplicationUtils;
        result1 = tmpResult6.shouldShareApplicationActivity(application_id, LibraryApplicationStore);
      }
      return result1;
    }
  }
}
function handleUpdate() {
  let ONLINE;
  num = IdleStore.getIdleSince();
  if (num == null) {
    num = 0;
  }
  let closure_22 = IdleStore.isAFK();
  if (c23) {
    IDLE = closure_18;
    ONLINE = closure_18;
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
  const tmp9 = ONLINE === StatusTypes.ONLINE && num > 0;
  if (tmp9) {
    IDLE = StatusTypes.IDLE;
  }
  if (!c23) {
    if (IDLE !== StatusTypes.INVISIBLE) {
      activities = LocalActivityStore.getActivities();
      found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    if (!_modDef1342(found, found)) {
      let closure_21 = filterPlayingActivities(found);
      flag = true;
    }
    remoteActivities = SessionsStore.getRemoteActivities();
    if (remoteActivities !== remoteActivities) {
      flag = true;
    }
    hiddenActivities = SessionsStore.getHiddenActivities();
    if (flag) {
      const items = [];
      const tmp15Result = _modDef12;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, found, 0);
      HermesBuiltin.arraySpread(items, remoteActivities.filter((type) => type.type !== constants.CUSTOM_STATUS), arraySpreadResult);
      const tmp15ResultResult = tmp15Result(items.sort(sortActivity));
      const iter = tmp15ResultResult.uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
      valueResult = iter.value();
      closure_27 = filterPlayingActivities(valueResult);
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
const sortActivity = PresenceStore2.sortActivity;
const StatusTypes = Constants.StatusTypes;
({ ActivityFlags: map1, ActivityTypes: closure_14, AppStates: closure_15 } = Constants);
let c16 = false;
({ ONLINE: IDLE, UNKNOWN: closure_18 } = StatusTypes);
let num = 0;
let found = [];
let activities = [];
const afk = false;
let c23 = true;
let remoteActivities = Object.freeze([]);
let hiddenActivities = Object.freeze([]);
let valueResult = [];
let closure_27 = [];
const Store = get_initializedDefault.Store;
class SelfPresenceStore extends Store {
  initialize() {
    this.waitFor(DetectableGameStore, IdleStore, LibraryApplicationStore, LocalActivityStore, PresenceStore, SessionsStore, SpotifyStore, UserSettingsProtoStore);
    const items = [LocalActivityStore];
    this.syncWith(items, handleUpdate);
  }
  getLocalPresence() {
    return { status: IDLE, since: num, activities, afk };
  }
  getStatus() {
    return IDLE;
  }
  getActivities() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return flag ? closure_27 : activities;
  }
  getUnfilteredActivities() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return flag ? valueResult : found;
  }
  getHiddenActivities() {
    return hiddenActivities;
  }
  getPrimaryActivity() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return this.getActivities(flag)[0];
  }
  getApplicationActivity(arg0) {
    let closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    return this.findActivity((application_id) => application_id.application_id === closure_0, flag);
  }
  findActivity(cResult) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    activities = this.getActivities(flag);
    return activities.find(cResult);
  }
}
const prototype = SelfPresenceStore.prototype;
SelfPresenceStore.displayName = "SelfPresenceStore";
const obj = {
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
    if (state.state === constants3.ACTIVE) {
      const tmp = c16;
      if (tmp) {
        c16 = false;
        handleUpdate();
      }
    }
    return false;
  }
};
const selfPresenceStore = new SelfPresenceStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;