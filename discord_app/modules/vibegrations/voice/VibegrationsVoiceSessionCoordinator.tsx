// === Module 14459: getCapabilitiesForSocket ===

// Module 14459 (getCapabilitiesForSocket)
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9089 */;
import prototypeDefault from "prototype" /* 9554 */;
import apexExperimentDefault from "apexExperiment" /* 13826 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14462 */;
import closure_3 from "isFramePooled" /* 14460 */;
import closure_4 from "map" /* 9510 */;
import closure_5 from "fetchFingerprint" /* 502 */;
import closure_6 from "_detectH265HardwareDecode" /* 1908 */;
import closure_7 from "createRTCConnection" /* 4583 */;
import closure_8 from "mergeGuildAvatar" /* 1371 */;
import closure_9 from "updateVoiceState" /* 4579 */;
import { RPCErrors } from "ME" /* 1074 */;
import DesktopSources from "DesktopSources" /* 4585 */;
import set from "set" /* 2 */;

let set = arg1;
({ Features: unpackModuleId, MediaEngineContextTypes: closure_12 } = DesktopSources);
let closure_13 = { x: 0, y: 0, z: -1 };
class VibegrationsVoiceSessionCoordinator {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj.sessions = map;
    obj.spatialHolder = null;
    obj.focusSequence = 0;
    obj.unsubscribeFrameLifecycle = null;
    obj.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
      const sessions = obj.sessions;
      const items = [...sessions.values()];
      for (const item10014 of items) {
        let tmp = item10014;
        if (!item10014.pooled) {
          let tmp2 = closure_1_3;
          let tmp3 = item10014;
          item10014.pooled = closure_1_3.isFramePooled(tmp.frameId);
        }
        let tmp4 = item10014;
        if (tmp.pooled) {
          let tmp5 = closure_1_3;
          let tmp6 = item10014;
          if (!closure_1_3.isFramePooled(tmp.frameId)) {
            let tmp7 = obj;
            let tmp8 = item10014;
            let releaseSessionResult = obj.releaseSession(tmp);
          }
          continue;
        }
        let tmp10 = closure_1_3;
        let tmp11 = item10014;
        let tmp12 = !closure_1_3.isFrameVisible(tmp.frameId);
        let tmp13 = tmp12;
        if (tmp.backgrounded !== tmp12) {
          let tmp14 = item10014;
          let tmp15 = tmp12;
          tmp.backgrounded = tmp13;
          if (!tmp13) {
            let tmp16 = item10014;
            let tmp17 = obj;
            let sum = obj.focusSequence + 1;
            obj.focusSequence = sum;
            tmp.focusSequence = sum;
          }
        }
      }
      obj.syncSpatialHolder();
    };
    return obj;
  }
}
const prototype = VibegrationsVoiceSessionCoordinator.prototype;
prototype["getCapabilitiesForSocket"] = function getCapabilitiesForSocket(socket) {
  this.validateFrame(socket);
  return this.getCapabilities();
};
prototype["getParticipantsForSession"] = function getParticipantsForSession(socket, session_id) {
  return this.getParticipants(this.validateSession(socket, session_id).channelId);
};
prototype["getCapabilities"] = function getCapabilities() {
  const obj = { available: true, connected: null, participant_updates: true, binary_speaking: true, spatial: null };
  const spatialCapabilities = this.getSpatialCapabilities();
  obj[1] = null != this.getConnectedRTCConnection();
  obj[4] = spatialCapabilities;
  return obj;
};
prototype["getSpatialCapabilities"] = function getSpatialCapabilities() {
  let available = apexExperimentDefault.getConfig({ location: "VibegrationsVoiceSessionCoordinator" }).enabled;
  if (available) {
    available = store2.supports(constants.SPATIAL_AUDIO);
  }
  return { available, source_positioning: available, source_gain: false, source_spatial_blend: false, listener_pose: available, room_size: false, reflections: false, max_sources: 50, max_updates_per_second: 20 };
};
prototype["getConnectedRTCConnection"] = function getConnectedRTCConnection() {
  const rTCConnection = store3.getRTCConnection();
  let tmp = null;
  if (null != rTCConnection) {
    tmp = null;
    if ("RTC_CONNECTED" === rTCConnection.state) {
      tmp = null;
      if (null != rTCConnection.getMediaEngineConnectionId()) {
        tmp = rTCConnection;
      }
    }
  }
  return tmp;
};
prototype["getParticipants"] = function getParticipants(arg0) {
  const values = Object.values(store4.getVoiceStatesForChannel(arg0));
  return values.flatMap((userId) => {
    user = user.getUser(userId.userId);
    if (null == user) {
      let items = [];
    } else {
      const obj = { user_id: null, username: null, global_name: null, avatar: null, mute: null, deaf: null, self_mute: null, self_deaf: null, self_video: null };
      obj[0] = userId.userId;
      ({ username: obj[1], globalName } = user);
      if (globalName == null) {
        globalName = null;
      }
      obj[2] = globalName;
      let avatar = user.avatar;
      if (avatar == null) {
        avatar = null;
      }
      obj[3] = avatar;
      ({ mute: obj[4], deaf: obj[5], selfMute: obj[6], selfDeaf: obj[7], selfVideo: obj[8] } = userId);
      items = [obj];
    }
    return items;
  });
};
prototype["start"] = function start(id) {
  const self = this;
  ({ frameId, applicationId } = this.validateFrame(id));
  const connectedRTCConnection = this.getConnectedRTCConnection();
  if (connectedRTCConnection != null) {
    const mediaEngineConnectionId = connectedRTCConnection.getMediaEngineConnectionId();
  }
  if (null != connectedRTCConnection) {
    if (null != mediaEngineConnectionId) {
      const sessions2 = self.sessions;
      const value = sessions2.get(frameId);
      if (null != value) {
        self.releaseSession(value);
      }
      let focusSequence;
      if (value != null) {
        focusSequence = value.focusSequence;
      }
      if (focusSequence == null) {
        let num = 0;
        if (closure_3.isFrameVisible(frameId)) {
          const sum = self.focusSequence + 1;
          self.focusSequence = sum;
          num = sum;
        }
        focusSequence = num;
      }
      let obj = { id: null, socketId: null, frameId: null, applicationId: null, channelId: null, rtcConnectionId: null, mediaEngineConnectionId: null, spatialEnabled: false, focusSequence: null, backgrounded: null, pooled: null, sources: null, appliedUserIds: null, updateTimer: null };
      obj[0] = set(1256).v4();
      obj[1] = id.id;
      obj[2] = frameId;
      obj[3] = applicationId;
      obj[4] = connectedRTCConnection.channelId;
      obj[5] = connectedRTCConnection.getRTCConnectionId();
      obj[6] = mediaEngineConnectionId;
      obj[8] = focusSequence;
      obj[9] = !closure_3.isFrameVisible(frameId);
      obj[10] = closure_3.isFramePooled(frameId);
      obj[11] = [];
      const _Set = Set;
      set = new Set();
      obj[12] = set;
      if (self.hasMediaEngineConnection(obj)) {
        const sessions = self.sessions;
        const result = sessions.set(frameId, obj);
        if (self.unsubscribeFrameLifecycle == null) {
          self.unsubscribeFrameLifecycle = obj4.subscribe(self.handleFrameLifecycleChange);
        }
        return obj;
      } else {
        obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_CHANNEL;
        const tmp19 = new prototypeDefault(obj, "The voice connection is unavailable");
        throw tmp19;
      }
      const obj3 = set(1256);
      obj4 = closure_3;
    }
  }
  obj1 = { errorCode: RPCErrors.INVALID_CHANNEL };
  const validateFrameResult = this.validateFrame(id);
  throw new prototypeDefault({ errorCode: RPCErrors.INVALID_CHANNEL }, "Join a voice channel before starting a voice session");
};
prototype["enableSpatial"] = function enableSpatial(socket, session_id) {
  const self = this;
  const validateSessionResult = this.validateSession(socket, session_id);
  if (this.getSpatialCapabilities().available) {
    const audioMixerSettings = store2.getAudioMixerSettings();
    if (!tmp12) {
      let obj = {};
      const merged = Object.assign(audioMixerSettings);
      obj.enabled = true;
      obj.distanceAttenuationEnabled = true;
      const result = trackDeviceChangedDefault.setAudioMixerSettings(obj);
      const obj2 = trackDeviceChangedDefault;
    }
    validateSessionResult.spatialEnabled = true;
    self.syncSpatialHolder(validateSessionResult);
    const sessions = self.sessions;
    const value = sessions.get(validateSessionResult.frameId);
    let spatialEnabled;
    if (value != null) {
      spatialEnabled = value.spatialEnabled;
    }
    obj = { errorCode: null };
    obj[0] = RPCErrors.INVALID_CHANNEL;
    const tmp29 = new prototypeDefault(obj, "The voice connection is unavailable");
    throw tmp29;
  } else {
    obj = { errorCode: null };
    obj[0] = RPCErrors.INVALID_COMMAND;
    const tmp8 = new prototypeDefault(obj, "Spatial voice is not supported by this client");
    throw tmp8;
  }
};
prototype["disableSpatial"] = function disableSpatial(socket, session_id) {
  const validateSessionResult = this.validateSession(socket, session_id);
  validateSessionResult.spatialEnabled = false;
  this.retireSpatialClaim(validateSessionResult);
};
prototype["retireSpatialClaim"] = function retireSpatialClaim(validateSessionResult) {
  const self = this;
  if (this.spatialHolder !== validateSessionResult) {
    self.deactivateEffects(validateSessionResult);
  }
  self.syncSpatialHolder();
};
prototype["syncSpatialHolder"] = function syncSpatialHolder(validateSessionResult) {
  const self = this;
  let tmp = validateSessionResult;
  if (validateSessionResult === undefined) {
    tmp = null;
  }
  while (true) {
    let result = self.pickFocusedSpatialSession();
    let spatialHolder = self.spatialHolder;
    let tmp3 = spatialHolder === result;
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = null != result;
    }
    if (tmp4) {
      tmp4 = result === tmp;
    }
    if (tmp3) {
      if (!tmp4) {
        break;
      }
    }
    self.spatialHolder = result;
    if (!tmp4) {
      tmp4 = null == spatialHolder;
    }
    if (!tmp4) {
      let deactivateEffectsResult = self.deactivateEffects(spatialHolder);
    }
    if (null != result) {
      if (!self.activateEffects(result)) {
        self.spatialHolder = null;
        continue;
      }
    }
  }
};
prototype["pickFocusedSpatialSession"] = function pickFocusedSpatialSession() {
  let tmp = null;
  const sessions = this.sessions;
  const values = sessions.values();
  for (const item10011 of values) {
    let tmp3 = item10011;
    let spatialEnabled = item10011.spatialEnabled;
    if (spatialEnabled) {
      let tmp4 = item10011;
      spatialEnabled = !tmp3.backgrounded;
    }
    if (spatialEnabled) {
      let tmp5 = tmp;
      let tmp6 = null == tmp;
      if (!tmp6) {
        let tmp7 = item10011;
        let tmp8 = tmp;
        tmp6 = tmp3.focusSequence > tmp.focusSequence;
      }
      spatialEnabled = tmp6;
    }
    if (spatialEnabled) {
      tmp = item10011;
    }
    continue;
  }
  return tmp;
};
prototype["update"] = function update(id, id, arg2, arr) {
  const self = this;
  closure_0 = arg2;
  const validateSessionResult = this.validateSession(id, id);
  if (validateSessionResult.spatialEnabled) {
    if (arr.length > 50) {
      let obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_PAYLOAD;
      const tmp24 = new prototypeDefault(obj, "Spatial voice supports at most 50 sources");
      throw tmp24;
    } else {
      importDefault = self.getParticipantIds(validateSessionResult.channelId);
      dependencyMap = store.getId();
      const _Set = Set;
      set = new Set();
      validateSessionResult.sources = arr.map((user_id) => {
        user_id = user_id.user_id;
        if (user_id !== dependencyMap) {
          if (set.has(user_id)) {
            let obj = set;
            if (!set.has(user_id)) {
              obj.add(user_id);
              obj = { userId: null, position: null };
              obj[0] = user_id;
              obj[1] = callback(14461).toListenerRelativePosition(callback, user_id.position);
              return obj;
            }
          }
        }
        obj = { errorCode: closure_1_10.INVALID_PAYLOAD };
        let tmp6 = set(9554);
        tmp6 = new tmp6(obj, "Invalid spatial voice source " + user_id.user_id);
        throw tmp6;
      });
      if (self.spatialHolder === validateSessionResult) {
        self.scheduleApply(validateSessionResult);
      }
    }
  } else {
    obj = { errorCode: null };
    obj[0] = RPCErrors.INVALID_COMMAND;
    const tmp8 = new prototypeDefault(obj, "Enable spatial voice on this session before sending a spatial snapshot");
    throw tmp8;
  }
};
prototype["stop"] = function stop(id, id) {
  this.releaseSession(this.validateSession(id, id));
};
prototype["validateEventSubscription"] = function validateEventSubscription(socket, session_id) {
  this.validateSession(socket, session_id);
};
prototype["getParticipantsForEventSubscription"] = function getParticipantsForEventSubscription(socket, id) {
  try {
    const self = this;
    return this.getParticipants(this.validateSession(socket, id).channelId);
  } catch (err) {
    return [];
  }
};
prototype["getActiveSessionIdsForChannel"] = function getActiveSessionIdsForChannel(channelId) {
  closure_0 = channelId;
  const rTCConnection = store3.getRTCConnection();
  const sessions = this.sessions;
  const items = [...sessions.values()];
  const found = items.filter((channelId) => {
    let tmp = channelId.channelId === closure_0;
    if (tmp) {
      tmp = null != store;
    }
    if (tmp) {
      tmp = store.channelId === channelId.channelId;
    }
    if (tmp) {
      tmp = store.getRTCConnectionId() === channelId.rtcConnectionId;
    }
    if (tmp) {
      tmp = store.getMediaEngineConnectionId() === channelId.mediaEngineConnectionId;
    }
    return tmp;
  });
  return found.map((id) => id.id);
};
prototype["releaseSocket"] = function releaseSocket(id) {
  const self = this;
  const sessions = this.sessions;
  const items = [...sessions.values()];
  for (const item10014 of items) {
    if (item10014.socketId === arg0) {
      let tmp2 = item10014;
      let releaseSessionResult = self.releaseSession(tmp);
    }
    continue;
  }
};
prototype["releaseUnlessChannel"] = function releaseUnlessChannel(channelId) {
  const self = this;
  const sessions = this.sessions;
  const items = [...sessions.values()];
  for (const item10014 of items) {
    if (item10014.channelId !== arg0) {
      let tmp2 = item10014;
      let releaseSessionResult = self.releaseSession(tmp);
    }
    continue;
  }
};
prototype["release"] = function release() {
  const self = this;
  const sessions = this.sessions;
  const items = [...sessions.values()];
  for (const item10012 of items) {
    let releaseSessionResult = self.releaseSession(item10012);
    continue;
  }
};
prototype["releaseSession"] = function releaseSession(value) {
  const self = this;
  const sessions = this.sessions;
  if (sessions.get(value.frameId) === value) {
    const sessions2 = self.sessions;
    sessions2.delete(value.frameId);
    self.retireSpatialClaim(value);
    if (0 === self.sessions.size) {
      const unsubscribeFrameLifecycle = self.unsubscribeFrameLifecycle;
      if (unsubscribeFrameLifecycle != null) {
        const result = unsubscribeFrameLifecycle();
      }
      self.unsubscribeFrameLifecycle = null;
    }
  }
};
prototype["reconcileParticipants"] = function reconcileParticipants() {
  const self = this;
  const sessions = this.sessions;
  const items = [...sessions.values()];
  for (const item10012 of items) {
    let reconcileSessionResult = self.reconcileSession(item10012);
    continue;
  }
};
prototype["reconcileSession"] = function reconcileSession(item10012) {
  const self = this;
  const rTCConnection = store3.getRTCConnection();
  if (null != rTCConnection) {
    if (rTCConnection.channelId === item10012.channelId) {
      if (rTCConnection.getRTCConnectionId() === item10012.rtcConnectionId) {
        if (rTCConnection.getMediaEngineConnectionId() === item10012.mediaEngineConnectionId) {
          if (item10012.spatialEnabled) {
            if (!self.getSpatialCapabilities().available) {
              item10012.spatialEnabled = false;
              item10012.sources = [];
              self.retireSpatialClaim(item10012);
            }
          }
          const participantIds = self.getParticipantIds(item10012.channelId);
          const sources = item10012.sources;
          item10012.sources = sources.filter((userId) => set.has(userId.userId));
          const items = [];
          HermesBuiltin.arraySpread(item10012.appliedUserIds, 0);
          const found = items.filter((arg0) => !set.has(arg0));
          if (0 !== found.length) {
            if (self.withMediaEngineConnection(item10012, (setUserPosition) => {
              for (const item10006 of found) {
                let tmp = closure_1_13;
                let setUserPositionResult = arg0.setUserPosition(item10006, closure_1_13);
                continue;
              }
            })) {
              for (const item10054 of found) {
                let appliedUserIds = arg0.appliedUserIds;
                let deleteResult = appliedUserIds.delete(item10054);
                continue;
              }
            } else {
              self.demoteFromSpatial(item10012);
              self.syncSpatialHolder();
            }
          }
        }
      }
    }
  }
  self.releaseSession(item10012);
};
prototype["deactivateEffects"] = function deactivateEffects(spatialHolder) {
  this.cancelPendingUpdate(spatialHolder);
  this.clearAppliedSources(spatialHolder);
};
prototype["demoteFromSpatial"] = function demoteFromSpatial(appliedUserIds) {
  appliedUserIds.spatialEnabled = false;
  appliedUserIds = appliedUserIds.appliedUserIds;
  appliedUserIds.clear();
  this.cancelPendingUpdate(appliedUserIds);
};
prototype["activateEffects"] = function activateEffects(result) {
  const self = this;
  this.cancelPendingUpdate(result);
  result = this.resetParticipantEffects(result);
  let flag = this.applySources(result);
  if (!flag) {
    self.demoteFromSpatial(result);
    flag = false;
  }
  return flag;
};
prototype["scheduleApply"] = function scheduleApply(validateSessionResult) {
  const self = this;
  closure_0 = validateSessionResult;
  if (null == validateSessionResult.updateTimer) {
    const _setTimeout = setTimeout;
    validateSessionResult.updateTimer = setTimeout(() => {
      closure_0.updateTimer = null;
      if (self.spatialHolder === closure_0) {
        if (!obj.applySources(tmp)) {
          obj.demoteFromSpatial(tmp);
          obj.syncSpatialHolder();
        }
      }
    }, 50);
  }
};
prototype["applySources"] = function applySources(sources) {
  closure_0 = sources;
  sources = sources.sources;
  set = new Set(sources.map((userId) => userId.userId));
  const items = [...sources.appliedUserIds];
  closure_2 = items.filter((arg0) => !set.has(arg0));
  const result = this.withMediaEngineConnection(sources, (setUserPosition) => {
    for (const item10006 of closure_2) {
      let tmp = closure_1_13;
      let setUserPositionResult = arg0.setUserPosition(item10006, closure_1_13);
      continue;
    }
    for (const item10017 of tmp3) {
      let setUserPositionResult1 = arg0.setUserPosition(item10017.userId, item10017.position);
      continue;
    }
  });
  if (result) {
    sources.appliedUserIds = set;
  }
  return result;
};
prototype["clearAppliedSources"] = function clearAppliedSources(appliedUserIds) {
  closure_0 = appliedUserIds;
  if (0 !== appliedUserIds.appliedUserIds.size) {
    const self = this;
    const result = this.withMediaEngineConnection(appliedUserIds, (setUserPosition) => {
      for (const item10007 of tmp) {
        let tmp2 = closure_1_13;
        let setUserPositionResult = arg0.setUserPosition(item10007, closure_1_13);
        continue;
      }
    });
    appliedUserIds = appliedUserIds.appliedUserIds;
    appliedUserIds.clear();
  }
};
prototype["resetParticipantEffects"] = function resetParticipantEffects(result) {
  const self = this;
  closure_1 = result;
  const id = store.getId();
  result = this.withMediaEngineConnection(result, (setUserPosition) => {
    const participantIds = self.getParticipantIds(channelId.channelId);
    for (const item10011 of participantIds) {
      let tmp3 = closure_0;
      if (item10011 !== closure_0) {
        let tmp4 = item10011;
        let tmp5 = closure_1_13;
        let setUserPositionResult = arg0.setUserPosition(tmp2, closure_1_13);
      }
      continue;
    }
  });
};
prototype["getParticipantIds"] = function getParticipantIds(channelId) {
  return new Set(Object.keys(store4.getVoiceStatesForChannel(channelId)));
};
prototype["hasMediaEngineConnection"] = function hasMediaEngineConnection(item10012) {
  return this.withMediaEngineConnection(item10012, () => {

  });
};
prototype["withMediaEngineConnection"] = function withMediaEngineConnection(item10012, arg1) {
  closure_0 = item10012;
  closure_1 = arg1;
  c2 = false;
  const mediaEngine = store2.getMediaEngine();
  mediaEngine.eachConnection((mediaEngineConnectionId) => {
    if (mediaEngineConnectionId.mediaEngineConnectionId === item10012.mediaEngineConnectionId) {
      c2 = true;
      callback(mediaEngineConnectionId);
    }
  }, constants2.DEFAULT);
  return c2;
};
prototype["cancelPendingUpdate"] = function cancelPendingUpdate(updateTimer) {
  if (null != updateTimer.updateTimer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(updateTimer.updateTimer);
    updateTimer.updateTimer = null;
  }
};
prototype["validateFrame"] = function validateFrame(id) {
  const tmp3 = validateEmbeddedAppFrameDefault(id);
  frameByIframeId = frameByIframeId.getFrameByIframeId(tmp3.iframeId);
  if (null != frameByIframeId) {
    if (frameByIframeId.applicationId === tmp3.applicationId) {
      let obj = { frameId: null, applicationId: null };
      ({ id: obj[0], applicationId: obj[1] } = frameByIframeId);
      return obj;
    }
  }
  obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
  throw new prototypeDefault(obj, "The RPC socket does not belong to this Frame");
};
prototype["validateSession"] = function validateSession(id, id) {
  const self = this;
  const validateFrameResult = this.validateFrame(id);
  const sessions = this.sessions;
  const value = sessions.get(validateFrameResult.frameId);
  if (null != value) {
    if (value.id === id) {
      if (value.socketId === id.id) {
        if (value.applicationId === validateFrameResult.applicationId) {
          const rTCConnection = store3.getRTCConnection();
          if (null != rTCConnection) {
            if (rTCConnection.channelId === value.channelId) {
              if (rTCConnection.getRTCConnectionId() === value.rtcConnectionId) {
                if (rTCConnection.getMediaEngineConnectionId() === value.mediaEngineConnectionId) {
                  return value;
                }
              }
            }
          }
          self.releaseSession(value);
          let obj = { errorCode: null };
          obj[0] = RPCErrors.INVALID_CHANNEL;
          const tmp10 = new prototypeDefault(obj, "The voice session was invalidated");
          throw tmp10;
        }
      }
    }
  }
  obj = { errorCode: RPCErrors.INVALID_COMMAND };
  throw new prototypeDefault(obj, "Unknown or stale voice session");
};
set = Object.create(VibegrationsVoiceSessionCoordinator.prototype);
set.sessions = new Map();
set.spatialHolder = null;
set.focusSequence = 0;
set.unsubscribeFrameLifecycle = null;
set.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
  const sessions = obj.sessions;
  const items = [...sessions.values()];
  for (const item10014 of items) {
    let tmp = item10014;
    if (!item10014.pooled) {
      let tmp2 = closure_1_3;
      let tmp3 = item10014;
      item10014.pooled = closure_1_3.isFramePooled(tmp.frameId);
    }
    let tmp4 = item10014;
    if (tmp.pooled) {
      let tmp5 = closure_1_3;
      let tmp6 = item10014;
      if (!closure_1_3.isFramePooled(tmp.frameId)) {
        let tmp7 = obj;
        let tmp8 = item10014;
        let releaseSessionResult = obj.releaseSession(tmp);
      }
      continue;
    }
    let tmp10 = closure_1_3;
    let tmp11 = item10014;
    let tmp12 = !closure_1_3.isFrameVisible(tmp.frameId);
    let tmp13 = tmp12;
    if (tmp.backgrounded !== tmp12) {
      let tmp14 = item10014;
      let tmp15 = tmp12;
      tmp.backgrounded = tmp13;
      if (!tmp13) {
        let tmp16 = item10014;
        let tmp17 = obj;
        let sum = obj.focusSequence + 1;
        obj.focusSequence = sum;
        tmp.focusSequence = sum;
      }
    }
  }
  obj.syncSpatialHolder();
};
let result = set.fileFinishedImporting("modules/vibegrations/voice/VibegrationsVoiceSessionCoordinator.tsx");

export default set;
export const MAX_SOURCES = 50;