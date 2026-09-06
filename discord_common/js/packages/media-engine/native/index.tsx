// discord_common/js/packages/media-engine/native/index.tsx
import utils_PlatformUtils from "../../../shared/utils/PlatformUtils.tsx";
import formatDefault from "../../../../../_runtime/01341_format.js";
import inject from "inject.tsx";
import BaseConnectionEvent from "../index.tsx";
import VideoDefault from "ui/Video.tsx";
import CameraDefault from "ui/Camera.tsx";
import ConnectionDefault from "Connection.tsx";
import Devices from "Devices.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import TypedEventEmitter from "../../../shared/utils/TypedEventEmitter.tsx";

const pollConnectionStatsDefault = tmp10(4624);
require = fn;
let Constants = fn(4585);
({
  QUEUE_METRICS_INTERVAL_MS: hasOwnProperty,
  SIDECHAIN_COMPRESSION_MAX_RATIO: metroRequire,
  SIDECHAIN_COMPRESSION_MAX_THRESHOLD: closure_7,
  SIDECHAIN_COMPRESSION_MIN_RATIO: closure_8,
  SIDECHAIN_COMPRESSION_MIN_THRESHOLD: closure_9,
  ProcessPriority: c10,
} = Constants);
Constants = fn(4617);
({
  AudioSubsystems: closure_11,
  ClipsRecordingEvent: closure_12,
  DEFAULT_VOLUME: map1,
  DeviceTypes: closure_14,
  DISABLED_DEVICE_ID: closure_15,
  Features: closure_16,
  MediaEngineContextTypes: closure_17,
  NativeFeatures: closure_18,
  WATCHDOG_TIMEOUT_MS: closure_19,
} = Constants);
class MediaEngineNative extends tmp4 {
  constructor() {
    closure_0 = undefined;
    obj = new MediaEngineNative(tmp9, tmp8, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    closure_0 = obj;
    closure_129_0 = obj;
    tmp11 = closure_2;
    tmp10 = c1;
    obj.Video = c1(closure_2[5]);
    obj.Camera = c1(closure_2[6]);
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
    tmp13 = closure_0;
    logger = new closure_0(closure_2[7]).Logger("MediaEngineNative");
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
      obj = Devices;
      const sanitizeDevicesResult = obj.sanitizeDevices(constants3.AUDIO_INPUT, items);
      const sanitizeDevicesResult1 = Devices.sanitizeDevices(constants3.AUDIO_OUTPUT, items1);
      obj.emit(
        BaseConnectionEvent.MediaEngineEvent.DeviceChange,
        sanitizeDevicesResult,
        sanitizeDevicesResult1,
        Devices.sanitizeDevices(constants3.VIDEO_INPUT, items2),
      );
    };
    obj.handleVolumeChange = function handleVolumeChange(arg0, arg1) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.VolumeChange, arg0 * map1, arg1 * map1);
    };
    obj.handleVoiceActivity = function handleVoiceActivity(arg0, arg1) {
      const timestamp = Date.now();
      let tmp4 = obj.listenerCount(BaseConnectionEvent.MediaEngineEvent.VoiceActivity) > 0;
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
        obj.emit(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, arg0, arg1);
      }
    };
    obj.handleActiveSinksChange = function handleActiveSinksChange(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const connections = obj.connections;
      const item = connections.forEach((setHasActiveVideoOutputSink) =>
        setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(
          closure_0,
          closure_1,
          "MediaEngineNative.handleActiveSinksChange",
        ),
      );
    };
    obj.handleNewListener = function handleNewListener(arg0) {
      if (obj(dependencyMap[9]).MediaEngineEvent.VoiceActivity === arg0) {
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
        const items = [
          deviceChangeGeneration.getAudioInputDevices(),
          deviceChangeGeneration.getAudioOutputDevices(),
          deviceChangeGeneration.getVideoInputDevices(),
        ];
        Promise.all(items).then((result) => {
          [tmp, tmp2, tmp3] = result;
          if (deviceChangeGeneration === obj.deviceChangeGeneration) {
            obj.emit(BaseConnectionEvent.MediaEngineEvent.DeviceChange, tmp, tmp2, tmp3);
          }
        });
        const allPromises = Promise.all(items);
      }
    };
    obj.handleRemoveListener = function handleRemoveListener(arg0) {
      if (arg0 === BaseConnectionEvent.MediaEngineEvent.VoiceActivity) {
        let tmpResult = tmp(1910);
        if (null != tmpResult.getVoiceEngine().setEmitVADLevel2) {
          tmpResult = tmp(1910);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.setEmitVADLevel2(obj.listenerCount(tmp(4615).MediaEngineEvent.VoiceActivity) > 0);
        } else {
          const voiceEngine1 = tmp(1910).getVoiceEngine();
          voiceEngine1.setEmitVADLevel(obj.listenerCount(tmp(4615).MediaEngineEvent.VoiceActivity) > 0, false, {});
          const tmpResult1 = tmp(1910);
        }
      }
    };
    obj.handleVideoInputInitialization = function handleVideoInputInitialization(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.VideoInputInitialized, arg0);
    };
    obj.handleAudioInputInitialization = function handleAudioInputInitialization(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.AudioInputInitialized, arg0);
    };
    obj.handleNativeScreenSharePickerUpdate = function handleNativeScreenSharePickerUpdate(arg0, arg1) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.NativeScreenSharePickerUpdate, arg0, arg1);
    };
    obj.handleNativeScreenSharePickerCancel = function handleNativeScreenSharePickerCancel(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.NativeScreenSharePickerCancel, arg0);
    };
    obj.handleNativeScreenSharePickerError = function handleNativeScreenSharePickerError(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.NativeScreenSharePickerError, arg0);
    };
    obj.handleAudioDeviceModuleErrorCallback = function handleAudioDeviceModuleErrorCallback(arg0, arg1) {
      if (-100 !== arg0) {
        obj.emit(BaseConnectionEvent.MediaEngineEvent.AudioDeviceModuleError, "RustAudioDeviceModule", arg0, arg1);
      }
    };
    obj.handleVideoCodecErrorCallback = function handleVideoCodecErrorCallback(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.VideoCodecError, arg0);
    };
    obj.handleVoiceProcessingErrorCallback = function handleVoiceProcessingErrorCallback(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.VoiceProcessingError, arg0);
    };
    obj.handleVideoFilterErrorCallback = function handleVideoFilterErrorCallback(arg0, arg1) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.VideoFilterError, arg0, arg1);
    };
    obj.handleSpatialAudioStatusCallback = function handleSpatialAudioStatusCallback(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.SpatialAudioStatus, arg0);
    };
    obj.handleSystemMicrophoneModeChangeCallback = function handleSystemMicrophoneModeChangeCallback(arg0) {
      obj.emit(BaseConnectionEvent.MediaEngineEvent.SystemMicrophoneModeChange, arg0);
    };
    logger = obj.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    obj2 = closure_0(closure_2[8]);
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
      result5 = setNativeScreenSharePickerCallbacks(
        obj.handleNativeScreenSharePickerUpdate,
        obj.handleNativeScreenSharePickerCancel,
        obj.handleNativeScreenSharePickerError,
      );
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
    setSpatialAudioStatusCallback = voiceEngine.setSpatialAudioStatusCallback;
    if (setSpatialAudioStatusCallback != null) {
      result9 = setSpatialAudioStatusCallback(obj.handleSpatialAudioStatusCallback);
    }
    setSystemMicrophoneModeChangeCallback = voiceEngine.setSystemMicrophoneModeChangeCallback;
    if (setSystemMicrophoneModeChangeCallback != null) {
      result10 = setSystemMicrophoneModeChangeCallback(obj.handleSystemMicrophoneModeChangeCallback);
    }
    onResult = obj.on("removeListener", obj.handleRemoveListener);
    onResult1 = obj.on("newListener", obj.handleNewListener);
    tmp13Result = tmp13(tmp11[8]);
    if (null != tmp13Result.getVoiceEngine().getAudioSubsystem) {
      tmp13Result1 = tmp13(tmp11[8]);
      voiceEngine1 = tmp13Result1.getVoiceEngine();
      audioSubsystem = voiceEngine1.getAudioSubsystem((audioSubsystem, audioLayer) => {
        obj.audioSubsystem = audioSubsystem;
        obj.audioLayer = audioLayer;
      });
    } else {
      tmp13Result2 = tmp13(tmp11[8]);
      if (null != tmp13Result2.getVoiceEngine().getUseLegacyAudioDevice) {
        tmp13Result3 = tmp13(tmp11[8]);
        voiceEngine2 = tmp13Result3.getVoiceEngine();
        tmp31 = AudioSubsystems;
        obj.audioSubsystem = voiceEngine2.getUseLegacyAudioDevice() ? tmp31.LEGACY : tmp31.STANDARD;
      }
    }
    if (null != voiceEngine.pingVoiceThread) {
      watchdogTickResult = obj.watchdogTick();
    }
    if (null != voiceEngine.setActiveSinksChangeCallback) {
      result11 = voiceEngine.setActiveSinksChangeCallback(obj.handleActiveSinksChange);
    }
    setClipsV3Enabled = voiceEngine.setClipsV3Enabled;
    if (setClipsV3Enabled != null) {
      setClipsV3EnabledResult = setClipsV3Enabled(true);
    }
    setOnClipsMlDetection = voiceEngine.setOnClipsMlDetection;
    if (setOnClipsMlDetection != null) {
      result12 = setOnClipsMlDetection((arg0) => {
        if (arg0.length > 0) {
          obj.emit(BaseConnectionEvent.MediaEngineEvent.ClipsMlDetection, arg0);
        }
      });
    }
    tmp37 = tmp10(tmp11[10])(obj);
    closure_130_0 = obj;
    pollMetrics = function pollMetrics() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_130_2 = pollMetrics;
    closure_130_3 = async function _pollMetrics(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp4;
              const v0 = 0;
              let voiceEngine;
              closure_128_1 = undefined;
              if (importDefault) {
                c3 = 3;
              } else {
                let obj1 = v0(1910);
                voiceEngine = obj1.getVoiceEngine();
                const promise = new Promise((arg0) => {
                  closure_0 = arg0;
                  pollQueueMetrics = pollQueueMetrics.pollQueueMetrics;
                  if (pollQueueMetrics != null) {
                    pollQueueMetrics((arg0) => {
                      closure_0(arg0);
                    });
                  }
                });
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: promise, done: false };
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_1 = value;
            closure_128_1.periodMs = periodMs;
            closure_129_0.emit(v0(4615).MediaEngineEvent.VoiceQueueMetrics, closure_128_1);
            const _setTimeout = setTimeout;
            const timerId = setTimeout(closure_129_2, periodMs);
          }
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp24) {
          c3 = tmp;
          throw tmp24;
        }
      }
    };
    closure_130_1 = false;
    onResult2 = obj.on(tmp13(tmp11[9]).MediaEngineEvent.Destroy, () => {
      c1 = true;
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
prototype["interact"] = function interact() {};
MediaEngineNative["supported"] = function supported() {
  return inject.supported();
};
prototype["supported"] = function supported() {
  return true;
};
prototype["supports"] = function supports(arg0) {
  const tmp = constants4;
  if (constants4.LEGACY_AUDIO_SUBSYSTEM === arg0) {
    return inject.supportsFeature(constants6.VOICE_LEGACY_SUBSYSTEM);
  } else if (tmp.EXPERIMENTAL_AUDIO_SUBSYSTEM === arg0) {
    return inject.supportsFeature(constants6.VOICE_EXPERIMENTAL_SUBSYSTEM);
  } else if (tmp.AUTOMATIC_AUDIO_SUBSYSTEM === arg0) {
    return inject.supportsFeature(constants6.VOICE_AUTOMATIC_SUBSYSTEM);
  } else if (tmp.AUDIO_SUBSYSTEM_DEFERRED_SWITCH === arg0) {
    return inject.supportsFeature(constants6.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
  } else if (tmp.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING === arg0) {
    return inject.supportsFeature(constants6.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
  } else if (tmp.DEBUG_LOGGING === arg0) {
    return inject.supportsFeature(constants6.DEBUG_LOGGING);
  } else if (tmp.SOUNDSHARE === arg0) {
    return inject.supportsFeature(constants6.SOUNDSHARE);
  } else if (tmp.SCREEN_SOUNDSHARE === arg0) {
    return inject.supportsFeature(constants6.SCREEN_SOUNDSHARE);
  } else if (tmp.ELEVATED_HOOK === arg0) {
    return inject.supportsFeature(constants6.ELEVATED_HOOK);
  } else if (tmp.LOOPBACK === arg0) {
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
            const tmp64Result = inject;
          }
          return supportsFeatureResult;
        } else if (tmp.RTC_REGION_RANKING === arg0) {
          return inject.supportsFeature(constants6.RTC_REGION_RANKING);
        } else if (tmp.ELECTRON_VIDEO === arg0) {
          return inject.supportsFeature(constants6.ELECTRON_VIDEO);
        } else if (tmp.MEDIAPIPE === arg0) {
          return inject.supportsFeature(constants6.MEDIAPIPE);
        } else if (tmp.VIDEO_BACKGROUND_FILTER === arg0) {
          let isDesktopResult = utils_PlatformUtils.isDesktop();
          if (isDesktopResult) {
            let tmp50Result = tmp50(1910);
            isDesktopResult = tmp50Result.supportsFeature(constants6.MEDIAPIPE);
          }
          if (!isDesktopResult) {
            tmp50Result = tmp50(1910);
            isDesktopResult = tmp50Result.supportsFeature(constants6.VIDEO_BACKGROUND_FILTER);
          }
          return isDesktopResult;
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
    const tmp94 = formatDefault;
    let family;
    if (tmp94 != null) {
      const os = tmp94.os;
      if (os != null) {
        family = os.family;
      }
    }
    let isMatch = null != family;
    if (isMatch) {
      isMatch = /^win/i.test(formatDefault.os.family);
      const obj33 = /^win/i;
    }
    return isMatch;
  }
};
prototype["connect"] = function connect(arg0, arg1, videoSupported) {
  const self = this;
  obj = obj(1910);
  if (!obj.supportsFeature(constants6.EXPERIMENT_CONFIG)) {
    videoSupported.experiments = undefined;
  }
  let flag = videoSupported.videoSupported;
  if (flag == null) {
    flag = true;
  }
  if (flag) {
    flag = self.supports(constants4.VIDEO);
  }
  obj = self(4626).create(arg0, arg1, videoSupported, flag);
  obj.on(obj(4615).BaseConnectionEvent.Destroy, (arg0) => {
    const connections = self.connections;
    connections.delete(arg0);
    if (self.connectionsEmpty()) {
      inject.setProcessPriority(constants.NORMAL);
      const voiceEngine = inject.getVoiceEngine();
      const setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
      if (setNativeThreadsPriority != null) {
        const result = setNativeThreadsPriority(0);
      }
    }
  });
  obj.on(obj(4615).BaseConnectionEvent.Connected, () => {
    obj.setVideoBroadcast(self.shouldConnectionBroadcastVideo(obj));
  });
  obj.on(obj(4615).BaseConnectionEvent.Silence, (arg0) => {
    self.emit(BaseConnectionEvent.MediaEngineEvent.Silence, arg0);
  });
  let connections = self.connections;
  connections.add(obj);
  let tmpResult = tmp(1910);
  let HIGH = videoSupported.processPriority;
  if (HIGH == null) {
    HIGH = constants.HIGH;
  }
  tmpResult.setProcessPriority(HIGH);
  if (null != videoSupported.threadPriorityConfiguration) {
    tmpResult = tmp(1910);
    let voiceEngine = tmpResult.getVoiceEngine();
    let setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
    if (setNativeThreadsPriority != null) {
      let result = setNativeThreadsPriority(videoSupported.threadPriorityConfiguration);
    }
  }
  self.emit(obj(4615).MediaEngineEvent.Connection, obj);
  return obj;
};
prototype["shouldConnectionBroadcastVideo"] = function shouldConnectionBroadcastVideo(context) {
  let hasDesktopSourceResult = context.context === constants5.DEFAULT;
  if (hasDesktopSourceResult) {
    const self = this;
    hasDesktopSourceResult = this.videoInputDeviceId !== __initData;
  }
  if (!hasDesktopSourceResult) {
    hasDesktopSourceResult = context.hasDesktopSource();
  }
  return hasDesktopSourceResult;
};
prototype["eachConnection"] = function eachConnection(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const connections = this.connections;
  const item = connections.forEach((context) => {
    if (!tmp2) {
      closure_0(context);
    }
  });
};
prototype["enable"] = function enable() {
  return Promise.resolve();
};
prototype["setAudioMixerOptions"] = function setAudioMixerOptions(audioMixerOptions) {
  let obj = inject;
  if (obj.supportsFeature(constants6.SPATIAL_AUDIO)) {
    const voiceEngine = inject.getVoiceEngine();
    obj = { audioMixerOptions };
    voiceEngine.setTransportOptions(obj);
    const tmpResult = inject;
  }
};
prototype["setAudioInputBypassSystemProcessing"] = function setAudioInputBypassSystemProcessing(
  bypassSystemProcessing,
) {
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  obj = { bypassSystemProcessing };
  voiceEngine.setTransportOptions(obj);
};
prototype["setInputVolume"] = function setInputVolume(arg0) {
  let tmp = arg0;
  const voiceEngine = inject.getVoiceEngine();
  if (arg0 == null) {
    tmp = map1;
  }
  voiceEngine.setInputVolume(tmp / map1);
};
prototype["setOutputVolume"] = function setOutputVolume(arg0) {
  let tmp = arg0;
  const voiceEngine = inject.getVoiceEngine();
  if (arg0 == null) {
    tmp = map1;
  }
  voiceEngine.setOutputVolume(tmp / map1);
};
prototype["getAudioInputDevices"] = function getAudioInputDevices() {
  return Devices.getAudioInputDevices();
};
prototype["getNoiseCancellationStats"] = function getNoiseCancellationStats() {
  return new Promise((fn) => {
    closure_0 = fn;
    const voiceEngine = require("inject").getVoiceEngine();
    if (null != voiceEngine.getNoiseCancellationStats) {
      const noiseCancellationStats = voiceEngine.getNoiseCancellationStats((arg0) => closure_0(JSON.parse(arg0)));
    } else {
      fn(null);
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
  _require = audioInputDeviceId;
  this.audioInputDeviceId = audioInputDeviceId;
  if (obj.supportsFeature(constants6.SET_AUDIO_DEVICE_BY_ID)) {
    let tmpResult = tmp(1910);
    let voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.setInputDevice(audioInputDeviceId);
  } else {
    tmpResult = tmp(4686);
    const audioInputDevices = tmpResult.getAudioInputDevices();
    audioInputDevices.then((arr) => {
      let found = arr.find((id) => id.id === audioInputDeviceId);
      if (found == null) {
        found = arr[0];
      }
      if (null != found) {
        const voiceEngine = inject.getVoiceEngine();
        voiceEngine.setInputDevice(found.index);
      }
    });
  }
  self.emit(
    require("BaseConnectionEvent").MediaEngineEvent.SelectedDeviceChange,
    constants3.AUDIO_INPUT,
    this.audioInputDeviceId,
    audioInputDeviceId,
  );
};
prototype["getAudioOutputDevices"] = function getAudioOutputDevices() {
  return Devices.getAudioOutputDevices();
};
prototype["setAudioOutputDevice"] = function setAudioOutputDevice(audioOutputDeviceId) {
  const self = this;
  _require = audioOutputDeviceId;
  this.audioOutputDeviceId = audioOutputDeviceId;
  if (obj.supportsFeature(constants6.SET_AUDIO_DEVICE_BY_ID)) {
    let tmpResult = tmp(1910);
    let voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.setOutputDevice(audioOutputDeviceId);
  } else {
    tmpResult = tmp(4686);
    const audioOutputDevices = tmpResult.getAudioOutputDevices();
    audioOutputDevices.then((arr) => {
      let found = arr.find((id) => id.id === audioOutputDeviceId);
      if (found == null) {
        found = arr[0];
      }
      if (null != found) {
        const voiceEngine = inject.getVoiceEngine();
        voiceEngine.setOutputDevice(found.index);
      }
    });
  }
  self.emit(
    require("BaseConnectionEvent").MediaEngineEvent.SelectedDeviceChange,
    constants3.AUDIO_OUTPUT,
    this.audioOutputDeviceId,
    audioOutputDeviceId,
  );
};
prototype["getVideoInputDevices"] = function getVideoInputDevices() {
  return Devices.getVideoInputDevices();
};
prototype["setVideoInputDevice"] = function setVideoInputDevice(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: self.getVideoInputDevices(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value.find((id) => id.id === closure_1_0);
          let forEach = null;
          if (null != closure_128_0) {
            let id = closure_128_0.id;
          } else {
            id = closure_1_15;
          }
          closure_128_1 = id;
          if (closure_128_1 === closure_129_1.videoInputDeviceId) {
            c3 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            closure_129_1.videoInputDeviceId = closure_128_1;
            if (!obj9.supportsFeature(constants.SET_VIDEO_DEVICE_BY_ID)) {
              obj = tmp2(1910);
              const voiceEngine = obj.getVoiceEngine();
              let num3 = -1;
              if (forEach != closure_128_0) {
                num3 = closure_128_0.index;
              }
              voiceEngine.setVideoInputDevice(num3);
              const connections = closure_129_1.connections;
              forEach = connections.forEach;
              const item = forEach((setVideoBroadcast) =>
                setVideoBroadcast.setVideoBroadcast(closure_1_1.shouldConnectionBroadcastVideo(setVideoBroadcast)),
              );
            }
            if (forEach == closure_128_0) {
              closure_128_2 = closure_1_15;
              obj2 = tmp2(1910);
              const voiceEngine1 = obj2.getVoiceEngine();
              voiceEngine1.setVideoInputDevice(closure_128_2);
            }
            if (forEach == closure_128_0.originalId) {
              const id2 = closure_128_0.id;
            }
            const originalId = closure_128_0.originalId;
            obj9 = tmp2(1910);
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
  const self = this;
  closure_1 = arg0;
  closure_0 = arg1;
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
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  if (null != voiceEngine.setClipsSource) {
    if (null != voiceEngine.setOnClipsRecordingEvent) {
      if (null != voiceEngine.applyClipsSettings) {
        if (null != quality) {
          quality = quality.quality;
          const resolution = quality.resolution;
          if (resolution <= 480) {
            let result = (resolution / 3) * 4;
          } else {
            result = (resolution / 9) * 16;
          }
          const self = this;
          const desktopDescription = quality.desktopDescription;
          ({ id, soundshareId } = desktopDescription);
          obj = { id, soundshareId, applicationName: quality.applicationName };
          this.clipsRecordingEventContext = obj;
          ({
            useLoopback,
            useVideoHook,
            useHookFramePacer,
            useGraphicsCapture,
            useQuartzCapturer,
            allowScreenCaptureKit,
            hdrCaptureMode,
            videoHookAllowDx12,
            minCaptureWidth,
            minCaptureHeight,
          } = desktopDescription);
          const result1 = this.registerClipsRecordingEventHandler();
          const applyClipsSettings = voiceEngine.applyClipsSettings;
          if (applyClipsSettings != null) {
            const size = {
              useVideoHook,
              useHookFramePacer,
              useGraphicsCapture,
              useQuartzCapturer,
              allowScreenCaptureKit,
              hdrCaptureMode,
              videoHookAllowDx12,
              soundshareLoopback: useLoopback,
              frameRate: quality.frameRate,
              width: result,
              height: resolution,
              bitrateKbps: null,
              videoEncoderExperiments: null,
              minCaptureWidth: null,
              minCaptureHeight: null,
            };
            const bitratePercent = quality.bitratePercent;
            let rounded;
            if (null != bitratePercent) {
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              rounded = Math.round((6000 * Math.min(100, Math.max(10, bitratePercent))) / 100);
            }
            size.bitrateKbps = rounded;
            size.videoEncoderExperiments = quality.videoEncoderExperiments;
            size.minCaptureWidth = minCaptureWidth;
            size.minCaptureHeight = minCaptureHeight;
            applyClipsSettings(size);
          }
          if (null != id) {
            let parts = id.split(":");
          } else {
            parts = ["", ""];
          }
          const tmp8 = _slicedToArray(parts, 2);
          const first = tmp8[0];
          obj = { id: tmp8[1], soundshareId: null };
          let num10 = 0;
          if (null != soundshareId) {
            num10 = soundshareId;
          }
          obj.soundshareId = num10;
          voiceEngine.setClipsSource(obj);
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
      rounded = Math.round((6000 * Math.min(100, Math.max(10, arg3))) / 100);
    }
    if (tmp3) {
      obj = { bitrateKbps: rounded };
      voiceEngine.applyClipsSettings(obj);
    }
    return true;
  }
};
prototype["setSoundshareSource"] = function setSoundshareSource(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
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
  _require = arg0;
  closure_1 = arg1;
  let voiceEngine = require("inject").getVoiceEngine();
  if (null != voiceEngine.setPreviewsUseWgc) {
    voiceEngine.setPreviewsUseWgc(arg2);
  }
  let obj = require("inject");
  return new Promise((fn) => {
    closure_0 = fn;
    if (null != obj.getVoiceEngine().getScreenPreviews) {
      const voiceEngine = inject.getVoiceEngine();
      const screenPreviews = voiceEngine.getScreenPreviews(closure_0, closure_1, (arr) => {
        closure_0(
          arr.map((item, index) => {
            const obj = {};
            const merged = Object.assign(item);
            obj.name = `Screen ${index}${1}`;
            return obj;
          }),
        );
      });
      const tmpResult = inject;
    } else {
      fn([]);
    }
  });
};
prototype["setClipsModulePath"] = function setClipsModulePath(arg0) {
  const result = this.registerClipsRecordingEventHandler();
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
prototype["hasClipsV3Support"] = function hasClipsV3Support() {
  const voiceEngine = inject.getVoiceEngine();
  return (
    null != voiceEngine.setClipsModulePath &&
    null != voiceEngine.setClipsRecordingEnabled &&
    null != voiceEngine.exportClipToFile
  );
};
prototype["registerClipsRecordingEventHandler"] = function registerClipsRecordingEventHandler() {
  const self = this;
  const voiceEngine = self(1910).getVoiceEngine();
  if (!tmp) {
    self.clipsRecordingEventHandlerRegistered = true;
    const result = voiceEngine.setOnClipsRecordingEvent((arg0, arg1) => {
      const clipsRecordingEventContext = self.clipsRecordingEventContext;
      ({ id, soundshareId } = clipsRecordingEventContext);
      const logger = self.logger;
      logger.info(
        "Clips recording event: " +
          GoLiveEnded[arg0] +
          " received for stream " +
          id +
          " and sound " +
          soundshareId +
          ".",
      );
      if (arg0 === GoLiveEnded.GoLiveEnded) {
        obj.emit(BaseConnectionEvent.MediaEngineEvent.ClipsRecordingRestartNeeded);
      } else if (arg0 === tmp.Error) {
        let str2 = "Failed to set clips source in media engine";
        if (null != arg1) {
          str2 = "Failed to set clips source in media engine";
          if ("" !== arg1) {
            str2 = arg1;
          }
        }
        obj.emit(
          BaseConnectionEvent.MediaEngineEvent.ClipsInitFailure,
          str2,
          clipsRecordingEventContext.applicationName,
        );
      } else if (arg0 === tmp.IdleShutdown) {
        obj.emit(BaseConnectionEvent.MediaEngineEvent.ClipsBridgeIdleShutdown);
      } else if (arg0 === tmp.RecordingHealthy) {
        obj.emit(BaseConnectionEvent.MediaEngineEvent.ClipsRecordingHealthy);
      } else if (arg0 === tmp.RecordingActive) {
        obj.emit(BaseConnectionEvent.MediaEngineEvent.ClipsRecordingReadyChanged, true);
      } else if (arg0 === tmp.RecordingInactive) {
        obj.emit(BaseConnectionEvent.MediaEngineEvent.ClipsRecordingReadyChanged, false);
      } else {
        if (!tmp3) {
          obj.emit(BaseConnectionEvent.MediaEngineEvent.ClipsRecordingEnded, id, soundshareId);
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
  _require = arg0;
  let saveClipEx = require("inject").getVoiceEngine();
  let obj = require("inject");
  return new Promise((arg0, fn) => {
    closure_0 = arg0;
    saveClipEx = fn;
    function onSuccess(duration, arg1, thumbnail, metadata) {
      try {
        let str = "{}";
        if ("" !== arg1) {
          str = arg1;
        }
        let parsed = JSON.parse(str);
        const obj = { duration, clipStats: parsed };
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
        return closure_0(obj);
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
        return closure_1(JSON.parse(str));
      } catch (err) {
        return closure_1({ errorMessage: "clip save failed", errorAt: "unknown" });
      }
    }
    if (null == saveClipEx.saveClipEx) {
      ({ filepath, metadata, thumbnailMs, startMs, endMs, trimStartMs, trimEndMs, userId } = closure_0);
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
        fn("unsupported");
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
            const result = obj.saveClipForUserWithTime(
              userId,
              filepath,
              metadata,
              startMs,
              endMs,
              trimStartMs,
              trimEndMs,
              onLegacyTimeSuccess,
              onFailure,
              thumbnailMs,
            );
          } else {
            const saveClipForUser = obj.saveClipForUser;
            if (obj3.supportsFeature(constants6.CLIPS_THUMBNAIL)) {
              if (saveClipForUser != null) {
                saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
              }
            } else if (saveClipForUser != null) {
              saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure);
            }
            obj3 = inject;
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
          obj.saveClipWithTime(
            filepath,
            metadata,
            tmp11,
            tmp12,
            tmp13,
            tmp14,
            onLegacyTimeSuccess,
            onFailure,
            thumbnailMs,
          );
        } else {
          const saveClip = obj.saveClip;
          if (obj2.supportsFeature(constants6.CLIPS_THUMBNAIL)) {
            if (saveClip != null) {
              saveClip(filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
            }
          } else if (saveClip != null) {
            saveClip(filepath, metadata, onLegacySuccess, onFailure);
          }
          obj2 = inject;
        }
      }
    } else {
      obj.saveClipEx(closure_0, onSuccess, onFailure);
    }
  });
};
prototype["updateClipMetadata"] = function updateClipMetadata(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const voiceEngine = inject.getVoiceEngine();
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
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  closure_4 = arg4;
  const voiceEngine = inject.getVoiceEngine();
  if (null == voiceEngine.saveScreenshot) {
    let rejectResult = Promise.reject("unsupported");
  } else {
    rejectResult = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      let str = closure_3;
      if (closure_3 == null) {
        str = "";
      }
      let num = closure_4;
      if (closure_4 == null) {
        num = 0;
      }
      voiceEngine.saveScreenshot(
        closure_0,
        closure_1,
        str,
        closure_2,
        num,
        (arg0) => {
          closure_0(Buffer.from(arg0));
        },
        arg1,
      );
    });
  }
  return rejectResult;
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
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const exportClipToFile = inject.getVoiceEngine().exportClipToFile;
  if (null == exportClipToFile) {
    let rejectResult = Promise.reject("unsupported");
  } else {
    rejectResult = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      exportClipToFile(
        closure_0,
        closure_1,
        closure_2,
        (filepath, arg1) => {
          if (typeof filepath === "string") {
            const obj = { filepath, formattedForUpload: true === arg1 };
            closure_0(obj);
          } else {
            closure_1("unsupported: native exportClipToFile returned non-string");
          }
        },
        arg1,
      );
    });
  }
  return rejectResult;
};
prototype["getWindowPreviews"] = function getWindowPreviews(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  let voiceEngine = require("inject").getVoiceEngine();
  if (null != voiceEngine.setPreviewsUseWgc) {
    voiceEngine.setPreviewsUseWgc(arg2);
  }
  const obj = require("inject");
  return new Promise((fn) => {
    closure_0 = fn;
    if (null != obj.getVoiceEngine().getWindowPreviews) {
      const voiceEngine = inject.getVoiceEngine();
      const windowPreviews = voiceEngine.getWindowPreviews(closure_0, closure_1, (arg0) => {
        closure_0(arg0);
      });
      const tmpResult = inject;
    } else {
      fn([]);
    }
  });
};
prototype["getSingleWindowPreview"] = function getSingleWindowPreview(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  return (async (arg0, value) => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            const voiceEngine = tmp2(dependencyMap[8]).getVoiceEngine();
            if (null != voiceEngine.setPreviewsUseWgc) {
              voiceEngine.setPreviewsUseWgc(closure_3);
            }
            let tmp21Result = tmp21(tmp22[8]);
            if (null != tmp21Result.getVoiceEngine().getSingleWindowPreview) {
              tmp21Result = tmp21(tmp22[8]);
              const voiceEngine1 = tmp21Result.getVoiceEngine();
              c1 = 1;
              dependencyMap = 1;
              const obj1 = { value: voiceEngine1.getSingleWindowPreview(tmp2, closure_1, closure_2), done: false };
              return obj1;
            } else {
              dependencyMap = 3;
              return { value: null, done: true };
            }
            const obj9 = tmp2(dependencyMap[8]);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value;
          let first = null;
          if (closure_128_0.length > 0) {
            first = closure_128_0[0];
          }
          dependencyMap = 3;
          obj = { value: first, done: true };
          return obj;
        }
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  })();
};
prototype["setAudioSubsystem"] = function setAudioSubsystem(arg0) {
  if (null != obj.getVoiceEngine().setAudioSubsystem) {
    let tmpResult = tmp(1910);
    const voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.setAudioSubsystem(arg0);
  } else {
    tmpResult = tmp(1910);
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
  }
  return debugLogging;
};
prototype["setDebugLogging"] = function setDebugLogging(arg0) {
  if (this.supports(constants4.DEBUG_LOGGING)) {
    const voiceEngine = inject.getVoiceEngine();
    voiceEngine.setDebugLogging(arg0);
  }
};
prototype["setLoopback"] = function setLoopback(arg0, arg1) {
  let tmp = arg0;
  let obj = inject;
  if (null != obj.getVoiceEngine().setLoopback) {
    let tmp2Result = tmp2(1910);
    const voiceEngine = tmp2Result.getVoiceEngine();
    obj = {
      echoCancellation: null,
      noiseSuppression: null,
      automaticGainControl: null,
      automaticGainControlConfig: null,
      noiseCancellation: null,
      noiseCancellationDuringProcessing: null,
    };
    ({
      echoCancellation: obj4.echoCancellation,
      noiseSuppression: obj4.noiseSuppression,
      automaticGainControlConfig,
    } = arg1);
    let enabled;
    if (automaticGainControlConfig != null) {
      enabled = automaticGainControlConfig.enabled;
    }
    obj.automaticGainControl = enabled;
    ({
      automaticGainControlConfig: obj4.automaticGainControlConfig,
      noiseCancellation: obj4.noiseCancellation,
      noiseCancellationDuringProcessing: obj4.noiseCancellationDuringProcessing,
    } = arg1);
    voiceEngine.setLoopback(tmp, obj);
  }
  const self = this;
  tmp2Result = tmp2(1910);
  if (null != tmp2Result.getVoiceEngine().setEmitVADLevel2) {
    const voiceEngine1 = tmp2(1910).getVoiceEngine();
    if (!tmp) {
      tmp = self.listenerCount(tmp2(4615).MediaEngineEvent.VoiceActivity) > 0;
    }
    voiceEngine1.setEmitVADLevel2(tmp);
    const tmp2Result1 = tmp2(1910);
  } else {
    const voiceEngine2 = tmp2(1910).getVoiceEngine();
    let tmp6 = tmp;
    if (!tmp) {
      tmp6 = self.listenerCount(tmp2(4615).MediaEngineEvent.VoiceActivity) > 0;
    }
    obj = {
      echoCancellation: null,
      noiseSuppression: null,
      automaticGainControl: null,
      noiseCancellation: null,
      noiseCancellationDuringProcessing: null,
    };
    ({
      echoCancellation: obj6.echoCancellation,
      noiseSuppression: obj6.noiseSuppression,
      automaticGainControlConfig: automaticGainControlConfig2,
    } = arg1);
    let enabled1;
    if (automaticGainControlConfig2 != null) {
      enabled1 = automaticGainControlConfig2.enabled;
    }
    obj.automaticGainControl = enabled1;
    ({
      noiseCancellation: obj6.noiseCancellation,
      noiseCancellationDuringProcessing: obj6.noiseCancellationDuringProcessing,
    } = arg1);
    voiceEngine2.setEmitVADLevel(tmp6, tmp, obj);
    const tmp2Result2 = tmp2(1910);
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
    resolved = new Promise((arg0, fn) => {
      closure_0 = arg0;
      const voiceEngine = self(dependencyMap[8]).getVoiceEngine();
      if (null != voiceEngine.getCodecSurvey) {
        const codecSurvey = voiceEngine.getCodecSurvey((codecSurvey) => {
          self.codecSurvey = codecSurvey;
          closure_0(codecSurvey);
        });
      } else {
        const _Error = Error;
        const error = new Error("getCodecSurvey is not implemented.");
        fn(error);
      }
    });
  }
  return resolved;
};
prototype["writeAudioDebugState"] = function writeAudioDebugState() {
  return new Promise((fn, fn2) => {
    const writeAudioDebugState = require("inject").getVoiceEngine().writeAudioDebugState;
    if (null != writeAudioDebugState) {
      writeAudioDebugState();
      fn();
    } else {
      const _Error = Error;
      const error = new Error("Audio debug state is not supported.");
      fn2(error);
    }
  });
};
prototype["startAecDump"] = function startAecDump() {};
prototype["stopAecDump"] = function stopAecDump() {};
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
  closure_0 = arg0;
  return new Promise((arg0, fn) => {
    closure_0 = arg0;
    const rankRtcRegions = inject.getVoiceEngine().rankRtcRegions;
    if (null != rankRtcRegions) {
      rankRtcRegions(closure_0, (arg0) => closure_0(arg0));
    } else {
      const _Error = Error;
      const error = new Error("RTC region latency test is not supported.");
      fn(error);
    }
  });
};
prototype["createReplayConnection"] = function createReplayConnection(arg0, arg1) {
  const self = this;
  const replay = ConnectionDefault.createReplay(arg0, arg1);
  let tmp2 = null;
  if (null != replay) {
    replay.on(self(4615).BaseConnectionEvent.Destroy, (arg0) => {
      const connections = self.connections;
      connections.delete(arg0);
      if (self.connectionsEmpty()) {
        inject.setProcessPriority(constants.NORMAL);
      }
    });
    let connections = self.connections;
    connections.add(replay);
    self(1910).setProcessPriority(constants.HIGH);
    self.emit(self(4615).MediaEngineEvent.Connection, replay);
    tmp2 = replay;
    const obj3 = self(1910);
  }
  return tmp2;
};
prototype["setOnVideoContainerResized"] = function setOnVideoContainerResized(onContainerResized) {
  VideoDefault.onContainerResized = onContainerResized;
};
prototype["setMaxSyncDelayOverride"] = function setMaxSyncDelayOverride(arg0) {
  const setMaxSyncDelayOverride = inject.getVoiceEngine().setMaxSyncDelayOverride;
  if (null != setMaxSyncDelayOverride) {
    const result = setMaxSyncDelayOverride(arg0);
  }
};
prototype["applyMediaFilterSettings"] = function applyMediaFilterSettings(arg0) {
  closure_0 = arg0;
  const voiceEngine = inject.getVoiceEngine();
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
  closure_0 = arg0;
  return new Promise((arg0, fn) => {
    closure_0 = arg0;
    closure_1 = fn;
    const startLocalAudioRecording = inject.getVoiceEngine().startLocalAudioRecording;
    if (null != startLocalAudioRecording) {
      const result = startLocalAudioRecording(closure_0, (arg0) => {
        if (arg0) {
          closure_0();
        } else {
          const _Error = Error;
          const error = new Error("Failed to start local audio recording.");
          closure_1(error);
        }
      });
    } else {
      let _Error = Error;
      let error = new Error("startLocalAudioRecording is not supported.");
      fn(error);
    }
  });
};
prototype["stopLocalAudioRecording"] = function stopLocalAudioRecording(arg0) {
  closure_0 = arg0;
  const voiceEngine = inject.getVoiceEngine();
  const stopLocalAudioRecording = voiceEngine.stopLocalAudioRecording;
  if (stopLocalAudioRecording != null) {
    const result = stopLocalAudioRecording((arg0, arg1) => {
      closure_0(arg0, arg1);
    });
  }
  let tmp5 = this.listenerCount(tmp(4615).MediaEngineEvent.VoiceActivity) > 0;
  if (tmp5) {
    let tmpResult = tmp(1910);
    tmp5 = null != tmpResult.getVoiceEngine().setEmitVADLevel2;
  }
  if (tmp5) {
    tmpResult = tmp(1910);
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
  closure_0 = arg0;
  closure_1 = arg1;
  return new Promise((arg0, fn) => {
    closure_0 = arg0;
    const voiceEngine = inject.getVoiceEngine();
    if (null != voiceEngine.getMLSSigningKey) {
      const mLSSigningKey = voiceEngine.getMLSSigningKey(closure_0, closure_1, (key, signature) =>
        closure_0({ key, signature }),
      );
    } else {
      const _Error = Error;
      const error = new Error("NOT_IMPLEMENTED");
      fn(error);
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
  const sum = React7 + ((React5 - React7) * diff) / 100;
  const sum1 = React6 + ((timestampProducer - React6) * diff) / 100;
  let obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  const applySidechainCompressionSettings = voiceEngine.applySidechainCompressionSettings;
  if (applySidechainCompressionSettings != null) {
    obj = { threshold: sum, ratio: sum1 };
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
  return (async () => {
    const voiceEngine = require("inject").getVoiceEngine();
    const getSystemMicrophoneMode = voiceEngine.getSystemMicrophoneMode;
    if (getSystemMicrophoneMode != null) {
      const systemMicrophoneMode = getSystemMicrophoneMode();
    }
    value = await systemMicrophoneMode;
    if (arg1 == null) {
      value = "";
    }
    return value;
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
  closure_0 = arg0;
  return (async () => {
    const voiceEngine = v3(dependencyMap[8]).getVoiceEngine();
    const getDeviceOSVolume = voiceEngine.getDeviceOSVolume;
    if (getDeviceOSVolume != null) {
      const deviceOSVolume = getDeviceOSVolume(closure_0);
    }
    await deviceOSVolume;
    return arg1;
  })();
};
prototype["getDeviceOSMuted"] = function getDeviceOSMuted(arg0) {
  closure_0 = arg0;
  return (async () => {
    const voiceEngine = v3(dependencyMap[8]).getVoiceEngine();
    const getDeviceOSMuted = voiceEngine.getDeviceOSMuted;
    if (getDeviceOSMuted != null) {
      const deviceOSMuted = getDeviceOSMuted(closure_0);
    }
    await deviceOSMuted;
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
  _require = false;
  const voiceEngine = require("inject").getVoiceEngine();
  voiceEngine.pingVoiceThread(() => {
    c0 = true;
    self.consecutiveWatchdogFailures = 0;
  });
  const timerId = setTimeout(() => {
    if (!c0) {
      const sum = self.consecutiveWatchdogFailures + 1;
      self.consecutiveWatchdogFailures = sum;
      if (sum > 1) {
        self.emit(BaseConnectionEvent.MediaEngineEvent.WatchdogTimeout);
      }
    }
    self.watchdogTick();
  }, closure_19);
};
prototype["connectionsEmpty"] = function connectionsEmpty() {
  return 0 === this.connections.size;
};
let size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/index.tsx");

export default MediaEngineNative;
