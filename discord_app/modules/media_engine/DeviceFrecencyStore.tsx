// === Module 4924: DeviceFrecencyStore ===

// Module 4924 (DeviceFrecencyStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import TimeUtils from "TimeUtils" /* 4925 */;
import FrecencyDefault from "Frecency" /* 4933 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 4921 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
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
let AUDIO_INPUT = DeviceTypes.AUDIO_INPUT;
const stopWatch = new TimeUtils.StopWatch();
obj2[AUDIO_INPUT] = stopWatch;
let AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
const stopWatch1 = new TimeUtils.StopWatch();
obj2[AUDIO_OUTPUT] = stopWatch1;
let VIDEO_INPUT = DeviceTypes.VIDEO_INPUT;
const stopWatch2 = new TimeUtils.StopWatch();
obj2[VIDEO_INPUT] = stopWatch2;
const React4 = { [DeviceTypes.AUDIO_INPUT]: {}, [DeviceTypes.AUDIO_OUTPUT]: {}, [DeviceTypes.VIDEO_INPUT]: {} };
let obj3 = {};
const AUDIO_INPUT2 = DeviceTypes.AUDIO_INPUT;
obj3[AUDIO_INPUT2] = new FrecencyDefault(obj);
const AUDIO_OUTPUT2 = DeviceTypes.AUDIO_OUTPUT;
new FrecencyDefault(obj);
obj3[AUDIO_OUTPUT2] = new FrecencyDefault(obj);
const VIDEO_INPUT2 = DeviceTypes.VIDEO_INPUT;
new FrecencyDefault(obj);
obj3[VIDEO_INPUT2] = new FrecencyDefault(obj);
const tmp8 = new FrecencyDefault(obj);
const PersistedStore = get_initializedDefault.PersistedStore;
class DeviceFrecencyStore extends PersistedStore {
  initialize(arg0) {
    let closure_0 = arg0;
    this.waitFor(MediaEngineStore, UserStore);
    const items = [, , ];
    ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
    const item = items.forEach((item) => {
      let tmp2;
      if (closure_0 != null) {
        tmp2 = closure_0[item];
      }
      if (null != tmp2) {
        const obj = obj3[item];
        obj.overwriteHistory(closure_0[item]);
      }
      obj2[item].reset();
    });
  }
  reset() {
    const items = [, , ];
    ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
    const item = items.forEach((item) => {
      const obj = obj2[item];
      obj.reset();
      closure_1_9[item] = {};
    });
  }
  track(arg0, arg1, usesSinceLastTrack) {
    if (null == closure_9[arg0][arg1]) {
      closure_9[arg0][arg1] = 0;
    }
    closure_9[arg0][arg1] = closure_9[arg0][arg1] + usesSinceLastTrack;
    const obj = obj3[arg0];
    obj2 = { usesSinceLastTrack };
    obj.track(arg1, obj2);
  }
  isSampling(AUDIO_OUTPUT) {
    const obj = obj2[AUDIO_OUTPUT];
    return obj.isRunning();
  }
  startSampling(AUDIO_OUTPUT) {
    const obj = obj2[AUDIO_OUTPUT];
    obj.start();
  }
  stopSampling(AUDIO_OUTPUT, oldId) {
    obj2[AUDIO_OUTPUT].stop();
    const elapsedResult = obj2[AUDIO_OUTPUT].elapsed();
    const asMillisecondsResult = elapsedResult.asMilliseconds();
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
        const obj7 = obj2[AUDIO_OUTPUT];
        currentDeviceId = obj7.getCurrentDeviceId(MediaEngineStore);
      }
      const self = this;
      this.track(AUDIO_OUTPUT, currentDeviceId, asMillisecondsResult);
    }
    obj2[AUDIO_OUTPUT].reset();
  }
  getState() {
    return { [closure_1_4.AUDIO_INPUT]: obj3[DeviceTypes.AUDIO_INPUT].usageHistory, [closure_1_4.AUDIO_OUTPUT]: obj3[DeviceTypes.AUDIO_OUTPUT].usageHistory, [closure_1_4.VIDEO_INPUT]: obj3[DeviceTypes.VIDEO_INPUT].usageHistory };
  }
  getDeviceIdsSortedByFrecency(arg0) {
    return obj3[arg0].frequently;
  }
  getUsageStats() {
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
      duration_input_device_used_ids: arr2.map((item) => {
        let tmp;
        [tmp, ] = item;
        return tmp;
      }),
      duration_input_device_used_ms: arr3.map((item) => {
        let tmp;
        [, tmp] = item;
        return tmp;
      }),
      duration_output_device_used_ids: arr4.map((item) => {
        let tmp;
        [tmp, ] = item;
        return tmp;
      }),
      duration_output_device_used_ms: arr5.map((item) => {
        let tmp;
        [, tmp] = item;
        return tmp;
      })
    };
    return obj2;
  }
}
const prototype = DeviceFrecencyStore.prototype;
DeviceFrecencyStore.displayName = "DeviceFrecencyStore";
DeviceFrecencyStore.persistKey = "DeviceFrecencyStore";
let items = [
  (arg0) => {
    const obj = _modDef12;
    return obj.mapKeys(arg0, (arg0, arg1) => closure_1_7[arg1]);
  }
];
DeviceFrecencyStore.migrations = items;
let obj4 = {
  AUDIO_SET_INPUT_DEVICE(oldId) {
    const AUDIO_INPUT = DeviceTypes.AUDIO_INPUT;
    oldId = oldId.oldId;
    if (deviceFrecencyStore.isSampling(AUDIO_INPUT)) {
      deviceFrecencyStore.stopSampling(AUDIO_INPUT, oldId);
      deviceFrecencyStore.startSampling(AUDIO_INPUT);
    }
    return false;
  },
  AUDIO_SET_OUTPUT_DEVICE(oldId) {
    const AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
    oldId = oldId.oldId;
    if (deviceFrecencyStore.isSampling(AUDIO_OUTPUT)) {
      deviceFrecencyStore.stopSampling(AUDIO_OUTPUT, oldId);
      deviceFrecencyStore.startSampling(AUDIO_OUTPUT);
    }
    return false;
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE(oldId) {
    const VIDEO_INPUT = DeviceTypes.VIDEO_INPUT;
    oldId = oldId.oldId;
    if (deviceFrecencyStore.isSampling(VIDEO_INPUT)) {
      deviceFrecencyStore.stopSampling(VIDEO_INPUT, oldId);
      deviceFrecencyStore.startSampling(VIDEO_INPUT);
    }
    return false;
  },
  SPEAKING: function handleSpeaking(speakingFlags) {
    speakingFlags = speakingFlags.speakingFlags;
    if (speakingFlags.context !== hasOwnProperty.DEFAULT) {
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
        let AUDIO_OUTPUT;
        if (tmp === id) {
          AUDIO_OUTPUT = DeviceTypes.AUDIO_INPUT;
        } else {
          AUDIO_OUTPUT = DeviceTypes.AUDIO_OUTPUT;
        }
        if (speakingFlags === metroRequire.NONE) {
          if (deviceFrecencyStore.isSampling(AUDIO_OUTPUT)) {
            deviceFrecencyStore.stopSampling(AUDIO_OUTPUT);
          }
        }
        if (speakingFlags !== metroRequire.NONE) {
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
};
const deviceFrecencyStore = new DeviceFrecencyStore(DispatcherDefault, obj4);
const result = size.fileFinishedImporting("modules/media_engine/DeviceFrecencyStore.tsx");

export default deviceFrecencyStore;