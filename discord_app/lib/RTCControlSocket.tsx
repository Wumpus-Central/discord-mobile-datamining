// discord_app/lib/RTCControlSocket.tsx
import refreshSourceMapCookie from "refreshSourceMapCookie";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import DesktopSources from "DesktopSources";
import "on";
import { 00038__ } from "../../_runtime/metro/00038__.js";
import { sleep } from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import { set } from "../utils/PlatformUtils.tsx";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function noop() {

}
({ Features: c5, MediaEngineContextTypes: closure_6, MediaTypes: error, SpeakingFlags: metroImportAll } = DesktopSources);
let obj = { IDENTIFY: 0, [0]: "IDENTIFY", SELECT_PROTOCOL: 1, [1]: "SELECT_PROTOCOL", READY: 2, [2]: "READY", HEARTBEAT: 3, [3]: "HEARTBEAT", SELECT_PROTOCOL_ACK: 4, [4]: "SELECT_PROTOCOL_ACK", SPEAKING: 5, [5]: "SPEAKING", HEARTBEAT_ACK: 6, [6]: "HEARTBEAT_ACK", RESUME: 7, [7]: "RESUME", HELLO: 8, [8]: "HELLO", RESUMED: 9, [9]: "RESUMED", CLIENT_CONNECT: 11, [11]: "CLIENT_CONNECT", VIDEO: 12, [12]: "VIDEO", CLIENT_DISCONNECT: 13, [13]: "CLIENT_DISCONNECT", SESSION_UPDATE: 14, [14]: "SESSION_UPDATE", MEDIA_SINK_WANTS: 15, [15]: "MEDIA_SINK_WANTS", VOICE_BACKEND_VERSION: 16, [16]: "VOICE_BACKEND_VERSION", CHANNEL_OPTIONS_UPDATE: 17, [17]: "CHANNEL_OPTIONS_UPDATE", FLAGS: 18, [18]: "FLAGS", PLATFORM: 20, [20]: "PLATFORM", DAVE_PROTOCOL_PREPARE_TRANSITION: 21, [21]: "DAVE_PROTOCOL_PREPARE_TRANSITION", DAVE_PROTOCOL_EXECUTE_TRANSITION: 22, [22]: "DAVE_PROTOCOL_EXECUTE_TRANSITION", DAVE_PROTOCOL_READY_FOR_TRANSITION: 23, [23]: "DAVE_PROTOCOL_READY_FOR_TRANSITION", DAVE_PROTOCOL_PREPARE_EPOCH: 24, [24]: "DAVE_PROTOCOL_PREPARE_EPOCH", MLS_EXTERNAL_SENDER_PACKAGE: 25, [25]: "MLS_EXTERNAL_SENDER_PACKAGE", MLS_KEY_PACKAGE: 26, [26]: "MLS_KEY_PACKAGE", MLS_PROPOSALS: 27, [27]: "MLS_PROPOSALS", MLS_COMMIT_WELCOME: 28, [28]: "MLS_COMMIT_WELCOME", MLS_PREPARE_COMMIT_TRANSITION: 29, [29]: "MLS_PREPARE_COMMIT_TRANSITION", MLS_WELCOME: 30, [30]: "MLS_WELCOME", MLS_INVALID_COMMIT_WELCOME: 31, [31]: "MLS_INVALID_COMMIT_WELCOME", CLIENT_CANNOT_REACH_RTC_SERVER: 32, [32]: "CLIENT_CANNOT_REACH_RTC_SERVER", SFU_UPDATE: 33, [33]: "SFU_UPDATE" };
obj = { AUTHENTICATION_FAILED: 4004, [4004]: "AUTHENTICATION_FAILED", INVALID_SESSION: 4006, [4006]: "INVALID_SESSION", SERVER_NOT_FOUND: 4011, [4011]: "SERVER_NOT_FOUND", SERVER_CRASH: 4015, [4015]: "SERVER_CRASH", CANCELED: 4016, [4016]: "CANCELED", HEARTBEAT_TIMEOUT: 4800, [4800]: "HEARTBEAT_TIMEOUT", UNRESUMABLE: 4801, [4801]: "UNRESUMABLE", RESET_BACKOFF: 4802, [4802]: "RESET_BACKOFF", REPEATED_MLS_INVALID_MESSAGES: 4803, [4803]: "REPEATED_MLS_INVALID_MESSAGES" };
let closure_12 = { DISCONNECTED: 0, [0]: "DISCONNECTED", CONNECTING: 1, [1]: "CONNECTING", IDENTIFYING: 2, [2]: "IDENTIFYING", RESUMING: 3, [3]: "RESUMING", CONNECTED: 4, [4]: "CONNECTED", RECONNECTING: 5, [5]: "RECONNECTING" };
let closure_13 = 20 * require("set").Millis.SECOND;
const MINUTE = require("set").Millis.MINUTE;
let closure_15 = 5 * require("set").Millis.SECOND;
obj = { Connecting: "connecting", Connect: "connect", Disconnect: "disconnect", Resuming: "resuming", Ready: "ready", SfuUpdate: "sfu-update", Speaking: "speaking", Video: "video", Ping: "ping", ClientConnect: "client-connect", ClientDisconnect: "client-disconnect", Codecs: "codecs", MediaSessionId: "media-session-id", MediaSinkWants: "media-sink-wants", VoiceBackendVersion: "voice-backend-version", KeyframeInterval: "keyframe-interval", ChannelOptionsUpdateSecureFramesProtocol: "update-secure-frames-protocol", Flags: "flags", Platform: "platform", SDP: "sdp", Encryption: "encryption", BandwidthEstimationExperiment: "bandwidth-estimation-experiment", SecureFramesInit: "secure-frames-init", SecureFramesPrepareTransition: "secure-frames-prepare-transition", SecureFramesExecuteTransition: "secure-frames-execute-transition", SecureFramesPrepareEpoch: "secure-frames-prepare-epoch", MLSExternalSenderPackage: "mls-external-sender-package", MLSProposals: "mls-proposals", MLSPrepareCommitTransition: "mls-prepare-commit-transition", MLSWelcome: "mls-welcome", ReceiveMessage: "receive-message", SendMessage: "send-message" };
class RTCControlSocket extends tmp3 {
  constructor(arg0) {
    DEFAULT = arg1;
    if (arg1 === undefined) {
      tmp5 = MediaEngineContextTypes;
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    tmp6 = new RTCControlSocket(tmp4, tmp3, tmp2, DEFAULT, tmp, global);
    // ThrowIfThisInitialized (0x7c)
    tmp7 = new require("fails")(1000, 5000);
    tmp6.backoff = tmp7;
    tmp6.serverVersion = 0;
    tmp6.url = global;
    tmp8 = require("timestamp");
    tmp8 = new tmp8("RTCControlSocket(" + DEFAULT + ")");
    tmp6.logger = tmp8;
    logger = tmp6.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    tmp6.webSocket = null;
    tmp6.connectionState = REPEATED_MLS_INVALID_MESSAGES.DISCONNECTED;
    tmp6.helloTimeout = null;
    tmp6.lastHeartbeatAckTime = null;
    tmp6.heartbeatInterval = null;
    tmp6.heartbeater = null;
    tmp6.heartbeatAck = true;
    tmp6.expeditedHeartbeatTimeout = null;
    tmp6.heartbeatIntervalModifier = 1;
    tmp6.connectionStartTime = 0;
    tmp6.lastRecvSeqNum = null;
    tmp6.sessionId = null;
    tmp6.serverId = null;
    tmp6.channelId = null;
    tmp6.token = null;
    tmp6.resumable = false;
    return tmp6;
  }
}
const prototype = RTCControlSocket.prototype;
prototype["createWebSocket"] = function createWebSocket() {
  let self = this;
  self = this;
  let logger = this.logger;
  logger.info("[CONNECT] " + this.url);
  if (null !== this.webSocket) {
    let logger2 = self.logger;
    logger2.error("Connect called with already existing websocket");
    self.cleanupWebSocket((close) => close.close(4000));
  }
  let obj = self(4379);
  self.connectionStartTime = obj.now();
  self.helloTimeout = setTimeout(() => {
    self.handleClose(false, 0, "The connection timed out after " + self(outer1_2[7]).now() - self.connectionStartTime + " ms - did not receive OP_HELLO in time.");
  }, closure_13);
  obj = { location: "RTCControlSocket", supportsSfuUpdate: _detectH265HardwareDecode.supports(constants.UDP_ENDPOINT_UPDATE) };
  const webSocket = new WebSocket("" + self.url + "?v=" + self(13076).getVoiceGatewayProtocolVersion(obj));
  self.webSocket = webSocket;
  webSocket.binaryType = "arraybuffer";
  webSocket.onopen = () => {
    if (self.connectionState === outer1_12.CONNECTING) {
      obj.emit(outer1_16.Connect);
    } else if (obj.connectionState === tmp.RECONNECTING) {
      obj.doResumeOrClose();
    }
    self.connectionState = outer1_12.CONNECTED;
    const diff = self(outer1_2[7]).now() - obj.connectionStartTime;
    const logger = obj.logger;
    logger.info("[CONNECTED] " + self.url + " in " + diff + " ms");
    self.emit(outer1_16.Ping, Math.round(diff / 2));
  };
  webSocket.onmessage = (data) => {
    let audio_ssrc;
    let d;
    let op;
    let seq;
    let streams;
    let user_id;
    let video_ssrc;
    const result = self.parseWebSocketMessage(data);
    ({ op, seq, d } = result);
    self.emit(outer1_16.ReceiveMessage, op, d);
    if (seq) {
      obj.lastRecvSeqNum = seq;
    }
    if (outer1_3.isLoggingGatewayEvents) {
      const _Uint8Array = Uint8Array;
      if (d instanceof Uint8Array) {
        const items = [];
        HermesBuiltin.arraySpread(d, 0);
        const mapped = items.map((arg0) => arg0.toString(16).padStart(2, "0"));
        const logger2 = obj.logger;
        const _HermesInternal2 = HermesInternal;
        logger2.info("~> " + op + ": 0x" + mapped.join(""));
      } else {
        const logger = obj.logger;
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        logger.info("~> " + op + ": " + JSON.stringify(d));
      }
    }
    if (outer1_10.HELLO === op) {
      obj.clearHelloTimeout();
      obj.handleHello(d);
    } else if (tmp10.READY === op) {
      obj.handleReady(d);
    } else if (tmp10.SFU_UPDATE === op) {
      obj.emit(tmp2.SfuUpdate, d);
    } else if (tmp10.RESUMED === op) {
      obj.handleResumed(d);
    } else if (tmp10.SELECT_PROTOCOL_ACK === op) {
      if (d.bandwidth_estimation_experiment) {
        obj.emit(tmp2.BandwidthEstimationExperiment, d.bandwidth_estimation_experiment);
      }
      obj.emit(tmp2.Codecs, d.audio_codec, d.video_codec);
      if (d.media_session_id) {
        obj.emit(tmp2.MediaSessionId, d.media_session_id);
      }
      if (d.sdp) {
        obj.emit(tmp2.SDP, d.sdp);
      } else if (d.mode) {
        obj.emit(tmp2.Encryption, d.mode, d.secret_key);
      }
      if (d.keyframe_interval) {
        obj.emit(tmp2.KeyframeInterval, d.keyframe_interval);
      }
      let num8 = d.dave_protocol_version;
      if (!num8) {
        num8 = 0;
      }
      obj.emit(tmp2.SecureFramesInit, num8);
      obj.resumable = true;
    } else if (tmp10.SPEAKING === op) {
      const speaking = d.speaking;
      if (typeof speaking !== "boolean") {
        obj.emit(tmp2.Speaking, d.user_id, d.ssrc, tmp61);
      }
    } else if (tmp10.HEARTBEAT === op) {
      obj.sendHeartbeat();
    } else if (tmp10.HEARTBEAT_ACK === op) {
      obj.handleHeartbeatAck(d);
    } else if (tmp10.VIDEO === op) {
      const Video = tmp2.Video;
      ({ user_id, audio_ssrc, video_ssrc, streams } = d);
      let mapped1;
      if (streams != null) {
        mapped1 = streams.map((rid) => {
          const type = rid.type;
          if ("audio" === type) {
            let VIDEO = constants.AUDIO;
          } else if ("test" === type) {
            VIDEO = constants.TEST;
          } else if ("screen" === type) {
            VIDEO = constants.SCREEN;
          } else {
            VIDEO = constants.VIDEO;
          }
          let obj = { type: VIDEO, rid: rid.rid, ssrc: rid.ssrc, rtxSsrc: rid.rtx_ssrc, active: rid.active, quality: rid.quality, maxBitrate: rid.max_bitrate, maxFrameRate: rid.max_framerate, maxResolution: null };
          let tmp5;
          if (null != rid.max_resolution) {
            obj = { type: null, width: null, height: null };
            obj[0] = rid.max_resolution.type;
            obj[1] = rid.max_resolution.width;
            obj[2] = rid.max_resolution.height;
            tmp5 = obj;
          }
          obj[8] = tmp5;
          return obj;
        });
      }
      if (mapped1 == null) {
        mapped1 = [];
      }
      obj.emit(Video, user_id, audio_ssrc, video_ssrc, mapped1);
    } else if (tmp10.CLIENT_CONNECT === op) {
      obj.emit(tmp2.ClientConnect, d.user_ids);
    } else if (tmp10.CLIENT_DISCONNECT === op) {
      obj.emit(tmp2.ClientDisconnect, d.user_id);
    } else if (tmp10.SESSION_UPDATE === op) {
      if (!tmp45) {
        obj.emit(tmp2.Codecs, d.audio_codec, d.video_codec);
      }
      if (null != d.media_session_id) {
        obj.emit(tmp2.MediaSessionId, d.media_session_id);
      }
      if (d.keyframe_interval) {
        obj.emit(tmp2.KeyframeInterval, d.keyframe_interval);
      }
      tmp45 = null == d.audio_codec && null == d.video_codec;
    } else if (tmp10.MEDIA_SINK_WANTS === op) {
      obj.emit(tmp2.MediaSinkWants, d);
    } else if (tmp10.VOICE_BACKEND_VERSION === op) {
      if (tmp41) {
        obj.emit(tmp2.VoiceBackendVersion, d.voice, d.rtc_worker);
      }
      tmp41 = null != d.voice && null != d.rtc_worker;
    } else if (tmp10.FLAGS === op) {
      if (tmp38) {
        obj.emit(tmp2.Flags, d.user_id, d.flags);
      }
      tmp38 = null != d.flags && null != d.user_id;
    } else if (tmp10.PLATFORM === op) {
      if (tmp35) {
        obj.emit(tmp2.Platform, d.user_id, d.platform);
      }
      tmp35 = null != d.platform && null != d.user_id;
    } else if (tmp10.DAVE_PROTOCOL_PREPARE_TRANSITION === op) {
      if (tmp32) {
        obj.emit(tmp2.SecureFramesPrepareTransition, d.transition_id, d.protocol_version);
      }
      tmp32 = null != d.transition_id && null != d.protocol_version;
    } else if (tmp10.DAVE_PROTOCOL_EXECUTE_TRANSITION === op) {
      if (null != d.transition_id) {
        obj.emit(tmp2.SecureFramesExecuteTransition, d.transition_id);
      }
    } else if (tmp10.DAVE_PROTOCOL_PREPARE_EPOCH === op) {
      if (tmp28) {
        obj.emit(tmp2.SecureFramesPrepareEpoch, d.epoch, d.protocol_version);
      }
      tmp28 = null != d.epoch && null != d.protocol_version;
    } else if (tmp10.MLS_EXTERNAL_SENDER_PACKAGE === op) {
      obj.emit(tmp2.MLSExternalSenderPackage, d);
    } else if (tmp10.MLS_PROPOSALS === op) {
      obj.emit(tmp2.MLSProposals, d);
    } else if (tmp10.MLS_PREPARE_COMMIT_TRANSITION === op) {
      const _DataView2 = DataView;
      const dataView = new DataView(d.buffer, d.byteOffset, 2);
      const uint16 = dataView.getUint16(0, false);
      obj.emit(tmp2.MLSPrepareCommitTransition, uint16, d.slice(2));
    } else if (tmp10.MLS_WELCOME === op) {
      const _DataView = DataView;
      const dataView1 = new DataView(d.buffer, d.byteOffset, 2);
      const uint161 = dataView1.getUint16(0, false);
      obj.emit(tmp2.MLSWelcome, uint161, d.slice(2));
    } else {
      const logger3 = obj.logger;
      const _HermesInternal3 = HermesInternal;
      logger3.info("Unhandled op " + op);
    }
  };
  webSocket.onerror = () => self.handleClose(false, 0, "An error with the websocket occurred");
  webSocket.onclose = (wasClean) => self.handleClose(wasClean.wasClean, wasClean.code, wasClean.reason);
};
prototype["send"] = function send(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  const self = this;
  const webSocket = this.webSocket;
  if (null != webSocket) {
    const _WebSocket = WebSocket;
    if (webSocket.readyState === WebSocket.OPEN) {
      const _JSON = JSON;
      const obj = { op: null, d: null };
      obj[0] = arg0;
      obj[1] = tmp;
      const json = JSON.stringify(obj);
      if (obj.isLoggingGatewayEvents) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("<~ " + json);
      }
      self.emit(obj.SendMessage, arg0, tmp);
      try {
        webSocket.send(json);
      } catch (err) {
      }
    }
  }
};
prototype["sendBinary"] = function sendBinary(MLS_COMMIT_WELCOME, uint8Array) {
  const webSocket = this.webSocket;
  if (null != webSocket) {
    const _WebSocket = WebSocket;
    if (webSocket.readyState === WebSocket.OPEN) {
      const _Uint8Array = Uint8Array;
      uint8Array = new Uint8Array(uint8Array.byteLength + 1);
      uint8Array[0] = MLS_COMMIT_WELCOME;
      const result = uint8Array.set(uint8Array, 1);
      try {
        webSocket.send(uint8Array.buffer);
      } catch (err) {
      }
    }
  }
};
prototype["doResumeOrClose"] = function doResumeOrClose() {
  const self = this;
  const obj = sleep;
  const nowResult = obj.now();
  if (null !== this.serverId) {
    if (null !== self.channelId) {
      if (null !== self.token) {
        if (null !== self.sessionId) {
          if (self.resumable) {
            self.doResume();
            self.lastHeartbeatAckTime = nowResult;
          }
        }
      }
    }
  }
  self.disconnect(false, obj.UNRESUMABLE, "Cannot resume connection.");
};
prototype["doResume"] = function doResume() {
  let logger;
  let serverId;
  const self = this;
  let num = this.lastRecvSeqNum;
  if (num == null) {
    num = -1;
  }
  ({ logger, serverId } = self);
  if (serverId == null) {
    serverId = "";
  }
  let str = self.channelId;
  if (str == null) {
    str = "";
  }
  let str2 = self.sessionId;
  if (str2 == null) {
    str2 = "";
  }
  logger.info("[RESUME] resuming session. serverId=" + serverId + " channelId=" + str + " sessionId=" + str2 + " seqAck=" + num);
  self.emit(obj.Resuming);
  self.connectionState = constants3.RESUMING;
  obj = { token: self.token, session_id: self.sessionId, server_id: self.serverId, channel_id: self.channelId, seq_ack: num };
  self.send(obj.RESUME, obj);
};
prototype["handleHello"] = function handleHello(d) {
  let heartbeatInterval;
  let logger;
  let num = d.v;
  if (num == null) {
    num = 3;
  }
  const self = this;
  this.serverVersion = num;
  if (this.serverVersion <= 3) {
    let num3 = 0.1;
    if (set.isPlatformEmbedded) {
      num3 = 0.25;
    }
    self.heartbeatInterval = d.heartbeat_interval * num3;
    let tmp4 = require;
    const tmp7 = require;
    const tmp8 = dependencyMap;
  } else {
    self.heartbeatInterval = d.heartbeat_interval * self.heartbeatIntervalModifier;
    tmp4 = require;
    if (!set.isPlatformEmbedded) {
      let num2 = self.heartbeatInterval;
      if (num2 == null) {
        num2 = NaN;
      }
      self.heartbeatInterval = Math.min(closure_15, num2);
      tmp4 = tmp;
      const tmp6 = closure_15;
    }
    tmp = require;
    const tmp2 = dependencyMap;
  }
  const diff = tmp4(4379).now() - self.connectionStartTime;
  ({ logger, heartbeatInterval } = self);
  if (heartbeatInterval == null) {
    heartbeatInterval = "??";
  }
  logger.info("[HELLO] heartbeat interval: " + heartbeatInterval + ", version: " + self.serverVersion + ", took " + diff + " ms");
  self.startHeartbeater();
};
prototype["handleReady"] = function handleReady(experiments) {
  let ip;
  let modes;
  let port;
  let ssrc;
  let streams;
  const self = this;
  const backoff = this.backoff;
  backoff.succeed();
  const obj = sleep;
  const logger = this.logger;
  logger.info("[READY] took " + obj.now() - this.connectionStartTime + " ms");
  if (this.serverVersion >= 6) {
    self.send(obj.VOICE_BACKEND_VERSION, {});
  }
  ({ ip, port, modes, ssrc, streams } = experiments);
  let mapped;
  if (streams != null) {
    mapped = streams.map((rid) => {
      const type = rid.type;
      if ("audio" === type) {
        let VIDEO = constants.AUDIO;
      } else if ("test" === type) {
        VIDEO = constants.TEST;
      } else if ("screen" === type) {
        VIDEO = constants.SCREEN;
      } else {
        VIDEO = constants.VIDEO;
      }
      let obj = { type: VIDEO, rid: rid.rid, ssrc: rid.ssrc, rtxSsrc: rid.rtx_ssrc, active: rid.active, quality: rid.quality, maxBitrate: rid.max_bitrate, maxFrameRate: rid.max_framerate, maxResolution: null };
      let tmp5;
      if (null != rid.max_resolution) {
        obj = { type: null, width: null, height: null };
        obj[0] = rid.max_resolution.type;
        obj[1] = rid.max_resolution.width;
        obj[2] = rid.max_resolution.height;
        tmp5 = obj;
      }
      obj[8] = tmp5;
      return obj;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  self.emit(obj.Ready, ip, port, modes, ssrc, mapped, experiments.experiments);
};
prototype["supportsSfuUpdate"] = function supportsSfuUpdate() {
  return this.serverVersion >= 10;
};
prototype["handleResumed"] = function handleResumed(d) {
  const backoff = this.backoff;
  backoff.succeed();
};
prototype["handleClose"] = function handleClose(arg0, arg1, arg2) {
  let backoff;
  let logger2;
  let self = this;
  self = this;
  let flag = arg0;
  flag = arg0;
  let closure_2 = arg1;
  let closure_0 = arg2;
  this.connectionState = constants3.DISCONNECTED;
  if (!arg0) {
    flag = false;
  }
  self.cleanupWebSocket();
  if (arg1 !== obj.AUTHENTICATION_FAILED) {
    if (arg1 !== tmp2.SERVER_CRASH) {
      if (arg1 !== tmp2.SERVER_NOT_FOUND) {
        if (arg1 !== tmp2.INVALID_SESSION) {
          if (self.backoff.fails > 3) {
            const logger = self.logger;
            let str = "[WS CLOSED] Backoff exceed. Resetting.";
            logger.warn("[WS CLOSED] Backoff exceed. Resetting.");
            self.disconnect(flag, arg1, arg2);
          } else {
            ({ backoff, logger: logger2 } = self);
            str = flag.toString();
            const result = backoff.fail(() => self.reconnect(flag, closure_2, closure_0)) / 1000;
            const _HermesInternal = HermesInternal;
            logger2.warn("[WS CLOSED] (clean: " + str + ", code: " + arg1 + ", reason: " + arg2 + ") retrying in " + result.toFixed(2) + " seconds.");
            const failResult = backoff.fail(() => self.reconnect(flag, closure_2, closure_0));
          }
        }
      }
    }
  }
  return self.disconnect(flag, arg1, arg2);
};
prototype["disconnect"] = function disconnect(arg0, arg1, arg2) {
  const logger = this.logger;
  logger.warn("[DISCONNECT] (" + arg0.toString() + ", " + arg1 + ", " + arg2 + ")");
  this.cleanupWebSocket();
  this.cleanupState();
  this.connectionState = constants3.DISCONNECTED;
  this.emit(obj.Disconnect, arg0, arg1, arg2);
};
prototype["reconnect"] = function reconnect(arg0, arg1, arg2) {
  const logger = this.logger;
  logger.info("[RECONNECT] wasClean=" + arg0.toString() + " code=" + arg1 + " reason=" + arg2);
  this.cleanupWebSocket((close) => close.close(4000));
  this.connectionState = constants3.RECONNECTING;
  const webSocket = this.createWebSocket();
};
prototype["cleanupWebSocket"] = function cleanupWebSocket(arg0) {
  this.stopHeartbeater();
  this.clearHelloTimeout();
  const webSocket = this.webSocket;
  this.webSocket = null;
  if (null != webSocket) {
    webSocket.onopen = noop;
    webSocket.onmessage = noop;
    webSocket.onerror = noop;
    webSocket.onclose = noop;
    if (arg0 != null) {
      arg0(webSocket);
    }
  }
  const backoff = this.backoff;
  backoff.cancel();
};
prototype["cleanupState"] = function cleanupState() {
  this.serverId = null;
  this.channelId = null;
  this.sessionId = null;
  this.token = null;
  this.resumable = false;
  this.lastRecvSeqNum = null;
};
prototype["parseWebSocketMessage"] = function parseWebSocketMessage(data) {
  if (data.data instanceof ArrayBuffer) {
    const _Uint8Array = Uint8Array;
    const self = this;
    const uint8Array = new Uint8Array(data.data);
    let uint16 = null;
    if (this.serverVersion >= 8) {
      const _DataView = DataView;
      const dataView = new DataView(uint8Array.buffer);
      uint16 = dataView.getUint16(0, false);
    }
    let num3 = 0;
    if (self.serverVersion >= 8) {
      num3 = 2;
    }
    const obj = { op: null, seq: null, d: null };
    obj[0] = uint8Array[num3];
    obj[1] = uint16;
    obj[2] = uint8Array.subarray(num3 + 1);
    return obj;
  } else {
    const _JSON = JSON;
    return JSON.parse(data.data);
  }
};
prototype["clearHelloTimeout"] = function clearHelloTimeout() {
  const self = this;
  if (null != this.helloTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.helloTimeout);
    self.helloTimeout = null;
  }
};
prototype["handleHeartbeatAck"] = function handleHeartbeatAck(d) {
  const self = this;
  const logger = this.logger;
  logger.info("Heartbeat ACK received");
  let t = d;
  if (this.serverVersion >= 8) {
    t = d.t;
  }
  const obj = sleep;
  self.emit(obj.Ping, obj.now() - t);
  self.lastHeartbeatAckTime = sleep.now();
  self.heartbeatAck = true;
  if (null !== self.expeditedHeartbeatTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.expeditedHeartbeatTimeout);
    self.expeditedHeartbeatTimeout = null;
    const logger2 = self.logger;
    logger2.info("Expedited heartbeat succeeded");
  }
};
prototype["handleHeartbeatTimeout"] = function handleHeartbeatTimeout() {
  let backoff;
  let logger;
  const self = this;
  this.cleanupWebSocket((close) => close.close(4000));
  ({ backoff, logger } = this);
  const result = backoff.fail(() => self.reconnect(false, outer1_11.HEARTBEAT_TIMEOUT, "Heartbeat timeout.")) / 1000;
  logger.warn("[HEARTBEAT ACK TIMEOUT] reconnecting in " + result.toFixed(2) + " seconds.");
};
prototype["startHeartbeater"] = function startHeartbeater() {
  let self = this;
  self = this;
  00038__(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here.");
  const logger = this.logger;
  logger.info("Starting heartbeat with interval: " + this.heartbeatInterval);
  if (null !== this.heartbeater) {
    const _clearInterval = clearInterval;
    clearInterval(self.heartbeater);
  }
  self.heartbeatAck = true;
  self.heartbeater = setInterval(() => {
    if (self.heartbeatAck) {
      obj.heartbeatAck = false;
      obj.sendHeartbeat();
    } else if (null === obj.expeditedHeartbeatTimeout) {
      const result = obj.handleHeartbeatTimeout();
    }
  }, self.heartbeatInterval);
};
prototype["sendHeartbeat"] = function sendHeartbeat() {
  const self = this;
  if (this.serverVersion >= 8) {
    let num = self.lastRecvSeqNum;
    if (num == null) {
      num = -1;
    }
    const logger2 = self.logger;
    const _HermesInternal = HermesInternal;
    logger2.info("Sending heartbeat with last received sequence number: " + num);
    let obj = { t: null, seq_ack: null };
    obj[0] = sleep.now();
    obj[1] = num;
    self.send(obj.HEARTBEAT, obj);
    const obj3 = sleep;
  } else {
    const logger = self.logger;
    logger.info("Sending heartbeat");
    obj = sleep;
    self.send(obj.HEARTBEAT, obj.now());
  }
};
prototype["stopHeartbeater"] = function stopHeartbeater() {
  const self = this;
  if (null !== this.heartbeater) {
    const _clearInterval = clearInterval;
    clearInterval(self.heartbeater);
    self.heartbeater = null;
  }
  if (null !== self.expeditedHeartbeatTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.expeditedHeartbeatTimeout);
    self.expeditedHeartbeatTimeout = null;
  }
};
prototype["connect"] = function connect() {
  const self = this;
  if (this.connectionState !== constants3.DISCONNECTED) {
    const logger = self.logger;
    logger.error("Cannot start a new connection, connection state is not disconnected");
    let flag = false;
  } else {
    self.connectionState = tmp.CONNECTING;
    const webSocket = self.createWebSocket();
    self.emit(obj.Connecting);
    flag = true;
  }
  return flag;
};
prototype["identify"] = function identify(streamParameters, arg1, arg2) {
  let channelId;
  let maxDaveProtocolVersion;
  let serverId;
  let sessionId;
  let token;
  let userId;
  let video;
  ({ serverId, channelId, sessionId, token, video } = streamParameters);
  ({ userId, maxDaveProtocolVersion } = streamParameters);
  if (video === undefined) {
    video = false;
  }
  streamParameters = streamParameters.streamParameters;
  this.serverId = serverId;
  this.channelId = channelId;
  this.sessionId = sessionId;
  this.token = token;
  this.connectionState = constants3.IDENTIFYING;
  const obj = { server_id: serverId, channel_id: channelId, user_id: userId, session_id: sessionId, token, max_dave_protocol_version: maxDaveProtocolVersion, video, streams: null };
  let mapped;
  if (streamParameters != null) {
    mapped = streamParameters.map((type) => {
      let obj = { type: type.type, rid: type.rid, ssrc: type.ssrc, active: type.active, quality: type.quality, rtx_ssrc: type.rtxSsrc, max_bitrate: type.maxBitrate, max_framerate: type.maxFrameRate, max_resolution: null };
      let tmp;
      if (null != type.maxResolution) {
        obj = { type: null, width: null, height: null };
        obj[0] = type.maxResolution.type;
        obj[1] = type.maxResolution.width;
        obj[2] = type.maxResolution.height;
        tmp = obj;
      }
      obj[8] = tmp;
      return obj;
    });
  }
  obj[7] = mapped;
  this.send(obj.IDENTIFY, obj);
};
prototype["expeditedHeartbeat"] = function expeditedHeartbeat(arg0) {
  let self = this;
  self = this;
  let str = arg1;
  if (arg1 === undefined) {
    str = "";
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (null != self.webSocket) {
    const logger2 = self.logger;
    let str5 = "";
    if ("" !== str) {
      str5 = `reason: ${str}`;
    }
    logger2.info(`Performing an expedited heartbeat ${str5}`);
    self.heartbeatAck = false;
    self.sendHeartbeat();
    if (null !== self.expeditedHeartbeatTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.expeditedHeartbeatTimeout);
    }
    const _setTimeout = setTimeout;
    self.expeditedHeartbeatTimeout = setTimeout(() => {
      self.expeditedHeartbeatTimeout = null;
      if (false === self.heartbeatAck) {
        const result = self.handleHeartbeatTimeout();
      }
    }, arg0);
  } else if (flag) {
    return self.resetBackoff(str);
  } else {
    const logger = self.logger;
    let str2 = "";
    if ("" !== str) {
      str2 = `reason: ${str}`;
    }
    logger.info(`Expedited heartbeat requested, but is disconnected and a reset was not requested ${str2}`);
  }
  return false;
};
prototype["resetBackoff"] = function resetBackoff() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "";
  }
  const self = this;
  let flag = this.backoff.fails > 0;
  if (flag) {
    flag = null == self.webSocket;
  }
  if (flag) {
    const logger = self.logger;
    let str2 = "";
    if ("" !== str) {
      str2 = `for reason: ${str}`;
    }
    logger.info(`Connection backoff reset ${str2}`);
    const backoff = self.backoff;
    backoff.succeed();
    self.reconnect(false, obj.RESET_BACKOFF, "Reset backoff.");
    flag = true;
  }
  return flag;
};
prototype["close"] = function close() {
  const logger = this.logger;
  logger.info("CLOSE");
  this.cleanupWebSocket((close) => close.close(4000));
  this.cleanupState();
  this.connectionState = constants3.DISCONNECTED;
  this.emit(obj.Disconnect, true, 1000, "Force Close");
};
prototype["destroy"] = function destroy() {
  this.close();
};
prototype["selectProtocol"] = function selectProtocol(protocol, rTCConnectionId, sdp, _selectedExperiments) {
  let obj = {};
  let tmp = obj;
  sdp = null;
  if (null != sdp) {
    if ("sdp" in sdp) {
      if (null != sdp.sdp) {
        if ("" !== sdp.sdp) {
          sdp = sdp.sdp;
          obj = {};
          const merged = Object.assign(sdp);
          const codecs = sdp.codecs;
          obj.codecs = codecs.map((name) => ({ name: name.name, type: name.type, priority: 1000 * name.priority, payload_type: name.payloadType, rtx_payload_type: name.rtxPayloadType, encode: name.encode, decode: name.decode }));
          obj.rtc_connection_id = rTCConnectionId;
          tmp = obj;
        }
      }
    }
    let BooleanResult = "address" in sdp && null != sdp.address;
    if (BooleanResult) {
      BooleanResult = "" !== sdp.address;
    }
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(sdp.port);
    }
    if (BooleanResult) {
      BooleanResult = null != sdp.mode;
    }
    if (BooleanResult) {
      BooleanResult = "" !== sdp.mode;
    }
    tmp = obj;
    if (BooleanResult) {
      obj = { address: null, port: null, mode: null };
      ({ address: obj2[0], port: obj2[1], mode: obj2[2] } = sdp);
      const obj1 = {};
      const merged1 = Object.assign(sdp);
      const codecs1 = sdp.codecs;
      obj1.codecs = codecs1.map((name) => ({ name: name.name, type: name.type, priority: 1000 * name.priority, payload_type: name.payloadType, rtx_payload_type: name.rtxPayloadType, encode: name.encode, decode: name.decode }));
      obj1.rtc_connection_id = rTCConnectionId;
      obj1.experiments = _selectedExperiments;
      tmp = obj1;
      sdp = obj;
    }
  }
  const obj2 = { protocol, data: sdp };
  const merged2 = Object.assign(tmp);
  this.send(obj.SELECT_PROTOCOL, obj2);
};
prototype["updateSession"] = function updateSession(codecs) {
  const obj = { codecs: codecs.map((name) => ({ name: name.name, type: name.type, priority: 1000 * name.priority, payload_type: name.payloadType, rtx_payload_type: name.rtxPayloadType, encode: name.encode, decode: name.decode })) };
  codecs = codecs.codecs;
  this.send(obj.SESSION_UPDATE, obj);
};
prototype["speaking"] = function speaking(_lastSentSpeakingStatus, packetDelay, _lastSentSSRC) {
  let num = packetDelay;
  if (packetDelay === undefined) {
    num = 0;
  }
  let num2 = _lastSentSSRC;
  if (_lastSentSSRC === undefined) {
    num2 = 0;
  }
  let BooleanResult = _lastSentSpeakingStatus;
  if (this.serverVersion <= 3) {
    const _Boolean = Boolean;
    BooleanResult = Boolean(_lastSentSpeakingStatus);
  }
  this.send(obj.SPEAKING, { speaking: BooleanResult, delay: num, ssrc: num2 });
};
prototype["video"] = function video(audio_ssrc, video_ssrc, rtx_ssrc, arr) {
  let obj = { audio_ssrc, video_ssrc, rtx_ssrc, streams: null };
  let mapped;
  if (arr != null) {
    mapped = arr.map((type) => {
      let obj = { type: type.type, rid: type.rid, ssrc: type.ssrc, active: type.active, quality: type.quality, rtx_ssrc: type.rtxSsrc, max_bitrate: type.maxBitrate, max_framerate: type.maxFrameRate, max_resolution: null };
      let tmp;
      if (null != type.maxResolution) {
        obj = { type: null, width: null, height: null };
        obj[0] = type.maxResolution.type;
        obj[1] = type.maxResolution.width;
        obj[2] = type.maxResolution.height;
        tmp = obj;
      }
      obj[8] = tmp;
      return obj;
    });
  }
  obj[3] = mapped;
  this.send(obj.VIDEO, obj);
};
prototype["mediaSinkWants"] = function mediaSinkWants(localVideoSinkWants) {
  const self = this;
  if (this.serverVersion >= 5) {
    self.send(obj.MEDIA_SINK_WANTS, localVideoSinkWants);
  }
};
prototype["secureFramesReadyForTransition"] = function secureFramesReadyForTransition(transition_id) {
  const obj = { transition_id };
  this.send(obj.DAVE_PROTOCOL_READY_FOR_TRANSITION, obj);
};
prototype["sendMLSKeyPackage"] = function sendMLSKeyPackage(arg0) {
  const logger = this.logger;
  logger.info("Sending MLS key package");
  const uint8Array = new Uint8Array(arg0);
  this.sendBinary(obj.MLS_KEY_PACKAGE, uint8Array);
};
prototype["sendMLSCommitWelcome"] = function sendMLSCommitWelcome(byteLength) {
  const logger = this.logger;
  logger.info("Sending MLS commit + welcome message");
  const uint8Array = new Uint8Array(byteLength);
  this.sendBinary(obj.MLS_COMMIT_WELCOME, uint8Array);
};
prototype["flagMLSInvalidCommitWelcome"] = function flagMLSInvalidCommitWelcome(transition_id) {
  const obj = { transition_id };
  this.send(obj.MLS_INVALID_COMMIT_WELCOME, obj);
};
prototype["disconnectForRepeatedMLSInvalidMessages"] = function disconnectForRepeatedMLSInvalidMessages(arg0) {
  const logger = this.logger;
  logger.warn("[MLS] " + arg0 + " consecutive invalid commit/welcome messages.");
  this.cleanupWebSocket((close) => close.close(constants.REPEATED_MLS_INVALID_MESSAGES));
  this.disconnect(false, obj.REPEATED_MLS_INVALID_MESSAGES, "Repeated invalid MLS commit/welcome messages.");
};
prototype["noRoute"] = function noRoute() {
  this.send(obj.CLIENT_CANNOT_REACH_RTC_SERVER, {});
};
prototype["setHeartbeatIntervalModifier"] = function setHeartbeatIntervalModifier(heartbeatIntervalModifier) {
  this.heartbeatIntervalModifier = heartbeatIntervalModifier;
};
let result = require("DesktopSources").fileFinishedImporting("lib/RTCControlSocket.tsx");

export default RTCControlSocket;
export const RTCSocketOpcode = obj;
export const RTCSocketCloseCode = obj;
export const SocketEvent = obj;