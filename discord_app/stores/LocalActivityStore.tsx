// discord_app/stores/LocalActivityStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import _modDef1343 from "../../_runtime/metro/01343__.js";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import ActivityTypes from "../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import ActivityGamePlatforms from "../../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx";
import ActivityFlagUtils from "../modules/activities/utils/ActivityFlagUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../modules/activities/EmbeddedActivitiesStore.tsx";
import ApplicationStore from "../modules/applications/ApplicationStore.tsx";
import RunningGameStore from "../modules/game_detection/RunningGameStore.native.tsx";
import SocialSdkApplicationStore from "../modules/game_detection/SocialSdkApplicationStore.tsx";
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
  const items = [];
  const CustomStatusSetting = items(streamerActiveStreamMetadata[15]).CustomStatusSetting;
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
    items.push(tmp(tmp2[16]).getActivityFromCustomStatus(setting));
    const tmpResult = tmp(tmp2[16]);
  }
  const items1 = [...FirstPartyRichPresenceStore.getActivities()];
  items.push.apply(items1);
  const stream = ExternalStreamingStore.getStream();
  if (null != stream) {
    const obj = { type: tmp(tmp2[17]).ActivityTypes.STREAMING };
    const merged = Object.assign(stream);
    items.push(obj);
  }
  const set = new Set();
  const item = set(streamerActiveStreamMetadata[18]).forEach(closure_19, (arg0) => {
    [, tmp] = arg0;
    if (null != tmp.application_id) {
      set.add(tmp.name);
      items.push(tmp);
    }
  });
  const arr3 = set(streamerActiveStreamMetadata[18]);
  const tmp21 = set;
  const visibleGame = RunningGameStore.getVisibleGame();
  if (tmp23) {
    streamerActiveStreamMetadata = ApplicationStreamingStore.getStreamerActiveStreamMetadata();
    const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
    let pid;
    if (streamerActiveStreamMetadata != null) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let tmp28 = null;
    if (null != pid) {
      let found = visibleRunningGames.find((pid) => pid.pid === streamerActiveStreamMetadata.pid);
      if (found == null) {
        found = null;
      }
      tmp28 = found;
    }
    let tmp30 = null == tmp28;
    if (tmp30) {
      let id1;
      if (streamerActiveStreamMetadata != null) {
        id1 = streamerActiveStreamMetadata.id;
      }
      tmp30 = null != id1;
    }
    if (tmp30) {
      let found1 = visibleRunningGames.find((id) => id.id === streamerActiveStreamMetadata.id);
      if (found1 == null) {
        found1 = null;
      }
      tmp28 = found1;
    }
    if (null != tmp28) {
      let tmp25 = tmp28;
      if (null == c20) {
        let start = tmp28.start;
        if (start == null) {
          const _Date3 = Date;
          start = Date.now();
        }
        c20 = start;
        tmp25 = tmp28;
      }
    } else {
      c20 = null;
      tmp25 = visibleGame;
    }
  } else {
    c20 = null;
    tmp25 = visibleGame;
  }
  let sdkResolutionForPID;
  if (null != tmp25) {
    sdkResolutionForPID = RunningGameStore.getSdkResolutionForPID(tmp25.pid);
  }
  let id2;
  if (null != sdkResolutionForPID) {
    if (sdkResolutionForPID.type !== tmp(tmp2[19]).SdkCanonicalGameResolutionType.UNRESOLVED) {
      id2 = sdkResolutionForPID.game.id;
    }
  }
  const remoteActivities = SessionsStore.getRemoteActivities();
  let someResult = null != id2;
  if (someResult) {
    const items2 = [];
    HermesBuiltin.arraySpread(remoteActivities, HermesBuiltin.arraySpread(items, 0));
    someResult = items2.some((application_id) => {
      let tmp2 = application_id.application_id === id2;
      if (!tmp2) {
        application_id = application_id.application_id;
        const application = ApplicationStore.getApplication(application_id);
        let canonicalGameId;
        if (application != null) {
          canonicalGameId = application.getCanonicalGameId();
        }
        tmp2 = canonicalGameId === tmp;
      }
      return tmp2;
    });
  }
  let tmp43 = null != tmp25 && null != tmp25.name;
  if (tmp43) {
    if (!someResult) {
      someResult = set.has(tmp25.name);
    }
    if (!someResult) {
      const items3 = [];
      HermesBuiltin.arraySpread(remoteActivities, HermesBuiltin.arraySpread(items, 0));
      someResult = tmp(tmp2[20]).doesGameHaveRichPresence(tmp25, items3);
      const tmpResult3 = tmp(tmp2[20]);
    }
    tmp43 = someResult;
  }
  if (null != tmp25) {
    if (null != tmp25.name) {
      if (!tmp43) {
        if (!tmp49) {
          const findGameResult = DetectableGameStore.findGame(tmp25);
          const obj2 = {
            type: tmp(tmp2[17]).ActivityTypes.PLAYING,
            name: null,
            application_id: null,
            timestamps: null,
          };
          ({ name: obj9.name, id } = tmp25);
          if (id == null) {
            let id3;
            if (findGameResult != null) {
              id3 = findGameResult.id;
            }
            id = id3;
          }
          obj2.application_id = id;
          let start2 = c20;
          if (c20 == null) {
            start2 = tmp25.start;
          }
          const obj3 = { start: start2 };
          obj2.timestamps = obj3;
          const merged1 = Object.assign(tmp(tmp2[21]).maybeAddAdditionalGameMetadata(tmp25));
          items.push(obj2);
          const tmpResult4 = tmp(tmp2[21]);
        }
      }
    }
  }
  const activity = SpotifyStore.getActivity();
  if (null != activity) {
    const obj4 = { type: tmp(tmp2[17]).ActivityTypes.LISTENING };
    const merged2 = Object.assign(activity);
    items.push(obj4);
  }
  const tmp61 = tmp21(streamerActiveStreamMetadata[22])(items, items);
  let flag = !tmp61;
  if (!tmp61) {
    flag = true;
  }
  return flag;
}
const ActivityFlags = fn(1072).ActivityFlags;
let closure_18 = [];
const dependencyMap = {};
let c20 = null;
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
    SocialSdkApplicationStore,
    SpotifyStore,
    UserSettingsProtoStore,
  );
  const items = [FirstPartyRichPresenceStore];
  this.syncWith(items, () => updateActivities());
};
prototype["getActivities"] = function getActivities() {
  return closure_18;
};
prototype["getPrimaryActivity"] = function getPrimaryActivity() {
  return closure_18[0];
};
prototype["getApplicationActivity"] = function getApplicationActivity(arg0) {
  closure_0 = arg0;
  return this.findActivity((application_id) => application_id.application_id === closure_0);
};
prototype["getCustomStatusActivity"] = function getCustomStatusActivity() {
  return this.findActivity((type) => type.type === ActivityTypes.ActivityTypes.CUSTOM_STATUS);
};
prototype["findActivity"] = function findActivity(arg0) {
  return closure_18.find(arg0);
};
prototype["getApplicationActivities"] = function getApplicationActivities() {
  return closure_19;
};
prototype["getActivityForPID"] = function getActivityForPID(arg0) {
  const values = Object.values(closure_19);
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
LocalActivityStore.displayName = "LocalActivityStore";
const localActivityStore = new LocalActivityStore(DispatcherDefault, {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const merged = Object.assign(localActivities.localActivities);
    closure_19 = {};
    updateActivities();
  },
  START_SESSION: function handleStartSession() {
    closure_19 = {};
    updateActivities();
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    ({ socketId, pid, activity, partyPrivacy } = arg0);
    if (null == activity) {
      let tmp6 = null == dependencyMap[socketId];
    } else {
      const items = [pid, activity, partyPrivacy];
      tmp6 = _modDef1343(dependencyMap[socketId], items);
    }
    if (!tmp6) {
      if (null != activity) {
        const items1 = [pid, activity, partyPrivacy];
        dependencyMap[socketId] = items1;
      } else {
        delete tmp[tmp2];
      }
    }
    let tmp10 = !tmp6;
    if (tmp6) {
      tmp10 = updateActivities();
    }
    return tmp10;
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    delete tmp[tmp2];
    updateActivities();
  },
  RUNNING_GAMES_CHANGE: updateActivities,
  SOCIAL_SDK_GAMES_UPDATE: updateActivities,
  APPLICATION_FETCH_SUCCESS: updateActivities,
  APPLICATIONS_FETCH_SUCCESS: updateActivities,
  GAMES_DATABASE_UPDATE: updateActivities,
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
        let tmp11 = tmp7[2];
        let num = tmp9.flags;
        if (num == null) {
          num = 0;
        }
        let tmp12 = num;
        let obj2 = ActivityFlagUtils;
        let obj3 = FlagUtils;
        let num2;
        if (tmp9 != null) {
          num2 = tmp9.flags;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let hasFlagResult = obj3.hasFlag(num2, constants.INSTANCE);
        let tmp13Result = ActivityFlagUtils;
        let activityFlags = obj2.computeActivityFlags(
          tmp9,
          hasFlagResult,
          tmp9.platform === ActivityGamePlatforms.ActivityGamePlatforms.EMBEDDED,
          tmp13Result.isContextlessEmbeddedActivity(tmp9),
          tmp11,
        );
        if (activityFlags !== tmp12) {
          let items = [tmp8, ,];
          let obj4 = {};
          let merged = Object.assign(tmp9);
          obj4.flags = tmp23;
          items[1] = obj4;
          items[2] = tmp11;
          obj[first] = items;
          flag = true;
        } else {
          let items1 = [tmp8, tmp9];
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
