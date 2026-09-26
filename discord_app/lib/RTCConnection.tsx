// === Module 4863: RTCConnection ===

// Module 4863 (RTCConnection)
import LoggerDefault from "Logger" /* 3 */;
import debounceDefault from "debounce" /* 551 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1240 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import v1 from "v1" /* 1255 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1463 */;
import RTCControlSocket from "RTCControlSocket" /* 1992 */;
import DiscordNativeDefault from "DiscordNative" /* 4450 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4830 */;
import TimeUtils from "TimeUtils" /* 4865 */;
import RTCConnectionEvent from "RTCConnectionEvent" /* 4890 */;
import getFrontierTuningConfigIfEligibleDefault from "getFrontierTuningConfigIfEligible" /* 4974 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import ProportionalVadIndicatorExperimentDefault from "ProportionalVadIndicatorExperiment" /* 5732 */;
import RTCBandwidthMonitorDefault from "RTCBandwidthMonitor" /* 6894 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7085 */;
import SystemResourcesDefault from "SystemResources" /* 7167 */;
import ThermalUtilsDefault from "ThermalUtils" /* 8758 */;
import AVError from "AVError" /* 8875 */;
import SurfaceDirectRendererExperiment from "SurfaceDirectRendererExperiment" /* 8881 */;
import WindowVisibilityVideoManager3 from "WindowVisibilityVideoManager" /* 8885 */;
import RTCDebugActionCreatorsAll from "RTCDebugActionCreators" /* 9499 */;
import RTCMediaSinkWantsManagerDefault from "RTCMediaSinkWantsManager" /* 13350 */;
import GoLiveQualityManagerDefault from "GoLiveQualityManager" /* 13351 */;
import BrowserTransceiverPaddingRemovalExperiment2 from "BrowserTransceiverPaddingRemovalExperiment" /* 13352 */;
import VideoStabilizationExperimentDefault from "VideoStabilizationExperiment" /* 13353 */;
import LinuxGpuDecodeExperiment from "LinuxGpuDecodeExperiment" /* 13354 */;
import ServerLadderExperiment2 from "ServerLadderExperiment" /* 13358 */;
import AV1BitrateTuningExperiment from "AV1BitrateTuningExperiment" /* 13359 */;
import NativeMuteManagerDefault from "NativeMuteManager" /* 13361 */;
import VoiceQuality from "VoiceQuality" /* 13362 */;
import SystemResponsivenessDefault from "SystemResponsiveness" /* 13364 */;
import VoiceDurationDefault from "VoiceDuration" /* 13365 */;
import VideoQuality from "VideoQuality" /* 13366 */;
import VideoHealthManager from "VideoHealthManager" /* 13367 */;
import BandwidthEstimationExperimentDefault from "BandwidthEstimationExperiment" /* 13369 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DeviceFrecencyStore from "DeviceFrecencyStore" /* 4864 */;
import MediaEngineStatsStore from "MediaEngineStatsStore" /* 4874 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9164 */;
import AudioRouteStore from "AudioRouteStore" /* 9098 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import RTCDebugStore from "RTCDebugStore" /* 9498 */;
import RTCRegionStore from "RTCRegionStore" /* 4886 */;
import UserStore from "UserStore" /* 1372 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4894 */;

const RTCControlSocketDefault = RTCControlSocket;
const VoiceQualityDefault = VoiceQuality;

require = fn;
function getEventHistoryString() {
  const items = [];
  TimeUtils;
  for (const item10012 of closure_36) {
    let obj = {};
    let merged = Object.assign(item10012);
    obj.t = tmp2 - item10012.t;
    let arr = items.push(obj);
    continue;
  }
  return JSON.stringify(items);
}
let Constants = fn(1074);
({ AnalyticEvents: closure_17, ChannelTypes: closure_18, RTCConnectionStates: closure_19, RTCConnectionQuality: closure_20, BoostedGuildTiers: closure_21 } = Constants);
const StreamSettingsConstants = fn(4883);
({ ApplicationStreamFPS: closure_22, ApplicationStreamResolutions: closure_23 } = StreamSettingsConstants);
let closure_24 = fn(13347).BROWSER_SUPPORTS_UNIFIED_PLAN;
Constants = fn(4861);
({ Features: closure_25, MediaEngineContextTypes: closure_26, ConnectionStates: closure_27, Codecs: closure_28, MediaTypes: closure_29, SpeakingFlags: closure_30, DISABLED_DEVICE_ID: items } = Constants);
let str = "ws:";
if (obj.test("https:")) {
  str = "wss:";
}
const constants10 = { INIT: "init", EPOCH: "epoch", TRANSITION: "transition" };
const __initData12 = { CONNECTION_CREATE: 0, [0]: "CONNECTION_CREATE", CONNECTION_DESTROY: 1, [1]: "CONNECTION_DESTROY", CONNECT: 2, [2]: "CONNECT", MLS_FAILURE: 3, [3]: "MLS_FAILURE", MESSAGE_RECEIVE: 4, [4]: "MESSAGE_RECEIVE", MESSAGE_SEND: 5, [5]: "MESSAGE_SEND", SET_ENDPOINT: 6, [6]: "SET_ENDPOINT", RECONNECT: 7, [7]: "RECONNECT", SET_STATE: 8, [8]: "SET_STATE", SET_NEXT_CHANNEL_ID: 9, [9]: "SET_NEXT_CHANNEL_ID", MLS_INIT: 10, [10]: "MLS_INIT", SECURE_FRAMES_INIT: 11, [11]: "SECURE_FRAMES_INIT", DOWNGRADE_REFUSED: 12, [12]: "DOWNGRADE_REFUSED" };
let c35 = 0;
let closure_36 = [];
class RTCConnection extends tmp5 {
  constructor(arg0) {
    ({ userId, sessionId, guildId, channelId, context } = global);
    if (context === undefined) {
      tmp8 = MediaEngineContextTypes;
      context = MediaEngineContextTypes.DEFAULT;
    }
    ({ streamServerId, createdTime } = global);
    closure_0 = undefined;
    ({ streamChannelId, parentMediaSessionId, joinVoiceId } = global);
    obj = new RTCConnection(tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, sessionId, channelId, guildId, streamServerId);
    closure_0 = obj;
    closure_129_0 = obj;
    obj._isStageChannel = null;
    map = new Map();
    obj._secureFramesRosterMap = map;
    obj.reconnecting = false;
    obj._nextFailureId = 0;
    obj._mlsFailures = [];
    map1 = new Map();
    obj._secureFramesTransitionStates = map1;
    obj._secureFramesMaxConcurrentTransitions = 0;
    obj._secureFramesTransitionPrepareCount = 0;
    obj._secureFramesTransitionExecuteCount = 0;
    obj._consecutiveMLSInvalidMessages = 0;
    obj._numNoiseCancellationChanges = 0;
    obj.reconnect = function reconnect() {
      obj.recordEvent({ c: constants.RECONNECT });
      const _socket = obj._socket;
      if (null != _socket) {
        if (obj._hasEverConnected) {
          obj._connectStartTime = TimeUtils.now();
        }
        if (!obj._connecting) {
          const result = obj._trackVoiceConnectionConnecting();
          obj._connecting = true;
          obj._encountered_socket_failure = false;
          obj._voiceConnectionSuccessTracked = false;
        }
        obj._connectCount = obj._connectCount + 1;
        obj.reconnecting = true;
        _socket.close();
        _socket.connect();
      }
      const obj2 = { c: constants.RECONNECT };
    };
    tmp11 = closure_1;
    tmp12 = closure_3;
    obj._alertMLSFailureDebouced = closure_1(closure_3[66])(obj._alertMLSFailure, 100);
    obj._handleNetworkOnline = function _handleNetworkOnline() {
      obj.expeditedHeartbeat(5000, "network detected online.");
    };
    obj._handleNetworkOffline = function _handleNetworkOffline() {
      obj.expeditedHeartbeat(15000, "network detected offline.", false);
    };
    obj._handleNoRoute = function _handleNoRoute() {
      const _socket = obj._socket;
      if (_socket != null) {
        _socket.noRoute();
      }
    };
    obj._handlePowerResume = function _handlePowerResume() {
      obj.expeditedHeartbeat(5000, "power monitor resumed");
    };
    obj._handleVoiceQualityPeriodicsStats = function _handleVoiceQualityPeriodicsStats() {
      if (null != obj._voiceQuality) {
        const _voiceQuality = obj._voiceQuality;
        const periodicStats = _voiceQuality.getPeriodicStats();
        if (obj.shouldReportPeriodicStats(periodicStats)) {
          const iter = periodicStats[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let obj2 = AnalyticsUtilsDefault;
            let obj4 = {};
            let merged = Object.assign(obj._getAnalyticsProperties());
            obj4.media_session_id = obj.getMediaSessionId();
            obj4.sender_user_id = nextResult.userId;
            obj4.hostname = obj.hostname;
            ({ silent: obj3.frame_op_silent, normal: obj3.frame_op_normal, merged: obj3.frame_op_merged, expanded: obj3.frame_op_expanded, accelerated: obj3.frame_op_accelerated, preemptiveExpanded: obj3.frame_op_preemptive_expanded, cng: obj3.frame_op_cng, accelerateRate: obj3.accelerate_rate, expandRate: obj3.expand_rate, preemptiveExpandRate: obj3.preemptive_expand_rate, speechExpandRate: obj3.speech_expand_rate, durationMs: obj3.duration_ms } = nextResult);
            obj4.sequence_id = obj._voiceQualityPeriodicStatsSequenceId;
            obj4.input_device = obj.getInputDeviceName();
            obj4.output_device = obj.getOutputDeviceName();
            let _Math = Math;
            obj4.ping_average = Math.round(obj.getAveragePing());
            ({ _pingBadCount: obj3.ping_bad_count, parentMediaSessionId: obj3.parent_media_session_id } = obj);
            let trackResult = obj2.track(constants.VOICE_QUALITY_PERIODIC_STATS, obj4);
            continue;
          }
        }
        obj._voiceQualityPeriodicStatsSequenceId = obj._voiceQualityPeriodicStatsSequenceId + 1;
      }
    };
    obj.getAudioDeviceStates = function getAudioDeviceStates() {
      obj = { input_device: obj.getInputDeviceName(), input_device_count: Object.keys(MediaEngineStore.getInputDevices()).length, output_device: obj.getOutputDeviceName(), output_device_count: Object.keys(MediaEngineStore.getOutputDevices()).length };
      return obj;
    };
    obj.getVideoDeviceStates = function getVideoDeviceStates() {
      obj = { camera_device: obj.getVideoDeviceName(), camera_device_count: Object.keys(MediaEngineStore.getVideoDevices()).length };
      return obj;
    };
    obj._trackVoiceConnectionConnecting = function _trackVoiceConnectionConnecting() {
      const channel = ChannelStore.getChannel(obj.channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      const obj4 = {};
      const merged = Object.assign(obj.getAudioDeviceStates());
      const merged1 = Object.assign(obj.getVideoDeviceStates());
      ({ guildId: obj3.guild_id, channelId: obj3.channel_id } = obj);
      obj4.rtc_connection_id = obj.getRTCConnectionId();
      ({ hostname: obj3.hostname, _connectCount: obj3.connect_count, context: obj3.context } = obj);
      obj4.channel_type = type;
      obj4.participant_type = obj.getVoiceParticipantType();
      obj4.is_muted = MediaEngineStore.isMute();
      ({ joinVoiceId: obj3.join_voice_id, _connectionSerial: obj3.connection_serial } = obj);
      AnalyticsUtilsDefault.track(constants.VOICE_CONNECTION_CONNECTING, obj4);
    };
    obj.incomingVideoEnabledChanged = function incomingVideoEnabledChanged(incomingVideoEnabled) {
      const _goLiveQualityManager = obj._goLiveQualityManager;
      if (_goLiveQualityManager != null) {
        const result = _goLiveQualityManager.onIncomingVideoEnabled(incomingVideoEnabled);
      }
      const _videoQuality = obj._videoQuality;
      if (_videoQuality != null) {
        const result1 = _videoQuality.setOcclusionIncomingVideoEnabled(incomingVideoEnabled);
      }
    };
    obj.windowVisibilityChanged = function windowVisibilityChanged(arg0) {
      const _videoQuality = obj._videoQuality;
      if (_videoQuality != null) {
        const result = _videoQuality.setWindowOcclusionState(!arg0);
      }
    };
    obj.context = context;
    obj1 = { c: closure_34.CONNECTION_CREATE };
    recordEventResult = obj.recordEvent(obj1);
    obj3 = closure_12;
    asyncResources = closure_12.fetchAsyncResources();
    obj._fetchAsyncResourcesPromise = asyncResources.catch((error) => {
      SentryUtilsDefault.captureException(error);
    });
    obj.userId = userId;
    obj.sessionId = sessionId;
    obj.guildId = guildId;
    obj._channelId = channelId;
    items = [];
    items[0] = channelId;
    set = new Set(items);
    obj.channelIds = set;
    _latchIsStageChannelResult = obj._latchIsStageChannel();
    obj.streamServerId = streamServerId;
    obj.streamChannelId = streamChannelId;
    obj.parentMediaSessionId = parentMediaSessionId;
    obj.joinVoiceId = joinVoiceId;
    tmp16 = +closure_35;
    closure_35 = tmp16 + 1;
    obj._connectionSerial = tmp16;
    tmp17 = closure_1(closure_3[21]);
    tmp171 = new tmp17("RTCConnection(" + obj.trueServerId + ", " + obj.context + ")");
    obj.logger = tmp171;
    logger = obj.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    obj._endpoint = null;
    obj.hostname = null;
    obj.port = null;
    obj.token = null;
    obj.protocol = null;
    obj.voiceVersion = null;
    obj.rtcWorkerVersion = null;
    if (createdTime == null) {
      tmp20 = closure_0;
      obj4 = closure_0(tmp12[18]);
      createdTime = obj4.now();
    }
    obj._createdTime = createdTime;
    obj.state = RTCConnectionStates.AWAITING_ENDPOINT;
    tmp21 = closure_0;
    stateHistory = new closure_0(tmp12[22]).StateHistory(obj.state, obj._createdTime);
    obj.stateHistory = stateHistory;
    obj._socket = null;
    tmp23 = new tmp11(tmp12[17])(1000, 10000);
    obj._backoff = tmp23;
    tmp24 = new tmp11(tmp12[17])(1000, 10000);
    obj._mlsFailureReconnectBackoff = tmp24;
    obj._destroyed = false;
    obj._pings = [];
    obj._pingBadCount = 0;
    obj._pingTimeouts = [];
    obj._mediaSessionId = null;
    obj._voiceQuality = null;
    obj._voiceQualityPeriodicStatsInterval = null;
    obj._voiceQualityPeriodicStatsSequenceId = 0;
    obj._systemResponsiveness = null;
    obj._noiseCancellationError = 0;
    obj._voiceDuration = null;
    obj._videoQuality = null;
    obj._videoHealthManager = null;
    obj._sentVideo = false;
    obj._videoDecoderFallbackSuppressed = false;
    obj._outboundLossRate = null;
    obj._connectStartTime = 0;
    obj._connectCompletedTime = 0;
    obj5 = closure_0(tmp12[23]);
    obj._rtcConnectionId = obj5.v4();
    obj._connectCount = 0;
    obj._hasEverConnected = false;
    obj._connecting = false;
    obj._voiceConnectionSuccessTracked = false;
    obj._hasCodecs = false;
    obj._mediaEngineConnectDuration = 0;
    obj._encountered_socket_failure = false;
    obj._inputDetected = false;
    obj._selectedExperiments = [];
    obj._secureFramesState = null;
    items1 = [];
    items1[0] = userId;
    set1 = new Set(items1);
    obj._userIds = set1;
    _secureFramesRosterMap = obj._secureFramesRosterMap;
    clearResult = _secureFramesRosterMap.clear();
    obj._mlsFailures = [];
    obj._consecutiveMLSInvalidMessages = 0;
    obj._nextFailureId = 0;
    obj._mediaEngineConnectionId = null;
    obj._readyData = null;
    obj._sfuEndpoint = null;
    obj.reconnecting = false;
    obj._lastSentSpeakingStatus = 0;
    obj._lastSentSSRC = undefined;
    tmp27 = Features;
    tmp28 = obj3.supports(Features.FIRST_FRAME_CALLBACK) && obj3.supports(tmp27.REMOTE_USER_MULTI_STREAM);
    if (MediaEngineContextTypes.DEFAULT === context) {
      tmp30 = closure_10;
      channel = closure_10.getChannel(obj.channelId);
      type = undefined;
      if (channel != null) {
        type = channel.type;
      }
      tmp33 = ChannelTypes;
      tmp34 = new.target;
      tmp35 = new.target;
      tmp36 = userId;
      tmp37 = tmp28;
      tmp38 = new tmp11(tmp12[24])(userId, type === ChannelTypes.GUILD_STAGE_VOICE, tmp28);
      tmp39 = tmp38;
      obj._localMediaSinkWantsManager = tmp38;
      _localMediaSinkWantsManager = obj._localMediaSinkWantsManager;
      onResult = _localMediaSinkWantsManager.on(tmp21(tmp12[24]).RTCMediaSinkWantsManagerEvent.Update, (localVideoSinkWants) => {
        let tmp2 = obj.state === constants3.RTC_CONNECTED;
        if (tmp2) {
          tmp2 = null != obj._socket;
        }
        if (tmp2) {
          const logger = obj.logger;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          logger.info("Media sink wants: " + JSON.stringify(localVideoSinkWants));
          const _socket = obj._socket;
          _socket.mediaSinkWants(localVideoSinkWants);
          const _connection = obj._connection;
          if (_connection != null) {
            const result = _connection.setLocalVideoSinkWants(localVideoSinkWants);
          }
        }
      });
      _localMediaSinkWantsManager2 = obj._localMediaSinkWantsManager;
      onResult1 = _localMediaSinkWantsManager2.on(tmp21(tmp12[24]).RTCMediaSinkWantsManagerEvent.UserSSRCUpdate, (arg0, arg1, arg2) => {
        const _connection = obj._connection;
        if (_connection != null) {
          const user = _connection.createUser(arg0, arg1, arg2);
        }
      });
    } else if (tmp29.STREAM === context) {
      tmp49 = new.target;
      tmp50 = new.target;
      tmp51 = new tmp11(tmp12[25])();
      tmp52 = tmp51;
      obj._goLiveQualityManager = tmp51;
      _goLiveQualityManager = obj._goLiveQualityManager;
      onResult2 = _goLiveQualityManager.on(tmp21(tmp12[25]).GoLiveQualityManagerEvent.RequestedSSRCsUpdate, (arg0, arg1, arg2) => {
        const _connection = obj._connection;
        if (_connection != null) {
          const user = _connection.createUser(arg0, arg1, arg2);
        }
      });
      _goLiveQualityManager2 = obj._goLiveQualityManager;
      onResult3 = _goLiveQualityManager2.on(tmp21(tmp12[25]).GoLiveQualityManagerEvent.RequestedStreamsUpdate, (localVideoSinkWants) => {
        let tmp2 = obj.state === constants3.RTC_CONNECTED;
        if (tmp2) {
          tmp2 = null != obj._socket;
        }
        if (tmp2) {
          const logger = obj.logger;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          logger.info("Go Live Media sink wants: " + JSON.stringify(localVideoSinkWants));
          const _socket = obj._socket;
          _socket.mediaSinkWants(localVideoSinkWants);
          const _connection = obj._connection;
          if (_connection != null) {
            const result = _connection.setLocalVideoSinkWants(localVideoSinkWants);
          }
        }
      });
    }
    obj._remoteVideoSinkWants = tmp21(tmp12[24]).DEFAULT_WANTS_FULL;
    WindowVisibilityVideoManager = tmp21(tmp12[26]).WindowVisibilityVideoManager;
    onResult4 = WindowVisibilityVideoManager.on(tmp21(tmp12[26]).WindowVisibilityEvent.IncomingVideoEnabledChanged, obj.incomingVideoEnabledChanged);
    WindowVisibilityVideoManager2 = tmp21(tmp12[26]).WindowVisibilityVideoManager;
    onResult5 = WindowVisibilityVideoManager2.on(tmp21(tmp12[26]).WindowVisibilityEvent.WindowVisibilityChanged, obj.windowVisibilityChanged);
    if (closure_14.shouldRecordNextConnection()) {
      obj._recordingEnabled = true;
      tmp44 = closure_2;
      obj6 = closure_2(tmp12[27]);
      result = obj6.setShouldRecordNextConnection(false);
    } else {
      obj._recordingEnabled = false;
    }
    tmp11Result = tmp11(tmp12[28]);
    addOnlineCallbackResult = tmp11Result.addOnlineCallback(obj._handleNetworkOnline);
    tmp11Result1 = tmp11(tmp12[28]);
    addOfflineCallbackResult = tmp11Result1.addOfflineCallback(obj._handleNetworkOffline);
    tmp21Result = tmp21(tmp12[29]);
    if (tmp21Result.isDesktop()) {
      powerMonitor = tmp11(tmp12[30]).powerMonitor;
      str = "resume";
      obj.powerMonitorListener = powerMonitor.on("resume", obj._handlePowerResume);
    }
    obj._supportedBandwidthEstimationExperiments = [];
    obj._bandwidthEstimationExperiment = null;
    mediaEngine = obj3.getMediaEngine();
    supportedBandwidthEstimationExperiments = mediaEngine.getSupportedBandwidthEstimationExperiments((_supportedBandwidthEstimationExperiments) => {
      obj._supportedBandwidthEstimationExperiments = _supportedBandwidthEstimationExperiments;
    });
    return obj;
  }
}
const prototype = RTCConnection.prototype;
prototype["recordEvent"] = function recordEvent(arg0) {
  let length;
  const obj = {};
  const merged = Object.assign(arg0);
  obj.t = TimeUtils.now();
  obj.n = this._connectionSerial;
  closure_36.push(obj);
  if (closure_36.length > 50) {
    do {
      let arr2 = closure_36.shift();
      length = closure_36.length;
    } while (length > 50);
  }
};
Object.defineProperty(prototype, "quality", {
  get: function quality() {
    const self = this;
    const lastPing = this.getLastPing();
    if (this.state === constants3.RTC_CONNECTED) {
      if (undefined !== lastPing) {
        if (lastPing <= 500) {
          if (lastPing > 250) {
            let UNKNOWN = constants4.AVERAGE;
          } else {
            UNKNOWN = constants4.FINE;
          }
        }
        UNKNOWN = constants4.BAD;
      }
      return UNKNOWN;
    }
    UNKNOWN = constants4.UNKNOWN;
  },
  set: undefined
});
Object.defineProperty(prototype, "endpoint", {
  get: function endpoint() {
    return this._endpoint;
  },
  set: undefined
});
Object.defineProperty(prototype, "endpoint", {
  get: undefined,
  set: function endpoint(arg0) {
    const self = this;
    this.recordEvent({ c: constants11.SET_ENDPOINT, e: null != arg0 });
    if (null == arg0) {
      self._endpoint = null;
      self.hostname = null;
    } else {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + str + "//" + arg0;
      let toURLSafeResult = URLUtilsDefault.toURLSafe(combined);
      if (toURLSafeResult == null) {
        toURLSafeResult = {};
      }
      ({ hostname, port } = toURLSafeResult);
      let num = NaN;
      if (null != port) {
        const _parseInt = parseInt;
        num = parseInt(port);
      }
      let tmp2 = null == hostname;
      if (!tmp2) {
        let tmp3 = 80 !== num;
        if (tmp3) {
          tmp3 = 443 !== num;
        }
        tmp2 = tmp3;
      }
      if (!tmp2) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp5 + "//" + hostname;
      }
      self._endpoint = `${tmp4}/`;
      self.hostname = hostname;
      tmp5 = str;
    }
    const obj = { c: constants11.SET_ENDPOINT, e: null != arg0 };
  }
});
prototype["connect"] = function connect(endpoint, token) {
  const self = this;
  if (this._destroyed) {
    const _Error = Error;
    const error = new Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
    throw error;
  } else {
    const obj = { c: constants11.CONNECT, e: null != endpoint, h: null != token };
    self.recordEvent(obj);
    self._cancelReconnect();
    endpoint = self.endpoint;
    self.endpoint = endpoint;
    self.token = token;
    if (!tmp7) {
      self._cleanupSocket();
      self._mediaSessionId = null;
      if (null != endpoint) {
        self._rtcConnectionId = v1.v4();
        const obj4 = { type: "RTC_CONNECTION_UPDATE_ID", connection: self };
        DispatcherDefault.dispatch(obj4);
      }
    }
    if (null != self.endpoint) {
      if (null != self._socket) {
        self._cleanupSocket();
      }
      if (null != self._nextChannelId) {
        self._channelId = self._nextChannelId;
        self._nextChannelId = undefined;
        self._isStageChannel = null;
        self._latchIsStageChannel();
      }
      const obj5 = new RTCControlSocketDefault(self.endpoint, self.context);
      self._socket = obj5;
      const _handleConnecting = self._handleConnecting;
      obj5.on(RTCControlSocket.SocketEvent.Connecting, _handleConnecting.bind(self, obj5));
      const _handleConnect = self._handleConnect;
      obj5.on(RTCControlSocket.SocketEvent.Connect, _handleConnect.bind(self, obj5));
      const _handleDisconnect = self._handleDisconnect;
      obj5.on(RTCControlSocket.SocketEvent.Disconnect, _handleDisconnect.bind(self, obj5));
      const _handleResuming = self._handleResuming;
      obj5.on(RTCControlSocket.SocketEvent.Resuming, _handleResuming.bind(self, obj5));
      const _handleReady = self._handleReady;
      obj5.on(RTCControlSocket.SocketEvent.Ready, _handleReady.bind(self, obj5));
      const _handleSfuUpdate = self._handleSfuUpdate;
      obj5.on(RTCControlSocket.SocketEvent.SfuUpdate, _handleSfuUpdate.bind(self, obj5));
      const _handleSpeaking = self._handleSpeaking;
      obj5.on(RTCControlSocket.SocketEvent.Speaking, _handleSpeaking.bind(self, obj5));
      const _handleVideo = self._handleVideo;
      obj5.on(RTCControlSocket.SocketEvent.Video, _handleVideo.bind(self, obj5));
      const _handleControlPing = self._handleControlPing;
      obj5.on(RTCControlSocket.SocketEvent.Ping, _handleControlPing.bind(self));
      const _handleClientDisconnect = self._handleClientDisconnect;
      obj5.on(RTCControlSocket.SocketEvent.ClientDisconnect, _handleClientDisconnect.bind(self));
      const _handleClientConnect = self._handleClientConnect;
      obj5.on(RTCControlSocket.SocketEvent.ClientConnect, _handleClientConnect.bind(self));
      const _handleCodecs = self._handleCodecs;
      obj5.on(RTCControlSocket.SocketEvent.Codecs, _handleCodecs.bind(self));
      const _handleMediaSessionId = self._handleMediaSessionId;
      obj5.on(RTCControlSocket.SocketEvent.MediaSessionId, _handleMediaSessionId.bind(self));
      const _handleMediaSinkWants = self._handleMediaSinkWants;
      obj5.on(RTCControlSocket.SocketEvent.MediaSinkWants, _handleMediaSinkWants.bind(self));
      const _handleCodeVersion = self._handleCodeVersion;
      obj5.on(RTCControlSocket.SocketEvent.VoiceBackendVersion, _handleCodeVersion.bind(self));
      const _handleKeyframeInterval = self._handleKeyframeInterval;
      obj5.on(RTCControlSocket.SocketEvent.KeyframeInterval, _handleKeyframeInterval.bind(self));
      const handleFlags = self.handleFlags;
      obj5.on(RTCControlSocket.SocketEvent.Flags, handleFlags.bind(self));
      const handlePlatform = self.handlePlatform;
      obj5.on(RTCControlSocket.SocketEvent.Platform, handlePlatform.bind(self));
      const _handleBandwidthEstimationExperiment = self._handleBandwidthEstimationExperiment;
      obj5.on(RTCControlSocket.SocketEvent.BandwidthEstimationExperiment, _handleBandwidthEstimationExperiment.bind(self));
      const _handleSecureFramesInit = self._handleSecureFramesInit;
      obj5.on(RTCControlSocket.SocketEvent.SecureFramesInit, _handleSecureFramesInit.bind(self));
      const _handleSecureFramesPrepareTransition = self._handleSecureFramesPrepareTransition;
      obj5.on(RTCControlSocket.SocketEvent.SecureFramesPrepareTransition, _handleSecureFramesPrepareTransition.bind(self));
      const _handleSecureFramesPrepareEpoch = self._handleSecureFramesPrepareEpoch;
      obj5.on(RTCControlSocket.SocketEvent.SecureFramesPrepareEpoch, _handleSecureFramesPrepareEpoch.bind(self));
      const _handleSecureFramesExecuteTransition = self._handleSecureFramesExecuteTransition;
      obj5.on(RTCControlSocket.SocketEvent.SecureFramesExecuteTransition, _handleSecureFramesExecuteTransition.bind(self));
      const _handleMLSExternalSenderPackage = self._handleMLSExternalSenderPackage;
      obj5.on(RTCControlSocket.SocketEvent.MLSExternalSenderPackage, _handleMLSExternalSenderPackage.bind(self));
      const _handleMLSProposals = self._handleMLSProposals;
      obj5.on(RTCControlSocket.SocketEvent.MLSProposals, _handleMLSProposals.bind(self, obj5));
      const _handleMLSPrepareCommitTransition = self._handleMLSPrepareCommitTransition;
      obj5.on(RTCControlSocket.SocketEvent.MLSPrepareCommitTransition, _handleMLSPrepareCommitTransition.bind(self));
      const _handleMLSWelcome = self._handleMLSWelcome;
      obj5.on(RTCControlSocket.SocketEvent.MLSWelcome, _handleMLSWelcome.bind(self));
      const _recordMessageEvent = self._recordMessageEvent;
      obj5.on(RTCControlSocket.SocketEvent.ReceiveMessage, _recordMessageEvent.bind(self, constants11.MESSAGE_RECEIVE));
      const _recordMessageEvent2 = self._recordMessageEvent;
      obj5.on(RTCControlSocket.SocketEvent.SendMessage, _recordMessageEvent2.bind(self, constants11.MESSAGE_SEND));
      self._connectStartTime = TimeUtils.now();
      self._connectCount = self._connectCount + 1;
      self._connecting = true;
      self._voiceConnectionSuccessTracked = false;
      if (self._socket === obj5) {
        const result = self._trackVoiceConnectionConnecting();
        self._encountered_socket_failure = false;
        obj5.connect();
      }
    } else {
      self.setState(constants3.AWAITING_ENDPOINT);
    }
    tmp7 = endpoint === self.endpoint && self.token === token;
  }
};
prototype["_recordMessageEvent"] = function _recordMessageEvent(c, o) {
  this.recordEvent({ c, o });
};
prototype["_scheduleReconnect"] = function _scheduleReconnect() {
  const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
  _mlsFailureReconnectBackoff.cancel();
  const _backoff = this._backoff;
  return _backoff.fail(this.reconnect);
};
prototype["_scheduleMLSFailureReconnect"] = function _scheduleMLSFailureReconnect() {
  const _backoff = this._backoff;
  _backoff.cancel();
  const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
  return _mlsFailureReconnectBackoff.fail(this.reconnect);
};
prototype["_cancelReconnect"] = function _cancelReconnect() {
  const _backoff = this._backoff;
  _backoff.cancel();
  const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
  _mlsFailureReconnectBackoff.cancel();
};
prototype["destroy"] = function destroy() {
  const self = this;
  const logger = this.logger;
  logger.info("Destroy RTCConnection");
  NetworkUtilsDefault.removeOnlineCallback(this._handleNetworkOnline);
  const result = NetworkUtilsDefault.removeOfflineCallback(this._handleNetworkOffline);
  if (obj3.isDesktop()) {
    const powerMonitorListener = self.powerMonitorListener;
    if (powerMonitorListener != null) {
      powerMonitorListener();
    }
  }
  self.recordEvent({ c: constants11.CONNECTION_DESTROY });
  const WindowVisibilityVideoManager = WindowVisibilityVideoManager3.WindowVisibilityVideoManager;
  WindowVisibilityVideoManager.off(WindowVisibilityVideoManager3.WindowVisibilityEvent.IncomingVideoEnabledChanged, self.incomingVideoEnabledChanged);
  const WindowVisibilityVideoManager2 = WindowVisibilityVideoManager3.WindowVisibilityVideoManager;
  WindowVisibilityVideoManager2.off(WindowVisibilityVideoManager3.WindowVisibilityEvent.WindowVisibilityChanged, self.windowVisibilityChanged);
  self._cancelReconnect();
  self._cleanupSocket();
  const _voiceQuality = self._voiceQuality;
  if (_voiceQuality != null) {
    _voiceQuality.stop();
  }
  const _voiceQuality2 = self._voiceQuality;
  if (_voiceQuality2 != null) {
    _voiceQuality2.removeAllListeners();
  }
  self._voiceQuality = null;
  clearInterval(self._voiceQualityPeriodicStatsInterval);
  self._voiceQualityPeriodicStatsInterval = null;
  self._voiceQualityPeriodicStatsSequenceId = 0;
  const _systemResponsiveness = self._systemResponsiveness;
  if (_systemResponsiveness != null) {
    _systemResponsiveness.stop();
  }
  self._systemResponsiveness = null;
  self._noiseCancellationError = 0;
  const _voiceDuration = self._voiceDuration;
  if (_voiceDuration != null) {
    _voiceDuration.stop();
  }
  self._voiceDuration = null;
  const _videoQuality = self._videoQuality;
  if (_videoQuality != null) {
    _videoQuality.stop();
  }
  self._videoQuality = null;
  self._videoHealthManager = null;
  self._secureFramesState = null;
  const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
  if (_localMediaSinkWantsManager != null) {
    _localMediaSinkWantsManager.reset();
  }
  if (null != self._connection) {
    const _connection = self._connection;
    self._connection = null;
    _connection.destroy();
  }
  self.removeAllListeners();
  self._destroyed = true;
  obj3 = PlatformUtils;
  const obj4 = { c: constants11.CONNECTION_DESTROY };
};
prototype["shouldSendSpeaking"] = function shouldSendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC) {
  if (obj.isWeb()) {
    return true;
  } else {
    const self = this;
    const tmpResult = FlagUtils;
    const hasFlagResult = FlagUtils.hasFlag(_lastSentSpeakingStatus, constants9.PRIORITY);
    let tmp7 = this._lastSentSSRC !== _lastSentSSRC || hasFlagResult !== FlagUtils.hasFlag(this._lastSentSpeakingStatus, constants9.PRIORITY);
    if (tmp7) {
      let tmp8 = undefined !== self._lastSentSSRC || _lastSentSpeakingStatus !== constants9.NONE;
      if (tmp8) {
        let flag = self._lastSentSSRC === _lastSentSSRC || _lastSentSpeakingStatus !== constants9.NONE;
        if (flag) {
          self._lastSentSpeakingStatus = _lastSentSpeakingStatus;
          self._lastSentSSRC = _lastSentSSRC;
          flag = true;
        }
        tmp8 = flag;
      }
      tmp7 = tmp8;
    }
    return tmp7;
  }
  obj = PlatformUtils;
};
prototype["sendSpeaking"] = function sendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC) {
  const self = this;
  const _socket = this._socket;
  if (null != _socket) {
    if (self.shouldSendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC)) {
      _socket.speaking(_lastSentSpeakingStatus, MediaEngineStore.getPacketDelay(self.context), _lastSentSSRC);
    }
  }
};
prototype["sendVideo"] = function sendVideo(arg0, arg1, arg2, arg3) {
  const self = this;
  const _socket = this._socket;
  if (null != _socket) {
    if (0 !== arg1) {
      self._sentVideo = true;
    }
    if (self._sentVideo) {
      _socket.video(arg0, arg1, arg2, arg3);
    }
  }
};
prototype["getPings"] = function getPings() {
  return this._pings;
};
prototype["getAveragePing"] = function getAveragePing() {
  const _pings = this._pings;
  const substr = _pings.slice(0, Math.min(this._pings.length, 20));
  let num = 0;
  if (0 !== substr.length) {
    num = 0;
    if (null != this._socket) {
      num = substr.reduce((acc, value) => acc + value.value, 0) / substr.length;
    }
  }
  return num;
};
prototype["getLastPing"] = function getLastPing() {
  value = undefined;
  if (this._pings[this._pings.length - 1] != null) {
    value = iter.value;
  }
  return value;
};
prototype["getOutboundLossRate"] = function getOutboundLossRate() {
  return this._outboundLossRate;
};
prototype["getMediaSessionId"] = function getMediaSessionId() {
  return this._mediaSessionId;
};
prototype["getVoiceParticipantType"] = function getVoiceParticipantType() {

};
prototype["getRTCConnectionId"] = function getRTCConnectionId() {
  return this._rtcConnectionId;
};
prototype["getMediaEngineConnectionId"] = function getMediaEngineConnectionId() {
  return this._mediaEngineConnectionId;
};
prototype["getVoiceVersion"] = function getVoiceVersion() {
  return this.voiceVersion;
};
prototype["getRtcWorkerVersion"] = function getRtcWorkerVersion() {
  return this.rtcWorkerVersion;
};
prototype["getDuration"] = function getDuration() {
  let num = 0;
  if (this._connectCompletedTime > 0) {
    num = TimeUtils.now() - tmp._connectCompletedTime;
  }
  let num2 = 0;
  if (num > 0) {
    num2 = num;
  }
  return num2;
};
prototype["getDurationSeconds"] = function getDurationSeconds() {
  return this.getDuration() / 1000;
};
prototype["getVoiceDurationStats"] = function getVoiceDurationStats() {
  const _voiceDuration = this._voiceDuration;
  let durationStats;
  if (_voiceDuration != null) {
    durationStats = _voiceDuration.getDurationStats();
  }
  if (durationStats == null) {
    durationStats = null;
  }
  return durationStats;
};
prototype["getPacketStats"] = function getPacketStats() {
  const _voiceQuality = this._voiceQuality;
  let packetStats;
  if (_voiceQuality != null) {
    packetStats = _voiceQuality.getPacketStats();
  }
  return packetStats;
};
prototype["getCreatedTime"] = function getCreatedTime() {
  return this._createdTime;
};
prototype["getSecureFramesState"] = function getSecureFramesState() {
  return this._secureFramesState;
};
prototype["getSecureFramesRosterMap"] = function getSecureFramesRosterMap() {
  return this._secureFramesRosterMap;
};
prototype["getUserIds"] = function getUserIds() {
  return this._userIds;
};
prototype["getIsUserConnected"] = function getIsUserConnected(arg0) {
  const _userIds = this._userIds;
  return _userIds.has(arg0);
};
prototype["getVideoHealthManager"] = function getVideoHealthManager() {
  return this._videoHealthManager;
};
prototype["getBandwidthEstimationExperiment"] = function getBandwidthEstimationExperiment() {
  return this._bandwidthEstimationExperiment;
};
prototype["hasActiveRemoteWants"] = function hasActiveRemoteWants() {
  const entries = Object.entries(this._remoteVideoSinkWants);
  return entries.some((item) => {
    [tmp, tmp2] = item;
    if (Number.isInteger(tmp)) {
      let tmp3 = 0 !== tmp2;
    } else {
      tmp3 = "any" !== tmp;
      if (tmp3) {
        let someResult;
        if ("pixelCounts" === tmp) {
          const _Object = Object;
          const values = Object.values(tmp2);
          someResult = values.some((item) => 0 !== item);
        }
        tmp3 = someResult;
      }
    }
    return tmp3;
  });
};
prototype["pauseStatsCollectionForUser"] = function pauseStatsCollectionForUser(userId, arg1) {
  const orCreateVideoQuality = this.getOrCreateVideoQuality();
  if (null != orCreateVideoQuality) {
    if (arg1) {
      const result = orCreateVideoQuality.addUserToStatsCollectionPausedSet(userId);
    } else {
      const result1 = orCreateVideoQuality.removeUserFromStatsCollectionPausedSet(userId);
    }
  } else {
    const logger = this.logger;
    logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
  }
};
prototype["getOutboundStats"] = function getOutboundStats() {
  const orCreateVideoQuality = this.getOrCreateVideoQuality();
  let outboundStats = null;
  if (null != orCreateVideoQuality) {
    outboundStats = orCreateVideoQuality.getOutboundStats();
  }
  return outboundStats;
};
prototype["getInboundStats"] = function getInboundStats(arg0) {
  const orCreateVideoQuality = this.getOrCreateVideoQuality();
  let inboundStats = null;
  if (null != orCreateVideoQuality) {
    inboundStats = orCreateVideoQuality.getInboundStats(arg0);
  }
  return inboundStats;
};
prototype["setState"] = function setState(s) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  this.recordEvent({ c: constants11.SET_STATE, s });
  const logger = this.logger;
  logger.info("RTC connection state: " + this.state + " => " + s);
  this.state = s;
  const stateHistory = this.stateHistory;
  stateHistory.update(this.state);
  this.emit(RTCConnectionEvent.RTCConnectionEvent.State, s, { hostname: this.hostname, channelId: this.trueChannelId, context: this.context }, obj);
};
prototype["expeditedHeartbeat"] = function expeditedHeartbeat(arg0) {
  str = arg1;
  if (arg1 === undefined) {
    str = "";
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const self = this;
  const _socket = this._socket;
  let expeditedHeartbeatResult = null != _socket;
  if (expeditedHeartbeatResult) {
    expeditedHeartbeatResult = _socket.expeditedHeartbeat(arg0, str, flag);
  }
  if (expeditedHeartbeatResult) {
    self._cancelReconnect();
  }
};
prototype["resetBackoff"] = function resetBackoff() {
  if (arg0 === undefined) {
    str = "";
  }
  const self = this;
  const _socket = this._socket;
  if (tmp) {
    self._cancelReconnect();
  }
};
prototype["setSelectedParticipant"] = function setSelectedParticipant(arg0) {
  const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
  if (_localMediaSinkWantsManager != null) {
    const result = _localMediaSinkWantsManager.setSelectedParticipant(arg0);
  }
};
prototype["setPipOpen"] = function setPipOpen(arg0) {
  const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
  if (_localMediaSinkWantsManager != null) {
    _localMediaSinkWantsManager.setPipOpen(arg0);
  }
};
prototype["setClipRecordUser"] = function setClipRecordUser(arg0, arg1, arg2) {
  const _connection = this._connection;
  if (_connection != null) {
    const setClipRecordUser = _connection.setClipRecordUser;
    if (setClipRecordUser != null) {
      setClipRecordUser(arg0, arg1, arg2);
    }
  }
};
prototype["setNoiseCancellationEnabled"] = function setNoiseCancellationEnabled(arg0) {
  this._numNoiseCancellationChanges = this._numNoiseCancellationChanges + 1;
  const _voiceDuration = this._voiceDuration;
  if (_voiceDuration != null) {
    const result = _voiceDuration.setNoiseCancellationEnabled(arg0);
  }
};
prototype["setSpatialAudioEnabled"] = function setSpatialAudioEnabled(arg0) {
  const _voiceDuration = this._voiceDuration;
  if (_voiceDuration != null) {
    const result = _voiceDuration.setSpatialAudioEnabled(arg0);
  }
};
prototype["setSimulcastDebugOverride"] = function setSimulcastDebugOverride(arg0, arg1, arg2) {
  let tmp = arg1 === this.context;
  if (tmp) {
    tmp = arg1 === constants6.DEFAULT;
  }
  if (tmp) {
    const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      const result = _localMediaSinkWantsManager.setSimulcastDebugOverride(arg0, arg2);
    }
  }
};
prototype["setVideoSize"] = function setVideoSize(arg0, width, arg2) {
  let isAndroidResult = null == width;
  if (!isAndroidResult) {
    isAndroidResult = PlatformUtils.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = PlatformUtils.isIOS();
  }
  const self = this;
  if (!isAndroidResult) {
    const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      _localMediaSinkWantsManager.setVideoSize(arg0, width.width * width.height);
    }
  }
  const _goLiveQualityManager = self._goLiveQualityManager;
  if (_goLiveQualityManager != null) {
    _goLiveQualityManager.setVideoSize(arg0, width, arg2);
  }
};
prototype["clearJoinVoiceId"] = function clearJoinVoiceId() {
  this.joinVoiceId = null;
};
prototype["setNextChannelId"] = function setNextChannelId(channelId) {
  const self = this;
  this.recordEvent({ c: constants11.SET_NEXT_CHANNEL_ID });
  const channel = ChannelStore.getChannel(this.channelId);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  const logger = self.logger;
  logger.info("Updating channel: " + channelId + "(" + type + ")");
  self._nextChannelId = channelId;
  const channelIds = self.channelIds;
  channelIds.add(channelId);
};
prototype["getNextChannelId"] = function getNextChannelId() {
  let _channelId = this._nextChannelId;
  if (_channelId == null) {
    _channelId = this._channelId;
  }
  return _channelId;
};
Object.defineProperty(prototype, "channelId", {
  get: function channelId() {
    return this._channelId;
  },
  set: undefined
});
Object.defineProperty(prototype, "trueServerId", {
  get: function trueServerId() {
    const self = this;
    let channelId = this.streamServerId;
    if (channelId == null) {
      channelId = self.guildId;
    }
    if (channelId == null) {
      channelId = self.channelId;
    }
    return channelId;
  },
  set: undefined
});
Object.defineProperty(prototype, "trueChannelId", {
  get: function trueChannelId() {
    const self = this;
    if (null == this.streamServerId) {
      let streamChannelId = self.channelId;
    } else if (null != self.streamChannelId) {
      streamChannelId = self.streamChannelId;
    } else {
      const obj = require("Integer")(self.streamServerId);
      streamChannelId = require("Integer")(self.streamServerId).prev().toString();
      str = require("Integer")(self.streamServerId).prev();
    }
    return streamChannelId;
  },
  set: undefined
});
prototype["_cleanupSocket"] = function _cleanupSocket() {
  const self = this;
  const _socket = this._socket;
  if (null != _socket) {
    _socket.close();
    _socket.removeAllListeners();
    self._socket = null;
  }
  self._readyData = null;
  self._sfuEndpoint = null;
};
prototype["_chooseExperiments"] = function _chooseExperiments() {
  const items = [];
  if (this._recordingEnabled) {
    items.push("connection_log");
  }
  if (MediaEngineStore.supports(constants5.FIXED_KEYFRAME_INTERVAL)) {
    items.push("fixed_keyframe_interval");
  }
  const config = ProportionalVadIndicatorExperimentDefault.getConfig({ location: "_chooseExperiments" });
  if (config.enabled) {
    items.push("should_analyze_user_voice_volume");
  }
  if (config.dontEmitVolumeOnlySpeakingEvents) {
    items.push("dont_emit_volume_only_speaking_events");
  }
  let enabled = PlatformUtils.isWeb();
  if (enabled) {
    const BrowserTransceiverPaddingRemovalExperiment = BrowserTransceiverPaddingRemovalExperiment2.BrowserTransceiverPaddingRemovalExperiment;
    enabled = BrowserTransceiverPaddingRemovalExperiment.getConfig({ location: "RTCConnection" }).enabled;
  }
  if (enabled) {
    items.push("browser_transceiver_padding_removal");
  }
  if (tmp8Result.isIOS()) {
    const mode = VideoStabilizationExperimentDefault.getConfig({ location: "_chooseExperiments" }).mode;
    if ("standard" === mode) {
      items.push("ios_video_stabilization_standard");
    } else if ("low_latency" === mode) {
      items.push("ios_video_stabilization_low_latency");
    }
    const tmp3Result = VideoStabilizationExperimentDefault;
  }
  tmp8Result = PlatformUtils;
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = SurfaceDirectRendererExperiment.isSurfaceDirectRendererExperimentEnabled();
    const tmp8Result6 = SurfaceDirectRendererExperiment;
  }
  if (isAndroidResult) {
    items.push(SurfaceDirectRendererExperiment.ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT);
  }
  const tmp8Result5 = PlatformUtils;
  if (tmp8Result7.isLinux()) {
    const mode2 = LinuxGpuDecodeExperiment.getLinuxGpuDecodeExperimentConfig("_chooseExperiments").mode;
    let tmp14 = "disable_all" === mode2;
    if (!tmp14) {
      tmp14 = "disable_nvidia" === mode2 && MediaEngineStore.getHasNvidiaGpu();
      const tmp15 = "disable_nvidia" === mode2 && MediaEngineStore.getHasNvidiaGpu();
    }
    if (tmp14) {
      items.push("disable_electron_decode");
    }
    const tmp8Result8 = LinuxGpuDecodeExperiment;
  }
  this._selectedExperiments = items;
  tmp8Result7 = PlatformUtils;
};
prototype["_handleConnecting"] = function _handleConnecting() {
  const self = this;
  if (null != this.endpoint) {
    const channel = ChannelStore.getChannel(self.channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.info("Connecting to RTC server " + self.endpoint + ", rtc-connection-id: " + self.getRTCConnectionId() + ", channel: " + self.channelId + "(" + type + ")");
  }
  self.setState(constants3.CONNECTING);
};
prototype["_handleConnect"] = function _handleConnect(arg0) {
  const self = this;
  closure_1 = arg0;
  const token = this.token;
  this.reconnecting = false;
  if (null == token) {
    const _Error = Error;
    const error = new Error("RTCConnection._handleConnect(...): Token is missing.");
    throw error;
  } else {
    const logger = self.logger;
    logger.info("Connected to RTC server.");
    const prop = self._fetchAsyncResourcesPromise;
    prop.finally(() => {
      closure_1.identify({ serverId: self.trueServerId, channelId: self.trueChannelId, userId: self.userId, sessionId: self.sessionId, token, maxDaveProtocolVersion: MediaEngineStore.getSupportedSecureFramesProtocolVersion(), video: MediaEngineStore.supports(constants5.VIDEO), streamParameters: MediaEngineStore.getVideoStreamParameters(self.context) });
      self.setState(constants3.AUTHENTICATING);
    });
  }
};
prototype["_handleDisconnect"] = function _handleDisconnect(arg0, arg1, code, reason) {
  let _encountered_socket_failure = arg1;
  importDefault = reason;
  let self = this;
  let logger = this.logger;
  logger.info("Disconnected from RTC server, clean: " + arg1 + ", code: " + code + ", reason: " + reason + ", state: " + this.state);
  if (!arg1) {
    _encountered_socket_failure = !self._connecting;
  }
  if (!_encountered_socket_failure) {
    _encountered_socket_failure = self._encountered_socket_failure;
  }
  if (!_encountered_socket_failure) {
    let obj4 = {};
    let merged = Object.assign(self._getAnalyticsProperties());
    ({ hostname: obj2.hostname, _connectCount: obj2.connect_count } = self);
    obj4.code = code;
    obj4.reason = reason;
    require("AnalyticsUtils").track(constants.VOICE_CONNECTION_SOCKET_FAILURE, obj4);
    self._encountered_socket_failure = true;
    let obj = require("AnalyticsUtils");
  }
  if (RTCConnectionStore.getRemoteDisconnectVoiceChannelId() === self.channelId) {
    const _connection = self._connection;
    if (_connection != null) {
      const result = _connection.wasRemoteDisconnected();
    }
  }
  if ("Force Close" === reason) {
    if (self.state === constants3.DISCONNECTED) {
      self._pingTimeouts = [];
      self._pings = [];
      self._connectCompletedTime = 0;
      self._pingBadCount = 0;
      self._inputDetected = false;
      self._mediaSessionId = null;
      const _voiceQuality12 = self._voiceQuality;
      if (_voiceQuality12 != null) {
        _voiceQuality12.stop();
      }
      self._voiceQuality = null;
      const _clearInterval = clearInterval;
      clearInterval(self._voiceQualityPeriodicStatsInterval);
      self._voiceQualityPeriodicStatsInterval = null;
      self._voiceQualityPeriodicStatsSequenceId = 0;
      self._noiseCancellationError = 0;
      self._numNoiseCancellationChanges = 0;
      const _voiceDuration4 = self._voiceDuration;
      if (_voiceDuration4 != null) {
        _voiceDuration4.stop();
      }
      self._voiceDuration = null;
      const _videoQuality = self._videoQuality;
      if (_videoQuality != null) {
        _videoQuality.stop();
      }
      self._videoQuality = null;
      self._videoHealthManager = null;
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      if (_localMediaSinkWantsManager != null) {
        _localMediaSinkWantsManager.reset();
      }
      self._secureFramesState = null;
      const _Set = Set;
      const items = [self.userId];
      const set = new Set(items);
      self._userIds = set;
      const _secureFramesRosterMap = self._secureFramesRosterMap;
      _secureFramesRosterMap.clear();
      self._consecutiveMLSInvalidMessages = 0;
      const _secureFramesTransitionStates = self._secureFramesTransitionStates;
      _secureFramesTransitionStates.clear();
      self._secureFramesNextTransitionState = undefined;
      self._secureFramesMaxConcurrentTransitions = 0;
      self._secureFramesTransitionPrepareCount = 0;
      self._secureFramesTransitionExecuteCount = 0;
      if (null != self._connection) {
        const _connection3 = self._connection;
        self._connection = null;
        self._hasCodecs = false;
        let reconnecting = self.reconnecting;
        if (!reconnecting) {
          reconnecting = tmp10;
        }
        _connection3.destroy(reconnecting);
      }
      self.protocol = null;
      self._readyData = null;
      self._sfuEndpoint = null;
      const obj6 = { willReconnect: tmp10 };
      self.setState(tmp16.DISCONNECTED, obj6);
    } else {
      _videoQuality2 = self._videoQuality;
      if (null != _videoQuality2) {
        if (self.context === constants6.DEFAULT) {
          _videoQuality2.stop();
          if (self._sentVideo) {
            const outboundStats = _videoQuality2.getOutboundStats();
            const item = outboundStats.forEach((num_frames) => {
              let num = num_frames.num_frames;
              if (num == null) {
                num = 0;
              }
              if (num > 0) {
                const obj2 = {};
                const merged = Object.assign(self._getAnalyticsProperties());
                const obj = AnalyticsUtilsDefault;
                obj2.app_hardware_acceleration_enabled = CrossPlatformNativeUtilsDefault.getAppHardwareAccelerationEnabled();
                obj2.media_session_id = self.getMediaSessionId();
                obj2.sender_user_id = self.userId;
                obj2.reason = reason;
                obj2.participant_type = "sender";
                obj2.guild_region = RTCRegionStore.getRegion(self.hostname);
                obj2.hostname = self.hostname;
                obj2.hardware_enabled = MediaEngineStore.getHardwareEncoding();
                const merged1 = Object.assign(num_frames);
                const merged2 = Object.assign(_videoQuality2.getNetworkStats());
                const merged3 = Object.assign(_videoQuality2.getCodecUsageStats("sender", self.userId));
                obj2.device_performance_class = getMediaPerformanceClassDefault();
                obj.track(constants.VIDEO_STREAM_ENDED, obj2);
              }
            });
            const cameraDurationStats = _videoQuality2.getCameraDurationStats();
            let tmp19 = null != cameraDurationStats;
            if (tmp19) {
              tmp19 = cameraDurationStats.camera_enabled_duration > 0;
            }
            if (tmp19) {
              const obj7 = {};
              let merged1 = Object.assign(cameraDurationStats);
              obj7.media_session_id = self.getMediaSessionId();
              require("AnalyticsUtils").track(constants.VIDEO_CALL_ENDED, obj7);
              const obj5 = require("AnalyticsUtils");
            }
          }
          const inboundParticipants = _videoQuality2.getInboundParticipants();
          const item1 = inboundParticipants.forEach((sender_user_id) => {
            const inboundStats = _videoQuality2.getInboundStats(sender_user_id);
            let num;
            if (inboundStats != null) {
              num = inboundStats.num_frames;
            }
            if (num == null) {
              num = 0;
            }
            if (num > 0) {
              const obj3 = {};
              const merged = Object.assign(self._getAnalyticsProperties());
              const obj2 = AnalyticsUtilsDefault;
              obj3.app_hardware_acceleration_enabled = CrossPlatformNativeUtilsDefault.getAppHardwareAccelerationEnabled();
              obj3.media_session_id = self.getMediaSessionId();
              obj3.sender_user_id = sender_user_id;
              obj3.reason = reason;
              obj3.participant_type = "receiver";
              obj3.guild_region = RTCRegionStore.getRegion(self.hostname);
              obj3.hostname = self.hostname;
              obj3.hardware_enabled = MediaEngineStore.getHardwareEncoding();
              const merged1 = Object.assign(inboundStats);
              const merged2 = Object.assign(_videoQuality2.getNetworkStats());
              const merged3 = Object.assign(_videoQuality2.getCodecUsageStats("receiver", sender_user_id));
              obj2.track(constants.VIDEO_STREAM_ENDED, obj3);
            }
          });
        }
      }
      const _voiceQuality = self._voiceQuality;
      if (null != _voiceQuality) {
        if (self.shouldReport()) {
          const outboundPacketsStats = _voiceQuality.getOutboundPacketsStats();
          const outboundBytesStats = _voiceQuality.getOutboundBytesStats();
          const _voiceDuration = self._voiceDuration;
          let durationStats;
          if (_voiceDuration != null) {
            durationStats = _voiceDuration.getDurationStats();
          }
          if (durationStats == null) {
            durationStats = {};
          }
          let num4 = outboundPacketsStats.num_packets;
          ({ duration_connected_ms, duration_speaking_ms } = durationStats);
          if (num4 == null) {
            num4 = 0;
          }
          if (num4 > 0) {
            const obj8 = {};
            let merged2 = Object.assign(self._getAnalyticsProperties());
            obj8.media_session_id = self.getMediaSessionId();
            ({ parentMediaSessionId: obj17.parent_media_session_id, userId: obj17.sender_user_id } = self);
            let str4 = "streamer";
            if (self.context === constants6.DEFAULT) {
              str4 = "sender";
            }
            obj8.participant_type = str4;
            let merged3 = Object.assign(outboundPacketsStats);
            let merged4 = Object.assign(outboundBytesStats);
            obj8.duration_connected_ms = duration_connected_ms;
            obj8.duration_speaking_ms = duration_speaking_ms;
            require("AnalyticsUtils").track(constants.VOICE_STREAM_ENDED, obj8);
            const obj16 = require("AnalyticsUtils");
          }
          const inboundParticipants1 = _voiceQuality.getInboundParticipants();
          const item2 = inboundParticipants1.forEach((sender_user_id) => {
            const inboundPacketsStats = _voiceQuality.getInboundPacketsStats(sender_user_id);
            let num = inboundPacketsStats.num_packets;
            if (num == null) {
              num = 0;
            }
            if (num > 0) {
              const obj3 = {};
              const merged = Object.assign(self._getAnalyticsProperties());
              obj3.media_session_id = self.getMediaSessionId();
              obj3.parent_media_session_id = self.parentMediaSessionId;
              obj3.sender_user_id = sender_user_id;
              obj3.participant_type = "receiver";
              const merged1 = Object.assign(inboundPacketsStats);
              const merged2 = Object.assign(_voiceQuality.getInboundBytesStats(sender_user_id));
              const merged3 = Object.assign(_voiceQuality.getInboundDurationStats(sender_user_id));
              const merged4 = Object.assign(_voiceQuality.getInboundJitterStats(sender_user_id));
              AnalyticsUtilsDefault.track(constants.VOICE_STREAM_ENDED, obj3);
            }
          });
        }
      }
      DeviceFrecencyStore = self.getMediaSessionId();
      let mediaEngine3 = MediaEngineStore;
      const mediaEngine = MediaEngineStore.getMediaEngine();
      const codecSurvey = mediaEngine.getCodecSurvey();
      codecSurvey.then((result) => {
        const parsed = JSON.parse(result);
        if (null != parsed) {
          if (null != parsed.available_video_encoders) {
            if (null != parsed.available_video_decoders) {
              const obj2 = {};
              const merged = Object.assign(parsed);
              obj2.rtc_connection_id = self.getRTCConnectionId();
              obj2.media_session_id = media_session_id;
              AnalyticsUtilsDefault.track(constants.VOICE_CODEC_DETECTED, obj2);
            }
          }
        }
        const error = new Error("codec survey is not available");
        throw error;
      }).catch((error) => {
        const logger = self.logger;
        logger.warn(error);
      });
      self._trackMLSFailures({ recovered: false, downgraded: false });
      let preferredRegion = null;
      if (RTCRegionStore.shouldIncludePreferredRegion()) {
        preferredRegion = RTCRegionStore.getPreferredRegion();
      }
      const settings = mediaEngine3.getSettings();
      const channel = ChannelStore.getChannel(self.channelId);
      const connectionStats = self.getConnectionStats(self.getMediaEngineConnectionId());
      let prop;
      if (connectionStats != null) {
        const outbound = connectionStats.stats.rtp.outbound;
        const found = outbound.find((type) => "audio" === type.type);
        if (found != null) {
          prop = found.sampleRateMismatchPercent;
        }
      }
      const obj9 = {};
      const merged5 = Object.assign(self._getAnalyticsProperties());
      ({ hostname: obj11.hostname, port: obj11.port, protocol: obj11.protocol } = self);
      obj9.reconnect = tmp10;
      obj9.reason = reason;
      obj9.duration = self.getDuration();
      const merged6 = Object.assign(RTCConnectionStore.getUserVoiceSettingsStats(self.context));
      const _voiceQuality2 = self._voiceQuality;
      let packetStats;
      if (_voiceQuality2 != null) {
        packetStats = _voiceQuality2.getPacketStats();
      }
      const merged7 = Object.assign(packetStats);
      const _voiceQuality3 = self._voiceQuality;
      let bytesStats;
      if (_voiceQuality3 != null) {
        bytesStats = _voiceQuality3.getBytesStats();
      }
      const merged8 = Object.assign(bytesStats);
      const _voiceQuality4 = self._voiceQuality;
      let bufferStats;
      if (_voiceQuality4 != null) {
        bufferStats = _voiceQuality4.getBufferStats();
      }
      const merged9 = Object.assign(bufferStats);
      const _voiceQuality5 = self._voiceQuality;
      let networkStats;
      if (_voiceQuality5 != null) {
        networkStats = _voiceQuality5.getNetworkStats();
      }
      const merged10 = Object.assign(networkStats);
      const _voiceQuality6 = self._voiceQuality;
      let systemResourceStats;
      if (_voiceQuality6 != null) {
        systemResourceStats = _voiceQuality6.getSystemResourceStats();
      }
      const merged11 = Object.assign(systemResourceStats);
      const _voiceQuality7 = self._voiceQuality;
      let frameOpStats;
      if (_voiceQuality7 != null) {
        frameOpStats = _voiceQuality7.getFrameOpStats();
      }
      const merged12 = Object.assign(frameOpStats);
      const _voiceQuality8 = self._voiceQuality;
      let transportStats;
      if (_voiceQuality8 != null) {
        transportStats = _voiceQuality8.getTransportStats();
      }
      const merged13 = Object.assign(transportStats);
      const _voiceQuality9 = self._voiceQuality;
      let e2EEStats;
      if (_voiceQuality9 != null) {
        e2EEStats = _voiceQuality9.getE2EEStats();
      }
      const merged14 = Object.assign(e2EEStats);
      const _voiceQuality10 = self._voiceQuality;
      let audioDeviceStats;
      if (_voiceQuality10 != null) {
        audioDeviceStats = _voiceQuality10.getAudioDeviceStats();
      }
      const merged15 = Object.assign(audioDeviceStats);
      const _voiceQuality11 = self._voiceQuality;
      let audioLevelStats;
      if (_voiceQuality11 != null) {
        audioLevelStats = _voiceQuality11.getAudioLevelStats();
      }
      const merged16 = Object.assign(audioLevelStats);
      const _voiceDuration2 = self._voiceDuration;
      let durationStats1;
      if (_voiceDuration2 != null) {
        durationStats1 = _voiceDuration2.getDurationStats();
      }
      const merged17 = Object.assign(durationStats1);
      const _voiceDuration3 = self._voiceDuration;
      let deprecatedDurationStats;
      if (_voiceDuration3 != null) {
        deprecatedDurationStats = _voiceDuration3.getDeprecatedDurationStats();
      }
      const merged18 = Object.assign(deprecatedDurationStats);
      const merged19 = Object.assign(DeviceFrecencyStore.getUsageStats());
      const merged20 = Object.assign(self.getAudioDeviceStates());
      const _systemResponsiveness = self._systemResponsiveness;
      let pttQueueLatencyStats;
      if (_systemResponsiveness != null) {
        pttQueueLatencyStats = _systemResponsiveness.getPttQueueLatencyStats();
      }
      const merged21 = Object.assign(pttQueueLatencyStats);
      obj9.num_noise_cancellation_changes = self._numNoiseCancellationChanges;
      obj9.media_session_id = self.getMediaSessionId();
      let bitrate = null;
      if (null != channel) {
        bitrate = channel.bitrate;
      }
      obj9.channel_bitrate = bitrate;
      obj9.cloudflare_best_region = preferredRegion;
      obj9.connect_count = self._connectCount;
      const _Math = Math;
      obj9.ping_average = Math.round(self.getAveragePing());
      obj9.ping_bad_count = self._pingBadCount;
      obj9.ping_timeout = self._pingTimeouts.length;
      obj9.input_detected = self._inputDetected;
      obj9.no_input_detected_notice = mediaEngine3.getNoInputDetectedNotice();
      obj9.audio_input_mode = settings.mode;
      obj9.automatic_audio_input_sensitivity_enabled = settings.modeOptions.autoThreshold;
      obj9.audio_input_sensitivity = settings.modeOptions.threshold;
      ({ echoCancellation: obj11.echo_cancellation_enabled, sidechainCompression: obj11.sidechain_compression_enabled, noiseSuppression: obj11.noise_suppression_enabled, noiseCancellation: obj11.noise_cancellation_enabled } = settings);
      obj9.noise_canceller_error = self._noiseCancellationError;
      ({ automaticGainControl: obj11.automatic_gain_control_enabled, outputVolume: obj11.voice_output_volume, inputVolume: obj11.voice_input_volume } = settings);
      obj9.encryption_mode = self._encryptionMode;
      obj9.channel_count = self.channelIds.size;
      obj9.device_performance_class = require("getMediaPerformanceClass")();
      let tmp112 = null;
      if (null != self._connection) {
        const _connection2 = self._connection;
        let numFastUdpReconnects;
        if (_connection2 != null) {
          numFastUdpReconnects = _connection2.getNumFastUdpReconnects();
        }
        tmp112 = numFastUdpReconnects;
      }
      obj9.num_fast_udp_reconnects = tmp112;
      obj9.parent_media_session_id = self.parentMediaSessionId;
      const mediaEngine1 = mediaEngine3.getMediaEngine();
      obj9.audio_subsystem = mediaEngine1.getAudioSubsystem();
      const mediaEngine2 = mediaEngine3.getMediaEngine();
      obj9.audio_layer = mediaEngine2.getAudioLayer();
      obj9.automatic_audio_subsystem = settings.automaticAudioSubsystem;
      obj9.participant_type = self.getVoiceParticipantType();
      obj9.audio_capture_sample_rate_mismatch_percent = prop;
      obj9.krisp_sdk_version = mediaEngine3.getState().krispVersion;
      ({ _secureFramesMaxConcurrentTransitions: obj11.secure_frames_max_concurrent_transitions, _secureFramesTransitionPrepareCount: obj11.secure_frames_transition_prepare_count, _secureFramesTransitionExecuteCount: obj11.secure_frames_transition_execute_count } = self);
      obj9.vad_use_advanced_voice_activity = settings.modeOptions.vadUseKrisp;
      obj9.soundshare_experimental = mediaEngine3.getExperimentalSoundshare();
      obj9.join_voice_id = self.joinVoiceId;
      obj9.bypass_system_input_processing = settings.bypassSystemInputProcessing;
      obj9.system_microphone_mode = mediaEngine3.getSystemMicrophoneMode();
      obj9.output_audio_route_type = AudioRouteStore.getCurrentRouteType();
      _require = _voiceQuality(function*() {
        if (_systemResources != null) {
          const batteryLevelStats = _systemResources.getBatteryLevelStats();
        }
        yield batteryLevelStats;
        if (value == null) {
          value = { batteryUsageRounded: null };
        }
        return value;
      });
      let items1 = [
        (function() {
              self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(),
  ,

      ];
      const nextPromise = codecSurvey.then((result) => {
        const parsed = JSON.parse(result);
        if (null != parsed) {
          if (null != parsed.available_video_encoders) {
            if (null != parsed.available_video_decoders) {
              const obj2 = {};
              const merged = Object.assign(parsed);
              obj2.rtc_connection_id = self.getRTCConnectionId();
              obj2.media_session_id = media_session_id;
              AnalyticsUtilsDefault.track(constants.VOICE_CODEC_DETECTED, obj2);
            }
          }
        }
        const error = new Error("codec survey is not available");
        throw error;
      });
      items1[1] = require("KrispUtils").getKrispModel();
      if (mediaEngine3.getKrispEnableStats()) {
        mediaEngine3 = mediaEngine3.getMediaEngine();
        let noiseCancellationStats = mediaEngine3.getNoiseCancellationStats();
      } else {
        noiseCancellationStats = Promise.resolve(null);
      }
      items1[2] = noiseCancellationStats;
      all = all(items1);
      items1 = all.then;
      items1((arg0) => {
        [, tmp2, tmp3] = arg0;
        const logger = self.logger;
        str = tmp2;
        if (tmp2 == null) {
          str = "null";
        }
        logger.log("[VOICE_DISCONNECT] krisp_nc_model: " + str);
        const obj2 = {};
        const merged = Object.assign(closure_0);
        obj2.battery_usage = tmp;
        obj2.krisp_nc_model = tmp2;
        let lowNoiseMs;
        if (tmp3 != null) {
          lowNoiseMs = tmp3.lowNoiseMs;
        }
        obj2.duration_low_noise_detected_ms = lowNoiseMs;
        let mediumNoiseMs;
        if (tmp3 != null) {
          mediumNoiseMs = tmp3.mediumNoiseMs;
        }
        obj2.duration_medium_noise_detected_ms = mediumNoiseMs;
        let highNoiseMs;
        if (tmp3 != null) {
          highNoiseMs = tmp3.highNoiseMs;
        }
        obj2.duration_high_noise_detected_ms = highNoiseMs;
        let talkTimeMs;
        if (tmp3 != null) {
          talkTimeMs = tmp3.talkTimeMs;
        }
        obj2.duration_noise_cancellation_voice_detected_ms = talkTimeMs;
        AnalyticsUtilsDefault.track(constants.VOICE_DISCONNECT, obj2);
      });
      const result1 = self._trackRemainingSecureFrameTransitions();
      const tmp110Result = require("KrispUtils");
    }
  } else {
    if (code !== require("RTCControlSocket").RTCSocketCloseCode.REPEATED_MLS_INVALID_MESSAGES) {
      if (code !== tmp11(tmp12[33]).RTCSocketCloseCode.DAVE_DOWNGRADE_REFUSED) {
        let _scheduleReconnectResult = self._scheduleReconnect();
      }
      const logger2 = self.logger;
      const result2 = _scheduleReconnectResult / 1000;
      const _HermesInternal = HermesInternal;
      logger2.warn("Disconnect was not clean! reason=" + reason + ". Reconnecting in " + result2.toFixed(2) + " seconds.");
    }
    _scheduleReconnectResult = self._scheduleMLSFailureReconnect();
    tmp11 = _require;
    tmp12 = _videoQuality2;
  }
};
prototype["_handleResuming"] = function _handleResuming() {
  const _connection = this._connection;
  if (_connection != null) {
    _connection.fastUdpReconnect();
  }
  const _connection2 = this._connection;
  if (_connection2 != null) {
    _connection2.clearAllSpeaking();
  }
};
prototype["_handleReady"] = function _handleReady(socket, address, port, modes, ssrc, streamParameters, items) {
  const self = this;
  if (items == null) {
    items = [];
  }
  this._chooseExperiments(items);
  if (0 === streamParameters.length) {
    const obj = { type: constants8.VIDEO, rid: "100", ssrc: ssrc + 1, rtxSsrc: ssrc + 2, quality: 100, active: false };
    streamParameters.push(obj);
  }
  const obj2 = { socket, ssrc, streamParameters };
  self._readyData = obj2;
  let _sfuEndpoint = null;
  if (null != address) {
    _sfuEndpoint = null;
    if (null != port) {
      _sfuEndpoint = null;
      if (null != modes) {
        const obj3 = { address, port, modes };
        _sfuEndpoint = obj3;
      }
    }
  }
  if (_sfuEndpoint == null) {
    _sfuEndpoint = self._sfuEndpoint;
  }
  if (null == _sfuEndpoint) {
    self.port = null;
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.info("READY did not include an SFU endpoint; waiting for sfu_update. supportsSfuUpdate=" + socket.supportsSfuUpdate());
    self.setState(constants3.AWAITING_ENDPOINT);
  } else {
    const result = self._connectMediaEngineWithEndpoint(_sfuEndpoint, obj2);
  }
};
prototype["_connectMediaEngineWithEndpoint"] = function _connectMediaEngineWithEndpoint(_sfuEndpoint, _readyData) {
  const self = this;
  importDefault = _sfuEndpoint;
  const socket = _readyData.socket;
  dependencyMap = undefined;
  closure_4 = undefined;
  _require = undefined;
  this._sfuEndpoint = _sfuEndpoint;
  this.protocol = null;
  ({ ssrc, streamParameters } = _readyData);
  this.setState(constants3.RTC_CONNECTING);
  this.port = _sfuEndpoint.port;
  const ProcessBoostExperiment = require("ProcessBoostExperiment").ProcessBoostExperiment;
  const config = ProcessBoostExperiment.getConfig({ location: "media_engine_connect" });
  ({ processPriority, threadPriorityConfiguration } = config);
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const persistentCodesEnabled = SecureFramesPersistedStore.getPersistentCodesEnabled();
  const staticAuthSessionId = AuthenticationStore.getStaticAuthSessionId();
  let obj2 = { ssrc, address: _sfuEndpoint.address, port: _sfuEndpoint.port, modes: _sfuEndpoint.modes, experiments: self._selectedExperiments, streamParameters, videoSupported: null, qosEnabled: null, signingKeyId: null, processPriority: null, threadPriorityConfiguration: null };
  const tmp2Result = require("TimeUtils");
  ({ context, userId } = self);
  obj2.videoSupported = MediaEngineStore.supports(constants5.VIDEO);
  obj2.qosEnabled = MediaEngineStore.getQoS();
  let tmp9;
  if (persistentCodesEnabled) {
    tmp9 = staticAuthSessionId;
  }
  obj2.signingKeyId = tmp9;
  obj2.processPriority = processPriority;
  obj2.threadPriorityConfiguration = threadPriorityConfiguration;
  let merged = Object.assign(self.getExtraConnectionOptions());
  const connectResult = mediaEngine.connect(context, userId, obj2);
  dependencyMap = connectResult;
  const nowResult = require("TimeUtils").now();
  self._mediaEngineConnectDuration = require("TimeUtils").now() - nowResult;
  const tmp2Result3 = require("TimeUtils");
  let isWebResult = require("PlatformUtils").isWeb();
  if (isWebResult) {
    isWebResult = !closure_24;
  }
  if (isWebResult) {
    SentryUtilsDefault.captureMessage("Browser does not support Unified Plan");
  }
  connectResult.setUseElectronVideo(mediaEngine.supports(constants5.ELECTRON_VIDEO));
  let guild = null;
  if (null != self.guildId) {
    guild = GuildStore.getGuild(self.guildId);
  }
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  closure_4 = premiumTier === TIER_1.TIER_1;
  const tmp2Result4 = require("PlatformUtils");
  _require = PremiumUtilsDefault.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, UserStore.getCurrentUser());
  let result = connectResult.setCalcMaxBitrateFunc((videoCodec) => {
    ({ height, framerate } = videoCodec);
    let tmp = height > 0;
    if (tmp) {
      tmp = height <= 720;
    }
    if (height === __initData3.RESOLUTION_1080) {
      if (framerate === FPS_30.FPS_30) {
        const tmp6Result = getFrontierTuningConfigIfEligibleDefault("RTCConnection", UserStore.getCurrentUser(), self.guildId);
        let maxBitrate;
        if (tmp6Result != null) {
          maxBitrate = tmp6Result.maxBitrate;
        }
        if (null != maxBitrate) {
          return tmp6Result.maxBitrate;
        }
      }
    }
    if (closure_4) {
      if (!closure_0) {
        if (tmp) {
          if (!tmp2) {
            const ServerLadderExperiment = ServerLadderExperiment2.ServerLadderExperiment;
            let bitrate = ServerLadderExperiment.getConfig({ location: "RTCConnection" }).bitrate;
          }
          return bitrate;
        }
      }
    }
    let bitrate1 = null;
    if ("AV1" === videoCodec.videoCodec) {
      if (0 !== height) {
        bitrate1 = null;
        if (tmp) {
          bitrate1 = null;
        }
      }
      const AV1StreamBitrateReductionExperiment = AV1BitrateTuningExperiment.AV1StreamBitrateReductionExperiment;
      bitrate1 = AV1StreamBitrateReductionExperiment.getConfig({ location: "RTCConnection" }).bitrate;
    }
    bitrate = bitrate1;
    tmp2 = framerate <= 30;
  });
  if (self.context === constants6.STREAM) {
    if ("streamer" === self.getVoiceParticipantType()) {
      const tmp19ResultResult = tmp19(4974)("RTCConnection", UserStore.getCurrentUser(), self.guildId);
      let maxResolution;
      if (tmp19ResultResult != null) {
        maxResolution = tmp19ResultResult.maxResolution;
      }
      let num = null;
      if (maxResolution === RESOLUTION_1080.RESOLUTION_1080) {
        num = 921600;
      }
      const result1 = connectResult.setFakeGoLiveEncodePixelCount(num);
      const tmp19Result = tmp19(4974);
    }
  }
  if (MediaEngineStore.supports(constants5.IMAGE_QUALITY_MEASUREMENT)) {
    const SingleCpuCopyExperiment = tmp2(13360).SingleCpuCopyExperiment;
    const enabled = SingleCpuCopyExperiment.getConfig({ location: "RTCConnection" }).enabled;
    let str4 = "imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec";
    if (enabled) {
      str4 = "imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec,singleCpuCopy";
    }
    const result2 = connectResult.setVideoQualityMeasurement(str4);
    connectResult.setSingleCpuCopy(enabled);
  }
  const result3 = connectResult.setVideoEncoderExperiments(MediaEngineStore.getVideoEncoderExperiments(self.context, self.getVoiceParticipantType()));
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Speaking, (arg0, _lastSentSpeakingStatus, _lastSentSSRC) => {
    if (self.userId === arg0) {
      self.sendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC);
    }
    self.emit(RTCConnectionEvent.RTCConnectionEvent.Speaking, arg0, _lastSentSpeakingStatus);
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.NativeMuteChanged, (arg0) => {
    if (self.context === constants6.DEFAULT) {
      NativeMuteManagerDefault.nativeMuteChanged(arg0);
    }
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Video, (userId, streamId, audioSsrc, arg3, rtxSsrc, videoStreamParameters) => {
    closure_0 = userId;
    let num = audioSsrc;
    let num2 = arg3;
    const obj2 = { userId, streamId, audioSsrc, videoSsrc: null, rtxSsrc: null, videoStreamParameters: null };
    let num3 = arg3;
    if (arg3 == null) {
      num3 = 0;
    }
    let num4 = rtxSsrc;
    obj2.videoSsrc = num3;
    obj2.rtxSsrc = rtxSsrc;
    obj2.videoStreamParameters = videoStreamParameters;
    self._handleVideoStreamId(obj2);
    if (self.userId === userId) {
      if (num == null) {
        num = 0;
      }
      if (num2 == null) {
        num2 = 0;
      }
      if (num4 == null) {
        num4 = 0;
      }
      self.sendVideo(num, num2, num4, videoStreamParameters);
      if (videoStreamParameters != null) {
        const item = videoStreamParameters.forEach((quality) => {
          if (100 === quality.quality) {
            self.emit(RTCConnectionEvent.RTCConnectionEvent.VideoSourceQualityChanged, self.guildId, self.channelId, closure_0, quality.maxResolution, quality.maxFrameRate, self.context);
          }
        });
      }
    }
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.FirstFrame, (arg0, arg1, arg2) => {
    if (null != self._localMediaSinkWantsManager) {
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      const result = _localMediaSinkWantsManager.setFirstFrameReceived(arg1);
      self.emit(RTCConnectionEvent.RTCConnectionEvent.Video, self.guildId, self.channelId, arg0, arg2, self.streamServerId);
    }
    if (null != self._goLiveQualityManager) {
      self.emit(RTCConnectionEvent.RTCConnectionEvent.Video, self.guildId, self.channelId, arg0, arg2, self.streamServerId);
    }
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Silence, (arg0) => {
    let _inputDetected = self._inputDetected;
    if (!_inputDetected) {
      _inputDetected = !arg0;
    }
    self._inputDetected = _inputDetected;
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Connected, (protocol, sdp) => {
    let succeedResult = self;
    const logger = self.logger;
    logger.info("RTC connected to media server: " + config.address + ":" + config.port);
    if (socket === self._socket) {
      if (_undefined === succeedResult._connection) {
        let Encryption = dependencyMap;
        const tmp9 = new VoiceQualityDefault(_undefined);
        succeedResult._voiceQuality = tmp9;
        const _voiceQuality = succeedResult._voiceQuality;
        _voiceQuality.start();
        const _voiceQuality2 = succeedResult._voiceQuality;
        _voiceQuality2.on(VoiceQuality.VoiceQualityEvent.InputDeviceSampleRateChanged, (sampleRate) => {
          config(encryption[32]).dispatch({ type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED", sampleRate });
        });
        succeedResult._voiceQualityPeriodicStatsSequenceId = 0;
        const _setInterval = setInterval;
        succeedResult._voiceQualityPeriodicStatsInterval = setInterval(succeedResult._handleVoiceQualityPeriodicsStats, 300000);
        const tmp17 = new SystemResponsivenessDefault(_undefined);
        succeedResult._systemResponsiveness = tmp17;
        const _systemResponsiveness = succeedResult._systemResponsiveness;
        _systemResponsiveness.start();
        const tmp22 = new SystemResourcesDefault();
        succeedResult._systemResources = tmp22;
        const _systemResources = succeedResult._systemResources;
        _systemResources.setLastBattery();
        succeedResult._noiseCancellationError = 0;
        const tmp28 = new VoiceDurationDefault(succeedResult.userId, _undefined);
        succeedResult._voiceDuration = tmp28;
        const _voiceDuration = succeedResult._voiceDuration;
        const selfMute = _undefined.getSelfMute();
        _voiceDuration.start(selfMute, _undefined.getSelfDeaf());
        succeedResult.protocol = protocol;
        if ("udp" !== protocol) {
          if ("webrtc" === protocol) {
            const logger4 = succeedResult.logger;
            logger4.info("Sending local SDP to RTC server.");
            const _handleSDP = succeedResult._handleSDP;
            socket.once(RTCControlSocket.SocketEvent.SDP, _handleSDP.bind(succeedResult));
            protocol = socket.selectProtocol(protocol, succeedResult.getRTCConnectionId(), sdp);
            const _backoff = succeedResult._backoff;
            succeedResult = _backoff.succeed();
          } else {
            const logger3 = succeedResult.logger;
            logger3.error("Unable to determine protocol.");
          }
        }
        const logger5 = succeedResult.logger;
        logger5.info("Sending UDP info to RTC server.", sdp, succeedResult._selectedExperiments);
        if (null == succeedResult._sfuEndpoint) {
          const logger7 = succeedResult.logger;
          logger7.info("Clearing SFU endpoint before SELECT_PROTOCOL.");
          _undefined.setUdpEndpoint(null);
        } else {
          const _sfuEndpoint = succeedResult._sfuEndpoint;
          let everyResult = null != config && config.address === _sfuEndpoint.address && config.port === _sfuEndpoint.port && config.modes.length === _sfuEndpoint.modes.length;
          if (everyResult) {
            const modes = config.modes;
            everyResult = modes.every((item, index) => item === _sfuEndpoint.modes[index]);
          }
          if (!everyResult) {
            const logger6 = succeedResult.logger;
            const _HermesInternal = HermesInternal;
            logger6.info("Retargeting SFU endpoint to " + succeedResult._sfuEndpoint.address + ":" + succeedResult._sfuEndpoint.port);
            const obj = { address: succeedResult._sfuEndpoint.address, port: succeedResult._sfuEndpoint.port };
            _undefined.setUdpEndpoint(obj);
          }
        }
        Encryption = RTCControlSocket.SocketEvent.Encryption;
        socket.once(Encryption, (_encryptionMode, secretKey) => {
          if (encryption === _connection._connection) {
            encryption.setEncryption(_encryptionMode, secretKey);
            tmp._encryptionMode = _encryptionMode;
          }
        });
        const protocol1 = socket.selectProtocol(protocol, succeedResult.getRTCConnectionId(), sdp, succeedResult._selectedExperiments);
      }
    }
    const logger2 = succeedResult.logger;
    logger2.warn("Ignoring connected event from stale RTC connection.");
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.VideoEncoderFallback, (codecs) => {
    const found = codecs.filter((type) => "video" === type.type);
    const mapped = found.map((name) => name.name);
    const logger = self.logger;
    logger.info("The originally selected video encoder is not working, fallback to the other available encoders: " + mapped.join(","));
    socket.updateSession({ codecs });
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.VideoDecoderFallback, (codecs) => {
    const channel = ChannelStore.getChannel(self.channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type === constants2.GUILD_STAGE_VOICE) {
      if (!self._videoDecoderFallbackSuppressed) {
        const logger = self.logger;
        logger.info("Suppressing video decoder fallback: stage channel");
        self._videoDecoderFallbackSuppressed = true;
      }
    } else {
      const found = codecs.filter((type) => "video" === type.type);
      const mapped = found.map((name) => name.name);
      const logger2 = self.logger;
      const _HermesInternal = HermesInternal;
      logger2.info("The originally selected video decoder is not working, fallback to the other available decoders: " + mapped.join(","));
      const obj = { codecs };
      socket.updateSession(obj);
    }
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.VideoCodecError, (codecStandard) => {
    const obj = { videoCodec: codecStandard.codecStandard, errorMessage: codecStandard.message, mediaContext: self.context, mediaSessionId: null, streamKey: self.getMediaStreamKey() };
    const _mediaSessionId = self._mediaSessionId;
    obj.mediaSessionId = _mediaSessionId;
    if ("encode" === codecStandard.mode) {
      const obj4 = { type: AVError.AVError.VIDEO_ENCODE_ERROR };
      const merged = Object.assign(obj);
      obj4.videoEncoder = codecStandard.implName;
      let obj5 = obj4;
    } else {
      obj5 = { type: AVError.AVError.VIDEO_DECODE_ERROR };
      const merged1 = Object.assign(obj);
      obj5.videoDecoder = codecStandard.implName;
    }
    AVError.reportAVError(obj5);
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Error, (error) => {
    if (socket === self._socket) {
      let preferredRegion = null;
      if (RTCRegionStore.shouldIncludePreferredRegion()) {
        preferredRegion = RTCRegionStore.getPreferredRegion();
      }
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.error("Error occurred while connecting to RTC server: " + error);
      const obj5 = {};
      const merged = Object.assign(self._getAnalyticsProperties());
      ({ hostname: obj3.hostname, port: obj3.port, protocol: obj3.protocol } = self);
      obj5.error = error;
      obj5.cloudflare_best_region = preferredRegion;
      ({ _connectCount: obj3.connect_count, joinVoiceId: obj3.join_voice_id } = self);
      AnalyticsUtilsDefault.track(constants.VOICE_CONNECTION_FAILURE, obj5);
    }
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.ConnectionStateChange, (arg0) => {
    const logger = self.logger;
    logger.info("RTC media connection state change: " + self.state + " => " + arg0);
    if (socket === self._socket) {
      const state = self.state;
      if (constants7.DISCONNECTED === arg0) {
        self.setState(constants3.RTC_DISCONNECTED);
      } else if (constants7.CONNECTING === arg0) {
        self.setState(constants3.RTC_CONNECTING);
      } else if (constants7.CONNECTED === arg0) {
        self.setState(constants3.RTC_CONNECTED);
      } else if (constants7.NO_ROUTE === arg0) {
        self.setState(constants3.NO_ROUTE);
      } else if (constants7.ICE_CHECKING === arg0) {
        self.setState(constants3.ICE_CHECKING);
      } else if (constants7.DTLS_CONNECTING === arg0) {
        self.setState(constants3.DTLS_CONNECTING);
      }
      if (state === constants3.RTC_CONNECTING) {
        if (self.state === constants3.RTC_DISCONNECTED) {
          self.reconnect();
        }
        if (self.state === constants3.RTC_CONNECTED) {
          const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
          if (_localMediaSinkWantsManager != null) {
            _localMediaSinkWantsManager.setConnection(c3);
          }
          const _goLiveQualityManager = self._goLiveQualityManager;
          if (_goLiveQualityManager != null) {
            _goLiveQualityManager.update();
          }
          self._connectCompletedTime = TimeUtils.now();
          self._hasEverConnected = true;
          self._connecting = false;
          self._encountered_socket_failure = false;
          const result = self._trackVoiceConnectionSuccess(c3);
        } else if (state === constants3.RTC_CONNECTED) {
          const stateHistory = self.stateHistory;
          stateHistory.reset(self.state);
        }
      }
      if (self.state === constants3.NO_ROUTE) {
        if (0 === self._backoff.fails) {
          self._handleNoRoute();
        }
        self._scheduleReconnect();
      }
    }
  });
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.SecureFramesUpdate, (_secureFramesState) => {
    self._secureFramesState = _secureFramesState;
    self.emit(RTCConnectionEvent.RTCConnectionEvent.SecureFramesUpdate);
  });
  const _handlePing = self._handlePing;
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Ping, _handlePing.bind(self));
  const _handlePingTimeout = self._handlePingTimeout;
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.PingTimeout, _handlePingTimeout.bind(self));
  const _handleOutboundLossRate = self._handleOutboundLossRate;
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.OutboundLossRate, _handleOutboundLossRate.bind(self));
  const _handleLocalVideoDisabled = self._handleLocalVideoDisabled;
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.LocalVideoDisabled, _handleLocalVideoDisabled.bind(self));
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Stats, RTCBandwidthMonitorDefault.create());
  const _handleRemoteStreamsReady = self._handleRemoteStreamsReady;
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.RemoteStreamsReady, _handleRemoteStreamsReady.bind(self));
  const handleUsersMerged = self.handleUsersMerged;
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.UsersMerged, handleUsersMerged.bind(self));
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.NoiseCancellationError, (_noiseCancellationError) => {
    self._noiseCancellationError = _noiseCancellationError;
  });
  const _handleMLSFailure = self._handleMLSFailure;
  connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.MLSFailure, _handleMLSFailure.bind(self));
  const result4 = connectResult.setRemoteVideoSinkWants(self._remoteVideoSinkWants);
  self._connection = connectResult;
  self._hasCodecs = false;
  self._mediaEngineConnectionId = connectResult.mediaEngineConnectionId;
  const tmp19Result2 = RTCBandwidthMonitorDefault;
};
prototype["_handleSfuUpdate"] = function _handleSfuUpdate(arg0, primary) {
  const self = this;
  if (arg0 === this._socket) {
    primary = undefined;
    if (primary != null) {
      primary = primary.primary;
    }
    if (null != primary) {
      let _sfuEndpoint = { address: null, port: null, modes: null };
      ({ ip: obj.address, port: obj.port, modes: obj.modes } = primary);
      _sfuEndpoint = self._sfuEndpoint;
      let everyResult = null != _sfuEndpoint && _sfuEndpoint.address === _sfuEndpoint.address && _sfuEndpoint.port === _sfuEndpoint.port && _sfuEndpoint.modes.length === _sfuEndpoint.modes.length;
      if (everyResult) {
        const modes = _sfuEndpoint.modes;
        everyResult = modes.every((item, index) => item === _sfuEndpoint.modes[index]);
      }
      if (!everyResult) {
        self._sfuEndpoint = _sfuEndpoint;
        self.port = _sfuEndpoint.port;
        const _connection = self._connection;
        if (null != _connection) {
          if (null == self.protocol) {
            const logger8 = self.logger;
            logger8.info("Received sfu_update before media protocol was selected; endpoint cached.");
          } else if ("udp" !== self.protocol) {
            const logger7 = self.logger;
            const _HermesInternal3 = HermesInternal;
            logger7.warn("Ignoring sfu_update for non-UDP protocol: " + self.protocol);
          } else {
            const logger6 = self.logger;
            const _HermesInternal2 = HermesInternal;
            logger6.info("Retargeting SFU endpoint to " + _sfuEndpoint.address + ":" + _sfuEndpoint.port);
            ({ address: obj2.address, port: obj2.port } = _sfuEndpoint);
            _connection.setUdpEndpoint({ address: null, port: null });
            const obj3 = { address: null, port: null };
          }
          return tmp18;
        } else {
          const _readyData = self._readyData;
          if (null != _readyData) {
            if (_readyData.socket === arg0) {
              const result = self._connectMediaEngineWithEndpoint(_sfuEndpoint, _readyData);
            } else {
              const logger5 = self.logger;
              logger5.warn("sfu_update socket does not match READY socket.");
            }
          } else {
            const logger4 = self.logger;
            logger4.warn("Received unexpected SFU_UPDATE before READY.");
          }
        }
      }
    } else {
      const logger9 = self.logger;
      logger9.info("Clearing SFU endpoint.");
      self._sfuEndpoint = null;
      self.port = null;
      const _connection2 = self._connection;
      if (null == _connection2) {
        self.setState(constants3.AWAITING_ENDPOINT);
      } else if (null == self.protocol) {
        const logger3 = self.logger;
        logger3.info("Received sfu_update before media protocol was selected; endpoint clear cached.");
      } else if ("udp" !== self.protocol) {
        const logger2 = self.logger;
        const _HermesInternal = HermesInternal;
        logger2.warn("Ignoring sfu_update for non-UDP protocol: " + self.protocol);
      } else {
        _connection2.setUdpEndpoint(null);
      }
    }
  } else {
    const logger = self.logger;
    logger.warn("Received sfu_update from stale socket.");
  }
};
prototype["_handleSpeaking"] = function _handleSpeaking(arg0, userId, audioSSRC, arg3) {
  const self = this;
  const _connection = this._connection;
  if (tmp) {
    if (arg3 !== constants9.NONE) {
      const user = _connection.createUser(userId, audioSSRC);
    }
    const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      _localMediaSinkWantsManager.setAudioSSRC(userId, audioSSRC);
    }
  }
  tmp = null != _connection && self.userId !== userId;
};
prototype["handleFlags"] = function handleFlags(arg0, arg1) {
  this.emit(RTCConnectionEvent.RTCConnectionEvent.Flags, arg0, arg1);
};
prototype["handlePlatform"] = function handlePlatform(arg0, arg1) {
  this.emit(RTCConnectionEvent.RTCConnectionEvent.Platform, arg0, arg1, this.channelId);
};
prototype["handleUsersMerged"] = function handleUsersMerged(arr) {
  this.emit(RTCConnectionEvent.RTCConnectionEvent.UsersMerged, arr.map((id) => id.id), this.context);
};
prototype["getOrCreateVideoQuality"] = function getOrCreateVideoQuality() {
  const self = this;
  if (null != this._connection) {
    if (null == self._videoQuality) {
      const videoQuality = new VideoQuality.VideoQuality(self._connection);
      self._videoQuality = videoQuality;
      const _videoQuality2 = self._videoQuality;
      let result = _videoQuality2.updateCallUserIdsCount(self._userIds.size);
      const _videoQuality3 = self._videoQuality;
      _videoQuality3.start();
      const defaultConfig = VideoHealthManager.VideoHealthManager.defaultConfig;
      ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
      if (defaultConfig.featureEnabled) {
        const videoHealthManager = new VideoHealthManager.VideoHealthManager(windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec);
        self._videoHealthManager = videoHealthManager;
        if (null != self._localMediaSinkWantsManager) {
          self._localMediaSinkWantsManager.videoHealthManager = self._videoHealthManager;
        }
        const _videoQuality = self._videoQuality;
        _videoQuality.on(VideoQuality.VideoQualityEvent.FpsUpdate, (arg0, arg1, arg2) => {
          const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
          let result;
          if (_localMediaSinkWantsManager != null) {
            result = _localMediaSinkWantsManager.shouldReceiveFromUser(arg0);
          }
          if (result) {
            const _videoHealthManager = self._videoHealthManager;
            if (_videoHealthManager != null) {
              _videoHealthManager.updateFps(arg0, arg1, arg2);
            }
          }
        });
      }
    }
  }
  return self._videoQuality;
};
prototype["_handleVideoStreamId"] = function _handleVideoStreamId(arg0) {
  const self = this;
  ({ userId, streamId, videoSsrc, videoStreamParameters } = arg0);
  this.emit(RTCConnectionEvent.RTCConnectionEvent.Video, this.guildId, this.channelId, userId, streamId, this.streamServerId);
  if (tmp2) {
    const logger = self.logger;
    logger.error("_handleVideoStreamId: Unable to create videoQuality.");
  }
  if (tmp4) {
    const item = videoStreamParameters.forEach((ssrc) => {
      let num = ssrc.ssrc;
      if (num == null) {
        num = 0;
      }
      let tmp = num > 0;
      if (tmp) {
        tmp = true === ssrc.active;
      }
      if (tmp) {
        const _videoQuality = self._videoQuality;
        if (_videoQuality != null) {
          _videoQuality.setOutboundSsrc(num);
        }
      }
    });
  }
  if (self.userId !== userId) {
    let tmp7 = !tmp6;
    if (0 === videoSsrc && null === streamId) {
      let _videoQuality = self._videoQuality;
      let hasItem;
      if (_videoQuality != null) {
        const inboundParticipants = _videoQuality.getInboundParticipants();
        hasItem = inboundParticipants.includes(userId);
      }
      tmp7 = hasItem;
    }
    if (tmp7) {
      const _videoQuality2 = self._videoQuality;
      if (_videoQuality2 != null) {
        _videoQuality2.setInboundUser(userId, videoSsrc);
      }
      const _videoHealthManager = self._videoHealthManager;
      if (_videoHealthManager != null) {
        const user = _videoHealthManager.createUser(userId);
      }
    }
  }
  if (tmp11) {
    if (null != self._localMediaSinkWantsManager) {
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      _localMediaSinkWantsManager.setStreamId(userId, streamId);
    } else {
      let tmp12 = null != self._goLiveQualityManager;
      if (tmp12) {
        const _goLiveQualityManager = self._goLiveQualityManager;
        tmp12 = _goLiveQualityManager.getUserID() === userId;
      }
      if (tmp12) {
        const _goLiveQualityManager2 = self._goLiveQualityManager;
        if (_goLiveQualityManager2 != null) {
          _goLiveQualityManager2.setStreamId(streamId);
        }
      }
    }
  }
};
prototype["_handleLocalVideoDisabled"] = function _handleLocalVideoDisabled(userId, arg1) {
  const self = this;
  if (this.userId !== userId) {
    const orCreateVideoQuality = self.getOrCreateVideoQuality();
    if (null == orCreateVideoQuality) {
      const logger = self.logger;
      logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
    } else {
      orCreateVideoQuality.setUserVideoDisabled(userId, arg1);
    }
  }
};
prototype["_handleRemoteStreamsReady"] = function _handleRemoteStreamsReady(number_of_users) {
  const diff = TimeUtils.now() - this._connectStartTime;
  const obj3 = {};
  const merged = Object.assign(this._getAnalyticsProperties());
  obj3.number_of_users = number_of_users;
  obj3.duration_ms = diff;
  AnalyticsUtilsDefault.track(constants.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, obj3);
};
prototype["_handleVideo"] = function _handleVideo(arg0, userId, audioSSRC, ssrc, arr) {
  const self = this;
  closure_1 = userId;
  closure_0 = ssrc;
  if (MediaEngineStore.supports(constants5.VIDEO)) {
    if (null != self._connection) {
      if (self.userId !== userId) {
        if (null != self._localMediaSinkWantsManager) {
          const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
          _localMediaSinkWantsManager.setAudioSSRC(userId, audioSSRC);
          const mapped = arr.map((rid) => ({ type: constants8.VIDEO, rid: rid.rid, ssrc: rid.ssrc, rtxSsrc: rid.rtxSsrc, quality: rid.quality, active: closure_0 > 0 }));
          if (0 === mapped.length) {
            const obj2 = { type: constants8.VIDEO, rid: "100", ssrc, rtxSsrc: ssrc + 1, quality: 100, active: ssrc > 0 };
            arr = mapped.push(obj2);
          }
          const _localMediaSinkWantsManager2 = self._localMediaSinkWantsManager;
          _localMediaSinkWantsManager2.setVideoSSRCs(userId, mapped);
        } else {
          const items = [];
          const iter = arr[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp5 = nextResult;
            let tmp6 = null != nextResult.ssrc;
            if (tmp6) {
              tmp6 = null != tmp5.quality;
            }
            if (tmp6) {
              let obj = { ssrc: null, quality: null, active: null };
              ({ ssrc: obj.ssrc, quality: obj.quality, active } = tmp5);
              if (active == null) {
                active = true;
              }
              obj.active = active;
              let arr2 = items.push(obj);
            }
            continue;
          }
          const _goLiveQualityManager = self._goLiveQualityManager;
          if (_goLiveQualityManager != null) {
            _goLiveQualityManager.setUserID(userId);
          }
          const _goLiveQualityManager2 = self._goLiveQualityManager;
          if (_goLiveQualityManager2 != null) {
            const result = _goLiveQualityManager2.updateAudioAndVideoStreamInfo(audioSSRC, items);
          }
        }
        if (arr != null) {
          const item = arr.forEach((quality) => {
            if (100 === quality.quality) {
              self.emit(RTCConnectionEvent.RTCConnectionEvent.VideoSourceQualityChanged, self.guildId, self.channelId, closure_1, quality.maxResolution, quality.maxFrameRate, self.context);
            }
          });
        }
      }
    }
  }
};
prototype["_handleControlPing"] = function _handleControlPing(value) {
  if (!MediaEngineStore.supports(constants5.NATIVE_PING)) {
    const self = this;
    this._handlePing(value);
  }
};
prototype["_handlePing"] = function _handlePing(value) {
  let length;
  if (undefined !== value) {
    const self = this;
    const _pings = this._pings;
    const obj = { time: null, value: null };
    const _Date = Date;
    obj.time = Date.now();
    obj.value = value;
    _pings.push(obj);
    if (this._pings.length >= 200) {
      do {
        let _pings1 = self._pings;
        let arr2 = _pings1.shift();
        length = self._pings.length;
      } while (length >= 200);
    }
    if (value > 500) {
      self._pingBadCount = self._pingBadCount + 1;
    }
    self.emit(RTCConnectionEvent.RTCConnectionEvent.Ping, self._pings, self.quality);
  }
};
prototype["_handlePingTimeout"] = function _handlePingTimeout(arg0, value) {
  const self = this;
  const _pingTimeouts = this._pingTimeouts;
  _pingTimeouts.push(arg0);
  let tmp2 = length >= 3;
  if (tmp2) {
    tmp2 = self._pingTimeouts[length - 1] === self._pingTimeouts[length - 2] + 1;
  }
  if (tmp2) {
    tmp2 = self._pingTimeouts[length - 2] === self._pingTimeouts[length - 3] + 1;
  }
  if (tmp2) {
    self._handlePing(value);
  }
};
prototype["_handleOutboundLossRate"] = function _handleOutboundLossRate(_outboundLossRate) {
  this._outboundLossRate = _outboundLossRate;
  this.emit(RTCConnectionEvent.RTCConnectionEvent.OutboundLossRate, _outboundLossRate);
};
prototype["_getAnalyticsProperties"] = function _getAnalyticsProperties() {
  const self = this;
  const channel = ChannelStore.getChannel(this.channelId);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  return { guild_id: self.guildId, channel_id: self.channelId, channel_type: type, rtc_connection_id: self.getRTCConnectionId(), context: self.context, voice_backend_version: self.voiceVersion, rtc_worker_backend_version: self.rtcWorkerVersion };
};
prototype["_handleClientConnect"] = function _handleClientConnect(arr) {
  const self = this;
  const item = arr.forEach((item) => {
    const _userIds = self._userIds;
    _userIds.add(item);
    const _connection = self._connection;
    if (_connection != null) {
      const user = _connection.createUser(item, 0);
    }
  });
  this.emit(RTCConnectionEvent.RTCConnectionEvent.ClientConnect, arr);
  const _videoQuality = this._videoQuality;
  if (_videoQuality != null) {
    const result = _videoQuality.updateCallUserIdsCount(self._userIds.size);
  }
  const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
  if (_localMediaSinkWantsManager != null) {
    _localMediaSinkWantsManager.updateCallUserIds(self._userIds);
  }
};
prototype["_handleClientDisconnect"] = function _handleClientDisconnect(sender_user_id) {
  const self = this;
  const _videoQuality = this._videoQuality;
  if (null != _videoQuality) {
    if (self.context === constants6.DEFAULT) {
      const inboundStats = _videoQuality.getInboundStats(sender_user_id);
      let tmp = null != inboundStats;
      if (tmp) {
        let num;
        if (inboundStats != null) {
          num = inboundStats.num_frames;
        }
        if (num == null) {
          num = 0;
        }
        tmp = num > 0;
      }
      if (tmp) {
        const obj2 = {};
        const merged = Object.assign(self._getAnalyticsProperties());
        const obj = AnalyticsUtilsDefault;
        obj2.app_hardware_acceleration_enabled = CrossPlatformNativeUtilsDefault.getAppHardwareAccelerationEnabled();
        obj2.media_session_id = self.getMediaSessionId();
        obj2.sender_user_id = sender_user_id;
        obj2.reason = "User disconnected";
        obj2.participant_type = "receiver";
        obj2.guild_region = RTCRegionStore.getRegion(self.hostname);
        obj2.hostname = self.hostname;
        obj2.hardware_enabled = MediaEngineStore.getHardwareEncoding();
        const merged1 = Object.assign(inboundStats);
        const merged2 = Object.assign(_videoQuality.getNetworkStats());
        const merged3 = Object.assign(_videoQuality.getCodecUsageStats("receiver", sender_user_id));
        obj.track(constants.VIDEO_STREAM_ENDED, obj2);
        _videoQuality.destroyUser(sender_user_id);
        const _videoHealthManager = self._videoHealthManager;
        if (_videoHealthManager != null) {
          _videoHealthManager.deleteUser(sender_user_id);
        }
      }
    }
  }
  const _voiceQuality = self._voiceQuality;
  if (null != _voiceQuality) {
    const inboundPacketsStats = _voiceQuality.getInboundPacketsStats(sender_user_id);
    let num3 = inboundPacketsStats.num_packets;
    if (num3 == null) {
      num3 = 0;
    }
    if (tmp19) {
      const obj5 = {};
      const merged4 = Object.assign(self._getAnalyticsProperties());
      obj5.media_session_id = self.getMediaSessionId();
      obj5.parent_media_session_id = self.parentMediaSessionId;
      obj5.sender_user_id = sender_user_id;
      obj5.participant_type = "receiver";
      const merged5 = Object.assign(inboundPacketsStats);
      const merged6 = Object.assign(_voiceQuality.getInboundBytesStats(sender_user_id));
      const merged7 = Object.assign(_voiceQuality.getInboundDurationStats(sender_user_id));
      const merged8 = Object.assign(_voiceQuality.getInboundJitterStats(sender_user_id));
      AnalyticsUtilsDefault.track(constants.VOICE_STREAM_ENDED, obj5);
    }
    _voiceQuality.destroyUser(sender_user_id);
    tmp19 = num3 > 0 && self.shouldReport();
  }
  const _connection = self._connection;
  if (null != _connection) {
    _connection.destroyUser(sender_user_id);
  }
  const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
  if (_localMediaSinkWantsManager != null) {
    _localMediaSinkWantsManager.destroyUser(sender_user_id);
  }
  const _userIds = self._userIds;
  _userIds.delete(sender_user_id);
  self.emit(RTCConnectionEvent.RTCConnectionEvent.ClientDisconnect, sender_user_id);
  const _localMediaSinkWantsManager2 = self._localMediaSinkWantsManager;
  if (_localMediaSinkWantsManager2 != null) {
    _localMediaSinkWantsManager2.updateCallUserIds(self._userIds);
  }
  const _videoQuality2 = self._videoQuality;
  if (_videoQuality2 != null) {
    const result = _videoQuality2.updateCallUserIdsCount(self._userIds.size);
  }
  if (1 === self._userIds.size) {
    self._secureFramesLastBecameAloneTime = TimeUtils.now();
    const tmp39Result = TimeUtils;
  }
};
prototype["_handleCodecs"] = function _handleCodecs(OPUS, H264) {
  const self = this;
  const _connection = this._connection;
  if (null != _connection) {
    if (null != self.protocol) {
      if (null == OPUS) {
        OPUS = __initData6.OPUS;
      }
      if (null == H264) {
        H264 = __initData6.H264;
      }
      _connection.setCodecs(OPUS, H264, self.context);
      self._hasCodecs = true;
      const result = self._trackVoiceConnectionSuccess(_connection);
    }
  }
  const logger = self.logger;
  logger.warn("Cannot set codecs on connection with protocol:", self.protocol);
};
prototype["_trackVoiceConnectionSuccess"] = function _trackVoiceConnectionSuccess(_connection) {
  const self = this;
  if (!this._voiceConnectionSuccessTracked) {
    if (self.state === constants3.RTC_CONNECTED) {
      if (self._hasCodecs) {
        self._voiceConnectionSuccessTracked = true;
        let preferredRegion = null;
        if (RTCRegionStore.shouldIncludePreferredRegion()) {
          preferredRegion = RTCRegionStore.getPreferredRegion();
        }
        const settings = MediaEngineStore.getSettings();
        const result = self._getAnalyticsProperties();
        const transportInfo = _connection.transportInfo;
        let address;
        if (transportInfo != null) {
          address = transportInfo.address;
        }
        let tmp8;
        if (null != address) {
          if ("" !== address) {
            let str3 = "ipv6";
            if (!address.includes(":")) {
              let str5;
              if (address.includes(".")) {
                str5 = "ipv4";
              }
              str3 = str5;
            }
            tmp8 = str3;
          }
        }
        const obj6 = {};
        const merged = Object.assign(result);
        ({ hostname: obj4.hostname, port: obj4.port, protocol: obj4.protocol } = self);
        obj6.address_family = tmp8;
        obj6.cloudflare_best_region = preferredRegion;
        const obj3 = AnalyticsUtilsDefault;
        obj6.connect_time = TimeUtils.now() - (1 === self._connectCount ? self._createdTime : self._connectStartTime);
        obj6.connect_count = self._connectCount;
        const mediaEngine = MediaEngineStore.getMediaEngine();
        obj6.audio_subsystem = mediaEngine.getAudioSubsystem();
        const mediaEngine1 = MediaEngineStore.getMediaEngine();
        obj6.audio_layer = mediaEngine1.getAudioLayer();
        obj6.automatic_audio_subsystem = settings.automaticAudioSubsystem;
        obj6.media_session_id = self.getMediaSessionId();
        obj6.participant_type = self.getVoiceParticipantType();
        obj6.join_voice_id = self.joinVoiceId;
        const mediaEngine2 = MediaEngineStore.getMediaEngine();
        let tmp17 = mediaEngine2.getVideoInputDeviceId() !== __initData9;
        if (tmp17) {
          tmp17 = _connection.context === constants6.DEFAULT;
        }
        obj6.is_camera_enabled = tmp17;
        obj6.video_supported = MediaEngineStore.supports(constants5.VIDEO);
        const stateHistory = self.stateHistory;
        const merged1 = Object.assign(stateHistory.getVoiceConnectionSuccessStats());
        obj3.track(constants.VOICE_CONNECTION_SUCCESS, obj6);
        const _performance = performance;
        const nowResult = performance.now();
        const obj7 = { rtc_connection_id: result.rtc_connection_id, hostname: self.hostname, address_family: tmp8, time_1_creation_to_connect: self._connectStartTime - self._createdTime, time_2_media_engine_connect: self._mediaEngineConnectDuration, time_3_media_engine_create_native_connection: null, time_4_media_engine_connect_to_socket: null, time_5_scheduling_connected_callback: null, time_6_state_connected_to_end_measure: null, connect_count: null, rtc_connecting_native_connect: null, rtc_connecting_native_codecs: null, rtc_connecting_native_crypto_modes: null };
        const transportInfo2 = _connection.transportInfo;
        let createConnectionTime;
        if (transportInfo2 != null) {
          createConnectionTime = transportInfo2.createConnectionTime;
        }
        obj7.time_3_media_engine_create_native_connection = createConnectionTime;
        const transportInfo3 = _connection.transportInfo;
        let connectTime;
        if (transportInfo3 != null) {
          connectTime = transportInfo3.connectTime;
        }
        obj7.time_4_media_engine_connect_to_socket = connectTime;
        ({ onConnectCallbackAt, transportInfo: transportInfo4 } = _connection);
        let diff = null;
        if (null != onConnectCallbackAt) {
          diff = null;
          if (null != connectCallbackScheduledMs) {
            diff = onConnectCallbackAt - connectCallbackScheduledMs;
          }
        }
        obj7.time_5_scheduling_connected_callback = diff;
        let diff1 = null;
        if (null != nowResult) {
          diff1 = null;
          if (null != onConnectCallbackAt2) {
            diff1 = nowResult - onConnectCallbackAt2;
          }
        }
        obj7.time_6_state_connected_to_end_measure = diff1;
        obj7.connect_count = self._connectCount;
        ({ onConnectCallbackAt: onConnectCallbackAt3, beginInitializeAt } = _connection);
        let diff2 = null;
        if (null != onConnectCallbackAt3) {
          diff2 = null;
          if (null != beginInitializeAt) {
            diff2 = onConnectCallbackAt3 - beginInitializeAt;
          }
        }
        obj7.rtc_connecting_native_connect = diff2;
        ({ onVideoCodecsCallbackAt, onConnectCallbackAt: onConnectCallbackAt4 } = _connection);
        let diff3 = null;
        if (null != onVideoCodecsCallbackAt) {
          diff3 = null;
          if (null != onConnectCallbackAt4) {
            diff3 = onVideoCodecsCallbackAt - onConnectCallbackAt4;
          }
        }
        obj7.rtc_connecting_native_codecs = diff3;
        ({ onEncryptionModesCallbackAt, onVideoCodecsCallbackAt: onVideoCodecsCallbackAt2 } = _connection);
        let diff4 = null;
        if (null != onEncryptionModesCallbackAt) {
          diff4 = null;
          if (null != onVideoCodecsCallbackAt2) {
            diff4 = onEncryptionModesCallbackAt - onVideoCodecsCallbackAt2;
          }
        }
        obj7.rtc_connecting_native_crypto_modes = diff4;
        AnalyticsUtilsDefault.track(constants.VOICE_CONNECTION_TTC_COLLECTED, obj7);
        const tmp9Result = AnalyticsUtilsDefault;
      }
    }
  }
};
prototype["_handleSDP"] = function _handleSDP(arg0) {
  const self = this;
  const _connection = this._connection;
  if (null != _connection) {
    if (null != self.protocol) {
      _connection.setSDP(arg0);
    }
  }
  const logger = self.logger;
  logger.warn("Cannot set SDP on connection with protocol:", self.protocol);
};
prototype["_handleMediaSessionId"] = function _handleMediaSessionId(_mediaSessionId) {
  this._mediaSessionId = _mediaSessionId;
  const logger = this.logger;
  logger.info("Setting media-session-id: " + _mediaSessionId + " for rtc-connection-id: " + this.getRTCConnectionId());
  const rawThermalState = ThermalUtilsDefault.getRawThermalState();
  const obj3 = {};
  const merged = Object.assign(this._getAnalyticsProperties());
  obj3.media_session_id = this.getMediaSessionId();
  obj3.parent_media_session_id = this.parentMediaSessionId;
  obj3.raw_thermal_state = rawThermalState;
  AnalyticsUtilsDefault.track(constants.MEDIA_SESSION_JOINED, obj3);
  const obj4 = DispatcherDefault;
  obj4.dispatch({ type: "MEDIA_SESSION_JOINED", mediaSessionId: this.getMediaSessionId(), context: this.context });
};
prototype["_handleMediaSinkWants"] = function _handleMediaSinkWants(_remoteVideoSinkWants) {
  ({ _connection, logger } = this);
  logger.info("Remote media sink wants: " + JSON.stringify(_remoteVideoSinkWants));
  this._remoteVideoSinkWants = _remoteVideoSinkWants;
  DispatcherDefault.dispatch({ type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", context: this.context, wants: _remoteVideoSinkWants, channelId: this.channelId, guildId: this.guildId, userId: this.userId });
  if (_connection != null) {
    const result = _connection.setRemoteVideoSinkWants(_remoteVideoSinkWants);
  }
};
prototype["_handleCodeVersion"] = function _handleCodeVersion(voiceVersion, rtcWorkerVersion) {
  this.voiceVersion = voiceVersion;
  this.rtcWorkerVersion = rtcWorkerVersion;
};
prototype["_handleKeyframeInterval"] = function _handleKeyframeInterval(keyframeInterval) {
  const self = this;
  const _connection = this._connection;
  if (null != _connection) {
    if (null != self.protocol) {
      _connection.setKeyframeInterval(keyframeInterval);
    }
  }
  const logger = self.logger;
  logger.warn("Cannot set keyframe interval on connection with protocol:", self.protocol);
};
prototype["_handleBandwidthEstimationExperiment"] = function _handleBandwidthEstimationExperiment(_bandwidthEstimationExperiment) {
  this._bandwidthEstimationExperiment = _bandwidthEstimationExperiment;
  const mediaEngineExperiments = BandwidthEstimationExperimentDefault.getMediaEngineExperiments(_bandwidthEstimationExperiment);
  let tmp = null !== mediaEngineExperiments;
  if (tmp) {
    tmp = 0 !== mediaEngineExperiments.length;
  }
  if (tmp) {
    const _connection = this._connection;
    if (_connection != null) {
      const result = _connection.setBandwidthEstimationExperiments(mediaEngineExperiments);
    }
  }
};
prototype["_trackSecureFrameTransition"] = function _trackSecureFrameTransition(transition_id) {
  const self = this;
  const _secureFramesTransitionStates = this._secureFramesTransitionStates;
  value = _secureFramesTransitionStates.get(transition_id);
  if (null != value) {
    const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
    _secureFramesTransitionStates2.delete(transition_id);
    const obj4 = {};
    const merged = Object.assign(self._getAnalyticsProperties());
    obj4.media_session_id = self.getMediaSessionId();
    ({ parentMediaSessionId: obj3.parent_media_session_id, userId: obj3.sender_user_id } = self);
    obj4.transition_id = transition_id;
    ({ protocolVersion: obj3.protocol_version, initReceivedTime: initReceivedTime3 } = value);
    const _connectStartTime = self._connectStartTime;
    let diff;
    if (null != initReceivedTime3) {
      if (null != _connectStartTime) {
        diff = initReceivedTime3 - _connectStartTime;
      }
    }
    obj4.start_to_init_duration = diff;
    ({ initFinishedTime, initReceivedTime } = value);
    let diff1;
    if (null != initFinishedTime) {
      if (null != initReceivedTime) {
        diff1 = initFinishedTime - initReceivedTime;
      }
    }
    obj4.init_duration = diff1;
    ({ firstProposalsFinishedTime, firstProposalsReceivedTime } = value);
    let diff2;
    if (null != firstProposalsFinishedTime) {
      if (null != firstProposalsReceivedTime) {
        diff2 = firstProposalsFinishedTime - firstProposalsReceivedTime;
      }
    }
    obj4.first_proposals_duration = diff2;
    ({ lastProposalsFinishedTime, lastProposalsReceivedTime } = value);
    let diff3;
    if (null != lastProposalsFinishedTime) {
      if (null != lastProposalsReceivedTime) {
        diff3 = lastProposalsFinishedTime - lastProposalsReceivedTime;
      }
    }
    obj4.last_proposals_duration = diff3;
    ({ lastProposalsReceivedTime: lastProposalsReceivedTime2, firstProposalsReceivedTime: firstProposalsReceivedTime2 } = value);
    let diff4;
    if (null != lastProposalsReceivedTime2) {
      if (null != firstProposalsReceivedTime2) {
        diff4 = lastProposalsReceivedTime2 - firstProposalsReceivedTime2;
      }
    }
    obj4.duration_between_proposals = diff4;
    ({ totalProposalsSize: obj3.total_proposals_size, totalCommitWelcomeSize: obj3.total_commit_welcome_size, welcomeReceivedTime, initFinishedTime: initFinishedTime2 } = value);
    let diff5;
    if (null != welcomeReceivedTime) {
      if (null != initFinishedTime2) {
        diff5 = welcomeReceivedTime - initFinishedTime2;
      }
    }
    obj4.welcome_wait_duration = diff5;
    ({ welcomeFinishedTime, welcomeReceivedTime: welcomeReceivedTime2 } = value);
    let diff6;
    if (null != welcomeFinishedTime) {
      if (null != welcomeReceivedTime2) {
        diff6 = welcomeFinishedTime - welcomeReceivedTime2;
      }
    }
    obj4.welcome_duration = diff6;
    ({ welcomeSize: obj3.welcome_size, welcomeError: obj3.welcome_error, commitReceivedTime, lastProposalsFinishedTime: lastProposalsFinishedTime2 } = value);
    let diff7;
    if (null != commitReceivedTime) {
      if (null != lastProposalsFinishedTime2) {
        diff7 = commitReceivedTime - lastProposalsFinishedTime2;
      }
    }
    obj4.commit_wait_duration = diff7;
    ({ commitFinishedTime, commitReceivedTime: commitReceivedTime2 } = value);
    let diff8;
    if (null != commitFinishedTime) {
      if (null != commitReceivedTime2) {
        diff8 = commitFinishedTime - commitReceivedTime2;
      }
    }
    obj4.commit_duration = diff8;
    ({ commitSize: obj3.commit_size, commitError: obj3.commit_error, prepareReceivedTime } = value);
    const _secureFramesLastBecameAloneTime = self._secureFramesLastBecameAloneTime;
    let diff9;
    if (null != prepareReceivedTime) {
      if (null != _secureFramesLastBecameAloneTime) {
        diff9 = prepareReceivedTime - _secureFramesLastBecameAloneTime;
      }
    }
    obj4.prepare_wait_duration = diff9;
    ({ prepareFinishedTime, prepareReceivedTime: prepareReceivedTime2 } = value);
    let diff10;
    if (null != prepareFinishedTime) {
      if (null != prepareReceivedTime2) {
        diff10 = prepareFinishedTime - prepareReceivedTime2;
      }
    }
    obj4.prepare_duration = diff10;
    ({ executeReceivedTime, readyTime } = value);
    let diff11;
    if (null != executeReceivedTime) {
      if (null != readyTime) {
        diff11 = executeReceivedTime - readyTime;
      }
    }
    obj4.execute_wait_duration = diff11;
    ({ executeFinishedTime, executeReceivedTime: executeReceivedTime2 } = value);
    let diff12;
    if (null != executeFinishedTime) {
      if (null != executeReceivedTime2) {
        diff12 = executeFinishedTime - executeReceivedTime2;
      }
    }
    obj4.execute_duration = diff12;
    ({ executeError: obj3.execute_error, incomplete: obj3.incomplete } = value);
    obj4.active_transition_count = self._secureFramesTransitionStates.size;
    const obj2 = AnalyticsUtilsDefault;
    obj4.time_since_creation = TimeUtils.now() - value.creationTime;
    ({ usersAdded: obj3.users_added_count, usersRemoved: obj3.users_removed_count, rosterSizeAfter: obj3.roster_size_after, executeFinishedTime: executeFinishedTime2, initReceivedTime: initReceivedTime2 } = value);
    let diff13;
    if (null != executeFinishedTime2) {
      if (null != initReceivedTime2) {
        diff13 = executeFinishedTime2 - initReceivedTime2;
      }
    }
    obj4.init_to_finish_duration = diff13;
    obj2.track(constants.SECURE_FRAMES_TRANSITION, obj4);
    if (0 === transition_id) {
      const result = self._trackRemainingSecureFrameTransitions();
    }
  }
};
prototype["_trackRemainingSecureFrameTransitions"] = function _trackRemainingSecureFrameTransitions() {
  const self = this;
  const prop = this._secureFramesTransitionStates;
  const item = prop.forEach((item, index) => {
    item.incomplete = true;
    const result = self._trackSecureFrameTransition(index);
  });
};
prototype["_storeSecureFrameNextTransitionData"] = function _storeSecureFrameNextTransitionData(arg0) {
  const self = this;
  if (null == this._secureFramesNextTransitionState) {
    const obj = { creationTime: TimeUtils.now() };
    self._secureFramesNextTransitionState = obj;
  }
  const obj3 = {};
  const merged = Object.assign(self._secureFramesNextTransitionState);
  const merged1 = Object.assign(arg0);
  self._secureFramesNextTransitionState = obj3;
  return obj3;
};
prototype["_storeSecureFrameTransitionData"] = function _storeSecureFrameTransitionData(transition_id, arg1) {
  const self = this;
  const _secureFramesTransitionStates = this._secureFramesTransitionStates;
  let result1 = _secureFramesTransitionStates.get(transition_id);
  if (null == result1) {
    result1 = self._storeSecureFrameNextTransitionData({});
    self._secureFramesNextTransitionState = undefined;
  }
  const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
  const merged = Object.assign(result1);
  const merged1 = Object.assign(arg1);
  const result = _secureFramesTransitionStates2.set(transition_id, {});
  self._secureFramesMaxConcurrentTransitions = Math.max(self._secureFramesMaxConcurrentTransitions, self._secureFramesTransitionStates.size);
};
prototype["_handleSecureFramesInit"] = function _handleSecureFramesInit(v) {
  const self = this;
  const protocolVersion = v;
  const nowResult = TimeUtils.now();
  const require = nowResult;
  this.recordEvent({ c: constants11.SECURE_FRAMES_INIT, v });
  if (!this._maybeRefuseDaveDowngrade(constants10.INIT, v)) {
    if (v > 0) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.info("DAVE protocol init with protocol version: " + v);
      self._mlsInitReceivedTime = nowResult;
      const _connection2 = self._connection;
      if (_connection2 != null) {
        let result = _connection2.prepareSecureFramesEpoch("1", v, self.trueChannelId);
      }
      self._sendMLSKeyPackage();
      let obj3 = { initReceivedTime: nowResult, initFinishedTime: TimeUtils.now(), protocolVersion: v };
      let result1 = self._storeSecureFrameNextTransitionData(obj3);
      const obj4 = { c: constants11.MLS_INIT };
      self.recordEvent(obj4);
      const tmpResult = TimeUtils;
    } else {
      let _connection = self._connection;
      if (_connection != null) {
        let result2 = _connection.prepareSecureFramesTransition(0, v, () => {
          try {
            const _connection = self._connection;
            if (_connection != null) {
              const result = _connection.executeSecureFramesTransition(0);
            }
            let flag = false;
            const obj2 = { initReceivedTime: nowResult, initFinishedTime: TimeUtils.now(), protocolVersion, executeError: flag };
            const result1 = self._storeSecureFrameTransitionData(0, obj2);
            const result2 = self._trackSecureFrameTransition(0);
          } catch (tmp4) {
            SentryUtilsDefault.captureException(tmp4);
            flag = true;
          }
        });
      }
    }
  }
  let obj2 = { c: constants11.SECURE_FRAMES_INIT, v };
};
prototype["_handleSecureFramesRosterChange"] = function _handleSecureFramesRosterChange(arg0, transition_id) {
  const self = this;
  const items = [];
  importAll = 0;
  _require = 0;
  const entries = Object.entries(arg0);
  const item = entries.forEach((item) => {
    [tmp, tmp2] = item;
    items.push(tmp);
    if (null != tmp2) {
      if (0 !== tmp2.byteLength) {
        closure_2 = closure_2 + 1;
        const _secureFramesRosterMap = self._secureFramesRosterMap;
        const result = _secureFramesRosterMap.set(tmp, tmp2);
      }
    }
    closure_0 = closure_0 + 1;
    const _secureFramesRosterMap2 = self._secureFramesRosterMap;
    _secureFramesRosterMap2.delete(tmp);
  });
  let result = this._storeSecureFrameTransitionData(transition_id, { usersAdded: importAll, usersRemoved: _require, rosterSizeAfter: this._secureFramesRosterMap.size });
  this.emit(RTCConnectionEvent.RTCConnectionEvent.RosterMapUpdate, items);
};
prototype["_latchIsStageChannel"] = function _latchIsStageChannel() {
  const self = this;
  if (null == this._isStageChannel) {
    const channel = ChannelStore.getChannel(self._channelId);
    if (null != channel) {
      self._isStageChannel = channel.type === constants2.GUILD_STAGE_VOICE;
    }
  }
  return self._isStageChannel;
};
prototype["_maybeRefuseDaveDowngrade"] = function _maybeRefuseDaveDowngrade(EPOCH, protocol_version, transition_id) {
  if (0 !== protocol_version) {
    return false;
  } else {
    const self = this;
    const _latchIsStageChannelResult = this._latchIsStageChannel();
    let flag2 = EPOCH !== constants10.INIT;
    if (!flag2) {
      flag2 = true !== _latchIsStageChannelResult;
    }
    if (flag2) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.error("Refusing DAVE protocol downgrade to version " + protocol_version + " at " + EPOCH + ", disconnecting.");
      const obj = { c: constants11.DOWNGRADE_REFUSED, s: EPOCH };
      self.recordEvent(obj);
      const obj3 = {};
      const merged = Object.assign(self._getAnalyticsProperties());
      obj3.media_session_id = self.getMediaSessionId();
      obj3.parent_media_session_id = self.parentMediaSessionId;
      obj3.refused_at = EPOCH;
      obj3.transition_id = transition_id;
      obj3.protocol_version = protocol_version;
      obj3.channel_resolved = null != _latchIsStageChannelResult;
      obj3.event_history = getEventHistoryString();
      obj3.connection_serial = self._connectionSerial;
      AnalyticsUtilsDefault.track(constants.DAVE_DOWNGRADE_REFUSED, obj3);
      const _socket = self._socket;
      flag2 = true;
      if (_socket != null) {
        const result = _socket.disconnectForRefusedDaveDowngrade(EPOCH);
        flag2 = true;
      }
    }
    return flag2;
  }
};
prototype["_handleSecureFramesPrepareTransition"] = function _handleSecureFramesPrepareTransition(transition_id, protocol_version) {
  const self = this;
  closure_1 = transition_id;
  const protocolVersion = protocol_version;
  const logger = this.logger;
  logger.info("Preparing DAVE protocol transition: " + transition_id + ", protocol version: " + protocol_version);
  this._secureFramesTransitionPrepareCount = this._secureFramesTransitionPrepareCount + 1;
  _require = require("TimeUtils").now();
  if (!this._maybeRefuseDaveDowngrade(constants10.TRANSITION, protocol_version, transition_id)) {
    const _connection = this._connection;
    if (_connection != null) {
      let result = _connection.prepareSecureFramesTransition(transition_id, protocol_version, () => {
        const result = self._maybeSendSecureFramesTransitionReady(closure_1);
        const obj = { protocolVersion, prepareReceivedTime, prepareFinishedTime: TimeUtils.now() };
        const result1 = self._storeSecureFrameTransitionData(closure_1, obj);
      });
    }
  }
};
prototype["_handleSecureFramesPrepareEpoch"] = function _handleSecureFramesPrepareEpoch(_1, protocol_version) {
  const self = this;
  const logger = this.logger;
  logger.info("Preparing DAVE protocol epoch: " + _1 + ", protocol version: " + protocol_version);
  const str1 = _1.toString();
  if (!this._maybeRefuseDaveDowngrade(constants10.EPOCH, protocol_version)) {
    const _connection = self._connection;
    if (_connection != null) {
      const result = _connection.prepareSecureFramesEpoch(str1, protocol_version, self.trueChannelId);
    }
    if ("1" === str1) {
      self._mlsInitReceivedTime = TimeUtils.now();
      self._sendMLSKeyPackage();
      const obj2 = { c: constants11.MLS_INIT };
      self.recordEvent(obj2);
    }
  }
};
prototype["_sendMLSKeyPackage"] = function _sendMLSKeyPackage() {
  const self = this;
  const _connection = this._connection;
  if (_connection != null) {
    const mLSKeyPackage = _connection.getMLSKeyPackage((arg0) => {
      const logger = self.logger;
      logger.info("Got MLS key package, sending to RTC server");
      const _socket = self._socket;
      if (_socket != null) {
        _socket.sendMLSKeyPackage(arg0);
      }
    });
  }
};
prototype["_maybeSendSecureFramesTransitionReady"] = function _maybeSendSecureFramesTransitionReady(transition_id) {
  if (0 !== transition_id) {
    const self = this;
    const logger = this.logger;
    const _HermesInternal = HermesInternal;
    logger.info("Sending DAVE protocol ready for transition ID " + transition_id);
    const _socket = this._socket;
    if (_socket != null) {
      const result = _socket.secureFramesReadyForTransition(transition_id);
    }
    const obj = { readyTime: TimeUtils.now() };
    const result1 = self._storeSecureFrameTransitionData(transition_id, obj);
  }
};
prototype["_handleSecureFramesExecuteTransition"] = function _handleSecureFramesExecuteTransition(transition_id) {
  const self = this;
  const logger = this.logger;
  logger.info("Executing DAVE protocol transition: " + transition_id);
  this._secureFramesTransitionExecuteCount = this._secureFramesTransitionExecuteCount + 1;
  TimeUtils;
  try {
    const _connection = self._connection;
    if (_connection != null) {
      const result = _connection.executeSecureFramesTransition(transition_id);
    }
    let flag = false;
    const obj2 = { executeReceivedTime: tmp7, executeFinishedTime: TimeUtils.now(), executeError: flag };
    const result1 = self._storeSecureFrameTransitionData(transition_id, obj2);
    const result2 = self._trackSecureFrameTransition(transition_id);
    const tmp4Result = TimeUtils;
  } catch (tmp10) {
    require("SentryUtils").captureException(tmp10);
    flag = true;
    const obj = require("SentryUtils");
  }
};
prototype["_handleMLSExternalSenderPackage"] = function _handleMLSExternalSenderPackage(arg0) {
  const logger = this.logger;
  logger.info("Received MLS external sender package");
  const _connection = this._connection;
  if (_connection != null) {
    const result = _connection.updateMLSExternalSender(arg0);
  }
};
prototype["_handleMLSProposals"] = function _handleMLSProposals(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  const byteLength = arg1;
  _require = require("TimeUtils").now();
  let logger = this.logger;
  logger.info("Received MLS proposals");
  const _connection = this._connection;
  if (_connection != null) {
    _connection.processMLSProposals(arg1, (byteLength) => {
      const nowResult = TimeUtils.now();
      const logger = self.logger;
      logger.info("Sending MLS commit welcome message");
      closure_1.sendMLSCommitWelcome(byteLength);
      let _secureFramesNextTransitionState = self._secureFramesNextTransitionState;
      if (_secureFramesNextTransitionState == null) {
        const obj3 = { firstProposalsReceivedTime: lastProposalsReceivedTime, firstProposalsFinishedTime: nowResult };
        _secureFramesNextTransitionState = self._storeSecureFrameNextTransitionData(obj3);
      }
      _secureFramesNextTransitionState.lastProposalsReceivedTime = lastProposalsReceivedTime;
      _secureFramesNextTransitionState.lastProposalsFinishedTime = nowResult;
      let num = _secureFramesNextTransitionState.totalProposalsSize;
      if (num == null) {
        num = 0;
      }
      _secureFramesNextTransitionState.totalProposalsSize = num + byteLength.byteLength;
      let num2 = _secureFramesNextTransitionState.totalCommitWelcomeSize;
      if (num2 == null) {
        num2 = 0;
      }
      _secureFramesNextTransitionState.totalCommitWelcomeSize = num2 + byteLength.byteLength;
    });
  }
};
prototype["_handleMLSPrepareCommitTransition"] = function _handleMLSPrepareCommitTransition(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  const byteLength = arg1;
  let logger = this.logger;
  logger.info("Received MLS commit for transition ID " + arg0);
  dependencyMap = _connection(4865).now();
  _connection = this._connection;
  if (_connection != null) {
    let result = _connection.prepareMLSCommitTransition(arg0, arg1, (arg0, protocolVersion, arg2) => {
      if (_connection === self._connection) {
        const obj2 = { protocolVersion, commitReceivedTime, commitFinishedTime: TimeUtils.now(), commitSize: byteLength.byteLength, commitError: !arg0 };
        const result = self._storeSecureFrameTransitionData(closure_1, obj2);
        if (arg0) {
          self._handleMLSSuccess();
          const result1 = self._handleSecureFramesRosterChange(arg2, closure_1);
          const result2 = self._maybeSendSecureFramesTransitionReady(closure_1);
        } else {
          const logger = self.logger;
          const _HermesInternal = HermesInternal;
          logger.warn("Failed to process MLS commit for transition ID " + closure_1);
          self._mlsSessionResetStartTime = TimeUtils.now();
          if (self._flagMLSInvalidCommitWelcome(closure_1)) {
            const result3 = self._handleSecureFramesInit(protocolVersion);
          }
          const tmp12Result = TimeUtils;
        }
      }
    });
  }
};
prototype["_handleMLSWelcome"] = function _handleMLSWelcome(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  const byteLength = arg1;
  const logger = this.logger;
  logger.info("Received MLS welcome for transition ID " + arg0);
  dependencyMap = _connection(4865).now();
  _connection = this._connection;
  if (_connection != null) {
    _connection.processMLSWelcome(arg0, arg1, (arg0, protocolVersion, arg2) => {
      if (_connection === self._connection) {
        const obj2 = { protocolVersion, welcomeReceivedTime, welcomeFinishedTime: TimeUtils.now(), welcomeSize: byteLength.byteLength, welcomeError: !arg0 };
        const result = self._storeSecureFrameTransitionData(closure_1, obj2);
        if (arg0) {
          self._handleMLSSuccess();
          const result1 = self._handleSecureFramesRosterChange(arg2, closure_1);
          const result2 = self._maybeSendSecureFramesTransitionReady(closure_1);
        } else {
          self._mlsSessionResetStartTime = TimeUtils.now();
          if (self._flagMLSInvalidCommitWelcome(closure_1)) {
            self._sendMLSKeyPackage();
          }
          const tmp10Result = TimeUtils;
        }
      }
    });
  }
};
prototype["getMLSPairwiseFingerprint"] = function getMLSPairwiseFingerprint(arg0, arg1, arg2) {
  const _connection = this._connection;
  if (_connection != null) {
    const mLSPairwiseFingerprint = _connection.getMLSPairwiseFingerprint(arg0, arg1, arg2);
  }
};
prototype["_handleMLSSuccess"] = function _handleMLSSuccess() {
  this._trackMLSFailures({ recovered: true, downgraded: false });
  this._mlsSessionResetStartTime = undefined;
  this._consecutiveMLSInvalidMessages = 0;
  const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
  _mlsFailureReconnectBackoff.succeed();
};
prototype["_flagMLSInvalidCommitWelcome"] = function _flagMLSInvalidCommitWelcome(transition_id) {
  const self = this;
  this._consecutiveMLSInvalidMessages = this._consecutiveMLSInvalidMessages + 1;
  if (this._consecutiveMLSInvalidMessages >= 5) {
    const logger2 = self.logger;
    const _HermesInternal2 = HermesInternal;
    logger2.error("" + self._consecutiveMLSInvalidMessages + " consecutive invalid MLS commit/welcome messages, disconnecting.");
    self._consecutiveMLSInvalidMessages = 0;
    const _socket2 = self._socket;
    if (_socket2 != null) {
      const result = _socket2.disconnectForRepeatedMLSInvalidMessages(tmp8);
    }
    return false;
  } else {
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.info("Flagging invalid MLS commit/welcome for transition ID " + transition_id);
    const _socket = self._socket;
    if (_socket != null) {
      const result1 = _socket.flagMLSInvalidCommitWelcome(transition_id);
    }
    return true;
  }
};
prototype["_handleMLSFailure"] = function _handleMLSFailure(source, reason) {
  const self = this;
  const nowResult = TimeUtils.now();
  this._nextFailureId = +this._nextFailureId + 1;
  this.recordEvent({ c: constants11.MLS_FAILURE, i: +this._nextFailureId });
  const _mlsFailures = this._mlsFailures;
  const obj3 = { id: +this._nextFailureId, source, reason, count: 1, countDuringReset: null, firstOccurrence: null, timeSinceInit: null, eventLog: null };
  let num = 0;
  if (null != this._mlsSessionResetStartTime) {
    num = 1;
  }
  obj3.countDuringReset = num;
  obj3.firstOccurrence = nowResult;
  let diff;
  if (null != self._mlsInitReceivedTime) {
    diff = nowResult - self._mlsInitReceivedTime;
  }
  obj3.timeSinceInit = diff;
  obj3.eventLog = getEventHistoryString();
  _mlsFailures.push(obj3);
  if (source.includes("GetPersistedKeyPair")) {
    const obj5 = { title: null, body: null };
    const intl = util.intl;
    obj5.title = intl.string(util.t.fJUioH);
    const intl2 = util.intl;
    obj5.body = intl2.string(util.t.CQLWvo);
    AlertActionCreatorsDefault.show(obj5);
  } else {
    const result = self._alertMLSFailureDebouced(source, reason);
  }
  const obj2 = { c: constants11.MLS_FAILURE, i: +this._nextFailureId };
};
prototype["_trackMLSFailures"] = function _trackMLSFailures(arg0) {
  const self = this;
  ({ recovered, downgraded } = arg0);
  const nowResult = TimeUtils.now();
  const mediaSessionId = this.getMediaSessionId();
  if (null != this._mlsSessionResetStartTime) {
    const diff = nowResult - self._mlsSessionResetStartTime;
  }
  for (const item10022 of tmp4) {
    let firstOccurrence = item10022.firstOccurrence;
    ({ id, source, reason, count, countDuringReset, timeSinceInit, eventLog } = item10022);
    let obj2 = AnalyticsUtilsDefault;
    let obj3 = {};
    let merged = Object.assign(self._getAnalyticsProperties());
    obj3.media_session_id = mediaSessionId;
    obj3.parent_media_session_id = self.parentMediaSessionId;
    obj3.failure_id = id;
    obj3.failure_time = firstOccurrence - self._createdTime;
    obj3.failure_source = source;
    obj3.failure_reason = reason;
    obj3.failure_count = count;
    obj3.failure_was_recovered = recovered;
    obj3.failure_cleared_by_downgrade = downgraded;
    obj3.time_since_first_occurrence = nowResult - firstOccurrence;
    obj3.time_since_last_reset = diff;
    obj3.failure_count_during_reset = countDuringReset;
    obj3.time_since_init = timeSinceInit;
    obj3.event_history = eventLog;
    obj3.connection_serial = self._connectionSerial;
    let trackResult = obj2.track(constants.MLS_FAILURES, obj3);
    continue;
  }
  self._mlsFailures = [];
};
prototype["_alertMLSFailure"] = function _alertMLSFailure(arg0, arg1) {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (currentUser != null) {
      isStaffPersonalResult = currentUser.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  if (isStaffResult) {
    const obj = { title: null, body: null };
    const _HermesInternal = HermesInternal;
    obj.title = "MLS Error in " + arg0;
    const _HermesInternal2 = HermesInternal;
    obj.body = "Error: " + arg1 + "! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!";
    AlertActionCreatorsDefault.show(obj);
  }
};
prototype["getExtraConnectionOptions"] = function getExtraConnectionOptions() {
  return {};
};
prototype["getMediaStreamKey"] = function getMediaStreamKey() {

};
prototype["shouldReport"] = function shouldReport() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (currentUser != null) {
      isStaffPersonalResult = currentUser.isStaffPersonal();
    }
    if (!isStaffPersonalResult) {
      const self = this;
      const mediaSessionId = this.getMediaSessionId();
      let tmp4 = null != mediaSessionId;
      if (tmp4) {
        tmp4 = MurmurHashV3Default.v3(mediaSessionId) % 100 < 5;
      }
      return tmp4;
    }
  }
  return true;
};
prototype["shouldReportPeriodicStats"] = function shouldReportPeriodicStats(periodicStats) {
  let shouldReportResult = periodicStats.length <= 10;
  if (shouldReportResult) {
    const self = this;
    shouldReportResult = this.shouldReport();
  }
  return shouldReportResult;
};
prototype["getInputDeviceName"] = function getInputDeviceName() {
  const inputDeviceId = MediaEngineStore.getInputDeviceId();
  const tmp2 = MediaEngineStore.getInputDevices()[inputDeviceId];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  return name;
};
prototype["getOutputDeviceName"] = function getOutputDeviceName() {
  const outputDeviceId = MediaEngineStore.getOutputDeviceId();
  const tmp2 = MediaEngineStore.getOutputDevices()[outputDeviceId];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  return name;
};
prototype["getVideoDeviceName"] = function getVideoDeviceName() {
  const videoDeviceId = MediaEngineStore.getVideoDeviceId();
  const tmp2 = MediaEngineStore.getVideoDevices()[videoDeviceId];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  return name;
};
prototype["getInputDeviceSampleRate"] = function getInputDeviceSampleRate() {
  const _voiceQuality = this._voiceQuality;
  let prop;
  if (_voiceQuality != null) {
    prop = _voiceQuality.getAudioDeviceStats().input_device_session_sample_rate;
  }
  if (prop == null) {
    prop = null;
  }
  return prop;
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/RTCConnection.tsx");

export default RTCConnection;