// discord_app/modules/media_engine/InputWatcher.tsx
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER as closure_5 } from "../go_live/Constants.tsx";

const require = arg1;
const logger = new require("log").Logger("InputWatcher");
const result = require("set").fileFinishedImporting("modules/media_engine/InputWatcher.tsx");
class InputWatcher {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    timeout = new require("start").Timeout();
    obj.stateChangeTimeout = timeout;
    obj.inputDetected = undefined;
    obj.lastUpdateTime = performance.now();
    closure_0 = obj;
    obj.fetchInputDeviceOSConfig = closure_4(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let guid = tmp29;
              guid = undefined;
              closure_1 = undefined;
              dependencyMap = undefined;
              closure_3 = undefined;
              c4 = undefined;
              if (obj10.isWindows()) {
                let obj5 = closure_1_1(closure_1_2[7]);
                const tmp36 = closure_1_1(closure_1_2[8]);
                let release;
                if (tmp36 != null) {
                  release = tmp36.os.release;
                }
                if (obj5.satisfies(release, closure_5)) {
                  closure_3 = 1;
                  const mediaEngineStore = closure_1_0.mediaEngineStore;
                  const mediaEngineStore2 = closure_1_0.mediaEngineStore;
                  const inputDeviceId = mediaEngineStore.getInputDeviceId();
                  const tmp42 = mediaEngineStore2.getInputDevices()[inputDeviceId];
                  guid = undefined;
                  if (tmp42 != null) {
                    guid = tmp42.guid;
                  }
                  if (null != guid) {
                    if ("" !== guid) {
                      c4 = 2;
                      c5 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = tmp55(closure_1_2[9]).default.ensureModule("discord_voice");
                      return obj1;
                    }
                  }
                  closure_3 = 0;
                  closure_3 = 0;
                  c5 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                }
              }
              obj10 = closure_1_0(closure_1_2[6]);
              tmp55 = closure_1_0;
            }
          } else if (1 === tmp7) {
            closure_3 = 0;
            closure_5 = dependencyMap;
            const _HermesInternal = HermesInternal;
            closure_1_6.warn("Failed to get device OS volume and/or mute state: " + closure_5);
            tmp29 = closure_1_6;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              closure_3 = 0;
              c5 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              const mediaEngine = guid.mediaEngine;
              const items = [mediaEngine.getDeviceOSVolume(guid), ];
              const mediaEngine2 = guid.mediaEngine;
              items[1] = mediaEngine2.getDeviceOSMuted(guid);
              c4 = 3;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = Promise.all(items);
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1 = arg1;
            dependencyMap = v0(closure_1, 2);
            closure_3 = 32;
            c4 = 5;
            obj = closure_1_1(closure_1_2[10]);
            obj5 = { type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: null, osMuted: null };
            obj5[1] = closure_3;
            obj5[2] = c4;
            obj.dispatch(obj5);
          }
          c5 = 3;
        } catch (tmp45) {
          dependencyMap = tmp45;
          if (tmp4 === closure_3) {
            c5 = tmp2;
            throw tmp45;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    obj.handleSilence = function handleSilence(arg0) {
      closure_1 = obj;
      closure_2 = !arg0;
      const stateChangeTimeout = obj.stateChangeTimeout;
      let num = 5000;
      if (!arg0) {
        num = 1500;
      }
      stateChangeTimeout.start(num, closure_1_4(function*() {
        if (table === 2) {
          table = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            table = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                table = 3;
                throw arg1;
              } else if (arg0 === 2) {
                table = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp4;
                closure_1_6.info("Silence:", closure_1_0);
                v0.inputDetected = table;
                const _performance = performance;
                v0.lastUpdateTime = performance.now();
                if (closure_1_0) {
                  v0 = 1;
                  table = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = v0.fetchInputDeviceOSConfig();
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            obj1 = v0(table[10]);
            const obj2 = { type: "AUDIO_INPUT_DETECTED", inputDetected: null, lastUpdateTime: null };
            obj2[1] = v0.inputDetected;
            obj2[2] = v0.lastUpdateTime;
            obj1.dispatch(obj2);
            table = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } catch (tmp12) {
            table = tmp;
            throw tmp12;
          }
        }
      }));
    };
    obj.mediaEngine = global;
    obj.mediaEngineStore = arg1;
    mediaEngine = obj.mediaEngine;
    onResult = mediaEngine.on(require("BaseConnectionEvent").MediaEngineEvent.Silence, obj.handleSilence);
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