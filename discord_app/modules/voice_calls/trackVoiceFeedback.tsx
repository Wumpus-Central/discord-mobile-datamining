// === Module 17361: trackVoiceFeedback ===

// Module 17361 (trackVoiceFeedback)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

let closure_6 = async function _trackVoiceFeedback() {
  const settings = closure_133_5.getSettings();
  const inputDeviceId = closure_133_5.getInputDeviceId();
  closure_132_10 = closure_133_5.getInputDevices()[inputDeviceId];
  const outputDeviceId = closure_133_5.getOutputDeviceId();
  closure_132_12 = closure_133_5.getOutputDevices()[outputDeviceId];
  const videoDeviceId = closure_133_5.getVideoDeviceId();
  closure_132_14 = closure_133_5.getVideoDevices()[videoDeviceId];
  const noiseCancellation = closure_133_5.getNoiseCancellation();
  const mediaEngine = closure_133_5.getMediaEngine();
  const audioSubsystem = mediaEngine.getAudioSubsystem();
  const mediaEngine1 = closure_133_5.getMediaEngine();
  const audioLayer = mediaEngine1.getAudioLayer();
  await closure_133_0(closure_133_1[3]).getKrispModel();
  closure_132_18 = value;
  closure_2 = closure_132_7;
  if (closure_132_7 == null) {
    closure_2 = {};
  }
  closure_132_19 = closure_2;
  closure_132_20 = closure_132_19.output_audio_route_type;
  closure_132_21 = closure_133_3(closure_132_19, closure_133_2);
  let rating = closure_132_1;
  if (closure_132_1 == null) {
    rating = "no response";
  }
  const obj4 = { rating, category: closure_132_2, reason_code: closure_132_3, reason_description: closure_132_4, reason_variant: closure_132_5, feedback: closure_132_6, audio_input_mode: settings.mode, automatic_audio_input_sensitivity_enabled: settings.modeOptions.autoThreshold, audio_input_sensitivity: settings.modeOptions.threshold, vad_use_advanced_voice_activity: settings.modeOptions.vadUseKrisp, echo_cancellation_enabled: settings.echoCancellation, noise_suppression_enabled: settings.noiseSuppression, automatic_gain_control_enabled: settings.automaticGainControl, voice_output_volume: settings.outputVolume, noise_cancellation_enabled: noiseCancellation, input_device_name: null, output_device_name: null, video_device_name: null, audio_subsystem: null, audio_layer: null, automatic_audio_subsystem: null, krisp_nc_model: null, audio_output_mode: null };
  if (closure_132_10 != null) {
    const name = closure_132_10.name;
  }
  obj4.input_device_name = name;
  if (closure_132_12 != null) {
    const name1 = closure_132_12.name;
  }
  obj4.output_device_name = name1;
  if (closure_132_14 != null) {
    const name2 = closure_132_14.name;
  }
  obj4.video_device_name = name2;
  obj4.audio_subsystem = audioSubsystem;
  obj4.audio_layer = audioLayer;
  obj4.automatic_audio_subsystem = settings.automaticAudioSubsystem;
  obj4.krisp_nc_model = closure_132_18;
  obj4.audio_output_mode = closure_132_20;
  const merged = Object.assign(closure_132_21);
  closure_133_0(closure_133_1[4]).track(closure_132_0, obj4);
  await "HermesInternal";
  closure_4 = tmp2;
  closure_132_0 = closure_0;
  ({ rating: closure_132_1, category: closure_132_2, reasonCode: closure_132_3, reasonDescription: closure_132_4, variant: closure_132_5, feedback: closure_132_6, analyticsData: closure_132_7 } = closure_1);
  return "PX_16";
};
let closure_2 = ["output_audio_route_type"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/trackVoiceFeedback.tsx");

export default function trackVoiceFeedback() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};