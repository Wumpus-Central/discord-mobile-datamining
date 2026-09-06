// discord_app/modules/vibegrations/voice/VibegrationsVoiceSessionCoordinator.tsx
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import RPCErrorDefault from "../../rpc/RPCError.tsx";
import SpatialAudioForVoiceExperimentDefault from "../../voice_panel/SpatialAudioForVoiceExperiment.tsx";
import validateEmbeddedAppFrameDefault from "../../rpc/helpers/validateEmbeddedAppFrame.tsx";
import FrameVisibilityStore from "../../frames/FrameVisibilityStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

let size = fn;
const RPCErrors = fn(1074).RPCErrors;
const Constants = fn(4585);
({ Features: closure_11, MediaEngineContextTypes: closure_12 } = Constants);
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
          item10014.pooled = FrameVisibilityStore.isFramePooled(tmp.frameId);
        }
        if (tmp.pooled) {
          if (!FrameVisibilityStore.isFramePooled(tmp.frameId)) {
            let releaseSessionResult = obj.releaseSession(tmp);
          }
          continue;
        }
        let tmp12 = !FrameVisibilityStore.isFrameVisible(tmp.frameId);
        let tmp13 = tmp12;
        if (tmp.backgrounded !== tmp12) {
          tmp.backgrounded = tmp13;
          if (!tmp13) {
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
  obj.connected = null != this.getConnectedRTCConnection();
  obj.spatial = spatialCapabilities;
  return obj;
};
prototype["getSpatialCapabilities"] = function getSpatialCapabilities() {
  let available = SpatialAudioForVoiceExperimentDefault.getConfig({
    location: "VibegrationsVoiceSessionCoordinator",
  }).enabled;
  if (available) {
    available = MediaEngineStore.supports(constants.SPATIAL_AUDIO);
  }
  return {
    available,
    source_positioning: available,
    source_gain: false,
    source_spatial_blend: false,
    listener_pose: available,
    room_size: false,
    reflections: false,
    max_sources: 50,
    max_updates_per_second: 20,
  };
};
prototype["getConnectedRTCConnection"] = function getConnectedRTCConnection() {
  const rTCConnection = RTCConnectionStore.getRTCConnection();
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
  const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(arg0));
  return values.flatMap((userId) => {
    user = user.getUser(userId.userId);
    if (null == user) {
      let items = [];
    } else {
      const obj = {
        user_id: userId.userId,
        username: null,
        global_name: null,
        avatar: null,
        mute: null,
        deaf: null,
        self_mute: null,
        self_deaf: null,
        self_video: null,
      };
      ({ username: obj.username, globalName } = user);
      if (globalName == null) {
        globalName = null;
      }
      obj.global_name = globalName;
      let avatar = user.avatar;
      if (avatar == null) {
        avatar = null;
      }
      obj.avatar = avatar;
      ({
        mute: obj.mute,
        deaf: obj.deaf,
        selfMute: obj.self_mute,
        selfDeaf: obj.self_deaf,
        selfVideo: obj.self_video,
      } = userId);
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
      value = sessions2.get(frameId);
      if (null != value) {
        self.releaseSession(value);
      }
      let focusSequence;
      if (value != null) {
        focusSequence = value.focusSequence;
      }
      if (focusSequence == null) {
        let num = 0;
        if (FrameVisibilityStore.isFrameVisible(frameId)) {
          const sum = self.focusSequence + 1;
          self.focusSequence = sum;
          num = sum;
        }
        focusSequence = num;
      }
      let obj = {
        id: size(1256).v4(),
        socketId: id.id,
        frameId,
        applicationId,
        channelId: connectedRTCConnection.channelId,
        rtcConnectionId: connectedRTCConnection.getRTCConnectionId(),
        mediaEngineConnectionId,
        spatialEnabled: false,
        focusSequence,
        backgrounded: !FrameVisibilityStore.isFrameVisible(frameId),
        pooled: FrameVisibilityStore.isFramePooled(frameId),
        sources: [],
        appliedUserIds: null,
        updateTimer: null,
      };
      const _Set = Set;
      const set = new Set();
      obj.appliedUserIds = set;
      if (self.hasMediaEngineConnection(obj)) {
        const sessions = self.sessions;
        const result = sessions.set(frameId, obj);
        if (self.unsubscribeFrameLifecycle == null) {
          self.unsubscribeFrameLifecycle = obj4.subscribe(self.handleFrameLifecycleChange);
        }
        return obj;
      } else {
        obj = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp19 = new RPCErrorDefault(obj, "The voice connection is unavailable");
        throw tmp19;
      }
      const obj3 = size(1256);
      obj4 = FrameVisibilityStore;
    }
  }
  const obj1 = { errorCode: RPCErrors.INVALID_CHANNEL };
  const validateFrameResult = this.validateFrame(id);
  throw new RPCErrorDefault(
    { errorCode: RPCErrors.INVALID_CHANNEL },
    "Join a voice channel before starting a voice session",
  );
};
prototype["enableSpatial"] = function enableSpatial(socket, session_id) {
  const self = this;
  const validateSessionResult = this.validateSession(socket, session_id);
  if (this.getSpatialCapabilities().available) {
    const audioMixerSettings = MediaEngineStore.getAudioMixerSettings();
    if (!tmp12) {
      let obj = {};
      const merged = Object.assign(audioMixerSettings);
      obj.enabled = true;
      obj.distanceAttenuationEnabled = true;
      const result = AudioActionCreatorsDefault.setAudioMixerSettings(obj);
    }
    validateSessionResult.spatialEnabled = true;
    self.syncSpatialHolder(validateSessionResult);
    const sessions = self.sessions;
    value = sessions.get(validateSessionResult.frameId);
    let spatialEnabled;
    if (value != null) {
      spatialEnabled = value.spatialEnabled;
    }
    obj = { errorCode: RPCErrors.INVALID_CHANNEL };
    const tmp29 = new RPCErrorDefault(obj, "The voice connection is unavailable");
    throw tmp29;
  } else {
    obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmp8 = new RPCErrorDefault(obj, "Spatial voice is not supported by this client");
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
      spatialEnabled = !tmp3.backgrounded;
    }
    if (spatialEnabled) {
      let tmp6 = null == tmp;
      if (!tmp6) {
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
      let obj = { errorCode: RPCErrors.INVALID_PAYLOAD };
      const tmp24 = new RPCErrorDefault(obj, "Spatial voice supports at most 50 sources");
      throw tmp24;
    } else {
      importDefault = self.getParticipantIds(validateSessionResult.channelId);
      dependencyMap = AuthenticationStore.getId();
      const _Set = Set;
      const set = new Set();
      validateSessionResult.sources = arr.map((user_id) => {
        user_id = user_id.user_id;
        if (user_id !== closure_2) {
          if (set.has(user_id)) {
            let obj = set;
            if (!set.has(user_id)) {
              obj.add(user_id);
              obj = { userId: user_id, position: size(14461).toListenerRelativePosition(closure_0, user_id.position) };
              return obj;
            }
          }
        }
        obj = { errorCode: RPCErrors.INVALID_PAYLOAD };
        let tmp6 = RPCErrorDefault;
        tmp6 = new tmp6(obj, "Invalid spatial voice source " + user_id.user_id);
        throw tmp6;
      });
      if (self.spatialHolder === validateSessionResult) {
        self.scheduleApply(validateSessionResult);
      }
    }
  } else {
    obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmp8 = new RPCErrorDefault(obj, "Enable spatial voice on this session before sending a spatial snapshot");
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
  const rTCConnection = RTCConnectionStore.getRTCConnection();
  const sessions = this.sessions;
  const items = [...sessions.values()];
  const found = items.filter((channelId) => {
    let tmp = channelId.channelId === closure_0;
    if (tmp) {
      tmp = null != closure_1;
    }
    if (tmp) {
      tmp = closure_1.channelId === channelId.channelId;
    }
    if (tmp) {
      tmp = closure_1.getRTCConnectionId() === channelId.rtcConnectionId;
    }
    if (tmp) {
      tmp = closure_1.getMediaEngineConnectionId() === channelId.mediaEngineConnectionId;
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
  const rTCConnection = RTCConnectionStore.getRTCConnection();
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
          self.getParticipantIds(item10012.channelId);
          const sources = item10012.sources;
          item10012.sources = sources.filter((userId) => set.has(userId.userId));
          const items = [];
          HermesBuiltin.arraySpread(item10012.appliedUserIds, 0);
          const found = items.filter((item) => !set.has(item));
          if (0 !== found.length) {
            if (
              self.withMediaEngineConnection(item10012, (setUserPosition) => {
                for (const item10006 of found) {
                  let setUserPositionResult = arg0.setUserPosition(item10006, closure_13);
                  continue;
                }
              })
            ) {
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
  const set = new Set(sources.map((userId) => userId.userId));
  const items = [...sources.appliedUserIds];
  closure_2 = items.filter((item) => !set.has(item));
  const result = this.withMediaEngineConnection(sources, (setUserPosition) => {
    for (const item10006 of closure_2) {
      let setUserPositionResult = arg0.setUserPosition(item10006, closure_13);
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
        let setUserPositionResult = arg0.setUserPosition(item10007, closure_13);
        continue;
      }
    });
    appliedUserIds = appliedUserIds.appliedUserIds;
    appliedUserIds.clear();
  }
};
prototype["resetParticipantEffects"] = function resetParticipantEffects(result) {
  const self = this;
  const channelId = result;
  const id = AuthenticationStore.getId();
  result = this.withMediaEngineConnection(result, (setUserPosition) => {
    const participantIds = self.getParticipantIds(channelId.channelId);
    for (const item10011 of participantIds) {
      if (item10011 !== closure_0) {
        let setUserPositionResult = arg0.setUserPosition(tmp2, closure_13);
      }
      continue;
    }
  });
};
prototype["getParticipantIds"] = function getParticipantIds(channelId) {
  return new Set(Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)));
};
prototype["hasMediaEngineConnection"] = function hasMediaEngineConnection(item10012) {
  return this.withMediaEngineConnection(item10012, () => {});
};
prototype["withMediaEngineConnection"] = function withMediaEngineConnection(item10012, arg1) {
  closure_1 = arg1;
  c2 = false;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.eachConnection((mediaEngineConnectionId) => {
    if (mediaEngineConnectionId.mediaEngineConnectionId === item10012.mediaEngineConnectionId) {
      c2 = true;
      closure_1(mediaEngineConnectionId);
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
  const frameByIframeId = FramesStore.getFrameByIframeId(tmp3.iframeId);
  if (null != frameByIframeId) {
    if (frameByIframeId.applicationId === tmp3.applicationId) {
      let obj = { frameId: null, applicationId: null };
      ({ id: obj.frameId, applicationId: obj.applicationId } = frameByIframeId);
      return obj;
    }
  }
  obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
  throw new RPCErrorDefault(obj, "The RPC socket does not belong to this Frame");
};
prototype["validateSession"] = function validateSession(id, id) {
  const self = this;
  const validateFrameResult = this.validateFrame(id);
  const sessions = this.sessions;
  value = sessions.get(validateFrameResult.frameId);
  if (null != value) {
    if (value.id === id) {
      if (value.socketId === id.id) {
        if (value.applicationId === validateFrameResult.applicationId) {
          const rTCConnection = RTCConnectionStore.getRTCConnection();
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
          let obj = { errorCode: RPCErrors.INVALID_CHANNEL };
          const tmp10 = new RPCErrorDefault(obj, "The voice session was invalidated");
          throw tmp10;
        }
      }
    }
  }
  obj = { errorCode: RPCErrors.INVALID_COMMAND };
  throw new RPCErrorDefault(obj, "Unknown or stale voice session");
};
size = Object.create(VibegrationsVoiceSessionCoordinator.prototype);
size.sessions = new Map();
size.spatialHolder = null;
size.focusSequence = 0;
size.unsubscribeFrameLifecycle = null;
size.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
  const sessions = obj.sessions;
  const items = [...sessions.values()];
  for (const item10014 of items) {
    let tmp = item10014;
    if (!item10014.pooled) {
      item10014.pooled = FrameVisibilityStore.isFramePooled(tmp.frameId);
    }
    if (tmp.pooled) {
      if (!FrameVisibilityStore.isFramePooled(tmp.frameId)) {
        let releaseSessionResult = obj.releaseSession(tmp);
      }
      continue;
    }
    let tmp12 = !FrameVisibilityStore.isFrameVisible(tmp.frameId);
    let tmp13 = tmp12;
    if (tmp.backgrounded !== tmp12) {
      tmp.backgrounded = tmp13;
      if (!tmp13) {
        let sum = obj.focusSequence + 1;
        obj.focusSequence = sum;
        tmp.focusSequence = sum;
      }
    }
  }
  obj.syncSpatialHolder();
};
size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/voice/VibegrationsVoiceSessionCoordinator.tsx");

export default size;
export const MAX_SOURCES = 50;
