// === Module 4946: MediaEngineNative ===

// Module 4946 (MediaEngineNative)
import _modDef1351 from "module_1351" /* 1351 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import inject from "inject" /* 2001 */;
import VideoDefault from "Video" /* 4949 */;
import CameraDefault from "Camera" /* 4953 */;
import MediaEngineEvent from "MediaEngineEvent" /* 4954 */;
import pollConnectionStatsDefault from "pollConnectionStats" /* 4955 */;
import ConnectionDefault from "Connection" /* 4957 */;
import Devices from "Devices" /* 5017 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants_mod from "Constants" /* 4915 */;
import Constants_mod2 from "Constants" /* 4947 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4948 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c3;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let Constants = Constants_mod2;
({ QUEUE_METRICS_INTERVAL_MS: hasOwnProperty, SIDECHAIN_COMPRESSION_MAX_RATIO: metroRequire, SIDECHAIN_COMPRESSION_MAX_THRESHOLD: metroImportDefault, SIDECHAIN_COMPRESSION_MIN_RATIO: metroImportAll, SIDECHAIN_COMPRESSION_MIN_THRESHOLD: c9, ProcessPriority: c10 } = Constants);
Constants = Constants_mod2;
({ ClipsRecordingEvent: unpackModuleId, DEFAULT_VOLUME: closure_12, DeviceTypes: map1, DISABLED_DEVICE_ID: closure_14, Features: closure_15, MediaEngineContextTypes: closure_16, NativeFeatures: closure_17, WATCHDOG_TIMEOUT_MS: closure_18 } = Constants);
class MediaEngineNative extends TypedEventEmitter {
  constructor() {
    let tmp3;
    let tmp4;
    let tmp5;
    let obj = new MediaEngineNative(tmp9, tmp8, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    obj.Video = VideoDefault;
    obj.Camera = CameraDefault;
    obj.audioInputDeviceId = videoInputDeviceId;
    obj.audioOutputDeviceId = videoInputDeviceId;
    obj.videoInputDeviceId = videoInputDeviceId;
    obj.connections = new Set();
    obj.lastVoiceActivity = -1;
    obj.audioSubsystem = "standard";
    obj.audioLayer = "";
    obj.deviceChangeGeneration = 0;
    obj.consecutiveWatchdogFailures = 0;
    obj.codecSurvey = null;
    obj.clipsRecordingEventContext = { id: "", soundshareId: 0, applicationName: "" };
    obj.clipsRecordingEventHandlerRegistered = false;
    new Set();
    const logger1 = new obj(4).Logger("MediaEngineNative");
    obj.logger = logger1;
    obj.handleDeviceChange = function handleDeviceChange() {
      let items;
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
      const emit = obj.emit;
      const DeviceChange = obj(dependencyMap[9]).MediaEngineEvent.DeviceChange;
      obj = obj(dependencyMap[15]);
      const sanitizeDevicesResult = obj.sanitizeDevices(constants.AUDIO_INPUT, items);
      const obj2 = obj(dependencyMap[15]);
      const sanitizeDevicesResult1 = obj2.sanitizeDevices(constants.AUDIO_OUTPUT, items1);
      const obj3 = obj(dependencyMap[15]);
      emit(DeviceChange, sanitizeDevicesResult, sanitizeDevicesResult1, obj3.sanitizeDevices(constants.VIDEO_INPUT, items2));
    };
    obj.handleVolumeChange = function handleVolumeChange(arg0, arg1) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.VolumeChange, arg0 * closure_2_12, arg1 * closure_2_12);
    };
    obj.handleVoiceActivity = function handleVoiceActivity(arg0, arg1) {
      const timestamp = Date.now();
      let tmp4 = obj.listenerCount(obj(dependencyMap[9]).MediaEngineEvent.VoiceActivity) > 0;
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
        obj.emit(obj(dependencyMap[9]).MediaEngineEvent.VoiceActivity, arg0, arg1);
      }
    };
    obj.handleActiveSinksChange = function handleActiveSinksChange(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const connections = obj.connections;
      const item = connections.forEach((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, closure_1, "MediaEngineNative.handleActiveSinksChange"));
    };
    obj.handleNewListener = function handleNewListener(arg0) {
      let deviceChangeGeneration;
      if (obj(closure_1_2[9]).MediaEngineEvent.VoiceActivity === arg0) {
        const tmp3 = null;
        const tmpResult = obj(closure_1_2[8]);
        if (null != tmpResult.getVoiceEngine().setEmitVADLevel2) {
          const tmpResult3 = obj(closure_1_2[8]);
          const voiceEngine = tmpResult3.getVoiceEngine();
          voiceEngine.setEmitVADLevel2(true);
        } else {
          const tmpResult4 = obj(closure_1_2[8]);
          const voiceEngine1 = tmpResult4.getVoiceEngine();
          voiceEngine1.setEmitVADLevel(true, false, {});
        }
      } else if (obj(closure_1_2[9]).MediaEngineEvent.DeviceChange === arg0) {
        deviceChangeGeneration = deviceChangeGeneration.deviceChangeGeneration;
        const items = [deviceChangeGeneration.getAudioInputDevices(), deviceChangeGeneration.getAudioOutputDevices(), deviceChangeGeneration.getVideoInputDevices()];
        const allResult = all(items);
        allResult.then((result) => {
          let tmp;
          let tmp2;
          let tmp3;
          [tmp, tmp2, tmp3] = result;
          if (deviceChangeGeneration === obj.deviceChangeGeneration) {
            obj.emit(obj(dependencyMap[9]).MediaEngineEvent.DeviceChange, tmp, tmp2, tmp3);
          }
        });
      }
    };
    obj.handleRemoveListener = function handleRemoveListener(arg0) {
      if (arg0 === obj(dependencyMap[9]).MediaEngineEvent.VoiceActivity) {
        const tmpResult = obj(dependencyMap[8]);
        if (null != tmpResult.getVoiceEngine().setEmitVADLevel2) {
          const tmpResult3 = obj(dependencyMap[8]);
          const voiceEngine = tmpResult3.getVoiceEngine();
          voiceEngine.setEmitVADLevel2(obj.listenerCount(obj(dependencyMap[9]).MediaEngineEvent.VoiceActivity) > 0);
        } else {
          const tmpResult4 = obj(dependencyMap[8]);
          const voiceEngine1 = tmpResult4.getVoiceEngine();
          voiceEngine1.setEmitVADLevel(obj.listenerCount(obj(dependencyMap[9]).MediaEngineEvent.VoiceActivity) > 0, false, {});
        }
      }
    };
    obj.handleVideoInputInitialization = function handleVideoInputInitialization(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.VideoInputInitialized, arg0);
    };
    obj.handleAudioInputInitialization = function handleAudioInputInitialization(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.AudioInputInitialized, arg0);
    };
    obj.handleNativeScreenSharePickerUpdate = function handleNativeScreenSharePickerUpdate(arg0, arg1) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.NativeScreenSharePickerUpdate, arg0, arg1);
    };
    obj.handleNativeScreenSharePickerCancel = function handleNativeScreenSharePickerCancel(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.NativeScreenSharePickerCancel, arg0);
    };
    obj.handleNativeScreenSharePickerError = function handleNativeScreenSharePickerError(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.NativeScreenSharePickerError, arg0);
    };
    obj.handleAudioDeviceModuleErrorCallback = function handleAudioDeviceModuleErrorCallback(arg0, arg1) {
      if (-100 !== arg0) {
        obj.emit(obj(dependencyMap[9]).MediaEngineEvent.AudioDeviceModuleError, "RustAudioDeviceModule", arg0, arg1);
      }
    };
    obj.handleVideoCodecErrorCallback = function handleVideoCodecErrorCallback(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.VideoCodecError, arg0);
    };
    obj.handleVoiceProcessingErrorCallback = function handleVoiceProcessingErrorCallback(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.VoiceProcessingError, arg0);
    };
    obj.handleVideoFilterErrorCallback = function handleVideoFilterErrorCallback(arg0, arg1) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.VideoFilterError, arg0, arg1);
    };
    obj.handleSpatialAudioStatusCallback = function handleSpatialAudioStatusCallback(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.SpatialAudioStatus, arg0);
    };
    obj.handleSystemMicrophoneModeChangeCallback = function handleSystemMicrophoneModeChangeCallback(arg0) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.SystemMicrophoneModeChange, arg0);
    };
    obj.handleDeviceHardwareMutedChange = function handleDeviceHardwareMutedChange(arg0, arg1) {
      obj.emit(obj(dependencyMap[9]).MediaEngineEvent.DeviceHardwareMutedChange, arg0, arg1);
    };
    const logger = obj.logger;
    logger.enableNativeLogger(true);
    let obj2 = obj(2001);
    let voiceEngine = obj2.getVoiceEngine();
    const result = voiceEngine.setDeviceChangeCallback(obj.handleDeviceChange);
    const result1 = voiceEngine.setVolumeChangeCallback(obj.handleVolumeChange);
    voiceEngine.setOnVoiceCallback(obj.handleVoiceActivity);
    if (voiceEngine.setVideoInputInitializationCallback != null) {
      const result2 = setVideoInputInitializationCallback(obj.handleVideoInputInitialization);
    }
    if (voiceEngine.setAudioInputInitializationCallback != null) {
      const result3 = setAudioInputInitializationCallback(obj.handleAudioInputInitialization);
    }
    if (voiceEngine.setAudioDeviceModuleErrorCallback != null) {
      const result4 = setAudioDeviceModuleErrorCallback(obj.handleAudioDeviceModuleErrorCallback);
    }
    voiceEngine.setTransportOptions({ idleJitterBufferFlush: true, ducking: false });
    if (voiceEngine.setNativeScreenSharePickerCallbacks != null) {
      const result5 = setNativeScreenSharePickerCallbacks(obj.handleNativeScreenSharePickerUpdate, obj.handleNativeScreenSharePickerCancel, obj.handleNativeScreenSharePickerError);
    }
    if (voiceEngine.setVideoCodecErrorCallback != null) {
      const result6 = setVideoCodecErrorCallback(obj.handleVideoCodecErrorCallback);
    }
    if (voiceEngine.setVoiceProcessingErrorCallback != null) {
      const result7 = setVoiceProcessingErrorCallback(obj.handleVoiceProcessingErrorCallback);
    }
    if (voiceEngine.setVideoFilterErrorCallback != null) {
      const result8 = setVideoFilterErrorCallback(obj.handleVideoFilterErrorCallback);
    }
    if (voiceEngine.setSpatialAudioStatusCallback != null) {
      const result9 = setSpatialAudioStatusCallback(obj.handleSpatialAudioStatusCallback);
    }
    if (voiceEngine.setSystemMicrophoneModeChangeCallback != null) {
      const result10 = setSystemMicrophoneModeChangeCallback(obj.handleSystemMicrophoneModeChangeCallback);
    }
    obj.on("removeListener", obj.handleRemoveListener);
    obj.on("newListener", obj.handleNewListener);
    const tmp13Result = obj(2001);
    if (null != tmp13Result.getVoiceEngine().getAudioSubsystem) {
      const tmp13Result2 = obj(2001);
      let voiceEngine1 = tmp13Result2.getVoiceEngine();
      const audioSubsystem = voiceEngine1.getAudioSubsystem((audioSubsystem, audioLayer) => {
        obj.audioSubsystem = audioSubsystem;
        obj.audioLayer = audioLayer;
      });
    }
    if (null != voiceEngine.pingVoiceThread) {
      obj.watchdogTick();
    }
    if (null != voiceEngine.setActiveSinksChangeCallback) {
      const result11 = voiceEngine.setActiveSinksChangeCallback(obj.handleActiveSinksChange);
    }
    const setClipsV3Enabled = voiceEngine.setClipsV3Enabled;
    if (setClipsV3Enabled != null) {
      setClipsV3Enabled(true);
    }
    const setOnClipsMlDetection = voiceEngine.setOnClipsMlDetection;
    if (setOnClipsMlDetection != null) {
      const result12 = setOnClipsMlDetection((arg0) => {
        if (arg0.length > 0) {
          obj.emit(MediaEngineEvent.MediaEngineEvent.ClipsMlDetection, arg0);
        }
      });
    }
    pollConnectionStatsDefault(obj);
    function pollMetrics() {
      return obj(...arguments);
    }
    obj = function _pollMetrics() {
      obj = _asyncToGenerator(async function() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let v0;
            let closure_1;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                v0 = 0;
                let voiceEngine;
                closure_1 = undefined;
                if (!closure_2_1) {
                  const obj2 = v0(c2[8]);
                  voiceEngine = obj2.getVoiceEngine();
                  const self = this;
                  const self2 = this;
                  const promise = new Promise((arg0) => {
                    let pollQueueMetrics;
                    let closure_0 = arg0;
                    pollQueueMetrics = pollQueueMetrics.pollQueueMetrics;
                    if (pollQueueMetrics != null) {
                      pollQueueMetrics((arg0) => {
                        closure_0(arg0);
                      });
                    }
                  });
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: promise, done: false };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = value;
              closure_1.periodMs = periodMs;
              closure_129_0.emit(v0(c2[9]).MediaEngineEvent.VoiceQueueMetrics, closure_1);
              const _setTimeout = setTimeout;
              const timerId = setTimeout(closure_129_2, periodMs);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp21) {
            c3 = 3;
            throw tmp21;
          }
        }
      });
      return obj(...arguments);
    };
    let c1 = false;
    obj.on(obj(4954).MediaEngineEvent.Destroy, () => {
      c1 = true;
      return true;
    });
    let timerId = setTimeout(pollMetrics, closure_5);
    return obj;
  }
  destroy() {
    this.eachConnection((destroy) => destroy.destroy());
    this.emit(MediaEngineEvent.MediaEngineEvent.Destroy);
    this.removeAllListeners();
  }
  interact() {

  }
  static supported() {
    const obj = inject;
    return obj.supported();
  }
  supported() {
    return true;
  }
  supports(arg0) {
    if (constants3.LEGACY_AUDIO_SUBSYSTEM === arg0) {
      const obj45 = inject;
      return obj45.supportsFeature(constants5.VOICE_LEGACY_SUBSYSTEM);
    } else if (constants3.EXPERIMENTAL_AUDIO_SUBSYSTEM === arg0) {
      const obj44 = inject;
      return obj44.supportsFeature(constants5.VOICE_EXPERIMENTAL_SUBSYSTEM);
    } else if (constants3.AUTOMATIC_AUDIO_SUBSYSTEM === arg0) {
      const obj43 = inject;
      return obj43.supportsFeature(constants5.VOICE_AUTOMATIC_SUBSYSTEM);
    } else if (constants3.AUDIO_SUBSYSTEM_DEFERRED_SWITCH === arg0) {
      const obj42 = inject;
      return obj42.supportsFeature(constants5.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
    } else if (constants3.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING === arg0) {
      const obj41 = inject;
      return obj41.supportsFeature(constants5.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
    } else if (constants3.DEBUG_LOGGING === arg0) {
      const obj40 = inject;
      return obj40.supportsFeature(constants5.DEBUG_LOGGING);
    } else if (constants3.SOUNDSHARE === arg0) {
      const obj39 = inject;
      return obj39.supportsFeature(constants5.SOUNDSHARE);
    } else if (constants3.SCREEN_SOUNDSHARE === arg0) {
      const obj38 = inject;
      return obj38.supportsFeature(constants5.SCREEN_SOUNDSHARE);
    } else if (constants3.ELEVATED_HOOK === arg0) {
      const obj37 = inject;
      return obj37.supportsFeature(constants5.ELEVATED_HOOK);
    } else if (constants3.LOOPBACK === arg0) {
      const obj36 = inject;
      return obj36.supportsFeature(constants5.LOOPBACK);
    } else if (constants3.WUMPUS_VIDEO === arg0) {
      const obj35 = inject;
      return obj35.supportsFeature(constants5.WUMPUS_VIDEO);
    } else if (constants3.HYBRID_VIDEO === arg0) {
      const obj34 = inject;
      return obj34.supportsFeature(constants5.HYBRID_VIDEO);
    } else {
      if (constants3.ATTENUATION !== arg0) {
        if (constants3.VIDEO_HOOK !== arg0) {
          if (constants3.EXPERIMENTAL_SOUNDSHARE === arg0) {
            const obj32 = inject;
            return obj32.supportsFeature(constants5.SOUNDSHARE_LOOPBACK);
          } else if (constants3.REMOTE_LOCUS_NETWORK_CONTROL === arg0) {
            const obj31 = inject;
            return obj31.supportsFeature(constants5.REMOTE_LOCUS_NETWORK_CONTROL);
          } else if (constants3.SCREEN_PREVIEWS === arg0) {
            const obj30 = inject;
            return obj30.supportsFeature(constants5.SCREEN_PREVIEWS);
          } else if (constants3.CLIPS === arg0) {
            const obj29 = inject;
            return obj29.supportsFeature(constants5.CLIPS);
          } else if (constants3.CLIPS_RECORDING_READY_EVENTS === arg0) {
            const obj28 = inject;
            return obj28.supportsFeature(constants5.CLIPS_RECORDING_READY_EVENTS);
          } else if (constants3.WINDOW_PREVIEWS === arg0) {
            const obj27 = inject;
            return obj27.supportsFeature(constants5.WINDOW_PREVIEWS);
          } else if (constants3.AUDIO_DEBUG_STATE === arg0) {
            const obj26 = inject;
            return obj26.supportsFeature(constants5.AUDIO_DEBUG_STATE);
          } else if (constants3.CONNECTION_REPLAY === arg0) {
            const obj25 = inject;
            return obj25.supportsFeature(constants5.CONNECTION_REPLAY);
          } else if (constants3.SIMULCAST === arg0) {
            const obj23 = inject;
            let supportsFeatureResult = obj23.supportsFeature(constants5.SIMULCAST);
            if (supportsFeatureResult) {
              const tmp64Result = inject;
              supportsFeatureResult = tmp64Result.supportsFeature(constants5.SIMULCAST_BUGFIX);
            }
            return supportsFeatureResult;
          } else if (constants3.RTC_REGION_RANKING === arg0) {
            const obj22 = inject;
            return obj22.supportsFeature(constants5.RTC_REGION_RANKING);
          } else if (constants3.ELECTRON_VIDEO === arg0) {
            const obj21 = inject;
            return obj21.supportsFeature(constants5.ELECTRON_VIDEO);
          } else if (constants3.MEDIAPIPE === arg0) {
            const obj20 = inject;
            return obj20.supportsFeature(constants5.MEDIAPIPE);
          } else if (constants3.VIDEO_BACKGROUND_FILTER === arg0) {
            const obj17 = utils_PlatformUtils;
            let isDesktopResult = obj17.isDesktop();
            if (isDesktopResult) {
              const tmp50Result = inject;
              isDesktopResult = tmp50Result.supportsFeature(constants5.MEDIAPIPE);
            }
            if (!isDesktopResult) {
              const tmp50Result2 = inject;
              isDesktopResult = tmp50Result2.supportsFeature(constants5.VIDEO_BACKGROUND_FILTER);
            }
            return isDesktopResult;
          } else if (constants3.FIXED_KEYFRAME_INTERVAL === arg0) {
            const obj16 = inject;
            return obj16.supportsFeature(constants5.FIXED_KEYFRAME_INTERVAL);
          } else if (constants3.FIRST_FRAME_CALLBACK === arg0) {
            const obj15 = inject;
            return obj15.supportsFeature(constants5.FIRST_FRAME_CALLBACK);
          } else if (constants3.REMOTE_USER_MULTI_STREAM === arg0) {
            const obj14 = inject;
            return obj14.supportsFeature(constants5.REMOTE_USER_MULTI_STREAM);
          } else if (constants3.IMAGE_QUALITY_MEASUREMENT === arg0) {
            const obj13 = inject;
            return obj13.supportsFeature(constants5.IMAGE_QUALITY_MEASUREMENT);
          } else if (constants3.GO_LIVE_HARDWARE === arg0) {
            const obj12 = inject;
            return obj12.supportsFeature(constants5.GO_LIVE_HARDWARE);
          } else if (constants3.SCREEN_CAPTURE_KIT === arg0) {
            const obj11 = inject;
            return obj11.supportsFeature(constants5.SCREEN_CAPTURE_KIT);
          } else if (constants3.NATIVE_SCREENSHARE_PICKER === arg0) {
            const obj10 = inject;
            return obj10.supportsFeature(constants5.NATIVE_SCREENSHARE_PICKER);
          } else if (constants3.MLS_PAIRWISE_FINGERPRINTS === arg0) {
            const obj9 = inject;
            return obj9.supportsFeature(constants5.MLS_PAIRWISE_FINGERPRINTS);
          } else if (constants3.OFFLOAD_ADM_CONTROLS === arg0) {
            const obj8 = inject;
            return obj8.supportsFeature(constants5.OFFLOAD_ADM_CONTROLS);
          } else if (constants3.VAAPI === arg0) {
            const obj7 = inject;
            return obj7.supportsFeature(constants5.VAAPI);
          } else if (constants3.GAMESCOPE_CAPTURE === arg0) {
            const obj6 = inject;
            return obj6.supportsFeature(constants5.GAMESCOPE_CAPTURE);
          } else if (constants3.ASYNC_VIDEO_INPUT_DEVICE_INIT === arg0) {
            const obj5 = inject;
            return obj5.supportsFeature(constants5.ASYNC_VIDEO_INPUT_DEVICE_INIT);
          } else if (constants3.PORT_AWARE_LATENCY_TESTING === arg0) {
            const obj4 = inject;
            return obj4.supportsFeature(constants5.PORT_AWARE_LATENCY_TESTING);
          } else if (constants3.SPATIAL_AUDIO === arg0) {
            const obj3 = inject;
            return obj3.supportsFeature(constants5.SPATIAL_AUDIO);
          } else if (constants3.KRISP_NATIVE_ERROR === arg0) {
            const obj2 = inject;
            return obj2.supportsFeature(constants5.KRISP_NATIVE_ERROR);
          } else if (constants3.UDP_ENDPOINT_UPDATE === arg0) {
            const obj = inject;
            return obj.supportsFeature(constants5.UDP_ENDPOINT_UPDATE);
          } else {
            if (constants3.DIAGNOSTICS !== arg0) {
              if (constants3.NATIVE_PING !== arg0) {
                if (constants3.AUTOMATIC_VAD !== arg0) {
                  if (constants3.AUDIO_INPUT_DEVICE !== arg0) {
                    if (constants3.AUDIO_OUTPUT_DEVICE !== arg0) {
                      if (constants3.QOS !== arg0) {
                        if (constants3.VOICE_PROCESSING !== arg0) {
                          if (constants3.AUTO_ENABLE !== arg0) {
                            if (constants3.VIDEO !== arg0) {
                              if (constants3.DESKTOP_CAPTURE !== arg0) {
                                if (constants3.DESKTOP_CAPTURE_FORMAT !== arg0) {
                                  if (constants3.DESKTOP_CAPTURE_APPLICATIONS !== arg0) {
                                    if (constants3.VOICE_PANNING !== arg0) {
                                      if (constants3.AEC_DUMP !== arg0) {
                                        if (constants3.DISABLE_VIDEO !== arg0) {
                                          if (constants3.SAMPLE_PLAYBACK !== arg0) {
                                            if (constants3.NOISE_SUPPRESSION !== arg0) {
                                              if (constants3.AUTOMATIC_GAIN_CONTROL !== arg0) {
                                                if (constants3.SIDECHAIN_COMPRESSION !== arg0) {
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
      const tmp94 = _modDef1351;
      let family;
      if (tmp94 != null) {
        const os = tmp94.os;
        if (os != null) {
          family = os.family;
        }
      }
      let isMatch = null != family;
      if (isMatch) {
        const obj33 = /^win/i;
        isMatch = obj33.test(_modDef1351.os.family);
      }
      return isMatch;
    }
  }
  connect(arg0, arg1, videoSupported) {
    let obj2;
    const self = this;
    let obj = obj2(2001);
    if (!obj.supportsFeature(constants5.EXPERIMENT_CONFIG)) {
      videoSupported.experiments = undefined;
    }
    let flag = videoSupported.videoSupported;
    const create = self(4957).create;
    self(4957);
    if (flag == null) {
      flag = true;
    }
    if (flag) {
      flag = self.supports(constants3.VIDEO);
    }
    obj2 = create(arg0, arg1, videoSupported, flag);
    obj2.on(obj2(4962).BaseConnectionEvent.Destroy, (arg0) => {
      const connections = self.connections;
      connections.delete(arg0);
      if (self.connectionsEmpty()) {
        const obj = inject;
        obj.setProcessPriority(constants.NORMAL);
        obj2 = inject;
        const voiceEngine = obj2.getVoiceEngine();
        const setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
        if (setNativeThreadsPriority != null) {
          const result = setNativeThreadsPriority(0);
        }
      }
    });
    obj2.on(obj2(4962).BaseConnectionEvent.Connected, () => {
      obj2.setVideoBroadcast(self.shouldConnectionBroadcastVideo(obj2));
    });
    obj2.on(obj2(4962).BaseConnectionEvent.Silence, (arg0) => {
      self.emit(MediaEngineEvent.MediaEngineEvent.Silence, arg0);
    });
    let connections = self.connections;
    connections.add(obj2);
    let HIGH = videoSupported.processPriority;
    const setProcessPriority = obj2(2001).setProcessPriority;
    obj2(2001);
    if (HIGH == null) {
      HIGH = constants.HIGH;
    }
    setProcessPriority(HIGH);
    if (null != videoSupported.threadPriorityConfiguration) {
      const tmpResult2 = obj2(2001);
      let voiceEngine = tmpResult2.getVoiceEngine();
      let setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
      if (setNativeThreadsPriority != null) {
        let result = setNativeThreadsPriority(videoSupported.threadPriorityConfiguration);
      }
    }
    self.emit(tmp(4954).MediaEngineEvent.Connection, obj2);
    return obj2;
  }
  shouldConnectionBroadcastVideo(context) {
    let hasDesktopSourceResult = context.context === constants4.DEFAULT;
    if (hasDesktopSourceResult) {
      const self = this;
      hasDesktopSourceResult = this.videoInputDeviceId !== authStore2;
    }
    if (!hasDesktopSourceResult) {
      hasDesktopSourceResult = context.hasDesktopSource();
    }
    return hasDesktopSourceResult;
  }
  eachConnection(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const connections = this.connections;
    const item = connections.forEach((context) => {
      const tmp2 = null != closure_1 && context.context !== tmp;
      if (!tmp2) {
        closure_0(context);
      }
    });
  }
  enable() {
    return Promise.resolve();
  }
  setAudioMixerOptions(audioMixerOptions) {
    const obj = inject;
    if (obj.supportsFeature(constants5.SPATIAL_AUDIO)) {
      const tmpResult = inject;
      const voiceEngine = tmpResult.getVoiceEngine();
      const obj2 = { audioMixerOptions };
      voiceEngine.setTransportOptions(obj2);
    }
  }
  setAudioInputBypassSystemProcessing(bypassSystemProcessing) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const obj2 = { bypassSystemProcessing };
    voiceEngine.setTransportOptions(obj2);
  }
  setInputVolume(arg0) {
    let tmp = arg0;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setInputVolume = voiceEngine.setInputVolume;
    if (arg0 == null) {
      tmp = closure_12;
    }
    setInputVolume(tmp / closure_12);
  }
  setOutputVolume(arg0) {
    let tmp = arg0;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setOutputVolume = voiceEngine.setOutputVolume;
    if (arg0 == null) {
      tmp = closure_12;
    }
    setOutputVolume(tmp / closure_12);
  }
  getAudioInputDevices() {
    const obj = Devices;
    return obj.getAudioInputDevices();
  }
  getNoiseCancellationStats() {
    const promise = new Promise((fn) => {
      let closure_0 = fn;
      const obj = require("inject");
      const voiceEngine = obj.getVoiceEngine();
      if (null != voiceEngine.getNoiseCancellationStats) {
        const noiseCancellationStats = voiceEngine.getNoiseCancellationStats((arg0) => closure_0(JSON.parse(arg0)));
      } else {
        fn(null);
      }
    });
    return promise;
  }
  setNoiseCancellationEnableStats(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setNoiseCancellationEnableStats = voiceEngine.setNoiseCancellationEnableStats;
    if (setNoiseCancellationEnableStats != null) {
      const result = setNoiseCancellationEnableStats(arg0);
    }
  }
  setAudioInputDevice(audioInputDeviceId) {
    const self = this;
    _require = audioInputDeviceId;
    audioInputDeviceId = this.audioInputDeviceId;
    this.audioInputDeviceId = audioInputDeviceId;
    let obj = require("inject");
    if (obj.supportsFeature(constants5.SET_AUDIO_DEVICE_BY_ID)) {
      const tmpResult = require("inject");
      let voiceEngine = tmpResult.getVoiceEngine();
      voiceEngine.setInputDevice(audioInputDeviceId);
    } else {
      const tmpResult2 = require("Devices");
      const audioInputDevices = tmpResult2.getAudioInputDevices();
      audioInputDevices.then((arr) => {
        let found = arr.find((id) => id.id === audioInputDeviceId);
        if (found == null) {
          found = arr[0];
        }
        if (null != found) {
          const obj = inject;
          const voiceEngine = obj.getVoiceEngine();
          voiceEngine.setInputDevice(found.index);
        }
      });
    }
    self.emit(require("MediaEngineEvent").MediaEngineEvent.SelectedDeviceChange, constants2.AUDIO_INPUT, audioInputDeviceId, audioInputDeviceId);
  }
  getAudioOutputDevices() {
    const obj = Devices;
    return obj.getAudioOutputDevices();
  }
  setAudioOutputDevice(audioOutputDeviceId) {
    const self = this;
    _require = audioOutputDeviceId;
    audioOutputDeviceId = this.audioOutputDeviceId;
    this.audioOutputDeviceId = audioOutputDeviceId;
    let obj = require("inject");
    if (obj.supportsFeature(constants5.SET_AUDIO_DEVICE_BY_ID)) {
      const tmpResult = require("inject");
      let voiceEngine = tmpResult.getVoiceEngine();
      voiceEngine.setOutputDevice(audioOutputDeviceId);
    } else {
      const tmpResult2 = require("Devices");
      const audioOutputDevices = tmpResult2.getAudioOutputDevices();
      audioOutputDevices.then((arr) => {
        let found = arr.find((id) => id.id === audioOutputDeviceId);
        if (found == null) {
          found = arr[0];
        }
        if (null != found) {
          const obj = inject;
          const voiceEngine = obj.getVoiceEngine();
          voiceEngine.setOutputDevice(found.index);
        }
      });
    }
    self.emit(require("MediaEngineEvent").MediaEngineEvent.SelectedDeviceChange, constants2.AUDIO_OUTPUT, audioOutputDeviceId, audioOutputDeviceId);
  }
  getVideoInputDevices() {
    const obj = Devices;
    return obj.getVideoInputDevices();
  }
  setVideoInputDevice(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let id;
          let closure_2;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp4;
              tmp = undefined;
              id = undefined;
              closure_2 = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: self.getVideoInputDevices(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value.find((id) => id.id === closure_1_0);
            if (null != tmp) {
              id = tmp.id;
            } else {
              id = closure_1_14;
            }
            if (id !== closure_129_1.videoInputDeviceId) {
              closure_129_1.videoInputDeviceId = id;
              const obj8 = tmp(c2[8]);
              if (obj8.supportsFeature(constants.SET_VIDEO_DEVICE_BY_ID)) {
                let tmp22;
                if (null != tmp) {
                  if (null != tmp.originalId) {
                    let id2;
                    if ("" !== tmp.originalId) {
                      id2 = tmp.originalId;
                    }
                    tmp22 = id2;
                  }
                  id2 = tmp.id;
                } else {
                  tmp22 = closure_1_14;
                }
                closure_2 = tmp22;
                const obj2 = tmp(c2[8]);
                const voiceEngine = obj2.getVoiceEngine();
                voiceEngine.setVideoInputDevice(closure_2);
              } else {
                const obj = tmp(c2[8]);
                const voiceEngine1 = obj.getVoiceEngine();
                let num3 = -1;
                const setVideoInputDevice = voiceEngine1.setVideoInputDevice;
                if (null != tmp) {
                  num3 = tmp.index;
                }
                setVideoInputDevice(num3);
              }
              const connections = closure_129_1.connections;
              const item = connections.forEach((setVideoBroadcast) => setVideoBroadcast.setVideoBroadcast(closure_1_1.shouldConnectionBroadcastVideo(setVideoBroadcast)));
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp42) {
          c3 = 3;
          throw tmp42;
        }
      }
    })();
  }
  getVideoInputDeviceId() {
    return this.videoInputDeviceId;
  }
  setAsyncVideoInputDeviceInit(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setAsyncVideoInputDeviceInitSetting = voiceEngine.setAsyncVideoInputDeviceInitSetting;
    if (setAsyncVideoInputDeviceInitSetting != null) {
      const result = setAsyncVideoInputDeviceInitSetting(arg0);
    }
    const tmpResult = inject;
    const voiceEngine1 = tmpResult.getVoiceEngine();
    const setAsyncVideoInputDeviceInit = voiceEngine1.setAsyncVideoInputDeviceInit;
    if (setAsyncVideoInputDeviceInit != null) {
      const result1 = setAsyncVideoInputDeviceInit(arg0);
    }
  }
  getCodecCapabilities(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const codecCapabilities = voiceEngine.getCodecCapabilities(arg0);
  }
  setGoLiveSource(arg0, arg1) {
    const self = this;
    let closure_1 = arg0;
    let closure_0 = arg1;
    if (null != arg0) {
      self.eachConnection((streamUserId) => {
        const tmp = closure_0 === constants.STREAM && streamUserId.streamUserId !== streamUserId.userId;
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
  }
  setClipsSource(quality) {
    let allowScreenCaptureKit;
    let hdrCaptureMode;
    let id;
    let minCaptureHeight;
    let minCaptureWidth;
    let num10;
    let rounded;
    let soundshareId;
    let useGraphicsCapture;
    let useLoopback;
    let useQuartzCapturer;
    let useVideoHook;
    let videoHookAllowDx12;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine.setClipsSource) {
      if (null != voiceEngine.setOnClipsRecordingEvent) {
        if (null != voiceEngine.applyClipsSettings) {
          if (null != quality) {
            let result;
            let parts;
            quality = quality.quality;
            const resolution = quality.resolution;
            const frameRate = quality.frameRate;
            if (resolution <= 480) {
              result = resolution / 3 * 4;
            } else {
              result = resolution / 9 * 16;
            }
            const self = this;
            const desktopDescription = quality.desktopDescription;
            ({ id, soundshareId } = desktopDescription);
            const obj2 = { id, soundshareId, applicationName: quality.applicationName };
            this.clipsRecordingEventContext = obj2;
            ({ useLoopback, useVideoHook, useGraphicsCapture, useQuartzCapturer, allowScreenCaptureKit, hdrCaptureMode, videoHookAllowDx12, minCaptureWidth, minCaptureHeight } = desktopDescription);
            const result1 = this.registerClipsRecordingEventHandler();
            const applyClipsSettings = voiceEngine.applyClipsSettings;
            if (applyClipsSettings != null) {
              size = { useVideoHook, useGraphicsCapture, useQuartzCapturer, allowScreenCaptureKit, hdrCaptureMode, videoHookAllowDx12, soundshareLoopback: useLoopback, frameRate, width: result, height: resolution, bitrateKbps: rounded, videoEncoderExperiments: quality.videoEncoderExperiments, minCaptureWidth, minCaptureHeight };
              const bitratePercent = quality.bitratePercent;
              rounded = undefined;
              if (null != bitratePercent) {
                const _Math = Math;
                const _Math2 = Math;
                const _Math3 = Math;
                rounded = Math.round(6000 * Math.min(100, Math.max(10, bitratePercent)) / 100);
              }
              applyClipsSettings(size);
            }
            if (null != id) {
              parts = id.split(":");
            } else {
              parts = ["", ""];
            }
            const tmp8 = _slicedToArray(parts, 2);
            const first = tmp8[0];
            const obj3 = { id: tmp8[1], soundshareId: num10 };
            num10 = 0;
            const setClipsSource = voiceEngine.setClipsSource;
            if (null != soundshareId) {
              num10 = soundshareId;
            }
            setClipsSource(obj3);
          } else {
            voiceEngine.setClipsSource({ id: "", soundshareId: 0 });
          }
        }
      }
    }
  }
  setClipsQualitySettings(arg0, arg1, arg2, arg3) {
    const obj = inject;
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
      const tmp3 = null != rounded && null != voiceEngine.applyClipsSettings;
      if (tmp3) {
        const obj2 = { bitrateKbps: rounded };
        voiceEngine.applyClipsSettings(obj2);
      }
      return true;
    }
  }
  setSoundshareSource(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    this.eachConnection((streamUserId) => {
      const tmp = closure_2 === constants.STREAM && streamUserId.streamUserId !== streamUserId.userId;
      if (!tmp) {
        streamUserId.setSoundshareSource(closure_0, closure_1);
      }
    }, arg2);
  }
  getDesktopSource() {
    const error = new Error("NO_STREAM");
    return reject(error);
  }
  getScreenPreviews(arg0, arg1, arg2) {
    _require = arg0;
    let closure_1 = arg1;
    let obj = require("inject");
    let voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine.setPreviewsUseWgc) {
      voiceEngine.setPreviewsUseWgc(arg2);
    }
    const promise = new Promise((fn) => {
      closure_0 = fn;
      let obj = inject;
      if (null != obj.getVoiceEngine().getScreenPreviews) {
        const tmpResult = inject;
        const voiceEngine = tmpResult.getVoiceEngine();
        const screenPreviews = voiceEngine.getScreenPreviews(closure_0, closure_1, (arr) => {
          closure_0(arr.map((item, index) => {
            const obj = { name: `Screen ${index}${1}` };
            const merged = Object.assign(item);
            return obj;
          }));
        });
      } else {
        fn([]);
      }
    });
    return promise;
  }
  setClipsModulePath(arg0) {
    const result = this.registerClipsRecordingEventHandler();
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipsModulePath = voiceEngine.setClipsModulePath;
    if (setClipsModulePath != null) {
      setClipsModulePath(arg0);
    }
  }
  setClipsDataPath(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipsDataPath = voiceEngine.setClipsDataPath;
    if (setClipsDataPath != null) {
      setClipsDataPath(arg0);
    }
  }
  setClipsSentryConfig(arg0, arg1, arg2) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipsSentryConfig = voiceEngine.setClipsSentryConfig;
    if (setClipsSentryConfig != null) {
      setClipsSentryConfig(arg0, arg1, arg2);
    }
  }
  watchDeviceHardwareMutedChange(guid) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (voiceEngine.setDeviceHardwareMutedChangeCallback != null) {
      const self = this;
      const result = setDeviceHardwareMutedChangeCallback(guid, this.handleDeviceHardwareMutedChange);
    }
  }
  hasClipsV3Support() {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    return null != voiceEngine.setClipsModulePath && null != voiceEngine.setClipsRecordingEnabled && null != voiceEngine.exportClipToFile;
  }
  registerClipsRecordingEventHandler() {
    const self = this;
    const obj = self(2001);
    const voiceEngine = obj.getVoiceEngine();
    const tmp = null == voiceEngine.setOnClipsRecordingEvent || self.clipsRecordingEventHandlerRegistered;
    if (!tmp) {
      self.clipsRecordingEventHandlerRegistered = true;
      const result = voiceEngine.setOnClipsRecordingEvent((arg0, arg1) => {
        let id;
        let soundshareId;
        const clipsRecordingEventContext = self.clipsRecordingEventContext;
        ({ id, soundshareId } = clipsRecordingEventContext);
        const logger = self.logger;
        const applicationName = clipsRecordingEventContext.applicationName;
        logger.info("Clips recording event: " + unpackModuleId[arg0] + " received for stream " + id + " and sound " + soundshareId + ".");
        if (arg0 === unpackModuleId.GoLiveEnded) {
          self.emit(MediaEngineEvent.MediaEngineEvent.ClipsRecordingRestartNeeded);
        } else if (arg0 === unpackModuleId.Error) {
          const emit = self.emit;
          let str2 = "Failed to set clips source in media engine";
          const ClipsInitFailure = MediaEngineEvent.MediaEngineEvent.ClipsInitFailure;
          if (null != arg1) {
            str2 = "Failed to set clips source in media engine";
            if ("" !== arg1) {
              str2 = arg1;
            }
          }
          emit(ClipsInitFailure, str2, applicationName);
        } else if (arg0 === unpackModuleId.IdleShutdown) {
          self.emit(MediaEngineEvent.MediaEngineEvent.ClipsBridgeIdleShutdown);
        } else if (arg0 === unpackModuleId.RecordingHealthy) {
          self.emit(MediaEngineEvent.MediaEngineEvent.ClipsRecordingHealthy);
        } else if (arg0 === unpackModuleId.RecordingActive) {
          self.emit(MediaEngineEvent.MediaEngineEvent.ClipsRecordingReadyChanged, true);
        } else if (arg0 === unpackModuleId.RecordingInactive) {
          self.emit(MediaEngineEvent.MediaEngineEvent.ClipsRecordingReadyChanged, false);
        } else {
          const tmp3 = arg0 !== unpackModuleId.Ended && arg0 !== unpackModuleId.StoppedByGoLive;
          if (!tmp3) {
            self.emit(MediaEngineEvent.MediaEngineEvent.ClipsRecordingEnded, id, soundshareId);
          }
        }
      });
    }
  }
  setClipsUIActive(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipsUIActive = voiceEngine.setClipsUIActive;
    if (setClipsUIActive != null) {
      setClipsUIActive(arg0);
    }
  }
  setClipsV3MLEnabled(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipsV3MLEnabled = voiceEngine.setClipsV3MLEnabled;
    if (setClipsV3MLEnabled != null) {
      setClipsV3MLEnabled(arg0);
    }
  }
  setClipsAudioModelOverride(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipsAudioModelOverride = voiceEngine.setClipsAudioModelOverride;
    if (setClipsAudioModelOverride != null) {
      const result = setClipsAudioModelOverride(arg0);
    }
  }
  setClipsRecordingEnabled(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipsRecordingEnabled = voiceEngine.setClipsRecordingEnabled;
    if (setClipsRecordingEnabled != null) {
      const result = setClipsRecordingEnabled(arg0);
    }
  }
  setClipBufferLength(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setClipBufferLength = voiceEngine.setClipBufferLength;
    if (setClipBufferLength != null) {
      setClipBufferLength(arg0);
    }
  }
  getSystemSteadyClockNowMs() {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const getSystemSteadyClockNowMs = voiceEngine.getSystemSteadyClockNowMs;
    let systemSteadyClockNowMs;
    if (getSystemSteadyClockNowMs != null) {
      systemSteadyClockNowMs = getSystemSteadyClockNowMs();
    }
    if (systemSteadyClockNowMs == null) {
      systemSteadyClockNowMs = null;
    }
    return systemSteadyClockNowMs;
  }
  saveClipEx(arg0) {
    _require = arg0;
    let obj = require("inject");
    let saveClipEx = obj.getVoiceEngine();
    const promise = new Promise((arg0, fn) => {
      let endMs;
      let filepath;
      let metadata;
      let startMs;
      let thumbnailMs;
      let trimEndMs;
      let trimStartMs;
      let userId;
      closure_0 = arg0;
      saveClipEx = fn;
      function onSuccess(duration, arg1, thumbnail, metadata) {
        let parsed;
        try {
          let str = "{}";
          const _JSON = JSON;
          if ("" !== arg1) {
            str = arg1;
          }
          parsed = parse(str);
        } catch (err) {
          parsed = {};
        }
        const obj = { duration, clipStats: parsed };
        const tmp3 = undefined !== thumbnail && thumbnail.length > 0;
        if (tmp3) {
          obj.thumbnail = thumbnail;
        }
        const tmp4 = undefined !== metadata && metadata.length > 0;
        if (tmp4) {
          obj.metadata = metadata;
        }
        return closure_0(obj);
      }
      function onFailure(arg0) {
        try {
          let str = "{}";
          const _JSON = JSON;
          if ("" !== arg0) {
            str = arg0;
          }
          return closure_1(parse(str));
        } catch (err) {
          return closure_1({ errorMessage: "clip save failed", errorAt: "unknown" });
        }
      }
      let obj = saveClipEx;
      if (null == saveClipEx.saveClipEx) {
        let tmp5;
        let tmp3 = closure_0;
        ({ filepath, metadata, thumbnailMs, startMs, endMs, trimStartMs, trimEndMs, userId } = closure_0);
        let tmp4 = null != userId;
        if (tmp4) {
          tmp5 = null == obj.saveClipForUser && null == obj.saveClipForUserWithTime;
        } else {
          tmp5 = null == obj.setClipBufferLength;
          if (!tmp5) {
            tmp5 = null == obj.saveClip && null == obj.saveClipWithTime;
          }
        }
        if (tmp5) {
          let str = "unsupported";
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
              const saveClipForUserWithTime = obj.saveClipForUserWithTime;
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
              const result = saveClipForUserWithTime(userId, filepath, metadata, startMs, endMs, trimStartMs, trimEndMs, onLegacyTimeSuccess, onFailure, thumbnailMs);
            } else {
              const saveClipForUser = obj.saveClipForUser;
              const obj3 = inject;
              if (obj3.supportsFeature(constants.CLIPS_THUMBNAIL)) {
                if (saveClipForUser != null) {
                  saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
                }
              } else if (saveClipForUser != null) {
                saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure);
              }
            }
          } else if (null != obj.saveClipWithTime) {
            let tmp11 = startMs;
            const saveClipWithTime = obj.saveClipWithTime;
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
            saveClipWithTime(filepath, metadata, tmp11, tmp12, tmp13, tmp14, onLegacyTimeSuccess, onFailure, thumbnailMs);
          } else {
            const saveClip = obj.saveClip;
            const obj2 = inject;
            if (obj2.supportsFeature(constants.CLIPS_THUMBNAIL)) {
              if (saveClip != null) {
                saveClip(filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
              }
            } else if (saveClip != null) {
              saveClip(filepath, metadata, onLegacySuccess, onFailure);
            }
          }
        }
      } else {
        obj.saveClipEx(closure_0, onSuccess, onFailure);
      }
    });
    return promise;
  }
  updateClipMetadata(arg0, arg1) {
    let rejectResult;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (null == voiceEngine.updateClipMetadata) {
      rejectResult = Promise.reject("unsupported");
    } else {
      const self = this;
      const self2 = this;
      rejectResult = new Promise((arg0, arg1) => {
        voiceEngine.updateClipMetadata(closure_0, closure_1, arg0, arg1);
      });
    }
    return rejectResult;
  }
  saveScreenshot(arg0, arg1, arg2, arg3, arg4) {
    let rejectResult;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (null == voiceEngine.saveScreenshot) {
      let str = "unsupported";
      rejectResult = Promise.reject("unsupported");
    } else {
      let tmp2 = globalThis;
      const self = this;
      const self2 = this;
      rejectResult = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        let str = closure_3;
        const saveScreenshot = voiceEngine.saveScreenshot;
        const tmp2 = closure_0;
        if (closure_3 == null) {
          str = "";
        }
        let num = closure_4;
        if (closure_4 == null) {
          num = 0;
        }
        saveScreenshot(tmp2, closure_1, str, closure_2, num, (arg0) => {
          closure_0(Buffer.from(arg0));
        }, arg1);
      });
    }
    return rejectResult;
  }
  setClipsPerfMonitoring(arg0, arg1, arg2) {
    let rejectResult;
    const obj = inject;
    const setClipsPerfMonitoring = obj.getVoiceEngine().setClipsPerfMonitoring;
    if (null == setClipsPerfMonitoring) {
      rejectResult = Promise.reject("unsupported");
    } else {
      rejectResult = setClipsPerfMonitoring(arg0, arg1, arg2);
    }
    return rejectResult;
  }
  exportClipToFile(arg0, arg1, arg2) {
    let rejectResult;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let obj = inject;
    const exportClipToFile = obj.getVoiceEngine().exportClipToFile;
    if (null == exportClipToFile) {
      rejectResult = Promise.reject("unsupported");
    } else {
      const tmp = globalThis;
      const self = this;
      const self2 = this;
      rejectResult = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        exportClipToFile(closure_0, closure_1, closure_2, (filepath, arg1) => {
          if (typeof filepath === "string") {
            const obj = { filepath, formattedForUpload: true === arg1 };
            closure_0(obj);
          } else {
            closure_1("unsupported: native exportClipToFile returned non-string");
          }
        }, arg1);
      });
    }
    return rejectResult;
  }
  getWindowPreviews(arg0, arg1, arg2) {
    _require = arg0;
    let closure_1 = arg1;
    let obj = require("inject");
    let voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine.setPreviewsUseWgc) {
      voiceEngine.setPreviewsUseWgc(arg2);
    }
    const promise = new Promise((fn) => {
      closure_0 = fn;
      const obj = inject;
      if (null != obj.getVoiceEngine().getWindowPreviews) {
        const tmpResult = inject;
        const voiceEngine = tmpResult.getVoiceEngine();
        const windowPreviews = voiceEngine.getWindowPreviews(closure_0, closure_1, (arg0) => {
          closure_0(arg0);
        });
      } else {
        fn([]);
      }
    });
    return promise;
  }
  getSingleWindowPreview(arg0, arg1, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    return (async () => {
      let c1;
      let tmp;
      const obj9 = tmp(c2[8]);
      const voiceEngine = obj9.getVoiceEngine();
      if (null != voiceEngine.setPreviewsUseWgc) {
        voiceEngine.setPreviewsUseWgc(closure_3);
      }
      const tmp19Result = tmp(c2[8]);
      if (null == tmp19Result.getVoiceEngine().getSingleWindowPreview) {
        return null;
      }
      const tmp19Result2 = tmp(c2[8]);
      const voiceEngine1 = tmp19Result2.getVoiceEngine();
      await voiceEngine1.getSingleWindowPreview(tmp, closure_1, closure_2);
      tmp = value;
      let first = null;
      if (tmp.length > 0) {
        first = tmp[0];
      }
      return first;
    })();
  }
  setAudioSubsystem(arg0) {
    const obj = inject;
    if (null != obj.getVoiceEngine().setAudioSubsystem) {
      const tmpResult = inject;
      const voiceEngine = tmpResult.getVoiceEngine();
      voiceEngine.setAudioSubsystem(arg0);
    }
  }
  setOffloadAdmControls(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine.setOffloadAdmControls) {
      const result = voiceEngine.setOffloadAdmControls(arg0);
    }
  }
  updateFieldTrial(arg0, arg1) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const updateFieldTrial = voiceEngine.updateFieldTrial;
    if (updateFieldTrial != null) {
      updateFieldTrial(arg0, arg1);
    }
  }
  queueAudioSubsystem(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine.queueAudioSubsystem) {
      voiceEngine.queueAudioSubsystem(arg0);
    } else {
      const self = this;
      this.setAudioSubsystem(arg0);
    }
  }
  getAudioSubsystem() {
    return this.audioSubsystem;
  }
  getAudioLayer() {
    return this.audioLayer;
  }
  getDebugLogging() {
    let debugLogging = this.supports(constants3.DEBUG_LOGGING);
    if (debugLogging) {
      const obj = inject;
      const voiceEngine = obj.getVoiceEngine();
      debugLogging = voiceEngine.getDebugLogging();
    }
    return debugLogging;
  }
  setDebugLogging(arg0) {
    if (this.supports(constants3.DEBUG_LOGGING)) {
      const obj = inject;
      const voiceEngine = obj.getVoiceEngine();
      voiceEngine.setDebugLogging(arg0);
    }
  }
  setLoopback(arg0, arg1) {
    let automaticGainControlConfig;
    let automaticGainControlConfig2;
    let enabled;
    let enabled1;
    let tmp = arg0;
    const obj = inject;
    if (null != obj.getVoiceEngine().setLoopback) {
      const tmp2Result = inject;
      const voiceEngine = tmp2Result.getVoiceEngine();
      const obj2 = { echoCancellation: null, noiseSuppression: null, automaticGainControl: enabled, automaticGainControlConfig: null, noiseCancellation: null, noiseCancellationDuringProcessing: null };
      ({ echoCancellation: obj3.echoCancellation, noiseSuppression: obj3.noiseSuppression, automaticGainControlConfig } = arg1);
      enabled = undefined;
      const setLoopback = voiceEngine.setLoopback;
      if (automaticGainControlConfig != null) {
        enabled = automaticGainControlConfig.enabled;
      }
      ({ automaticGainControlConfig: obj3.automaticGainControlConfig, noiseCancellation: obj3.noiseCancellation, noiseCancellationDuringProcessing: obj3.noiseCancellationDuringProcessing } = arg1);
      setLoopback(tmp, obj2);
    }
    const self = this;
    const tmp2Result4 = inject;
    if (null != tmp2Result4.getVoiceEngine().setEmitVADLevel2) {
      const tmp2Result5 = inject;
      const voiceEngine1 = tmp2Result5.getVoiceEngine();
      const setEmitVADLevel2 = voiceEngine1.setEmitVADLevel2;
      if (!tmp) {
        tmp = self.listenerCount(MediaEngineEvent.MediaEngineEvent.VoiceActivity) > 0;
      }
      setEmitVADLevel2(tmp);
    } else {
      const tmp2Result6 = inject;
      const voiceEngine2 = tmp2Result6.getVoiceEngine();
      let tmp7 = tmp;
      const setEmitVADLevel = voiceEngine2.setEmitVADLevel;
      if (!tmp) {
        tmp7 = self.listenerCount(MediaEngineEvent.MediaEngineEvent.VoiceActivity) > 0;
      }
      const obj4 = { echoCancellation: null, noiseSuppression: null, automaticGainControl: enabled1, noiseCancellation: null, noiseCancellationDuringProcessing: null };
      ({ echoCancellation: obj5.echoCancellation, noiseSuppression: obj5.noiseSuppression, automaticGainControlConfig: automaticGainControlConfig2 } = arg1);
      enabled1 = undefined;
      if (automaticGainControlConfig2 != null) {
        enabled1 = automaticGainControlConfig2.enabled;
      }
      ({ noiseCancellation: obj5.noiseCancellation, noiseCancellationDuringProcessing: obj5.noiseCancellationDuringProcessing } = arg1);
      setEmitVADLevel(tmp7, tmp, obj4);
    }
  }
  getLoopback() {
    return false;
  }
  getCodecSurvey() {
    let resolved;
    let self = this;
    if (null != this.codecSurvey) {
      resolved = Promise.resolve(tmp.codecSurvey);
    } else {
      self = this;
      let self2 = this;
      resolved = new Promise(function(arg0, fn) {
        let closure_0 = arg0;
        const obj = self(dependencyMap[8]);
        const voiceEngine = obj.getVoiceEngine();
        if (null != voiceEngine.getCodecSurvey) {
          const codecSurvey = voiceEngine.getCodecSurvey((codecSurvey) => {
            self.codecSurvey = codecSurvey;
            closure_0(codecSurvey);
          });
        } else {
          const _Error = Error;
          self = this;
          const self2 = this;
          const error = new Error("getCodecSurvey is not implemented.");
          fn(error);
        }
      });
    }
    return resolved;
  }
  writeAudioDebugState() {
    const promise = new Promise(function(fn, fn2) {
      const obj = require("inject");
      const writeAudioDebugState = obj.getVoiceEngine().writeAudioDebugState;
      if (null != writeAudioDebugState) {
        writeAudioDebugState();
        fn();
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Audio debug state is not supported.");
        fn2(error);
      }
    });
    return promise;
  }
  startAecDump() {

  }
  stopAecDump() {

  }
  setAecDump(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setAecDump = voiceEngine.setAecDump;
    if (setAecDump != null) {
      setAecDump(arg0);
    }
  }
  startRecordingRawSamples(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const startRecordingRawSamples = voiceEngine.startRecordingRawSamples;
    if (startRecordingRawSamples != null) {
      const result = startRecordingRawSamples(arg0);
    }
  }
  stopRecordingRawSamples() {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const stopRecordingRawSamples = voiceEngine.stopRecordingRawSamples;
    if (stopRecordingRawSamples != null) {
      const result = stopRecordingRawSamples();
    }
  }
  processBatchAudioFiles(arg0, arg1, arg2, arg3) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const processBatchAudioFiles = voiceEngine.processBatchAudioFiles;
    if (processBatchAudioFiles != null) {
      const result = processBatchAudioFiles(arg0, arg1, arg2, arg3);
    }
  }
  cancelBatchAudioProcessing() {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const cancelBatchAudioProcessing = voiceEngine.cancelBatchAudioProcessing;
    if (cancelBatchAudioProcessing != null) {
      const result = cancelBatchAudioProcessing();
    }
  }
  rankRtcRegions(arg0) {
    let closure_0 = arg0;
    const promise = new Promise(function(arg0, fn) {
      closure_0 = arg0;
      const obj = inject;
      const rankRtcRegions = obj.getVoiceEngine().rankRtcRegions;
      if (null != rankRtcRegions) {
        rankRtcRegions(closure_0, (arg0) => closure_0(arg0));
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("RTC region latency test is not supported.");
        fn(error);
      }
    });
    return promise;
  }
  createReplayConnection(arg0, arg1) {
    const self = this;
    let obj = ConnectionDefault;
    const replay = obj.createReplay(arg0, arg1);
    let tmp2 = null;
    if (null != replay) {
      replay.on(self(4962).BaseConnectionEvent.Destroy, (arg0) => {
        const connections = self.connections;
        connections.delete(arg0);
        if (self.connectionsEmpty()) {
          const obj = inject;
          obj.setProcessPriority(constants.NORMAL);
        }
      });
      let connections = self.connections;
      connections.add(replay);
      const obj3 = self(2001);
      obj3.setProcessPriority(constants.HIGH);
      self.emit(self(4954).MediaEngineEvent.Connection, replay);
      tmp2 = replay;
    }
    return tmp2;
  }
  setOnVideoContainerResized(onContainerResized) {
    VideoDefault.onContainerResized = onContainerResized;
  }
  setMaxSyncDelayOverride(arg0) {
    const obj = inject;
    const setMaxSyncDelayOverride = obj.getVoiceEngine().setMaxSyncDelayOverride;
    if (null != setMaxSyncDelayOverride) {
      const result = setMaxSyncDelayOverride(arg0);
    }
  }
  applyMediaFilterSettings(arg0) {
    let applyMediaFilterSettings;
    let applyMediaFilterSettingsWithCallback;
    let resolved;
    let closure_0 = arg0;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    ({ applyMediaFilterSettings, applyMediaFilterSettingsWithCallback } = voiceEngine);
    if (null != applyMediaFilterSettingsWithCallback) {
      const self = this;
      const self2 = this;
      resolved = new Promise((arg0) => {
        applyMediaFilterSettingsWithCallback(closure_0, arg0);
      });
    } else {
      if (null != applyMediaFilterSettings) {
        const result = applyMediaFilterSettings(arg0);
      }
      resolved = Promise.resolve();
    }
    return resolved;
  }
  startLocalAudioRecording(arg0) {
    let closure_0 = arg0;
    const promise = new Promise(function(arg0, fn) {
      closure_0 = arg0;
      let closure_1 = fn;
      const obj = inject;
      const startLocalAudioRecording = obj.getVoiceEngine().startLocalAudioRecording;
      if (null != startLocalAudioRecording) {
        const result = startLocalAudioRecording(closure_0, function(arg0) {
          const tmp = arg0;
          if (tmp) {
            closure_0();
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Failed to start local audio recording.");
            closure_1(error);
          }
        });
      } else {
        let tmp = globalThis;
        let _Error = Error;
        let self = this;
        let self2 = this;
        let error = new Error("startLocalAudioRecording is not supported.");
        fn(error);
      }
    });
    return promise;
  }
  stopLocalAudioRecording(arg0) {
    let closure_0 = arg0;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const stopLocalAudioRecording = voiceEngine.stopLocalAudioRecording;
    if (stopLocalAudioRecording != null) {
      const result = stopLocalAudioRecording((arg0, arg1) => {
        closure_0(arg0, arg1);
      });
    }
    let tmp5 = this.listenerCount(MediaEngineEvent.MediaEngineEvent.VoiceActivity) > 0;
    if (tmp5) {
      const tmpResult = inject;
      tmp5 = null != tmpResult.getVoiceEngine().setEmitVADLevel2;
    }
    if (tmp5) {
      const tmpResult2 = inject;
      const voiceEngine1 = tmpResult2.getVoiceEngine();
      voiceEngine1.setEmitVADLevel2(true);
    }
  }
  setHasFullbandPerformance(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setHasFullbandPerformance = voiceEngine.setHasFullbandPerformance;
    if (setHasFullbandPerformance != null) {
      const result = setHasFullbandPerformance(arg0);
    }
  }
  setNcModels(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setNcModels = voiceEngine.setNcModels;
    if (setNcModels != null) {
      setNcModels(arg0);
    }
  }
  getSupportedSecureFramesProtocolVersion() {
    const obj = inject;
    let num = obj.getVoiceEngine().SupportedSecureFramesProtocolVersion;
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getSupportedBandwidthEstimationExperiments(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const getSupportedBandwidthEstimationExperiments = voiceEngine.getSupportedBandwidthEstimationExperiments;
    if (getSupportedBandwidthEstimationExperiments != null) {
      const supportedBandwidthEstimationExperiments = getSupportedBandwidthEstimationExperiments(arg0);
    }
  }
  getMLSSigningKey(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const promise = new Promise(function(arg0, fn) {
      closure_0 = arg0;
      let obj = inject;
      const voiceEngine = obj.getVoiceEngine();
      if (null != voiceEngine.getMLSSigningKey) {
        const mLSSigningKey = voiceEngine.getMLSSigningKey(closure_0, closure_1, (key, signature) => {
          const obj = { key, signature };
          return closure_0(obj);
        });
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("NOT_IMPLEMENTED");
        fn(error);
      }
    });
    return promise;
  }
  setSidechainCompression(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setSidechainCompression = voiceEngine.setSidechainCompression;
    if (setSidechainCompression != null) {
      const result = setSidechainCompression(arg0);
    }
  }
  setSidechainCompressionStrength(arg0) {
    const diff = 100 - arg0;
    const sum = React4 + (metroImportDefault - React4) * diff / 100;
    const sum1 = metroImportAll + (metroRequire - metroImportAll) * diff / 100;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const applySidechainCompressionSettings = voiceEngine.applySidechainCompressionSettings;
    if (applySidechainCompressionSettings != null) {
      const obj2 = { threshold: sum, ratio: sum1 };
      const result = applySidechainCompressionSettings(obj2);
    }
  }
  setVoiceSampleRateCap(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setVoiceSampleRateCap = voiceEngine.setVoiceSampleRateCap;
    if (setVoiceSampleRateCap != null) {
      const result = setVoiceSampleRateCap(arg0);
    }
  }
  setVoiceChannelCountCap(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setVoiceChannelCountCap = voiceEngine.setVoiceChannelCountCap;
    if (setVoiceChannelCountCap != null) {
      const result = setVoiceChannelCountCap(arg0);
    }
  }
  setNativeDesktopVideoSourcePickerActive(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const setNativeDesktopVideoSourcePickerActive = voiceEngine.setNativeDesktopVideoSourcePickerActive;
    if (setNativeDesktopVideoSourcePickerActive != null) {
      const result = setNativeDesktopVideoSourcePickerActive(arg0);
    }
  }
  presentNativeScreenSharePicker(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const presentNativeScreenSharePicker = voiceEngine.presentNativeScreenSharePicker;
    if (presentNativeScreenSharePicker != null) {
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      const result = presentNativeScreenSharePicker(str);
    }
  }
  releaseNativeDesktopVideoSourcePickerStream() {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const releaseNativeDesktopVideoSourcePickerStream = voiceEngine.releaseNativeDesktopVideoSourcePickerStream;
    if (releaseNativeDesktopVideoSourcePickerStream != null) {
      const result = releaseNativeDesktopVideoSourcePickerStream();
    }
  }
  getSystemMicrophoneMode() {
    return (async () => {
      let c1;
      let c2;
      let systemMicrophoneMode;
      let value;
      const obj3 = require("inject");
      const voiceEngine = obj3.getVoiceEngine();
      const getSystemMicrophoneMode = voiceEngine.getSystemMicrophoneMode;
      if (getSystemMicrophoneMode != null) {
        systemMicrophoneMode = getSystemMicrophoneMode();
      }
      await systemMicrophoneMode;
      if (value == null) {
        value = "";
      }
      return value;
    })();
  }
  showSystemCaptureConfigurationUI(arg0) {
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    const showSystemCaptureConfigurationUI = voiceEngine.showSystemCaptureConfigurationUI;
    if (showSystemCaptureConfigurationUI != null) {
      const result = showSystemCaptureConfigurationUI(arg0);
    }
  }
  fetchAsyncResources() {
    return Promise.resolve();
  }
  getDeviceOSVolume(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let deviceOSVolume;
      const obj3 = v3(dependencyMap[8]);
      const voiceEngine = obj3.getVoiceEngine();
      const getDeviceOSVolume = voiceEngine.getDeviceOSVolume;
      if (getDeviceOSVolume != null) {
        deviceOSVolume = getDeviceOSVolume(closure_0);
      }
      await deviceOSVolume;
      return value;
    })();
  }
  getDeviceOSMuted(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let deviceOSMuted;
      const obj3 = v3(dependencyMap[8]);
      const voiceEngine = obj3.getVoiceEngine();
      const getDeviceOSMuted = voiceEngine.getDeviceOSMuted;
      if (getDeviceOSMuted != null) {
        deviceOSMuted = getDeviceOSMuted(closure_0);
      }
      await deviceOSMuted;
      return value;
    })();
  }
  getDeviceAudioEffects(arg0) {
    let deviceAudioEffects;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine.getDeviceAudioEffects) {
      deviceAudioEffects = voiceEngine.getDeviceAudioEffects(arg0);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Device audio effect querying not supported");
      deviceAudioEffects = reject(error);
    }
    return deviceAudioEffects;
  }
  watchdogTick() {
    const self = this;
    _require = false;
    const obj = require("inject");
    const voiceEngine = obj.getVoiceEngine();
    voiceEngine.pingVoiceThread(() => {
      c0 = true;
      self.consecutiveWatchdogFailures = 0;
    });
    const timerId = setTimeout(() => {
      if (!c0) {
        const sum = self.consecutiveWatchdogFailures + 1;
        self.consecutiveWatchdogFailures = sum;
        if (sum > 1) {
          self.emit(MediaEngineEvent.MediaEngineEvent.WatchdogTimeout);
        }
      }
      self.watchdogTick();
    }, closure_18);
  }
  connectionsEmpty() {
    return 0 === this.connections.size;
  }
}
const prototype = MediaEngineNative.prototype;
let size = size_mod;
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/index.tsx");

export default MediaEngineNative;