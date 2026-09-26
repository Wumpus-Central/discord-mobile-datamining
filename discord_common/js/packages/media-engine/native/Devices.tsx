// === Module 4962: Devices ===

// Module 4962 (Devices)
import formatDefault from "format" /* 1340 */;
import Constants from "Constants" /* 4893 */;
import size from "module_2" /* 2 */;

({ DEFAULT_DEVICE_ID: c3, DeviceTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/Devices.tsx");

export const sanitizeDevices = function sanitizeDevices(AUDIO_INPUT, items) {
  closure_0 = AUDIO_INPUT;
  importDefault = false;
  const mapped = items.map((item, index) => {
    ({ guid, name, index } = item);
    if (VIDEO_INPUT === constants.VIDEO_INPUT) {
      if (obj.test(name)) {
        let tmp14 = id;
        let str2 = "Default";
      }
      let tmp15 = index;
      if (null != index) {
        tmp15 = index;
      }
      const obj3 = { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
      return obj3;
    }
    if (obj2.test(name)) {
      c1 = true;
      tmp14 = id;
      str2 = name.replace("default", "Default");
    } else {
      tmp14 = name;
      if (null != guid) {
        tmp14 = name;
        if ("" !== guid) {
          tmp14 = guid;
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
    isMatch = /^win/i.test(formatDefault.os.family);
    const obj = /^win/i;
  }
  if (isMatch) {
    const obj2 = { id, type: AUDIO_INPUT, index: -1, name: "Default" };
    mapped.unshift(obj2);
  }
  return mapped;
};
export const getAudioInputDevices = function getAudioInputDevices() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const voiceEngine = closure_0(1995).getVoiceEngine();
    const inputDevices = voiceEngine.getInputDevices((arr) => {
      const AUDIO_INPUT = constants.AUDIO_INPUT;
      c1 = false;
      const mapped = arr.map((item, index) => {
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          if (obj.test(name)) {
            let tmp14 = id;
            let str2 = "Default";
          }
          let tmp15 = index;
          if (null != index) {
            tmp15 = index;
          }
          const obj3 = { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
          return obj3;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp14 = id;
          str2 = name.replace("default", "Default");
        } else {
          tmp14 = name;
          if (null != guid) {
            tmp14 = name;
            if ("" !== guid) {
              tmp14 = guid;
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
        isMatch = /^win/i.test(formatDefault.os.family);
        const obj = /^win/i;
      }
      if (isMatch) {
        const obj2 = { id, type: AUDIO_INPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj2);
      }
      return closure_0(mapped);
    });
  });
};
export const getAudioOutputDevices = function getAudioOutputDevices() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const voiceEngine = closure_0(1995).getVoiceEngine();
    const outputDevices = voiceEngine.getOutputDevices((arr) => {
      const AUDIO_OUTPUT = constants.AUDIO_OUTPUT;
      c1 = false;
      const mapped = arr.map((item, index) => {
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          if (obj.test(name)) {
            let tmp14 = id;
            let str2 = "Default";
          }
          let tmp15 = index;
          if (null != index) {
            tmp15 = index;
          }
          const obj3 = { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
          return obj3;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp14 = id;
          str2 = name.replace("default", "Default");
        } else {
          tmp14 = name;
          if (null != guid) {
            tmp14 = name;
            if ("" !== guid) {
              tmp14 = guid;
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
        isMatch = /^win/i.test(formatDefault.os.family);
        const obj = /^win/i;
      }
      if (isMatch) {
        const obj2 = { id, type: AUDIO_OUTPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj2);
      }
      return closure_0(mapped);
    });
  });
};
export const getVideoInputDevices = function getVideoInputDevices() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const voiceEngine = closure_0(1995).getVoiceEngine();
    const videoInputDevices = voiceEngine.getVideoInputDevices((arr) => {
      const VIDEO_INPUT = constants.VIDEO_INPUT;
      c1 = false;
      const mapped = arr.map((item, index) => {
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          if (obj.test(name)) {
            let tmp14 = id;
            let str2 = "Default";
          }
          let tmp15 = index;
          if (null != index) {
            tmp15 = index;
          }
          const obj3 = { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
          return obj3;
        }
        if (obj2.test(name)) {
          c1 = true;
          tmp14 = id;
          str2 = name.replace("default", "Default");
        } else {
          tmp14 = name;
          if (null != guid) {
            tmp14 = name;
            if ("" !== guid) {
              tmp14 = guid;
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
        isMatch = /^win/i.test(formatDefault.os.family);
        const obj = /^win/i;
      }
      if (isMatch) {
        const obj2 = { id, type: VIDEO_INPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj2);
      }
      return closure_0(mapped);
    });
  });
};