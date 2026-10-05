// discord_app/stores/ApplicationStreamingStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import asyncRequire from "../../_runtime/01987_asyncRequire.js";
import Constants2 from "../modules/go_live/Constants.tsx";
import StreamKeyUtils from "../modules/go_live/utils/StreamKeyUtils.tsx";
import StreamPermissionUtils from "../modules/go_live/utils/StreamPermissionUtils.tsx";
import canSpectateDefault from "../modules/go_live/utils/canSpectate.tsx";
import _slicedToArrayDefault from "../modules/go_live/utils/windowSourceMatches.tsx";
import getTitleFromPickedStreamContentDefault from "../modules/go_live/utils/getTitleFromPickedStreamContent.tsx";
import GameConsoleStore from "../modules/game_console/GameConsoleStore.tsx";
import RunningGameStore from "../modules/game_detection/RunningGameStore.native.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildStore from "GuildStore.tsx";
import MediaEngineStore from "MediaEngineStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import RTCConnectionStore from "RTCConnectionStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import VoiceStateStore from "VoiceStateStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let set;

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
function reset() {
  map = new Map();
  streamsByUserAndGuild = {};
  let closure_5 = {};
  let closure_6 = {};
  map1 = new Map();
}
function handleStreamUpdate(streamKey) {
  let paused;
  let region;
  let viewerIds;
  streamKey = streamKey.streamKey;
  ({ region, viewerIds, paused } = streamKey);
  const value = map1.get(streamKey);
  let tmp2 = null == value;
  if (!tmp2) {
    const _Date = Date;
    tmp2 = Date.now() - value < closure_27;
  }
  !tmp2 && map1.delete(streamKey);
  const obj = { state: paused ? constants.PAUSED : constants.ACTIVE };
  set = map.set;
  const obj2 = StreamKeyUtils;
  const merged = Object.assign(obj2.decodeStreamKey(streamKey));
  const result = set(streamKey, obj);
  rtcStreams[streamKey] = { streamKey, region, viewerIds };
}
({
  ApplicationStreamStates: closure_18,
  RTCConnectionStates: closure_19,
  ApplicationStreamDeleteReasons: closure_20,
  NULL_STRING_GUILD_ID: closure_21,
  BasicPermissions: closure_22,
} = Constants);
const StreamTypes = Constants2.StreamTypes;
const selfStreamParticipantsHidden = {};
let intent = null;
let closure_27 = 10 * DurationsDefault.Millis.SECOND;
let map = new Map();
let streamsByUserAndGuild = {};
const rtcStreams = {};
const metroRequire = {};
let map1 = new Map();
let pid;
let id;
const PersistedStore = get_initializedDefault.PersistedStore;
class ApplicationStreamingStore extends PersistedStore {
  initialize(selfStreamParticipantsHidden) {
    const items = [PermissionStore];
    this.syncWith(items, () => true);
    this.waitFor(
      AuthenticationStore,
      ChannelStore,
      PermissionStore,
      RTCConnectionStore,
      RunningGameStore,
      SelectedChannelStore,
    );
    let prop;
    if (selfStreamParticipantsHidden != null) {
      prop = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
    }
    if (undefined !== prop) {
      let prop1;
      const _Object = Object;
      if (selfStreamParticipantsHidden != null) {
        prop1 = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
      }
      assign(selfStreamParticipantsHidden, prop1);
    }
  }
  getState() {
    return { selfStreamParticipantsHidden };
  }
  isSelfStreamHidden(id) {
    let flag = selfStreamParticipantsHidden[id];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getLastActiveStream() {
    let tmp = null;
    if (canSpectateDefault(MediaEngineStore)) {
      const _Array = Array;
      const arr = Array.from(map.values());
      let arr2 = arr.pop();
      if (arr2 == null) {
        arr2 = null;
      }
      tmp = arr2;
    }
    return tmp;
  }
  getAllActiveStreams() {
    let items;
    if (canSpectateDefault(MediaEngineStore)) {
      const _Array = Array;
      items = Array.from(map.values());
    } else {
      items = [];
    }
    return items;
  }
  getAllActiveStreamsForChannel(channelId) {
    let found;
    let closure_0 = channelId;
    if (canSpectateDefault(MediaEngineStore)) {
      const _Array = Array;
      const arr = Array.from(map.values());
      found = arr.filter((channelId) => channelId.channelId === closure_0);
    } else {
      found = [];
    }
    return found;
  }
  getActiveStreamForStreamKey(id) {
    let tmp = null;
    if (canSpectateDefault(MediaEngineStore)) {
      let value = map.get(id);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getActiveStreamForApplicationStream(streamForUser) {
    if (canSpectateDefault(MediaEngineStore)) {
      if (null != streamForUser) {
        const self = this;
        const obj = StreamKeyUtils;
        let activeStreamForStreamKey = this.getActiveStreamForStreamKey(obj.encodeStreamKey(streamForUser));
        if (activeStreamForStreamKey == null) {
          activeStreamForStreamKey = null;
        }
        return activeStreamForStreamKey;
      }
    }
    return null;
  }
  getCurrentUserActiveStream() {
    const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
    let activeStreamForUser = null;
    if (null != channel) {
      const self = this;
      const getActiveStreamForUser = this.getActiveStreamForUser;
      id = AuthenticationStore.getId();
      activeStreamForUser = getActiveStreamForUser(id, channel.getGuildId());
    }
    return activeStreamForUser;
  }
  isStreamMarkedFull(encodeStreamKeyResult) {
    return map1.has(encodeStreamKeyResult);
  }
  getActiveStreamForUser(id, guildId) {
    let activeStreamForApplicationStream;
    const self = this;
    let closure_0 = id;
    const streamForUser = this.getStreamForUser(id, guildId);
    if (null != streamForUser) {
      activeStreamForApplicationStream = self.getActiveStreamForApplicationStream(streamForUser);
    } else {
      const allActiveStreams = self.getAllActiveStreams();
      activeStreamForApplicationStream = allActiveStreams.find((ownerId) => ownerId.ownerId === id);
      if (activeStreamForApplicationStream == null) {
        activeStreamForApplicationStream = null;
      }
    }
    return activeStreamForApplicationStream;
  }
  getStreamerActiveStreamMetadata() {
    const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
    if (null == channel) {
      return null;
    } else {
      const self = this;
      const getActiveStreamForUser = this.getActiveStreamForUser;
      id = AuthenticationStore.getId();
      const activeStreamForUser = getActiveStreamForUser(id, channel.getGuildId());
      let tmp4 = null;
      if (null != activeStreamForUser) {
        const obj2 = StreamKeyUtils;
        let tmp8 = streamerActiveStreamMetadatas[obj2.encodeStreamKey(obj2, activeStreamForUser)];
        if (tmp8 == null) {
          tmp8 = null;
        }
        tmp4 = tmp8;
      }
      return tmp4;
    }
  }
  getStreamerActiveStreamMetadataForStream(arg0) {
    let tmp = streamerActiveStreamMetadatas[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getIsActiveStreamPreviewDisabled(arg0) {
    let flag;
    if (streamerActiveStreamMetadatas[arg0] != null) {
      flag = tmp.previewDisabled;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getAnyStreamForUser(userId) {
    if (canSpectateDefault(MediaEngineStore)) {
      let tmp4 = null;
      if (null != streamsByUserAndGuild[userId]) {
        const _Object = Object;
        const values = Object.values(tmp3);
        let found = values.find((streamType) => {
          streamType = streamType.streamType;
          const obj = basicChannel;
          basicChannel = basicChannel.getBasicChannel(streamType.channelId);
          let tmp2 = streamType === constants2.CALL;
          if (!tmp2) {
            tmp2 = null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
            const canBasicChannelResult =
              null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          let flag = true;
          if (!tmp2) {
            const basicChannel1 = obj.getBasicChannel(streamType.channelId);
            let first = null != basicChannel1;
            if (first) {
              const obj2 = StreamPermissionUtils;
              first = obj2.canWatchStream(
                basicChannel1,
                VoiceStateStore,
                GuildStore,
                PermissionStore,
                GameConsoleStore,
              )[0];
            }
            flag = first;
          }
          return flag;
        });
        if (found == null) {
          found = null;
        }
        tmp4 = found;
      }
      return tmp4;
    } else {
      return null;
    }
  }
  getAnyDiscoverableStreamForUser(userId) {
    if (canSpectateDefault(MediaEngineStore)) {
      let tmp4 = null;
      if (null != streamsByUserAndGuild[userId]) {
        const _Object = Object;
        const values = Object.values(tmp3);
        let found = values.find((streamType) => {
          streamType = streamType.streamType;
          const obj = basicChannel;
          basicChannel = basicChannel.getBasicChannel(streamType.channelId);
          let tmp2 = streamType === constants2.CALL;
          if (!tmp2) {
            tmp2 = null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
            const canBasicChannelResult =
              null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          let flag = true;
          if (!tmp2) {
            const basicChannel1 = obj.getBasicChannel(streamType.channelId);
            let first = null != basicChannel1;
            if (first) {
              const obj2 = StreamPermissionUtils;
              first = obj2.canWatchStream(
                basicChannel1,
                VoiceStateStore,
                GuildStore,
                PermissionStore,
                GameConsoleStore,
              )[0];
            }
            flag = first;
          }
          if (flag) {
            flag = false !== streamType.discoverable;
          }
          return flag;
        });
        if (found == null) {
          found = null;
        }
        tmp4 = found;
      }
      return tmp4;
    } else {
      return null;
    }
  }
  getStreamForUser(id, guildId) {
    if (canSpectateDefault(MediaEngineStore)) {
      let tmp5;
      if (streamsByUserAndGuild[id] != null) {
        let tmp6 = guildId;
        if (guildId == null) {
          tmp6 = closure_21;
        }
        tmp5 = tmp4[tmp6];
      }
      let tmp7 = null;
      if (null != tmp5) {
        const streamType = tmp5.streamType;
        const basicChannel = ChannelStore.getBasicChannel(tmp5.channelId);
        let tmp10 = streamType === StreamTypes.CALL;
        if (!tmp10) {
          tmp10 = null != basicChannel && PermissionStore.canBasicChannel(constants4.VIEW_CHANNEL, basicChannel);
          const canBasicChannelResult =
            null != basicChannel && PermissionStore.canBasicChannel(constants4.VIEW_CHANNEL, basicChannel);
        }
        let flag = true;
        if (!tmp10) {
          const basicChannel1 = ChannelStore.getBasicChannel(tmp5.channelId);
          let first = null != basicChannel1;
          if (first) {
            const obj2 = StreamPermissionUtils;
            first = obj2.canWatchStream(
              basicChannel1,
              VoiceStateStore,
              GuildStore,
              PermissionStore,
              GameConsoleStore,
            )[0];
          }
          flag = first;
        }
        let tmp23 = null;
        if (flag) {
          tmp23 = tmp5;
        }
        tmp7 = tmp23;
      }
      return tmp7;
    } else {
      return null;
    }
  }
  getRTCStream(arg0) {
    let tmp = null;
    if (canSpectateDefault(MediaEngineStore)) {
      let tmp4 = rtcStreams[arg0];
      if (tmp4 == null) {
        tmp4 = null;
      }
      tmp = tmp4;
    }
    return tmp;
  }
  getAllApplicationStreams() {
    let found;
    const items = [];
    if (canSpectateDefault(MediaEngineStore)) {
      for (const key10011 in streamsByUserAndGuild) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp4 = keys[tmp];
          while (tmp4 !== undefined) {
            let arr = items.push(streamsByUserAndGuild[key10011][tmp4]);
            continue;
          }
        }
        continue;
      }
      found = items.filter((streamType) => {
        let tmp = null != streamType;
        if (tmp) {
          streamType = streamType.streamType;
          basicChannel = basicChannel.getBasicChannel(streamType.channelId);
          let tmp5 = streamType === constants2.CALL;
          if (!tmp5) {
            tmp5 = null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
            const canBasicChannelResult =
              null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          tmp = tmp5;
        }
        return tmp;
      });
    } else {
      found = items;
    }
    return found;
  }
  getAllApplicationStreamsForChannel(id) {
    let found;
    let closure_0 = id;
    const items = [];
    if (canSpectateDefault(MediaEngineStore)) {
      for (const key10012 in streamsByUserAndGuild) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp4 = keys[tmp];
          while (tmp4 !== undefined) {
            let arr = items.push(streamsByUserAndGuild[key10012][tmp4]);
            continue;
          }
        }
        continue;
      }
      found = items.filter((channelId) => {
        let tmp = null != channelId && channelId.channelId === id;
        if (tmp) {
          const streamType = channelId.streamType;
          const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
          let tmp6 = streamType === StreamTypes.CALL;
          if (!tmp6) {
            tmp6 = null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
            const canBasicChannelResult =
              null != basicChannel && PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          tmp = tmp6;
        }
        return tmp;
      });
    } else {
      found = items;
    }
    return found;
  }
  getViewerIds(currentUserActiveStream) {
    if (canSpectateDefault(MediaEngineStore)) {
      let encodeStreamKeyResult = currentUserActiveStream;
      if (typeof currentUserActiveStream !== "string") {
        const obj = StreamKeyUtils;
        encodeStreamKeyResult = obj.encodeStreamKey(currentUserActiveStream);
      }
      let tmp5 = null;
      if (null != encodeStreamKeyResult) {
        tmp5 = rtcStreams[encodeStreamKeyResult];
      }
      return null != tmp5 ? tmp5.viewerIds : [];
    } else {
      return [];
    }
  }
  getCurrentAppIntent() {
    return intent;
  }
  getStreamingState() {
    let tmp;
    const obj = {
      activeStreams: null,
      streamsByUserAndGuild: null,
      rtcStreams: null,
      streamerActiveStreamMetadatas: null,
    };
    if (canSpectateDefault(MediaEngineStore)) {
      const _Array = Array;
      obj.activeStreams = Array.from(map.entries());
      obj.streamsByUserAndGuild = streamsByUserAndGuild;
      obj.rtcStreams = rtcStreams;
      obj.streamerActiveStreamMetadatas = streamerActiveStreamMetadatas;
      tmp = obj;
    } else {
      obj.activeStreams = [];
      obj.streamsByUserAndGuild = {};
      obj.rtcStreams = {};
      obj.streamerActiveStreamMetadatas = {};
      tmp = obj;
    }
    return tmp;
  }
}
const prototype = ApplicationStreamingStore.prototype;
ApplicationStreamingStore.displayName = "ApplicationStreamingStore";
ApplicationStreamingStore.persistKey = "ApplicationStreamingStore";
let obj = {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(endReason) {
    let errorCode;
    let settings;
    ({ settings, errorCode } = endReason);
    let desktopSettings;
    endReason = endReason.endReason;
    if (settings != null) {
      desktopSettings = settings.desktopSettings;
    }
    if (null == desktopSettings) {
      let cameraSettings;
      if (settings != null) {
        cameraSettings = settings.cameraSettings;
      }
      if (null == cameraSettings) {
        if (null == errorCode) {
          return false;
        } else {
          let flag = false;
          let flag2 = false;
          const keys = Object.keys();
          if (keys !== undefined) {
            flag2 = flag;
            while (keys[tmp] !== undefined) {
              let value = map.get(tmp7);
              if (null == value) {
                continue;
              } else {
                let obj = { state: constants.FAILED, endReason, errorCode };
                set = map.set;
                let merged = Object.assign(value);
                let result = set(tmp7, obj);
                flag = true;
                continue;
              }
              continue;
            }
          }
          return flag2;
        }
      }
    }
    return false;
  },
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: function handleNativePickerUpdate(content) {
    function getGameForContent(content) {
      const obj = content.applications[Symbol.iterator]();
      while (obj !== undefined) {
        let gameForPID = RunningGameStore.getGameForPID(tmp.id);
        if (null != gameForPID) {
          obj.return();
          return gameForPID;
        }
      }
      const windows = content.windows;
      for (const item10023 of windows) {
        if (null != item10023.owningApplication) {
          let gameForPID1 = RunningGameStore.getGameForPID(tmp6.owningApplication.id);
          if (null != gameForPID1) {
            obj2.return();
            return gameForPID1;
          }
        }
        continue;
      }
    }
    content = content.content;
    if (null == content) {
      return false;
    } else {
      const tmp20 = getGameForContent(content);
      id = tmp20;
      pid = undefined;
      if (tmp20 != null) {
        pid = tmp20.pid;
      }
      if (tmp2) {
        const tmp6 = getTitleFromPickedStreamContentDefault(content);
        let obj = { pid, id };
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        if (null != tmp6) {
          obj.sourceName = tmp6;
        }
        let flag2 = false;
        let flag3 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag2;
          while (keys[tmp] !== undefined) {
            let tmp23 = streamerActiveStreamMetadatas[tmp12];
            let startsWithResult;
            if (tmp23 != null) {
              let sourceId = tmp23.sourceId;
              if (sourceId != null) {
                startsWithResult = sourceId.startsWith("prepicked:");
              }
            }
            if (!startsWithResult) {
              continue;
            } else {
              let obj2 = {};
              let merged = Object.assign(streamerActiveStreamMetadatas[tmp12]);
              let merged1 = Object.assign(obj);
              streamerActiveStreamMetadatas[tmp12] = obj2;
              flag2 = true;
              continue;
            }
            continue;
          }
        }
        return flag3;
      } else {
        return false;
      }
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(applicationStreamState) {
    let closure_5;
    let closure_6;
    applicationStreamState = applicationStreamState.applicationStreamState;
    streamsByUserAndGuild = applicationStreamState.streamsByUserAndGuild;
    map = new Map(applicationStreamState.activeStreams);
    ({ rtcStreams: closure_5, streamerActiveStreamMetadatas: closure_6 } = applicationStreamState);
    map1 = new Map();
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let channelId;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, selfStream) => {
      let guildId;
      let sessionId;
      let userId;
      ({ userId, guildId, channelId, sessionId } = selfStream);
      if (selfStream.selfStream) {
        let tmp2 = null;
        if (null != channelId) {
          let CALL;
          if (null != guildId) {
            CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          let obj = { streamType: CALL, ownerId: userId, guildId, channelId, discoverable: tmp };
          if (null == closure_4[obj.ownerId]) {
            closure_4[obj.ownerId] = {};
          }
          let guildId2 = obj.guildId;
          const tmp17 = closure_4[obj.ownerId];
          if (guildId2 == null) {
            guildId2 = closure_21;
          }
          tmp17[guildId2] = obj;
          return true;
        }
      }
      id = closure_10.getId();
      if (userId === id) {
        if (sessionId !== closure_10.getSessionId()) {
          let tmp5 = null;
          if (null != channelId.getChannelId()) {
            return acc;
          }
        }
      }
      let closure_2 = false;
      const item = set.forEach((item, index) => {
        const obj = StreamKeyUtils;
        const decodeStreamKeyResult = obj.decodeStreamKey(index);
        let tmp2 = decodeStreamKeyResult.ownerId === userId;
        if (tmp2) {
          guildId = decodeStreamKeyResult.guildId;
          if (guildId == null) {
            guildId = null;
          }
          let tmp5 = guildId;
          if (guildId == null) {
            tmp5 = null;
          }
          tmp2 = guildId === tmp5;
        }
        if (tmp2) {
          const tmp7 = set.delete(index) || closure_2;
          closure_2 = tmp7;
        }
      });
      let tmp8 = guildId;
      let tmp7 = closure_2;
      if (guildId == null) {
        tmp8 = closure_21;
      }
      let tmp10;
      if (closure_4[userId] != null) {
        tmp10 = tmp9[tmp8];
      }
      let flag = null != tmp10;
      if (flag) {
        delete closure_4[userId][tmp8];
        flag = true;
      }
      if (!flag) {
        flag = tmp7;
      }
      if (!flag) {
        flag = acc;
      }
      return flag;
    }, false);
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    const obj = StreamKeyUtils;
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    map.delete(streamKey);
    const obj2 = { state: constants.CONNECTING };
    set = map.set;
    const merged = Object.assign(decodeStreamKeyResult);
    const result = set(streamKey, obj2);
    if (decodeStreamKeyResult.ownerId === AuthenticationStore.getId()) {
      selfStreamParticipantsHidden[decodeStreamKeyResult.channelId] = false;
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let gameForPID;
    let guildId;
    let previewDisabled;
    let sourceIcon;
    let sourceId;
    let sourceName;
    let streamType;
    ({ streamType, guildId, channelId, pid, sourceId } = arg0);
    ({ sourceName, sourceIcon, previewDisabled } = arg0);
    const obj = sourceId(4942);
    const obj2 = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId() };
    const encodeStreamKeyResult = obj.encodeStreamKey(obj2);
    let startsWithResult;
    if (sourceId != null) {
      startsWithResult = sourceId.startsWith("prepicked:");
    }
    if (startsWithResult) {
      startsWithResult = null == pid;
    }
    let startsWithResult1;
    if (sourceId != null) {
      startsWithResult1 = sourceId.startsWith("prepicked:");
    }
    if (startsWithResult1) {
      if (null != closure_29) {
        gameForPID = closure_29;
      }
      if (gameForPID == null) {
        gameForPID = null;
      }
      id = undefined;
      if (gameForPID != null) {
        id = gameForPID.id;
      }
      const obj4 = { id, pid, sourceName, previewDisabled, sourceIcon, sourceId };
      closure_6[encodeStreamKeyResult] = obj4;
      map.delete(encodeStreamKeyResult);
      const obj5 = {
        streamType,
        guildId,
        channelId,
        ownerId: AuthenticationStore.getId(),
        state: constants.CONNECTING,
      };
      set = map.set;
      const result = set(encodeStreamKeyResult, obj5);
    }
    if (null != pid) {
      gameForPID = RunningGameStore.getGameForPID(pid);
    } else {
      gameForPID = null;
      if (null != sourceId) {
        const runningGames = RunningGameStore.getRunningGames();
        gameForPID = runningGames.find((windowHandle) => _slicedToArrayDefault(sourceId, windowHandle.windowHandle));
      }
    }
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    streamerActiveStreamMetadatas[streamKey.streamKey] = null;
  },
  STREAM_CREATE: handleStreamUpdate,
  STREAM_UPDATE: handleStreamUpdate,
  STREAM_TIMED_OUT: function handleStreamTimedOut(streamKey) {
    streamKey = streamKey.streamKey;
    const value = map.get(streamKey);
    if (null == value) {
      return false;
    } else {
      const obj = { state: constants.FAILED };
      set = map.set;
      const merged = Object.assign(value);
      const result = set(streamKey, obj);
    }
  },
  STREAM_DELETE: function handleStreamDelete(unavailable) {
    let reason;
    let streamKey;
    ({ streamKey, reason } = unavailable);
    let guildId;
    unavailable = unavailable.unavailable;
    delete rtcStreams[streamKey];
    let flag = false;
    if (reason === constants3.STREAM_FULL) {
      flag = !map1.has(streamKey);
      const _Date = Date;
      const result = map1.set(streamKey, Date.now());
    }
    const value = map.get(streamKey);
    if (null == value) {
      return flag;
    } else {
      let FAILED = constants.ENDED;
      if (unavailable) {
        FAILED = constants.RECONNECTING;
      } else if (reason === constants3.UNAUTHORIZED) {
        FAILED = constants.FAILED;
      } else if (reason === constants3.SAFETY_GUILD_RATE_LIMITED) {
        const obj = StreamKeyUtils;
        guildId = obj.decodeStreamKey(streamKey).guildId;
        const promise = asyncRequire(13643, dependencyMap.paths);
        promise.then((result) => {
          result.default(guildId);
        });
        FAILED = constants.ENDED;
      } else {
        const tmp7 = value.state === constants.FAILED && reason === constants3.USER_REQUESTED;
        if (tmp7) {
          FAILED = constants.FAILED;
        }
      }
      const obj2 = { state: FAILED };
      set = map.set;
      const merged = Object.assign(value);
      const result1 = set(streamKey, obj2);
      const tmp16 = FAILED === constants.ENDED && id !== streamKey;
      if (tmp16) {
        map.delete(streamKey);
      }
    }
  },
  STREAM_CLOSE: function handleStreamClose(streamKey) {
    map.delete(streamKey.streamKey);
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(arg0) {
    let channelId;
    let selfStreamHidden;
    ({ channelId, selfStreamHidden } = arg0);
    const obj = StreamKeyUtils;
    let isStreamKeyResult = obj.isStreamKey(id);
    if (isStreamKeyResult) {
      let hasItem;
      const obj2 = id;
      if (id != null) {
        hasItem = obj2.includes(AuthenticationStore.getId());
      }
      isStreamKeyResult = hasItem;
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = false === selfStreamParticipantsHidden[channelId];
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = true === selfStreamHidden;
    }
    if (isStreamKeyResult) {
      id = null;
    }
    selfStreamParticipantsHidden[channelId] = selfStreamHidden;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelectForFullStreams(channelId) {
    channelId = channelId.channelId;
    let closure_1;
    if (null == channelId) {
      return false;
    } else {
      closure_1 = false;
      const item = map1.forEach((item, index) => {
        const obj = StreamKeyUtils;
        if (obj.decodeStreamKey(index).channelId !== channelId) {
          const tmp2 = map1.delete(index) || closure_1;
          closure_1 = tmp2;
        }
      });
      return closure_1;
    }
  },
  SET_STREAM_APP_INTENT: function handleStreamSetAppIntent(intent) {
    intent = intent.intent;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    let state;
    let streamKey;
    ({ streamKey, state } = arg0);
    if (null == streamKey) {
      return false;
    } else {
      const value = map.get(streamKey);
      if (null != value) {
        if (value.state !== constants.ENDED) {
          if (value.state === constants.FAILED) {
            if (value.ownerId === AuthenticationStore.getId()) {
              return false;
            }
          }
          let ACTIVE = value.state;
          if (constants2.DISCONNECTED === state) {
            ACTIVE = constants.RECONNECTING;
          } else if (tmp2.RTC_CONNECTED === state) {
            ACTIVE = constants.ACTIVE;
          }
          if (ACTIVE === value.state) {
            return false;
          } else {
            const obj = { state: ACTIVE };
            set = map.set;
            const merged = Object.assign(value);
            const result = set(streamKey, obj);
          }
        }
      }
      return false;
    }
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleStreamCloseAll(id) {
    id = id.id;
    const channelId = id.channelId;
    const arr = Array.from(map.values());
    const item = arr.forEach((state) => {
      const obj = StreamKeyUtils;
      const tmp3 = obj.encodeStreamKey(state) !== id && state.state === constants.ENDED;
      if (tmp3) {
        const tmpResult = StreamKeyUtils;
        set.delete(tmpResult.encodeStreamKey(state));
      }
    });
    let isStreamKeyResult = null != id;
    if (isStreamKeyResult) {
      let obj = StreamKeyUtils;
      isStreamKeyResult = obj.isStreamKey(id);
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = id.includes(AuthenticationStore.getId());
    }
    if (isStreamKeyResult) {
      selfStreamParticipantsHidden[channelId] = false;
    }
  },
  CONNECTION_OPEN: reset,
  CONNECTION_CLOSED: reset,
  LOGOUT: reset,
};
const applicationStreamingStore = new ApplicationStreamingStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/ApplicationStreamingStore.tsx");

export default applicationStreamingStore;
