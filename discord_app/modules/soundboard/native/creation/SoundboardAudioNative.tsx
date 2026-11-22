// === Module 19797: SoundboardAudioNative ===

// Module 19797 (SoundboardAudioNative)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import DeviceUtils from "DeviceUtils" /* 4870 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function getSoundManager() {
  return NativeModules.DCDSoundManager;
}
function hasSoundboardAudioMethods(loadSoundboardAudioPreview) {
  let prop;
  if (loadSoundboardAudioPreview != null) {
    prop = loadSoundboardAudioPreview.loadSoundboardAudioPreview;
  }
  return null != prop && null != loadSoundboardAudioPreview.trimSoundboardAudio;
}
let closure_8 = async function _checkOpusEncoderAvailable(arg0) {
  let opusEncoderAvailable = arg0;
  c2 = 0;
  c1 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null == opusEncoderAvailable.isOpusEncoderAvailable) {
            c1 = 3;
            return { value: false, done: true };
          } else {
            c3 = 1;
            c2 = 2;
            c1 = 1;
            const obj5 = { value: opusEncoderAvailable.isOpusEncoderAvailable(), done: false };
            return obj5;
          }
        } else if (1 === tmp6) {
          c3 = 0;
          c1 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c1 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 0;
          c1 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        if (tmp3 === c3) {
          c1 = tmp2;
          throw tmp7;
        } else {
          c2 = tmp;
        }
      }
    }
  })();
};
function isSoundboardSoundCreationSupported() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _isSoundboardSoundCreationSupported() {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const tmp20 = getSoundManager();
          let tmp7 = null == tmp20;
          if (!tmp7) {
            tmp7 = !hasSoundboardAudioMethods(tmp20);
          }
          if (tmp7) {
            c0 = 3;
            const obj5 = { value: tmp8, done: true };
            return obj5;
          } else {
            let isIOSResult = PlatformUtils.isIOS();
            if (!isIOSResult) {
              let tmp5 = DeviceUtils.getSystemVersionMajor() >= 29;
              const tmp9Result = DeviceUtils;
            }
            if (value == null) {
              value = (function checkOpusEncoderAvailable() {
                const self = this;
                const apply = closure_1_8.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(tmp20);
            }
            c1 = 1;
            c0 = 1;
            const obj6 = { value, done: false };
            return obj6;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      isIOSResult = tmp5;
    } catch (tmp14) {
      c0 = tmp;
      throw tmp14;
    }
  }
};
const NativeModules = fn(17).NativeModules;
let c9 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardAudioNative.tsx");

export const MAX_SOUNDBOARD_SOURCE_DURATION_MS = 60000;
export const WAVEFORM_BAR_COUNT = 64;
export { isSoundboardSoundCreationSupported };
export function useIsSoundboardSoundCreationSupported() {
  [tmp2, require] = noop.useState(() => {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      DCDSoundManager = DCDSoundManager.DCDSoundManager;
      let prop;
      if (DCDSoundManager != null) {
        prop = DCDSoundManager.loadSoundboardAudioPreview;
      }
      isIOSResult = null != prop && null != DCDSoundManager.trimSoundboardAudio;
      const tmp5 = null != prop && null != DCDSoundManager.trimSoundboardAudio;
    }
    return isIOSResult;
  });
  const effect = noop.useEffect(() => {
    closure_1 = async function _check() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: isSoundboardSoundCreationSupported(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (closure_129_0) {
              tmp2(closure_128_0);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    };
    c0 = true;
    (function check() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      c0 = false;
    };
  }, []);
  return tmp2;
}
export function loadSoundboardAudioPreview(c4, WAVEFORM_BAR_COUNT) {
  const DCDSoundManager = NativeModules.DCDSoundManager;
  let prop;
  if (DCDSoundManager != null) {
    prop = DCDSoundManager.loadSoundboardAudioPreview;
  }
  if (null == prop) {
    const _Error = Error;
    const error = new Error("DCDSoundManager.loadSoundboardAudioPreview is unavailable");
    let rejectResult = Promise.reject(error);
  } else {
    rejectResult = prop(c4, WAVEFORM_BAR_COUNT);
  }
  return rejectResult;
}
export function trimSoundboardAudio(uri, startMs) {
  const DCDSoundManager = NativeModules.DCDSoundManager;
  let trimSoundboardAudio;
  if (DCDSoundManager != null) {
    trimSoundboardAudio = DCDSoundManager.trimSoundboardAudio;
  }
  if (null == trimSoundboardAudio) {
    const _Error = Error;
    const error = new Error("DCDSoundManager.trimSoundboardAudio is unavailable");
    let rejectResult = Promise.reject(error);
  } else {
    rejectResult = trimSoundboardAudio(uri, startMs.startMs, startMs.endMs);
  }
  return rejectResult;
}