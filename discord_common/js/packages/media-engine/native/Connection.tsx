// === Module 4957: Connection ===

// Module 4957 (Connection)
import inject from "inject" /* 2001 */;
import VideoQualityManager from "VideoQualityManager" /* 4959 */;
import discord_common_BaseConnectionEvent from "discord_common/BaseConnectionEvent" /* 4962 */;
import cloneDeepDefault from "cloneDeep" /* 4963 */;
import VideoCodecUtils from "VideoCodecUtils" /* 5006 */;
import transformStatsDefault from "transformStats" /* 5008 */;
import isEqualDefault from "isEqual" /* 5010 */;
import discord_common_VoiceEngine from "discord_common/VoiceEngine" /* 5011 */;
import reduceDefault from "reduce" /* 5012 */;
import clampDefault from "clamp" /* 5015 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants_mod from "Constants" /* 4915 */;
import Constants_mod2 from "Constants" /* 4947 */;
import BaseConnection from "BaseConnection" /* 4958 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, lost, map, set, set2;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let Constants = Constants_mod2;
({ StatsFilter: closure_4, ExperimentFlags: hasOwnProperty, DESKTOP_BITRATE_ENHANCED: metroRequire, DESKTOP_BITRATE: metroImportDefault, MEDIA_SINK_WANTS_PROPERTIES: metroImportAll, MediaTypes: c9, SIMULCAST_HQ_QUALITY: c10 } = Constants);
Constants = Constants_mod2;
({ NATIVE_MODE_VALUES: unpackModuleId, InputModes: closure_12, ConnectionStates: map1, Codecs: closure_14, MediaEngineContextTypes: closure_15, SpeakingFlags: closure_16, ResolutionTypes: closure_17, NativeFeatures: closure_18, NoiseCancellerError: closure_19, DEFAULT_VOLUME: closure_20, DEFAULT_STREAM_VOLUME: closure_21, DEFAULT_SOUNDSHARE_VOICE_BITRATE: closure_22, DEFAULT_CALL_BITRATE: closure_23, DEFAULT_CALL_MIN_BITRATE: closure_24, DEFAULT_CALL_MAX_BITRATE: closure_25, DEFAULT_PRIORITY_SPEAKER_DUCKING: closure_26, PING_INTERVAL: closure_27 } = Constants);
let c28 = 0;
class Connection extends BaseConnection {
  constructor(arg0, _0, videoSupported) {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp6;
    const tmp7 = new tmp(arg0, _0, tmp6, tmp5, tmp4, tmp3, arg0, tmp2, new.target);
    _require = tmp7;
    let closure_28 = tmp8 + 1;
    tmp7.mediaEngineConnectionId = `Native-${+closure_28}`;
    tmp7.selfVideo = false;
    tmp7.codecs = [];
    tmp7.initialCodecs = [];
    tmp7.videoEncoderFallbackPending = false;
    tmp7.videoDecoderFallbackSent = new Set();
    tmp7.lastOverrideCodecDenylist = "";
    tmp7.lastOverrideEncoderDenylist = "";
    tmp7.lastCaptureOverrides = "";
    tmp7.overrideCodecResetAt = 0;
    new Set();
    let obj = require("inject");
    tmp7.desktopDegradationPreference = obj.getVoiceEngine().DegradationPreference.MAINTAIN_FRAMERATE;
    let obj2 = require("inject");
    tmp7.sourceDesktopDegradationPreference = obj2.getVoiceEngine().DegradationPreference.DISABLED;
    const obj3 = require("inject");
    tmp7.videoDegradationPreference = obj3.getVoiceEngine().DegradationPreference.BALANCED;
    tmp7.localPans = {};
    tmp7.remoteAudioSSRCs = {};
    tmp7.remoteVideoSSRCs = {};
    tmp7.inputMode = constants3.VOICE_ACTIVITY;
    tmp7.vadThreshold = -40;
    tmp7.vadAutoThreshold = true;
    tmp7.vadKrispActivationThreshold = 0.5;
    tmp7.vadUseKrisp = true;
    tmp7.vadLeading = 5;
    tmp7.vadTrailing = 25;
    tmp7.pttReleaseDelay = 20;
    tmp7.soundshareActive = false;
    tmp7.soundshareId = null;
    tmp7.soundshareSentSpeakingEvent = false;
    tmp7.echoCancellation = true;
    tmp7.noiseSuppression = true;
    tmp7.automaticGainControl = { enabled: true };
    tmp7.noiseCancellation = false;
    tmp7.noiseCancellationDuringProcessing = false;
    tmp7.echoReferenceMode = "mix";
    tmp7.attenuationFactor = 0.5;
    tmp7.attenuateWhileSpeakingSelf = false;
    tmp7.attenuateWhileSpeakingOthers = true;
    tmp7.qos = true;
    tmp7.minimumJitterBufferLevel = 0;
    tmp7.postponeDecodeLevel = 100;
    tmp7.reconnectInterval = 60000;
    tmp7.keyframeInterval = 0;
    tmp7.videoQualityMeasurement = "";
    tmp7.videoEncoderExperiments = "";
    tmp7.singleCpuCopy = false;
    tmp7.numFastUdpReconnects = 0;
    tmp7.lastPreparedTransitionId = -1;
    tmp7.lastExecutedTransitionId = -1;
    tmp7.currentVideoCodec = null;
    tmp7.lastDesktopEncodingOptions = null;
    tmp7.handleSpeakingNative = function handleSpeakingNative(id, flag, arg2) {
      let tmp2 = flag;
      if (typeof flag === "boolean") {
        tmp2 = flag ? constants2.VOICE : constants2.NONE;
      }
      closure_0.handleSpeakingFlags(id, tmp2, arg2);
    };
    tmp7.handleNativeMuteChanged = function handleNativeMuteChanged(arg0) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.NativeMuteChanged, arg0);
    };
    tmp7.handleSpeakingFlags = function handleSpeakingFlags(id, flag, arg2) {
      let NONE = closure_0.localSpeakingFlags[id];
      if (NONE == null) {
        NONE = constants2.NONE;
      }
      const experimentFlags = closure_0.experimentFlags;
      if (!experimentFlags.has(hasOwnProperty.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS)) {
        let audioSSRC;
        closure_0.localSpeakingFlags[id] = flag;
        if (id === closure_0.userId) {
          audioSSRC = closure_0.audioSSRC;
        } else {
          audioSSRC = closure_0.remoteAudioSSRCs[id];
        }
        closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Speaking, id, flag, audioSSRC, arg2);
        const tmp11 = flag & constants2.SOUNDSHARE && false === closure_0.soundshareSentSpeakingEvent;
        if (tmp11) {
          closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.SoundshareSpeaking);
          closure_0.soundshareSentSpeakingEvent = true;
        }
      }
    };
    tmp7.handleSpeakingWhileMuted = function handleSpeakingWhileMuted() {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.SpeakingWhileMuted);
    };
    tmp7.handlePing = function handlePing(arg0) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Ping, arg0);
    };
    tmp7.handlePingTimeout = function handlePingTimeout(arg0, arg1, arg2, arg3) {
      const emit = closure_0.emit;
      let num = 4000;
      const PingTimeout = discord_common_BaseConnectionEvent.BaseConnectionEvent.PingTimeout;
      if (arg3 > 0) {
        num = arg3;
      }
      emit(PingTimeout, arg2, num);
    };
    tmp7.handleConnectionFailed = function handleConnectionFailed(arg0) {
      if (!closure_0.destroyed) {
        closure_0.setConnectionState(map1.NO_ROUTE);
        const emit = closure_0.emit;
        const _HermesInternal = HermesInternal;
        emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Error, "UDP endpoint retarget failed: " + arg0);
      }
    };
    tmp7.handleVideoEncoderFallback = function handleVideoEncoderFallback(arg0) {
      closure_0 = arg0;
      if (!closure_0.videoEncoderFallbackPending) {
        if (closure_0.overrideCodecResetAt > 0) {
          const tmp = globalThis;
          const _performance = performance;
          if (performance.now() - closure_0.overrideCodecResetAt < 1000) {
            const logger2 = obj.logger;
            const _HermesInternal2 = HermesInternal;
            logger2.info("Suppressing encoder fallback for " + arg0 + " (override codec reset in progress)");
          }
        }
        const logger = obj.logger;
        let tmp2 = globalThis;
        const _HermesInternal = HermesInternal;
        logger.info("Falling back from current video encoder: " + arg0);
        const codecs = obj.codecs;
        const mapped = codecs.map((name) => {
          let tmp2 = closure_0 === name.name;
          if (!tmp2) {
            tmp2 = "AV1" === name.name && "AV1X" === tmp;
            const tmp3 = "AV1" === name.name && "AV1X" === tmp;
          }
          if (tmp2) {
            name.encode = false;
          }
          return name;
        });
        closure_0.codecs = mapped.filter((type) => !("video" === type.type && false === type.encode && false === type.decode));
        closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoEncoderFallback, closure_0.codecs);
        closure_0.videoEncoderFallbackPending = true;
      }
    };
    tmp7.handleVideoDecoderFallback = function handleVideoDecoderFallback(arg0) {
      closure_0 = arg0;
      const videoDecoderFallbackSent = closure_0.videoDecoderFallbackSent;
      if (!videoDecoderFallbackSent.has(arg0)) {
        const videoDecoderFallbackSent2 = obj.videoDecoderFallbackSent;
        videoDecoderFallbackSent2.add(arg0);
        const logger = obj.logger;
        let tmp2 = globalThis;
        const _HermesInternal = HermesInternal;
        logger.info("Falling back from current video decoder: " + arg0);
        const codecs = obj.codecs;
        const mapped = codecs.map((name) => {
          let tmp2 = closure_0 === name.name;
          if (!tmp2) {
            tmp2 = "AV1" === name.name && "AV1X" === tmp;
            const tmp3 = "AV1" === name.name && "AV1X" === tmp;
          }
          if (tmp2) {
            name.decode = false;
          }
          return name;
        });
        closure_0.codecs = mapped.filter((type) => !("video" === type.type && false === type.encode && false === type.decode));
        closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoDecoderFallback, closure_0.codecs);
      }
    };
    tmp7.handleVideoCodecError = function handleVideoCodecError(arg0) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoCodecError, arg0);
    };
    tmp7.handleVideo = function handleVideo(arg0, ssrc, arg2, arr) {
      let audioSSRC;
      const tmp4 = cloneDeepDefault(closure_0.videoStreamParameters);
      closure_0 = tmp4;
      if (arg0 === closure_0.userId) {
        if (null != arr) {
          const _Array = Array;
          if (Array.isArray(arr)) {
            if (arr.length > 0) {
              let item = arr.forEach((item) => {
                item = item.forEach((rid, index) => {
                  let active;
                  if (rid.rid === item.rid) {
                    const obj = { active };
                    active = item.active;
                    const merged = Object.assign(rid);
                    ({ ssrc: obj.ssrc, rtxSsrc: obj.rtxSsrc } = item);
                    item[index] = obj;
                  }
                });
              });
            }
          }
        }
        if (ssrc > 0) {
          tmp4[0].active = true;
          tmp4[0].ssrc = ssrc;
          let num5 = 0;
          const first = tmp4[0];
          if (null != ssrc) {
            num5 = 0;
            if (0 !== ssrc) {
              num5 = ssrc + 1;
            }
          }
          first.rtxSsrc = num5;
        } else {
          tmp4[0].active = false;
        }
      } else if (ssrc > 0) {
        if (undefined !== closure_0.remoteVideoSSRCs[arg0]) {
          let obj = tmp3.remoteVideoSSRCs[arg0];
          if (!obj.includes(ssrc)) {
            const items = [];
            items[HermesBuiltin.arraySpread(items, closure_0.remoteVideoSSRCs[arg0], 0)] = ssrc;
            closure_0.remoteVideoSSRCs[arg0] = items;
          }
        } else {
          const items1 = [ssrc];
          closure_0.remoteVideoSSRCs[arg0] = items1;
        }
      }
      closure_0.videoStreamParameters = tmp4;
      const emit = tmp3.emit;
      const Video = discord_common_BaseConnectionEvent.BaseConnectionEvent.Video;
      let tmp11 = null;
      if (null != arg2) {
        tmp11 = null;
        if ("" !== arg2) {
          tmp11 = arg2;
        }
      }
      if (arg0 === closure_0.userId) {
        audioSSRC = tmp3.audioSSRC;
      } else {
        audioSSRC = tmp3.remoteAudioSSRCs[arg0];
      }
      let num7 = 0;
      if (null != ssrc) {
        num7 = 0;
        if (0 !== ssrc) {
          num7 = ssrc + 1;
        }
      }
      emit(Video, arg0, tmp11, audioSSRC, ssrc, num7, closure_0.videoStreamParameters);
    };
    tmp7.handleFirstFrame = function handleFirstFrame(arg0, arg1, arg2) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.FirstFrame, arg0, arg1, arg2);
    };
    tmp7.handleFirstFrameStats = function handleFirstFrameStats(arg0) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.FirstFrameStats, arg0);
    };
    tmp7.handleFirstFrameEncryptedStats = function handleFirstFrameEncryptedStats(arg0) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.FirstFrameEncryptedStats, arg0);
    };
    tmp7.handleNoInput = function handleNoInput(arg0) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Silence, !arg0);
    };
    tmp7.handleDesktopSourceEnded = function handleDesktopSourceEnded(arg0, arg1) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.DesktopSourceEnd, arg0, arg1);
    };
    tmp7.handleSoundshare = function handleSoundshare(arg0) {
      const tmp = arg0;
      if (tmp) {
        closure_0.soundshareActive = true;
        const conn = closure_0.conn;
        const _Math = Math;
        const setTransportOptions = conn.setTransportOptions;
        const obj = { encodingVoiceBitRate: Math.max(afk, closure_0.voiceBitrate) };
        setTransportOptions(obj);
        closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.SoundshareAttached);
      }
    };
    tmp7.handleSoundshareFailed = function handleSoundshareFailed(failureCode, failureReason, willRetry) {
      const obj = { failureCode, failureReason, willRetry };
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.SoundshareFailed, obj);
    };
    tmp7.handleSoundshareEnded = function handleSoundshareEnded() {
      closure_0.soundshareActive = false;
      if (!closure_0.destroyed) {
        const conn = closure_0.conn;
        const obj = { encodingVoiceBitRate: closure_0.voiceBitrate };
        conn.setTransportOptions(obj);
      }
    };
    tmp7.handleNewListenerNative = function handleNewListenerNative(arg0) {
      if (arg0 === discord_common_BaseConnectionEvent.BaseConnectionEvent.ConnectionStateChange) {
        closure_0.emit(arg0, closure_0.connectionState);
      }
    };
    tmp7.handleStats = function handleStats(rtp) {
      if (closure_0.connectionState !== map1.DISCONNECTED) {
        if (null != rtp) {
          if (null != closure_0.stats) {
            const tmp26 = reduceDefault(rtp.rtp.outbound, (lost, packetsLost) => {
              let num = packetsLost.packetsLost;
              lost = lost.lost;
              if (num == null) {
                num = 0;
              }
              lost.lost = lost + num;
              let num2 = packetsLost.packetsSent;
              const sent = lost.sent;
              if (num2 == null) {
                num2 = 0;
              }
              lost.sent = sent + num2;
              return lost;
            }, { lost: 0, sent: 0 });
            const tmp27 = reduceDefault(closure_0.stats.rtp.outbound, (lost, packetsLost) => {
              let num = packetsLost.packetsLost;
              lost = lost.lost;
              if (num == null) {
                num = 0;
              }
              lost.lost = lost + num;
              let num2 = packetsLost.packetsSent;
              const sent = lost.sent;
              if (num2 == null) {
                num2 = 0;
              }
              lost.sent = sent + num2;
              return lost;
            }, { lost: 0, sent: 0 });
            const diff = tmp26.sent - tmp27.sent;
            const diff1 = tmp26.lost - tmp27.lost;
            if (0 === diff) {
              closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.OutboundLossRate, 0);
            } else if (diff > 0) {
              if (diff1 >= 0) {
                let num = 1;
                let num2 = 100;
                const tmp6 = clampDefault(diff1 / (diff + diff1), 0, 1);
                closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.OutboundLossRate, 100 * tmp6);
              }
            }
            const outbound = rtp.rtp.outbound;
            const first = outbound.filter((type) => "audio" === type.type)[0];
            const outbound1 = closure_0.stats.rtp.outbound;
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
                    const obj2 = inject;
                    if (!obj2.supportsFeature(constants3.KRISP_NATIVE_ERROR)) {
                      if (closure_0.noiseCancellation) {
                        if (tmp13 > 50) {
                          if (null != first.noiseCancellerProcessTime) {
                            if (null != first1.noiseCancellerProcessTime) {
                              const diff3 = first.noiseCancellerProcessTime - first1.noiseCancellerProcessTime;
                              if (diff3 / tmp13 > 8) {
                                closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.NoiseCancellationError, constants4.KRISP_CPU_OVERUSE);
                              } else if (0 === diff3) {
                                closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.NoiseCancellationError, constants4.KRISP_FAILED);
                              }
                            }
                          }
                        }
                      }
                      if (closure_0.inputMode === constants.VOICE_ACTIVITY) {
                        if (closure_0.vadAutoThreshold) {
                          if (closure_0.vadUseKrisp) {
                            if (diff2 > 50) {
                              if (null != first.voiceActivityDetectorProcessTime) {
                                if (null != first1.voiceActivityDetectorProcessTime) {
                                  if ((first.voiceActivityDetectorProcessTime - first1.voiceActivityDetectorProcessTime) / diff2 > 4) {
                                    closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VoiceActivityDetectorError, constants4.KRISP_VAD_CPU_OVERUSE);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          closure_0.stats = rtp;
        }
      } else {
        closure_0.off(discord_common_BaseConnectionEvent.BaseConnectionEvent.Stats, closure_0.handleStats);
      }
    };
    tmp7.handleMLSFailure = function handleMLSFailure(arg0, arg1) {
      closure_0.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.MLSFailure, arg0, arg1);
    };
    tmp7.videoSupported = videoSupported;
    const logger1 = new require("logger/Logger").Logger("Connection(" + arg0 + ")");
    tmp7.logger = logger1;
    let logger = tmp7.logger;
    logger.enableNativeLogger(true);
    return tmp7;
  }
  static create(arg0, _0, arg2, videoSupported) {
    const obj = new Connection(arg0, _0, videoSupported);
    obj.initialize(arg2);
    return obj;
  }
  static createReplay(arg0, arg1) {
    let closure_0;
    let voiceEngine;
    _require = arg0;
    const obj = new Connection(arg0, "0", true);
    let obj2 = require("inject");
    voiceEngine = obj2.getVoiceEngine();
    let items = [];
    const obj3 = { type: constants2.VIDEO, rid: "100", ssrc: 0, rtxSsrc: 0, quality: 100, active: false };
    items[0] = obj3;
    const result = obj.initializeStreamParameters(items);
    const replayConnection = voiceEngine.createReplayConnection("default", () => {
      let videoSupported;
      obj.on(discord_common_BaseConnectionEvent.BaseConnectionEvent.Stats, obj.handleStats);
      let conn = obj.conn;
      conn.setOnVideoCallback(obj.handleVideo);
      const codecCapabilities = voiceEngine.getCodecCapabilities((arg0) => {
        let mapped;
        closure_0(voiceEngine[7]);
        const items = [];
        const obj2 = { type: "audio", name: constants.OPUS, priority: 1, payloadType: 120 };
        items[0] = obj2;
        if (videoSupported.videoSupported) {
          const tmp2Result = closure_0(voiceEngine[7]);
          const filterVideoCodecsResult = tmp2Result.filterVideoCodecs(arg0, tmp5);
          mapped = filterVideoCodecsResult.map((name, index) => {
            const sum = 101 + 2 * index;
            return { type: "video", name: name.name, priority: index + 1, payloadType: sum, rtxPayloadType: sum + 1, encode: name.encode, decode: name.decode };
          });
        } else {
          mapped = [];
        }
        HermesBuiltin.arraySpread(items, mapped, 1);
        videoSupported.codecs = items;
        videoSupported.setCodecs(constants.OPUS, constants.H264, closure_1_0);
        const conn = videoSupported.conn;
        conn.startReplay();
      });
    }, arg1);
    let tmp3 = null;
    if (null != replayConnection) {
      obj.conn = replayConnection;
      tmp3 = obj;
    }
    return tmp3;
  }
  initialize(address) {
    let createVoiceConnection;
    let fn;
    let self = this;
    let closure_1 = address;
    let logger = this.logger;
    let infoResult = logger.info("Creating connection to " + address.address + ":" + address.port + " with audio ssrc: " + address.ssrc);
    this.beginInitializeAt = performance.now();
    ({ ssrc: this.audioSSRC, streamUserId: this.streamUserId } = address);
    let result = this.initializeStreamParameters(address.streamParameters);
    let obj = { type: constants2.AUDIO, ssrc: this.audioSSRC, rid: "", maxBitrate: 64000, soundshare: this.context === constants5.STREAM };
    let items = [obj, ...this.videoStreamParameters];
    address.streamParameters = items;
    address.context = this.context;
    let obj2 = createVoiceConnection(2001);
    const voiceEngine = obj2.getVoiceEngine();
    if (null != voiceEngine.createOwnStreamConnectionWithOptions) {
      if (self.context === constants5.STREAM) {
        let createVoiceConnectionWithOptions;
        if (self.streamUserId === self.userId) {
          createVoiceConnectionWithOptions = voiceEngine.createOwnStreamConnectionWithOptions;
        }
        fn = createVoiceConnectionWithOptions;
      }
      createVoiceConnectionWithOptions = voiceEngine.createVoiceConnectionWithOptions;
    } else if (null != voiceEngine.createOwnStreamConnection) {
      if (self.context === constants5.STREAM) {
        if (self.streamUserId === self.userId) {
          createVoiceConnection = voiceEngine.createOwnStreamConnection;
        }
        fn = function s(arg0, ssrc, arg2) {
          return createVoiceConnection(ssrc.ssrc, self.userId, ssrc.address, ssrc.port, arg2, ssrc.experiments, ssrc.streamParameters);
        };
      }
      createVoiceConnection = voiceEngine.createVoiceConnection;
    } else {
      fn = function s(userId, ssrc, arg2) {
        const voiceConnection = new voiceEngine.VoiceConnection(ssrc.ssrc, userId, ssrc.address, ssrc.port, arg2, ssrc.experiments, ssrc.streamParameters);
        return voiceConnection;
      };
    }
    const fnResult = fn(self.userId, address, function(arg0, transportInfo) {
      let connectionTransportOptions;
      let obj = self;
      if (!self.destroyed) {
        if (null != arg0) {
          if ("" !== arg0) {
            obj.setConnectionState(constants.NO_ROUTE);
            obj.emit(createVoiceConnection(dependencyMap[6]).BaseConnectionEvent.Error, arg0);
          }
        }
        if (null == transportInfo) {
          const _Error = Error;
          self = this;
          const self2 = this;
          const error = new Error("Invalid transport info");
          throw error;
        } else {
          obj.transportInfo = transportInfo;
          const protocol = transportInfo.protocol;
          address = transportInfo.address;
          const port = transportInfo.port;
          let logger = obj.logger;
          const _HermesInternal = HermesInternal;
          const infoResult = logger.info("Connected with local address " + address + ":" + port + " and protocol: " + protocol);
          const _performance = performance;
          obj.onConnectCallbackAt = performance.now();
          const codecCapabilities = voiceEngine.getCodecCapabilities((arg0) => {
            let codecs;
            let codecs2;
            let logger3;
            let logger4;
            let mapped;
            self.onVideoCodecsCallbackAt = performance.now();
            let logger = self.logger;
            logger.info("Available engine codecs: " + JSON.stringify(arg0));
            let obj = createVoiceConnection(dependencyMap[7]);
            const experimentCodecs = obj.getExperimentCodecs(self.experimentFlags);
            const logger2 = self.logger;
            logger2.info("Experimental codecs: " + JSON.stringify(experimentCodecs));
            const obj2 = createVoiceConnection(dependencyMap[7]);
            const parseNativeCodecsResult = obj2.parseNativeCodecs(arg0);
            let obj3 = { type: "audio", name: constants2.OPUS, priority: 1, payloadType: 120 };
            let items = [obj3];
            if (self.videoSupported) {
              const tmp4Result = createVoiceConnection(dependencyMap[7]);
              let result = tmp4Result.filterParsedVideoCodecs(parseNativeCodecsResult, experimentCodecs, tmp8);
              mapped = result.map((name, index) => {
                const sum = 101 + 2 * index;
                return { type: "video", name: name.name, priority: index + 1, payloadType: sum, rtxPayloadType: sum + 1, encode: name.encode, decode: name.decode };
              });
            } else {
              mapped = [];
            }
            HermesBuiltin.arraySpread(items, mapped, 1);
            self.codecs = items;
            map = new Map(parseNativeCodecsResult.map((item) => {
              const items = [, ];
              ({ name: arr[0], encode: arr[1] } = item);
              return items;
            }));
            const codecs1 = self.codecs;
            self.initialCodecs = codecs1.map((type) => {
              let encode;
              const obj = { encode };
              const merged = Object.assign(type);
              if ("video" === type.type) {
                let encode2 = map.get(type.name);
                if (encode2 == null) {
                  encode2 = type.encode;
                }
                encode = encode2;
              } else {
                encode = type.encode;
              }
              return obj;
            });
            ({ logger: logger3, codecs } = self);
            let info = logger3.info;
            const found = codecs.filter((type) => "audio" === type.type);
            info("Audio codecs: " + found.map((name) => name.name));
            ({ logger: logger4, codecs: codecs2 } = self);
            const info2 = logger4.info;
            const found1 = codecs2.filter((type) => "video" === type.type);
            info2("Video codecs: " + found1.map((name) => name.name + "[encode: " + name.encode + ", decode: " + name.decode + "]"));
            const encryptionModes = port.getEncryptionModes((arg0) => {
              self.onEncryptionModesCallbackAt = performance.now();
              let logger = self.logger;
              logger.info("Encryption modes: " + arg0);
              port.setTransportOptions(self.getConnectionTransportOptions());
              let selfMute = self.selfMute;
              const setSelfMute = port.setSelfMute;
              if (!selfMute) {
                selfMute = self.context === constants3.STREAM;
              }
              setSelfMute(selfMute);
              port.setSelfDeafen(self.selfDeaf);
              const result = port.setOnSpeakingCallback(self.handleSpeakingNative);
              if (port.setOnNativeMuteChangedCallback != null) {
                const result1 = setOnNativeMuteChangedCallback(self.handleNativeMuteChanged);
              }
              if (port.setOnSpeakingWhileMutedCallback != null) {
                const result2 = setOnSpeakingWhileMutedCallback(self.handleSpeakingWhileMuted);
              }
              const setPingInterval = port.setPingInterval;
              if (setPingInterval != null) {
                setPingInterval(closure_3_27);
              }
              port.setPingCallback(self.handlePing);
              if (port.setPingTimeoutCallback != null) {
                const result3 = setPingTimeoutCallback(self.handlePingTimeout);
              }
              if (port.setOnVideoEncoderFallbackCallback != null) {
                const result4 = setOnVideoEncoderFallbackCallback(self.handleVideoEncoderFallback);
              }
              if (port.setOnVideoDecoderFallbackCallback != null) {
                const result5 = setOnVideoDecoderFallbackCallback(self.handleVideoDecoderFallback);
              }
              if (port.setVideoCodecErrorCallback != null) {
                const result6 = setVideoCodecErrorCallback(self.handleVideoCodecError);
              }
              const obj3 = { builtInEchoCancellation: true, echoCancellation: self.echoCancellation, noiseSuppression: self.noiseSuppression, automaticGainControl: self.automaticGainControl.enabled, automaticGainControlConfig: self.automaticGainControl, noiseCancellation: self.noiseCancellation, noiseCancellationDuringProcessing: self.noiseCancellationDuringProcessing };
              voiceEngine.setTransportOptions(obj3);
              voiceEngine.setNoInputThreshold(-100);
              voiceEngine.setNoInputCallback(self.handleNoInput);
              if (self.videoSupported) {
                port.setOnVideoCallback(self.handleVideo);
                if (port.setOnFirstFrameCallback != null) {
                  const result7 = setOnFirstFrameCallback(self.handleFirstFrame);
                }
                if (port.setOnFirstFrameDeliveredStatsCallback != null) {
                  const result8 = setOnFirstFrameDeliveredStatsCallback(self.handleFirstFrameStats);
                }
                if (port.setOnFirstFrameEncryptedStatsCallback != null) {
                  const result9 = setOnFirstFrameEncryptedStatsCallback(self.handleFirstFrameEncryptedStats);
                }
                const setOnDesktopSourceEnded = port.setOnDesktopSourceEnded;
                if (setOnDesktopSourceEnded != null) {
                  const result10 = setOnDesktopSourceEnded(self.handleDesktopSourceEnded);
                }
                const setOnSoundshare = port.setOnSoundshare;
                if (setOnSoundshare != null) {
                  setOnSoundshare(self.handleSoundshare);
                }
                const setOnSoundshareEnded = port.setOnSoundshareEnded;
                if (setOnSoundshareEnded != null) {
                  setOnSoundshareEnded(self.handleSoundshareEnded);
                }
                const setOnSoundshareFailed = port.setOnSoundshareFailed;
                if (setOnSoundshareFailed != null) {
                  const result11 = setOnSoundshareFailed(self.handleSoundshareFailed);
                }
              }
              if (port.setOnMLSFailureCallback != null) {
                const result12 = setOnMLSFailureCallback(self.handleMLSFailure);
              }
              self.setConnectionState(constants.CONNECTED);
              const emit = self.emit;
              const obj4 = { address, port, mode: self.chooseEncryptionMode(address.modes, arg0), codecs: self.codecs };
              const Connected = createVoiceConnection(dependencyMap[6]).BaseConnectionEvent.Connected;
              emit(Connected, map, obj4);
              self.on(createVoiceConnection(dependencyMap[6]).BaseConnectionEvent.Stats, self.handleStats);
              const userOptions = self.getUserOptions();
              const item = userOptions.forEach((item) => {
                let id;
                let ssrc;
                let videoSsrcs;
                logger = logger.logger;
                ({ id, ssrc, videoSsrcs } = item);
                let num;
                const info = logger.info;
                if (videoSsrcs != null) {
                  num = videoSsrcs.join(",");
                }
                if (num == null) {
                  num = 0;
                }
                return info("Creating user: " + id + " with audio SSRC: " + ssrc + " and video SSRCs: " + num);
              });
              self.mergeUsers(userOptions);
              self.emit(createVoiceConnection(dependencyMap[6]).BaseConnectionEvent.RemoteStreamsReady, userOptions.length);
              const keys = Object.keys(self.localSpeakingFlags);
              for (const item10172 of keys) {
                if (item10172 !== self.userId) {
                  let setSpeakingFlagsResult = self.setSpeakingFlags(item10172, self.localSpeakingFlags[item10172]);
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
        self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.SecureFramesUpdate, arg0);
      });
    }
    if (fnResult.setDesktopSourceStatusCallback != null) {
      let result3 = setDesktopSourceStatusCallback((type) => {
        let desktopCapturerType;
        let hybridCaptureMethodSwitches;
        let hybridDxgiFrames;
        let hybridDxgiFramesUnique;
        let hybridGdiBitBltFrames;
        let hybridGdiBitBltFramesUnique;
        let hybridGdiFrames;
        let hybridGdiPrintWindowFrames;
        let hybridGdiPrintWindowFramesUnique;
        let hybridGraphicsCaptureFrames;
        let hybridGraphicsCaptureFramesUnique;
        let hybridVideohookFrames;
        let hybridVideohookFramesUnique;
        let quartzFrames;
        let screenshareFrames;
        let skipHistoryJson;
        let videohookFrames;
        if ("videohook_start" === type.type) {
          self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoHookStart);
        } else if ("videohook_stop" === type.type) {
          self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoHookStop);
        } else if ("videohook_initialize" === type.type) {
          self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoHookInitialize, type.backend, type.format, type.framebufferFormat, type.sampleCount, type.success, type.reinitialization);
        } else if ("screenshare_finish" === type.type) {
          const emit = self.emit;
          const ScreenshareFinish = discord_common_BaseConnectionEvent.BaseConnectionEvent.ScreenshareFinish;
          ({ screenshareFrames, videohookFrames, hybridDxgiFrames, hybridGdiFrames, hybridVideohookFrames, hybridGraphicsCaptureFrames, hybridCaptureMethodSwitches, hybridGdiBitBltFrames, hybridGdiPrintWindowFrames, hybridGraphicsCaptureFramesUnique, hybridDxgiFramesUnique, hybridVideohookFramesUnique, hybridGdiBitBltFramesUnique, hybridGdiPrintWindowFramesUnique, skipHistoryJson, quartzFrames, desktopCapturerType } = type);
          if (desktopCapturerType == null) {
            desktopCapturerType = type.desktop_capturer_type;
          }
          emit(ScreenshareFinish, screenshareFrames, videohookFrames, hybridDxgiFrames, hybridGdiFrames, hybridVideohookFrames, hybridGraphicsCaptureFrames, hybridCaptureMethodSwitches, hybridGdiBitBltFrames, hybridGdiPrintWindowFrames, hybridGraphicsCaptureFramesUnique, hybridDxgiFramesUnique, hybridVideohookFramesUnique, hybridGdiBitBltFramesUnique, hybridGdiPrintWindowFramesUnique, skipHistoryJson, quartzFrames, desktopCapturerType, type.activity, type.goLiveCameraFrames, type.screenCaptureKitFrames, type.hdrFramesCapable, type.hdrFrames, type.targetWindowElevated, type.pipewireFrames, type.x11Frames, type.videohookBackend);
        } else if ("video_state" === type.type) {
          self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoState, type.state);
        } else {
          type = type.type;
          if (type.startsWith("soundshare_")) {
            self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.SoundshareTrace, type);
          }
        }
      });
    }
    self.on("newListener", self.handleNewListenerNative);
  }
  destroy() {
    const self = this;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const conn = self.conn;
    conn.destroy(flag);
    const keys = Object.keys(self.localSpeakingFlags);
    const found = keys.filter((item) => item !== self.userId);
    const item = found.forEach((item) => self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Speaking, item, constants.NONE, self.remoteAudioSSRCs[item]));
    self.setConnectionState(constants4.DISCONNECTED);
    super.destroy();
  }
  setCodecs(OPUS, H264, context) {
    const self = this;
    this.currentVideoCodec = H264;
    if (this.currentVideoCodec !== H264) {
      if (null != self.lastDesktopEncodingOptions) {
        const lastDesktopEncodingOptions = self.lastDesktopEncodingOptions;
        const result = self.setDesktopEncodingOptions(lastDesktopEncodingOptions.width, lastDesktopEncodingOptions.height, lastDesktopEncodingOptions.framerate);
      }
    }
    const conn = self.conn;
    conn.setTransportOptions(self.getCodecOptions(OPUS, H264, context));
    if (self.videoEncoderFallbackPending) {
      self.videoEncoderFallbackPending = false;
    }
  }
  getStats() {
    let resolved;
    let self = this;
    if (this.connectionState === constants4.DISCONNECTED) {
      resolved = Promise.resolve(null);
    } else {
      const tmp = self;
      const tmp3 = self(5007);
      self = this;
      const self2 = this;
      const timeout = tmp3.timeout;
      const promise = new Promise((arg0) => {
        let closure_0;
        conn = arg0;
        if (null != conn.conn.getFilteredStats) {
          const conn2 = tmp.conn;
          const filteredStats = conn2.getFilteredStats(constants.ALL, (arg0) => closure_0(transformStatsDefault(self.mediaEngineConnectionId, arg0, self.remoteVideoSinkWants, self.localVideoSinkWants)));
        } else if (null != conn.conn.getStats) {
          conn = tmp.conn;
          const stats = conn.getStats((arg0) => closure_0(transformStatsDefault(self.mediaEngineConnectionId, arg0, self.remoteVideoSinkWants, self.localVideoSinkWants)));
        } else {
          const obj = self(dependencyMap[4]);
          const voiceEngine = obj.getVoiceEngine();
          const stats1 = voiceEngine.getStats((arg0) => closure_0(transformStatsDefault(self.mediaEngineConnectionId, arg0, self.remoteVideoSinkWants, self.localVideoSinkWants)));
        }
      });
      const timeoutResult = timeout(promise, self(4956).STATS_INTERVAL);
      resolved = timeoutResult.catch((error) => {
        if (!(error instanceof self(dependencyMap[8]).TimeoutError)) {
          throw error;
        }
      });
    }
    return resolved;
  }
  createUser(id, ssrc, arg2) {
    let num6;
    let sorted;
    let sorted1;
    const self = this;
    if (null != this.remoteAudioSSRCs[id]) {
      if (0 === ssrc) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("Ignoring attempt to recreate user " + id + " with 0 audio SSRC");
      }
    }
    if (undefined !== this.remoteVideoSSRCs[id]) {
      const items = [];
      HermesBuiltin.arraySpread(items, this.remoteVideoSSRCs[id], 0);
      sorted = items.sort();
    } else {
      sorted = [];
    }
    if (undefined === arg2) {
      let items1 = sorted;
      if (sorted == null) {
        items1 = [];
      }
      sorted1 = items1;
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, arg2, 0);
      sorted1 = items2.sort();
    }
    isEqualDefault(sorted, sorted1);
    self.remoteAudioSSRCs[id] = ssrc;
    let items3 = sorted1;
    const remoteVideoSSRCs = self.remoteVideoSSRCs;
    if (sorted1 == null) {
      items3 = [];
    }
    remoteVideoSSRCs[id] = items3;
    if (self.userId !== id) {
      if (this.remoteAudioSSRCs[id] !== ssrc) {
        let num5 = 0;
        if (undefined !== sorted1) {
          num5 = 0;
          if (sorted1.length > 0) {
            num5 = sorted1[0];
          }
        }
        const obj = { id, ssrc, videoSsrc: num5, videoSsrcs: sorted1, rtxSsrc: num6, mute: self.getLocalMute(id), volume: self.getLocalVolume(id) };
        num6 = 0;
        if (null != num5) {
          num6 = 0;
          if (0 !== num5) {
            num6 = num5 + 1;
          }
        }
        if (self.connectionState === map1.CONNECTED) {
          const logger2 = self.logger;
          let num8;
          const info = logger2.info;
          if (sorted1 != null) {
            num8 = sorted1.join(",");
          }
          if (num8 == null) {
            num8 = 0;
          }
          const _HermesInternal2 = HermesInternal;
          info("Creating user: " + id + " with audio SSRC: " + ssrc + " and video SSRCs: " + num8);
          const items4 = [obj];
          self.mergeUsers(items4);
        }
        const rect = self.localPans[id];
        if (null != rect) {
          self.setLocalPan(id, rect.left, rect.right);
        }
        const tmp22 = null != tmp21 && tmp21 !== constants6.NONE;
        if (tmp22) {
          self.setSpeakingFlags(id, self.localSpeakingFlags[id]);
        }
      }
    }
  }
  destroyUser(arg0) {
    const self = this;
    if (null != this.remoteAudioSSRCs[arg0]) {
      const conn = self.conn;
      conn.destroyUser(arg0);
      delete self.remoteAudioSSRCs[arg0];
      delete self.remoteVideoSSRCs[arg0];
    }
  }
  setSelfMute(selfMute) {
    this.selfMute = selfMute;
    const conn = this.conn;
    conn.setSelfMute(selfMute);
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Mute, selfMute);
  }
  getSelfMute() {
    return this.selfMute;
  }
  getSelfDeaf() {
    return this.selfDeaf;
  }
  setSelfDeaf(deaf) {
    this.selfDeaf = deaf;
    const conn = this.conn;
    conn.setSelfDeafen(deaf);
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Deafen, deaf);
  }
  setSoundshareSource(arg0, soundshareLoopback) {
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
        const obj = { soundsharePid: num, soundshareEventDriven: true, soundshareLoopback };
        conn.setTransportOptions(obj);
      }
    }
  }
  setLocalMute(userId, flag) {
    this.localMutes[userId] = flag;
    const conn = this.conn;
    conn.setLocalMute(userId, flag);
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.LocalMute, userId, flag);
  }
  setUserPosition(item10006, position) {
    const conn = this.conn;
    const setUserPosition = conn.setUserPosition;
    if (setUserPosition != null) {
      setUserPosition(item10006, position);
    }
  }
  fastUdpReconnect() {
    const self = this;
    if (null != this.conn.fastUdpReconnect) {
      self.numFastUdpReconnects = self.numFastUdpReconnects + 1;
      const conn = self.conn;
      conn.fastUdpReconnect();
    }
  }
  setUdpEndpoint(address) {
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
  }
  getNumFastUdpReconnects() {
    let numFastUdpReconnects = null;
    if (null != this.conn.fastUdpReconnect) {
      numFastUdpReconnects = this.numFastUdpReconnects;
    }
    return numFastUdpReconnects;
  }
  wasRemoteDisconnected() {
    const conn = this.conn;
    const wasRemoteDisconnected = conn.wasRemoteDisconnected;
    if (wasRemoteDisconnected != null) {
      const result = wasRemoteDisconnected();
    }
  }
  setLocalVideoDisabled(arg0, arg1) {
    this.disabledLocalVideos[arg0] = arg1;
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.LocalVideoDisabled, arg0, arg1);
  }
  setMinimumJitterBufferLevel(minimumJitterBufferLevel) {
    this.minimumJitterBufferLevel = minimumJitterBufferLevel;
  }
  setPostponeDecodeLevel(postponeDecodeLevel) {
    this.postponeDecodeLevel = postponeDecodeLevel;
  }
  setClipRecordUser(arg0, arg1, arg2) {
    const self = this;
    if (!this.destroyed) {
      let str = "soundboardAudio";
      if ("soundboard" !== arg1) {
        let str3 = "user";
        if (self.context === constants5.STREAM) {
          str3 = "application";
        }
        let str4 = "Video";
        const concat = str3.concat;
        if ("audio" === arg1) {
          str4 = "Audio";
        }
        str = concat(str4);
      }
      const conn = self.conn;
      const setClipRecordUser = conn.setClipRecordUser;
      if (setClipRecordUser != null) {
        setClipRecordUser(arg0, str, arg2);
      }
    }
  }
  setRemoteAudioHistory(remoteAudioHistoryMs) {
    const conn = this.conn;
    const obj = { remoteAudioHistoryMs };
    conn.setTransportOptions(obj);
  }
  setQualityDecoupling(enableQualityDecoupling) {
    if (this.context === constants5.STREAM) {
      const conn = tmp.conn;
      const obj = { enableQualityDecoupling };
      conn.setTransportOptions(obj);
    }
  }
  getLocalVolume(arg0) {
    let tmp = this.localVolumes[arg0];
    if (null == tmp) {
      tmp = this.context === constants5.DEFAULT ? closure_20 : closure_21;
    }
    if (null == tmp) {
      tmp = closure_20;
    }
    return tmp / closure_20;
  }
  setLocalVolume(arg0, arg1) {
    const self = this;
    this.localVolumes[arg0] = arg1;
    try {
      const conn = self.conn;
      conn.setLocalVolume(arg0, self.getLocalVolume(arg0));
    } catch (err) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("Failed to set volume for user: " + arg0 + ": " + arg1);
    }
  }
  setLocalPan(arg0, left, right) {
    this.localPans[arg0] = { left, right };
    const conn = this.conn;
    conn.setLocalPan(arg0, left, right);
  }
  isAttenuating() {
    return this.attenuationFactor < 1;
  }
  setAttenuation(arg0, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers) {
    this.attenuationFactor = (100 - arg0) / 100;
    this.attenuateWhileSpeakingSelf = attenuateWhileSpeakingSelf;
    this.attenuateWhileSpeakingOthers = attenuateWhileSpeakingOthers;
    const conn = this.conn;
    conn.setTransportOptions(this.getAttenuationOptions());
  }
  setCanHavePriority(arg0, arg1) {
    const conn = this.conn;
    const setRemoteUserCanHavePriority = conn.setRemoteUserCanHavePriority;
    if (setRemoteUserCanHavePriority != null) {
      const result = setRemoteUserCanHavePriority(arg0, arg1);
    }
  }
  setBitRate(bitrate) {
    this.setVoiceBitRate(bitrate);
  }
  setVoiceBitRate(voiceBitrate) {
    const self = this;
    if (this.voiceBitrate !== voiceBitrate) {
      self.voiceBitrate = voiceBitrate;
      voiceBitrate = self.voiceBitrate;
      let bound = voiceBitrate;
      if (self.soundshareActive) {
        const _Math = Math;
        bound = Math.max(afk, voiceBitrate);
      }
      const conn = self.conn;
      const obj = { encodingVoiceBitRate: bound };
      conn.setTransportOptions(obj);
    }
  }
  setCameraBitRate(encodingVideoBitRate, bitrateMax, encodingVideoMinBitRate) {
    const self = this;
    if (null == encodingVideoMinBitRate) {
      if (null == bitrateMax) {
        const videoQualityManager = self.videoQualityManager;
        videoQualityManager.setQualityOverwrite({});
      }
      if (!self.hasDesktopSource()) {
        const conn = self.conn;
        const obj2 = { encodingVideoBitRate, encodingVideoMinBitRate, encodingVideoMaxBitRate: bitrateMax };
        conn.setTransportOptions(obj2);
      }
    }
    const videoQualityManager2 = self.videoQualityManager;
    let tmp2 = bitrateMax;
    const setQualityOverwrite = videoQualityManager2.setQualityOverwrite;
    if (null != encodingVideoMinBitRate) {
      tmp2 = bitrateMax;
      if (encodingVideoMinBitRate > 0) {
        tmp2 = encodingVideoMinBitRate;
      }
    }
    const obj = { bitrateMin: tmp2, bitrateMax };
    setQualityOverwrite(obj);
  }
  setEchoCancellation(echoCancellation) {
    this.echoCancellation = echoCancellation;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { echoCancellation: this.echoCancellation };
    voiceEngine.setTransportOptions(obj2);
  }
  setNoiseSuppression(noiseSuppression) {
    this.noiseSuppression = noiseSuppression;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { noiseSuppression: this.noiseSuppression };
    voiceEngine.setTransportOptions(obj2);
  }
  setAutomaticGainControl(automaticGainControl) {
    this.automaticGainControl = automaticGainControl;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { automaticGainControl: this.automaticGainControl.enabled, automaticGainControlConfig: this.automaticGainControl };
    voiceEngine.setTransportOptions(obj2);
  }
  setNoiseCancellation(noiseCancellation) {
    this.noiseCancellation = noiseCancellation;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { noiseCancellation: this.noiseCancellation };
    voiceEngine.setTransportOptions(obj2);
  }
  setNoiseCancellationDuringProcessing(noiseCancellationDuringProcessing) {
    this.noiseCancellationDuringProcessing = noiseCancellationDuringProcessing;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing };
    voiceEngine.setTransportOptions(obj2);
  }
  setSkipNoiseCancellationIfMuted(enabled) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { skipNoiseCancellationIfMuted: enabled };
    voiceEngine.setTransportOptions(obj2);
  }
  setEchoReferenceMode(echoReferenceMode) {
    this.echoReferenceMode = echoReferenceMode;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { echoReferenceMode: this.echoReferenceMode };
    voiceEngine.setTransportOptions(obj2);
  }
  getNoiseCancellation() {
    return this.noiseCancellation;
  }
  setQoS(qos) {
    this.qos = qos;
    const conn = this.conn;
    const obj = { qos: this.qos };
    conn.setTransportOptions(obj);
  }
  setSoundshareDiscardRearChannels(someResult1) {
    const conn = this.conn;
    const obj = { soundshareDiscardRearChannels: someResult1 };
    conn.setTransportOptions(obj);
  }
  setInputMode(inputMode, pttReleaseDelay) {
    const self = this;
    this.inputMode = inputMode;
    if (constants3.PUSH_TO_TALK === inputMode) {
      self.pttReleaseDelay = pttReleaseDelay.pttReleaseDelay;
    } else if (tmp.VOICE_ACTIVITY === inputMode) {
      ({ vadThreshold: self.vadThreshold, vadAutoThreshold: self.vadAutoThreshold, vadUseKrisp: self.vadUseKrisp, vadLeading: self.vadLeading, vadTrailing: self.vadTrailing, vadKrispActivationThreshold: self.vadKrispActivationThreshold } = pttReleaseDelay);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const error = new Error("Unknown Input Mode: " + inputMode);
      throw error;
    }
    const conn = self.conn;
    const obj = { inputMode: unpackModuleId[self.inputMode], inputModeOptions: self.createInputModeOptions() };
    conn.setTransportOptions(obj);
  }
  setSilenceThreshold(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    voiceEngine.setNoInputThreshold(arg0);
  }
  setForceAudioInput(arg0) {
    let flag2 = arg2;
    if (arg2 === undefined) {
      flag2 = false;
    }
    const conn = this.conn;
    conn.setPTTActive(arg0, flag, flag2);
  }
  setSpeakingFlags(id, flag) {
    const self = this;
    if (null != this.conn.setRemoteUserSpeakingStatus) {
      const conn2 = self.conn;
      const result = conn2.setRemoteUserSpeakingStatus(id, flag);
    } else if (null != self.conn.setRemoteUserSpeaking) {
      const conn = self.conn;
      const result1 = conn.setRemoteUserSpeaking(id, (flag & constants6.VOICE) === constants6.VOICE);
    }
    self.handleSpeakingFlags(id, flag);
  }
  clearAllSpeaking() {

  }
  setEncryption(mode, secretKey) {
    let obj2;
    const logger = this.logger;
    logger.info("Selected encryption mode: " + mode);
    const conn = this.conn;
    const obj = { encryptionSettings: obj2 };
    obj2 = { mode, secretKey };
    conn.setTransportOptions(obj);
  }
  setReconnectInterval(reconnectInterval) {
    this.reconnectInterval = reconnectInterval;
    const conn = this.conn;
    const obj = { reconnectInterval: this.reconnectInterval };
    conn.setTransportOptions(obj);
  }
  setKeyframeInterval(keyframeInterval) {
    this.keyframeInterval = keyframeInterval;
    const conn = this.conn;
    const obj = { keyframeInterval: this.keyframeInterval, alwaysSendVideo: this.keyframeInterval > 0 };
    conn.setTransportOptions(obj);
  }
  setVideoQualityMeasurement(videoQualityMeasurement) {
    this.videoQualityMeasurement = videoQualityMeasurement;
    const conn = this.conn;
    const obj = { videoQualityMeasurement: this.videoQualityMeasurement };
    conn.setTransportOptions(obj);
  }
  setVideoEncoderExperiments(videoEncoderExperiments) {
    this.videoEncoderExperiments = videoEncoderExperiments;
    const conn = this.conn;
    const obj = { videoEncoderExperiments: this.videoEncoderExperiments };
    conn.setTransportOptions(obj);
  }
  setSingleCpuCopy(enabled) {
    this.singleCpuCopy = enabled;
    const conn = this.conn;
    const obj = { singleCpuCopy: this.singleCpuCopy };
    conn.setTransportOptions(obj);
  }
  setAudioVideoOverridesTransport(overrideDeniedVideoCodecs) {
    const self = this;
    let someResult = null != overrideDeniedVideoCodecs.overrideDeniedVideoCodecs && overrideDeniedVideoCodecs.overrideDeniedVideoCodecs !== self.lastOverrideCodecDenylist;
    let obj = {};
    if (someResult) {
      obj.overrideDeniedVideoCodecs = overrideDeniedVideoCodecs.overrideDeniedVideoCodecs;
    }
    if (null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders && overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist) {
      obj.overrideDeniedVideoEncoders = overrideDeniedVideoCodecs.overrideDeniedVideoEncoders;
    }
    if (null != overrideDeniedVideoCodecs.captureOverrides && overrideDeniedVideoCodecs.captureOverrides !== self.lastCaptureOverrides) {
      obj.captureOverrides = overrideDeniedVideoCodecs.captureOverrides;
    }
    const tmp4 = someResult || null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders && overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist || null != overrideDeniedVideoCodecs.captureOverrides && overrideDeniedVideoCodecs.captureOverrides !== self.lastCaptureOverrides;
    if (tmp4) {
      const conn = self.conn;
      conn.setTransportOptions(obj);
    }
    if (someResult) {
      self.lastOverrideCodecDenylist = overrideDeniedVideoCodecs.overrideDeniedVideoCodecs;
    }
    if (null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders && overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist) {
      self.lastOverrideEncoderDenylist = overrideDeniedVideoCodecs.overrideDeniedVideoEncoders;
    }
    if (null != overrideDeniedVideoCodecs.captureOverrides && overrideDeniedVideoCodecs.captureOverrides !== self.lastCaptureOverrides) {
      self.lastCaptureOverrides = overrideDeniedVideoCodecs.captureOverrides;
    }
    const tmp6 = someResult || null != overrideDeniedVideoCodecs.overrideDeniedVideoEncoders && overrideDeniedVideoCodecs.overrideDeniedVideoEncoders !== self.lastOverrideEncoderDenylist;
    if (tmp6) {
      self.videoEncoderFallbackPending = false;
      const videoDecoderFallbackSent = self.videoDecoderFallbackSent;
      videoDecoderFallbackSent.clear();
    }
    if (someResult) {
      if (self.initialCodecs.length > 0) {
        set = null;
        if (self.lastOverrideCodecDenylist.length > 0) {
          const _Set = Set;
          let str = self.lastOverrideCodecDenylist;
          const parts = str.split(",");
          const self2 = this;
          const self3 = this;
          set = new Set(parts.map((item) => {
            const str = item.trim();
            return str.toUpperCase();
          }));
        }
        const initialCodecs = self.initialCodecs;
        const mapped = initialCodecs.map((item) => {
          const obj = {};
          const merged = Object.assign(item);
          return obj;
        });
        const found = mapped.filter((type) => {
          const tmp = "video" !== type.type || null == set || "VP8" === type.name || "VP9" === type.name || !set.has(type.name);
          return tmp;
        });
        const _Set2 = Set;
        const codecs = self.codecs;
        const found1 = codecs.filter((type) => "video" === type.type && type.encode);
        const self4 = this;
        const self5 = this;
        const _Set3 = Set;
        const set1 = new Set(found1.map((name) => name.name));
        const found2 = found.filter((type) => "video" === type.type && type.encode);
        const self6 = this;
        const self7 = this;
        set2 = new Set(found2.map((name) => name.name));
        const items = [];
        HermesBuiltin.arraySpread(items, set1, 0);
        self.codecs = found;
        if (someResult) {
          someResult = items.some((item) => !set2.has(item));
        }
        if (someResult) {
          const _performance = performance;
          self.overrideCodecResetAt = performance.now();
        }
        self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.VideoEncoderFallback, self.codecs);
      }
    }
  }
  setVideoBroadcast(self) {
    self = this;
    if (this.selfVideo !== self) {
      self.selfVideo = self;
      const result = self.applyVideoTransportOptions();
    }
  }
  setGoLiveSource(quality) {
    let allowScreenCaptureKit;
    let enableGlobalFramePoolLock;
    let frameRate;
    let graphicsCaptureStaleFrameTimeoutMs;
    let hdrCaptureMode;
    let id;
    let id1;
    let minCaptureHeight;
    let minCaptureWidth;
    let resolution;
    let result;
    let tmp8;
    let tmp9;
    let useCaptureDeviceForEncode;
    let useGraphicsCapture;
    let useGraphicsCaptureApiLevel;
    let useGraphicsCaptureDirtyRegions;
    let useQuartzCapturer;
    let useVideoHook;
    let videoHookAllowDx12;
    let videoHookStaleFrameTimeoutMs;
    ({ resolution, frameRate } = quality.quality);
    if (resolution <= 480) {
      result = resolution / 3 * 4;
    } else {
      result = resolution / 9 * 16;
    }
    if (null != quality.desktopDescription) {
      id1 = quality.desktopDescription.id;
    } else {
      id1 = null;
      if (null != quality.cameraDescription) {
        const _HermesInternal = HermesInternal;
        id1 = "" + quality.cameraDescription.videoDeviceGuid + ":" + quality.cameraDescription.audioDeviceGuid;
      }
    }
    const self = this;
    if (this.goLiveSourceIdentifier !== id1) {
      self.goLiveSourceIdentifier = id1;
      if (null != self.conn.setDesktopSource) {
        if (null != quality.desktopDescription) {
          let parts;
          const desktopDescription = quality.desktopDescription;
          ({ id, useVideoHook, useGraphicsCaptureApiLevel, useCaptureDeviceForEncode, useGraphicsCapture, useQuartzCapturer, allowScreenCaptureKit, videoHookStaleFrameTimeoutMs, graphicsCaptureStaleFrameTimeoutMs, hdrCaptureMode, enableGlobalFramePoolLock, useGraphicsCaptureDirtyRegions, videoHookAllowDx12, minCaptureWidth, minCaptureHeight } = desktopDescription);
          self.setSoundshareSource(desktopDescription.soundshareId, desktopDescription.useLoopback);
          if (null != id) {
            parts = id.split(":");
          } else {
            parts = ["", ""];
          }
          [tmp8, tmp9] = parts;
          _slicedToArray(parts, 2);
          if (null != id) {
            const logger2 = self.logger;
            const info = logger2.info;
            let str13;
            const str1 = useVideoHook.toString();
            if (useGraphicsCapture != null) {
              str13 = useGraphicsCapture.toString();
            }
            let str14;
            if (useGraphicsCaptureApiLevel != null) {
              str14 = useGraphicsCaptureApiLevel.toString();
            }
            let str15;
            if (useCaptureDeviceForEncode != null) {
              str15 = useCaptureDeviceForEncode.toString();
            }
            const _HermesInternal2 = HermesInternal;
            info("capturing desktop (type: " + tmp8 + ", handle: " + tmp9 + ", use-video-hook: " + str1 + ", use-graphics-capture: " + str13 + ", use-graphics-capture-api-level: " + str14 + ", use-capture-device-for-encode: " + str15 + ").");
          } else {
            const logger = self.logger;
            logger.info("capturing desktop (type: <stop>).");
          }
          if (null != self.conn.setDesktopSourceWithOptions) {
            if (null != id) {
              const result1 = self.setDesktopEncodingOptions(result, resolution, frameRate);
              const conn3 = self.conn;
              const obj = { type: tmp8, sourceId: tmp9, useVideoHook, useGraphicsCapture, useGraphicsCaptureApiLevel, useCaptureDeviceForEncode, useQuartzCapturer, allowScreenCaptureKit, videoHookStaleFrameTimeoutMs, graphicsCaptureStaleFrameTimeoutMs, hdrCaptureMode, enableGlobalFramePoolLock, useGraphicsCaptureDirtyRegions, videoHookAllowDx12, minCaptureWidth, minCaptureHeight };
              const result2 = conn3.setDesktopSourceWithOptions(obj);
            } else {
              const conn2 = self.conn;
              conn2.clearDesktopSource();
            }
          } else {
            const conn = self.conn;
            const _HermesInternal3 = HermesInternal;
            conn.setDesktopSource("wumpus-" + tmp9, useVideoHook, tmp8);
          }
        } else if (null != quality.cameraDescription) {
          const conn4 = self.conn;
          const obj3 = { videoInputDeviceId: null, audioInputDeviceId: null };
          ({ videoDeviceGuid: obj2.videoInputDeviceId, audioDeviceGuid: obj2.audioInputDeviceId } = quality.cameraDescription);
          conn4.setGoLiveDevices(obj3);
        }
        const result3 = self.setDesktopEncodingOptions(result, resolution, frameRate);
      }
    } else {
      const result4 = self.setDesktopEncodingOptions(result, resolution, frameRate);
      if (null != quality.desktopDescription) {
        const soundshareId = quality.desktopDescription.soundshareId;
        if (self.soundshareId !== soundshareId) {
          self.setSoundshareSource(soundshareId, tmp29);
        }
      }
    }
  }
  clearGoLiveDevices() {
    if (null != this.conn.clearGoLiveDevices) {
      const conn = this.conn;
      conn.clearGoLiveDevices();
    }
  }
  clearDesktopSource() {
    const self = this;
    this.goLiveSourceIdentifier = null;
    if (null != this.conn.clearDesktopSource) {
      const conn2 = self.conn;
      conn2.clearDesktopSource();
    } else {
      const conn = self.conn;
      conn.setDesktopSource("", false, "");
    }
  }
  setDesktopSourceStatusCallback(arg0) {
    const conn = this.conn;
    if (conn.setDesktopSourceStatusCallback != null) {
      const result = setDesktopSourceStatusCallback(arg0);
    }
  }
  hasDesktopSource() {
    return null != this.goLiveSourceIdentifier;
  }
  setDesktopEncodingOptions(width, resolution, frameRate) {
    let audioSSRC;
    let userId;
    const self = this;
    if (!this.destroyed) {
      size = { width, height: resolution, framerate: frameRate };
      self.lastDesktopEncodingOptions = size;
      const size1 = { width, height: resolution, framerate: frameRate, videoCodec: self.currentVideoCodec };
      let calcMaxBitrateFuncResult = self.calcMaxBitrateFunc(size1);
      if (null == calcMaxBitrateFuncResult) {
        if (0 !== resolution) {
          if (resolution <= 720) {
            let tmp6;
            if (frameRate <= 30) {
              tmp6 = metroImportDefault;
            }
            calcMaxBitrateFuncResult = tmp6;
          }
        }
        tmp6 = metroRequire;
      }
      const size2 = { width, height: resolution, framerate: frameRate };
      const videoQualityManager = self.videoQualityManager;
      const quality = videoQualityManager.getQuality();
      const VideoQuality = VideoQualityManager.VideoQuality;
      const equalsResult = VideoQuality.equals(size2, quality.capture);
      let tmp11 = !equalsResult;
      if (equalsResult) {
        tmp11 = quality.bitrateMax !== calcMaxBitrateFuncResult;
      }
      const videoStreamParameters = self.videoStreamParameters;
      let num5 = videoStreamParameters.findIndex((quality) => quality.quality === closure_1_10);
      if (-1 === num5) {
        num5 = 0;
      }
      if (tmp11) {
        const videoQualityManager2 = self.videoQualityManager;
        const obj = { capture: size2, encode: size2, bitrateMax: calcMaxBitrateFuncResult };
        videoQualityManager2.setGoliveQuality(obj);
        if (self.videoStreamParameters.length > num5) {
          if (0 === width) {
            let FIXED;
            if (0 === resolution) {
              FIXED = constants7.SOURCE;
            }
            const size3 = { type: FIXED, width, height: resolution };
            tmp13.maxResolution = size3;
            self.videoStreamParameters[num5].maxFrameRate = frameRate;
            self.videoStreamParameters[num5].maxBitrate = calcMaxBitrateFuncResult;
          }
          FIXED = constants7.FIXED;
        }
        const emit = self.emit;
        const Video = discord_common_BaseConnectionEvent.BaseConnectionEvent.Video;
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
        emit(Video, userId, null, audioSSRC, ssrc, num8, self.videoStreamParameters);
        const conn = self.conn;
        conn.setTransportOptions(self.applyQualityConstraints().constraints);
      }
    }
  }
  setSDP() {

  }
  setRemoteVideoSinkWants(_remoteVideoSinkWants) {
    this.remoteVideoSinkWants = _remoteVideoSinkWants;
    this.updateVideoQuality(metroImportAll);
  }
  setLocalVideoSinkWants(localVideoSinkWants) {
    let tmp6;
    let tmp7;
    const self = this;
    localVideoSinkWants = this.localVideoSinkWants;
    const entries = Object.entries(this.remoteVideoSSRCs);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      let num = 0;
      let num2 = 0;
      for (const item10032 of tmp7) {
        let tmp12;
        if (localVideoSinkWants != null) {
          tmp12 = localVideoSinkWants[item10032];
        }
        num = num + tmp12;
        let tmp15;
        if (localVideoSinkWants != null) {
          tmp15 = localVideoSinkWants[item10032];
        }
        num2 = num2 + tmp15;
        continue;
      }
      let tmp18 = 0 === num;
      if (tmp18) {
        tmp18 = 0 !== num2;
      }
      if (tmp18) {
        let conn = self.conn;
        let setDisableLocalVideo = conn.setDisableLocalVideo;
        if (setDisableLocalVideo != null) {
          let setDisableLocalVideoResult = setDisableLocalVideo(tmp6, false);
        }
      }
      let tmp23 = 0 !== num;
      if (tmp23) {
        tmp23 = 0 === num2;
      }
      if (tmp23) {
        let conn2 = self.conn;
        let setDisableLocalVideo2 = conn2.setDisableLocalVideo;
        if (setDisableLocalVideo2 != null) {
          let result = setDisableLocalVideo2(tmp6, true);
        }
      }
      continue;
    }
    self.localVideoSinkWants = localVideoSinkWants;
  }
  startSamplesLocalPlayback(arg0, numberOfChannels, items, fn) {
    if (numberOfChannels.numberOfChannels > 2) {
      fn(2, "Too many channels");
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
      const obj = { sampleRate: numberOfChannels.sampleRate, volume: items };
      const result = conn.startSamplesLocalPlayback(arg0, obj, items, fn);
    } else {
      fn(3, "Not supported");
    }
  }
  stopAllSamplesLocalPlayback() {
    const conn = this.conn;
    const result = conn.stopAllSamplesLocalPlayback();
  }
  stopSamplesLocalPlayback(arg0) {
    const conn = this.conn;
    const stopSamplesLocalPlayback = conn.stopSamplesLocalPlayback;
    if (stopSamplesLocalPlayback != null) {
      const result = stopSamplesLocalPlayback(arg0);
    }
  }
  setBandwidthEstimationExperiments(mediaEngineExperiments) {
    const conn = this.conn;
    const obj = { bandwidthEstimationExperiments: mediaEngineExperiments };
    conn.setTransportOptions(obj);
  }
  updateVideoQualityCore(arg0) {
    const self = this;
    if (this.videoSupported) {
      if (!self.destroyed) {
        const conn = self.conn;
        conn.setTransportOptions(arg0);
      }
    }
  }
  setStreamParameters(arg0) {
    let closure_1 = arg0;
    let self = this;
    const promise = new Promise((fn, arg1) => {
      let closure_0 = arg1;
      function _loop(iter) {
        closure_0 = iter;
        const findIndexResult = closure_1.findIndex((rid) => rid.rid === rid.rid);
        if (-1 === findIndexResult) {
          const _Error = Error;
          self = this;
          const self2 = this;
          const error = new Error("Invalid rid");
          closure_0(error);
          return { v: "r" };
        } else {
          const items = [];
          if (!isEqualDefault(self.videoStreamParameters[findIndexResult], closure_1[findIndexResult])) {
            const videoStreamParameters = tmp16.videoStreamParameters;
            const obj = {};
            const merged = Object.assign(closure_1[findIndexResult]);
            videoStreamParameters[findIndexResult] = obj;
            const push = items.push;
            const obj2 = {};
            const merged1 = Object.assign(closure_1[findIndexResult]);
            push(obj2);
          }
          const conn = tmp16.conn;
          const obj3 = { streamParameters: items };
          conn.setTransportOptions(obj3);
        }
      }
      const iter = self.videoStreamParameters[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        let tmp2 = _loopResult;
        if (tmp2) {
          let v = _loopResult.v;
          iter.return();
          return v;
        }
      }
      fn();
    });
    return promise;
  }
  applyVideoTransportOptions() {
    const self = this;
    if (this.videoSupported) {
      let videoDegradationPreference;
      let flag = false;
      const hasDesktopSourceResult = self.hasDesktopSource() && self.videoStreamParameters.length > 0;
      if (hasDesktopSourceResult) {
        const maxResolution = self.videoStreamParameters[0].maxResolution;
        let type;
        if (maxResolution != null) {
          type = maxResolution.type;
        }
        flag = type === constants7.SOURCE;
      }
      const conn = self.conn;
      const setTransportOptions = conn.setTransportOptions;
      const applyQualityConstraints = self.applyQualityConstraints;
      if (self.hasDesktopSource()) {
        videoDegradationPreference = flag ? self.sourceDesktopDegradationPreference : self.desktopDegradationPreference;
      } else {
        videoDegradationPreference = self.videoDegradationPreference;
      }
      const obj = { encodingVideoDegradationPreference: videoDegradationPreference };
      setTransportOptions(applyQualityConstraints(obj).constraints);
      const conn2 = self.conn;
      conn2.setVideoBroadcast(self.selfVideo);
    }
  }
  chooseEncryptionMode(modes, arg1) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = modes[Symbol.iterator]();
      while (obj !== undefined) {
        if (tmp2 === tmp5) {
          obj.return();
          iter.return();
          return tmp2;
        }
      }
      continue;
    }
    return "xsalsa20_poly1305";
  }
  getUserOptions() {
    const self = this;
    const keys = Object.keys(this.remoteAudioSSRCs);
    return keys.map((id) => {
      let num2;
      let num = 0;
      if (undefined !== self.remoteVideoSSRCs[id]) {
        num = 0;
        if (self.remoteVideoSSRCs[id].length > 0) {
          num = self.remoteVideoSSRCs[id][0];
        }
      }
      const obj2 = { id, ssrc: self.remoteAudioSSRCs[id], videoSsrc: num, videoSsrcs: self.remoteVideoSSRCs[id], rtxSsrc: num2, mute: self.getLocalMute(id), volume: self.getLocalVolume(id) };
      num2 = 0;
      if (null != num) {
        num2 = 0;
        if (0 !== num) {
          num2 = num + 1;
        }
      }
      return obj2;
    });
  }
  createInputModeOptions() {
    let VADAggressiveness;
    let vadAutoThreshold;
    const self = this;
    const inputMode = this.inputMode;
    if (constants3.VOICE_ACTIVITY === inputMode) {
      const obj3 = { vadThreshold: self.vadThreshold, vadAutoThreshold: vadAutoThreshold ? VADAggressiveness.VERY_AGGRESSIVE : VADAggressiveness.DISABLED, vadUseKrisp: null, vadLeading: null, vadTrailing: null, vadKrispActivationThreshold: null };
      vadAutoThreshold = self.vadAutoThreshold;
      VADAggressiveness = discord_common_VoiceEngine.VADAggressiveness;
      ({ vadUseKrisp: obj2.vadUseKrisp, vadLeading: obj2.vadLeading, vadTrailing: obj2.vadTrailing, vadKrispActivationThreshold: obj2.vadKrispActivationThreshold } = self);
      return obj3;
    } else if (tmp.PUSH_TO_TALK === inputMode) {
      return { pttReleaseDelay: self.pttReleaseDelay };
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const error = new Error("Unknown Input Mode: " + self.inputMode);
      throw error;
    }
  }
  getAttenuationOptions() {
    const obj = { attenuation: this.isAttenuating(), attenuationFactor: this.attenuationFactor, attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers };
    return obj;
  }
  getCodecParams(name, arg1) {
    let obj2;
    if (name !== H264.H264) {
      obj2 = {};
    } else {
      const tmp = arg1;
      if (tmp) {
        obj2 = { "level-asymmetry-allowed": "1", "packetization-mode": "1", "profile-level-id": "42e034" };
      } else {
        let str = "4d0033";
        const obj = inject;
        if ("android" === obj.getVoiceEngine().platform) {
          str = "42e01f";
        }
        obj2 = { "level-asymmetry-allowed": "1", "packetization-mode": "1", "profile-level-id": str };
      }
    }
    return obj2;
  }
  getCodecOptions(name, H264, context) {
    let num3;
    let num4;
    let obj5;
    const self = this;
    let closure_0 = name;
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
    if (context === constants5.STREAM) {
      audioEncoder.channels = 2;
    }
    const videoDecoders = [];
    let obj = { name: "", type: 0, rtxType: 0, params: {} };
    const iter = self.codecs[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (nextResult.name !== name) {
        let obj2 = { name: obj5.codecNameToPayloadName(tmp4.name), type: num3, rtxType: num4, params: self.getCodecParams(tmp4.name, true) };
        obj5 = VideoCodecUtils;
        num3 = undefined;
        if (tmp4 != null) {
          num3 = tmp4.payloadType;
        }
        if (num3 == null) {
          num3 = 0;
        }
        num4 = undefined;
        if (tmp4 != null) {
          num4 = tmp4.rtxPayloadType;
        }
        if (num4 == null) {
          num4 = 0;
        }
        let tmp7 = obj2;
        let experimentFlags = self.experimentFlags;
        if (experimentFlags.has(hasOwnProperty.RESET_DECODER_ON_ERRORS)) {
          tmp7.params["reset-on-errors"] = "1";
        }
        let experimentFlags2 = self.experimentFlags;
        if (experimentFlags2.has(hasOwnProperty.SOFTWARE_FALLBACK_ON_ERRORS)) {
          tmp7.params["fallback-after-errors"] = "3";
        }
        let experimentFlags3 = self.experimentFlags;
        if (experimentFlags3.has(hasOwnProperty.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS)) {
          tmp7.params["fallback-on-consecutive-errors"] = "1";
        }
        let experimentFlags4 = self.experimentFlags;
        if (experimentFlags4.has(hasOwnProperty.SIGNAL_AV1_HARDWARE_DECODE)) {
          tmp7.params["hardware-av1-decode"] = "1";
        }
        name = tmp7.name;
        tmp7.params["hardware-h264"] = "1";
        let experimentFlags5 = self.experimentFlags;
        if (experimentFlags5.has(hasOwnProperty.USE_LIBOPENH264_DECODER)) {
          let tmp25Result = inject;
          let openH264LibraryPath = tmp25Result.getOpenH264LibraryPath();
          if (null != openH264LibraryPath) {
            tmp7.params.libopenh264 = "1";
            tmp7.params["libopenh264-path"] = tmp15;
          }
        }
        let arr = videoDecoders.push(tmp7);
        if (tmp4.name === H264) {
          let obj3 = { params: self.getCodecParams(tmp4.name, false) };
          let merged = Object.assign(tmp7);
          obj = obj3;
          let experimentFlags9 = self.experimentFlags;
          if (experimentFlags9.has(hasOwnProperty.VIDEOTOOLBOX_RATE_CONTROL)) {
            obj.params["fixed-rate-presentation-timestamps"] = "1";
          }
          let experimentFlags6 = self.experimentFlags;
          if (experimentFlags6.has(hasOwnProperty.LOW_LATENCY_RATE_CONTROL)) {
            obj.params["low-latency-rate-control"] = "1";
          }
          let experimentFlags7 = self.experimentFlags;
          if (experimentFlags7.has(hasOwnProperty.WMF_GPU_ENCODE)) {
            obj.params["wmf-gpu"] = "1";
          }
          let experimentFlags8 = self.experimentFlags;
          if (experimentFlags8.has(hasOwnProperty.INTEL_GPU_DISABLE)) {
            obj.params["intel-gpu"] = "0";
          }
        }
      }
      continue;
    }
    return { videoEncoder: obj, videoDecoders, audioEncoder, audioDecoders };
  }
  getConnectionTransportOptions() {
    const obj = { selfMute: this.selfMute, inputMode: unpackModuleId[this.inputMode], inputModeOptions: this.createInputModeOptions(), minimumJitterBufferLevel: this.minimumJitterBufferLevel, postponeDecodeLevel: this.postponeDecodeLevel, fec: true, packetLossRate: 0.3, qos: this.qos, prioritySpeakerDucking, encodingVoiceBitRate: this.voiceBitrate, callBitRate, callMinBitRate, callMaxBitRate };
    const merged = Object.assign(this.getAttenuationOptions());
    ({ videoDegradationPreference: obj.encodingVideoDegradationPreference, reconnectInterval: obj.reconnectInterval } = this);
    const obj2 = inject;
    const supportsFeatureResult = obj2.supportsFeature(constants8.VIDEO_EFFECTS) && this.context === constants5.STREAM;
    if (supportsFeatureResult) {
      obj.enableVideoEffects = true;
    }
    return obj;
  }
  setStream() {
    const error = new Error("Method not implemented.");
    throw error;
  }
  getUserIdBySsrc() {

  }
  prepareSecureFramesTransition(lastPreparedTransitionId, v, arg2) {
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
  }
  prepareSecureFramesEpoch(_1, v, trueChannelId) {
    const conn = this.conn;
    const prepareSecureFramesEpoch = conn.prepareSecureFramesEpoch;
    if (prepareSecureFramesEpoch != null) {
      const result = prepareSecureFramesEpoch(_1, v, trueChannelId);
    }
  }
  executeSecureFramesTransition(lastExecutedTransitionId) {
    const self = this;
    if (-1 !== this.lastExecutedTransitionId) {
      if (-1 !== self.lastPreparedTransitionId) {
        let tmp;
        if (self.lastPreparedTransitionId >= self.lastExecutedTransitionId) {
          tmp = lastExecutedTransitionId > self.lastExecutedTransitionId && lastExecutedTransitionId <= self.lastPreparedTransitionId;
        } else {
          tmp = lastExecutedTransitionId > self.lastExecutedTransitionId || lastExecutedTransitionId <= self.lastPreparedTransitionId;
        }
        if (!tmp) {
          const _HermesInternal = HermesInternal;
          const combined = "Skipping invalid transition " + lastExecutedTransitionId + " outside of range (" + self.lastExecutedTransitionId + "-" + self.lastPreparedTransitionId + "]";
          const logger = self.logger;
          logger.warn(combined);
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error(combined);
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
  }
  getMLSKeyPackage(arg0) {
    const conn = this.conn;
    const getMLSKeyPackage = conn.getMLSKeyPackage;
    if (getMLSKeyPackage != null) {
      const mLSKeyPackage = getMLSKeyPackage(arg0);
    }
  }
  updateMLSExternalSender(arg0) {
    const conn = this.conn;
    const updateMLSExternalSender = conn.updateMLSExternalSender;
    if (updateMLSExternalSender != null) {
      const result = updateMLSExternalSender(arg0);
    }
  }
  processMLSProposals(arg0, arg1) {
    const conn = this.conn;
    const processMLSProposals = conn.processMLSProposals;
    if (processMLSProposals != null) {
      processMLSProposals(arg0, arg1);
    }
  }
  prepareMLSCommitTransition(lastPreparedTransitionId, arg1, arg2) {
    this.lastPreparedTransitionId = lastPreparedTransitionId;
    const conn = this.conn;
    const prepareMLSCommitTransition = conn.prepareMLSCommitTransition;
    if (prepareMLSCommitTransition != null) {
      const result = prepareMLSCommitTransition(lastPreparedTransitionId, arg1, arg2);
    }
  }
  processMLSWelcome(lastPreparedTransitionId, arg1, arg2) {
    this.lastPreparedTransitionId = lastPreparedTransitionId;
    const conn = this.conn;
    const processMLSWelcome = conn.processMLSWelcome;
    if (processMLSWelcome != null) {
      processMLSWelcome(lastPreparedTransitionId, arg1, arg2);
    }
  }
  getMLSPairwiseFingerprint(arg0, arg1, arg2) {
    const conn = this.conn;
    const getMLSPairwiseFingerprint = conn.getMLSPairwiseFingerprint;
    if (getMLSPairwiseFingerprint != null) {
      const mLSPairwiseFingerprint = getMLSPairwiseFingerprint(arg0, arg1, arg2);
    }
  }
  presentDesktopSourcePicker(arg0) {
    const conn = this.conn;
    const presentDesktopSourcePicker = conn.presentDesktopSourcePicker;
    if (presentDesktopSourcePicker != null) {
      const result = presentDesktopSourcePicker(arg0);
    }
  }
  mergeUsers(items4) {
    const conn = this.conn;
    conn.mergeUsers(items4);
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.UsersMerged, items4);
  }
}
let closure_30 = Connection.prototype;
let size = size_mod;
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/Connection.tsx");

export default Connection;