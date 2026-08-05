// discord_app/stores/SelfPresenceStore.tsx
import upsertAccount from "upsertAccount";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import gameFromServer from "gameFromServer";
import checkIdleAFK from "checkIdleAFK";
import setLibraryApplications from "setLibraryApplications";
import updateActivities from "updateActivities";
import sortActivity from "sortActivity";
import { sortActivity } from "sortActivity";
import handleUpdate from "handleUpdate";
import ME from "ME";
import { Store } from "initialize";
import { apply } from "../../_runtime/00012_apply.js";
import { isUndefinedOrNull } from "../../_runtime/00659_isUndefinedOrNull.js";
import { hasFlag } from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import { isListeningOnSpotify } from "../modules/activities/utils/isListeningOnSpotify.tsx";
import { explicitContentFromProto } from "../modules/user_settings/UserSettings.tsx";

let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
const require = arg1;
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
      let tmp5 = constants2;
      if (nextResult.type === constants2.PLAYING) {
        let tmp8 = nextResult;
        let arr = items1.push(tmp4);
      } else {
        let tmp6 = nextResult;
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
      if (isListeningOnSpotify(flags)) {
        let shouldShowActivityResult = upsertAccount.shouldShowActivity();
      } else {
        shouldShowActivityResult = null != flags.application_id;
        if (shouldShowActivityResult) {
          let tmpResult = tmp(4329);
          shouldShowActivityResult = tmpResult.shouldShareApplicationActivity(flags.application_id, setLibraryApplications);
        }
      }
      return shouldShowActivityResult;
    } else if (tmp3.PLAYING === type) {
      if (null != flags.application_id) {
        tmpResult = tmp(4329);
        let result = tmpResult.shouldShareApplicationActivity(flags.application_id, setLibraryApplications);
      } else {
        const searchGamesByNameResult = gameFromServer.searchGamesByName(flags.name);
        if (1 === searchGamesByNameResult.length) {
          result = tmp(4329).shouldShareApplicationActivity(searchGamesByNameResult[0], setLibraryApplications);
          const tmpResult1 = tmp(4329);
        } else {
          const ShowCurrentGame = tmp(3958).ShowCurrentGame;
          result = ShowCurrentGame.getSetting();
        }
      }
      return result;
    } else {
      if (tmp3.STREAMING !== type) {
        const WATCHING = tmp3.WATCHING;
      }
      let result1 = null == flags.application_id;
      if (!result1) {
        result1 = tmp(4329).shouldShareApplicationActivity(flags.application_id, setLibraryApplications);
        const tmpResult2 = tmp(4329);
      }
      return result1;
    }
  }
  obj = hasFlag /* hasFlag */;
}
function handleUpdate() {
  let num = idleSince.getIdleSince();
  if (num == null) {
    num = 0;
  }
  let closure_22 = idleSince.isAFK();
  if (c23) {
    let IDLE = closure_18;
    let ONLINE = closure_18;
  } else if (c16) {
    const INVISIBLE = StatusTypes.INVISIBLE;
    IDLE = INVISIBLE;
    ONLINE = INVISIBLE;
  } else {
    const StatusSetting = explicitContentFromProto /* explicitContentFromProto */.StatusSetting;
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
    IDLE = tmp6.IDLE;
  }
  if (!c23) {
    if (IDLE !== tmp6.INVISIBLE) {
      activities = activities.getActivities();
      let found = activities.filter(shouldShowActivity);
    }
    let flag = false;
    if (!isUndefinedOrNull(found, found)) {
      let closure_21 = filterPlayingActivities(found);
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
      arraySpreadResult = HermesBuiltin.arraySpread(remoteActivities.filter((type) => type.type !== constants.CUSTOM_STATUS), arraySpreadResult);
      const tmp12Result = apply;
      const tmp12ResultResult = apply(items.sort(sortActivity));
      const valueResult = apply(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name).value();
      let closure_27 = filterPlayingActivities(valueResult);
      const iter = apply(items.sort(sortActivity)).uniqBy((type) => "" + type.type + ":" + type.application_id + ":" + type.name);
    }
  }
  found = [];
}
function handleConnectionOpen() {
  let c23 = false;
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
class SelfPresenceStore extends Store {
}
const prototype = SelfPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(gameFromServer, checkIdleAFK, setLibraryApplications, updateActivities, sortActivity, handleUpdate, upsertAccount, handleConnectionClosedOrResumed);
  const items = [updateActivities];
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
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  return this.findActivity((application_id) => application_id.application_id === closure_0, flag);
};
prototype["findActivity"] = function findActivity(handleConnectionClosedOrResumed) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const activities = this.getActivities(flag);
  return activities.find(handleConnectionClosedOrResumed);
};
SelfPresenceStore.displayName = "SelfPresenceStore";
const selfPresenceStore = new SelfPresenceStore(require("dispatcher"), {
  START_SESSION: handleUpdate,
  CONNECTION_OPEN: function handleConnectionOpenTracked() {
    let c23 = false;
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
    let c23 = true;
    let closure_18 = closure_17;
    handleUpdate();
  },
  FORCE_INVISIBLE: function handleForceInvisible(invisible) {
    invisible = invisible.invisible;
    handleUpdate();
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    let c16 = false;
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
let result = require("gameFromServer").fileFinishedImporting("stores/SelfPresenceStore.tsx");

export default selfPresenceStore;