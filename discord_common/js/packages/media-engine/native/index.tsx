// discord_common/js/packages/media-engine/native/index.tsx
import _slicedToArray from "_slicedToArray";
import Video from "Video";
import DesktopSources from "DesktopSources";
import AudioSubsystems from "AudioSubsystems";
import "on";
import { format } from "../../../../../_runtime/00669_format.js";
import { BaseConnectionEvent } from "../index.tsx";
import { create } from "Connection.tsx";
import { sanitizeDevices } from "Devices.tsx";
import { inject } from "inject.tsx";
import { Video } from "ui/Video.tsx";

let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ QUEUE_METRICS_INTERVAL_MS: c5, SIDECHAIN_COMPRESSION_MAX_RATIO: closure_6, SIDECHAIN_COMPRESSION_MAX_THRESHOLD: error, SIDECHAIN_COMPRESSION_MIN_RATIO: metroImportAll, SIDECHAIN_COMPRESSION_MIN_THRESHOLD: c9, ProcessPriority: c10 } = DesktopSources);
({ AudioSubsystems: unpackModuleId, ClipsRecordingEvent: closure_12, DEFAULT_VOLUME: map1, DeviceTypes: closure_14, DISABLED_DEVICE_ID: closure_15, Features: closure_16, MediaEngineContextTypes: closure_17, NativeFeatures: closure_18, WATCHDOG_TIMEOUT_MS: closure_19 } = AudioSubsystems);
class MediaEngineNative extends tmp4 {
  constructor() {
    c0 = undefined;
    obj = new MediaEngineNative(tmp9, tmp8, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    c0 = obj;
    tmp11 = pollMetrics;
    tmp10 = c1;
    obj.Video = require("Video");
    obj.Camera = require("Camera");
    obj.audioInputDeviceId = DISABLED_DEVICE_ID;
    obj.audioOutputDeviceId = DISABLED_DEVICE_ID;
    obj.videoInputDeviceId = DISABLED_DEVICE_ID;
    set = new Set();
    obj.connections = set;
    obj.lastVoiceActivity = -1;
    obj.audioSubsystem = "standard";
    obj.audioLayer = "";
    obj.deviceChangeGeneration = 0;
    obj.consecutiveWatchdogFailures = 0;
    obj.codecSurvey = null;
    obj.clipsRecordingEventContext = { id: "", soundshareId: 0, applicationName: "" };
    obj.clipsRecordingEventHandlerRegistered = false;
    tmp13 = c0;
    logger = new require("log").Logger("MediaEngineNative");
    obj.logger = logger;
    obj.handleDeviceChange = function handleDeviceChange(items, items, items) {
      if (items === undefined) {
        items = [];
      }
      let items1 = items;
      if (items === undefined) {
        items1 = [];
      }
      let items2 = items;
      if (items === undefined) {
        items2 = [];
      }
      obj.deviceChangeGeneration = obj.deviceChangeGeneration + 1;
      obj = obj(pollMetrics[13]);
      const sanitizeDevicesResult = obj.sanitizeDevices(outer1_14.AUDIO_INPUT, items);
      const obj2 = obj(pollMetrics[13]);
      const sanitizeDevicesResult1 = obj(pollMetrics[13]).sanitizeDevices(outer1_14.AUDIO_OUTPUT, items1);
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.DeviceChange, sanitizeDevicesResult, sanitizeDevicesResult1, obj(pollMetrics[13]).sanitizeDevices(outer1_14.VIDEO_INPUT, items2));
    };
    obj.handleVolumeChange = function handleVolumeChange(arg0, arg1) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.VolumeChange, arg0 * outer1_13, arg1 * outer1_13);
    };
    obj.handleVoiceActivity = function handleVoiceActivity(arg0, arg1) {
      const timestamp = Date.now();
      let tmp4 = obj.listenerCount(obj(pollMetrics[9]).MediaEngineEvent.VoiceActivity) > 0;
      if (tmp4) {
        let tmp5 = -1 === obj.lastVoiceActivity;
        if (!tmp5) {
          const _Date = Date;
          tmp5 = Date.now() - obj.lastVoiceActivity > 20;
        }
        tmp4 = tmp5;
      }
      if (tmp4) {
        obj.lastVoiceActivity = timestamp;
        obj.emit(obj(pollMetrics[9]).MediaEngineEvent.VoiceActivity, arg0, arg1);
      }
    };
    obj.handleActiveSinksChange = function handleActiveSinksChange(arg0, arg1) {
      let closure_1 = arg1;
      const connections = arg0.connections;
      const item = connections.forEach((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, closure_1, "MediaEngineNative.handleActiveSinksChange"));
    };
    obj.handleNewListener = function handleNewListener(arg0) {
      if (obj(pollMetrics[9]).MediaEngineEvent.VoiceActivity === arg0) {
        let tmpResult = tmp(tmp2[8]);
        if (null != tmpResult.getVoiceEngine().setEmitVADLevel2) {
          tmpResult = tmp(tmp2[8]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.setEmitVADLevel2(true);
        } else {
          const voiceEngine1 = tmp(tmp2[8]).getVoiceEngine();
          voiceEngine1.setEmitVADLevel(true, false, {});
          const tmpResult1 = tmp(tmp2[8]);
        }
      } else if (tmp(tmp2[9]).MediaEngineEvent.DeviceChange === arg0) {
        deviceChangeGeneration = deviceChangeGeneration.deviceChangeGeneration;
        const items = [deviceChangeGeneration.getAudioInputDevices(), deviceChangeGeneration.getAudioOutputDevices(), deviceChangeGeneration.getVideoInputDevices()];
        Promise.all(items).then((arg0) => {
          let tmp;
          let tmp2;
          let tmp3;
          [tmp, tmp2, tmp3] = arg0;
          if (deviceChangeGeneration === deviceChangeGeneration.deviceChangeGeneration) {
            obj.emit(obj(pollMetrics[9]).MediaEngineEvent.DeviceChange, tmp, tmp2, tmp3);
          }
        });
        const allPromises = Promise.all(items);
      }
    };
    obj.handleRemoveListener = function handleRemoveListener(arg0) {
      if (arg0 === obj(pollMetrics[9]).MediaEngineEvent.VoiceActivity) {
        let tmpResult = tmp(tmp2[8]);
        if (null != tmpResult.getVoiceEngine().setEmitVADLevel2) {
          tmpResult = tmp(tmp2[8]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.setEmitVADLevel2(obj.listenerCount(tmp(tmp2[9]).MediaEngineEvent.VoiceActivity) > 0);
        } else {
          const voiceEngine1 = tmp(tmp2[8]).getVoiceEngine();
          voiceEngine1.setEmitVADLevel(obj.listenerCount(tmp(tmp2[9]).MediaEngineEvent.VoiceActivity) > 0, false, {});
          const tmpResult1 = tmp(tmp2[8]);
        }
      }
    };
    obj.handleVideoInputInitialization = function handleVideoInputInitialization(arg0) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.VideoInputInitialized, arg0);
    };
    obj.handleAudioInputInitialization = function handleAudioInputInitialization(arg0) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.AudioInputInitialized, arg0);
    };
    obj.handleNativeScreenSharePickerUpdate = function handleNativeScreenSharePickerUpdate(arg0, arg1) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.NativeScreenSharePickerUpdate, arg0, arg1);
    };
    obj.handleNativeScreenSharePickerCancel = function handleNativeScreenSharePickerCancel(arg0) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.NativeScreenSharePickerCancel, arg0);
    };
    obj.handleNativeScreenSharePickerError = function handleNativeScreenSharePickerError(arg0) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.NativeScreenSharePickerError, arg0);
    };
    obj.handleAudioDeviceModuleErrorCallback = function handleAudioDeviceModuleErrorCallback(arg0, arg1) {
      if (-100 !== arg0) {
        obj.emit(obj(pollMetrics[9]).MediaEngineEvent.AudioDeviceModuleError, "RustAudioDeviceModule", arg0, arg1);
      }
    };
    obj.handleVideoCodecErrorCallback = function handleVideoCodecErrorCallback(arg0) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.VideoCodecError, arg0);
    };
    obj.handleVoiceProcessingErrorCallback = function handleVoiceProcessingErrorCallback(arg0) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.VoiceProcessingError, arg0);
    };
    obj.handleVideoFilterErrorCallback = function handleVideoFilterErrorCallback(arg0, arg1) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.VideoFilterError, arg0, arg1);
    };
    obj.handleSystemMicrophoneModeChangeCallback = function handleSystemMicrophoneModeChangeCallback(arg0) {
      obj.emit(obj(pollMetrics[9]).MediaEngineEvent.SystemMicrophoneModeChange, arg0);
    };
    logger = obj.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    obj2 = require("inject");
    voiceEngine = obj2.getVoiceEngine();
    result = voiceEngine.setDeviceChangeCallback(obj.handleDeviceChange);
    result1 = voiceEngine.setVolumeChangeCallback(obj.handleVolumeChange);
    setOnVoiceCallbackResult = voiceEngine.setOnVoiceCallback(obj.handleVoiceActivity);
    setVideoInputInitializationCallback = voiceEngine.setVideoInputInitializationCallback;
    if (setVideoInputInitializationCallback != null) {
      result2 = setVideoInputInitializationCallback(obj.handleVideoInputInitialization);
    }
    setAudioInputInitializationCallback = voiceEngine.setAudioInputInitializationCallback;
    if (setAudioInputInitializationCallback != null) {
      result3 = setAudioInputInitializationCallback(obj.handleAudioInputInitialization);
    }
    setAudioDeviceModuleErrorCallback = voiceEngine.setAudioDeviceModuleErrorCallback;
    if (setAudioDeviceModuleErrorCallback != null) {
      result4 = setAudioDeviceModuleErrorCallback(obj.handleAudioDeviceModuleErrorCallback);
    }
    setTransportOptionsResult = voiceEngine.setTransportOptions({ idleJitterBufferFlush: true, ducking: false });
    setNativeScreenSharePickerCallbacks = voiceEngine.setNativeScreenSharePickerCallbacks;
    if (setNativeScreenSharePickerCallbacks != null) {
      result5 = setNativeScreenSharePickerCallbacks(obj.handleNativeScreenSharePickerUpdate, obj.handleNativeScreenSharePickerCancel, obj.handleNativeScreenSharePickerError);
    }
    setVideoCodecErrorCallback = voiceEngine.setVideoCodecErrorCallback;
    if (setVideoCodecErrorCallback != null) {
      result6 = setVideoCodecErrorCallback(obj.handleVideoCodecErrorCallback);
    }
    setVoiceProcessingErrorCallback = voiceEngine.setVoiceProcessingErrorCallback;
    if (setVoiceProcessingErrorCallback != null) {
      result7 = setVoiceProcessingErrorCallback(obj.handleVoiceProcessingErrorCallback);
    }
    setVideoFilterErrorCallback = voiceEngine.setVideoFilterErrorCallback;
    if (setVideoFilterErrorCallback != null) {
      result8 = setVideoFilterErrorCallback(obj.handleVideoFilterErrorCallback);
    }
    setSystemMicrophoneModeChangeCallback = voiceEngine.setSystemMicrophoneModeChangeCallback;
    if (setSystemMicrophoneModeChangeCallback != null) {
      result9 = setSystemMicrophoneModeChangeCallback(obj.handleSystemMicrophoneModeChangeCallback);
    }
    onResult = obj.on("removeListener", obj.handleRemoveListener);
    onResult1 = obj.on("newListener", obj.handleNewListener);
    tmp13Result = require("inject");
    if (null != tmp13Result.getVoiceEngine().getAudioSubsystem) {
      tmp13Result1 = require("inject");
      voiceEngine1 = tmp13Result1.getVoiceEngine();
      audioSubsystem = voiceEngine1.getAudioSubsystem((audioSubsystem, audioLayer) => {
        tmp2.audioSubsystem = audioSubsystem;
        tmp.audioLayer = audioLayer;
      });
    } else {
      tmp13Result2 = require("inject");
      if (null != tmp13Result2.getVoiceEngine().getUseLegacyAudioDevice) {
        tmp13Result3 = require("inject");
        voiceEngine2 = tmp13Result3.getVoiceEngine();
        tmp30 = AudioSubsystems;
        obj.audioSubsystem = voiceEngine2.getUseLegacyAudioDevice() ? tmp30.LEGACY : tmp30.STANDARD;
      }
    }
    if (null != voiceEngine.pingVoiceThread) {
      watchdogTickResult = obj.watchdogTick();
    }
    if (null != voiceEngine.setActiveSinksChangeCallback) {
      result10 = voiceEngine.setActiveSinksChangeCallback(obj.handleActiveSinksChange);
    }
    setOnClipsMlDetection = voiceEngine.setOnClipsMlDetection;
    if (setOnClipsMlDetection != null) {
      result11 = setOnClipsMlDetection((arg0) => {
        if (arg0.length > 0) {
          obj.emit(obj(pollMetrics[9]).MediaEngineEvent.ClipsMlDetection, arg0);
          throw obj;
        }
      });
    }
    tmp35 = require("pollConnectionStats")(obj);
    c0 = obj;
    pollMetrics = function pollMetrics() {
      const self = this;
      const apply = _pollMetrics.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    _pollMetrics = function _pollMetrics() {
      const self = this;
      const tmp = outer1_4(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp4;
                let voiceEngine = 0;
                voiceEngine = undefined;
                closure_1 = undefined;
                if (outer1_1) {
                  c3 = 3;
                } else {
                  let obj1 = outer1_0(4353);
                  voiceEngine = obj1.getVoiceEngine();
                  const promise = new Promise((arg0) => {
                    let pollQueueMetrics = arg0;
                    pollQueueMetrics = pollQueueMetrics.pollQueueMetrics;
                    if (pollQueueMetrics != null) {
                      pollQueueMetrics((arg0) => {
                        callback(arg0);
                      });
                    }
                  });
                  dependencyMap = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = promise;
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_1 = arg1;
              closure_1.periodMs = outer1_5;
              voiceEngine.emit(outer1_0(4400).MediaEngineEvent.VoiceQueueMetrics, closure_1);
              const _setTimeout = setTimeout;
              const timerId = setTimeout(dependencyMap, outer1_5);
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp24) {
            c3 = tmp;
            throw tmp24;
          }
        }
      });
      const _pollMetrics = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    c1 = false;
    onResult2 = obj.on(require("BaseConnectionEvent").MediaEngineEvent.Destroy, () => {
      let c1 = true;
      return true;
    });
    timerId = setTimeout(pollMetrics, QUEUE_METRICS_INTERVAL_MS);
    return obj;
  }
}
const prototype = MediaEngineNative.prototype;
prototype["destroy"] = function destroy() {
  this.eachConnection((destroy) => destroy.destroy());
  this.emit(BaseConnectionEvent.MediaEngineEvent.Destroy);
  this.removeAllListeners();
};
prototype["interact"] = function interact() {

};
MediaEngineNative["supported"] = function supported() {
  return inject.supported();
};
prototype["supported"] = function supported() {
  return true;
};
prototype["supports"] = function supports(arg0) {
  let tmp = constants4;
  if (constants4.LEGACY_AUDIO_SUBSYSTEM === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.VOICE_LEGACY_SUBSYSTEM);
  } else if (tmp.EXPERIMENTAL_AUDIO_SUBSYSTEM === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.VOICE_EXPERIMENTAL_SUBSYSTEM);
  } else if (tmp.AUTOMATIC_AUDIO_SUBSYSTEM === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.VOICE_AUTOMATIC_SUBSYSTEM);
  } else if (tmp.AUDIO_SUBSYSTEM_DEFERRED_SWITCH === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
  } else if (tmp.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
  } else if (tmp.DEBUG_LOGGING === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.DEBUG_LOGGING);
  } else if (tmp.SOUNDSHARE === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.SOUNDSHARE);
  } else if (tmp.SCREEN_SOUNDSHARE === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.SCREEN_SOUNDSHARE);
  } else if (tmp.ELEVATED_HOOK === arg0) {
    tmp = require;
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.ELEVATED_HOOK);
  } else if (tmp.LOOPBACK === arg0) {
    tmp = dependencyMap;
    tmp = constants6;
    return inject.supportsFeature(constants6.LOOPBACK);
  } else if (tmp.WUMPUS_VIDEO === arg0) {
    return inject.supportsFeature(constants6.WUMPUS_VIDEO);
  } else if (tmp.HYBRID_VIDEO === arg0) {
    return inject.supportsFeature(constants6.HYBRID_VIDEO);
  } else {
    if (tmp.ATTENUATION !== arg0) {
      if (tmp.VIDEO_HOOK !== arg0) {
        if (tmp.EXPERIMENTAL_SOUNDSHARE === arg0) {
          return inject.supportsFeature(constants6.SOUNDSHARE_LOOPBACK);
        } else if (tmp.REMOTE_LOCUS_NETWORK_CONTROL === arg0) {
          return inject.supportsFeature(constants6.REMOTE_LOCUS_NETWORK_CONTROL);
        } else if (tmp.SCREEN_PREVIEWS === arg0) {
          return inject.supportsFeature(constants6.SCREEN_PREVIEWS);
        } else if (tmp.CLIPS === arg0) {
          return inject.supportsFeature(constants6.CLIPS);
        } else if (tmp.CLIPS_RECORDING_READY_EVENTS === arg0) {
          return inject.supportsFeature(constants6.CLIPS_RECORDING_READY_EVENTS);
        } else if (tmp.WINDOW_PREVIEWS === arg0) {
          return inject.supportsFeature(constants6.WINDOW_PREVIEWS);
        } else if (tmp.AUDIO_DEBUG_STATE === arg0) {
          return inject.supportsFeature(constants6.AUDIO_DEBUG_STATE);
        } else if (tmp.CONNECTION_REPLAY === arg0) {
          return inject.supportsFeature(constants6.CONNECTION_REPLAY);
        } else if (tmp.SIMULCAST === arg0) {
          let supportsFeatureResult = inject.supportsFeature(constants6.SIMULCAST);
          if (supportsFeatureResult) {
            supportsFeatureResult = inject.supportsFeature(constants6.SIMULCAST_BUGFIX);
            const tmp59Result = inject;
          }
          return supportsFeatureResult;
        } else if (tmp.RTC_REGION_RANKING === arg0) {
          return inject.supportsFeature(constants6.RTC_REGION_RANKING);
        } else if (tmp.ELECTRON_VIDEO === arg0) {
          return inject.supportsFeature(constants6.ELECTRON_VIDEO);
        } else if (tmp.MEDIAPIPE === arg0) {
          return inject.supportsFeature(constants6.MEDIAPIPE);
        } else if (tmp.FIXED_KEYFRAME_INTERVAL === arg0) {
          return inject.supportsFeature(constants6.FIXED_KEYFRAME_INTERVAL);
        } else if (tmp.FIRST_FRAME_CALLBACK === arg0) {
          return inject.supportsFeature(constants6.FIRST_FRAME_CALLBACK);
        } else if (tmp.REMOTE_USER_MULTI_STREAM === arg0) {
          return inject.supportsFeature(constants6.REMOTE_USER_MULTI_STREAM);
        } else if (tmp.IMAGE_QUALITY_MEASUREMENT === arg0) {
          return inject.supportsFeature(constants6.IMAGE_QUALITY_MEASUREMENT);
        } else if (tmp.GO_LIVE_HARDWARE === arg0) {
          return inject.supportsFeature(constants6.GO_LIVE_HARDWARE);
        } else if (tmp.SCREEN_CAPTURE_KIT === arg0) {
          return inject.supportsFeature(constants6.SCREEN_CAPTURE_KIT);
        } else if (tmp.NATIVE_SCREENSHARE_PICKER === arg0) {
          return inject.supportsFeature(constants6.NATIVE_SCREENSHARE_PICKER);
        } else if (tmp.MLS_PAIRWISE_FINGERPRINTS === arg0) {
          return inject.supportsFeature(constants6.MLS_PAIRWISE_FINGERPRINTS);
        } else if (tmp.OFFLOAD_ADM_CONTROLS === arg0) {
          return inject.supportsFeature(constants6.OFFLOAD_ADM_CONTROLS);
        } else if (tmp.VAAPI === arg0) {
          return inject.supportsFeature(constants6.VAAPI);
        } else if (tmp.GAMESCOPE_CAPTURE === arg0) {
          return inject.supportsFeature(constants6.GAMESCOPE_CAPTURE);
        } else if (tmp.ASYNC_VIDEO_INPUT_DEVICE_INIT === arg0) {
          return inject.supportsFeature(constants6.ASYNC_VIDEO_INPUT_DEVICE_INIT);
        } else if (tmp.PORT_AWARE_LATENCY_TESTING === arg0) {
          return inject.supportsFeature(constants6.PORT_AWARE_LATENCY_TESTING);
        } else if (tmp.SPATIAL_AUDIO === arg0) {
          return inject.supportsFeature(constants6.SPATIAL_AUDIO);
        } else if (tmp.KRISP_NATIVE_ERROR === arg0) {
          return inject.supportsFeature(constants6.KRISP_NATIVE_ERROR);
        } else if (tmp.UDP_ENDPOINT_UPDATE === arg0) {
          return inject.supportsFeature(constants6.UDP_ENDPOINT_UPDATE);
        } else {
          if (tmp.DIAGNOSTICS !== arg0) {
            if (tmp.NATIVE_PING !== arg0) {
              if (tmp.AUTOMATIC_VAD !== arg0) {
                if (tmp.AUDIO_INPUT_DEVICE !== arg0) {
                  if (tmp.AUDIO_OUTPUT_DEVICE !== arg0) {
                    if (tmp.QOS !== arg0) {
                      if (tmp.VOICE_PROCESSING !== arg0) {
                        if (tmp.AUTO_ENABLE !== arg0) {
                          if (tmp.VIDEO !== arg0) {
                            if (tmp.DESKTOP_CAPTURE !== arg0) {
                              if (tmp.DESKTOP_CAPTURE_FORMAT !== arg0) {
                                if (tmp.DESKTOP_CAPTURE_APPLICATIONS !== arg0) {
                                  if (tmp.VOICE_PANNING !== arg0) {
                                    if (tmp.AEC_DUMP !== arg0) {
                                      if (tmp.DISABLE_VIDEO !== arg0) {
                                        if (tmp.SAMPLE_PLAYBACK !== arg0) {
                                          if (tmp.NOISE_SUPPRESSION !== arg0) {
                                            if (tmp.AUTOMATIC_GAIN_CONTROL !== arg0) {
                                              if (tmp.SIDECHAIN_COMPRESSION !== arg0) {
                                                return false;
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
                    }
                  }
                }
              }
            }
          }
          return true;
        }
      }
    }
    const tmp89 = format;
    let family;
    if (tmp89 != null) {
      const os = tmp89.os;
      if (os != null) {
        family = os.family;
      }
    }
    let isMatch = null != family;
    if (isMatch) {
      isMatch = /^win/i.test(format.os.family);
      const obj30 = /^win/i;
    }
    return isMatch;
  }
};
prototype["connect"] = function connect(arg0, arg1, processPriority) {
  let self = this;
  self = this;
  obj = obj(4353);
  if (!obj.supportsFeature(constants6.EXPERIMENT_CONFIG)) {
    processPriority.experiments = undefined;
  }
  obj = self(4410).create(arg0, arg1, processPriority);
  obj.on(obj(4400).BaseConnectionEvent.Destroy, (arg0) => {
    const connections = self.connections;
    connections.delete(arg0);
    if (self.connectionsEmpty()) {
      obj = obj(outer1_2[8]);
      obj.setProcessPriority(outer1_10.NORMAL);
      const voiceEngine = obj(outer1_2[8]).getVoiceEngine();
      const setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
      if (setNativeThreadsPriority != null) {
        const result = setNativeThreadsPriority(0);
      }
      const obj2 = obj(outer1_2[8]);
    }
  });
  obj.on(obj(4400).BaseConnectionEvent.Connected, () => {
    obj.setVideoBroadcast(self.shouldConnectionBroadcastVideo(obj));
  });
  obj.on(obj(4400).BaseConnectionEvent.Silence, (arg0) => {
    self.emit(obj(outer1_2[9]).MediaEngineEvent.Silence, arg0);
  });
  let connections = self.connections;
  connections.add(obj);
  let tmpResult = tmp(4353);
  let HIGH = processPriority.processPriority;
  if (HIGH == null) {
    HIGH = constants.HIGH;
  }
  tmpResult.setProcessPriority(HIGH);
  if (null != processPriority.threadPriorityConfiguration) {
    tmpResult = tmp(4353);
    let voiceEngine = tmpResult.getVoiceEngine();
    let setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
    if (setNativeThreadsPriority != null) {
      let result = setNativeThreadsPriority(processPriority.threadPriorityConfiguration);
    }
  }
  self.emit(obj(4400).MediaEngineEvent.Connection, obj);
  return obj;
};
prototype["shouldConnectionBroadcastVideo"] = function shouldConnectionBroadcastVideo(context) {
  let hasDesktopSourceResult = context.context === constants5.DEFAULT;
  if (hasDesktopSourceResult) {
    const self = this;
    hasDesktopSourceResult = this.videoInputDeviceId !== closure_15;
  }
  if (!hasDesktopSourceResult) {
    hasDesktopSourceResult = context.hasDesktopSource();
  }
  return hasDesktopSourceResult;
};
prototype["eachConnection"] = function eachConnection(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const connections = this.connections;
  const item = connections.forEach((context) => {
    if (!tmp2) {
      callback(context);
    }
  });
};
prototype["enable"] = function enable() {
  return Promise.resolve();
};
prototype["setAudioMixerOptions"] = function setAudioMixerOptions(arg0) {
  let obj = inject;
  if (obj.supportsFeature(constants6.SPATIAL_AUDIO)) {
    const voiceEngine = inject.getVoiceEngine();
    obj = { audioMixerOptions: null };
    obj[0] = arg0;
    voiceEngine.setTransportOptions(obj);
    const tmpResult = inject;
  }
};
prototype["setAudioInputBypassSystemProcessing"] = function setAudioInputBypassSystemProcessing(bypassSystemProcessing) {
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { bypassSystemProcessing };
  voiceEngine.setTransportOptions(obj);
};
prototype["setInputVolume"] = function setInputVolume(arg0) {
  let tmp = arg0;
  const voiceEngine = inject.getVoiceEngine();
  if (arg0 == null) {
    tmp = closure_13;
  }
  voiceEngine.setInputVolume(tmp / closure_13);
};
prototype["setOutputVolume"] = function setOutputVolume(arg0) {
  let tmp = arg0;
  const voiceEngine = inject.getVoiceEngine();
  if (arg0 == null) {
    tmp = closure_13;
  }
  voiceEngine.setOutputVolume(tmp / closure_13);
};
prototype["getAudioInputDevices"] = function getAudioInputDevices() {
  return sanitizeDevices.getAudioInputDevices();
};
prototype["getNoiseCancellationStats"] = function getNoiseCancellationStats() {
  return new Promise((arg0) => {
    const callback = arg0;
    const voiceEngine = callback(table[8]).getVoiceEngine();
    if (null != voiceEngine.getNoiseCancellationStats) {
      const noiseCancellationStats = voiceEngine.getNoiseCancellationStats((arg0) => callback(JSON.parse(arg0)));
    } else {
      arg0(null);
    }
  });
};
prototype["setNoiseCancellationEnableStats"] = function setNoiseCancellationEnableStats(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setNoiseCancellationEnableStats = voiceEngine.setNoiseCancellationEnableStats;
  if (setNoiseCancellationEnableStats != null) {
    const result = setNoiseCancellationEnableStats(arg0);
  }
};
prototype["setAudioInputDevice"] = function setAudioInputDevice(audioInputDeviceId) {
  const self = this;
  const _require = audioInputDeviceId;
  this.audioInputDeviceId = audioInputDeviceId;
  if (obj.supportsFeature(constants6.SET_AUDIO_DEVICE_BY_ID)) {
    let tmpResult = tmp(4353);
    let voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.setInputDevice(audioInputDeviceId);
  } else {
    tmpResult = tmp(4470);
    const audioInputDevices = tmpResult.getAudioInputDevices();
    audioInputDevices.then((arr) => {
      let found = arr.find((id) => id.id === closure_0);
      if (found == null) {
        found = arr[0];
      }
      if (null != found) {
        const voiceEngine = audioInputDeviceId(outer1_2[8]).getVoiceEngine();
        voiceEngine.setInputDevice(found.index);
        const obj = audioInputDeviceId(outer1_2[8]);
      }
    });
  }
  self.emit(_BaseConnectionEvent.MediaEngineEvent.SelectedDeviceChange, constants3.AUDIO_INPUT, this.audioInputDeviceId, audioInputDeviceId);
};
prototype["getAudioOutputDevices"] = function getAudioOutputDevices() {
  return sanitizeDevices.getAudioOutputDevices();
};
prototype["setAudioOutputDevice"] = function setAudioOutputDevice(audioOutputDeviceId) {
  const self = this;
  const _require = audioOutputDeviceId;
  this.audioOutputDeviceId = audioOutputDeviceId;
  if (obj.supportsFeature(constants6.SET_AUDIO_DEVICE_BY_ID)) {
    let tmpResult = tmp(4353);
    let voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.setOutputDevice(audioOutputDeviceId);
  } else {
    tmpResult = tmp(4470);
    const audioOutputDevices = tmpResult.getAudioOutputDevices();
    audioOutputDevices.then((arr) => {
      let found = arr.find((id) => id.id === closure_0);
      if (found == null) {
        found = arr[0];
      }
      if (null != found) {
        const voiceEngine = audioOutputDeviceId(outer1_2[8]).getVoiceEngine();
        voiceEngine.setOutputDevice(found.index);
        const obj = audioOutputDeviceId(outer1_2[8]);
      }
    });
  }
  self.emit(_BaseConnectionEvent.MediaEngineEvent.SelectedDeviceChange, constants3.AUDIO_OUTPUT, this.audioOutputDeviceId, audioOutputDeviceId);
};
prototype["getVideoInputDevices"] = function getVideoInputDevices() {
  return sanitizeDevices.getVideoInputDevices();
};
prototype["setVideoInputDevice"] = function setVideoInputDevice(arg0) {
  let closure_0 = arg0;
  const self = this;
  return callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let id = tmp5;
            let index = tmp2;
            index = undefined;
            id = undefined;
            dependencyMap = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_1.getVideoInputDevices();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          index = arg1.find((id) => id.id === closure_0);
          let forEach = null;
          if (null != index) {
            id = outer1_0.id;
          } else {
            id = outer1_15;
          }
          if (id === outer1_1.videoInputDeviceId) {
            c3 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            outer1_1.videoInputDeviceId = id;
            if (!obj9.supportsFeature(outer1_18.SET_VIDEO_DEVICE_BY_ID)) {
              obj = outer1_0(4353);
              const voiceEngine = obj.getVoiceEngine();
              let num3 = -1;
              if (forEach != outer1_0) {
                num3 = index.index;
              }
              voiceEngine.setVideoInputDevice(num3);
              const connections = outer1_1.connections;
              forEach = connections.forEach;
              const item = forEach((setVideoBroadcast) => setVideoBroadcast.setVideoBroadcast(id.shouldConnectionBroadcastVideo(setVideoBroadcast)));
            }
            if (forEach == outer1_0) {
              dependencyMap = outer1_15;
              obj2 = outer1_0(4353);
              const voiceEngine1 = obj2.getVoiceEngine();
              voiceEngine1.setVideoInputDevice(dependencyMap);
            }
            if (forEach == outer1_0.originalId) {
              const id2 = outer1_0.id;
            }
            const originalId = outer1_0.originalId;
            obj9 = outer1_0(4353);
          }
        }
      } catch (tmp42) {
        c3 = tmp;
        throw tmp42;
      }
    }
  })();
};
prototype["getVideoInputDeviceId"] = function getVideoInputDeviceId() {
  return this.videoInputDeviceId;
};
prototype["setAsyncVideoInputDeviceInit"] = function setAsyncVideoInputDeviceInit(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setAsyncVideoInputDeviceInitSetting = voiceEngine.setAsyncVideoInputDeviceInitSetting;
  if (setAsyncVideoInputDeviceInitSetting != null) {
    const result = setAsyncVideoInputDeviceInitSetting(arg0);
  }
  const obj = inject;
  const tmp = require;
  const voiceEngine1 = inject.getVoiceEngine();
  const setAsyncVideoInputDeviceInit = voiceEngine1.setAsyncVideoInputDeviceInit;
  if (setAsyncVideoInputDeviceInit != null) {
    const result1 = setAsyncVideoInputDeviceInit(arg0);
  }
};
prototype["getCodecCapabilities"] = function getCodecCapabilities(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const codecCapabilities = voiceEngine.getCodecCapabilities(arg0);
};
prototype["setGoLiveSource"] = function setGoLiveSource(arg0, arg1) {
  let self = this;
  self = this;
  let closure_1 = arg0;
  let closure_0 = arg1;
  if (null != arg0) {
    self.eachConnection((streamUserId) => {
      if (!tmp) {
        streamUserId.setGoLiveSource(closure_1);
        streamUserId.setVideoBroadcast(self.shouldConnectionBroadcastVideo(streamUserId));
      }
    }, arg1);
  } else {
    self.eachConnection((clearDesktopSource) => {
      clearDesktopSource.clearDesktopSource();
      clearDesktopSource.clearGoLiveDevices();
      clearDesktopSource.setSoundshareSource(0, false);
      clearDesktopSource.setVideoBroadcast(self.shouldConnectionBroadcastVideo(clearDesktopSource));
    }, arg1);
  }
};
prototype["setClipsSource"] = function setClipsSource(quality) {
  let allowScreenCaptureKit;
  let hdrCaptureMode;
  let id;
  let minCaptureHeight;
  let minCaptureWidth;
  let soundshareId;
  let useGraphicsCapture;
  let useHookFramePacer;
  let useLoopback;
  let useQuartzCapturer;
  let useVideoHook;
  let videoHookAllowDx12;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  if (null != voiceEngine.setClipsSource) {
    if (null != voiceEngine.setOnClipsRecordingEvent) {
      if (null != voiceEngine.applyClipsSettings) {
        if (null != quality) {
          quality = quality.quality;
          const resolution = quality.resolution;
          if (resolution <= 480) {
            let result = resolution / 3 * 4;
          } else {
            result = resolution / 9 * 16;
          }
          const self = this;
          const desktopDescription = quality.desktopDescription;
          ({ id, soundshareId } = desktopDescription);
          obj = { id: null, soundshareId: null, applicationName: null };
          obj[0] = id;
          obj[1] = soundshareId;
          obj[2] = quality.applicationName;
          this.clipsRecordingEventContext = obj;
          ({ useLoopback, useVideoHook, useHookFramePacer, useGraphicsCapture, useQuartzCapturer, allowScreenCaptureKit, hdrCaptureMode, videoHookAllowDx12, minCaptureWidth, minCaptureHeight } = desktopDescription);
          const result1 = this.registerClipsRecordingEventHandler();
          const applyClipsSettings = voiceEngine.applyClipsSettings;
          if (applyClipsSettings != null) {
            obj = { useVideoHook: null, useHookFramePacer: null, useGraphicsCapture: null, useQuartzCapturer: null, allowScreenCaptureKit: null, hdrCaptureMode: null, videoHookAllowDx12: null, soundshareLoopback: null, frameRate: null, width: null, height: null, bitrateKbps: null, videoEncoderExperiments: null, minCaptureWidth: null, minCaptureHeight: null };
            obj[0] = useVideoHook;
            obj[1] = useHookFramePacer;
            obj[2] = useGraphicsCapture;
            obj[3] = useQuartzCapturer;
            obj[4] = allowScreenCaptureKit;
            obj[5] = hdrCaptureMode;
            obj[6] = videoHookAllowDx12;
            obj[7] = useLoopback;
            obj[8] = quality.frameRate;
            obj[9] = result;
            obj[10] = resolution;
            const bitratePercent = quality.bitratePercent;
            let rounded;
            if (null != bitratePercent) {
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              rounded = Math.round(6000 * Math.min(100, Math.max(10, bitratePercent)) / 100);
            }
            obj[11] = rounded;
            obj[12] = quality.videoEncoderExperiments;
            obj[13] = minCaptureWidth;
            obj[14] = minCaptureHeight;
            applyClipsSettings(obj);
          }
          if (null != id) {
            let parts = id.split(":");
          } else {
            parts = ["", ""];
          }
          const tmp8 = callback(parts, 2);
          const first = tmp8[0];
          const obj1 = { id: null, soundshareId: null };
          obj1[0] = tmp8[1];
          let num10 = 0;
          if (null != soundshareId) {
            num10 = soundshareId;
          }
          obj1[1] = num10;
          voiceEngine.setClipsSource(obj1);
        } else {
          voiceEngine.setClipsSource({ id: "", soundshareId: 0 });
        }
      }
    }
  }
};
prototype["setClipsQualitySettings"] = function setClipsQualitySettings(arg0, arg1, arg2, arg3) {
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  if (null == voiceEngine.applyClipsQualitySettings) {
    return false;
  } else {
    const result = voiceEngine.applyClipsQualitySettings(arg0, arg1, arg2);
    let rounded;
    if (null != arg3) {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      rounded = Math.round(6000 * Math.min(100, Math.max(10, arg3)) / 100);
    }
    if (tmp3) {
      obj = { bitrateKbps: null };
      obj[0] = rounded;
      voiceEngine.applyClipsSettings(obj);
    }
    return true;
  }
};
prototype["setSoundshareSource"] = function setSoundshareSource(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  this.eachConnection((streamUserId) => {
    if (!tmp) {
      streamUserId.setSoundshareSource(closure_0, closure_1);
    }
  }, arg2);
};
prototype["getDesktopSource"] = function getDesktopSource() {
  const error = new Error("NO_STREAM");
  return Promise.reject(error);
};
prototype["getScreenPreviews"] = function getScreenPreviews(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  let voiceEngine = _inject.getVoiceEngine();
  if (null != voiceEngine.setPreviewsUseWgc) {
    voiceEngine.setPreviewsUseWgc(arg2);
  }
  let obj = _inject;
  return new Promise((arg0) => {
    const callback = arg0;
    if (null != obj.getVoiceEngine().getScreenPreviews) {
      const voiceEngine = callback(outer1_2[8]).getVoiceEngine();
      const screenPreviews = voiceEngine.getScreenPreviews(callback, closure_1, (arr) => {
        callback(arr.map((arg0, arg1) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.name = `Screen ${arg1}${1}`;
          return obj;
        }));
      });
      const tmpResult = callback(outer1_2[8]);
    } else {
      arg0([]);
    }
  });
};
prototype["setClipsModulePath"] = function setClipsModulePath(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setClipsModulePath = voiceEngine.setClipsModulePath;
  if (setClipsModulePath != null) {
    setClipsModulePath(arg0);
  }
};
prototype["setClipsDataPath"] = function setClipsDataPath(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setClipsDataPath = voiceEngine.setClipsDataPath;
  if (setClipsDataPath != null) {
    setClipsDataPath(arg0);
  }
};
prototype["setClipsSentryConfig"] = function setClipsSentryConfig(arg0, arg1, arg2) {
  const voiceEngine = inject.getVoiceEngine();
  const setClipsSentryConfig = voiceEngine.setClipsSentryConfig;
  if (setClipsSentryConfig != null) {
    setClipsSentryConfig(arg0, arg1, arg2);
  }
};
prototype["setClipsV3Enabled"] = function setClipsV3Enabled(arg0) {
  if (arg0) {
    const self = this;
    const result = this.registerClipsRecordingEventHandler();
  }
  const voiceEngine = inject.getVoiceEngine();
  const setClipsV3Enabled = voiceEngine.setClipsV3Enabled;
  if (setClipsV3Enabled != null) {
    setClipsV3Enabled(arg0);
  }
};
prototype["registerClipsRecordingEventHandler"] = function registerClipsRecordingEventHandler() {
  let self = this;
  self = this;
  const voiceEngine = self(4353).getVoiceEngine();
  if (!tmp) {
    self.clipsRecordingEventHandlerRegistered = true;
    const result = voiceEngine.setOnClipsRecordingEvent((arg0, arg1) => {
      let id;
      let soundshareId;
      const clipsRecordingEventContext = self.clipsRecordingEventContext;
      ({ id, soundshareId } = clipsRecordingEventContext);
      const logger = self.logger;
      logger.info("Clips recording event: " + outer1_12[arg0] + " received for stream " + id + " and sound " + soundshareId + ".");
      if (arg0 === outer1_12.GoLiveEnded) {
        obj.emit(self(outer1_2[9]).MediaEngineEvent.ClipsRecordingRestartNeeded);
      } else if (arg0 === tmp.Error) {
        let str2 = "Failed to set clips source in media engine";
        if (null != arg1) {
          str2 = "Failed to set clips source in media engine";
          if ("" !== arg1) {
            str2 = arg1;
          }
        }
        obj.emit(self(outer1_2[9]).MediaEngineEvent.ClipsInitFailure, str2, clipsRecordingEventContext.applicationName);
      } else if (arg0 === tmp.IdleShutdown) {
        obj.emit(self(outer1_2[9]).MediaEngineEvent.ClipsBridgeIdleShutdown);
      } else if (arg0 === tmp.RecordingHealthy) {
        obj.emit(self(outer1_2[9]).MediaEngineEvent.ClipsRecordingHealthy);
      } else if (arg0 === tmp.RecordingActive) {
        obj.emit(self(outer1_2[9]).MediaEngineEvent.ClipsRecordingReadyChanged, true);
      } else if (arg0 === tmp.RecordingInactive) {
        obj.emit(self(outer1_2[9]).MediaEngineEvent.ClipsRecordingReadyChanged, false);
      } else {
        if (!tmp3) {
          obj.emit(self(outer1_2[9]).MediaEngineEvent.ClipsRecordingEnded, id, soundshareId);
        }
        tmp3 = arg0 !== tmp.Ended && arg0 !== tmp.StoppedByGoLive;
      }
    });
  }
};
prototype["setClipsUIActive"] = function setClipsUIActive(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setClipsUIActive = voiceEngine.setClipsUIActive;
  if (setClipsUIActive != null) {
    setClipsUIActive(arg0);
  }
};
prototype["setClipsV3MLEnabled"] = function setClipsV3MLEnabled(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setClipsV3MLEnabled = voiceEngine.setClipsV3MLEnabled;
  if (setClipsV3MLEnabled != null) {
    setClipsV3MLEnabled(arg0);
  }
};
prototype["setClipsRecordingEnabled"] = function setClipsRecordingEnabled(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setClipsRecordingEnabled = voiceEngine.setClipsRecordingEnabled;
  if (setClipsRecordingEnabled != null) {
    const result = setClipsRecordingEnabled(arg0);
  }
};
prototype["hasSetClipsRecordingEnabled"] = function hasSetClipsRecordingEnabled() {
  return null != inject.getVoiceEngine().setClipsRecordingEnabled;
};
prototype["setClipBufferLength"] = function setClipBufferLength(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setClipBufferLength = voiceEngine.setClipBufferLength;
  if (setClipBufferLength != null) {
    setClipBufferLength(arg0);
  }
};
prototype["getSystemSteadyClockNowMs"] = function getSystemSteadyClockNowMs() {
  const voiceEngine = inject.getVoiceEngine();
  const getSystemSteadyClockNowMs = voiceEngine.getSystemSteadyClockNowMs;
  let systemSteadyClockNowMs;
  if (getSystemSteadyClockNowMs != null) {
    systemSteadyClockNowMs = getSystemSteadyClockNowMs();
  }
  if (systemSteadyClockNowMs == null) {
    systemSteadyClockNowMs = null;
  }
  return systemSteadyClockNowMs;
};
prototype["saveClipEx"] = function saveClipEx(arg0) {
  const _require = arg0;
  const voiceEngine = _inject.getVoiceEngine();
  let obj = _inject;
  return new Promise((arg0, arg1) => {
    let endMs;
    let filepath;
    let metadata;
    let startMs;
    let thumbnailMs;
    let trimEndMs;
    let trimStartMs;
    let userId;
    const callback = arg0;
    const saveClipEx = arg1;
    function onSuccess(arg0, arg1, thumbnail, metadata) {
      try {
        let str = "{}";
        if ("" !== arg1) {
          str = arg1;
        }
        let parsed = JSON.parse(str);
        const obj = { duration: null, clipStats: null };
        obj[0] = arg0;
        obj[1] = parsed;
        let tmp5 = undefined !== thumbnail;
        if (tmp5) {
          tmp5 = thumbnail.length > 0;
        }
        if (tmp5) {
          obj.thumbnail = thumbnail;
        }
        let tmp7 = undefined !== metadata;
        if (tmp7) {
          tmp7 = metadata.length > 0;
        }
        if (tmp7) {
          obj.metadata = metadata;
        }
        return callback(obj);
      } catch (err) {
        parsed = {};
      }
    }
    function onFailure(arg0) {
      try {
        let str = "{}";
        if ("" !== arg0) {
          str = arg0;
        }
        return callback2(JSON.parse(str));
      } catch (err) {
        return callback2({ errorMessage: "clip save failed", errorAt: "unknown" });
      }
    }
    if (null == saveClipEx.saveClipEx) {
      ({ filepath, metadata, thumbnailMs, startMs, endMs, trimStartMs, trimEndMs, userId } = callback);
      if (null != userId) {
        let tmp5 = null == obj.saveClipForUser && null == obj.saveClipForUserWithTime;
        let tmp7 = null == obj.saveClipForUser && null == obj.saveClipForUserWithTime;
      } else {
        tmp5 = null == obj.setClipBufferLength;
        if (!tmp5) {
          tmp5 = null == obj.saveClip && null == obj.saveClipWithTime;
          const tmp6 = null == obj.saveClip && null == obj.saveClipWithTime;
        }
      }
      if (tmp5) {
        arg1("unsupported");
      } else {
        function onLegacySuccess(arg0, arg1, arg2) {
          return onSuccess(arg0, arg2, arg1, undefined);
        }
        function onLegacyTimeSuccess(arg0, arg1, arg2) {
          return onSuccess(arg0, arg1, undefined, arg2);
        }
        if (tmp4) {
          if (null != obj.saveClipForUserWithTime) {
            if (startMs == null) {
              startMs = null;
            }
            if (endMs == null) {
              endMs = null;
            }
            if (trimStartMs == null) {
              trimStartMs = null;
            }
            if (trimEndMs == null) {
              trimEndMs = null;
            }
            const result = obj.saveClipForUserWithTime(userId, filepath, metadata, startMs, endMs, trimStartMs, trimEndMs, onLegacyTimeSuccess, onFailure, thumbnailMs);
          } else {
            const saveClipForUser = obj.saveClipForUser;
            if (obj3.supportsFeature(outer1_18.CLIPS_THUMBNAIL)) {
              if (saveClipForUser != null) {
                saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
              }
            } else if (saveClipForUser != null) {
              saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure);
            }
            obj3 = callback(outer1_2[8]);
          }
        } else if (null != obj.saveClipWithTime) {
          let tmp11 = startMs;
          if (startMs == null) {
            tmp11 = null;
          }
          let tmp12 = endMs;
          if (endMs == null) {
            tmp12 = null;
          }
          let tmp13 = trimStartMs;
          if (trimStartMs == null) {
            tmp13 = null;
          }
          let tmp14 = trimEndMs;
          if (trimEndMs == null) {
            tmp14 = null;
          }
          obj.saveClipWithTime(filepath, metadata, tmp11, tmp12, tmp13, tmp14, onLegacyTimeSuccess, onFailure, thumbnailMs);
        } else {
          const saveClip = obj.saveClip;
          if (obj2.supportsFeature(outer1_18.CLIPS_THUMBNAIL)) {
            if (saveClip != null) {
              saveClip(filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
            }
          } else if (saveClip != null) {
            saveClip(filepath, metadata, onLegacySuccess, onFailure);
          }
          obj2 = callback(outer1_2[8]);
        }
      }
    } else {
      obj.saveClipEx(callback, onSuccess, onFailure);
    }
  });
};
prototype["updateClipMetadata"] = function updateClipMetadata(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  voiceEngine = _require(voiceEngine[8]).getVoiceEngine();
  if (null == voiceEngine.updateClipMetadata) {
    let rejectResult = Promise.reject("unsupported");
  } else {
    rejectResult = new Promise((arg0, arg1) => {
      voiceEngine.updateClipMetadata(closure_0, closure_1, arg0, arg1);
    });
  }
  return rejectResult;
};
prototype["saveScreenshot"] = function saveScreenshot(arg0, arg1, arg2, arg3, arg4) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  let _slicedToArray = arg3;
  let Video = arg4;
  const voiceEngine = _inject.getVoiceEngine();
  if (null == voiceEngine.saveScreenshot) {
    let rejectResult = Promise.reject("unsupported");
  } else {
    rejectResult = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let str = _slicedToArray;
      if (_slicedToArray == null) {
        str = "";
      }
      let num = Video;
      if (Video == null) {
        num = 0;
      }
      voiceEngine.saveScreenshot(closure_0, closure_1, str, closure_2, num, (arg0) => {
        callback(Buffer.from(arg0));
      }, arg1);
    });
  }
  return rejectResult;
};
prototype["exportClip"] = function exportClip(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  voiceEngine = _require(voiceEngine[8]).getVoiceEngine();
  if (null == voiceEngine.exportClip) {
    let rejectResult = Promise.reject("unsupported");
  } else {
    rejectResult = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      voiceEngine.exportClip(closure_0, closure_1, (arg0) => {
        const items = [arg0];
        const blob = new Blob(items);
        return callback(blob);
      }, arg1);
    });
  }
  return rejectResult;
};
prototype["hasExportClipToFile"] = function hasExportClipToFile() {
  return null != inject.getVoiceEngine().exportClipToFile;
};
prototype["setClipsPerfMonitoring"] = function setClipsPerfMonitoring(arg0, arg1, arg2) {
  const setClipsPerfMonitoring = inject.getVoiceEngine().setClipsPerfMonitoring;
  if (null == setClipsPerfMonitoring) {
    let rejectResult = Promise.reject("unsupported");
  } else {
    rejectResult = setClipsPerfMonitoring(arg0, arg1, arg2);
  }
  return rejectResult;
};
prototype["exportClipToFile"] = function exportClipToFile(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const exportClipToFile = _inject.getVoiceEngine().exportClipToFile;
  if (null == exportClipToFile) {
    let rejectResult = Promise.reject("unsupported");
  } else {
    rejectResult = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      exportClipToFile(closure_0, closure_1, closure_2, (str) => {
        if (typeof str === "string") {
          const obj = { filepath: null, formattedForUpload: null };
          obj[0] = str;
          obj[1] = true === arg1;
          callback(obj);
        } else {
          callback2("unsupported: native exportClipToFile returned non-string");
        }
      }, arg1);
    });
  }
  return rejectResult;
};
prototype["getWindowPreviews"] = function getWindowPreviews(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  let voiceEngine = _inject.getVoiceEngine();
  if (null != voiceEngine.setPreviewsUseWgc) {
    voiceEngine.setPreviewsUseWgc(arg2);
  }
  const obj = _inject;
  return new Promise((arg0) => {
    const callback = arg0;
    if (null != obj.getVoiceEngine().getWindowPreviews) {
      const voiceEngine = callback(outer1_2[8]).getVoiceEngine();
      const windowPreviews = voiceEngine.getWindowPreviews(callback, closure_1, (arg0) => {
        callback(arg0);
      });
      const tmpResult = callback(outer1_2[8]);
    } else {
      arg0([]);
    }
  });
};
prototype["getSingleWindowPreview"] = function getSingleWindowPreview(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let _slicedToArray = arg3;
  return callback2(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        table = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let length = tmp2;
            length = undefined;
            const voiceEngine = outer1_0(table[8]).getVoiceEngine();
            if (null != voiceEngine.setPreviewsUseWgc) {
              voiceEngine.setPreviewsUseWgc(outer1_3);
            }
            let tmp22Result = tmp22(tmp23[8]);
            if (null != tmp22Result.getVoiceEngine().getSingleWindowPreview) {
              tmp22Result = tmp22(tmp23[8]);
              const voiceEngine1 = tmp22Result.getVoiceEngine();
              c1 = 1;
              table = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = voiceEngine1.getSingleWindowPreview(outer1_0, c1, table);
              return obj1;
            } else {
              table = 3;
              return { value: null, done: true };
            }
            const obj9 = outer1_0(table[8]);
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          length = arg1;
          let first = null;
          if (length.length > 0) {
            first = length[0];
          }
          table = 3;
          obj = { value: null, done: true };
          obj[0] = first;
          return obj;
        }
      } catch (tmp16) {
        table = tmp;
        throw tmp16;
      }
    }
  })();
};
prototype["setAudioSubsystem"] = function setAudioSubsystem(arg0) {
  if (null != obj.getVoiceEngine().setAudioSubsystem) {
    let tmpResult = tmp(4353);
    const voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.setAudioSubsystem(arg0);
  } else {
    tmpResult = tmp(4353);
    const voiceEngine1 = tmpResult.getVoiceEngine();
    const result = voiceEngine1.setUseLegacyAudioDevice(arg0 === constants2.LEGACY);
  }
};
prototype["setOffloadAdmControls"] = function setOffloadAdmControls(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  if (null != voiceEngine.setOffloadAdmControls) {
    const result = voiceEngine.setOffloadAdmControls(arg0);
  }
};
prototype["updateFieldTrial"] = function updateFieldTrial(arg0, arg1) {
  const voiceEngine = inject.getVoiceEngine();
  const updateFieldTrial = voiceEngine.updateFieldTrial;
  if (updateFieldTrial != null) {
    updateFieldTrial(arg0, arg1);
  }
};
prototype["queueAudioSubsystem"] = function queueAudioSubsystem(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  if (null != voiceEngine.queueAudioSubsystem) {
    voiceEngine.queueAudioSubsystem(arg0);
  } else {
    const self = this;
    this.setAudioSubsystem(arg0);
  }
};
prototype["getAudioSubsystem"] = function getAudioSubsystem() {
  return this.audioSubsystem;
};
prototype["getAudioLayer"] = function getAudioLayer() {
  return this.audioLayer;
};
prototype["getDebugLogging"] = function getDebugLogging() {
  let debugLogging = this.supports(constants4.DEBUG_LOGGING);
  if (debugLogging) {
    const voiceEngine = inject.getVoiceEngine();
    debugLogging = voiceEngine.getDebugLogging();
    const obj = inject;
  }
  return debugLogging;
};
prototype["setDebugLogging"] = function setDebugLogging(arg0) {
  if (this.supports(constants4.DEBUG_LOGGING)) {
    const voiceEngine = inject.getVoiceEngine();
    voiceEngine.setDebugLogging(arg0);
    const obj = inject;
  }
};
prototype["setLoopback"] = function setLoopback(arg0, arg1) {
  let automaticGainControlConfig;
  let automaticGainControlConfig2;
  let tmp = arg0;
  let obj = inject;
  if (null != obj.getVoiceEngine().setLoopback) {
    let tmp2Result = tmp2(4353);
    const voiceEngine = tmp2Result.getVoiceEngine();
    obj = { echoCancellation: null, noiseSuppression: null, automaticGainControl: null, automaticGainControlConfig: null, noiseCancellation: null, noiseCancellationDuringProcessing: null };
    ({ echoCancellation: obj4[0], noiseSuppression: obj4[1], automaticGainControlConfig } = arg1);
    let enabled;
    if (automaticGainControlConfig != null) {
      enabled = automaticGainControlConfig.enabled;
    }
    obj[2] = enabled;
    ({ automaticGainControlConfig: obj4[3], noiseCancellation: obj4[4], noiseCancellationDuringProcessing: obj4[5] } = arg1);
    voiceEngine.setLoopback(tmp, obj);
  }
  const self = this;
  tmp2Result = tmp2(4353);
  if (null != tmp2Result.getVoiceEngine().setEmitVADLevel2) {
    const voiceEngine1 = tmp2(4353).getVoiceEngine();
    if (!tmp) {
      tmp = self.listenerCount(tmp2(4400).MediaEngineEvent.VoiceActivity) > 0;
    }
    voiceEngine1.setEmitVADLevel2(tmp);
    const tmp2Result1 = tmp2(4353);
  } else {
    const voiceEngine2 = tmp2(4353).getVoiceEngine();
    let tmp6 = tmp;
    if (!tmp) {
      tmp6 = self.listenerCount(tmp2(4400).MediaEngineEvent.VoiceActivity) > 0;
    }
    obj = { echoCancellation: null, noiseSuppression: null, automaticGainControl: null, noiseCancellation: null, noiseCancellationDuringProcessing: null };
    ({ echoCancellation: obj6[0], noiseSuppression: obj6[1], automaticGainControlConfig: automaticGainControlConfig2 } = arg1);
    let enabled1;
    if (automaticGainControlConfig2 != null) {
      enabled1 = automaticGainControlConfig2.enabled;
    }
    obj[2] = enabled1;
    ({ noiseCancellation: obj6[3], noiseCancellationDuringProcessing: obj6[4] } = arg1);
    voiceEngine2.setEmitVADLevel(tmp6, tmp, obj);
    const tmp2Result2 = tmp2(4353);
  }
};
prototype["getLoopback"] = function getLoopback() {
  return false;
};
prototype["getCodecSurvey"] = function getCodecSurvey() {
  const self = this;
  if (null != this.codecSurvey) {
    let resolved = Promise.resolve(tmp.codecSurvey);
  } else {
    resolved = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      const voiceEngine = self(outer1_2[8]).getVoiceEngine();
      if (null != voiceEngine.getCodecSurvey) {
        const codecSurvey = voiceEngine.getCodecSurvey((codecSurvey) => {
          callback.codecSurvey = codecSurvey;
          callback(codecSurvey);
        });
      } else {
        const _Error = Error;
        const error = new Error("getCodecSurvey is not implemented.");
        arg1(error);
      }
    });
  }
  return resolved;
};
prototype["writeAudioDebugState"] = function writeAudioDebugState() {
  return new Promise((arg0, arg1) => {
    const writeAudioDebugState = callback(table[8]).getVoiceEngine().writeAudioDebugState;
    if (null != writeAudioDebugState) {
      writeAudioDebugState();
      arg0();
    } else {
      const _Error = Error;
      const error = new Error("Audio debug state is not supported.");
      arg1(error);
    }
  });
};
prototype["startAecDump"] = function startAecDump() {

};
prototype["stopAecDump"] = function stopAecDump() {

};
prototype["setAecDump"] = function setAecDump(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setAecDump = voiceEngine.setAecDump;
  if (setAecDump != null) {
    setAecDump(arg0);
  }
};
prototype["startRecordingRawSamples"] = function startRecordingRawSamples(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const startRecordingRawSamples = voiceEngine.startRecordingRawSamples;
  if (startRecordingRawSamples != null) {
    const result = startRecordingRawSamples(arg0);
  }
};
prototype["stopRecordingRawSamples"] = function stopRecordingRawSamples() {
  const voiceEngine = inject.getVoiceEngine();
  const stopRecordingRawSamples = voiceEngine.stopRecordingRawSamples;
  if (stopRecordingRawSamples != null) {
    const result = stopRecordingRawSamples();
  }
};
prototype["processBatchAudioFiles"] = function processBatchAudioFiles(arg0, arg1, arg2, arg3) {
  const voiceEngine = inject.getVoiceEngine();
  const processBatchAudioFiles = voiceEngine.processBatchAudioFiles;
  if (processBatchAudioFiles != null) {
    const result = processBatchAudioFiles(arg0, arg1, arg2, arg3);
  }
};
prototype["cancelBatchAudioProcessing"] = function cancelBatchAudioProcessing() {
  const voiceEngine = inject.getVoiceEngine();
  const cancelBatchAudioProcessing = voiceEngine.cancelBatchAudioProcessing;
  if (cancelBatchAudioProcessing != null) {
    const result = cancelBatchAudioProcessing();
  }
};
prototype["rankRtcRegions"] = function rankRtcRegions(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    const callback = arg0;
    const rankRtcRegions = callback(outer1_2[8]).getVoiceEngine().rankRtcRegions;
    if (null != rankRtcRegions) {
      rankRtcRegions(callback, (arg0) => callback(arg0));
    } else {
      const _Error = Error;
      const error = new Error("RTC region latency test is not supported.");
      arg1(error);
    }
  });
};
prototype["createReplayConnection"] = function createReplayConnection(arg0, arg1) {
  let self = this;
  self = this;
  const replay = create.createReplay(arg0, arg1);
  let tmp2 = null;
  if (null != replay) {
    replay.on(self(4400).BaseConnectionEvent.Destroy, (arg0) => {
      const connections = self.connections;
      connections.delete(arg0);
      if (self.connectionsEmpty()) {
        self(outer1_2[8]).setProcessPriority(outer1_10.NORMAL);
        const obj = self(outer1_2[8]);
      }
    });
    let connections = self.connections;
    connections.add(replay);
    self(4353).setProcessPriority(constants.HIGH);
    self.emit(self(4400).MediaEngineEvent.Connection, replay);
    tmp2 = replay;
    const obj3 = self(4353);
  }
  return tmp2;
};
prototype["setOnVideoContainerResized"] = function setOnVideoContainerResized(onContainerResized) {
  Video.onContainerResized = onContainerResized;
};
prototype["setMaxSyncDelayOverride"] = function setMaxSyncDelayOverride(arg0) {
  const setMaxSyncDelayOverride = inject.getVoiceEngine().setMaxSyncDelayOverride;
  if (null != setMaxSyncDelayOverride) {
    const result = setMaxSyncDelayOverride(arg0);
  }
};
prototype["applyMediaFilterSettings"] = function applyMediaFilterSettings(arg0) {
  let applyMediaFilterSettings;
  let applyMediaFilterSettingsWithCallback;
  const _require = arg0;
  const voiceEngine = _inject.getVoiceEngine();
  ({ applyMediaFilterSettings, applyMediaFilterSettingsWithCallback } = voiceEngine);
  if (null != applyMediaFilterSettingsWithCallback) {
    let resolved = new Promise((arg0) => {
      applyMediaFilterSettingsWithCallback(closure_0, arg0);
    });
  } else {
    if (null != applyMediaFilterSettings) {
      const result = applyMediaFilterSettings(arg0);
    }
    resolved = Promise.resolve();
  }
  return resolved;
};
prototype["startLocalAudioRecording"] = function startLocalAudioRecording(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    const callback = arg0;
    let closure_1 = arg1;
    const startLocalAudioRecording = callback(outer1_2[8]).getVoiceEngine().startLocalAudioRecording;
    if (null != startLocalAudioRecording) {
      const result = startLocalAudioRecording(callback, (arg0) => {
        if (arg0) {
          callback();
        } else {
          const _Error = Error;
          const error = new Error("Failed to start local audio recording.");
          callback2(error);
        }
      });
    } else {
      let _Error = Error;
      let error = new Error("startLocalAudioRecording is not supported.");
      arg1(error);
    }
  });
};
prototype["stopLocalAudioRecording"] = function stopLocalAudioRecording(arg0) {
  const _require = arg0;
  const voiceEngine = _inject.getVoiceEngine();
  const stopLocalAudioRecording = voiceEngine.stopLocalAudioRecording;
  if (stopLocalAudioRecording != null) {
    const result = stopLocalAudioRecording((arg0, arg1) => {
      callback(arg0, arg1);
    });
  }
  let tmp5 = this.listenerCount(tmp(4400).MediaEngineEvent.VoiceActivity) > 0;
  if (tmp5) {
    let tmpResult = tmp(4353);
    tmp5 = null != tmpResult.getVoiceEngine().setEmitVADLevel2;
  }
  if (tmp5) {
    tmpResult = tmp(4353);
    const voiceEngine1 = tmpResult.getVoiceEngine();
    voiceEngine1.setEmitVADLevel2(true);
  }
};
prototype["setHasFullbandPerformance"] = function setHasFullbandPerformance(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setHasFullbandPerformance = voiceEngine.setHasFullbandPerformance;
  if (setHasFullbandPerformance != null) {
    const result = setHasFullbandPerformance(arg0);
  }
};
prototype["setNcModels"] = function setNcModels(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setNcModels = voiceEngine.setNcModels;
  if (setNcModels != null) {
    setNcModels(arg0);
  }
};
prototype["getSupportedSecureFramesProtocolVersion"] = function getSupportedSecureFramesProtocolVersion() {
  let num = inject.getVoiceEngine().SupportedSecureFramesProtocolVersion;
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getSupportedBandwidthEstimationExperiments"] = function getSupportedBandwidthEstimationExperiments(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const getSupportedBandwidthEstimationExperiments = voiceEngine.getSupportedBandwidthEstimationExperiments;
  if (getSupportedBandwidthEstimationExperiments != null) {
    const supportedBandwidthEstimationExperiments = getSupportedBandwidthEstimationExperiments(arg0);
  }
};
prototype["getMLSSigningKey"] = function getMLSSigningKey(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return new Promise((arg0, arg1) => {
    const callback = arg0;
    const voiceEngine = callback(outer1_2[8]).getVoiceEngine();
    if (null != voiceEngine.getMLSSigningKey) {
      const mLSSigningKey = voiceEngine.getMLSSigningKey(callback, closure_1, (key, signature) => callback({ key, signature }));
    } else {
      const _Error = Error;
      const error = new Error("NOT_IMPLEMENTED");
      arg1(error);
    }
  });
};
prototype["setSidechainCompression"] = function setSidechainCompression(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setSidechainCompression = voiceEngine.setSidechainCompression;
  if (setSidechainCompression != null) {
    const result = setSidechainCompression(arg0);
  }
};
prototype["setSidechainCompressionStrength"] = function setSidechainCompressionStrength(arg0) {
  const diff = 100 - arg0;
  const sum = closure_9 + (closure_7 - closure_9) * diff / 100;
  const sum1 = closure_8 + (closure_6 - closure_8) * diff / 100;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  const applySidechainCompressionSettings = voiceEngine.applySidechainCompressionSettings;
  if (applySidechainCompressionSettings != null) {
    obj = { threshold: null, ratio: null };
    obj[0] = sum;
    obj[1] = sum1;
    const result = applySidechainCompressionSettings(obj);
  }
};
prototype["setVoiceSampleRateCap"] = function setVoiceSampleRateCap(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setVoiceSampleRateCap = voiceEngine.setVoiceSampleRateCap;
  if (setVoiceSampleRateCap != null) {
    const result = setVoiceSampleRateCap(arg0);
  }
};
prototype["setVoiceChannelCountCap"] = function setVoiceChannelCountCap(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setVoiceChannelCountCap = voiceEngine.setVoiceChannelCountCap;
  if (setVoiceChannelCountCap != null) {
    const result = setVoiceChannelCountCap(arg0);
  }
};
prototype["setNativeDesktopVideoSourcePickerActive"] = function setNativeDesktopVideoSourcePickerActive(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const setNativeDesktopVideoSourcePickerActive = voiceEngine.setNativeDesktopVideoSourcePickerActive;
  if (setNativeDesktopVideoSourcePickerActive != null) {
    const result = setNativeDesktopVideoSourcePickerActive(arg0);
  }
};
prototype["presentNativeScreenSharePicker"] = function presentNativeScreenSharePicker(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const presentNativeScreenSharePicker = voiceEngine.presentNativeScreenSharePicker;
  if (presentNativeScreenSharePicker != null) {
    let str = arg0;
    if (arg0 == null) {
      str = "";
    }
    const result = presentNativeScreenSharePicker(str);
  }
};
prototype["releaseNativeDesktopVideoSourcePickerStream"] = function releaseNativeDesktopVideoSourcePickerStream() {
  const voiceEngine = inject.getVoiceEngine();
  const releaseNativeDesktopVideoSourcePickerStream = voiceEngine.releaseNativeDesktopVideoSourcePickerStream;
  if (releaseNativeDesktopVideoSourcePickerStream != null) {
    const result = releaseNativeDesktopVideoSourcePickerStream();
  }
};
prototype["getSystemMicrophoneMode"] = function getSystemMicrophoneMode() {
  return callback2(function*() {
    const obj2 = outer1_0(table[8]);
    const voiceEngine = obj2.getVoiceEngine();
    const getSystemMicrophoneMode = voiceEngine.getSystemMicrophoneMode;
    if (getSystemMicrophoneMode != null) {
      const systemMicrophoneMode = getSystemMicrophoneMode();
    }
    let c0 = yield systemMicrophoneMode;
    if (arg1 == null) {
      c0 = "";
    }
    return c0;
  })();
};
prototype["showSystemCaptureConfigurationUI"] = function showSystemCaptureConfigurationUI(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  const showSystemCaptureConfigurationUI = voiceEngine.showSystemCaptureConfigurationUI;
  if (showSystemCaptureConfigurationUI != null) {
    const result = showSystemCaptureConfigurationUI(arg0);
  }
};
prototype["fetchAsyncResources"] = function fetchAsyncResources() {
  return Promise.resolve();
};
prototype["getDeviceOSVolume"] = function getDeviceOSVolume(arg0) {
  let closure_0 = arg0;
  return callback2(function*() {
    const obj2 = v0(outer1_2[8]);
    const voiceEngine = obj2.getVoiceEngine();
    const getDeviceOSVolume = voiceEngine.getDeviceOSVolume;
    if (getDeviceOSVolume != null) {
      const deviceOSVolume = getDeviceOSVolume(v0);
    }
    yield deviceOSVolume;
    return arg1;
  })();
};
prototype["getDeviceOSMuted"] = function getDeviceOSMuted(arg0) {
  let closure_0 = arg0;
  return callback2(function*() {
    const obj2 = v0(outer1_2[8]);
    const voiceEngine = obj2.getVoiceEngine();
    const getDeviceOSMuted = voiceEngine.getDeviceOSMuted;
    if (getDeviceOSMuted != null) {
      const deviceOSMuted = getDeviceOSMuted(v0);
    }
    yield deviceOSMuted;
    return arg1;
  })();
};
prototype["getDeviceAudioEffects"] = function getDeviceAudioEffects(arg0) {
  const voiceEngine = inject.getVoiceEngine();
  if (null != voiceEngine.getDeviceAudioEffects) {
    let deviceAudioEffects = voiceEngine.getDeviceAudioEffects(arg0);
  } else {
    const _Error = Error;
    const error = new Error("Device audio effect querying not supported");
    deviceAudioEffects = Promise.reject(error);
  }
  return deviceAudioEffects;
};
prototype["watchdogTick"] = function watchdogTick() {
  const self = this;
  const _require = false;
  const voiceEngine = _inject.getVoiceEngine();
  voiceEngine.pingVoiceThread(() => {
    let c0 = true;
    self.consecutiveWatchdogFailures = 0;
  });
  const timerId = setTimeout(() => {
    if (!callback) {
      const sum = self.consecutiveWatchdogFailures + 1;
      self.consecutiveWatchdogFailures = sum;
      if (sum > 1) {
        self.emit(callback(outer1_2[9]).MediaEngineEvent.WatchdogTimeout);
      }
    }
    self.watchdogTick();
  }, closure_19);
};
prototype["connectionsEmpty"] = function connectionsEmpty() {
  return 0 === this.connections.size;
};
let result = require("DesktopSources").fileFinishedImporting("../discord_common/js/packages/media-engine/native/index.tsx");

export default MediaEngineNative;