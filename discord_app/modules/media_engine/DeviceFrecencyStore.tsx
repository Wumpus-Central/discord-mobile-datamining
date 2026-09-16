// === Module 4666: DeviceFrecencyStore ===

// Module 4666 (DeviceFrecencyStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FrecencyDefault from "Frecency" /* 4675 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;
import UserStore from "UserStore" /* 1372 */;

const Constants = fn(4663);
const DeviceTypes = Constants.DeviceTypes;
({ MediaEngineContextTypes: hasOwnProperty, SpeakingFlags: metroRequire } = Constants);
let closure_7 = { inputDeviceFrecency: DeviceTypes.AUDIO_INPUT, outputDeviceFrecency: DeviceTypes.AUDIO_OUTPUT, videoDeviceFrecency: DeviceTypes.VIDEO_INPUT };
let obj = {
  afterCompute() {

  },
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  maxSamples: 256,
  numFrequentlyItems: Infinity
};
let obj2 = {};
const stopWatch = new fn(4667).StopWatch();
obj2[DeviceTypes.AUDIO_INPUT] = stopWatch;
const stopWatch1 = new fn(4667).StopWatch();
obj2[DeviceTypes.AUDIO_OUTPUT] = stopWatch1;
const stopWatch2 = new fn(4667).StopWatch();
obj2[DeviceTypes.VIDEO_INPUT] = stopWatch2;
let dependencyMap = { [DeviceTypes.AUDIO_INPUT]: {}, [DeviceTypes.AUDIO_OUTPUT]: {}, [DeviceTypes.VIDEO_INPUT]: {} };
let obj3 = {};
obj3[DeviceTypes.AUDIO_INPUT] = new FrecencyDefault(obj);
const tmp6 = new FrecencyDefault(obj);
obj3[DeviceTypes.AUDIO_OUTPUT] = new FrecencyDefault(obj);
const tmp7 = new FrecencyDefault(obj);
obj3[DeviceTypes.VIDEO_INPUT] = new FrecencyDefault(obj);
const PersistedStore = initializeDefault.PersistedStore;
class DeviceFrecencyStore extends PersistedStore {
}
const prototype = DeviceFrecencyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  dependencyMap = arg0;
  this.waitFor(MediaEngineStore, UserStore);
  const items = [, , ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  const item = items.forEach((item) => {
    let tmp2;
    if (dependencyMap != null) {
      tmp2 = dependencyMap[item];
    }
    if (null != tmp2) {
      obj3[item].overwriteHistory(dependencyMap[item]);
    }
    obj2[item].reset();
  });
};
prototype["reset"] = function reset() {
  const items = [, , ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  const item = items.forEach((item) => {
    obj2[item].reset();
    dependencyMap[item] = {};
  });
};
prototype["track"] = function track(arg0, arg1, usesSinceLastTrack) {
  if (null == dependencyMap[arg0][arg1]) {
    dependencyMap[arg0][arg1] = 0;
  }
  dependencyMap[arg0][arg1] = dependencyMap[arg0][arg1] + usesSinceLastTrack;
  obj3[arg0].track(arg1, { usesSinceLastTrack });
  obj2 = { usesSinceLastTrack };
};
prototype["isSampling"] = function isSampling(AUDIO_OUTPUT) {
  return obj2[AUDIO_OUTPUT].isRunning();
};
prototype["startSampling"] = function startSampling(AUDIO_OUTPUT) {
  obj2[AUDIO_OUTPUT].start();
};
prototype["stopSampling"] = function stopSampling(AUDIO_OUTPUT, oldId) {
  obj2[AUDIO_OUTPUT].stop();
  const asMillisecondsResult = obj2[AUDIO_OUTPUT].elapsed().asMilliseconds();
  if (asMillisecondsResult > 0) {
    let currentDeviceId = oldId;
    if (oldId == null) {
      obj2 = {};
      obj3 = {
        getCurrentDeviceId(getInputDeviceId) {
              return getInputDeviceId.getInputDeviceId();
            }
      };
      obj2[DeviceTypes.AUDIO_INPUT] = obj3;
      const obj4 = {
        getCurrentDeviceId(getOutputDeviceId) {
              return getOutputDeviceId.getOutputDeviceId();
            }
      };
      obj2[DeviceTypes.AUDIO_OUTPUT] = obj4;
      const obj5 = {
        getCurrentDeviceId(getVideoDeviceId) {
              return getVideoDeviceId.getVideoDeviceId();
            }
      };
      obj2[DeviceTypes.VIDEO_INPUT] = obj5;
      currentDeviceId = obj2[AUDIO_OUTPUT].getCurrentDeviceId(MediaEngineStore);
    }
    const self = this;
    this.track(AUDIO_OUTPUT, currentDeviceId, asMillisecondsResult);
  }
  obj2[AUDIO_OUTPUT].reset();
  const elapsedResult = obj2[AUDIO_OUTPUT].elapsed();
};
prototype["getState"] = function getState() {
  return { [closure_1_4.AUDIO_INPUT]: obj3[DeviceTypes.AUDIO_INPUT].usageHistory, [closure_1_4.AUDIO_OUTPUT]: obj3[DeviceTypes.AUDIO_OUTPUT].usageHistory, [closure_1_4.VIDEO_INPUT]: obj3[DeviceTypes.VIDEO_INPUT].usageHistory };
};
prototype["getDeviceIdsSortedByFrecency"] = function getDeviceIdsSortedByFrecency(arg0) {
  return obj3[arg0].frequently;
};
prototype["getUsageStats"] = function getUsageStats() {
  const self = this;
  const obj = { [closure_4.AUDIO_INPUT]: [], [closure_4.AUDIO_OUTPUT]: [], [closure_4.VIDEO_INPUT]: [] };
  const items = [, ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1] } = DeviceTypes);
  const item = items.forEach((item) => {
    if (self.isSampling(item)) {
      self.stopSampling(item);
      self.startSampling(item);
    }
    self[item] = Object.entries(closure_9[item]);
  });
  obj2 = {
    duration_input_device_used_ids: obj[DeviceTypes.AUDIO_INPUT].map((item) => {
      [tmp, ] = item;
      return tmp;
    }),
    duration_input_device_used_ms: obj[DeviceTypes.AUDIO_INPUT].map((item) => {
      [, tmp] = item;
      return tmp;
    }),
    duration_output_device_used_ids: obj[DeviceTypes.AUDIO_OUTPUT].map((item) => {
      [tmp, ] = item;
      return tmp;
    }),
    duration_output_device_used_ms: obj[DeviceTypes.AUDIO_OUTPUT].map((item) => {
      [, tmp] = item;
      return tmp;
    })
  };
  return obj2;
};
DeviceFrecencyStore.displayName = "DeviceFrecencyStore";
DeviceFrecencyStore.persistKey = "DeviceFrecencyStore";
let items = [(arg0) => _modDef12.mapKeys(arg0, (arg0, arg1) => closure_1_7[arg1])];
DeviceFrecencyStore.migrations = items;
const deviceFrecencyStore = new DeviceFrecencyStore(DispatcherDefault, {
  AUDIO_SET_INPUT_DEVICE(oldId) {
    const AUDIO_INPUT = DeviceTypes.AUDIO_INPUT;
    if (deviceFrecencyStore.isSampling(AUDIO_INPUT)) {
      deviceFrecencyStore.stopSampling(AUDIO_INPUT, oldId.oldId);
      deviceFrecencyStore.startSampling(AUDIO_INPUT);
    }
    return false;
  },
  AUDIO_SET_OUTPUT_DEVICE(oldId) {
    const AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
    if (deviceFrecencyStore.isSampling(AUDIO_OUTPUT)) {
      deviceFrecencyStore.stopSampling(AUDIO_OUTPUT, oldId.oldId);
      deviceFrecencyStore.startSampling(AUDIO_OUTPUT);
    }
    return false;
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE(oldId) {
    const VIDEO_INPUT = DeviceTypes.VIDEO_INPUT;
    if (deviceFrecencyStore.isSampling(VIDEO_INPUT)) {
      deviceFrecencyStore.stopSampling(VIDEO_INPUT, oldId.oldId);
      deviceFrecencyStore.startSampling(VIDEO_INPUT);
    }
    return false;
  },
  SPEAKING: function handleSpeaking(speakingFlags) {
    speakingFlags = speakingFlags.speakingFlags;
    if (speakingFlags.context !== constants.DEFAULT) {
      return false;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (null == id) {
        return false;
      } else {
        if (tmp === id) {
          let AUDIO_OUTPUT = DeviceTypes.AUDIO_INPUT;
        } else {
          AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
        }
        if (speakingFlags === constants2.NONE) {
          if (deviceFrecencyStore.isSampling(AUDIO_OUTPUT)) {
            deviceFrecencyStore.stopSampling(AUDIO_OUTPUT);
          }
        }
        if (speakingFlags !== constants2.NONE) {
          if (!deviceFrecencyStore.isSampling(AUDIO_OUTPUT)) {
            deviceFrecencyStore.startSampling(AUDIO_OUTPUT);
          }
        }
        return false;
      }
    }
  },
  RTC_CONNECTION_CLIENT_CONNECT: function handleConnect() {
    deviceFrecencyStore.reset();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/DeviceFrecencyStore.tsx");

export default deviceFrecencyStore;