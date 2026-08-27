// discord_app/stores/MediaEngineStore.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import applyDefault from "../../_runtime/00012_apply.js";
import set4 from "../utils/PlatformUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage6 from "../../discord_common/js/packages/storage/Storage.tsx";
import setDefault from "../utils/Durations.tsx";
import expandEventPropertiesDefault from "../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import setDefault2 from "../lib/DiscordNative.tsx";
import setDefault3 from "../utils/CrossPlatformNativeUtils.native.tsx";
import isClipsEnabled from "../modules/clips/isClipsEnabled.tsx";
import sanitizeFilenameDefault from "../utils/web/DesktopNativeUtils.tsx";
import mapped3 from "../modules/errors/av_errors/AVError.tsx";
import NativeEventEmitterDefault from "../modules/external_pip/ExternalPip.android.tsx";
import setPushToTalkState from "../modules/media_engine/MediaEngineActionCreators.tsx";
import apexExperimentDefault from "../modules/media_engine/MobileAudioOutputExperiment.tsx";
import setDefault4 from "../modules/noise_cancellation/getEffectiveNoiseCancellation.tsx";
import getKrispModelDefault from "../modules/noise_cancellation/KrispUtils.tsx";
import nativeMuteChangedDefault from "../modules/calls/NativeMuteManager.native.tsx";
import apexExperimentDefault2 from "../modules/voice_panel/SpatialAudioForVoiceExperiment.tsx";
import VIDEO_GUARD_BLOG_POST_URL from "../modules/media_engine/VideoGuardExperiment.tsx";
import HdrCaptureMode from "../modules/media_engine/GoLiveHdrExperiment.tsx";
import getAGC2ExperimentConfig from "../modules/media_engine/AGC2Experiment.tsx";
import apexExperimentDefault3 from "../modules/voice_calls/PTTEducationExperiment.tsx";
import isHookModuleTooOldAll from "../lib/hook/Hook.native.tsx";
import getAudioFidelityExperimentConfig from "../modules/media_engine/AudioFidelityExperiment.tsx";
import _modDef13416 from "../../_runtime/metro/13416__.js";
import apexExperimentDefault4 from "../modules/media_engine/AudioEffectsExperiment.tsx";
import apexExperimentDefault5 from "../modules/media_engine/SilenceWarningExperiment.tsx";
import apexExperiment from "../modules/media_engine/DisableCameraSimulcastExperiment.tsx";
import closure_4 from "../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../_runtime/00005_asyncGeneratorStep.js";
import injectMediaEngine.native from "../lib/injectMediaEngine.native.tsx";
import closure_6 from "../modules/clips/ClipsStore.tsx";
import closure_7 from "../modules/experiments/ExperimentStore.tsx";
import closure_8 from "../modules/game_detection/RunningGameStore.native.tsx";
import { getSystemAnalyticsInfo } from "../modules/system_analytics/SystemAnalyticsStore.native.tsx";
import closure_10 from "../modules/user_settings/UserSettingsProtoStore.tsx";
import closure_11 from "AuthenticationStore.tsx";
import closure_12 from "BitRateStore.tsx";
import closure_13 from "CertifiedDeviceStore.tsx";
import closure_14 from "ChannelStore.tsx";
import closure_15 from "RTCConnectionStore.tsx";
import closure_16 from "UserStore.tsx";
import closure_17 from "VideoQualityModeStore.tsx";
import ME from "../Constants.tsx";
import StreamIssueReportReasons from "../modules/go_live/Constants.tsx";
import NativePermissionStatus from "../modules/native_permissions/NativePermissionConstants.tsx";
import { DEFAULT_AUDIO_MIXER_SETTINGS as closure_34 } from "../modules/spatial_audio/SpatialAudioConstants.tsx";
import MAX_FAVORITES from "../modules/user_settings/UserSettingsConstants.tsx";
import { InputProfile } from "../modules/user_settings/voice/UserSettingsVoiceAndVideoConstants.tsx";
import DesktopSources from "../../discord_common/js/packages/media-engine/Constants.tsx";
import BaseConnectionEvent from "../../discord_common/js/packages/media-engine/index.tsx";
import importDefaultResult from "../modules/native_permissions/NativePermissionUtils.tsx";
import set from "../../_runtime/00002_set.js";

require = arg1;
function _detectH265HardwareDecode() {
  const self = this;
  const tmp = callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp6;
            closure_0 = undefined;
            const _window = window;
            if (typeof window !== "undefined") {
              const _navigator3 = navigator;
              if (typeof navigator !== "undefined") {
                const _navigator4 = navigator;
                if ("mediaCapabilities" in navigator) {
                  const _navigator = navigator;
                  if (null != navigator.mediaCapabilities) {
                    c2 = 1;
                    const _navigator2 = navigator;
                    obj1 = { type: "file", video: null };
                    obj1[1] = { contentType: "video/mp4; codecs=\"hev1.1.6.L153.B0\"", width: 1920, height: 1080, bitrate: 2000000, framerate: 30 };
                    c1 = 2;
                    c3 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = mediaCapabilities.decodingInfo(obj1);
                    return obj2;
                  }
                }
              }
            }
            c3 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp6) {
          c2 = 0;
          c3 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 0;
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          let powerEfficient = closure_0.supported;
          if (powerEfficient) {
            powerEfficient = closure_0.powerEfficient;
          }
          c2 = 0;
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = powerEfficient;
          return obj;
        }
      } catch (tmp11) {
        if (tmp3 === c2) {
          c3 = tmp2;
          throw tmp11;
        } else {
          c1 = tmp;
        }
      }
    }
  });
  closure_141 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function startH265HardwareDetection() {
  if (null != nextPromise) {
    let resolved = nextPromise;
  } else {
    const _window = window;
    if (typeof window !== "undefined") {
      nextPromise = (function detectH265HardwareDecode() {
        const self = this;
        const apply = closure_141.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })().then((arg0) => {
        closure_122 = arg0;
        return arg0;
      });
      resolved = nextPromise;
      const promise = (function detectH265HardwareDecode() {
        const self = this;
        const apply = closure_141.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    } else {
      resolved = Promise.resolve(false);
    }
  }
  return resolved;
}
function getSettings() {
  let DEFAULT = arg0;
  if (arg0 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp3 = dependencyMap[DEFAULT];
  if (null == tmp3) {
    obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
    obj[0] = InputModes.VOICE_ACTIVITY;
    obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
    obj[1] = set4.isPlatformEmbedded || false;
    obj[7] = [];
    obj[1] = obj;
    obj[17] = {};
    obj[18] = {};
    obj[19] = {};
    obj[20] = {};
    obj = {};
    const merged = Object.assign(closure_34);
    obj[21] = obj;
    obj[23] = {};
    obj[24] = closure_40;
    obj[25] = closure_40;
    obj[26] = DEFAULT_DEVICE_ID;
    obj[27] = DEFAULT_DEVICE_ID;
    obj[28] = DEFAULT_DEVICE_ID;
    obj[31] = store3.supports(Features.VIDEO_HOOK);
    dependencyMap[DEFAULT] = obj;
    tmp3 = obj;
    const tmp4 = set4.isPlatformEmbedded || false;
  }
  let CUSTOM = tmp3.activeInputProfile;
  if (CUSTOM == null) {
    CUSTOM = InputProfile.CUSTOM;
  }
  const tmp16 = c110 ? closure_71 : closure_140;
  let modeOptions = tmp3.modeOptions;
  if (modeOptions == null) {
    modeOptions = {};
  }
  obj1 = {};
  const merged1 = Object.assign(modeOptions);
  let modeOptions1 = tmp15.modeOptions;
  if (modeOptions1 == null) {
    modeOptions1 = {};
  }
  const merged2 = Object.assign(modeOptions1);
  let modeOptions2 = tmp16.modeOptions;
  if (modeOptions2 == null) {
    modeOptions2 = {};
  }
  const merged3 = Object.assign(modeOptions2);
  if (null != obj1.vadKrispActivationThreshold) {
    const obj2 = {};
    const merged4 = Object.assign(tmp3);
    const merged5 = Object.assign(tmp15);
    const merged6 = Object.assign(tmp16);
    obj2.modeOptions = obj1;
    return obj2;
  }
  const aGC2ExperimentConfig = getAGC2ExperimentConfig.getAGC2ExperimentConfig({ location: "getSettings" });
  if (null != aGC2ExperimentConfig.vadKrispActivationThreshold) {
    obj1.vadKrispActivationThreshold = aGC2ExperimentConfig.vadKrispActivationThreshold;
  }
}
function setInputMode(context) {
  const tmp = getSettings(context.context);
  const mode = tmp.mode;
  if (context.context === MediaEngineContextTypes.DEFAULT) {
    obj = setPushToTalkState;
    obj.setPushToTalkState(false, false);
  }
  let showPTTSpeakingIndicator = apexExperimentDefault3.getConfig({ location: "setInputMode" }).showPTTSpeakingIndicator;
  if (showPTTSpeakingIndicator) {
    showPTTSpeakingIndicator = mode === InputModes.PUSH_TO_TALK;
  }
  obj = { vadThreshold: tmp.modeOptions.threshold, vadAutoThreshold: null, vadUseKrisp: null, vadKrispActivationThreshold: null, vadLeading: null, vadTrailing: null, pttReleaseDelay: null };
  let autoThreshold = showPTTSpeakingIndicator;
  if (!autoThreshold) {
    autoThreshold = tmp.modeOptions.autoThreshold;
  }
  obj[1] = autoThreshold;
  let tmp6 = showPTTSpeakingIndicator || tmp.modeOptions.vadUseKrisp;
  if (tmp6) {
    tmp6 = !c110;
  }
  obj[2] = tmp6;
  let num = tmp.modeOptions.vadKrispActivationThreshold;
  if (num == null) {
    num = 0.5;
  }
  obj[3] = num;
  obj[4] = tmp.modeOptions.vadLeading;
  obj[5] = tmp.modeOptions.vadTrailing;
  obj[6] = Math.round(tmp.modeOptions.delay);
  context.setInputMode(mode, obj);
}
function updateConnectionMuteDeaf(context) {
  const tmp = getSettings(context.context);
  let deaf = !closure_79;
  if (closure_79) {
    deaf = tmp.mute;
  }
  if (!deaf) {
    deaf = tmp.deaf;
  }
  context = context.context;
  if (MediaEngineContextTypes.DEFAULT === context) {
    let tmp3 = deaf;
    if (!deaf) {
      tmp3 = c90;
    }
    if (!tmp3) {
      tmp3 = c91;
    }
    if (!tmp3) {
      tmp3 = c92;
    }
    if (!tmp3) {
      tmp3 = !importDefaultResult.didHavePermission(NativePermissionTypes.AUDIO);
      obj = importDefaultResult;
    }
    let flag = tmp3;
  } else {
    flag = true;
    if (tmp2.STREAM !== context) {
      const context2 = context.context;
      flag = deaf;
    }
  }
  context.setSelfMute(flag);
  context.setSelfDeaf(tmp.deaf);
  if (context.context === MediaEngineContextTypes.DEFAULT) {
    nativeMuteChangedDefault.updateNativeMute();
    const obj2 = nativeMuteChangedDefault;
  }
}
function updateVideo(c94, arg1) {
  let tmp = c94;
  if (c94 === undefined) {
    tmp = closure_94;
  }
  let tmp2 = arg1;
  if (arg1 === undefined) {
    tmp2 = closure_74;
  }
  let desktopSource;
  if (closure_74 != null) {
    desktopSource = tmp3.desktopSource;
  }
  let tmp5 = null != desktopSource;
  if (tmp5) {
    let id;
    if (tmp2 != null) {
      desktopSource = tmp2.desktopSource;
      if (desktopSource != null) {
        id = desktopSource.id;
      }
    }
    tmp5 = tmp3.desktopSource.id !== id;
  }
  if (!tmp5) {
    let cameraSource;
    if (tmp3 != null) {
      cameraSource = tmp3.cameraSource;
    }
    let tmp18 = null == cameraSource;
    if (!tmp18) {
      let videoDeviceGuid;
      if (tmp2 != null) {
        cameraSource = tmp2.cameraSource;
        if (cameraSource != null) {
          videoDeviceGuid = cameraSource.videoDeviceGuid;
        }
      }
      let tmp20 = tmp3.cameraSource.videoDeviceGuid === videoDeviceGuid;
      if (tmp20) {
        let audioDeviceGuid;
        if (tmp2 != null) {
          const cameraSource2 = tmp2.cameraSource;
          if (cameraSource2 != null) {
            audioDeviceGuid = cameraSource2.audioDeviceGuid;
          }
        }
        tmp20 = tmp3.cameraSource.audioDeviceGuid === audioDeviceGuid;
      }
      tmp18 = tmp20;
    }
    if (!tmp18) {
      store3.setGoLiveSource(null, STREAM);
    }
    if (!closure_94) {
      if (!tmp) {
        closure_74 = tmp2;
        if (null != tmp2) {
          obj = { resolution: null, frameRate: null };
          obj[0] = tmp2.quality.resolution;
          obj[1] = tmp2.quality.frameRate;
          if (null != tmp2.desktopSource) {
            const videoHook2 = getSettings().videoHook;
            const obj20 = HdrCaptureMode;
            let isWindowsResult = set4.isWindows();
            if (isWindowsResult) {
              const tmp41 = setDefault2;
              let release;
              if (tmp41 != null) {
                release = tmp41.os.release;
              }
              isWindowsResult = _modDef13416.satisfies(release, closure_29);
              const obj6 = _modDef13416;
            }
            if (!isWindowsResult) {
              let tmp70Result = tmp70(500);
              let isWindowsResult1 = tmp70Result.isWindows();
              if (isWindowsResult1) {
                isWindowsResult1 = 0 >= closure_26;
              }
              if (!isWindowsResult1) {
                let tmp55 = !videoHook2;
                if (videoHook2) {
                  const DisableHookFramePacerExperiment = tmp70(13408).DisableHookFramePacerExperiment;
                  tmp55 = !DisableHookFramePacerExperiment.getConfig({ location: "updateVideo" }).enabled;
                }
                let enabled2 = videoHook2;
                if (videoHook2) {
                  const VideoHookDX12Experiment = tmp70(13409).VideoHookDX12Experiment;
                  enabled2 = VideoHookDX12Experiment.getConfig({ location: "updateVideo" }).enabled;
                }
                const UpscaleSmallCapturedFramesExperiment = tmp70(13410).UpscaleSmallCapturedFramesExperiment;
                const config = UpscaleSmallCapturedFramesExperiment.getConfig({ location: "updateVideo" });
                obj = { id: null, soundshareId: null, useVideoHook: null, useHookFramePacer: null, useGraphicsCapture: null, useGraphicsCaptureApiLevel: null, useCaptureDeviceForEncode: null, useLoopback: null, useQuartzCapturer: true, allowScreenCaptureKit: null, videoHookStaleFrameTimeoutMs: 500, graphicsCaptureStaleFrameTimeoutMs: null, hdrCaptureMode: null, enableGlobalFramePoolLock: null, useGraphicsCaptureDirtyRegions: null, videoHookAllowDx12: null, minCaptureWidth: null, minCaptureHeight: null };
                obj[0] = tmp2.desktopSource.id;
                obj[1] = tmp2.desktopSource.soundshareId;
                obj[2] = videoHook2;
                obj[3] = tmp55;
                obj[4] = isWindowsResult;
                obj[5] = 0;
                ({ minCaptureWidth, minCaptureHeight } = config);
                tmp70Result = tmp70(500);
                obj[6] = tmp70Result.isWindows();
                obj[7] = mediaEngineStore.getExperimentalSoundshare();
                let isMacResult = tmp70(500).isMac();
                if (isMacResult) {
                  isMacResult = obj10.supports(Features.SCREEN_CAPTURE_KIT);
                }
                if (isMacResult) {
                  const tmp61 = setDefault2;
                  let release1;
                  if (tmp61 != null) {
                    release1 = tmp61.os.release;
                  }
                  isMacResult = _modDef13416.satisfies(release1, closure_24);
                  const obj14 = _modDef13416;
                }
                obj1 = { desktopDescription: null, quality: null };
                obj[9] = isMacResult;
                obj[11] = closure_60;
                obj[12] = obj20.getGoLiveHdrConfig({ location: "MediaEngineStore go live" }).hdrCaptureMode;
                obj10 = store3;
                const tmp70Result1 = tmp70(500);
                obj[13] = tmp70(13411).getGlobalFramePoolLockExperimentConfig({ location: "updateVideo" }).enabled;
                obj[14] = false;
                obj[15] = enabled2;
                obj[16] = minCaptureWidth;
                obj[17] = minCaptureHeight;
                obj1[0] = obj;
                obj1[1] = obj;
                store3.setGoLiveSource(obj1, STREAM);
                const tmp70Result2 = tmp70(13411);
              } else if (true === c131) {
                const WGCDirtyRegionsExperiment = tmp70(13406).WGCDirtyRegionsExperiment;
                let enabled = WGCDirtyRegionsExperiment.getConfig({ location: "updateVideo" }).enabled;
              } else {
                const WGCDirtyRegionsAllExperiment = tmp70(13407).WGCDirtyRegionsAllExperiment;
                enabled = WGCDirtyRegionsAllExperiment.getConfig({ location: "updateVideo" }).enabled;
              }
            } else {
              let isWindowsResult2 = tmp70(500).isWindows();
              if (isWindowsResult2) {
                const tmp47 = setDefault2;
                let release2;
                if (tmp47 != null) {
                  release2 = tmp47.os.release;
                }
                isWindowsResult2 = _modDef13416.satisfies(release2, closure_27);
                const obj8 = _modDef13416;
              }
              const tmp70Result3 = tmp70(500);
            }
            const obj21 = set4;
          }
          if (null != tmp2.cameraSource) {
            let obj2 = { videoDeviceGuid: null, audioDeviceGuid: null };
            obj2[0] = tmp2.cameraSource.videoDeviceGuid;
            let str = "";
            if (false !== tmp2.cameraSource.sound) {
              str = tmp2.cameraSource.audioDeviceGuid;
            }
            let obj3 = { cameraDescription: null, quality: null };
            obj2[1] = str;
            obj3[0] = obj2;
            obj3[1] = obj;
            store3.setGoLiveSource(obj3, STREAM);
          }
        }
      }
    }
    const videoDeviceId = getSettings().videoDeviceId;
    if (closure_94) {
      if (videoDeviceId === DEFAULT_DEVICE_ID) {
        if (videoDeviceId === tmp28) {
          let setVideoInputDevice = closure_95;
        }
        closure_94 = tmp;
        if (tmp) {
          let firstResult = dependencyMap4[setVideoInputDevice];
          if (firstResult == null) {
            firstResult = tmp32[DEFAULT_DEVICE_ID];
          }
          if (firstResult == null) {
            obj3 = applyDefault(tmp32);
            const values = obj3.values();
            firstResult = values.first();
          }
          if (null != firstResult) {
            setVideoInputDevice = firstResult.id;
          }
          let tmp31 = setVideoInputDevice;
        } else {
          tmp31 = DISABLED_DEVICE_ID;
        }
        closure_95 = tmp31;
        setVideoInputDevice = store3.setVideoInputDevice;
        setVideoInputDevice(closure_95);
      }
    }
    setVideoInputDevice = videoDeviceId;
  } else {
    if (null == tmp3.desktopSource.soundshareId) {
      let videoHook = null != tmp3.desktopSource.sourcePid;
      if (videoHook) {
        videoHook = getSettings().videoHook;
      }
      if (videoHook) {
        obj1 = isHookModuleTooOldAll;
        result = obj1.cancelAttachToProcess(tmp3.desktopSource.sourcePid);
      }
      store3.setGoLiveSource(null, STREAM);
    } else {
      obj = set4;
    }
    obj2 = isHookModuleTooOldAll;
    const result1 = obj2.cancelAttachToProcess(tmp3.desktopSource.soundshareId);
  }
}
function noiseCancellerErrorToAVUnderlyingError(noise_canceller_error) {
  if (NoiseCancellerError.KRISP_CPU_OVERUSE === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispCpuOveruse;
  } else if (tmp.KRISP_FAILED === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispFailed;
  } else if (tmp.KRISP_VAD_CPU_OVERUSE === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispVadCpuOveruse;
  } else if (tmp.KRISP_INIT_ERROR === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitError;
  } else if (tmp.KRISP_INIT_ERROR_NATIVE === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorNative;
  } else if (tmp.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorSse4NotSupported;
  } else if (tmp.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorAvx2NotSupported;
  } else if (tmp.KRISP_INIT_ERROR_UNSIGNED === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorUnsigned;
  } else if (tmp.KRISP_INIT_ERROR_GLOBAL_INIT === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorGlobalInit;
  } else if (tmp.KRISP_INIT_ERROR_WEIGHT_8K === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorWeight8k;
  } else if (tmp.KRISP_INIT_ERROR_WEIGHT_16K === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorWeight16k;
  } else if (tmp.KRISP_INIT_ERROR_WEIGHT_32K === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorWeight32k;
  } else if (tmp.KRISP_INIT_ERROR_WEIGHT_VAD === noise_canceller_error) {
    return mapped3.AVUnderlyingError.KrispInitErrorWeightVad;
  }
}
function handleVoiceProcessingError(noise_canceller_error) {
  obj.warn("Voice processing error: " + noise_canceller_error);
  obj = mapped3;
  obj = { type: mapped3.AVError.NOISE_CANCELLER_ERROR, underlyingError: noiseCancellerErrorToAVUnderlyingError(noise_canceller_error) };
  obj.reportAVError(obj);
  let obj2 = expandEventPropertiesDefault;
  obj = { noise_canceller_error };
  obj2.track(constants.VOICE_PROCESSING, obj);
  if (set3.has(noise_canceller_error)) {
    c110 = true;
  } else if (noise_canceller_error === NoiseCancellerError.KRISP_VAD_CPU_OVERUSE) {
    let tmp4Result = tmp4(709);
    obj1 = { type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: null };
    obj1[1] = noise_canceller_error;
    tmp4Result.dispatch(obj1);
  } else {
    c117 = true;
    tmp4Result = tmp4(709);
    obj2 = { type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: null };
    obj2[1] = noise_canceller_error;
    tmp4Result.dispatch(obj2);
  }
}
function handleVideoFilterError(arg0, arg1) {
  let str = "preview";
  let str2 = "preview";
  if (arg1 === constants10.LIVE) {
    str2 = "live";
  }
  obj.warn("Video filter error: " + arg0 + " (" + str2 + ")");
  if (arg1 !== constants10.LIVE) {
    obj = { type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: null, target: null };
    obj[1] = arg0;
    if (tmp) {
      str = "live";
    }
    obj[2] = str;
    dispatcherDefault.dispatch(obj);
  } else {
    let AVUnderlyingError = dependencyMap;
    obj = mapped3;
    obj = { type: null, underlyingError: null };
    obj[0] = mapped3.AVError.VIDEO_BACKGROUND_UNAVAILABLE;
    if (constants9.UNSUPPORTED === arg0) {
      AVUnderlyingError = tmp4(9486).AVUnderlyingError;
      let VideoBackgroundInitFailed = AVUnderlyingError.VideoBackgroundUnsupported;
    } else if (tmp5.INIT_FAILED === arg0) {
      VideoBackgroundInitFailed = tmp4(9486).AVUnderlyingError.VideoBackgroundInitFailed;
    }
    obj[1] = VideoBackgroundInitFailed;
    obj = obj.reportAVError(obj);
  }
}
function updateConnectionVoiceProcessing(setEchoCancellation) {
  const tmp2 = getSettings();
  const inputDeviceId = tmp2.inputDeviceId;
  obj = closure_13;
  setEchoCancellation.setEchoCancellation(closure_13.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation);
  const tmp = getSettings;
  const tmp3 = closure_13.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation;
  setEchoCancellation.setNoiseSuppression(obj.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression);
  const tmp7 = obj.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl;
  obj = { enabled: tmp7 };
  const tmp5 = obj.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression;
  obj = { location: "getAutomaticGainControlConfig", disable: !tmp7 };
  const merged = Object.assign(getAGC2ExperimentConfig.getAGC2ExperimentConfig(obj).noiseCancellationConfig);
  result = setEchoCancellation.setAutomaticGainControl(obj);
  const noiseCancellation = tmp2.noiseCancellation;
  const obj3 = getAGC2ExperimentConfig;
  const tmp13Result = setDefault4(noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  if (tmp13Result !== noiseCancellation) {
    obj.info("Falling back to system noise suppression.");
  }
  setEchoCancellation.setNoiseCancellation(tmp13Result);
  let tmp8Result = tmp8(13403);
  const result1 = setEchoCancellation.setNoiseCancellationDuringProcessing(tmp8Result.getAGC2ExperimentConfig({ location: "setNoiseCancellation", disable: !tmp13Result }).noiseCancellationDuringProcessing);
  let tmp12Result = tmp12(13396);
  let supportsResult = true === tmp2.audioMixerSettings.enabled && tmp12Result.getConfig({ location: "MediaEngineStore" }).enabled;
  if (supportsResult) {
    supportsResult = store3.supports(Features.SPATIAL_AUDIO);
  }
  const result2 = setEchoCancellation.setSpatialAudioEnabled(supportsResult);
  const tmpResult = tmp();
  const inputDeviceId2 = tmpResult.inputDeviceId;
  obj1 = { location: "setNoiseCancellation", disable: !tmp13Result };
  const tmp13 = setDefault4;
  const tmp24 = obj.hasEchoCancellation(inputDeviceId2) || tmpResult.echoCancellation;
  tmp12Result = tmp12(9998);
  const tmp25 = obj.hasNoiseSuppression(inputDeviceId2) || tmpResult.noiseSuppression;
  tmp8Result = tmp8(13412);
  const voiceFidelityCaps = tmp8Result.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp12Result(tmpResult.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode()), noiseSuppressionEnabled: tmp25, echoCancellationEnabled: tmp24 });
  const result3 = store3.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
  const result4 = store3.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
  const tmp12Result1Result = tmp12Result(tmpResult.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  let isWindowsResult = set4.isWindows();
  if (isWindowsResult) {
    const tmp12Result2 = tmp12(4072);
    let release;
    if (tmp12Result2 != null) {
      release = tmp12Result2.os.release;
    }
    isWindowsResult = tmp12(13416).satisfies(release, c152);
    const tmp12Result1 = tmp12(13416);
  }
  if (isWindowsResult) {
    if (setEchoCancellation.context === MediaEngineContextTypes.DEFAULT) {
      const systemwideEchoCancellationExperimentConfig = tmp8(13413).getSystemwideEchoCancellationExperimentConfig({ location: "updateConnectionVoiceProcessing" });
      const tmp50 = dependencyMap2[obj5.getInputDeviceId(obj5)];
      let windowsDeviceService;
      if (tmp50 != null) {
        windowsDeviceService = tmp50.windowsDeviceService;
      }
      let tmp38 = "voicemodvad" === windowsDeviceService;
      if (!tmp38) {
        let hasItem;
        if (tmp50 != null) {
          if (tmp50.name != null) {
            const formatted = str3.toLowerCase();
            hasItem = formatted.includes("voicemod");
          }
        }
        tmp38 = true === hasItem;
      }
      if (!tmp38) {
        const tmp41 = dependencyMap3[obj5.getOutputDeviceId(obj5)];
        let windowsDeviceService1;
        if (tmp41 != null) {
          windowsDeviceService1 = tmp41.windowsDeviceService;
        }
        let tmp43 = "voicemodvad" === windowsDeviceService1;
        if (!tmp43) {
          let hasItem1;
          if (tmp41 != null) {
            if (tmp41.name != null) {
              const formatted1 = str5.toLowerCase();
              hasItem1 = formatted1.includes("voicemod");
            }
          }
          tmp43 = true === hasItem1;
        }
        tmp38 = tmp43;
      }
      let str7 = "mix";
      if (!tmp38) {
        str7 = systemwideEchoCancellationExperimentConfig.echoReferenceMode;
      }
      setEchoCancellation.setEchoReferenceMode(str7);
      const tmp8Result2 = tmp8(13413);
    }
  }
  const tmp8Result1 = set4;
  if (tmp8Result3.isDesktop()) {
    const result5 = setEchoCancellation.setNoiseCancellationCpuDisablement(tmp8(13414).getKrispCpuDisablementConfig({ location: "updateConnectionVoiceProcessing" }).consecutiveFailures);
    const tmp8Result4 = tmp8(13414);
  }
  tmp8Result3 = set4;
  if (tmp8Result5.isWeb()) {
    let num = -100;
    if (tmp2.noiseCancellation) {
      num = -150;
    }
    setEchoCancellation.setSilenceThreshold(num);
  }
}
function mergeSettings(arg0, DEFAULT, arg2) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp3 = dependencyMap[DEFAULT];
  if (null == tmp3) {
    obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
    obj[0] = InputModes.VOICE_ACTIVITY;
    obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
    obj[1] = set4.isPlatformEmbedded || false;
    obj[7] = [];
    obj[1] = obj;
    obj[17] = {};
    obj[18] = {};
    obj[19] = {};
    obj[20] = {};
    obj = {};
    const merged = Object.assign(closure_34);
    obj[21] = obj;
    obj[23] = {};
    obj[24] = closure_40;
    obj[25] = closure_40;
    obj[26] = DEFAULT_DEVICE_ID;
    obj[27] = DEFAULT_DEVICE_ID;
    obj[28] = DEFAULT_DEVICE_ID;
    obj[31] = store3.supports(Features.VIDEO_HOOK);
    dependencyMap[DEFAULT] = obj;
    tmp3 = obj;
    const tmp4 = set4.isPlatformEmbedded || false;
  }
  const merged1 = Object.assign(tmp3, arg0);
  if (flag) {
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
  }
  return tmp3;
}
function applySettings() {
  const tmp = getSettings();
  const inputDeviceId = tmp.inputDeviceId;
  obj = store3;
  store3.setAudioInputDevice(inputDeviceId);
  if (obj2.isWindows()) {
    if (obj3.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
      let guid;
      if (dependencyMap2[inputDeviceId] != null) {
        guid = tmp7.guid;
      }
      if (null != guid) {
        tmp5(13472)(tmp7.guid, inputDeviceId, obj);
      }
    }
    obj3 = apexExperimentDefault4;
    tmp5 = importDefault;
  }
  obj.setAudioOutputDevice(tmp.outputDeviceId);
  updateVideo();
  obj.setInputVolume(tmp.inputVolume);
  obj2 = set4;
  const tmp3 = require;
  const setOutputVolume = obj.setOutputVolume;
  if (obj4.getConfig({ location: "MediaEngineStore.applySettings" }).audioOutputPresent) {
    setOutputVolume(tmp.outputVolume);
  } else {
    setOutputVolume(closure_40);
  }
  obj.setAecDump(tmp.aecDumpEnabled);
  result = obj.setSidechainCompression(tmp.sidechainCompression);
  const result1 = obj.setSidechainCompressionStrength(tmp.sidechainCompressionStrength);
  const result2 = obj.setAudioInputBypassSystemProcessing(tmp.bypassSystemInputProcessing);
  obj4 = apexExperimentDefault;
  if (tmp3Result.isLinux()) {
    let tmp14Result = tmp14(5528);
    if (tmp14Result != null) {
      const setOpenH264Enabled = tmp14Result.setOpenH264Enabled;
      if (setOpenH264Enabled != null) {
        setOpenH264Enabled(tmp.openH264Enabled);
      }
    }
  }
  const audioMixerSettings = tmp.audioMixerSettings;
  tmp14Result = tmp14(13396);
  let supportsResult = true === audioMixerSettings.enabled && tmp14Result.getConfig({ location: "MediaEngineStore" }).enabled;
  if (supportsResult) {
    supportsResult = obj.supports(Features.SPATIAL_AUDIO);
  }
  c120 = supportsResult;
  obj = {};
  const merged = Object.assign(audioMixerSettings);
  obj.enabled = c120;
  obj.setAudioMixerOptions(obj);
}
function hasHapticsOverAudioOutputDevices(arg0) {
  const values = Object.values(arg0);
  return values.some((name) => {
    const formatted = name.name.toLowerCase();
    return formatted.includes("dualsense");
  });
}
function applyRemoteSettings(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let audioContextSettings;
  closure_2 = undefined;
  audioContextSettings = settings.settings.audioContextSettings;
  if (audioContextSettings == null) {
    obj = { user: null, stream: null };
    obj[0] = {};
    obj[1] = {};
    audioContextSettings = obj;
  }
  function _loop() {
    if (obj === closure_1_35.USER) {
      STREAM = closure_1_47.DEFAULT;
      let tmp2 = closure_1_47;
    } else {
      tmp2 = closure_1_47;
      STREAM = closure_1_47.STREAM;
    }
    audioContextSettings = STREAM === tmp2.STREAM ? closure_1_41 : closure_1_40;
    obj = audioContextSettings[obj];
    if (obj == null) {
      obj = {};
    }
    const tmp4 = closure_1_143(STREAM);
    const localMutes = tmp4.localMutes;
    const localVolumes = tmp4.localVolumes;
    function _loop2(closure_0, muted) {
      closure_1 = muted;
      if (null != obj.getPendingAudioSettings(closure_0, closure_0)) {
        return 1;
      } else {
        if (muted.muted) {
          tmp4[closure_0] = true;
        } else {
          delete tmp2[tmp];
        }
        if (muted.volume !== closure_1) {
          localVolumes[closure_0] = muted.volume;
        } else {
          delete tmp2[tmp];
        }
        closure_1_72.eachConnection((setLocalVolume) => {
          setLocalVolume.setLocalVolume(closure_0, muted.volume);
          setLocalVolume.setLocalMute(closure_0, muted.muted);
        }, tmp3);
      }
      obj = STREAM(localMutes[70]);
      tmp3 = closure_0;
    }
    const entries = Object.entries(obj);
    while (tmp6 !== undefined) {
      let tmp8 = closure_1_4;
      let tmp9 = closure_1_4(tmp7, 2);
      let _loop2Result = _loop2(tmp9[0], tmp9[1]);
      continue;
    }
    if (STREAM) {
      const _Set = Set;
      const _Object = Object;
      const items = [];
      const _Object2 = Object;
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.keys(localMutes), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(Object.keys(localVolumes), arraySpreadResult);
      set = new Set(items);
      for (const item10056 of set) {
        let tmp21 = (function _loop3(item10056) {
          closure_0 = item10056;
          if (null != obj[item10056]) {
            return 1;
          } else {
            delete tmp[tmp2];
            delete tmp[tmp2];
            closure_1_72.eachConnection((setLocalVolume) => {
              setLocalVolume.setLocalVolume(closure_0, closure_1_1);
              setLocalVolume.setLocalMute(closure_0, false);
            }, closure_0);
          }
        })(item10056);
        continue;
      }
    }
    closure_1_153({ localMutes, localVolumes }, STREAM);
  }
  const keys = Object.keys(audioContextSettings);
  const iter = keys[Symbol.iterator]();
  while (iter !== undefined) {
    closure_2 = iter.next();
    let _loopResult = _loop();
    continue;
  }
}
function maybeTryHookProcess(pidFromDesktopSource, sound) {
  if (sound) {
    obj = mediaEngineStore;
    if (null != mediaEngineStore) {
      let audioPid = pidFromDesktopSource;
      if (!obj.getExperimentalSoundshare()) {
        let obj2 = setDefault3;
        audioPid = obj2.getAudioPid(pidFromDesktopSource);
      }
      let str2 = "";
      if (null != audioPid) {
        str2 = setDefault3.generateSessionFromPid(audioPid);
        const obj4 = setDefault3;
      }
      obj = { soundshareId: null, soundshareSession: null };
      obj[0] = audioPid;
      obj[1] = str2;
    } else {
      obj.info("Error: trying to get soundshare id before MediaEngineStore is instantiated.");
      obj = { soundshareId: null, soundshareSession: "" };
    }
    ({ soundshareId, soundshareSession } = obj);
    if (null != soundshareId) {
      let isWindowsResult = soundshareId(500).isWindows();
      if (isWindowsResult) {
        isWindowsResult = soundshareId > 1;
      }
      if (isWindowsResult) {
        obj1 = { soundshare_session: null };
        obj1[0] = soundshareSession;
        const obj8 = isHookModuleTooOldAll;
        isHookModuleTooOldAll.attachToProcess(soundshareId, obj1).then((closure_0) => {
          result = null == closure_0;
          if (!result) {
            result = closure_1_8.shouldContinueWithoutElevatedProcessForPID(closure_0);
          }
          if (!result) {
            closure_1_1(closure_1_3[44]).wait(() => {
              obj = closure_1_1(closure_1_3[44]);
              obj = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: closure_0 };
              obj.dispatch(obj);
            });
            obj = closure_1_1(closure_1_3[44]);
          }
        });
        const attachToProcessResult = isHookModuleTooOldAll.attachToProcess(soundshareId, obj1);
      }
      obj2 = { soundshareId: null, soundshareSession: null };
      obj2[0] = soundshareId;
      obj2[1] = soundshareSession;
      return obj2;
    }
  }
  let videoHook = null != pidFromDesktopSource;
  if (videoHook) {
    videoHook = getSettings().videoHook;
  }
  if (videoHook) {
    isHookModuleTooOldAll.attachToProcess(pidFromDesktopSource);
    const obj6 = isHookModuleTooOldAll;
  }
  return { soundshareId: null, soundshareSession: null };
}
function resetProbingState() {
  const DEFAULT = MediaEngineContextTypes.DEFAULT;
  const videoToggleStateMap = getSettings(DEFAULT).videoToggleStateMap;
  const entries = Object.entries(videoToggleStateMap);
  while (tmp4 !== undefined) {
    let tmp6 = callback;
    let tmp7 = callback(tmp5, 2);
    let tmp8 = constants5;
    if (tmp7[1] === constants5.AUTO_PROBING) {
      let first = tmp7[0];
      delete tmp[tmp2];
    }
    continue;
  }
  mergeSettings({ videoToggleStateMap }, DEFAULT, false);
}
function trackVoiceProcessing(location) {
  const tmp = getSettings();
  const audioSubsystem = store3.getAudioSubsystem();
  let id = tmp.inputDeviceId;
  let firstResult = dependencyMap2[id];
  const audioLayer = store3.getAudioLayer();
  if (firstResult == null) {
    firstResult = tmp4[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    obj = applyDefault(tmp4);
    const values = obj.values();
    firstResult = values.first();
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  let name;
  if (dependencyMap2[id] != null) {
    name = tmp9.name;
  }
  const tmp11 = setDefault4;
  const tmp11Result = setDefault4(tmp.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  obj = { echo_cancellation: tmp.echoCancellation, noise_cancellation: tmp.noiseCancellation, noise_suppression: tmp.noiseSuppression, automatic_gain_control: tmp.automaticGainControl, location, bypass_system_input_processing: tmp.bypassSystemInputProcessing, audio_subsystem: audioSubsystem, audio_layer: audioLayer, input_device: name, effective_noise_cancellation: tmp11Result };
  expandEventPropertiesDefault.track(constants.VOICE_PROCESSING, obj);
}
function setLoopback() {
  const tmp2 = getSettings();
  const inputDeviceId = tmp2.inputDeviceId;
  obj = closure_13;
  const tmp = getSettings;
  const tmp4 = closure_13.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation;
  const tmp6 = obj.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl;
  obj = { enabled: tmp6 };
  const tmp5 = obj.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression;
  const tmp7 = set2.size <= 0;
  const tmp8 = require;
  obj = { location: "getAutomaticGainControlConfig", disable: !tmp6 };
  const merged = Object.assign(getAGC2ExperimentConfig.getAGC2ExperimentConfig(obj).noiseCancellationConfig);
  store3.setLoopback(set2.size > 0, { echoCancellation: tmp4, echoCancellationPreEcho: tmp7, noiseSuppression: tmp5, automaticGainControlConfig: obj, noiseCancellation: tmp2.noiseCancellation });
  const tmpResult = tmp();
  const inputDeviceId2 = tmpResult.inputDeviceId;
  obj1 = { echoCancellation: tmp4, echoCancellationPreEcho: tmp7, noiseSuppression: tmp5, automaticGainControlConfig: obj, noiseCancellation: tmp2.noiseCancellation };
  const obj3 = getAGC2ExperimentConfig;
  const tmp13 = obj.hasEchoCancellation(inputDeviceId2) || tmpResult.echoCancellation;
  const tmp14 = obj.hasNoiseSuppression(inputDeviceId2) || tmpResult.noiseSuppression;
  const tmp15 = setDefault4;
  const tmp15Result = setDefault4(tmpResult.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  const voiceFidelityCaps = getAudioFidelityExperimentConfig.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp15Result, noiseSuppressionEnabled: tmp14, echoCancellationEnabled: tmp13 });
  result = obj5.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
  const result1 = obj5.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
}
function _setGamescopeVaapiEnabled() {
  const self = this;
  const tmp = callback2(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            closure_0 = undefined;
            if (closure_1_72.supports(closure_1_46.VAAPI)) {
              const _window = window;
              let getSystemInfo;
              if (DiscordNative != null) {
                const processUtils = DiscordNative.processUtils;
                if (processUtils != null) {
                  getSystemInfo = processUtils.getSystemInfo;
                }
              }
              if (null != getSystemInfo) {
                const _window2 = window;
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = processUtils2.getSystemInfo();
                return obj1;
              }
            }
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          const electronGPUInfo = closure_0.electronGPUInfo;
          let gpuDevice;
          if (electronGPUInfo != null) {
            gpuDevice = electronGPUInfo.gpuDevice;
          }
          closure_0 = gpuDevice;
          if (gpuDevice == null) {
            closure_0 = [];
          }
          if (closure_0.some((vendorId) => 4098 === vendorId.vendorId)) {
            c138 = true;
            closure_137 = closure_72.supports(constants.GAMESCOPE_CAPTURE);
          }
        }
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp14) {
        c4 = tmp;
        throw tmp14;
      }
    }
  });
  closure_162 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setupKrispNativeModule() {
  const self = this;
  const tmp = callback2(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = tmp4;
            let lib = tmp8;
            c0 = undefined;
            lib = undefined;
            c2 = undefined;
            dependencyMap = undefined;
            c4 = 2;
            c5 = 3;
            c6 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1(5528).ensureModule("discord_krisp");
            return obj1;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          c108 = false;
          throw dependencyMap;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            closure_4 = dependencyMap;
            const _HermesInternal = HermesInternal;
            logger.warn("Failed to load Krisp module: " + closure_4.message);
            let obj5 = lib(1208);
            obj5.captureException(closure_4);
            let KRISP_INIT_ERROR = constants.KRISP_INIT_ERROR;
            let message = closure_4.message;
            if (!message.includes(": ")) {
              let obj6 = closure_1_0(9486);
              let obj2 = { type: null, underlyingError: null };
              obj2[0] = closure_1_0(9486).AVError.NOISE_CANCELLER_ERROR;
              obj2[1] = closure_1_147(c2);
              obj6.reportAVError(obj2);
              const obj3 = { noise_canceller_error: null };
              obj3[0] = c2;
              closure_1_1(698).track(closure_1_18.VOICE_PROCESSING, obj3);
              c4 = 0;
              c108 = false;
              c6 = 3;
              const obj9 = closure_1_1(698);
            } else {
              const _parseInt = parseInt;
              message = closure_4.message;
              dependencyMap = parseInt(closure_4.message.substring(message.indexOf(": ") + 1));
              const _isNaN = isNaN;
              if (!isNaN(dependencyMap)) {
                if (0 !== dependencyMap) {
                  KRISP_INIT_ERROR = dependencyMap;
                }
              }
              KRISP_INIT_ERROR = closure_1_48.KRISP_INIT_ERROR;
              const str = closure_4.message;
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c108 = false;
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              c0 = lib(5528).requireModule("discord_krisp");
              c109 = true;
              const getSdkVersion = c0.getSdkVersion;
              let sdkVersion;
              if (getSdkVersion != null) {
                sdkVersion = getSdkVersion();
              }
              const getSuppressionLevel = c0.getSuppressionLevel;
              let suppressionLevel;
              if (getSuppressionLevel != null) {
                suppressionLevel = getSuppressionLevel();
              }
              c0 = suppressionLevel;
              if (suppressionLevel == null) {
                c0 = 100;
              }
              closure_112 = c0;
              const getNcModels = c0.getNcModels;
              if (getNcModels != null) {
                const ncModels = getNcModels();
                ncModels.then((arg0) => {
                  closure_114 = arg0;
                  closure_69.emitChange();
                });
              }
              closure_1_69.emitChange();
              obj2 = closure_1_1(5528);
              c5 = 4;
              c6 = 1;
              obj5 = { value: null, done: false };
              obj5[0] = obj2.ensureModule("discord_voice");
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = lib(5528);
            lib = obj.requireModule("discord_voice");
            const setupKrispPath = lib.setupKrispPath;
            if (setupKrispPath != null) {
              setupKrispPath();
            }
            c4 = 1;
          }
          c4 = 0;
          c108 = false;
          c6 = 3;
          obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        }
      } catch (tmp72) {
        dependencyMap = tmp72;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp72;
        } else if (tmp2 === tmp74) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  closure_163 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _downloadOpenH() {
  const self = this;
  const tmp = callback2(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === fetchedFromNetwork) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let message = tmp4;
            c0 = tmp8;
            c0 = undefined;
            dependencyMap = undefined;
            fetchedFromNetwork = undefined;
            c5 = undefined;
            dependencyMap = 1;
            message = "";
            fetchedFromNetwork = false;
            const _URL = URL;
            const parsed = URL.parse(closure_1_65);
            if (null === parsed) {
              closure_1_57.log("OpenH264 URL ", parsed, " is invalid");
              dependencyMap = 0;
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = undefined;
              return obj1;
            } else {
              const parts = parsed.pathname.split("/");
              const replaced = parts[parts.length - 1].replace(".bz2", "");
              dependencyMap = replaced;
              dependencyMap = 2;
              const obj11 = closure_1_1(5528);
              fetchedFromNetwork = 3;
              c5 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj11.downloadOpenH264(tmp62, replaced, closure_1_66, (arg0) => {
                logger.log("OpenH264 download status", arg0);
              });
              return obj2;
            }
          }
        } else {
          if (1 === tmp8) {
            dependencyMap = 0;
            closure_7 = fetchedFromNetwork;
            logger.error("OpenH264 download failed", closure_7);
            c5 = 3;
          } else {
            if (2 === tmp8) {
              dependencyMap = 1;
              message = fetchedFromNetwork;
              logger.error("OpenH264 download failed", message);
              message = message.message;
              c0 = false;
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  c5 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  fetchedFromNetwork = arg1;
                  logger.log("OpenH264 is ready", fetchedFromNetwork);
                  fetchedFromNetwork = fetchedFromNetwork.fetchedFromNetwork;
                  c0 = true;
                  dependencyMap = 1;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c5 = arg1;
                logger.log("OpenH264 cleanup", c5);
              }
              dependencyMap = 0;
            }
            obj2 = message(698);
            let obj4 = { success: null, fetched_from_network: null, error_message: null };
            obj4[0] = c0;
            obj4[1] = fetchedFromNetwork;
            obj4[2] = message;
            obj2.track(obj.VIDEO_OPENH264_DOWNLOADED, obj4);
          }
          obj4 = message(5528);
          const items = [dependencyMap];
          fetchedFromNetwork = 4;
          c5 = 1;
          const obj5 = { value: null, done: false };
          obj5[0] = obj4.cleanupUnusedOpenH264Files(items);
          return obj5;
        }
      } catch (tmp52) {
        fetchedFromNetwork = tmp52;
        if (tmp5 === dependencyMap) {
          c5 = tmp3;
          throw tmp52;
        } else if (tmp2 === tmp54) {
          fetchedFromNetwork = tmp2;
        } else {
          fetchedFromNetwork = tmp;
        }
      }
    }
  });
  closure_164 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function setAudioSubsystem(arg0) {
  if (arg0 === constants7.AUTOMATIC) {
    let DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT2 === undefined) {
      DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    }
    let tmp24 = dependencyMap[DEFAULT2];
    if (null == tmp24) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT2] = obj;
      tmp24 = obj;
      const tmp26 = set4.isPlatformEmbedded || false;
    }
    const _Object2 = Object;
    const merged1 = Object.assign(tmp24, { automaticAudioSubsystem: true });
    const Storage2 = Storage6.Storage;
    result = Storage2.set(MediaEngineStore, dependencyMap);
    store3.queueAudioSubsystem(tmp.EXPERIMENTAL);
  } else {
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = dependencyMap[DEFAULT];
    if (null == tmp3) {
      const obj2 = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj2[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj2[1] = obj;
      obj2[17] = {};
      obj2[18] = {};
      obj2[19] = {};
      obj2[20] = {};
      const obj3 = {};
      const merged2 = Object.assign(closure_34);
      obj2[21] = obj3;
      obj2[23] = {};
      obj2[24] = closure_40;
      obj2[25] = closure_40;
      obj2[26] = DEFAULT_DEVICE_ID;
      obj2[27] = DEFAULT_DEVICE_ID;
      obj2[28] = DEFAULT_DEVICE_ID;
      obj2[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj2;
      tmp3 = obj2;
      const tmp5 = set4.isPlatformEmbedded || false;
    }
    const _Object = Object;
    const merged3 = Object.assign(tmp3, { automaticAudioSubsystem: false });
    const Storage = Storage6.Storage;
    const result1 = Storage.set(MediaEngineStore, dependencyMap);
    store3.setAudioSubsystem(arg0);
  }
}
function handleUserSettingsModal(section) {
  if (section.section === constants4.VOICE) {
    if (!closure_79) {
      store3.enable().then(() => disabledLocalVideos(table[44]).dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: true, unmute: false }));
      const enableResult = store3.enable();
    }
  }
  return false;
}
function processQueueMetricsForAnalytics(taskMetrics) {
  let num2;
  if (null != taskMetrics.taskMetrics) {
    if (0 !== taskMetrics.taskMetrics.length) {
      if (1 === taskMetrics.taskMetrics.length) {
        return null;
      } else {
        obj = { metrics_period_ms: null, total_tasks: 0, total_exec_time_ns: 0, queue_name: null };
        ({ periodMs: obj[0], queueName: obj[3], taskMetrics } = taskMetrics);
        obj.total_tasks = taskMetrics.reduce((arg0, count) => arg0 + count.count, 0);
        taskMetrics = taskMetrics.taskMetrics;
        obj.total_exec_time_ns = taskMetrics.reduce((arg0, totalExecTimeNs) => arg0 + totalExecTimeNs.totalExecTimeNs, 0);
        const items = [];
        HermesBuiltin.arraySpread(taskMetrics.taskMetrics, 0);
        const sorted = items.sort((longestExecTimeNs, longestExecTimeNs2) => longestExecTimeNs2.longestExecTimeNs - longestExecTimeNs.longestExecTimeNs);
        const items1 = [];
        HermesBuiltin.arraySpread(taskMetrics.taskMetrics, 0);
        const sorted1 = items1.sort((longestQueueTimeNs, longestQueueTimeNs2) => longestQueueTimeNs2.longestQueueTimeNs - longestQueueTimeNs.longestQueueTimeNs);
        let num = 0;
        do {
          let tmp = num;
          if (num < sorted.length) {
            let tmp2 = sorted[num];
            let _HermesInternal = HermesInternal;
            obj["slow_task_" + num + "_name"] = tmp2.name;
            let _HermesInternal2 = HermesInternal;
            obj["slow_task_" + num + "_longest_exec_time_ns"] = tmp2.longestExecTimeNs;
          }
          num = num + 1;
          num2 = 0;
        } while (num < 3);
        do {
          let tmp3 = num2;
          if (num2 < sorted1.length) {
            let tmp4 = sorted1[num2];
            let _HermesInternal3 = HermesInternal;
            obj["delayed_task_" + num2 + "_name"] = tmp4.name;
            let _HermesInternal4 = HermesInternal;
            obj["delayed_task_" + num2 + "_longest_queue_time_ns"] = tmp4.longestQueueTimeNs;
          }
          num2 = num2 + 1;
        } while (num2 < 3);
        const _JSON = JSON;
        obj.full_task_report = JSON.stringify(sorted);
        return obj;
      }
    }
  }
  return null;
}
({ AnalyticEvents: closure_18, AppStates: closure_19, InputModes } = ME);
({ RTCConnectionStates: closure_21, UserSettingsSections: closure_22, VideoToggleState: closure_23 } = ME);
({ DARWIN_SCKIT_VERSION: closure_24, DARWIN_SCKIT_AUDIO_VERSION: closure_25, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD: closure_26, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER: closure_27, WINDOWS_GRAPHICS_CAPTURE_BUILD: closure_28, WINDOWS_GRAPHICS_CAPTURE_SEMVER: closure_29, WINDOWS_SOUNDSHARE_HOOK_VERSION: closure_30, WINDOWS_SOUNDSHARE_NONHOOK_VERSION: closure_31 } = StreamIssueReportReasons);
({ NativePermissionStates: closure_32, NativePermissionTypes } = NativePermissionStatus);
({ ProtoAudioSettingsContextTypes: closure_35, UserSettingsTypes: closure_36 } = MAX_FAVORITES);
({ AudioSubsystems: closure_38, DARWIN_H265_VERSION: closure_39, DEFAULT_VOLUME: closure_40, DEFAULT_STREAM_VOLUME: closure_41, DEFAULT_DEVICE_ID } = DesktopSources);
({ DeviceTypes: closure_43, DISABLED_DEVICE_ID } = DesktopSources);
({ ExperimentFlags: closure_45, Features } = DesktopSources);
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
const NoiseCancellerError = DesktopSources.NoiseCancellerError;
({ VideoFilterError: closure_49, VideoFilterTarget: closure_50, MediaTypes: closure_51, QUEUE_METRICS_INTERVAL_MS: closure_52, VideoToggleReason: closure_53, VIEWERSIDE_CLIP_KFI_MS: closure_54, SIMULCAST_HQ_QUALITY: closure_55, SIMULCAST_LQ_QUALITY: closure_56 } = DesktopSources);
let obj = new timestampDefault("MediaEngineStore");
const MediaEngineStore = "MediaEngineStore";
let closure_59 = { left: 1, right: 1 };
let closure_60 = 5 * setDefault.Millis.SECOND;
let closure_61 = 2 * setDefault.Millis.SECOND;
let closure_62 = 30 * setDefault.Millis.SECOND;
const MINUTE = setDefault.Millis.MINUTE;
const deep_noise_suppression = "deep_noise_suppression";
let c65 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
let c66 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
let c67 = 0;
obj = { WEBCAM: "WEBCAM", INTEGRATED: "INTEGRATED", BLUETOOTH: "BLUETOOTH", AIRPLAY: "AIRPLAY", HEADSET: "HEADSET" };
obj = { mode: InputModes.VOICE_ACTIVITY, modeOptions: { threshold: -84, autoThreshold: false, vadUseKrisp: false }, echoCancellation: false, noiseSuppression: false, automaticGainControl: false, noiseCancellation: false, bypassSystemInputProcessing: true };
let closure_70 = { [InputProfile.CUSTOM]: {}, [InputProfile.VOICE_ISOLATION]: { modeOptions: { autoThreshold: true, vadUseKrisp: true }, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true }, [InputProfile.STUDIO]: obj };
let closure_71 = { modeOptions: { vadUseKrisp: false }, noiseCancellation: false, noiseSuppression: true };
let result = BaseConnectionEvent.initializeMediaEngine(BaseConnectionEvent.determineMediaEngine());
obj.enableNativeLogger(true);
let closure_77 = {};
let items = [MediaEngineContextTypes.DEFAULT];
let set = new Set(items);
let closure_79 = result.supports(Features.AUTO_ENABLE);
let c80 = false;
let STREAM = MediaEngineContextTypes.STREAM;
let c82 = 0;
let c83 = false;
let closure_84 = performance.now();
let c85 = null;
let closure_86 = { [DEFAULT_DEVICE_ID]: { id: DEFAULT_DEVICE_ID, index: 0, name: "No Input Devices", disabled: true, guid: "accessible", hardwareId: "View", containerId: "l" } };
let closure_87 = { [DEFAULT_DEVICE_ID]: { id: DEFAULT_DEVICE_ID, index: 0, name: "No Output Devices", disabled: true, guid: "call", hardwareId: "rejectWithError", containerId: "code" } };
let closure_88 = { [DEFAULT_DEVICE_ID]: { id: DEFAULT_DEVICE_ID, index: 0, name: "No Video Devices", disabled: true, guid: "add", hardwareId: "then", containerId: "getChannel" } };
const timeout = new require("start").Timeout();
let c90 = false;
let c91 = false;
let c92 = false;
let c93 = false;
let c94 = false;
let c97 = false;
let c98 = false;
const timeout1 = new require("start").Timeout();
let c100 = false;
let c101 = false;
let c102 = false;
let c103 = false;
const timeout2 = new require("start").Timeout();
let c105;
let c106;
let c107 = false;
let c108 = false;
let c109 = false;
let c110 = false;
let c111;
let c112;
let c113;
let closure_114 = [];
let c115 = false;
let c116 = null;
let c117 = false;
let c118 = false;
let c119 = false;
let c120 = false;
let closure_121 = {};
let c122 = null;
let c123 = null;
let c124 = false;
importDefaultResult.hasPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: false });
importDefaultResult.hasPermission(NativePermissionTypes.CAMERA, { showAuthorizationError: false });
const set1 = new Set();
let c126 = true;
const set2 = new Set();
let c128;
let closure_129 = {};
let c130 = null;
let c131 = null;
let c132 = null;
let c133 = true;
let c134 = false;
const timeout3 = new require("start").Timeout();
let c136 = false;
let c137 = false;
let c138 = false;
let c139 = false;
let closure_140 = {};
let items1 = [, , , , , , , , , ];
({ KRISP_INIT_ERROR: arr2[0], KRISP_INIT_ERROR_NATIVE: arr2[1], KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED: arr2[2], KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED: arr2[3], KRISP_INIT_ERROR_UNSIGNED: arr2[4], KRISP_INIT_ERROR_GLOBAL_INIT: arr2[5], KRISP_INIT_ERROR_WEIGHT_8K: arr2[6], KRISP_INIT_ERROR_WEIGHT_16K: arr2[7], KRISP_INIT_ERROR_WEIGHT_32K: arr2[8], KRISP_INIT_ERROR_WEIGHT_VAD: arr2[9] } = NoiseCancellerError);
const set3 = new Set(items1);
let c152 = ">=10.0.15063";
const re155 = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
const Store = initializeDefault.Store;
class MediaEngineStore extends Store {
}
const prototype = MediaEngineStore.prototype;
prototype["initialize"] = function initialize() {
  let self = this;
  if (navigation == null) {
    const tmp7 = new _pollMetrics(13477)(store3, self);
    navigation = tmp7;
  }
  timeout.start(closure_62, () => {
    logger.error("Device enumeration timed out");
    _pollMetrics(698).track(constants.DEVICE_ENUMERATION_TIMEOUT, {});
  });
  obj = store3;
  store3.on(pollMetrics(4544).MediaEngineEvent.Connection, (setAttenuation) => {
    pollMetrics = setAttenuation;
    let result8 = callback8();
    callback4(setAttenuation);
    callback5(setAttenuation);
    callback6(setAttenuation);
    const tmp6 = callback3();
    setAttenuation.setAttenuation(tmp6.attenuation, tmp6.attenuateWhileSpeakingSelf, tmp6.attenuateWhileSpeakingOthers);
    setAttenuation.setQoS(tmp6.qos);
    if (obj.isWindows()) {
      setAttenuation.setExperimentFlag(closure_45.H265_HARDWARE_ONLY, true);
      callback2().then((arg0) => {
        setAttenuation.setExperimentFlag(closure_1_45.H265_HARDWARE_DECODE_AVAILABLE, arg0);
      });
      const promise = callback2();
    } else {
      let tmp9Result = tmp9(500);
      if (tmp9Result.isMac()) {
        setAttenuation.setExperimentFlag(closure_45.H265_HARDWARE_DECODE_AVAILABLE, true);
      }
    }
    tmp9Result = tmp9(500);
    obj = pollMetrics(500);
    const tmp5 = callback3;
    if (tmp17) {
      setAttenuation.setExperimentFlag(closure_45.USE_LIBOPENH264_DECODER, true);
    }
    tmp17 = tmp9Result.isLinux() && tmp6.openH264Enabled;
    if (tmp9Result1.getLowLatencyRateControlExperimentConfig({ location: "setupMediaEngine" }).enabled) {
      setAttenuation.setExperimentFlag(closure_45.LOW_LATENCY_RATE_CONTROL, true);
    }
    setAttenuation.setExperimentFlag(closure_45.RESET_DECODER_ON_ERRORS, true);
    setAttenuation.setExperimentFlag(closure_45.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true);
    tmp9Result1 = pollMetrics(13415);
    if (obj5.getConfig({ location: "MediaEngineStore" }).swallowVolumeOnlySpeakingEvents) {
      setAttenuation.setExperimentFlag(tmp22.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, true);
    }
    result = setAttenuation.setMinimumJitterBufferLevel(80);
    if (setAttenuation.context === constants4.STREAM) {
      const result1 = setAttenuation.setSoundshareDiscardRearChannels(callback7(closure_87));
    }
    obj5 = _pollMetrics(5316);
    if (tmp9Result2.isWindows()) {
      setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_ENCODE, true);
      setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_DECODE, true);
      setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_HARDWARE_DECODE, true);
    } else {
      if (tmp9Result3.isMac()) {
        setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_DECODE, true);
        setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_HARDWARE_DECODE, true);
        let arch;
        if (window != null) {
          if (DiscordNative != null) {
            arch = DiscordNative.os.arch;
          }
        }
        let satisfiesResult = "arm64" === arch;
        if (satisfiesResult) {
          let tmp25Result = tmp25(13416);
          let release;
          if (window != null) {
            if (DiscordNative2 != null) {
              release = DiscordNative2.os.release;
            }
          }
          satisfiesResult = tmp25Result.satisfies(release, closure_39);
        }
        setAttenuation.setExperimentFlag(tmp22.H265_DISABLE_ENCODE, !satisfiesResult);
      } else {
        if (tmp9Result4.isLinux()) {
          if (tmp9Result5.getAV1EncodeExperimentLinuxConfig("MediaEngineStore").enabled) {
            setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_ENCODE, true);
          }
          setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_DECODE, true);
          tmp9Result5 = tmp9(13461);
        } else {
          let isIOSResult = tmp9(500).isIOS();
          if (!isIOSResult) {
            isIOSResult = tmp9(500).isAndroid();
            const tmp9Result7 = tmp9(500);
          }
          if (isIOSResult) {
            setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_DECODE, true);
            setAttenuation.setExperimentFlag(tmp22.SIGNAL_AV1_HARDWARE_DECODE, true);
          }
          const tmp9Result6 = tmp9(500);
        }
        tmp9Result4 = tmp9(500);
      }
      tmp9Result3 = tmp9(500);
    }
    tmp9Result2 = pollMetrics(500);
    if (tmp9Result8.isWeb()) {
      tmp25Result = tmp25(13462);
      setAttenuation.setExperimentFlag(tmp22.BROWSER_HEVC, tmp25Result.getConfig({ location: "MediaEngineStore" }).enabled);
    }
    tmp9Result8 = pollMetrics(500);
    let enabled = pollMetrics(500).isWindows();
    if (enabled) {
      let startsWithResult;
      if (closure_130 != null) {
        startsWithResult = obj16.startsWith("AMD");
      }
      enabled = startsWithResult;
      obj16 = closure_130;
    }
    if (enabled) {
      enabled = tmp9(13463).getWmfGpuEncode("MediaEngineStore").enabled;
      const tmp9Result10 = tmp9(13463);
    }
    if (enabled) {
      setAttenuation.setExperimentFlag(tmp22.WMF_GPU_ENCODE, true);
    }
    const tmp9Result9 = pollMetrics(500);
    let enabled2 = pollMetrics(500).isWindows();
    if (enabled2) {
      let startsWithResult1;
      if (closure_130 != null) {
        startsWithResult1 = obj19.startsWith("Intel");
      }
      enabled2 = startsWithResult1;
      obj19 = closure_130;
    }
    if (enabled2) {
      enabled2 = true === closure_131;
    }
    if (enabled2) {
      enabled2 = 1 === closure_132;
    }
    if (enabled2) {
      enabled2 = tmp9(13464).getWmfGpuEncodeIntel("MediaEngineStore").enabled;
      const tmp9Result12 = tmp9(13464);
    }
    if (enabled2) {
      setAttenuation.setExperimentFlag(tmp22.WMF_GPU_ENCODE, true);
      setAttenuation.setExperimentFlag(tmp22.INTEL_GPU_DISABLE, true);
    }
    const tmp9Result11 = pollMetrics(500);
    let enabled3 = pollMetrics(500).isWindows();
    if (enabled3) {
      let startsWithResult2;
      if (closure_130 != null) {
        startsWithResult2 = obj22.startsWith("Intel");
      }
      enabled3 = startsWithResult2;
      obj22 = closure_130;
    }
    if (enabled3) {
      enabled3 = true === closure_131;
    }
    if (enabled3) {
      enabled3 = 1 === closure_132;
    }
    if (enabled3) {
      enabled3 = tmp9(13465).getWmfCpuEncodeIntel("MediaEngineStore").enabled;
      const tmp9Result14 = tmp9(13465);
    }
    if (enabled3) {
      setAttenuation.setExperimentFlag(tmp22.INTEL_GPU_DISABLE, true);
    }
    const tmp9Result13 = pollMetrics(500);
    let enabled4 = pollMetrics(500).isWindows();
    if (enabled4) {
      let startsWithResult3;
      if (closure_130 != null) {
        startsWithResult3 = obj25.startsWith("Qualcomm");
      }
      enabled4 = startsWithResult3;
      obj25 = closure_130;
    }
    if (enabled4) {
      enabled4 = tmp9(13463).getWmfGpuEncode("MediaEngineStore").enabled;
      const tmp9Result16 = tmp9(13463);
    }
    if (enabled4) {
      setAttenuation.setExperimentFlag(tmp22.WMF_GPU_ENCODE, true);
    }
    const result2 = store3.setHasFullbandPerformance(tmp25(13466)());
    const result3 = setAttenuation.setRemoteAudioHistory(1000);
    if (_pollMetrics(4508)(closure_69)) {
      const result4 = setAttenuation.setClipsKeyFrameInterval(closure_54);
    }
    const tmp5Result = tmp5(setAttenuation.context);
    const result5 = setAttenuation.setPostponeDecodeLevel(100);
    const keys = Object.keys(tmp5Result.localMutes);
    for (const item10296 of keys) {
      let tmp73 = item10296;
      let tmp74 = store;
      if (item10296 !== store.getId()) {
        let tmp75 = item10296;
        let setLocalMuteResult = arg0.setLocalMute(tmp73, tmp5Result.localMutes[tmp73]);
      }
      continue;
    }
    const keys1 = Object.keys(tmp5Result.localVolumes);
    for (const item10315 of keys1) {
      let tmp78 = item10315;
      let tmp79 = store;
      if (item10315 !== store.getId()) {
        let tmp80 = item10315;
        let setLocalVolumeResult = arg0.setLocalVolume(tmp78, tmp5Result.localVolumes[tmp78]);
      }
      continue;
    }
    const keys2 = Object.keys(tmp5Result.localPans);
    for (const item10334 of keys2) {
      let rect = tmp5Result.localPans[item10334];
      let setLocalPanResult = arg0.setLocalPan(item10334, rect.left, rect.right);
      continue;
    }
    const keys3 = Object.keys(tmp5Result.disabledLocalVideos);
    for (const item10350 of keys3) {
      let result6 = arg0.setLocalVideoDisabled(item10350, tmp5Result.disabledLocalVideos[item10350]);
      continue;
    }
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.Speaking, (userId, speakingFlags, arg2, voiceDb) => {
      obj = closure_1_1(closure_1_3[44]);
      obj = { type: "SPEAKING", context: setAttenuation.context, userId, speakingFlags, voiceDb };
      obj.dispatch(obj);
    });
    if (setAttenuation.context === constants4.DEFAULT) {
      c98 = false;
      setAttenuation.on(tmp86(4544).BaseConnectionEvent.SpeakingWhileMuted, () => {
        c98 = true;
        if (!c98) {
          closure_69.emitChange();
        }
        closure_99.start(closure_61, () => {
          c98 = false;
          closure_69.emitChange();
        });
      });
    }
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.DesktopSourceEnd, (endReason, errorCode) => {
      obj = closure_1_1(closure_1_3[44]);
      obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: obj, endReason, errorCode };
      obj = { context: setAttenuation.context };
      obj.dispatch(obj);
    });
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.InteractionRequired, (required) => {
      obj = callback(709);
      obj = { type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required };
      obj.dispatch(obj);
    });
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.VideoHookInitialize, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      let desktopSource;
      if (closure_74 != null) {
        desktopSource = closure_74.desktopSource;
      }
      if (null != desktopSource) {
        obj = callback(698);
        obj = { backend: null, format: null, framebuffer_format: null, sample_count: null, success: null, reinitialization: null };
        obj[0] = arg0;
        obj[1] = arg1;
        obj[2] = arg2;
        obj[3] = arg3;
        obj[4] = arg4;
        obj[5] = arg5;
        let desktopSource1;
        if (closure_74 != null) {
          desktopSource1 = closure_74.desktopSource;
        }
        const merged = Object.assign(callback(4624)(desktopSource1));
        obj.track(constants.VIDEOHOOK_INITIALIZED, obj);
        const tmp15 = callback(4624);
      }
    });
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.NoiseCancellationError, closure_149);
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.VoiceActivityDetectorError, closure_149);
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.SdpError, (operation, error, type, sdp) => {
      obj = callback(698);
      obj = { operation, error, type, sdp };
      obj.track(constants.SDP_ERROR, obj);
    });
    setAttenuation.on(pollMetrics(4544).BaseConnectionEvent.VideoState, (videoState) => {
      obj = closure_1_1(closure_1_3[44]);
      obj = { type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState, context: setAttenuation.context };
      obj.dispatch(obj);
    });
    setAttenuation.setBitRate(bitrate.bitrate);
    const result7 = setAttenuation.applyVideoQualityMode(mode.mode);
    const tmp9Result15 = pollMetrics(500);
    let isWindowsResult = pollMetrics(500).isWindows();
    if (isWindowsResult) {
      result8 = store3;
      result8 = constants3;
      isWindowsResult = store3.supports(constants3.ASYNC_VIDEO_INPUT_DEVICE_INIT);
    }
    if (isWindowsResult) {
      result8 = store3;
      result8 = store3.setAsyncVideoInputDeviceInit(true);
    }
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.DeviceChange, (inputDevices, outputDevices, videoDevices) => {
    closure_89.stop();
    obj = _pollMetrics(709);
    obj = { type: "MEDIA_ENGINE_DEVICES", inputDevices, outputDevices, videoDevices };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.VolumeChange, (inputVolume, outputVolume) => {
    obj = _pollMetrics(709);
    obj = { type: "AUDIO_VOLUME_CHANGE", inputVolume, outputVolume };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.DesktopSourceEnd, (endReason, errorCode) => {
    obj = _pollMetrics(709);
    obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason, errorCode };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.AudioPermission, (granted) => {
    c124 = true;
    obj = _pollMetrics(709);
    obj = { type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.VideoPermission, (granted) => {
    obj = _pollMetrics(709);
    obj = { type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.WatchdogTimeout, callback2(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp3;
            let callback2 = tmp7;
            let callback;
            callback2 = undefined;
            const _window = window;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL) {
              c4 = 1;
              let obj7 = closure_1_1(closure_1_3[60]);
              obj1 = { message: null };
              obj1[0] = { message: "Voice Watchdog Timeout" };
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj7.submitLiveCrashReport(obj1);
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_2 = dependencyMap;
          if (typeof closure_2.status === "number") {
            callback = closure_2.status;
          }
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = 0;
          }
        } else {
          if (3 === tmp7) {
            c4 = 0;
            logger.error("Failed to flush voice watchdog timeout analytics event", dependencyMap);
            if (callback2) {
              logger.info("Relaunching app due to voice watchdog timeout");
              const processUtils = callback2(4072).processUtils;
              c5 = 5;
              c6 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = processUtils.setCrashReason("voice-watchdog-timeout");
              return obj4;
            } else {
              c6 = 3;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              c4 = 0;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const Storage = callback(595).Storage;
            const _Date = Date;
            result = Storage.set("discord_watchdog_restart_timestamp", Date.now().toString());
            const app = callback2(4072).app;
            app.relaunch();
            const str = Date.now();
          }
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        if (callback == null) {
          callback = 200;
        }
        const _HermesInternal = HermesInternal;
        logger.warn("Watchdog timeout, report submission status: " + callback);
        callback2 = null != callback2(4072).processUtils.setCrashReason;
        c4 = 2;
        obj4 = callback2(698);
        const obj6 = { minidump_submission_error: null, will_restart: null };
        obj6[0] = callback;
        obj6[1] = callback2;
        c5 = 4;
        c6 = 1;
        obj7 = { value: null, done: false };
        obj7[0] = obj4.track(constants.VOICE_WATCHDOG_TIMEOUT, obj6, { flush: true });
        return obj7;
      } catch (tmp52) {
        dependencyMap = tmp52;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp52;
        } else if (tmp === tmp54) {
          c5 = tmp;
        } else {
          c5 = tmp2;
        }
      }
    }
  }));
  store3.on(pollMetrics(4544).MediaEngineEvent.VideoInputInitialized, (description) => {
    obj = _pollMetrics(698);
    obj = { device_name: description.description.name, time_to_first_frame_ms: null, timed_out: null, activity: null, media_session_id: null, rtc_connection_id: null };
    let rounded = null;
    if (!description.initializationTimerExpired) {
      const _Math = Math;
      rounded = Math.round(description.timeToFirstFrame * _pollMetrics(687).Millis.SECOND);
    }
    obj[1] = rounded;
    ({ initializationTimerExpired: obj2[2], entropy: obj2[3] } = description);
    obj[4] = store2.getMediaSessionId();
    obj[5] = store2.getRTCConnectionId();
    obj.track(constants.VIDEO_INPUT_INITIALIZED, obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.AudioInputInitialized, (description) => {
    obj = _pollMetrics(698);
    obj = { device_name: description.description.name, time_to_initialized_ms: Math.round(description.timeToInitialized * _pollMetrics(687).Millis.SECOND), rtc_connection_id: store2.getRTCConnectionId() };
    obj.track(constants.AUDIO_INPUT_INITIALIZED, obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
    _pollMetrics(709).dispatch({ type: "CLIPS_RESTART" });
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.ClipsInitFailure, (arg0, arg1) => {
    closure_0 = arg0;
    _pollMetrics = arg1;
    closure_2 = closure_82 < 3;
    closure_82 = closure_82 + 1;
    _pollMetrics(709).wait(() => {
      obj = callback(closure_1_3[44]);
      obj = { type: "CLIPS_INIT_FAILURE", errMsg: closure_0, applicationName: callback };
      obj.dispatch(obj);
      if (closure_2) {
        callback(closure_1_3[44]).dispatch({ type: "CLIPS_RESTART" });
        const tmpResult = callback(closure_1_3[44]);
      } else {
        const _HermesInternal = HermesInternal;
        closure_1_57.warn("Clips init failure budget exhausted (" + closure_82 + " consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.");
      }
    });
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.ClipsRecordingHealthy, () => {
    if (0 !== c82) {
      const _HermesInternal = HermesInternal;
      logger.info("Clips bridge reported healthy; resetting restart budget (was " + c82 + ").");
      c82 = 0;
    }
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.ClipsRecordingReadyChanged, (arg0) => {
    if (closure_83 !== arg0) {
      const _HermesInternal = HermesInternal;
      logger.info("Clips recorder ready changed: " + arg0);
      closure_83 = arg0;
    }
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.ClipsBridgeIdleShutdown, () => {
    logger.info("Clips bridge idle shutdown");
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.ClipsRecordingEnded, (arg0, soundshareId) => {
    let id;
    if (desktopSource2 != null) {
      const desktopSource = desktopSource2.desktopSource;
      if (desktopSource != null) {
        id = desktopSource.id;
      }
    }
    if (id === arg0) {
      let tmp3 = null != soundshareId;
      if (tmp3) {
        soundshareId = undefined;
        if (desktopSource != null) {
          desktopSource2 = desktopSource.desktopSource;
          if (desktopSource2 != null) {
            soundshareId = desktopSource2.soundshareId;
          }
        }
        tmp3 = soundshareId !== soundshareId;
      }
      if (tmp3) {
        result = callback(13405).cancelAttachToProcess(soundshareId);
        obj = callback(13405);
      }
      desktopSource2 = null;
    }
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.NativeScreenSharePickerUpdate, (existing, content) => {
    obj = _pollMetrics(709);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing, content };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.NativeScreenSharePickerCancel, (existing) => {
    obj = _pollMetrics(709);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.NativeScreenSharePickerError, (error) => {
    obj = _pollMetrics(709);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.AudioDeviceModuleError, (audio_device_module, code, device_name) => {
    obj = _pollMetrics(698);
    obj = { audio_device_module, code, device_name };
    obj.track(constants.AUDIO_DEVICE_MODULE_ERROR, obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.VideoCodecError, (mode) => {
    if ("encode" === mode.mode) {
      let VIDEO_DECODE_ERROR = pollMetrics(9486).AVError.VIDEO_ENCODE_ERROR;
      let tmp3 = pollMetrics;
    } else {
      VIDEO_DECODE_ERROR = pollMetrics(9486).AVError.VIDEO_DECODE_ERROR;
      tmp3 = pollMetrics;
    }
    obj = { videoCodec: mode.codecStandard, errorMessage: mode.message };
    if (VIDEO_DECODE_ERROR === tmp3(9486).AVError.VIDEO_ENCODE_ERROR) {
      obj = { type: null };
      obj[0] = VIDEO_DECODE_ERROR;
      const merged = Object.assign(obj);
      obj.videoEncoder = mode.implName;
    } else {
      obj = { type: null };
      obj[0] = VIDEO_DECODE_ERROR;
      const merged1 = Object.assign(obj);
      obj.videoDecoder = mode.implName;
    }
    tmp3(9486).reportAVError(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.ConnectionStats, (arr) => {
    obj = _pollMetrics(709);
    obj = {
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: arr.map((connection) => {
        connection = connection.connection;
        closure_67 = tmp + 1;
        return { stats: connection.stats, mediaEngineConnectionId: connection.mediaEngineConnectionId, version: +closure_67, context: connection.context };
      })
    };
    obj.dispatch(obj);
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.VoiceProcessingError, handleVoiceProcessingError);
  store3.on(pollMetrics(4544).MediaEngineEvent.VideoFilterError, handleVideoFilterError);
  store3.on(pollMetrics(4544).MediaEngineEvent.VoiceQueueMetrics, (arg0) => {
    const tmp = callback9(arg0);
    if (null !== tmp) {
      _pollMetrics(698).track(constants.VOICE_QUEUE_METRICS, tmp);
      obj = _pollMetrics(698);
    }
  });
  result = store3.setOnVideoContainerResized((arg0, arg1, arg2) => {
    closure_0 = arg0;
    _pollMetrics = arg1;
    closure_2 = arg2;
    _pollMetrics(709).wait(() => {
      obj = callback(closure_1_3[44]);
      obj = { type: "VIDEO_SIZE_UPDATE", streamId: closure_0, dimensions: obj };
      obj = { width: callback, height: closure_2 };
      return obj.dispatch(obj);
    });
  });
  (function setGamescopeVaapiEnabled() {
    const self = this;
    const apply = closure_162.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  navigation.reset();
  getSystemAnalyticsInfo().then((arg0) => {
    if (null != arg0) {
      ({ gpu_brand: closure_130, has_intel_hybrid_igpu: closure_131, gpu_count: closure_132 } = arg0);
    }
  });
  store3.on(pollMetrics(4544).MediaEngineEvent.SystemMicrophoneModeChange, (arg0) => {
    closure_128 = arg0;
    store3.eachConnection(closure_151);
    closure_69.emitChange();
  });
  let Storage = pollMetrics(595).Storage;
  let value = Storage.get("audio");
  if (null != value) {
    const Storage2 = tmp10(595).Storage;
    obj = {};
    obj[MediaEngineContextTypes.DEFAULT] = value;
    let result1 = Storage2.set(MediaEngineStore, obj);
    const Storage3 = tmp10(595).Storage;
    Storage3.remove("audio");
  }
  const Storage4 = tmp10(595).Storage;
  value = Storage4.get(MediaEngineStore);
  if (value == null) {
    value = {};
  }
  let obj3 = _pollMetrics(12);
  obj3.each(value, (modeOptions) => {
    obj = _pollMetrics(12);
    obj = { mode: constants2.VOICE_ACTIVITY, modeOptions: { threshold: -60, autoThreshold: pollMetrics(500).isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "ct" }, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
    obj = {};
    const merged = Object.assign(closure_34);
    obj[21] = obj;
    obj[23] = {};
    obj[24] = closure_40;
    obj[25] = closure_40;
    obj[26] = closure_42;
    obj[27] = closure_42;
    obj[28] = closure_42;
    obj[31] = store3.supports(constants3.VIDEO_HOOK);
    obj.defaultsDeep(modeOptions, obj);
    if (tmp8) {
      let tmp2Result = tmp2(13467);
      modeOptions.modeOptions.shortcut = tmp2Result.toCombo(modeOptions.modeOptions.shortcut);
    }
    let tmp9 = null != modeOptions.modeOptions;
    if (tmp9) {
      tmp9 = 4 !== modeOptions.vadUseKrispSettingVersion;
    }
    if (tmp9) {
      modeOptions.vadUseKrispSettingVersion = 4;
      modeOptions.modeOptions.vadUseKrisp = true;
    }
    if (!modeOptions.qosMigrated) {
      modeOptions.qosMigrated = true;
      modeOptions.qos = false;
    }
    if (!modeOptions.vadThrehsoldMigrated) {
      modeOptions.vadThrehsoldMigrated = true;
      modeOptions = modeOptions.modeOptions;
      let threshold;
      if (modeOptions != null) {
        threshold = modeOptions.threshold;
      }
      if (-40 === threshold) {
        modeOptions.modeOptions.threshold = -60;
      }
    }
    let supportsResult = store3.supports(constants3.SIDECHAIN_COMPRESSION);
    if (supportsResult) {
      supportsResult = modeOptions.sidechainCompressionSettingVersion < 1;
    }
    if (supportsResult) {
      modeOptions.sidechainCompressionSettingVersion = 1;
      modeOptions.sidechainCompression = true;
    }
    if (modeOptions.audioMixerSettingsVersion < 3) {
      modeOptions.audioMixerSettingsVersion = 3;
      obj1 = {};
      const merged1 = Object.assign(tmp4);
      modeOptions.audioMixerSettings = obj1;
    }
    tmp2Result = tmp2(500);
    if (tmp2Result.isWeb()) {
      if (1 !== modeOptions.ncUseKrispjsSettingVersion) {
        modeOptions.ncUseKrispjsSettingVersion = 1;
        modeOptions.noiseSuppression = false;
        modeOptions.noiseCancellation = true;
      }
    } else if (1 !== modeOptions.ncUseKrispSettingVersion) {
      modeOptions.ncUseKrispSettingVersion = 1;
      modeOptions.noiseSuppression = false;
      modeOptions.noiseCancellation = true;
    }
  });
  applySettings();
  let tmp10Result = tmp10(500);
  let isWindowsResult = tmp10Result.isWindows();
  if (!isWindowsResult) {
    tmp10Result = tmp10(500);
    isWindowsResult = tmp10Result.isLinux();
  }
  if (!isWindowsResult) {
    isWindowsResult = tmp10(500).isMac();
    const tmp10Result1 = tmp10(500);
  }
  if (isWindowsResult) {
    if (!c108) {
      if (!c109) {
        c108 = true;
        (function setupKrispNativeModule() {
          const self = this;
          const apply = closure_163.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
      if (tmp10Result2.isLinux()) {
        (function downloadOpenH264() {
          const self = this;
          const apply = closure_164.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
      resetProbingState();
      tmp10Result2 = tmp10(500);
      if (tmp10Result3.isDesktop()) {
        if (tmp10(500).isPlatformEmbedded) {
          if (!c139) {
            pollMetrics = function pollMetrics(arg0) {
              const self = this;
              const apply = _pollMetrics.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            _pollMetrics = function _pollMetrics(arg0) {
              const self = this;
              const tmp = closure_1_5(function*() {
                if (table === 2) {
                  table = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    table = 2;
                    if (0 === c2) {
                      if (arg0 === 1) {
                        table = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        table = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        closure_1 = tmp4;
                        closure_0 = 0;
                        closure_0 = undefined;
                        closure_1 = undefined;
                        const promise = new Promise((arg0) => {
                          closure_0 = arg0;
                          callback(table[65]).pollQueueMetrics((arg0) => {
                            callback(arg0);
                          });
                        });
                        c2 = 1;
                        table = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = promise;
                        return obj1;
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
                      closure_0 = arg1;
                      closure_0.periodMs = closure_1_52;
                      closure_1 = closure_1_166(closure_0);
                      if (null !== closure_1) {
                        obj = closure_1_1(table[43]);
                        obj.track(closure_1_18.VOICE_QUEUE_METRICS, closure_1);
                      }
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(closure_0, closure_1_52);
                      table = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp22) {
                    table = tmp;
                    throw tmp22;
                  }
                }
              });
              closure_1 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            c139 = true;
            let _setTimeout = setTimeout;
            let timerId = setTimeout(pollMetrics, closure_52);
          }
        }
      }
      tmp10Result3 = tmp10(500);
      const tmp10Result4 = tmp10(500);
      if (tmp77) {
        if (null === c85) {
          const codecSurvey = obj.getCodecSurvey();
          const nextPromise1 = codecSurvey.then((arg0) => {
            try {
              const _JSON = JSON;
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp4.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  c85 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const _Error = Error;
              error = new Error("decoder survey is not available");
              throw error;
            } catch (tmp11) {
              logger.error("Failed to parse codec survey", tmp11);
              c85 = false;
            }
          });
          codecSurvey.then((arg0) => {
            try {
              const _JSON = JSON;
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp4.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  c85 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const _Error = Error;
              error = new Error("decoder survey is not available");
              throw error;
            } catch (tmp11) {
              logger.error("Failed to parse codec survey", tmp11);
              c85 = false;
            }
          }).catch((arg0) => {
            logger.error("Failed to get codec survey", arg0);
            c85 = false;
          }).finally(() => {
            _pollMetrics(709).dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
          });
          const catchPromise = codecSurvey.then((arg0) => {
            try {
              const _JSON = JSON;
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp4.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  c85 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const _Error = Error;
              error = new Error("decoder survey is not available");
              throw error;
            } catch (tmp11) {
              logger.error("Failed to parse codec survey", tmp11);
              c85 = false;
            }
          }).catch((arg0) => {
            logger.error("Failed to get codec survey", arg0);
            c85 = false;
          });
        }
      }
      obj = {};
      obj[Features.VIDEO] = obj.supports(Features.VIDEO);
      obj[Features.DESKTOP_CAPTURE] = obj.supports(Features.DESKTOP_CAPTURE);
      obj[Features.HYBRID_VIDEO] = obj.supports(Features.HYBRID_VIDEO);
      self.waitFor(closure_11, closure_12, closure_13, closure_14, closure_6, closure_7, closure_15, closure_8, closure_10, closure_16, closure_17);
    }
  }
  let promise = getSystemAnalyticsInfo();
  const tmp46 = MediaEngineStore;
  if (tmp10Result5.isWeb()) {
    if (obj.supports(Features.NOISE_CANCELLATION)) {
      c109 = true;
      mediaEngineStore.emitChange();
    }
  }
  tmp10Result5 = pollMetrics(500);
  if (tmp10Result6.isWeb()) {
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp55 = value[DEFAULT];
    if (null == tmp55) {
      obj1 = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj1[0] = InputModes.VOICE_ACTIVITY;
      let obj2 = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj2[1] = tmp10(500).isPlatformEmbedded || false;
      obj2[7] = [];
      obj1[1] = obj2;
      obj1[17] = {};
      obj1[18] = {};
      obj1[19] = {};
      obj1[20] = {};
      obj3 = {};
      let merged = Object.assign(closure_34);
      obj1[21] = obj3;
      obj1[23] = {};
      obj1[24] = closure_40;
      obj1[25] = closure_40;
      obj1[26] = DEFAULT_DEVICE_ID;
      obj1[27] = DEFAULT_DEVICE_ID;
      obj1[28] = DEFAULT_DEVICE_ID;
      obj1[31] = obj.supports(Features.VIDEO_HOOK);
      value[DEFAULT] = obj1;
      tmp55 = obj1;
      const tmp56 = tmp10(500).isPlatformEmbedded || false;
    }
    const _Object = Object;
    let merged1 = Object.assign(tmp55, { noiseCancellation: false });
    const Storage5 = tmp10(595).Storage;
    let result2 = Storage5.set(tmp46, value);
  }
};
prototype["supports"] = function supports(arg0) {
  let tmp = arg0 === Features.VIDEO;
  if (tmp) {
    const VideoGuardExperiment = VIDEO_GUARD_BLOG_POST_URL.VideoGuardExperiment;
    tmp = !VideoGuardExperiment.getConfig({ location: "MediaEngineStore.supports" }).videoEnabled;
  }
  let supportsResult = !tmp;
  if (!tmp) {
    supportsResult = store3.supports(arg0);
  }
  return supportsResult;
};
prototype["supportsInApp"] = function supportsInApp(arg0) {
  let tmp = arg0 === Features.VIDEO;
  if (tmp) {
    const VideoGuardExperiment = VIDEO_GUARD_BLOG_POST_URL.VideoGuardExperiment;
    tmp = !VideoGuardExperiment.getConfig({ location: "MediaEngineStore.supportsInApp" }).videoEnabled;
  }
  let tmp4 = !tmp;
  if (!tmp) {
    let supportsResult = table2[arg0];
    if (!supportsResult) {
      supportsResult = store3.supports(arg0);
    }
    tmp4 = supportsResult;
  }
  return tmp4;
};
prototype["isSupported"] = function isSupported() {
  return store3.supported();
};
prototype["isNoiseSuppressionSupported"] = function isNoiseSuppressionSupported() {
  return store3.supports(Features.NOISE_SUPPRESSION);
};
prototype["isNoiseCancellationSupported"] = function isNoiseCancellationSupported() {
  return !c110;
};
prototype["isNoiseCancellationError"] = function isNoiseCancellationError() {
  return c117;
};
prototype["isAutomaticGainControlSupported"] = function isAutomaticGainControlSupported() {
  return store3.supports(Features.AUTOMATIC_GAIN_CONTROL);
};
prototype["shouldOfferManualSubsystemSelection"] = function shouldOfferManualSubsystemSelection() {
  const supportsResult = store3.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
  let tmp3 = !supportsResult;
  if (!supportsResult) {
    tmp3 = obj.supports(tmp.LEGACY_AUDIO_SUBSYSTEM) || obj.supports(tmp.EXPERIMENTAL_AUDIO_SUBSYSTEM);
    const tmp4 = obj.supports(tmp.LEGACY_AUDIO_SUBSYSTEM) || obj.supports(tmp.EXPERIMENTAL_AUDIO_SUBSYSTEM);
  }
  return tmp3;
};
prototype["showBypassSystemInputProcessing"] = function showBypassSystemInputProcessing() {
  let supportsResult = store3.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
  if (supportsResult) {
    supportsResult = "experimental" === store3.getAudioSubsystem();
  }
  return supportsResult;
};
prototype["isAdvancedVoiceActivitySupported"] = function isAdvancedVoiceActivitySupported() {
  return !c110;
};
prototype["isAecDumpSupported"] = function isAecDumpSupported() {
  return store3.supports(Features.AEC_DUMP);
};
prototype["isSimulcastSupported"] = function isSimulcastSupported() {
  return store3.supports(Features.VIDEO) && store3.supports(Features.SIMULCAST);
};
prototype["getAecDump"] = function getAecDump() {
  return getSettings().aecDumpEnabled;
};
prototype["getMediaEngine"] = function getMediaEngine() {
  return closure_72;
};
prototype["getVideoComponent"] = function getVideoComponent() {
  return store3.Video;
};
prototype["getCameraComponent"] = function getCameraComponent() {
  return store3.Camera;
};
prototype["getKrispSuppressionLevel"] = function getKrispSuppressionLevel() {
  let num = c112;
  if (c112 == null) {
    num = 100;
  }
  return num;
};
prototype["getKrispEnableStats"] = function getKrispEnableStats() {
  return c115;
};
prototype["isEnabled"] = function isEnabled() {
  return closure_79;
};
prototype["isMute"] = function isMute() {
  return this.isSelfMute() || c90;
};
prototype["isDeaf"] = function isDeaf() {
  return this.isSelfDeaf() || c93;
};
prototype["isServerMute"] = function isServerMute() {
  return c90;
};
prototype["isServerDeaf"] = function isServerDeaf() {
  return c93;
};
prototype["getAudioMixerSettings"] = function getAudioMixerSettings() {
  return getSettings().audioMixerSettings;
};
prototype["isSpatialAudioEnabled"] = function isSpatialAudioEnabled() {
  return true === this.getAudioMixerSettings().enabled;
};
prototype["isSpatialAudioActive"] = function isSpatialAudioActive() {
  return c120;
};
prototype["hasContext"] = function hasContext(arg0) {
  return null != dependencyMap[arg0];
};
prototype["isSelfMutedTemporarily"] = function isSelfMutedTemporarily(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  return DEFAULT === MediaEngineContextTypes.DEFAULT && c91;
};
prototype["isSelfMute"] = function isSelfMute(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const self = this;
  const isEnabledResult = this.isEnabled();
  let mute = !isEnabledResult;
  if (isEnabledResult) {
    mute = getSettings(DEFAULT).mute;
  }
  if (!mute) {
    mute = !importDefaultResult.didHavePermission(NativePermissionTypes.AUDIO);
    obj = importDefaultResult;
  }
  if (!mute) {
    mute = self.isSelfDeaf(DEFAULT);
  }
  if (!mute) {
    mute = DEFAULT === MediaEngineContextTypes.DEFAULT && c92;
    const tmp8 = DEFAULT === MediaEngineContextTypes.DEFAULT && c92;
  }
  return mute;
};
prototype["shouldSkipMuteUnmuteSound"] = function shouldSkipMuteUnmuteSound() {
  return c97;
};
prototype["notifyMuteUnmuteSoundWasSkipped"] = function notifyMuteUnmuteSoundWasSkipped() {
  c97 = false;
};
prototype["isHardwareMute"] = function isHardwareMute(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const self = this;
  let tmp2 = c134;
  if (c134) {
    tmp2 = "voice_isolation" !== self.getSystemMicrophoneMode();
  }
  if (tmp2) {
    tmp2 = getSettings(DEFAULT).mode === InputModes.VOICE_ACTIVITY;
  }
  const isMuteResult = self.isMute();
  let tmp6 = !isMuteResult;
  if (!isMuteResult) {
    tmp6 = !self.isSelfMutedTemporarily(DEFAULT);
  }
  if (tmp6) {
    tmp6 = closure_13.isHardwareMute(self.getInputDeviceId()) || tmp2;
    const tmp8 = closure_13.isHardwareMute(self.getInputDeviceId()) || tmp2;
  }
  return tmp6;
};
prototype["isHardwareMuteNoticeEnabled"] = function isHardwareMuteNoticeEnabled() {
  return c133;
};
prototype["isSelfDeaf"] = function isSelfDeaf(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const isSupportedResult = this.isSupported();
  let deaf = !isSupportedResult;
  if (isSupportedResult) {
    deaf = getSettings(DEFAULT).deaf;
  }
  return deaf;
};
prototype["isVideoEnabled"] = function isVideoEnabled() {
  let tmp = c94;
  if (c94) {
    tmp = c101;
  }
  return tmp;
};
prototype["isVideoAvailable"] = function isVideoAvailable() {
  const values = Object.values(closure_88);
  return values.some((disabled) => !disabled.disabled);
};
prototype["hasVideoDevice"] = function hasVideoDevice() {
  return c101;
};
prototype["isScreenSharing"] = function isScreenSharing() {
  STREAM = arg0;
  if (arg0 === undefined) {
    STREAM = MediaEngineContextTypes.STREAM;
  }
  let tmp2 = STREAM === STREAM;
  if (tmp2) {
    tmp2 = null != closure_74;
  }
  return tmp2;
};
prototype["isSoundSharing"] = function isSoundSharing() {
  STREAM = arg0;
  if (arg0 === undefined) {
    STREAM = MediaEngineContextTypes.STREAM;
  }
  let tmp2 = STREAM === STREAM;
  if (tmp2) {
    tmp2 = null != desktopSource;
  }
  if (tmp2) {
    desktopSource = desktopSource.desktopSource;
    let soundshareId;
    if (desktopSource != null) {
      soundshareId = desktopSource.soundshareId;
    }
    tmp2 = null != soundshareId;
  }
  return tmp2;
};
prototype["isLocalMute"] = function isLocalMute(id, closure_1) {
  let DEFAULT = closure_1;
  if (closure_1 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp2 = id !== store.getId();
  if (tmp2) {
    tmp2 = getSettings(DEFAULT).localMutes[id] || false;
    const tmp4 = getSettings(DEFAULT).localMutes[id] || false;
  }
  return tmp2;
};
prototype["supportsDisableLocalVideo"] = function supportsDisableLocalVideo() {
  return store3.supports(Features.DISABLE_VIDEO);
};
prototype["isLocalVideoDisabled"] = function isLocalVideoDisabled(id, DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let flag = getSettings(DEFAULT).disabledLocalVideos[id];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getVideoToggleState"] = function getVideoToggleState(arg0, DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let NONE = getSettings(DEFAULT).videoToggleStateMap[arg0];
  if (NONE == null) {
    NONE = constants5.NONE;
  }
  return NONE;
};
prototype["isLocalVideoAutoDisabled"] = function isLocalVideoAutoDisabled(id) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let hasItem = DEFAULT === MediaEngineContextTypes.DEFAULT;
  if (hasItem) {
    hasItem = set1.has(id);
  }
  return hasItem;
};
prototype["isAnyLocalVideoAutoDisabled"] = function isAnyLocalVideoAutoDisabled() {
  let DEFAULT = arg0;
  if (arg0 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp2 = DEFAULT === MediaEngineContextTypes.DEFAULT;
  if (tmp2) {
    tmp2 = set1.size > 0;
  }
  return tmp2;
};
prototype["isMediaFilterSettingLoading"] = function isMediaFilterSettingLoading() {
  return c118;
};
prototype["isNativeAudioPermissionReady"] = function isNativeAudioPermissionReady() {
  return c124;
};
prototype["getGoLiveSource"] = function getGoLiveSource() {
  return closure_74;
};
prototype["getGoLiveContext"] = function getGoLiveContext() {
  return STREAM;
};
prototype["getLastAudioInputDeviceChangeTimestamp"] = function getLastAudioInputDeviceChangeTimestamp() {
  return closure_84;
};
prototype["isH264MfDecodeAvailable"] = function isH264MfDecodeAvailable() {
  return c85;
};
prototype["getLocalPan"] = function getLocalPan(id) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp2 = getSettings(DEFAULT).localPans[id];
  if (null == tmp2) {
    tmp2 = closure_59;
  }
  return tmp2;
};
prototype["getLocalVolume"] = function getLocalVolume(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp2 = DEFAULT === MediaEngineContextTypes.STREAM ? closure_41 : closure_40;
  const tmp3 = getSettings(DEFAULT).localVolumes[arg0];
  if (null != tmp3) {
    tmp2 = tmp3;
  }
  return tmp2;
};
prototype["getInputVolume"] = function getInputVolume() {
  return getSettings().inputVolume;
};
prototype["getOutputVolume"] = function getOutputVolume() {
  if (obj.getConfig({ location: "MediaEngineStore.getOutputVolume" }).audioOutputPresent) {
    let outputVolume = getSettings().outputVolume;
  } else {
    outputVolume = closure_40;
  }
  return outputVolume;
};
prototype["getMode"] = function getMode() {
  let DEFAULT = arg0;
  if (arg0 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  return getSettings(DEFAULT).mode;
};
prototype["getModeOptions"] = function getModeOptions(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  return getSettings(DEFAULT).modeOptions;
};
prototype["getShortcuts"] = function getShortcuts() {
  obj = {};
  applyDefault.each(closure_77, (mode) => {
    let hasItem = mode.mode === closure_1_20.PUSH_TO_TALK;
    if (hasItem) {
      hasItem = closure_1_78.has(arg1);
    }
    if (hasItem) {
      obj[arg1] = mode.modeOptions.shortcut;
    }
  });
  return obj;
};
prototype["getInputDeviceId"] = function getInputDeviceId() {
  let id = getSettings().inputDeviceId;
  let firstResult = dependencyMap2[id];
  if (firstResult == null) {
    firstResult = tmp[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    const values = applyDefault(tmp).values();
    firstResult = values.first();
    obj = applyDefault(tmp);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
};
prototype["getOutputDeviceId"] = function getOutputDeviceId() {
  let id = getSettings().outputDeviceId;
  let firstResult = dependencyMap3[id];
  if (firstResult == null) {
    firstResult = tmp[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    const values = applyDefault(tmp).values();
    firstResult = values.first();
    obj = applyDefault(tmp);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
};
prototype["getVideoDeviceId"] = function getVideoDeviceId() {
  let id = getSettings().videoDeviceId;
  let firstResult = dependencyMap4[id];
  if (firstResult == null) {
    firstResult = tmp[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    const values = applyDefault(tmp).values();
    firstResult = values.first();
    obj = applyDefault(tmp);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
};
prototype["getInputDevices"] = function getInputDevices(arg0) {
  return closure_86;
};
prototype["getOutputDevices"] = function getOutputDevices(arg0) {
  return closure_87;
};
prototype["getVideoDevices"] = function getVideoDevices() {
  return closure_88;
};
prototype["getEchoCancellation"] = function getEchoCancellation() {
  const tmp = getSettings();
  return closure_13.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
};
prototype["getSidechainCompression"] = function getSidechainCompression() {
  let sidechainCompression = store3.supports(Features.SIDECHAIN_COMPRESSION);
  if (sidechainCompression) {
    sidechainCompression = getSettings().sidechainCompression;
  }
  return sidechainCompression;
};
prototype["getSidechainCompressionStrength"] = function getSidechainCompressionStrength() {
  return getSettings().sidechainCompressionStrength;
};
prototype["getH265Enabled"] = function getH265Enabled() {
  return getSettings().h265Enabled;
};
prototype["hasH265HardwareDecode"] = function hasH265HardwareDecode() {
  return null !== c122 && c122;
};
prototype["getOpenH264Enabled"] = function getOpenH264Enabled() {
  let openH264Enabled = set4.isLinux();
  if (openH264Enabled) {
    openH264Enabled = getSettings().openH264Enabled;
  }
  return openH264Enabled;
};
prototype["getLoopback"] = function getLoopback() {
  return set2.size > 0;
};
prototype["getLoopbackReasons"] = function getLoopbackReasons() {
  return set2;
};
prototype["getNoiseSuppression"] = function getNoiseSuppression() {
  const tmp = getSettings();
  return closure_13.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
};
prototype["getAutomaticGainControl"] = function getAutomaticGainControl() {
  const tmp = getSettings();
  return closure_13.hasAutomaticGainControl(tmp.inputDeviceId) || tmp.automaticGainControl;
};
prototype["getBypassSystemInputProcessing"] = function getBypassSystemInputProcessing() {
  return getSettings().bypassSystemInputProcessing;
};
prototype["getNoiseCancellation"] = function getNoiseCancellation() {
  return getSettings().noiseCancellation;
};
prototype["getHardwareEncoding"] = function getHardwareEncoding() {
  return true;
};
prototype["getEnableSilenceWarning"] = function getEnableSilenceWarning() {
  return getSettings().silenceWarning;
};
prototype["getDebugLogging"] = function getDebugLogging() {
  return store3.getDebugLogging();
};
prototype["getQoS"] = function getQoS() {
  return getSettings().qos;
};
prototype["getAttenuation"] = function getAttenuation() {
  return getSettings().attenuation;
};
prototype["getAttenuateWhileSpeakingSelf"] = function getAttenuateWhileSpeakingSelf() {
  return getSettings().attenuateWhileSpeakingSelf;
};
prototype["getAttenuateWhileSpeakingOthers"] = function getAttenuateWhileSpeakingOthers() {
  return getSettings().attenuateWhileSpeakingOthers;
};
prototype["getAudioSubsystem"] = function getAudioSubsystem() {
  let isWindowsResult = set4.isWindows();
  if (isWindowsResult) {
    isWindowsResult = store3.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM);
  }
  if (isWindowsResult) {
    isWindowsResult = store3.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
  }
  if (isWindowsResult) {
    if (getSettings().automaticAudioSubsystem) {
      let AUTOMATIC = constants7.AUTOMATIC;
    }
    return AUTOMATIC;
  }
  AUTOMATIC = store3.getAudioSubsystem();
};
prototype["getMLSSigningKey"] = function getMLSSigningKey(arg0, arg1) {
  return store3.getMLSSigningKey(arg0, arg1);
};
prototype["getActiveInputProfile"] = function getActiveInputProfile() {
  return getSettings().activeInputProfile;
};
prototype["isInputProfileCustom"] = function isInputProfileCustom() {
  const activeInputProfile = this.getActiveInputProfile();
  let tmp2 = null == activeInputProfile;
  if (!tmp2) {
    tmp2 = activeInputProfile === InputProfile.CUSTOM;
  }
  return tmp2;
};
prototype["getSettings"] = function getSettings() {
  let DEFAULT = arg0;
  if (arg0 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  return getSettings(DEFAULT);
};
prototype["getState"] = function getState() {
  return { settingsByContext: closure_77, inputDevices: closure_86, outputDevices: closure_87, appSupported: closure_129, krispModuleLoaded: c109, krispFatalError: c110, krispVersion: c111, krispSuppressionLevel: c112, goLiveSource: closure_74, goLiveContext: STREAM };
};
prototype["getInputDetectedThisConnection"] = function getInputDetectedThisConnection() {
  return c102;
};
prototype["getInputDetected"] = function getInputDetected() {
  return navigation.inputDetected;
};
prototype["getLastInputDetectedUpdateTime"] = function getLastInputDetectedUpdateTime() {
  return navigation.lastUpdateTime;
};
prototype["getNoInputDetectedNotice"] = function getNoInputDetectedNotice() {
  return c103;
};
prototype["getInputDeviceOSMuted"] = function getInputDeviceOSMuted() {
  return c105;
};
prototype["getInputDeviceOSVolume"] = function getInputDeviceOSVolume() {
  return c106;
};
prototype["getPacketDelay"] = function getPacketDelay() {
  let num = 0;
  if (!set4.isPlatformEmbedded) {
    const self = this;
    num = 0;
    if (this.getMode() === InputModes.VOICE_ACTIVITY) {
      num = self.getModeOptions().vadLeading;
    }
  }
  return num;
};
prototype["setCanHavePriority"] = function setCanHavePriority(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  store3.eachConnection((setCanHavePriority) => setCanHavePriority.setCanHavePriority(closure_0, closure_1));
};
prototype["isInteractionRequired"] = function isInteractionRequired() {
  return c80;
};
prototype["getVideoHook"] = function getVideoHook() {
  return getSettings().videoHook;
};
prototype["supportsVideoHook"] = function supportsVideoHook() {
  return store3.supports(Features.VIDEO_HOOK);
};
prototype["getExperimentalSoundshare"] = function getExperimentalSoundshare() {
  const self = this;
  let flag = getSettings().experimentalSoundshare2;
  result = this.supportsExperimentalSoundshare();
  if (result) {
    if (flag == null) {
      flag = true;
    }
    if (!flag) {
      flag = !self.supportsHookSoundshare();
    }
    result = flag;
  }
  return result;
};
prototype["supportsExperimentalSoundshare"] = function supportsExperimentalSoundshare() {
  let supportsResult = store3.supports(Features.EXPERIMENTAL_SOUNDSHARE);
  if (supportsResult) {
    const tmp4 = setDefault2;
    let release;
    if (tmp4 != null) {
      release = tmp4.os.release;
    }
    supportsResult = _modDef13416.satisfies(release, closure_31);
    obj = _modDef13416;
  }
  return supportsResult;
};
prototype["supportsHookSoundshare"] = function supportsHookSoundshare() {
  let isWindowsResult = set4.isWindows();
  if (isWindowsResult) {
    isWindowsResult = store3.supports(Features.SOUNDSHARE);
  }
  if (isWindowsResult) {
    const tmp6 = setDefault2;
    let release;
    if (tmp6 != null) {
      release = tmp6.os.release;
    }
    isWindowsResult = _modDef13416.satisfies(release, closure_30);
    const obj2 = _modDef13416;
  }
  return isWindowsResult;
};
prototype["getUseSystemScreensharePicker"] = function getUseSystemScreensharePicker() {
  result = this.supportsSystemScreensharePicker();
  let useSystemScreensharePicker = getSettings().useSystemScreensharePicker;
  set4;
  if (result) {
    if (useSystemScreensharePicker == null) {
      useSystemScreensharePicker = tmp3;
    }
    result = useSystemScreensharePicker;
  }
  return result;
};
prototype["supportsSystemScreensharePicker"] = function supportsSystemScreensharePicker() {
  return store3.supports(Features.NATIVE_SCREENSHARE_PICKER);
};
prototype["getUseVaapiEncoder"] = function getUseVaapiEncoder() {
  return c138;
};
prototype["getVideoEncoderExperiments"] = function getVideoEncoderExperiments(STREAM, streamer) {
  let arr = new Array("unk");
  arr = arr.push("nvNewPresets");
  if (STREAM === MediaEngineContextTypes.STREAM) {
    arr = arr.push("nvRelaxRc=250");
  } else {
    arr.push("nvRelaxRc=75");
  }
  if (this.getUseVaapiEncoder()) {
    arr.push("vaapi");
  }
  if (obj.getNvencReconstructedFrameExperimentConfig({ location: "getVideoEncoderExperiments" }).enabled) {
    arr.push("nvReconFrames");
  }
  let isWindowsResult = STREAM === MediaEngineContextTypes.STREAM;
  if (isWindowsResult) {
    isWindowsResult = "streamer" === streamer;
  }
  if (isWindowsResult) {
    isWindowsResult = tmp6(500).isWindows();
    const tmp6Result = tmp6(500);
  }
  if (isWindowsResult) {
    arr.push("useCaptureDeviceForEncode");
    const VideoCaptureDeviceNoReuseExperiment = tmp6(13479).VideoCaptureDeviceNoReuseExperiment;
    if (VideoCaptureDeviceNoReuseExperiment.getConfig({ location: "handleReady" }).overrideDeviceReuse) {
      arr.push("videoCaptureDeviceOverrideReuse");
    }
  }
  arr.push("linux-vulkan");
  return arr.join(",");
};
prototype["getUseGamescopeCapture"] = function getUseGamescopeCapture() {
  return c137;
};
prototype["getSpeakingWhileMuted"] = function getSpeakingWhileMuted() {
  return c98;
};
prototype["getKrispModelOverride"] = function getKrispModelOverride() {
  return c113;
};
prototype["getKrispModels"] = function getKrispModels() {
  return closure_114;
};
prototype["getKrispVadActivationThreshold"] = function getKrispVadActivationThreshold() {
  let num = getSettings().modeOptions.vadKrispActivationThreshold;
  if (num == null) {
    num = 0.5;
  }
  return num;
};
prototype["hasActiveCallKitCall"] = function hasActiveCallKitCall() {
  return c136;
};
prototype["setHasActiveCallKitCall"] = function setHasActiveCallKitCall(arg0) {
  closure_136 = arg0;
};
prototype["supportsScreenSoundshare"] = function supportsScreenSoundshare() {
  if (obj.isMac()) {
    let supportsResult = store3.supports(Features.SOUNDSHARE);
    if (supportsResult) {
      const tmp12 = setDefault2;
      let release;
      if (tmp12 != null) {
        release = tmp12.os.release;
      }
      supportsResult = _modDef13416.satisfies(release, closure_25);
      const obj5 = _modDef13416;
    }
    if (supportsResult) {
      let tmpResult = tmp(500);
      let satisfiesResult = tmpResult.isMac() && obj4.supports(tmp9.SCREEN_CAPTURE_KIT);
      if (satisfiesResult) {
        const tmp18 = setDefault2;
        let release1;
        if (tmp18 != null) {
          release1 = tmp18.os.release;
        }
        satisfiesResult = _modDef13416.satisfies(release1, closure_24);
        const obj7 = _modDef13416;
      }
      supportsResult = satisfiesResult;
    }
    let supportsResult2 = supportsResult;
    obj4 = store3;
    tmp9 = Features;
  } else {
    tmpResult = tmp(500);
    if (tmpResult.isWindows()) {
      let supportsResult1 = store3.supports(Features.SCREEN_SOUNDSHARE);
      if (supportsResult1) {
        const self = this;
        supportsResult1 = this.getExperimentalSoundshare();
      }
      supportsResult2 = supportsResult1;
    } else {
      supportsResult2 = tmp(500).isLinux();
      if (supportsResult2) {
        supportsResult2 = store3.supports(Features.SCREEN_SOUNDSHARE);
      }
      const tmpResult1 = tmp(500);
    }
  }
  return supportsResult2;
};
prototype["getSystemMicrophoneMode"] = function getSystemMicrophoneMode() {
  if (obj.isWindows()) {
    const self = this;
    if (!this.getBypassSystemInputProcessing()) {
      const tmp5 = table[self.getInputDeviceId(self)];
      let found;
      if (tmp5 != null) {
        const active = tmp5.active;
        if (active != null) {
          found = active.find((arg0) => arg0 === closure_64);
        }
      }
      return found;
    }
  } else {
    let tmpResult = tmp(500);
    if (!tmpResult.isMac()) {
      tmpResult = tmp(500);
    }
    return c128;
  }
  obj = set4;
};
prototype["getVideoStreamParameters"] = function getVideoStreamParameters(context) {
  let DEFAULT = context;
  if (context === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const self = this;
  if (this.supports(Features.VIDEO)) {
    if (DEFAULT === MediaEngineContextTypes.DEFAULT) {
      let SCREEN = constants11.VIDEO;
    } else {
      SCREEN = constants11.SCREEN;
    }
    obj = { rid: "100", type: null, quality: null };
    obj[1] = SCREEN;
    obj[2] = closure_55;
    const items = [obj];
  } else {
    const items1 = [];
    let enableSimulcast = self.isSimulcastSupported();
    if (enableSimulcast) {
      enableSimulcast = DEFAULT === MediaEngineContextTypes.DEFAULT;
    }
    if (enableSimulcast) {
      const DisableCameraSimulcastExperiment = apexExperiment.DisableCameraSimulcastExperiment;
      enableSimulcast = DisableCameraSimulcastExperiment.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast;
    }
    if (enableSimulcast) {
      obj = { rid: "50", type: null, quality: null };
      obj[1] = constants11.VIDEO;
      obj[2] = closure_56;
      items1.push(obj);
    }
    return items1;
  }
};
prototype["fetchAsyncResources"] = function fetchAsyncResources() {
  obj = { fetchDave: set4.isWeb() };
  return store3.fetchAsyncResources(obj);
};
prototype["startDavePreload"] = function startDavePreload() {
  if (!c119) {
    c119 = true;
    if (obj.isWeb()) {
      const asyncResources = store3.fetchAsyncResources({ fetchDave: true });
      asyncResources.catch((arg0) => {
        logger.warn("DAVE preload failed:", arg0);
        callback(table[78]).captureException(arg0);
      });
    }
    obj = set4;
  }
};
prototype["getSupportedSecureFramesProtocolVersion"] = function getSupportedSecureFramesProtocolVersion() {
  return store3.getSupportedSecureFramesProtocolVersion();
};
prototype["hasClipsSource"] = function hasClipsSource() {
  return null != closure_75;
};
prototype["isClipsRecordingReady"] = function isClipsRecordingReady() {
  return c83;
};
prototype["isClipsRecordingReadySignalSupported"] = function isClipsRecordingReadySignalSupported() {
  return store3.supports(Features.CLIPS_RECORDING_READY_EVENTS);
};
prototype["getGpuBrand"] = function getGpuBrand() {
  return c130;
};
MediaEngineStore.displayName = "MediaEngineStore";
const mediaEngineStore = new MediaEngineStore(dispatcherDefault, {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    ({ channelId, guildId } = currentVoiceChannelId);
    if (currentVoiceChannelId.currentVoiceChannelId !== channelId) {
      updateVideo(tmp, null);
    }
    if (null == guildId) {
      if (null != channelId) {
        if (!c107) {
          c107 = true;
          const tmp7 = getSettings();
          if (tmp8) {
            let DEFAULT = MediaEngineContextTypes.DEFAULT;
            if (DEFAULT === undefined) {
              DEFAULT = MediaEngineContextTypes.DEFAULT;
            }
            let tmp10 = dependencyMap[DEFAULT];
            if (null == tmp10) {
              obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
              obj[0] = InputModes.VOICE_ACTIVITY;
              obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
              obj[1] = set4.isPlatformEmbedded || false;
              obj[7] = [];
              obj[1] = obj;
              obj[17] = {};
              obj[18] = {};
              obj[19] = {};
              obj[20] = {};
              obj = {};
              const merged = Object.assign(closure_34);
              obj[21] = obj;
              obj[23] = {};
              obj[24] = closure_40;
              obj[25] = closure_40;
              obj[26] = DEFAULT_DEVICE_ID;
              obj[27] = DEFAULT_DEVICE_ID;
              obj[28] = DEFAULT_DEVICE_ID;
              obj[31] = store3.supports(Features.VIDEO_HOOK);
              dependencyMap[DEFAULT] = obj;
              tmp10 = obj;
              const tmp11 = set4.isPlatformEmbedded || false;
            }
            const _Object = Object;
            const merged1 = Object.assign(tmp10, { deaf: false, mute: false });
            const Storage = Storage6.Storage;
            result = Storage.set(MediaEngineStore, dependencyMap);
            store3.eachConnection(updateConnectionMuteDeaf);
          }
          tmp8 = tmp7.mute || tmp7.deaf;
        }
      }
    }
    c107 = false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      if (closure_73 === sessionId.sessionId) {
        closure_90 = sessionId.mute || sessionId.suppress;
        const deaf = sessionId.deaf;
        closure_72.eachConnection(closure_145);
        let tmp13 = null != sessionId.guildId && null != sessionId.channelId;
        if (tmp13) {
          tmp13 = null != channelId;
        }
        if (tmp13) {
          tmp13 = channelId !== sessionId.channelId;
        }
        let tmp17 = !closure_107;
        if (!closure_107) {
          tmp17 = null == sessionId.channelId;
        }
        let tmp19 = !tmp13;
        if (!tmp13) {
          tmp19 = !tmp17;
        }
        if (tmp19) {
          tmp19 = closure_94;
        }
        callback(tmp19);
        channelId = sessionId.channelId;
        return true;
      } else {
        let tmp2 = sessionId.userId === id.getId();
        if (tmp2) {
          tmp2 = null == channelId.getChannelId();
        }
        if (tmp2) {
          callback(false, null);
        }
        return arg0;
      }
    }, false);
  },
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    c90 = false;
    c93 = false;
    const tmp = getSettings();
    let isWindowsResult = set4.isWindows();
    if (isWindowsResult) {
      isWindowsResult = store3.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM);
    }
    if (isWindowsResult) {
      isWindowsResult = store3.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
    }
    if (isWindowsResult) {
      if (store3.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)) {
        setAudioSubsystem(constants7.AUTOMATIC);
      } else if (tmp.automaticAudioSubsystem) {
        obj2.queueAudioSubsystem(constants7.EXPERIMENTAL);
      }
      obj2 = store3;
    }
    if (store3.supports(Features.OFFLOAD_ADM_CONTROLS)) {
      result = obj3.setOffloadAdmControls(true);
    }
    let tmp2Result = tmp2(500);
    let enabled = tmp2Result.isIOS();
    if (enabled) {
      tmp2Result = tmp2(13474);
      enabled = tmp2Result.getIOSAudioInterruptExperimentConfig("handleConnectionOpen").enabled;
    }
    if (enabled) {
      obj3.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled");
    }
    obj = set4;
    if (tmp2Result1.isIOS()) {
      const setNcModels = obj3.setNcModels;
      if (setNcModels != null) {
        setNcModels(tmp2(13475).getKrispV9iOSModels());
        const tmp2Result2 = tmp2(13475);
      }
      mediaEngineStore.emitChange();
    }
    const inputDeviceId = tmp.inputDeviceId;
    tmp2Result1 = set4;
    if (tmp2Result3.isWindows()) {
      if (obj9.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
        let guid;
        if (dependencyMap2[inputDeviceId] != null) {
          guid = tmp23.guid;
        }
        if (null != guid) {
          tmp21(13472)(tmp23.guid, inputDeviceId, obj3);
        }
      }
      obj9 = apexExperimentDefault4;
      tmp21 = importDefault;
    }
    applyRemoteSettings();
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c73 = null;
  },
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    if (obj.isWeb()) {
      mediaEngineStore.startDavePreload();
    }
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(state) {
    state = state.state;
    if (constants3.CONNECTING === state) {
      if (!closure_79) {
        store3.enable().then(() => disabledLocalVideos(table[44]).dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: true, unmute: false }));
        const enableResult = store3.enable();
      }
    } else if (tmp.RTC_CONNECTING === state) {
      c103 = false;
      c105 = undefined;
      c106 = undefined;
      c102 = false;
      c134 = false;
      timeout3.stop();
      timeout2.stop();
      navigation.reset();
    } else if (tmp.RTC_CONNECTED === state) {
      updateVideo();
    } else if (tmp.DISCONNECTED === state) {
      closure_140 = {};
      let DEFAULT2;
      let disabledLocalVideos;
      if (0 !== set1.size) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
        disabledLocalVideos = getSettings(DEFAULT2).disabledLocalVideos;
        const item = arr.forEach((arg0) => {
          closure_0 = arg0;
          disabledLocalVideos(closure_1_3[73])(disabledLocalVideos[arg0], "If you are auto-disabled, then you are also disabled.");
          delete tmp[tmp2];
          closure_1_72.eachConnection((setLocalVideoDisabled) => setLocalVideoDisabled.setLocalVideoDisabled(closure_0, false), closure_0);
        });
        arr.clear();
        obj = { disabledLocalVideos: null };
        obj[0] = disabledLocalVideos;
        let DEFAULT = DEFAULT2;
        if (DEFAULT2 === undefined) {
          DEFAULT = tmp29.DEFAULT;
        }
        if (DEFAULT === undefined) {
          DEFAULT = tmp29.DEFAULT;
        }
        let tmp3 = dependencyMap[DEFAULT];
        if (null == tmp3) {
          obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
          obj[0] = InputModes.VOICE_ACTIVITY;
          obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
          obj[1] = DEFAULT2(500).isPlatformEmbedded || false;
          obj[7] = [];
          obj[1] = obj;
          obj[17] = {};
          obj[18] = {};
          obj[19] = {};
          obj[20] = {};
          obj1 = {};
          const merged = Object.assign(closure_34);
          obj[21] = obj1;
          obj[23] = {};
          obj[24] = closure_40;
          obj[25] = closure_40;
          obj[26] = DEFAULT_DEVICE_ID;
          obj[27] = DEFAULT_DEVICE_ID;
          obj[28] = DEFAULT_DEVICE_ID;
          obj[31] = store3.supports(Features.VIDEO_HOOK);
          dependencyMap[DEFAULT] = obj;
          tmp3 = obj;
          const tmp5 = DEFAULT2(500).isPlatformEmbedded || false;
        }
        const _Object = Object;
        const merged1 = Object.assign(tmp3, obj);
      }
      resetProbingState();
    }
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function handleSetTemporarySelfMute(mute) {
    mute = mute.mute;
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleToggleSelfMute(context) {
    context = context.context;
    const tmp = getSettings(context);
    let flag = tmp.deaf;
    if (context === MediaEngineContextTypes.DEFAULT) {
      obj = importDefaultResult;
      const permission = obj.requestPermission(NativePermissionTypes.AUDIO);
      if (c92) {
        return false;
      }
    }
    let tmp8 = !flag;
    if (!flag) {
      tmp8 = !tmp.mute;
    }
    if (!tmp8) {
      flag = false;
    }
    if (!context.playSoundEffect) {
      c97 = true;
    }
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = tmp2.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = tmp2.DEFAULT;
    }
    let tmp9 = dependencyMap[DEFAULT];
    if (null == tmp9) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp9 = obj;
      const tmp10 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp9, { mute: tmp8, deaf: flag });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_SET_SELF_MUTE: function handleSetSelfMute(context) {
    let DEFAULT = context.context;
    obj = { mute: context.mute };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = dependencyMap[DEFAULT];
    if (null == tmp3) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    if (!context.playSoundEffect) {
      c97 = true;
    }
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_DEAF: function handleToggleSelfDeafen(context) {
    context = context.context;
    obj = { deaf: !getSettings(context).deaf };
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = dependencyMap[DEFAULT];
    if (null == tmp3) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function handleToggleLocalMute(arg0) {
    ({ context, userId } = arg0);
    let localMutes;
    if (userId !== store.getId()) {
      localMutes = getSettings(context).localMutes;
      if (localMutes[userId]) {
        delete tmp[tmp2];
      } else {
        localMutes[userId] = true;
      }
      obj = { localMutes: null };
      obj[0] = localMutes;
      let DEFAULT = context;
      if (context === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp6 = dependencyMap[DEFAULT];
      if (null == tmp6) {
        obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj[0] = InputModes.VOICE_ACTIVITY;
        obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
        obj[1] = userId(500).isPlatformEmbedded || false;
        obj[7] = [];
        obj[1] = obj;
        obj[17] = {};
        obj[18] = {};
        obj[19] = {};
        obj[20] = {};
        obj1 = {};
        const merged = Object.assign(closure_34);
        obj[21] = obj1;
        obj[23] = {};
        obj[24] = closure_40;
        obj[25] = closure_40;
        obj[26] = DEFAULT_DEVICE_ID;
        obj[27] = DEFAULT_DEVICE_ID;
        obj[28] = DEFAULT_DEVICE_ID;
        obj[31] = store3.supports(Features.VIDEO_HOOK);
        dependencyMap[DEFAULT] = obj;
        tmp6 = obj;
        const tmp8 = userId(500).isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp6, obj);
      const Storage = userId(595).Storage;
      result = Storage.set(MediaEngineStore, dependencyMap);
      store3.eachConnection((setLocalMute) => {
        let flag = localMutes[userId];
        if (!flag) {
          flag = false;
        }
        return setLocalMute.setLocalMute(userId, flag);
      }, context);
    }
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleSetLocalVideoDisabled(arg0) {
    ({ context, userId } = arg0);
    ({ videoToggleState, persist, isAutomatic } = arg0);
    let disabledLocalVideos;
    let tmp6 = persist;
    if (persist) {
      tmp6 = isAutomatic;
    }
    disabledLocalVideos(38)(!tmp6, "These are not allowed to both be true.");
    disabledLocalVideos = getSettings(context).disabledLocalVideos;
    let flag = disabledLocalVideos[userId];
    if (flag == null) {
      flag = false;
    }
    obj = set1;
    const hasItem = set1.has(userId);
    obj1 = obj;
    obj.info("disableVideo=" + videoToggleState === constants5.DISABLED + " currentlyDisabled=" + flag + " currentlyAutoDisabled=" + hasItem + ", isVideoShown=" + videoToggleState === constants5.AUTO_ENABLED || videoToggleState === constants5.MANUAL_ENABLED);
    let tmp15 = hasItem;
    const tmp5 = disabledLocalVideos(38);
    const tmp9 = getSettings;
    if (hasItem) {
      tmp15 = !flag;
    }
    disabledLocalVideos(38)(!tmp15, "If you are auto-disabled, then you are also disabled.");
    if (isAutomatic) {
      isAutomatic = tmp17;
    }
    let tmp19 = context === MediaEngineContextTypes.DEFAULT;
    if (isAutomatic) {
      isAutomatic = tmp19;
    }
    let tmp20 = persist;
    if (persist) {
      tmp20 = tmp17;
    }
    if (tmp20) {
      tmp20 = tmp19;
    }
    obj1.info("changed=" + videoToggleState === constants5.DISABLED !== flag + " isDefaultContext=" + tmp19 + " isUpdateCausedByVideoHealthManager=" + isAutomatic + " isManualToggleByUser=" + tmp20);
    const videoToggleStateMap = tmp9(context).videoToggleStateMap;
    if (!tmp22) {
      videoToggleStateMap[userId] = videoToggleState;
      obj = { videoToggleStateMap: null };
      obj[0] = videoToggleStateMap;
      let DEFAULT = context;
      if (context === undefined) {
        DEFAULT = tmp18.DEFAULT;
      }
      let flag2 = persist;
      if (persist === undefined) {
        flag2 = true;
      }
      if (DEFAULT === undefined) {
        DEFAULT = tmp18.DEFAULT;
      }
      let tmp28 = dependencyMap[DEFAULT];
      if (null == tmp28) {
        obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj[0] = InputModes.VOICE_ACTIVITY;
        obj1 = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
        obj1[1] = userId(500).isPlatformEmbedded || false;
        obj1[7] = [];
        obj[1] = obj1;
        obj[17] = {};
        obj[18] = {};
        obj[19] = {};
        obj[20] = {};
        const obj2 = {};
        const merged = Object.assign(closure_34);
        obj[21] = obj2;
        obj[23] = {};
        obj[24] = closure_40;
        obj[25] = closure_40;
        obj[26] = DEFAULT_DEVICE_ID;
        obj[27] = DEFAULT_DEVICE_ID;
        obj[28] = DEFAULT_DEVICE_ID;
        obj[31] = store3.supports(Features.VIDEO_HOOK);
        dependencyMap[DEFAULT] = obj;
        tmp28 = obj;
        const tmp29 = userId(500).isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp28, obj);
      if (flag2) {
        const Storage = userId(595).Storage;
        result = Storage.set(MediaEngineStore, dependencyMap);
      }
      if (videoToggleState === tmp8.AUTO_PROBING) {
        const rTCConnection = store2.getRTCConnection();
        let obj6 = store2;
        if (rTCConnection != null) {
          const result1 = rTCConnection.pauseStatsCollectionForUser(userId, true);
          obj6 = tmp45;
        }
        tmp45 = store2;
      } else {
        const rTCConnection1 = store2.getRTCConnection();
        obj6 = store2;
        if (rTCConnection1 != null) {
          const result2 = rTCConnection1.pauseStatsCollectionForUser(userId, false);
          obj6 = tmp43;
        }
        tmp43 = store2;
      }
      if (!c126) {
        const _HermesInternal = HermesInternal;
        obj1.info("isAutoDisableAllowed=" + c126 + " - disabling VideoHealthManager");
        const rTCConnection2 = obj6.getRTCConnection();
        if (rTCConnection2 != null) {
          const videoHealthManager = rTCConnection2.getVideoHealthManager();
          if (videoHealthManager != null) {
            videoHealthManager.disable();
          }
        }
      }
      if (isAutomatic) {
        tmp3(13397)(userId, tmp12 ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, tmp11);
        if (tmp12) {
          obj.add(userId);
        } else {
          obj.delete(userId);
        }
      } else if (tmp20) {
        if (hasItem) {
          if (!tmp12) {
            obj1.info("disallowing auto-disable for this session because of manual override by user");
            c126 = false;
            const rTCConnection3 = obj6.getRTCConnection();
            if (rTCConnection3 != null) {
              const videoHealthManager1 = rTCConnection3.getVideoHealthManager();
              if (videoHealthManager1 != null) {
                videoHealthManager1.disable();
              }
            }
            tmp3(13397)(userId, constants12.MANUAL_REENABLE, tmp11);
          }
        }
        tmp3(13397)(userId, tmp12 ? constants12.MANUAL_DISABLE : constants12.MANUAL_ENABLE, tmp11);
      }
      if (tmp19) {
        tmp19 = !tmp12;
      }
      if (tmp19) {
        obj.delete(userId);
      }
      if (tmp12) {
        disabledLocalVideos[userId] = true;
      } else {
        delete tmp[tmp2];
      }
      const obj3 = { disabledLocalVideos: null };
      obj3[0] = disabledLocalVideos;
      let DEFAULT2 = context;
      if (context === undefined) {
        DEFAULT2 = tmp18.DEFAULT;
      }
      if (persist === undefined) {
        persist = true;
      }
      if (DEFAULT2 === undefined) {
        DEFAULT2 = tmp18.DEFAULT;
      }
      let tmp64 = dependencyMap[DEFAULT2];
      if (null == tmp64) {
        const obj4 = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj4[0] = InputModes.VOICE_ACTIVITY;
        const obj5 = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
        obj5[1] = userId(500).isPlatformEmbedded || false;
        obj5[7] = [];
        obj4[1] = obj5;
        obj4[17] = {};
        obj4[18] = {};
        obj4[19] = {};
        obj4[20] = {};
        obj6 = {};
        const merged2 = Object.assign(closure_34);
        obj4[21] = obj6;
        obj4[23] = {};
        obj4[24] = closure_40;
        obj4[25] = closure_40;
        obj4[26] = DEFAULT_DEVICE_ID;
        obj4[27] = DEFAULT_DEVICE_ID;
        obj4[28] = DEFAULT_DEVICE_ID;
        obj4[31] = store3.supports(Features.VIDEO_HOOK);
        dependencyMap[DEFAULT2] = obj4;
        tmp64 = obj4;
        const tmp65 = userId(500).isPlatformEmbedded || false;
      }
      const _Object2 = Object;
      const merged3 = Object.assign(tmp64, obj3);
      if (persist) {
        const Storage2 = userId(595).Storage;
        const result3 = Storage2.set(MediaEngineStore, dependencyMap);
      }
      store3.eachConnection((setLocalVideoDisabled) => {
        let flag = disabledLocalVideos[userId];
        if (flag == null) {
          flag = false;
        }
        return setLocalVideoDisabled.setLocalVideoDisabled(userId, flag);
      }, context);
    } else {
      tmp3(13397)(userId, tmp12 ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, tmp11);
    }
  },
  AUDIO_SET_LOCAL_VOLUME: function handleSetLocalVolume(volume) {
    ({ context, userId } = volume);
    volume = volume.volume;
    if (userId !== store.getId()) {
      const localVolumes = getSettings(context).localVolumes;
      if (volume === tmp3) {
        delete tmp[tmp2];
      } else {
        localVolumes[userId] = volume;
      }
      obj = { localVolumes: null };
      obj[0] = localVolumes;
      let DEFAULT = context;
      if (context === undefined) {
        DEFAULT = tmp26.DEFAULT;
      }
      if (DEFAULT === undefined) {
        DEFAULT = tmp26.DEFAULT;
      }
      let tmp6 = dependencyMap[DEFAULT];
      if (null == tmp6) {
        obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj[0] = InputModes.VOICE_ACTIVITY;
        obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
        obj[1] = userId(500).isPlatformEmbedded || false;
        obj[7] = [];
        obj[1] = obj;
        obj[17] = {};
        obj[18] = {};
        obj[19] = {};
        obj[20] = {};
        obj1 = {};
        const merged = Object.assign(closure_34);
        obj[21] = obj1;
        obj[23] = {};
        obj[24] = closure_40;
        obj[25] = closure_40;
        obj[26] = DEFAULT_DEVICE_ID;
        obj[27] = DEFAULT_DEVICE_ID;
        obj[28] = DEFAULT_DEVICE_ID;
        obj[31] = store3.supports(Features.VIDEO_HOOK);
        dependencyMap[DEFAULT] = obj;
        tmp6 = obj;
        const tmp8 = userId(500).isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp6, obj);
      const Storage = userId(595).Storage;
      result = Storage.set(MediaEngineStore, dependencyMap);
      store3.eachConnection((setLocalVolume) => setLocalVolume.setLocalVolume(userId, volume), context);
      tmp3 = context === MediaEngineContextTypes.STREAM ? closure_41 : closure_40;
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleSetAudioMixerSettings(arg0) {
    ({ context, settings } = arg0);
    if (context === undefined) {
      context = MediaEngineContextTypes.DEFAULT;
    }
    if (context === undefined) {
      context = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = dependencyMap[context];
    if (null == tmp3) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[context] = obj;
      tmp3 = obj;
      const tmp4 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, { audioMixerSettings: settings });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    let supportsResult = true === settings.enabled && apexExperimentDefault2.getConfig({ location: "MediaEngineStore" }).enabled;
    if (supportsResult) {
      supportsResult = store3.supports(Features.SPATIAL_AUDIO);
    }
    c120 = supportsResult;
    obj1 = {};
    const merged2 = Object.assign(settings);
    obj1.enabled = c120;
    store3.setAudioMixerOptions(obj1);
    store3.eachConnection((setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(closure_120), MediaEngineContextTypes.DEFAULT);
  },
  AUDIO_SET_LOCAL_PAN: function handleSetLocalPan(left) {
    ({ context, userId } = left);
    left = left.left;
    const right = left.right;
    const localPans = getSettings(context).localPans;
    localPans[userId] = { left, right };
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = dependencyMap[DEFAULT];
    if (null == tmp3) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = userId(500).isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = userId(500).isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, { localPans });
    const Storage = userId(595).Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.eachConnection((setLocalPan) => setLocalPan.setLocalPan(userId, left, right), context);
  },
  AUDIO_SET_MODE: function handleAudioSetMode(context) {
    let DEFAULT = context.context;
    obj = { mode: context.mode, modeOptions: null };
    obj = {};
    const merged = Object.assign(context.options);
    obj.updatedAt = Date.now();
    obj[1] = obj;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp4 = dependencyMap[DEFAULT];
    if (null == tmp4) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj1 = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj1[1] = set4.isPlatformEmbedded || false;
      obj1[7] = [];
      obj[1] = obj1;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      const obj2 = {};
      const merged1 = Object.assign(closure_34);
      obj[21] = obj2;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp4 = obj;
      const tmp5 = set4.isPlatformEmbedded || false;
    }
    const merged2 = Object.assign(tmp4, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.eachConnection(setInputMode);
  },
  AUDIO_SET_INPUT_VOLUME: function handleAudioSetInputVolume(volume) {
    volume = volume.volume;
    obj = { inputVolume: null };
    obj1 = applyDefault;
    obj[0] = obj1.clamp(volume, 0, closure_40);
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = dependencyMap[DEFAULT];
    if (null == tmp3) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = tmp;
      obj[25] = tmp;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.setInputVolume(volume);
  },
  AUDIO_SET_OUTPUT_VOLUME: function handleAudioSetOutputVolume(volume) {
    volume = volume.volume;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { outputVolume: volume });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.setOutputVolume(volume);
  },
  AUDIO_SET_INPUT_DEVICE: function handleSetInputDevice(id) {
    id = id.id;
    let firstResult = dependencyMap2[id];
    if (firstResult == null) {
      firstResult = tmp[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = applyDefault(tmp);
      const values = obj.values();
      firstResult = values.first();
    }
    if (null != firstResult) {
      id = firstResult.id;
    }
    closure_84 = performance.now();
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp6 = dependencyMap[DEFAULT];
    if (null == tmp6) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp6 = obj;
      const tmp7 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp6, { inputDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.setAudioInputDevice(id);
    if (obj6.isWindows()) {
      if (obj7.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
        let guid;
        if (dependencyMap2[id] != null) {
          guid = tmp22.guid;
        }
        if (null != guid) {
          tmp20(13472)(tmp22.guid, id, obj5);
        }
      }
      obj7 = apexExperimentDefault4;
      tmp20 = importDefault;
    }
    store3.eachConnection(updateConnectionVoiceProcessing);
    c105 = undefined;
    c106 = undefined;
    timeout3.stop();
    c134 = false;
    obj6 = set4;
    if (obj8.getConfig({ location: "MediaEngineStore.handleSetInputDevice" }).resetSilenceWarningOnDeviceChange) {
      c102 = false;
      navigation.reset();
    }
  },
  AUDIO_SET_OUTPUT_DEVICE: function handleSetOutputDevice(id) {
    id = id.id;
    let firstResult = dependencyMap3[id];
    if (firstResult == null) {
      firstResult = tmp[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = applyDefault(tmp);
      const values = obj.values();
      firstResult = values.first();
    }
    if (null != firstResult) {
      id = firstResult.id;
    }
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp6 = dependencyMap[DEFAULT];
    if (null == tmp6) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp6 = obj;
      const tmp7 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp6, { outputDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.setAudioOutputDevice(id);
    store3.eachConnection(updateConnectionVoiceProcessing);
  },
  AUDIO_SET_ACTIVE_INPUT_PROFILE: function handleSetActiveInputProfile(activeInputProfile) {
    obj = { activeInputProfile: activeInputProfile.inputProfile };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.eachConnection((arg0) => {
      callback(arg0);
      callback2(arg0);
    });
    const result1 = store3.setAudioInputBypassSystemProcessing(getSettings().bypassSystemInputProcessing);
    setLoopback();
  },
  AUDIO_SET_ECHO_CANCELLATION: function handleSetEchoCancellation(echoCancellation) {
    obj = { echoCancellation: echoCancellation.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = require("../utils/PlatformUtils.tsx").isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = require("../utils/PlatformUtils.tsx").isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = require("../../discord_common/js/packages/storage/Storage.tsx").Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    _require = closure_13.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
    store3.eachConnection((setEchoCancellation) => setEchoCancellation.setEchoCancellation(closure_0));
    setLoopback();
    trackVoiceProcessing(echoCancellation.location);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION: function handleSetSidechainCompression(enabled) {
    obj = { sidechainCompression: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    const result1 = store3.setSidechainCompression(tmp.sidechainCompression);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function handleSetSidechainCompressionStrength(sidechainCompressionStrength) {
    obj = { sidechainCompressionStrength: sidechainCompressionStrength.strength };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    const result1 = store3.setSidechainCompressionStrength(tmp.sidechainCompressionStrength);
  },
  AUDIO_SET_LOOPBACK: function handleSetLoopback(loopbackReason) {
    loopbackReason = loopbackReason.loopbackReason;
    if (loopbackReason.enabled) {
      obj.add(loopbackReason);
    } else {
      obj.delete(loopbackReason);
    }
    setLoopback();
  },
  AUDIO_SET_NOISE_SUPPRESSION: function handleSetNoiseSuppression(enabled) {
    obj = { noiseSuppression: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = require("../utils/PlatformUtils.tsx").isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = require("../utils/PlatformUtils.tsx").isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = require("../../discord_common/js/packages/storage/Storage.tsx").Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    _require = closure_13.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
    store3.eachConnection((setNoiseSuppression) => setNoiseSuppression.setNoiseSuppression(closure_0));
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function handleSetAutomaticGainControl(automaticGainControl) {
    obj = { automaticGainControl: automaticGainControl.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = obj(500).isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      let merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = obj(500).isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = obj(595).Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    obj = tmp;
    store3.eachConnection((setAutomaticGainControl) => {
      const automaticGainControl = obj.automaticGainControl;
      obj = { enabled: automaticGainControl };
      obj = { location: "getAutomaticGainControlConfig", disable: !automaticGainControl };
      const merged = Object.assign(obj(closure_1_3[30]).getAGC2ExperimentConfig(obj).noiseCancellationConfig);
      result = setAutomaticGainControl.setAutomaticGainControl(obj);
    });
    setLoopback();
    trackVoiceProcessing(automaticGainControl.location);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleSetNoiseCancellation(enabled) {
    obj = { noiseCancellation: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = obj(500).isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = obj(500).isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = obj(595).Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    obj = tmp;
    store3.eachConnection((setNoiseCancellation) => {
      const noiseCancellation = obj.noiseCancellation;
      const tmp2Result = closure_1_1(closure_1_3[45])(noiseCancellation, closure_1_69.getSystemMicrophoneMode());
      if (tmp2Result !== noiseCancellation) {
        closure_1_57.info("Falling back to system noise suppression.");
      }
      setNoiseCancellation.setNoiseCancellation(tmp2Result);
      obj = obj(closure_1_3[30]);
      obj = { location: "setNoiseCancellation", disable: !tmp2Result };
      result = setNoiseCancellation.setNoiseCancellationDuringProcessing(obj.getAGC2ExperimentConfig(obj).noiseCancellationDuringProcessing);
    });
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_KRISP_MODEL_OVERRIDE: function handleSetKrispModelOverride(model) {
    result = getKrispModelDefault.setKrispModelOverride(model.model);
    model = model.model;
    setLoopback();
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function handleSetSilenceWarning(enabled) {
    obj = { silenceWarning: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
  },
  AUDIO_SET_DEBUG_LOGGING: function handleSetDebugLogging(enabled) {
    store3.setDebugLogging(enabled.enabled);
  },
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function handleSetKrispSuppressionLevel(level) {
    level = level.level;
    result = getKrispModelDefault.setKrispSuppressionLevel(level);
  },
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function handleSetNoiseCancellationEnableStats(enabled) {
    if (!obj.isWeb()) {
      enabled = enabled.enabled;
      const setNoiseCancellationEnableStats = store3.setNoiseCancellationEnableStats;
      if (setNoiseCancellationEnableStats != null) {
        result = setNoiseCancellationEnableStats(enabled.enabled);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function handleSetVideoHook(enabled) {
    obj = { videoHook: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function handleSetExperimentalSoundshare(enabled) {
    obj = { experimentalSoundshare2: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
  },
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function handleSetUseSystemScreensharePicker(enabled) {
    obj = { useSystemScreensharePicker: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
  },
  AUDIO_SET_ATTENUATION: function handleSetAttenuation(attenuation) {
    obj = undefined;
    obj = { attenuation: attenuation.attenuation, attenuateWhileSpeakingSelf: attenuation.attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers: attenuation.attenuateWhileSpeakingOthers };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = obj(500).isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = obj(500).isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = obj(595).Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    obj = tmp;
    store3.eachConnection((setAttenuation) => setAttenuation.setAttenuation(obj.attenuation, obj.attenuateWhileSpeakingSelf, obj.attenuateWhileSpeakingOthers));
  },
  AUDIO_SET_QOS: function handleSetQoS(enabled) {
    enabled = enabled.enabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = enabled(500).isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = enabled(500).isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { qos: enabled });
    const Storage = enabled(595).Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.eachConnection((setQoS) => setQoS.setQoS(enabled));
  },
  MEDIA_ENGINE_DEVICES: function handleDevices(videoDevices) {
    const intl = require("../intl/index.native.tsx").intl;
    _require = videoDevices;
    const arr = videoDevices[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[constants8.AUDIO_INPUT]];
    if (0 === arr.length) {
      obj = { id: null, index: 0, name: null, disabled: true, guid: "call", hardwareId: "withTiming", containerId: "hd" };
      obj[0] = DEFAULT_DEVICE_ID;
      obj[2] = tmp5;
      obj = {};
      obj[obj.id] = obj;
      let valueResult = obj;
    } else {
      const mapped = applyDefault(arr).map((id) => {
        obj = { id: id.id, index: id.index, name: id.name, disabled: false, facing: id.facing, guid: id.originalId, hardwareId: id.hardwareId, containerId: id.containerId, effects: id.effects, formFactor: null, windowsDeviceService: null };
        ({ inputDevices, outputDevices, videoDevices } = closure_0);
        if ("videoinput" === id.type !== true) {
          closure_0 = id;
          if (null != videoDevices.find((containerId) => {
            let tmp = null != containerId.containerId;
            if (tmp) {
              tmp = containerId.containerId === id.containerId;
            }
            if (!tmp) {
              let tmp3 = null != containerId.hardwareId;
              if (tmp3) {
                tmp3 = containerId.hardwareId === id.hardwareId;
              }
              tmp = tmp3;
            }
            if (!tmp) {
              let tmp5 = null != containerId.originalId;
              if (tmp5) {
                tmp5 = containerId.originalId === id.originalId;
              }
              tmp = tmp5;
            }
            return tmp;
          }) !== true) {
            const items = ["builtin", "displayport", "hdmi"];
            let str = id.macosTransportType;
            if (str == null) {
              str = "";
            }
            if (items.includes(str) !== true) {
              let isMatch = null != id.hardwareId;
              if (isMatch) {
                isMatch = closure_1_155.test(id.hardwareId);
              }
              if (isMatch !== true) {
                if (obj2.startsWith("BTHENUM") !== true) {
                  const items1 = ["bluetooth", "bluetoothle"];
                  let str2 = id.macosTransportType;
                  if (str2 == null) {
                    str2 = "";
                  }
                  if (items1.includes(str2) !== true) {
                    const items2 = ["airplay", "continuitycapturewireless"];
                    let str3 = id.macosTransportType;
                    if (str3 == null) {
                      str3 = "";
                    }
                    if (items2.includes(str3) === true) {
                      let WEBCAM = closure_1_68.AIRPLAY;
                    } else {
                      let tmp3 = "audioinput" === id.type;
                      if (tmp3) {
                        closure_0 = id;
                        tmp3 = null != outputDevices.find((containerId) => {
                          let tmp = null != containerId.containerId;
                          if (tmp) {
                            tmp = containerId.containerId === id.containerId;
                          }
                          if (!tmp) {
                            let tmp3 = null != containerId.hardwareId;
                            if (tmp3) {
                              tmp3 = containerId.hardwareId === id.hardwareId;
                            }
                            tmp = tmp3;
                          }
                          if (!tmp) {
                            let tmp5 = null != containerId.originalId;
                            if (tmp5) {
                              tmp5 = containerId.originalId === id.originalId;
                            }
                            tmp = tmp5;
                          }
                          return tmp;
                        });
                      }
                      if (tmp3 === true) {
                        WEBCAM = closure_1_68.HEADSET;
                      } else {
                        let tmp4 = "audiooutput" === id.type;
                        if (tmp4) {
                          closure_0 = id;
                          tmp4 = null != inputDevices.find((containerId) => {
                            let tmp = null != containerId.containerId;
                            if (tmp) {
                              tmp = containerId.containerId === id.containerId;
                            }
                            if (!tmp) {
                              let tmp3 = null != containerId.hardwareId;
                              if (tmp3) {
                                tmp3 = containerId.hardwareId === id.hardwareId;
                              }
                              tmp = tmp3;
                            }
                            if (!tmp) {
                              let tmp5 = null != containerId.originalId;
                              if (tmp5) {
                                tmp5 = containerId.originalId === id.originalId;
                              }
                              tmp = tmp5;
                            }
                            return tmp;
                          });
                        }
                      }
                    }
                  }
                }
                WEBCAM = closure_1_68.BLUETOOTH;
                obj2 = closure_1_1(closure_1_3[33])(id.hardwareId);
              }
            }
            WEBCAM = closure_1_68.INTEGRATED;
          }
          obj[9] = WEBCAM;
          obj[10] = id.windowsDeviceService;
          return obj;
        }
        WEBCAM = closure_1_68.WEBCAM;
      });
      const arr2 = applyDefault(arr);
      valueResult = mapped.keyBy("id").value();
      const iter = mapped.keyBy("id");
    }
    let obj3 = applyDefault;
    if (!obj3.isEqual(valueResult, valueResult)) {
      let id = getSettings().inputDeviceId;
      let firstResult = valueResult[id];
      if (firstResult == null) {
        firstResult = tmp11[DEFAULT_DEVICE_ID];
      }
      if (firstResult == null) {
        let obj4 = tmp9(12)(tmp11);
        let values = obj4.values();
        firstResult = values.first();
      }
      if (null != firstResult) {
        id = firstResult.id;
      }
      store3.setAudioInputDevice(id);
      if (tmp3Result.isWindows()) {
        let tmp9Result = tmp9(13471);
        if (tmp9Result.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
          let guid;
          if (valueResult[id] != null) {
            guid = tmp18.guid;
          }
          if (null != guid) {
            tmp9(13472)(tmp18.guid, id, obj7);
          }
        }
      }
      store3.eachConnection(updateConnectionVoiceProcessing);
      tmp3Result = tmp3(500);
    }
    const intl2 = tmp3(1236).intl;
    _require = videoDevices;
    const arr3 = videoDevices[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[constants8.AUDIO_OUTPUT]];
    if (0 === arr3.length) {
      obj1 = { id: null, index: 0, name: null, disabled: true, guid: "call", hardwareId: "withTiming", containerId: "hd" };
      obj1[0] = DEFAULT_DEVICE_ID;
      obj1[2] = tmp24;
      let obj2 = {};
      obj2[obj1.id] = obj1;
      valueResult = obj2;
    } else {
      const mapped1 = tmp9(12)(arr3).map((id) => {
        obj = { id: id.id, index: id.index, name: id.name, disabled: false, facing: id.facing, guid: id.originalId, hardwareId: id.hardwareId, containerId: id.containerId, effects: id.effects, formFactor: null, windowsDeviceService: null };
        ({ inputDevices, outputDevices, videoDevices } = closure_0);
        if ("videoinput" === id.type !== true) {
          closure_0 = id;
          if (null != videoDevices.find((containerId) => {
            let tmp = null != containerId.containerId;
            if (tmp) {
              tmp = containerId.containerId === id.containerId;
            }
            if (!tmp) {
              let tmp3 = null != containerId.hardwareId;
              if (tmp3) {
                tmp3 = containerId.hardwareId === id.hardwareId;
              }
              tmp = tmp3;
            }
            if (!tmp) {
              let tmp5 = null != containerId.originalId;
              if (tmp5) {
                tmp5 = containerId.originalId === id.originalId;
              }
              tmp = tmp5;
            }
            return tmp;
          }) !== true) {
            const items = ["builtin", "displayport", "hdmi"];
            let str = id.macosTransportType;
            if (str == null) {
              str = "";
            }
            if (items.includes(str) !== true) {
              let isMatch = null != id.hardwareId;
              if (isMatch) {
                isMatch = closure_1_155.test(id.hardwareId);
              }
              if (isMatch !== true) {
                if (obj2.startsWith("BTHENUM") !== true) {
                  const items1 = ["bluetooth", "bluetoothle"];
                  let str2 = id.macosTransportType;
                  if (str2 == null) {
                    str2 = "";
                  }
                  if (items1.includes(str2) !== true) {
                    const items2 = ["airplay", "continuitycapturewireless"];
                    let str3 = id.macosTransportType;
                    if (str3 == null) {
                      str3 = "";
                    }
                    if (items2.includes(str3) === true) {
                      let WEBCAM = closure_1_68.AIRPLAY;
                    } else {
                      let tmp3 = "audioinput" === id.type;
                      if (tmp3) {
                        closure_0 = id;
                        tmp3 = null != outputDevices.find((containerId) => {
                          let tmp = null != containerId.containerId;
                          if (tmp) {
                            tmp = containerId.containerId === id.containerId;
                          }
                          if (!tmp) {
                            let tmp3 = null != containerId.hardwareId;
                            if (tmp3) {
                              tmp3 = containerId.hardwareId === id.hardwareId;
                            }
                            tmp = tmp3;
                          }
                          if (!tmp) {
                            let tmp5 = null != containerId.originalId;
                            if (tmp5) {
                              tmp5 = containerId.originalId === id.originalId;
                            }
                            tmp = tmp5;
                          }
                          return tmp;
                        });
                      }
                      if (tmp3 === true) {
                        WEBCAM = closure_1_68.HEADSET;
                      } else {
                        let tmp4 = "audiooutput" === id.type;
                        if (tmp4) {
                          closure_0 = id;
                          tmp4 = null != inputDevices.find((containerId) => {
                            let tmp = null != containerId.containerId;
                            if (tmp) {
                              tmp = containerId.containerId === id.containerId;
                            }
                            if (!tmp) {
                              let tmp3 = null != containerId.hardwareId;
                              if (tmp3) {
                                tmp3 = containerId.hardwareId === id.hardwareId;
                              }
                              tmp = tmp3;
                            }
                            if (!tmp) {
                              let tmp5 = null != containerId.originalId;
                              if (tmp5) {
                                tmp5 = containerId.originalId === id.originalId;
                              }
                              tmp = tmp5;
                            }
                            return tmp;
                          });
                        }
                      }
                    }
                  }
                }
                WEBCAM = closure_1_68.BLUETOOTH;
                obj2 = closure_1_1(closure_1_3[33])(id.hardwareId);
              }
            }
            WEBCAM = closure_1_68.INTEGRATED;
          }
          obj[9] = WEBCAM;
          obj[10] = id.windowsDeviceService;
          return obj;
        }
        WEBCAM = closure_1_68.WEBCAM;
      });
      const arr4 = tmp9(12)(arr3);
      valueResult = mapped1.keyBy("id").value();
      const iter2 = mapped1.keyBy("id");
    }
    tmp9Result = tmp9(12);
    if (!tmp9Result.isEqual(valueResult, valueResult)) {
      let id2 = getSettings().outputDeviceId;
      let firstResult1 = valueResult[id2];
      if (firstResult1 == null) {
        firstResult1 = tmp28[DEFAULT_DEVICE_ID];
      }
      if (firstResult1 == null) {
        values = tmp9(12)(tmp28).values();
        firstResult1 = values.first();
        const obj14 = tmp9(12)(tmp28);
      }
      if (null != firstResult1) {
        id2 = firstResult1.id;
      }
      store3.setAudioOutputDevice(id2);
      store3.eachConnection(updateConnectionVoiceProcessing);
      const _Object = Object;
      const values1 = Object.values(tmp23);
      const _Object2 = Object;
      const values2 = Object.values(valueResult);
      const someResult1 = values2.some((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes("dualsense");
      });
      if (someResult !== someResult1) {
        _require = someResult1;
        obj16.eachConnection((context) => {
          if (context.context === closure_1_47.STREAM) {
            result = context.setSoundshareDiscardRearChannels(closure_0);
          }
        });
      }
      obj16 = store3;
      someResult = values1.some((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes("dualsense");
      });
    }
    closure_101 = videoDevices.videoDevices.length > 0;
    const intl3 = tmp3(1236).intl;
    _require = videoDevices;
    const arr5 = videoDevices[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[constants8.VIDEO_INPUT]];
    if (0 === arr5.length) {
      obj3 = { id: null, index: 0, name: null, disabled: true, guid: "call", hardwareId: "withTiming", containerId: "hd" };
      obj3[0] = DEFAULT_DEVICE_ID;
      obj3[2] = tmp41;
      obj4 = {};
      obj4[obj3.id] = obj3;
      let valueResult1 = obj4;
    } else {
      const mapped2 = tmp9(12)(arr5).map((id) => {
        obj = { id: id.id, index: id.index, name: id.name, disabled: false, facing: id.facing, guid: id.originalId, hardwareId: id.hardwareId, containerId: id.containerId, effects: id.effects, formFactor: null, windowsDeviceService: null };
        ({ inputDevices, outputDevices, videoDevices } = closure_0);
        if ("videoinput" === id.type !== true) {
          closure_0 = id;
          if (null != videoDevices.find((containerId) => {
            let tmp = null != containerId.containerId;
            if (tmp) {
              tmp = containerId.containerId === id.containerId;
            }
            if (!tmp) {
              let tmp3 = null != containerId.hardwareId;
              if (tmp3) {
                tmp3 = containerId.hardwareId === id.hardwareId;
              }
              tmp = tmp3;
            }
            if (!tmp) {
              let tmp5 = null != containerId.originalId;
              if (tmp5) {
                tmp5 = containerId.originalId === id.originalId;
              }
              tmp = tmp5;
            }
            return tmp;
          }) !== true) {
            const items = ["builtin", "displayport", "hdmi"];
            let str = id.macosTransportType;
            if (str == null) {
              str = "";
            }
            if (items.includes(str) !== true) {
              let isMatch = null != id.hardwareId;
              if (isMatch) {
                isMatch = closure_1_155.test(id.hardwareId);
              }
              if (isMatch !== true) {
                if (obj2.startsWith("BTHENUM") !== true) {
                  const items1 = ["bluetooth", "bluetoothle"];
                  let str2 = id.macosTransportType;
                  if (str2 == null) {
                    str2 = "";
                  }
                  if (items1.includes(str2) !== true) {
                    const items2 = ["airplay", "continuitycapturewireless"];
                    let str3 = id.macosTransportType;
                    if (str3 == null) {
                      str3 = "";
                    }
                    if (items2.includes(str3) === true) {
                      let WEBCAM = closure_1_68.AIRPLAY;
                    } else {
                      let tmp3 = "audioinput" === id.type;
                      if (tmp3) {
                        closure_0 = id;
                        tmp3 = null != outputDevices.find((containerId) => {
                          let tmp = null != containerId.containerId;
                          if (tmp) {
                            tmp = containerId.containerId === id.containerId;
                          }
                          if (!tmp) {
                            let tmp3 = null != containerId.hardwareId;
                            if (tmp3) {
                              tmp3 = containerId.hardwareId === id.hardwareId;
                            }
                            tmp = tmp3;
                          }
                          if (!tmp) {
                            let tmp5 = null != containerId.originalId;
                            if (tmp5) {
                              tmp5 = containerId.originalId === id.originalId;
                            }
                            tmp = tmp5;
                          }
                          return tmp;
                        });
                      }
                      if (tmp3 === true) {
                        WEBCAM = closure_1_68.HEADSET;
                      } else {
                        let tmp4 = "audiooutput" === id.type;
                        if (tmp4) {
                          closure_0 = id;
                          tmp4 = null != inputDevices.find((containerId) => {
                            let tmp = null != containerId.containerId;
                            if (tmp) {
                              tmp = containerId.containerId === id.containerId;
                            }
                            if (!tmp) {
                              let tmp3 = null != containerId.hardwareId;
                              if (tmp3) {
                                tmp3 = containerId.hardwareId === id.hardwareId;
                              }
                              tmp = tmp3;
                            }
                            if (!tmp) {
                              let tmp5 = null != containerId.originalId;
                              if (tmp5) {
                                tmp5 = containerId.originalId === id.originalId;
                              }
                              tmp = tmp5;
                            }
                            return tmp;
                          });
                        }
                      }
                    }
                  }
                }
                WEBCAM = closure_1_68.BLUETOOTH;
                obj2 = closure_1_1(closure_1_3[33])(id.hardwareId);
              }
            }
            WEBCAM = closure_1_68.INTEGRATED;
          }
          obj[9] = WEBCAM;
          obj[10] = id.windowsDeviceService;
          return obj;
        }
        WEBCAM = closure_1_68.WEBCAM;
      });
      const arr6 = tmp9(12)(arr5);
      valueResult1 = mapped2.keyBy("id").value();
      const iter3 = mapped2.keyBy("id");
    }
    if (c94) {
      if (!tmp9Result1.isEqual(valueResult1, tmp40)) {
        let tmp48 = DISABLED_DEVICE_ID === DEFAULT_DEVICE_ID;
        if (tmp48) {
          let disabled;
          if (tmp40[DEFAULT_DEVICE_ID] != null) {
            disabled = tmp49.disabled;
          }
          tmp48 = disabled;
        }
        let tmp52 = "Firefox" === tmp9(4789).name;
        if (tmp52) {
          tmp52 = "" === DISABLED_DEVICE_ID;
        }
        if (tmp52) {
          let name;
          if (tmp40[DISABLED_DEVICE_ID] != null) {
            name = tmp55.name;
          }
          tmp52 = "Default" === name;
        }
        if (tmp52) {
          let disabled1;
          if (tmp40[DISABLED_DEVICE_ID] != null) {
            disabled1 = tmp59.disabled;
          }
          tmp52 = !disabled1;
        }
        let tmp62 = undefined !== valueResult1[DISABLED_DEVICE_ID];
        if (!tmp62) {
          tmp62 = tmp48;
        }
        if (!tmp62) {
          tmp62 = tmp52;
        }
        updateVideo(tmp62);
        const tmp63 = updateVideo;
      }
      tmp9Result1 = tmp9(12);
    }
  },
  AUDIO_VOLUME_CHANGE: function handleVolumeChange(arg0) {
    obj = { inputVolume: null, outputVolume: null };
    ({ inputVolume, outputVolume } = arg0);
    obj1 = applyDefault;
    obj[0] = obj1.clamp(inputVolume, 0, closure_40);
    obj[1] = outputVolume;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = dependencyMap[DEFAULT];
    if (null == tmp3) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = tmp;
      obj[25] = tmp;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
  },
  AUDIO_RESET: function handleReset() {
    const Storage = Storage6.Storage;
    Storage.remove(MediaEngineStore);
  },
  AUDIO_INPUT_DETECTED: function handleInputDetected(inputDetected) {
    inputDetected = inputDetected.inputDetected;
    if (null == inputDetected) {
      return false;
    } else {
      closure_103 = true !== c102 && !inputDetected;
      if (inputDetected) {
        c102 = true;
        c134 = false;
        timeout3.stop();
        timeout2.stop();
      } else if (getSettings().mode === InputModes.VOICE_ACTIVITY) {
        if (c102) {
          const config = apexExperimentDefault5.getConfig({ location: "MediaEngineStore.handleInputDetected" });
          const resetSilenceWarningAfterNMinutes = config.resetSilenceWarningAfterNMinutes;
          if (config.enableHardwareSilenceWarning) {
            timeout3.start(MINUTE, () => {
              obj = callback(table[43]);
              let id = callback2().inputDeviceId;
              let firstResult = table2[id];
              if (firstResult == null) {
                firstResult = tmp3[closure_42];
              }
              if (firstResult == null) {
                const values = callback(table[33])(tmp3).values();
                firstResult = values.first();
                const obj2 = callback(table[33])(tmp3);
              }
              if (null != firstResult) {
                id = firstResult.id;
              }
              let name;
              if (table2[id] != null) {
                name = tmp6.name;
              }
              obj = { input_device_name: name, rtc_connection_id: rTCConnectionId.getRTCConnectionId() };
              obj.track(constants.HARDWARE_MUTE_GUESSED, obj);
              c134 = true;
              closure_69.emitChange();
            });
          }
          if (null != resetSilenceWarningAfterNMinutes) {
            timeout2.start(resetSilenceWarningAfterNMinutes * tmp3(687).Millis.MINUTE, () => {
              c102 = false;
              navigation.reset();
            });
          }
          obj = apexExperimentDefault5;
          tmp3 = importDefault;
        }
      }
    }
  },
  AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function handleOSConfigFetchSuccess(arg0) {
    ({ osVolume: c106, osMuted: c105 } = arg0);
  },
  AUDIO_SET_SUBSYSTEM: function handleSetAudioSubsystem(subsystem) {
    setAudioSubsystem(subsystem.subsystem);
  },
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function handleBypassSystemInputProcessing(bypassEnabled) {
    bypassEnabled = bypassEnabled.bypassEnabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { bypassSystemInputProcessing: bypassEnabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    const result1 = store3.setAudioInputBypassSystemProcessing(bypassEnabled);
    const tmp16 = getSettings();
    const inputDeviceId = tmp16.inputDeviceId;
    const obj4 = closure_13;
    const tmp12 = require;
    const tmp17 = closure_13.hasEchoCancellation(inputDeviceId) || tmp16.echoCancellation;
    const tmp18 = closure_13.hasNoiseSuppression(inputDeviceId) || tmp16.noiseSuppression;
    const tmp19 = setDefault4;
    const tmp19Result = setDefault4(tmp16.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
    const voiceFidelityCaps = getAudioFidelityExperimentConfig.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp19Result, noiseSuppressionEnabled: tmp18, echoCancellationEnabled: tmp17 });
    const result2 = obj3.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
    const result3 = obj3.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
    trackVoiceProcessing(bypassEnabled.location);
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function handleSetAudioEnabled(enabled) {
    enabled = enabled.enabled;
    if (enabled.unmute) {
      let DEFAULT = MediaEngineContextTypes.DEFAULT;
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp2 = dependencyMap[DEFAULT];
      if (null == tmp2) {
        obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj[0] = InputModes.VOICE_ACTIVITY;
        obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
        obj[1] = set4.isPlatformEmbedded || false;
        obj[7] = [];
        obj[1] = obj;
        obj[17] = {};
        obj[18] = {};
        obj[19] = {};
        obj[20] = {};
        obj = {};
        const merged = Object.assign(closure_34);
        obj[21] = obj;
        obj[23] = {};
        obj[24] = closure_40;
        obj[25] = closure_40;
        obj[26] = DEFAULT_DEVICE_ID;
        obj[27] = DEFAULT_DEVICE_ID;
        obj[28] = DEFAULT_DEVICE_ID;
        obj[31] = store3.supports(Features.VIDEO_HOOK);
        dependencyMap[DEFAULT] = obj;
        tmp2 = obj;
        const tmp4 = set4.isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp2, { mute: false, deaf: false });
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore, dependencyMap);
    }
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function handleSetVideoEnabled(enabled) {
    const permission = importDefaultResult.requestPermission(NativePermissionTypes.CAMERA);
    updateVideo(enabled.enabled);
  },
  MEDIA_ENGINE_PERMISSION: function handlePermission(kind) {
    kind = kind.kind;
    if (!kind.granted) {
      if ("audio" === kind) {
        c79 = false;
        store3.eachConnection(updateConnectionMuteDeaf);
      } else if ("video" === kind) {
        updateVideo(false);
      }
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(settings) {
    settings = settings.settings;
    let desktopSettings;
    if (settings != null) {
      desktopSettings = settings.desktopSettings;
    }
    if (null != desktopSettings) {
      desktopSettings = settings.desktopSettings;
      const sourceId = desktopSettings.sourceId;
      let DEFAULT2 = settings.context;
      if (DEFAULT2 == null) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
      }
      let qualityOptions = settings.qualityOptions;
      if (qualityOptions == null) {
        qualityOptions = { resolution: 720, frameRate: 30 };
      }
      const pidFromDesktopSource = setDefault3.getPidFromDesktopSource(sourceId);
      soundshareSession = null;
      soundshareId = null;
      if (set4.isPlatformEmbedded) {
        ({ soundshareId, soundshareSession } = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound));
        const tmp17 = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound);
      }
      if (DEFAULT2 !== DEFAULT2) {
        if (null != closure_74) {
          store3.setGoLiveSource(null, DEFAULT2);
        }
      }
      let tmp25 = DEFAULT2 === MediaEngineContextTypes.STREAM;
      if (tmp25) {
        tmp25 = c94;
      }
      obj = { desktopSource: null, quality: null };
      obj = { id: null, sourcePid: null, soundshareId: null, soundshareSession: null };
      obj[0] = sourceId;
      obj[1] = pidFromDesktopSource;
      obj[2] = soundshareId;
      obj[3] = soundshareSession;
      obj[0] = obj;
      ({ resolution: obj9[0], frameRate: obj9[1] } = qualityOptions);
      obj[1] = { resolution: null, frameRate: null };
      updateVideo(tmp25, obj);
      obj1 = { resolution: null, frameRate: null };
      const obj6 = setDefault3;
      const tmp23 = updateVideo;
    } else {
      let cameraSettings;
      if (settings != null) {
        cameraSettings = settings.cameraSettings;
      }
      if (null != cameraSettings) {
        let DEFAULT = settings.context;
        if (DEFAULT == null) {
          DEFAULT = MediaEngineContextTypes.DEFAULT;
        }
        let tmp8 = DEFAULT === MediaEngineContextTypes.STREAM;
        ({ videoDeviceGuid, audioDeviceGuid, sound } = settings.cameraSettings);
        if (tmp8) {
          tmp8 = c94;
        }
        let qualityOptions1 = settings.qualityOptions;
        if (qualityOptions1 == null) {
          qualityOptions1 = { resolution: 720, frameRate: 30 };
        }
        const obj2 = { cameraSource: null, quality: null };
        const obj3 = { videoDeviceGuid: null, audioDeviceGuid: null, sound: null };
        obj3[0] = videoDeviceGuid;
        obj3[1] = audioDeviceGuid;
        obj3[2] = sound;
        obj2[0] = obj3;
        const obj4 = { resolution: null, frameRate: null };
        ({ resolution: obj4[0], frameRate: obj4[1] } = qualityOptions1);
        obj2[1] = obj4;
        updateVideo(tmp8, obj2);
      } else {
        updateVideo(c94, null);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function handleSetVideoDevice(id) {
    id = id.id;
    let firstResult = dependencyMap4[id];
    if (firstResult == null) {
      firstResult = tmp[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = applyDefault(tmp);
      const values = obj.values();
      firstResult = values.first();
    }
    if (null != firstResult) {
      id = firstResult.id;
    }
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp6 = dependencyMap[DEFAULT];
    if (null == tmp6) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp6 = obj;
      const tmp7 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp6, { videoDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    updateVideo();
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function handleInteractionRequired(required) {
    let flag = required !== required.required;
    if (flag) {
      required = required.required;
      flag = true;
      if (!required.required) {
        store3.interact();
        flag = true;
      }
    }
    return flag;
  },
  USER_SETTINGS_MODAL_INIT: handleUserSettingsModal,
  USER_SETTINGS_MODAL_SET_SECTION: handleUserSettingsModal,
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices() {
    store3.eachConnection(updateConnectionVoiceProcessing);
    return false;
  },
  RPC_APP_CONNECTED: function handleAppConnected(application) {
    set.add(application.application.id);
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnected(application) {
    set.delete(application.application.id);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(mediaEngineState) {
    ({ settingsByContext: closure_77, inputDevices: closure_86, outputDevices: closure_87, appSupported: closure_129, krispModuleLoaded: c109, krispFatalError: c110, krispVersion: c111, goLiveContext: STREAM } = mediaEngineState.mediaEngineState);
  },
  APP_STATE_UPDATE: function handleFocus(state) {
    state = state.state;
    NativeEventEmitterDefault;
    if (state === constants2.BACKGROUND) {
      if (c94) {
        if (!tmp2) {
          c100 = true;
          updateVideo(false);
        }
        return true;
      }
    }
    if (state === constants2.ACTIVE) {
      if (c100) {
        c100 = false;
        updateVideo(true);
      }
    }
    return false;
  },
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(arg0) {
    closure_0 = arg0;
    store3.eachConnection((setBitRate) => setBitRate.setBitRate(bitrate.bitrate));
  },
  SET_VAD_PERMISSION: function handleVADPermissionChange(hasPermission) {
    if (!hasPermission.hasPermission === closure_92) {
      return false;
    } else {
      closure_92 = tmp;
      store3.eachConnection(updateConnectionMuteDeaf);
    }
  },
  SET_NATIVE_PERMISSION: function handleNativePermissionChange(permissionType) {
    permissionType = permissionType.permissionType;
    if (NativePermissionTypes.AUDIO === permissionType) {
      c124 = true;
      store3.eachConnection(updateConnectionMuteDeaf);
    } else if (tmp3.CAMERA === permissionType) {
      let tmp5 = !tmp4;
      if (tmp !== tmp2) {
        tmp5 = c94;
      }
      if (tmp5) {
        updateVideo(false);
      }
    } else {
      return false;
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(arg0) {
    closure_0 = arg0;
    store3.eachConnection((applyVideoQualityMode) => applyVideoQualityMode.applyVideoQualityMode(mode.mode));
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function handleSetAecDump(aecDumpEnabled) {
    obj = { aecDumpEnabled: aecDumpEnabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj1;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    store3.setAecDump(tmp.aecDumpEnabled);
  },
  MEDIA_ENGINE_SET_OPENH264_ENABLED: function handleSetOpenH264Enabled(enabled) {
    enabled = enabled.enabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = dependencyMap[DEFAULT];
    if (null == tmp) {
      obj = { mode: null, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: null, disabledLocalVideos: null, videoToggleStateMap: null, localVolumes: null, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj[0] = InputModes.VOICE_ACTIVITY;
      obj = { threshold: -60, autoThreshold: null, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: null, updatedAt: "ct" };
      obj[1] = set4.isPlatformEmbedded || false;
      obj[7] = [];
      obj[1] = obj;
      obj[17] = {};
      obj[18] = {};
      obj[19] = {};
      obj[20] = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj[21] = obj;
      obj[23] = {};
      obj[24] = closure_40;
      obj[25] = closure_40;
      obj[26] = DEFAULT_DEVICE_ID;
      obj[27] = DEFAULT_DEVICE_ID;
      obj[28] = DEFAULT_DEVICE_ID;
      obj[31] = store3.supports(Features.VIDEO_HOOK);
      dependencyMap[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = set4.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { openH264Enabled: enabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, dependencyMap);
    const tmp13 = sanitizeFilenameDefault;
    if (tmp13 != null) {
      const setOpenH264Enabled = tmp13.setOpenH264Enabled;
      if (setOpenH264Enabled != null) {
        setOpenH264Enabled(enabled);
      }
    }
  },
  MEDIA_ENGINE_RESET_SETTINGS: function handleResetSettings(overrides) {
    overrides = overrides.overrides;
    const values = Object.values(MediaEngineContextTypes);
    closure_77 = values.reduce((arg0, arg1) => {
      obj = { mode: closure_1_20.VOICE_ACTIVITY, modeOptions: { threshold: -60, autoThreshold: overrides(closure_1_3[24]).isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "ct" }, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: null, audioMixerSettingsVersion: 0, localPans: null, inputVolume: null, outputVolume: null, inputDeviceId: null, outputDeviceId: null, videoDeviceId: null, qos: false, qosMigrated: false, videoHook: null, experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = {};
      const merged = Object.assign(closure_1_34);
      obj[21] = obj;
      obj[23] = {};
      obj[24] = closure_1_40;
      obj[25] = closure_1_40;
      obj[26] = closure_1_42;
      obj[27] = closure_1_42;
      obj[28] = closure_1_42;
      obj[31] = closure_1_72.supports(closure_1_46.VIDEO_HOOK);
      const tmp = closure_1_3;
      const tmp2 = overrides(closure_1_3[24]).isPlatformEmbedded || false;
      arg0[arg1] = closure_1_1(closure_1_3[33]).merge(obj, overrides[arg1]);
      return arg0;
    }, {});
    const Storage = overrides(595).Storage;
    result = Storage.set(MediaEngineStore, closure_77);
    applySettings();
  },
  CHANNEL_DELETE: function handleChannelDelete() {
    if (c94) {
      if (null == store2.getRTCConnectionId()) {
        updateVideo(false, null);
      }
    }
    return false;
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function handleNoiseCancellationError(code) {
    if (code.code === NoiseCancellerError.KRISP_CPU_OVERUSE) {
      closure_140.noiseCancellation = false;
      closure_140.noiseSuppression = true;
      closure_0 = getSettings();
      store3.eachConnection((setNoiseCancellation) => {
        const noiseCancellation = lib.noiseCancellation;
        const tmp2Result = closure_1_1(closure_1_3[45])(noiseCancellation, closure_1_69.getSystemMicrophoneMode());
        if (tmp2Result !== noiseCancellation) {
          closure_1_57.info("Falling back to system noise suppression.");
        }
        setNoiseCancellation.setNoiseCancellation(tmp2Result);
        obj = lib(closure_1_3[30]);
        obj = { location: "setNoiseCancellation", disable: !tmp2Result };
        result = setNoiseCancellation.setNoiseCancellationDuringProcessing(obj.getAGC2ExperimentConfig(obj).noiseCancellationDuringProcessing);
      });
      setLoopback();
      trackVoiceProcessing();
      return true;
    } else {
      return false;
    }
  },
  MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function handleVoiceActivityDetectionError(code) {
    let flag = code.code === NoiseCancellerError.KRISP_VAD_CPU_OVERUSE;
    if (flag) {
      closure_140.modeOptions = { vadUseKrisp: false };
      store3.eachConnection((arg0) => {
        callback(arg0);
      });
      flag = true;
    }
    return flag;
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function handleNoiseCancellationErrorReset() {
    let flag = c117;
    if (flag) {
      c117 = false;
      flag = true;
    }
    return flag;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    result = store3.applyMediaFilterSettings(settings.settings);
    result.finally(() => {
      c118 = false;
      closure_69.emitChange();
    });
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function handleApplyMediaFilterSettingsStart() {
    c118 = true;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function handleApplyMediaFilterSettingsError() {
    c118 = false;
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === constants6.PRELOADED_USER_SETTINGS) {
      if (!settings.local) {
        if (null == tmp) {
          applyRemoteSettings(true);
        }
      }
    }
    return false;
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    ({ sourceId, quality } = applicationName);
    obj = isClipsEnabled;
    if (obj.isClipsEnabled()) {
      if (null != setDefault2) {
        let id;
        if (obj != null) {
          id = obj.desktopSource.id;
        }
        if (id === sourceId) {
          if (obj.quality === quality) {
            return false;
          }
        }
        if (null != obj) {
          store3.setClipsSource(null);
          let tmpResult = tmp(500);
          if (tmpResult.isWindows()) {
            if (null != obj.desktopSource.soundshareId) {
              let obj2 = isHookModuleTooOldAll;
              result = obj2.cancelAttachToProcess(obj.desktopSource.soundshareId);
            } else {
              let videoHook = null != obj.desktopSource.sourcePid;
              if (videoHook) {
                videoHook = getSettings().videoHook;
              }
              if (videoHook) {
                obj1 = isHookModuleTooOldAll;
                const result1 = obj1.cancelAttachToProcess(obj.desktopSource.sourcePid);
              }
            }
          }
        }
        let tmp3Result = tmp3(4439);
        const pidFromDesktopSource = tmp3Result.getPidFromDesktopSource(sourceId);
        obj = { desktopSource: null, quality: null };
        obj = { id: null, sourcePid: null, soundshareId: null, soundshareSession: null };
        obj[0] = sourceId;
        obj[1] = pidFromDesktopSource;
        ({ soundshareId: obj6[2], soundshareSession: obj6[3] } = maybeTryHookProcess(pidFromDesktopSource, true));
        obj[0] = obj;
        obj[1] = quality;
        tmpResult = tmp(13402);
        const videoHook2 = getSettings().videoHook;
        let tmp21 = !videoHook2;
        if (videoHook2) {
          const DisableHookFramePacerExperiment = tmp(13408).DisableHookFramePacerExperiment;
          tmp21 = !DisableHookFramePacerExperiment.getConfig({ location: "handleClipsInit" }).enabled;
        }
        let enabled = videoHook2;
        if (videoHook2) {
          const VideoHookDX12Experiment = tmp(13409).VideoHookDX12Experiment;
          enabled = VideoHookDX12Experiment.getConfig({ location: "handleClipsInit" }).enabled;
        }
        const UpscaleSmallCapturedFramesExperiment = tmp(13410).UpscaleSmallCapturedFramesExperiment;
        const config = UpscaleSmallCapturedFramesExperiment.getConfig({ location: "handleClipsInit" });
        obj1 = { id: null, soundshareId: null, useVideoHook: null, useHookFramePacer: null, useGraphicsCapture: null, useCaptureDeviceForEncode: false, useLoopback: null, useQuartzCapturer: true, allowScreenCaptureKit: null, videoHookStaleFrameTimeoutMs: 500, graphicsCaptureStaleFrameTimeoutMs: null, hdrCaptureMode: null, videoHookAllowDx12: null, minCaptureWidth: null, minCaptureHeight: null };
        obj1[0] = obj.desktopSource.id;
        obj1[1] = obj.desktopSource.soundshareId;
        obj1[2] = videoHook2;
        obj1[3] = tmp21;
        ({ minCaptureWidth, minCaptureHeight } = config);
        const obj8 = store3;
        const tmp19 = maybeTryHookProcess(pidFromDesktopSource, true);
        let isWindowsResult = tmp(500).isWindows();
        if (isWindowsResult) {
          tmp3Result = tmp3(13416);
          const tmp3Result1 = tmp3(4072);
          let release;
          if (tmp3Result1 != null) {
            release = tmp3Result1.os.release;
          }
          isWindowsResult = tmp3Result.satisfies(release, closure_29);
        }
        obj1[4] = isWindowsResult;
        obj1[6] = mediaEngineStore.getExperimentalSoundshare();
        const obj12 = mediaEngineStore;
        const tmpResult1 = tmp(500);
        let isMacResult = tmp(500).isMac();
        if (isMacResult) {
          isMacResult = obj8.supports(Features.SCREEN_CAPTURE_KIT);
        }
        if (isMacResult) {
          const tmp3Result3 = tmp3(4072);
          let release1;
          if (tmp3Result3 != null) {
            release1 = tmp3Result3.os.release;
          }
          isMacResult = tmp3(13416).satisfies(release1, closure_24);
          const tmp3Result2 = tmp3(13416);
        }
        obj2 = { desktopDescription: null, quality: null, bitratePercent: null, applicationName: null, videoEncoderExperiments: null };
        obj1[8] = isMacResult;
        obj1[10] = closure_60;
        obj1[11] = tmpResult.getGoLiveHdrConfig({ location: "MediaEngineStore clips" }).hdrCaptureMode;
        obj1[12] = enabled;
        obj1[13] = minCaptureWidth;
        obj1[14] = minCaptureHeight;
        obj2[0] = obj1;
        obj2[1] = quality;
        obj2[2] = quality.bitratePercent;
        obj2[3] = applicationName.applicationName;
        obj2[4] = obj12.getVideoEncoderExperiments(MediaEngineContextTypes.STREAM, "streamer");
        store3.setClipsSource(obj2);
      }
    }
    return false;
  },
  CLIPS_RESTART: function handleClipsRestart() {
    c75 = null;
  },
  CLIPS_SETTINGS_UPDATE: function handleClipsSettingsUpdate(settings) {
    if (false === settings.settings.clipsEnabled) {
      c75 = null;
      store3.setClipsSource(null);
    }
  },
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function handleSetEnableHardwareMuteNotice(enabled) {
    enabled = enabled.enabled;
  },
  MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function handleSetDeviceAudioEffects(active) {
    closure_121[active.deviceId] = { active: active.active, available: active.available };
    const tmp = getSettings();
    const inputDeviceId = tmp.inputDeviceId;
    obj = closure_13;
    const tmp2 = closure_13.hasEchoCancellation(inputDeviceId) || tmp.echoCancellation;
    const tmp3 = closure_13.hasNoiseSuppression(inputDeviceId) || tmp.noiseSuppression;
    const tmp4 = setDefault4;
    const tmp4Result = setDefault4(tmp.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
    const voiceFidelityCaps = getAudioFidelityExperimentConfig.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp4Result, noiseSuppressionEnabled: tmp3, echoCancellationEnabled: tmp2 });
    result = store3.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
    const result1 = store3.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
  }
});
let result1 = set.fileFinishedImporting("stores/MediaEngineStore.tsx");

export default mediaEngineStore;
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
export const LINUX_OPENH264_URL = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
export const LINUX_OPENH264_SHA256 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
export const DeviceFormFactor = obj;