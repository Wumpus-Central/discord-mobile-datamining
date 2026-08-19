// discord_app/modules/media_engine/DeviceFrecencyStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import DEFAULT_FRECENCYDefault from "../../lib/Frecency.tsx";
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";

const DeviceTypes = DesktopSources.DeviceTypes;
({ MediaEngineContextTypes: c5, SpeakingFlags: closure_6 } = DesktopSources);
let closure_7 = { inputDeviceFrecency: DeviceTypes.AUDIO_INPUT, outputDeviceFrecency: DeviceTypes.AUDIO_OUTPUT, videoDeviceFrecency: DeviceTypes.VIDEO_INPUT };
let obj = {};
const stopWatch = new require("sleep").StopWatch();
obj[DeviceTypes.AUDIO_INPUT] = stopWatch;
const stopWatch1 = new require("sleep").StopWatch();
obj[DeviceTypes.AUDIO_OUTPUT] = stopWatch1;
const stopWatch2 = new require("sleep").StopWatch();
obj[DeviceTypes.VIDEO_INPUT] = stopWatch2;
let closure_9 = { [DeviceTypes.AUDIO_INPUT]: {}, [DeviceTypes.AUDIO_OUTPUT]: {}, [DeviceTypes.VIDEO_INPUT]: {} };
obj = {};
obj[DeviceTypes.AUDIO_INPUT] = new DEFAULT_FRECENCYDefault(obj);
const tmp6 = new DEFAULT_FRECENCYDefault(obj);
obj[DeviceTypes.AUDIO_OUTPUT] = new DEFAULT_FRECENCYDefault(obj);
const tmp7 = new DEFAULT_FRECENCYDefault(obj);
obj[DeviceTypes.VIDEO_INPUT] = new DEFAULT_FRECENCYDefault(obj);
const PersistedStore = initializeDefault.PersistedStore;
class DeviceFrecencyStore extends PersistedStore {
}
const prototype = DeviceFrecencyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  closure_0 = arg0;
  this.waitFor(closure_2, closure_3);
  const items = [, , ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  const item = items.forEach((item, index) => {
    let tmp2;
    if (dependencyMap != null) {
      tmp2 = dependencyMap[item];
    }
    if (null != tmp2) {
      closure_1_10[item].overwriteHistory(dependencyMap[item]);
    }
    closure_1_8[item].reset();
  });
};
prototype["reset"] = function reset() {
  const items = [, , ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  const item = items.forEach((item, index) => {
    table[item].reset();
    closure_9[item] = {};
  });
};
prototype["track"] = function track(arg0, arg1, usesSinceLastTrack) {
  if (null == table[arg0][arg1]) {
    table[arg0][arg1] = 0;
  }
  table[arg0][arg1] = table[arg0][arg1] + usesSinceLastTrack;
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
      obj = { getCurrentDeviceId: null };
      obj[0] = function getCurrentDeviceId(getInputDeviceId) {
        return getInputDeviceId.getInputDeviceId();
      };
      obj[DeviceTypes.AUDIO_INPUT] = obj;
      obj1 = { getCurrentDeviceId: null };
      obj1[0] = function getCurrentDeviceId(getOutputDeviceId) {
        return getOutputDeviceId.getOutputDeviceId();
      };
      obj[DeviceTypes.AUDIO_OUTPUT] = obj1;
      const obj2 = { getCurrentDeviceId: null };
      obj2[0] = function getCurrentDeviceId(getVideoDeviceId) {
        return getVideoDeviceId.getVideoDeviceId();
      };
      obj[DeviceTypes.VIDEO_INPUT] = obj2;
      currentDeviceId = obj[AUDIO_OUTPUT].getCurrentDeviceId(closure_2);
    }
    const self = this;
    this.track(AUDIO_OUTPUT, currentDeviceId, asMillisecondsResult);
  }
  obj.reset();
  const elapsedResult = obj.elapsed();
};
prototype["getState"] = function getState() {
  obj = { [closure_4.AUDIO_INPUT]: obj[DeviceTypes.AUDIO_INPUT].usageHistory, [closure_4.AUDIO_OUTPUT]: obj[DeviceTypes.AUDIO_OUTPUT].usageHistory, [closure_4.VIDEO_INPUT]: obj[DeviceTypes.VIDEO_INPUT].usageHistory };
  return obj;
};
prototype["getDeviceIdsSortedByFrecency"] = function getDeviceIdsSortedByFrecency(arg0) {
  return obj[arg0].frequently;
};
prototype["getUsageStats"] = function getUsageStats() {
  const self = this;
  const items = [, ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1] } = DeviceTypes);
  const item = items.forEach((item, index) => {
    if (self.isSampling(item)) {
      self.stopSampling(item);
      self.startSampling(item);
    }
    self[item] = Object.entries(closure_1_9[item]);
  });
  obj = {
    duration_input_device_used_ids: arr2.map((item, index) => {
      [tmp, ] = item;
      return tmp;
    }),
    duration_input_device_used_ms: arr3.map((item, index) => {
      [, tmp] = item;
      return tmp;
    }),
    duration_output_device_used_ids: arr4.map((item, index) => {
      [tmp, ] = item;
      return tmp;
    }),
    duration_output_device_used_ms: arr5.map((item, index) => {
      [, tmp] = item;
      return tmp;
    })
  };
  return obj;
};
DeviceFrecencyStore.displayName = "DeviceFrecencyStore";
DeviceFrecencyStore.persistKey = "DeviceFrecencyStore";
let items = [(arg0) => applyDefault.mapKeys(arg0, (arg0, arg1) => table[arg1])];
DeviceFrecencyStore.migrations = items;
const deviceFrecencyStore = new DeviceFrecencyStore(dispatcherDefault, {
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
      currentUser = currentUser.getCurrentUser();
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
const tmp8 = new DEFAULT_FRECENCYDefault(obj);
const result = require("obj132").fileFinishedImporting("modules/media_engine/DeviceFrecencyStore.tsx");

export default deviceFrecencyStore;