// discord_common/js/packages/media-engine/native/Devices.tsx
import formatDefault from "../../../../../_runtime/01341_format.js";
import Constants from "Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ DEFAULT_DEVICE_ID: c3, DeviceTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/Devices.tsx");

export const sanitizeDevices = function sanitizeDevices(AUDIO_INPUT, items) {
  closure_0 = AUDIO_INPUT;
  importDefault = false;
  const mapped = items.map((item, index) => {
    ({ guid, name, index } = item);
    if (VIDEO_INPUT === constants.VIDEO_INPUT) {
      let obj = /^front/i;
      if (obj.test(name)) {
        let tmp12 = id;
        let str2 = "Default";
      }
      let tmp13 = index;
      if (null != index) {
        tmp13 = index;
      }
      obj = {
        id: tmp12,
        type: tmp10,
        index: tmp13,
        name: str2,
        originalName: tmp2,
        originalId: tmp,
        facing: tmp3,
        hardwareId: tmp4,
        containerId: tmp5,
        effects: tmp6,
        macosTransportType: tmp7,
        windowsEndpointFormFactor: tmp8,
        windowsDeviceService: tmp9,
      };
      return obj;
    }
    if (obj2.test(name)) {
      c1 = true;
      tmp12 = id;
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
    obj = { id, type: AUDIO_INPUT, index: -1, name: "Default" };
    mapped.unshift(obj);
  }
  return mapped;
};
export const getAudioInputDevices = function getAudioInputDevices() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const voiceEngine = closure_0(1910).getVoiceEngine();
    const inputDevices = voiceEngine.getInputDevices((arr) => {
      const AUDIO_INPUT = constants.AUDIO_INPUT;
      c1 = false;
      const mapped = arr.map((item, index) => {
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          let obj = /^front/i;
          if (obj.test(name)) {
            let tmp12 = id;
            let str2 = "Default";
          }
          let tmp13 = index;
          if (null != index) {
            tmp13 = index;
          }
          obj = {
            id: tmp12,
            type: tmp10,
            index: tmp13,
            name: str2,
            originalName: tmp2,
            originalId: tmp,
            facing: tmp3,
            hardwareId: tmp4,
            containerId: tmp5,
            effects: tmp6,
            macosTransportType: tmp7,
            windowsEndpointFormFactor: tmp8,
            windowsDeviceService: tmp9,
          };
          return obj;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp12 = id;
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
        isMatch = !c1;
      }
      if (isMatch) {
        const tmp6 = formatDefault;
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
        isMatch = obj.test(formatDefault.os.family);
      }
      if (isMatch) {
        obj = { id, type: AUDIO_INPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj);
      }
      return closure_0(mapped);
    });
  });
};
export const getAudioOutputDevices = function getAudioOutputDevices() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const voiceEngine = closure_0(1910).getVoiceEngine();
    const outputDevices = voiceEngine.getOutputDevices((arr) => {
      const AUDIO_OUTPUT = constants.AUDIO_OUTPUT;
      c1 = false;
      const mapped = arr.map((item, index) => {
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          let obj = /^front/i;
          if (obj.test(name)) {
            let tmp12 = id;
            let str2 = "Default";
          }
          let tmp13 = index;
          if (null != index) {
            tmp13 = index;
          }
          obj = {
            id: tmp12,
            type: tmp10,
            index: tmp13,
            name: str2,
            originalName: tmp2,
            originalId: tmp,
            facing: tmp3,
            hardwareId: tmp4,
            containerId: tmp5,
            effects: tmp6,
            macosTransportType: tmp7,
            windowsEndpointFormFactor: tmp8,
            windowsDeviceService: tmp9,
          };
          return obj;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp12 = id;
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
      let isMatch = AUDIO_OUTPUT !== constants.VIDEO_INPUT;
      if (isMatch) {
        isMatch = !c1;
      }
      if (isMatch) {
        const tmp6 = formatDefault;
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
        isMatch = obj.test(formatDefault.os.family);
      }
      if (isMatch) {
        obj = { id, type: AUDIO_OUTPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj);
      }
      return closure_0(mapped);
    });
  });
};
export const getVideoInputDevices = function getVideoInputDevices() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const voiceEngine = closure_0(1910).getVoiceEngine();
    const videoInputDevices = voiceEngine.getVideoInputDevices((arr) => {
      const VIDEO_INPUT = constants.VIDEO_INPUT;
      c1 = false;
      const mapped = arr.map((item, index) => {
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          let obj = /^front/i;
          if (obj.test(name)) {
            let tmp12 = id;
            let str2 = "Default";
          }
          let tmp13 = index;
          if (null != index) {
            tmp13 = index;
          }
          obj = {
            id: tmp12,
            type: tmp10,
            index: tmp13,
            name: str2,
            originalName: tmp2,
            originalId: tmp,
            facing: tmp3,
            hardwareId: tmp4,
            containerId: tmp5,
            effects: tmp6,
            macosTransportType: tmp7,
            windowsEndpointFormFactor: tmp8,
            windowsDeviceService: tmp9,
          };
          return obj;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp12 = id;
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
      let isMatch = VIDEO_INPUT !== constants.VIDEO_INPUT;
      if (isMatch) {
        isMatch = !c1;
      }
      if (isMatch) {
        const tmp6 = formatDefault;
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
        isMatch = obj.test(formatDefault.os.family);
      }
      if (isMatch) {
        obj = { id, type: VIDEO_INPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj);
      }
      return closure_0(mapped);
    });
  });
};
