// discord_common/js/packages/media-engine/MediaEngineDummy.tsx
import MediaEngineEvent from "MediaEngineEvent.tsx";
import Constants from "Constants.tsx";
import TypedEventEmitter from "../../shared/utils/TypedEventEmitter.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
function Video() {
  return null;
}
function Camera() {
  return null;
}
({
  AudioSubsystems: c2,
  DISABLED_DEVICE_ID: c3,
  Features: closure_4,
  MediaEngineContextTypes: hasOwnProperty,
} = Constants);
class MediaEngineDummy extends TypedEventEmitter {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.Video = Video;
    applyArgumentsResult.Camera = Camera;
    return applyArgumentsResult;
  }
  destroy() {
    this.emit(MediaEngineEvent.MediaEngineEvent.Destroy);
    this.removeAllListeners();
  }
  interact() {}
  supported() {
    return false;
  }
  supports(arg0) {
    return false;
  }
  connect() {
    const error = new Error("NOT_IMPLEMENTED");
    throw error;
  }
  eachConnection() {}
  enable() {
    return Promise.resolve();
  }
  setAudioMixerOptions() {}
  setInputVolume() {}
  setOutputVolume() {}
  getAudioInputDevices() {
    return Promise.resolve([]);
  }
  setAudioInputDevice() {}
  getAudioOutputDevices() {
    return Promise.resolve([]);
  }
  setAudioOutputDevice() {}
  getVideoInputDevices() {
    return Promise.resolve([]);
  }
  setVideoInputDevice() {}
  getVideoInputDeviceId() {
    return _false;
  }
  setAsyncVideoInputDeviceInit() {}
  getCodecCapabilities(fn) {
    fn("");
  }
  getCodecSurvey() {
    const error = new Error("getCodecSurvey is not implemented for MediaEngineDummy");
    return reject(error);
  }
  getAudioSubsystem() {
    return constants.STANDARD;
  }
  getAudioLayer() {
    return "";
  }
  setGoLiveSource() {}
  setClipsSource() {}
  setClipsQualitySettings() {
    return false;
  }
  setDesktopSource(arg0) {
    if (useVideoHook === undefined) {
      const DEFAULT = hasOwnProperty.DEFAULT;
    }
  }
  setSoundshareSource() {}
  getDesktopSource() {
    const error = new Error("NO_STREAM");
    return reject(error);
  }
  getScreenPreviews() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  getWindowPreviews() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  getSingleWindowPreview() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  setClipsModulePath() {}
  setClipsDataPath() {}
  hasClipsV3Support() {
    return false;
  }
  setClipsV3MLEnabled() {}
  setClipsRecordingEnabled() {}
  setClipsUIActive() {}
  setClipBufferLength() {}
  getSystemSteadyClockNowMs() {
    return null;
  }
  saveClipEx() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  updateClipMetadata() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  exportClipToFile() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  setClipsPerfMonitoring() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  saveScreenshot() {
    const error = new Error("UNSUPPORTED");
    return reject(error);
  }
  setAudioSubsystem() {}
  queueAudioSubsystem() {}
  setOffloadAdmControls() {}
  updateFieldTrial() {}
  getDebugLogging() {
    return false;
  }
  setDebugLogging() {}
  writeAudioDebugState() {
    const error = new Error("Audio debug state is not supported.");
    return reject(error);
  }
  setLoopback() {}
  getLoopback() {
    return false;
  }
  setExperimentFlag() {}
  startAecDump() {}
  stopAecDump() {}
  setAecDump() {}
  startRecordingRawSamples() {}
  stopRecordingRawSamples() {}
  processBatchAudioFiles() {}
  cancelBatchAudioProcessing() {}
  createReplayConnection() {
    const error = new Error("Connection replay is not supported.");
    throw error;
  }
  setOnVideoContainerResized() {}
  setMaxSyncDelayOverride() {}
  rankRtcRegions() {
    const error = new Error("RTC region latency test is not supported.");
    return reject(error);
  }
  applyMediaFilterSettings() {
    return Promise.resolve();
  }
  startLocalAudioRecording() {
    const error = new Error("startLocalAudioRecording is not supported.");
    return reject(error);
  }
  stopLocalAudioRecording() {}
  setHasFullbandPerformance() {}
  setNcModels() {}
  getSupportedSecureFramesProtocolVersion() {
    return 0;
  }
  getSupportedBandwidthEstimationExperiments(fn) {
    fn([]);
  }
  getMLSSigningKey() {
    const error = new Error("NOT_IMPLEMENTED");
    return reject(error);
  }
  setSidechainCompression() {}
  setSidechainCompressionStrength() {}
  setVoiceSampleRateCap() {}
  setVoiceChannelCountCap() {}
  getSystemMicrophoneMode() {
    return Promise.resolve("");
  }
  showSystemCaptureConfigurationUI() {}
  setNativeDesktopVideoSourcePickerActive() {}
  presentNativeScreenSharePicker() {}
  releaseNativeDesktopVideoSourcePickerStream() {}
  setMaybePreprocessMute() {}
  setAudioInputBypassSystemProcessing() {}
  fetchAsyncResources() {
    return Promise.resolve();
  }
  getDeviceOSVolume() {
    return Promise.resolve(undefined);
  }
  getDeviceOSMuted() {
    return Promise.resolve(undefined);
  }
  getDeviceAudioEffects() {
    const error = new Error("Device audio effect querying not supported");
    return reject(error);
  }
  getNoiseCancellationStats() {
    const error = new Error("Dummy noise cancellation stats not supported");
    return reject(error);
  }
  setNoiseCancellationEnableStats() {}
}
const prototype = MediaEngineDummy.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/MediaEngineDummy.tsx");

export default MediaEngineDummy;
