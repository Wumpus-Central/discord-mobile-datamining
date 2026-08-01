// === Module 4212: reset ===

// Module 4212 (reset)
import set from "set";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { StreamTypes } from "StreamIssueReportReasons";
import { PersistedStore } from "initialize";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
const require = arg1;
function reset() {
  const map = new Map();
  let closure_4 = {};
  let closure_5 = {};
  let closure_6 = {};
  const map1 = new Map();
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
  if (!tmp2) {
    map1.delete(streamKey);
  }
  const obj = {};
  const merged = Object.assign(require(4257) /* isStreamKey */.decodeStreamKey(streamKey));
  obj.state = paused ? closure_18.PAUSED : closure_18.ACTIVE;
  const result = map.set(streamKey, obj);
  closure_5[streamKey] = { streamKey, region, viewerIds };
}
({ ApplicationStreamStates: closure_18, RTCConnectionStates: closure_19, ApplicationStreamDeleteReasons: closure_20, NULL_STRING_GUILD_ID: closure_21, BasicPermissions: closure_22 } = ME);
let c24 = null;
let closure_25 = {};
let c26 = null;
let closure_27 = 10 * require("set").Millis.SECOND;
let map = new Map();
let closure_4 = {};
let closure_5 = {};
let closure_6 = {};
let map1 = new Map();
let c28;
let c29;
class ApplicationStreamingStore extends PersistedStore {
}
const prototype = ApplicationStreamingStore.prototype;
prototype["initialize"] = function initialize(selfStreamParticipantsHidden) {
  const items = [getUncachedChannelPermissions];
  this.syncWith(items, () => true);
  this.waitFor(fetchFingerprint, ensureGuildLoaded, getUncachedChannelPermissions, createRTCConnection, initialize, handleConnectionOpen);
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
    const tmp5 = closure_25;
  }
};
prototype["getState"] = function getState() {
  return { selfStreamParticipantsHidden: closure_25 };
};
prototype["isSelfStreamHidden"] = function isSelfStreamHidden(channelId) {
  let flag = dependencyMap4[channelId];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getLastActiveStream"] = function getLastActiveStream() {
  let tmp = null;
  if (importDefault(12877)(_detectH265HardwareDecode)) {
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
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    const _Array = Array;
    let items = Array.from(map.values());
  } else {
    items = [];
  }
  return items;
};
prototype["getAllActiveStreamsForChannel"] = function getAllActiveStreamsForChannel(channelId) {
  let closure_0 = channelId;
  if (importDefault(12877)(_detectH265HardwareDecode)) {
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
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    let value = map.get(id);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getActiveStreamForApplicationStream"] = function getActiveStreamForApplicationStream(streamForUser) {
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    if (null != streamForUser) {
      const self = this;
      let activeStreamForStreamKey = this.getActiveStreamForStreamKey(require(4257) /* isStreamKey */.encodeStreamKey(streamForUser));
      if (activeStreamForStreamKey == null) {
        activeStreamForStreamKey = null;
      }
      return activeStreamForStreamKey;
    }
  }
  return null;
};
prototype["getCurrentUserActiveStream"] = function getCurrentUserActiveStream() {
  const channel = store3.getChannel(store4.getVoiceChannelId());
  let activeStreamForUser = null;
  if (null != channel) {
    const self = this;
    const id = store2.getId();
    activeStreamForUser = this.getActiveStreamForUser(id, channel.getGuildId());
  }
  return activeStreamForUser;
};
prototype["isStreamMarkedFull"] = function isStreamMarkedFull(encodeStreamKeyResult) {
  return map1.has(encodeStreamKeyResult);
};
prototype["getActiveStreamForUser"] = function getActiveStreamForUser(id, guildId) {
  const self = this;
  let closure_0 = id;
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
  const channel = store3.getChannel(store4.getVoiceChannelId());
  if (null == channel) {
    return null;
  } else {
    const self = this;
    const id = store2.getId();
    const activeStreamForUser = this.getActiveStreamForUser(id, channel.getGuildId());
    let tmp4 = null;
    if (null != activeStreamForUser) {
      const obj2 = require(4257) /* isStreamKey */;
      let tmp8 = dependencyMap3[obj2.encodeStreamKey(obj2, activeStreamForUser)];
      if (tmp8 == null) {
        tmp8 = null;
      }
      tmp4 = tmp8;
    }
    return tmp4;
  }
};
prototype["getStreamerActiveStreamMetadataForStream"] = function getStreamerActiveStreamMetadataForStream(arg0) {
  let tmp = dependencyMap3[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getIsActiveStreamPreviewDisabled"] = function getIsActiveStreamPreviewDisabled(arg0) {
  let flag;
  if (dependencyMap3[arg0] != null) {
    flag = tmp.previewDisabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getAnyStreamForUser"] = function getAnyStreamForUser(userId) {
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    let tmp4 = null;
    if (null != dependencyMap[userId]) {
      const _Object = Object;
      const values = Object.values(tmp3);
      let found = values.find((channelId) => {
        basicChannel = basicChannel.getBasicChannel(channelId.channelId);
        let tmp2 = channelId.streamType === constants2.CALL;
        if (!tmp2) {
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = getUncachedChannelPermissions.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          tmp2 = canBasicChannelResult;
        }
        let flag = true;
        if (!tmp2) {
          const basicChannel1 = basicChannel.getBasicChannel(channelId.channelId);
          let first = null != basicChannel1;
          if (first) {
            const obj2 = callback(table[18]);
            first = obj2.canWatchStream(basicChannel1, updateVoiceState, createGuildRecordFromRust, getUncachedChannelPermissions, set)[0];
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
prototype["getAnyDiscoverableStreamForUser"] = function getAnyDiscoverableStreamForUser(arg0) {
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    let tmp4 = null;
    if (null != dependencyMap[arg0]) {
      const _Object = Object;
      const values = Object.values(tmp3);
      let found = values.find((channelId) => {
        basicChannel = basicChannel.getBasicChannel(channelId.channelId);
        let tmp2 = channelId.streamType === constants2.CALL;
        if (!tmp2) {
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = getUncachedChannelPermissions.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          tmp2 = canBasicChannelResult;
        }
        let flag = true;
        if (!tmp2) {
          const basicChannel1 = basicChannel.getBasicChannel(channelId.channelId);
          let first = null != basicChannel1;
          if (first) {
            const obj2 = callback(table[18]);
            first = obj2.canWatchStream(basicChannel1, updateVoiceState, createGuildRecordFromRust, getUncachedChannelPermissions, set)[0];
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
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    let tmp5;
    if (dependencyMap[id] != null) {
      let tmp6 = guildId;
      if (guildId == null) {
        tmp6 = closure_21;
      }
      tmp5 = tmp4[tmp6];
    }
    let tmp7 = null;
    if (null != tmp5) {
      const basicChannel = store3.getBasicChannel(tmp5.channelId);
      let tmp10 = tmp5.streamType === StreamTypes.CALL;
      if (!tmp10) {
        let canBasicChannelResult = null != basicChannel;
        if (canBasicChannelResult) {
          canBasicChannelResult = getUncachedChannelPermissions.canBasicChannel(constants4.VIEW_CHANNEL, basicChannel);
        }
        tmp10 = canBasicChannelResult;
      }
      let flag = true;
      if (!tmp10) {
        const basicChannel1 = obj.getBasicChannel(tmp5.channelId);
        let first = null != basicChannel1;
        if (first) {
          const obj2 = require(6014) /* canStreamInChannel */;
          first = obj2.canWatchStream(basicChannel1, updateVoiceState, createGuildRecordFromRust, getUncachedChannelPermissions, set)[0];
        }
        flag = first;
      }
      let tmp23 = null;
      if (flag) {
        tmp23 = tmp5;
      }
      tmp7 = tmp23;
      obj = store3;
    }
    return tmp7;
  } else {
    return null;
  }
};
prototype["getRTCStream"] = function getRTCStream(arg0) {
  let tmp = null;
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    let tmp4 = dependencyMap2[arg0];
    if (tmp4 == null) {
      tmp4 = null;
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["getAllApplicationStreams"] = function getAllApplicationStreams() {
  const items = [];
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    for (const key10011 in closure_4) {
      let tmp5 = key10011;
      let tmp6 = dependencyMap;
      let tmp7 = dependencyMap[key10011];
      let tmp8 = tmp7;
      let keys = Object.keys();
      if (keys === undefined) {
        continue;
      } else {
        let tmp4 = keys[tmp];
        while (tmp4 !== undefined) {
          let tmp10 = tmp4;
          let tmp11 = dependencyMap;
          let arr = items.push(dependencyMap[key10011][tmp4]);
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
            canBasicChannelResult = getUncachedChannelPermissions.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
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
  let closure_0 = id;
  const items = [];
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    for (const key10012 in closure_4) {
      let tmp5 = key10012;
      let tmp6 = dependencyMap;
      let tmp7 = dependencyMap[key10012];
      let tmp8 = tmp7;
      let keys = Object.keys();
      if (keys === undefined) {
        continue;
      } else {
        let tmp4 = keys[tmp];
        while (tmp4 !== undefined) {
          let tmp10 = tmp4;
          let tmp11 = dependencyMap;
          let arr = items.push(dependencyMap[key10012][tmp4]);
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
        const basicChannel = outer1_11.getBasicChannel(channelId.channelId);
        let tmp6 = channelId.streamType === outer1_23.CALL;
        if (!tmp6) {
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = outer1_14.canBasicChannel(outer1_22.VIEW_CHANNEL, basicChannel);
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
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    let encodeStreamKeyResult = currentUserActiveStream;
    if (typeof currentUserActiveStream !== "y") {
      encodeStreamKeyResult = require(4257) /* isStreamKey */.encodeStreamKey(currentUserActiveStream);
      const obj = require(4257) /* isStreamKey */;
    }
    let tmp5 = null;
    if (null != encodeStreamKeyResult) {
      tmp5 = dependencyMap2[encodeStreamKeyResult];
    }
    return null != tmp5 ? tmp5.viewerIds : [];
  } else {
    return [];
  }
};
prototype["getCurrentAppIntent"] = function getCurrentAppIntent() {
  return c26;
};
prototype["getStreamingState"] = function getStreamingState() {
  const obj = { activeStreams: null, streamsByUserAndGuild: null, rtcStreams: null, streamerActiveStreamMetadatas: null };
  if (importDefault(12877)(_detectH265HardwareDecode)) {
    const _Array = Array;
    obj[0] = Array.from(map.entries());
    obj[1] = closure_4;
    obj[2] = closure_5;
    obj[3] = closure_6;
    let tmp = obj;
  } else {
    obj[0] = [];
    obj[1] = {};
    obj[2] = {};
    obj[3] = {};
    tmp = obj;
  }
  return tmp;
};
ApplicationStreamingStore.displayName = "ApplicationStreamingStore";
ApplicationStreamingStore.persistKey = "ApplicationStreamingStore";
const applicationStreamingStore = new ApplicationStreamingStore(require("dispatcher"), {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(arg0) {
    let errorCode;
    let settings;
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
              let tmp15 = tmp8;
              let tmp16 = map;
              let value = map.get(tmp8);
              if (null == value) {
                continue;
              } else {
                let tmp9 = map;
                let obj = {};
                let tmp10 = obj;
                let tmp11 = value;
                let merged = Object.assign(value);
                let tmp13 = constants;
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
          let tmp2 = store;
          let gameForPID = store.getGameForPID(tmp.id);
          let tmp4 = gameForPID;
          if (null != gameForPID) {
            let tmp5 = obj;
            obj.return();
            return gameForPID;
          }
        }
        for (const item10023 of tmp6) {
          if (null != item10023.owningApplication) {
            let tmp8 = store;
            let tmp9 = item10023;
            let gameForPID1 = store.getGameForPID(tmp7.owningApplication.id);
            let tmp11 = gameForPID1;
            if (null != gameForPID1) {
              let tmp12 = obj2;
              obj2.return();
              return gameForPID1;
            }
          }
          continue;
        }
      })(content);
      const _undefined = tmp20;
      let pid;
      if (tmp20 != null) {
        pid = tmp20.pid;
      }
      if (tmp2) {
        const tmp6 = importDefault(12990)(content);
        let obj = { pid: null, id: null };
        obj[0] = pid;
        let id;
        if (_undefined != null) {
          id = _undefined.id;
        }
        obj[1] = id;
        if (null != tmp6) {
          obj.sourceName = tmp6;
        }
        let flag2 = false;
        let flag3 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag2;
          while (keys[tmp] !== undefined) {
            let tmp21 = tmp12;
            let tmp22 = dependencyMap3;
            let tmp23 = dependencyMap3[tmp12];
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
              let tmp14 = dependencyMap3;
              obj = {};
              let tmp15 = obj;
              let merged = Object.assign(dependencyMap3[tmp12]);
              let tmp17 = obj;
              let tmp18 = obj;
              let merged1 = Object.assign(obj);
              dependencyMap3[tmp12] = obj;
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
    const streamsByUserAndGuild = applicationStreamState.streamsByUserAndGuild;
    const map = new Map(applicationStreamState.activeStreams);
    ({ rtcStreams: closure_5, streamerActiveStreamMetadatas: closure_6 } = applicationStreamState);
    const map1 = new Map();
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, selfStream) => {
      let channelId;
      let guildId;
      let sessionId;
      let userId;
      ({ userId, guildId, channelId, sessionId } = selfStream);
      if (selfStream.selfStream) {
        if (null != channelId) {
          if (null != guildId) {
            let CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          const obj = { streamType: null, ownerId: null, guildId: null, channelId: null, discoverable: null };
          obj[0] = CALL;
          obj[1] = userId;
          obj[2] = guildId;
          obj[3] = channelId;
          obj[4] = tmp3;
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
      const id = store.getId();
      if (userId === id) {
        if (sessionId !== store.getSessionId()) {
          if (null != channelId.getChannelId()) {
            return arg0;
          }
        }
      }
      let c2 = false;
      const item = closure_7.forEach((arg0, streamKey) => {
        const decodeStreamKeyResult = userId(table[13]).decodeStreamKey(streamKey);
        let tmp2 = decodeStreamKeyResult.ownerId === userId;
        if (tmp2) {
          let guildId = decodeStreamKeyResult.guildId;
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
          table = outer1_7.delete(streamKey) || table;
          const tmp7 = outer1_7.delete(streamKey) || table;
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
        flag = c2;
      }
      if (!flag) {
        flag = arg0;
      }
      return flag;
    }, false);
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    let obj = require(4257) /* isStreamKey */;
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    map.delete(streamKey);
    obj = {};
    const merged = Object.assign(decodeStreamKeyResult);
    obj.state = constants.CONNECTING;
    const result = map.set(streamKey, obj);
    if (decodeStreamKeyResult.ownerId === store2.getId()) {
      closure_25[decodeStreamKeyResult.channelId] = false;
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let pid;
    let previewDisabled;
    let sourceIcon;
    let sourceId;
    let sourceName;
    let streamType;
    ({ streamType, guildId, channelId, pid, sourceId } = arg0);
    ({ sourceName, sourceIcon, previewDisabled } = arg0);
    let obj = sourceId(4257);
    obj = { streamType, guildId, channelId, ownerId: store2.getId() };
    const encodeStreamKeyResult = obj.encodeStreamKey(obj);
    let startsWithResult;
    if (sourceId != null) {
      startsWithResult = sourceId.startsWith("prepicked:");
    }
    if (startsWithResult) {
      startsWithResult = null == pid;
    }
    if (startsWithResult) {
      pid = c28;
    }
    let startsWithResult1;
    if (sourceId != null) {
      startsWithResult1 = sourceId.startsWith("prepicked:");
    }
    if (startsWithResult1) {
      if (null != c29) {
        let gameForPID = c29;
      }
      if (gameForPID == null) {
        gameForPID = null;
      }
      let id;
      if (gameForPID != null) {
        id = gameForPID.id;
      }
      obj = { id: null, pid: null, sourceName: null, previewDisabled: null, sourceIcon: null, sourceId: null };
      obj[0] = id;
      obj[1] = pid;
      obj[2] = sourceName;
      obj[3] = previewDisabled;
      obj[4] = sourceIcon;
      obj[5] = sourceId;
      closure_6[encodeStreamKeyResult] = obj;
      map.delete(encodeStreamKeyResult);
      const obj1 = { streamType: null, guildId: null, channelId: null, ownerId: null, state: null };
      obj1[0] = streamType;
      obj1[1] = guildId;
      obj1[2] = channelId;
      obj1[3] = store2.getId();
      obj1[4] = constants.CONNECTING;
      const result = map.set(encodeStreamKeyResult, obj1);
    }
    if (null != pid) {
      gameForPID = store.getGameForPID(pid);
    } else {
      gameForPID = null;
      if (null != sourceId) {
        const runningGames = store.getRunningGames();
        gameForPID = runningGames.find((windowHandle) => outer1_1(outer1_2[14])(sourceId, windowHandle.windowHandle));
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
    const value = map.get(streamKey);
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
    let reason;
    let streamKey;
    ({ streamKey, reason } = unavailable);
    let guildId;
    delete tmp[tmp2];
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
      if (unavailable.unavailable) {
        FAILED = tmp22.RECONNECTING;
      } else if (reason === tmp3.UNAUTHORIZED) {
        FAILED = tmp22.FAILED;
      } else if (reason === tmp3.SAFETY_GUILD_RATE_LIMITED) {
        let obj = guildId(4257);
        guildId = obj.decodeStreamKey(streamKey).guildId;
        guildId(1959)(12991, dependencyMap.paths).then((arg0) => {
          arg0.default(guildId);
        });
        FAILED = tmp22.ENDED;
        const promise = guildId(1959)(12991, dependencyMap.paths);
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
        tmp18 = c24 !== streamKey;
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
    let channelId;
    let selfStreamHidden;
    ({ channelId, selfStreamHidden } = arg0);
    let isStreamKeyResult = require(4257) /* isStreamKey */.isStreamKey(c24);
    if (isStreamKeyResult) {
      let hasItem;
      if (c24 != null) {
        hasItem = obj2.includes(store2.getId());
      }
      isStreamKeyResult = hasItem;
      obj2 = c24;
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = false === dependencyMap4[channelId];
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = true === selfStreamHidden;
    }
    if (isStreamKeyResult) {
      c24 = null;
    }
    dependencyMap4[channelId] = selfStreamHidden;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelectForFullStreams(channelId) {
    channelId = channelId.channelId;
    let c1;
    if (null == channelId) {
      return false;
    } else {
      c1 = false;
      const item = map1.forEach((arg0, streamKey) => {
        if (obj.decodeStreamKey(streamKey).channelId !== channelId) {
          c1 = outer1_7.delete(streamKey) || c1;
          const tmp2 = outer1_7.delete(streamKey) || c1;
        }
      });
      return c1;
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
          if (value.state === tmp10.FAILED) {
            if (value.ownerId === store2.getId()) {
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
      let tmp3 = callback(table[13]).encodeStreamKey(state) !== id;
      if (tmp3) {
        tmp3 = state.state === constants.ENDED;
      }
      if (tmp3) {
        set.delete(callback(table[13]).encodeStreamKey(state));
        const tmpResult = callback(table[13]);
      }
    });
    let isStreamKeyResult = null != id;
    if (isStreamKeyResult) {
      isStreamKeyResult = require(4257) /* isStreamKey */.isStreamKey(id);
      const obj = require(4257) /* isStreamKey */;
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = id.includes(store2.getId());
    }
    if (isStreamKeyResult) {
      closure_25[id.channelId] = false;
    }
  },
  CONNECTION_OPEN: reset,
  CONNECTION_CLOSED: reset,
  LOGOUT: reset
});
let result = require("fetchFingerprint").fileFinishedImporting("stores/ApplicationStreamingStore.tsx");

export default applicationStreamingStore;