// discord_app/modules/conjure/voice/ConjureVoiceSessionCoordinator.tsx
import Constants2 from "../../../Constants.tsx";
import v1 from "../../../../_runtime/01266_v1.js";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import RPCErrorDefault from "../../rpc/RPCError.tsx";
import SpatialAudioForVoiceExperimentDefault from "../../voice_panel/SpatialAudioForVoiceExperiment.tsx";
import ConjureVoiceGeometry from "ConjureVoiceGeometry.tsx";
import validateEmbeddedAppFrameDefault from "../../rpc/helpers/validateEmbeddedAppFrame.tsx";
import FrameVisibilityStore from "../../frames/FrameVisibilityStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import Constants from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, set, user, user_id;

let closure_12;
let unpackModuleId;
const RPCErrors = Constants2.RPCErrors;
({ Features: unpackModuleId, MediaEngineContextTypes: closure_12 } = Constants);
let closure_13 = { x: 0, y: 0, z: -1 };
class ConjureVoiceSessionCoordinator {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.sessions = new Map();
    obj.spatialHolder = null;
    obj.focusSequence = 0;
    obj.unsubscribeFrameLifecycle = null;
    obj.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
      const sessions = obj.sessions;
      const items = [...sessions.values()];
      for (const item10014 of items) {
        if (!item10014.pooled) {
          item10014.pooled = FrameVisibilityStore.isFramePooled(item10014.frameId);
        }
        if (item10014.pooled) {
          if (!FrameVisibilityStore.isFramePooled(item10014.frameId)) {
            let releaseSessionResult = obj.releaseSession(item10014);
          }
          continue;
        }
        let tmp12 = !FrameVisibilityStore.isFrameVisible(item10014.frameId);
        let tmp13 = tmp12;
        if (item10014.backgrounded !== tmp12) {
          item10014.backgrounded = tmp13;
          if (!tmp13) {
            let sum = obj.focusSequence + 1;
            obj.focusSequence = sum;
            item10014.focusSequence = sum;
          }
        }
      }
      obj.syncSpatialHolder();
    };
    new Map();
    return obj;
  }
  getCapabilitiesForSocket(socket) {
    this.validateFrame(socket);
    return this.getCapabilities();
  }
  getParticipantsForSession(socket, session_id) {
    return this.getParticipants(this.validateSession(socket, session_id).channelId);
  }
  getCapabilities() {
    let spatialCapabilities;
    const obj = {
      available: true,
      connected: null != this.getConnectedRTCConnection(),
      participant_updates: true,
      binary_speaking: true,
      spatial: spatialCapabilities,
    };
    spatialCapabilities = this.getSpatialCapabilities();
    return obj;
  }
  getSpatialCapabilities() {
    const obj = SpatialAudioForVoiceExperimentDefault;
    const available =
      obj.getConfig({ location: "VibegrationsVoiceSessionCoordinator" }).enabled &&
      MediaEngineStore.supports(unpackModuleId.SPATIAL_AUDIO);
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
  }
  getConnectedRTCConnection() {
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
  }
  getParticipants(arg0) {
    const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(arg0));
    return values.flatMap((userId) => {
      let avatar;
      let globalName;
      let items;
      user = user.getUser(userId.userId);
      if (null == user) {
        items = [];
      } else {
        const obj = {
          user_id: userId.userId,
          username: null,
          global_name: globalName,
          avatar,
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
        avatar = user.avatar;
        if (avatar == null) {
          avatar = null;
        }
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
  }
  start(id) {
    let applicationId;
    let channelId;
    let frameId;
    let mediaEngineConnectionId;
    let obj3;
    const self = this;
    ({ frameId, applicationId, channelId } = this.validateFrame(id));
    this.validateFrame(id);
    const connectedRTCConnection = this.getConnectedRTCConnection();
    if (connectedRTCConnection != null) {
      mediaEngineConnectionId = connectedRTCConnection.getMediaEngineConnectionId();
    }
    if (null != connectedRTCConnection) {
      if (null != mediaEngineConnectionId) {
        if (channelId !== connectedRTCConnection.channelId) {
          const self6 = this;
          const self7 = this;
          const obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
          const tmp22 = new RPCErrorDefault(obj, "Only an app running in your voice channel can start a voice session");
          throw tmp22;
        } else {
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
            if (FrameVisibilityStore.isFrameVisible(frameId)) {
              const sum = self.focusSequence + 1;
              self.focusSequence = sum;
              num = sum;
            }
            focusSequence = num;
          }
          const obj2 = {
            id: obj3.v4(),
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
            appliedUserIds: set,
            updateTimer: null,
          };
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          obj3 = v1;
          set = new Set();
          if (self.hasMediaEngineConnection(obj2)) {
            const sessions = self.sessions;
            const result = sessions.set(frameId, obj2);
            if (self.unsubscribeFrameLifecycle == null) {
              self.unsubscribeFrameLifecycle = FrameVisibilityStore.subscribe(self.handleFrameLifecycleChange);
            }
            return obj2;
          } else {
            const self4 = this;
            const self5 = this;
            const obj5 = { errorCode: RPCErrors.INVALID_CHANNEL };
            const tmp15 = new RPCErrorDefault(obj5, "The voice connection is unavailable");
            throw tmp15;
          }
        }
      }
    }
    const obj6 = { errorCode: RPCErrors.INVALID_CHANNEL };
    const tmp24 = new RPCErrorDefault(obj6, "Join a voice channel before starting a voice session");
    throw tmp24;
  }
  enableSpatial(socket, session_id) {
    const self = this;
    const validateSessionResult = this.validateSession(socket, session_id);
    if (this.getSpatialCapabilities().available) {
      const audioMixerSettings = MediaEngineStore.getAudioMixerSettings();
      const tmp10 = true === audioMixerSettings.enabled && true === audioMixerSettings.distanceAttenuationEnabled;
      if (!tmp10) {
        const obj2 = { enabled: true, distanceAttenuationEnabled: true };
        const setAudioMixerSettings = AudioActionCreatorsDefault.setAudioMixerSettings;
        AudioActionCreatorsDefault;
        const merged = Object.assign(audioMixerSettings);
        const result = setAudioMixerSettings(obj2);
      }
      validateSessionResult.spatialEnabled = true;
      self.syncSpatialHolder(validateSessionResult);
      const sessions = self.sessions;
      const value = sessions.get(validateSessionResult.frameId);
      let spatialEnabled;
      if (value != null) {
        spatialEnabled = value.spatialEnabled;
      }
      const self4 = this;
      const self5 = this;
      const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
      const tmp26 = new RPCErrorDefault(obj3, "The voice connection is unavailable");
      throw tmp26;
    } else {
      const self2 = this;
      const self3 = this;
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp6 = new RPCErrorDefault(obj, "Spatial voice is not supported by this client");
      throw tmp6;
    }
  }
  disableSpatial(socket, session_id) {
    const validateSessionResult = this.validateSession(socket, session_id);
    validateSessionResult.spatialEnabled = false;
    this.retireSpatialClaim(validateSessionResult);
  }
  retireSpatialClaim(validateSessionResult) {
    const self = this;
    if (this.spatialHolder !== validateSessionResult) {
      self.deactivateEffects(validateSessionResult);
    }
    self.syncSpatialHolder();
  }
  syncSpatialHolder() {
    const self = this;
    let tmp = validateSessionResult;
    if (validateSessionResult === undefined) {
      tmp = null;
    }
    while (true) {
      let result = self.pickFocusedSpatialSession();
      let spatialHolder = self.spatialHolder;
      let tmp3 = spatialHolder === result;
      let tmp4 = tmp3 && null != result && result === tmp;
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
  }
  pickFocusedSpatialSession() {
    let tmp = null;
    const sessions = this.sessions;
    const values = sessions.values();
    for (const item10011 of values) {
      let spatialEnabled = item10011.spatialEnabled && !item10011.backgrounded;
      if (spatialEnabled) {
        let tmp6 = null == tmp;
        if (!tmp6) {
          tmp6 = item10011.focusSequence > tmp.focusSequence;
        }
        spatialEnabled = tmp6;
      }
      if (spatialEnabled) {
        tmp = item10011;
      }
      continue;
    }
    return tmp;
  }
  update(id, id2, arg2, arr) {
    let closure_2;
    const self = this;
    let closure_0 = arg2;
    const validateSessionResult = this.validateSession(id, id);
    if (validateSessionResult.spatialEnabled) {
      if (arr.length > 50) {
        let obj2 = { errorCode: RPCErrors.INVALID_PAYLOAD };
        const self6 = this;
        const self7 = this;
        const tmp18 = new RPCErrorDefault(obj2, "Spatial voice supports at most 50 sources");
        throw tmp18;
      } else {
        importDefault = self.getParticipantIds(validateSessionResult.channelId);
        dependencyMap = AuthenticationStore.getId();
        const _Set = Set;
        const self4 = this;
        const self5 = this;
        set = new Set();
        validateSessionResult.sources = arr.map((user_id) => {
          let obj3;
          user_id = user_id.user_id;
          if (user_id !== closure_2) {
            if (set.has(user_id)) {
              if (!set.has(user_id)) {
                set.add(user_id);
                const obj2 = {
                  userId: user_id,
                  position: obj3.toListenerRelativePosition(closure_0, user_id.position),
                };
                obj3 = ConjureVoiceGeometry;
                return obj2;
              }
            }
          }
          const obj4 = { errorCode: RPCErrors.INVALID_PAYLOAD };
          const tmp6 = RPCErrorDefault;
          const tmp62 = new tmp6(obj4, "Invalid spatial voice source " + user_id.user_id);
          throw tmp62;
        });
        if (self.spatialHolder === validateSessionResult) {
          self.scheduleApply(validateSessionResult);
        }
      }
    } else {
      const self2 = this;
      const self3 = this;
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      let tmp6 = new RPCErrorDefault(obj, "Enable spatial voice on this session before sending a spatial snapshot");
      throw tmp6;
    }
  }
  stop(id, id2) {
    this.releaseSession(this.validateSession(id, id));
  }
  validateEventSubscription(socket, session_id) {
    this.validateSession(socket, session_id);
  }
  getParticipantsForEventSubscription(socket, id) {
    try {
      const self = this;
      return this.getParticipants(this.validateSession(socket, id).channelId);
    } catch (err) {
      return [];
    }
  }
  getActiveSessionIdsForChannel(channelId) {
    let closure_0 = channelId;
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    const sessions = this.sessions;
    const items = [...sessions.values()];
    const found = items.filter((channelId) => {
      const tmp =
        channelId.channelId === closure_0 &&
        null != closure_1 &&
        closure_1.channelId === channelId.channelId &&
        closure_1.getRTCConnectionId() === channelId.rtcConnectionId &&
        closure_1.getMediaEngineConnectionId() === channelId.mediaEngineConnectionId;
      return tmp;
    });
    return found.map((id) => id.id);
  }
  releaseSocket(id) {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10014 of items) {
      if (item10014.socketId === id) {
        let releaseSessionResult = self.releaseSession(tmp);
      }
      continue;
    }
  }
  releaseUnlessChannel(channelId) {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10014 of items) {
      if (item10014.channelId !== channelId) {
        let releaseSessionResult = self.releaseSession(tmp);
      }
      continue;
    }
  }
  release() {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10012 of items) {
      let releaseSessionResult = self.releaseSession(item10012);
      continue;
    }
  }
  releaseSession(value) {
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
  }
  reconcileParticipants() {
    const self = this;
    const sessions = this.sessions;
    const items = [...sessions.values()];
    for (const item10012 of items) {
      let reconcileSessionResult = self.reconcileSession(item10012);
      continue;
    }
  }
  reconcileSession(item10012) {
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
            set = self.getParticipantIds(item10012.channelId);
            const sources = item10012.sources;
            item10012.sources = sources.filter((userId) => set.has(userId.userId));
            const items = [];
            HermesBuiltin.arraySpread(items, item10012.appliedUserIds, 0);
            const found = items.filter((item) => !set.has(item));
            if (0 !== found.length) {
              if (
                self.withMediaEngineConnection(item10012, (setUserPosition) => {
                  for (const item10006 of found) {
                    let setUserPositionResult = setUserPosition.setUserPosition(item10006, closure_13);
                    continue;
                  }
                })
              ) {
                for (const item10054 of found) {
                  let appliedUserIds = item10012.appliedUserIds;
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
  }
  deactivateEffects(spatialHolder) {
    this.cancelPendingUpdate(spatialHolder);
    this.clearAppliedSources(spatialHolder);
  }
  demoteFromSpatial(appliedUserIds) {
    appliedUserIds.spatialEnabled = false;
    appliedUserIds = appliedUserIds.appliedUserIds;
    appliedUserIds.clear();
    this.cancelPendingUpdate(appliedUserIds);
  }
  activateEffects(result) {
    const self = this;
    this.cancelPendingUpdate(result);
    result = this.resetParticipantEffects(result);
    let flag = this.applySources(result);
    if (!flag) {
      self.demoteFromSpatial(result);
      flag = false;
    }
    return flag;
  }
  scheduleApply(validateSessionResult) {
    const self = this;
    let closure_0 = validateSessionResult;
    if (null == validateSessionResult.updateTimer) {
      const _setTimeout = setTimeout;
      validateSessionResult.updateTimer = setTimeout(() => {
        require.updateTimer = null;
        if (self.spatialHolder === require) {
          if (!self.applySources(require)) {
            self.demoteFromSpatial(require);
            self.syncSpatialHolder();
          }
        }
      }, 50);
    }
  }
  applySources(sources) {
    sources = sources.sources;
    set = new Set(sources.map((userId) => userId.userId));
    const items = [...sources.appliedUserIds];
    let closure_2 = items.filter((item) => !set.has(item));
    const result = this.withMediaEngineConnection(sources, (setUserPosition) => {
      for (const item10006 of closure_2) {
        let setUserPositionResult = setUserPosition.setUserPosition(item10006, closure_13);
        continue;
      }
      sources = sources.sources;
      for (const item10017 of sources) {
        let setUserPositionResult1 = setUserPosition.setUserPosition(item10017.userId, item10017.position);
        continue;
      }
    });
    if (result) {
      sources.appliedUserIds = set;
    }
    return result;
  }
  clearAppliedSources(appliedUserIds) {
    if (0 !== appliedUserIds.appliedUserIds.size) {
      const self = this;
      const result = this.withMediaEngineConnection(appliedUserIds, (setUserPosition) => {
        appliedUserIds = appliedUserIds.appliedUserIds;
        for (const item10007 of appliedUserIds) {
          let setUserPositionResult = setUserPosition.setUserPosition(item10007, closure_13);
          continue;
        }
      });
      appliedUserIds = appliedUserIds.appliedUserIds;
      appliedUserIds.clear();
    }
  }
  resetParticipantEffects(result) {
    let closure_0;
    const self = this;
    const channelId = result;
    const id = AuthenticationStore.getId();
    result = this.withMediaEngineConnection(result, (setUserPosition) => {
      const participantIds = self.getParticipantIds(channelId.channelId);
      for (const item10011 of participantIds) {
        if (item10011 !== closure_0) {
          let setUserPositionResult = setUserPosition.setUserPosition(tmp2, closure_13);
        }
        continue;
      }
    });
  }
  getParticipantIds(channelId) {
    set = new Set(Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)));
    return set;
  }
  hasMediaEngineConnection(item10012) {
    return this.withMediaEngineConnection(item10012, () => {});
  }
  withMediaEngineConnection(item10012, arg1) {
    let closure_0 = item10012;
    let closure_1 = arg1;
    let c2 = false;
    const mediaEngine = MediaEngineStore.getMediaEngine();
    mediaEngine.eachConnection((mediaEngineConnectionId) => {
      if (mediaEngineConnectionId.mediaEngineConnectionId === closure_0.mediaEngineConnectionId) {
        c2 = true;
        closure_1(mediaEngineConnectionId);
      }
    }, constants2.DEFAULT);
    return c2;
  }
  cancelPendingUpdate(updateTimer) {
    if (null != updateTimer.updateTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(updateTimer.updateTimer);
      updateTimer.updateTimer = null;
    }
  }
  validateFrame(id) {
    let applicationId;
    let channelId;
    const tmp3 = validateEmbeddedAppFrameDefault(id);
    ({ applicationId, channelId } = tmp3);
    const frameByIframeId = FramesStore.getFrameByIframeId(tmp3.iframeId);
    if (null != frameByIframeId) {
      if (frameByIframeId.applicationId === applicationId) {
        const obj = { frameId: null, applicationId: null, channelId };
        ({ id: obj.frameId, applicationId: obj.applicationId } = frameByIframeId);
        return obj;
      }
    }
    const obj2 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp5 = new RPCErrorDefault(obj2, "The RPC socket does not belong to this Frame");
    throw tmp5;
  }
  validateSession(id, id2) {
    const self = this;
    const validateFrameResult = this.validateFrame(id);
    const sessions = this.sessions;
    const applicationId = validateFrameResult.applicationId;
    const value = sessions.get(validateFrameResult.frameId);
    if (null != value) {
      if (value.id === id) {
        if (value.socketId === id.id) {
          if (value.applicationId === applicationId) {
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
            const self2 = this;
            const self3 = this;
            const obj = { errorCode: RPCErrors.INVALID_CHANNEL };
            const tmp8 = new RPCErrorDefault(obj, "The voice session was invalidated");
            throw tmp8;
          }
        }
      }
    }
    const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmp10 = new RPCErrorDefault(obj2, "Unknown or stale voice session");
    throw tmp10;
  }
}
const prototype = ConjureVoiceSessionCoordinator.prototype;
let obj = Object.create(ConjureVoiceSessionCoordinator.prototype);
const map = new Map();
obj.sessions = map;
obj.spatialHolder = null;
obj.focusSequence = 0;
obj.unsubscribeFrameLifecycle = null;
obj.handleFrameLifecycleChange = function handleFrameLifecycleChange() {
  const sessions = obj.sessions;
  const items = [...sessions.values()];
  for (const item10014 of items) {
    if (!item10014.pooled) {
      item10014.pooled = FrameVisibilityStore.isFramePooled(item10014.frameId);
    }
    if (item10014.pooled) {
      if (!FrameVisibilityStore.isFramePooled(item10014.frameId)) {
        let releaseSessionResult = obj.releaseSession(item10014);
      }
      continue;
    }
    let tmp12 = !FrameVisibilityStore.isFrameVisible(item10014.frameId);
    let tmp13 = tmp12;
    if (item10014.backgrounded !== tmp12) {
      item10014.backgrounded = tmp13;
      if (!tmp13) {
        let sum = obj.focusSequence + 1;
        obj.focusSequence = sum;
        item10014.focusSequence = sum;
      }
    }
  }
  obj.syncSpatialHolder();
};
let result = size.fileFinishedImporting("modules/conjure/voice/ConjureVoiceSessionCoordinator.tsx");

export default obj;
export const MAX_SOURCES = 50;
