// discord_common/js/packages/media-engine/native/Connection.tsx
import inject from "inject.tsx";
import BaseConnectionEvent from "../index.tsx";
import destroyDefault from "../BaseConnection.tsx";
import WantsVideoQuality from "../VideoQualityManager.tsx";
import VADAggressiveness2 from "VoiceEngine.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import DesktopSources from "../Constants.tsx";
import AudioSubsystems from "Constants.tsx";
import { items } from "../utils/VideoCodecUtils.tsx";

require = arg1;
({
  StatsFilter: c4,
  ExperimentFlags: c5,
  DESKTOP_BITRATE_ENHANCED: closure_6,
  DESKTOP_BITRATE: error,
  MEDIA_SINK_WANTS_PROPERTIES: closure_8,
  MediaTypes: c9,
  SIMULCAST_HQ_QUALITY: c10,
} = DesktopSources);
({
  NATIVE_MODE_VALUES: unpackModuleId,
  InputModes: closure_12,
  ConnectionStates: map1,
  Codecs: closure_14,
  MediaEngineContextTypes: closure_15,
  SpeakingFlags: closure_16,
  ResolutionTypes: closure_17,
  NativeFeatures: closure_18,
  NoiseCancellerError: closure_19,
  DEFAULT_VOLUME: closure_20,
  DEFAULT_STREAM_VOLUME: closure_21,
  DEFAULT_SOUNDSHARE_VOICE_BITRATE: closure_22,
  DEFAULT_CALL_BITRATE: closure_23,
  DEFAULT_CALL_MIN_BITRATE: closure_24,
  DEFAULT_CALL_MAX_BITRATE: closure_25,
  DEFAULT_PRIORITY_SPEAKER_DUCKING: closure_26,
  PING_INTERVAL: closure_27,
} = AudioSubsystems);
let c28 = 0;
let Connection;
destroyDefault;
class Connection extends tmp4 {
  constructor(arg0, arg1, arg2) {
    tmp = new tmp(global, arg1, tmp6, tmp5, tmp4, tmp3, global, tmp2, new.target);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    tmp8 = +closure_28;
    closure_28 = tmp8 + 1;
    tmp.mediaEngineConnectionId = `Native-${tmp8}`;
    tmp.selfVideo = false;
    tmp.codecs = [];
    tmp.initialCodecs = [];
    tmp.videoEncoderFallbackPending = false;
    set = new Set();
    tmp.videoDecoderFallbackSent = set;
    tmp.lastOverrideCodecDenylist = "";
    tmp.lastOverrideEncoderDenylist = "";
    tmp.lastCaptureOverrides = "";
    tmp.overrideCodecResetAt = 0;
    obj = require("inject");
    tmp.desktopDegradationPreference = obj.getVoiceEngine().DegradationPreference.MAINTAIN_FRAMERATE;
    obj2 = require("inject");
    tmp.sourceDesktopDegradationPreference = obj2.getVoiceEngine().DegradationPreference.DISABLED;
    obj3 = require("inject");
    tmp.videoDegradationPreference = obj3.getVoiceEngine().DegradationPreference.BALANCED;
    tmp.localPans = {};
    tmp.remoteAudioSSRCs = {};
    tmp.remoteVideoSSRCs = {};
    tmp.inputMode = InputModes.VOICE_ACTIVITY;
    tmp.vadThreshold = -40;
    tmp.vadAutoThreshold = true;
    tmp.vadKrispActivationThreshold = 0.5;
    tmp.vadUseKrisp = true;
    tmp.vadLeading = 5;
    tmp.vadTrailing = 25;
    tmp.pttReleaseDelay = 20;
    tmp.soundshareActive = false;
    tmp.soundshareId = null;
    tmp.soundshareSentSpeakingEvent = false;
    tmp.echoCancellation = true;
    tmp.noiseSuppression = true;
    tmp.automaticGainControl = { enabled: true };
    tmp.noiseCancellation = false;
    tmp.noiseCancellationDuringProcessing = false;
    tmp.noiseCancellationConsecutiveFailures = 0;
    tmp.echoReferenceMode = "mix";
    tmp.attenuationFactor = 0.5;
    tmp.attenuateWhileSpeakingSelf = false;
    tmp.attenuateWhileSpeakingOthers = true;
    tmp.qos = true;
    tmp.minimumJitterBufferLevel = 0;
    tmp.postponeDecodeLevel = 100;
    tmp.reconnectInterval = 60000;
    tmp.keyframeInterval = 0;
    tmp.videoQualityMeasurement = "";
    tmp.videoEncoderExperiments = "";
    tmp.numFastUdpReconnects = 0;
    tmp.lastPreparedTransitionId = -1;
    tmp.lastExecutedTransitionId = -1;
    tmp.currentVideoCodec = null;
    tmp.lastDesktopEncodingOptions = null;
    tmp.handleSpeakingNative = function handleSpeakingNative(hasItem, flag) {
      if (typeof flag !== "boolean") {
        lib.handleSpeakingFlags(hasItem, flag, arg2);
      }
    };
    tmp.handleNativeMuteChanged = function handleNativeMuteChanged(arg0) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.NativeMuteChanged, arg0);
    };
    tmp.handleSpeakingFlags = function handleSpeakingFlags(hasItem, flag, arg2) {
      let NONE = lib.localSpeakingFlags[hasItem];
      if (NONE == null) {
        NONE = closure_1_16.NONE;
      }
      const experimentFlags = obj.experimentFlags;
      if (!experimentFlags.has(closure_1_5.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS)) {
        obj.localSpeakingFlags[hasItem] = flag;
        if (hasItem === obj.userId) {
          let audioSSRC = obj.audioSSRC;
        } else {
          audioSSRC = obj.remoteAudioSSRCs[hasItem];
        }
        obj.emit(lib(closure_1_2[6]).BaseConnectionEvent.Speaking, hasItem, flag, audioSSRC, arg2);
        let tmp11 = flag & closure_1_16.SOUNDSHARE;
        if (tmp11) {
          tmp11 = false === obj.soundshareSentSpeakingEvent;
        }
        if (tmp11) {
          obj.emit(tmp3(tmp4[6]).BaseConnectionEvent.SoundshareSpeaking);
          obj.soundshareSentSpeakingEvent = true;
        }
        tmp3 = lib;
        tmp4 = closure_1_2;
      }
    };
    tmp.handleSpeakingWhileMuted = function handleSpeakingWhileMuted() {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.SpeakingWhileMuted);
    };
    tmp.handlePing = function handlePing(arg0) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.Ping, arg0);
    };
    tmp.handlePingTimeout = function handlePingTimeout(arg0, arg1, arg2, arg3) {
      let num = 4000;
      if (arg3 > 0) {
        num = arg3;
      }
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.PingTimeout, arg2, num);
    };
    tmp.handleConnectionFailed = function handleConnectionFailed(arg0) {
      if (!lib.destroyed) {
        obj.setConnectionState(closure_1_13.NO_ROUTE);
        const _HermesInternal = HermesInternal;
        obj.emit(lib(closure_1_2[6]).BaseConnectionEvent.Error, "UDP endpoint retarget failed: " + arg0);
      }
    };
    tmp.handleVideoEncoderFallback = function handleVideoEncoderFallback(arg0) {
      const lib = arg0;
      if (!lib.videoEncoderFallbackPending) {
        if (obj.overrideCodecResetAt > 0) {
          const _performance = performance;
          if (performance.now() - obj.overrideCodecResetAt < 1000) {
            const logger2 = obj.logger;
            const _HermesInternal2 = HermesInternal;
            logger2.info("Suppressing encoder fallback for " + arg0 + " (override codec reset in progress)");
          }
        }
        const logger = obj.logger;
        const _HermesInternal = HermesInternal;
        logger.info("Falling back from current video encoder: " + arg0);
        const codecs = obj.codecs;
        const mapped = codecs.map((name) => {
          let tmp2 = closure_0 === name.name;
          if (!tmp2) {
            let tmp3 = "AV1" === name.name;
            if (tmp3) {
              tmp3 = "AV1X" === tmp;
            }
            tmp2 = tmp3;
          }
          if (tmp2) {
            name.encode = false;
          }
          return name;
        });
        obj.codecs = mapped.filter((type) => {
          let tmp = "video" === type.type;
          if (tmp) {
            tmp = false === type.encode;
          }
          if (tmp) {
            tmp = false === type.decode;
          }
          return !tmp;
        });
        obj.emit(lib(closure_1_2[6]).BaseConnectionEvent.VideoEncoderFallback, obj.codecs);
        obj.videoEncoderFallbackPending = true;
      }
    };
    tmp.handleVideoDecoderFallback = function handleVideoDecoderFallback(arg0) {
      const lib = arg0;
      const videoDecoderFallbackSent = lib.videoDecoderFallbackSent;
      if (!videoDecoderFallbackSent.has(arg0)) {
        const videoDecoderFallbackSent2 = obj.videoDecoderFallbackSent;
        videoDecoderFallbackSent2.add(arg0);
        const logger = obj.logger;
        const _HermesInternal = HermesInternal;
        logger.info("Falling back from current video decoder: " + arg0);
        const codecs = obj.codecs;
        const mapped = codecs.map((name) => {
          let tmp2 = closure_0 === name.name;
          if (!tmp2) {
            let tmp3 = "AV1" === name.name;
            if (tmp3) {
              tmp3 = "AV1X" === tmp;
            }
            tmp2 = tmp3;
          }
          if (tmp2) {
            name.decode = false;
          }
          return name;
        });
        obj.codecs = mapped.filter((type) => {
          let tmp = "video" === type.type;
          if (tmp) {
            tmp = false === type.encode;
          }
          if (tmp) {
            tmp = false === type.decode;
          }
          return !tmp;
        });
        obj.emit(lib(closure_1_2[6]).BaseConnectionEvent.VideoDecoderFallback, obj.codecs);
      }
    };
    tmp.handleVideoCodecError = function handleVideoCodecError(arg0) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.VideoCodecError, arg0);
    };
    tmp.handleVideo = function handleVideo(arg0, ssrc, arg2, arr) {
      const tmp2 = closure_1_1(closure_1_2[14])(lib.videoStreamParameters);
      lib = tmp2;
      if (arg0 === lib.userId) {
        if (null != arr) {
          const _Array = Array;
          if (Array.isArray(arr)) {
            if (arr.length > 0) {
              let item = arr.forEach((arg0) => {
                closure_0 = arg0;
                const item = closure_0.forEach((rid) => {
                  if (rid.rid === rid.rid) {
                    const obj = {};
                    const merged = Object.assign(rid);
                    ({ ssrc: obj.ssrc, rtxSsrc: obj.rtxSsrc } = tmp);
                    obj.active = tmp.active;
                    rid[arg1] = obj;
                  }
                });
              });
            }
          }
        }
        if (ssrc > 0) {
          tmp2[0].active = true;
          tmp2[0].ssrc = ssrc;
          let num5 = 0;
          if (null != ssrc) {
            num5 = 0;
            if (0 !== ssrc) {
              num5 = ssrc + 1;
            }
          }
          tmp2[0].rtxSsrc = num5;
        } else {
          tmp2[0].active = false;
        }
      } else if (ssrc > 0) {
        if (undefined !== obj.remoteVideoSSRCs[arg0]) {
          if (!obj2.includes(ssrc)) {
            const items = [];
            items[HermesBuiltin.arraySpread(obj.remoteVideoSSRCs[arg0], 0)] = ssrc;
            obj.remoteVideoSSRCs[arg0] = items;
          }
          obj2 = obj.remoteVideoSSRCs[arg0];
        } else {
          const items1 = [ssrc];
          obj.remoteVideoSSRCs[arg0] = items1;
        }
      }
      lib.videoStreamParameters = tmp2;
      let tmp8 = null;
      if (null != arg2) {
        tmp8 = null;
        if ("" !== arg2) {
          tmp8 = arg2;
        }
      }
      if (arg0 === lib.userId) {
        let audioSSRC = obj.audioSSRC;
      } else {
        audioSSRC = obj.remoteAudioSSRCs[arg0];
      }
      let num7 = 0;
      if (null != ssrc) {
        num7 = 0;
        if (0 !== ssrc) {
          num7 = ssrc + 1;
        }
      }
      lib.emit(
        lib(closure_1_2[6]).BaseConnectionEvent.Video,
        arg0,
        tmp8,
        audioSSRC,
        ssrc,
        num7,
        lib.videoStreamParameters,
      );
    };
    tmp.handleFirstFrame = function handleFirstFrame(arg0) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.FirstFrame, arg0, arg1, arg2);
    };
    tmp.handleFirstFrameStats = function handleFirstFrameStats(arg0) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.FirstFrameStats, arg0);
    };
    tmp.handleFirstFrameEncryptedStats = function handleFirstFrameEncryptedStats(arg0) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.FirstFrameEncryptedStats, arg0);
    };
    tmp.handleNoInput = function handleNoInput(arg0) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.Silence, !arg0);
    };
    tmp.handleDesktopSourceEnded = function handleDesktopSourceEnded(arg0, arg1) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.DesktopSourceEnd, arg0, arg1);
    };
    tmp.handleSoundshare = function handleSoundshare(arg0) {
      if (arg0) {
        lib.soundshareActive = true;
        const conn = lib.conn;
        const obj = { encodingVoiceBitRate: null };
        const _Math = Math;
        obj[0] = Math.max(closure_1_22, lib.voiceBitrate);
        conn.setTransportOptions(obj);
        lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.SoundshareAttached);
      }
    };
    tmp.handleSoundshareFailed = function handleSoundshareFailed(failureCode, failureReason, willRetry) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.SoundshareFailed, { failureCode, failureReason, willRetry });
    };
    tmp.handleSoundshareEnded = function handleSoundshareEnded() {
      lib.soundshareActive = false;
      if (!lib.destroyed) {
        const conn = tmp.conn;
        const obj = { encodingVoiceBitRate: null };
        obj[0] = tmp.voiceBitrate;
        conn.setTransportOptions(obj);
      }
    };
    tmp.handleNewListenerNative = function handleNewListenerNative(arg0) {
      if (arg0 === lib(closure_1_2[6]).BaseConnectionEvent.ConnectionStateChange) {
        lib.emit(arg0, lib.connectionState);
      }
    };
    tmp.handleStats = function handleStats(rtp) {
      if (lib.connectionState !== closure_1_13.DISCONNECTED) {
        if (null != rtp) {
          if (null != obj.stats) {
            const tmp26 = closure_1_1(closure_1_2[15])(
              rtp.rtp.outbound,
              (lost, packetsLost) => {
                let num = packetsLost.packetsLost;
                if (num == null) {
                  num = 0;
                }
                lost.lost = lost.lost + num;
                let num2 = packetsLost.packetsSent;
                if (num2 == null) {
                  num2 = 0;
                }
                lost.sent = lost.sent + num2;
                return lost;
              },
              { lost: 0, sent: 0 },
            );
            const tmp27 = closure_1_1(closure_1_2[15])(
              obj.stats.rtp.outbound,
              (lost, packetsLost) => {
                let num = packetsLost.packetsLost;
                if (num == null) {
                  num = 0;
                }
                lost.lost = lost.lost + num;
                let num2 = packetsLost.packetsSent;
                if (num2 == null) {
                  num2 = 0;
                }
                lost.sent = lost.sent + num2;
                return lost;
              },
              { lost: 0, sent: 0 },
            );
            const diff = tmp26.sent - tmp27.sent;
            const diff1 = tmp26.lost - tmp27.lost;
            if (0 === diff) {
              obj.emit(lib(tmp25[6]).BaseConnectionEvent.OutboundLossRate, 0);
            } else if (diff > 0) {
              if (diff1 >= 0) {
                obj.emit(
                  lib(tmp25[6]).BaseConnectionEvent.OutboundLossRate,
                  100 * tmp24(tmp25[16])(diff1 / (diff + diff1), 0, 1),
                );
                const tmp6 = tmp24(tmp25[16])(diff1 / (diff + diff1), 0, 1);
              }
            }
            const outbound = rtp.rtp.outbound;
            const first = outbound.filter((type) => "audio" === type.type)[0];
            const outbound1 = obj.stats.rtp.outbound;
            const first1 = outbound1.filter((type) => "audio" === type.type)[0];
            if (null != first) {
              if (null != first1) {
                if (null != first.framesCaptured) {
                  if (null != first1.framesCaptured) {
                    const diff2 = first.framesCaptured - first1.framesCaptured;
                    let tmp13 = diff2;
                    if (null != first.noiseCancellerFrames) {
                      let num3 = 0;
                      if (null != first1.noiseCancellerFrames) {
                        num3 = first.noiseCancellerFrames - first1.noiseCancellerFrames;
                      }
                      tmp13 = num3;
                    }
                    if (!obj2.supportsFeature(closure_1_18.KRISP_NATIVE_ERROR)) {
                      if (obj.noiseCancellation) {
                        if (tmp13 > 50) {
                          if (null != first.noiseCancellerProcessTime) {
                            if (null != first1.noiseCancellerProcessTime) {
                              const diff3 = first.noiseCancellerProcessTime - first1.noiseCancellerProcessTime;
                              if (diff3 / tmp13 > 8) {
                                obj.emit(
                                  tmp14(tmp25[6]).BaseConnectionEvent.NoiseCancellationError,
                                  closure_1_19.KRISP_CPU_OVERUSE,
                                );
                              } else if (0 === diff3) {
                                obj.emit(
                                  tmp14(tmp25[6]).BaseConnectionEvent.NoiseCancellationError,
                                  closure_1_19.KRISP_FAILED,
                                );
                              }
                            }
                          }
                        }
                      }
                      if (obj.inputMode === closure_1_12.VOICE_ACTIVITY) {
                        if (obj.vadAutoThreshold) {
                          if (obj.vadUseKrisp) {
                            if (diff2 > 50) {
                              if (null != first.voiceActivityDetectorProcessTime) {
                                if (null != first1.voiceActivityDetectorProcessTime) {
                                  if (
                                    (first.voiceActivityDetectorProcessTime - first1.voiceActivityDetectorProcessTime) /
                                      diff2 >
                                    4
                                  ) {
                                    obj.emit(
                                      tmp14(tmp25[6]).BaseConnectionEvent.VoiceActivityDetectorError,
                                      closure_1_19.KRISP_VAD_CPU_OVERUSE,
                                    );
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    obj2 = lib(tmp25[4]);
                  }
                }
              }
            }
            tmp24 = closure_1_1;
          }
          obj.stats = rtp;
        }
      } else {
        obj.off(lib(closure_1_2[6]).BaseConnectionEvent.Stats, obj.handleStats);
      }
    };
    tmp.handleMLSFailure = function handleMLSFailure(arg0, arg1) {
      lib.emit(lib(closure_1_2[6]).BaseConnectionEvent.MLSFailure, arg0, arg1);
    };
    tmp.videoSupported = importDefault;
    logger = new require("log").Logger("Connection(" + global + ")");
    tmp.logger = logger;
    logger = tmp.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    return tmp;
  }
  destroy() {
    self = this;
    self = this;
    flag = global;
    if (global === undefined) {
      flag = false;
    }
    conn = self.conn;
    destroyResult = conn.destroy(flag);
    keys = Object.keys(self.localSpeakingFlags);
    found = keys.filter((arg0) => arg0 !== self.userId);
    item = found.forEach((arg0) =>
      self.emit(
        self(closure_1_2[6]).BaseConnectionEvent.Speaking,
        arg0,
        closure_1_16.NONE,
        self.remoteAudioSSRCs[arg0],
      ),
    );
    setConnectionStateResult = self.setConnectionState(ConnectionStates.DISCONNECTED);
    destroyResult1 = super.destroy();
    return;
  }
}
const prototype = Connection.prototype;
Connection["create"] = function create(arg0, _0, arg2, videoSupported) {
  const obj = new Connection(arg0, _0, videoSupported);
  obj.initialize(arg2);
  return obj;
};
Connection["createReplay"] = function createReplay(arg0, arg1) {
  const _require = arg0;
  let obj = new Connection(arg0, "0", true);
  voiceEngine = _require(voiceEngine[4]).getVoiceEngine();
  obj = { type: constants2.VIDEO, rid: "100", ssrc: 0, rtxSsrc: 0, quality: 100, active: false };
  let items = [obj];
  const result = obj.initializeStreamParameters(items);
  const replayConnection = voiceEngine.createReplayConnection(
    "default",
    () => {
      obj.on(callback(voiceEngine[6]).BaseConnectionEvent.Stats, obj.handleStats);
      let conn = obj.conn;
      conn.setOnVideoCallback(obj.handleVideo);
      const codecCapabilities = voiceEngine.getCodecCapabilities((arg0) => {
        closure_1_0(closure_1_2[7]);
        obj = videoSupported;
        obj = { type: "audio", name: closure_1_14.OPUS, priority: 1, payloadType: 120 };
        const items = [obj];
        if (videoSupported.videoSupported) {
          const tmpResult = closure_1_0(closure_1_2[7]);
          let mapped = closure_1_0(closure_1_2[7])
            .filterVideoCodecs(arg0, tmp4)
            .map((name) => {
              const sum = 101 + 2 * arg1;
              return {
                type: "video",
                name: name.name,
                priority: arg1 + 1,
                payloadType: sum,
                rtxPayloadType: sum + 1,
                encode: name.encode,
                decode: name.decode,
              };
            });
          const filterVideoCodecsResult = closure_1_0(closure_1_2[7]).filterVideoCodecs(arg0, tmp4);
        } else {
          mapped = [];
        }
        HermesBuiltin.arraySpread(mapped, 1);
        obj.codecs = items;
        obj.setCodecs(closure_1_14.OPUS, closure_1_14.H264, closure_0);
        const conn = obj.conn;
        conn.startReplay();
      });
    },
    arg1,
  );
  let tmp3 = null;
  if (null != replayConnection) {
    obj.conn = replayConnection;
    tmp3 = obj;
  }
  return tmp3;
};
prototype["initialize"] = function initialize(address) {
  let self = this;
  self = this;
  closure_1 = address;
  let logger = this.logger;
  logger.info("Creating connection to " + address.address + ":" + address.port + " with audio ssrc: " + address.ssrc);
  this.beginInitializeAt = performance.now();
  ({ ssrc: this.audioSSRC, streamUserId: this.streamUserId } = address);
  let result = this.initializeStreamParameters(address.streamParameters);
  let items = [
    {
      type: constants2.AUDIO,
      ssrc: this.audioSSRC,
      rid: "",
      maxBitrate: 64000,
      soundshare: this.context === constants5.STREAM,
    },
    ...this.videoStreamParameters,
  ];
  address.streamParameters = items;
  address.context = this.context;
  const voiceEngine = createVoiceConnection(1910).getVoiceEngine();
  if (null != voiceEngine.createOwnStreamConnectionWithOptions) {
    if (self.context !== tmp3.STREAM) {
      const createVoiceConnectionWithOptions = voiceEngine.createVoiceConnectionWithOptions;
    }
    const createOwnStreamConnectionWithOptions = voiceEngine.createOwnStreamConnectionWithOptions;
  } else {
    if (null != voiceEngine.createOwnStreamConnection) {
      if (self.context === tmp3.STREAM) {
        if (self.streamUserId === self.userId) {
          createVoiceConnection = voiceEngine.createOwnStreamConnection;
        }
        let fn = function s(arg0, ssrc) {
          return createVoiceConnection(
            ssrc.ssrc,
            self.userId,
            ssrc.address,
            ssrc.port,
            arg2,
            ssrc.experiments,
            ssrc.streamParameters,
          );
        };
      }
      createVoiceConnection = voiceEngine.createVoiceConnection;
    } else {
      fn = function s(userId, ssrc, arg2) {
        const voiceConnection = new voiceEngine.VoiceConnection(
          ssrc.ssrc,
          userId,
          ssrc.address,
          ssrc.port,
          arg2,
          ssrc.experiments,
          ssrc.streamParameters,
        );
        return voiceConnection;
      };
    }
    const fnResult = fn(self.userId, address, (arg0, transportInfo) => {
      if (!self.destroyed) {
        if (null != arg0) {
          if ("" !== arg0) {
            obj.setConnectionState(closure_1_13.NO_ROUTE);
            obj.emit(createVoiceConnection(fnResult[6]).BaseConnectionEvent.Error, arg0);
          }
        }
        if (null == transportInfo) {
          const _Error = Error;
          error = new Error("Invalid transport info");
          throw error;
        } else {
          obj.transportInfo = transportInfo;
          const protocol = transportInfo.protocol;
          address = transportInfo.address;
          const port = transportInfo.port;
          let logger = obj.logger;
          const _HermesInternal = HermesInternal;
          logger.info("Connected with local address " + address + ":" + port + " and protocol: " + protocol);
          const _performance = performance;
          obj.onConnectCallbackAt = performance.now();
          const codecCapabilities = voiceEngine.getCodecCapabilities((arg0) => {
            closure_1_4.onVideoCodecsCallbackAt = performance.now();
            let logger = closure_1_4.logger;
            logger.info("Available engine codecs: " + JSON.stringify(arg0));
            let obj = createVoiceConnection(fnResult[7]);
            const experimentCodecs = obj.getExperimentCodecs(closure_1_4.experimentFlags);
            const logger2 = closure_1_4.logger;
            logger2.info("Experimental codecs: " + JSON.stringify(experimentCodecs));
            const parseNativeCodecsResult = createVoiceConnection(fnResult[7]).parseNativeCodecs(arg0);
            obj = { type: "audio", name: closure_2_14.OPUS, priority: 1, payloadType: 120 };
            let items = [obj];
            if (closure_1_4.videoSupported) {
              let result = createVoiceConnection(fnResult[7]).filterParsedVideoCodecs(
                parseNativeCodecsResult,
                experimentCodecs,
                tmp7,
              );
              let mapped = result.map((name) => {
                const sum = 101 + 2 * arg1;
                return {
                  type: "video",
                  name: name.name,
                  priority: arg1 + 1,
                  payloadType: sum,
                  rtxPayloadType: sum + 1,
                  encode: name.encode,
                  decode: name.decode,
                };
              });
              const tmp3Result = createVoiceConnection(fnResult[7]);
            } else {
              mapped = [];
            }
            HermesBuiltin.arraySpread(mapped, 1);
            closure_1_4.codecs = items;
            const map = new Map(
              parseNativeCodecsResult.map((arg0) => {
                const items = [,];
                ({ name: arr[0], encode: arr[1] } = arg0);
                return items;
              }),
            );
            codecs = tmp.codecs;
            closure_1_4.initialCodecs = codecs.map((type) => {
              const obj = {};
              const merged = Object.assign(type);
              if ("video" === type.type) {
                let encode2 = map.get(type.name);
                if (encode2 == null) {
                  encode2 = type.encode;
                }
                let encode = encode2;
              } else {
                encode = type.encode;
              }
              obj.encode = encode;
              return obj;
            });
            ({ logger: logger3, codecs } = closure_1_4);
            const found = codecs.filter((type) => "audio" === type.type);
            logger3.info("Audio codecs: " + found.map((name) => name.name));
            ({ logger: logger4, codecs: codecs2 } = closure_1_4);
            const found1 = codecs2.filter((type) => "video" === type.type);
            logger4.info(
              "Video codecs: " +
                found1.map((name) => name.name + "[encode: " + name.encode + ", decode: " + name.decode + "]"),
            );
            const encryptionModes = port.getEncryptionModes((arg0) => {
              let obj = closure_1_4;
              closure_1_4.onEncryptionModesCallbackAt = performance.now();
              let logger = closure_1_4.logger;
              logger.info("Encryption modes: " + arg0);
              closure_1_2.setTransportOptions(closure_1_4.getConnectionTransportOptions());
              let selfMute = closure_1_4.selfMute;
              if (!selfMute) {
                selfMute = obj.context === closure_2_15.STREAM;
              }
              closure_1_2.setSelfMute(selfMute);
              closure_1_2.setSelfDeafen(obj.selfDeaf);
              const result = obj2.setOnSpeakingCallback(obj.handleSpeakingNative);
              if (closure_1_2.setOnNativeMuteChangedCallback != null) {
                const result1 = setOnNativeMuteChangedCallback(obj.handleNativeMuteChanged);
              }
              if (closure_1_2.setOnSpeakingWhileMutedCallback != null) {
                const result2 = setOnSpeakingWhileMutedCallback(obj.handleSpeakingWhileMuted);
              }
              const setPingInterval = obj2.setPingInterval;
              if (setPingInterval != null) {
                setPingInterval(closure_2_27);
              }
              closure_1_2.setPingCallback(obj.handlePing);
              if (closure_1_2.setPingTimeoutCallback != null) {
                const result3 = setPingTimeoutCallback(obj.handlePingTimeout);
              }
              if (closure_1_2.setOnVideoEncoderFallbackCallback != null) {
                const result4 = setOnVideoEncoderFallbackCallback(obj.handleVideoEncoderFallback);
              }
              if (closure_1_2.setOnVideoDecoderFallbackCallback != null) {
                const result5 = setOnVideoDecoderFallbackCallback(obj.handleVideoDecoderFallback);
              }
              if (closure_1_2.setVideoCodecErrorCallback != null) {
                const result6 = setVideoCodecErrorCallback(obj.handleVideoCodecError);
              }
              obj = {
                builtInEchoCancellation: true,
                echoCancellation: obj.echoCancellation,
                noiseSuppression: obj.noiseSuppression,
                automaticGainControl: obj.automaticGainControl.enabled,
                automaticGainControlConfig: obj.automaticGainControl,
                noiseCancellation: obj.noiseCancellation,
                noiseCancellationDuringProcessing: obj.noiseCancellationDuringProcessing,
                noiseCancellationConsecutiveFailures: obj.noiseCancellationConsecutiveFailures,
              };
              closure_1_3.setTransportOptions(obj);
              closure_1_3.setNoInputThreshold(-100);
              closure_1_3.setNoInputCallback(obj.handleNoInput);
              if (obj.videoSupported) {
                obj2.setOnVideoCallback(obj.handleVideo);
                if (obj2.setOnFirstFrameCallback != null) {
                  const result7 = setOnFirstFrameCallback(obj.handleFirstFrame);
                }
                if (obj2.setOnFirstFrameDeliveredStatsCallback != null) {
                  const result8 = setOnFirstFrameDeliveredStatsCallback(obj.handleFirstFrameStats);
                }
                if (obj2.setOnFirstFrameEncryptedStatsCallback != null) {
                  const result9 = setOnFirstFrameEncryptedStatsCallback(obj.handleFirstFrameEncryptedStats);
                }
                const setOnDesktopSourceEnded = obj2.setOnDesktopSourceEnded;
                if (setOnDesktopSourceEnded != null) {
                  const result10 = setOnDesktopSourceEnded(obj.handleDesktopSourceEnded);
                }
                const setOnSoundshare = obj2.setOnSoundshare;
                if (setOnSoundshare != null) {
                  setOnSoundshare(obj.handleSoundshare);
                }
                const setOnSoundshareEnded = obj2.setOnSoundshareEnded;
                if (setOnSoundshareEnded != null) {
                  setOnSoundshareEnded(obj.handleSoundshareEnded);
                }
                const setOnSoundshareFailed = obj2.setOnSoundshareFailed;
                if (setOnSoundshareFailed != null) {
                  const result11 = setOnSoundshareFailed(obj.handleSoundshareFailed);
                }
              }
              if (closure_1_2.setOnMLSFailureCallback != null) {
                const result12 = setOnMLSFailureCallback(obj.handleMLSFailure);
              }
              obj.setConnectionState(closure_2_13.CONNECTED);
              obj = {
                address: closure_1,
                port: closure_2,
                mode: obj.chooseEncryptionMode(closure_1_1.modes, arg0),
                codecs: obj.codecs,
              };
              obj.emit(protocol(port[6]).BaseConnectionEvent.Connected, map, obj);
              obj.on(protocol(port[6]).BaseConnectionEvent.Stats, obj.handleStats);
              const userOptions = obj.getUserOptions();
              const item = userOptions.forEach((arg0) => {
                logger = logger.logger;
                ({ id, ssrc, videoSsrcs } = arg0);
                let num;
                if (videoSsrcs != null) {
                  num = videoSsrcs.join(",");
                }
                if (num == null) {
                  num = 0;
                }
                return logger.info("Creating user: " + id + " with audio SSRC: " + ssrc + " and video SSRCs: " + num);
              });
              obj.mergeUsers(userOptions);
              obj.emit(protocol(port[6]).BaseConnectionEvent.RemoteStreamsReady, userOptions.length);
              const keys = Object.keys(obj.localSpeakingFlags);
              for (const item10173 of keys) {
                let tmp52 = item10173;
                let obj5 = closure_1_4;
                if (item10173 !== closure_1_4.userId) {
                  let tmp53 = closure_1_4;
                  let tmp54 = item10173;
                  let setSpeakingFlagsResult = obj5.setSpeakingFlags(tmp52, obj5.localSpeakingFlags[tmp52]);
                }
                continue;
              }
            });
          });
        }
      }
    });
    self.conn = fnResult;
    dependencyMap = fnResult;
    if (fnResult.setOnConnectionFailedCallback != null) {
      let result1 = setOnConnectionFailedCallback(self.handleConnectionFailed);
    }
    if (fnResult.setSecureFramesStateUpdateCallback != null) {
      let result2 = setSecureFramesStateUpdateCallback((arg0) => {
        const logger = self.logger;
        logger.info("DAVE protocol state update: " + JSON.stringify(arg0));
        self.emit(createVoiceConnection(fnResult[6]).BaseConnectionEvent.SecureFramesUpdate, arg0);
      });
    }
    if (fnResult.setDesktopSourceStatusCallback != null) {
      let result3 = setDesktopSourceStatusCallback((type) => {
        if ("videohook_start" === type.type) {
          self.emit(createVoiceConnection(fnResult[6]).BaseConnectionEvent.VideoHookStart);
        } else if ("videohook_stop" === type.type) {
          self.emit(createVoiceConnection(fnResult[6]).BaseConnectionEvent.VideoHookStop);
        } else if ("videohook_initialize" === type.type) {
          self.emit(
            createVoiceConnection(fnResult[6]).BaseConnectionEvent.VideoHookInitialize,
            type.backend,
            type.format,
            type.framebufferFormat,
            type.sampleCount,
            type.success,
            type.reinitialization,
          );
        } else if ("screenshare_finish" === type.type) {
          const ScreenshareFinish = createVoiceConnection(fnResult[6]).BaseConnectionEvent.ScreenshareFinish;
          ({
            screenshareFrames,
            videohookFrames,
            hybridDxgiFrames,
            hybridGdiFrames,
            hybridVideohookFrames,
            hybridGraphicsCaptureFrames,
            hybridCaptureMethodSwitches,
            hybridGdiBitBltFrames,
            hybridGdiPrintWindowFrames,
            hybridGraphicsCaptureFramesUnique,
            hybridDxgiFramesUnique,
            hybridVideohookFramesUnique,
            hybridGdiBitBltFramesUnique,
            hybridGdiPrintWindowFramesUnique,
            skipHistoryJson,
            quartzFrames,
            desktopCapturerType,
          } = type);
          if (desktopCapturerType == null) {
            desktopCapturerType = type.desktop_capturer_type;
          }
          self.emit(
            ScreenshareFinish,
            screenshareFrames,
            videohookFrames,
            hybridDxgiFrames,
            hybridGdiFrames,
            hybridVideohookFrames,
            hybridGraphicsCaptureFrames,
            hybridCaptureMethodSwitches,
            hybridGdiBitBltFrames,
            hybridGdiPrintWindowFrames,
            hybridGraphicsCaptureFramesUnique,
            hybridDxgiFramesUnique,
            hybridVideohookFramesUnique,
            hybridGdiBitBltFramesUnique,
            hybridGdiPrintWindowFramesUnique,
            skipHistoryJson,
            quartzFrames,
            desktopCapturerType,
            type.activity,
            type.goLiveCameraFrames,
            type.screenCaptureKitFrames,
            type.hdrFramesCapable,
            type.hdrFrames,
            type.targetWindowElevated,
            type.pipewireFrames,
            type.x11Frames,
            type.videohookBackend,
          );
          const tmp9 = self;
        } else if ("video_state" === type.type) {
          self.emit(createVoiceConnection(fnResult[6]).BaseConnectionEvent.VideoState, type.state);
        } else {
          type = type.type;
          if (type.startsWith("soundshare_")) {
            self.emit(createVoiceConnection(fnResult[6]).BaseConnectionEvent.SoundshareTrace, type);
          }
        }
      });
    }
    self.on("newListener", self.handleNewListenerNative);
  }
};
prototype["setCodecs"] = function setCodecs(OPUS, H264, closure_0) {
  const self = this;
  this.currentVideoCodec = H264;
  if (this.currentVideoCodec !== H264) {
    if (null != self.lastDesktopEncodingOptions) {
      const lastDesktopEncodingOptions = self.lastDesktopEncodingOptions;
      const result = self.setDesktopEncodingOptions(
        lastDesktopEncodingOptions.width,
        lastDesktopEncodingOptions.height,
        lastDesktopEncodingOptions.framerate,
      );
    }
  }
  const conn = self.conn;
  conn.setTransportOptions(self.getCodecOptions(OPUS, H264, closure_0));
  if (self.videoEncoderFallbackPending) {
    self.videoEncoderFallbackPending = false;
  }
};
prototype["getStats"] = function getStats() {
  const self = this;
  if (this.connectionState === constants4.DISCONNECTED) {
    let resolved = Promise.resolve(null);
  } else {
    const promise = new Promise((arg0) => {
      const _self = arg0;
      if (null != _self.conn.getFilteredStats) {
        const conn2 = tmp.conn;
        const filteredStats = conn2.getFilteredStats(closure_1_4.ALL, (arg0) =>
          lib(
            closure_2_1(closure_2_2[9])(
              lib.mediaEngineConnectionId,
              arg0,
              lib.remoteVideoSinkWants,
              lib.localVideoSinkWants,
            ),
          ),
        );
      } else if (null != tmp.conn.getStats) {
        const conn = tmp.conn;
        const stats = conn.getStats((arg0) =>
          lib(
            closure_2_1(closure_2_2[9])(
              lib.mediaEngineConnectionId,
              arg0,
              lib.remoteVideoSinkWants,
              lib.localVideoSinkWants,
            ),
          ),
        );
      } else {
        const voiceEngine = self(closure_1_2[4]).getVoiceEngine();
        const stats1 = voiceEngine.getStats((arg0) =>
          lib(
            closure_2_1(closure_2_2[9])(
              lib.mediaEngineConnectionId,
              arg0,
              lib.remoteVideoSinkWants,
              lib.localVideoSinkWants,
            ),
          ),
        );
        const obj = self(closure_1_2[4]);
      }
    });
    let obj = self(4676);
    resolved = self(4676)
      .timeout(promise, self(4625).STATS_INTERVAL)
      .catch((arg0) => {
        if (!(arg0 instanceof self(table[8]).TimeoutError)) {
          throw arg0;
        }
      });
    const timeoutResult = self(4676).timeout(promise, self(4625).STATS_INTERVAL);
  }
  return resolved;
};
prototype["createUser"] = function createUser(hasItem) {
  const self = this;
  if (null != this.remoteAudioSSRCs[hasItem]) {
    if (0 === arg1) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Ignoring attempt to recreate user " + hasItem + " with 0 audio SSRC");
    }
  }
  if (undefined !== this.remoteVideoSSRCs[hasItem]) {
    const items = [];
    HermesBuiltin.arraySpread(tmp2, 0);
    let sorted = items.sort();
  } else {
    sorted = [];
  }
  if (undefined === arg2) {
    let items1 = sorted;
    if (sorted == null) {
      items1 = [];
    }
    let sorted1 = items1;
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(arg2, 0);
    sorted1 = items2.sort();
  }
  self.remoteAudioSSRCs[hasItem] = arg1;
  let items3 = sorted1;
  if (sorted1 == null) {
    items3 = [];
  }
  self.remoteVideoSSRCs[hasItem] = items3;
  if (self.userId !== hasItem) {
    if (tmp !== arg1) {
      let num5 = 0;
      if (undefined !== sorted1) {
        num5 = 0;
        if (sorted1.length > 0) {
          num5 = sorted1[0];
        }
      }
      const obj = { id: null, ssrc: null, videoSsrc: null, videoSsrcs: null, rtxSsrc: null, mute: null, volume: null };
      obj[0] = hasItem;
      obj[1] = arg1;
      obj[2] = num5;
      obj[3] = sorted1;
      let num6 = 0;
      if (null != num5) {
        num6 = 0;
        if (0 !== num5) {
          num6 = num5 + 1;
        }
      }
      obj[4] = num6;
      obj[5] = self.getLocalMute(hasItem);
      obj[6] = self.getLocalVolume(hasItem);
      if (self.connectionState === constants4.CONNECTED) {
        const logger2 = self.logger;
        let num8;
        if (sorted1 != null) {
          num8 = sorted1.join(",");
        }
        if (num8 == null) {
          num8 = 0;
        }
        const _HermesInternal2 = HermesInternal;
        logger2.info("Creating user: " + hasItem + " with audio SSRC: " + arg1 + " and video SSRCs: " + num8);
        const items4 = [obj];
        self.mergeUsers(items4);
      }
      const rect = self.localPans[hasItem];
      if (null != rect) {
        self.setLocalPan(hasItem, rect.left, rect.right);
      }
      let tmp21 = null != tmp20;
      if (tmp21) {
        tmp21 = tmp20 !== constants6.NONE;
      }
      if (tmp21) {
        self.setSpeakingFlags(hasItem, tmp20);
      }
    }
  }
};
prototype["destroyUser"] = function destroyUser(arg0) {
  const self = this;
  if (null != this.remoteAudioSSRCs[arg0]) {
    const conn = self.conn;
    conn.destroyUser(arg0);
    const remoteAudioSSRCs = self.remoteAudioSSRCs;
    delete tmp3[tmp2];
    const remoteVideoSSRCs = self.remoteVideoSSRCs;
    delete tmp[tmp2];
  }
};
prototype["setSelfMute"] = function setSelfMute(selfMute) {
  this.selfMute = selfMute;
  const conn = this.conn;
  conn.setSelfMute(selfMute);
  this.emit(BaseConnectionEvent.BaseConnectionEvent.Mute, selfMute);
};
prototype["getSelfMute"] = function getSelfMute() {
  return this.selfMute;
};
prototype["getSelfDeaf"] = function getSelfDeaf() {
  return this.selfDeaf;
};
prototype["setSelfDeaf"] = function setSelfDeaf(deaf) {
  this.selfDeaf = deaf;
  const conn = this.conn;
  conn.setSelfDeafen(deaf);
  this.emit(BaseConnectionEvent.BaseConnectionEvent.Deafen, deaf);
};
prototype["setSoundshareSource"] = function setSoundshareSource(arg0, arg1) {
  const self = this;
  let num = arg0;
  if (this.soundshareId !== arg0) {
    if (self.context === constants5.STREAM) {
      self.soundshareId = num;
      self.soundshareSentSpeakingEvent = false;
      if (null === num) {
        num = 0;
      }
      const conn = self.conn;
      const obj = { soundsharePid: null, soundshareEventDriven: true, soundshareLoopback: null };
      obj[0] = num;
      obj[2] = arg1;
      conn.setTransportOptions(obj);
    }
  }
};
prototype["setLocalMute"] = function setLocalMute(closure_0, flag) {
  this.localMutes[closure_0] = flag;
  const conn = this.conn;
  conn.setLocalMute(closure_0, flag);
  this.emit(BaseConnectionEvent.BaseConnectionEvent.LocalMute, closure_0, flag);
};
prototype["setUserPosition"] = function setUserPosition(item10006, closure_1_13) {
  const conn = this.conn;
  const setUserPosition = conn.setUserPosition;
  if (setUserPosition != null) {
    setUserPosition(item10006, closure_1_13);
  }
};
prototype["fastUdpReconnect"] = function fastUdpReconnect() {
  const self = this;
  if (null != this.conn.fastUdpReconnect) {
    self.numFastUdpReconnects = self.numFastUdpReconnects + 1;
    const conn = self.conn;
    conn.fastUdpReconnect();
  }
};
prototype["setUdpEndpoint"] = function setUdpEndpoint(address, address) {
  const conn = this.conn;
  const setUdpEndpoint = conn.setUdpEndpoint;
  if (setUdpEndpoint != null) {
    address = undefined;
    if (address != null) {
      address = address.address;
    }
    if (address == null) {
      address = null;
    }
    let num;
    if (address != null) {
      num = address.port;
    }
    if (num == null) {
      num = 0;
    }
    setUdpEndpoint(address, num);
  }
};
prototype["getNumFastUdpReconnects"] = function getNumFastUdpReconnects() {
  let numFastUdpReconnects = null;
  if (null != this.conn.fastUdpReconnect) {
    numFastUdpReconnects = this.numFastUdpReconnects;
  }
  return numFastUdpReconnects;
};
prototype["wasRemoteDisconnected"] = function wasRemoteDisconnected() {
  const conn = this.conn;
  const wasRemoteDisconnected = conn.wasRemoteDisconnected;
  if (wasRemoteDisconnected != null) {
    const result = wasRemoteDisconnected();
  }
};
prototype["setLocalVideoDisabled"] = function setLocalVideoDisabled(arg0, arg1) {
  this.disabledLocalVideos[arg0] = arg1;
  this.emit(BaseConnectionEvent.BaseConnectionEvent.LocalVideoDisabled, arg0, arg1);
};
prototype["setMinimumJitterBufferLevel"] = function setMinimumJitterBufferLevel(minimumJitterBufferLevel) {
  this.minimumJitterBufferLevel = minimumJitterBufferLevel;
};
prototype["setPostponeDecodeLevel"] = function setPostponeDecodeLevel(postponeDecodeLevel) {
  this.postponeDecodeLevel = postponeDecodeLevel;
};
prototype["setClipRecordUser"] = function setClipRecordUser(arg0, arg1, arg2) {
  const self = this;
  if (!this.destroyed) {
    let str = "soundboardAudio";
    if ("soundboard" !== arg1) {
      let str3 = "user";
      if (self.context === constants5.STREAM) {
        str3 = "application";
      }
      let str4 = "Video";
      if ("audio" === arg1) {
        str4 = "Audio";
      }
      str = str3.concat(str4);
    }
    const conn = self.conn;
    const setClipRecordUser = conn.setClipRecordUser;
    if (setClipRecordUser != null) {
      setClipRecordUser(arg0, str, arg2);
    }
  }
};
prototype["setRemoteAudioHistory"] = function setRemoteAudioHistory(remoteAudioHistoryMs) {
  const conn = this.conn;
  conn.setTransportOptions({ remoteAudioHistoryMs });
};
prototype["setQualityDecoupling"] = function setQualityDecoupling(arg0) {
  if (this.context === constants5.STREAM) {
    const conn = tmp.conn;
    const obj = { enableQualityDecoupling: null };
    obj[0] = arg0;
    conn.setTransportOptions(obj);
  }
};
prototype["getLocalVolume"] = function getLocalVolume(arg0) {
  let tmp2 = this.localVolumes[arg0];
  if (null != tmp2) {
    if (null == tmp2) {
      tmp2 = closure_20;
    }
    return tmp2 / closure_20;
  }
};
prototype["setLocalVolume"] = function setLocalVolume(arg0, arg1) {
  const self = this;
  this.localVolumes[arg0] = arg1;
  try {
    const conn = self.conn;
    conn.setLocalVolume(arg0, self.getLocalVolume(arg0));
  } catch (err) {
    const logger = tmp.logger;
    const _HermesInternal = HermesInternal;
    logger.warn("Failed to set volume for user: " + tmp3 + ": " + tmp2);
  }
};
prototype["setLocalPan"] = function setLocalPan(arg0, left, right) {
  this.localPans[arg0] = { left, right };
  const conn = this.conn;
  conn.setLocalPan(arg0, left, right);
};
prototype["isAttenuating"] = function isAttenuating() {
  return this.attenuationFactor < 1;
};
prototype["setAttenuation"] = function setAttenuation(arg0, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers) {
  this.attenuationFactor = (100 - arg0) / 100;
  this.attenuateWhileSpeakingSelf = attenuateWhileSpeakingSelf;
  this.attenuateWhileSpeakingOthers = attenuateWhileSpeakingOthers;
  const conn = this.conn;
  conn.setTransportOptions(this.getAttenuationOptions());
};
prototype["setCanHavePriority"] = function setCanHavePriority(arg0, arg1) {
  const conn = this.conn;
  const setRemoteUserCanHavePriority = conn.setRemoteUserCanHavePriority;
  if (setRemoteUserCanHavePriority != null) {
    const result = setRemoteUserCanHavePriority(arg0, arg1);
  }
};
prototype["setBitRate"] = function setBitRate(bitrate) {
  this.setVoiceBitRate(bitrate);
};
prototype["setVoiceBitRate"] = function setVoiceBitRate(voiceBitrate) {
  const self = this;
  if (this.voiceBitrate !== voiceBitrate) {
    self.voiceBitrate = voiceBitrate;
    voiceBitrate = self.voiceBitrate;
    let bound = voiceBitrate;
    if (self.soundshareActive) {
      const _Math = Math;
      bound = Math.max(closure_22, voiceBitrate);
    }
    const conn = self.conn;
    const obj = { encodingVoiceBitRate: null };
    obj[0] = bound;
    conn.setTransportOptions(obj);
  }
};
prototype["setCameraBitRate"] = function setCameraBitRate(arg0, bitrateMax) {
  const self = this;
  if (null == arg2) {
    if (null == bitrateMax) {
      const videoQualityManager = self.videoQualityManager;
      videoQualityManager.setQualityOverwrite({});
    }
    if (!self.hasDesktopSource()) {
      const conn = self.conn;
      let obj = { encodingVideoBitRate: null, encodingVideoMinBitRate: null, encodingVideoMaxBitRate: null };
      obj[0] = arg0;
      obj[1] = arg2;
      obj[2] = bitrateMax;
      conn.setTransportOptions(obj);
    }
  }
  const videoQualityManager2 = self.videoQualityManager;
  let tmp2 = bitrateMax;
  if (null != arg2) {
    tmp2 = bitrateMax;
    if (arg2 > 0) {
      tmp2 = arg2;
    }
  }
  obj = { bitrateMin: tmp2, bitrateMax };
  videoQualityManager2.setQualityOverwrite(obj);
};
prototype["setEchoCancellation"] = function setEchoCancellation(echoCancellation) {
  this.echoCancellation = echoCancellation;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { echoCancellation: this.echoCancellation };
  voiceEngine.setTransportOptions(obj);
};
prototype["setNoiseSuppression"] = function setNoiseSuppression(noiseSuppression) {
  this.noiseSuppression = noiseSuppression;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { noiseSuppression: this.noiseSuppression };
  voiceEngine.setTransportOptions(obj);
};
prototype["setAutomaticGainControl"] = function setAutomaticGainControl(automaticGainControl) {
  this.automaticGainControl = automaticGainControl;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = {
    automaticGainControl: this.automaticGainControl.enabled,
    automaticGainControlConfig: this.automaticGainControl,
  };
  voiceEngine.setTransportOptions(obj);
};
prototype["setNoiseCancellation"] = function setNoiseCancellation(noiseCancellation) {
  this.noiseCancellation = noiseCancellation;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { noiseCancellation: this.noiseCancellation };
  voiceEngine.setTransportOptions(obj);
};
prototype["setNoiseCancellationDuringProcessing"] = function setNoiseCancellationDuringProcessing(flag) {
  this.noiseCancellationDuringProcessing = flag;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing };
  voiceEngine.setTransportOptions(obj);
};
prototype["setNoiseCancellationCpuDisablement"] = function setNoiseCancellationCpuDisablement(consecutiveFailures) {
  this.noiseCancellationConsecutiveFailures = consecutiveFailures;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { noiseCancellationConsecutiveFailures: this.noiseCancellationConsecutiveFailures };
  voiceEngine.setTransportOptions(obj);
};
prototype["setSkipNoiseCancellationIfMuted"] = function setSkipNoiseCancellationIfMuted(enabled) {
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { skipNoiseCancellationIfMuted: enabled };
  voiceEngine.setTransportOptions(obj);
};
prototype["setEchoReferenceMode"] = function setEchoReferenceMode(echoReferenceMode) {
  this.echoReferenceMode = echoReferenceMode;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { echoReferenceMode: this.echoReferenceMode };
  voiceEngine.setTransportOptions(obj);
};
prototype["getNoiseCancellation"] = function getNoiseCancellation() {
  return this.noiseCancellation;
};
prototype["setQoS"] = function setQoS(qos) {
  this.qos = qos;
  const conn = this.conn;
  conn.setTransportOptions({ qos: this.qos });
};
prototype["setSoundshareDiscardRearChannels"] = function setSoundshareDiscardRearChannels(closure_0) {
  const conn = this.conn;
  conn.setTransportOptions({ soundshareDiscardRearChannels: closure_0 });
};
prototype["setInputMode"] = function setInputMode(inputMode, pttReleaseDelay) {
  const self = this;
  this.inputMode = inputMode;
  if (constants3.PUSH_TO_TALK === inputMode) {
    self.pttReleaseDelay = pttReleaseDelay.pttReleaseDelay;
  } else if (tmp.VOICE_ACTIVITY === inputMode) {
    ({
      vadThreshold: self.vadThreshold,
      vadAutoThreshold: self.vadAutoThreshold,
      vadUseKrisp: self.vadUseKrisp,
      vadLeading: self.vadLeading,
      vadTrailing: self.vadTrailing,
      vadKrispActivationThreshold: self.vadKrispActivationThreshold,
    } = pttReleaseDelay);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unknown Input Mode: " + inputMode);
    throw error;
  }
  const conn = self.conn;
  conn.setTransportOptions({
    inputMode: dependencyMap[self.inputMode],
    inputModeOptions: self.createInputModeOptions(),
  });
};
prototype["setSilenceThreshold"] = function setSilenceThreshold(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  voiceEngine.setNoInputThreshold(arg0);
};
prototype["setForceAudioInput"] = function setForceAudioInput(closure_0, flag, arg2) {
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  const conn = this.conn;
  conn.setPTTActive(closure_0, flag, flag2);
};
prototype["setSpeakingFlags"] = function setSpeakingFlags(hasItem, flag) {
  const self = this;
  if (null != this.conn.setRemoteUserSpeakingStatus) {
    const conn2 = self.conn;
    const result = conn2.setRemoteUserSpeakingStatus(hasItem, flag);
  } else if (null != self.conn.setRemoteUserSpeaking) {
    const conn = self.conn;
    const result1 = conn.setRemoteUserSpeaking(hasItem, (flag & constants6.VOICE) === constants6.VOICE);
  }
  self.handleSpeakingFlags(hasItem, flag);
};
prototype["clearAllSpeaking"] = function clearAllSpeaking() {};
prototype["setEncryption"] = function setEncryption(mode, secretKey) {
  const logger = this.logger;
  logger.info("Selected encryption mode: " + mode);
  const conn = this.conn;
  conn.setTransportOptions({ encryptionSettings: { mode, secretKey } });
};
prototype["setReconnectInterval"] = function setReconnectInterval(reconnectInterval) {
  this.reconnectInterval = reconnectInterval;
  const conn = this.conn;
  conn.setTransportOptions({ reconnectInterval: this.reconnectInterval });
};
prototype["setKeyframeInterval"] = function setKeyframeInterval(keyframeInterval) {
  this.keyframeInterval = keyframeInterval;
  const conn = this.conn;
  conn.setTransportOptions({ keyframeInterval: this.keyframeInterval, alwaysSendVideo: this.keyframeInterval > 0 });
};
prototype["setVideoQualityMeasurement"] = function setVideoQualityMeasurement(videoQualityMeasurement) {
  this.videoQualityMeasurement = videoQualityMeasurement;
  const conn = this.conn;
  conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement });
};
prototype["setVideoEncoderExperiments"] = function setVideoEncoderExperiments(videoEncoderExperiments) {
  this.videoEncoderExperiments = videoEncoderExperiments;
  const conn = this.conn;
  conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments });
};
prototype["setAudioVideoOverridesTransport"] = function setAudioVideoOverridesTransport(overrideDeniedVideoCodecs) {
  const self = this;
  let someResult =
    null != overrideDeniedVideoCodecs.overrideDeniedVideoCodecs &&
    overrideDeniedVideoCodecs.overrideDeniedVideoCodecs !== self.lastOverrideCodecDenylist;
  const obj = {};
  if (someResult) {
    obj.overrideDeniedVideoCodecs = overrideDeniedVideoCodecs.overrideDeniedVideoCodecs;
  }
  if (
    null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders &&
    overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist
  ) {
    obj.overrideDeniedVideoEncoders = overrideDeniedVideoCodecs.overrideDeniedVideoEncoders;
  }
  if (
    null != overrideDeniedVideoCodecs.captureOverrides &&
    overrideDeniedVideoCodecs.captureOverrides !== self.lastCaptureOverrides
  ) {
    obj.captureOverrides = overrideDeniedVideoCodecs.captureOverrides;
  }
  let tmp4 = someResult;
  if (!someResult) {
    tmp4 = tmp2;
  }
  if (!tmp4) {
    tmp4 = tmp3;
  }
  if (tmp4) {
    const conn = self.conn;
    conn.setTransportOptions(obj);
  }
  if (someResult) {
    self.lastOverrideCodecDenylist = overrideDeniedVideoCodecs.overrideDeniedVideoCodecs;
  }
  if (
    null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders &&
    overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist
  ) {
    self.lastOverrideEncoderDenylist = overrideDeniedVideoCodecs.overrideDeniedVideoEncoders;
  }
  if (
    null != overrideDeniedVideoCodecs.captureOverrides &&
    overrideDeniedVideoCodecs.captureOverrides !== self.lastCaptureOverrides
  ) {
    self.lastCaptureOverrides = overrideDeniedVideoCodecs.captureOverrides;
  }
  let tmp6 = someResult;
  if (!someResult) {
    tmp6 = tmp2;
  }
  if (tmp6) {
    self.videoEncoderFallbackPending = false;
    const videoDecoderFallbackSent = self.videoDecoderFallbackSent;
    videoDecoderFallbackSent.clear();
  }
  if (someResult) {
    if (self.initialCodecs.length > 0) {
      let set = null;
      if (self.lastOverrideCodecDenylist.length > 0) {
        const _Set = Set;
        const parts = self.lastOverrideCodecDenylist.split(",");
        set = new Set(parts.map((str) => str.trim().toUpperCase()));
        const str = self.lastOverrideCodecDenylist;
      }
      const initialCodecs = self.initialCodecs;
      const mapped = initialCodecs.map((arg0) => {
        const merged = Object.assign(arg0);
        return {};
      });
      const found = mapped.filter((type) => {
        let tmp = "video" !== type.type;
        if (!tmp) {
          tmp = null == set;
        }
        if (!tmp) {
          tmp = "VP8" === type.name;
        }
        if (!tmp) {
          tmp = "VP9" === type.name;
        }
        if (!tmp) {
          tmp = !set.has(type.name);
        }
        return tmp;
      });
      const _Set2 = Set;
      const codecs = self.codecs;
      const found1 = codecs.filter((type) => "video" === type.type && type.encode);
      const set1 = new Set(found1.map((name) => name.name));
      const _Set3 = Set;
      const found2 = found.filter((type) => "video" === type.type && type.encode);
      const set2 = new Set(found2.map((name) => name.name));
      const items = [];
      HermesBuiltin.arraySpread(set1, 0);
      self.codecs = found;
      if (someResult) {
        someResult = items.some((arg0) => !set2.has(arg0));
      }
      if (someResult) {
        const _performance = performance;
        self.overrideCodecResetAt = performance.now();
      }
      self.emit(set(4615).BaseConnectionEvent.VideoEncoderFallback, self.codecs);
    }
  }
};
prototype["setVideoBroadcast"] = function setVideoBroadcast(self) {
  self = this;
  if (this.selfVideo !== self) {
    self.selfVideo = self;
    const result = self.applyVideoTransportOptions();
  }
};
prototype["setGoLiveSource"] = function setGoLiveSource(quality) {
  let result3 = quality;
  ({ resolution, frameRate } = quality.quality);
  if (resolution <= 480) {
    let result = (resolution / 3) * 4;
  } else {
    result = (resolution / 9) * 16;
  }
  if (null != result3.desktopDescription) {
    id = result3.desktopDescription.id;
  } else {
    id = null;
    if (null != result3.cameraDescription) {
      const _HermesInternal = HermesInternal;
      let str = ":";
      let str2 = "";
      id = "" + result3.cameraDescription.videoDeviceGuid + ":" + result3.cameraDescription.audioDeviceGuid;
    }
  }
  const self = this;
  if (this.goLiveSourceIdentifier !== id) {
    self.goLiveSourceIdentifier = id;
    if (null != self.conn.setDesktopSource) {
      if (null != result3.desktopDescription) {
        const desktopDescription = result3.desktopDescription;
        ({
          id,
          useVideoHook,
          useGraphicsCaptureApiLevel,
          useCaptureDeviceForEncode,
          useGraphicsCapture,
          useHookFramePacer,
          useQuartzCapturer,
          allowScreenCaptureKit,
          videoHookStaleFrameTimeoutMs,
          graphicsCaptureStaleFrameTimeoutMs,
          hdrCaptureMode,
          enableGlobalFramePoolLock,
          useGraphicsCaptureDirtyRegions,
          videoHookAllowDx12,
          minCaptureWidth,
          minCaptureHeight,
        } = desktopDescription);
        self.setSoundshareSource(desktopDescription.soundshareId, desktopDescription.useLoopback);
        if (null != id) {
          let str3 = ":";
          let parts = id.split(":");
        } else {
          parts = ["", ""];
        }
        [tmp9, tmp10] = callback(parts, 2);
        if (null != id) {
          const logger2 = self.logger;
          str = useVideoHook.toString();
          let str1;
          if (useGraphicsCapture != null) {
            str1 = useGraphicsCapture.toString();
          }
          str2 = undefined;
          if (useGraphicsCaptureApiLevel != null) {
            str2 = useGraphicsCaptureApiLevel.toString();
          }
          str3 = undefined;
          if (useCaptureDeviceForEncode != null) {
            str3 = useCaptureDeviceForEncode.toString();
          }
          const _HermesInternal2 = HermesInternal;
          logger2.info(
            "capturing desktop (type: " +
              tmp9 +
              ", handle: " +
              tmp10 +
              ", use-video-hook: " +
              str +
              ", use-graphics-capture: " +
              str1 +
              ", use-graphics-capture-api-level: " +
              str2 +
              ", use-capture-device-for-encode: " +
              str3 +
              ").",
          );
        } else {
          const logger = self.logger;
          logger.info("capturing desktop (type: <stop>).");
        }
        if (null != self.conn.setDesktopSourceWithOptions) {
          if (null != id) {
            const result1 = self.setDesktopEncodingOptions(result, resolution, frameRate);
            const conn3 = self.conn;
            let obj = {
              type: null,
              sourceId: null,
              useVideoHook: null,
              useHookFramePacer: null,
              useGraphicsCapture: null,
              useGraphicsCaptureApiLevel: null,
              useCaptureDeviceForEncode: null,
              useQuartzCapturer: null,
              allowScreenCaptureKit: null,
              videoHookStaleFrameTimeoutMs: null,
              graphicsCaptureStaleFrameTimeoutMs: null,
              hdrCaptureMode: null,
              enableGlobalFramePoolLock: null,
              useGraphicsCaptureDirtyRegions: null,
              videoHookAllowDx12: null,
              minCaptureWidth: null,
              minCaptureHeight: null,
            };
            obj[0] = tmp9;
            obj[1] = tmp10;
            obj[2] = useVideoHook;
            obj[3] = useHookFramePacer;
            obj[4] = useGraphicsCapture;
            obj[5] = useGraphicsCaptureApiLevel;
            obj[6] = useCaptureDeviceForEncode;
            obj[7] = useQuartzCapturer;
            obj[8] = allowScreenCaptureKit;
            obj[9] = videoHookStaleFrameTimeoutMs;
            obj[10] = graphicsCaptureStaleFrameTimeoutMs;
            obj[11] = hdrCaptureMode;
            obj[12] = enableGlobalFramePoolLock;
            obj[13] = useGraphicsCaptureDirtyRegions;
            obj[14] = videoHookAllowDx12;
            obj[15] = minCaptureWidth;
            obj[16] = minCaptureHeight;
            const result2 = conn3.setDesktopSourceWithOptions(obj);
          } else {
            const conn2 = self.conn;
            conn2.clearDesktopSource();
          }
        } else {
          const conn = self.conn;
          const _HermesInternal3 = HermesInternal;
          conn.setDesktopSource("wumpus-" + tmp10, useVideoHook, tmp9);
        }
        const tmp8 = callback(parts, 2);
      } else if (null != result3.cameraDescription) {
        const conn4 = self.conn;
        obj = { videoInputDeviceId: null, audioInputDeviceId: null };
        ({ videoDeviceGuid: obj2[0], audioDeviceGuid: obj2[1] } = result3.cameraDescription);
        conn4.setGoLiveDevices(obj);
      }
      result3 = self.setDesktopEncodingOptions(result, resolution, frameRate);
    }
  } else {
    const result4 = self.setDesktopEncodingOptions(result, resolution, frameRate);
    if (null != result3.desktopDescription) {
      const soundshareId = result3.desktopDescription.soundshareId;
      if (self.soundshareId !== soundshareId) {
        self.setSoundshareSource(soundshareId, tmp29);
      }
    }
  }
};
prototype["clearGoLiveDevices"] = function clearGoLiveDevices() {
  if (null != this.conn.clearGoLiveDevices) {
    const conn = this.conn;
    conn.clearGoLiveDevices();
  }
};
prototype["clearDesktopSource"] = function clearDesktopSource() {
  const self = this;
  this.goLiveSourceIdentifier = null;
  if (null != this.conn.clearDesktopSource) {
    const conn2 = self.conn;
    conn2.clearDesktopSource();
  } else {
    const conn = self.conn;
    conn.setDesktopSource("", false, "");
  }
};
prototype["setDesktopSourceStatusCallback"] = function setDesktopSourceStatusCallback(arg0) {
  const conn = this.conn;
  if (conn.setDesktopSourceStatusCallback != null) {
    const result = setDesktopSourceStatusCallback(arg0);
  }
};
prototype["hasDesktopSource"] = function hasDesktopSource() {
  return null != this.goLiveSourceIdentifier;
};
prototype["setDesktopEncodingOptions"] = function setDesktopEncodingOptions(result, resolution, frameRate) {
  const self = this;
  if (!this.destroyed) {
    let obj = { width: null, height: null, framerate: null };
    obj[0] = result;
    obj[1] = resolution;
    obj[2] = frameRate;
    self.lastDesktopEncodingOptions = obj;
    obj = { width: null, height: null, framerate: null, videoCodec: null };
    obj[0] = result;
    obj[1] = resolution;
    obj[2] = frameRate;
    obj[3] = self.currentVideoCodec;
    const calcMaxBitrateFuncResult = self.calcMaxBitrateFunc(obj);
    if (null != calcMaxBitrateFuncResult) {
      obj = { width: null, height: null, framerate: null };
      obj[0] = result;
      obj[1] = resolution;
      obj[2] = frameRate;
      const videoQualityManager = self.videoQualityManager;
      const quality = videoQualityManager.getQuality();
      const VideoQuality = WantsVideoQuality.VideoQuality;
      const equalsResult = VideoQuality.equals(obj, quality.capture);
      let tmp12 = !equalsResult;
      if (equalsResult) {
        tmp12 = quality.bitrateMax !== calcMaxBitrateFuncResult;
      }
      const videoStreamParameters = self.videoStreamParameters;
      let num5 = videoStreamParameters.findIndex((quality) => quality.quality === closure_10);
      if (-1 === num5) {
        num5 = 0;
      }
      if (tmp12) {
        const videoQualityManager2 = self.videoQualityManager;
        obj1 = { capture: null, encode: null, bitrateMax: null };
        obj1[0] = obj;
        obj1[1] = obj;
        obj1[2] = calcMaxBitrateFuncResult;
        videoQualityManager2.setGoliveQuality(obj1);
        if (self.videoStreamParameters.length <= num5) {
          const Video = tmp9(4615).BaseConnectionEvent.Video;
          ({ userId, audioSSRC } = self);
          const ssrc = self.videoStreamParameters[num5].ssrc;
          const ssrc2 = self.videoStreamParameters[num5].ssrc;
          let num8 = 0;
          if (null != ssrc2) {
            num8 = 0;
            if (0 !== ssrc2) {
              num8 = ssrc2 + 1;
            }
          }
          self.emit(Video, userId, null, audioSSRC, ssrc, num8, self.videoStreamParameters);
          const conn = self.conn;
          conn.setTransportOptions(self.applyQualityConstraints().constraints);
        } else {
          if (0 !== result) {
            const obj2 = { type: null, width: null, height: null };
            obj2[0] = constants7.FIXED;
            obj2[1] = result;
            obj2[2] = resolution;
            tmp14.maxResolution = obj2;
            self.videoStreamParameters[num5].maxFrameRate = frameRate;
            self.videoStreamParameters[num5].maxBitrate = calcMaxBitrateFuncResult;
          }
          const SOURCE = constants7.SOURCE;
        }
      }
      tmp9 = require;
    } else {
      if (0 !== resolution) {
        if (resolution <= 720) {
          if (frameRate <= 30) {
            let tmp6 = closure_7;
          }
        }
      }
      tmp6 = closure_6;
    }
  }
};
prototype["setSDP"] = function setSDP(arg0) {};
prototype["setRemoteVideoSinkWants"] = function setRemoteVideoSinkWants(_remoteVideoSinkWants) {
  this.remoteVideoSinkWants = _remoteVideoSinkWants;
  this.updateVideoQuality(closure_8);
};
prototype["setLocalVideoSinkWants"] = function setLocalVideoSinkWants(localVideoSinkWants) {
  const self = this;
  localVideoSinkWants = this.localVideoSinkWants;
  const entries = Object.entries(this.remoteVideoSSRCs);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let num = 0;
    let num2 = 0;
    let tmp8 = tmp7;
    let tmp9 = tmp7;
    for (const item10032 of tmp7) {
      let tmp10 = item10032;
      let tmp11 = num;
      let tmp12;
      if (localVideoSinkWants != null) {
        let tmp13 = item10032;
        tmp12 = localVideoSinkWants[tmp10];
      }
      num = num + tmp12;
      let tmp14 = num2;
      let tmp15;
      if (arg0 != null) {
        let tmp16 = item10032;
        tmp15 = arg0[tmp10];
      }
      num2 = num2 + tmp15;
      continue;
    }
    let tmp17 = num;
    let tmp18 = 0 === num;
    if (tmp18) {
      let tmp19 = num2;
      tmp18 = 0 !== num2;
    }
    if (tmp18) {
      let conn = self.conn;
      let setDisableLocalVideo = conn.setDisableLocalVideo;
      if (setDisableLocalVideo != null) {
        let tmp20 = tmp6;
        let setDisableLocalVideoResult = setDisableLocalVideo(tmp6, false);
      }
    }
    let tmp22 = num;
    let tmp23 = 0 !== num;
    if (tmp23) {
      let tmp24 = num2;
      tmp23 = 0 === num2;
    }
    if (tmp23) {
      let conn2 = self.conn;
      let setDisableLocalVideo2 = conn2.setDisableLocalVideo;
      if (setDisableLocalVideo2 != null) {
        let tmp25 = tmp6;
        let result = setDisableLocalVideo2(tmp6, true);
      }
    }
    continue;
  }
  self.localVideoSinkWants = localVideoSinkWants;
};
prototype["startSamplesLocalPlayback"] = function startSamplesLocalPlayback(arg0, numberOfChannels, items, arg3) {
  if (numberOfChannels.numberOfChannels > 2) {
    arg3(2, "Too many channels");
  } else if (null != this.conn.startSamplesLocalPlayback) {
    items = [];
    let num2 = 0;
    if (0 < numberOfChannels.numberOfChannels) {
      do {
        let arr = items.push(numberOfChannels.getChannelData(num2));
        num2 = num2 + 1;
        numberOfChannels = numberOfChannels.numberOfChannels;
      } while (num2 < numberOfChannels);
    }
    const conn = tmp11.conn;
    const obj = { sampleRate: null, volume: null };
    obj[0] = numberOfChannels.sampleRate;
    obj[1] = items;
    const result = conn.startSamplesLocalPlayback(arg0, obj, items, arg3);
  } else {
    arg3(3, "Not supported");
  }
};
prototype["stopAllSamplesLocalPlayback"] = function stopAllSamplesLocalPlayback() {
  const conn = this.conn;
  const result = conn.stopAllSamplesLocalPlayback();
};
prototype["stopSamplesLocalPlayback"] = function stopSamplesLocalPlayback(arg0) {
  const conn = this.conn;
  const stopSamplesLocalPlayback = conn.stopSamplesLocalPlayback;
  if (stopSamplesLocalPlayback != null) {
    const result = stopSamplesLocalPlayback(arg0);
  }
};
prototype["setBandwidthEstimationExperiments"] = function setBandwidthEstimationExperiments(mediaEngineExperiments) {
  const conn = this.conn;
  conn.setTransportOptions({ bandwidthEstimationExperiments: mediaEngineExperiments });
};
prototype["updateVideoQualityCore"] = function updateVideoQualityCore(arg0, arg1) {
  const self = this;
  if (this.videoSupported) {
    if (!self.destroyed) {
      const conn = self.conn;
      conn.setTransportOptions(arg0);
    }
  }
};
prototype["setStreamParameters"] = function setStreamParameters(arg0) {
  let self = this;
  closure_1 = arg0;
  self = this;
  return new Promise((arg0, arg1) => {
    closure_0 = arg1;
    function _loop(iter) {
      const lib = iter;
      const findIndexResult = closure_1_1.findIndex((rid) => rid.rid === iter.rid);
      if (-1 === findIndexResult) {
        const _Error = Error;
        error = new Error("Invalid rid");
        lib(error);
        return { v: "Array" };
      } else {
        const items = [];
        if (!callback(self[11])(lib.videoStreamParameters[findIndexResult], tmp[findIndexResult])) {
          let obj = {};
          const merged = Object.assign(tmp[findIndexResult]);
          tmp18.videoStreamParameters[findIndexResult] = obj;
          obj = {};
          const merged1 = Object.assign(tmp[findIndexResult]);
          items.push(obj);
        }
        const conn = tmp18.conn;
        obj = { streamParameters: null };
        obj[0] = items;
        conn.setTransportOptions(obj);
      }
    }
    const iter = self.videoStreamParameters[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      let tmp2 = _loopResult;
      if (_loopResult) {
        let tmp3 = iter;
        iter.return();
        return _loopResult.v;
      }
    }
    arg0();
  });
};
prototype["applyVideoTransportOptions"] = function applyVideoTransportOptions() {
  let self = this;
  if (this.videoSupported) {
    let hasDesktopSourceResult = self.hasDesktopSource();
    if (hasDesktopSourceResult) {
      hasDesktopSourceResult = self.videoStreamParameters.length > 0;
    }
    let flag = false;
    if (hasDesktopSourceResult) {
      const maxResolution = self.videoStreamParameters[0].maxResolution;
      let type;
      if (maxResolution != null) {
        type = maxResolution.type;
      }
      flag = type === constants7.SOURCE;
    }
    const conn = self.conn;
    if (!self.hasDesktopSource()) {
      const obj = { encodingVideoDegradationPreference: null };
      obj[0] = self.videoDegradationPreference;
      conn.setTransportOptions(self.applyQualityConstraints(obj).constraints);
      const conn2 = self.conn;
      self = conn2.setVideoBroadcast(self.selfVideo);
    }
  }
};
prototype["chooseEncryptionMode"] = function chooseEncryptionMode(modes, arg1) {
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = modes;
    let obj = modes[Symbol.iterator]();
    let tmp4 = modes;
    let tmp6 = obj;
    while (obj !== undefined) {
      let tmp7 = nextResult;
      if (tmp2 === tmp5) {
        let tmp8 = nextResult;
        let tmp9 = obj;
        obj.return();
        let tmp10 = iter;
        iter.return();
        return tmp2;
      }
    }
    continue;
  }
  return "xsalsa20_poly1305";
};
prototype["getUserOptions"] = function getUserOptions() {
  const self = this;
  const keys = Object.keys(this.remoteAudioSSRCs);
  return keys.map((id) => {
    let obj = self;
    let num = 0;
    if (undefined !== self.remoteVideoSSRCs[id]) {
      num = 0;
      if (obj.remoteVideoSSRCs[id].length > 0) {
        num = obj.remoteVideoSSRCs[id][0];
      }
    }
    obj = {
      id,
      ssrc: obj.remoteAudioSSRCs[id],
      videoSsrc: num,
      videoSsrcs: obj.remoteVideoSSRCs[id],
      rtxSsrc: null,
      mute: null,
      volume: null,
    };
    let num2 = 0;
    if (null != num) {
      num2 = 0;
      if (0 !== num) {
        num2 = num + 1;
      }
    }
    obj[4] = num2;
    obj[5] = obj.getLocalMute(id);
    obj[6] = obj.getLocalVolume(id);
    return obj;
  });
};
prototype["createInputModeOptions"] = function createInputModeOptions() {
  const self = this;
  const inputMode = this.inputMode;
  if (constants3.VOICE_ACTIVITY === inputMode) {
    let obj = {
      vadThreshold: null,
      vadAutoThreshold: null,
      vadUseKrisp: null,
      vadLeading: null,
      vadTrailing: null,
      vadKrispActivationThreshold: null,
    };
    obj[0] = self.vadThreshold;
    const VADAggressiveness = VADAggressiveness2.VADAggressiveness;
    obj[1] = self.vadAutoThreshold ? VADAggressiveness.VERY_AGGRESSIVE : VADAggressiveness.DISABLED;
    ({ vadUseKrisp: obj2[2], vadLeading: obj2[3], vadTrailing: obj2[4], vadKrispActivationThreshold: obj2[5] } = self);
    return obj;
  } else if (tmp.PUSH_TO_TALK === inputMode) {
    obj = { pttReleaseDelay: null };
    obj[0] = self.pttReleaseDelay;
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unknown Input Mode: " + self.inputMode);
    throw error;
  }
};
prototype["getAttenuationOptions"] = function getAttenuationOptions() {
  return {
    attenuation: this.isAttenuating(),
    attenuationFactor: this.attenuationFactor,
    attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
    attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers,
  };
};
prototype["getCodecParams"] = function getCodecParams(name, arg1) {
  if (name !== H264.H264) {
    let obj = {};
  } else if (arg1) {
    obj = { "level-asymmetry-allowed": "1", "packetization-mode": "1", "profile-level-id": "42e034" };
  } else {
    obj = inject;
    let str = "4d0033";
    if ("android" === obj.getVoiceEngine().platform) {
      str = "42e01f";
    }
    obj = { "level-asymmetry-allowed": "1", "packetization-mode": "1", "profile-level-id": null };
    obj[2] = str;
  }
  return obj;
};
prototype["getCodecOptions"] = function getCodecOptions(name, H264, closure_0) {
  const self = this;
  const _require = name;
  const codecs = this.codecs;
  const found = codecs.find((name) => name.name === closure_0);
  let num;
  if (found != null) {
    num = found.payloadType;
  }
  if (num == null) {
    num = 0;
  }
  const audioEncoder = { type: num, name, freq: 48000, pacsize: 960, channels: 1, rate: 64000 };
  const codecs1 = self.codecs;
  const found1 = codecs1.filter((type) => "audio" === type.type);
  const audioDecoders = found1.map((name) => {
    let num;
    if (name != null) {
      num = name.payloadType;
    }
    if (num == null) {
      num = 0;
    }
    return { type: num, name: name.name, freq: 48000, channels: 2, params: { stereo: "1" } };
  });
  if (closure_0 === constants5.STREAM) {
    audioEncoder.channels = 2;
  }
  const videoDecoders = [];
  let videoEncoder = { name: "", type: 0, rtxType: 0, params: {} };
  const iter = self.codecs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult.name !== name) {
      let obj = { name: null, type: null, rtxType: null, params: null };
      let tmp25 = _require;
      let tmp26 = dependencyMap;
      let obj5 = items;
      let tmp27 = nextResult;
      obj[0] = obj5.codecNameToPayloadName(tmp4.name);
      let num3;
      if (tmp4 != null) {
        num3 = tmp4.payloadType;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj[1] = num3;
      let tmp5 = nextResult;
      let num4;
      if (tmp4 != null) {
        num4 = tmp4.rtxPayloadType;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj[2] = num4;
      let tmp6 = nextResult;
      obj[3] = self.getCodecParams(tmp4.name, true);
      let tmp7 = obj;
      let experimentFlags = self.experimentFlags;
      let tmp8 = constants;
      if (experimentFlags.has(constants.RESET_DECODER_ON_ERRORS)) {
        let tmp9 = obj;
        tmp7.params["reset-on-errors"] = "1";
      }
      let experimentFlags2 = self.experimentFlags;
      if (experimentFlags2.has(tmp8.SOFTWARE_FALLBACK_ON_ERRORS)) {
        let tmp10 = obj;
        tmp7.params["fallback-after-errors"] = "3";
      }
      let experimentFlags3 = self.experimentFlags;
      if (experimentFlags3.has(tmp8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS)) {
        let tmp11 = obj;
        tmp7.params["fallback-on-consecutive-errors"] = "1";
      }
      let experimentFlags4 = self.experimentFlags;
      if (experimentFlags4.has(tmp8.SIGNAL_AV1_HARDWARE_DECODE)) {
        let tmp12 = obj;
        tmp7.params["hardware-av1-decode"] = "1";
      }
      let tmp13 = obj;
      name = tmp7.name;
      tmp7.params["hardware-h264"] = "1";
      let experimentFlags5 = self.experimentFlags;
      if (experimentFlags5.has(tmp8.USE_LIBOPENH264_DECODER)) {
        let tmp25Result = tmp25(1910);
        let openH264LibraryPath = tmp25Result.getOpenH264LibraryPath();
        if (null != openH264LibraryPath) {
          let tmp16 = obj;
          tmp7.params.libopenh264 = "1";
          let tmp17 = openH264LibraryPath;
          tmp7.params["libopenh264-path"] = tmp15;
        }
      }
      let tmp18 = obj;
      let arr = videoDecoders.push(tmp7);
      let tmp20 = nextResult;
      if (tmp4.name === H264) {
        obj1 = {};
        let tmp28 = obj;
        let tmp29 = obj1;
        let merged = Object.assign(tmp7);
        let tmp31 = nextResult;
        obj1.params = self.getCodecParams(tmp4.name, false);
        videoEncoder = obj1;
        let experimentFlags9 = self.experimentFlags;
        if (experimentFlags9.has(tmp8.VIDEOTOOLBOX_RATE_CONTROL)) {
          let tmp21 = videoEncoder;
          videoEncoder.params["fixed-rate-presentation-timestamps"] = "1";
        }
        let experimentFlags6 = self.experimentFlags;
        if (experimentFlags6.has(tmp8.LOW_LATENCY_RATE_CONTROL)) {
          let tmp22 = videoEncoder;
          videoEncoder.params["low-latency-rate-control"] = "1";
        }
        let experimentFlags7 = self.experimentFlags;
        if (experimentFlags7.has(tmp8.WMF_GPU_ENCODE)) {
          let tmp23 = videoEncoder;
          videoEncoder.params["wmf-gpu"] = "1";
        }
        let experimentFlags8 = self.experimentFlags;
        if (experimentFlags8.has(tmp8.INTEL_GPU_DISABLE)) {
          let tmp24 = videoEncoder;
          videoEncoder.params["intel-gpu"] = "0";
        }
      }
    }
    continue;
  }
  return { videoEncoder, videoDecoders, audioEncoder, audioDecoders };
};
prototype["getConnectionTransportOptions"] = function getConnectionTransportOptions() {
  const obj = {
    selfMute: this.selfMute,
    inputMode: dependencyMap[this.inputMode],
    inputModeOptions: this.createInputModeOptions(),
    minimumJitterBufferLevel: this.minimumJitterBufferLevel,
    postponeDecodeLevel: this.postponeDecodeLevel,
  };
  const merged = Object.assign(this.getAttenuationOptions());
  obj.fec = true;
  obj.packetLossRate = 0.3;
  obj.qos = this.qos;
  obj.prioritySpeakerDucking = closure_26;
  obj.encodingVoiceBitRate = this.voiceBitrate;
  obj.callBitRate = closure_23;
  obj.callMinBitRate = closure_24;
  obj.callMaxBitRate = closure_25;
  ({ videoDegradationPreference: obj.encodingVideoDegradationPreference, reconnectInterval: obj.reconnectInterval } =
    this);
  let supportsFeatureResult = inject.supportsFeature(constants8.VIDEO_EFFECTS);
  if (supportsFeatureResult) {
    supportsFeatureResult = this.context === constants5.STREAM;
  }
  if (supportsFeatureResult) {
    obj.enableVideoEffects = true;
  }
  return obj;
};
prototype["setStream"] = function setStream() {
  error = new Error("Method not implemented.");
  throw error;
};
prototype["getUserIdBySsrc"] = function getUserIdBySsrc() {};
prototype["prepareSecureFramesTransition"] = function prepareSecureFramesTransition(lastPreparedTransitionId, v, arg2) {
  const self = this;
  if (0 === lastPreparedTransitionId) {
    self.lastExecutedTransitionId = -1;
    self.lastPreparedTransitionId = -1;
  }
  self.lastPreparedTransitionId = lastPreparedTransitionId;
  const conn = self.conn;
  const prepareSecureFramesTransition = conn.prepareSecureFramesTransition;
  if (prepareSecureFramesTransition != null) {
    const result = prepareSecureFramesTransition(lastPreparedTransitionId, v, arg2);
  }
};
prototype["prepareSecureFramesEpoch"] = function prepareSecureFramesEpoch(_1, v, trueChannelId) {
  const conn = this.conn;
  const prepareSecureFramesEpoch = conn.prepareSecureFramesEpoch;
  if (prepareSecureFramesEpoch != null) {
    const result = prepareSecureFramesEpoch(_1, v, trueChannelId);
  }
};
prototype["executeSecureFramesTransition"] = function executeSecureFramesTransition(lastExecutedTransitionId) {
  const self = this;
  if (-1 !== this.lastExecutedTransitionId) {
    if (-1 !== self.lastPreparedTransitionId) {
      if (self.lastPreparedTransitionId >= self.lastExecutedTransitionId) {
        let tmp =
          lastExecutedTransitionId > self.lastExecutedTransitionId &&
          lastExecutedTransitionId <= self.lastPreparedTransitionId;
        const tmp2 =
          lastExecutedTransitionId > self.lastExecutedTransitionId &&
          lastExecutedTransitionId <= self.lastPreparedTransitionId;
      } else {
        tmp =
          lastExecutedTransitionId > self.lastExecutedTransitionId ||
          lastExecutedTransitionId <= self.lastPreparedTransitionId;
      }
      if (!tmp) {
        const _HermesInternal = HermesInternal;
        const combined =
          "Skipping invalid transition " +
          lastExecutedTransitionId +
          " outside of range (" +
          self.lastExecutedTransitionId +
          "-" +
          self.lastPreparedTransitionId +
          "]";
        const logger = self.logger;
        logger.warn(combined);
        const _Error = Error;
        error = new Error(combined);
        throw error;
      }
    }
  }
  self.lastExecutedTransitionId = lastExecutedTransitionId;
  const conn = self.conn;
  const executeSecureFramesTransition = conn.executeSecureFramesTransition;
  if (executeSecureFramesTransition != null) {
    const result = executeSecureFramesTransition(lastExecutedTransitionId);
  }
};
prototype["getMLSKeyPackage"] = function getMLSKeyPackage(arg0) {
  const conn = this.conn;
  const getMLSKeyPackage = conn.getMLSKeyPackage;
  if (getMLSKeyPackage != null) {
    const mLSKeyPackage = getMLSKeyPackage(arg0);
  }
};
prototype["updateMLSExternalSender"] = function updateMLSExternalSender(arg0) {
  const conn = this.conn;
  const updateMLSExternalSender = conn.updateMLSExternalSender;
  if (updateMLSExternalSender != null) {
    const result = updateMLSExternalSender(arg0);
  }
};
prototype["processMLSProposals"] = function processMLSProposals(arg0, arg1) {
  const conn = this.conn;
  const processMLSProposals = conn.processMLSProposals;
  if (processMLSProposals != null) {
    processMLSProposals(arg0, arg1);
  }
};
prototype["prepareMLSCommitTransition"] = function prepareMLSCommitTransition(lastPreparedTransitionId) {
  this.lastPreparedTransitionId = lastPreparedTransitionId;
  const conn = this.conn;
  const prepareMLSCommitTransition = conn.prepareMLSCommitTransition;
  if (prepareMLSCommitTransition != null) {
    const result = prepareMLSCommitTransition(lastPreparedTransitionId, arg1, arg2);
  }
};
prototype["processMLSWelcome"] = function processMLSWelcome(lastPreparedTransitionId) {
  this.lastPreparedTransitionId = lastPreparedTransitionId;
  const conn = this.conn;
  const processMLSWelcome = conn.processMLSWelcome;
  if (processMLSWelcome != null) {
    processMLSWelcome(lastPreparedTransitionId, arg1, arg2);
  }
};
prototype["getMLSPairwiseFingerprint"] = function getMLSPairwiseFingerprint(arg0, arg1, arg2) {
  const conn = this.conn;
  const getMLSPairwiseFingerprint = conn.getMLSPairwiseFingerprint;
  if (getMLSPairwiseFingerprint != null) {
    const mLSPairwiseFingerprint = getMLSPairwiseFingerprint(arg0, arg1, arg2);
  }
};
prototype["presentDesktopSourcePicker"] = function presentDesktopSourcePicker(arg0) {
  const conn = this.conn;
  const presentDesktopSourcePicker = conn.presentDesktopSourcePicker;
  if (presentDesktopSourcePicker != null) {
    const result = presentDesktopSourcePicker(arg0);
  }
};
prototype["mergeUsers"] = function mergeUsers(items4) {
  const conn = this.conn;
  conn.mergeUsers(items4);
  this.emit(BaseConnectionEvent.BaseConnectionEvent.UsersMerged, items4);
};
let result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/Connection.tsx");

export default Connection;
