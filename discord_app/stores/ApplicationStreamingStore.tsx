// === Module 4582: ApplicationStreamingStore ===

// Module 4582 (ApplicationStreamingStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 7726 */;
import canSpectateDefault from "canSpectate" /* 13801 */;
import windowSourceMatchesDefault from "windowSourceMatches" /* 13828 */;
import getTitleFromPickedStreamContentDefault from "getTitleFromPickedStreamContent" /* 13829 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function reset() {
  map = new Map();
  streamsByUserAndGuild = {};
  closure_5 = {};
  closure_6 = {};
  map1 = new Map();
}
function handleStreamUpdate(streamKey) {
  streamKey = streamKey.streamKey;
  ({ region, viewerIds, paused } = streamKey);
  value = map1.get(streamKey);
  let tmp2 = null == value;
  if (!tmp2) {
    const _Date = Date;
    tmp2 = Date.now() - value < closure_27;
  }
  if (!tmp2) {
    map1.delete(streamKey);
  }
  const obj = {};
  const merged = Object.assign(StreamKeyUtils.decodeStreamKey(streamKey));
  obj.state = paused ? constants.PAUSED : constants.ACTIVE;
  const result = map.set(streamKey, obj);
  closure_5[streamKey] = { streamKey, region, viewerIds };
}
const Constants = fn(1074);
({ ApplicationStreamStates: closure_18, RTCConnectionStates: closure_19, ApplicationStreamDeleteReasons: closure_20, NULL_STRING_GUILD_ID: closure_21, BasicPermissions: closure_22 } = Constants);
const StreamTypes = fn(4602).StreamTypes;
const selfStreamParticipantsHidden = {};
let intent = null;
let closure_27 = 10 * DurationsDefault.Millis.SECOND;
let map = new Map();
let streamsByUserAndGuild = {};
const rtcStreams = {};
const streamerActiveStreamMetadatas = {};
let map1 = new Map();
let pid;
let id;
const PersistedStore = initializeDefault.PersistedStore;
class ApplicationStreamingStore extends PersistedStore {
}
const prototype = ApplicationStreamingStore.prototype;
prototype["initialize"] = function initialize(selfStreamParticipantsHidden) {
  const items = [PermissionStore];
  this.syncWith(items, () => true);
  this.waitFor(AuthenticationStore, ChannelStore, PermissionStore, RTCConnectionStore, RunningGameStore, SelectedChannelStore);
  let prop;
  if (selfStreamParticipantsHidden != null) {
    prop = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
  }
  if (undefined !== prop) {
    let prop1;
    if (selfStreamParticipantsHidden != null) {
      prop1 = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
    }
    const merged = Object.assign(closure_25, prop1);
  }
};
prototype["getState"] = function getState() {
  return { selfStreamParticipantsHidden };
};
prototype["isSelfStreamHidden"] = function isSelfStreamHidden(channelId) {
  let flag = selfStreamParticipantsHidden[channelId];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getLastActiveStream"] = function getLastActiveStream() {
  let tmp = null;
  if (canSpectateDefault(MediaEngineStore)) {
    const _Array = Array;
    let arr = Array.from(map.values());
    arr = arr.pop();
    if (arr == null) {
      arr = null;
    }
    tmp = arr;
  }
  return tmp;
};
prototype["getAllActiveStreams"] = function getAllActiveStreams() {
  if (canSpectateDefault(MediaEngineStore)) {
    const _Array = Array;
    let items = Array.from(map.values());
  } else {
    items = [];
  }
  return items;
};
prototype["getAllActiveStreamsForChannel"] = function getAllActiveStreamsForChannel(channelId) {
  closure_0 = channelId;
  if (canSpectateDefault(MediaEngineStore)) {
    const _Array = Array;
    let found = Array.from(map.values()).filter((channelId) => channelId.channelId === closure_0);
    const arr = Array.from(map.values());
  } else {
    found = [];
  }
  return found;
};
prototype["getActiveStreamForStreamKey"] = function getActiveStreamForStreamKey(id) {
  let tmp = null;
  if (canSpectateDefault(MediaEngineStore)) {
    value = map.get(id);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getActiveStreamForApplicationStream"] = function getActiveStreamForApplicationStream(streamForUser) {
  if (canSpectateDefault(MediaEngineStore)) {
    if (null != streamForUser) {
      const self = this;
      let activeStreamForStreamKey = this.getActiveStreamForStreamKey(StreamKeyUtils.encodeStreamKey(streamForUser));
      if (activeStreamForStreamKey == null) {
        activeStreamForStreamKey = null;
      }
      return activeStreamForStreamKey;
    }
  }
  return null;
};
prototype["getCurrentUserActiveStream"] = function getCurrentUserActiveStream() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  let activeStreamForUser = null;
  if (null != channel) {
    const self = this;
    id = AuthenticationStore.getId();
    activeStreamForUser = this.getActiveStreamForUser(id, channel.getGuildId());
  }
  return activeStreamForUser;
};
prototype["isStreamMarkedFull"] = function isStreamMarkedFull(encodeStreamKeyResult) {
  return map1.has(encodeStreamKeyResult);
};
prototype["getActiveStreamForUser"] = function getActiveStreamForUser(id, guildId) {
  const self = this;
  closure_0 = id;
  const streamForUser = this.getStreamForUser(id, guildId);
  if (null != streamForUser) {
    let activeStreamForApplicationStream = self.getActiveStreamForApplicationStream(streamForUser);
  } else {
    const allActiveStreams = self.getAllActiveStreams();
    activeStreamForApplicationStream = allActiveStreams.find((ownerId) => ownerId.ownerId === closure_0);
    if (activeStreamForApplicationStream == null) {
      activeStreamForApplicationStream = null;
    }
  }
  return activeStreamForApplicationStream;
};
prototype["getStreamerActiveStreamMetadata"] = function getStreamerActiveStreamMetadata() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  if (null == channel) {
    return null;
  } else {
    const self = this;
    id = AuthenticationStore.getId();
    const activeStreamForUser = this.getActiveStreamForUser(id, channel.getGuildId());
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
};
prototype["getStreamerActiveStreamMetadataForStream"] = function getStreamerActiveStreamMetadataForStream(arg0) {
  let tmp = streamerActiveStreamMetadatas[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getIsActiveStreamPreviewDisabled"] = function getIsActiveStreamPreviewDisabled(arg0) {
  let flag;
  if (streamerActiveStreamMetadatas[arg0] != null) {
    flag = tmp.previewDisabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getAnyStreamForUser"] = function getAnyStreamForUser(userId) {
  if (canSpectateDefault(MediaEngineStore)) {
    let tmp4 = null;
    if (null != streamsByUserAndGuild[userId]) {
      const _Object = Object;
      const values = Object.values(tmp3);
      let found = values.find((channelId) => {
        basicChannel = basicChannel.getBasicChannel(channelId.channelId);
        let tmp2 = channelId.streamType === constants2.CALL;
        if (!tmp2) {
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          tmp2 = canBasicChannelResult;
        }
        let flag = true;
        if (!tmp2) {
          const basicChannel1 = basicChannel.getBasicChannel(channelId.channelId);
          let first = null != basicChannel1;
          if (first) {
            const obj2 = StreamPermissionUtils;
            first = obj2.canWatchStream(basicChannel1, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore)[0];
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
};
prototype["getAnyDiscoverableStreamForUser"] = function getAnyDiscoverableStreamForUser(id) {
  if (canSpectateDefault(MediaEngineStore)) {
    let tmp4 = null;
    if (null != streamsByUserAndGuild[id]) {
      const _Object = Object;
      const values = Object.values(tmp3);
      let found = values.find((channelId) => {
        basicChannel = basicChannel.getBasicChannel(channelId.channelId);
        let tmp2 = channelId.streamType === constants2.CALL;
        if (!tmp2) {
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          tmp2 = canBasicChannelResult;
        }
        let flag = true;
        if (!tmp2) {
          const basicChannel1 = basicChannel.getBasicChannel(channelId.channelId);
          let first = null != basicChannel1;
          if (first) {
            const obj2 = StreamPermissionUtils;
            first = obj2.canWatchStream(basicChannel1, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore)[0];
          }
          flag = first;
        }
        if (flag) {
          flag = false !== channelId.discoverable;
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
};
prototype["getStreamForUser"] = function getStreamForUser(id, guildId) {
  if (canSpectateDefault(MediaEngineStore)) {
    let tmp5;
    if (streamsByUserAndGuild[id] != null) {
      let tmp6 = guildId;
      if (guildId == null) {
        tmp6 = __initData;
      }
      tmp5 = tmp4[tmp6];
    }
    let tmp7 = null;
    if (null != tmp5) {
      const basicChannel = ChannelStore.getBasicChannel(tmp5.channelId);
      let tmp10 = tmp5.streamType === StreamTypes.CALL;
      if (!tmp10) {
        let canBasicChannelResult = null != basicChannel;
        if (canBasicChannelResult) {
          canBasicChannelResult = PermissionStore.canBasicChannel(constants4.VIEW_CHANNEL, basicChannel);
        }
        tmp10 = canBasicChannelResult;
      }
      let flag = true;
      if (!tmp10) {
        const basicChannel1 = obj.getBasicChannel(tmp5.channelId);
        let first = null != basicChannel1;
        if (first) {
          const obj2 = StreamPermissionUtils;
          first = obj2.canWatchStream(basicChannel1, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore)[0];
        }
        flag = first;
      }
      let tmp23 = null;
      if (flag) {
        tmp23 = tmp5;
      }
      tmp7 = tmp23;
      obj = ChannelStore;
    }
    return tmp7;
  } else {
    return null;
  }
};
prototype["getRTCStream"] = function getRTCStream(arg0) {
  let tmp = null;
  if (canSpectateDefault(MediaEngineStore)) {
    let tmp4 = rtcStreams[arg0];
    if (tmp4 == null) {
      tmp4 = null;
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["getAllApplicationStreams"] = function getAllApplicationStreams() {
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
    let found = items.filter((channelId) => {
      let tmp = null != channelId;
      if (tmp) {
        basicChannel = basicChannel.getBasicChannel(channelId.channelId);
        let tmp5 = channelId.streamType === constants2.CALL;
        if (!tmp5) {
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          tmp5 = canBasicChannelResult;
        }
        tmp = tmp5;
      }
      return tmp;
    });
  } else {
    found = items;
  }
  return found;
};
prototype["getAllApplicationStreamsForChannel"] = function getAllApplicationStreamsForChannel(id) {
  closure_0 = id;
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
    let found = items.filter((channelId) => {
      let tmp = null != channelId;
      if (tmp) {
        tmp = channelId.channelId === closure_0;
      }
      if (tmp) {
        const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
        let tmp6 = channelId.streamType === StreamTypes.CALL;
        if (!tmp6) {
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = PermissionStore.canBasicChannel(constants4.VIEW_CHANNEL, basicChannel);
          }
          tmp6 = canBasicChannelResult;
        }
        tmp = tmp6;
      }
      return tmp;
    });
  } else {
    found = items;
  }
  return found;
};
prototype["getViewerIds"] = function getViewerIds(currentUserActiveStream) {
  if (canSpectateDefault(MediaEngineStore)) {
    let encodeStreamKeyResult = currentUserActiveStream;
    if (typeof currentUserActiveStream !== "string") {
      encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(currentUserActiveStream);
    }
    let tmp5 = null;
    if (null != encodeStreamKeyResult) {
      tmp5 = rtcStreams[encodeStreamKeyResult];
    }
    return null != tmp5 ? tmp5.viewerIds : [];
  } else {
    return [];
  }
};
prototype["getCurrentAppIntent"] = function getCurrentAppIntent() {
  return intent;
};
prototype["getStreamingState"] = function getStreamingState() {
  const obj = { activeStreams: null, streamsByUserAndGuild: null, rtcStreams: null, streamerActiveStreamMetadatas: null };
  if (canSpectateDefault(MediaEngineStore)) {
    const _Array = Array;
    obj.activeStreams = Array.from(map.entries());
    obj.streamsByUserAndGuild = streamsByUserAndGuild;
    obj.rtcStreams = rtcStreams;
    obj.streamerActiveStreamMetadatas = streamerActiveStreamMetadatas;
    let tmp = obj;
  } else {
    obj.activeStreams = [];
    obj.streamsByUserAndGuild = {};
    obj.rtcStreams = {};
    obj.streamerActiveStreamMetadatas = {};
    tmp = obj;
  }
  return tmp;
};
ApplicationStreamingStore.displayName = "ApplicationStreamingStore";
ApplicationStreamingStore.persistKey = "ApplicationStreamingStore";
const applicationStreamingStore = new ApplicationStreamingStore(DispatcherDefault, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(arg0) {
    ({ settings, errorCode } = arg0);
    let desktopSettings;
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
              value = map.get(tmp8);
              if (null == value) {
                continue;
              } else {
                let obj = {};
                let merged = Object.assign(value);
                obj.state = constants.FAILED;
                obj.endReason = tmp2;
                obj.errorCode = errorCode;
                let result = map.set(tmp8, obj);
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
    content = content.content;
    if (null == content) {
      return false;
    } else {
      const tmp20 = (function getGameForContent(content) {
        const obj = content.applications[Symbol.iterator]();
        while (obj !== undefined) {
          let gameForPID = RunningGameStore.getGameForPID(tmp.id);
          if (null != gameForPID) {
            obj.return();
            return gameForPID;
          }
        }
        for (const item10023 of tmp6) {
          if (null != item10023.owningApplication) {
            let gameForPID1 = RunningGameStore.getGameForPID(tmp7.owningApplication.id);
            if (null != gameForPID1) {
              obj2.return();
              return gameForPID1;
            }
          }
          continue;
        }
      })(content);
      id = tmp20;
      pid = undefined;
      if (tmp20 != null) {
        pid = tmp20.pid;
      }
      if (tmp2) {
        const tmp6 = getTitleFromPickedStreamContentDefault(content);
        let obj = { pid, id: null };
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        obj.id = id;
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
              obj = {};
              let merged = Object.assign(streamerActiveStreamMetadatas[tmp12]);
              let merged1 = Object.assign(obj);
              streamerActiveStreamMetadatas[tmp12] = obj;
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
    applicationStreamState = applicationStreamState.applicationStreamState;
    streamsByUserAndGuild = applicationStreamState.streamsByUserAndGuild;
    map = new Map(applicationStreamState.activeStreams);
    ({ rtcStreams: closure_5, streamerActiveStreamMetadatas: closure_6 } = applicationStreamState);
    map1 = new Map();
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, selfStream) => {
      ({ userId, guildId, channelId, sessionId } = selfStream);
      if (selfStream.selfStream) {
        if (null != channelId) {
          if (null != guildId) {
            let CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          const obj = { streamType: CALL, ownerId: userId, guildId, channelId, discoverable: tmp3 };
          if (null == dependencyMap[obj.ownerId]) {
            dependencyMap[obj.ownerId] = {};
          }
          let guildId2 = obj.guildId;
          if (guildId2 == null) {
            guildId2 = closure_21;
          }
          dependencyMap[obj.ownerId][guildId2] = obj;
          return true;
        }
      }
      id = closure_10.getId();
      if (userId === id) {
        if (sessionId !== closure_10.getSessionId()) {
          if (null != channelId.getChannelId()) {
            return acc;
          }
        }
      }
      closure_2 = false;
      const item = set.forEach((item, index) => {
        const decodeStreamKeyResult = StreamKeyUtils.decodeStreamKey(index);
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
          closure_2 = set.delete(index) || closure_2;
          const tmp7 = set.delete(index) || closure_2;
        }
      });
      let tmp10 = guildId;
      if (guildId == null) {
        tmp10 = closure_21;
      }
      let tmp12;
      if (dependencyMap[userId] != null) {
        tmp12 = tmp11[tmp10];
      }
      let flag = null != tmp12;
      if (flag) {
        delete tmp[tmp2];
        flag = true;
      }
      if (!flag) {
        flag = closure_2;
      }
      if (!flag) {
        flag = acc;
      }
      return flag;
    }, false);
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    let obj = StreamKeyUtils;
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    map.delete(streamKey);
    obj = {};
    const merged = Object.assign(decodeStreamKeyResult);
    obj.state = constants.CONNECTING;
    const result = map.set(streamKey, obj);
    if (decodeStreamKeyResult.ownerId === AuthenticationStore.getId()) {
      closure_25[decodeStreamKeyResult.channelId] = false;
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    ({ streamType, guildId, channelId, pid, sourceId } = arg0);
    ({ sourceName, sourceIcon, previewDisabled } = arg0);
    sourceId(4612);
    let obj = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId() };
    const encodeStreamKeyResult = obj.encodeStreamKey(obj);
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
        let gameForPID = closure_29;
      }
      if (gameForPID == null) {
        gameForPID = null;
      }
      id = undefined;
      if (gameForPID != null) {
        id = gameForPID.id;
      }
      obj = { id, pid, sourceName, previewDisabled, sourceIcon, sourceId };
      closure_6[encodeStreamKeyResult] = obj;
      map.delete(encodeStreamKeyResult);
      const obj1 = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId(), state: constants.CONNECTING };
      const result = map.set(encodeStreamKeyResult, obj1);
    }
    if (null != pid) {
      gameForPID = RunningGameStore.getGameForPID(pid);
    } else {
      gameForPID = null;
      if (null != sourceId) {
        const runningGames = RunningGameStore.getRunningGames();
        gameForPID = runningGames.find((windowHandle) => windowSourceMatchesDefault(sourceId, windowHandle.windowHandle));
      }
    }
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    closure_6[streamKey.streamKey] = null;
  },
  STREAM_CREATE: handleStreamUpdate,
  STREAM_UPDATE: handleStreamUpdate,
  STREAM_TIMED_OUT: function handleStreamTimedOut(streamKey) {
    streamKey = streamKey.streamKey;
    value = map.get(streamKey);
    if (null == value) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(value);
      obj.state = constants.FAILED;
      const result = map.set(streamKey, obj);
    }
  },
  STREAM_DELETE: function handleStreamDelete(unavailable) {
    ({ streamKey, reason } = unavailable);
    let guildId;
    delete tmp[tmp2];
    let flag = false;
    if (reason === constants3.STREAM_FULL) {
      flag = !map1.has(streamKey);
      const _Date = Date;
      const result = map1.set(streamKey, Date.now());
    }
    value = map.get(streamKey);
    if (null == value) {
      return flag;
    } else {
      let FAILED = constants.ENDED;
      if (unavailable.unavailable) {
        FAILED = tmp22.RECONNECTING;
      } else if (reason === tmp3.UNAUTHORIZED) {
        FAILED = tmp22.FAILED;
      } else if (reason === tmp3.SAFETY_GUILD_RATE_LIMITED) {
        let obj = StreamKeyUtils;
        guildId = obj.decodeStreamKey(streamKey).guildId;
        asyncRequireImpl(13830, dependencyMap.paths).then((result) => {
          result.default(guildId);
        });
        FAILED = tmp22.ENDED;
        const promise = asyncRequireImpl(13830, dependencyMap.paths);
      } else {
        if (tmp9) {
          FAILED = tmp22.FAILED;
        }
        tmp9 = value.state === tmp22.FAILED && reason === tmp3.USER_REQUESTED;
      }
      obj = {};
      const merged = Object.assign(value);
      obj.state = FAILED;
      const result1 = map.set(streamKey, obj);
      let tmp18 = FAILED === tmp22.ENDED;
      if (tmp18) {
        tmp18 = id !== streamKey;
      }
      if (tmp18) {
        map.delete(streamKey);
      }
    }
  },
  STREAM_CLOSE: function handleStreamClose(streamKey) {
    map.delete(streamKey.streamKey);
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(arg0) {
    ({ channelId, selfStreamHidden } = arg0);
    let isStreamKeyResult = StreamKeyUtils.isStreamKey(id);
    if (isStreamKeyResult) {
      let hasItem;
      if (id != null) {
        hasItem = obj2.includes(AuthenticationStore.getId());
      }
      isStreamKeyResult = hasItem;
      obj2 = id;
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
    closure_1 = undefined;
    if (null == channelId) {
      return false;
    } else {
      closure_1 = false;
      const item = map1.forEach((item, index) => {
        if (obj.decodeStreamKey(index).channelId !== channelId) {
          closure_1 = map1.delete(index) || closure_1;
          const tmp2 = map1.delete(index) || closure_1;
        }
      });
      return closure_1;
    }
  },
  SET_STREAM_APP_INTENT: function handleStreamSetAppIntent(intent) {
    intent = intent.intent;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    ({ streamKey, state } = arg0);
    if (null == streamKey) {
      return false;
    } else {
      value = map.get(streamKey);
      if (null != value) {
        if (value.state !== constants.ENDED) {
          if (value.state === tmp10.FAILED) {
            if (value.ownerId === AuthenticationStore.getId()) {
              return false;
            }
          }
          let ACTIVE = value.state;
          if (constants2.DISCONNECTED === state) {
            ACTIVE = tmp10.RECONNECTING;
          } else if (tmp2.RTC_CONNECTED === state) {
            ACTIVE = tmp10.ACTIVE;
          }
          if (ACTIVE === value.state) {
            return false;
          } else {
            const obj = {};
            const merged = Object.assign(value);
            obj.state = ACTIVE;
            const result = map.set(streamKey, obj);
          }
        }
      }
      return false;
    }
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleStreamCloseAll(id) {
    id = id.id;
    const item = Array.from(map.values()).forEach((state) => {
      let tmp3 = StreamKeyUtils.encodeStreamKey(state) !== id;
      if (tmp3) {
        tmp3 = state.state === constants.ENDED;
      }
      if (tmp3) {
        set.delete(StreamKeyUtils.encodeStreamKey(state));
        const tmpResult = StreamKeyUtils;
      }
    });
    let isStreamKeyResult = null != id;
    if (isStreamKeyResult) {
      isStreamKeyResult = StreamKeyUtils.isStreamKey(id);
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = id.includes(AuthenticationStore.getId());
    }
    if (isStreamKeyResult) {
      closure_25[id.channelId] = false;
    }
  },
  CONNECTION_OPEN: reset,
  CONNECTION_CLOSED: reset,
  LOGOUT: reset
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/ApplicationStreamingStore.tsx");

export default applicationStreamingStore;