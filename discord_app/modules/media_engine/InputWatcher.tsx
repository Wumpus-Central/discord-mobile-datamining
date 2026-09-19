// discord_app/modules/media_engine/InputWatcher.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = fn(4798).WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER;
const logger = new fn(4).Logger("InputWatcher");
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/InputWatcher.tsx");
class InputWatcher {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    timeout = new closure_0(closure_2[4]).Timeout();
    obj.stateChangeTimeout = timeout;
    obj.inputDetected = undefined;
    obj.lastUpdateTime = performance.now();
    closure_129_0 = obj;
    obj.fetchInputDeviceOSConfig = closure_4(async () => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              if (obj10.isWindows()) {
                const tmp36 = tmp3(tmp45[8]);
                let release;
                if (tmp36 != null) {
                  release = tmp36.os.release;
                }
                if (obj6.satisfies(release, c5)) {
                  let v0 = 1;
                  const mediaEngineStore = obj.mediaEngineStore;
                  const mediaEngineStore2 = obj.mediaEngineStore;
                  const inputDeviceId = mediaEngineStore.getInputDeviceId();
                  const tmp42 = mediaEngineStore2.getInputDevices()[inputDeviceId];
                  let guid;
                  if (tmp42 != null) {
                    guid = tmp42.guid;
                  }
                  closure_128_0 = guid;
                  if (null != guid) {
                    if ("" !== guid) {
                      c4 = 2;
                      c5 = 1;
                      const obj4 = { value: logger(tmp45[9]).default.ensureModule("discord_voice"), done: false };
                      return obj4;
                    }
                  }
                  v0 = 0;
                  v0 = 0;
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                }
                obj6 = tmp3(tmp45[7]);
              }
              obj10 = logger(tmp45[6]);
            }
          } else if (1 === tmp7) {
            v0 = 0;
            closure_128_5 = tmp45;
            const _HermesInternal = HermesInternal;
            logger.warn("Failed to get device OS volume and/or mute state: " + closure_128_5);
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const mediaEngine = closure_129_0.mediaEngine;
              const items = [mediaEngine.getDeviceOSVolume(closure_128_0)];
              const mediaEngine2 = closure_129_0.mediaEngine;
              items[1] = mediaEngine2.getDeviceOSMuted(closure_128_0);
              c4 = 3;
              c5 = 1;
              const obj8 = { value: Promise.all(items), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_1 = value;
            closure_128_2 = v0(closure_128_1, 2);
            closure_128_3 = closure_128_2[0];
            closure_128_4 = closure_128_2[1];
            obj = tmp3(tmp45[10]);
            const obj9 = {
              type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED",
              osVolume: closure_128_3,
              osMuted: closure_128_4,
            };
            obj.dispatch(obj9);
          }
          c5 = 3;
        } catch (tmp45) {
          if (tmp4 === v0) {
            c5 = tmp2;
            throw tmp45;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    obj.handleSilence = function handleSilence(arg0) {
      closure_0 = arg0;
      closure_1 = obj;
      closure_2 = !arg0;
      const stateChangeTimeout = obj.stateChangeTimeout;
      let num = 5000;
      if (!arg0) {
        num = 1500;
      }
      stateChangeTimeout.start(
        num,
        asyncGeneratorStep(async () => {
          if (inputDetected === 2) {
            inputDetected = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              inputDetected = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  inputDetected = 3;
                  throw value;
                } else if (arg0 === 2) {
                  inputDetected = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_0 = tmp4;
                  logger.info("Silence:", closure_0);
                  v1.inputDetected = inputDetected;
                  const _performance = performance;
                  v1.lastUpdateTime = performance.now();
                  if (closure_0) {
                    v1 = 1;
                    inputDetected = 1;
                    const obj5 = { value: v1.fetchInputDeviceOSConfig(), done: false };
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                inputDetected = 3;
                throw value;
              } else if (arg0 === 2) {
                inputDetected = 3;
                obj = { value, done: true };
                return obj;
              }
              const obj6 = {
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: closure_128_1.inputDetected,
                lastUpdateTime: closure_128_1.lastUpdateTime,
              };
              v1(inputDetected[10]).dispatch(obj6);
              inputDetected = 3;
              return { value: "HermesInternal", done: null };
            } catch (tmp12) {
              inputDetected = tmp;
              throw tmp12;
            }
          }
        }),
      );
    };
    obj.mediaEngine = global;
    obj.mediaEngineStore = fn;
    mediaEngine = obj.mediaEngine;
    onResult = mediaEngine.on(closure_0(closure_2[5]).MediaEngineEvent.Silence, obj.handleSilence);
    return obj;
  }
}
InputWatcher.prototype["reset"] = function reset() {
  const self = this;
  const stateChangeTimeout = this.stateChangeTimeout;
  stateChangeTimeout.stop();
  if (null != this.inputDetected) {
    self.handleSilence(!self.inputDetected);
  }
  self.inputDetected = undefined;
};

export default InputWatcher;
