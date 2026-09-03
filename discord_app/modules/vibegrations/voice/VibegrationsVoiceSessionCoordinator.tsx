// === Module 14352: getCapabilitiesForSocket ===

// Module 14352 (getCapabilitiesForSocket)
import prototypeDefault from "prototype" /* 9520 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9807 */;
import apexExperimentDefault from "apexExperiment" /* 13720 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14355 */;
import closure_3 from "isFramePooled" /* 14353 */;
import closure_4 from "map" /* 9481 */;
import closure_5 from "fetchFingerprint" /* 1215 */;
import closure_6 from "_detectH265HardwareDecode" /* 4529 */;
import closure_7 from "createRTCConnection" /* 4554 */;
import closure_8 from "mergeGuildAvatar" /* 1921 */;
import closure_9 from "updateVoiceState" /* 4497 */;
import { RPCErrors } from "ME" /* 673 */;
import DesktopSources from "DesktopSources" /* 4542 */;
import set from "set" /* 2 */;

let set = arg1;
({ Features: unpackModuleId, MediaEngineContextTypes: closure_12 } = DesktopSources);
let closure_13 = { x: 0, y: 0, z: -1 };
class VibegrationsVoiceSessionCoordinator {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.session = null;
    obj.unsubscribeFrameLifecycle = null;
    obj.updateTimer = null;
    obj.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
      const session = obj.session;
      if (null != session) {
        if (closure_1_3.isFramePooled(session.frameId)) {
          const isFrameVisibleResult = obj2.isFrameVisible(session.frameId);
          if (session.backgrounded !== !isFrameVisibleResult) {
            session.backgrounded = tmp3;
            if (session.spatialEnabled) {
              if (isFrameVisibleResult) {
                obj.activateEffects(session);
              } else {
                obj.deactivateEffects(session);
              }
            }
          }
        } else {
          obj.release();
        }
        obj2 = closure_1_3;
      }
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
      if (null != self.session) {
        if (self.session.socketId === id.id) {
          if (self.session.frameId === frameId) {
            self.release();
          }
        }
        let obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_COMMAND;
        const tmp23 = new prototypeDefault(obj, "Another RPC session owns the voice session");
        throw tmp23;
      }
      obj = { id: null, socketId: null, frameId: null, applicationId: null, channelId: null, rtcConnectionId: null, mediaEngineConnectionId: null, spatialEnabled: false, backgrounded: null, sources: null, appliedUserIds: null };
      let obj2 = set(511);
      obj[0] = obj2.v4();
      obj[1] = id.id;
      obj[2] = frameId;
      obj[3] = applicationId;
      obj[4] = connectedRTCConnection.channelId;
      obj[5] = connectedRTCConnection.getRTCConnectionId();
      obj[6] = mediaEngineConnectionId;
      obj[8] = !frameVisible.isFrameVisible(frameId);
      obj[9] = [];
      const _Set = Set;
      set = new Set();
      obj[10] = set;
      self.session = obj;
      if (self.hasMediaEngineConnection(obj)) {
        if (self.unsubscribeFrameLifecycle == null) {
          self.unsubscribeFrameLifecycle = obj4.subscribe(self.handleFrameLifecycleChange);
        }
        return obj;
      } else {
        self.session = null;
        obj1 = { errorCode: null };
        obj1[0] = RPCErrors.INVALID_CHANNEL;
        const tmp15 = new prototypeDefault(obj1, "The voice connection is unavailable");
        throw tmp15;
      }
      obj4 = frameVisible;
    }
  }
  obj2 = { errorCode: RPCErrors.INVALID_CHANNEL };
  const validateFrameResult = this.validateFrame(id);
  throw new prototypeDefault(obj2, "Join a voice channel before starting a voice session");
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
    if (!validateSessionResult.backgrounded) {
      if (!self.activateEffects(validateSessionResult)) {
        obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_CHANNEL;
        const tmp25 = new prototypeDefault(obj, "The voice connection is unavailable");
        throw tmp25;
      }
    }
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
  this.deactivateEffects(validateSessionResult);
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
              obj[1] = callback(14354).toListenerRelativePosition(callback, user_id.position);
              return obj;
            }
          }
        }
        obj = { errorCode: closure_1_10.INVALID_PAYLOAD };
        let tmp6 = set(9520);
        tmp6 = new tmp6(obj, "Invalid spatial voice source " + user_id.user_id);
        throw tmp6;
      });
      if (!validateSessionResult.backgrounded) {
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
  this.validateSession(id, id);
  this.release();
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
prototype["getActiveSessionIdForChannel"] = function getActiveSessionIdForChannel(channelId) {
  const session = this.session;
  if (null != session) {
    if (session.channelId === channelId) {
      const rTCConnection = store3.getRTCConnection();
      let id = null;
      if (null != rTCConnection) {
        id = null;
        if (rTCConnection.channelId === session.channelId) {
          id = null;
          if (rTCConnection.getRTCConnectionId() === session.rtcConnectionId) {
            id = null;
            if (rTCConnection.getMediaEngineConnectionId() === session.mediaEngineConnectionId) {
              id = session.id;
            }
          }
        }
      }
      return id;
    }
  }
  return null;
};
prototype["releaseSocket"] = function releaseSocket(id) {
  const self = this;
  const session = this.session;
  let socketId;
  if (session != null) {
    socketId = session.socketId;
  }
  if (socketId === id) {
    self.release();
  }
};
prototype["releaseUnlessChannel"] = function releaseUnlessChannel(channelId) {
  const self = this;
  let tmp = null != this.session;
  if (tmp) {
    tmp = self.session.channelId !== channelId;
  }
  if (tmp) {
    self.release();
  }
};
prototype["release"] = function release() {
  const self = this;
  const unsubscribeFrameLifecycle = this.unsubscribeFrameLifecycle;
  if (unsubscribeFrameLifecycle != null) {
    const result = unsubscribeFrameLifecycle();
  }
  self.unsubscribeFrameLifecycle = null;
  const session = self.session;
  if (null != session) {
    self.cancelPendingUpdate();
    self.clearAppliedSources(session);
    self.session = null;
  }
};
prototype["reconcileParticipants"] = function reconcileParticipants() {
  const self = this;
  const session = this.session;
  if (null != session) {
    const rTCConnection = store3.getRTCConnection();
    if (null != rTCConnection) {
      if (rTCConnection.channelId === session.channelId) {
        if (rTCConnection.getRTCConnectionId() === session.rtcConnectionId) {
          if (rTCConnection.getMediaEngineConnectionId() === session.mediaEngineConnectionId) {
            if (session.spatialEnabled) {
              if (!self.getSpatialCapabilities().available) {
                session.spatialEnabled = false;
                session.sources = [];
                self.deactivateEffects(session);
              }
            }
            const participantIds = self.getParticipantIds(session.channelId);
            const sources = session.sources;
            session.sources = sources.filter((userId) => set.has(userId.userId));
            const items = [];
            HermesBuiltin.arraySpread(session.appliedUserIds, 0);
            const found = items.filter((arg0) => !set.has(arg0));
            if (0 !== found.length) {
              if (self.withMediaEngineConnection(session, (setUserPosition) => {
                for (const item10006 of found) {
                  let tmp = closure_1_13;
                  let setUserPositionResult = arg0.setUserPosition(item10006, closure_1_13);
                  continue;
                }
              })) {
                for (const item10048 of found) {
                  let appliedUserIds = session.appliedUserIds;
                  let deleteResult = appliedUserIds.delete(item10048);
                  continue;
                }
              } else {
                self.release();
              }
            }
          }
        }
      }
    }
    self.release();
  }
};
prototype["deactivateEffects"] = function deactivateEffects(session) {
  this.cancelPendingUpdate();
  this.clearAppliedSources(session);
};
prototype["activateEffects"] = function activateEffects(session) {
  const self = this;
  this.cancelPendingUpdate();
  const result = this.resetParticipantEffects(session);
  let flag = this.applySources(session);
  if (!flag) {
    self.release();
    flag = false;
  }
  return flag;
};
prototype["scheduleApply"] = function scheduleApply(validateSessionResult) {
  const self = this;
  closure_0 = validateSessionResult;
  if (null == this.updateTimer) {
    const _setTimeout = setTimeout;
    tmp.updateTimer = setTimeout(() => {
      self.updateTimer = null;
      if (tmp2) {
        if (!obj.applySources(tmp)) {
          obj.release();
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
prototype["clearAppliedSources"] = function clearAppliedSources(session) {
  closure_0 = session;
  if (0 !== session.appliedUserIds.size) {
    const self = this;
    const result = this.withMediaEngineConnection(session, (setUserPosition) => {
      for (const item10007 of tmp) {
        let tmp2 = closure_1_13;
        let setUserPositionResult = arg0.setUserPosition(item10007, closure_1_13);
        continue;
      }
    });
    const appliedUserIds = session.appliedUserIds;
    appliedUserIds.clear();
  }
};
prototype["resetParticipantEffects"] = function resetParticipantEffects(session) {
  const self = this;
  closure_1 = session;
  const id = store.getId();
  const result = this.withMediaEngineConnection(session, (setUserPosition) => {
    const participantIds = self.getParticipantIds(session.channelId);
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
prototype["hasMediaEngineConnection"] = function hasMediaEngineConnection(session) {
  return this.withMediaEngineConnection(session, () => {

  });
};
prototype["withMediaEngineConnection"] = function withMediaEngineConnection(session, arg1) {
  closure_0 = session;
  closure_1 = arg1;
  c2 = false;
  const mediaEngine = store2.getMediaEngine();
  mediaEngine.eachConnection((mediaEngineConnectionId) => {
    if (mediaEngineConnectionId.mediaEngineConnectionId === session.mediaEngineConnectionId) {
      c2 = true;
      callback(mediaEngineConnectionId);
    }
  }, constants2.DEFAULT);
  return c2;
};
prototype["cancelPendingUpdate"] = function cancelPendingUpdate() {
  const self = this;
  if (null != this.updateTimer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.updateTimer);
    self.updateTimer = null;
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
  this.validateFrame(id);
  const session = this.session;
  if (null != session) {
    if (session.id === id) {
      if (session.socketId === id.id) {
        if (session.frameId === tmp2) {
          if (session.applicationId === tmp3) {
            const rTCConnection = store3.getRTCConnection();
            if (null != rTCConnection) {
              if (rTCConnection.channelId === session.channelId) {
                if (rTCConnection.getRTCConnectionId() === session.rtcConnectionId) {
                  if (rTCConnection.getMediaEngineConnectionId() === session.mediaEngineConnectionId) {
                    return session;
                  }
                }
              }
            }
            self.release();
            let obj = { errorCode: null };
            obj[0] = RPCErrors.INVALID_CHANNEL;
            const tmp11 = new prototypeDefault(obj, "The voice session was invalidated");
            throw tmp11;
          }
        }
      }
    }
  }
  obj = { errorCode: RPCErrors.INVALID_COMMAND };
  throw new prototypeDefault(obj, "Unknown or stale voice session");
};
set = Object.create(VibegrationsVoiceSessionCoordinator.prototype);
set.session = null;
set.unsubscribeFrameLifecycle = null;
set.updateTimer = null;
set.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
  const session = obj.session;
  if (null != session) {
    if (closure_1_3.isFramePooled(session.frameId)) {
      const isFrameVisibleResult = obj2.isFrameVisible(session.frameId);
      if (session.backgrounded !== !isFrameVisibleResult) {
        session.backgrounded = tmp3;
        if (session.spatialEnabled) {
          if (isFrameVisibleResult) {
            obj.activateEffects(session);
          } else {
            obj.deactivateEffects(session);
          }
        }
      }
    } else {
      obj.release();
    }
    obj2 = closure_1_3;
  }
};
let result = set.fileFinishedImporting("modules/vibegrations/voice/VibegrationsVoiceSessionCoordinator.tsx");

export default set;
export const MAX_SOURCES = 50;