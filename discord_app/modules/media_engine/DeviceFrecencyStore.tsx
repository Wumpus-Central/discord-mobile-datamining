// discord_app/modules/media_engine/DeviceFrecencyStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FrecencyDefault from "../../lib/Frecency.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const Constants = fn(4585);
const DeviceTypes = Constants.DeviceTypes;
({ MediaEngineContextTypes: hasOwnProperty, SpeakingFlags: metroRequire } = Constants);
let closure_7 = {
  inputDeviceFrecency: DeviceTypes.AUDIO_INPUT,
  outputDeviceFrecency: DeviceTypes.AUDIO_OUTPUT,
  videoDeviceFrecency: DeviceTypes.VIDEO_INPUT,
};
let obj = {
  afterCompute() {},
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  maxSamples: 256,
  numFrequentlyItems: Infinity,
};
obj = {};
const stopWatch = new fn(4589).StopWatch();
obj[DeviceTypes.AUDIO_INPUT] = stopWatch;
const stopWatch1 = new fn(4589).StopWatch();
obj[DeviceTypes.AUDIO_OUTPUT] = stopWatch1;
const stopWatch2 = new fn(4589).StopWatch();
obj[DeviceTypes.VIDEO_INPUT] = stopWatch2;
const dependencyMap = { [DeviceTypes.AUDIO_INPUT]: {}, [DeviceTypes.AUDIO_OUTPUT]: {}, [DeviceTypes.VIDEO_INPUT]: {} };
obj = {};
obj[DeviceTypes.AUDIO_INPUT] = new FrecencyDefault(obj);
const tmp6 = new FrecencyDefault(obj);
obj[DeviceTypes.AUDIO_OUTPUT] = new FrecencyDefault(obj);
const tmp7 = new FrecencyDefault(obj);
obj[DeviceTypes.VIDEO_INPUT] = new FrecencyDefault(obj);
const PersistedStore = initializeDefault.PersistedStore;
class DeviceFrecencyStore extends PersistedStore {}
const prototype = DeviceFrecencyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  closure_0 = arg0;
  this.waitFor(MediaEngineStore, UserStore);
  const items = [, ,];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  const item = items.forEach((item) => {
    let tmp2;
    if (closure_0 != null) {
      tmp2 = tmp[item];
    }
    if (null != tmp2) {
      obj[item].overwriteHistory(tmp[item]);
    }
    obj[item].reset();
  });
};
prototype["reset"] = function reset() {
  const items = [, ,];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  const item = items.forEach((item) => {
    obj[item].reset();
    dependencyMap[item] = {};
  });
};
prototype["track"] = function track(arg0, arg1, usesSinceLastTrack) {
  if (null == dependencyMap[arg0][arg1]) {
    tmp[arg0][arg1] = 0;
  }
  dependencyMap[arg0][arg1] = dependencyMap[arg0][arg1] + usesSinceLastTrack;
  obj = { usesSinceLastTrack };
  obj.track(arg1, obj);
};
prototype["isSampling"] = function isSampling(AUDIO_OUTPUT) {
  return obj[AUDIO_OUTPUT].isRunning();
};
prototype["startSampling"] = function startSampling(AUDIO_OUTPUT) {
  obj[AUDIO_OUTPUT].start();
};
prototype["stopSampling"] = function stopSampling(AUDIO_OUTPUT, oldId) {
  obj = obj[AUDIO_OUTPUT];
  obj.stop();
  const asMillisecondsResult = obj.elapsed().asMilliseconds();
  if (asMillisecondsResult > 0) {
    let currentDeviceId = oldId;
    if (oldId == null) {
      obj = {};
      obj = {
        getCurrentDeviceId(getInputDeviceId) {
          return getInputDeviceId.getInputDeviceId();
        },
      };
      obj[DeviceTypes.AUDIO_INPUT] = obj;
      const obj1 = {
        getCurrentDeviceId(getOutputDeviceId) {
          return getOutputDeviceId.getOutputDeviceId();
        },
      };
      obj[DeviceTypes.AUDIO_OUTPUT] = obj1;
      const obj2 = {
        getCurrentDeviceId(getVideoDeviceId) {
          return getVideoDeviceId.getVideoDeviceId();
        },
      };
      obj[DeviceTypes.VIDEO_INPUT] = obj2;
      currentDeviceId = obj[AUDIO_OUTPUT].getCurrentDeviceId(MediaEngineStore);
    }
    const self = this;
    this.track(AUDIO_OUTPUT, currentDeviceId, asMillisecondsResult);
  }
  obj.reset();
};
prototype["getState"] = function getState() {
  obj = {
    [closure_1_4.AUDIO_INPUT]: obj[DeviceTypes.AUDIO_INPUT].usageHistory,
    [closure_1_4.AUDIO_OUTPUT]: obj[DeviceTypes.AUDIO_OUTPUT].usageHistory,
    [closure_1_4.VIDEO_INPUT]: obj[DeviceTypes.VIDEO_INPUT].usageHistory,
  };
  return obj;
};
prototype["getDeviceIdsSortedByFrecency"] = function getDeviceIdsSortedByFrecency(arg0) {
  return obj[arg0].frequently;
};
prototype["getUsageStats"] = function getUsageStats() {
  const self = this;
  obj = { [closure_4.AUDIO_INPUT]: [], [closure_4.AUDIO_OUTPUT]: [], [closure_4.VIDEO_INPUT]: [] };
  const items = [,];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1] } = DeviceTypes);
  const item = items.forEach((item) => {
    if (self.isSampling(item)) {
      obj.stopSampling(item);
      obj.startSampling(item);
    }
    self[item] = Object.entries(closure_9[item]);
  });
  obj = {
    duration_input_device_used_ids: obj[DeviceTypes.AUDIO_INPUT].map((item) => {
      [tmp] = item;
      return tmp;
    }),
    duration_input_device_used_ms: obj[DeviceTypes.AUDIO_INPUT].map((item) => {
      [, tmp] = item;
      return tmp;
    }),
    duration_output_device_used_ids: obj[DeviceTypes.AUDIO_OUTPUT].map((item) => {
      [tmp] = item;
      return tmp;
    }),
    duration_output_device_used_ms: obj[DeviceTypes.AUDIO_OUTPUT].map((item) => {
      [, tmp] = item;
      return tmp;
    }),
  };
  return obj;
};
DeviceFrecencyStore.displayName = "DeviceFrecencyStore";
DeviceFrecencyStore.persistKey = "DeviceFrecencyStore";
let items = [(arg0) => _modDef12.mapKeys(arg0, (arg0, arg1) => closure_1_7[arg1])];
DeviceFrecencyStore.migrations = items;
const deviceFrecencyStore = new DeviceFrecencyStore(DispatcherDefault, {
  AUDIO_SET_INPUT_DEVICE(oldId) {
    const AUDIO_INPUT = DeviceTypes.AUDIO_INPUT;
    if (deviceFrecencyStore.isSampling(AUDIO_INPUT)) {
      obj.stopSampling(AUDIO_INPUT, oldId.oldId);
      obj.startSampling(AUDIO_INPUT);
    }
    return false;
  },
  AUDIO_SET_OUTPUT_DEVICE(oldId) {
    const AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
    if (deviceFrecencyStore.isSampling(AUDIO_OUTPUT)) {
      obj.stopSampling(AUDIO_OUTPUT, oldId.oldId);
      obj.startSampling(AUDIO_OUTPUT);
    }
    return false;
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE(oldId) {
    const VIDEO_INPUT = DeviceTypes.VIDEO_INPUT;
    if (deviceFrecencyStore.isSampling(VIDEO_INPUT)) {
      obj.stopSampling(VIDEO_INPUT, oldId.oldId);
      obj.startSampling(VIDEO_INPUT);
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
            obj2.startSampling(AUDIO_OUTPUT);
          }
          obj2 = deviceFrecencyStore;
        }
        return false;
      }
    }
  },
  RTC_CONNECTION_CLIENT_CONNECT: function handleConnect() {
    deviceFrecencyStore.reset();
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/DeviceFrecencyStore.tsx");

export default deviceFrecencyStore;
