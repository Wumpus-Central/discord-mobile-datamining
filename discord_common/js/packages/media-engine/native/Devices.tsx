// === Module 4618: sanitizeDevices ===

// Module 4618 (sanitizeDevices)
import set from "set" /* 2 */;
import formatDefault from "format" /* 669 */;
import AudioSubsystems from "AudioSubsystems" /* 4549 */;

({ DEFAULT_DEVICE_ID: c3, DeviceTypes: c4 } = AudioSubsystems);
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/Devices.tsx");

export const sanitizeDevices = function sanitizeDevices(AUDIO_INPUT, items) {
  closure_0 = AUDIO_INPUT;
  importDefault = false;
  const mapped = items.map((arg0, arg1) => {
    ({ guid, name, index } = arg0);
    if (VIDEO_INPUT === closure_1_4.VIDEO_INPUT) {
      let obj = /^front/i;
      if (obj.test(name)) {
        let tmp12 = closure_1_3;
        let str2 = "Default";
      }
      let tmp13 = arg1;
      if (null != index) {
        tmp13 = index;
      }
      obj = { id: null, type: null, index: null, name: null, originalName: null, originalId: null, facing: null, hardwareId: null, containerId: null, effects: null, macosTransportType: null, windowsEndpointFormFactor: null, windowsDeviceService: null };
      obj[0] = tmp12;
      obj[1] = tmp10;
      obj[2] = tmp13;
      obj[3] = str2;
      obj[4] = tmp2;
      obj[5] = tmp;
      obj[6] = tmp3;
      obj[7] = tmp4;
      obj[8] = tmp5;
      obj[9] = tmp6;
      obj[10] = tmp7;
      obj[11] = tmp8;
      obj[12] = tmp9;
      return obj;
    }
    if (obj2.test(name)) {
      c1 = true;
      tmp12 = closure_1_3;
      str2 = name.replace("default", "Default");
    } else {
      tmp12 = name;
      if (null != guid) {
        tmp12 = name;
        if ("" !== guid) {
          tmp12 = guid;
        }
      }
      str2 = name;
    }
  });
  let isMatch = AUDIO_INPUT !== constants.VIDEO_INPUT;
  if (isMatch) {
    isMatch = !importDefault;
  }
  if (isMatch) {
    const tmp5 = formatDefault;
    let family;
    if (tmp5 != null) {
      const os = tmp5.os;
      if (os != null) {
        family = os.family;
      }
    }
    isMatch = null != family;
  }
  if (isMatch) {
    let obj = /^win/i;
    isMatch = obj.test(formatDefault.os.family);
  }
  if (isMatch) {
    obj = { id: null, type: null, index: -1, name: "Default" };
    obj[0] = closure_3;
    obj[1] = AUDIO_INPUT;
    mapped.unshift(obj);
  }
  return mapped;
};
export const getAudioInputDevices = function getAudioInputDevices() {
  return new Promise((arg0) => {
    const callback = arg0;
    const voiceEngine = callback(table[2]).getVoiceEngine();
    const inputDevices = voiceEngine.getInputDevices((arr) => {
      const AUDIO_INPUT = closure_1_4.AUDIO_INPUT;
      c1 = false;
      const mapped = arr.map((arg0, arg1) => {
        ({ guid, name, index } = arg0);
        if (VIDEO_INPUT === closure_1_4.VIDEO_INPUT) {
          let obj = /^front/i;
          if (obj.test(name)) {
            let tmp12 = closure_1_3;
            let str2 = "Default";
          }
          let tmp13 = arg1;
          if (null != index) {
            tmp13 = index;
          }
          obj = { id: null, type: null, index: null, name: null, originalName: null, originalId: null, facing: null, hardwareId: null, containerId: null, effects: null, macosTransportType: null, windowsEndpointFormFactor: null, windowsDeviceService: null };
          obj[0] = tmp12;
          obj[1] = tmp10;
          obj[2] = tmp13;
          obj[3] = str2;
          obj[4] = tmp2;
          obj[5] = tmp;
          obj[6] = tmp3;
          obj[7] = tmp4;
          obj[8] = tmp5;
          obj[9] = tmp6;
          obj[10] = tmp7;
          obj[11] = tmp8;
          obj[12] = tmp9;
          return obj;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp12 = closure_1_3;
          str2 = name.replace("default", "Default");
        } else {
          tmp12 = name;
          if (null != guid) {
            tmp12 = name;
            if ("" !== guid) {
              tmp12 = guid;
            }
          }
          str2 = name;
        }
      });
      let isMatch = AUDIO_INPUT !== closure_1_4.VIDEO_INPUT;
      if (isMatch) {
        isMatch = !c1;
      }
      if (isMatch) {
        const tmp6 = closure_1_1(closure_1_2[1]);
        let family;
        if (tmp6 != null) {
          const os = tmp6.os;
          if (os != null) {
            family = os.family;
          }
        }
        isMatch = null != family;
      }
      if (isMatch) {
        let obj = /^win/i;
        isMatch = obj.test(closure_1_1(closure_1_2[1]).os.family);
      }
      if (isMatch) {
        obj = { id: null, type: null, index: -1, name: "Default" };
        obj[0] = closure_1_3;
        obj[1] = AUDIO_INPUT;
        mapped.unshift(obj);
      }
      return AUDIO_INPUT(mapped);
    });
  });
};
export const getAudioOutputDevices = function getAudioOutputDevices() {
  return new Promise((arg0) => {
    const callback = arg0;
    const voiceEngine = callback(table[2]).getVoiceEngine();
    const outputDevices = voiceEngine.getOutputDevices((arr) => {
      const AUDIO_OUTPUT = closure_1_4.AUDIO_OUTPUT;
      c1 = false;
      const mapped = arr.map((arg0, arg1) => {
        ({ guid, name, index } = arg0);
        if (VIDEO_INPUT === closure_1_4.VIDEO_INPUT) {
          let obj = /^front/i;
          if (obj.test(name)) {
            let tmp12 = closure_1_3;
            let str2 = "Default";
          }
          let tmp13 = arg1;
          if (null != index) {
            tmp13 = index;
          }
          obj = { id: null, type: null, index: null, name: null, originalName: null, originalId: null, facing: null, hardwareId: null, containerId: null, effects: null, macosTransportType: null, windowsEndpointFormFactor: null, windowsDeviceService: null };
          obj[0] = tmp12;
          obj[1] = tmp10;
          obj[2] = tmp13;
          obj[3] = str2;
          obj[4] = tmp2;
          obj[5] = tmp;
          obj[6] = tmp3;
          obj[7] = tmp4;
          obj[8] = tmp5;
          obj[9] = tmp6;
          obj[10] = tmp7;
          obj[11] = tmp8;
          obj[12] = tmp9;
          return obj;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp12 = closure_1_3;
          str2 = name.replace("default", "Default");
        } else {
          tmp12 = name;
          if (null != guid) {
            tmp12 = name;
            if ("" !== guid) {
              tmp12 = guid;
            }
          }
          str2 = name;
        }
      });
      let isMatch = AUDIO_OUTPUT !== closure_1_4.VIDEO_INPUT;
      if (isMatch) {
        isMatch = !c1;
      }
      if (isMatch) {
        const tmp6 = closure_1_1(closure_1_2[1]);
        let family;
        if (tmp6 != null) {
          const os = tmp6.os;
          if (os != null) {
            family = os.family;
          }
        }
        isMatch = null != family;
      }
      if (isMatch) {
        let obj = /^win/i;
        isMatch = obj.test(closure_1_1(closure_1_2[1]).os.family);
      }
      if (isMatch) {
        obj = { id: null, type: null, index: -1, name: "Default" };
        obj[0] = closure_1_3;
        obj[1] = AUDIO_OUTPUT;
        mapped.unshift(obj);
      }
      return AUDIO_OUTPUT(mapped);
    });
  });
};
export const getVideoInputDevices = function getVideoInputDevices() {
  return new Promise((arg0) => {
    const callback = arg0;
    const voiceEngine = callback(table[2]).getVoiceEngine();
    const videoInputDevices = voiceEngine.getVideoInputDevices((arr) => {
      const VIDEO_INPUT = closure_1_4.VIDEO_INPUT;
      c1 = false;
      const mapped = arr.map((arg0, arg1) => {
        ({ guid, name, index } = arg0);
        if (VIDEO_INPUT === closure_1_4.VIDEO_INPUT) {
          let obj = /^front/i;
          if (obj.test(name)) {
            let tmp12 = closure_1_3;
            let str2 = "Default";
          }
          let tmp13 = arg1;
          if (null != index) {
            tmp13 = index;
          }
          obj = { id: null, type: null, index: null, name: null, originalName: null, originalId: null, facing: null, hardwareId: null, containerId: null, effects: null, macosTransportType: null, windowsEndpointFormFactor: null, windowsDeviceService: null };
          obj[0] = tmp12;
          obj[1] = tmp10;
          obj[2] = tmp13;
          obj[3] = str2;
          obj[4] = tmp2;
          obj[5] = tmp;
          obj[6] = tmp3;
          obj[7] = tmp4;
          obj[8] = tmp5;
          obj[9] = tmp6;
          obj[10] = tmp7;
          obj[11] = tmp8;
          obj[12] = tmp9;
          return obj;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp12 = closure_1_3;
          str2 = name.replace("default", "Default");
        } else {
          tmp12 = name;
          if (null != guid) {
            tmp12 = name;
            if ("" !== guid) {
              tmp12 = guid;
            }
          }
          str2 = name;
        }
      });
      let isMatch = VIDEO_INPUT !== closure_1_4.VIDEO_INPUT;
      if (isMatch) {
        isMatch = !c1;
      }
      if (isMatch) {
        const tmp6 = closure_1_1(closure_1_2[1]);
        let family;
        if (tmp6 != null) {
          const os = tmp6.os;
          if (os != null) {
            family = os.family;
          }
        }
        isMatch = null != family;
      }
      if (isMatch) {
        let obj = /^win/i;
        isMatch = obj.test(closure_1_1(closure_1_2[1]).os.family);
      }
      if (isMatch) {
        obj = { id: null, type: null, index: -1, name: "Default" };
        obj[0] = closure_1_3;
        obj[1] = VIDEO_INPUT;
        mapped.unshift(obj);
      }
      return VIDEO_INPUT(mapped);
    });
  });
};