// discord_app/modules/noise_cancellation/queryAudioEffects.tsx
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import _modDef13540 from "../../../_runtime/metro/13540__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_6 = async function _queryAudioEffects(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let deviceAudioEffects = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = closure_1;
            closure_131_1 = undefined;
            if (obj15.isWindows()) {
              if (obj5.satisfies(DiscordNativeDefault.os.release, ">=10.0.22000")) {
                c6 = 1;
                c7 = 2;
                c8 = 1;
                const obj6 = { value: deviceAudioEffects.getDeviceAudioEffects(closure_0), done: false };
                return obj6;
              } else {
                const _Error2 = Error;
                const error = new Error("Audio effects querying likely not supported on this Windows version.");
                c8 = 3;
                const obj7 = { value: Promise.reject(error), done: true };
                return obj7;
              }
              obj5 = _modDef13540;
            } else {
              const _Error = Error;
              const error1 = new Error("Audio effects querying not supported on non-Windows platforms");
              c8 = 3;
              const obj8 = { value: Promise.reject(error1), done: true };
              return obj8;
            }
            obj15 = utils_PlatformUtils;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_2 = closure_5;
          closure_132_5.error("Failed to probe audio effects for device", closure_131_2);
          closure_132_1(closure_132_2[7]).track(closure_132_4.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: false });
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_1 = value;
          const obj11 = { type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: closure_131_0 };
          const merged = Object.assign(closure_131_1);
          closure_132_1(closure_132_2[6]).dispatch(obj11);
          const obj10 = closure_132_1(closure_132_2[6]);
          const obj13 = {
            succeeded: true,
            active_effects: closure_131_1.active,
            available_effects: closure_131_1.available,
          };
          closure_132_1(closure_132_2[7]).track(closure_132_4.AUDIO_EFFECTS_PROBE_COMPLETED, obj13);
          c6 = 0;
          c8 = 3;
          const obj = { value: closure_131_1, done: true };
          return obj;
        }
      } catch (tmp31) {
        closure_5 = tmp31;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp31;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
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
