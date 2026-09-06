// discord_app/modules/noise_cancellation/queryAudioEffects.tsx
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_6 = async function _queryAudioEffects(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = closure_1;
          closure_131_1 = undefined;
          if (obj13.isWindows()) {
            c6 = 1;
            c7 = 2;
            c8 = 1;
            const obj1 = { value: obj12.getDeviceAudioEffects(tmp46), done: false };
            return obj1;
          } else {
            const _Error = Error;
            const error = new Error("Audio effects querying not supported on non-Windows platforms");
            c8 = 3;
            let obj2 = { value: Promise.reject(error), done: true };
            return obj2;
          }
          obj12 = closure_2;
          obj13 = utils_PlatformUtils;
          tmp46 = closure_0;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_131_2 = closure_5;
        closure_132_5.error("Failed to probe audio effects for device", closure_131_2);
        obj2 = closure_132_1(closure_132_2[5]);
        obj2.track(closure_132_4.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: false });
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_131_1 = value;
        const obj4 = { type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: closure_131_0 };
        const merged = Object.assign(closure_131_1);
        closure_132_1(closure_132_2[4]).dispatch(obj4);
        const obj8 = closure_132_1(closure_132_2[4]);
        const obj5 = {
          succeeded: true,
          active_effects: closure_131_1.active,
          available_effects: closure_131_1.available,
        };
        closure_132_1(closure_132_2[5]).track(closure_132_4.AUDIO_EFFECTS_PROBE_COMPLETED, obj5);
        c6 = 0;
        c8 = 3;
        obj = { value: closure_131_1, done: true };
        return obj;
      }
    } catch (tmp23) {
      closure_5 = tmp23;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp23;
      } else {
        c7 = tmp;
      }
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const logger = new fn(4).Logger("AudioEffects");
const size = fn(2);
const result = size.fileFinishedImporting("modules/noise_cancellation/queryAudioEffects.tsx");

export default function queryAudioEffects() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
