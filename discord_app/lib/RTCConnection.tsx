// discord_app/lib/RTCConnection.tsx
import fetchFingerprint from "fetchFingerprint";
import DeviceTypes from "DeviceTypes";
import updateAveragedStatsHelper from "updateAveragedStatsHelper";
import items from "items";
import handleAudioRouteChanged from "handleAudioRouteChanged";
import closure_9 from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import updateStats from "updateStats";
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";
import { BROWSER_SUPPORTS_UNIFIED_PLAN as closure_23 } from "parsed";
import DesktopSources from "DesktopSources";
import "on";
import { Integer } from "../../_runtime/00014_Integer.js";
import { v1 } from "../../_runtime/00514_v1.js";
import { MurmurHashV3 } from "../../_runtime/01217_MurmurHashV3.js";
import { BaseConnectionEvent } from "../../discord_common/js/packages/media-engine/index.tsx";
import { sleep } from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import { set } from "../actions/AlertActionCreators.tsx";
import { dispatcher } from "../Dispatcher.tsx";
import { getUnitId } from "../modules/calls/ProportionalVadIndicatorExperiment.tsx";
import { NativeModules } from "../modules/device/ThermalUtils.native.tsx";
import { BandwidthEstimationExperiment } from "../modules/media_engine/BandwidthEstimationExperiment.tsx";
import { apexExperiment } from "../modules/media_engine/ProcessBoostExperiment.tsx";
import { expandEventProperties } from "../utils/AnalyticsUtils.tsx";
import { set } from "../utils/CrossPlatformNativeUtils.native.tsx";
import { awaitOnline } from "../utils/NetworkUtils.tsx";
import { set } from "../utils/PlatformUtils.tsx";
import { SentryUtils.native } from "../utils/SentryUtils.native.tsx";
import { isDiscordProxiedAssetUrl } from "../utils/URLUtils.tsx";
import { create } from "RTCBandwidthMonitor.tsx";
import { RTCConnectionEvent } from "RTCConnectionEvent.tsx";
import { noop } from "RTCControlSocket.tsx";
import { isIncomingVideoEnabled } from "WindowVisibilityVideoManager.tsx";

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let require = arg1;
function getEventHistoryString() {
  const items = [];
  sleep;
  for (const item10012 of closure_34) {
    let obj = {};
    let tmp3 = obj;
    let tmp4 = item10012;
    let merged = Object.assign(item10012);
    obj.t = tmp2 - item10012.t;
    let arr = items.push(obj);
    continue;
  }
  return JSON.stringify(items);
}
({ AnalyticEvents: closure_17, ChannelTypes: closure_18, RTCConnectionStates: closure_19, RTCConnectionQuality: closure_20, BoostedGuildTiers: closure_21 } = ME);
({ Features: closure_24, MediaEngineContextTypes: closure_25, ConnectionStates: closure_26, Codecs: closure_27, MediaTypes: closure_28, SpeakingFlags: closure_29, DISABLED_DEVICE_ID: closure_30 } = DesktopSources);
let str = "ws:";
if (obj.test("https:")) {
  str = "wss:";
}
let closure_32 = { CONNECTION_CREATE: 0, [0]: "CONNECTION_CREATE", CONNECTION_DESTROY: 1, [1]: "CONNECTION_DESTROY", CONNECT: 2, [2]: "CONNECT", MLS_FAILURE: 3, [3]: "MLS_FAILURE", MESSAGE_RECEIVE: 4, [4]: "MESSAGE_RECEIVE", MESSAGE_SEND: 5, [5]: "MESSAGE_SEND", SET_ENDPOINT: 6, [6]: "SET_ENDPOINT", RECONNECT: 7, [7]: "RECONNECT", SET_STATE: 8, [8]: "SET_STATE", SET_NEXT_CHANNEL_ID: 9, [9]: "SET_NEXT_CHANNEL_ID", MLS_INIT: 10, [10]: "MLS_INIT", SECURE_FRAMES_INIT: 11, [11]: "SECURE_FRAMES_INIT" };
let c33 = 0;
let closure_34 = [];
class RTCConnection extends tmp4 {
  constructor(arg0) {
    ({ userId, sessionId, guildId, channelId, context } = global);
    if (context === undefined) {
      tmp8 = MediaEngineContextTypes;
      context = MediaEngineContextTypes.DEFAULT;
    }
    streamServerId = global.streamServerId;
    closure_0 = undefined;
    ({ streamChannelId, parentMediaSessionId, joinVoiceId } = global);
    obj = new RTCConnection(tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, sessionId, channelId, guildId, streamServerId);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = obj;
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
      const obj = { c: outer1_32.RECONNECT };
      obj.recordEvent(obj);
      const _socket = obj._socket;
      if (null != _socket) {
        if (obj._hasEverConnected) {
          obj._connectStartTime = obj(outer1_3[18]).now();
          const obj3 = obj(outer1_3[18]);
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
    };
    tmp11 = closure_1;
    tmp12 = closure_3;
    obj._alertMLSFailureDebouced = require("debounce")(obj._alertMLSFailure, 100);
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
      let obj;
      if (null != obj._voiceQuality) {
        const _voiceQuality = obj._voiceQuality;
        const periodicStats = _voiceQuality.getPeriodicStats();
        if (obj.shouldReportPeriodicStats(periodicStats)) {
          const iter = periodicStats[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp6 = outer1_1;
            let tmp7 = outer1_3;
            let obj2 = outer1_1(outer1_3[41]);
            let tmp8 = outer1_17;
            obj = {};
            let tmp9 = obj;
            let tmp10 = obj;
            let tmp11 = obj;
            let merged = Object.assign(obj._getAnalyticsProperties());
            obj.media_session_id = obj.getMediaSessionId();
            obj.sender_user_id = nextResult.userId;
            obj.hostname = obj.hostname;
            ({ silent: obj3.frame_op_silent, normal: obj3.frame_op_normal, merged: obj3.frame_op_merged, expanded: obj3.frame_op_expanded, accelerated: obj3.frame_op_accelerated, preemptiveExpanded: obj3.frame_op_preemptive_expanded, cng: obj3.frame_op_cng, accelerateRate: obj3.accelerate_rate, expandRate: obj3.expand_rate, preemptiveExpandRate: obj3.preemptive_expand_rate, speechExpandRate: obj3.speech_expand_rate, durationMs: obj3.duration_ms } = nextResult);
            obj.sequence_id = obj._voiceQualityPeriodicStatsSequenceId;
            obj.input_device = obj.getInputDeviceName();
            obj.output_device = obj.getOutputDeviceName();
            let _Math = Math;
            obj.ping_average = Math.round(obj.getAveragePing());
            ({ _pingBadCount: obj3.ping_bad_count, parentMediaSessionId: obj3.parent_media_session_id } = obj);
            let trackResult = obj2.track(outer1_17.VOICE_QUALITY_PERIODIC_STATS, obj);
            continue;
          }
        }
        obj._voiceQualityPeriodicStatsSequenceId = obj._voiceQualityPeriodicStatsSequenceId + 1;
      }
    };
    obj.getAudioDeviceStates = function getAudioDeviceStates() {
      obj = { input_device: obj.getInputDeviceName(), input_device_count: Object.keys(outer1_12.getInputDevices()).length, output_device: obj.getOutputDeviceName(), output_device_count: Object.keys(outer1_12.getOutputDevices()).length };
      return obj;
    };
    obj.getVideoDeviceStates = function getVideoDeviceStates() {
      obj = { camera_device: obj.getVideoDeviceName(), camera_device_count: Object.keys(outer1_12.getVideoDevices()).length };
      return obj;
    };
    obj._trackVoiceConnectionConnecting = function _trackVoiceConnectionConnecting() {
      const channel = outer1_10.getChannel(obj.channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj = {};
      const merged = Object.assign(obj.getAudioDeviceStates());
      const merged1 = Object.assign(obj.getVideoDeviceStates());
      ({ guildId: obj3.guild_id, channelId: obj3.channel_id } = obj);
      obj.rtc_connection_id = obj.getRTCConnectionId();
      ({ hostname: obj3.hostname, _connectCount: obj3.connect_count, context: obj3.context } = obj);
      obj.channel_type = type;
      obj.participant_type = obj.getVoiceParticipantType();
      obj.is_muted = outer1_12.isMute();
      ({ joinVoiceId: obj3.join_voice_id, _connectionSerial: obj3.connection_serial } = obj);
      outer1_1(outer1_3[41]).track(outer1_17.VOICE_CONNECTION_CONNECTING, obj);
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
    obj = { c: c32.CONNECTION_CREATE };
    recordEventResult = obj.recordEvent(obj);
    obj3 = getEventHistoryString;
    asyncResources = getEventHistoryString.fetchAsyncResources();
    obj._fetchAsyncResourcesPromise = asyncResources.catch((arg0) => {
      callback(table[20]).captureException(arg0);
    });
    obj.userId = userId;
    obj.sessionId = sessionId;
    obj.guildId = guildId;
    obj._channelId = channelId;
    items = [];
    items[0] = channelId;
    set = new Set(items);
    obj.channelIds = set;
    obj.streamServerId = streamServerId;
    obj.streamChannelId = streamChannelId;
    obj.parentMediaSessionId = parentMediaSessionId;
    obj.joinVoiceId = joinVoiceId;
    tmp15 = +parentMediaSessionId;
    parentMediaSessionId = tmp15 + 1;
    obj._connectionSerial = tmp15;
    tmp16 = require("timestamp");
    tmp16 = new tmp16("RTCConnection(" + obj.trueServerId + ", " + obj.context + ")");
    obj.logger = tmp16;
    logger = obj.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    obj._endpoint = null;
    obj.hostname = null;
    obj.port = null;
    obj.token = null;
    obj.protocol = null;
    obj.voiceVersion = null;
    obj.rtcWorkerVersion = null;
    obj.state = RTCConnectionStates.AWAITING_ENDPOINT;
    tmp19 = closure_0;
    stateHistory = new require("reset").StateHistory(obj.state);
    obj.stateHistory = stateHistory;
    obj._socket = null;
    tmp21 = new require("fails")(1000, 10000);
    obj._backoff = tmp21;
    tmp22 = new require("fails")(1000, 10000);
    obj._mlsFailureReconnectBackoff = tmp22;
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
    obj4 = require("sleep");
    obj._createdTime = obj4.now();
    obj._connectStartTime = 0;
    obj._connectCompletedTime = 0;
    obj5 = require("v1");
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
    tmp25 = Features;
    tmp26 = getEventHistoryString.supports(Features.FIRST_FRAME_CALLBACK) && obj3.supports(tmp25.REMOTE_USER_MULTI_STREAM);
    if (MediaEngineContextTypes.DEFAULT === context) {
      tmp28 = getEventHistoryString;
      channel = getEventHistoryString.getChannel(obj.channelId);
      type = undefined;
      if (channel != null) {
        type = channel.type;
      }
      tmp31 = ChannelTypes;
      tmp32 = new.target;
      tmp33 = new.target;
      tmp34 = userId;
      tmp35 = tmp26;
      tmp36 = new require("getDefaultWants")(userId, type === ChannelTypes.GUILD_STAGE_VOICE, tmp26);
      tmp37 = tmp36;
      obj._localMediaSinkWantsManager = tmp36;
      _localMediaSinkWantsManager = obj._localMediaSinkWantsManager;
      onResult = _localMediaSinkWantsManager.on(require("getDefaultWants").RTCMediaSinkWantsManagerEvent.Update, (localVideoSinkWants) => {
        let tmp3 = tmp2.state === outer1_19.RTC_CONNECTED;
        if (tmp3) {
          tmp3 = null != tmp._socket;
        }
        if (tmp3) {
          const logger = tmp.logger;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          logger.info("Media sink wants: " + JSON.stringify(localVideoSinkWants));
          const _socket = tmp._socket;
          _socket.mediaSinkWants(localVideoSinkWants);
          const _connection = tmp._connection;
          if (_connection != null) {
            const result = _connection.setLocalVideoSinkWants(localVideoSinkWants);
          }
        }
      });
      _localMediaSinkWantsManager2 = obj._localMediaSinkWantsManager;
      onResult1 = _localMediaSinkWantsManager2.on(require("getDefaultWants").RTCMediaSinkWantsManagerEvent.UserSSRCUpdate, (arg0, arg1, arg2) => {
        const _connection = tmp._connection;
        if (_connection != null) {
          const user = _connection.createUser(arg0, arg1, arg2);
        }
      });
    } else if (tmp27.STREAM === context) {
      tmp47 = new.target;
      tmp48 = new.target;
      tmp49 = new require("setUserID")();
      tmp50 = tmp49;
      obj._goLiveQualityManager = tmp49;
      _goLiveQualityManager = obj._goLiveQualityManager;
      onResult2 = _goLiveQualityManager.on(require("setUserID").GoLiveQualityManagerEvent.RequestedSSRCsUpdate, (arg0, arg1, arg2) => {
        const _connection = tmp._connection;
        if (_connection != null) {
          const user = _connection.createUser(arg0, arg1, arg2);
        }
      });
      _goLiveQualityManager2 = obj._goLiveQualityManager;
      onResult3 = _goLiveQualityManager2.on(require("setUserID").GoLiveQualityManagerEvent.RequestedStreamsUpdate, (localVideoSinkWants) => {
        let tmp3 = tmp2.state === outer1_19.RTC_CONNECTED;
        if (tmp3) {
          tmp3 = null != tmp._socket;
        }
        if (tmp3) {
          const logger = tmp.logger;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          logger.info("Go Live Media sink wants: " + JSON.stringify(localVideoSinkWants));
          const _socket = tmp._socket;
          _socket.mediaSinkWants(localVideoSinkWants);
          const _connection = tmp._connection;
          if (_connection != null) {
            const result = _connection.setLocalVideoSinkWants(localVideoSinkWants);
          }
        }
      });
    }
    obj._remoteVideoSinkWants = require("getDefaultWants").DEFAULT_WANTS_FULL;
    WindowVisibilityVideoManager = require("isIncomingVideoEnabled").WindowVisibilityVideoManager;
    onResult4 = WindowVisibilityVideoManager.on(require("isIncomingVideoEnabled").WindowVisibilityEvent.IncomingVideoEnabledChanged, obj.incomingVideoEnabledChanged);
    WindowVisibilityVideoManager2 = require("isIncomingVideoEnabled").WindowVisibilityVideoManager;
    onResult5 = WindowVisibilityVideoManager2.on(require("isIncomingVideoEnabled").WindowVisibilityEvent.WindowVisibilityChanged, obj.windowVisibilityChanged);
    if (getEventHistoryString.shouldRecordNextConnection()) {
      obj._recordingEnabled = true;
      tmp42 = closure_2;
      obj6 = require("open");
      result = obj6.setShouldRecordNextConnection(false);
    } else {
      obj._recordingEnabled = false;
    }
    tmp11Result = require("awaitOnline");
    addOnlineCallbackResult = tmp11Result.addOnlineCallback(obj._handleNetworkOnline);
    tmp11Result1 = require("awaitOnline");
    addOfflineCallbackResult = tmp11Result1.addOfflineCallback(obj._handleNetworkOffline);
    tmp19Result = require("set");
    if (tmp19Result.isDesktop()) {
      powerMonitor = require("set").powerMonitor;
      str = "resume";
      obj.powerMonitorListener = powerMonitor.on("resume", obj._handlePowerResume);
    }
    obj._supportedBandwidthEstimationExperiments = [];
    obj._bandwidthEstimationExperiment = null;
    mediaEngine = obj3.getMediaEngine();
    supportedBandwidthEstimationExperiments = mediaEngine.getSupportedBandwidthEstimationExperiments((_supportedBandwidthEstimationExperiments) => {
      tmp._supportedBandwidthEstimationExperiments = _supportedBandwidthEstimationExperiments;
    });
    return obj;
  }
}
const prototype = RTCConnection.prototype;
prototype["recordEvent"] = function recordEvent(arg0) {
  let length;
  const obj = {};
  const merged = Object.assign(arg0);
  obj.t = sleep.now();
  obj.n = this._connectionSerial;
  arr = arr.push(obj);
  if (arr.length > 50) {
    do {
      let tmp3 = arr;
      arr = arr.shift();
      length = arr.length;
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
    let hostname;
    let port;
    const self = this;
    this.recordEvent({ c: constants9.SET_ENDPOINT, e: null != arg0 });
    if (null == arg0) {
      self._endpoint = null;
      self.hostname = null;
    } else {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + str + "//" + arg0;
      let toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(combined);
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
      const obj3 = isDiscordProxiedAssetUrl;
      tmp5 = str;
    }
  }
});
prototype["connect"] = function connect(endpoint, token) {
  const self = this;
  if (this._destroyed) {
    const _Error = Error;
    const error = new Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
    throw error;
  } else {
    let obj = { c: null, e: null, h: null };
    obj[0] = constants9.CONNECT;
    obj[1] = null != endpoint;
    obj[2] = null != token;
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
        const obj2 = v1;
        obj = { type: "RTC_CONNECTION_UPDATE_ID", connection: null };
        obj[1] = self;
        dispatcher.dispatch(obj);
        const obj3 = dispatcher;
      }
    }
    if (null != self.endpoint) {
      if (null != self._socket) {
        self._cleanupSocket();
      }
      if (null != self._nextChannelId) {
        self._channelId = self._nextChannelId;
        self._nextChannelId = undefined;
      }
      const obj5 = new noop(self.endpoint, self.context);
      self._socket = obj5;
      const _handleConnecting = self._handleConnecting;
      obj5.on(noop.SocketEvent.Connecting, _handleConnecting.bind(self, obj5));
      const _handleConnect = self._handleConnect;
      obj5.on(noop.SocketEvent.Connect, _handleConnect.bind(self, obj5));
      const _handleDisconnect = self._handleDisconnect;
      obj5.on(noop.SocketEvent.Disconnect, _handleDisconnect.bind(self, obj5));
      const _handleResuming = self._handleResuming;
      obj5.on(noop.SocketEvent.Resuming, _handleResuming.bind(self, obj5));
      const _handleReady = self._handleReady;
      obj5.on(noop.SocketEvent.Ready, _handleReady.bind(self, obj5));
      const _handleSfuUpdate = self._handleSfuUpdate;
      obj5.on(noop.SocketEvent.SfuUpdate, _handleSfuUpdate.bind(self, obj5));
      const _handleSpeaking = self._handleSpeaking;
      obj5.on(noop.SocketEvent.Speaking, _handleSpeaking.bind(self, obj5));
      const _handleVideo = self._handleVideo;
      obj5.on(noop.SocketEvent.Video, _handleVideo.bind(self, obj5));
      const _handleControlPing = self._handleControlPing;
      obj5.on(noop.SocketEvent.Ping, _handleControlPing.bind(self));
      const _handleClientDisconnect = self._handleClientDisconnect;
      obj5.on(noop.SocketEvent.ClientDisconnect, _handleClientDisconnect.bind(self));
      const _handleClientConnect = self._handleClientConnect;
      obj5.on(noop.SocketEvent.ClientConnect, _handleClientConnect.bind(self));
      const _handleCodecs = self._handleCodecs;
      obj5.on(noop.SocketEvent.Codecs, _handleCodecs.bind(self));
      const _handleMediaSessionId = self._handleMediaSessionId;
      obj5.on(noop.SocketEvent.MediaSessionId, _handleMediaSessionId.bind(self));
      const _handleMediaSinkWants = self._handleMediaSinkWants;
      obj5.on(noop.SocketEvent.MediaSinkWants, _handleMediaSinkWants.bind(self));
      const _handleCodeVersion = self._handleCodeVersion;
      obj5.on(noop.SocketEvent.VoiceBackendVersion, _handleCodeVersion.bind(self));
      const _handleKeyframeInterval = self._handleKeyframeInterval;
      obj5.on(noop.SocketEvent.KeyframeInterval, _handleKeyframeInterval.bind(self));
      const handleFlags = self.handleFlags;
      obj5.on(noop.SocketEvent.Flags, handleFlags.bind(self));
      const handlePlatform = self.handlePlatform;
      obj5.on(noop.SocketEvent.Platform, handlePlatform.bind(self));
      const _handleBandwidthEstimationExperiment = self._handleBandwidthEstimationExperiment;
      obj5.on(noop.SocketEvent.BandwidthEstimationExperiment, _handleBandwidthEstimationExperiment.bind(self));
      const _handleSecureFramesInit = self._handleSecureFramesInit;
      obj5.on(noop.SocketEvent.SecureFramesInit, _handleSecureFramesInit.bind(self));
      const _handleSecureFramesPrepareTransition = self._handleSecureFramesPrepareTransition;
      obj5.on(noop.SocketEvent.SecureFramesPrepareTransition, _handleSecureFramesPrepareTransition.bind(self));
      const _handleSecureFramesPrepareEpoch = self._handleSecureFramesPrepareEpoch;
      obj5.on(noop.SocketEvent.SecureFramesPrepareEpoch, _handleSecureFramesPrepareEpoch.bind(self));
      const _handleSecureFramesExecuteTransition = self._handleSecureFramesExecuteTransition;
      obj5.on(noop.SocketEvent.SecureFramesExecuteTransition, _handleSecureFramesExecuteTransition.bind(self));
      const _handleMLSExternalSenderPackage = self._handleMLSExternalSenderPackage;
      obj5.on(noop.SocketEvent.MLSExternalSenderPackage, _handleMLSExternalSenderPackage.bind(self));
      const _handleMLSProposals = self._handleMLSProposals;
      obj5.on(noop.SocketEvent.MLSProposals, _handleMLSProposals.bind(self, obj5));
      const _handleMLSPrepareCommitTransition = self._handleMLSPrepareCommitTransition;
      obj5.on(noop.SocketEvent.MLSPrepareCommitTransition, _handleMLSPrepareCommitTransition.bind(self));
      const _handleMLSWelcome = self._handleMLSWelcome;
      obj5.on(noop.SocketEvent.MLSWelcome, _handleMLSWelcome.bind(self));
      const _recordMessageEvent = self._recordMessageEvent;
      obj5.on(noop.SocketEvent.ReceiveMessage, _recordMessageEvent.bind(self, tmp3.MESSAGE_RECEIVE));
      const _recordMessageEvent2 = self._recordMessageEvent;
      obj5.on(noop.SocketEvent.SendMessage, _recordMessageEvent2.bind(self, tmp3.MESSAGE_SEND));
      self._connectStartTime = sleep.now();
      self._connectCount = self._connectCount + 1;
      self._connecting = true;
      self._voiceConnectionSuccessTracked = false;
      if (self._socket === obj5) {
        const result = self._trackVoiceConnectionConnecting();
        self._encountered_socket_failure = false;
        obj5.connect();
      }
      const obj6 = sleep;
    } else {
      self.setState(constants3.AWAITING_ENDPOINT);
    }
  }
};
prototype["_recordMessageEvent"] = function _recordMessageEvent(arg0, o) {
  this.recordEvent({ c: arg0, o });
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
  let obj = awaitOnline;
  obj.removeOnlineCallback(this._handleNetworkOnline);
  const result = awaitOnline.removeOfflineCallback(this._handleNetworkOffline);
  const obj2 = awaitOnline;
  if (obj3.isDesktop()) {
    const powerMonitorListener = self.powerMonitorListener;
    if (powerMonitorListener != null) {
      powerMonitorListener();
    }
  }
  obj = { c: constants9.CONNECTION_DESTROY };
  self.recordEvent(obj);
  const WindowVisibilityVideoManager = tmp5(10688).WindowVisibilityVideoManager;
  WindowVisibilityVideoManager.off(isIncomingVideoEnabled.WindowVisibilityEvent.IncomingVideoEnabledChanged, self.incomingVideoEnabledChanged);
  const WindowVisibilityVideoManager2 = tmp5(10688).WindowVisibilityVideoManager;
  WindowVisibilityVideoManager2.off(isIncomingVideoEnabled.WindowVisibilityEvent.WindowVisibilityChanged, self.windowVisibilityChanged);
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
};
prototype["shouldSendSpeaking"] = function shouldSendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC) {
  if (obj.isWeb()) {
    return true;
  } else {
    const self = this;
    let tmpResult = tmp(1403);
    tmpResult = tmp(1403);
    let tmp7 = this._lastSentSSRC !== _lastSentSSRC || tmpResult.hasFlag(_lastSentSpeakingStatus, constants8.PRIORITY) !== tmpResult.hasFlag(this._lastSentSpeakingStatus, constants8.PRIORITY);
    if (tmp7) {
      let tmp8 = undefined !== self._lastSentSSRC || _lastSentSpeakingStatus !== tmp5.NONE;
      if (tmp8) {
        let flag = self._lastSentSSRC === _lastSentSSRC || _lastSentSpeakingStatus !== tmp5.NONE;
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
  obj = set;
};
prototype["sendSpeaking"] = function sendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC) {
  const self = this;
  const _socket = this._socket;
  if (null != _socket) {
    if (self.shouldSendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC)) {
      _socket.speaking(_lastSentSpeakingStatus, store2.getPacketDelay(), _lastSentSSRC);
    }
  }
};
prototype["sendVideo"] = function sendVideo(audioSsrc, arg1, arg2, arr) {
  const self = this;
  const _socket = this._socket;
  if (null != _socket) {
    if (0 !== arg1) {
      self._sentVideo = true;
    }
    if (self._sentVideo) {
      _socket.video(audioSsrc, arg1, arg2, arr);
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
      num = substr.reduce((arg0, value) => arg0 + value.value, 0) / substr.length;
    }
  }
  return num;
};
prototype["getLastPing"] = function getLastPing() {
  let value;
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
    num = sleep.now() - tmp._connectCompletedTime;
    const obj = sleep;
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
  return entries.some((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (Number.isInteger(tmp)) {
      let tmp3 = 0 !== tmp2;
    } else {
      tmp3 = "any" !== tmp;
      if (tmp3) {
        let someResult;
        if ("pixelCounts" === tmp) {
          const _Object = Object;
          const values = Object.values(tmp2);
          someResult = values.some((arg0) => 0 !== arg0);
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
  obj = { c: constants9.SET_STATE, s };
  this.recordEvent(obj);
  const logger = this.logger;
  logger.info("RTC connection state: " + this.state + " => " + s);
  this.state = s;
  const stateHistory = this.stateHistory;
  stateHistory.update(this.state);
  obj = { hostname: this.hostname, channelId: this.trueChannelId, context: this.context };
  this.emit(RTCConnectionEvent.RTCConnectionEvent.State, s, obj, obj);
};
prototype["expeditedHeartbeat"] = function expeditedHeartbeat(arg0) {
  let str = arg1;
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
  let str = arg0;
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
prototype["setVideoSize"] = function setVideoSize(arg0, width) {
  let isAndroidResult = null == width;
  if (!isAndroidResult) {
    isAndroidResult = set.isAndroid();
    const obj = set;
  }
  if (!isAndroidResult) {
    isAndroidResult = set.isIOS();
    const obj2 = set;
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
  this.recordEvent({ c: constants9.SET_NEXT_CHANNEL_ID });
  const channel = store.getChannel(this.channelId);
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
      const obj = Integer(self.streamServerId);
      streamChannelId = Integer(self.streamServerId).prev().toString();
      const str = Integer(self.streamServerId).prev();
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
prototype["_chooseExperiments"] = function _chooseExperiments(items) {
  items = [];
  if (this._recordingEnabled) {
    items.push("connection_log");
  }
  if (store2.supports(constants5.FIXED_KEYFRAME_INTERVAL)) {
    items.push("fixed_keyframe_interval");
  }
  const config = getUnitId.getConfig({ location: "_chooseExperiments" });
  if (config.enabled) {
    items.push("should_analyze_user_voice_volume");
  }
  if (config.dontEmitVolumeOnlySpeakingEvents) {
    items.push("dont_emit_volume_only_speaking_events");
  }
  const obj = getUnitId;
  const tmp3 = importDefault;
  let enabled = set.isWeb();
  if (enabled) {
    const BrowserTransceiverPaddingRemovalExperiment = tmp8(13155).BrowserTransceiverPaddingRemovalExperiment;
    enabled = BrowserTransceiverPaddingRemovalExperiment.getConfig({ location: "RTCConnection" }).enabled;
  }
  if (enabled) {
    items.push("browser_transceiver_padding_removal");
  }
  let tmp8Result = tmp8(500);
  if (tmp8Result.isIOS()) {
    const mode = tmp3(13156).getConfig({ location: "_chooseExperiments" }).mode;
    if ("standard" === mode) {
      items.push("ios_video_stabilization_standard");
    } else if ("low_latency" === mode) {
      items.push("ios_video_stabilization_low_latency");
    }
    const tmp3Result = tmp3(13156);
  }
  tmp8Result = tmp8(500);
  let isAndroidResult = tmp8Result.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = tmp8(10684).isSurfaceDirectRendererExperimentEnabled();
    const tmp8Result1 = tmp8(10684);
  }
  if (isAndroidResult) {
    items.push(tmp8(10684).ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT);
  }
  this._selectedExperiments = items;
};
prototype["_handleConnecting"] = function _handleConnecting() {
  const self = this;
  if (null != this.endpoint) {
    const channel = store.getChannel(self.channelId);
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
  let self = this;
  self = this;
  let closure_1 = arg0;
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
      closure_1.identify({ serverId: self.trueServerId, channelId: self.trueChannelId, userId: self.userId, sessionId: self.sessionId, token, maxDaveProtocolVersion: outer1_12.getSupportedSecureFramesProtocolVersion(), video: outer1_12.supports(outer1_24.VIDEO), streamParameters: outer1_12.getVideoStreamParameters(self.context) });
      self.setState(outer1_19.AUTHENTICATING);
    });
  }
};
prototype["_handleDisconnect"] = function _handleDisconnect(arg0, arg1, code, reason) {
  let self = this;
  self = this;
  let _encountered_socket_failure = arg1;
  const importDefault = reason;
  self = this;
  let logger = this.logger;
  let infoResult = logger.info("Disconnected from RTC server, clean: " + arg1 + ", code: " + code + ", reason: " + reason + ", state: " + this.state);
  if (!arg1) {
    _encountered_socket_failure = !self._connecting;
  }
  if (!_encountered_socket_failure) {
    _encountered_socket_failure = self._encountered_socket_failure;
  }
  if (!_encountered_socket_failure) {
    let obj = importDefault(_videoQuality2[41]);
    obj = {};
    let merged = Object.assign(self._getAnalyticsProperties());
    ({ hostname: obj2.hostname, _connectCount: obj2.connect_count } = self);
    obj.code = code;
    obj.reason = reason;
    obj.track(constants.VOICE_CONNECTION_SOCKET_FAILURE, obj);
    self._encountered_socket_failure = true;
  }
  let obj2 = remoteDisconnectVoiceChannelId;
  if (remoteDisconnectVoiceChannelId.getRemoteDisconnectVoiceChannelId() === self.channelId) {
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
      infoResult = null;
      self._mediaSessionId = null;
      const _voiceQuality13 = self._voiceQuality;
      if (_voiceQuality13 != null) {
        infoResult = _voiceQuality13.stop();
      }
      self._voiceQuality = null;
      const _clearInterval = clearInterval;
      infoResult = clearInterval(self._voiceQualityPeriodicStatsInterval);
      self._voiceQualityPeriodicStatsInterval = null;
      self._voiceQualityPeriodicStatsSequenceId = 0;
      self._noiseCancellationError = 0;
      self._numNoiseCancellationChanges = 0;
      const _voiceDuration2 = self._voiceDuration;
      if (_voiceDuration2 != null) {
        infoResult = _voiceDuration2.stop();
      }
      self._voiceDuration = null;
      const _videoQuality = self._videoQuality;
      if (_videoQuality != null) {
        infoResult = _videoQuality.stop();
      }
      self._videoQuality = null;
      self._videoHealthManager = null;
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      if (_localMediaSinkWantsManager != null) {
        infoResult = _localMediaSinkWantsManager.reset();
      }
      self._secureFramesState = null;
      const _Set = Set;
      const items = [self.userId];
      infoResult = new.target;
      infoResult = new.target;
      infoResult = items;
      infoResult = new Set(items);
      self._userIds = infoResult;
      const _secureFramesRosterMap = self._secureFramesRosterMap;
      infoResult = _secureFramesRosterMap.clear();
      self._consecutiveMLSInvalidMessages = 0;
      const _secureFramesTransitionStates = self._secureFramesTransitionStates;
      infoResult = _secureFramesTransitionStates.clear();
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
        infoResult = _connection3.destroy(reconnecting);
      }
      self.protocol = null;
      self._readyData = null;
      self._sfuEndpoint = null;
      obj = { willReconnect: null };
      obj[0] = tmp10;
      infoResult = self.setState(tmp16.DISCONNECTED, obj);
    } else {
      _videoQuality2 = self._videoQuality;
      infoResult = null;
      if (null != _videoQuality2) {
        infoResult = constants6;
        if (self.context === constants6.DEFAULT) {
          infoResult = _videoQuality2.stop();
          if (self._sentVideo) {
            const outboundStats = _videoQuality2.getOutboundStats();
            const item = outboundStats.forEach((num_frames) => {
              let num = num_frames.num_frames;
              if (num == null) {
                num = 0;
              }
              if (num > 0) {
                let obj = callback(_videoQuality2[41]);
                obj = {};
                const merged = Object.assign(self._getAnalyticsProperties());
                obj.app_hardware_acceleration_enabled = callback(_videoQuality2[42]).getAppHardwareAccelerationEnabled();
                obj.media_session_id = self.getMediaSessionId();
                obj.sender_user_id = self.userId;
                obj.reason = callback;
                obj.participant_type = "sender";
                obj.guild_region = outer1_15.getRegion(self.hostname);
                obj.hostname = self.hostname;
                obj.hardware_enabled = outer1_12.getHardwareEncoding();
                const merged1 = Object.assign(num_frames);
                const merged2 = Object.assign(_videoQuality2.getNetworkStats());
                const merged3 = Object.assign(_videoQuality2.getCodecUsageStats("sender", self.userId));
                obj.device_performance_class = callback(_videoQuality2[43])();
                obj.track(outer1_17.VIDEO_STREAM_ENDED, obj);
                const obj3 = callback(_videoQuality2[42]);
              }
            });
            const cameraDurationStats = _videoQuality2.getCameraDurationStats();
            let tmp19 = null != cameraDurationStats;
            if (tmp19) {
              tmp19 = cameraDurationStats.camera_enabled_duration > 0;
            }
            if (tmp19) {
              const obj1 = {};
              let merged1 = Object.assign(cameraDurationStats);
              obj1.media_session_id = self.getMediaSessionId();
              importDefault(_videoQuality2[41]).track(constants.VIDEO_CALL_ENDED, obj1);
              const obj5 = importDefault(_videoQuality2[41]);
            }
          }
          const inboundParticipants = _videoQuality2.getInboundParticipants();
          const item1 = inboundParticipants.forEach((sender_user_id) => {
            let obj = _videoQuality2;
            const inboundStats = _videoQuality2.getInboundStats(sender_user_id);
            let num;
            if (inboundStats != null) {
              num = inboundStats.num_frames;
            }
            if (num == null) {
              num = 0;
            }
            if (num > 0) {
              obj = {};
              const merged = Object.assign(self._getAnalyticsProperties());
              const obj2 = callback(_videoQuality2[41]);
              obj.app_hardware_acceleration_enabled = callback(_videoQuality2[42]).getAppHardwareAccelerationEnabled();
              obj.media_session_id = self.getMediaSessionId();
              obj.sender_user_id = sender_user_id;
              obj.reason = callback;
              obj.participant_type = "receiver";
              obj.guild_region = outer1_15.getRegion(self.hostname);
              obj.hostname = self.hostname;
              obj.hardware_enabled = outer1_12.getHardwareEncoding();
              const merged1 = Object.assign(inboundStats);
              const merged2 = Object.assign(obj.getNetworkStats());
              const merged3 = Object.assign(obj.getCodecUsageStats("receiver", sender_user_id));
              obj2.track(outer1_17.VIDEO_STREAM_ENDED, obj);
              const obj4 = callback(_videoQuality2[42]);
            }
          });
        }
      }
      const callback = self.getMediaSessionId();
      let mediaEngine3 = store2;
      const mediaEngine = store2.getMediaEngine();
      const codecSurvey = mediaEngine.getCodecSurvey();
      codecSurvey.then((arg0) => {
        const parsed = JSON.parse(arg0);
        if (null != parsed) {
          if (null != parsed.available_video_encoders) {
            if (null != parsed.available_video_decoders) {
              let obj = callback(_videoQuality2[41]);
              obj = {};
              const merged = Object.assign(parsed);
              obj.rtc_connection_id = self.getRTCConnectionId();
              obj.media_session_id = fetchFingerprint;
              obj.track(outer1_17.VOICE_CODEC_DETECTED, obj);
            }
          }
        }
        const error = new Error("codec survey is not available");
        throw error;
      }).catch((arg0) => {
        const logger = self.logger;
        logger.warn(arg0);
      });
      self._trackMLSFailures({ recovered: false, downgraded: false });
      let preferredRegion = null;
      if (initialize.shouldIncludePreferredRegion()) {
        preferredRegion = obj9.getPreferredRegion();
      }
      const settings = mediaEngine3.getSettings();
      const channel = store.getChannel(self.channelId);
      connectionStats = connectionStats.getConnectionStats(self.getMediaEngineConnectionId());
      let prop;
      if (connectionStats != null) {
        const outbound = connectionStats.stats.rtp.outbound;
        const found = outbound.find((type) => "audio" === type.type);
        if (found != null) {
          prop = found.sampleRateMismatchPercent;
        }
      }
      obj2 = {};
      let merged2 = Object.assign(self._getAnalyticsProperties());
      ({ hostname: obj10.hostname, port: obj10.port, protocol: obj10.protocol } = self);
      obj2.reconnect = tmp10;
      obj2.reason = reason;
      obj2.duration = self.getDuration();
      let merged3 = Object.assign(obj2.getUserVoiceSettingsStats(self.context));
      const _voiceQuality = self._voiceQuality;
      let mosStats;
      if (_voiceQuality != null) {
        mosStats = _voiceQuality.getMosStats();
      }
      const merged4 = Object.assign(mosStats);
      const _voiceQuality2 = self._voiceQuality;
      let packetStats;
      if (_voiceQuality2 != null) {
        packetStats = _voiceQuality2.getPacketStats();
      }
      const merged5 = Object.assign(packetStats);
      const _voiceQuality3 = self._voiceQuality;
      let bytesStats;
      if (_voiceQuality3 != null) {
        bytesStats = _voiceQuality3.getBytesStats();
      }
      const merged6 = Object.assign(bytesStats);
      const _voiceQuality4 = self._voiceQuality;
      let bufferStats;
      if (_voiceQuality4 != null) {
        bufferStats = _voiceQuality4.getBufferStats();
      }
      const merged7 = Object.assign(bufferStats);
      const _voiceQuality5 = self._voiceQuality;
      let networkStats;
      if (_voiceQuality5 != null) {
        networkStats = _voiceQuality5.getNetworkStats();
      }
      const merged8 = Object.assign(networkStats);
      const _voiceQuality6 = self._voiceQuality;
      let systemResourceStats;
      if (_voiceQuality6 != null) {
        systemResourceStats = _voiceQuality6.getSystemResourceStats();
      }
      const merged9 = Object.assign(systemResourceStats);
      const _voiceQuality7 = self._voiceQuality;
      let frameOpStats;
      if (_voiceQuality7 != null) {
        frameOpStats = _voiceQuality7.getFrameOpStats();
      }
      const merged10 = Object.assign(frameOpStats);
      const _voiceQuality8 = self._voiceQuality;
      let durationStats;
      if (_voiceQuality8 != null) {
        durationStats = _voiceQuality8.getDurationStats();
      }
      const merged11 = Object.assign(durationStats);
      const _voiceQuality9 = self._voiceQuality;
      let transportStats;
      if (_voiceQuality9 != null) {
        transportStats = _voiceQuality9.getTransportStats();
      }
      const merged12 = Object.assign(transportStats);
      const _voiceQuality10 = self._voiceQuality;
      let e2EEStats;
      if (_voiceQuality10 != null) {
        e2EEStats = _voiceQuality10.getE2EEStats();
      }
      const merged13 = Object.assign(e2EEStats);
      const _voiceQuality11 = self._voiceQuality;
      let audioDeviceStats;
      if (_voiceQuality11 != null) {
        audioDeviceStats = _voiceQuality11.getAudioDeviceStats();
      }
      const merged14 = Object.assign(audioDeviceStats);
      const _voiceQuality12 = self._voiceQuality;
      let audioLevelStats;
      if (_voiceQuality12 != null) {
        audioLevelStats = _voiceQuality12.getAudioLevelStats();
      }
      const merged15 = Object.assign(audioLevelStats);
      const _voiceDuration = self._voiceDuration;
      let durationStats1;
      if (_voiceDuration != null) {
        durationStats1 = _voiceDuration.getDurationStats();
      }
      const merged16 = Object.assign(durationStats1);
      const merged17 = Object.assign(self.getUsageStats());
      const merged18 = Object.assign(self.getAudioDeviceStates());
      const _systemResponsiveness = self._systemResponsiveness;
      let pttQueueLatencyStats;
      if (_systemResponsiveness != null) {
        pttQueueLatencyStats = _systemResponsiveness.getPttQueueLatencyStats();
      }
      infoResult = obj2;
      infoResult = pttQueueLatencyStats;
      infoResult = Object.assign(pttQueueLatencyStats);
      obj2.num_noise_cancellation_changes = self._numNoiseCancellationChanges;
      obj2.media_session_id = self.getMediaSessionId();
      infoResult = null;
      if (null != channel) {
        infoResult = channel.bitrate;
      }
      obj2.channel_bitrate = infoResult;
      obj2.cloudflare_best_region = preferredRegion;
      obj2.connect_count = self._connectCount;
      const _Math = Math;
      obj2.ping_average = Math.round(self.getAveragePing());
      obj2.ping_bad_count = self._pingBadCount;
      obj2.ping_timeout = self._pingTimeouts.length;
      obj2.input_detected = self._inputDetected;
      obj2.no_input_detected_notice = mediaEngine3.getNoInputDetectedNotice();
      obj2.audio_input_mode = settings.mode;
      obj2.automatic_audio_input_sensitivity_enabled = settings.modeOptions.autoThreshold;
      obj2.audio_input_sensitivity = settings.modeOptions.threshold;
      ({ echoCancellation: obj10.echo_cancellation_enabled, sidechainCompression: obj10.sidechain_compression_enabled, noiseSuppression: obj10.noise_suppression_enabled, noiseCancellation: obj10.noise_cancellation_enabled } = settings);
      obj2.noise_canceller_error = self._noiseCancellationError;
      ({ automaticGainControl: obj10.automatic_gain_control_enabled, outputVolume: obj10.voice_output_volume, inputVolume: obj10.voice_input_volume } = settings);
      obj2.encryption_mode = self._encryptionMode;
      obj2.channel_count = self.channelIds.size;
      infoResult = importDefault;
      infoResult = _videoQuality2;
      obj2.device_performance_class = importDefault(_videoQuality2[43])();
      infoResult = null;
      if (null != self._connection) {
        const _connection2 = self._connection;
        infoResult = undefined;
        if (_connection2 != null) {
          infoResult = _connection2.getNumFastUdpReconnects();
        }
      }
      obj2.num_fast_udp_reconnects = infoResult;
      obj2.parent_media_session_id = self.parentMediaSessionId;
      const mediaEngine1 = mediaEngine3.getMediaEngine();
      obj2.audio_subsystem = mediaEngine1.getAudioSubsystem();
      const mediaEngine2 = mediaEngine3.getMediaEngine();
      obj2.audio_layer = mediaEngine2.getAudioLayer();
      obj2.automatic_audio_subsystem = settings.automaticAudioSubsystem;
      obj2.participant_type = self.getVoiceParticipantType();
      obj2.audio_capture_sample_rate_mismatch_percent = prop;
      obj2.krisp_sdk_version = mediaEngine3.getState().krispVersion;
      ({ _secureFramesMaxConcurrentTransitions: obj10.secure_frames_max_concurrent_transitions, _secureFramesTransitionPrepareCount: obj10.secure_frames_transition_prepare_count, _secureFramesTransitionExecuteCount: obj10.secure_frames_transition_execute_count } = self);
      obj2.vad_use_advanced_voice_activity = settings.modeOptions.vadUseKrisp;
      obj2.soundshare_experimental = mediaEngine3.getExperimentalSoundshare();
      obj2.join_voice_id = self.joinVoiceId;
      obj2.bypass_system_input_processing = settings.bypassSystemInputProcessing;
      obj2.system_microphone_mode = mediaEngine3.getSystemMicrophoneMode();
      infoResult = currentRouteType;
      obj2.output_audio_route_type = currentRouteType.getCurrentRouteType();
      let _require = obj2;
      _require = undefined;
      infoResult = callback;
      _require = callback(function*() {
        if (_systemResources != null) {
          const batteryLevelStats = _systemResources.getBatteryLevelStats();
        }
        let closure_0 = yield batteryLevelStats;
        if (arg1 == null) {
          closure_0 = { batteryUsageRounded: null };
        }
        return closure_0;
      });
      let items1 = [
        (function() {
              const self = this;
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
      const nextPromise = codecSurvey.then((arg0) => {
        const parsed = JSON.parse(arg0);
        if (null != parsed) {
          if (null != parsed.available_video_encoders) {
            if (null != parsed.available_video_decoders) {
              let obj = callback(_videoQuality2[41]);
              obj = {};
              const merged = Object.assign(parsed);
              obj.rtc_connection_id = self.getRTCConnectionId();
              obj.media_session_id = fetchFingerprint;
              obj.track(outer1_17.VOICE_CODEC_DETECTED, obj);
            }
          }
        }
        const error = new Error("codec survey is not available");
        throw error;
      });
      obj9 = initialize;
      items1[1] = infoResult(infoResult[44]).getKrispModel();
      if (mediaEngine3.getKrispEnableStats()) {
        mediaEngine3 = mediaEngine3.getMediaEngine();
        infoResult = mediaEngine3.getNoiseCancellationStats();
      } else {
        infoResult = Promise.resolve(null);
      }
      items1[2] = infoResult;
      all = all(items1);
      items1 = all.then;
      infoResult = items1((arg0) => {
        let tmp2;
        let tmp3;
        [, tmp2, tmp3] = arg0;
        const logger = self.logger;
        let str = tmp2;
        if (tmp2 == null) {
          str = "null";
        }
        logger.log("[VOICE_DISCONNECT] krisp_nc_model: " + str);
        let obj = callback(_videoQuality2[41]);
        obj = {};
        const merged = Object.assign(closure_0);
        obj.battery_usage = tmp;
        obj.krisp_nc_model = tmp2;
        let lowNoiseMs;
        if (tmp3 != null) {
          lowNoiseMs = tmp3.lowNoiseMs;
        }
        obj.duration_low_noise_detected_ms = lowNoiseMs;
        let mediumNoiseMs;
        if (tmp3 != null) {
          mediumNoiseMs = tmp3.mediumNoiseMs;
        }
        obj.duration_medium_noise_detected_ms = mediumNoiseMs;
        let highNoiseMs;
        if (tmp3 != null) {
          highNoiseMs = tmp3.highNoiseMs;
        }
        obj.duration_high_noise_detected_ms = highNoiseMs;
        let talkTimeMs;
        if (tmp3 != null) {
          talkTimeMs = tmp3.talkTimeMs;
        }
        obj.duration_noise_cancellation_voice_detected_ms = talkTimeMs;
        obj.track(outer1_17.VOICE_DISCONNECT, obj);
      });
      infoResult = self._trackRemainingSecureFrameTransitions();
      const infoResultResult = infoResult(infoResult[44]);
    }
  } else {
    if (code === _require(_videoQuality2[33]).RTCSocketCloseCode.REPEATED_MLS_INVALID_MESSAGES) {
      let result1 = self._scheduleMLSFailureReconnect();
    } else {
      result1 = self._scheduleReconnect();
    }
    const logger2 = self.logger;
    const result2 = result1 / 1000;
    const _HermesInternal = HermesInternal;
    logger2.warn("Disconnect was not clean! reason=" + reason + ". Reconnecting in " + result2.toFixed(2) + " seconds.");
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
prototype["_handleReady"] = function _handleReady(socket, arg1, arg2, arg3, ssrc, arr, items) {
  const self = this;
  if (items == null) {
    items = [];
  }
  this._chooseExperiments(items);
  if (0 === arr.length) {
    let obj = { type: null, rid: "100", ssrc: null, rtxSsrc: null, quality: 100, active: false };
    obj[0] = constants7.VIDEO;
    obj[2] = ssrc + 1;
    obj[3] = ssrc + 2;
    arr.push(obj);
  }
  obj = { socket, ssrc, streamParameters: arr };
  self._readyData = obj;
  let _sfuEndpoint = null;
  if (null != arg1) {
    _sfuEndpoint = null;
    if (null != arg2) {
      _sfuEndpoint = null;
      if (null != arg3) {
        obj = { address: null, port: null, modes: null };
        obj[0] = arg1;
        obj[1] = arg2;
        obj[2] = arg3;
        _sfuEndpoint = obj;
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
    const result = self._connectMediaEngineWithEndpoint(_sfuEndpoint, obj);
  }
};
prototype["_connectMediaEngineWithEndpoint"] = function _connectMediaEngineWithEndpoint(_sfuEndpoint, _readyData) {
  let context;
  let processPriority;
  let ssrc;
  let streamParameters;
  let threadPriorityConfiguration;
  let userId;
  let self = this;
  self = this;
  const importDefault = _sfuEndpoint;
  const socket = _readyData.socket;
  let dependencyMap;
  let fetchFingerprint;
  let _require;
  this._sfuEndpoint = _sfuEndpoint;
  this.protocol = null;
  ({ ssrc, streamParameters } = _readyData);
  this.setState(constants3.RTC_CONNECTING);
  this.port = _sfuEndpoint.port;
  const ProcessBoostExperiment = _apexExperiment.ProcessBoostExperiment;
  const config = ProcessBoostExperiment.getConfig({ location: "media_engine_connect" });
  let obj = store2;
  ({ processPriority, threadPriorityConfiguration } = config);
  const mediaEngine = store2.getMediaEngine();
  persistentCodesEnabled = persistentCodesEnabled.getPersistentCodesEnabled();
  staticAuthSessionId = staticAuthSessionId.getStaticAuthSessionId();
  let tmp2Result = tmp2(4420);
  obj = { ssrc, address: _sfuEndpoint.address, port: _sfuEndpoint.port, modes: _sfuEndpoint.modes, experiments: self._selectedExperiments, streamParameters, videoSupported: null, qosEnabled: null, signingKeyId: null, processPriority: null, threadPriorityConfiguration: null };
  ({ context, userId } = self);
  obj[6] = obj.supports(constants5.VIDEO);
  obj[7] = obj.getQoS();
  let tmp9;
  if (persistentCodesEnabled) {
    tmp9 = staticAuthSessionId;
  }
  obj[8] = tmp9;
  obj[9] = processPriority;
  obj[10] = threadPriorityConfiguration;
  let merged = Object.assign(self.getExtraConnectionOptions());
  const connectResult = mediaEngine.connect(context, userId, obj);
  dependencyMap = connectResult;
  tmp2Result = tmp2(4420);
  self._mediaEngineConnectDuration = tmp2Result.now() - tmp2Result.now();
  const nowResult = tmp2Result.now();
  let isWebResult = _set.isWeb();
  if (isWebResult) {
    isWebResult = !closure_23;
  }
  if (isWebResult) {
    SentryUtils.native.captureMessage("Browser does not support Unified Plan");
    const obj8 = SentryUtils.native;
  }
  connectResult.setUseElectronVideo(mediaEngine.supports(constants5.ELECTRON_VIDEO));
  let guild = null;
  if (null != self.guildId) {
    guild = guild.getGuild(self.guildId);
  }
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  fetchFingerprint = premiumTier === TIER_1.TIER_1;
  const currentUser = authStore.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  _require = premiumType === PremiumTypes.TIER_1 || premiumType === PremiumTypes.TIER_2;
  let result = connectResult.setCalcMaxBitrateFunc((videoCodec) => {
    let framerate;
    let height;
    ({ height, framerate } = videoCodec);
    let tmp = height > 0;
    if (tmp) {
      tmp = height <= 720;
    }
    if (fetchFingerprint) {
      if (!callback) {
        if (tmp) {
          if (!tmp2) {
            const ServerLadderExperiment = callback(_undefined[46]).ServerLadderExperiment;
            let bitrate = ServerLadderExperiment.getConfig({ location: "RTCConnection" }).bitrate;
          }
          return bitrate;
        }
      }
    }
    bitrate = null;
    if ("AV1" === videoCodec.videoCodec) {
      if (0 !== height) {
        bitrate = null;
        if (tmp) {
          bitrate = null;
        }
      }
      const AV1StreamBitrateReductionExperiment = callback(_undefined[47]).AV1StreamBitrateReductionExperiment;
      bitrate = AV1StreamBitrateReductionExperiment.getConfig({ location: "RTCConnection" }).bitrate;
    }
  });
  if (obj.supports(constants5.IMAGE_QUALITY_MEASUREMENT)) {
    const result1 = connectResult.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec");
  }
  const result2 = connectResult.setVideoEncoderExperiments(obj.getVideoEncoderExperiments(self.context, self.getVoiceParticipantType()));
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.Speaking, (arg0, _lastSentSpeakingStatus, _lastSentSSRC) => {
    if (self.userId === arg0) {
      obj.sendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC);
    }
    self.emit(callback(_undefined[35]).RTCConnectionEvent.Speaking, arg0, _lastSentSpeakingStatus);
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.NativeMuteChanged, (arg0) => {
    if (self.context === outer1_25.DEFAULT) {
      _sfuEndpoint(_undefined[49]).nativeMuteChanged(arg0);
      const obj = _sfuEndpoint(_undefined[49]);
    }
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.Video, (userId, streamId, audioSsrc, arg3, arg4, arr) => {
    let closure_0 = userId;
    let num = audioSsrc;
    let num2 = arg3;
    let obj = self;
    obj = { userId, streamId, audioSsrc, videoSsrc: null, rtxSsrc: null, videoStreamParameters: null };
    let num3 = arg3;
    if (arg3 == null) {
      num3 = 0;
    }
    let num4 = arg4;
    obj[3] = num3;
    obj[4] = arg4;
    obj[5] = arr;
    self._handleVideoStreamId(obj);
    if (obj.userId === userId) {
      if (num == null) {
        num = 0;
      }
      if (num2 == null) {
        num2 = 0;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj.sendVideo(num, num2, num4, arr);
      if (arr != null) {
        const item = arr.forEach((quality) => {
          if (100 === quality.quality) {
            outer1_5.emit(userId(table[35]).RTCConnectionEvent.VideoSourceQualityChanged, outer1_5.guildId, outer1_5.channelId, userId, quality.maxResolution, quality.maxFrameRate, outer1_5.context);
          }
        });
      }
    }
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.FirstFrame, (arg0, arg1, arg2) => {
    if (null != self._localMediaSinkWantsManager) {
      const _localMediaSinkWantsManager = obj._localMediaSinkWantsManager;
      const result = _localMediaSinkWantsManager.setFirstFrameReceived(arg1);
      obj.emit(callback(_undefined[35]).RTCConnectionEvent.Video, obj.guildId, obj.channelId, arg0, arg2, obj.streamServerId);
    }
    if (null != self._goLiveQualityManager) {
      obj.emit(callback(_undefined[35]).RTCConnectionEvent.Video, obj.guildId, obj.channelId, arg0, arg2, obj.streamServerId);
    }
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.Silence, (arg0) => {
    let _inputDetected = self._inputDetected;
    if (!_inputDetected) {
      _inputDetected = !arg0;
    }
    self._inputDetected = _inputDetected;
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.Connected, (protocol, sdp) => {
    let succeedResult = self;
    const logger = self.logger;
    logger.info("RTC connected to media server: " + _sfuEndpoint.address + ":" + _sfuEndpoint.port);
    if (socket === self._socket) {
      if (_undefined === succeedResult._connection) {
        let Encryption = _undefined;
        const tmp9 = new _sfuEndpoint(_undefined[50])(obj3);
        succeedResult._voiceQuality = tmp9;
        const _voiceQuality = succeedResult._voiceQuality;
        _voiceQuality.start();
        const _voiceQuality2 = succeedResult._voiceQuality;
        _voiceQuality2.on(callback(_undefined[50]).VoiceQualityEvent.InputDeviceSampleRateChanged, (sampleRate) => {
          let obj = callback(table[32]);
          obj = { type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED", sampleRate };
          obj.dispatch(obj);
        });
        succeedResult._voiceQualityPeriodicStatsSequenceId = 0;
        const _setInterval = setInterval;
        succeedResult._voiceQualityPeriodicStatsInterval = setInterval(succeedResult._handleVoiceQualityPeriodicsStats, 300000);
        const tmp17 = new _sfuEndpoint(_undefined[51])(obj3);
        succeedResult._systemResponsiveness = tmp17;
        const _systemResponsiveness = succeedResult._systemResponsiveness;
        _systemResponsiveness.start();
        const tmp22 = new _sfuEndpoint(_undefined[52])();
        succeedResult._systemResources = tmp22;
        const _systemResources = succeedResult._systemResources;
        _systemResources.setLastBattery();
        succeedResult._noiseCancellationError = 0;
        const tmp28 = new _sfuEndpoint(_undefined[53])(succeedResult.userId, obj3);
        succeedResult._voiceDuration = tmp28;
        const _voiceDuration = succeedResult._voiceDuration;
        const selfMute = obj3.getSelfMute();
        _voiceDuration.start(selfMute, obj3.getSelfDeaf());
        succeedResult.protocol = protocol;
        if ("udp" !== protocol) {
          if ("webrtc" === protocol) {
            const logger4 = succeedResult.logger;
            logger4.info("Sending local SDP to RTC server.");
            const _handleSDP = succeedResult._handleSDP;
            obj2.once(tmp12(Encryption[33]).SocketEvent.SDP, _handleSDP.bind(succeedResult));
            protocol = obj2.selectProtocol(protocol, succeedResult.getRTCConnectionId(), sdp);
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
          obj3.setUdpEndpoint(null);
        } else {
          _sfuEndpoint = succeedResult._sfuEndpoint;
          let everyResult = null != tmp && tmp.address === _sfuEndpoint.address && tmp.port === _sfuEndpoint.port && tmp.modes.length === _sfuEndpoint.modes.length;
          if (everyResult) {
            const modes = tmp.modes;
            everyResult = modes.every((arg0, arg1) => arg0 === _sfuEndpoint.modes[arg1]);
          }
          if (!everyResult) {
            const logger6 = succeedResult.logger;
            const _HermesInternal = HermesInternal;
            logger6.info("Retargeting SFU endpoint to " + succeedResult._sfuEndpoint.address + ":" + succeedResult._sfuEndpoint.port);
            let obj = { address: null, port: null };
            obj[0] = succeedResult._sfuEndpoint.address;
            obj[1] = succeedResult._sfuEndpoint.port;
            obj3.setUdpEndpoint(obj);
          }
        }
        Encryption = tmp12(Encryption[33]).SocketEvent.Encryption;
        obj2.once(Encryption, (_encryptionMode, secretKey) => {
          if (closure_3 === _connection._connection) {
            closure_3.setEncryption(_encryptionMode, secretKey);
            tmp._encryptionMode = _encryptionMode;
          }
        });
        const protocol1 = obj2.selectProtocol(protocol, succeedResult.getRTCConnectionId(), sdp, succeedResult._selectedExperiments);
      }
    }
    const logger2 = succeedResult.logger;
    logger2.warn("Ignoring connected event from stale RTC connection.");
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.VideoEncoderFallback, (arr) => {
    const found = arr.filter((type) => "video" === type.type);
    const mapped = found.map((name) => name.name);
    const logger = self.logger;
    logger.info("The originally selected video encoder is not working, fallback to the other available encoders: " + mapped.join(","));
    socket.updateSession({ codecs: arr });
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.VideoDecoderFallback, (arr) => {
    const channel = outer1_10.getChannel(self.channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type === outer1_18.GUILD_STAGE_VOICE) {
      if (!tmp._videoDecoderFallbackSuppressed) {
        const logger2 = tmp.logger;
        logger2.info("Suppressing video decoder fallback: stage channel");
        tmp._videoDecoderFallbackSuppressed = true;
      }
    } else {
      const found = arr.filter((type) => "video" === type.type);
      const mapped = found.map((name) => name.name);
      const logger = tmp.logger;
      const _HermesInternal = HermesInternal;
      logger.info("The originally selected video decoder is not working, fallback to the other available decoders: " + mapped.join(","));
      const obj = { codecs: null };
      obj[0] = arr;
      socket.updateSession(obj);
    }
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.VideoCodecError, (codecStandard) => {
    let obj = { videoCodec: codecStandard.codecStandard, errorMessage: codecStandard.message, mediaContext: self.context, mediaSessionId: null, streamKey: null };
    const _mediaSessionId = self._mediaSessionId;
    obj[3] = _mediaSessionId;
    obj[4] = self.getMediaStreamKey();
    if ("encode" === codecStandard.mode) {
      obj = { type: null };
      obj[0] = tmp(tmp2[54]).AVError.VIDEO_ENCODE_ERROR;
      const merged = Object.assign(obj);
      obj.videoEncoder = codecStandard.implName;
    } else {
      obj = { type: null };
      obj[0] = tmp(tmp2[54]).AVError.VIDEO_DECODE_ERROR;
      const merged1 = Object.assign(obj);
      obj.videoDecoder = codecStandard.implName;
    }
    callback(_undefined[54]).reportAVError(obj);
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.Error, (error) => {
    let obj = self;
    if (socket === self._socket) {
      let preferredRegion = null;
      if (outer1_15.shouldIncludePreferredRegion()) {
        preferredRegion = obj4.getPreferredRegion();
      }
      const logger = obj.logger;
      const _HermesInternal = HermesInternal;
      logger.error("Error occurred while connecting to RTC server: " + error);
      obj = {};
      const merged = Object.assign(obj._getAnalyticsProperties());
      ({ hostname: obj3.hostname, port: obj3.port, protocol: obj3.protocol } = obj);
      obj.error = error;
      obj.cloudflare_best_region = preferredRegion;
      ({ _connectCount: obj3.connect_count, joinVoiceId: obj3.join_voice_id } = obj);
      _sfuEndpoint(_undefined[41]).track(outer1_17.VOICE_CONNECTION_FAILURE, obj);
      const obj2 = _sfuEndpoint(_undefined[41]);
      obj4 = outer1_15;
    }
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.ConnectionStateChange, (arg0) => {
    const logger = self.logger;
    logger.info("RTC media connection state change: " + self.state + " => " + arg0);
    if (socket === self._socket) {
      const state = obj.state;
      if (outer1_26.DISCONNECTED === arg0) {
        obj.setState(outer1_19.RTC_DISCONNECTED);
      } else if (tmp24.CONNECTING === arg0) {
        obj.setState(outer1_19.RTC_CONNECTING);
      } else if (tmp24.CONNECTED === arg0) {
        obj.setState(outer1_19.RTC_CONNECTED);
      } else if (tmp24.NO_ROUTE === arg0) {
        obj.setState(outer1_19.NO_ROUTE);
      } else if (tmp24.ICE_CHECKING === arg0) {
        obj.setState(outer1_19.ICE_CHECKING);
      } else if (tmp24.DTLS_CONNECTING === arg0) {
        obj.setState(outer1_19.DTLS_CONNECTING);
      }
      if (state === outer1_19.RTC_CONNECTING) {
        if (obj.state === tmp12.RTC_DISCONNECTED) {
          obj.reconnect();
        }
        if (obj.state === tmp12.RTC_CONNECTED) {
          const _localMediaSinkWantsManager = obj._localMediaSinkWantsManager;
          if (_localMediaSinkWantsManager != null) {
            _localMediaSinkWantsManager.setConnection(_undefined);
          }
          const _goLiveQualityManager = obj._goLiveQualityManager;
          if (_goLiveQualityManager != null) {
            _goLiveQualityManager.update();
          }
          obj._connectCompletedTime = callback(_undefined[18]).now();
          obj._hasEverConnected = true;
          obj._connecting = false;
          obj._encountered_socket_failure = false;
          const result = obj._trackVoiceConnectionSuccess(_undefined);
          const obj2 = callback(_undefined[18]);
        } else if (state === tmp12.RTC_CONNECTED) {
          const stateHistory = obj.stateHistory;
          stateHistory.reset(obj.state);
        }
      }
      if (obj.state === outer1_19.NO_ROUTE) {
        if (0 === obj._backoff.fails) {
          obj._handleNoRoute();
        }
        obj._scheduleReconnect();
      }
    }
  });
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.SecureFramesUpdate, (_secureFramesState) => {
    self._secureFramesState = _secureFramesState;
    self.emit(callback(_undefined[35]).RTCConnectionEvent.SecureFramesUpdate);
  });
  const _handlePing = self._handlePing;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.Ping, _handlePing.bind(self));
  const _handlePingTimeout = self._handlePingTimeout;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.PingTimeout, _handlePingTimeout.bind(self));
  const _handleOutboundLossRate = self._handleOutboundLossRate;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.OutboundLossRate, _handleOutboundLossRate.bind(self));
  const _handleLocalVideoDisabled = self._handleLocalVideoDisabled;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.LocalVideoDisabled, _handleLocalVideoDisabled.bind(self));
  const tmp2Result1 = _set;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.Stats, create.create());
  const _handleRemoteStreamsReady = self._handleRemoteStreamsReady;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.RemoteStreamsReady, _handleRemoteStreamsReady.bind(self));
  const handleUsersMerged = self.handleUsersMerged;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.UsersMerged, handleUsersMerged.bind(self));
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.NoiseCancellationError, (_noiseCancellationError) => {
    self._noiseCancellationError = _noiseCancellationError;
  });
  const _handleMLSFailure = self._handleMLSFailure;
  connectResult.on(_BaseConnectionEvent.BaseConnectionEvent.MLSFailure, _handleMLSFailure.bind(self));
  const result3 = connectResult.setRemoteVideoSinkWants(self._remoteVideoSinkWants);
  self._connection = connectResult;
  self._hasCodecs = false;
  self._mediaEngineConnectionId = connectResult.mediaEngineConnectionId;
};
prototype["_handleSfuUpdate"] = function _handleSfuUpdate(arg0, primary) {
  const self = this;
  if (arg0 === this._socket) {
    primary = undefined;
    if (primary != null) {
      primary = primary.primary;
    }
    if (null != primary) {
      let obj = { address: null, port: null, modes: null };
      ({ ip: obj[0], port: obj[1], modes: obj[2] } = primary);
      const _sfuEndpoint = self._sfuEndpoint;
      let everyResult = null != _sfuEndpoint && _sfuEndpoint.address === obj.address && _sfuEndpoint.port === obj.port && _sfuEndpoint.modes.length === obj.modes.length;
      if (everyResult) {
        const modes = _sfuEndpoint.modes;
        everyResult = modes.every((arg0, arg1) => arg0 === _sfuEndpoint.modes[arg1]);
      }
      if (!everyResult) {
        self._sfuEndpoint = obj;
        self.port = obj.port;
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
            logger6.info("Retargeting SFU endpoint to " + obj.address + ":" + obj.port);
            obj = { address: null, port: null };
            ({ address: obj2[0], port: obj2[1] } = obj);
            _connection.setUdpEndpoint(obj);
          }
          return tmp18;
        } else {
          const _readyData = self._readyData;
          if (null != _readyData) {
            if (_readyData.socket === arg0) {
              const result = self._connectMediaEngineWithEndpoint(obj, _readyData);
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
prototype["_handleSpeaking"] = function _handleSpeaking(arg0, userId, audioSSRC) {
  const self = this;
  const _connection = this._connection;
  if (tmp) {
    if (arg3 !== constants8.NONE) {
      const user = _connection.createUser(userId, audioSSRC);
    }
    const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      _localMediaSinkWantsManager.setAudioSSRC(userId, audioSSRC);
    }
  }
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
  let allowedPoorFpsRatio;
  let backoffTimeSec;
  let fpsThreshold;
  let windowLength;
  let self = this;
  self = this;
  if (null != this._connection) {
    if (null == self._videoQuality) {
      const videoQuality = new self(13167).VideoQuality(self._connection);
      self._videoQuality = videoQuality;
      const _videoQuality2 = self._videoQuality;
      let result = _videoQuality2.updateCallUserIdsCount(self._userIds.size);
      const _videoQuality3 = self._videoQuality;
      _videoQuality3.start();
      const defaultConfig = self(13168).VideoHealthManager.defaultConfig;
      ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
      if (defaultConfig.featureEnabled) {
        const videoHealthManager = new tmp10(13168).VideoHealthManager(windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec);
        self._videoHealthManager = videoHealthManager;
        if (null != self._localMediaSinkWantsManager) {
          self._localMediaSinkWantsManager.videoHealthManager = self._videoHealthManager;
        }
        const _videoQuality = self._videoQuality;
        _videoQuality.on(tmp10(13167).VideoQualityEvent.FpsUpdate, (arg0, arg1, arg2) => {
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
  let streamId;
  let userId;
  let videoSsrc;
  let videoStreamParameters;
  let self = this;
  self = this;
  ({ userId, streamId, videoSsrc, videoStreamParameters } = arg0);
  this.emit(self(4440).RTCConnectionEvent.Video, this.guildId, this.channelId, userId, streamId, this.streamServerId);
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
prototype["_handleLocalVideoDisabled"] = function _handleLocalVideoDisabled(userId) {
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
  let obj = sleep;
  const diff = obj.now() - this._connectStartTime;
  obj = {};
  const merged = Object.assign(this._getAnalyticsProperties());
  obj.number_of_users = number_of_users;
  obj.duration_ms = diff;
  expandEventProperties.track(constants.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, obj);
};
prototype["_handleVideo"] = function _handleVideo(arg0, userId, audioSSRC, arg3, arr) {
  let active;
  let self = this;
  self = this;
  let closure_1 = userId;
  let closure_0 = arg3;
  if (store2.supports(constants5.VIDEO)) {
    if (null != self._connection) {
      if (self.userId !== userId) {
        if (null != self._localMediaSinkWantsManager) {
          const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
          _localMediaSinkWantsManager.setAudioSSRC(userId, audioSSRC);
          const mapped = arr.map((rid) => ({ type: outer1_28.VIDEO, rid: rid.rid, ssrc: rid.ssrc, rtxSsrc: rid.rtxSsrc, quality: rid.quality, active: closure_0 > 0 }));
          if (0 === mapped.length) {
            let obj = { type: null, rid: "100", ssrc: null, rtxSsrc: null, quality: 100, active: null };
            obj[0] = constants7.VIDEO;
            obj[2] = arg3;
            obj[3] = arg3 + 1;
            obj[5] = arg3 > 0;
            mapped.push(obj);
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
              let tmp7 = nextResult;
              tmp6 = null != tmp5.quality;
            }
            if (tmp6) {
              obj = { ssrc: null, quality: null, active: null };
              let tmp8 = nextResult;
              ({ ssrc: obj[0], quality: obj[1], active } = tmp5);
              if (active == null) {
                active = true;
              }
              obj[2] = active;
              arr = items.push(obj);
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
              self.emit(callback(outer1_3[35]).RTCConnectionEvent.VideoSourceQualityChanged, self.guildId, self.channelId, closure_1, quality.maxResolution, quality.maxFrameRate, self.context);
            }
          });
        }
      }
    }
  }
};
prototype["_handleControlPing"] = function _handleControlPing(arg0) {
  if (!store2.supports(constants5.NATIVE_PING)) {
    const self = this;
    this._handlePing(arg0);
  }
};
prototype["_handlePing"] = function _handlePing(arg0) {
  let length;
  if (undefined !== arg0) {
    const self = this;
    const _pings = this._pings;
    const obj = { time: null, value: null };
    const _Date = Date;
    obj[0] = Date.now();
    obj[1] = arg0;
    _pings.push(obj);
    if (this._pings.length >= 200) {
      do {
        let _pings1 = self._pings;
        let arr = _pings1.shift();
        length = self._pings.length;
      } while (length >= 200);
    }
    if (arg0 > 500) {
      self._pingBadCount = self._pingBadCount + 1;
    }
    self.emit(RTCConnectionEvent.RTCConnectionEvent.Ping, self._pings, self.quality);
  }
};
prototype["_handlePingTimeout"] = function _handlePingTimeout(arg0, arg1) {
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
    self._handlePing(arg1);
  }
};
prototype["_handleOutboundLossRate"] = function _handleOutboundLossRate(_outboundLossRate) {
  this._outboundLossRate = _outboundLossRate;
  this.emit(RTCConnectionEvent.RTCConnectionEvent.OutboundLossRate, _outboundLossRate);
};
prototype["_getAnalyticsProperties"] = function _getAnalyticsProperties() {
  const self = this;
  const channel = store.getChannel(this.channelId);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  return { guild_id: self.guildId, channel_id: self.channelId, channel_type: type, rtc_connection_id: self.getRTCConnectionId(), context: self.context, voice_backend_version: self.voiceVersion, rtc_worker_backend_version: self.rtcWorkerVersion };
};
prototype["_handleClientConnect"] = function _handleClientConnect(arr) {
  let self = this;
  self = this;
  const item = arr.forEach((arg0) => {
    const _userIds = self._userIds;
    _userIds.add(arg0);
    const _connection = self._connection;
    if (_connection != null) {
      const user = _connection.createUser(arg0, 0);
    }
  });
  this.emit(self(4440).RTCConnectionEvent.ClientConnect, arr);
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
        let obj = expandEventProperties;
        obj = {};
        const merged = Object.assign(self._getAnalyticsProperties());
        obj.app_hardware_acceleration_enabled = set.getAppHardwareAccelerationEnabled();
        obj.media_session_id = self.getMediaSessionId();
        obj.sender_user_id = sender_user_id;
        obj.reason = "User disconnected";
        obj.participant_type = "receiver";
        obj.guild_region = initialize.getRegion(self.hostname);
        obj.hostname = self.hostname;
        obj.hardware_enabled = store2.getHardwareEncoding();
        const merged1 = Object.assign(inboundStats);
        const merged2 = Object.assign(_videoQuality.getNetworkStats());
        const merged3 = Object.assign(_videoQuality.getCodecUsageStats("receiver", sender_user_id));
        obj.track(constants.VIDEO_STREAM_ENDED, obj);
        _videoQuality.destroyUser(sender_user_id);
        const _videoHealthManager = self._videoHealthManager;
        if (_videoHealthManager != null) {
          _videoHealthManager.deleteUser(sender_user_id);
        }
        const obj3 = set;
      }
    }
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
    self._secureFramesLastBecameAloneTime = sleep.now();
    const tmp22Result = sleep;
  }
};
prototype["_handleCodecs"] = function _handleCodecs(OPUS, H264) {
  const self = this;
  const _connection = this._connection;
  if (null != _connection) {
    if (null != self.protocol) {
      if (null == OPUS) {
        OPUS = closure_27.OPUS;
      }
      if (null == H264) {
        H264 = closure_27.H264;
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
  let beginInitializeAt;
  let onConnectCallbackAt;
  let onConnectCallbackAt3;
  let onConnectCallbackAt4;
  let onEncryptionModesCallbackAt;
  let onVideoCodecsCallbackAt;
  let onVideoCodecsCallbackAt2;
  let transportInfo4;
  const self = this;
  if (!this._voiceConnectionSuccessTracked) {
    if (self.state === constants3.RTC_CONNECTED) {
      if (self._hasCodecs) {
        self._voiceConnectionSuccessTracked = true;
        let obj = initialize;
        let preferredRegion = null;
        if (initialize.shouldIncludePreferredRegion()) {
          preferredRegion = obj.getPreferredRegion();
        }
        const settings = store2.getSettings();
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
        obj = {};
        const merged = Object.assign(result);
        ({ hostname: obj4.hostname, port: obj4.port, protocol: obj4.protocol } = self);
        obj.address_family = tmp8;
        obj.cloudflare_best_region = preferredRegion;
        const obj3 = expandEventProperties;
        const tmp11 = constants;
        const tmp9 = importDefault;
        obj.connect_time = sleep.now() - (1 === self._connectCount ? self._createdTime : self._connectStartTime);
        obj.connect_count = self._connectCount;
        const mediaEngine = obj2.getMediaEngine();
        obj.audio_subsystem = mediaEngine.getAudioSubsystem();
        const mediaEngine1 = obj2.getMediaEngine();
        obj.audio_layer = mediaEngine1.getAudioLayer();
        obj.automatic_audio_subsystem = settings.automaticAudioSubsystem;
        obj.media_session_id = self.getMediaSessionId();
        obj.participant_type = self.getVoiceParticipantType();
        obj.join_voice_id = self.joinVoiceId;
        const mediaEngine2 = obj2.getMediaEngine();
        let tmp17 = mediaEngine2.getVideoInputDeviceId() !== closure_30;
        if (tmp17) {
          tmp17 = _connection.context === constants6.DEFAULT;
        }
        obj.is_camera_enabled = tmp17;
        const stateHistory = self.stateHistory;
        const merged1 = Object.assign(stateHistory.getVoiceConnectionSuccessStats());
        obj3.track(constants.VOICE_CONNECTION_SUCCESS, obj);
        const _performance = performance;
        const nowResult = performance.now();
        const obj5 = sleep;
        obj = { rtc_connection_id: null, hostname: null, address_family: null, time_1_creation_to_connect: null, time_2_media_engine_connect: null, time_3_media_engine_create_native_connection: null, time_4_media_engine_connect_to_socket: null, time_5_scheduling_connected_callback: null, time_6_state_connected_to_end_measure: null, connect_count: null, rtc_connecting_native_connect: null, rtc_connecting_native_codecs: null, rtc_connecting_native_crypto_modes: null };
        obj[0] = result.rtc_connection_id;
        obj[1] = self.hostname;
        obj[2] = tmp8;
        obj[3] = self._connectStartTime - self._createdTime;
        obj[4] = self._mediaEngineConnectDuration;
        const transportInfo2 = _connection.transportInfo;
        let createConnectionTime;
        if (transportInfo2 != null) {
          createConnectionTime = transportInfo2.createConnectionTime;
        }
        obj[5] = createConnectionTime;
        const transportInfo3 = _connection.transportInfo;
        let connectTime;
        if (transportInfo3 != null) {
          connectTime = transportInfo3.connectTime;
        }
        obj[6] = connectTime;
        ({ onConnectCallbackAt, transportInfo: transportInfo4 } = _connection);
        let diff = null;
        if (null != onConnectCallbackAt) {
          diff = null;
          if (null != connectCallbackScheduledMs) {
            diff = onConnectCallbackAt - connectCallbackScheduledMs;
          }
        }
        obj[7] = diff;
        let diff1 = null;
        if (null != nowResult) {
          diff1 = null;
          if (null != onConnectCallbackAt2) {
            diff1 = nowResult - onConnectCallbackAt2;
          }
        }
        obj[8] = diff1;
        obj[9] = self._connectCount;
        ({ onConnectCallbackAt: onConnectCallbackAt3, beginInitializeAt } = _connection);
        let diff2 = null;
        if (null != onConnectCallbackAt3) {
          diff2 = null;
          if (null != beginInitializeAt) {
            diff2 = onConnectCallbackAt3 - beginInitializeAt;
          }
        }
        obj[10] = diff2;
        ({ onVideoCodecsCallbackAt, onConnectCallbackAt: onConnectCallbackAt4 } = _connection);
        let diff3 = null;
        if (null != onVideoCodecsCallbackAt) {
          diff3 = null;
          if (null != onConnectCallbackAt4) {
            diff3 = onVideoCodecsCallbackAt - onConnectCallbackAt4;
          }
        }
        obj[11] = diff3;
        ({ onEncryptionModesCallbackAt, onVideoCodecsCallbackAt: onVideoCodecsCallbackAt2 } = _connection);
        let diff4 = null;
        if (null != onEncryptionModesCallbackAt) {
          diff4 = null;
          if (null != onVideoCodecsCallbackAt2) {
            diff4 = onEncryptionModesCallbackAt - onVideoCodecsCallbackAt2;
          }
        }
        obj[12] = diff4;
        tmp9(698).track(tmp11.VOICE_CONNECTION_TTC_COLLECTED, obj);
        const tmp9Result = tmp9(698);
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
  let obj = NativeModules;
  const rawThermalState = obj.getRawThermalState();
  obj = {};
  const merged = Object.assign(this._getAnalyticsProperties());
  obj.media_session_id = this.getMediaSessionId();
  obj.parent_media_session_id = this.parentMediaSessionId;
  obj.raw_thermal_state = rawThermalState;
  expandEventProperties.track(constants.MEDIA_SESSION_JOINED, obj);
  const obj2 = expandEventProperties;
  obj = { type: "MEDIA_SESSION_JOINED", mediaSessionId: this.getMediaSessionId(), context: this.context };
  dispatcher.dispatch(obj);
};
prototype["_handleMediaSinkWants"] = function _handleMediaSinkWants(_remoteVideoSinkWants) {
  let _connection;
  let logger;
  ({ _connection, logger } = this);
  logger.info("Remote media sink wants: " + JSON.stringify(_remoteVideoSinkWants));
  this._remoteVideoSinkWants = _remoteVideoSinkWants;
  let obj = dispatcher;
  obj = { type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", context: this.context, wants: _remoteVideoSinkWants, channelId: this.channelId, guildId: this.guildId, userId: this.userId };
  obj.dispatch(obj);
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
  const mediaEngineExperiments = BandwidthEstimationExperiment.getMediaEngineExperiments(_bandwidthEstimationExperiment);
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
  let commitFinishedTime;
  let commitReceivedTime;
  let commitReceivedTime2;
  let executeFinishedTime;
  let executeFinishedTime2;
  let executeReceivedTime;
  let executeReceivedTime2;
  let firstProposalsFinishedTime;
  let firstProposalsReceivedTime;
  let firstProposalsReceivedTime2;
  let initFinishedTime;
  let initFinishedTime2;
  let initReceivedTime;
  let initReceivedTime2;
  let initReceivedTime3;
  let lastProposalsFinishedTime;
  let lastProposalsFinishedTime2;
  let lastProposalsReceivedTime;
  let lastProposalsReceivedTime2;
  let prepareFinishedTime;
  let prepareReceivedTime;
  let prepareReceivedTime2;
  let readyTime;
  let welcomeFinishedTime;
  let welcomeReceivedTime;
  let welcomeReceivedTime2;
  const self = this;
  const _secureFramesTransitionStates = this._secureFramesTransitionStates;
  const value = _secureFramesTransitionStates.get(transition_id);
  if (null != value) {
    const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
    _secureFramesTransitionStates2.delete(transition_id);
    let obj = {};
    const merged = Object.assign(self._getAnalyticsProperties());
    obj.media_session_id = self.getMediaSessionId();
    ({ parentMediaSessionId: obj3.parent_media_session_id, userId: obj3.sender_user_id } = self);
    obj.transition_id = transition_id;
    ({ protocolVersion: obj3.protocol_version, initReceivedTime: initReceivedTime3 } = value);
    const _connectStartTime = self._connectStartTime;
    let diff;
    if (null != initReceivedTime3) {
      if (null != _connectStartTime) {
        diff = initReceivedTime3 - _connectStartTime;
      }
    }
    obj.start_to_init_duration = diff;
    ({ initFinishedTime, initReceivedTime } = value);
    let diff1;
    if (null != initFinishedTime) {
      if (null != initReceivedTime) {
        diff1 = initFinishedTime - initReceivedTime;
      }
    }
    obj.init_duration = diff1;
    ({ firstProposalsFinishedTime, firstProposalsReceivedTime } = value);
    let diff2;
    if (null != firstProposalsFinishedTime) {
      if (null != firstProposalsReceivedTime) {
        diff2 = firstProposalsFinishedTime - firstProposalsReceivedTime;
      }
    }
    obj.first_proposals_duration = diff2;
    ({ lastProposalsFinishedTime, lastProposalsReceivedTime } = value);
    let diff3;
    if (null != lastProposalsFinishedTime) {
      if (null != lastProposalsReceivedTime) {
        diff3 = lastProposalsFinishedTime - lastProposalsReceivedTime;
      }
    }
    obj.last_proposals_duration = diff3;
    ({ lastProposalsReceivedTime: lastProposalsReceivedTime2, firstProposalsReceivedTime: firstProposalsReceivedTime2 } = value);
    let diff4;
    if (null != lastProposalsReceivedTime2) {
      if (null != firstProposalsReceivedTime2) {
        diff4 = lastProposalsReceivedTime2 - firstProposalsReceivedTime2;
      }
    }
    obj.duration_between_proposals = diff4;
    ({ totalProposalsSize: obj3.total_proposals_size, totalCommitWelcomeSize: obj3.total_commit_welcome_size, welcomeReceivedTime, initFinishedTime: initFinishedTime2 } = value);
    let diff5;
    if (null != welcomeReceivedTime) {
      if (null != initFinishedTime2) {
        diff5 = welcomeReceivedTime - initFinishedTime2;
      }
    }
    obj.welcome_wait_duration = diff5;
    ({ welcomeFinishedTime, welcomeReceivedTime: welcomeReceivedTime2 } = value);
    let diff6;
    if (null != welcomeFinishedTime) {
      if (null != welcomeReceivedTime2) {
        diff6 = welcomeFinishedTime - welcomeReceivedTime2;
      }
    }
    obj.welcome_duration = diff6;
    ({ welcomeSize: obj3.welcome_size, welcomeError: obj3.welcome_error, commitReceivedTime, lastProposalsFinishedTime: lastProposalsFinishedTime2 } = value);
    let diff7;
    if (null != commitReceivedTime) {
      if (null != lastProposalsFinishedTime2) {
        diff7 = commitReceivedTime - lastProposalsFinishedTime2;
      }
    }
    obj.commit_wait_duration = diff7;
    ({ commitFinishedTime, commitReceivedTime: commitReceivedTime2 } = value);
    let diff8;
    if (null != commitFinishedTime) {
      if (null != commitReceivedTime2) {
        diff8 = commitFinishedTime - commitReceivedTime2;
      }
    }
    obj.commit_duration = diff8;
    ({ commitSize: obj3.commit_size, commitError: obj3.commit_error, prepareReceivedTime } = value);
    const _secureFramesLastBecameAloneTime = self._secureFramesLastBecameAloneTime;
    let diff9;
    if (null != prepareReceivedTime) {
      if (null != _secureFramesLastBecameAloneTime) {
        diff9 = prepareReceivedTime - _secureFramesLastBecameAloneTime;
      }
    }
    obj.prepare_wait_duration = diff9;
    ({ prepareFinishedTime, prepareReceivedTime: prepareReceivedTime2 } = value);
    let diff10;
    if (null != prepareFinishedTime) {
      if (null != prepareReceivedTime2) {
        diff10 = prepareFinishedTime - prepareReceivedTime2;
      }
    }
    obj.prepare_duration = diff10;
    ({ executeReceivedTime, readyTime } = value);
    let diff11;
    if (null != executeReceivedTime) {
      if (null != readyTime) {
        diff11 = executeReceivedTime - readyTime;
      }
    }
    obj.execute_wait_duration = diff11;
    ({ executeFinishedTime, executeReceivedTime: executeReceivedTime2 } = value);
    let diff12;
    if (null != executeFinishedTime) {
      if (null != executeReceivedTime2) {
        diff12 = executeFinishedTime - executeReceivedTime2;
      }
    }
    obj.execute_duration = diff12;
    ({ executeError: obj3.execute_error, incomplete: obj3.incomplete } = value);
    obj.active_transition_count = self._secureFramesTransitionStates.size;
    obj = sleep;
    obj.time_since_creation = obj.now() - value.creationTime;
    ({ usersAdded: obj3.users_added_count, usersRemoved: obj3.users_removed_count, rosterSizeAfter: obj3.roster_size_after, executeFinishedTime: executeFinishedTime2, initReceivedTime: initReceivedTime2 } = value);
    let diff13;
    if (null != executeFinishedTime2) {
      if (null != initReceivedTime2) {
        diff13 = executeFinishedTime2 - initReceivedTime2;
      }
    }
    obj.init_to_finish_duration = diff13;
    expandEventProperties.track(constants.SECURE_FRAMES_TRANSITION, obj);
    if (0 === transition_id) {
      const result = self._trackRemainingSecureFrameTransitions();
    }
    const obj2 = expandEventProperties;
  }
};
prototype["_trackRemainingSecureFrameTransitions"] = function _trackRemainingSecureFrameTransitions() {
  const self = this;
  const prop = this._secureFramesTransitionStates;
  const item = prop.forEach((arg0, transition_id) => {
    arg0.incomplete = true;
    const result = self._trackSecureFrameTransition(transition_id);
  });
};
prototype["_storeSecureFrameNextTransitionData"] = function _storeSecureFrameNextTransitionData(arg0) {
  const self = this;
  if (null == this._secureFramesNextTransitionState) {
    let obj = { creationTime: null };
    obj[0] = sleep.now();
    self._secureFramesNextTransitionState = obj;
    const obj2 = sleep;
  }
  obj = {};
  const merged = Object.assign(self._secureFramesNextTransitionState);
  const merged1 = Object.assign(arg0);
  self._secureFramesNextTransitionState = obj;
  return obj;
};
prototype["_storeSecureFrameTransitionData"] = function _storeSecureFrameTransitionData(closure_1, arg1) {
  const self = this;
  const _secureFramesTransitionStates = this._secureFramesTransitionStates;
  let result = _secureFramesTransitionStates.get(closure_1);
  if (null == result) {
    result = self._storeSecureFrameNextTransitionData({});
    self._secureFramesNextTransitionState = undefined;
  }
  const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
  const merged = Object.assign(result);
  const merged1 = Object.assign(arg1);
  result = _secureFramesTransitionStates2.set(closure_1, {});
  self._secureFramesMaxConcurrentTransitions = Math.max(self._secureFramesMaxConcurrentTransitions, self._secureFramesTransitionStates.size);
};
prototype["_handleSecureFramesInit"] = function _handleSecureFramesInit(v) {
  let self = this;
  self = this;
  let closure_1 = v;
  let obj = sleep;
  const nowResult = obj.now();
  require = nowResult;
  obj = { c: constants9.SECURE_FRAMES_INIT, v };
  this.recordEvent(obj);
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
    obj = { initReceivedTime: null, initFinishedTime: null, protocolVersion: null };
    obj[0] = nowResult;
    obj[1] = sleep.now();
    obj[2] = v;
    let result1 = self._storeSecureFrameNextTransitionData(obj);
    const obj1 = { c: null };
    obj1[0] = constants9.MLS_INIT;
    self.recordEvent(obj1);
    const tmpResult = sleep;
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
          let obj = { initReceivedTime: null, initFinishedTime: null, protocolVersion: null, executeError: null };
          obj[0] = closure_0;
          obj[1] = nowResult(outer1_3[18]).now();
          obj[2] = v;
          obj[3] = flag;
          const result1 = self._storeSecureFrameTransitionData(0, obj);
          const result2 = self._trackSecureFrameTransition(0);
        } catch (tmp4) {
          obj = v(outer1_3[20]);
          obj.captureException(tmp4);
          flag = true;
        }
      });
    }
  }
};
prototype["_handleSecureFramesRosterChange"] = function _handleSecureFramesRosterChange(arg0, closure_1) {
  const self = this;
  const items = [];
  let c2 = 0;
  const _require = 0;
  const entries = Object.entries(arg0);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
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
  let result = this._storeSecureFrameTransitionData(closure_1, { usersAdded: c2, usersRemoved: _require, rosterSizeAfter: this._secureFramesRosterMap.size });
  this.emit(_require(self[35]).RTCConnectionEvent.RosterMapUpdate, items);
};
prototype["_handleSecureFramesPrepareTransition"] = function _handleSecureFramesPrepareTransition(lastPreparedTransitionId, v) {
  let self = this;
  self = this;
  let closure_1 = lastPreparedTransitionId;
  let closure_2 = v;
  const logger = this.logger;
  logger.info("Preparing DAVE protocol transition: " + lastPreparedTransitionId + ", protocol version: " + v);
  this._secureFramesTransitionPrepareCount = this._secureFramesTransitionPrepareCount + 1;
  _require = _require(self[18]).now();
  if (0 === v) {
    self._trackMLSFailures({ recovered: true, downgraded: true });
  }
  const _connection = self._connection;
  if (_connection != null) {
    let result = _connection.prepareSecureFramesTransition(lastPreparedTransitionId, v, () => {
      const result = self._maybeSendSecureFramesTransitionReady(closure_1);
      const obj = { protocolVersion: closure_2, prepareReceivedTime: callback, prepareFinishedTime: null };
      obj[2] = callback(self[18]).now();
      const result1 = self._storeSecureFrameTransitionData(closure_1, obj);
    });
  }
};
prototype["_handleSecureFramesPrepareEpoch"] = function _handleSecureFramesPrepareEpoch(_1, v) {
  const self = this;
  const logger = this.logger;
  logger.info("Preparing DAVE protocol epoch: " + _1 + ", protocol version: " + v);
  const str = _1.toString();
  const _connection = this._connection;
  if (_connection != null) {
    const result = _connection.prepareSecureFramesEpoch(str, v, self.trueChannelId);
  }
  if ("1" === str) {
    let obj = sleep;
    self._mlsInitReceivedTime = obj.now();
    self._sendMLSKeyPackage();
    obj = { c: null };
    obj[0] = constants9.MLS_INIT;
    self.recordEvent(obj);
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
prototype["_maybeSendSecureFramesTransitionReady"] = function _maybeSendSecureFramesTransitionReady(closure_1) {
  if (0 !== closure_1) {
    const self = this;
    const logger = this.logger;
    const _HermesInternal = HermesInternal;
    logger.info("Sending DAVE protocol ready for transition ID " + closure_1);
    const _socket = this._socket;
    if (_socket != null) {
      const result = _socket.secureFramesReadyForTransition(closure_1);
    }
    const obj = { readyTime: null };
    obj[0] = sleep.now();
    const result1 = self._storeSecureFrameTransitionData(closure_1, obj);
    const obj2 = sleep;
  }
};
prototype["_handleSecureFramesExecuteTransition"] = function _handleSecureFramesExecuteTransition(transition_id) {
  const self = this;
  const logger = this.logger;
  logger.info("Executing DAVE protocol transition: " + transition_id);
  this._secureFramesTransitionExecuteCount = this._secureFramesTransitionExecuteCount + 1;
  sleep;
  try {
    const _connection = self._connection;
    if (_connection != null) {
      const result = _connection.executeSecureFramesTransition(transition_id);
    }
    let flag = false;
    let obj = { executeReceivedTime: null, executeFinishedTime: null, executeError: null };
    obj[0] = tmp7;
    obj[1] = sleep.now();
    obj[2] = flag;
    const result1 = self._storeSecureFrameTransitionData(transition_id, obj);
    const result2 = self._trackSecureFrameTransition(transition_id);
  } catch (tmp10) {
    obj = importDefault(tmp2[20]);
    obj.captureException(tmp10);
    flag = true;
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
  let closure_1 = arg0;
  let closure_2 = arg1;
  _require = _require(self[18]).now();
  let logger = this.logger;
  logger.info("Received MLS proposals");
  const _connection = this._connection;
  if (_connection != null) {
    _connection.processMLSProposals(arg1, (byteLength) => {
      let obj = callback(self[18]);
      const nowResult = obj.now();
      const logger = self.logger;
      logger.info("Sending MLS commit welcome message");
      closure_1.sendMLSCommitWelcome(byteLength);
      let _secureFramesNextTransitionState = self._secureFramesNextTransitionState;
      if (_secureFramesNextTransitionState == null) {
        obj = { firstProposalsReceivedTime: null, firstProposalsFinishedTime: null };
        obj[0] = callback;
        obj[1] = nowResult;
        _secureFramesNextTransitionState = self._storeSecureFrameNextTransitionData(obj);
      }
      _secureFramesNextTransitionState.lastProposalsReceivedTime = callback;
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
  let closure_1 = arg0;
  let closure_2 = arg1;
  let logger = this.logger;
  logger.info("Received MLS commit for transition ID " + arg0);
  const dependencyMap = _connection(4420).now();
  _connection = this._connection;
  if (_connection != null) {
    let result = _connection.prepareMLSCommitTransition(arg0, arg1, (arg0, v) => {
      let obj = self;
      if (_connection === self._connection) {
        obj = { protocolVersion: null, commitReceivedTime: null, commitFinishedTime: null, commitSize: null, commitError: null };
        obj[0] = v;
        obj[1] = table;
        obj[2] = _connection(table[18]).now();
        obj[3] = byteLength.byteLength;
        obj[4] = !arg0;
        const result = obj._storeSecureFrameTransitionData(closure_1, obj);
        if (arg0) {
          obj._handleMLSSuccess();
          const result1 = obj._handleSecureFramesRosterChange(arg2, tmp10);
          const result2 = obj._maybeSendSecureFramesTransitionReady(tmp10);
        } else {
          const logger = obj.logger;
          const _HermesInternal = HermesInternal;
          logger.warn("Failed to process MLS commit for transition ID " + tmp10);
          obj._mlsSessionResetStartTime = tmp12(tmp13[18]).now();
          if (obj._flagMLSInvalidCommitWelcome(tmp10)) {
            const result3 = obj._handleSecureFramesInit(v);
          }
          const tmp12Result = tmp12(tmp13[18]);
        }
        const obj4 = _connection(table[18]);
        tmp12 = _connection;
        tmp13 = table;
      }
    });
  }
};
prototype["_handleMLSWelcome"] = function _handleMLSWelcome(arg0, arg1) {
  const self = this;
  let closure_1 = arg0;
  let closure_2 = arg1;
  const logger = this.logger;
  logger.info("Received MLS welcome for transition ID " + arg0);
  const dependencyMap = _connection(4420).now();
  _connection = this._connection;
  if (_connection != null) {
    _connection.processMLSWelcome(arg0, arg1, (arg0, arg1, arg2) => {
      let obj = self;
      if (_connection === self._connection) {
        obj = { protocolVersion: null, welcomeReceivedTime: null, welcomeFinishedTime: null, welcomeSize: null, welcomeError: null };
        obj[0] = arg1;
        obj[1] = table;
        obj[2] = _connection(table[18]).now();
        obj[3] = byteLength.byteLength;
        obj[4] = !arg0;
        const result = obj._storeSecureFrameTransitionData(closure_1, obj);
        if (arg0) {
          obj._handleMLSSuccess();
          const result1 = obj._handleSecureFramesRosterChange(arg2, tmp8);
          const result2 = obj._maybeSendSecureFramesTransitionReady(tmp8);
        } else {
          obj._mlsSessionResetStartTime = tmp10(tmp11[18]).now();
          if (obj._flagMLSInvalidCommitWelcome(tmp8)) {
            obj._sendMLSKeyPackage();
          }
          const tmp10Result = tmp10(tmp11[18]);
        }
        const obj4 = _connection(table[18]);
        tmp10 = _connection;
        tmp11 = table;
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
prototype["_handleMLSFailure"] = function _handleMLSFailure(arr, reason) {
  const self = this;
  let obj = sleep;
  const nowResult = obj.now();
  this._nextFailureId = +this._nextFailureId + 1;
  obj = { c: constants9.MLS_FAILURE, i: tmp4 };
  this.recordEvent(obj);
  const _mlsFailures = this._mlsFailures;
  obj = { id: tmp4, source: arr, reason, count: 1, countDuringReset: null, firstOccurrence: null, timeSinceInit: null, eventLog: null };
  let num = 0;
  if (null != this._mlsSessionResetStartTime) {
    num = 1;
  }
  obj[4] = num;
  obj[5] = nowResult;
  let diff;
  if (null != self._mlsInitReceivedTime) {
    diff = nowResult - self._mlsInitReceivedTime;
  }
  obj[6] = diff;
  obj[7] = getEventHistoryString();
  _mlsFailures.push(obj);
  if (arr.includes("GetPersistedKeyPair")) {
    const obj1 = { title: null, body: null };
    const intl = tmp(1236).intl;
    obj1[0] = intl.string(tmp(1236).t.fJUioH);
    const intl2 = tmp(1236).intl;
    obj1[1] = intl2.string(tmp(1236).t.CQLWvo);
    set.show(obj1);
    const obj4 = set;
  } else {
    const result = self._alertMLSFailureDebouced(arr, reason);
  }
};
prototype["_trackMLSFailures"] = function _trackMLSFailures(arg0) {
  let count;
  let countDuringReset;
  let downgraded;
  let eventLog;
  let id;
  let reason;
  let recovered;
  let source;
  let timeSinceInit;
  const self = this;
  ({ recovered, downgraded } = arg0);
  let obj = sleep;
  const nowResult = obj.now();
  const mediaSessionId = this.getMediaSessionId();
  if (null != this._mlsSessionResetStartTime) {
    const diff = nowResult - self._mlsSessionResetStartTime;
  }
  for (const item10022 of tmp4) {
    let firstOccurrence = item10022.firstOccurrence;
    let tmp5 = importDefault;
    let tmp6 = dependencyMap;
    ({ id, source, reason, count, countDuringReset, timeSinceInit, eventLog } = item10022);
    let obj2 = expandEventProperties;
    let tmp7 = constants;
    obj = {};
    let tmp8 = obj;
    let merged = Object.assign(self._getAnalyticsProperties());
    obj.media_session_id = mediaSessionId;
    obj.parent_media_session_id = self.parentMediaSessionId;
    obj.failure_id = id;
    obj.failure_time = firstOccurrence - self._createdTime;
    obj.failure_source = source;
    obj.failure_reason = reason;
    obj.failure_count = count;
    obj.failure_was_recovered = recovered;
    obj.failure_cleared_by_downgrade = downgraded;
    obj.time_since_first_occurrence = nowResult - firstOccurrence;
    obj.time_since_last_reset = diff;
    obj.failure_count_during_reset = countDuringReset;
    obj.time_since_init = timeSinceInit;
    obj.event_history = eventLog;
    obj.connection_serial = self._connectionSerial;
    let trackResult = obj2.track(constants.MLS_FAILURES, obj);
    continue;
  }
  self._mlsFailures = [];
};
prototype["_alertMLSFailure"] = function _alertMLSFailure(arg0, arg1) {
  const currentUser = authStore.getCurrentUser();
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
    obj[0] = "MLS Error in " + arg0;
    const _HermesInternal2 = HermesInternal;
    obj[1] = "Error: " + arg1 + "! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!";
    set.show(obj);
    const obj2 = set;
  }
};
prototype["getExtraConnectionOptions"] = function getExtraConnectionOptions() {
  return {};
};
prototype["getMediaStreamKey"] = function getMediaStreamKey() {

};
prototype["shouldReportPeriodicStats"] = function shouldReportPeriodicStats(periodicStats) {
  if (periodicStats.length > 10) {
    return false;
  } else {
    const self = this;
    const mediaSessionId = this.getMediaSessionId();
    let tmp3 = null != mediaSessionId;
    if (tmp3) {
      tmp3 = MurmurHashV3.v3(mediaSessionId) % 100 <= 5;
      const obj = MurmurHashV3;
    }
    return tmp3;
  }
};
prototype["getInputDeviceName"] = function getInputDeviceName() {
  const inputDeviceId = store2.getInputDeviceId();
  const tmp2 = store2.getInputDevices()[inputDeviceId];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  return name;
};
prototype["getOutputDeviceName"] = function getOutputDeviceName() {
  const outputDeviceId = store2.getOutputDeviceId();
  const tmp2 = store2.getOutputDevices()[outputDeviceId];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  return name;
};
prototype["getVideoDeviceName"] = function getVideoDeviceName() {
  const videoDeviceId = store2.getVideoDeviceId();
  const tmp2 = store2.getVideoDevices()[videoDeviceId];
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
let result = require("updateAveragedStatsHelper").fileFinishedImporting("lib/RTCConnection.tsx");

export default RTCConnection;