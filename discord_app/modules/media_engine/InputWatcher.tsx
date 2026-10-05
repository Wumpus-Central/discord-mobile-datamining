// discord_app/modules/media_engine/InputWatcher.tsx
import logger_Logger from "../../../discord_common/js/packages/logger/Logger.tsx";
import Constants from "../go_live/Constants.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5;

let closure_5 = Constants.WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER;
const logger = new logger_Logger.Logger("InputWatcher");
const result = size.fileFinishedImporting("modules/media_engine/InputWatcher.tsx");
class InputWatcher {
  constructor(mediaEngine, mediaEngineStore) {
    let obj = Object.create(new.target.prototype);
    const timeout = new obj(2046).Timeout();
    obj.stateChangeTimeout = timeout;
    obj.inputDetected = undefined;
    obj.lastUpdateTime = performance.now();
    obj.fetchInputDeviceOSConfig = _asyncToGenerator(async () => {
      let _Promise;
      let _default;
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
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
        let osVolume;
        let closure_2;
        try {
          let guid;
          let tmp;
          let osMuted;
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
              guid = undefined;
              tmp = undefined;
              closure_2 = undefined;
              osVolume = undefined;
              osMuted = undefined;
              const obj8 = _Promise(closure_2[6]);
              const tmp50 = _Promise;
              if (obj8.isWindows()) {
                const satisfies = tmp(closure_2[7]).satisfies;
                const tmp30 = tmp(closure_2[7]);
                const tmp33 = tmp(closure_2[8]);
                let release;
                if (tmp33 != null) {
                  release = tmp33.os.release;
                }
                if (satisfies(release, c5)) {
                  osVolume = 1;
                  const mediaEngineStore = obj.mediaEngineStore;
                  const mediaEngineStore2 = obj.mediaEngineStore;
                  const inputDeviceId = mediaEngineStore.getInputDeviceId();
                  const tmp39 = mediaEngineStore2.getInputDevices()[inputDeviceId];
                  guid = undefined;
                  if (tmp39 != null) {
                    guid = tmp39.guid;
                  }
                  if (null != guid) {
                    if ("" !== guid) {
                      c4 = 2;
                      c5 = 1;
                      const obj4 = { value: _default.ensureModule("discord_voice"), done: false };
                      _default = tmp50(closure_2[9]).default;
                      return obj4;
                    }
                  }
                  osVolume = 0;
                }
              }
            }
          } else if (1 === c4) {
            osVolume = 0;
            closure_5 = closure_2;
            _Promise = logger;
            const _HermesInternal = HermesInternal;
            logger.warn("Failed to get device OS volume and/or mute state: " + closure_5);
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              osVolume = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              _Promise = Promise;
              const mediaEngine = closure_129_0.mediaEngine;
              const items = [mediaEngine.getDeviceOSVolume(guid)];
              const mediaEngine2 = closure_129_0.mediaEngine;
              items[1] = mediaEngine2.getDeviceOSMuted(guid);
              c4 = 3;
              c5 = 1;
              const obj6 = { value: all(items), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            osVolume = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            closure_2 = osVolume(tmp, 2);
            osVolume = closure_2[0];
            osMuted = closure_2[1];
            _Promise = tmp(closure_2[10]);
            obj = { type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume, osMuted };
            _Promise.dispatch(obj);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp42) {
          closure_2 = tmp42;
          if (0 === osVolume) {
            c5 = 3;
            throw tmp42;
          } else {
            c4 = 1;
          }
        }
      }
    });
    obj.handleSilence = function handleSilence(arg0) {
      let closure_0 = arg0;
      let closure_1 = obj;
      let closure_2 = !arg0;
      const stateChangeTimeout = obj.stateChangeTimeout;
      let num = 5000;
      const start = stateChangeTimeout.start;
      if (!arg0) {
        num = 1500;
      }
      start(
        num,
        _asyncToGenerator(async () => {
          let inputDetected;
          let v1;
          if (inputDetected === 2) {
            inputDetected = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
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
                  closure_0 = tmp3;
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
              const obj2 = v1(inputDetected[10]);
              obj2.dispatch(obj6);
              inputDetected = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp11) {
              inputDetected = 3;
              throw tmp11;
            }
          }
        }),
      );
    };
    obj.mediaEngine = mediaEngine;
    obj.mediaEngineStore = mediaEngineStore;
    mediaEngine = obj.mediaEngine;
    mediaEngine.on(obj(4945).MediaEngineEvent.Silence, obj.handleSilence);
    return obj;
  }
  reset() {
    const self = this;
    const stateChangeTimeout = this.stateChangeTimeout;
    stateChangeTimeout.stop();
    if (null != this.inputDetected) {
      self.handleSilence(!self.inputDetected);
    }
    self.inputDetected = undefined;
  }
}
const prototype = InputWatcher.prototype;

export default InputWatcher;
