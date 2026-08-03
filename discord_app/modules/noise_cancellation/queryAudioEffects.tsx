// === Module 13042: _queryAudioEffects ===

// Module 13042 (_queryAudioEffects)
import expandEventProperties from "expandEventProperties";
import { AnalyticEvents } from "ME";

const require = arg1;
function _queryAudioEffects() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const constants = tmp3;
              let expandEventProperties = tmp7;
              const callback = lib;
              lib = undefined;
              if (obj13.isWindows()) {
                let c6 = 1;
                c7 = 2;
                c8 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = obj12.getDeviceAudioEffects(tmp47);
                return obj1;
              } else {
                const _Error = Error;
                const error = new Error("Audio effects querying not supported on non-Windows platforms");
                c8 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = Promise.reject(error);
                return obj2;
              }
              obj12 = dependencyMap;
              obj13 = callback(501);
              tmp47 = callback;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            dependencyMap = logger;
            logger.error("Failed to probe audio effects for device", dependencyMap);
            obj2 = lib(698);
            obj2.track(constants.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: false });
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            const obj4 = { type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: null };
            obj4[1] = callback;
            const merged = Object.assign(lib);
            lib(709).dispatch(obj4);
            const obj8 = lib(709);
            const obj5 = { succeeded: true, active_effects: null, available_effects: null };
            obj5[1] = lib.active;
            obj5[2] = lib.available;
            lib(698).track(constants.AUDIO_EFFECTS_PROBE_COMPLETED, obj5);
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = lib;
            return obj;
          }
        } catch (tmp23) {
          logger = tmp23;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp23;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _queryAudioEffects = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let logger = new require("dispatcher").Logger("AudioEffects");
const result = require("log").fileFinishedImporting("modules/noise_cancellation/queryAudioEffects.tsx");

export default function queryAudioEffects() {
  const self = this;
  const apply = _queryAudioEffects.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};