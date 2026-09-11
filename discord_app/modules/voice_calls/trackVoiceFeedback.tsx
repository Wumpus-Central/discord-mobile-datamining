// discord_app/modules/voice_calls/trackVoiceFeedback.tsx
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

let closure_6 = async function _trackVoiceFeedback(arg0) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_0 = closure_0;
          ({
            rating: closure_132_1,
            category: closure_132_2,
            reasonCode: closure_132_3,
            reasonDescription: closure_132_4,
            variant: closure_132_5,
            feedback: closure_132_6,
            analyticsData: closure_132_7,
          } = closure_1);
          let settings;
          let inputDeviceId;
          closure_132_10 = undefined;
          let outputDeviceId;
          closure_132_12 = undefined;
          let videoDeviceId;
          closure_132_14 = undefined;
          let noiseCancellation;
          let audioSubsystem;
          let audioLayer;
          closure_132_18 = undefined;
          closure_132_19 = undefined;
          closure_132_20 = undefined;
          closure_132_21 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          settings = closure_133_5.getSettings();
          inputDeviceId = closure_133_5.getInputDeviceId();
          closure_132_10 = closure_133_5.getInputDevices()[inputDeviceId];
          outputDeviceId = closure_133_5.getOutputDeviceId();
          closure_132_12 = closure_133_5.getOutputDevices()[outputDeviceId];
          videoDeviceId = closure_133_5.getVideoDeviceId();
          closure_132_14 = closure_133_5.getVideoDevices()[videoDeviceId];
          noiseCancellation = closure_133_5.getNoiseCancellation();
          const mediaEngine = closure_133_5.getMediaEngine();
          audioSubsystem = mediaEngine.getAudioSubsystem();
          const mediaEngine1 = closure_133_5.getMediaEngine();
          audioLayer = mediaEngine1.getAudioLayer();
          c6 = 2;
          c7 = 1;
          const obj2 = { value: closure_133_0(closure_133_1[3]).getKrispModel(), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_132_18 = value;
        closure_2 = closure_132_7;
        if (closure_132_7 == null) {
          closure_2 = {};
        }
        closure_132_19 = closure_2;
        closure_132_20 = closure_132_19.output_audio_route_type;
        closure_132_21 = closure_133_3(closure_132_19, closure_133_2);
        obj = closure_133_0(closure_133_1[4]);
        let rating = closure_132_1;
        if (closure_132_1 == null) {
          rating = "no response";
        }
        const obj4 = {
          rating,
          category: closure_132_2,
          reason_code: closure_132_3,
          reason_description: closure_132_4,
          reason_variant: closure_132_5,
          feedback: closure_132_6,
          audio_input_mode: settings.mode,
          automatic_audio_input_sensitivity_enabled: settings.modeOptions.autoThreshold,
          audio_input_sensitivity: settings.modeOptions.threshold,
          vad_use_advanced_voice_activity: settings.modeOptions.vadUseKrisp,
          echo_cancellation_enabled: settings.echoCancellation,
          noise_suppression_enabled: settings.noiseSuppression,
          automatic_gain_control_enabled: settings.automaticGainControl,
          voice_output_volume: settings.outputVolume,
          noise_cancellation_enabled: noiseCancellation,
          input_device_name: null,
          output_device_name: null,
          video_device_name: null,
          audio_subsystem: null,
          audio_layer: null,
          automatic_audio_subsystem: null,
          krisp_nc_model: null,
          audio_output_mode: null,
        };
        let name;
        if (closure_132_10 != null) {
          name = closure_132_10.name;
        }
        obj4.input_device_name = name;
        let name1;
        if (closure_132_12 != null) {
          name1 = closure_132_12.name;
        }
        obj4.output_device_name = name1;
        let name2;
        if (closure_132_14 != null) {
          name2 = closure_132_14.name;
        }
        obj4.video_device_name = name2;
        obj4.audio_subsystem = audioSubsystem;
        obj4.audio_layer = audioLayer;
        obj4.automatic_audio_subsystem = settings.automaticAudioSubsystem;
        obj4.krisp_nc_model = closure_132_18;
        obj4.audio_output_mode = closure_132_20;
        const merged = Object.assign(closure_132_21);
        obj.track(closure_132_0, obj4);
        c7 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp48) {
      c7 = tmp;
      throw tmp48;
    }
  }
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
}
