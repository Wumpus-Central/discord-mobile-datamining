// discord_app/stores/MediaEngineStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import _modDef38 from "../../_runtime/metro/00038__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage6 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import SentryUtilsDefault from "../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import DiscordNativeDefault from "../lib/DiscordNative.tsx";
import CrossPlatformNativeUtilsDefault from "../utils/CrossPlatformNativeUtils.native.tsx";
import _modDef4883 from "../../_runtime/metro/04883__.js";
import DesktopNativeUtilsDefault from "../utils/web/DesktopNativeUtils.tsx";
import AVError from "../modules/errors/av_errors/AVError.tsx";
import ExternalPipDefault from "../modules/external_pip/ExternalPip.android.tsx";
import MediaEngineActionCreators from "../modules/media_engine/MediaEngineActionCreators.tsx";
import MobileAudioOutputExperimentDefault from "../modules/media_engine/MobileAudioOutputExperiment.tsx";
import getEffectiveNoiseCancellationDefault from "../modules/noise_cancellation/getEffectiveNoiseCancellation.tsx";
import VideoGuardExperiment2 from "../modules/media_engine/VideoGuardExperiment.tsx";
import isClipsEnabled from "../modules/clips/isClipsEnabled.tsx";
import KrispUtilsDefault from "../modules/noise_cancellation/KrispUtils.tsx";
import NativeMuteManagerDefault from "../modules/calls/NativeMuteManager.native.tsx";
import SpatialAudioForVoiceExperimentDefault from "../modules/voice_panel/SpatialAudioForVoiceExperiment.tsx";
import trackVideoToggleDefault from "../modules/media_engine/trackVideoToggle.tsx";
import GoLiveHdrExperiment from "../modules/media_engine/GoLiveHdrExperiment.tsx";
import StreamZeroVadLeadingExperiment2 from "../modules/media_engine/StreamZeroVadLeadingExperiment.tsx";
import PTTEducationExperimentDefault from "../modules/voice_calls/PTTEducationExperiment.tsx";
import MuteAwareNoiseCancellationExperiment from "../modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx";
import HookAll from "../lib/hook/Hook.native.tsx";
import WGCDirtyRegionsExperiment2 from "../modules/media_engine/WGCDirtyRegionsExperiment.tsx";
import WGCDirtyRegionsAllExperiment2 from "../modules/media_engine/WGCDirtyRegionsAllExperiment.tsx";
import DisableHookFramePacerExperiment2 from "../modules/media_engine/DisableHookFramePacerExperiment.tsx";
import VideoHookDX12Experiment2 from "../modules/media_engine/VideoHookDX12Experiment.tsx";
import UpscaleSmallCapturedFramesExperiment2 from "../modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx";
import GlobalFramePoolLockExperiment from "../modules/media_engine/GlobalFramePoolLockExperiment.tsx";
import AudioFidelityExperiment from "../modules/media_engine/AudioFidelityExperiment.tsx";
import SystemwideEchoCancellationExperiment from "../modules/media_engine/SystemwideEchoCancellationExperiment.tsx";
import KrispCpuDisablementExperiment from "../modules/media_engine/KrispCpuDisablementExperiment.tsx";
import _modDef14014 from "../../_runtime/metro/14014__.js";
import AudioEffectsExperimentDefault from "../modules/media_engine/AudioEffectsExperiment.tsx";
import queryAudioEffectsDefault from "../modules/noise_cancellation/queryAudioEffects.tsx";
import IOSAudioInterruptExperiment from "../modules/media_engine/IOSAudioInterruptExperiment.tsx";
import KrispV9iOSExperiment from "../modules/media_engine/KrispV9iOSExperiment.tsx";
import SilenceWarningExperimentDefault from "../modules/media_engine/SilenceWarningExperiment.tsx";
import InputWatcherDefault from "../modules/media_engine/InputWatcher.tsx";
import VideoCaptureDeviceNoReuse from "../modules/media_engine/VideoCaptureDeviceNoReuse.tsx";
import DisableCameraSimulcastExperiment2 from "../modules/media_engine/DisableCameraSimulcastExperiment.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ClipsStore from "../modules/clips/ClipsStore.tsx";
import ExperimentStore from "../modules/experiments/ExperimentStore.tsx";
import RunningGameStore from "../modules/game_detection/RunningGameStore.native.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import BitRateStore from "BitRateStore.tsx";
import CertifiedDeviceStore from "CertifiedDeviceStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import RTCConnectionStore from "RTCConnectionStore.tsx";
import UserStore from "UserStore.tsx";
import VideoQualityModeStore from "VideoQualityModeStore.tsx";
import NativePermissionUtils from "../modules/native_permissions/NativePermissionUtils.tsx";

require = fn;
let closure_142 = async function _detectH265HardwareDecode() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      if (0 === c1) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp6;
          closure_128_0 = undefined;
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
                  const obj1 = {
                    type: "file",
                    video: {
                      contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
                      width: 1920,
                      height: 1080,
                      bitrate: 2000000,
                      framerate: 30,
                    },
                  };
                  c1 = 2;
                  c3 = 1;
                  const obj2 = { value: mediaCapabilities.decodingInfo(obj1), done: false };
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
        throw value;
      } else if (arg0 === 2) {
        c2 = 0;
        c3 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_128_0 = value;
        let powerEfficient = closure_128_0.supported;
        if (powerEfficient) {
          powerEfficient = closure_128_0.powerEfficient;
        }
        c2 = 0;
        c3 = 3;
        obj = { value: powerEfficient, done: true };
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
};
function startH265HardwareDetection() {
  if (null != nextPromise) {
    let resolved = nextPromise;
  } else {
    const _window = window;
    if (typeof window !== "undefined") {
      nextPromise = (function detectH265HardwareDecode() {
        const self = this;
        const apply = closure_1_142.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })().then((result) => {
        closure_123 = result;
        return result;
      });
      resolved = nextPromise;
      const promise = (function detectH265HardwareDecode() {
        const self = this;
        const apply = closure_1_142.apply;
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
  DEFAULT2 = DEFAULT;
  if (DEFAULT === undefined) {
    DEFAULT2 = MediaEngineContextTypes.DEFAULT;
  }
  let tmp3 = settingsByContext[DEFAULT2];
  if (null == tmp3) {
    obj = {
      mode: InputModes.VOICE_ACTIVITY,
      modeOptions: null,
      vadUseKrispSettingVersion: 0,
      ncUseKrispSettingVersion: 0,
      ncUseKrispjsSettingVersion: 0,
      mute: false,
      deaf: false,
      echoCancellation: true,
      noiseSuppression: false,
      automaticGainControl: true,
      noiseCancellation: true,
      bypassSystemInputProcessing: true,
      hardwareEnabledVersion: 0,
      silenceWarning: true,
      attenuation: 0,
      attenuateWhileSpeakingSelf: false,
      attenuateWhileSpeakingOthers: true,
      localMutes: null,
      disabledLocalVideos: null,
      videoToggleStateMap: null,
      localVolumes: null,
      audioMixerSettings: null,
      audioMixerSettingsVersion: 0,
      localPans: null,
      inputVolume: null,
      outputVolume: null,
      inputDeviceId: null,
      outputDeviceId: null,
      videoDeviceId: null,
      qos: false,
      qosMigrated: false,
      videoHook: null,
      experimentalSoundshare2: null,
      useSystemScreensharePicker: null,
      h265Enabled: true,
      vadThrehsoldMigrated: false,
      aecDumpEnabled: false,
      openH264Enabled: true,
      sidechainCompression: true,
      sidechainCompressionSettingVersion: 1,
      sidechainCompressionStrength: 50,
      automaticAudioSubsystem: true,
      activeInputProfile: null,
    };
    obj = {
      threshold: -60,
      autoThreshold: PlatformUtils.isPlatformEmbedded || false,
      vadUseKrisp: true,
      vadKrispActivationThreshold: 0.5,
      vadLeading: 5,
      vadTrailing: 25,
      delay: 20,
      shortcut: [],
      updatedAt: "PX_16",
    };
    obj.modeOptions = obj;
    obj.localMutes = {};
    obj.disabledLocalVideos = {};
    obj.videoToggleStateMap = {};
    obj.localVolumes = {};
    obj = {};
    const merged = Object.assign(closure_34);
    obj.audioMixerSettings = obj;
    obj.localPans = {};
    obj.inputVolume = outputVolume;
    obj.outputVolume = outputVolume;
    obj.inputDeviceId = DEFAULT_DEVICE_ID;
    obj.outputDeviceId = DEFAULT_DEVICE_ID;
    obj.videoDeviceId = DEFAULT_DEVICE_ID;
    obj.videoHook = result.supports(Features.VIDEO_HOOK);
    settingsByContext[DEFAULT2] = obj;
    tmp3 = obj;
    const tmp4 = PlatformUtils.isPlatformEmbedded || false;
  }
  if (DEFAULT === MediaEngineContextTypes.STREAM) {
    const obj1 = {};
    const merged1 = Object.assign(tmp3);
    const obj2 = {};
    const merged2 = Object.assign(tmp3.modeOptions);
    const StreamZeroVadLeadingExperiment = StreamZeroVadLeadingExperiment2.StreamZeroVadLeadingExperiment;
    let num = 0;
    if (!StreamZeroVadLeadingExperiment.getConfig({ location: "MediaEngineStore.getSettings" }).enabled) {
      num = tmp3.modeOptions.vadLeading;
    }
    obj2.vadLeading = num;
    obj1.modeOptions = obj2;
    return obj1;
  } else {
    let CUSTOM = tmp3.activeInputProfile;
    if (CUSTOM == null) {
      CUSTOM = InputProfile.CUSTOM;
    }
    const tmp17 = c110 ? closure_71 : closure_141;
    let modeOptions = tmp3.modeOptions;
    if (modeOptions == null) {
      modeOptions = {};
    }
    const obj3 = {};
    const merged3 = Object.assign(modeOptions);
    let modeOptions1 = tmp14.modeOptions;
    if (modeOptions1 == null) {
      modeOptions1 = {};
    }
    const merged4 = Object.assign(modeOptions1);
    let modeOptions2 = tmp17.modeOptions;
    if (modeOptions2 == null) {
      modeOptions2 = {};
    }
    const merged5 = Object.assign(modeOptions2);
    const obj4 = {};
    const merged6 = Object.assign(tmp3);
    const merged7 = Object.assign(tmp14);
    const merged8 = Object.assign(tmp17);
    obj4.modeOptions = obj3;
    return obj4;
  }
}
function setInputMode(context) {
  const tmp = getSettings(context.context);
  const mode = tmp.mode;
  if (context.context === MediaEngineContextTypes.DEFAULT) {
    obj = MediaEngineActionCreators;
    obj.setPushToTalkState(false, false);
  }
  let showPTTSpeakingIndicator = PTTEducationExperimentDefault.getConfig({
    location: "setInputMode",
  }).showPTTSpeakingIndicator;
  if (showPTTSpeakingIndicator) {
    showPTTSpeakingIndicator = mode === InputModes.PUSH_TO_TALK;
  }
  obj = {
    vadThreshold: tmp.modeOptions.threshold,
    vadAutoThreshold: null,
    vadUseKrisp: null,
    vadKrispActivationThreshold: null,
    vadLeading: null,
    vadTrailing: null,
    pttReleaseDelay: null,
  };
  let autoThreshold = showPTTSpeakingIndicator;
  if (!autoThreshold) {
    autoThreshold = tmp.modeOptions.autoThreshold;
  }
  obj.vadAutoThreshold = autoThreshold;
  let tmp6 = showPTTSpeakingIndicator || tmp.modeOptions.vadUseKrisp;
  if (tmp6) {
    tmp6 = !c110;
  }
  obj.vadUseKrisp = tmp6;
  let num = tmp.modeOptions.vadKrispActivationThreshold;
  if (num == null) {
    num = 0.5;
  }
  obj.vadKrispActivationThreshold = num;
  obj.vadLeading = tmp.modeOptions.vadLeading;
  obj.vadTrailing = tmp.modeOptions.vadTrailing;
  obj.pttReleaseDelay = Math.round(tmp.modeOptions.delay);
  context.setInputMode(mode, obj);
}
function updateConnectionMuteDeaf(context) {
  const tmp = getSettings(context.context);
  let deaf = !c79;
  if (c79) {
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
      tmp3 = mute;
    }
    if (!tmp3) {
      tmp3 = closure_92;
    }
    if (!tmp3) {
      tmp3 = !NativePermissionUtils.didHavePermission(NativePermissionTypes.AUDIO);
    }
    let flag = tmp3;
  } else {
    flag = true;
    if (MediaEngineContextTypes.STREAM !== context) {
      const context2 = context.context;
      flag = deaf;
    }
  }
  context.setSelfMute(flag);
  context.setSelfDeaf(tmp.deaf);
  if (context.context === MediaEngineContextTypes.DEFAULT) {
    enabled = MuteAwareNoiseCancellationExperiment.getMuteAwareNoiseCancellationConfig({
      location: "updateConnectionMuteDeaf",
    }).enabled;
    if (enabled) {
      enabled = flag;
    }
    result = context.setSkipNoiseCancellationIfMuted(enabled);
    NativeMuteManagerDefault.updateNativeMute();
  }
}
function updateVideo() {
  let tmp = enabled;
  if (enabled === undefined) {
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
      result.setGoLiveSource(null, DEFAULT2);
    }
    if (!closure_94) {
      if (!tmp) {
        closure_74 = tmp2;
        if (null != tmp2) {
          obj = { resolution: tmp2.quality.resolution, frameRate: tmp2.quality.frameRate };
          if (null != tmp2.desktopSource) {
            const videoHook2 = getSettings().videoHook;
            const obj20 = GoLiveHdrExperiment;
            let isWindowsResult = PlatformUtils.isWindows();
            if (isWindowsResult) {
              const tmp41 = DiscordNativeDefault;
              let release;
              if (tmp41 != null) {
                release = tmp41.os.release;
              }
              isWindowsResult = _modDef14014.satisfies(release, __initData7);
            }
            if (!isWindowsResult) {
              let tmp70Result = PlatformUtils;
              let isWindowsResult1 = tmp70Result.isWindows();
              if (isWindowsResult1) {
                isWindowsResult1 = 0 >= closure_1_26;
              }
              if (!isWindowsResult1) {
                let tmp55 = !videoHook2;
                if (videoHook2) {
                  const DisableHookFramePacerExperiment =
                    DisableHookFramePacerExperiment2.DisableHookFramePacerExperiment;
                  tmp55 = !DisableHookFramePacerExperiment.getConfig({ location: "updateVideo" }).enabled;
                }
                let enabled2 = videoHook2;
                if (videoHook2) {
                  const VideoHookDX12Experiment = VideoHookDX12Experiment2.VideoHookDX12Experiment;
                  enabled2 = VideoHookDX12Experiment.getConfig({ location: "updateVideo" }).enabled;
                }
                const UpscaleSmallCapturedFramesExperiment =
                  UpscaleSmallCapturedFramesExperiment2.UpscaleSmallCapturedFramesExperiment;
                const config = UpscaleSmallCapturedFramesExperiment.getConfig({ location: "updateVideo" });
                obj = {
                  id: tmp2.desktopSource.id,
                  soundshareId: tmp2.desktopSource.soundshareId,
                  useVideoHook: videoHook2,
                  useHookFramePacer: tmp55,
                  useGraphicsCapture: isWindowsResult,
                  useGraphicsCaptureApiLevel: 0,
                  useCaptureDeviceForEncode: null,
                  useLoopback: null,
                  useQuartzCapturer: true,
                  allowScreenCaptureKit: null,
                  videoHookStaleFrameTimeoutMs: 500,
                  graphicsCaptureStaleFrameTimeoutMs: null,
                  hdrCaptureMode: null,
                  enableGlobalFramePoolLock: null,
                  useGraphicsCaptureDirtyRegions: null,
                  videoHookAllowDx12: null,
                  minCaptureWidth: null,
                  minCaptureHeight: null,
                };
                ({ minCaptureWidth, minCaptureHeight } = config);
                tmp70Result = PlatformUtils;
                obj.useCaptureDeviceForEncode = tmp70Result.isWindows();
                obj.useLoopback = mediaEngineStore.getExperimentalSoundshare();
                let isMacResult = PlatformUtils.isMac();
                if (isMacResult) {
                  isMacResult = obj10.supports(Features.SCREEN_CAPTURE_KIT);
                }
                if (isMacResult) {
                  const tmp61 = DiscordNativeDefault;
                  let release1;
                  if (tmp61 != null) {
                    release1 = tmp61.os.release;
                  }
                  isMacResult = _modDef14014.satisfies(release1, __initData4);
                }
                let obj1 = { desktopDescription: null, quality: null };
                obj.allowScreenCaptureKit = isMacResult;
                obj.graphicsCaptureStaleFrameTimeoutMs = graphicsCaptureStaleFrameTimeoutMs;
                obj.hdrCaptureMode = obj20.getGoLiveHdrConfig({ location: "MediaEngineStore go live" }).hdrCaptureMode;
                obj10 = result;
                const tmp70Result1 = PlatformUtils;
                obj.enableGlobalFramePoolLock = GlobalFramePoolLockExperiment.getGlobalFramePoolLockExperimentConfig({
                  location: "updateVideo",
                }).enabled;
                obj.useGraphicsCaptureDirtyRegions = false;
                obj.videoHookAllowDx12 = enabled2;
                obj.minCaptureWidth = minCaptureWidth;
                obj.minCaptureHeight = minCaptureHeight;
                obj1.desktopDescription = obj;
                obj1.quality = obj;
                result.setGoLiveSource(obj1, DEFAULT2);
                const tmp70Result2 = GlobalFramePoolLockExperiment;
              } else if (true === c132) {
                const WGCDirtyRegionsExperiment = WGCDirtyRegionsExperiment2.WGCDirtyRegionsExperiment;
                enabled = WGCDirtyRegionsExperiment.getConfig({ location: "updateVideo" }).enabled;
              } else {
                const WGCDirtyRegionsAllExperiment = WGCDirtyRegionsAllExperiment2.WGCDirtyRegionsAllExperiment;
                enabled = WGCDirtyRegionsAllExperiment.getConfig({ location: "updateVideo" }).enabled;
              }
            } else {
              let isWindowsResult2 = PlatformUtils.isWindows();
              if (isWindowsResult2) {
                const tmp47 = DiscordNativeDefault;
                let release2;
                if (tmp47 != null) {
                  release2 = tmp47.os.release;
                }
                isWindowsResult2 = _modDef14014.satisfies(release2, __initData5);
              }
              const tmp70Result3 = PlatformUtils;
            }
          }
          if (null != tmp2.cameraSource) {
            let obj2 = { videoDeviceGuid: tmp2.cameraSource.videoDeviceGuid, audioDeviceGuid: null };
            let str = "";
            if (false !== tmp2.cameraSource.sound) {
              str = tmp2.cameraSource.audioDeviceGuid;
            }
            let obj3 = { cameraDescription: null, quality: null };
            obj2.audioDeviceGuid = str;
            obj3.cameraDescription = obj2;
            obj3.quality = obj;
            result.setGoLiveSource(obj3, DEFAULT2);
          }
        }
      }
    }
    videoDeviceId = getSettings().videoDeviceId;
    if (closure_94) {
      if (videoDeviceId === DEFAULT_DEVICE_ID) {
        if (videoDeviceId === tmp28) {
          let setVideoInputDevice = closure_95;
        }
        closure_94 = tmp;
        if (tmp) {
          let firstResult = dependencyMap[setVideoInputDevice];
          if (firstResult == null) {
            firstResult = dependencyMap[DEFAULT_DEVICE_ID];
          }
          if (firstResult == null) {
            obj3 = _modDef12(dependencyMap);
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
        setVideoInputDevice = result.setVideoInputDevice;
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
        obj1 = HookAll;
        result = obj1.cancelAttachToProcess(tmp3.desktopSource.sourcePid);
      }
      result.setGoLiveSource(null, DEFAULT2);
    } else {
      obj = PlatformUtils;
    }
    obj2 = HookAll;
    const result1 = obj2.cancelAttachToProcess(tmp3.desktopSource.soundshareId);
  }
}
function noiseCancellerErrorToAVUnderlyingError(noise_canceller_error) {
  if (NoiseCancellerError.KRISP_CPU_OVERUSE === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispCpuOveruse;
  } else if (NoiseCancellerError.KRISP_FAILED === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispFailed;
  } else if (NoiseCancellerError.KRISP_VAD_CPU_OVERUSE === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispVadCpuOveruse;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitError;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_NATIVE === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorNative;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorSse4NotSupported;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorAvx2NotSupported;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_UNSIGNED === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorUnsigned;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_GLOBAL_INIT === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorGlobalInit;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_8K === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorWeight8k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_16K === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorWeight16k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_32K === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorWeight32k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_VAD === noise_canceller_error) {
    return AVError.AVUnderlyingError.KrispInitErrorWeightVad;
  }
}
function handleSpatialAudioStatus(arg0) {
  if (arg0 !== UNKNOWN) {
    UNKNOWN = arg0;
    mediaEngineStore.emitChange();
  }
}
function handleVoiceProcessingError(noise_canceller_error, voiceProcessingErrorDetails) {
  obj.warn("Voice processing error: " + noise_canceller_error);
  obj = {
    type: AVError.AVError.NOISE_CANCELLER_ERROR,
    underlyingError: noiseCancellerErrorToAVUnderlyingError(noise_canceller_error),
    voiceProcessingErrorDetails,
  };
  obj.reportAVError(obj);
  let obj2 = AnalyticsUtilsDefault;
  obj = { noise_canceller_error };
  obj2.track(constants.VOICE_PROCESSING, obj);
  if (set3.has(noise_canceller_error)) {
    c110 = true;
  } else if (noise_canceller_error === NoiseCancellerError.KRISP_VAD_CPU_OVERUSE) {
    let tmp4Result = DispatcherDefault;
    const obj1 = { type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: noise_canceller_error };
    tmp4Result.dispatch(obj1);
  } else {
    c117 = true;
    tmp4Result = DispatcherDefault;
    obj2 = { type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: noise_canceller_error };
    tmp4Result.dispatch(obj2);
  }
}
function handleVideoFilterError(code, arg1) {
  let str = "preview";
  let str2 = "preview";
  if (arg1 === constants11.LIVE) {
    str2 = "live";
  }
  obj.warn("Video filter error: " + code + " (" + str2 + ")");
  if (arg1 !== constants11.LIVE) {
    obj = { type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code, target: null };
    if (tmp) {
      str = "live";
    }
    obj.target = str;
    DispatcherDefault.dispatch(obj);
  } else {
    let AVUnderlyingError = dependencyMap;
    obj = { type: AVError.AVError.VIDEO_BACKGROUND_UNAVAILABLE, underlyingError: null };
    if (constants10.UNSUPPORTED === code) {
      AVUnderlyingError = AVError.AVUnderlyingError;
      let VideoBackgroundInitFailed = AVUnderlyingError.VideoBackgroundUnsupported;
    } else if (tmp5.INIT_FAILED === code) {
      VideoBackgroundInitFailed = AVError.AVUnderlyingError.VideoBackgroundInitFailed;
    }
    obj.underlyingError = VideoBackgroundInitFailed;
    obj = obj.reportAVError(obj);
  }
}
function updateConnectionVoiceProcessing(setEchoCancellation) {
  const tmp2 = getSettings();
  const inputDeviceId = tmp2.inputDeviceId;
  obj = CertifiedDeviceStore;
  setEchoCancellation.setEchoCancellation(
    CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation,
  );
  const tmp3 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation;
  setEchoCancellation.setNoiseSuppression(obj.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression);
  const tmp5 = obj.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression;
  obj = { enabled: obj.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl };
  const merged = Object.assign({ useAGC2: false });
  result = setEchoCancellation.setAutomaticGainControl(obj);
  const noiseCancellation = tmp2.noiseCancellation;
  const tmp7 = obj.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl;
  let flag = getEffectiveNoiseCancellationDefault(noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  if (flag !== noiseCancellation) {
    obj.info("Falling back to system noise suppression.");
  }
  setEchoCancellation.setNoiseCancellation(flag);
  if (flag) {
    flag = false;
  }
  const result1 = setEchoCancellation.setNoiseCancellationDuringProcessing(flag);
  let tmp10Result = SpatialAudioForVoiceExperimentDefault;
  let supportsResult =
    true === tmp2.audioMixerSettings.enabled && tmp10Result.getConfig({ location: "MediaEngineStore" }).enabled;
  if (supportsResult) {
    supportsResult = result.supports(Features.SPATIAL_AUDIO);
  }
  const result2 = setEchoCancellation.setSpatialAudioEnabled(supportsResult);
  const tmpResult = getSettings();
  const inputDeviceId2 = tmpResult.inputDeviceId;
  const tmp22 = obj.hasEchoCancellation(inputDeviceId2) || tmpResult.echoCancellation;
  tmp10Result = getEffectiveNoiseCancellationDefault;
  const tmp23 = obj.hasNoiseSuppression(inputDeviceId2) || tmpResult.noiseSuppression;
  const tmp10Result1Result = tmp10Result(tmpResult.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  const voiceFidelityCaps = AudioFidelityExperiment.getVoiceFidelityCaps(
    { location: "updateVoiceFidelityCaps" },
    { krispEnabled: tmp10Result1Result, noiseSuppressionEnabled: tmp23, echoCancellationEnabled: tmp22 },
  );
  const result3 = result.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
  const result4 = result.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
  let isWindowsResult = PlatformUtils.isWindows();
  if (isWindowsResult) {
    const tmp10Result2 = DiscordNativeDefault;
    let release;
    if (tmp10Result2 != null) {
      release = tmp10Result2.os.release;
    }
    isWindowsResult = _modDef14014.satisfies(release, c154);
    const tmp10Result1 = _modDef14014;
  }
  if (isWindowsResult) {
    if (setEchoCancellation.context === MediaEngineContextTypes.DEFAULT) {
      let tmp26Result = SystemwideEchoCancellationExperiment;
      const systemwideEchoCancellationExperimentConfig = tmp26Result.getSystemwideEchoCancellationExperimentConfig({
        location: "updateConnectionVoiceProcessing",
      });
      const tmp49 = inputDevices[mediaEngineStore.getInputDeviceId(mediaEngineStore)];
      let windowsDeviceService;
      if (tmp49 != null) {
        windowsDeviceService = tmp49.windowsDeviceService;
      }
      let tmp37 = "voicemodvad" === windowsDeviceService;
      if (!tmp37) {
        let hasItem;
        if (tmp49 != null) {
          if (tmp49.name != null) {
            const formatted = str3.toLowerCase();
            hasItem = formatted.includes("voicemod");
          }
        }
        tmp37 = true === hasItem;
      }
      if (!tmp37) {
        const tmp40 = outputDevices[mediaEngineStore.getOutputDeviceId(mediaEngineStore)];
        let windowsDeviceService1;
        if (tmp40 != null) {
          windowsDeviceService1 = tmp40.windowsDeviceService;
        }
        let tmp42 = "voicemodvad" === windowsDeviceService1;
        if (!tmp42) {
          let hasItem1;
          if (tmp40 != null) {
            if (tmp40.name != null) {
              const formatted1 = str5.toLowerCase();
              hasItem1 = formatted1.includes("voicemod");
            }
          }
          tmp42 = true === hasItem1;
        }
        tmp37 = tmp42;
      }
      let str7 = "mix";
      if (!tmp37) {
        str7 = systemwideEchoCancellationExperimentConfig.echoReferenceMode;
      }
      setEchoCancellation.setEchoReferenceMode(str7);
    }
  }
  tmp26Result = PlatformUtils;
  if (tmp26Result.isDesktop()) {
    const result5 = setEchoCancellation.setNoiseCancellationCpuDisablement(
      KrispCpuDisablementExperiment.getKrispCpuDisablementConfig({ location: "updateConnectionVoiceProcessing" })
        .consecutiveFailures,
    );
    const tmp26Result1 = KrispCpuDisablementExperiment;
  }
  if (tmp26Result2.isWeb()) {
    let num = -100;
    if (tmp2.noiseCancellation) {
      num = -150;
    }
    setEchoCancellation.setSilenceThreshold(num);
  }
  tmp26Result2 = PlatformUtils;
}
function mergeSettings(arg0) {
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
  let tmp3 = settingsByContext[DEFAULT];
  if (null == tmp3) {
    obj = {
      mode: InputModes.VOICE_ACTIVITY,
      modeOptions: null,
      vadUseKrispSettingVersion: 0,
      ncUseKrispSettingVersion: 0,
      ncUseKrispjsSettingVersion: 0,
      mute: false,
      deaf: false,
      echoCancellation: true,
      noiseSuppression: false,
      automaticGainControl: true,
      noiseCancellation: true,
      bypassSystemInputProcessing: true,
      hardwareEnabledVersion: 0,
      silenceWarning: true,
      attenuation: 0,
      attenuateWhileSpeakingSelf: false,
      attenuateWhileSpeakingOthers: true,
      localMutes: null,
      disabledLocalVideos: null,
      videoToggleStateMap: null,
      localVolumes: null,
      audioMixerSettings: null,
      audioMixerSettingsVersion: 0,
      localPans: null,
      inputVolume: null,
      outputVolume: null,
      inputDeviceId: null,
      outputDeviceId: null,
      videoDeviceId: null,
      qos: false,
      qosMigrated: false,
      videoHook: null,
      experimentalSoundshare2: null,
      useSystemScreensharePicker: null,
      h265Enabled: true,
      vadThrehsoldMigrated: false,
      aecDumpEnabled: false,
      openH264Enabled: true,
      sidechainCompression: true,
      sidechainCompressionSettingVersion: 1,
      sidechainCompressionStrength: 50,
      automaticAudioSubsystem: true,
      activeInputProfile: null,
    };
    obj = {
      threshold: -60,
      autoThreshold: PlatformUtils.isPlatformEmbedded || false,
      vadUseKrisp: true,
      vadKrispActivationThreshold: 0.5,
      vadLeading: 5,
      vadTrailing: 25,
      delay: 20,
      shortcut: [],
      updatedAt: "PX_16",
    };
    obj.modeOptions = obj;
    obj.localMutes = {};
    obj.disabledLocalVideos = {};
    obj.videoToggleStateMap = {};
    obj.localVolumes = {};
    obj = {};
    const merged = Object.assign(closure_34);
    obj.audioMixerSettings = obj;
    obj.localPans = {};
    obj.inputVolume = outputVolume;
    obj.outputVolume = outputVolume;
    obj.inputDeviceId = DEFAULT_DEVICE_ID;
    obj.outputDeviceId = DEFAULT_DEVICE_ID;
    obj.videoDeviceId = DEFAULT_DEVICE_ID;
    obj.videoHook = result.supports(Features.VIDEO_HOOK);
    settingsByContext[DEFAULT] = obj;
    tmp3 = obj;
    const tmp4 = PlatformUtils.isPlatformEmbedded || false;
  }
  const merged1 = Object.assign(tmp3, arg0);
  if (flag) {
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
  }
  return tmp3;
}
function applySettings() {
  const tmp = getSettings();
  const inputDeviceId = tmp.inputDeviceId;
  obj = result;
  result.setAudioInputDevice(inputDeviceId);
  if (obj2.isWindows()) {
    if (obj3.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
      let guid;
      if (inputDevices[inputDeviceId] != null) {
        guid = tmp7.guid;
      }
      if (null != guid) {
        queryAudioEffectsDefault(tmp7.guid, inputDeviceId, obj);
      }
    }
    obj3 = AudioEffectsExperimentDefault;
  }
  obj.setAudioOutputDevice(tmp.outputDeviceId);
  updateVideo();
  obj.setInputVolume(tmp.inputVolume);
  obj2 = PlatformUtils;
  const setOutputVolume = obj.setOutputVolume;
  if (obj4.getConfig({ location: "MediaEngineStore.applySettings" }).audioOutputPresent) {
    setOutputVolume(tmp.outputVolume);
  } else {
    setOutputVolume(BottomSheet);
  }
  obj.setAecDump(tmp.aecDumpEnabled);
  result = obj.setSidechainCompression(tmp.sidechainCompression);
  const result1 = obj.setSidechainCompressionStrength(tmp.sidechainCompressionStrength);
  const result2 = obj.setAudioInputBypassSystemProcessing(tmp.bypassSystemInputProcessing);
  obj4 = MobileAudioOutputExperimentDefault;
  if (tmp3Result.isLinux()) {
    let tmp14Result = DesktopNativeUtilsDefault;
    if (tmp14Result != null) {
      const setOpenH264Enabled = tmp14Result.setOpenH264Enabled;
      if (setOpenH264Enabled != null) {
        setOpenH264Enabled(tmp.openH264Enabled);
      }
    }
  }
  const audioMixerSettings = tmp.audioMixerSettings;
  tmp14Result = SpatialAudioForVoiceExperimentDefault;
  let supportsResult =
    true === audioMixerSettings.enabled && tmp14Result.getConfig({ location: "MediaEngineStore" }).enabled;
  if (supportsResult) {
    supportsResult = obj.supports(Features.SPATIAL_AUDIO);
  }
  enabled = supportsResult;
  obj = {
    isSpatial: enabled,
    enabled,
    spatialBlend: audioMixerSettings.spatialBlend,
    reflectionsEnabled: audioMixerSettings.reflectionsEnabled,
    roomSize: audioMixerSettings.roomSize,
    distanceAttenuationEnabled: audioMixerSettings.distanceAttenuationEnabled,
  };
  obj.setAudioMixerOptions(obj);
  tmp3Result = PlatformUtils;
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
  closure_2 = undefined;
  let audioContextSettings = UserSettingsProtoStore.settings.audioContextSettings;
  if (audioContextSettings == null) {
    obj = { user: {}, stream: {} };
    audioContextSettings = obj;
  }
  function _loop() {
    if (closure_2 === constants6.USER) {
      let STREAM = MediaEngineContextTypes.DEFAULT;
      let tmp2 = MediaEngineContextTypes;
    } else {
      tmp2 = MediaEngineContextTypes;
      STREAM = MediaEngineContextTypes.STREAM;
    }
    closure_1 = STREAM === tmp2.STREAM ? closure_2_41 : BottomSheet;
    obj = audioContextSettings[closure_2];
    if (obj == null) {
      obj = {};
    }
    const tmp4 = getSettings(STREAM);
    const localMutes = tmp4.localMutes;
    const localVolumes = tmp4.localVolumes;
    function _loop2(arg0, muted) {
      closure_0 = arg0;
      if (null != obj.getPendingAudioSettings(STREAM, arg0)) {
        return 1;
      } else {
        if (muted.muted) {
          tmp4[arg0] = true;
        } else {
          delete tmp2[tmp];
        }
        if (muted.volume !== muted) {
          localVolumes[arg0] = muted.volume;
        } else {
          delete tmp2[tmp];
        }
        closure_2_72.eachConnection((setLocalVolume) => {
          setLocalVolume.setLocalVolume(closure_0, muted.volume);
          setLocalVolume.setLocalMute(closure_0, muted.muted);
        }, STREAM);
      }
      obj = flag(dependencyMap[70]);
    }
    const entries = Object.entries(obj);
    while (tmp6 !== undefined) {
      let tmp9 = _slicedToArray(tmp7, 2);
      let _loop2Result = _loop2(tmp9[0], tmp9[1]);
      continue;
    }
    if (flag) {
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
              setLocalVolume.setLocalVolume(closure_0, closure_1);
              setLocalVolume.setLocalMute(closure_0, false);
            }, closure_0);
          }
        })(item10056);
        continue;
      }
    }
    mergeSettings({ localMutes, localVolumes }, STREAM);
    tmp6 = entries[Symbol.iterator]();
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
        let obj2 = CrossPlatformNativeUtilsDefault;
        audioPid = obj2.getAudioPid(pidFromDesktopSource);
      }
      let str2 = "";
      if (null != audioPid) {
        str2 = CrossPlatformNativeUtilsDefault.generateSessionFromPid(audioPid);
      }
      obj = { soundshareId: audioPid, soundshareSession: str2 };
    } else {
      obj.info("Error: trying to get soundshare id before MediaEngineStore is instantiated.");
      obj = { soundshareId: null, soundshareSession: "" };
    }
    ({ soundshareId, soundshareSession } = obj);
    if (null != soundshareId) {
      let isWindowsResult = soundshareId(1115).isWindows();
      if (isWindowsResult) {
        isWindowsResult = soundshareId > 1;
      }
      if (isWindowsResult) {
        const obj1 = { soundshare_session: soundshareSession };
        HookAll.attachToProcess(soundshareId, obj1).then((result) => {
          const errorMessage = result;
          result = null == result;
          if (!result) {
            result = RunningGameStore.shouldContinueWithoutElevatedProcessForPID(soundshareId);
          }
          if (!result) {
            DispatcherDefault.wait(() => {
              obj = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage };
              obj.dispatch(obj);
            });
          }
        });
        const attachToProcessResult = HookAll.attachToProcess(soundshareId, obj1);
      }
      obj2 = { soundshareId, soundshareSession };
      return obj2;
    }
  }
  let videoHook = null != pidFromDesktopSource;
  if (videoHook) {
    videoHook = getSettings().videoHook;
  }
  if (videoHook) {
    HookAll.attachToProcess(pidFromDesktopSource);
  }
  return { soundshareId: null, soundshareSession: null };
}
function resetProbingState() {
  const DEFAULT = MediaEngineContextTypes.DEFAULT;
  const videoToggleStateMap = getSettings(DEFAULT).videoToggleStateMap;
  const entries = Object.entries(videoToggleStateMap);
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    if (tmp7[1] === constants5.AUTO_PROBING) {
      let first = tmp7[0];
      delete tmp[tmp2];
    }
    continue;
  }
  mergeSettings({ videoToggleStateMap }, DEFAULT, false);
  tmp4 = entries[Symbol.iterator]();
}
function trackVoiceProcessing(location) {
  const tmp = getSettings();
  const audioSubsystem = result.getAudioSubsystem();
  let id = tmp.inputDeviceId;
  let firstResult = inputDevices[id];
  const audioLayer = result.getAudioLayer();
  if (firstResult == null) {
    firstResult = inputDevices[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    obj = _modDef12(inputDevices);
    const values = obj.values();
    firstResult = values.first();
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  let name;
  if (inputDevices[id] != null) {
    name = tmp9.name;
  }
  const tmp11Result = getEffectiveNoiseCancellationDefault(
    tmp.noiseCancellation,
    mediaEngineStore.getSystemMicrophoneMode(),
  );
  obj = {
    echo_cancellation: tmp.echoCancellation,
    noise_cancellation: tmp.noiseCancellation,
    noise_suppression: tmp.noiseSuppression,
    automatic_gain_control: tmp.automaticGainControl,
    location,
    bypass_system_input_processing: tmp.bypassSystemInputProcessing,
    audio_subsystem: audioSubsystem,
    audio_layer: audioLayer,
    input_device: name,
    effective_noise_cancellation: tmp11Result,
  };
  AnalyticsUtilsDefault.track(constants.VOICE_PROCESSING, obj);
}
function setLoopback() {
  const tmp2 = getSettings();
  const inputDeviceId = tmp2.inputDeviceId;
  obj = CertifiedDeviceStore;
  const tmp4 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation;
  const tmp5 = obj.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression;
  obj = { enabled: obj.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl };
  const merged = Object.assign({ useAGC2: false });
  obj = {
    echoCancellation: tmp4,
    echoCancellationPreEcho: set2.size <= 0,
    noiseSuppression: tmp5,
    automaticGainControlConfig: obj,
    noiseCancellation: tmp2.noiseCancellation,
  };
  result.setLoopback(set2.size > 0, obj);
  const tmpResult = getSettings();
  const inputDeviceId2 = tmpResult.inputDeviceId;
  const tmp6 = obj.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl;
  const tmp7 = set2.size <= 0;
  const tmp11 = obj.hasEchoCancellation(inputDeviceId2) || tmpResult.echoCancellation;
  const tmp12 = obj.hasNoiseSuppression(inputDeviceId2) || tmpResult.noiseSuppression;
  const tmp13Result = getEffectiveNoiseCancellationDefault(
    tmpResult.noiseCancellation,
    mediaEngineStore.getSystemMicrophoneMode(),
  );
  const voiceFidelityCaps = AudioFidelityExperiment.getVoiceFidelityCaps(
    { location: "updateVoiceFidelityCaps" },
    { krispEnabled: tmp13Result, noiseSuppressionEnabled: tmp12, echoCancellationEnabled: tmp11 },
  );
  result = obj3.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
  const result1 = obj3.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
}
let closure_164 = async function _setGamescopeVaapiEnabled() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          if (constants.supports(constants.VAAPI)) {
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
              const obj1 = { value: processUtils2.getSystemInfo(), done: false };
              return obj1;
            }
          }
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_0 = value;
        const electronGPUInfo = closure_129_0.electronGPUInfo;
        let gpuDevice;
        if (electronGPUInfo != null) {
          gpuDevice = electronGPUInfo.gpuDevice;
        }
        _require = gpuDevice;
        if (gpuDevice == null) {
          _require = [];
        }
        if (_require.some((vendorId) => 4098 === vendorId.vendorId)) {
          closure_130_139 = true;
          closure_130_138 = closure_130_72.supports(closure_130_46.GAMESCOPE_CAPTURE);
        }
      }
      c4 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
};
let closure_165 = async function _setupKrispNativeModule() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp8;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          let KRISP_INIT_ERROR2;
          closure_129_3 = undefined;
          c4 = 2;
          c5 = 3;
          c6 = 1;
          const obj1 = { value: DesktopNativeUtilsDefault.ensureModule("discord_krisp"), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_130_108 = false;
        throw closure_3;
      } else {
        if (2 === tmp8) {
          c4 = 1;
          closure_129_4 = closure_3;
          const _HermesInternal = HermesInternal;
          closure_130_57.warn("Failed to load Krisp module: " + closure_129_4.message);
          let obj5 = closure_130_1(closure_130_3[78]);
          obj5.captureException(closure_129_4);
          KRISP_INIT_ERROR2 = closure_130_48.KRISP_INIT_ERROR;
          let message = closure_129_4.message;
          if (!message.includes(": ")) {
            let obj6 = closure_130_0(closure_130_3[43]);
            let obj2 = {
              type: closure_130_0(closure_130_3[43]).AVError.NOISE_CANCELLER_ERROR,
              underlyingError: closure_130_148(KRISP_INIT_ERROR2),
            };
            obj6.reportAVError(obj2);
            const obj3 = { noise_canceller_error: KRISP_INIT_ERROR2 };
            closure_130_1(closure_130_3[44]).track(closure_130_18.VOICE_PROCESSING, obj3);
            c4 = 0;
            closure_130_108 = false;
            c6 = 3;
            const obj9 = closure_130_1(closure_130_3[44]);
          } else {
            const _parseInt = parseInt;
            message = closure_129_4.message;
            closure_129_3 = parseInt(closure_129_4.message.substring(message.indexOf(": ") + 1));
            const _isNaN = isNaN;
            if (!isNaN(closure_129_3)) {
              if (0 !== closure_129_3) {
                let KRISP_INIT_ERROR = closure_129_3;
              }
              KRISP_INIT_ERROR2 = KRISP_INIT_ERROR;
            }
            KRISP_INIT_ERROR = closure_130_48.KRISP_INIT_ERROR;
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_108 = false;
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_0 = closure_130_1(closure_130_3[65]).requireModule("discord_krisp");
            closure_130_109 = true;
            const getSdkVersion = closure_129_0.getSdkVersion;
            let sdkVersion;
            if (getSdkVersion != null) {
              sdkVersion = getSdkVersion();
            }
            closure_130_111 = sdkVersion;
            const getSuppressionLevel = closure_129_0.getSuppressionLevel;
            let suppressionLevel;
            if (getSuppressionLevel != null) {
              suppressionLevel = getSuppressionLevel();
            }
            c0 = suppressionLevel;
            if (suppressionLevel == null) {
              c0 = 100;
            }
            closure_130_112 = c0;
            const getNcModels = closure_129_0.getNcModels;
            if (getNcModels != null) {
              const ncModels = getNcModels();
              ncModels.then((result) => {
                closure_114 = result;
                closure_1_69.emitChange();
              });
            }
            closure_130_69.emitChange();
            obj2 = closure_130_1(closure_130_3[65]);
            c5 = 4;
            c6 = 1;
            obj5 = { value: obj2.ensureModule("discord_voice"), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = closure_130_1(closure_130_3[65]);
          closure_129_1 = obj.requireModule("discord_voice");
          const setupKrispPath = closure_129_1.setupKrispPath;
          if (setupKrispPath != null) {
            setupKrispPath();
          }
          c4 = 1;
        }
        c4 = 0;
        closure_130_108 = false;
        c6 = 3;
        obj6 = { value, done: true };
        return obj6;
      }
    } catch (tmp72) {
      closure_3 = tmp72;
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
};
let closure_166 = async function _downloadOpenH() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp8;
          closure_128_0 = undefined;
          closure_128_3 = undefined;
          closure_128_4 = undefined;
          closure_128_5 = undefined;
          c3 = 1;
          let message = "";
          let fetchedFromNetwork = false;
          const _URL = URL;
          const parsed = URL.parse(closure_2_65);
          if (null === parsed) {
            logger.log("OpenH264 URL ", parsed, " is invalid");
            c3 = 0;
            c5 = 3;
            const obj1 = { value: undefined, done: true };
            return obj1;
          } else {
            const parts = parsed.pathname.split("/");
            const replaced = parts[parts.length - 1].replace(".bz2", "");
            closure_128_3 = replaced;
            c3 = 2;
            const obj11 = DesktopNativeUtilsDefault;
            c4 = 3;
            c5 = 1;
            let obj2 = {
              value: obj11.downloadOpenH264(closure_2_65, replaced, closure_2_66, (arg0) => {
                logger.log("OpenH264 download status", arg0);
              }),
              done: false,
            };
            return obj2;
          }
        }
      } else {
        if (1 === tmp8) {
          c3 = 0;
          closure_128_7 = closure_2;
          closure_129_57.error("OpenH264 download failed", closure_128_7);
          c5 = 3;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_6 = closure_2;
            closure_129_57.error("OpenH264 download failed", closure_128_6);
            message = closure_128_6.message;
            closure_128_0 = false;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_4 = value;
                closure_129_57.log("OpenH264 is ready", closure_128_4);
                fetchedFromNetwork = closure_128_4.fetchedFromNetwork;
                closure_128_0 = true;
                c3 = 1;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_5 = value;
              closure_129_57.log("OpenH264 cleanup", closure_128_5);
            }
            c3 = 0;
          }
          obj2 = closure_129_1(closure_129_3[44]);
          let obj4 = { success: closure_128_0, fetched_from_network: fetchedFromNetwork, error_message: message };
          obj2.track(closure_129_18.VIDEO_OPENH264_DOWNLOADED, obj4);
        }
        obj4 = closure_129_1(closure_129_3[65]);
        const items = [closure_128_3];
        c4 = 4;
        c5 = 1;
        const obj5 = { value: obj4.cleanupUnusedOpenH264Files(items), done: false };
        return obj5;
      }
    } catch (tmp52) {
      closure_2 = tmp52;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp52;
      } else if (tmp2 === tmp54) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
function setAudioSubsystem(arg0) {
  if (arg0 === constants8.AUTOMATIC) {
    DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT2 === undefined) {
      DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    }
    let tmp24 = settingsByContext[DEFAULT2];
    if (null == tmp24) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT2] = obj;
      tmp24 = obj;
      const tmp26 = PlatformUtils.isPlatformEmbedded || false;
    }
    const _Object2 = Object;
    const merged1 = Object.assign(tmp24, { automaticAudioSubsystem: true });
    const Storage2 = Storage6.Storage;
    result = Storage2.set(MediaEngineStore, settingsByContext);
    result.queueAudioSubsystem(tmp.EXPERIMENTAL);
  } else {
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      const obj2 = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj2.modeOptions = obj;
      obj2.localMutes = {};
      obj2.disabledLocalVideos = {};
      obj2.videoToggleStateMap = {};
      obj2.localVolumes = {};
      const obj3 = {};
      const merged2 = Object.assign(closure_34);
      obj2.audioMixerSettings = obj3;
      obj2.localPans = {};
      obj2.inputVolume = outputVolume;
      obj2.outputVolume = outputVolume;
      obj2.inputDeviceId = DEFAULT_DEVICE_ID;
      obj2.outputDeviceId = DEFAULT_DEVICE_ID;
      obj2.videoDeviceId = DEFAULT_DEVICE_ID;
      obj2.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj2;
      tmp3 = obj2;
      const tmp5 = PlatformUtils.isPlatformEmbedded || false;
    }
    const _Object = Object;
    const merged3 = Object.assign(tmp3, { automaticAudioSubsystem: false });
    const Storage = Storage6.Storage;
    const result1 = Storage.set(MediaEngineStore, settingsByContext);
    result.setAudioSubsystem(arg0);
  }
}
function handleUserSettingsModal(section) {
  if (section.section === constants4.VOICE) {
    if (!c79) {
      result
        .enable()
        .then(() =>
          disabledLocalVideos(dependencyMap[45]).dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: true,
            unmute: false,
          }),
        );
      const enableResult = result.enable();
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
        ({ periodMs: obj.metrics_period_ms, queueName: obj.queue_name, taskMetrics } = taskMetrics);
        obj.total_tasks = taskMetrics.reduce((acc, count) => acc + count.count, 0);
        taskMetrics = taskMetrics.taskMetrics;
        obj.total_exec_time_ns = taskMetrics.reduce((acc, totalExecTimeNs) => acc + totalExecTimeNs.totalExecTimeNs, 0);
        const items = [];
        HermesBuiltin.arraySpread(taskMetrics.taskMetrics, 0);
        const sorted = items.sort(
          (longestExecTimeNs, longestExecTimeNs2) =>
            longestExecTimeNs2.longestExecTimeNs - longestExecTimeNs.longestExecTimeNs,
        );
        const items1 = [];
        HermesBuiltin.arraySpread(taskMetrics.taskMetrics, 0);
        const sorted1 = items1.sort(
          (longestQueueTimeNs, longestQueueTimeNs2) =>
            longestQueueTimeNs2.longestQueueTimeNs - longestQueueTimeNs.longestQueueTimeNs,
        );
        let num = 0;
        do {
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
const injectMediaEngine = fn(1909);
const getSystemAnalyticsInfo = fn(4605).getSystemAnalyticsInfo;
let Constants = fn(1074);
({ AnalyticEvents: closure_18, AppStates: closure_19, InputModes } = Constants);
({ RTCConnectionStates: closure_21, UserSettingsSections: closure_22, VideoToggleState: closure_23 } = Constants);
Constants = fn(4602);
({
  DARWIN_SCKIT_VERSION: closure_24,
  DARWIN_SCKIT_AUDIO_VERSION: closure_25,
  WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD: closure_26,
  WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER: closure_27,
  WINDOWS_GRAPHICS_CAPTURE_BUILD: closure_28,
  WINDOWS_GRAPHICS_CAPTURE_SEMVER: closure_29,
  WINDOWS_SOUNDSHARE_HOOK_VERSION: closure_30,
  WINDOWS_SOUNDSHARE_NONHOOK_VERSION: items,
} = Constants);
const NativePermissionConstants = fn(4770);
({ NativePermissionStates: closure_32, NativePermissionTypes } = NativePermissionConstants);
let closure_34 = fn(13997).DEFAULT_AUDIO_MIXER_SETTINGS;
const UserSettingsConstants = fn(1084);
({ ProtoAudioSettingsContextTypes: closure_35, UserSettingsTypes: closure_36 } = UserSettingsConstants);
const InputProfile = fn(13998).InputProfile;
Constants = fn(4585);
({
  AudioSubsystems: closure_38,
  DARWIN_H265_VERSION: closure_39,
  DEFAULT_VOLUME: closure_40,
  DEFAULT_STREAM_VOLUME: closure_41,
  DEFAULT_DEVICE_ID,
} = Constants);
({ DeviceTypes: closure_43, DISABLED_DEVICE_ID } = Constants);
({ ExperimentFlags: closure_45, Features } = Constants);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const NoiseCancellerError = Constants.NoiseCancellerError;
const SpatialAudioStatus = Constants.SpatialAudioStatus;
({
  VideoFilterError: closure_50,
  VideoFilterTarget: closure_51,
  MediaTypes: closure_52,
  QUEUE_METRICS_INTERVAL_MS: closure_53,
  VideoToggleReason: closure_54,
  SIMULCAST_HQ_QUALITY: closure_55,
  SIMULCAST_LQ_QUALITY: closure_56,
} = Constants);
new LoggerDefault("MediaEngineStore");
const MediaEngineStore = "MediaEngineStore";
let closure_59 = { left: 1, right: 1 };
const graphicsCaptureStaleFrameTimeoutMs = 5 * DurationsDefault.Millis.SECOND;
let closure_61 = 2 * DurationsDefault.Millis.SECOND;
let closure_62 = 30 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
const deep_noise_suppression = "deep_noise_suppression";
let c65 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
let c66 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
let c67 = 0;
let obj = {
  WEBCAM: "WEBCAM",
  INTEGRATED: "INTEGRATED",
  BLUETOOTH: "BLUETOOTH",
  AIRPLAY: "AIRPLAY",
  HEADSET: "HEADSET",
};
obj = {
  mode: InputModes.VOICE_ACTIVITY,
  modeOptions: { threshold: -84, autoThreshold: false, vadUseKrisp: false },
  echoCancellation: false,
  noiseSuppression: false,
  automaticGainControl: false,
  noiseCancellation: false,
  bypassSystemInputProcessing: true,
};
let closure_70 = {
  [InputProfile.CUSTOM]: {},
  [InputProfile.VOICE_ISOLATION]: {
    modeOptions: { autoThreshold: true, vadUseKrisp: true },
    echoCancellation: true,
    noiseSuppression: false,
    automaticGainControl: true,
    noiseCancellation: true,
    bypassSystemInputProcessing: true,
  },
  [InputProfile.STUDIO]: obj,
};
let closure_71 = { modeOptions: { vadUseKrisp: false }, noiseCancellation: false, noiseSuppression: true };
fn(4615);
const BaseConnectionEvent = fn(4615);
let result = BaseConnectionEvent.initializeMediaEngine(BaseConnectionEvent.determineMediaEngine());
obj.enableNativeLogger(true);
const settingsByContext = {};
items = [MediaEngineContextTypes.DEFAULT];
let set = new Set(items);
let c79 = result.supports(Features.AUTO_ENABLE);
let required = false;
let DEFAULT2 = MediaEngineContextTypes.STREAM;
let c82 = 0;
let c83 = false;
let closure_84 = performance.now();
let c85 = null;
const inputDevices = {
  [DEFAULT_DEVICE_ID]: {
    id: DEFAULT_DEVICE_ID,
    index: 0,
    name: "No Input Devices",
    disabled: true,
    guid: "Boolean",
    hardwareId: "ip",
    containerId: "isArray",
  },
};
const outputDevices = {
  [DEFAULT_DEVICE_ID]: {
    id: DEFAULT_DEVICE_ID,
    index: 0,
    name: "No Output Devices",
    disabled: true,
    guid: "call",
    hardwareId: "location",
    containerId: "format",
  },
};
let dependencyMap = {
  [DEFAULT_DEVICE_ID]: {
    id: DEFAULT_DEVICE_ID,
    index: 0,
    name: "No Video Devices",
    disabled: true,
    guid: "call",
    hardwareId: "httpServerLocation",
    containerId: "fill",
  },
};
const timeout = new fn(4447).Timeout();
let c90 = false;
let mute = false;
let closure_92 = false;
let c93 = false;
let closure_94 = false;
let closure_95 = DISABLED_DEVICE_ID;
let videoDeviceId = DISABLED_DEVICE_ID;
let c97 = false;
let c98 = false;
const timeout1 = new fn(4447).Timeout();
let c100 = false;
let c101 = false;
let c102 = false;
let closure_103 = false;
const timeout2 = new fn(4447).Timeout();
let c105;
let c106;
let c107 = false;
let c108 = false;
let c109 = false;
let c110 = false;
let c111;
let level;
let model;
let closure_114 = [];
let c116 = null;
let c117 = false;
let c118 = false;
let c119 = false;
let c120 = false;
let UNKNOWN = SpatialAudioStatus.UNKNOWN;
let closure_122 = {};
let c123 = null;
let c125 = false;
NativePermissionUtils.hasPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: false });
NativePermissionUtils.hasPermission(NativePermissionTypes.CAMERA, { showAuthorizationError: false });
const set1 = new Set();
let c127 = true;
const set2 = new Set();
let c129;
const appSupported = {};
let c131 = null;
let c132 = null;
let c133 = null;
let enabled = true;
let c135 = false;
const timeout3 = new fn(4447).Timeout();
let global = false;
let c138 = false;
let c139 = false;
let c140 = false;
let closure_141 = {};
let items1 = [, , , , , , , , ,];
({
  KRISP_INIT_ERROR: arr2[0],
  KRISP_INIT_ERROR_NATIVE: arr2[1],
  KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED: arr2[2],
  KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED: arr2[3],
  KRISP_INIT_ERROR_UNSIGNED: arr2[4],
  KRISP_INIT_ERROR_GLOBAL_INIT: arr2[5],
  KRISP_INIT_ERROR_WEIGHT_8K: arr2[6],
  KRISP_INIT_ERROR_WEIGHT_16K: arr2[7],
  KRISP_INIT_ERROR_WEIGHT_32K: arr2[8],
  KRISP_INIT_ERROR_WEIGHT_VAD: arr2[9],
} = NoiseCancellerError);
const set3 = new Set(items1);
let c154 = ">=10.0.15063";
const re157 = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
const Store = initializeDefault.Store;
class MediaEngineStore extends Store {}
const prototype = MediaEngineStore.prototype;
prototype["initialize"] = function initialize() {
  let self = this;
  if (navigation == null) {
    const tmp7 = new InputWatcherDefault(closure_72, self);
    navigation = tmp7;
  }
  timeout.start(closure_62, () => {
    logger.error("Device enumeration timed out");
    closure_1(1242).track(constants.DEVICE_ENUMERATION_TIMEOUT, {});
  });
  obj = closure_72;
  closure_72.on(pollMetrics(4615).MediaEngineEvent.Connection, (setAttenuation) => {
    pollMetrics = setAttenuation;
    closure_163();
    closure_145(setAttenuation);
    closure_146(setAttenuation);
    closure_153(setAttenuation);
    const tmp6 = closure_144();
    setAttenuation.setAttenuation(tmp6.attenuation, tmp6.attenuateWhileSpeakingSelf, tmp6.attenuateWhileSpeakingOthers);
    setAttenuation.setQoS(tmp6.qos);
    if (obj.isWindows()) {
      setAttenuation.setExperimentFlag(closure_45.H265_HARDWARE_ONLY, true);
      closure_143().then((result) => {
        setAttenuation.setExperimentFlag(closure_2_45.H265_HARDWARE_DECODE_AVAILABLE, result);
      });
      const promise = closure_143();
    } else {
      let tmp9Result = tmp9(1115);
      if (tmp9Result.isMac()) {
        setAttenuation.setExperimentFlag(closure_45.H265_HARDWARE_DECODE_AVAILABLE, true);
      }
    }
    tmp9Result = tmp9(1115);
    obj = pollMetrics(1115);
    if (tmp17) {
      setAttenuation.setExperimentFlag(closure_45.USE_LIBOPENH264_DECODER, true);
    }
    tmp17 = tmp9Result.isLinux() && tmp6.openH264Enabled;
    if (tmp9Result1.getLowLatencyRateControlExperimentConfig({ location: "setupMediaEngine" }).enabled) {
      setAttenuation.setExperimentFlag(closure_45.LOW_LATENCY_RATE_CONTROL, true);
    }
    setAttenuation.setExperimentFlag(closure_45.RESET_DECODER_ON_ERRORS, true);
    setAttenuation.setExperimentFlag(closure_45.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true);
    tmp9Result1 = pollMetrics(14013);
    if (obj5.getConfig({ location: "MediaEngineStore" }).swallowVolumeOnlySpeakingEvents) {
      setAttenuation.setExperimentFlag(closure_45.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, true);
    }
    result = setAttenuation.setMinimumJitterBufferLevel(80);
    if (setAttenuation.context === constants4.STREAM) {
      const result1 = setAttenuation.setSoundshareDiscardRearChannels(closure_158(closure_87));
    }
    obj5 = closure_1(5420);
    if (tmp9Result2.isWindows()) {
      setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_ENCODE, true);
      setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
      setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_HARDWARE_DECODE, true);
    } else {
      if (tmp9Result3.isMac()) {
        setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
        setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_HARDWARE_DECODE, true);
        let arch;
        if (window != null) {
          if (DiscordNative != null) {
            arch = DiscordNative.os.arch;
          }
        }
        let satisfiesResult = "arm64" === arch;
        if (satisfiesResult) {
          let tmp25Result = closure_1(14014);
          let release;
          if (window != null) {
            if (DiscordNative2 != null) {
              release = DiscordNative2.os.release;
            }
          }
          satisfiesResult = tmp25Result.satisfies(release, closure_39);
        }
        setAttenuation.setExperimentFlag(closure_45.H265_DISABLE_ENCODE, !satisfiesResult);
      } else {
        if (tmp9Result4.isLinux()) {
          if (tmp9Result5.getAV1EncodeExperimentLinuxConfig("MediaEngineStore").enabled) {
            setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_ENCODE, true);
          }
          setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
          tmp9Result5 = tmp9(14059);
        } else {
          let isIOSResult = tmp9(1115).isIOS();
          if (!isIOSResult) {
            isIOSResult = tmp9(1115).isAndroid();
            const tmp9Result7 = tmp9(1115);
          }
          if (isIOSResult) {
            setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
            setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_HARDWARE_DECODE, true);
          }
          const tmp9Result6 = tmp9(1115);
        }
        tmp9Result4 = tmp9(1115);
      }
      tmp9Result3 = tmp9(1115);
    }
    tmp9Result2 = pollMetrics(1115);
    if (tmp9Result8.isWeb()) {
      tmp25Result = closure_1(14060);
      setAttenuation.setExperimentFlag(
        closure_45.BROWSER_HEVC,
        tmp25Result.getConfig({ location: "MediaEngineStore" }).enabled,
      );
    }
    tmp9Result8 = pollMetrics(1115);
    enabled = pollMetrics(1115).isWindows();
    if (enabled) {
      let startsWithResult;
      if (closure_131 != null) {
        startsWithResult = closure_131.startsWith("AMD");
      }
      enabled = startsWithResult;
    }
    if (enabled) {
      enabled = tmp9(14061).getWmfGpuEncode("MediaEngineStore").enabled;
      const tmp9Result10 = tmp9(14061);
    }
    if (enabled) {
      setAttenuation.setExperimentFlag(closure_45.WMF_GPU_ENCODE, true);
    }
    const tmp9Result9 = pollMetrics(1115);
    let enabled2 = pollMetrics(1115).isWindows();
    if (enabled2) {
      let startsWithResult1;
      if (closure_131 != null) {
        startsWithResult1 = closure_131.startsWith("Intel");
      }
      enabled2 = startsWithResult1;
    }
    if (enabled2) {
      enabled2 = true === closure_132;
    }
    if (enabled2) {
      enabled2 = 1 === closure_133;
    }
    if (enabled2) {
      enabled2 = tmp9(14062).getWmfGpuEncodeIntel("MediaEngineStore").enabled;
      const tmp9Result12 = tmp9(14062);
    }
    if (enabled2) {
      setAttenuation.setExperimentFlag(closure_45.WMF_GPU_ENCODE, true);
      setAttenuation.setExperimentFlag(closure_45.INTEL_GPU_DISABLE, true);
    }
    const tmp9Result11 = pollMetrics(1115);
    let enabled3 = pollMetrics(1115).isWindows();
    if (enabled3) {
      let startsWithResult2;
      if (closure_131 != null) {
        startsWithResult2 = closure_131.startsWith("Intel");
      }
      enabled3 = startsWithResult2;
    }
    if (enabled3) {
      enabled3 = true === closure_132;
    }
    if (enabled3) {
      enabled3 = 1 === closure_133;
    }
    if (enabled3) {
      enabled3 = tmp9(14063).getWmfCpuEncodeIntel("MediaEngineStore").enabled;
      const tmp9Result14 = tmp9(14063);
    }
    if (enabled3) {
      setAttenuation.setExperimentFlag(closure_45.INTEL_GPU_DISABLE, true);
    }
    const tmp9Result13 = pollMetrics(1115);
    let enabled4 = pollMetrics(1115).isWindows();
    if (enabled4) {
      let startsWithResult3;
      if (closure_131 != null) {
        startsWithResult3 = closure_131.startsWith("Qualcomm");
      }
      enabled4 = startsWithResult3;
    }
    if (enabled4) {
      enabled4 = tmp9(14061).getWmfGpuEncode("MediaEngineStore").enabled;
      const tmp9Result16 = tmp9(14061);
    }
    if (enabled4) {
      setAttenuation.setExperimentFlag(closure_45.WMF_GPU_ENCODE, true);
    }
    const result2 = closure_72.setHasFullbandPerformance(closure_1(14064)());
    const result3 = setAttenuation.setRemoteAudioHistory(1000);
    const tmp5Result = closure_144(setAttenuation.context);
    const result4 = setAttenuation.setPostponeDecodeLevel(100);
    const keys = Object.keys(tmp5Result.localMutes);
    for (const item10289 of keys) {
      if (item10289 !== closure_11.getId()) {
        let setLocalMuteResult = arg0.setLocalMute(item10289, tmp5Result.localMutes[item10289]);
      }
      continue;
    }
    const keys1 = Object.keys(tmp5Result.localVolumes);
    for (const item10308 of keys1) {
      if (item10308 !== closure_11.getId()) {
        let setLocalVolumeResult = arg0.setLocalVolume(item10308, tmp5Result.localVolumes[item10308]);
      }
      continue;
    }
    const keys2 = Object.keys(tmp5Result.localPans);
    for (const item10327 of keys2) {
      let rect = tmp5Result.localPans[item10327];
      let setLocalPanResult = arg0.setLocalPan(item10327, rect.left, rect.right);
      continue;
    }
    const keys3 = Object.keys(tmp5Result.disabledLocalVideos);
    for (const item10343 of keys3) {
      let result5 = arg0.setLocalVideoDisabled(item10343, tmp5Result.disabledLocalVideos[item10343]);
      continue;
    }
    setAttenuation.on(pollMetrics(4615).BaseConnectionEvent.Speaking, (userId, speakingFlags, arg2, voiceDb) => {
      closure_1(573);
      obj = { type: "SPEAKING", context: setAttenuation.context, userId, speakingFlags, voiceDb };
      obj.dispatch(obj);
    });
    if (setAttenuation.context === constants4.DEFAULT) {
      c98 = false;
      setAttenuation.on(tmp84(4615).BaseConnectionEvent.SpeakingWhileMuted, () => {
        c98 = true;
        if (!c98) {
          closure_1_69.emitChange();
        }
        closure_1_99.start(closure_1_61, () => {
          c98 = false;
          closure_1_69.emitChange();
        });
      });
    }
    setAttenuation.on(pollMetrics(4615).BaseConnectionEvent.DesktopSourceEnd, (endReason, errorCode) => {
      closure_1(573);
      let settings = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason, errorCode };
      settings = { context: setAttenuation.context };
      settings.settings = settings;
      settings.dispatch(settings);
    });
    setAttenuation.on(pollMetrics(4615).BaseConnectionEvent.InteractionRequired, (required) => {
      closure_1_1(573);
      obj = { type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required };
      obj.dispatch(obj);
    });
    setAttenuation.on(
      pollMetrics(4615).BaseConnectionEvent.VideoHookInitialize,
      (backend, format, framebuffer_format, sample_count, success, reinitialization) => {
        desktopSource = undefined;
        if (closure_1_74 != null) {
          desktopSource = closure_1_74.desktopSource;
        }
        if (null != desktopSource) {
          closure_1_1(1242);
          obj = { backend, format, framebuffer_format, sample_count, success, reinitialization };
          let desktopSource1;
          if (closure_1_74 != null) {
            desktopSource1 = closure_1_74.desktopSource;
          }
          const merged = Object.assign(closure_1_1(4695)(desktopSource1));
          obj.track(constants.VIDEOHOOK_INITIALIZED, obj);
          const tmp15 = closure_1_1(4695);
        }
      },
    );
    setAttenuation.on(pollMetrics(4615).BaseConnectionEvent.NoiseCancellationError, closure_151);
    setAttenuation.on(pollMetrics(4615).BaseConnectionEvent.VoiceActivityDetectorError, closure_151);
    setAttenuation.on(pollMetrics(4615).BaseConnectionEvent.SdpError, (operation, error, type, sdp) => {
      closure_1_1(1242);
      obj = { operation, error, type, sdp };
      obj.track(constants.SDP_ERROR, obj);
    });
    setAttenuation.on(pollMetrics(4615).BaseConnectionEvent.VideoState, (videoState) => {
      closure_1(573);
      obj = { type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState, context: setAttenuation.context };
      obj.dispatch(obj);
    });
    setAttenuation.setBitRate(bitrate.bitrate);
    const result6 = setAttenuation.applyVideoQualityMode(mode.mode);
    const tmp9Result15 = pollMetrics(1115);
    let isWindowsResult = pollMetrics(1115).isWindows();
    if (isWindowsResult) {
      isWindowsResult = closure_72.supports(constants3.ASYNC_VIDEO_INPUT_DEVICE_INIT);
    }
    if (isWindowsResult) {
      const result7 = closure_72.setAsyncVideoInputDeviceInit(true);
    }
    const tmp84Result = pollMetrics(1115);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.DeviceChange, (inputDevices, outputDevices, videoDevices) => {
    timeout.stop();
    closure_1(573);
    obj = { type: "MEDIA_ENGINE_DEVICES", inputDevices, outputDevices, videoDevices };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.VolumeChange, (inputVolume, outputVolume) => {
    closure_1(573);
    obj = { type: "AUDIO_VOLUME_CHANGE", inputVolume, outputVolume };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.DesktopSourceEnd, (endReason, errorCode) => {
    closure_1(573);
    obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason, errorCode };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.AudioPermission, (granted) => {
    c125 = true;
    closure_1(573);
    obj = { type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.VideoPermission, (granted) => {
    closure_1(573);
    obj = { type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted };
    obj.dispatch(obj);
  });
  closure_72.on(
    pollMetrics(4615).MediaEngineEvent.WatchdogTimeout,
    asyncGeneratorStep(async () => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              let status;
              closure_129_1 = undefined;
              const _window = window;
              if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL) {
                c4 = 1;
                let obj7 = closure_1(4554);
                const obj1 = { message: { message: "Voice Watchdog Timeout" } };
                c5 = 2;
                c6 = 1;
                const obj2 = { value: obj7.submitLiveCrashReport(obj1), done: false };
                return obj2;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_129_2 = closure_3;
            if (typeof closure_129_2.status === "number") {
              status = closure_129_2.status;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c4 = 0;
            }
          } else {
            if (3 === tmp7) {
              c4 = 0;
              closure_129_3 = closure_3;
              closure_130_57.error("Failed to flush voice watchdog timeout analytics event", closure_129_3);
              if (closure_129_1) {
                closure_130_57.info("Relaunching app due to voice watchdog timeout");
                const processUtils = closure_130_1(closure_130_3[61]).processUtils;
                c5 = 5;
                c6 = 1;
                let obj4 = { value: processUtils.setCrashReason("voice-watchdog-timeout"), done: false };
                return obj4;
              } else {
                c6 = 3;
              }
            } else if (4 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                c4 = 0;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const Storage = closure_130_0(closure_130_3[62]).Storage;
              const _Date = Date;
              result = Storage.set("discord_watchdog_restart_timestamp", Date.now().toString());
              const app = closure_130_1(closure_130_3[61]).app;
              app.relaunch();
              const str = Date.now();
            }
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = status;
          if (status == null) {
            c0 = 200;
          }
          const _HermesInternal = HermesInternal;
          closure_130_57.warn("Watchdog timeout, report submission status: " + c0);
          closure_129_1 = null != closure_130_1(closure_130_3[61]).processUtils.setCrashReason;
          c4 = 2;
          obj4 = closure_130_1(closure_130_3[44]);
          const obj6 = { minidump_submission_error: status, will_restart: closure_129_1 };
          c5 = 4;
          c6 = 1;
          obj7 = { value: obj4.track(closure_130_18.VOICE_WATCHDOG_TIMEOUT, obj6, { flush: true }), done: false };
          return obj7;
        } catch (tmp52) {
          closure_3 = tmp52;
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
    }),
  );
  closure_72.on(pollMetrics(4615).MediaEngineEvent.VideoInputInitialized, (description) => {
    closure_1(1242);
    obj = {
      device_name: description.description.name,
      time_to_first_frame_ms: null,
      timed_out: null,
      activity: null,
      media_session_id: null,
      rtc_connection_id: null,
    };
    let rounded = null;
    if (!description.initializationTimerExpired) {
      const _Math = Math;
      rounded = Math.round(description.timeToFirstFrame * closure_1(1090).Millis.SECOND);
    }
    obj.time_to_first_frame_ms = rounded;
    ({ initializationTimerExpired: obj2.timed_out, entropy: obj2.activity } = description);
    obj.media_session_id = RTCConnectionStore.getMediaSessionId();
    obj.rtc_connection_id = RTCConnectionStore.getRTCConnectionId();
    obj.track(constants.VIDEO_INPUT_INITIALIZED, obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.AudioInputInitialized, (description) => {
    closure_1(1242);
    obj = {
      device_name: description.description.name,
      time_to_initialized_ms: Math.round(description.timeToInitialized * closure_1(1090).Millis.SECOND),
      rtc_connection_id: RTCConnectionStore.getRTCConnectionId(),
    };
    obj.track(constants.AUDIO_INPUT_INITIALIZED, obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
    closure_1(573).dispatch({ type: "CLIPS_RESTART" });
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.ClipsInitFailure, (errMsg, applicationName) => {
    closure_2 = closure_82 < 3;
    closure_82 = closure_82 + 1;
    applicationName(573).wait(() => {
      applicationName(573);
      obj = { type: "CLIPS_INIT_FAILURE", errMsg, applicationName };
      obj.dispatch(obj);
      if (closure_2) {
        applicationName(573).dispatch({ type: "CLIPS_RESTART" });
        const tmpResult = applicationName(573);
      } else {
        const _HermesInternal = HermesInternal;
        logger.warn(
          "Clips init failure budget exhausted (" +
            c82 +
            " consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.",
        );
      }
    });
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.ClipsRecordingHealthy, () => {
    if (0 !== c82) {
      const _HermesInternal = HermesInternal;
      logger.info("Clips bridge reported healthy; resetting restart budget (was " + c82 + ").");
      c82 = 0;
    }
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.ClipsRecordingReadyChanged, (arg0) => {
    if (closure_83 !== arg0) {
      const _HermesInternal = HermesInternal;
      logger.info("Clips recorder ready changed: " + arg0);
      closure_83 = arg0;
    }
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.ClipsBridgeIdleShutdown, () => {
    logger.info("Clips bridge idle shutdown");
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.ClipsRecordingEnded, (arg0, soundshareId) => {
    let id;
    if (_null != null) {
      desktopSource = _null.desktopSource;
      if (desktopSource != null) {
        id = desktopSource.id;
      }
    }
    if (id === arg0) {
      let tmp3 = null != soundshareId;
      if (tmp3) {
        soundshareId = undefined;
        if (desktopSource != null) {
          const desktopSource2 = desktopSource.desktopSource;
          if (desktopSource2 != null) {
            soundshareId = desktopSource2.soundshareId;
          }
        }
        tmp3 = soundshareId !== soundshareId;
      }
      if (tmp3) {
        result = HookAll.cancelAttachToProcess(soundshareId);
      }
      _null = null;
    }
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.NativeScreenSharePickerUpdate, (existing, content) => {
    closure_1(573);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing, content };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.NativeScreenSharePickerCancel, (existing) => {
    closure_1(573);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.NativeScreenSharePickerError, (error) => {
    closure_1(573);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.AudioDeviceModuleError, (audio_device_module, code, device_name) => {
    closure_1(1242);
    obj = { audio_device_module, code, device_name };
    obj.track(constants.AUDIO_DEVICE_MODULE_ERROR, obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.VideoCodecError, (mode) => {
    if ("encode" === mode.mode) {
      let VIDEO_DECODE_ERROR = pollMetrics(9110).AVError.VIDEO_ENCODE_ERROR;
      let tmp3 = pollMetrics;
    } else {
      VIDEO_DECODE_ERROR = pollMetrics(9110).AVError.VIDEO_DECODE_ERROR;
      tmp3 = pollMetrics;
    }
    obj = { videoCodec: mode.codecStandard, errorMessage: mode.message };
    if (VIDEO_DECODE_ERROR === tmp3(9110).AVError.VIDEO_ENCODE_ERROR) {
      obj = { type: VIDEO_DECODE_ERROR };
      const merged = Object.assign(obj);
      obj.videoEncoder = mode.implName;
    } else {
      obj = { type: VIDEO_DECODE_ERROR };
      const merged1 = Object.assign(obj);
      obj.videoDecoder = mode.implName;
    }
    tmp3(9110).reportAVError(obj);
    const tmp3Result = tmp3(9110);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.ConnectionStats, (arr) => {
    closure_1(573);
    obj = {
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: arr.map((connection) => {
        connection = connection.connection;
        obj = {
          stats: connection.stats,
          mediaEngineConnectionId: connection.mediaEngineConnectionId,
          version: null,
          context: connection.context,
        };
        closure_67 = tmp + 1;
        obj.version = +closure_67;
        return obj;
      }),
    };
    obj.dispatch(obj);
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.VoiceProcessingError, handleVoiceProcessingError);
  closure_72.on(pollMetrics(4615).MediaEngineEvent.VideoFilterError, handleVideoFilterError);
  closure_72.on(pollMetrics(4615).MediaEngineEvent.SpatialAudioStatus, handleSpatialAudioStatus);
  closure_72.on(pollMetrics(4615).MediaEngineEvent.VoiceQueueMetrics, (taskMetrics) => {
    const tmp = processQueueMetricsForAnalytics(taskMetrics);
    if (null !== tmp) {
      closure_1(1242).track(constants.VOICE_QUEUE_METRICS, tmp);
      obj = closure_1(1242);
    }
  });
  result = closure_72.setOnVideoContainerResized((streamId, width, height) => {
    width(573).wait(() => {
      width(573);
      obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions: null };
      const size = { width, height };
      obj.dimensions = size;
      return obj.dispatch(obj);
    });
  });
  (function setGamescopeVaapiEnabled() {
    const self = this;
    const apply = closure_1_164.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  navigation.reset();
  getSystemAnalyticsInfo().then((result) => {
    if (null != result) {
      ({ gpu_brand: closure_1_131, has_intel_hybrid_igpu: closure_1_132, gpu_count: closure_1_133 } = result);
    }
  });
  closure_72.on(pollMetrics(4615).MediaEngineEvent.SystemMicrophoneModeChange, (arg0) => {
    closure_129 = arg0;
    closure_1_72.eachConnection(updateConnectionVoiceProcessing);
    mediaEngineStore.emitChange();
  });
  let Storage = pollMetrics(510).Storage;
  value = Storage.get("audio");
  if (null != value) {
    const Storage2 = tmp10(510).Storage;
    obj = {};
    obj[MediaEngineContextTypes.DEFAULT] = value;
    let result1 = Storage2.set(MediaEngineStore, obj);
    const Storage3 = tmp10(510).Storage;
    Storage3.remove("audio");
  }
  const Storage4 = tmp10(510).Storage;
  value = Storage4.get(MediaEngineStore);
  if (value == null) {
    value = {};
  }
  let obj3 = _modDef12;
  obj3.each(value, (modeOptions) => {
    closure_1(12);
    let audioMixerSettings = {
      mode: constants2.VOICE_ACTIVITY,
      modeOptions: {
        threshold: -60,
        autoThreshold: pollMetrics(1115).isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      },
      vadUseKrispSettingVersion: 0,
      ncUseKrispSettingVersion: 0,
      ncUseKrispjsSettingVersion: 0,
      mute: false,
      deaf: false,
      echoCancellation: true,
      noiseSuppression: false,
      automaticGainControl: true,
      noiseCancellation: true,
      bypassSystemInputProcessing: true,
      hardwareEnabledVersion: 0,
      silenceWarning: true,
      attenuation: 0,
      attenuateWhileSpeakingSelf: false,
      attenuateWhileSpeakingOthers: true,
      localMutes: {},
      disabledLocalVideos: {},
      videoToggleStateMap: {},
      localVolumes: {},
      audioMixerSettings: null,
      audioMixerSettingsVersion: 0,
      localPans: null,
      inputVolume: null,
      outputVolume: null,
      inputDeviceId: null,
      outputDeviceId: null,
      videoDeviceId: null,
      qos: false,
      qosMigrated: false,
      videoHook: null,
      experimentalSoundshare2: null,
      useSystemScreensharePicker: null,
      h265Enabled: true,
      vadThrehsoldMigrated: false,
      aecDumpEnabled: false,
      openH264Enabled: true,
      sidechainCompression: true,
      sidechainCompressionSettingVersion: 1,
      sidechainCompressionStrength: 50,
      automaticAudioSubsystem: true,
      activeInputProfile: null,
    };
    audioMixerSettings = {};
    const merged = Object.assign(closure_1_34);
    audioMixerSettings.audioMixerSettings = audioMixerSettings;
    audioMixerSettings.localPans = {};
    audioMixerSettings.inputVolume = outputVolume;
    audioMixerSettings.outputVolume = outputVolume;
    audioMixerSettings.inputDeviceId = videoDeviceId;
    audioMixerSettings.outputDeviceId = videoDeviceId;
    audioMixerSettings.videoDeviceId = videoDeviceId;
    audioMixerSettings.videoHook = closure_1_72.supports(constants3.VIDEO_HOOK);
    audioMixerSettings.defaultsDeep(modeOptions, audioMixerSettings);
    if (tmp8) {
      let tmp2Result = pollMetrics(14065);
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
    let supportsResult = closure_1_72.supports(constants3.SIDECHAIN_COMPRESSION);
    if (supportsResult) {
      supportsResult = modeOptions.sidechainCompressionSettingVersion < 1;
    }
    if (supportsResult) {
      modeOptions.sidechainCompressionSettingVersion = 1;
      modeOptions.sidechainCompression = true;
    }
    if (modeOptions.audioMixerSettingsVersion < 3) {
      modeOptions.audioMixerSettingsVersion = 3;
      const obj1 = {};
      const merged1 = Object.assign(closure_1_34);
      modeOptions.audioMixerSettings = obj1;
    }
    tmp2Result = pollMetrics(1115);
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
    const tmp3 = pollMetrics(1115).isPlatformEmbedded || false;
    tmp8 = null != modeOptions.modeOptions && typeof modeOptions.modeOptions.shortcut === "string";
  });
  applySettings();
  let tmp10Result = tmp10(1115);
  let isWindowsResult = tmp10Result.isWindows();
  if (!isWindowsResult) {
    tmp10Result = tmp10(1115);
    isWindowsResult = tmp10Result.isLinux();
  }
  if (!isWindowsResult) {
    isWindowsResult = tmp10(1115).isMac();
    const tmp10Result1 = tmp10(1115);
  }
  if (isWindowsResult) {
    if (!c108) {
      if (!c109) {
        c108 = true;
        (function setupKrispNativeModule() {
          const self = this;
          const apply = closure_1_165.apply;
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
          const apply = closure_1_166.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
      resetProbingState();
      tmp10Result2 = tmp10(1115);
      if (tmp10Result3.isDesktop()) {
        if (tmp10(1115).isPlatformEmbedded) {
          if (!c140) {
            pollMetrics = function pollMetrics() {
              const self = this;
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            importDefault = async function _pollMetrics(dependencyMap) {
              if (dependencyMap === 2) {
                dependencyMap = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (dependencyMap === 1) {
                  throw value;
                } else if (dependencyMap === 2) {
                  obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  dependencyMap = 2;
                  if (0 === c2) {
                    if (dependencyMap === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (dependencyMap === 2) {
                      dependencyMap = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c0 = 0;
                      closure_128_0 = undefined;
                      closure_128_1 = undefined;
                      const promise = new Promise((arg0) => {
                        closure_0 = arg0;
                        closure_1_1(closure_1_3[65]).pollQueueMetrics((arg0) => {
                          closure_0(arg0);
                        });
                      });
                      c2 = 1;
                      dependencyMap = 1;
                      const obj1 = { value: promise, done: false };
                      return obj1;
                    }
                  } else if (dependencyMap === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (dependencyMap === 2) {
                    dependencyMap = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    closure_128_0 = value;
                    closure_128_0.periodMs = periodMs;
                    closure_128_1 = processQueueMetricsForAnalytics(closure_128_0);
                    if (null !== closure_128_1) {
                      obj = tmp4(dependencyMap[44]);
                      obj.track(constants.VOICE_QUEUE_METRICS, closure_128_1);
                    }
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_129_0, periodMs);
                    dependencyMap = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp22) {
                  dependencyMap = tmp;
                  throw tmp22;
                }
              }
            };
            c140 = true;
            let _setTimeout = setTimeout;
            let timerId = setTimeout(pollMetrics, closure_53);
          }
        }
      }
      tmp10Result3 = tmp10(1115);
      const tmp10Result4 = tmp10(1115);
      if (tmp78) {
        if (null === c85) {
          const codecSurvey = obj.getCodecSurvey();
          const nextPromise1 = codecSurvey.then((result) => {
            try {
              const _JSON = JSON;
              const parsed = JSON.parse(result);
              if (null != parsed) {
                if (null != tmp4.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  c85 = available_video_decoders.some((item) => "MediaFoundation H.264" === item);
                }
              }
              const _Error = Error;
              const error = new Error("decoder survey is not available");
              throw error;
            } catch (tmp11) {
              logger.error("Failed to parse codec survey", tmp11);
              c85 = false;
            }
          });
          codecSurvey
            .then((result) => {
              try {
                const _JSON = JSON;
                const parsed = JSON.parse(result);
                if (null != parsed) {
                  if (null != tmp4.available_video_decoders) {
                    const available_video_decoders = parsed.available_video_decoders;
                    c85 = available_video_decoders.some((item) => "MediaFoundation H.264" === item);
                  }
                }
                const _Error = Error;
                const error = new Error("decoder survey is not available");
                throw error;
              } catch (tmp11) {
                logger.error("Failed to parse codec survey", tmp11);
                c85 = false;
              }
            })
            .catch((error) => {
              logger.error("Failed to get codec survey", error);
              c85 = false;
            })
            .finally(() => {
              closure_1(573).dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
          const catchPromise = codecSurvey
            .then((result) => {
              try {
                const _JSON = JSON;
                const parsed = JSON.parse(result);
                if (null != parsed) {
                  if (null != tmp4.available_video_decoders) {
                    const available_video_decoders = parsed.available_video_decoders;
                    c85 = available_video_decoders.some((item) => "MediaFoundation H.264" === item);
                  }
                }
                const _Error = Error;
                const error = new Error("decoder survey is not available");
                throw error;
              } catch (tmp11) {
                logger.error("Failed to parse codec survey", tmp11);
                c85 = false;
              }
            })
            .catch((error) => {
              logger.error("Failed to get codec survey", error);
              c85 = false;
            });
        }
      }
      obj = {};
      obj[Features.VIDEO] = obj.supports(Features.VIDEO);
      obj[Features.DESKTOP_CAPTURE] = obj.supports(Features.DESKTOP_CAPTURE);
      obj[Features.HYBRID_VIDEO] = obj.supports(Features.HYBRID_VIDEO);
      self.waitFor(
        AuthenticationStore,
        BitRateStore,
        CertifiedDeviceStore,
        ChannelStore,
        ClipsStore,
        ExperimentStore,
        RTCConnectionStore,
        RunningGameStore,
        UserSettingsProtoStore,
        UserStore,
        VideoQualityModeStore,
      );
      tmp78 = tmp10(1115).isWindows() && tmp10(1115).isPlatformEmbedded;
    }
  }
  let promise = getSystemAnalyticsInfo();
  if (tmp10Result5.isWeb()) {
    if (obj.supports(Features.NOISE_CANCELLATION)) {
      c109 = true;
      mediaEngineStore.emitChange();
    }
  }
  tmp10Result5 = pollMetrics(1115);
  if (tmp10Result6.isWeb()) {
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp56 = value[DEFAULT];
    if (null == tmp56) {
      let obj1 = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      let obj2 = {
        threshold: -60,
        autoThreshold: tmp10(1115).isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj1.modeOptions = obj2;
      obj1.localMutes = {};
      obj1.disabledLocalVideos = {};
      obj1.videoToggleStateMap = {};
      obj1.localVolumes = {};
      obj3 = {};
      let merged = Object.assign(closure_34);
      obj1.audioMixerSettings = obj3;
      obj1.localPans = {};
      obj1.inputVolume = outputVolume;
      obj1.outputVolume = outputVolume;
      obj1.inputDeviceId = DEFAULT_DEVICE_ID;
      obj1.outputDeviceId = DEFAULT_DEVICE_ID;
      obj1.videoDeviceId = DEFAULT_DEVICE_ID;
      obj1.videoHook = obj.supports(Features.VIDEO_HOOK);
      value[DEFAULT] = obj1;
      tmp56 = obj1;
      const tmp57 = tmp10(1115).isPlatformEmbedded || false;
    }
    const _Object = Object;
    let merged1 = Object.assign(tmp56, { noiseCancellation: false });
    const Storage5 = tmp10(510).Storage;
    let result2 = Storage5.set(MediaEngineStore, value);
  }
  tmp10Result6 = pollMetrics(1115);
};
prototype["supports"] = function supports(arg0) {
  let tmp = arg0 === Features.VIDEO;
  if (tmp) {
    const VideoGuardExperiment = VideoGuardExperiment2.VideoGuardExperiment;
    tmp = !VideoGuardExperiment.getConfig({ location: "MediaEngineStore.supports" }).videoEnabled;
  }
  let supportsResult = !tmp;
  if (!tmp) {
    supportsResult = result.supports(arg0);
  }
  return supportsResult;
};
prototype["supportsInApp"] = function supportsInApp(arg0) {
  let tmp = arg0 === Features.VIDEO;
  if (tmp) {
    const VideoGuardExperiment = VideoGuardExperiment2.VideoGuardExperiment;
    tmp = !VideoGuardExperiment.getConfig({ location: "MediaEngineStore.supportsInApp" }).videoEnabled;
  }
  let tmp4 = !tmp;
  if (!tmp) {
    let supportsResult = appSupported[arg0];
    if (!supportsResult) {
      supportsResult = result.supports(arg0);
    }
    tmp4 = supportsResult;
  }
  return tmp4;
};
prototype["isSupported"] = function isSupported() {
  return result.supported();
};
prototype["isNoiseSuppressionSupported"] = function isNoiseSuppressionSupported() {
  return result.supports(Features.NOISE_SUPPRESSION);
};
prototype["isNoiseCancellationSupported"] = function isNoiseCancellationSupported() {
  return !c110;
};
prototype["isNoiseCancellationError"] = function isNoiseCancellationError() {
  return c117;
};
prototype["isAutomaticGainControlSupported"] = function isAutomaticGainControlSupported() {
  return result.supports(Features.AUTOMATIC_GAIN_CONTROL);
};
prototype["shouldOfferManualSubsystemSelection"] = function shouldOfferManualSubsystemSelection() {
  const supportsResult = result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
  let tmp3 = !supportsResult;
  if (!supportsResult) {
    tmp3 = result.supports(Features.LEGACY_AUDIO_SUBSYSTEM) || result.supports(Features.EXPERIMENTAL_AUDIO_SUBSYSTEM);
    const tmp4 =
      result.supports(Features.LEGACY_AUDIO_SUBSYSTEM) || result.supports(Features.EXPERIMENTAL_AUDIO_SUBSYSTEM);
  }
  return tmp3;
};
prototype["showBypassSystemInputProcessing"] = function showBypassSystemInputProcessing() {
  let supportsResult = result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
  if (supportsResult) {
    supportsResult = "experimental" === result.getAudioSubsystem();
  }
  return supportsResult;
};
prototype["isAdvancedVoiceActivitySupported"] = function isAdvancedVoiceActivitySupported() {
  return !c110;
};
prototype["isAecDumpSupported"] = function isAecDumpSupported() {
  return result.supports(Features.AEC_DUMP);
};
prototype["isSimulcastSupported"] = function isSimulcastSupported() {
  return result.supports(Features.VIDEO) && result.supports(Features.SIMULCAST);
};
prototype["getAecDump"] = function getAecDump() {
  return getSettings().aecDumpEnabled;
};
prototype["getMediaEngine"] = function getMediaEngine() {
  return result;
};
prototype["getVideoComponent"] = function getVideoComponent() {
  return result.Video;
};
prototype["getCameraComponent"] = function getCameraComponent() {
  return result.Camera;
};
prototype["getKrispSuppressionLevel"] = function getKrispSuppressionLevel() {
  let num = level;
  if (level == null) {
    num = 100;
  }
  return num;
};
prototype["getKrispEnableStats"] = function getKrispEnableStats() {
  return enabled;
};
prototype["isEnabled"] = function isEnabled() {
  return c79;
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
prototype["isSpatialAudioRequested"] = function isSpatialAudioRequested() {
  return c120;
};
prototype["getSpatialAudioStatus"] = function getSpatialAudioStatus() {
  return UNKNOWN;
};
prototype["hasContext"] = function hasContext(arg0) {
  return null != settingsByContext[arg0];
};
prototype["isSelfMutedTemporarily"] = function isSelfMutedTemporarily() {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  return DEFAULT === MediaEngineContextTypes.DEFAULT && mute;
};
prototype["isSelfMute"] = function isSelfMute() {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const self = this;
  const isEnabledResult = this.isEnabled();
  mute = !isEnabledResult;
  if (isEnabledResult) {
    mute = getSettings(DEFAULT).mute;
  }
  if (!mute) {
    mute = !NativePermissionUtils.didHavePermission(NativePermissionTypes.AUDIO);
  }
  if (!mute) {
    mute = self.isSelfDeaf(DEFAULT);
  }
  if (!mute) {
    mute = DEFAULT === MediaEngineContextTypes.DEFAULT && closure_92;
    const tmp8 = DEFAULT === MediaEngineContextTypes.DEFAULT && closure_92;
  }
  return mute;
};
prototype["shouldSkipMuteUnmuteSound"] = function shouldSkipMuteUnmuteSound() {
  return c97;
};
prototype["notifyMuteUnmuteSoundWasSkipped"] = function notifyMuteUnmuteSoundWasSkipped() {
  c97 = false;
};
prototype["isHardwareMute"] = function isHardwareMute() {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const self = this;
  let tmp2 = c135;
  if (c135) {
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
    tmp6 = CertifiedDeviceStore.isHardwareMute(self.getInputDeviceId()) || tmp2;
    const tmp8 = CertifiedDeviceStore.isHardwareMute(self.getInputDeviceId()) || tmp2;
  }
  return tmp6;
};
prototype["isHardwareMuteNoticeEnabled"] = function isHardwareMuteNoticeEnabled() {
  return enabled;
};
prototype["isSelfDeaf"] = function isSelfDeaf() {
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
  let tmp = closure_94;
  if (closure_94) {
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
  let STREAM = arg0;
  if (arg0 === undefined) {
    STREAM = MediaEngineContextTypes.STREAM;
  }
  let tmp2 = DEFAULT2 === STREAM;
  if (tmp2) {
    tmp2 = null != closure_74;
  }
  return tmp2;
};
prototype["isSoundSharing"] = function isSoundSharing() {
  let STREAM = arg0;
  if (arg0 === undefined) {
    STREAM = MediaEngineContextTypes.STREAM;
  }
  let tmp2 = DEFAULT2 === STREAM;
  if (tmp2) {
    tmp2 = null != goLiveSource;
  }
  if (tmp2) {
    const desktopSource = goLiveSource.desktopSource;
    let soundshareId;
    if (desktopSource != null) {
      soundshareId = desktopSource.soundshareId;
    }
    tmp2 = null != soundshareId;
  }
  return tmp2;
};
prototype["isLocalMute"] = function isLocalMute(id) {
  let DEFAULT = context;
  if (context === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp2 = id !== AuthenticationStore.getId();
  if (tmp2) {
    tmp2 = getSettings(DEFAULT).localMutes[id] || false;
    const tmp4 = getSettings(DEFAULT).localMutes[id] || false;
  }
  return tmp2;
};
prototype["supportsDisableLocalVideo"] = function supportsDisableLocalVideo() {
  return result.supports(Features.DISABLE_VIDEO);
};
prototype["isLocalVideoDisabled"] = function isLocalVideoDisabled(id) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let flag = getSettings(DEFAULT).disabledLocalVideos[id];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getVideoToggleState"] = function getVideoToggleState(arg0) {
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
  return c125;
};
prototype["getGoLiveSource"] = function getGoLiveSource() {
  return closure_74;
};
prototype["getGoLiveContext"] = function getGoLiveContext() {
  return DEFAULT2;
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
  let tmp2 = DEFAULT === MediaEngineContextTypes.STREAM ? closure_1_41 : BottomSheet;
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
    outputVolume = BottomSheet;
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
prototype["getModeOptions"] = function getModeOptions() {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  return getSettings(DEFAULT).modeOptions;
};
prototype["getShortcuts"] = function getShortcuts() {
  obj = {};
  _modDef12.each(closure_77, (mode, arg1) => {
    let hasItem = mode.mode === InputModes.PUSH_TO_TALK;
    if (hasItem) {
      hasItem = set.has(arg1);
    }
    if (hasItem) {
      obj[arg1] = mode.modeOptions.shortcut;
    }
  });
  return obj;
};
prototype["getInputDeviceId"] = function getInputDeviceId() {
  let id = getSettings().inputDeviceId;
  let firstResult = inputDevices[id];
  if (firstResult == null) {
    firstResult = inputDevices[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    const values = _modDef12(inputDevices).values();
    firstResult = values.first();
    obj = _modDef12(inputDevices);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
};
prototype["getOutputDeviceId"] = function getOutputDeviceId() {
  let id = getSettings().outputDeviceId;
  let firstResult = outputDevices[id];
  if (firstResult == null) {
    firstResult = outputDevices[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    const values = _modDef12(outputDevices).values();
    firstResult = values.first();
    obj = _modDef12(outputDevices);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
};
prototype["getVideoDeviceId"] = function getVideoDeviceId() {
  let id = getSettings().videoDeviceId;
  let firstResult = dependencyMap[id];
  if (firstResult == null) {
    firstResult = dependencyMap[DEFAULT_DEVICE_ID];
  }
  if (firstResult == null) {
    const values = _modDef12(dependencyMap).values();
    firstResult = values.first();
    obj = _modDef12(dependencyMap);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
};
prototype["getInputDevices"] = function getInputDevices() {
  return closure_86;
};
prototype["getOutputDevices"] = function getOutputDevices() {
  return closure_87;
};
prototype["getVideoDevices"] = function getVideoDevices() {
  return closure_88;
};
prototype["getEchoCancellation"] = function getEchoCancellation() {
  const tmp = getSettings();
  return CertifiedDeviceStore.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
};
prototype["getSidechainCompression"] = function getSidechainCompression() {
  let sidechainCompression = result.supports(Features.SIDECHAIN_COMPRESSION);
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
  return null !== c123 && c123;
};
prototype["getOpenH264Enabled"] = function getOpenH264Enabled() {
  let openH264Enabled = PlatformUtils.isLinux();
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
  return CertifiedDeviceStore.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
};
prototype["getAutomaticGainControl"] = function getAutomaticGainControl() {
  const tmp = getSettings();
  return CertifiedDeviceStore.hasAutomaticGainControl(tmp.inputDeviceId) || tmp.automaticGainControl;
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
  return result.getDebugLogging();
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
  let isWindowsResult = PlatformUtils.isWindows();
  if (isWindowsResult) {
    isWindowsResult = result.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM);
  }
  if (isWindowsResult) {
    isWindowsResult = result.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
  }
  if (isWindowsResult) {
    if (getSettings().automaticAudioSubsystem) {
      let AUTOMATIC = constants8.AUTOMATIC;
    }
    return AUTOMATIC;
  }
  AUTOMATIC = result.getAudioSubsystem();
};
prototype["getMLSSigningKey"] = function getMLSSigningKey(arg0, arg1) {
  return result.getMLSSigningKey(arg0, arg1);
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
  return {
    settingsByContext,
    inputDevices,
    outputDevices,
    appSupported,
    krispModuleLoaded,
    krispFatalError,
    krispVersion,
    krispSuppressionLevel: level,
    goLiveSource,
    goLiveContext: DEFAULT2,
  };
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
  return closure_103;
};
prototype["getInputDeviceOSMuted"] = function getInputDeviceOSMuted() {
  return c105;
};
prototype["getInputDeviceOSVolume"] = function getInputDeviceOSVolume() {
  return c106;
};
prototype["getPacketDelay"] = function getPacketDelay() {
  let DEFAULT = context;
  if (context === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let num = 0;
  if (!PlatformUtils.isPlatformEmbedded) {
    const self = this;
    num = 0;
    if (this.getMode(DEFAULT) === InputModes.VOICE_ACTIVITY) {
      num = self.getModeOptions(DEFAULT).vadLeading;
    }
  }
  return num;
};
prototype["setCanHavePriority"] = function setCanHavePriority(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  result.eachConnection((setCanHavePriority) => setCanHavePriority.setCanHavePriority(closure_0, closure_1));
};
prototype["isInteractionRequired"] = function isInteractionRequired() {
  return required;
};
prototype["getVideoHook"] = function getVideoHook() {
  return getSettings().videoHook;
};
prototype["supportsVideoHook"] = function supportsVideoHook() {
  return result.supports(Features.VIDEO_HOOK);
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
  let supportsResult = result.supports(Features.EXPERIMENTAL_SOUNDSHARE);
  if (supportsResult) {
    const tmp4 = DiscordNativeDefault;
    let release;
    if (tmp4 != null) {
      release = tmp4.os.release;
    }
    supportsResult = _modDef14014.satisfies(release, __initData9);
  }
  return supportsResult;
};
prototype["supportsHookSoundshare"] = function supportsHookSoundshare() {
  let isWindowsResult = PlatformUtils.isWindows();
  if (isWindowsResult) {
    isWindowsResult = result.supports(Features.SOUNDSHARE);
  }
  if (isWindowsResult) {
    const tmp6 = DiscordNativeDefault;
    let release;
    if (tmp6 != null) {
      release = tmp6.os.release;
    }
    isWindowsResult = _modDef14014.satisfies(release, __initData8);
  }
  return isWindowsResult;
};
prototype["getUseSystemScreensharePicker"] = function getUseSystemScreensharePicker() {
  result = this.supportsSystemScreensharePicker();
  let useSystemScreensharePicker = getSettings().useSystemScreensharePicker;
  PlatformUtils;
  if (result) {
    if (useSystemScreensharePicker == null) {
      useSystemScreensharePicker = tmp3;
    }
    result = useSystemScreensharePicker;
  }
  return result;
};
prototype["supportsSystemScreensharePicker"] = function supportsSystemScreensharePicker() {
  return result.supports(Features.NATIVE_SCREENSHARE_PICKER);
};
prototype["getUseVaapiEncoder"] = function getUseVaapiEncoder() {
  return c139;
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
    isWindowsResult = PlatformUtils.isWindows();
    const tmp6Result = PlatformUtils;
  }
  if (isWindowsResult) {
    arr.push("useCaptureDeviceForEncode");
    const VideoCaptureDeviceNoReuseExperiment = VideoCaptureDeviceNoReuse.VideoCaptureDeviceNoReuseExperiment;
    if (VideoCaptureDeviceNoReuseExperiment.getConfig({ location: "handleReady" }).overrideDeviceReuse) {
      arr.push("videoCaptureDeviceOverrideReuse");
    }
  }
  arr.push("linux-vulkan");
  return arr.join(",");
};
prototype["getUseGamescopeCapture"] = function getUseGamescopeCapture() {
  return c138;
};
prototype["getSpeakingWhileMuted"] = function getSpeakingWhileMuted() {
  return c98;
};
prototype["getKrispModelOverride"] = function getKrispModelOverride() {
  return model;
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
  return global;
};
prototype["setHasActiveCallKitCall"] = function setHasActiveCallKitCall(arg0) {
  global = arg0;
};
prototype["supportsScreenSoundshare"] = function supportsScreenSoundshare() {
  if (obj.isMac()) {
    let supportsResult = result.supports(Features.SOUNDSHARE);
    if (supportsResult) {
      const tmp12 = DiscordNativeDefault;
      let release;
      if (tmp12 != null) {
        release = tmp12.os.release;
      }
      supportsResult = _modDef14014.satisfies(release, closure_1_25);
    }
    if (supportsResult) {
      let tmpResult = PlatformUtils;
      let satisfiesResult = tmpResult.isMac() && result.supports(Features.SCREEN_CAPTURE_KIT);
      if (satisfiesResult) {
        const tmp18 = DiscordNativeDefault;
        let release1;
        if (tmp18 != null) {
          release1 = tmp18.os.release;
        }
        satisfiesResult = _modDef14014.satisfies(release1, __initData4);
      }
      supportsResult = satisfiesResult;
    }
    let supportsResult2 = supportsResult;
  } else {
    tmpResult = PlatformUtils;
    if (tmpResult.isWindows()) {
      let supportsResult1 = result.supports(Features.SCREEN_SOUNDSHARE);
      if (supportsResult1) {
        const self = this;
        supportsResult1 = this.getExperimentalSoundshare();
      }
      supportsResult2 = supportsResult1;
    } else {
      supportsResult2 = PlatformUtils.isLinux();
      if (supportsResult2) {
        supportsResult2 = result.supports(Features.SCREEN_SOUNDSHARE);
      }
      const tmpResult1 = PlatformUtils;
    }
  }
  return supportsResult2;
};
prototype["getSystemMicrophoneMode"] = function getSystemMicrophoneMode() {
  if (obj.isWindows()) {
    const self = this;
    if (!this.getBypassSystemInputProcessing()) {
      const tmp5 = closure_122[self.getInputDeviceId(self)];
      let found;
      if (tmp5 != null) {
        const active = tmp5.active;
        if (active != null) {
          found = active.find((item) => item === deep_noise_suppression);
        }
      }
      return found;
    }
  } else {
    let tmpResult = PlatformUtils;
    if (!tmpResult.isMac()) {
      tmpResult = PlatformUtils;
    }
    return c129;
  }
  obj = PlatformUtils;
};
prototype["getVideoStreamParameters"] = function getVideoStreamParameters() {
  let DEFAULT = context;
  if (context === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const self = this;
  if (this.supports(Features.VIDEO)) {
    if (DEFAULT === MediaEngineContextTypes.DEFAULT) {
      let SCREEN = constants12.VIDEO;
    } else {
      SCREEN = constants12.SCREEN;
    }
    obj = { rid: "100", type: SCREEN, quality };
    const items = [obj];
  } else {
    const items1 = [];
    let enableSimulcast = self.isSimulcastSupported();
    if (enableSimulcast) {
      enableSimulcast = DEFAULT === MediaEngineContextTypes.DEFAULT;
    }
    if (enableSimulcast) {
      const DisableCameraSimulcastExperiment = DisableCameraSimulcastExperiment2.DisableCameraSimulcastExperiment;
      enableSimulcast = DisableCameraSimulcastExperiment.getConfig({
        location: "MediaEngineStore.getVideoStreamParameters",
      }).enableSimulcast;
    }
    if (enableSimulcast) {
      obj = { rid: "50", type: constants12.VIDEO, quality: quality2 };
      items1.push(obj);
    }
    return items1;
  }
};
prototype["fetchAsyncResources"] = function fetchAsyncResources() {
  obj = { fetchDave: PlatformUtils.isWeb() };
  return result.fetchAsyncResources(obj);
};
prototype["startDavePreload"] = function startDavePreload() {
  if (!c119) {
    c119 = true;
    if (obj.isWeb()) {
      const asyncResources = result.fetchAsyncResources({ fetchDave: true });
      asyncResources.catch((error) => {
        logger.warn("DAVE preload failed:", error);
        SentryUtilsDefault.captureException(error);
      });
    }
    obj = PlatformUtils;
  }
};
prototype["getSupportedSecureFramesProtocolVersion"] = function getSupportedSecureFramesProtocolVersion() {
  return result.getSupportedSecureFramesProtocolVersion();
};
prototype["hasClipsSource"] = function hasClipsSource() {
  return null != c75;
};
prototype["isClipsRecordingReady"] = function isClipsRecordingReady() {
  return c83;
};
prototype["isClipsRecordingReadySignalSupported"] = function isClipsRecordingReadySignalSupported() {
  return result.supports(Features.CLIPS_RECORDING_READY_EVENTS);
};
prototype["getGpuBrand"] = function getGpuBrand() {
  return c131;
};
MediaEngineStore.displayName = "MediaEngineStore";
const mediaEngineStore = new MediaEngineStore(DispatcherDefault, {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    ({ channelId, guildId } = currentVoiceChannelId);
    if (currentVoiceChannelId.currentVoiceChannelId !== channelId) {
      updateVideo(tmp, null);
    }
    if (null == channelId) {
      UNKNOWN = SpatialAudioStatus.UNKNOWN;
    }
    if (null == guildId) {
      if (null != channelId) {
        if (!c107) {
          c107 = true;
          const tmp8 = getSettings();
          if (tmp9) {
            let DEFAULT = MediaEngineContextTypes.DEFAULT;
            if (DEFAULT === undefined) {
              DEFAULT = MediaEngineContextTypes.DEFAULT;
            }
            let tmp11 = settingsByContext[DEFAULT];
            if (null == tmp11) {
              obj = {
                mode: InputModes.VOICE_ACTIVITY,
                modeOptions: null,
                vadUseKrispSettingVersion: 0,
                ncUseKrispSettingVersion: 0,
                ncUseKrispjsSettingVersion: 0,
                mute: false,
                deaf: false,
                echoCancellation: true,
                noiseSuppression: false,
                automaticGainControl: true,
                noiseCancellation: true,
                bypassSystemInputProcessing: true,
                hardwareEnabledVersion: 0,
                silenceWarning: true,
                attenuation: 0,
                attenuateWhileSpeakingSelf: false,
                attenuateWhileSpeakingOthers: true,
                localMutes: null,
                disabledLocalVideos: null,
                videoToggleStateMap: null,
                localVolumes: null,
                audioMixerSettings: null,
                audioMixerSettingsVersion: 0,
                localPans: null,
                inputVolume: null,
                outputVolume: null,
                inputDeviceId: null,
                outputDeviceId: null,
                videoDeviceId: null,
                qos: false,
                qosMigrated: false,
                videoHook: null,
                experimentalSoundshare2: null,
                useSystemScreensharePicker: null,
                h265Enabled: true,
                vadThrehsoldMigrated: false,
                aecDumpEnabled: false,
                openH264Enabled: true,
                sidechainCompression: true,
                sidechainCompressionSettingVersion: 1,
                sidechainCompressionStrength: 50,
                automaticAudioSubsystem: true,
                activeInputProfile: null,
              };
              obj = {
                threshold: -60,
                autoThreshold: PlatformUtils.isPlatformEmbedded || false,
                vadUseKrisp: true,
                vadKrispActivationThreshold: 0.5,
                vadLeading: 5,
                vadTrailing: 25,
                delay: 20,
                shortcut: [],
                updatedAt: "PX_16",
              };
              obj.modeOptions = obj;
              obj.localMutes = {};
              obj.disabledLocalVideos = {};
              obj.videoToggleStateMap = {};
              obj.localVolumes = {};
              obj = {};
              const merged = Object.assign(closure_34);
              obj.audioMixerSettings = obj;
              obj.localPans = {};
              obj.inputVolume = outputVolume;
              obj.outputVolume = outputVolume;
              obj.inputDeviceId = DEFAULT_DEVICE_ID;
              obj.outputDeviceId = DEFAULT_DEVICE_ID;
              obj.videoDeviceId = DEFAULT_DEVICE_ID;
              obj.videoHook = result.supports(Features.VIDEO_HOOK);
              settingsByContext[DEFAULT] = obj;
              tmp11 = obj;
              const tmp12 = PlatformUtils.isPlatformEmbedded || false;
            }
            const _Object = Object;
            const merged1 = Object.assign(tmp11, { deaf: false, mute: false });
            const Storage = Storage6.Storage;
            result = Storage.set(MediaEngineStore, settingsByContext);
            result.eachConnection(updateConnectionMuteDeaf);
          }
          tmp9 = tmp8.mute || tmp8.deaf;
        }
      }
    }
    c107 = false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, sessionId) => {
      if (closure_1_73 === sessionId.sessionId) {
        closure_90 = sessionId.mute || sessionId.suppress;
        deaf = sessionId.deaf;
        closure_1_72.eachConnection(updateConnectionMuteDeaf);
        let tmp13 = null != sessionId.guildId && null != sessionId.channelId;
        if (tmp13) {
          tmp13 = null != channelId;
        }
        if (tmp13) {
          tmp13 = channelId !== sessionId.channelId;
        }
        let tmp17 = !closure_1_107;
        if (!closure_1_107) {
          tmp17 = null == sessionId.channelId;
        }
        let tmp19 = !tmp13;
        if (!tmp13) {
          tmp19 = !tmp17;
        }
        if (tmp19) {
          tmp19 = closure_1_94;
        }
        updateVideo(tmp19);
        channelId = sessionId.channelId;
        return true;
      } else {
        let tmp2 = sessionId.userId === id.getId();
        if (tmp2) {
          tmp2 = null == channelId.getChannelId();
        }
        if (tmp2) {
          updateVideo(false, null);
        }
        return acc;
      }
    }, false);
  },
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    c90 = false;
    c93 = false;
    const tmp = getSettings();
    let isWindowsResult = PlatformUtils.isWindows();
    if (isWindowsResult) {
      isWindowsResult = result.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM);
    }
    if (isWindowsResult) {
      isWindowsResult = result.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
    }
    if (isWindowsResult) {
      if (result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)) {
        setAudioSubsystem(constants8.AUTOMATIC);
      } else if (tmp.automaticAudioSubsystem) {
        obj2.queueAudioSubsystem(constants8.EXPERIMENTAL);
      }
      obj2 = result;
    }
    if (result.supports(Features.OFFLOAD_ADM_CONTROLS)) {
      result = obj3.setOffloadAdmControls(true);
    }
    let tmp2Result = PlatformUtils;
    enabled = tmp2Result.isIOS();
    if (enabled) {
      tmp2Result = IOSAudioInterruptExperiment;
      enabled = tmp2Result.getIOSAudioInterruptExperimentConfig("handleConnectionOpen").enabled;
    }
    if (enabled) {
      obj3.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled");
    }
    if (tmp2Result1.isIOS()) {
      const setNcModels = obj3.setNcModels;
      if (setNcModels != null) {
        setNcModels(KrispV9iOSExperiment.getKrispV9iOSModels());
        const tmp2Result2 = KrispV9iOSExperiment;
      }
      mediaEngineStore.emitChange();
    }
    const inputDeviceId = tmp.inputDeviceId;
    tmp2Result1 = PlatformUtils;
    if (tmp2Result3.isWindows()) {
      if (obj9.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
        let guid;
        if (inputDevices[inputDeviceId] != null) {
          guid = tmp23.guid;
        }
        if (null != guid) {
          queryAudioEffectsDefault(tmp23.guid, inputDeviceId, obj3);
        }
      }
      obj9 = AudioEffectsExperimentDefault;
    }
    applyRemoteSettings();
    tmp2Result3 = PlatformUtils;
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
      if (!c79) {
        closure_72
          .enable()
          .then(() =>
            disabledLocalVideos(dependencyMap[45]).dispatch({
              type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
              enabled: true,
              unmute: false,
            }),
          );
        const enableResult = closure_72.enable();
      }
    } else if (constants3.RTC_CONNECTING === state) {
      c103 = false;
      c105 = undefined;
      c106 = undefined;
      c102 = false;
      c135 = false;
      timeout3.stop();
      timeout2.stop();
      navigation.reset();
    } else if (constants3.RTC_CONNECTED === state) {
      updateVideo();
    } else if (constants3.DISCONNECTED === state) {
      closure_141 = {};
      DEFAULT2 = undefined;
      let disabledLocalVideos;
      if (0 !== set1.size) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
        disabledLocalVideos = getSettings(DEFAULT2).disabledLocalVideos;
        const item = set1.forEach((item) => {
          closure_0 = item;
          _modDef38(disabledLocalVideos[item], "If you are auto-disabled, then you are also disabled.");
          delete tmp[tmp2];
          result.eachConnection(
            (setLocalVideoDisabled) => setLocalVideoDisabled.setLocalVideoDisabled(closure_0, false),
            DEFAULT2,
          );
        });
        set1.clear();
        obj = { disabledLocalVideos };
        let DEFAULT = DEFAULT2;
        if (DEFAULT2 === undefined) {
          DEFAULT = MediaEngineContextTypes.DEFAULT;
        }
        if (DEFAULT === undefined) {
          DEFAULT = MediaEngineContextTypes.DEFAULT;
        }
        let tmp3 = settingsByContext[DEFAULT];
        if (null == tmp3) {
          obj = {
            mode: InputModes.VOICE_ACTIVITY,
            modeOptions: null,
            vadUseKrispSettingVersion: 0,
            ncUseKrispSettingVersion: 0,
            ncUseKrispjsSettingVersion: 0,
            mute: false,
            deaf: false,
            echoCancellation: true,
            noiseSuppression: false,
            automaticGainControl: true,
            noiseCancellation: true,
            bypassSystemInputProcessing: true,
            hardwareEnabledVersion: 0,
            silenceWarning: true,
            attenuation: 0,
            attenuateWhileSpeakingSelf: false,
            attenuateWhileSpeakingOthers: true,
            localMutes: null,
            disabledLocalVideos: null,
            videoToggleStateMap: null,
            localVolumes: null,
            audioMixerSettings: null,
            audioMixerSettingsVersion: 0,
            localPans: null,
            inputVolume: null,
            outputVolume: null,
            inputDeviceId: null,
            outputDeviceId: null,
            videoDeviceId: null,
            qos: false,
            qosMigrated: false,
            videoHook: null,
            experimentalSoundshare2: null,
            useSystemScreensharePicker: null,
            h265Enabled: true,
            vadThrehsoldMigrated: false,
            aecDumpEnabled: false,
            openH264Enabled: true,
            sidechainCompression: true,
            sidechainCompressionSettingVersion: 1,
            sidechainCompressionStrength: 50,
            automaticAudioSubsystem: true,
            activeInputProfile: null,
          };
          obj = {
            threshold: -60,
            autoThreshold: DEFAULT2(1115).isPlatformEmbedded || false,
            vadUseKrisp: true,
            vadKrispActivationThreshold: 0.5,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: [],
            updatedAt: "PX_16",
          };
          obj.modeOptions = obj;
          obj.localMutes = {};
          obj.disabledLocalVideos = {};
          obj.videoToggleStateMap = {};
          obj.localVolumes = {};
          const obj1 = {};
          const merged = Object.assign(closure_34);
          obj.audioMixerSettings = obj1;
          obj.localPans = {};
          obj.inputVolume = outputVolume;
          obj.outputVolume = outputVolume;
          obj.inputDeviceId = DEFAULT_DEVICE_ID;
          obj.outputDeviceId = DEFAULT_DEVICE_ID;
          obj.videoDeviceId = DEFAULT_DEVICE_ID;
          obj.videoHook = closure_72.supports(Features.VIDEO_HOOK);
          settingsByContext[DEFAULT] = obj;
          tmp3 = obj;
          const tmp5 = DEFAULT2(1115).isPlatformEmbedded || false;
        }
        const _Object = Object;
        const merged1 = Object.assign(tmp3, obj);
      }
      resetProbingState();
    }
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function handleSetTemporarySelfMute(mute) {
    mute = mute.mute;
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleToggleSelfMute(context) {
    context = context.context;
    const tmp = getSettings(context);
    let flag = tmp.deaf;
    if (context === MediaEngineContextTypes.DEFAULT) {
      obj = NativePermissionUtils;
      const permission = obj.requestPermission(NativePermissionTypes.AUDIO);
      if (closure_92) {
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
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp9 = settingsByContext[DEFAULT];
    if (null == tmp9) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp9 = obj;
      const tmp10 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp9, { mute: tmp8, deaf: flag });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.eachConnection(updateConnectionMuteDeaf);
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
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    if (!context.playSoundEffect) {
      c97 = true;
    }
    result.eachConnection(updateConnectionMuteDeaf);
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
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function handleToggleLocalMute(arg0) {
    ({ context, userId } = arg0);
    let localMutes;
    if (userId !== AuthenticationStore.getId()) {
      localMutes = getSettings(context).localMutes;
      if (localMutes[userId]) {
        delete tmp[tmp2];
      } else {
        localMutes[userId] = true;
      }
      obj = { localMutes };
      let DEFAULT = context;
      if (context === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp6 = settingsByContext[DEFAULT];
      if (null == tmp6) {
        obj = {
          mode: InputModes.VOICE_ACTIVITY,
          modeOptions: null,
          vadUseKrispSettingVersion: 0,
          ncUseKrispSettingVersion: 0,
          ncUseKrispjsSettingVersion: 0,
          mute: false,
          deaf: false,
          echoCancellation: true,
          noiseSuppression: false,
          automaticGainControl: true,
          noiseCancellation: true,
          bypassSystemInputProcessing: true,
          hardwareEnabledVersion: 0,
          silenceWarning: true,
          attenuation: 0,
          attenuateWhileSpeakingSelf: false,
          attenuateWhileSpeakingOthers: true,
          localMutes: null,
          disabledLocalVideos: null,
          videoToggleStateMap: null,
          localVolumes: null,
          audioMixerSettings: null,
          audioMixerSettingsVersion: 0,
          localPans: null,
          inputVolume: null,
          outputVolume: null,
          inputDeviceId: null,
          outputDeviceId: null,
          videoDeviceId: null,
          qos: false,
          qosMigrated: false,
          videoHook: null,
          experimentalSoundshare2: null,
          useSystemScreensharePicker: null,
          h265Enabled: true,
          vadThrehsoldMigrated: false,
          aecDumpEnabled: false,
          openH264Enabled: true,
          sidechainCompression: true,
          sidechainCompressionSettingVersion: 1,
          sidechainCompressionStrength: 50,
          automaticAudioSubsystem: true,
          activeInputProfile: null,
        };
        obj = {
          threshold: -60,
          autoThreshold: PlatformUtils.isPlatformEmbedded || false,
          vadUseKrisp: true,
          vadKrispActivationThreshold: 0.5,
          vadLeading: 5,
          vadTrailing: 25,
          delay: 20,
          shortcut: [],
          updatedAt: "PX_16",
        };
        obj.modeOptions = obj;
        obj.localMutes = {};
        obj.disabledLocalVideos = {};
        obj.videoToggleStateMap = {};
        obj.localVolumes = {};
        const obj1 = {};
        const merged = Object.assign(closure_34);
        obj.audioMixerSettings = obj1;
        obj.localPans = {};
        obj.inputVolume = outputVolume;
        obj.outputVolume = outputVolume;
        obj.inputDeviceId = DEFAULT_DEVICE_ID;
        obj.outputDeviceId = DEFAULT_DEVICE_ID;
        obj.videoDeviceId = DEFAULT_DEVICE_ID;
        obj.videoHook = result.supports(Features.VIDEO_HOOK);
        settingsByContext[DEFAULT] = obj;
        tmp6 = obj;
        const tmp8 = PlatformUtils.isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp6, obj);
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore, settingsByContext);
      result.eachConnection((setLocalMute) => {
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
    _modDef38(!tmp6, "These are not allowed to both be true.");
    disabledLocalVideos = getSettings(context).disabledLocalVideos;
    let flag = disabledLocalVideos[userId];
    if (flag == null) {
      flag = false;
    }
    obj = set1;
    const hasItem = set1.has(userId);
    let obj1 = obj;
    obj.info(
      ("disableVideo=" + videoToggleState ===
        constants5.DISABLED +
          " currentlyDisabled=" +
          flag +
          " currentlyAutoDisabled=" +
          hasItem +
          ", isVideoShown=" +
          videoToggleState) ===
        constants5.AUTO_ENABLED || videoToggleState === constants5.MANUAL_ENABLED,
    );
    let tmp15 = hasItem;
    if (hasItem) {
      tmp15 = !flag;
    }
    _modDef38(!tmp15, "If you are auto-disabled, then you are also disabled.");
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
    obj1.info(
      ("changed=" + videoToggleState === constants5.DISABLED) !==
        flag +
          " isDefaultContext=" +
          tmp19 +
          " isUpdateCausedByVideoHealthManager=" +
          isAutomatic +
          " isManualToggleByUser=" +
          tmp20,
    );
    const videoToggleStateMap = getSettings(context).videoToggleStateMap;
    if (!tmp22) {
      videoToggleStateMap[userId] = videoToggleState;
      obj = { videoToggleStateMap };
      let DEFAULT = context;
      if (context === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let flag2 = persist;
      if (persist === undefined) {
        flag2 = true;
      }
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp28 = settingsByContext[DEFAULT];
      if (null == tmp28) {
        obj = {
          mode: InputModes.VOICE_ACTIVITY,
          modeOptions: null,
          vadUseKrispSettingVersion: 0,
          ncUseKrispSettingVersion: 0,
          ncUseKrispjsSettingVersion: 0,
          mute: false,
          deaf: false,
          echoCancellation: true,
          noiseSuppression: false,
          automaticGainControl: true,
          noiseCancellation: true,
          bypassSystemInputProcessing: true,
          hardwareEnabledVersion: 0,
          silenceWarning: true,
          attenuation: 0,
          attenuateWhileSpeakingSelf: false,
          attenuateWhileSpeakingOthers: true,
          localMutes: null,
          disabledLocalVideos: null,
          videoToggleStateMap: null,
          localVolumes: null,
          audioMixerSettings: null,
          audioMixerSettingsVersion: 0,
          localPans: null,
          inputVolume: null,
          outputVolume: null,
          inputDeviceId: null,
          outputDeviceId: null,
          videoDeviceId: null,
          qos: false,
          qosMigrated: false,
          videoHook: null,
          experimentalSoundshare2: null,
          useSystemScreensharePicker: null,
          h265Enabled: true,
          vadThrehsoldMigrated: false,
          aecDumpEnabled: false,
          openH264Enabled: true,
          sidechainCompression: true,
          sidechainCompressionSettingVersion: 1,
          sidechainCompressionStrength: 50,
          automaticAudioSubsystem: true,
          activeInputProfile: null,
        };
        obj1 = {
          threshold: -60,
          autoThreshold: PlatformUtils.isPlatformEmbedded || false,
          vadUseKrisp: true,
          vadKrispActivationThreshold: 0.5,
          vadLeading: 5,
          vadTrailing: 25,
          delay: 20,
          shortcut: [],
          updatedAt: "PX_16",
        };
        obj.modeOptions = obj1;
        obj.localMutes = {};
        obj.disabledLocalVideos = {};
        obj.videoToggleStateMap = {};
        obj.localVolumes = {};
        const obj2 = {};
        const merged = Object.assign(closure_34);
        obj.audioMixerSettings = obj2;
        obj.localPans = {};
        obj.inputVolume = outputVolume;
        obj.outputVolume = outputVolume;
        obj.inputDeviceId = DEFAULT_DEVICE_ID;
        obj.outputDeviceId = DEFAULT_DEVICE_ID;
        obj.videoDeviceId = DEFAULT_DEVICE_ID;
        obj.videoHook = result.supports(Features.VIDEO_HOOK);
        settingsByContext[DEFAULT] = obj;
        tmp28 = obj;
        const tmp29 = PlatformUtils.isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp28, obj);
      if (flag2) {
        const Storage = Storage6.Storage;
        result = Storage.set(MediaEngineStore, settingsByContext);
      }
      if (videoToggleState === constants5.AUTO_PROBING) {
        const rTCConnection = RTCConnectionStore.getRTCConnection();
        let obj6 = RTCConnectionStore;
        if (rTCConnection != null) {
          const result1 = rTCConnection.pauseStatsCollectionForUser(userId, true);
          obj6 = RTCConnectionStore;
        }
      } else {
        const rTCConnection1 = RTCConnectionStore.getRTCConnection();
        obj6 = RTCConnectionStore;
        if (rTCConnection1 != null) {
          const result2 = rTCConnection1.pauseStatsCollectionForUser(userId, false);
          obj6 = RTCConnectionStore;
        }
      }
      if (!c127) {
        const _HermesInternal = HermesInternal;
        obj1.info("isAutoDisableAllowed=" + c127 + " - disabling VideoHealthManager");
        const rTCConnection2 = obj6.getRTCConnection();
        if (rTCConnection2 != null) {
          const videoHealthManager = rTCConnection2.getVideoHealthManager();
          if (videoHealthManager != null) {
            videoHealthManager.disable();
          }
        }
      }
      if (isAutomatic) {
        trackVideoToggleDefault(userId, tmp12 ? constants13.AUTO_DISABLE : constants13.AUTO_ENABLE, tmp11);
        if (tmp12) {
          obj.add(userId);
        } else {
          obj.delete(userId);
        }
      } else if (tmp20) {
        if (hasItem) {
          if (!tmp12) {
            obj1.info("disallowing auto-disable for this session because of manual override by user");
            c127 = false;
            const rTCConnection3 = obj6.getRTCConnection();
            if (rTCConnection3 != null) {
              const videoHealthManager1 = rTCConnection3.getVideoHealthManager();
              if (videoHealthManager1 != null) {
                videoHealthManager1.disable();
              }
            }
            trackVideoToggleDefault(userId, constants13.MANUAL_REENABLE, tmp11);
          }
        }
        trackVideoToggleDefault(userId, tmp12 ? constants13.MANUAL_DISABLE : constants13.MANUAL_ENABLE, tmp11);
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
      const obj3 = { disabledLocalVideos };
      DEFAULT2 = context;
      if (context === undefined) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
      }
      if (persist === undefined) {
        persist = true;
      }
      if (DEFAULT2 === undefined) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
      }
      let tmp64 = settingsByContext[DEFAULT2];
      if (null == tmp64) {
        const obj4 = {
          mode: InputModes.VOICE_ACTIVITY,
          modeOptions: null,
          vadUseKrispSettingVersion: 0,
          ncUseKrispSettingVersion: 0,
          ncUseKrispjsSettingVersion: 0,
          mute: false,
          deaf: false,
          echoCancellation: true,
          noiseSuppression: false,
          automaticGainControl: true,
          noiseCancellation: true,
          bypassSystemInputProcessing: true,
          hardwareEnabledVersion: 0,
          silenceWarning: true,
          attenuation: 0,
          attenuateWhileSpeakingSelf: false,
          attenuateWhileSpeakingOthers: true,
          localMutes: null,
          disabledLocalVideos: null,
          videoToggleStateMap: null,
          localVolumes: null,
          audioMixerSettings: null,
          audioMixerSettingsVersion: 0,
          localPans: null,
          inputVolume: null,
          outputVolume: null,
          inputDeviceId: null,
          outputDeviceId: null,
          videoDeviceId: null,
          qos: false,
          qosMigrated: false,
          videoHook: null,
          experimentalSoundshare2: null,
          useSystemScreensharePicker: null,
          h265Enabled: true,
          vadThrehsoldMigrated: false,
          aecDumpEnabled: false,
          openH264Enabled: true,
          sidechainCompression: true,
          sidechainCompressionSettingVersion: 1,
          sidechainCompressionStrength: 50,
          automaticAudioSubsystem: true,
          activeInputProfile: null,
        };
        const obj5 = {
          threshold: -60,
          autoThreshold: PlatformUtils.isPlatformEmbedded || false,
          vadUseKrisp: true,
          vadKrispActivationThreshold: 0.5,
          vadLeading: 5,
          vadTrailing: 25,
          delay: 20,
          shortcut: [],
          updatedAt: "PX_16",
        };
        obj4.modeOptions = obj5;
        obj4.localMutes = {};
        obj4.disabledLocalVideos = {};
        obj4.videoToggleStateMap = {};
        obj4.localVolumes = {};
        obj6 = {};
        const merged2 = Object.assign(closure_34);
        obj4.audioMixerSettings = obj6;
        obj4.localPans = {};
        obj4.inputVolume = outputVolume;
        obj4.outputVolume = outputVolume;
        obj4.inputDeviceId = DEFAULT_DEVICE_ID;
        obj4.outputDeviceId = DEFAULT_DEVICE_ID;
        obj4.videoDeviceId = DEFAULT_DEVICE_ID;
        obj4.videoHook = result.supports(Features.VIDEO_HOOK);
        settingsByContext[DEFAULT2] = obj4;
        tmp64 = obj4;
        const tmp65 = PlatformUtils.isPlatformEmbedded || false;
      }
      const _Object2 = Object;
      const merged3 = Object.assign(tmp64, obj3);
      if (persist) {
        const Storage2 = Storage6.Storage;
        const result3 = Storage2.set(MediaEngineStore, settingsByContext);
      }
      result.eachConnection((setLocalVideoDisabled) => {
        let flag = disabledLocalVideos[userId];
        if (flag == null) {
          flag = false;
        }
        return setLocalVideoDisabled.setLocalVideoDisabled(userId, flag);
      }, context);
    } else {
      trackVideoToggleDefault(userId, tmp12 ? constants13.AUTO_DISABLE : constants13.AUTO_ENABLE, tmp11);
    }
    tmp22 = videoToggleStateMap[userId] === constants5.AUTO_PROBING && videoToggleState === constants5.AUTO_ENABLED;
    const tmp3Result = _modDef38;
  },
  AUDIO_SET_LOCAL_VOLUME: function handleSetLocalVolume(volume) {
    ({ context, userId } = volume);
    volume = volume.volume;
    if (userId !== AuthenticationStore.getId()) {
      const localVolumes = getSettings(context).localVolumes;
      if (volume === tmp3) {
        delete tmp[tmp2];
      } else {
        localVolumes[userId] = volume;
      }
      obj = { localVolumes };
      let DEFAULT = context;
      if (context === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp6 = settingsByContext[DEFAULT];
      if (null == tmp6) {
        obj = {
          mode: InputModes.VOICE_ACTIVITY,
          modeOptions: null,
          vadUseKrispSettingVersion: 0,
          ncUseKrispSettingVersion: 0,
          ncUseKrispjsSettingVersion: 0,
          mute: false,
          deaf: false,
          echoCancellation: true,
          noiseSuppression: false,
          automaticGainControl: true,
          noiseCancellation: true,
          bypassSystemInputProcessing: true,
          hardwareEnabledVersion: 0,
          silenceWarning: true,
          attenuation: 0,
          attenuateWhileSpeakingSelf: false,
          attenuateWhileSpeakingOthers: true,
          localMutes: null,
          disabledLocalVideos: null,
          videoToggleStateMap: null,
          localVolumes: null,
          audioMixerSettings: null,
          audioMixerSettingsVersion: 0,
          localPans: null,
          inputVolume: null,
          outputVolume: null,
          inputDeviceId: null,
          outputDeviceId: null,
          videoDeviceId: null,
          qos: false,
          qosMigrated: false,
          videoHook: null,
          experimentalSoundshare2: null,
          useSystemScreensharePicker: null,
          h265Enabled: true,
          vadThrehsoldMigrated: false,
          aecDumpEnabled: false,
          openH264Enabled: true,
          sidechainCompression: true,
          sidechainCompressionSettingVersion: 1,
          sidechainCompressionStrength: 50,
          automaticAudioSubsystem: true,
          activeInputProfile: null,
        };
        obj = {
          threshold: -60,
          autoThreshold: PlatformUtils.isPlatformEmbedded || false,
          vadUseKrisp: true,
          vadKrispActivationThreshold: 0.5,
          vadLeading: 5,
          vadTrailing: 25,
          delay: 20,
          shortcut: [],
          updatedAt: "PX_16",
        };
        obj.modeOptions = obj;
        obj.localMutes = {};
        obj.disabledLocalVideos = {};
        obj.videoToggleStateMap = {};
        obj.localVolumes = {};
        const obj1 = {};
        const merged = Object.assign(closure_34);
        obj.audioMixerSettings = obj1;
        obj.localPans = {};
        obj.inputVolume = outputVolume;
        obj.outputVolume = outputVolume;
        obj.inputDeviceId = DEFAULT_DEVICE_ID;
        obj.outputDeviceId = DEFAULT_DEVICE_ID;
        obj.videoDeviceId = DEFAULT_DEVICE_ID;
        obj.videoHook = result.supports(Features.VIDEO_HOOK);
        settingsByContext[DEFAULT] = obj;
        tmp6 = obj;
        const tmp8 = PlatformUtils.isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp6, obj);
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore, settingsByContext);
      result.eachConnection((setLocalVolume) => setLocalVolume.setLocalVolume(userId, volume), context);
      tmp3 = context === MediaEngineContextTypes.STREAM ? closure_1_41 : outputVolume;
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
    let tmp3 = settingsByContext[context];
    if (null == tmp3) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[context] = obj;
      tmp3 = obj;
      const tmp4 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, { audioMixerSettings: settings });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    let supportsResult =
      true === settings.enabled &&
      SpatialAudioForVoiceExperimentDefault.getConfig({ location: "MediaEngineStore" }).enabled;
    if (supportsResult) {
      supportsResult = result.supports(Features.SPATIAL_AUDIO);
    }
    enabled = supportsResult;
    result.setAudioMixerOptions({
      isSpatial: enabled,
      enabled,
      spatialBlend: settings.spatialBlend,
      reflectionsEnabled: settings.reflectionsEnabled,
      roomSize: settings.roomSize,
      distanceAttenuationEnabled: settings.distanceAttenuationEnabled,
    });
    if (!enabled) {
      UNKNOWN = SpatialAudioStatus.UNKNOWN;
    }
    result.eachConnection(
      (setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(closure_1_120),
      MediaEngineContextTypes.DEFAULT,
    );
    const obj1 = {
      isSpatial: enabled,
      enabled,
      spatialBlend: settings.spatialBlend,
      reflectionsEnabled: settings.reflectionsEnabled,
      roomSize: settings.roomSize,
      distanceAttenuationEnabled: settings.distanceAttenuationEnabled,
    };
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
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, { localPans });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.eachConnection((setLocalPan) => setLocalPan.setLocalPan(userId, left, right), context);
  },
  AUDIO_SET_MODE: function handleAudioSetMode(context) {
    let DEFAULT = context.context;
    obj = { mode: context.mode, modeOptions: null };
    obj = {};
    const merged = Object.assign(context.options);
    obj.updatedAt = Date.now();
    obj.modeOptions = obj;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp4 = settingsByContext[DEFAULT];
    if (null == tmp4) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      const obj1 = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj1;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj2 = {};
      const merged1 = Object.assign(closure_34);
      obj.audioMixerSettings = obj2;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp4 = obj;
      const tmp5 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged2 = Object.assign(tmp4, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.eachConnection(setInputMode);
  },
  AUDIO_SET_INPUT_VOLUME: function handleAudioSetInputVolume(volume) {
    volume = volume.volume;
    obj = { inputVolume: null };
    let obj1 = _modDef12;
    obj.inputVolume = obj1.clamp(volume, 0, BottomSheet);
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = BottomSheet;
      obj.outputVolume = BottomSheet;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.setInputVolume(volume);
  },
  AUDIO_SET_OUTPUT_VOLUME: function handleAudioSetOutputVolume(volume) {
    volume = volume.volume;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { outputVolume: volume });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.setOutputVolume(volume);
  },
  AUDIO_SET_INPUT_DEVICE: function handleSetInputDevice(id) {
    id = id.id;
    let firstResult = inputDevices[id];
    if (firstResult == null) {
      firstResult = inputDevices[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = _modDef12(inputDevices);
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
    let tmp6 = settingsByContext[DEFAULT];
    if (null == tmp6) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp6 = obj;
      const tmp7 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp6, { inputDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.setAudioInputDevice(id);
    if (obj6.isWindows()) {
      if (obj7.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
        let guid;
        if (inputDevices[id] != null) {
          guid = tmp22.guid;
        }
        if (null != guid) {
          queryAudioEffectsDefault(tmp22.guid, id, obj5);
        }
      }
      obj7 = AudioEffectsExperimentDefault;
    }
    result.eachConnection(updateConnectionVoiceProcessing);
    c105 = undefined;
    c106 = undefined;
    timeout3.stop();
    c135 = false;
    obj6 = PlatformUtils;
    if (obj8.getConfig({ location: "MediaEngineStore.handleSetInputDevice" }).resetSilenceWarningOnDeviceChange) {
      c102 = false;
      navigation.reset();
    }
    obj8 = SilenceWarningExperimentDefault;
  },
  AUDIO_SET_OUTPUT_DEVICE: function handleSetOutputDevice(id) {
    id = id.id;
    let firstResult = outputDevices[id];
    if (firstResult == null) {
      firstResult = outputDevices[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = _modDef12(outputDevices);
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
    let tmp6 = settingsByContext[DEFAULT];
    if (null == tmp6) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp6 = obj;
      const tmp7 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp6, { outputDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.setAudioOutputDevice(id);
    result.eachConnection(updateConnectionVoiceProcessing);
  },
  AUDIO_SET_ACTIVE_INPUT_PROFILE: function handleSetActiveInputProfile(activeInputProfile) {
    obj = { activeInputProfile: activeInputProfile.inputProfile };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.eachConnection((setEchoCancellation) => {
      setInputMode(setEchoCancellation);
      updateConnectionVoiceProcessing(setEchoCancellation);
    });
    const result1 = result.setAudioInputBypassSystemProcessing(getSettings().bypassSystemInputProcessing);
    setLoopback();
    const tmp13 = getSettings();
  },
  AUDIO_SET_ECHO_CANCELLATION: function handleSetEchoCancellation(echoCancellation) {
    obj = { echoCancellation: echoCancellation.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    closure_0 = CertifiedDeviceStore.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
    result.eachConnection((setEchoCancellation) => setEchoCancellation.setEchoCancellation(closure_0));
    setLoopback();
    trackVoiceProcessing(echoCancellation.location);
    const tmp13 = CertifiedDeviceStore.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION: function handleSetSidechainCompression(enabled) {
    obj = { sidechainCompression: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    const result1 = result.setSidechainCompression(tmp.sidechainCompression);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function handleSetSidechainCompressionStrength(
    sidechainCompressionStrength,
  ) {
    obj = { sidechainCompressionStrength: sidechainCompressionStrength.strength };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    const result1 = result.setSidechainCompressionStrength(tmp.sidechainCompressionStrength);
  },
  AUDIO_SET_LOOPBACK: function handleSetLoopback(loopbackReason) {
    loopbackReason = loopbackReason.loopbackReason;
    if (loopbackReason.enabled) {
      set2.add(loopbackReason);
    } else {
      set2.delete(loopbackReason);
    }
    setLoopback();
  },
  AUDIO_SET_NOISE_SUPPRESSION: function handleSetNoiseSuppression(enabled) {
    obj = { noiseSuppression: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    closure_0 = CertifiedDeviceStore.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
    result.eachConnection((setNoiseSuppression) => setNoiseSuppression.setNoiseSuppression(closure_0));
    setLoopback();
    trackVoiceProcessing(enabled.location);
    const tmp13 = CertifiedDeviceStore.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function handleSetAutomaticGainControl(automaticGainControl) {
    let modeOptions = { automaticGainControl: automaticGainControl.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      modeOptions = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      modeOptions = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      modeOptions.modeOptions = modeOptions;
      modeOptions.localMutes = {};
      modeOptions.disabledLocalVideos = {};
      modeOptions.videoToggleStateMap = {};
      modeOptions.localVolumes = {};
      const obj1 = {};
      let merged = Object.assign(closure_34);
      modeOptions.audioMixerSettings = obj1;
      modeOptions.localPans = {};
      modeOptions.inputVolume = outputVolume;
      modeOptions.outputVolume = outputVolume;
      modeOptions.inputDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.outputDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.videoDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = modeOptions;
      tmp = modeOptions;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, modeOptions);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    modeOptions = tmp;
    result.eachConnection((setAutomaticGainControl) => {
      obj = { enabled: obj.automaticGainControl };
      const merged = Object.assign({ useAGC2: false });
      result = setAutomaticGainControl.setAutomaticGainControl(obj);
    });
    setLoopback();
    trackVoiceProcessing(automaticGainControl.location);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleSetNoiseCancellation(enabled) {
    let modeOptions = { noiseCancellation: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      modeOptions = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      modeOptions = {
        threshold: -60,
        autoThreshold: null,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: null,
        updatedAt: "PX_16",
      };
      modeOptions.autoThreshold = modeOptions(1115).isPlatformEmbedded || false;
      modeOptions.shortcut = [];
      modeOptions.modeOptions = modeOptions;
      modeOptions.localMutes = {};
      modeOptions.disabledLocalVideos = {};
      modeOptions.videoToggleStateMap = {};
      modeOptions.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      modeOptions.audioMixerSettings = obj1;
      modeOptions.localPans = {};
      modeOptions.inputVolume = outputVolume;
      modeOptions.outputVolume = outputVolume;
      modeOptions.inputDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.outputDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.videoDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.videoHook = closure_72.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = modeOptions;
      tmp = modeOptions;
      const tmp2 = modeOptions(1115).isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, modeOptions);
    const Storage = modeOptions(510).Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    modeOptions = tmp;
    closure_72.eachConnection((setNoiseCancellation) => {
      const noiseCancellation = obj.noiseCancellation;
      let flag = getEffectiveNoiseCancellationDefault(noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
      if (flag !== noiseCancellation) {
        obj.info("Falling back to system noise suppression.");
      }
      setNoiseCancellation.setNoiseCancellation(flag);
      if (flag) {
        flag = false;
      }
      result = setNoiseCancellation.setNoiseCancellationDuringProcessing(flag);
    });
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_KRISP_MODEL_OVERRIDE: function handleSetKrispModelOverride(model) {
    result = KrispUtilsDefault.setKrispModelOverride(model.model);
    model = model.model;
    setLoopback();
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function handleSetSilenceWarning(enabled) {
    obj = { silenceWarning: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
  },
  AUDIO_SET_DEBUG_LOGGING: function handleSetDebugLogging(enabled) {
    result.setDebugLogging(enabled.enabled);
  },
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function handleSetKrispSuppressionLevel(level) {
    level = level.level;
    result = KrispUtilsDefault.setKrispSuppressionLevel(level);
  },
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function handleSetNoiseCancellationEnableStats(enabled) {
    if (!obj.isWeb()) {
      enabled = enabled.enabled;
      const setNoiseCancellationEnableStats = result.setNoiseCancellationEnableStats;
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
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function handleSetExperimentalSoundshare(enabled) {
    obj = { experimentalSoundshare2: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
  },
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function handleSetUseSystemScreensharePicker(enabled) {
    obj = { useSystemScreensharePicker: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
  },
  AUDIO_SET_ATTENUATION: function handleSetAttenuation(attenuation) {
    let modeOptions = {
      attenuation: attenuation.attenuation,
      attenuateWhileSpeakingSelf: attenuation.attenuateWhileSpeakingSelf,
      attenuateWhileSpeakingOthers: attenuation.attenuateWhileSpeakingOthers,
    };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      modeOptions = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      modeOptions = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      modeOptions.modeOptions = modeOptions;
      modeOptions.localMutes = {};
      modeOptions.disabledLocalVideos = {};
      modeOptions.videoToggleStateMap = {};
      modeOptions.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      modeOptions.audioMixerSettings = obj1;
      modeOptions.localPans = {};
      modeOptions.inputVolume = outputVolume;
      modeOptions.outputVolume = outputVolume;
      modeOptions.inputDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.outputDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.videoDeviceId = DEFAULT_DEVICE_ID;
      modeOptions.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = modeOptions;
      tmp = modeOptions;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, modeOptions);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    modeOptions = tmp;
    result.eachConnection((setAttenuation) =>
      setAttenuation.setAttenuation(obj.attenuation, obj.attenuateWhileSpeakingSelf, obj.attenuateWhileSpeakingOthers),
    );
  },
  AUDIO_SET_QOS: function handleSetQoS(enabled) {
    enabled = enabled.enabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { qos: enabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.eachConnection((setQoS) => setQoS.setQoS(enabled));
  },
  MEDIA_ENGINE_DEVICES: function handleDevices(videoDevices) {
    const intl = require("util").intl;
    _require = videoDevices;
    const arr =
      videoDevices[
        { audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[constants9.AUDIO_INPUT]
      ];
    if (0 === arr.length) {
      obj = {
        id: DEFAULT_DEVICE_ID,
        index: 0,
        name: tmp5,
        disabled: true,
        guid: "call",
        hardwareId: "justifyContent",
        containerId: "color",
      };
      obj = {};
      obj[obj.id] = obj;
      let valueResult = obj;
    } else {
      const mapped = _modDef12(arr).map((id) => {
        obj = {
          id: id.id,
          index: id.index,
          name: id.name,
          disabled: false,
          facing: id.facing,
          guid: id.originalId,
          hardwareId: id.hardwareId,
          containerId: id.containerId,
          effects: id.effects,
          formFactor: null,
          windowsDeviceService: null,
        };
        ({ inputDevices, outputDevices, videoDevices } = id);
        if (("videoinput" === id.type) !== true) {
          if (
            (null !=
              videoDevices.find((containerId) => {
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
              })) !==
            true
          ) {
            const items = ["builtin", "displayport", "hdmi"];
            let str = id.macosTransportType;
            if (str == null) {
              str = "";
            }
            if (items.includes(str) !== true) {
              let isMatch = null != id.hardwareId;
              if (isMatch) {
                isMatch = re157.test(id.hardwareId);
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
                      let WEBCAM = obj.AIRPLAY;
                    } else {
                      let tmp3 = "audioinput" === id.type;
                      if (tmp3) {
                        tmp3 =
                          null !=
                          outputDevices.find((containerId) => {
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
                        WEBCAM = obj.HEADSET;
                      } else {
                        let tmp4 = "audiooutput" === id.type;
                        if (tmp4) {
                          tmp4 =
                            null !=
                            inputDevices.find((containerId) => {
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
                WEBCAM = obj.BLUETOOTH;
                obj2 = _modDef12(id.hardwareId);
              }
            }
            WEBCAM = obj.INTEGRATED;
          }
          obj.formFactor = WEBCAM;
          obj.windowsDeviceService = id.windowsDeviceService;
          return obj;
        }
        WEBCAM = obj.WEBCAM;
      });
      const arr2 = _modDef12(arr);
      valueResult = mapped.keyBy("id").value();
      const iter = mapped.keyBy("id");
    }
    let obj3 = _modDef12;
    if (!obj3.isEqual(valueResult, tmp)) {
      let id = getSettings().inputDeviceId;
      let firstResult = valueResult[id];
      if (firstResult == null) {
        firstResult = tmp11[DEFAULT_DEVICE_ID];
      }
      if (firstResult == null) {
        let obj4 = _modDef12(tmp11);
        let values = obj4.values();
        firstResult = values.first();
      }
      if (null != firstResult) {
        id = firstResult.id;
      }
      closure_72.setAudioInputDevice(id);
      if (tmp3Result.isWindows()) {
        let tmp9Result = AudioEffectsExperimentDefault;
        if (tmp9Result.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
          let guid;
          if (valueResult[id] != null) {
            guid = tmp18.guid;
          }
          if (null != guid) {
            queryAudioEffectsDefault(tmp18.guid, id, closure_72);
          }
        }
      }
      closure_72.eachConnection(updateConnectionVoiceProcessing);
      tmp3Result = tmp3(1115);
    }
    const intl2 = tmp3(1114).intl;
    closure_129_0 = videoDevices;
    const arr3 =
      videoDevices[
        { audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[
          constants9.AUDIO_OUTPUT
        ]
      ];
    if (0 === arr3.length) {
      const obj1 = {
        id: DEFAULT_DEVICE_ID,
        index: 0,
        name: tmp24,
        disabled: true,
        guid: "call",
        hardwareId: "justifyContent",
        containerId: "color",
      };
      let obj2 = {};
      obj2[obj1.id] = obj1;
      valueResult = obj2;
    } else {
      const mapped1 = _modDef12(arr3).map((id) => {
        obj = {
          id: id.id,
          index: id.index,
          name: id.name,
          disabled: false,
          facing: id.facing,
          guid: id.originalId,
          hardwareId: id.hardwareId,
          containerId: id.containerId,
          effects: id.effects,
          formFactor: null,
          windowsDeviceService: null,
        };
        ({ inputDevices, outputDevices, videoDevices } = id);
        if (("videoinput" === id.type) !== true) {
          if (
            (null !=
              videoDevices.find((containerId) => {
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
              })) !==
            true
          ) {
            const items = ["builtin", "displayport", "hdmi"];
            let str = id.macosTransportType;
            if (str == null) {
              str = "";
            }
            if (items.includes(str) !== true) {
              let isMatch = null != id.hardwareId;
              if (isMatch) {
                isMatch = re157.test(id.hardwareId);
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
                      let WEBCAM = obj.AIRPLAY;
                    } else {
                      let tmp3 = "audioinput" === id.type;
                      if (tmp3) {
                        tmp3 =
                          null !=
                          outputDevices.find((containerId) => {
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
                        WEBCAM = obj.HEADSET;
                      } else {
                        let tmp4 = "audiooutput" === id.type;
                        if (tmp4) {
                          tmp4 =
                            null !=
                            inputDevices.find((containerId) => {
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
                WEBCAM = obj.BLUETOOTH;
                obj2 = _modDef12(id.hardwareId);
              }
            }
            WEBCAM = obj.INTEGRATED;
          }
          obj.formFactor = WEBCAM;
          obj.windowsDeviceService = id.windowsDeviceService;
          return obj;
        }
        WEBCAM = obj.WEBCAM;
      });
      const arr4 = _modDef12(arr3);
      valueResult = mapped1.keyBy("id").value();
      const iter2 = mapped1.keyBy("id");
    }
    tmp9Result = _modDef12;
    if (!tmp9Result.isEqual(valueResult, valueResult)) {
      let id2 = getSettings().outputDeviceId;
      let firstResult1 = valueResult[id2];
      if (firstResult1 == null) {
        firstResult1 = tmp28[DEFAULT_DEVICE_ID];
      }
      if (firstResult1 == null) {
        values = _modDef12(tmp28).values();
        firstResult1 = values.first();
        const obj14 = _modDef12(tmp28);
      }
      if (null != firstResult1) {
        id2 = firstResult1.id;
      }
      closure_72.setAudioOutputDevice(id2);
      closure_72.eachConnection(updateConnectionVoiceProcessing);
      const _Object = Object;
      const values1 = Object.values(tmp23);
      const _Object2 = Object;
      const values2 = Object.values(valueResult);
      const someResult1 = values2.some((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes("dualsense");
      });
      if (someResult !== someResult1) {
        closure_130_0 = someResult1;
        closure_72.eachConnection((context) => {
          if (context.context === MediaEngineContextTypes.STREAM) {
            result = context.setSoundshareDiscardRearChannels(closure_0);
          }
        });
      }
      someResult = values1.some((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes("dualsense");
      });
    }
    closure_101 = videoDevices.videoDevices.length > 0;
    const intl3 = tmp3(1114).intl;
    closure_131_0 = videoDevices;
    const arr5 =
      videoDevices[
        { audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[constants9.VIDEO_INPUT]
      ];
    if (0 === arr5.length) {
      obj3 = {
        id: DEFAULT_DEVICE_ID,
        index: 0,
        name: tmp41,
        disabled: true,
        guid: "call",
        hardwareId: "justifyContent",
        containerId: "color",
      };
      obj4 = {};
      obj4[obj3.id] = obj3;
      let valueResult1 = obj4;
    } else {
      const mapped2 = _modDef12(arr5).map((id) => {
        obj = {
          id: id.id,
          index: id.index,
          name: id.name,
          disabled: false,
          facing: id.facing,
          guid: id.originalId,
          hardwareId: id.hardwareId,
          containerId: id.containerId,
          effects: id.effects,
          formFactor: null,
          windowsDeviceService: null,
        };
        ({ inputDevices, outputDevices, videoDevices } = id);
        if (("videoinput" === id.type) !== true) {
          if (
            (null !=
              videoDevices.find((containerId) => {
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
              })) !==
            true
          ) {
            const items = ["builtin", "displayport", "hdmi"];
            let str = id.macosTransportType;
            if (str == null) {
              str = "";
            }
            if (items.includes(str) !== true) {
              let isMatch = null != id.hardwareId;
              if (isMatch) {
                isMatch = re157.test(id.hardwareId);
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
                      let WEBCAM = obj.AIRPLAY;
                    } else {
                      let tmp3 = "audioinput" === id.type;
                      if (tmp3) {
                        tmp3 =
                          null !=
                          outputDevices.find((containerId) => {
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
                        WEBCAM = obj.HEADSET;
                      } else {
                        let tmp4 = "audiooutput" === id.type;
                        if (tmp4) {
                          tmp4 =
                            null !=
                            inputDevices.find((containerId) => {
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
                WEBCAM = obj.BLUETOOTH;
                obj2 = _modDef12(id.hardwareId);
              }
            }
            WEBCAM = obj.INTEGRATED;
          }
          obj.formFactor = WEBCAM;
          obj.windowsDeviceService = id.windowsDeviceService;
          return obj;
        }
        WEBCAM = obj.WEBCAM;
      });
      const arr6 = _modDef12(arr5);
      valueResult1 = mapped2.keyBy("id").value();
      const iter3 = mapped2.keyBy("id");
    }
    if (closure_94) {
      if (!tmp9Result1.isEqual(valueResult1, tmp40)) {
        let tmp48 = closure_95 === DEFAULT_DEVICE_ID;
        if (tmp48) {
          let disabled;
          if (tmp40[DEFAULT_DEVICE_ID] != null) {
            disabled = tmp49.disabled;
          }
          tmp48 = disabled;
        }
        let tmp52 = "Firefox" === _modDef4883.name;
        if (tmp52) {
          tmp52 = "" === closure_95;
        }
        if (tmp52) {
          let name;
          if (tmp40[closure_95] != null) {
            name = tmp55.name;
          }
          tmp52 = "Default" === name;
        }
        if (tmp52) {
          let disabled1;
          if (tmp40[closure_95] != null) {
            disabled1 = tmp59.disabled;
          }
          tmp52 = !disabled1;
        }
        let tmp62 = undefined !== valueResult1[closure_95];
        if (!tmp62) {
          tmp62 = tmp48;
        }
        if (!tmp62) {
          tmp62 = tmp52;
        }
        updateVideo(tmp62);
      }
      tmp9Result1 = _modDef12;
    }
    tmp = valueResult;
  },
  AUDIO_VOLUME_CHANGE: function handleVolumeChange(arg0) {
    obj = { inputVolume: null, outputVolume: null };
    ({ inputVolume, outputVolume } = arg0);
    let obj1 = _modDef12;
    obj.inputVolume = obj1.clamp(inputVolume, 0, BottomSheet);
    obj.outputVolume = outputVolume;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = BottomSheet;
      obj.outputVolume = BottomSheet;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp3 = obj;
      const tmp4 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
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
        c135 = false;
        timeout3.stop();
        timeout2.stop();
      } else if (getSettings().mode === InputModes.VOICE_ACTIVITY) {
        if (c102) {
          const config = SilenceWarningExperimentDefault.getConfig({
            location: "MediaEngineStore.handleInputDetected",
          });
          const resetSilenceWarningAfterNMinutes = config.resetSilenceWarningAfterNMinutes;
          if (config.enableHardwareSilenceWarning) {
            timeout3.start(MINUTE, () => {
              obj = AnalyticsUtilsDefault;
              let id = getSettings().inputDeviceId;
              let firstResult = inputDevices[id];
              if (firstResult == null) {
                firstResult = inputDevices[DEFAULT_DEVICE_ID];
              }
              if (firstResult == null) {
                const values = _modDef12(inputDevices).values();
                firstResult = values.first();
                const obj2 = _modDef12(inputDevices);
              }
              if (null != firstResult) {
                id = firstResult.id;
              }
              let name;
              if (inputDevices[id] != null) {
                name = tmp6.name;
              }
              obj = { input_device_name: name, rtc_connection_id: rTCConnectionId.getRTCConnectionId() };
              obj.track(constants.HARDWARE_MUTE_GUESSED, obj);
              c135 = true;
              mediaEngineStore.emitChange();
            });
          }
          if (null != resetSilenceWarningAfterNMinutes) {
            timeout2.start(resetSilenceWarningAfterNMinutes * DurationsDefault.Millis.MINUTE, () => {
              c102 = false;
              navigation.reset();
            });
          }
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
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { bypassSystemInputProcessing: bypassEnabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    const result1 = result.setAudioInputBypassSystemProcessing(bypassEnabled);
    const tmp16 = getSettings();
    const inputDeviceId = tmp16.inputDeviceId;
    const tmp17 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp16.echoCancellation;
    const tmp18 = CertifiedDeviceStore.hasNoiseSuppression(inputDeviceId) || tmp16.noiseSuppression;
    const tmp19Result = getEffectiveNoiseCancellationDefault(
      tmp16.noiseCancellation,
      mediaEngineStore.getSystemMicrophoneMode(),
    );
    const voiceFidelityCaps = AudioFidelityExperiment.getVoiceFidelityCaps(
      { location: "updateVoiceFidelityCaps" },
      { krispEnabled: tmp19Result, noiseSuppressionEnabled: tmp18, echoCancellationEnabled: tmp17 },
    );
    const result2 = obj3.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
    const result3 = obj3.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
    trackVoiceProcessing(bypassEnabled.location);
    const tmp12Result = AudioFidelityExperiment;
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function handleSetAudioEnabled(enabled) {
    enabled = enabled.enabled;
    if (enabled.unmute) {
      let DEFAULT = MediaEngineContextTypes.DEFAULT;
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp2 = settingsByContext[DEFAULT];
      if (null == tmp2) {
        obj = {
          mode: InputModes.VOICE_ACTIVITY,
          modeOptions: null,
          vadUseKrispSettingVersion: 0,
          ncUseKrispSettingVersion: 0,
          ncUseKrispjsSettingVersion: 0,
          mute: false,
          deaf: false,
          echoCancellation: true,
          noiseSuppression: false,
          automaticGainControl: true,
          noiseCancellation: true,
          bypassSystemInputProcessing: true,
          hardwareEnabledVersion: 0,
          silenceWarning: true,
          attenuation: 0,
          attenuateWhileSpeakingSelf: false,
          attenuateWhileSpeakingOthers: true,
          localMutes: null,
          disabledLocalVideos: null,
          videoToggleStateMap: null,
          localVolumes: null,
          audioMixerSettings: null,
          audioMixerSettingsVersion: 0,
          localPans: null,
          inputVolume: null,
          outputVolume: null,
          inputDeviceId: null,
          outputDeviceId: null,
          videoDeviceId: null,
          qos: false,
          qosMigrated: false,
          videoHook: null,
          experimentalSoundshare2: null,
          useSystemScreensharePicker: null,
          h265Enabled: true,
          vadThrehsoldMigrated: false,
          aecDumpEnabled: false,
          openH264Enabled: true,
          sidechainCompression: true,
          sidechainCompressionSettingVersion: 1,
          sidechainCompressionStrength: 50,
          automaticAudioSubsystem: true,
          activeInputProfile: null,
        };
        obj = {
          threshold: -60,
          autoThreshold: PlatformUtils.isPlatformEmbedded || false,
          vadUseKrisp: true,
          vadKrispActivationThreshold: 0.5,
          vadLeading: 5,
          vadTrailing: 25,
          delay: 20,
          shortcut: [],
          updatedAt: "PX_16",
        };
        obj.modeOptions = obj;
        obj.localMutes = {};
        obj.disabledLocalVideos = {};
        obj.videoToggleStateMap = {};
        obj.localVolumes = {};
        obj = {};
        const merged = Object.assign(closure_34);
        obj.audioMixerSettings = obj;
        obj.localPans = {};
        obj.inputVolume = outputVolume;
        obj.outputVolume = outputVolume;
        obj.inputDeviceId = DEFAULT_DEVICE_ID;
        obj.outputDeviceId = DEFAULT_DEVICE_ID;
        obj.videoDeviceId = DEFAULT_DEVICE_ID;
        obj.videoHook = result.supports(Features.VIDEO_HOOK);
        settingsByContext[DEFAULT] = obj;
        tmp2 = obj;
        const tmp4 = PlatformUtils.isPlatformEmbedded || false;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp2, { mute: false, deaf: false });
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore, settingsByContext);
    }
    result.eachConnection(updateConnectionMuteDeaf);
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function handleSetVideoEnabled(enabled) {
    const permission = NativePermissionUtils.requestPermission(NativePermissionTypes.CAMERA);
    updateVideo(enabled.enabled);
  },
  MEDIA_ENGINE_PERMISSION: function handlePermission(kind) {
    kind = kind.kind;
    if (!kind.granted) {
      if ("audio" === kind) {
        c79 = false;
        result.eachConnection(updateConnectionMuteDeaf);
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
      DEFAULT2 = settings.context;
      if (DEFAULT2 == null) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
      }
      let qualityOptions = settings.qualityOptions;
      if (qualityOptions == null) {
        qualityOptions = { resolution: 720, frameRate: 30 };
      }
      const pidFromDesktopSource = CrossPlatformNativeUtilsDefault.getPidFromDesktopSource(sourceId);
      soundshareSession = null;
      soundshareId = null;
      if (PlatformUtils.isPlatformEmbedded) {
        ({ soundshareId, soundshareSession } = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound));
        const tmp17 = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound);
      }
      if (DEFAULT2 !== DEFAULT2) {
        if (null != closure_74) {
          result.setGoLiveSource(null, DEFAULT2);
        }
      }
      let tmp25 = DEFAULT2 === MediaEngineContextTypes.STREAM;
      if (tmp25) {
        tmp25 = closure_94;
      }
      obj = { desktopSource: null, quality: null };
      obj = { id: sourceId, sourcePid: pidFromDesktopSource, soundshareId, soundshareSession };
      obj.desktopSource = obj;
      ({ resolution: obj9.resolution, frameRate: obj9.frameRate } = qualityOptions);
      obj.quality = { resolution: null, frameRate: null };
      updateVideo(tmp25, obj);
      const obj1 = { resolution: null, frameRate: null };
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
          tmp8 = closure_94;
        }
        let qualityOptions1 = settings.qualityOptions;
        if (qualityOptions1 == null) {
          qualityOptions1 = { resolution: 720, frameRate: 30 };
        }
        const obj2 = { cameraSource: null, quality: null };
        const obj3 = { videoDeviceGuid, audioDeviceGuid, sound };
        obj2.cameraSource = obj3;
        const obj4 = { resolution: null, frameRate: null };
        ({ resolution: obj4.resolution, frameRate: obj4.frameRate } = qualityOptions1);
        obj2.quality = obj4;
        updateVideo(tmp8, obj2);
      } else {
        updateVideo(closure_94, null);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function handleSetVideoDevice(id) {
    id = id.id;
    let firstResult = dependencyMap[id];
    if (firstResult == null) {
      firstResult = dependencyMap[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = _modDef12(dependencyMap);
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
    let tmp6 = settingsByContext[DEFAULT];
    if (null == tmp6) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp6 = obj;
      const tmp7 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp6, { videoDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    updateVideo();
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function handleInteractionRequired(required) {
    let flag = required !== required.required;
    if (flag) {
      required = required.required;
      flag = true;
      if (!required.required) {
        result.interact();
        flag = true;
      }
    }
    return flag;
  },
  USER_SETTINGS_MODAL_INIT: handleUserSettingsModal,
  USER_SETTINGS_MODAL_SET_SECTION: handleUserSettingsModal,
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices() {
    result.eachConnection(updateConnectionVoiceProcessing);
    return false;
  },
  RPC_APP_CONNECTED: function handleAppConnected(application) {
    set.add(application.application.id);
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnected(application) {
    set.delete(application.application.id);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(mediaEngineState) {
    ({
      settingsByContext: closure_77,
      inputDevices: closure_86,
      outputDevices: closure_87,
      appSupported: closure_130,
      krispModuleLoaded: c109,
      krispFatalError: c110,
      krispVersion: c111,
      goLiveContext: DEFAULT2,
    } = mediaEngineState.mediaEngineState);
  },
  APP_STATE_UPDATE: function handleFocus(state) {
    state = state.state;
    ExternalPipDefault;
    if (state === constants2.BACKGROUND) {
      if (closure_94) {
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
    const bitrate = arg0;
    result.eachConnection((setBitRate) => setBitRate.setBitRate(bitrate.bitrate));
  },
  SET_VAD_PERMISSION: function handleVADPermissionChange(hasPermission) {
    if (!hasPermission.hasPermission === closure_92) {
      return false;
    } else {
      closure_92 = tmp;
      result.eachConnection(updateConnectionMuteDeaf);
    }
  },
  SET_NATIVE_PERMISSION: function handleNativePermissionChange(permissionType) {
    permissionType = permissionType.permissionType;
    if (NativePermissionTypes.AUDIO === permissionType) {
      c125 = true;
      result.eachConnection(updateConnectionMuteDeaf);
    } else if (tmp3.CAMERA === permissionType) {
      let tmp5 = !tmp4;
      if (tmp !== tmp2) {
        tmp5 = closure_94;
      }
      if (tmp5) {
        updateVideo(false);
      }
    } else {
      return false;
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(arg0) {
    const mode = arg0;
    result.eachConnection((applyVideoQualityMode) => applyVideoQualityMode.applyVideoQualityMode(mode.mode));
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function handleSetAecDump(aecDumpEnabled) {
    obj = { aecDumpEnabled: aecDumpEnabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      const obj1 = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj1;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    result.setAecDump(tmp.aecDumpEnabled);
  },
  MEDIA_ENGINE_SET_OPENH264_ENABLED: function handleSetOpenH264Enabled(enabled) {
    enabled = enabled.enabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: null,
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: null,
        disabledLocalVideos: null,
        videoToggleStateMap: null,
        localVolumes: null,
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {
        threshold: -60,
        autoThreshold: PlatformUtils.isPlatformEmbedded || false,
        vadUseKrisp: true,
        vadKrispActivationThreshold: 0.5,
        vadLeading: 5,
        vadTrailing: 25,
        delay: 20,
        shortcut: [],
        updatedAt: "PX_16",
      };
      obj.modeOptions = obj;
      obj.localMutes = {};
      obj.disabledLocalVideos = {};
      obj.videoToggleStateMap = {};
      obj.localVolumes = {};
      obj = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      settingsByContext[DEFAULT] = obj;
      tmp = obj;
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
    }
    const merged1 = Object.assign(tmp, { openH264Enabled: enabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore, settingsByContext);
    const tmp13 = DesktopNativeUtilsDefault;
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
    closure_77 = values.reduce((acc, item) => {
      obj = {
        mode: InputModes.VOICE_ACTIVITY,
        modeOptions: {
          threshold: -60,
          autoThreshold: PlatformUtils.isPlatformEmbedded || false,
          vadUseKrisp: true,
          vadKrispActivationThreshold: 0.5,
          vadLeading: 5,
          vadTrailing: 25,
          delay: 20,
          shortcut: [],
          updatedAt: "PX_16",
        },
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: false,
        deaf: false,
        echoCancellation: true,
        noiseSuppression: false,
        automaticGainControl: true,
        noiseCancellation: true,
        bypassSystemInputProcessing: true,
        hardwareEnabledVersion: 0,
        silenceWarning: true,
        attenuation: 0,
        attenuateWhileSpeakingSelf: false,
        attenuateWhileSpeakingOthers: true,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        audioMixerSettings: null,
        audioMixerSettingsVersion: 0,
        localPans: null,
        inputVolume: null,
        outputVolume: null,
        inputDeviceId: null,
        outputDeviceId: null,
        videoDeviceId: null,
        qos: false,
        qosMigrated: false,
        videoHook: null,
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: true,
        vadThrehsoldMigrated: false,
        aecDumpEnabled: false,
        openH264Enabled: true,
        sidechainCompression: true,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: true,
        activeInputProfile: null,
      };
      obj = {};
      const merged = Object.assign(closure_34);
      obj.audioMixerSettings = obj;
      obj.localPans = {};
      obj.inputVolume = outputVolume;
      obj.outputVolume = outputVolume;
      obj.inputDeviceId = DEFAULT_DEVICE_ID;
      obj.outputDeviceId = DEFAULT_DEVICE_ID;
      obj.videoDeviceId = DEFAULT_DEVICE_ID;
      obj.videoHook = result.supports(Features.VIDEO_HOOK);
      const tmp2 = PlatformUtils.isPlatformEmbedded || false;
      acc[item] = _modDef12.merge(obj, overrides[item]);
      return acc;
    }, {});
    const Storage = overrides(510).Storage;
    result = Storage.set(MediaEngineStore, closure_77);
    applySettings();
  },
  CHANNEL_DELETE: function handleChannelDelete() {
    if (closure_94) {
      if (null == RTCConnectionStore.getRTCConnectionId()) {
        updateVideo(false, null);
      }
    }
    return false;
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function handleNoiseCancellationError(code) {
    if (code.code === NoiseCancellerError.KRISP_CPU_OVERUSE) {
      closure_141.noiseCancellation = false;
      closure_141.noiseSuppression = true;
      let noiseCancellation = getSettings();
      closure_72.eachConnection((setNoiseCancellation) => {
        noiseCancellation = noiseCancellation.noiseCancellation;
        let flag = getEffectiveNoiseCancellationDefault(noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
        if (flag !== noiseCancellation) {
          obj.info("Falling back to system noise suppression.");
        }
        setNoiseCancellation.setNoiseCancellation(flag);
        if (flag) {
          flag = false;
        }
        result = setNoiseCancellation.setNoiseCancellationDuringProcessing(flag);
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
      closure_141.modeOptions = { vadUseKrisp: false };
      result.eachConnection((arg0) => {
        setInputMode(arg0);
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
    result = result.applyMediaFilterSettings(settings.settings);
    result.finally(() => {
      c118 = false;
      mediaEngineStore.emitChange();
    });
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function handleApplyMediaFilterSettingsStart() {
    c118 = true;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function handleApplyMediaFilterSettingsError() {
    c118 = false;
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === constants7.PRELOADED_USER_SETTINGS) {
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
      if (null != DiscordNativeDefault) {
        let id;
        if (_null != null) {
          id = _null.desktopSource.id;
        }
        if (id === sourceId) {
          if (_null.quality === quality) {
            return false;
          }
        }
        if (null != _null) {
          result.setClipsSource(null);
          let tmpResult = PlatformUtils;
          if (tmpResult.isWindows()) {
            if (null != _null.desktopSource.soundshareId) {
              let obj2 = HookAll;
              result = obj2.cancelAttachToProcess(_null.desktopSource.soundshareId);
            } else {
              let videoHook = null != _null.desktopSource.sourcePid;
              if (videoHook) {
                videoHook = getSettings().videoHook;
              }
              if (videoHook) {
                let obj1 = HookAll;
                const result1 = obj1.cancelAttachToProcess(_null.desktopSource.sourcePid);
              }
            }
          }
        }
        let tmp3Result = CrossPlatformNativeUtilsDefault;
        const pidFromDesktopSource = tmp3Result.getPidFromDesktopSource(sourceId);
        obj = { desktopSource: null, quality: null };
        obj = { id: sourceId, sourcePid: pidFromDesktopSource, soundshareId: null, soundshareSession: null };
        ({ soundshareId: obj6.soundshareId, soundshareSession: obj6.soundshareSession } = maybeTryHookProcess(
          pidFromDesktopSource,
          true,
        ));
        obj.desktopSource = obj;
        obj.quality = quality;
        _null = obj;
        tmpResult = GoLiveHdrExperiment;
        const videoHook2 = getSettings().videoHook;
        let tmp21 = !videoHook2;
        if (videoHook2) {
          const DisableHookFramePacerExperiment = DisableHookFramePacerExperiment2.DisableHookFramePacerExperiment;
          tmp21 = !DisableHookFramePacerExperiment.getConfig({ location: "handleClipsInit" }).enabled;
        }
        enabled = videoHook2;
        if (videoHook2) {
          const VideoHookDX12Experiment = VideoHookDX12Experiment2.VideoHookDX12Experiment;
          enabled = VideoHookDX12Experiment.getConfig({ location: "handleClipsInit" }).enabled;
        }
        const UpscaleSmallCapturedFramesExperiment =
          UpscaleSmallCapturedFramesExperiment2.UpscaleSmallCapturedFramesExperiment;
        const config = UpscaleSmallCapturedFramesExperiment.getConfig({ location: "handleClipsInit" });
        obj1 = {
          id: _null.desktopSource.id,
          soundshareId: _null.desktopSource.soundshareId,
          useVideoHook: videoHook2,
          useHookFramePacer: tmp21,
          useGraphicsCapture: null,
          useCaptureDeviceForEncode: false,
          useLoopback: null,
          useQuartzCapturer: true,
          allowScreenCaptureKit: null,
          videoHookStaleFrameTimeoutMs: 500,
          graphicsCaptureStaleFrameTimeoutMs: null,
          hdrCaptureMode: null,
          videoHookAllowDx12: null,
          minCaptureWidth: null,
          minCaptureHeight: null,
        };
        ({ minCaptureWidth, minCaptureHeight } = config);
        const obj8 = result;
        const tmp19 = maybeTryHookProcess(pidFromDesktopSource, true);
        let isWindowsResult = PlatformUtils.isWindows();
        if (isWindowsResult) {
          tmp3Result = _modDef14014;
          const tmp3Result1 = DiscordNativeDefault;
          let release;
          if (tmp3Result1 != null) {
            release = tmp3Result1.os.release;
          }
          isWindowsResult = tmp3Result.satisfies(release, __initData7);
        }
        obj1.useGraphicsCapture = isWindowsResult;
        obj1.useLoopback = mediaEngineStore.getExperimentalSoundshare();
        const tmpResult1 = PlatformUtils;
        let isMacResult = PlatformUtils.isMac();
        if (isMacResult) {
          isMacResult = obj8.supports(Features.SCREEN_CAPTURE_KIT);
        }
        if (isMacResult) {
          const tmp3Result3 = DiscordNativeDefault;
          let release1;
          if (tmp3Result3 != null) {
            release1 = tmp3Result3.os.release;
          }
          isMacResult = _modDef14014.satisfies(release1, __initData4);
          const tmp3Result2 = _modDef14014;
        }
        obj2 = {
          desktopDescription: null,
          quality: null,
          bitratePercent: null,
          applicationName: null,
          videoEncoderExperiments: null,
        };
        obj1.allowScreenCaptureKit = isMacResult;
        obj1.graphicsCaptureStaleFrameTimeoutMs = graphicsCaptureStaleFrameTimeoutMs;
        obj1.hdrCaptureMode = tmpResult.getGoLiveHdrConfig({ location: "MediaEngineStore clips" }).hdrCaptureMode;
        obj1.videoHookAllowDx12 = enabled;
        obj1.minCaptureWidth = minCaptureWidth;
        obj1.minCaptureHeight = minCaptureHeight;
        obj2.desktopDescription = obj1;
        obj2.quality = quality;
        obj2.bitratePercent = quality.bitratePercent;
        obj2.applicationName = applicationName.applicationName;
        obj2.videoEncoderExperiments = mediaEngineStore.getVideoEncoderExperiments(
          MediaEngineContextTypes.STREAM,
          "streamer",
        );
        result.setClipsSource(obj2);
        const tmpResult2 = PlatformUtils;
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
      result.setClipsSource(null);
    }
  },
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function handleSetEnableHardwareMuteNotice(enabled) {
    enabled = enabled.enabled;
  },
  MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function handleSetDeviceAudioEffects(active) {
    closure_122[active.deviceId] = { active: active.active, available: active.available };
    const tmp = getSettings();
    const inputDeviceId = tmp.inputDeviceId;
    const tmp2 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp.echoCancellation;
    const tmp3 = CertifiedDeviceStore.hasNoiseSuppression(inputDeviceId) || tmp.noiseSuppression;
    const tmp4Result = getEffectiveNoiseCancellationDefault(
      tmp.noiseCancellation,
      mediaEngineStore.getSystemMicrophoneMode(),
    );
    const voiceFidelityCaps = AudioFidelityExperiment.getVoiceFidelityCaps(
      { location: "updateVoiceFidelityCaps" },
      { krispEnabled: tmp4Result, noiseSuppressionEnabled: tmp3, echoCancellationEnabled: tmp2 },
    );
    result = result.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
    const result1 = result.setVoiceChannelCountCap(voiceFidelityCaps.maxChannelCount);
  },
});
let size = fn(2);
let result1 = size.fileFinishedImporting("stores/MediaEngineStore.tsx");

export default mediaEngineStore;
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
export const LINUX_OPENH264_URL = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
export const LINUX_OPENH264_SHA256 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
export const DeviceFormFactor = obj;
