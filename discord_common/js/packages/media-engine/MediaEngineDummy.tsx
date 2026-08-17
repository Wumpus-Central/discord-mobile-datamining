// discord_common/js/packages/media-engine/MediaEngineDummy.tsx
import set from "set" /* 2 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4569 */;
import onDefault from "on" /* 4572 */;
import DesktopSources from "DesktopSources" /* 4529 */;

function Video() {
  return null;
}
function Camera() {
  return null;
}
({ AudioSubsystems: obj1, DISABLED_DEVICE_ID: c3, Features: c4, MediaEngineContextTypes: c5 } = DesktopSources);
onDefault;
class MediaEngineDummy extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.Video = Video;
    applyArgumentsResult.Camera = Camera;
    return applyArgumentsResult;
  }
}
const prototype = MediaEngineDummy.prototype;
prototype["destroy"] = function destroy() {
  this.emit(BaseConnectionEvent.MediaEngineEvent.Destroy);
  this.removeAllListeners();
};
prototype["interact"] = function interact() {

};
prototype["supported"] = function supported() {
  return false;
};
prototype["supports"] = function supports(arg0) {
  return false;
};
prototype["connect"] = function connect() {
  error = new Error("NOT_IMPLEMENTED");
  throw error;
};
prototype["eachConnection"] = function eachConnection() {

};
prototype["enable"] = function enable() {
  return Promise.resolve();
};
prototype["setAudioMixerOptions"] = function setAudioMixerOptions() {

};
prototype["setInputVolume"] = function setInputVolume() {

};
prototype["setOutputVolume"] = function setOutputVolume() {

};
prototype["getAudioInputDevices"] = function getAudioInputDevices() {
  return Promise.resolve([]);
};
prototype["setAudioInputDevice"] = function setAudioInputDevice() {

};
prototype["getAudioOutputDevices"] = function getAudioOutputDevices() {
  return Promise.resolve([]);
};
prototype["setAudioOutputDevice"] = function setAudioOutputDevice() {

};
prototype["getVideoInputDevices"] = function getVideoInputDevices() {
  return Promise.resolve([]);
};
prototype["setVideoInputDevice"] = function setVideoInputDevice() {

};
prototype["getVideoInputDeviceId"] = function getVideoInputDeviceId() {
  return closure_3;
};
prototype["setAsyncVideoInputDeviceInit"] = function setAsyncVideoInputDeviceInit() {

};
prototype["getCodecCapabilities"] = function getCodecCapabilities(arg0) {
  arg0("");
};
prototype["getCodecSurvey"] = function getCodecSurvey() {
  error = new Error("getCodecSurvey is not implemented for MediaEngineDummy");
  return Promise.reject(error);
};
prototype["getAudioSubsystem"] = function getAudioSubsystem() {
  return constants.STANDARD;
};
prototype["getAudioLayer"] = function getAudioLayer() {
  return "";
};
prototype["setGoLiveSource"] = function setGoLiveSource() {

};
prototype["setClipsSource"] = function setClipsSource() {

};
prototype["setClipsQualitySettings"] = function setClipsQualitySettings() {
  return false;
};
prototype["setDesktopSource"] = function setDesktopSource(arg0, useVideoHook, arg2) {
  if (useVideoHook === undefined) {
    const DEFAULT = constants2.DEFAULT;
  }
};
prototype["setSoundshareSource"] = function setSoundshareSource() {

};
prototype["getDesktopSource"] = function getDesktopSource() {
  error = new Error("NO_STREAM");
  return Promise.reject(error);
};
prototype["getScreenPreviews"] = function getScreenPreviews() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["getWindowPreviews"] = function getWindowPreviews() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["getSingleWindowPreview"] = function getSingleWindowPreview() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["setClipsModulePath"] = function setClipsModulePath() {

};
prototype["setClipsDataPath"] = function setClipsDataPath() {

};
prototype["setClipsV3Enabled"] = function setClipsV3Enabled() {

};
prototype["setClipsV3MLEnabled"] = function setClipsV3MLEnabled() {

};
prototype["setClipsRecordingEnabled"] = function setClipsRecordingEnabled() {

};
prototype["hasSetClipsRecordingEnabled"] = function hasSetClipsRecordingEnabled() {
  return false;
};
prototype["setClipsUIActive"] = function setClipsUIActive() {

};
prototype["setClipBufferLength"] = function setClipBufferLength() {

};
prototype["getSystemSteadyClockNowMs"] = function getSystemSteadyClockNowMs() {
  return null;
};
prototype["saveClipEx"] = function saveClipEx() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["updateClipMetadata"] = function updateClipMetadata() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["exportClip"] = function exportClip() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["hasExportClipToFile"] = function hasExportClipToFile() {
  return false;
};
prototype["exportClipToFile"] = function exportClipToFile() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["setClipsPerfMonitoring"] = function setClipsPerfMonitoring() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["saveScreenshot"] = function saveScreenshot() {
  error = new Error("UNSUPPORTED");
  return Promise.reject(error);
};
prototype["setAudioSubsystem"] = function setAudioSubsystem() {

};
prototype["queueAudioSubsystem"] = function queueAudioSubsystem() {

};
prototype["setOffloadAdmControls"] = function setOffloadAdmControls() {

};
prototype["updateFieldTrial"] = function updateFieldTrial() {

};
prototype["getDebugLogging"] = function getDebugLogging() {
  return false;
};
prototype["setDebugLogging"] = function setDebugLogging() {

};
prototype["writeAudioDebugState"] = function writeAudioDebugState() {
  error = new Error("Audio debug state is not supported.");
  return Promise.reject(error);
};
prototype["setLoopback"] = function setLoopback() {

};
prototype["getLoopback"] = function getLoopback() {
  return false;
};
prototype["setExperimentFlag"] = function setExperimentFlag() {

};
prototype["startAecDump"] = function startAecDump() {

};
prototype["stopAecDump"] = function stopAecDump() {

};
prototype["setAecDump"] = function setAecDump() {

};
prototype["startRecordingRawSamples"] = function startRecordingRawSamples() {

};
prototype["stopRecordingRawSamples"] = function stopRecordingRawSamples() {

};
prototype["processBatchAudioFiles"] = function processBatchAudioFiles() {

};
prototype["cancelBatchAudioProcessing"] = function cancelBatchAudioProcessing() {

};
prototype["createReplayConnection"] = function createReplayConnection() {
  error = new Error("Connection replay is not supported.");
  throw error;
};
prototype["setOnVideoContainerResized"] = function setOnVideoContainerResized() {

};
prototype["setMaxSyncDelayOverride"] = function setMaxSyncDelayOverride() {

};
prototype["rankRtcRegions"] = function rankRtcRegions() {
  error = new Error("RTC region latency test is not supported.");
  return Promise.reject(error);
};
prototype["applyMediaFilterSettings"] = function applyMediaFilterSettings() {
  return Promise.resolve();
};
prototype["startLocalAudioRecording"] = function startLocalAudioRecording() {
  error = new Error("startLocalAudioRecording is not supported.");
  return Promise.reject(error);
};
prototype["stopLocalAudioRecording"] = function stopLocalAudioRecording() {

};
prototype["setHasFullbandPerformance"] = function setHasFullbandPerformance() {

};
prototype["setNcModels"] = function setNcModels() {

};
prototype["getSupportedSecureFramesProtocolVersion"] = function getSupportedSecureFramesProtocolVersion() {
  return 0;
};
prototype["getSupportedBandwidthEstimationExperiments"] = function getSupportedBandwidthEstimationExperiments(arg0) {
  arg0([]);
};
prototype["getMLSSigningKey"] = function getMLSSigningKey() {
  error = new Error("NOT_IMPLEMENTED");
  return Promise.reject(error);
};
prototype["setSidechainCompression"] = function setSidechainCompression() {

};
prototype["setSidechainCompressionStrength"] = function setSidechainCompressionStrength() {

};
prototype["setVoiceSampleRateCap"] = function setVoiceSampleRateCap() {

};
prototype["setVoiceChannelCountCap"] = function setVoiceChannelCountCap() {

};
prototype["getSystemMicrophoneMode"] = function getSystemMicrophoneMode() {
  return Promise.resolve("");
};
prototype["showSystemCaptureConfigurationUI"] = function showSystemCaptureConfigurationUI() {

};
prototype["setNativeDesktopVideoSourcePickerActive"] = function setNativeDesktopVideoSourcePickerActive() {

};
prototype["presentNativeScreenSharePicker"] = function presentNativeScreenSharePicker() {

};
prototype["releaseNativeDesktopVideoSourcePickerStream"] = function releaseNativeDesktopVideoSourcePickerStream() {

};
prototype["setMaybePreprocessMute"] = function setMaybePreprocessMute() {

};
prototype["setAudioInputBypassSystemProcessing"] = function setAudioInputBypassSystemProcessing() {

};
prototype["fetchAsyncResources"] = function fetchAsyncResources() {
  return Promise.resolve();
};
prototype["getDeviceOSVolume"] = function getDeviceOSVolume() {
  return Promise.resolve(undefined);
};
prototype["getDeviceOSMuted"] = function getDeviceOSMuted() {
  return Promise.resolve(undefined);
};
prototype["getDeviceAudioEffects"] = function getDeviceAudioEffects() {
  error = new Error("Device audio effect querying not supported");
  return Promise.reject(error);
};
prototype["getNoiseCancellationStats"] = function getNoiseCancellationStats() {
  error = new Error("Dummy noise cancellation stats not supported");
  return Promise.reject(error);
};
prototype["setNoiseCancellationEnableStats"] = function setNoiseCancellationEnableStats() {

};
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/MediaEngineDummy.tsx");

export default MediaEngineDummy;