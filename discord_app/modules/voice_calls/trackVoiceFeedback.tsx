// discord_app/modules/voice_calls/trackVoiceFeedback.tsx
import closure_3 from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../stores/MediaEngineStore.tsx";

function _trackVoiceFeedback() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    const iter = (function* (arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let store = tmp5;
              c4 = tmp2;
              dependencyMap = undefined;
              closure_2 = undefined;
              let callback2;
              c4 = undefined;
              store = undefined;
              c6 = undefined;
              c7 = undefined;
              ({
                rating: c1,
                category: closure_2,
                reasonCode: c3,
                reasonDescription: c4,
                variant: c5,
                feedback: c6,
                analyticsData: c7,
              } = dependencyMap);
              let settings;
              let inputDeviceId;
              let name;
              let outputDeviceId;
              let name2;
              let videoDeviceId;
              let name3;
              let noiseCancellation;
              let audioSubsystem;
              let audioLayer;
              closure_18 = undefined;
              obj = undefined;
              let output_audio_route_type;
              closure_21 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              settings = store.getSettings();
              inputDeviceId = store.getInputDeviceId();
              name = store.getInputDevices()[inputDeviceId];
              outputDeviceId = store.getOutputDeviceId();
              name2 = store.getOutputDevices()[outputDeviceId];
              videoDeviceId = store.getVideoDeviceId();
              name3 = store.getVideoDevices()[videoDeviceId];
              noiseCancellation = store.getNoiseCancellation();
              const mediaEngine = store.getMediaEngine();
              audioSubsystem = mediaEngine.getAudioSubsystem();
              const mediaEngine1 = store.getMediaEngine();
              audioLayer = mediaEngine1.getAudioLayer();
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback(13810).getKrispModel();
              return obj2;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_18 = arg1;
            closure_2 = c7;
            if (c7 == null) {
              closure_2 = {};
            }
            obj = closure_2;
            output_audio_route_type = obj.output_audio_route_type;
            closure_21 = callback2(obj, closure_2);
            obj = callback(1242);
            callback2 = dependencyMap;
            if (dependencyMap == null) {
              callback2 = "no response";
            }
            const obj4 = {
              rating: null,
              category: null,
              reason_code: null,
              reason_description: null,
              reason_variant: null,
              feedback: null,
              audio_input_mode: null,
              automatic_audio_input_sensitivity_enabled: null,
              audio_input_sensitivity: null,
              vad_use_advanced_voice_activity: null,
              echo_cancellation_enabled: null,
              noise_suppression_enabled: null,
              automatic_gain_control_enabled: null,
              voice_output_volume: null,
              noise_cancellation_enabled: null,
              input_device_name: null,
              output_device_name: null,
              video_device_name: null,
              audio_subsystem: null,
              audio_layer: null,
              automatic_audio_subsystem: null,
              krisp_nc_model: null,
              audio_output_mode: null,
            };
            obj4[0] = callback2;
            obj4[1] = closure_2;
            obj4[2] = callback2;
            obj4[3] = c4;
            obj4[4] = store;
            obj4[5] = c6;
            obj4[6] = settings.mode;
            obj4[7] = settings.modeOptions.autoThreshold;
            obj4[8] = settings.modeOptions.threshold;
            obj4[9] = settings.modeOptions.vadUseKrisp;
            obj4[10] = settings.echoCancellation;
            obj4[11] = settings.noiseSuppression;
            obj4[12] = settings.automaticGainControl;
            obj4[13] = settings.outputVolume;
            obj4[14] = noiseCancellation;
            name = undefined;
            if (name != null) {
              name = name.name;
            }
            obj4[15] = name;
            let name1;
            if (name2 != null) {
              name1 = name2.name;
            }
            obj4[16] = name1;
            name2 = undefined;
            if (name3 != null) {
              name2 = name3.name;
            }
            obj4[17] = name2;
            obj4[18] = audioSubsystem;
            obj4[19] = audioLayer;
            obj4[20] = settings.automaticAudioSubsystem;
            obj4[21] = closure_18;
            obj4[22] = output_audio_route_type;
            const merged = Object.assign(closure_21);
            obj.track(callback, obj4);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp48) {
          c7 = tmp;
          throw tmp48;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_2 = ["output_audio_route_type"];
const result = require("set").fileFinishedImporting("modules/voice_calls/trackVoiceFeedback.tsx");

export default function trackVoiceFeedback() {
  const self = this;
  const apply = _trackVoiceFeedback.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
