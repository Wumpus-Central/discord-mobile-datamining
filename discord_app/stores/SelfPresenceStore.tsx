// discord_app/stores/SelfPresenceStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import _modDef1332 from "../../_runtime/metro/01332__.js";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import LibraryApplicationUtils from "../utils/LibraryApplicationUtils.tsx";
import isListeningOnSpotifyDefault from "../modules/activities/utils/isListeningOnSpotify.tsx";
import SpotifyStore from "../modules/spotify/SpotifyStore.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import DetectableGameStore from "DetectableGameStore.tsx";
import IdleStore from "IdleStore.tsx";
import LibraryApplicationStore from "LibraryApplicationStore.tsx";
import LocalActivityStore from "LocalActivityStore.tsx";
import PresenceStore from "PresenceStore.tsx";
import SessionsStore from "SessionsStore.tsx";

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
  num = flags.flags;
  if (num == null) {
    num = 0;
  }
  if (obj.hasFlag(num, constants.CONTEXTLESS)) {
    return true;
  } else {
    const type = flags.type;
    if (constants2.LISTENING === type) {
      if (isListeningOnSpotifyDefault(flags)) {
        let shouldShowActivityResult = SpotifyStore.shouldShowActivity();
      } else {
        shouldShowActivityResult = null != flags.application_id;
        if (shouldShowActivityResult) {
          let tmpResult = LibraryApplicationUtils;
          shouldShowActivityResult = tmpResult.shouldShareApplicationActivity(
            flags.application_id,
            LibraryApplicationStore,
          );
        }
      }
      return shouldShowActivityResult;
    } else if (constants2.PLAYING === type) {
      if (null != flags.application_id) {
        tmpResult = LibraryApplicationUtils;
        let result = tmpResult.shouldShareApplicationActivity(flags.application_id, LibraryApplicationStore);
      } else {
        const searchGamesByNameResult = DetectableGameStore.searchGamesByName(flags.name);
        if (1 === searchGamesByNameResult.length) {
          result = LibraryApplicationUtils.shouldShareApplicationActivity(
            searchGamesByNameResult[0],
            LibraryApplicationStore,
          );
          const tmpResult1 = LibraryApplicationUtils;
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
        result1 = LibraryApplicationUtils.shouldShareApplicationActivity(flags.application_id, LibraryApplicationStore);
        const tmpResult2 = LibraryApplicationUtils;
      }
      return result1;
    }
  }
  obj = FlagUtils;
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
    if (!_modDef1332(found, found)) {
      closure_21 = filterPlayingActivities(found);
      flag = true;
    }
    remoteActivities = SessionsStore.getRemoteActivities();
    if (remoteActivities !== remoteActivities) {
      flag = true;
    }
    hiddenActivities = SessionsStore.getHiddenActivities();
    if (flag) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(
        remoteActivities.filter((type) => type.type !== constants.CUSTOM_STATUS),
        arraySpreadResult,
      );
      const tmp12Result = _modDef12;
      const tmp12ResultResult = _modDef12(items.sort(sortActivity));
      const iter = _modDef12(items.sort(sortActivity)).uniqBy(
        (type) => "" + type.type + ":" + type.application_id + ":" + type.name,
      );
      closure_27 = filterPlayingActivities(
        _modDef12(items.sort(sortActivity))
          .uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name)
          .value(),
      );
      valueResult = _modDef12(items.sort(sortActivity))
        .uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name)
        .value();
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
const sortActivity = fn(4600).sortActivity;
const Constants = fn(1074);
const StatusTypes = Constants.StatusTypes;
({ ActivityFlags: map1, ActivityTypes: closure_14, AppStates: closure_15 } = Constants);
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
class SelfPresenceStore extends Store {}
const prototype = SelfPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    DetectableGameStore,
    IdleStore,
    LibraryApplicationStore,
    LocalActivityStore,
    PresenceStore,
    SessionsStore,
    SpotifyStore,
    UserSettingsProtoStore,
  );
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
prototype["findActivity"] = function findActivity(_messages) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  activities = this.getActivities(flag);
  return activities.find(_messages);
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
    if (state.state === constants3.ACTIVE) {
      if (c16) {
        c16 = false;
        handleUpdate();
      }
    }
    return false;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;
