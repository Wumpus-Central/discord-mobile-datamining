// discord_app/modules/voice_calls/trackVoiceFeedback.tsx
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = function _trackVoiceFeedback() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let feedback;
    let name1;
    let obj9;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let category;
        let noresponse;
        let reason_description;
        let reason_variant;
        let settings;
        let inputDeviceId;
        let name;
        let outputDeviceId;
        let name2;
        let videoDeviceId;
        let name3;
        let noise_cancellation_enabled;
        let audio_subsystem;
        let audio_layer;
        let krisp_nc_model;
        let closure_19;
        let output_audio_route_type;
        let closure_21;
        c7 = 2;
        if (0 === feedback) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp4;
            let closure_4 = tmp;
            c1 = undefined;
            category = undefined;
            noresponse = undefined;
            reason_description = undefined;
            reason_variant = undefined;
            ({
              rating: c1,
              category: c2,
              reasonCode: c3,
              reasonDescription: c4,
              variant: c5,
              feedback: c6,
              analyticsData: c7,
            } = closure_1);
            settings = undefined;
            inputDeviceId = undefined;
            name = undefined;
            outputDeviceId = undefined;
            name2 = undefined;
            videoDeviceId = undefined;
            name3 = undefined;
            noise_cancellation_enabled = undefined;
            audio_subsystem = undefined;
            audio_layer = undefined;
            krisp_nc_model = undefined;
            closure_19 = undefined;
            output_audio_route_type = undefined;
            closure_21 = undefined;
            feedback = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === feedback) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            settings = closure_133_5.getSettings();
            inputDeviceId = closure_133_5.getInputDeviceId();
            name = closure_133_5.getInputDevices()[inputDeviceId];
            outputDeviceId = closure_133_5.getOutputDeviceId();
            name2 = closure_133_5.getOutputDevices()[outputDeviceId];
            videoDeviceId = closure_133_5.getVideoDeviceId();
            name3 = closure_133_5.getVideoDevices()[videoDeviceId];
            noise_cancellation_enabled = closure_133_5.getNoiseCancellation();
            const mediaEngine = closure_133_5.getMediaEngine();
            audio_subsystem = mediaEngine.getAudioSubsystem();
            const mediaEngine1 = closure_133_5.getMediaEngine();
            audio_layer = mediaEngine1.getAudioLayer();
            feedback = 2;
            c7 = 1;
            const obj5 = { value: obj9.getKrispModel(), done: false };
            obj9 = closure_133_0(closure_133_1[3]);
            return obj5;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          krisp_nc_model = value;
          closure_2 = c7;
          if (c7 == null) {
            closure_2 = {};
          }
          closure_19 = closure_2;
          output_audio_route_type = closure_19.output_audio_route_type;
          closure_21 = closure_133_3(closure_19, closure_133_2);
          noresponse = c1;
          const track = closure_133_0(closure_133_1[4]).track;
          const tmp14 = closure_133_0(closure_133_1[4]);
          if (c1 == null) {
            noresponse = "no response";
          }
          obj = {
            rating: noresponse,
            category,
            reason_code: noresponse,
            reason_description,
            reason_variant,
            feedback,
            audio_input_mode: settings.mode,
            automatic_audio_input_sensitivity_enabled: settings.modeOptions.autoThreshold,
            audio_input_sensitivity: settings.modeOptions.threshold,
            vad_use_advanced_voice_activity: settings.modeOptions.vadUseKrisp,
            echo_cancellation_enabled: settings.echoCancellation,
            noise_suppression_enabled: settings.noiseSuppression,
            automatic_gain_control_enabled: settings.automaticGainControl,
            voice_output_volume: settings.outputVolume,
            noise_cancellation_enabled,
            input_device_name: name,
            output_device_name: name1,
            video_device_name: name2,
            audio_subsystem,
            audio_layer,
            automatic_audio_subsystem: settings.automaticAudioSubsystem,
            krisp_nc_model,
            audio_output_mode: output_audio_route_type,
          };
          name = undefined;
          if (name != null) {
            name = name.name;
          }
          name1 = undefined;
          if (name2 != null) {
            name1 = name2.name;
          }
          name2 = undefined;
          if (name3 != null) {
            name2 = name3.name;
          }
          const merged = Object.assign(closure_21);
          track(closure_0, obj);
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp48) {
        c7 = 3;
        throw tmp48;
      }
    }
  });
  return obj(...arguments);
};
let closure_2 = ["output_audio_route_type"];
const result = size.fileFinishedImporting("modules/voice_calls/trackVoiceFeedback.tsx");

export default function trackVoiceFeedback() {
  return obj(...arguments);
}
