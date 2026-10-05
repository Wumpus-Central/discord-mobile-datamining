// === Module 11116: LocalActivityStore ===

// Module 11116 (LocalActivityStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef1342 from "module_1342" /* 1342 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import ActivityFlagUtils from "ActivityFlagUtils" /* 11123 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import SocialSdkApplicationStore from "SocialSdkApplicationStore" /* 9042 */;
import FirstPartyRichPresenceStore from "FirstPartyRichPresenceStore" /* 11117 */;
import SpotifyStore from "SpotifyStore" /* 5439 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import DetectableGameStore from "DetectableGameStore" /* 2024 */;
import ExternalStreamingStore from "ExternalStreamingStore" /* 11120 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SessionsStore from "SessionsStore" /* 4908 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let application_id, set;

let closure_17;
let closure_18;
let closure_19;
function updateActivities() {
  let id;
  let obj3;
  let streamerActiveStreamMetadata;
  let tmp22;
  const items = [];
  const tmp = items;
  let tmp2 = streamerActiveStreamMetadata;
  const CustomStatusSetting = items(streamerActiveStreamMetadata[15]).CustomStatusSetting;
  const setting = CustomStatusSetting.getSetting();
  let tmp4 = null != setting;
  if (tmp4) {
    let tmp5 = "0" === setting.expiresAtMs;
    if (!tmp5) {
      const _Date = Date;
      const _Number = Number;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(Number(setting.expiresAtMs));
      const time = date.getTime();
      const date1 = new Date();
      tmp5 = time - date1.getTime() > 0;
    }
    tmp4 = tmp5;
  }
  if (tmp4) {
    const push = items.push;
    const tmpResult = tmp(tmp2[16]);
    push(tmpResult.getActivityFromCustomStatus(setting));
  }
  const items1 = [...FirstPartyRichPresenceStore.getActivities()];
  items.push.apply(items1);
  const stream = ExternalStreamingStore.getStream();
  if (null != stream) {
    const push2 = items.push;
    const obj = { type: constants.STREAMING };
    const merged = Object.assign(stream);
    push2(obj);
  }
  const self5 = this;
  set = new Set();
  const arr3 = set(tmp2[17]);
  const item = arr3.forEach(closure_21, (arg0) => {
    let tmp;
    [, tmp] = arg0;
    if (null != tmp.application_id) {
      set.add(tmp.name);
      items.push(tmp);
    }
  });
  const tmp20 = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  const visibleGame = RunningGameStore.getVisibleGame();
  if (tmp20) {
    streamerActiveStreamMetadata = ApplicationStreamingStore.getStreamerActiveStreamMetadata();
    const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
    let pid;
    if (streamerActiveStreamMetadata != null) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let tmp25 = null;
    if (null != pid) {
      let found = visibleRunningGames.find((pid) => pid.pid === streamerActiveStreamMetadata.pid);
      if (found == null) {
        found = null;
      }
      tmp25 = found;
    }
    let tmp27 = null == tmp25;
    if (tmp27) {
      let id1;
      if (streamerActiveStreamMetadata != null) {
        id1 = streamerActiveStreamMetadata.id;
      }
      tmp27 = null != id1;
    }
    if (tmp27) {
      let found1 = visibleRunningGames.find((id) => id.id === streamerActiveStreamMetadata.id);
      if (found1 == null) {
        found1 = null;
      }
      tmp25 = found1;
    }
    if (null != tmp25) {
      tmp22 = tmp25;
      if (null == c22) {
        let start = tmp25.start;
        if (start == null) {
          const _Date3 = Date;
          start = Date.now();
        }
        c22 = start;
        tmp22 = tmp25;
      }
    } else {
      c22 = null;
      tmp22 = visibleGame;
    }
  } else {
    c22 = null;
    tmp22 = visibleGame;
  }
  let sdkResolutionForPID;
  if (null != tmp22) {
    sdkResolutionForPID = RunningGameStore.getSdkResolutionForPID(tmp22.pid);
  }
  let id2;
  if (null != sdkResolutionForPID) {
    if (sdkResolutionForPID.type !== tmp(tmp2[18]).SdkCanonicalGameResolutionType.UNRESOLVED) {
      id2 = sdkResolutionForPID.game.id;
    }
  }
  const remoteActivities = SessionsStore.getRemoteActivities();
  let someResult = null != id2;
  if (someResult) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, remoteActivities, HermesBuiltin.arraySpread(items2, items, 0));
    someResult = items2.some((application_id) => {
      let tmp2 = application_id.application_id === id2;
      if (!tmp2) {
        application_id = application_id.application_id;
        const getApplication = ApplicationStore.getApplication;
        const application = getApplication(application_id);
        let canonicalGameId;
        if (application != null) {
          canonicalGameId = application.getCanonicalGameId();
        }
        tmp2 = canonicalGameId === tmp;
      }
      return tmp2;
    });
  }
  let tmp40 = null != tmp22 && null != tmp22.name;
  if (tmp40) {
    if (!someResult) {
      someResult = set.has(tmp22.name);
    }
    if (!someResult) {
      const items3 = [];
      const doesGameHaveRichPresence = tmp(tmp2[19]).doesGameHaveRichPresence;
      tmp(tmp2[19]);
      HermesBuiltin.arraySpread(items3, remoteActivities, HermesBuiltin.arraySpread(items3, items, 0));
      someResult = doesGameHaveRichPresence(tmp22, items3);
    }
    tmp40 = someResult;
  }
  const tmp47 = null != tmp22 && tmp22.isLauncher;
  if (null != tmp22) {
    if (null != tmp22.name) {
      if (!tmp40) {
        if (!tmp47) {
          const findGameResult = DetectableGameStore.findGame(tmp22);
          const obj2 = { type: constants.PLAYING, name: null, application_id: id, timestamps: obj3 };
          ({ name: obj8.name, id } = tmp22);
          const push3 = items.push;
          if (id == null) {
            let id3;
            if (findGameResult != null) {
              id3 = findGameResult.id;
            }
            id = id3;
          }
          let start2 = c22;
          if (c22 == null) {
            start2 = tmp22.start;
          }
          obj3 = { start: start2 };
          const tmpResult4 = tmp(tmp2[20]);
          const merged1 = Object.assign(tmpResult4.maybeAddAdditionalGameMetadata(tmp22));
          push3(obj2);
        }
      }
    }
  }
  const activity = SpotifyStore.getActivity();
  if (null != activity) {
    const push4 = items.push;
    const obj4 = { type: constants.LISTENING };
    const merged2 = Object.assign(activity);
    push4(obj4);
  }
  let flag = !tmp18(tmp2[21])(items, items);
  set(tmp2[21])(items, items);
  if (flag) {
    flag = true;
  }
  return flag;
}
({ ActivityFlags: closure_17, ActivityGamePlatforms: closure_18, ActivityTypes: closure_19 } = Constants);
let closure_20 = [];
let closure_21 = {};
let c22 = null;
const Store = get_initializedDefault.Store;
class LocalActivityStore extends Store {
  initialize() {
    this.waitFor(ApplicationStore, ApplicationStreamingStore, ChannelStore, EmbeddedActivitiesStore, ExternalStreamingStore, FirstPartyRichPresenceStore, DetectableGameStore, RunningGameStore, SelectedChannelStore, SessionsStore, SocialSdkApplicationStore, SpotifyStore, UserSettingsProtoStore);
    const items = [FirstPartyRichPresenceStore];
    this.syncWith(items, () => updateActivities());
  }
  getActivities() {
    return closure_20;
  }
  getPrimaryActivity() {
    return closure_20[0];
  }
  getApplicationActivity(arg0) {
    let closure_0 = arg0;
    return this.findActivity((application_id) => application_id.application_id === closure_0);
  }
  getCustomStatusActivity() {
    return this.findActivity((type) => type.type === constants.CUSTOM_STATUS);
  }
  findActivity(cResult) {
    return closure_20.find(cResult);
  }
  getApplicationActivities() {
    return closure_21;
  }
  getActivityForPID(arg0) {
    const values = Object.values(closure_21);
    const obj = values[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      if (tmp4[0] === arg0) {
        obj.return();
        return tmp5;
      }
    }
    return null;
  }
}
const prototype = LocalActivityStore.prototype;
LocalActivityStore.displayName = "LocalActivityStore";
let obj = {
  ROBLOX_SUBGAME_UPDATE: updateActivities,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: updateActivities,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(localActivities) {
    const obj = {};
    const merged = Object.assign(localActivities.localActivities);
    closure_21 = obj;
    updateActivities();
  },
  START_SESSION: function handleStartSession() {
    closure_21 = {};
    updateActivities();
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    let activity;
    let partyPrivacy;
    let pid;
    let socketId;
    let tmp4;
    ({ socketId, pid, activity, partyPrivacy } = arg0);
    if (null == activity) {
      tmp4 = null == closure_21[socketId];
    } else {
      const items = [pid, activity, partyPrivacy];
      tmp4 = _modDef1342(closure_21[socketId], items);
    }
    if (!tmp4) {
      if (null != activity) {
        const items1 = [pid, activity, partyPrivacy];
        closure_21[socketId] = items1;
      } else {
        delete closure_21[socketId];
      }
    }
    let tmp7 = !tmp4;
    if (tmp4) {
      tmp7 = updateActivities();
    }
    return tmp7;
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    delete closure_21[arg0.socketId];
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
    let constants2;
    function recalculateActivityPartyPrivacyFlags() {
      let tmp8;
      let tmp9;
      obj = {};
      let flag = false;
      const entries = Object.entries(obj);
      const tmp2 = entries[Symbol.iterator]();
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
        let tmp15 = ActivityFlagUtils;
        let computeActivityFlags = tmp15.computeActivityFlags;
        let tmp17 = FlagUtils;
        let num2;
        let hasFlag = tmp17.hasFlag;
        if (tmp9 != null) {
          num2 = tmp9.flags;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let hasFlagResult = hasFlag(num2, constants.INSTANCE);
        let platform = tmp9.platform;
        let EMBEDDED = constants2.EMBEDDED;
        let tmp13Result = ActivityFlagUtils;
        let activityFlags = computeActivityFlags(tmp9, hasFlagResult, platform === EMBEDDED, tmp13Result.isContextlessEmbeddedActivity(tmp9), tmp11);
        if (activityFlags !== tmp12) {
          let items = [tmp8, , ];
          let obj2 = { flags: tmp26 };
          let merged = Object.assign(tmp9);
          items[1] = obj2;
          items[2] = tmp11;
          obj[first] = items;
          flag = true;
        } else {
          let items1 = [tmp8, tmp9, ];
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
    }
    recalculateActivityPartyPrivacyFlags();
    let tmp2 = updateActivities();
  },
  EMBEDDED_ACTIVITY_CLOSE: updateActivities,
  RUNNING_GAME_TOGGLE_DETECTION: updateActivities
};
const localActivityStore = new LocalActivityStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/LocalActivityStore.tsx");

export default localActivityStore;