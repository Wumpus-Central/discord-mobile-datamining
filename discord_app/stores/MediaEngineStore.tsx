// === Module 1999: MediaEngineStore ===

// Module 1999 (MediaEngineStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage6 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Timers from "Timers" /* 2046 */;
import DiscordNativeDefault from "DiscordNative" /* 4490 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4884 */;
import SystemAnalyticsStore from "SystemAnalyticsStore" /* 4935 */;
import DesktopNativeUtilsDefault from "DesktopNativeUtils" /* 5955 */;
import AVError from "AVError" /* 9095 */;
import ExternalPipDefault from "ExternalPip" /* 9110 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 9620 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9660 */;
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation" /* 9675 */;
import VideoGuardExperiment2 from "VideoGuardExperiment" /* 13101 */;
import isClipsEnabled from "isClipsEnabled" /* 13485 */;
import KrispUtilsDefault from "KrispUtils" /* 13622 */;
import NativeMuteManagerDefault from "NativeMuteManager" /* 13628 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 13639 */;
import trackVideoToggleDefault from "trackVideoToggle" /* 13640 */;
import SpatialAudioConstants from "SpatialAudioConstants" /* 13815 */;
import UserSettingsVoiceAndVideoConstants from "UserSettingsVoiceAndVideoConstants" /* 13816 */;
import GoLiveHdrExperiment from "GoLiveHdrExperiment" /* 13817 */;
import StreamZeroVadLeadingExperiment2 from "StreamZeroVadLeadingExperiment" /* 13818 */;
import AGC2MobileExperimentDefault from "AGC2MobileExperiment" /* 13819 */;
import MuteAwareNoiseCancellationExperiment from "MuteAwareNoiseCancellationExperiment" /* 13820 */;
import HookAll from "Hook" /* 13821 */;
import WGCDirtyRegionsAllExperiment2 from "WGCDirtyRegionsAllExperiment" /* 13822 */;
import VideoHookDX12Experiment2 from "VideoHookDX12Experiment" /* 13823 */;
import UpscaleSmallCapturedFramesExperiment2 from "UpscaleSmallCapturedFramesExperiment" /* 13824 */;
import GlobalFramePoolLockExperiment from "GlobalFramePoolLockExperiment" /* 13825 */;
import AudioFidelityExperiment from "AudioFidelityExperiment" /* 13826 */;
import SystemwideEchoCancellationExperiment from "SystemwideEchoCancellationExperiment" /* 13827 */;
import _modDef13829 from "module_13829" /* 13829 */;
import AudioEffectsExperimentDefault from "AudioEffectsExperiment" /* 13884 */;
import queryAudioEffectsDefault from "queryAudioEffects" /* 13885 */;
import IOSAudioInterruptExperiment from "IOSAudioInterruptExperiment" /* 13887 */;
import KrispNCModels from "KrispNCModels" /* 13888 */;
import NvencReconstructedFrameExperiment from "NvencReconstructedFrameExperiment" /* 13890 */;
import VideoCaptureDeviceNoReuse from "VideoCaptureDeviceNoReuse" /* 13891 */;
import DisableCameraSimulcastExperiment2 from "DisableCameraSimulcastExperiment" /* 13892 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import injectMediaEngine from "injectMediaEngine" /* 2000 */;
import ClipsStore from "ClipsStore" /* 2005 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BitRateStore from "BitRateStore" /* 13813 */;
import CertifiedDeviceStore from "CertifiedDeviceStore" /* 9307 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import UserStore from "UserStore" /* 1377 */;
import VideoQualityModeStore from "VideoQualityModeStore" /* 13814 */;
import Constants_mod from "Constants" /* 1085 */;
import Constants_mod2 from "Constants" /* 4932 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import Constants_mod3 from "Constants" /* 4915 */;
import BaseConnectionEvent_mod from "BaseConnectionEvent" /* 4945 */;
import NativePermissionUtils_mod from "NativePermissionUtils" /* 7275 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _false, _null, _require, c1, c5, c6, c73, closure_1_83, closure_67, closure_82, closure_90, connection, goLiveSource, navigation, setLocalMute, setLocalVideoDisabled, status;

let DEFAULT_DEVICE_ID;
let Features;
let InputModes;
let NativePermissionTypes;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_35;
let closure_36;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_45;
let closure_50;
let closure_51;
let closure_52;
let closure_53;
let closure_54;
let closure_55;
let closure_56;
let obj = function _detectH265HardwareDecode() {
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
      try {
        let closure_0;
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
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
                    const obj4 = { type: "file", video: { contentType: "video/mp4; codecs=\"hev1.1.6.L153.B0\"", width: 1920, height: 1080, bitrate: 2000000, framerate: 30 } };
                    c1 = 2;
                    c3 = 1;
                    const obj5 = { value: mediaCapabilities.decodingInfo(obj4), done: false };
                    return obj5;
                  }
                }
              }
            }
            c3 = 3;
            return { value: false, done: true };
          }
        } else if (1 === c1) {
          c2 = 0;
          c3 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          const powerEfficient = closure_0.supported && closure_0.powerEfficient;
          c2 = 0;
          c3 = 3;
          obj = { value: powerEfficient, done: true };
          return obj;
        }
      } catch (tmp8) {
        if (0 === c2) {
          c3 = 3;
          throw tmp8;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function startH265HardwareDetection() {
  let resolved;
  function detectH265HardwareDecode() {
    return obj(...arguments);
  }
  if (null != nextPromise) {
    resolved = nextPromise;
  } else {
    const _window = window;
    if (typeof window !== "undefined") {
      const promise = detectH265HardwareDecode();
      nextPromise = promise.then((result) => {
        let closure_1_123 = result;
        return result;
      });
      resolved = nextPromise;
    } else {
      resolved = Promise.resolve(false);
    }
  }
  return resolved;
}
function getSettings() {
  let num;
  let obj3;
  let obj5;
  let obj7;
  let DEFAULT = arg0;
  if (arg0 === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let DEFAULT2 = DEFAULT;
  if (DEFAULT === undefined) {
    DEFAULT2 = MediaEngineContextTypes.DEFAULT;
  }
  let tmp3 = settingsByContext[DEFAULT2];
  if (null == tmp3) {
    obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
    obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
    obj3 = {};
    PlatformUtils.isPlatformEmbedded || false;
    const merged = Object.assign(closure_34);
    settingsByContext[DEFAULT2] = obj2;
    tmp3 = obj2;
  }
  if (DEFAULT === MediaEngineContextTypes.STREAM) {
    const obj4 = { modeOptions: obj5 };
    const merged1 = Object.assign(tmp3);
    obj5 = { vadLeading: num };
    const merged2 = Object.assign(tmp3.modeOptions);
    const StreamZeroVadLeadingExperiment = StreamZeroVadLeadingExperiment2.StreamZeroVadLeadingExperiment;
    num = 0;
    if (!StreamZeroVadLeadingExperiment.getConfig({ location: "MediaEngineStore.getSettings" }).enabled) {
      num = tmp3.modeOptions.vadLeading;
    }
    return obj4;
  } else {
    let CUSTOM = tmp3.activeInputProfile;
    if (CUSTOM == null) {
      CUSTOM = InputProfile.CUSTOM;
    }
    const tmp17 = c110 ? closure_71 : closure_140;
    let modeOptions = tmp3.modeOptions;
    if (modeOptions == null) {
      modeOptions = {};
    }
    const obj6 = { vadKrispActivationThreshold: obj7.getConfig({ location: "getSettings" }).vadKrispActivationThreshold };
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
    if (null != obj6.vadKrispActivationThreshold) {
      const obj8 = { modeOptions: obj6 };
      const merged6 = Object.assign(tmp3);
      const merged7 = Object.assign(tmp14);
      const merged8 = Object.assign(tmp17);
      return obj8;
    }
    obj7 = AGC2MobileExperimentDefault;
  }
}
function setInputMode(context) {
  let num;
  let vadUseKrisp;
  const tmp = getSettings(context.context);
  const mode = tmp.mode;
  if (context.context === MediaEngineContextTypes.DEFAULT) {
    obj = MediaEngineActionCreators;
    obj.setPushToTalkState(false, false);
  }
  obj2 = { vadThreshold: tmp.modeOptions.threshold, vadAutoThreshold: tmp.modeOptions.autoThreshold, vadUseKrisp, vadKrispActivationThreshold: num, vadLeading: tmp.modeOptions.vadLeading, vadTrailing: tmp.modeOptions.vadTrailing, pttReleaseDelay: Math.round(tmp.modeOptions.delay) };
  vadUseKrisp = tmp.modeOptions.vadUseKrisp;
  setInputMode = context.setInputMode;
  if (vadUseKrisp) {
    vadUseKrisp = !c110;
  }
  num = tmp.modeOptions.vadKrispActivationThreshold;
  if (num == null) {
    num = 0.5;
  }
  setInputMode(mode, obj2);
}
function updateConnectionMuteDeaf(context) {
  let flag;
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
    let tmp3 = deaf || c90 || mute || closure_92;
    if (!tmp3) {
      obj = NativePermissionUtils;
      tmp3 = !obj.didHavePermission(NativePermissionTypes.AUDIO);
    }
    flag = tmp3;
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
    obj2 = MuteAwareNoiseCancellationExperiment;
    enabled = obj2.getMuteAwareNoiseCancellationConfig({ location: "updateConnectionMuteDeaf" }).enabled;
    const setSkipNoiseCancellationIfMuted = context.setSkipNoiseCancellationIfMuted;
    if (enabled) {
      enabled = flag;
    }
    result = setSkipNoiseCancellationIfMuted(enabled);
    const obj3 = NativeMuteManagerDefault;
    obj3.updateNativeMute();
  }
}
function updateVideo() {
  let isMacResult;
  let minCaptureHeight;
  let minCaptureWidth;
  let str;
  let tmp71Result6;
  let tmp71Result8;
  let tmp = enabled;
  if (enabled === undefined) {
    tmp = closure_94;
  }
  let tmp2 = arg1;
  if (arg1 === undefined) {
    tmp2 = goLiveSource;
  }
  let desktopSource1;
  if (goLiveSource != null) {
    desktopSource1 = tmp3.desktopSource;
  }
  let tmp5 = null != desktopSource1;
  if (tmp5) {
    let id1;
    const id = tmp3.desktopSource.id;
    if (tmp2 != null) {
      const desktopSource = tmp2.desktopSource;
      if (desktopSource != null) {
        id1 = desktopSource.id;
      }
    }
    tmp5 = id !== id1;
  }
  if (tmp5) {
    if (null != goLiveSource.desktopSource.soundshareId) {
      obj = PlatformUtils;
      if (obj.isWindows()) {
        const obj3 = HookAll;
        result = obj3.cancelAttachToProcess(tmp3.desktopSource.soundshareId);
      }
      result.setGoLiveSource(null, STREAM);
    }
    const videoHook = null != tmp3.desktopSource.sourcePid && getSettings().videoHook;
    if (videoHook) {
      obj2 = HookAll;
      const result1 = obj2.cancelAttachToProcess(tmp3.desktopSource.sourcePid);
    }
  }
  let cameraSource1;
  if (goLiveSource != null) {
    cameraSource1 = tmp3.cameraSource;
  }
  let tmp19 = null == cameraSource1;
  if (!tmp19) {
    let videoDeviceGuid1;
    const videoDeviceGuid = tmp3.cameraSource.videoDeviceGuid;
    if (tmp2 != null) {
      const cameraSource = tmp2.cameraSource;
      if (cameraSource != null) {
        videoDeviceGuid1 = cameraSource.videoDeviceGuid;
      }
    }
    let tmp21 = videoDeviceGuid === videoDeviceGuid1;
    if (tmp21) {
      let audioDeviceGuid1;
      const audioDeviceGuid = tmp3.cameraSource.audioDeviceGuid;
      if (tmp2 != null) {
        const cameraSource2 = tmp2.cameraSource;
        if (cameraSource2 != null) {
          audioDeviceGuid1 = cameraSource2.audioDeviceGuid;
        }
      }
      tmp21 = audioDeviceGuid === audioDeviceGuid1;
    }
    tmp19 = tmp21;
  }
  if (!tmp19) {
    result.setGoLiveSource(null, STREAM);
  }
  const tmp26 = closure_94;
  if (tmp26) {
    const videoDeviceId = getSettings().videoDeviceId;
    const tmp28 = closure_94;
    if (tmp28) {
      if (videoDeviceId === DEFAULT_DEVICE_ID) {
        let id2;
        let tmp32;
        if (DISABLED_DEVICE_ID === tmp29) {
          id2 = DISABLED_DEVICE_ID;
        }
        closure_94 = tmp;
        if (closure_94) {
          let firstResult = closure_88[id2];
          if (firstResult == null) {
            firstResult = closure_88[DEFAULT_DEVICE_ID];
          }
          if (firstResult == null) {
            const obj4 = _modDef12(closure_88);
            const values = obj4.values();
            firstResult = values.first();
          }
          if (null != firstResult) {
            id2 = firstResult.id;
          }
          tmp32 = id2;
        } else {
          tmp32 = DISABLED_DEVICE_ID;
        }
        DISABLED_DEVICE_ID = tmp32;
        result.setVideoInputDevice(DISABLED_DEVICE_ID);
      }
    }
    DISABLED_DEVICE_ID = videoDeviceId;
    id2 = videoDeviceId;
  }
  goLiveSource = tmp2;
  if (null != tmp2) {
    const obj5 = { resolution: tmp2.quality.resolution, frameRate: tmp2.quality.frameRate };
    if (null != tmp2.desktopSource) {
      const obj17 = GoLiveHdrExperiment;
      const hdrCaptureMode = obj17.getGoLiveHdrConfig({ location: "MediaEngineStore go live" }).hdrCaptureMode;
      const videoHook2 = getSettings().videoHook;
      const obj18 = PlatformUtils;
      let isWindowsResult = obj18.isWindows();
      if (isWindowsResult) {
        const satisfies = _modDef13829.satisfies;
        _modDef13829;
        const tmp43 = DiscordNativeDefault;
        let release;
        if (tmp43 != null) {
          release = tmp43.os.release;
        }
        isWindowsResult = satisfies(release, set);
      }
      let num3 = 0;
      if (isWindowsResult) {
        const tmp71Result = PlatformUtils;
        let isWindowsResult1 = tmp71Result.isWindows();
        if (isWindowsResult1) {
          const satisfies2 = _modDef13829.satisfies;
          _modDef13829;
          const tmp50 = DiscordNativeDefault;
          let release1;
          if (tmp50 != null) {
            release1 = tmp50.os.release;
          }
          isWindowsResult1 = satisfies2(release1, closure_27);
        }
        num3 = isWindowsResult1 ? prioritySpeakerDucking : closure_28;
      }
      const tmp71Result5 = PlatformUtils;
      let flag = false;
      const isWindowsResult2 = tmp71Result5.isWindows() && num3 >= prioritySpeakerDucking;
      if (isWindowsResult2) {
        enabled = true === c132;
        if (!enabled) {
          const WGCDirtyRegionsAllExperiment = WGCDirtyRegionsAllExperiment2.WGCDirtyRegionsAllExperiment;
          enabled = WGCDirtyRegionsAllExperiment.getConfig({ location: "updateVideo" }).enabled;
        }
        flag = enabled;
      }
      let enabled2 = videoHook2;
      if (enabled2) {
        const VideoHookDX12Experiment = VideoHookDX12Experiment2.VideoHookDX12Experiment;
        enabled2 = VideoHookDX12Experiment.getConfig({ location: "updateVideo" }).enabled;
      }
      const UpscaleSmallCapturedFramesExperiment = UpscaleSmallCapturedFramesExperiment2.UpscaleSmallCapturedFramesExperiment;
      const config = UpscaleSmallCapturedFramesExperiment.getConfig({ location: "updateVideo" });
      const obj6 = { id: tmp2.desktopSource.id, soundshareId: tmp2.desktopSource.soundshareId, useVideoHook: videoHook2, useGraphicsCapture: isWindowsResult, useGraphicsCaptureApiLevel: num3, useCaptureDeviceForEncode: tmp71Result6.isWindows(), useLoopback: mediaEngineStore.getExperimentalSoundshare(), useQuartzCapturer: true, allowScreenCaptureKit: isMacResult, videoHookStaleFrameTimeoutMs: 500, graphicsCaptureStaleFrameTimeoutMs, hdrCaptureMode, enableGlobalFramePoolLock: tmp71Result8.getGlobalFramePoolLockExperimentConfig({ location: "updateVideo" }).enabled, useGraphicsCaptureDirtyRegions: flag, videoHookAllowDx12: enabled2, minCaptureWidth, minCaptureHeight };
      ({ minCaptureWidth, minCaptureHeight } = config);
      const setGoLiveSource = result.setGoLiveSource;
      tmp71Result6 = PlatformUtils;
      const tmp71Result7 = PlatformUtils;
      isMacResult = tmp71Result7.isMac();
      const obj8 = result;
      if (isMacResult) {
        isMacResult = obj8.supports(Features.SCREEN_CAPTURE_KIT);
      }
      if (isMacResult) {
        const satisfies3 = _modDef13829.satisfies;
        _modDef13829;
        const tmp62 = DiscordNativeDefault;
        let release2;
        if (tmp62 != null) {
          release2 = tmp62.os.release;
        }
        isMacResult = satisfies3(release2, closure_24);
      }
      const obj7 = { desktopDescription: obj6, quality: obj5 };
      tmp71Result8 = GlobalFramePoolLockExperiment;
      setGoLiveSource(obj7, STREAM);
    }
    if (null != tmp2.cameraSource) {
      const obj9 = { videoDeviceGuid: tmp2.cameraSource.videoDeviceGuid, audioDeviceGuid: str };
      str = "";
      const setGoLiveSource2 = result.setGoLiveSource;
      if (false !== tmp2.cameraSource.sound) {
        str = tmp2.cameraSource.audioDeviceGuid;
      }
      const obj10 = { cameraDescription: obj9, quality: obj5 };
      setGoLiveSource2(obj10, STREAM);
    }
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
  obj = AVError;
  obj2 = { type: AVError.AVError.NOISE_CANCELLER_ERROR, underlyingError: noiseCancellerErrorToAVUnderlyingError(noise_canceller_error), voiceProcessingErrorDetails };
  obj.reportAVError(obj2);
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { noise_canceller_error };
  obj3.track(constants.VOICE_PROCESSING, obj4);
  if (set3.has(noise_canceller_error)) {
    let c110 = true;
  } else if (noise_canceller_error === NoiseCancellerError.KRISP_VAD_CPU_OVERUSE) {
    const obj5 = { type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: noise_canceller_error };
    const tmp4Result = DispatcherDefault;
    tmp4Result.dispatch(obj5);
  } else {
    c117 = true;
    const obj6 = { type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: noise_canceller_error };
    const tmp4Result2 = DispatcherDefault;
    tmp4Result2.dispatch(obj6);
  }
}
function handleVideoFilterError(code, arg1) {
  let VideoBackgroundInitFailed;
  let str = "preview";
  let str2 = "preview";
  const warn = obj.warn;
  if (arg1 === constants10.LIVE) {
    str2 = "live";
  }
  warn("Video filter error: " + code + " (" + str2 + ")");
  if (arg1 === constants10.LIVE) {
    obj = { type: AVError.AVError.VIDEO_BACKGROUND_UNAVAILABLE, underlyingError: VideoBackgroundInitFailed };
    const reportAVError = AVError.reportAVError;
    AVError;
    if (constants9.UNSUPPORTED === code) {
      VideoBackgroundInitFailed = AVError.AVUnderlyingError.VideoBackgroundUnsupported;
    } else if (tmp7.INIT_FAILED === code) {
      VideoBackgroundInitFailed = AVError.AVUnderlyingError.VideoBackgroundInitFailed;
    }
    reportAVError(obj);
  }
  obj2 = { type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code, target: str };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (arg1 === constants10.LIVE) {
    str = "live";
  }
  dispatch(obj2);
}
function updateConnectionVoiceProcessing(setEchoCancellation) {
  let defaultConfig;
  let defaultConfig2;
  let tmp10;
  const tmp2 = getSettings();
  const inputDeviceId = tmp2.inputDeviceId;
  setEchoCancellation = setEchoCancellation.setEchoCancellation;
  const tmp3 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation;
  setEchoCancellation(tmp3);
  const setNoiseSuppression = setEchoCancellation.setNoiseSuppression;
  const tmp5 = CertifiedDeviceStore.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression;
  setNoiseSuppression(tmp5);
  const tmp7 = CertifiedDeviceStore.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl;
  const setAutomaticGainControl = setEchoCancellation.setAutomaticGainControl;
  obj2 = { enabled: tmp7 };
  const obj3 = AGC2MobileExperimentDefault;
  if (tmp7) {
    defaultConfig = obj3.getConfig({ location: "getAutomaticGainControlConfig" });
    tmp10 = importDefault;
  } else {
    defaultConfig = obj3.definition.defaultConfig;
    tmp10 = importDefault;
  }
  const tmp12 = defaultConfig.agc2Enabled ? closure_59 : { useAGC2: false };
  const merged = Object.assign(tmp12);
  result = setAutomaticGainControl(obj2);
  const noiseCancellation = tmp2.noiseCancellation;
  const tmp10Result = tmp10(9675);
  const tmp10ResultResult = tmp10Result(noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  if (tmp10ResultResult !== noiseCancellation) {
    CertifiedDeviceStore.info("Falling back to system noise suppression.");
  }
  setEchoCancellation.setNoiseCancellation(tmp10ResultResult);
  const tmp10Result6 = tmp10(13819);
  if (tmp10ResultResult) {
    defaultConfig2 = tmp10Result6.getConfig({ location: "setNoiseCancellation" });
  } else {
    defaultConfig2 = tmp10Result6.definition.defaultConfig;
  }
  const result1 = setEchoCancellation.setNoiseCancellationDuringProcessing(defaultConfig2.noiseCancellationDuringProcessing);
  const setSpatialAudioEnabled = setEchoCancellation.setSpatialAudioEnabled;
  const audioMixerSettings = tmp2.audioMixerSettings;
  const tmp10Result7 = tmp10(13639);
  const supportsResult = true === audioMixerSettings.enabled && tmp10Result7.getConfig({ location: "MediaEngineStore" }).enabled && result.supports(Features.SPATIAL_AUDIO);
  const result2 = setSpatialAudioEnabled(supportsResult);
  const tmpResult = getSettings();
  const inputDeviceId2 = tmpResult.inputDeviceId;
  const tmp26 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId2) || tmpResult.echoCancellation;
  const tmp27 = CertifiedDeviceStore.hasNoiseSuppression(inputDeviceId2) || tmpResult.noiseSuppression;
  const tmp10Result8 = tmp10(9675);
  const tmp10Result3Result = tmp10Result8(tmpResult.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  const obj7 = AudioFidelityExperiment;
  const voiceFidelityCaps = obj7.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp10Result3Result, noiseSuppressionEnabled: tmp27, echoCancellationEnabled: tmp26 });
  const maxChannelCount = voiceFidelityCaps.maxChannelCount;
  const result3 = result.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
  const result4 = result.setVoiceChannelCountCap(maxChannelCount);
  const obj8 = PlatformUtils;
  let isWindowsResult = obj8.isWindows();
  if (isWindowsResult) {
    const satisfies = tmp10(13829).satisfies;
    tmp10(13829);
    const tmp10Result10 = tmp10(4490);
    let release;
    if (tmp10Result10 != null) {
      release = tmp10Result10.os.release;
    }
    isWindowsResult = satisfies(release, c153);
  }
  if (isWindowsResult) {
    if (setEchoCancellation.context === MediaEngineContextTypes.DEFAULT) {
      const tmp30Result = SystemwideEchoCancellationExperiment;
      const systemwideEchoCancellationExperimentConfig = tmp30Result.getSystemwideEchoCancellationExperimentConfig({ location: "updateConnectionVoiceProcessing" });
      const tmp53 = inputDevices[mediaEngineStore.getInputDeviceId(mediaEngineStore)];
      let windowsDeviceService;
      if (tmp53 != null) {
        windowsDeviceService = tmp53.windowsDeviceService;
      }
      let tmp42 = "voicemodvad" === windowsDeviceService;
      if (!tmp42) {
        let hasItem;
        if (tmp53 != null) {
          if (tmp53.name != null) {
            const formatted = str3.toLowerCase();
            hasItem = formatted.includes("voicemod");
          }
        }
        tmp42 = true === hasItem;
      }
      if (!tmp42) {
        const tmp45 = outputDevices[mediaEngineStore.getOutputDeviceId(mediaEngineStore)];
        let windowsDeviceService1;
        if (tmp45 != null) {
          windowsDeviceService1 = tmp45.windowsDeviceService;
        }
        let tmp47 = "voicemodvad" === windowsDeviceService1;
        if (!tmp47) {
          let hasItem1;
          if (tmp45 != null) {
            if (tmp45.name != null) {
              const formatted1 = str5.toLowerCase();
              hasItem1 = formatted1.includes("voicemod");
            }
          }
          tmp47 = true === hasItem1;
        }
        tmp42 = tmp47;
      }
      let str7 = "mix";
      const setEchoReferenceMode = setEchoCancellation.setEchoReferenceMode;
      if (!tmp42) {
        str7 = systemwideEchoCancellationExperimentConfig.echoReferenceMode;
      }
      setEchoReferenceMode(str7);
    }
  }
  const tmp30Result2 = PlatformUtils;
  if (tmp30Result2.isWeb()) {
    let num = -100;
    if (tmp2.noiseCancellation) {
      num = -150;
    }
    setEchoCancellation.setSilenceThreshold(num);
  }
}
function mergeSettings(arg0) {
  let DEFAULT;
  let obj3;
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
    obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
    obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
    obj3 = {};
    PlatformUtils.isPlatformEmbedded || false;
    const merged = Object.assign(closure_34);
    settingsByContext[DEFAULT] = obj2;
    tmp3 = obj2;
  }
  const merged1 = Object.assign(tmp3, arg0);
  if (flag) {
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
  }
  return tmp3;
}
function applySettings() {
  const tmp = getSettings();
  const inputDeviceId = tmp.inputDeviceId;
  result.setAudioInputDevice(inputDeviceId);
  maybeProbeAudioEffects(inputDeviceId);
  obj2 = PlatformUtils;
  if (obj2.isMac()) {
    let guid;
    if (inputDevices[inputDeviceId] != null) {
      guid = tmp7.guid;
    }
    if (null != guid) {
      const watchDeviceHardwareMutedChange = obj.watchDeviceHardwareMutedChange;
      if (watchDeviceHardwareMutedChange != null) {
        result = watchDeviceHardwareMutedChange(tmp7.guid);
      }
    }
  }
  result.setAudioOutputDevice(tmp.outputDeviceId);
  updateVideo();
  result.setInputVolume(tmp.inputVolume);
  const setOutputVolume = obj.setOutputVolume;
  const obj3 = MobileAudioOutputExperimentDefault;
  if (obj3.getConfig({ location: "MediaEngineStore.applySettings" }).audioOutputPresent) {
    setOutputVolume(tmp.outputVolume);
  } else {
    setOutputVolume(BottomSheet);
  }
  result.setAecDump(tmp.aecDumpEnabled);
  const result1 = obj.setSidechainCompression(tmp.sidechainCompression);
  const result2 = obj.setSidechainCompressionStrength(tmp.sidechainCompressionStrength);
  const result3 = obj.setAudioInputBypassSystemProcessing(tmp.bypassSystemInputProcessing);
  const tmp4Result = PlatformUtils;
  if (tmp4Result.isLinux()) {
    const tmp14Result = DesktopNativeUtilsDefault;
    if (tmp14Result != null) {
      const setOpenH264Enabled = tmp14Result.setOpenH264Enabled;
      if (setOpenH264Enabled != null) {
        setOpenH264Enabled(tmp.openH264Enabled);
      }
    }
  }
  const audioMixerSettings = tmp.audioMixerSettings;
  const tmp14Result2 = SpatialAudioForVoiceExperimentDefault;
  _false = true === audioMixerSettings.enabled && tmp14Result2.getConfig({ location: "MediaEngineStore" }).enabled && obj.supports(Features.SPATIAL_AUDIO);
  const distanceAttenuationEnabled = audioMixerSettings.distanceAttenuationEnabled;
  const obj4 = { isSpatial: _false, enabled: _false, binaural: { spatialBlend: audioMixerSettings.spatialBlend }, distanceAttenuation: { enabled: distanceAttenuationEnabled }, airAbsorption: { enabled: distanceAttenuationEnabled }, reflections: { enabled: audioMixerSettings.reflectionsEnabled } };
  const supportsResult = true === audioMixerSettings.enabled && tmp14Result2.getConfig({ location: "MediaEngineStore" }).enabled && obj.supports(Features.SPATIAL_AUDIO);
  result.setAudioMixerOptions(obj4);
}
function maybeProbeAudioEffects() {
  return obj(...arguments);
}
obj = function _maybeProbeAudioEffects() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            const obj6 = require("PlatformUtils");
            if (obj6.isWindows()) {
              obj2 = AudioEffectsExperimentDefault;
              if (obj2.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) {
                let guid;
                if (inputDevices[closure_0] != null) {
                  guid = tmp14.guid;
                }
                if (null != guid) {
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: queryAudioEffectsDefault(inputDevices[closure_0].guid, closure_0, result), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          closure_130_57.warn("Unable to query audio effects", closure_0);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
        closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function hasHapticsOverAudioOutputDevices(arg0) {
  const values = Object.values(arg0);
  return values.some((name) => {
    const str = name.name;
    const formatted = str.toLowerCase();
    return formatted.includes("dualsense");
  });
}
function applyRemoteSettings(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let closure_2;
  let audioContextSettings = UserSettingsProtoStore.settings.audioContextSettings;
  if (audioContextSettings == null) {
    obj = { user: {}, stream: {} };
    audioContextSettings = obj;
  }
  function _loop() {
    let tmp3;
    function _loop3(item10056) {
      let closure_0 = item10056;
      if (null != obj[item10056]) {
        return 1;
      } else {
        delete localMutes[item10056];
        delete localVolumes[item10056];
        closure_1_72.eachConnection((setLocalVolume) => {
          setLocalVolume.setLocalVolume(item10056, closure_1);
          setLocalVolume.setLocalMute(item10056, false);
        }, closure_0);
      }
    }
    if (closure_2 === constants.USER) {
      STREAM = MediaEngineContextTypes.DEFAULT;
      tmp3 = MediaEngineContextTypes;
    } else {
      tmp3 = MediaEngineContextTypes;
      STREAM = MediaEngineContextTypes.STREAM;
    }
    let closure_1 = STREAM === tmp3.STREAM ? set2 : BottomSheet;
    obj = audioContextSettings[closure_2];
    if (obj == null) {
      obj = {};
    }
    const tmp5 = getSettings(STREAM);
    const localMutes = tmp5.localMutes;
    const localVolumes = tmp5.localVolumes;
    function _loop2(arg0, muted) {
      let closure_0 = arg0;
      closure_1 = muted;
      obj = flag(closure_2_3[67]);
      if (null != obj.getPendingAudioSettings(STREAM, arg0)) {
        return 1;
      } else {
        if (muted.muted) {
          localMutes[arg0] = true;
        } else {
          delete localMutes[arg0];
        }
        if (muted.volume !== closure_1) {
          localVolumes[arg0] = muted.volume;
        } else {
          delete localVolumes[arg0];
        }
        closure_2_72.eachConnection((setLocalVolume) => {
          setLocalVolume.setLocalVolume(closure_0, closure_1.volume);
          setLocalVolume.setLocalMute(closure_0, closure_1.muted);
        }, STREAM);
      }
    }
    const entries = Object.entries(obj);
    const tmp7 = entries[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp10 = _slicedToArray(tmp8, 2);
      let _loop2Result = _loop2(tmp10[0], tmp10[1]);
      continue;
    }
    if (flag) {
      const _Set = Set;
      const _Object = Object;
      const items = [];
      const _Object2 = Object;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, Object.keys(localMutes), 0);
      HermesBuiltin.arraySpread(items, Object.keys(localVolumes), arraySpreadResult);
      const self = this;
      const self2 = this;
      set = new Set(items);
      for (const item10056 of set) {
        let tmp21 = _loop3(item10056);
        continue;
      }
    }
    mergeSettings({ localMutes, localVolumes }, STREAM);
  }
  const keys = Object.keys(audioContextSettings);
  const iter = keys[Symbol.iterator]();
  while (iter !== undefined) {
    closure_2 = iter.next();
    let _loopResult = _loop();
    continue;
  }
}
function maybeTryHookProcess(pidFromDesktopSource, sound2) {
  let soundshareId;
  let soundshareSession;
  const tmp = sound2;
  if (tmp) {
    let obj5;
    if (null != mediaEngineStore) {
      let audioPid = pidFromDesktopSource;
      if (!mediaEngineStore.getExperimentalSoundshare()) {
        const obj3 = CrossPlatformNativeUtilsDefault;
        audioPid = obj3.getAudioPid(pidFromDesktopSource);
      }
      let str2 = "";
      if (null != audioPid) {
        const obj4 = CrossPlatformNativeUtilsDefault;
        str2 = obj4.generateSessionFromPid(audioPid);
      }
      obj2 = { soundshareId: audioPid, soundshareSession: str2 };
      obj5 = obj2;
    } else {
      mediaEngineStore.info("Error: trying to get soundshare id before MediaEngineStore is instantiated.");
      obj5 = { soundshareId: null, soundshareSession: "" };
    }
    ({ soundshareId, soundshareSession } = obj5);
    if (null != soundshareId) {
      const obj7 = soundshareId(1369);
      const isWindowsResult = obj7.isWindows() && soundshareId > 1;
      if (isWindowsResult) {
        const obj9 = { soundshare_session: soundshareSession };
        const obj8 = HookAll;
        const attachToProcessResult = obj8.attachToProcess(soundshareId, obj9);
        attachToProcessResult.then((result) => {
          let closure_0 = result;
          result = null == result || RunningGameStore.shouldContinueWithoutElevatedProcessForPID(soundshareId);
          if (!result) {
            obj = DispatcherDefault;
            obj.wait(() => {
              obj = closure_2_1(closure_2_3[43]);
              obj2 = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage };
              obj.dispatch(obj2);
            });
          }
        });
      }
      return { soundshareId, soundshareSession };
    }
  }
  const videoHook = null != pidFromDesktopSource && getSettings().videoHook;
  if (videoHook) {
    const obj6 = HookAll;
    obj6.attachToProcess(pidFromDesktopSource);
  }
  return { soundshareId: null, soundshareSession: null };
}
function resetProbingState() {
  const DEFAULT = MediaEngineContextTypes.DEFAULT;
  const videoToggleStateMap = getSettings(DEFAULT).videoToggleStateMap;
  const entries = Object.entries(videoToggleStateMap);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    if (tmp5[1] === constants5.AUTO_PROBING) {
      delete videoToggleStateMap[tmp5[0]];
    }
    continue;
  }
  mergeSettings({ videoToggleStateMap }, DEFAULT, false);
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
  const tmp11 = getEffectiveNoiseCancellationDefault;
  obj2 = { echo_cancellation: tmp.echoCancellation, noise_cancellation: tmp.noiseCancellation, noise_suppression: tmp.noiseSuppression, automatic_gain_control: tmp.automaticGainControl, location, bypass_system_input_processing: tmp.bypassSystemInputProcessing, audio_subsystem: audioSubsystem, audio_layer: audioLayer, input_device: name, effective_noise_cancellation: tmp11(tmp.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode()) };
  const obj3 = AnalyticsUtilsDefault;
  obj3.track(constants.VOICE_PROCESSING, obj2);
}
function setLoopback() {
  let defaultConfig;
  let tmp10;
  const tmp2 = getSettings();
  const inputDeviceId = tmp2.inputDeviceId;
  const tmp4 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp2.echoCancellation;
  const tmp5 = CertifiedDeviceStore.hasNoiseSuppression(inputDeviceId) || tmp2.noiseSuppression;
  const tmp6 = CertifiedDeviceStore.hasAutomaticGainControl(inputDeviceId) || tmp2.automaticGainControl;
  obj2 = { enabled: tmp6 };
  const obj3 = AGC2MobileExperimentDefault;
  if (tmp6) {
    defaultConfig = obj3.getConfig({ location: "getAutomaticGainControlConfig" });
    tmp10 = importDefault;
  } else {
    defaultConfig = obj3.definition.defaultConfig;
    tmp10 = importDefault;
  }
  const tmp11 = defaultConfig.agc2Enabled ? closure_59 : { useAGC2: false };
  const tmp12 = set2.size <= 0;
  const merged = Object.assign(tmp11);
  const obj5 = { echoCancellation: tmp4, echoCancellationPreEcho: tmp12, noiseSuppression: tmp5, automaticGainControlConfig: obj2, noiseCancellation: tmp2.noiseCancellation };
  result.setLoopback(set2.size > 0, obj5);
  const tmpResult = getSettings();
  const inputDeviceId2 = tmpResult.inputDeviceId;
  const tmp16 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId2) || tmpResult.echoCancellation;
  const tmp17 = CertifiedDeviceStore.hasNoiseSuppression(inputDeviceId2) || tmpResult.noiseSuppression;
  const tmp10Result = tmp10(9675);
  const tmp10ResultResult = tmp10Result(tmpResult.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
  const obj6 = AudioFidelityExperiment;
  const voiceFidelityCaps = obj6.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp10ResultResult, noiseSuppressionEnabled: tmp17, echoCancellationEnabled: tmp16 });
  const maxChannelCount = voiceFidelityCaps.maxChannelCount;
  result = obj4.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
  const result1 = obj4.setVoiceChannelCountCap(maxChannelCount);
}
obj = function _setGamescopeVaapiEnabled() {
  obj = _asyncToGenerator(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            closure_0 = undefined;
            if (result.supports(constants.VAAPI)) {
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
                const processUtils2 = window.DiscordNative.processUtils;
                c3 = 1;
                c4 = 1;
                const obj4 = { value: processUtils2.getSystemInfo(), done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
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
            let closure_137 = closure_130_72.supports(constants.GAMESCOPE_CAPTURE);
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _setupKrispNativeModule() {
  obj = _asyncToGenerator(async () => {
    let obj10;
    let obj3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let closure_3;
      try {
        let v100;
        let setupKrispPath;
        let KRISP_INIT_ERROR;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            v100 = undefined;
            setupKrispPath = undefined;
            KRISP_INIT_ERROR = undefined;
            closure_3 = undefined;
            c4 = 2;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: obj10.ensureModule("discord_krisp"), done: false };
            obj10 = DesktopNativeUtilsDefault;
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          c108 = false;
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            let closure_4 = closure_3;
            const _HermesInternal = HermesInternal;
            logger.warn("Failed to load Krisp module: " + closure_4.message);
            const obj6 = closure_130_1(closure_130_3[74]);
            obj6.captureException(closure_4);
            KRISP_INIT_ERROR = constants2.KRISP_INIT_ERROR;
            const message = closure_4.message;
            if (message.includes(": ")) {
              const _parseInt = parseInt;
              const message1 = closure_4.message;
              const str = closure_4.message;
              closure_3 = parseInt(str.substring(message1.indexOf(": ") + 1));
              const _isNaN = isNaN;
              if (!isNaN(closure_3)) {
                if (0 !== closure_3) {
                  KRISP_INIT_ERROR = closure_3;
                }
              }
              KRISP_INIT_ERROR = constants2.KRISP_INIT_ERROR;
            }
            const obj7 = { type: closure_130_0(closure_130_3[41]).AVError.NOISE_CANCELLER_ERROR, underlyingError: closure_130_147(KRISP_INIT_ERROR) };
            const reportAVError = closure_130_0(closure_130_3[41]).reportAVError;
            const tmp53 = closure_130_0(closure_130_3[41]);
            reportAVError(obj7);
            const obj9 = { noise_canceller_error: KRISP_INIT_ERROR };
            const obj8 = closure_130_1(closure_130_3[42]);
            obj8.track(constants.VOICE_PROCESSING, obj9);
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c108 = false;
              c6 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              const obj14 = closure_130_1(closure_130_3[62]);
              v100 = obj14.requireModule("discord_krisp");
              let c109 = true;
              const getSdkVersion = v100.getSdkVersion;
              let sdkVersion;
              if (getSdkVersion != null) {
                sdkVersion = getSdkVersion();
              }
              const getSuppressionLevel = v100.getSuppressionLevel;
              let suppressionLevel;
              if (getSuppressionLevel != null) {
                suppressionLevel = getSuppressionLevel();
              }
              let c0 = suppressionLevel;
              if (suppressionLevel == null) {
                c0 = 100;
              }
              let closure_112 = c0;
              const getNcModels = v100.getNcModels;
              if (getNcModels != null) {
                const ncModels = getNcModels();
                ncModels.then((result) => {
                  let closure_1_114 = result;
                  closure_1_69.emitChange();
                });
              }
              const emitChangeResult = closure_130_69.emitChange();
              c5 = 4;
              c6 = 1;
              const obj12 = { value: obj3.ensureModule("discord_voice"), done: false };
              obj3 = closure_130_1(closure_130_3[62]);
              return obj12;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c108 = false;
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            obj = closure_130_1(closure_130_3[62]);
            setupKrispPath = obj.requireModule("discord_voice");
            setupKrispPath = setupKrispPath.setupKrispPath;
            if (setupKrispPath != null) {
              setupKrispPath();
            }
            c4 = 1;
          }
          c4 = 0;
          c108 = false;
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp69) {
        closure_3 = tmp69;
        if (0 === c4) {
          c6 = 3;
          throw tmp69;
        } else if (1 === tmp71) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _downloadOpenH() {
  let logger;
  obj = _asyncToGenerator(async () => {
    let obj5;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let success;
        let replaced;
        let closure_5;
        let message;
        let fetchedFromNetwork;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            success = undefined;
            replaced = undefined;
            closure_5 = undefined;
            c3 = 1;
            message = "";
            fetchedFromNetwork = false;
            const _URL = URL;
            const parsed = URL.parse(closure_2_65);
            if (null === parsed) {
              const logResult = logger.log("OpenH264 URL ", parsed, " is invalid");
              c3 = 0;
              c5 = 3;
              const obj6 = { value: undefined, done: true };
              return obj6;
            } else {
              const str10 = parsed.pathname;
              const parts = str10.split("/");
              const str11 = parts[parts.length - 1];
              replaced = str11.replace(".bz2", "");
              c3 = 2;
              const obj11 = DesktopNativeUtilsDefault;
              c4 = 3;
              c5 = 1;
              const obj7 = {
                value: obj11.downloadOpenH264(closure_2_65, replaced, d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f, (arg0) => {
                            logger.log("OpenH264 download status", arg0);
                          }),
                done: false
              };
              return obj7;
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            let closure_7 = closure_2;
            closure_129_57.error("OpenH264 download failed", closure_7);
          } else {
            if (2 === c4) {
              c3 = 1;
              message = closure_2;
              closure_129_57.error("OpenH264 download failed", message);
              message = message.message;
              success = false;
            } else {
              if (3 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  fetchedFromNetwork = value;
                  closure_129_57.log("OpenH264 is ready", fetchedFromNetwork);
                  fetchedFromNetwork = fetchedFromNetwork.fetchedFromNetwork;
                  success = true;
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
                closure_5 = value;
                closure_129_57.log("OpenH264 cleanup", closure_5);
              }
              c3 = 0;
            }
            const obj9 = { success, fetched_from_network: fetchedFromNetwork, error_message: message };
            const obj3 = closure_129_1(closure_129_3[42]);
            obj3.track(closure_129_18.VIDEO_OPENH264_DOWNLOADED, obj9);
            const tmp33 = success;
            if (tmp33) {
              const items = [replaced];
              c4 = 4;
              c5 = 1;
              const obj10 = { value: obj5.cleanupUnusedOpenH264Files(items), done: false };
              obj5 = closure_129_1(closure_129_3[62]);
              return obj10;
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp48) {
        closure_2 = tmp48;
        if (0 === c3) {
          c5 = 3;
          throw tmp48;
        } else if (1 === tmp50) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function setAudioSubsystem(arg0) {
  let obj3;
  let obj4;
  let obj6;
  if (arg0 === constants8.AUTOMATIC) {
    let DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT2 === undefined) {
      DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    }
    let tmp24 = settingsByContext[DEFAULT2];
    if (null == tmp24) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT2] = obj2;
      tmp24 = obj2;
    }
    const _Object2 = Object;
    const merged1 = Object.assign(tmp24, { automaticAudioSubsystem: true });
    const Storage2 = Storage6.Storage;
    result = Storage2.set(MediaEngineStore_str, settingsByContext);
    result.queueAudioSubsystem(tmp.EXPERIMENTAL);
  } else {
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      const obj5 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj6, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj6 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged2 = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj5;
      tmp3 = obj5;
    }
    const _Object = Object;
    const merged3 = Object.assign(tmp3, { automaticAudioSubsystem: false });
    const Storage = Storage6.Storage;
    const result1 = Storage.set(MediaEngineStore_str, settingsByContext);
    result.setAudioSubsystem(arg0);
  }
}
function handleUserSettingsModal(section) {
  if (section.section === constants4.VOICE) {
    if (!c79) {
      const enableResult = result.enable();
      enableResult.then(() => {
        obj = disabledLocalVideos(dependencyMap[43]);
        return obj.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: true, unmute: false });
      });
    }
  }
  return false;
}
function processQueueMetricsForAnalytics(taskMetrics) {
  let num2;
  let sorted;
  let taskMetrics1;
  if (null != taskMetrics.taskMetrics) {
    if (0 !== taskMetrics.taskMetrics.length) {
      if (1 === taskMetrics.taskMetrics.length) {
        return null;
      } else {
        obj = { metrics_period_ms: null, total_tasks: taskMetrics.reduce((acc, count) => acc + count.count, 0), total_exec_time_ns: taskMetrics1.reduce((acc, totalExecTimeNs) => acc + totalExecTimeNs.totalExecTimeNs, 0), queue_name: null, full_task_report: JSON.stringify(sorted) };
        ({ periodMs: obj.metrics_period_ms, queueName: obj.queue_name, taskMetrics } = taskMetrics);
        taskMetrics1 = taskMetrics.taskMetrics;
        const items = [];
        HermesBuiltin.arraySpread(items, taskMetrics.taskMetrics, 0);
        sorted = items.sort((longestExecTimeNs, longestExecTimeNs2) => longestExecTimeNs2.longestExecTimeNs - longestExecTimeNs.longestExecTimeNs);
        const items1 = [];
        HermesBuiltin.arraySpread(items1, taskMetrics.taskMetrics, 0);
        const sorted1 = items1.sort((longestQueueTimeNs, longestQueueTimeNs2) => longestQueueTimeNs2.longestQueueTimeNs - longestQueueTimeNs.longestQueueTimeNs);
        let num = 0;
        do {
          if (num < sorted.length) {
            let tmp3 = sorted[num];
            let _HermesInternal = HermesInternal;
            obj["slow_task_" + num + "_name"] = tmp3.name;
            let _HermesInternal2 = HermesInternal;
            obj["slow_task_" + num + "_longest_exec_time_ns"] = tmp3.longestExecTimeNs;
          }
          num = num + 1;
          num2 = 0;
        } while (num < 3);
        do {
          if (num2 < sorted1.length) {
            let tmp5 = sorted1[num2];
            let _HermesInternal3 = HermesInternal;
            obj["delayed_task_" + num2 + "_name"] = tmp5.name;
            let _HermesInternal4 = HermesInternal;
            obj["delayed_task_" + num2 + "_longest_queue_time_ns"] = tmp5.longestQueueTimeNs;
          }
          num2 = num2 + 1;
        } while (num2 < 3);
        const _JSON = JSON;
        return obj;
      }
    }
  }
  return null;
}
const getSystemAnalyticsInfo = SystemAnalyticsStore.getSystemAnalyticsInfo;
let Constants = Constants_mod2;
({ AnalyticEvents: closure_18, AppStates: closure_19, InputModes } = Constants);
({ RTCConnectionStates: closure_21, UserSettingsSections: closure_22, VideoToggleState: closure_23 } = Constants);
Constants = Constants_mod2;
({ DARWIN_SCKIT_VERSION: closure_24, DARWIN_SCKIT_AUDIO_VERSION: closure_25, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD: closure_26, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER: closure_27, WINDOWS_GRAPHICS_CAPTURE_BUILD: closure_28, WINDOWS_GRAPHICS_CAPTURE_SEMVER: closure_29, WINDOWS_SOUNDSHARE_HOOK_VERSION: closure_30, WINDOWS_SOUNDSHARE_NONHOOK_VERSION: closure_31 } = Constants);
({ NativePermissionStates: closure_32, NativePermissionTypes } = NativePermissionConstants);
let closure_34 = SpatialAudioConstants.DEFAULT_AUDIO_MIXER_SETTINGS;
({ ProtoAudioSettingsContextTypes: closure_35, UserSettingsTypes: closure_36 } = UserSettingsConstants);
const InputProfile = UserSettingsVoiceAndVideoConstants.InputProfile;
Constants = Constants_mod2;
({ AudioSubsystems: closure_38, DARWIN_H265_VERSION: closure_39, DEFAULT_VOLUME: closure_40, DEFAULT_STREAM_VOLUME: closure_41, DEFAULT_DEVICE_ID } = Constants);
const DeviceTypes = Constants.DeviceTypes;
let DISABLED_DEVICE_ID = Constants.DISABLED_DEVICE_ID;
({ ExperimentFlags: closure_45, Features } = Constants);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const NoiseCancellerError = Constants.NoiseCancellerError;
const SpatialAudioStatus = Constants.SpatialAudioStatus;
({ VideoFilterError: closure_50, VideoFilterTarget: closure_51, MediaTypes: closure_52, QUEUE_METRICS_INTERVAL_MS: closure_53, VideoToggleReason: closure_54, SIMULCAST_HQ_QUALITY: closure_55, SIMULCAST_LQ_QUALITY: closure_56 } = Constants);
obj = new LoggerDefault("MediaEngineStore");
const MediaEngineStore_str = "MediaEngineStore";
let closure_59 = { useAGC2: true, enableAnalog: false, enableDigital: true, headroom_db: 5, max_gain_db: 50, initial_gain_db: 15, max_gain_change_db_per_second: 6, max_output_noise_level_dbfs: -50, fixed_gain_db: 0 };
let closure_60 = { left: 1, right: 1 };
const graphicsCaptureStaleFrameTimeoutMs = 5 * DurationsDefault.Millis.SECOND;
let closure_62 = 2 * DurationsDefault.Millis.SECOND;
let closure_63 = 30 * DurationsDefault.Millis.SECOND;
const deep_noise_suppression = "deep_noise_suppression";
let c65 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
const d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
let c67 = 0;
let obj2 = { WEBCAM: "WEBCAM", INTEGRATED: "INTEGRATED", BLUETOOTH: "BLUETOOTH", AIRPLAY: "AIRPLAY", HEADSET: "HEADSET" };
let obj3 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: { threshold: -84, autoThreshold: false, vadUseKrisp: false }, echoCancellation: false, noiseSuppression: false, automaticGainControl: false, noiseCancellation: false, bypassSystemInputProcessing: true };
let closure_70 = { [InputProfile.CUSTOM]: {}, [InputProfile.VOICE_ISOLATION]: { modeOptions: { autoThreshold: true, vadUseKrisp: true }, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true }, [InputProfile.STUDIO]: obj3 };
let closure_71 = { modeOptions: { vadUseKrisp: false }, noiseCancellation: false, noiseSuppression: true };
let BaseConnectionEvent = BaseConnectionEvent_mod;
const initializeMediaEngine = BaseConnectionEvent.initializeMediaEngine;
BaseConnectionEvent = BaseConnectionEvent_mod;
let result = initializeMediaEngine(BaseConnectionEvent.determineMediaEngine());
obj.enableNativeLogger(true);
const internalBinaryWrite7 = {};
let items = [MediaEngineContextTypes.DEFAULT];
let set = new Set(items);
let c79 = result.supports(Features.AUTO_ENABLE);
let required = false;
let STREAM = MediaEngineContextTypes.STREAM;
let c82 = 0;
let c83 = false;
let closure_84 = performance.now();
let c85 = null;
let obj4 = { id: DEFAULT_DEVICE_ID, deviceType: DeviceTypes.AUDIO_INPUT, index: 0, name: "No Input Devices", disabled: true, guid: "emoji", hardwareId: "Date", containerId: "toCharArray$esjava$1" };
const inputDevices = { [DEFAULT_DEVICE_ID]: obj4 };
let obj5 = { id: DEFAULT_DEVICE_ID, deviceType: DeviceTypes.AUDIO_OUTPUT, index: 0, name: "No Output Devices", disabled: true, guid: "unicodeVersion", hardwareId: "mode", containerId: "bm" };
const outputDevices = { [DEFAULT_DEVICE_ID]: obj5 };
let obj6 = { id: DEFAULT_DEVICE_ID, deviceType: DeviceTypes.VIDEO_INPUT, index: 0, name: "No Video Devices", disabled: true, guid: "unicodeVersion", hardwareId: "height", containerId: "toCharArray$esjava$1" };
let closure_88 = { [DEFAULT_DEVICE_ID]: obj6 };
const timeout = new Timers.Timeout();
let c90 = false;
let mute = false;
let closure_92 = false;
let c93 = false;
let closure_94 = false;
let c97 = false;
let c98 = false;
const timeout1 = new Timers.Timeout();
let c100 = false;
let c101 = false;
let c102 = false;
let closure_103 = false;
let c104;
let c105;
let hardwareMuted;
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
let nextPromise = null;
let c125 = false;
let NativePermissionUtils = NativePermissionUtils_mod;
NativePermissionUtils.hasPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: false });
NativePermissionUtils = NativePermissionUtils_mod;
NativePermissionUtils.hasPermission(NativePermissionTypes.CAMERA, { showAuthorizationError: false });
const set1 = new Set();
let c127 = true;
const set2 = new Set();
let c129;
const appSupported = {};
let c131 = null;
let c132 = null;
let c133 = null;
let c134 = false;
let enabled = true;
let c136 = false;
let c137 = false;
let c138 = false;
let c139 = false;
let closure_140 = {};
let items1 = [, , , , , , , , , ];
({ KRISP_INIT_ERROR: arr2[0], KRISP_INIT_ERROR_NATIVE: arr2[1], KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED: arr2[2], KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED: arr2[3], KRISP_INIT_ERROR_UNSIGNED: arr2[4], KRISP_INIT_ERROR_GLOBAL_INIT: arr2[5], KRISP_INIT_ERROR_WEIGHT_8K: arr2[6], KRISP_INIT_ERROR_WEIGHT_16K: arr2[7], KRISP_INIT_ERROR_WEIGHT_32K: arr2[8], KRISP_INIT_ERROR_WEIGHT_VAD: arr2[9] } = NoiseCancellerError);
const set3 = new Set(items1);
let c153 = ">=10.0.15063";
const re156 = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
const Store = get_initializedDefault.Store;
class MediaEngineStore extends Store {
  initialize() {
    let bitrate;
    let closure_76;
    let everyResult;
    let logger;
    let mode;
    let obj6;
    let obj7;
    let pollMetrics;
    function setGamescopeVaapiEnabled() {
      return obj(...arguments);
    }
    function setupKrispNativeModule() {
      return obj(...arguments);
    }
    function downloadOpenH264() {
      return obj(...arguments);
    }
    let self = this;
    if (navigation == null) {
      let tmp = obj;
      let self2 = this;
      const self3 = this;
      const tmp4 = self;
      const tmp5 = new obj(13889)(closure_72, self);
      let tmp6 = tmp5;
      navigation = tmp5;
    }
    timeout.start(closure_63, () => {
      logger.error("Device enumeration timed out");
      obj = obj(dependencyMap[42]);
      obj.track(constants.DEVICE_ENUMERATION_TIMEOUT, {});
    });
    obj = closure_72;
    closure_72.on(pollMetrics(4945).MediaEngineEvent.Connection, (setAttenuation) => {
      pollMetrics = setAttenuation;
      closure_164();
      closure_144(setAttenuation);
      closure_145(setAttenuation);
      closure_152(setAttenuation);
      const tmp6 = closure_143();
      setAttenuation.setAttenuation(tmp6.attenuation, tmp6.attenuateWhileSpeakingSelf, tmp6.attenuateWhileSpeakingOthers);
      setAttenuation.setQoS(tmp6.qos);
      obj = pollMetrics(status[24]);
      if (!obj.isWindows()) {
        const tmp9Result = pollMetrics(status[24]);
        if (!tmp9Result.isLinux()) {
          const tmp9Result19 = pollMetrics(status[24]);
          if (tmp9Result19.isMac()) {
            setAttenuation.setExperimentFlag(closure_45.H265_HARDWARE_DECODE_AVAILABLE, true);
          }
        }
        const tmp9Result20 = pollMetrics(status[24]);
        const tmp14 = tmp9Result20.isLinux() && tmp6.openH264Enabled;
        if (tmp14) {
          setAttenuation.setExperimentFlag(closure_45.USE_LIBOPENH264_DECODER, true);
        }
        const tmp9Result21 = pollMetrics(status[47]);
        if (tmp9Result21.getLowLatencyRateControlExperimentConfig({ location: "setupMediaEngine" }).enabled) {
          setAttenuation.setExperimentFlag(closure_45.LOW_LATENCY_RATE_CONTROL, true);
        }
        setAttenuation.setExperimentFlag(closure_45.RESET_DECODER_ON_ERRORS, true);
        setAttenuation.setExperimentFlag(closure_45.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true);
        const obj6 = obj(status[48]);
        if (obj6.getConfig({ location: "MediaEngineStore" }).swallowVolumeOnlySpeakingEvents) {
          setAttenuation.setExperimentFlag(closure_45.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, true);
        }
        result = setAttenuation.setMinimumJitterBufferLevel(80);
        if (setAttenuation.context === constants4.STREAM) {
          const result1 = setAttenuation.setSoundshareDiscardRearChannels(closure_159(closure_87));
        }
        const tmp9Result22 = pollMetrics(status[24]);
        if (tmp9Result22.isWindows()) {
          setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_ENCODE, true);
          setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
          setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_HARDWARE_DECODE, true);
        } else {
          const tmp9Result23 = pollMetrics(status[24]);
          if (tmp9Result23.isMac()) {
            setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
            setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_HARDWARE_DECODE, true);
            let arch;
            const setExperimentFlag = setAttenuation.setExperimentFlag;
            const H265_DISABLE_ENCODE = closure_45.H265_DISABLE_ENCODE;
            if (window != null) {
              if (DiscordNative != null) {
                arch = DiscordNative.os.arch;
              }
            }
            let satisfiesResult = "arm64" === arch;
            if (satisfiesResult) {
              let release;
              const satisfies = obj(status[49]).satisfies;
              obj(status[49]);
              if (window != null) {
                const DiscordNative2 = window.DiscordNative;
                if (DiscordNative2 != null) {
                  release = DiscordNative2.os.release;
                }
              }
              satisfiesResult = satisfies(release, closure_39);
            }
            setExperimentFlag(H265_DISABLE_ENCODE, !satisfiesResult);
          } else {
            const tmp9Result24 = pollMetrics(status[24]);
            if (tmp9Result24.isLinux()) {
              const tmp9Result25 = pollMetrics(status[50]);
              if (tmp9Result25.getAV1EncodeExperimentLinuxConfig("MediaEngineStore").enabled) {
                setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_ENCODE, true);
              }
              setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
            } else {
              const tmp9Result26 = pollMetrics(status[24]);
              let isIOSResult = tmp9Result26.isIOS();
              if (!isIOSResult) {
                const tmp9Result27 = pollMetrics(status[24]);
                isIOSResult = tmp9Result27.isAndroid();
              }
              if (isIOSResult) {
                setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_DECODE, true);
                setAttenuation.setExperimentFlag(closure_45.SIGNAL_AV1_HARDWARE_DECODE, true);
                setAttenuation.setExperimentFlag(closure_45.H265_HARDWARE_DECODE_AVAILABLE, true);
              }
            }
          }
        }
        const tmp9Result28 = pollMetrics(status[24]);
        if (tmp9Result28.isWeb()) {
          const tmp22Result2 = obj(status[51]);
          setAttenuation.setExperimentFlag(closure_45.BROWSER_HEVC, tmp22Result2.getConfig({ location: "MediaEngineStore" }).enabled);
        }
        const tmp9Result29 = pollMetrics(status[24]);
        enabled = tmp9Result29.isWindows();
        if (enabled) {
          let startsWithResult;
          if (closure_131 != null) {
            startsWithResult = closure_131.startsWith("AMD");
          }
          enabled = startsWithResult;
        }
        if (enabled) {
          const tmp9Result30 = pollMetrics(status[52]);
          enabled = tmp9Result30.getWmfGpuEncode("MediaEngineStore").enabled;
        }
        if (enabled) {
          setAttenuation.setExperimentFlag(closure_45.WMF_GPU_ENCODE, true);
        }
        const tmp9Result31 = pollMetrics(status[24]);
        let enabled2 = tmp9Result31.isWindows();
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
          const tmp9Result32 = pollMetrics(status[53]);
          enabled2 = tmp9Result32.getWmfGpuEncodeIntel("MediaEngineStore").enabled;
        }
        if (enabled2) {
          setAttenuation.setExperimentFlag(closure_45.WMF_GPU_ENCODE, true);
          setAttenuation.setExperimentFlag(closure_45.INTEL_GPU_DISABLE, true);
        }
        const tmp9Result33 = pollMetrics(status[24]);
        let enabled3 = tmp9Result33.isWindows();
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
          const tmp9Result34 = pollMetrics(status[54]);
          enabled3 = tmp9Result34.getWmfCpuEncodeIntel("MediaEngineStore").enabled;
        }
        if (enabled3) {
          setAttenuation.setExperimentFlag(closure_45.INTEL_GPU_DISABLE, true);
        }
        const tmp9Result35 = pollMetrics(status[24]);
        let enabled4 = tmp9Result35.isWindows();
        if (enabled4) {
          let startsWithResult3;
          if (closure_131 != null) {
            startsWithResult3 = closure_131.startsWith("Qualcomm");
          }
          enabled4 = startsWithResult3;
        }
        if (enabled4) {
          const tmp9Result36 = pollMetrics(status[52]);
          enabled4 = tmp9Result36.getWmfGpuEncode("MediaEngineStore").enabled;
        }
        if (enabled4) {
          setAttenuation.setExperimentFlag(closure_45.WMF_GPU_ENCODE, true);
        }
        const result2 = closure_72.setHasFullbandPerformance(tmp22(status[55])());
        const result3 = setAttenuation.setRemoteAudioHistory(1000);
        const tmp5Result = closure_143(setAttenuation.context);
        const result4 = setAttenuation.setPostponeDecodeLevel(100);
        const _Object = Object;
        const keys = Object.keys(tmp5Result.localMutes);
        for (const item10291 of keys) {
          if (item10291 !== closure_11.getId()) {
            let setLocalMuteResult = setAttenuation.setLocalMute(item10291, tmp5Result.localMutes[item10291]);
          }
          continue;
        }
        const _Object2 = Object;
        const keys1 = Object.keys(tmp5Result.localVolumes);
        for (const item10310 of keys1) {
          if (item10310 !== closure_11.getId()) {
            let setLocalVolumeResult = setAttenuation.setLocalVolume(item10310, tmp5Result.localVolumes[item10310]);
          }
          continue;
        }
        const _Object3 = Object;
        const keys2 = Object.keys(tmp5Result.localPans);
        for (const item10329 of keys2) {
          let rect = tmp5Result.localPans[item10329];
          let setLocalPanResult = setAttenuation.setLocalPan(item10329, rect.left, rect.right);
          continue;
        }
        const _Object4 = Object;
        const keys3 = Object.keys(tmp5Result.disabledLocalVideos);
        for (const item10345 of keys3) {
          let result5 = setAttenuation.setLocalVideoDisabled(item10345, tmp5Result.disabledLocalVideos[item10345]);
          continue;
        }
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.Speaking, (userId, speakingFlags, arg2, voiceDb) => {
          obj = obj(dependencyMap[43]);
          obj2 = { type: "SPEAKING", context: setAttenuation.context, userId, speakingFlags, voiceDb };
          obj.dispatch(obj2);
        });
        if (setAttenuation.context === constants4.DEFAULT) {
          c98 = false;
          setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.SpeakingWhileMuted, () => {
            c98 = true;
            if (!c98) {
              closure_1_69.emitChange();
            }
            closure_1_99.start(closure_1_62, () => {
              c98 = false;
              closure_1_69.emitChange();
            });
          });
        }
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.DesktopSourceEnd, (endReason, errorCode) => {
          obj = obj(dependencyMap[43]);
          obj2 = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: obj3, endReason, errorCode };
          obj3 = { context: setAttenuation.context };
          obj.dispatch(obj2);
        });
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.InteractionRequired, (required) => {
          obj = closure_1_1(status[43]);
          obj2 = { type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required };
          obj.dispatch(obj2);
        });
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.VideoHookInitialize, (backend, format, framebuffer_format, sample_count, success, reinitialization) => {
          desktopSource = undefined;
          if (closure_1_74 != null) {
            desktopSource = closure_1_74.desktopSource;
          }
          if (null != desktopSource) {
            obj = { backend, format, framebuffer_format, sample_count, success, reinitialization };
            const track = closure_1_1(status[42]).track;
            const VIDEOHOOK_INITIALIZED = constants.VIDEOHOOK_INITIALIZED;
            let desktopSource1;
            closure_1_1(status[42]);
            const tmp16 = closure_1_1(status[56]);
            if (closure_1_74 != null) {
              desktopSource1 = closure_1_74.desktopSource;
            }
            const merged = Object.assign(tmp16(desktopSource1));
            track(VIDEOHOOK_INITIALIZED, obj);
          }
        });
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.NoiseCancellationError, closure_150);
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.VoiceActivityDetectorError, closure_150);
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.SdpError, (operation, error, type, sdp) => {
          obj = closure_1_1(status[42]);
          obj2 = { operation, error, type, sdp };
          obj.track(constants.SDP_ERROR, obj2);
        });
        setAttenuation.on(pollMetrics(status[25]).BaseConnectionEvent.VideoState, (videoState) => {
          obj = obj(dependencyMap[43]);
          obj2 = { type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState, context: setAttenuation.context };
          obj.dispatch(obj2);
        });
        setAttenuation.setBitRate(bitrate.bitrate);
        const result6 = setAttenuation.applyVideoQualityMode(mode.mode);
        const tmp94Result = pollMetrics(status[24]);
        const isWindowsResult = tmp94Result.isWindows() && closure_72.supports(constants3.ASYNC_VIDEO_INPUT_DEVICE_INIT);
        if (isWindowsResult) {
          const result7 = closure_72.setAsyncVideoInputDeviceInit(true);
        }
      }
      const promise = closure_142();
      promise.then((result) => {
        setAttenuation.setExperimentFlag(closure_2_45.H265_HARDWARE_DECODE_AVAILABLE, result);
      });
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.DeviceChange, (inputDevices, outputDevices, videoDevices) => {
      timeout.stop();
      obj = obj(dependencyMap[43]);
      obj2 = { type: "MEDIA_ENGINE_DEVICES", inputDevices, outputDevices, videoDevices };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.VolumeChange, (inputVolume, outputVolume) => {
      obj = obj(dependencyMap[43]);
      obj2 = { type: "AUDIO_VOLUME_CHANGE", inputVolume, outputVolume };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.DesktopSourceEnd, (endReason, errorCode) => {
      obj = obj(dependencyMap[43]);
      obj2 = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason, errorCode };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.AudioPermission, (granted) => {
      c125 = true;
      obj = obj(dependencyMap[43]);
      obj2 = { type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.VideoPermission, (granted) => {
      obj = obj(dependencyMap[43]);
      obj2 = { type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted };
      obj.dispatch(obj2);
    });
    const on = closure_72.on;
    on(pollMetrics(4945).MediaEngineEvent.WatchdogTimeout, _asyncToGenerator(async () => {
      let closure_2;
      let closure_3;
      let obj5;
      let obj8;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let will_restart;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj3 = { value, done: true };
              return obj3;
            } else {
              status = undefined;
              will_restart = undefined;
              const _window = window;
              if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL) {
                c4 = 1;
                const obj4 = { message: { message: "Voice Watchdog Timeout" } };
                c5 = 2;
                c6 = 1;
                const obj6 = { value: obj8.submitLiveCrashReport(obj4), done: false };
                obj8 = obj(dependencyMap[57]);
                return obj6;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            if (typeof status.status === "number") {
              status = tmp.status;
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              c4 = 0;
            }
          } else {
            if (3 === c5) {
              c4 = 0;
              closure_130_57.error("Failed to flush voice watchdog timeout analytics event", status);
            } else {
              if (4 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  c4 = 0;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const Storage = closure_130_0(closure_130_3[59]).Storage;
                const _Date = Date;
                set = Storage.set;
                const str = Date.now();
                result = set("discord_watchdog_restart_timestamp", str.toString());
                const app = closure_130_1(closure_130_3[58]).app;
                app.relaunch();
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
            const tmp20 = will_restart;
            if (tmp20) {
              closure_130_57.info("Relaunching app due to voice watchdog timeout");
              const processUtils = closure_130_1(closure_130_3[58]).processUtils;
              c5 = 5;
              c6 = 1;
              const obj10 = { value: processUtils.setCrashReason("voice-watchdog-timeout"), done: false };
              return obj10;
            }
          }
          let c0 = status;
          const warn = closure_130_57.warn;
          if (status == null) {
            c0 = 200;
          }
          const _HermesInternal = HermesInternal;
          warn("Watchdog timeout, report submission status: " + c0);
          will_restart = null != closure_130_1(closure_130_3[58]).processUtils.setCrashReason;
          c4 = 2;
          const obj11 = { minidump_submission_error: status, will_restart };
          c5 = 4;
          c6 = 1;
          const obj12 = { value: obj5.track(closure_130_18.VOICE_WATCHDOG_TIMEOUT, obj11, { flush: true }), done: false };
          obj5 = closure_130_1(closure_130_3[42]);
          return obj12;
        } catch (tmp49) {
          status = tmp49;
          if (0 === c4) {
            c6 = 3;
            throw tmp49;
          } else if (1 === tmp51) {
            c5 = 1;
          } else {
            c5 = 3;
          }
        }
      }
    }));
    closure_72.on(pollMetrics(4945).MediaEngineEvent.VideoInputInitialized, (description) => {
      let rounded;
      const tmp = obj;
      const tmp3 = obj(dependencyMap[42]);
      obj = { device_name: description.description.name, time_to_first_frame_ms: rounded, timed_out: null, activity: null, media_session_id: RTCConnectionStore.getMediaSessionId(), rtc_connection_id: RTCConnectionStore.getRTCConnectionId() };
      rounded = null;
      const track = tmp3.track;
      const VIDEO_INPUT_INITIALIZED = constants.VIDEO_INPUT_INITIALIZED;
      if (!description.initializationTimerExpired) {
        const _Math = Math;
        rounded = Math.round(description.timeToFirstFrame * tmp(dependencyMap[23]).Millis.SECOND);
      }
      ({ initializationTimerExpired: obj.timed_out, entropy: obj.activity } = description);
      track(VIDEO_INPUT_INITIALIZED, obj);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.AudioInputInitialized, (description) => {
      const tmp = obj(dependencyMap[42]);
      obj = { device_name: description.description.name, time_to_initialized_ms: Math.round(description.timeToInitialized * obj(dependencyMap[23]).Millis.SECOND), rtc_connection_id: RTCConnectionStore.getRTCConnectionId() };
      const track = tmp.track;
      const AUDIO_INPUT_INITIALIZED = constants.AUDIO_INPUT_INITIALIZED;
      track(AUDIO_INPUT_INITIALIZED, obj);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      obj = obj(dependencyMap[43]);
      obj.dispatch({ type: "CLIPS_RESTART" });
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.ClipsInitFailure, (errMsg, applicationName) => {
      let closure_2 = closure_82 < 3;
      closure_82 = closure_82 + 1;
      obj = applicationName(status[43]);
      obj.wait(() => {
        const tmp = obj;
        obj = obj(dependencyMap[43]);
        obj2 = { type: "CLIPS_INIT_FAILURE", errMsg, applicationName };
        obj.dispatch(obj2);
        if (closure_2) {
          const tmpResult = tmp(dependencyMap[43]);
          tmpResult.dispatch({ type: "CLIPS_RESTART" });
        } else {
          const _HermesInternal = HermesInternal;
          logger.warn("Clips init failure budget exhausted (" + c82 + " consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.");
        }
      });
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.ClipsRecordingHealthy, () => {
      if (0 !== c82) {
        const _HermesInternal = HermesInternal;
        logger.info("Clips bridge reported healthy; resetting restart budget (was " + c82 + ").");
        c82 = 0;
      }
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.ClipsRecordingReadyChanged, (arg0) => {
      if (closure_1_83 !== arg0) {
        const _HermesInternal = HermesInternal;
        logger.info("Clips recorder ready changed: " + arg0);
        closure_1_83 = arg0;
      }
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.ClipsBridgeIdleShutdown, () => {
      logger.info("Clips bridge idle shutdown");
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.ClipsRecordingEnded, (arg0, soundshareId) => {
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
          obj = HookAll;
          result = obj.cancelAttachToProcess(soundshareId);
        }
        _null = null;
      }
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.NativeScreenSharePickerUpdate, (existing, content) => {
      obj = obj(dependencyMap[43]);
      obj2 = { type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing, content };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.NativeScreenSharePickerCancel, (existing) => {
      obj = obj(dependencyMap[43]);
      obj2 = { type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.NativeScreenSharePickerError, (error) => {
      obj = obj(dependencyMap[43]);
      obj2 = { type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.AudioDeviceModuleError, (audio_device_module, code, device_name) => {
      obj = obj(dependencyMap[42]);
      obj2 = { audio_device_module, code, device_name };
      obj.track(constants.AUDIO_DEVICE_MODULE_ERROR, obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.VideoCodecError, (mode) => {
      let VIDEO_DECODE_ERROR;
      let tmp2;
      let tmp3;
      if ("encode" === mode.mode) {
        VIDEO_DECODE_ERROR = pollMetrics(dependencyMap[41]).AVError.VIDEO_ENCODE_ERROR;
        tmp2 = dependencyMap;
        tmp3 = pollMetrics;
      } else {
        tmp2 = dependencyMap;
        VIDEO_DECODE_ERROR = pollMetrics(dependencyMap[41]).AVError.VIDEO_DECODE_ERROR;
        tmp3 = pollMetrics;
      }
      obj = { videoCodec: mode.codecStandard, errorMessage: mode.message };
      const reportAVError = tmp3(tmp2[41]).reportAVError;
      tmp3(tmp2[41]);
      if (VIDEO_DECODE_ERROR === tmp3(tmp2[41]).AVError.VIDEO_ENCODE_ERROR) {
        obj2 = { type: VIDEO_DECODE_ERROR, videoEncoder: mode.implName };
        const merged = Object.assign(obj);
        obj3 = obj2;
      } else {
        obj3 = { type: VIDEO_DECODE_ERROR, videoDecoder: mode.implName };
        const merged1 = Object.assign(obj);
      }
      reportAVError(obj3);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.ConnectionStats, (arr) => {
      obj = obj(dependencyMap[43]);
      obj2 = {
        type: "MEDIA_ENGINE_CONNECTION_STATS",
        connectionStats: arr.map((connection) => {
          connection = connection.connection;
          obj = { stats: connection.stats, mediaEngineConnectionId: connection.mediaEngineConnectionId, version: +closure_67, context: connection.context };
          closure_67 = tmp + 1;
          return obj;
        })
      };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.VoiceProcessingError, handleVoiceProcessingError);
    closure_72.on(pollMetrics(4945).MediaEngineEvent.VideoFilterError, handleVideoFilterError);
    closure_72.on(pollMetrics(4945).MediaEngineEvent.SpatialAudioStatus, handleSpatialAudioStatus);
    closure_72.on(pollMetrics(4945).MediaEngineEvent.VoiceQueueMetrics, (taskMetrics) => {
      const tmp = processQueueMetricsForAnalytics(taskMetrics);
      if (null !== tmp) {
        obj = obj(dependencyMap[42]);
        obj.track(constants.VOICE_QUEUE_METRICS, tmp);
      }
    });
    result = closure_72.setOnVideoContainerResized((streamId, width, height) => {
      obj = width(status[43]);
      obj.wait(() => {
        obj = obj(dependencyMap[43]);
        obj2 = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size };
        size = { width, height };
        return obj.dispatch(obj2);
      });
    });
    setGamescopeVaapiEnabled();
    navigation.reset();
    let promise = getSystemAnalyticsInfo();
    promise.then((result) => {
      let closure_1_131;
      let closure_1_132;
      let closure_1_133;
      let gpus;
      if (null != result) {
        ({ gpu_brand: closure_1_131, has_intel_hybrid_igpu: closure_1_132, gpu_count: closure_1_133, gpus } = result);
        if (gpus == null) {
          gpus = [];
        }
        gpus.length > 0 && gpus.every((vendor_id) => "10de" === vendor_id.vendor_id);
      }
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.DeviceHardwareMutedChange, (deviceGuid, hardwareMuted) => {
      obj = obj(dependencyMap[43]);
      obj2 = { type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid, hardwareMuted };
      obj.dispatch(obj2);
    });
    closure_72.on(pollMetrics(4945).MediaEngineEvent.SystemMicrophoneModeChange, (arg0) => {
      let closure_1_129 = arg0;
      closure_1_72.eachConnection(updateConnectionVoiceProcessing);
      mediaEngineStore.emitChange();
    });
    let Storage = pollMetrics(510).Storage;
    const value = Storage.get("audio");
    if (null != value) {
      const Storage2 = tmp8(510).Storage;
      obj2 = {};
      obj2[MediaEngineContextTypes.DEFAULT] = value;
      let result1 = Storage2.set(MediaEngineStore_str, obj2);
      const Storage3 = tmp8(510).Storage;
      Storage3.remove("audio");
    }
    const Storage4 = tmp8(510).Storage;
    let value2 = Storage4.get(MediaEngineStore_str);
    if (value2 == null) {
      value2 = {};
    }
    let obj4 = obj(12);
    obj4.each(value2, (modeOptions) => {
      const tmp2 = obj(dependencyMap[33]);
      obj = { mode: constants2.VOICE_ACTIVITY, modeOptions: { threshold: -60, autoThreshold: pollMetrics(dependencyMap[24]).isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" }, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj2, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: videoDeviceId, outputDeviceId: videoDeviceId, videoDeviceId, qos: false, qosMigrated: false, videoHook: closure_1_72.supports(constants3.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      const defaultsDeep = tmp2.defaultsDeep;
      obj2 = {};
      pollMetrics(dependencyMap[24]).isPlatformEmbedded || false;
      const merged = Object.assign(closure_1_34);
      defaultsDeep(modeOptions, obj);
      const tmp9 = null != modeOptions.modeOptions && typeof modeOptions.modeOptions.shortcut === "string";
      if (tmp9) {
        modeOptions = modeOptions.modeOptions;
        const tmp3Result = pollMetrics(dependencyMap[60]);
        modeOptions.shortcut = tmp3Result.toCombo(modeOptions.modeOptions.shortcut);
      }
      const tmp10 = null != modeOptions.modeOptions && 4 !== modeOptions.vadUseKrispSettingVersion;
      if (tmp10) {
        modeOptions.vadUseKrispSettingVersion = 4;
        modeOptions.modeOptions.vadUseKrisp = true;
      }
      if (!modeOptions.qosMigrated) {
        modeOptions.qosMigrated = true;
        modeOptions.qos = false;
      }
      if (!modeOptions.vadThrehsoldMigrated) {
        modeOptions.vadThrehsoldMigrated = true;
        const modeOptions2 = modeOptions.modeOptions;
        let threshold;
        if (modeOptions2 != null) {
          threshold = modeOptions2.threshold;
        }
        if (-40 === threshold) {
          modeOptions.modeOptions.threshold = -60;
        }
      }
      const supportsResult = closure_1_72.supports(constants3.SIDECHAIN_COMPRESSION) && modeOptions.sidechainCompressionSettingVersion < 1;
      if (supportsResult) {
        modeOptions.sidechainCompressionSettingVersion = 1;
        modeOptions.sidechainCompression = true;
      }
      if (modeOptions.audioMixerSettingsVersion < 3) {
        modeOptions.audioMixerSettingsVersion = 3;
        const obj4 = {};
        const merged1 = Object.assign(closure_1_34);
        modeOptions.audioMixerSettings = obj4;
      }
      const tmp3Result2 = pollMetrics(dependencyMap[24]);
      if (tmp3Result2.isWeb()) {
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
    const tmp8Result = pollMetrics(1369);
    let isWindowsResult = tmp8Result.isWindows();
    if (!isWindowsResult) {
      const tmp8Result8 = pollMetrics(1369);
      isWindowsResult = tmp8Result8.isLinux();
    }
    if (!isWindowsResult) {
      const tmp8Result9 = pollMetrics(1369);
      isWindowsResult = tmp8Result9.isMac();
    }
    if (isWindowsResult) {
      const tmp50 = c108;
      if (!tmp50) {
        const tmp51 = c109;
        if (!tmp51) {
          c108 = true;
          setupKrispNativeModule();
        }
        const tmp8Result10 = pollMetrics(1369);
        if (tmp8Result10.isLinux()) {
          downloadOpenH264();
        }
        resetProbingState();
        const tmp8Result11 = pollMetrics(1369);
        if (tmp8Result11.isDesktop()) {
          if (pollMetrics(1369).isPlatformEmbedded) {
            const tmp73 = c139;
            if (!tmp73) {
              pollMetrics = function pollMetrics() {
                return obj(...arguments);
              };
              obj = function _pollMetrics() {
                obj = _asyncToGenerator(async function() {
                  let closure_1;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    try {
                      let closure_0;
                      let tmp3;
                      c3 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          obj3 = { value, done: true };
                          return obj3;
                        } else {
                          let c0 = 0;
                          closure_0 = undefined;
                          tmp3 = undefined;
                          const self = this;
                          const self2 = this;
                          const promise = new Promise((arg0) => {
                            let closure_0 = arg0;
                            obj = closure_1_1(closure_1_3[62]);
                            obj.pollQueueMetrics((arg0) => {
                              closure_0(arg0);
                            });
                          });
                          c2 = 1;
                          c3 = 1;
                          const obj4 = { value: promise, done: false };
                          return obj4;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj5 = { value, done: true };
                        return obj5;
                      } else {
                        closure_0 = value;
                        closure_0.periodMs = periodMs;
                        tmp3 = closure_1_169(closure_0);
                        if (null !== tmp3) {
                          obj = tmp3(c3[42]);
                          obj.track(constants.VOICE_QUEUE_METRICS, tmp3);
                        }
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(closure_129_0, periodMs);
                        c3 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp19) {
                      c3 = 3;
                      throw tmp19;
                    }
                  }
                });
                return obj(...arguments);
              };
              c139 = true;
              let _setTimeout = setTimeout;
              let timerId = setTimeout(pollMetrics, closure_53);
            }
          }
        }
        const tmp8Result12 = pollMetrics(1369);
        const tmp77 = tmp8Result12.isWindows() && pollMetrics(1369).isPlatformEmbedded;
        if (tmp77) {
          if (null === c85) {
            const codecSurvey = obj.getCodecSurvey();
            const nextPromise1 = codecSurvey.then(function(result) {
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
                const self = this;
                const self2 = this;
                const error = new Error("decoder survey is not available");
                throw error;
              } catch (tmp9) {
                logger.error("Failed to parse codec survey", tmp9);
                c85 = false;
              }
            });
            const catchPromise = nextPromise1.catch((error) => {
              logger.error("Failed to get codec survey", error);
              c85 = false;
            });
            catchPromise.finally(() => {
              obj = obj(dependencyMap[43]);
              obj.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
          }
        }
        let obj3 = {};
        obj3[Features.VIDEO] = obj.supports(Features.VIDEO);
        obj3[Features.DESKTOP_CAPTURE] = obj.supports(Features.DESKTOP_CAPTURE);
        obj3[Features.HYBRID_VIDEO] = obj.supports(Features.HYBRID_VIDEO);
        self.waitFor(AuthenticationStore, BitRateStore, CertifiedDeviceStore, ChannelStore, ClipsStore, ExperimentStore, RTCConnectionStore, RunningGameStore, UserSettingsProtoStore, UserStore, VideoQualityModeStore);
      }
    }
    const tmp8Result13 = pollMetrics(1369);
    if (tmp8Result13.isWeb()) {
      if (obj.supports(Features.NOISE_CANCELLATION)) {
        c109 = true;
        const emitChangeResult = mediaEngineStore.emitChange();
      }
    }
    const tmp8Result14 = pollMetrics(1369);
    if (tmp8Result14.isWeb()) {
      let DEFAULT = MediaEngineContextTypes.DEFAULT;
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp55 = value2[DEFAULT];
      if (null == tmp55) {
        let obj5 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj6, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj7, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: obj.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj6 = { threshold: -60, autoThreshold: pollMetrics(1369).isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
        obj7 = {};
        const tmp56 = pollMetrics(1369).isPlatformEmbedded || false;
        let merged = Object.assign(closure_34);
        value2[DEFAULT] = obj5;
        tmp55 = obj5;
      }
      let _Object = Object;
      let merged1 = Object.assign(tmp55, { noiseCancellation: false });
      const Storage5 = tmp8(510).Storage;
      let result2 = Storage5.set(MediaEngineStore_str, value2);
    }
  }
  supports(arg0) {
    let tmp = arg0 === Features.VIDEO;
    if (tmp) {
      const VideoGuardExperiment = VideoGuardExperiment2.VideoGuardExperiment;
      tmp = !VideoGuardExperiment.getConfig({ location: "MediaEngineStore.supports" }).videoEnabled;
    }
    const supportsResult = !tmp && result.supports(arg0);
    return supportsResult;
  }
  supportsInApp(arg0) {
    let tmp = arg0 === Features.VIDEO;
    if (tmp) {
      const VideoGuardExperiment = VideoGuardExperiment2.VideoGuardExperiment;
      tmp = !VideoGuardExperiment.getConfig({ location: "MediaEngineStore.supportsInApp" }).videoEnabled;
    }
    let tmp4 = !tmp;
    if (tmp4) {
      tmp4 = appSupported[arg0] || result.supports(arg0);
      const supportsResult = appSupported[arg0] || result.supports(arg0);
    }
    return tmp4;
  }
  isSupported() {
    return result.supported();
  }
  isNoiseSuppressionSupported() {
    return result.supports(Features.NOISE_SUPPRESSION);
  }
  isNoiseCancellationSupported() {
    return !c110;
  }
  isNoiseCancellationError() {
    return c117;
  }
  isAutomaticGainControlSupported() {
    return result.supports(Features.AUTOMATIC_GAIN_CONTROL);
  }
  shouldOfferManualSubsystemSelection() {
    let tmp3 = !result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
    result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
    if (tmp3) {
      tmp3 = result.supports(Features.LEGACY_AUDIO_SUBSYSTEM) || result.supports(Features.EXPERIMENTAL_AUDIO_SUBSYSTEM);
      result.supports(Features.LEGACY_AUDIO_SUBSYSTEM) || result.supports(Features.EXPERIMENTAL_AUDIO_SUBSYSTEM);
    }
    return tmp3;
  }
  showBypassSystemInputProcessing() {
    const supportsResult = result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === result.getAudioSubsystem();
    return supportsResult;
  }
  isAdvancedVoiceActivitySupported() {
    return !c110;
  }
  isAecDumpSupported() {
    return result.supports(Features.AEC_DUMP);
  }
  isSimulcastSupported() {
    const tmp2 = result.supports(Features.VIDEO) && result.supports(Features.SIMULCAST);
    return tmp2;
  }
  getAecDump() {
    return getSettings().aecDumpEnabled;
  }
  getMediaEngine() {
    return result;
  }
  getVideoComponent() {
    return result.Video;
  }
  getCameraComponent() {
    return result.Camera;
  }
  getKrispSuppressionLevel() {
    let num = level;
    if (level == null) {
      num = 100;
    }
    return num;
  }
  getKrispEnableStats() {
    return enabled;
  }
  isEnabled() {
    return c79;
  }
  isMute() {
    const tmp = this.isSelfMute() || c90;
    return tmp;
  }
  isDeaf() {
    const tmp = this.isSelfDeaf() || c93;
    return tmp;
  }
  isServerMute() {
    return c90;
  }
  isServerDeaf() {
    return c93;
  }
  getAudioMixerSettings() {
    return getSettings().audioMixerSettings;
  }
  isSpatialAudioEnabled() {
    return true === this.getAudioMixerSettings().enabled;
  }
  isSpatialAudioRequested() {
    return c120;
  }
  getSpatialAudioStatus() {
    return UNKNOWN;
  }
  hasContext(arg0) {
    return null != settingsByContext[arg0];
  }
  isSelfMutedTemporarily() {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    return DEFAULT === MediaEngineContextTypes.DEFAULT && mute;
  }
  isSelfMute() {
    let DEFAULT;
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
      obj = NativePermissionUtils;
      mute = !obj.didHavePermission(NativePermissionTypes.AUDIO);
    }
    if (!mute) {
      mute = self.isSelfDeaf(DEFAULT);
    }
    if (!mute) {
      mute = DEFAULT === MediaEngineContextTypes.DEFAULT && closure_92;
    }
    return mute;
  }
  shouldSkipMuteUnmuteSound() {
    return c97;
  }
  notifyMuteUnmuteSoundWasSkipped() {
    c97 = false;
  }
  isHardwareMute() {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    const self = this;
    const isMuteResult = this.isMute();
    const isHardwareMuteResult = !isMuteResult && !self.isSelfMutedTemporarily(DEFAULT) && CertifiedDeviceStore.isHardwareMute(self.getInputDeviceId());
    return isHardwareMuteResult;
  }
  isHardwareMuteNoticeEnabled() {
    return enabled;
  }
  isSelfDeaf() {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    const isSupportedResult = this.isSupported();
    let deaf = !isSupportedResult;
    if (isSupportedResult) {
      deaf = getSettings(DEFAULT).deaf;
    }
    return deaf;
  }
  isVideoEnabled() {
    return closure_94 && c101;
  }
  isVideoAvailable() {
    const values = Object.values(closure_88);
    return values.some((disabled) => !disabled.disabled);
  }
  hasVideoDevice() {
    return c101;
  }
  isScreenSharing() {
    STREAM = arg0;
    if (arg0 === undefined) {
      STREAM = MediaEngineContextTypes.STREAM;
    }
    return STREAM === STREAM && null != goLiveSource;
  }
  isSoundSharing() {
    STREAM = arg0;
    if (arg0 === undefined) {
      STREAM = MediaEngineContextTypes.STREAM;
    }
    let tmp2 = STREAM === STREAM && null != goLiveSource;
    if (tmp2) {
      const desktopSource = goLiveSource.desktopSource;
      let soundshareId;
      if (desktopSource != null) {
        soundshareId = desktopSource.soundshareId;
      }
      tmp2 = null != soundshareId;
    }
    return tmp2;
  }
  isLocalMute(id) {
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp2 = id !== AuthenticationStore.getId();
    if (tmp2) {
      tmp2 = getSettings(DEFAULT).localMutes[id] || false;
      getSettings(DEFAULT).localMutes[id] || false;
    }
    return tmp2;
  }
  supportsDisableLocalVideo() {
    return result.supports(Features.DISABLE_VIDEO);
  }
  isLocalVideoDisabled(id) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let flag = getSettings(DEFAULT).disabledLocalVideos[id];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getVideoToggleState(arg0) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let NONE = getSettings(DEFAULT).videoToggleStateMap[arg0];
    if (NONE == null) {
      NONE = constants5.NONE;
    }
    return NONE;
  }
  isLocalVideoAutoDisabled(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    const hasItem = DEFAULT === MediaEngineContextTypes.DEFAULT && set1.has(id);
    return hasItem;
  }
  isAnyLocalVideoAutoDisabled() {
    let DEFAULT = arg0;
    if (arg0 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    return DEFAULT === MediaEngineContextTypes.DEFAULT && set1.size > 0;
  }
  isMediaFilterSettingLoading() {
    return c118;
  }
  isNativeAudioPermissionReady() {
    return c125;
  }
  getGoLiveSource() {
    return goLiveSource;
  }
  getGoLiveContext() {
    return STREAM;
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return closure_84;
  }
  isH264MfDecodeAvailable() {
    return c85;
  }
  getLocalPan(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp2 = getSettings(DEFAULT).localPans[id];
    if (null == tmp2) {
      tmp2 = closure_60;
    }
    return tmp2;
  }
  getLocalVolume(arg0) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp2 = DEFAULT === MediaEngineContextTypes.STREAM ? set2 : BottomSheet;
    const tmp3 = getSettings(DEFAULT).localVolumes[arg0];
    if (null != tmp3) {
      tmp2 = tmp3;
    }
    return tmp2;
  }
  getInputVolume() {
    return getSettings().inputVolume;
  }
  getOutputVolume() {
    let outputVolume;
    obj = MobileAudioOutputExperimentDefault;
    if (obj.getConfig({ location: "MediaEngineStore.getOutputVolume" }).audioOutputPresent) {
      outputVolume = getSettings().outputVolume;
    } else {
      outputVolume = BottomSheet;
    }
    return outputVolume;
  }
  getMode() {
    let DEFAULT = arg0;
    if (arg0 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    return getSettings(DEFAULT).mode;
  }
  getModeOptions() {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    return getSettings(DEFAULT).modeOptions;
  }
  getShortcuts() {
    obj = {};
    obj2 = _modDef12;
    obj2.each(closure_77, (mode, arg1) => {
      let hasItem = mode.mode === InputModes.PUSH_TO_TALK;
      const shortcut = mode.modeOptions.shortcut;
      if (hasItem) {
        hasItem = set.has(arg1);
      }
      if (hasItem) {
        obj[arg1] = shortcut;
      }
    });
    return obj;
  }
  getInputDeviceId() {
    let id = getSettings().inputDeviceId;
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
    return id;
  }
  getOutputDeviceId() {
    let id = getSettings().outputDeviceId;
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
    return id;
  }
  getVideoDeviceId() {
    let id = getSettings().videoDeviceId;
    let firstResult = closure_88[id];
    if (firstResult == null) {
      firstResult = closure_88[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = _modDef12(closure_88);
      const values = obj.values();
      firstResult = values.first();
    }
    if (null != firstResult) {
      id = firstResult.id;
    }
    return id;
  }
  getInputDevices() {
    return inputDevices;
  }
  getOutputDevices() {
    return outputDevices;
  }
  getVideoDevices() {
    return closure_88;
  }
  getEchoCancellation() {
    const tmp = getSettings();
    const tmp2 = CertifiedDeviceStore.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
    return tmp2;
  }
  getSidechainCompression() {
    const sidechainCompression = result.supports(Features.SIDECHAIN_COMPRESSION) && getSettings().sidechainCompression;
    return sidechainCompression;
  }
  getSidechainCompressionStrength() {
    return getSettings().sidechainCompressionStrength;
  }
  getH265Enabled() {
    return getSettings().h265Enabled;
  }
  hasH265HardwareDecode() {
    return null !== c123 && c123;
  }
  getOpenH264Enabled() {
    obj = PlatformUtils;
    const openH264Enabled = obj.isLinux() && getSettings().openH264Enabled;
    return openH264Enabled;
  }
  getLoopback() {
    return set2.size > 0;
  }
  getLoopbackReasons() {
    return set2;
  }
  getNoiseSuppression() {
    const tmp = getSettings();
    const tmp2 = CertifiedDeviceStore.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
    return tmp2;
  }
  getAutomaticGainControl() {
    const tmp = getSettings();
    const tmp2 = CertifiedDeviceStore.hasAutomaticGainControl(tmp.inputDeviceId) || tmp.automaticGainControl;
    return tmp2;
  }
  getBypassSystemInputProcessing() {
    return getSettings().bypassSystemInputProcessing;
  }
  getNoiseCancellation() {
    return getSettings().noiseCancellation;
  }
  getHardwareEncoding() {
    return true;
  }
  getEnableSilenceWarning() {
    return getSettings().silenceWarning;
  }
  getDebugLogging() {
    return result.getDebugLogging();
  }
  getQoS() {
    return getSettings().qos;
  }
  getAttenuation() {
    return getSettings().attenuation;
  }
  getAttenuateWhileSpeakingSelf() {
    return getSettings().attenuateWhileSpeakingSelf;
  }
  getAttenuateWhileSpeakingOthers() {
    return getSettings().attenuateWhileSpeakingOthers;
  }
  getAudioSubsystem() {
    obj = PlatformUtils;
    const isWindowsResult = obj.isWindows() && result.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM) && result.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
    if (isWindowsResult) {
      let AUTOMATIC;
      if (getSettings().automaticAudioSubsystem) {
        AUTOMATIC = constants8.AUTOMATIC;
      }
      return AUTOMATIC;
    }
    AUTOMATIC = result.getAudioSubsystem();
  }
  getMLSSigningKey(arg0, arg1) {
    return result.getMLSSigningKey(arg0, arg1);
  }
  getActiveInputProfile() {
    return getSettings().activeInputProfile;
  }
  isInputProfileCustom() {
    const activeInputProfile = this.getActiveInputProfile();
    return null == activeInputProfile || activeInputProfile === InputProfile.CUSTOM;
  }
  getSettings() {
    let DEFAULT = arg0;
    if (arg0 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    return getSettings(DEFAULT);
  }
  getState() {
    return { settingsByContext, inputDevices, outputDevices, appSupported, krispModuleLoaded, krispFatalError, krispVersion, krispSuppressionLevel: level, goLiveSource, goLiveContext: STREAM };
  }
  getInputDetectedThisConnection() {
    return c102;
  }
  getInputDetected() {
    return navigation.inputDetected;
  }
  getLastInputDetectedUpdateTime() {
    return navigation.lastUpdateTime;
  }
  getNoInputDetectedNotice() {
    return closure_103;
  }
  getInputDeviceOSMuted() {
    return c104;
  }
  getInputDeviceHardwareMuted() {
    return hardwareMuted;
  }
  getInputDeviceOSVolume() {
    return c105;
  }
  getPacketDelay() {
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
  }
  setCanHavePriority(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    result.eachConnection((setCanHavePriority) => setCanHavePriority.setCanHavePriority(closure_0, closure_1));
  }
  isInteractionRequired() {
    return required;
  }
  getVideoHook() {
    return getSettings().videoHook;
  }
  supportsVideoHook() {
    return result.supports(Features.VIDEO_HOOK);
  }
  getExperimentalSoundshare() {
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
  }
  supportsExperimentalSoundshare() {
    let supportsResult = result.supports(Features.EXPERIMENTAL_SOUNDSHARE);
    if (supportsResult) {
      const satisfies = _modDef13829.satisfies;
      _modDef13829;
      const tmp5 = DiscordNativeDefault;
      let release;
      if (tmp5 != null) {
        release = tmp5.os.release;
      }
      supportsResult = satisfies(release, closure_31);
    }
    return supportsResult;
  }
  supportsHookSoundshare() {
    obj = PlatformUtils;
    let isWindowsResult = obj.isWindows() && result.supports(Features.SOUNDSHARE);
    if (isWindowsResult) {
      const satisfies = _modDef13829.satisfies;
      _modDef13829;
      const tmp7 = DiscordNativeDefault;
      let release;
      if (tmp7 != null) {
        release = tmp7.os.release;
      }
      isWindowsResult = satisfies(release, __initData);
    }
    return isWindowsResult;
  }
  getUseSystemScreensharePicker() {
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
  }
  supportsSystemScreensharePicker() {
    return result.supports(Features.NATIVE_SCREENSHARE_PICKER);
  }
  getUseVaapiEncoder() {
    return c138;
  }
  getVideoEncoderExperiments(STREAM, streamer) {
    const arr = new Array("unk");
    arr.push("nvNewPresets");
    if (STREAM === MediaEngineContextTypes.STREAM) {
      arr.push("nvRelaxRc=250");
    } else {
      arr.push("nvRelaxRc=75");
    }
    if (this.getUseVaapiEncoder()) {
      arr.push("vaapi");
    }
    obj = NvencReconstructedFrameExperiment;
    if (obj.getNvencReconstructedFrameExperimentConfig({ location: "getVideoEncoderExperiments" }).enabled) {
      arr.push("nvReconFrames");
    }
    let isWindowsResult = STREAM === MediaEngineContextTypes.STREAM && "streamer" === streamer;
    if (isWindowsResult) {
      const tmp6Result = PlatformUtils;
      isWindowsResult = tmp6Result.isWindows();
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
  }
  getUseGamescopeCapture() {
    return c137;
  }
  getSpeakingWhileMuted() {
    return c98;
  }
  getKrispModelOverride() {
    return model;
  }
  getKrispModels() {
    return closure_114;
  }
  getKrispVadActivationThreshold() {
    let num = getSettings().modeOptions.vadKrispActivationThreshold;
    if (num == null) {
      num = 0.5;
    }
    return num;
  }
  hasActiveCallKitCall() {
    return c136;
  }
  setHasActiveCallKitCall(arg0) {
    c136 = arg0;
  }
  supportsScreenSoundshare() {
    let supportsResult2;
    obj = PlatformUtils;
    if (obj.isMac()) {
      let supportsResult = result.supports(Features.SOUNDSHARE);
      if (supportsResult) {
        const satisfies = _modDef13829.satisfies;
        _modDef13829;
        const tmp13 = DiscordNativeDefault;
        let release;
        if (tmp13 != null) {
          release = tmp13.os.release;
        }
        supportsResult = satisfies(release, closure_25);
      }
      if (supportsResult) {
        const tmpResult = PlatformUtils;
        let satisfies2Result = tmpResult.isMac() && result.supports(Features.SCREEN_CAPTURE_KIT);
        if (satisfies2Result) {
          const satisfies2 = _modDef13829.satisfies;
          _modDef13829;
          const tmp20 = DiscordNativeDefault;
          let release1;
          if (tmp20 != null) {
            release1 = tmp20.os.release;
          }
          satisfies2Result = satisfies2(release1, closure_24);
        }
        supportsResult = satisfies2Result;
      }
      supportsResult2 = supportsResult;
    } else {
      const tmpResult3 = PlatformUtils;
      if (tmpResult3.isWindows()) {
        let supportsResult1 = result.supports(Features.SCREEN_SOUNDSHARE);
        if (supportsResult1) {
          const self = this;
          supportsResult1 = this.getExperimentalSoundshare();
        }
        supportsResult2 = supportsResult1;
      } else {
        const tmpResult4 = PlatformUtils;
        supportsResult2 = tmpResult4.isLinux() && result.supports(Features.SCREEN_SOUNDSHARE);
      }
    }
    return supportsResult2;
  }
  getSystemMicrophoneMode() {
    obj = PlatformUtils;
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
      const tmpResult = PlatformUtils;
      if (!tmpResult.isMac()) {
        PlatformUtils;
      }
      return c129;
    }
  }
  getVideoStreamParameters() {
    let items1;
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    const self = this;
    if (this.supports(Features.VIDEO)) {
      let SCREEN;
      if (DEFAULT === MediaEngineContextTypes.DEFAULT) {
        SCREEN = constants11.VIDEO;
      } else {
        SCREEN = constants11.SCREEN;
      }
      const items = [{ rid: "100", type: SCREEN, quality }];
      items1 = items;
      obj = { rid: "100", type: SCREEN, quality };
    } else {
      items1 = [];
    }
    let enableSimulcast = self.isSimulcastSupported() && DEFAULT === MediaEngineContextTypes.DEFAULT;
    if (enableSimulcast) {
      const DisableCameraSimulcastExperiment = DisableCameraSimulcastExperiment2.DisableCameraSimulcastExperiment;
      enableSimulcast = DisableCameraSimulcastExperiment.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast;
    }
    if (enableSimulcast) {
      obj2 = { rid: "50", type: constants11.VIDEO, quality: quality2 };
      items1.push(obj2);
    }
    return items1;
  }
  fetchAsyncResources() {
    obj = { fetchDave: obj2.isWeb() };
    obj2 = PlatformUtils;
    return result.fetchAsyncResources(obj);
  }
  startDavePreload() {
    let logger;
    const tmp = c119;
    if (!tmp) {
      c119 = true;
      obj = PlatformUtils;
      if (obj.isWeb()) {
        const asyncResources = result.fetchAsyncResources({ fetchDave: true });
        asyncResources.catch((error) => {
          logger.warn("DAVE preload failed:", error);
          obj = SentryUtilsDefault;
          obj.captureException(error);
        });
      }
    }
  }
  getSupportedSecureFramesProtocolVersion() {
    return result.getSupportedSecureFramesProtocolVersion();
  }
  hasClipsSource() {
    return null != c75;
  }
  isClipsRecordingReady() {
    return c83;
  }
  isClipsRecordingReadySignalSupported() {
    return result.supports(Features.CLIPS_RECORDING_READY_EVENTS);
  }
  getGpuBrand() {
    return c131;
  }
  getHasNvidiaGpu() {
    let tmp = c134;
    if (!tmp) {
      const _window = window;
      let LIBVA_DRIVER_NAME;
      if (DiscordNative != null) {
        const _process = DiscordNative.process;
        if (_process != null) {
          const env = _process.env;
          if (env != null) {
            LIBVA_DRIVER_NAME = env.LIBVA_DRIVER_NAME;
          }
        }
      }
      tmp = "nvidia" === LIBVA_DRIVER_NAME;
    }
    return tmp;
  }
}
const prototype = MediaEngineStore.prototype;
MediaEngineStore.displayName = "MediaEngineStore";
let obj7 = {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    let channelId;
    let guildId;
    let obj3;
    ({ channelId, guildId } = currentVoiceChannelId);
    if (currentVoiceChannelId.currentVoiceChannelId !== channelId) {
      updateVideo(tmp, null);
    }
    if (null == channelId) {
      UNKNOWN = SpatialAudioStatus.UNKNOWN;
    }
    if (null == guildId) {
      if (null != channelId) {
        const tmp6 = c107;
        if (!tmp6) {
          c107 = true;
          const tmp8 = getSettings();
          const tmp9 = tmp8.mute || tmp8.deaf;
          if (tmp9) {
            let DEFAULT = MediaEngineContextTypes.DEFAULT;
            if (DEFAULT === undefined) {
              DEFAULT = MediaEngineContextTypes.DEFAULT;
            }
            let tmp11 = settingsByContext[DEFAULT];
            if (null == tmp11) {
              obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
              obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
              obj3 = {};
              PlatformUtils.isPlatformEmbedded || false;
              const merged = Object.assign(closure_34);
              settingsByContext[DEFAULT] = obj2;
              tmp11 = obj2;
            }
            const _Object = Object;
            const merged1 = Object.assign(tmp11, { deaf: false, mute: false });
            const Storage = Storage6.Storage;
            result = Storage.set(MediaEngineStore_str, settingsByContext);
            result.eachConnection(updateConnectionMuteDeaf);
          }
        }
      }
    }
    c107 = false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let id;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, sessionId) => {
      if (closure_1_73 === sessionId.sessionId) {
        closure_90 = sessionId.mute || sessionId.suppress;
        deaf = sessionId.deaf;
        closure_1_72.eachConnection(updateConnectionMuteDeaf);
        const tmp13 = null != sessionId.guildId && null != sessionId.channelId && null != channelId && channelId !== sessionId.channelId;
        let tmp19 = !tmp13;
        const tmp17 = !closure_1_107 && null == sessionId.channelId;
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
        const tmp2 = sessionId.userId === id.getId() && null == channelId.getChannelId();
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
    obj = PlatformUtils;
    const isWindowsResult = obj.isWindows() && result.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM) && result.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
    if (isWindowsResult) {
      obj2 = result;
      if (result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)) {
        setAudioSubsystem(constants8.AUTOMATIC);
      } else if (tmp.automaticAudioSubsystem) {
        obj2.queueAudioSubsystem(constants8.EXPERIMENTAL);
      }
    }
    if (result.supports(Features.OFFLOAD_ADM_CONTROLS)) {
      result = obj3.setOffloadAdmControls(true);
    }
    const tmp2Result = PlatformUtils;
    enabled = tmp2Result.isIOS();
    if (enabled) {
      const tmp2Result3 = IOSAudioInterruptExperiment;
      enabled = tmp2Result3.getIOSAudioInterruptExperimentConfig("handleConnectionOpen").enabled;
    }
    if (enabled) {
      result.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled");
    }
    const tmp2Result4 = PlatformUtils;
    if (tmp2Result4.isIOS()) {
      const setNcModels = obj3.setNcModels;
      if (setNcModels != null) {
        setNcModels(KrispNCModels.KRISP_NC_MODELS);
      }
      mediaEngineStore.emitChange();
    }
    maybeProbeAudioEffects(tmp.inputDeviceId);
    applyRemoteSettings();
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c73 = null;
  },
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    obj = PlatformUtils;
    if (obj.isWeb()) {
      mediaEngineStore.startDavePreload();
    }
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(state) {
    let obj4;
    state = state.state;
    if (constants3.CONNECTING === state) {
      if (!c79) {
        const enableResult = closure_72.enable();
        enableResult.then(() => {
          obj = disabledLocalVideos(dependencyMap[43]);
          return obj.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: true, unmute: false });
        });
      }
    } else if (constants3.RTC_CONNECTING === state) {
      let c103 = false;
      c104 = undefined;
      c105 = undefined;
      let c106;
      c102 = false;
      navigation.reset();
    } else if (constants3.RTC_CONNECTED === state) {
      updateVideo();
    } else if (constants3.DISCONNECTED === state) {
      closure_140 = {};
      let DEFAULT2;
      let disabledLocalVideos;
      if (0 !== set1.size) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
        disabledLocalVideos = getSettings(DEFAULT2).disabledLocalVideos;
        const item = set1.forEach((item) => {
          let closure_0 = item;
          _modDef38(disabledLocalVideos[item], "If you are auto-disabled, then you are also disabled.");
          delete disabledLocalVideos[item];
          result.eachConnection((setLocalVideoDisabled) => setLocalVideoDisabled.setLocalVideoDisabled(closure_0, false), DEFAULT2);
        });
        set1.clear();
        let DEFAULT = DEFAULT2;
        obj2 = { disabledLocalVideos };
        if (DEFAULT2 === undefined) {
          DEFAULT = MediaEngineContextTypes.DEFAULT;
        }
        if (DEFAULT === undefined) {
          DEFAULT = MediaEngineContextTypes.DEFAULT;
        }
        let tmp3 = settingsByContext[DEFAULT];
        if (null == tmp3) {
          const obj3 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: closure_72.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
          obj = { threshold: -60, autoThreshold: DEFAULT2(1369).isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
          obj4 = {};
          DEFAULT2(1369).isPlatformEmbedded || false;
          const merged = Object.assign(closure_34);
          settingsByContext[DEFAULT] = obj3;
          tmp3 = obj3;
        }
        const _Object = Object;
        const merged1 = Object.assign(tmp3, obj2);
      }
      resetProbingState();
    }
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function handleSetTemporarySelfMute(mute) {
    mute = mute.mute;
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleToggleSelfMute(context) {
    let obj3;
    let obj4;
    context = context.context;
    const playSoundEffect = context.playSoundEffect;
    const tmp = getSettings(context);
    let flag = tmp.deaf;
    mute = tmp.mute;
    if (context === MediaEngineContextTypes.DEFAULT) {
      obj = NativePermissionUtils;
      const permission = obj.requestPermission(NativePermissionTypes.AUDIO);
      if (closure_92) {
        return false;
      }
    }
    if (!(!flag && !mute)) {
      flag = false;
    }
    if (!playSoundEffect) {
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
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp9 = obj2;
    }
    const merged1 = Object.assign(tmp9, { mute: tmp8, deaf: flag });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_SET_SELF_MUTE: function handleSetSelfMute(context) {
    let obj3;
    let obj4;
    let DEFAULT = context.context;
    const playSoundEffect = context.playSoundEffect;
    obj = { mute: context.mute };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp3 = obj2;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    if (!playSoundEffect) {
      c97 = true;
    }
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_DEAF: function handleToggleSelfDeafen(context) {
    let obj3;
    let obj4;
    context = context.context;
    let DEFAULT = context;
    obj = { deaf: !getSettings(context).deaf };
    if (context === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp3 = obj2;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function handleToggleLocalMute(arg0) {
    let context;
    let obj3;
    let obj4;
    let userId;
    ({ context, userId } = arg0);
    let localMutes;
    if (userId !== AuthenticationStore.getId()) {
      localMutes = getSettings(context).localMutes;
      if (localMutes[userId]) {
        delete localMutes[userId];
      } else {
        let flag = true;
        localMutes[userId] = true;
      }
      let DEFAULT = context;
      obj = { localMutes };
      if (context === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp4 = settingsByContext[DEFAULT];
      if (null == tmp4) {
        obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
        obj4 = {};
        PlatformUtils.isPlatformEmbedded || false;
        const merged = Object.assign(closure_34);
        settingsByContext[DEFAULT] = obj2;
        tmp4 = obj2;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp4, obj);
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore_str, settingsByContext);
      result.eachConnection((setLocalMute) => {
        let flag = localMutes[userId];
        setLocalMute = setLocalMute.setLocalMute;
        if (!flag) {
          flag = false;
        }
        return setLocalMute(userId, flag);
      }, context);
    }
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleSetLocalVideoDisabled(arg0) {
    let context;
    let isAutomatic;
    let obj4;
    let obj5;
    let obj6;
    let obj8;
    let obj9;
    let persist;
    let userId;
    let videoToggleState;
    ({ context, userId } = arg0);
    ({ videoToggleState, persist, isAutomatic } = arg0);
    let disabledLocalVideos;
    let tmp4 = persist;
    const tmp3 = _modDef38;
    if (persist) {
      tmp4 = isAutomatic;
    }
    tmp3(!tmp4, "These are not allowed to both be true.");
    const DISABLED = constants5.DISABLED;
    disabledLocalVideos = getSettings(context).disabledLocalVideos;
    let flag = disabledLocalVideos[userId];
    if (flag == null) {
      flag = false;
    }
    const hasItem = set1.has(userId);
    set1.info("disableVideo=" + videoToggleState === DISABLED + " currentlyDisabled=" + flag + " currentlyAutoDisabled=" + hasItem + ", isVideoShown=" + videoToggleState === constants5.AUTO_ENABLED || videoToggleState === constants5.MANUAL_ENABLED);
    let tmp13 = hasItem;
    const tmpResult = _modDef38;
    if (hasItem) {
      tmp13 = !flag;
    }
    tmpResult(!tmp13, "If you are auto-disabled, then you are also disabled.");
    const DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (isAutomatic) {
      isAutomatic = tmp15;
    }
    let tmp17 = context === DEFAULT;
    if (isAutomatic) {
      isAutomatic = tmp17;
    }
    set1.info("changed=" + videoToggleState === DISABLED !== flag + " isDefaultContext=" + tmp17 + " isUpdateCausedByVideoHealthManager=" + isAutomatic + " isManualToggleByUser=" + persist && videoToggleState === DISABLED !== flag && tmp17);
    const videoToggleStateMap = getSettings(context).videoToggleStateMap;
    const tmp20 = videoToggleStateMap[userId] === constants5.AUTO_PROBING && videoToggleState === constants5.AUTO_ENABLED;
    if (tmp20) {
      trackVideoToggleDefault(userId, videoToggleState === DISABLED ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, videoToggleState === constants5.AUTO_ENABLED || videoToggleState === constants5.MANUAL_ENABLED);
    }
    videoToggleStateMap[userId] = videoToggleState;
    let DEFAULT2 = context;
    if (context === undefined) {
      DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    }
    let flag2 = persist;
    if (persist === undefined) {
      flag2 = true;
    }
    if (DEFAULT2 === undefined) {
      DEFAULT2 = MediaEngineContextTypes.DEFAULT;
    }
    let tmp25 = settingsByContext[DEFAULT2];
    if (null == tmp25) {
      const obj3 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj4, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj5, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj4 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj5 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT2] = obj3;
      tmp25 = obj3;
    }
    const merged1 = Object.assign(tmp25, { videoToggleStateMap });
    if (flag2) {
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore_str, settingsByContext);
    }
    if (videoToggleState === constants5.AUTO_PROBING) {
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      obj6 = RTCConnectionStore;
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
    const tmp44 = c127;
    if (!tmp44) {
      const _HermesInternal = HermesInternal;
      set1.info("isAutoDisableAllowed=" + c127 + " - disabling VideoHealthManager");
      const rTCConnection2 = obj6.getRTCConnection();
      if (rTCConnection2 != null) {
        const videoHealthManager = rTCConnection2.getVideoHealthManager();
        if (videoHealthManager != null) {
          videoHealthManager.disable();
        }
      }
    }
    if (isAutomatic) {
      trackVideoToggleDefault(userId, videoToggleState === DISABLED ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, videoToggleState === constants5.AUTO_ENABLED || videoToggleState === constants5.MANUAL_ENABLED);
      if (videoToggleState === DISABLED) {
        set1.add(userId);
      } else {
        set1.delete(userId);
      }
    } else if (persist && videoToggleState === DISABLED !== flag && tmp17) {
      if (hasItem) {
        if (videoToggleState !== DISABLED) {
          set1.info("disallowing auto-disable for this session because of manual override by user");
          c127 = false;
          const rTCConnection3 = obj6.getRTCConnection();
          if (rTCConnection3 != null) {
            const videoHealthManager1 = rTCConnection3.getVideoHealthManager();
            if (videoHealthManager1 != null) {
              videoHealthManager1.disable();
            }
          }
          trackVideoToggleDefault(userId, constants12.MANUAL_REENABLE, videoToggleState === constants5.AUTO_ENABLED || videoToggleState === constants5.MANUAL_ENABLED);
        }
      }
      trackVideoToggleDefault(userId, videoToggleState === DISABLED ? constants12.MANUAL_DISABLE : constants12.MANUAL_ENABLE, videoToggleState === constants5.AUTO_ENABLED || videoToggleState === constants5.MANUAL_ENABLED);
    }
    if (tmp17) {
      tmp17 = !tmp10;
    }
    if (tmp17) {
      set1.delete(userId);
    }
    if (videoToggleState === DISABLED) {
      disabledLocalVideos[userId] = true;
    } else {
      delete disabledLocalVideos[userId];
    }
    let DEFAULT3 = context;
    if (context === undefined) {
      DEFAULT3 = MediaEngineContextTypes.DEFAULT;
    }
    if (persist === undefined) {
      persist = true;
    }
    if (DEFAULT3 === undefined) {
      DEFAULT3 = MediaEngineContextTypes.DEFAULT;
    }
    let tmp60 = settingsByContext[DEFAULT3];
    if (null == tmp60) {
      const obj7 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj8, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj9, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj8 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj9 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged2 = Object.assign(closure_34);
      settingsByContext[DEFAULT3] = obj7;
      tmp60 = obj7;
    }
    const merged3 = Object.assign(tmp60, { disabledLocalVideos });
    if (persist) {
      const Storage2 = Storage6.Storage;
      const result3 = Storage2.set(MediaEngineStore_str, settingsByContext);
    }
    result.eachConnection((setLocalVideoDisabled) => {
      let flag = disabledLocalVideos[userId];
      setLocalVideoDisabled = setLocalVideoDisabled.setLocalVideoDisabled;
      if (flag == null) {
        flag = false;
      }
      return setLocalVideoDisabled(userId, flag);
    }, context);
  },
  AUDIO_SET_LOCAL_VOLUME: function handleSetLocalVolume(volume) {
    let context;
    let obj3;
    let obj4;
    let userId;
    ({ context, userId } = volume);
    volume = volume.volume;
    if (userId !== AuthenticationStore.getId()) {
      const tmp = context === MediaEngineContextTypes.STREAM ? set2 : outputVolume;
      const localVolumes = getSettings(context).localVolumes;
      if (volume === tmp) {
        delete localVolumes[userId];
      } else {
        localVolumes[userId] = volume;
      }
      let DEFAULT = context;
      obj = { localVolumes };
      if (context === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp4 = settingsByContext[DEFAULT];
      if (null == tmp4) {
        obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
        obj4 = {};
        PlatformUtils.isPlatformEmbedded || false;
        const merged = Object.assign(closure_34);
        settingsByContext[DEFAULT] = obj2;
        tmp4 = obj2;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp4, obj);
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore_str, settingsByContext);
      result.eachConnection((setLocalVolume) => setLocalVolume.setLocalVolume(userId, volume), context);
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleSetAudioMixerSettings(arg0) {
    let context;
    let obj5;
    let settings;
    ({ context, settings } = arg0);
    if (context === undefined) {
      context = MediaEngineContextTypes.DEFAULT;
    }
    if (context === undefined) {
      context = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[context];
    if (null == tmp3) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj5, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj5 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[context] = obj2;
      tmp3 = obj2;
    }
    const merged1 = Object.assign(tmp3, { audioMixerSettings: settings });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    const obj3 = SpatialAudioForVoiceExperimentDefault;
    _false = true === settings.enabled && obj3.getConfig({ location: "MediaEngineStore" }).enabled && result.supports(Features.SPATIAL_AUDIO);
    const distanceAttenuationEnabled = settings.distanceAttenuationEnabled;
    const obj6 = { isSpatial: _false, enabled: _false, binaural: { spatialBlend: settings.spatialBlend }, distanceAttenuation: { enabled: distanceAttenuationEnabled }, airAbsorption: { enabled: distanceAttenuationEnabled }, reflections: { enabled: settings.reflectionsEnabled } };
    const supportsResult = true === settings.enabled && obj3.getConfig({ location: "MediaEngineStore" }).enabled && result.supports(Features.SPATIAL_AUDIO);
    result.setAudioMixerOptions(obj6);
    const obj4 = result;
    const tmp19 = _false;
    if (!tmp19) {
      UNKNOWN = SpatialAudioStatus.UNKNOWN;
    }
    obj4.eachConnection((setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(_false), MediaEngineContextTypes.DEFAULT);
  },
  AUDIO_SET_LOCAL_PAN: function handleSetLocalPan(left) {
    let context;
    let obj3;
    let userId;
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
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj3 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp3 = obj2;
    }
    const merged1 = Object.assign(tmp3, { localPans });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.eachConnection((setLocalPan) => setLocalPan.setLocalPan(userId, left, right), context);
  },
  AUDIO_SET_MODE: function handleAudioSetMode(context) {
    let obj4;
    let obj5;
    let DEFAULT = context.context;
    obj = { mode: context.mode, modeOptions: obj2 };
    obj2 = { updatedAt: Date.now() };
    const merged = Object.assign(context.options);
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp4 = settingsByContext[DEFAULT];
    if (null == tmp4) {
      const obj3 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj4, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj5, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj4 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj5 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged1 = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj3;
      tmp4 = obj3;
    }
    const merged2 = Object.assign(tmp4, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.eachConnection(setInputMode);
  },
  AUDIO_SET_INPUT_VOLUME: function handleAudioSetInputVolume(volume) {
    let obj4;
    let obj5;
    volume = volume.volume;
    obj = { inputVolume: obj2.clamp(volume, 0, BottomSheet) };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj2 = _modDef12;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      const obj3 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj4, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj5, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: BottomSheet, outputVolume: BottomSheet, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj4 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj5 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj3;
      tmp3 = obj3;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.setInputVolume(volume);
  },
  AUDIO_SET_OUTPUT_VOLUME: function handleAudioSetOutputVolume(volume) {
    let obj3;
    volume = volume.volume;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj3 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, { outputVolume: volume });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.setOutputVolume(volume);
  },
  AUDIO_SET_INPUT_DEVICE: function handleSetInputDevice(id) {
    let obj3;
    let obj4;
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
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp6 = obj2;
    }
    const merged1 = Object.assign(tmp6, { inputDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.setAudioInputDevice(id);
    maybeProbeAudioEffects(id);
    const obj6 = PlatformUtils;
    if (obj6.isMac()) {
      let guid;
      if (inputDevices[id] != null) {
        guid = tmp21.guid;
      }
      if (null != guid) {
        const watchDeviceHardwareMutedChange = obj5.watchDeviceHardwareMutedChange;
        if (watchDeviceHardwareMutedChange != null) {
          const result1 = watchDeviceHardwareMutedChange(tmp21.guid);
        }
      }
    }
    result.eachConnection(updateConnectionVoiceProcessing);
    c104 = undefined;
    c105 = undefined;
    hardwareMuted = undefined;
    c102 = false;
    navigation.reset();
  },
  AUDIO_SET_OUTPUT_DEVICE: function handleSetOutputDevice(id) {
    let obj3;
    let obj4;
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
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp6 = obj2;
    }
    const merged1 = Object.assign(tmp6, { outputDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.setAudioOutputDevice(id);
    result.eachConnection(updateConnectionVoiceProcessing);
  },
  AUDIO_SET_ACTIVE_INPUT_PROFILE: function handleSetActiveInputProfile(activeInputProfile) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { activeInputProfile: activeInputProfile.inputProfile };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    const tmp13 = getSettings();
    result.eachConnection((setEchoCancellation) => {
      setInputMode(setEchoCancellation);
      updateConnectionVoiceProcessing(setEchoCancellation);
    });
    const result1 = result.setAudioInputBypassSystemProcessing(tmp13.bypassSystemInputProcessing);
    setLoopback();
  },
  AUDIO_SET_ECHO_CANCELLATION: function handleSetEchoCancellation(echoCancellation) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { echoCancellation: echoCancellation.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    let closure_0 = CertifiedDeviceStore.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
    CertifiedDeviceStore.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
    result.eachConnection((setEchoCancellation) => setEchoCancellation.setEchoCancellation(closure_0));
    setLoopback();
    trackVoiceProcessing(echoCancellation.location);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION: function handleSetSidechainCompression(enabled) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { sidechainCompression: enabled.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    const result1 = result.setSidechainCompression(tmp.sidechainCompression);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function handleSetSidechainCompressionStrength(sidechainCompressionStrength) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { sidechainCompressionStrength: sidechainCompressionStrength.strength };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
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
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { noiseSuppression: enabled.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    let closure_0 = CertifiedDeviceStore.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
    CertifiedDeviceStore.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
    result.eachConnection((setNoiseSuppression) => setNoiseSuppression.setNoiseSuppression(closure_0));
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function handleSetAutomaticGainControl(automaticGainControl) {
    let obj3;
    let obj4;
    obj = { automaticGainControl: automaticGainControl.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: closure_72.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: obj2(1369).isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      obj2(1369).isPlatformEmbedded || false;
      let merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = obj2(510).Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    obj2 = tmp;
    closure_72.eachConnection((setAutomaticGainControl) => {
      let defaultConfig;
      const automaticGainControl = obj2.automaticGainControl;
      setAutomaticGainControl = setAutomaticGainControl.setAutomaticGainControl;
      obj = { enabled: automaticGainControl };
      obj2 = AGC2MobileExperimentDefault;
      if (automaticGainControl) {
        defaultConfig = obj2.getConfig({ location: "getAutomaticGainControlConfig" });
      } else {
        defaultConfig = obj2.definition.defaultConfig;
      }
      const tmp = defaultConfig.agc2Enabled ? closure_59 : { useAGC2: false };
      const merged = Object.assign(tmp);
      result = setAutomaticGainControl(obj);
    });
    setLoopback();
    trackVoiceProcessing(automaticGainControl.location);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleSetNoiseCancellation(enabled) {
    let obj3;
    let obj4;
    obj = { noiseCancellation: enabled.enabled };
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: closure_72.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: obj2(1369).isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      obj2(1369).isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = obj2(510).Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    obj2 = tmp;
    closure_72.eachConnection((setNoiseCancellation) => {
      let defaultConfig;
      const noiseCancellation = obj2.noiseCancellation;
      const tmp3 = getEffectiveNoiseCancellationDefault;
      const tmp3Result = tmp3(noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
      if (tmp3Result !== noiseCancellation) {
        obj.info("Falling back to system noise suppression.");
      }
      setNoiseCancellation.setNoiseCancellation(tmp3Result);
      const tmpResult = AGC2MobileExperimentDefault;
      if (tmp3Result) {
        defaultConfig = tmpResult.getConfig({ location: "setNoiseCancellation" });
      } else {
        defaultConfig = tmpResult.definition.defaultConfig;
      }
      result = setNoiseCancellation.setNoiseCancellationDuringProcessing(defaultConfig.noiseCancellationDuringProcessing);
    });
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_KRISP_MODEL_OVERRIDE: function handleSetKrispModelOverride(model) {
    obj = KrispUtilsDefault;
    result = obj.setKrispModelOverride(model.model);
    model = model.model;
    setLoopback();
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function handleSetSilenceWarning(enabled) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { silenceWarning: enabled.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
  },
  AUDIO_SET_DEBUG_LOGGING: function handleSetDebugLogging(enabled) {
    result.setDebugLogging(enabled.enabled);
  },
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function handleSetKrispSuppressionLevel(level) {
    level = level.level;
    obj = KrispUtilsDefault;
    result = obj.setKrispSuppressionLevel(level);
  },
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function handleSetNoiseCancellationEnableStats(enabled) {
    obj = PlatformUtils;
    if (!obj.isWeb()) {
      enabled = enabled.enabled;
      const setNoiseCancellationEnableStats = result.setNoiseCancellationEnableStats;
      if (setNoiseCancellationEnableStats != null) {
        result = setNoiseCancellationEnableStats(enabled.enabled);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function handleSetVideoHook(enabled) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { videoHook: enabled.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function handleSetExperimentalSoundshare(enabled) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { experimentalSoundshare2: enabled.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
  },
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function handleSetUseSystemScreensharePicker(enabled) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { useSystemScreensharePicker: enabled.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
  },
  AUDIO_SET_ATTENUATION: function handleSetAttenuation(attenuation) {
    let obj3;
    let obj4;
    obj2 = undefined;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { attenuation: attenuation.attenuation, attenuateWhileSpeakingSelf: attenuation.attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers: attenuation.attenuateWhileSpeakingOthers };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    obj2 = tmp;
    result.eachConnection((setAttenuation) => setAttenuation.setAttenuation(obj2.attenuation, obj2.attenuateWhileSpeakingSelf, obj2.attenuateWhileSpeakingOthers));
  },
  AUDIO_SET_QOS: function handleSetQoS(enabled) {
    let obj3;
    enabled = enabled.enabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj3 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, { qos: enabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.eachConnection((setQoS) => setQoS.setQoS(enabled));
  },
  MEDIA_ENGINE_DEVICES: function handleDevices(videoDevices) {
    let regex;
    let tmp5;
    let valueResult;
    let valueResult3;
    let valueResult4;
    const f85486 = (id) => {
      const f85485 = (containerId) => {
        let tmp = null != containerId.containerId && containerId.containerId === closure_0.containerId;
        if (!tmp) {
          tmp = null != containerId.hardwareId && containerId.hardwareId === closure_0.hardwareId;
          const tmp3 = null != containerId.hardwareId && containerId.hardwareId === closure_0.hardwareId;
        }
        if (!tmp) {
          tmp = null != containerId.originalId && containerId.originalId === closure_0.originalId;
          const tmp5 = null != containerId.originalId && containerId.originalId === closure_0.originalId;
        }
        return tmp;
      };
      obj = { id: id.id, deviceType: VIDEO_INPUT, index: id.index, name: id.name, disabled: false, facing: id.facing, guid: id.originalId, hardwareId: id.hardwareId, containerId: id.containerId, effects: id.effects, formFactor: null, windowsDeviceService: null, windowsDeviceDescription: null, windowsDeviceInterfaceFriendlyName: null };
      ({ inputDevices, outputDevices, videoDevices } = closure_0);
      if ("videoinput" === id.type !== true) {
        let WEBCAM;
        closure_0 = id;
        if (null != videoDevices.find(f85485) !== true) {
          const items = ["builtin", "displayport", "hdmi"];
          let str = id.macosTransportType;
          const includes = items.includes;
          if (str == null) {
            str = "";
          }
          if (includes(str) !== true) {
            const isMatch = null != id.hardwareId && regex.test(id.hardwareId);
            if (isMatch !== true) {
              obj2 = AUDIO_INPUT(dependencyMap[33])(id.hardwareId);
              if (obj2.startsWith("BTHENUM") !== true) {
                const items1 = ["bluetooth", "bluetoothle"];
                let str2 = id.macosTransportType;
                const includes2 = items1.includes;
                if (str2 == null) {
                  str2 = "";
                }
                if (includes2(str2) !== true) {
                  const items2 = ["airplay", "continuitycapturewireless"];
                  let str3 = id.macosTransportType;
                  const includes3 = items2.includes;
                  if (str3 == null) {
                    str3 = "";
                  }
                  if (includes3(str3) === true) {
                    WEBCAM = constants2.AIRPLAY;
                  } else {
                    let tmp3 = "audioinput" === id.type;
                    if (tmp3) {
                      closure_0 = id;
                      tmp3 = null != outputDevices.find(f85485);
                    }
                    if (tmp3 === true) {
                      WEBCAM = constants2.HEADSET;
                    } else {
                      let tmp4 = "audiooutput" === id.type;
                      if (tmp4) {
                        closure_0 = id;
                        tmp4 = null != inputDevices.find(f85485);
                      }
                    }
                  }
                }
              }
              WEBCAM = constants2.BLUETOOTH;
            }
          }
          WEBCAM = constants2.INTEGRATED;
        }
        obj.formFactor = WEBCAM;
        ({ windowsDeviceService: obj.windowsDeviceService, windowsDeviceDescription: obj.windowsDeviceDescription, windowsDeviceInterfaceFriendlyName: obj.windowsDeviceInterfaceFriendlyName } = id);
        return obj;
      }
      WEBCAM = constants2.WEBCAM;
    };
    const AUDIO_INPUT = DeviceTypes.AUDIO_INPUT;
    let tmp3 = _require;
    let tmp = valueResult;
    const intl = require("intl").intl;
    _require = videoDevices;
    const arr = videoDevices[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[AUDIO_INPUT]];
    if (0 === arr.length) {
      obj = { id: DEFAULT_DEVICE_ID, deviceType: AUDIO_INPUT, index: 0, name: tmp5, disabled: true, guid: "enabled", hardwareId: "toCharArray$esjava$1", containerId: "toCharArray$esjava$1" };
      obj2 = {};
      obj2[obj.id] = obj;
      valueResult = obj2;
    } else {
      const arr2 = AUDIO_INPUT(12)(arr);
      const mapped = arr2.map(f85486);
      let str = "id";
      const iter = mapped.keyBy("id");
      valueResult = iter.value();
    }
    const obj4 = AUDIO_INPUT(12);
    if (!obj4.isEqual(valueResult, tmp)) {
      let id = getSettings().inputDeviceId;
      let firstResult = valueResult[id];
      if (firstResult == null) {
        firstResult = tmp11[DEFAULT_DEVICE_ID];
      }
      if (firstResult == null) {
        const obj5 = AUDIO_INPUT(12)(valueResult);
        const values = obj5.values();
        firstResult = values.first();
      }
      if (null != firstResult) {
        id = firstResult.id;
      }
      closure_72.setAudioInputDevice(id);
      maybeProbeAudioEffects(id);
      const tmp3Result = tmp3(1369);
      if (tmp3Result.isMac()) {
        let guid;
        if (valueResult[id] != null) {
          guid = tmp19.guid;
        }
        if (null != guid) {
          const watchDeviceHardwareMutedChange = closure_72.watchDeviceHardwareMutedChange;
          if (watchDeviceHardwareMutedChange != null) {
            result = watchDeviceHardwareMutedChange(tmp19.guid);
          }
        }
      }
      closure_72.eachConnection(updateConnectionVoiceProcessing);
    }
    const AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
    const intl2 = tmp3(1126).intl;
    _require = videoDevices;
    const arr3 = videoDevices[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[AUDIO_OUTPUT]];
    if (0 === arr3.length) {
      const obj3 = { id: DEFAULT_DEVICE_ID, deviceType: AUDIO_OUTPUT, index: 0, name: tmp25, disabled: true, guid: "enabled", hardwareId: "toCharArray$esjava$1", containerId: "toCharArray$esjava$1" };
      const obj6 = {};
      obj6[obj3.id] = obj3;
      valueResult3 = obj6;
    } else {
      const arr4 = AUDIO_INPUT(12)(arr3);
      const mapped1 = arr4.map(f85486);
      let str2 = "id";
      const iter2 = mapped1.keyBy("id");
      valueResult3 = iter2.value();
    }
    const tmp9Result = AUDIO_INPUT(12);
    if (!tmp9Result.isEqual(valueResult3, valueResult3)) {
      let id2 = getSettings().outputDeviceId;
      let firstResult1 = valueResult3[id2];
      if (firstResult1 == null) {
        firstResult1 = tmp29[DEFAULT_DEVICE_ID];
      }
      if (firstResult1 == null) {
        const obj13 = AUDIO_INPUT(12)(valueResult3);
        const values4 = obj13.values();
        firstResult1 = values4.first();
      }
      if (null != firstResult1) {
        id2 = firstResult1.id;
      }
      closure_72.setAudioOutputDevice(id2);
      closure_72.eachConnection(updateConnectionVoiceProcessing);
      const _Object = Object;
      const values5 = Object.values(tmp24);
      const _Object2 = Object;
      const someResult = values5.some((name) => {
        const str = name.name;
        const formatted = str.toLowerCase();
        return formatted.includes("dualsense");
      });
      const values6 = Object.values(valueResult3);
      const someResult1 = values6.some((name) => {
        const str = name.name;
        const formatted = str.toLowerCase();
        return formatted.includes("dualsense");
      });
      if (someResult !== someResult1) {
        closure_72.eachConnection((context) => {
          if (context.context === constants.STREAM) {
            result = context.setSoundshareDiscardRearChannels(someResult1);
          }
        });
      }
    }
    let closure_101 = videoDevices.videoDevices.length > 0;
    const VIDEO_INPUT = DeviceTypes.VIDEO_INPUT;
    const intl3 = tmp3(1126).intl;
    _require = videoDevices;
    const arr5 = videoDevices[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[VIDEO_INPUT]];
    if (0 === arr5.length) {
      const obj8 = { id: DEFAULT_DEVICE_ID, deviceType: VIDEO_INPUT, index: 0, name: tmp42, disabled: true, guid: "enabled", hardwareId: "toCharArray$esjava$1", containerId: "toCharArray$esjava$1" };
      const obj9 = {};
      obj9[obj8.id] = obj8;
      valueResult4 = obj9;
    } else {
      const arr6 = AUDIO_INPUT(12)(arr5);
      const mapped2 = arr6.map(f85486);
      let str3 = "id";
      const iter3 = mapped2.keyBy("id");
      valueResult4 = iter3.value();
    }
    if (closure_94) {
      const tmp9Result2 = AUDIO_INPUT(12);
      if (!tmp9Result2.isEqual(valueResult4, valueResult4)) {
        let tmp51 = DISABLED_DEVICE_ID === DEFAULT_DEVICE_ID;
        const tmp49 = valueResult4[DISABLED_DEVICE_ID];
        if (tmp51) {
          let disabled;
          if (valueResult4[DEFAULT_DEVICE_ID] != null) {
            disabled = tmp52.disabled;
          }
          tmp51 = disabled;
        }
        let tmp55 = "Firefox" === tmp9(5403).name;
        if (tmp55) {
          tmp55 = "" === DISABLED_DEVICE_ID;
        }
        if (tmp55) {
          let name;
          if (valueResult4[DISABLED_DEVICE_ID] != null) {
            name = tmp58.name;
          }
          tmp55 = "Default" === name;
        }
        if (tmp55) {
          let disabled1;
          if (valueResult4[DISABLED_DEVICE_ID] != null) {
            disabled1 = tmp62.disabled;
          }
          tmp55 = !disabled1;
        }
        const tmp65 = undefined !== tmp49 || tmp51 || tmp55;
        updateVideo(tmp65);
      }
    }
  },
  AUDIO_VOLUME_CHANGE: function handleVolumeChange(arg0) {
    let inputVolume;
    let obj4;
    let obj5;
    let outputVolume;
    obj = { inputVolume: obj2.clamp(inputVolume, 0, BottomSheet), outputVolume };
    ({ inputVolume, outputVolume } = arg0);
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj2 = _modDef12;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp3 = settingsByContext[DEFAULT];
    if (null == tmp3) {
      const obj3 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj4, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj5, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: BottomSheet, outputVolume: BottomSheet, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj4 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj5 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj3;
      tmp3 = obj3;
    }
    const merged1 = Object.assign(tmp3, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
  },
  AUDIO_RESET: function handleReset() {
    const Storage = Storage6.Storage;
    Storage.remove(MediaEngineStore_str);
  },
  AUDIO_INPUT_DETECTED: function handleInputDetected(inputDetected) {
    inputDetected = inputDetected.inputDetected;
    if (null == inputDetected) {
      return false;
    } else {
      closure_103 = true !== c102 && !inputDetected;
      if (inputDetected) {
        c102 = true;
      }
    }
  },
  AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function handleOSConfigFetchSuccess(arg0) {
    ({ osVolume: c105, osMuted: c104 } = arg0);
  },
  AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function handleDeviceHardwareMutedChanged(hardwareMuted) {
    hardwareMuted = hardwareMuted.hardwareMuted;
    const deviceGuid = hardwareMuted.deviceGuid;
    let id = getSettings().inputDeviceId;
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
    let guid;
    if (inputDevices[id] != null) {
      guid = tmp6.guid;
    }
    if (deviceGuid !== guid) {
      return false;
    } else {
      let name;
      const track = AnalyticsUtilsDefault.track;
      const HARDWARE_MUTE_DETECTED = constants.HARDWARE_MUTE_DETECTED;
      AnalyticsUtilsDefault;
      if (inputDevices[id] != null) {
        name = tmp6.name;
      }
      obj2 = { input_device_name: name, hardware_muted: hardwareMuted };
      track(HARDWARE_MUTE_DETECTED, obj2);
    }
  },
  AUDIO_SET_SUBSYSTEM: function handleSetAudioSubsystem(subsystem) {
    setAudioSubsystem(subsystem.subsystem);
  },
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function handleBypassSystemInputProcessing(bypassEnabled) {
    let obj5;
    bypassEnabled = bypassEnabled.bypassEnabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj5, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj5 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, { bypassSystemInputProcessing: bypassEnabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    const result1 = result.setAudioInputBypassSystemProcessing(bypassEnabled);
    const tmp16 = getSettings();
    const inputDeviceId = tmp16.inputDeviceId;
    const tmp17 = CertifiedDeviceStore.hasEchoCancellation(inputDeviceId) || tmp16.echoCancellation;
    const tmp18 = CertifiedDeviceStore.hasNoiseSuppression(inputDeviceId) || tmp16.noiseSuppression;
    const tmp19 = getEffectiveNoiseCancellationDefault;
    const tmp19Result = tmp19(tmp16.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
    const tmp12Result = AudioFidelityExperiment;
    const voiceFidelityCaps = tmp12Result.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp19Result, noiseSuppressionEnabled: tmp18, echoCancellationEnabled: tmp17 });
    const maxChannelCount = voiceFidelityCaps.maxChannelCount;
    const result2 = obj3.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
    const result3 = obj3.setVoiceChannelCountCap(maxChannelCount);
    trackVoiceProcessing(bypassEnabled.location);
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function handleSetAudioEnabled(enabled) {
    let obj3;
    enabled = enabled.enabled;
    if (enabled.unmute) {
      let DEFAULT = MediaEngineContextTypes.DEFAULT;
      if (DEFAULT === undefined) {
        DEFAULT = MediaEngineContextTypes.DEFAULT;
      }
      let tmp2 = settingsByContext[DEFAULT];
      if (null == tmp2) {
        obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
        obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
        obj3 = {};
        PlatformUtils.isPlatformEmbedded || false;
        const merged = Object.assign(closure_34);
        settingsByContext[DEFAULT] = obj2;
        tmp2 = obj2;
      }
      const _Object = Object;
      const merged1 = Object.assign(tmp2, { mute: false, deaf: false });
      const Storage = Storage6.Storage;
      result = Storage.set(MediaEngineStore_str, settingsByContext);
    }
    result.eachConnection(updateConnectionMuteDeaf);
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function handleSetVideoEnabled(enabled) {
    enabled = enabled.enabled;
    obj = NativePermissionUtils;
    const permission = obj.requestPermission(NativePermissionTypes.CAMERA);
    updateVideo(enabled);
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
    let audioDeviceGuid;
    let obj3;
    let obj7;
    let obj8;
    let sound;
    let soundshareId;
    let soundshareSession;
    let videoDeviceGuid;
    settings = settings.settings;
    let desktopSettings1;
    if (settings != null) {
      desktopSettings1 = settings.desktopSettings;
    }
    if (null != desktopSettings1) {
      const desktopSettings = settings.desktopSettings;
      const sourceId = desktopSettings.sourceId;
      let DEFAULT2 = settings.context;
      const sound2 = desktopSettings.sound;
      if (DEFAULT2 == null) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
      }
      let qualityOptions = settings.qualityOptions;
      if (qualityOptions == null) {
        qualityOptions = { resolution: 720, frameRate: 30 };
      }
      const obj6 = CrossPlatformNativeUtilsDefault;
      const pidFromDesktopSource = obj6.getPidFromDesktopSource(sourceId);
      soundshareSession = null;
      soundshareId = null;
      if (PlatformUtils.isPlatformEmbedded) {
        ({ soundshareId, soundshareSession } = maybeTryHookProcess(pidFromDesktopSource, sound2));
        maybeTryHookProcess(pidFromDesktopSource, sound2);
      }
      if (DEFAULT2 !== STREAM) {
        if (null != goLiveSource) {
          result.setGoLiveSource(null, STREAM);
        }
        STREAM = DEFAULT2;
      }
      obj = { desktopSource: obj2, quality: obj3 };
      obj2 = { id: sourceId, sourcePid: pidFromDesktopSource, soundshareId, soundshareSession };
      obj3 = { resolution: null, frameRate: null };
      const tmp25 = DEFAULT2 === MediaEngineContextTypes.STREAM && closure_94;
      ({ resolution: obj9.resolution, frameRate: obj9.frameRate } = qualityOptions);
      updateVideo(tmp25, obj);
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
        const obj5 = { cameraSource: obj7, quality: obj8 };
        obj7 = { videoDeviceGuid, audioDeviceGuid, sound };
        obj8 = { resolution: null, frameRate: null };
        ({ resolution: obj4.resolution, frameRate: obj4.frameRate } = qualityOptions1);
        updateVideo(tmp8, obj5);
      } else {
        updateVideo(closure_94, null);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function handleSetVideoDevice(id) {
    let obj3;
    let obj4;
    id = id.id;
    let firstResult = closure_88[id];
    if (firstResult == null) {
      firstResult = closure_88[DEFAULT_DEVICE_ID];
    }
    if (firstResult == null) {
      obj = _modDef12(closure_88);
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
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp6 = obj2;
    }
    const merged1 = Object.assign(tmp6, { videoDeviceId: id });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
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
    let c109;
    let c110;
    let c111;
    let closure_130;
    let closure_77;
    let closure_86;
    let closure_87;
    ({ settingsByContext: closure_77, inputDevices: closure_86, outputDevices: closure_87, appSupported: closure_130, krispModuleLoaded: c109, krispFatalError: c110, krispVersion: c111, goLiveContext: STREAM } = mediaEngineState.mediaEngineState);
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
      const tmp7 = c100;
      if (tmp7) {
        c100 = false;
        updateVideo(true);
      }
    }
    return false;
  },
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(arg0) {
    let closure_0 = arg0;
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
      const tmp5 = tmp !== tmp2 && closure_94;
      if (tmp5) {
        updateVideo(false);
      }
    } else {
      return false;
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(arg0) {
    let closure_0 = arg0;
    result.eachConnection((applyVideoQualityMode) => applyVideoQualityMode.applyVideoQualityMode(mode.mode));
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function handleSetAecDump(aecDumpEnabled) {
    let obj3;
    let obj4;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    obj = { aecDumpEnabled: aecDumpEnabled.enabled };
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj3, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj4, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj3 = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj4 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, obj);
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
    result.setAecDump(tmp.aecDumpEnabled);
  },
  MEDIA_ENGINE_SET_OPENH264_ENABLED: function handleSetOpenH264Enabled(enabled) {
    let obj3;
    enabled = enabled.enabled;
    let DEFAULT = MediaEngineContextTypes.DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let tmp = settingsByContext[DEFAULT];
    if (null == tmp) {
      obj2 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: obj, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj3, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj = { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" };
      obj3 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      settingsByContext[DEFAULT] = obj2;
      tmp = obj2;
    }
    const merged1 = Object.assign(tmp, { openH264Enabled: enabled });
    const Storage = Storage6.Storage;
    result = Storage.set(MediaEngineStore_str, settingsByContext);
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
    let closure_77 = values.reduce((acc, item) => {
      obj = { mode: InputModes.VOICE_ACTIVITY, modeOptions: { threshold: -60, autoThreshold: PlatformUtils.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: "Set" }, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true, localMutes: {}, disabledLocalVideos: {}, videoToggleStateMap: {}, localVolumes: {}, audioMixerSettings: obj2, audioMixerSettingsVersion: 0, localPans: {}, inputVolume: outputVolume, outputVolume, inputDeviceId: DEFAULT_DEVICE_ID, outputDeviceId: DEFAULT_DEVICE_ID, videoDeviceId: DEFAULT_DEVICE_ID, qos: false, qosMigrated: false, videoHook: result.supports(Features.VIDEO_HOOK), experimentalSoundshare2: null, useSystemScreensharePicker: null, h265Enabled: true, vadThrehsoldMigrated: false, aecDumpEnabled: false, openH264Enabled: true, sidechainCompression: true, sidechainCompressionSettingVersion: 1, sidechainCompressionStrength: 50, automaticAudioSubsystem: true, activeInputProfile: null };
      obj2 = {};
      PlatformUtils.isPlatformEmbedded || false;
      const merged = Object.assign(closure_34);
      const obj3 = _modDef12;
      acc[item] = obj3.merge(obj, overrides[item]);
      return acc;
    }, {});
    const Storage = overrides(510).Storage;
    result = Storage.set(MediaEngineStore_str, closure_77);
    const tmp2 = applySettings();
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
      closure_140.noiseCancellation = false;
      closure_140.noiseSuppression = true;
      let noiseCancellation = getSettings();
      closure_72.eachConnection((setNoiseCancellation) => {
        let defaultConfig;
        noiseCancellation = noiseCancellation.noiseCancellation;
        const tmp3 = getEffectiveNoiseCancellationDefault;
        const tmp3Result = tmp3(noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
        if (tmp3Result !== noiseCancellation) {
          obj.info("Falling back to system noise suppression.");
        }
        setNoiseCancellation.setNoiseCancellation(tmp3Result);
        const tmpResult = AGC2MobileExperimentDefault;
        if (tmp3Result) {
          defaultConfig = tmpResult.getConfig({ location: "setNoiseCancellation" });
        } else {
          defaultConfig = tmpResult.definition.defaultConfig;
        }
        result = setNoiseCancellation.setNoiseCancellationDuringProcessing(defaultConfig.noiseCancellationDuringProcessing);
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
    let isMacResult;
    let isWindowsResult;
    let minCaptureHeight;
    let minCaptureWidth;
    let obj5;
    let sourceId;
    ({ sourceId, quality } = applicationName);
    applicationName = applicationName.applicationName;
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
          const tmpResult = PlatformUtils;
          if (tmpResult.isWindows()) {
            if (null != _null.desktopSource.soundshareId) {
              const obj3 = HookAll;
              result = obj3.cancelAttachToProcess(_null.desktopSource.soundshareId);
            } else {
              const videoHook = null != _null.desktopSource.sourcePid && getSettings().videoHook;
              if (videoHook) {
                obj2 = HookAll;
                const result1 = obj2.cancelAttachToProcess(_null.desktopSource.sourcePid);
              }
            }
          }
        }
        const tmp3Result = CrossPlatformNativeUtilsDefault;
        const pidFromDesktopSource = tmp3Result.getPidFromDesktopSource(sourceId);
        const obj4 = { desktopSource: obj5, quality };
        obj5 = { id: sourceId, sourcePid: pidFromDesktopSource, soundshareId: null, soundshareSession: null };
        ({ soundshareId: obj6.soundshareId, soundshareSession: obj6.soundshareSession } = maybeTryHookProcess(pidFromDesktopSource, true));
        _null = obj4;
        maybeTryHookProcess(pidFromDesktopSource, true);
        const tmpResult4 = GoLiveHdrExperiment;
        const hdrCaptureMode = tmpResult4.getGoLiveHdrConfig({ location: "MediaEngineStore clips" }).hdrCaptureMode;
        const videoHook2 = getSettings().videoHook;
        enabled = videoHook2;
        if (enabled) {
          const VideoHookDX12Experiment = VideoHookDX12Experiment2.VideoHookDX12Experiment;
          enabled = VideoHookDX12Experiment.getConfig({ location: "handleClipsInit" }).enabled;
        }
        const UpscaleSmallCapturedFramesExperiment = UpscaleSmallCapturedFramesExperiment2.UpscaleSmallCapturedFramesExperiment;
        const config = UpscaleSmallCapturedFramesExperiment.getConfig({ location: "handleClipsInit" });
        const obj7 = { id: _null.desktopSource.id, soundshareId: _null.desktopSource.soundshareId, useVideoHook: videoHook2, useGraphicsCapture: isWindowsResult, useCaptureDeviceForEncode: false, useLoopback: mediaEngineStore.getExperimentalSoundshare(), useQuartzCapturer: true, allowScreenCaptureKit: isMacResult, videoHookStaleFrameTimeoutMs: 500, graphicsCaptureStaleFrameTimeoutMs, hdrCaptureMode, videoHookAllowDx12: enabled, minCaptureWidth, minCaptureHeight };
        ({ minCaptureWidth, minCaptureHeight } = config);
        const setClipsSource = result.setClipsSource;
        const tmpResult5 = PlatformUtils;
        isWindowsResult = tmpResult5.isWindows();
        const obj8 = result;
        if (isWindowsResult) {
          const satisfies = _modDef13829.satisfies;
          _modDef13829;
          const tmp3Result6 = DiscordNativeDefault;
          let release;
          if (tmp3Result6 != null) {
            release = tmp3Result6.os.release;
          }
          isWindowsResult = satisfies(release, set);
        }
        const tmpResult6 = PlatformUtils;
        isMacResult = tmpResult6.isMac() && obj8.supports(Features.SCREEN_CAPTURE_KIT);
        if (isMacResult) {
          const satisfies2 = _modDef13829.satisfies;
          _modDef13829;
          const tmp3Result8 = DiscordNativeDefault;
          let release1;
          if (tmp3Result8 != null) {
            release1 = tmp3Result8.os.release;
          }
          isMacResult = satisfies2(release1, closure_24);
        }
        const obj9 = { desktopDescription: obj7, quality, bitratePercent: quality.bitratePercent, applicationName, videoEncoderExperiments: mediaEngineStore.getVideoEncoderExperiments(MediaEngineContextTypes.STREAM, "streamer") };
        setClipsSource(obj9);
      }
    }
    return false;
  },
  CLIPS_RESTART: function handleClipsRestart() {
    let c75 = null;
  },
  CLIPS_SETTINGS_UPDATE: function handleClipsSettingsUpdate(settings) {
    if (false === settings.settings.clipsEnabled) {
      let c75 = null;
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
    const tmp4 = getEffectiveNoiseCancellationDefault;
    const tmp4Result = tmp4(tmp.noiseCancellation, mediaEngineStore.getSystemMicrophoneMode());
    obj2 = AudioFidelityExperiment;
    const voiceFidelityCaps = obj2.getVoiceFidelityCaps({ location: "updateVoiceFidelityCaps" }, { krispEnabled: tmp4Result, noiseSuppressionEnabled: tmp3, echoCancellationEnabled: tmp2 });
    const maxChannelCount = voiceFidelityCaps.maxChannelCount;
    result = result.setVoiceSampleRateCap(voiceFidelityCaps.maxSampleRateHz);
    const result1 = result.setVoiceChannelCountCap(maxChannelCount);
  }
};
const mediaEngineStore = new MediaEngineStore(DispatcherDefault, obj7);
let size = size_mod;
let result1 = size.fileFinishedImporting("stores/MediaEngineStore.tsx");

export default mediaEngineStore;
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
export const LINUX_OPENH264_URL = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
export const LINUX_OPENH264_SHA256 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
export const DeviceFormFactor = obj2;