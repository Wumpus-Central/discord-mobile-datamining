// === Module 5023: Devices ===

// Module 5023 (Devices)
import _modDef1351 from "module_1351" /* 1351 */;
import Constants from "Constants" /* 4953 */;
import size from "module_2" /* 2 */;

let arr, importDefault;

let c3;
let closure_4;
({ DEFAULT_DEVICE_ID: c3, DeviceTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/Devices.tsx");

export const sanitizeDevices = function sanitizeDevices(AUDIO_INPUT, items) {
  let c1;
  let closure_0 = AUDIO_INPUT;
  importDefault = false;
  const mapped = items.map((item, index) => {
    let guid;
    let name;
    let str2;
    let tmp14;
    ({ guid, name, index } = item);
    if (VIDEO_INPUT === constants.VIDEO_INPUT) {
      const obj = /^front/i;
      if (obj.test(name)) {
        tmp14 = closure_2_3;
        str2 = "Default";
      }
      let tmp15 = index;
      if (null != index) {
        tmp15 = index;
      }
      return { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
    }
    const obj2 = /^default/;
    if (obj2.test(name)) {
      c1 = true;
      tmp14 = closure_2_3;
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
  let isMatch = AUDIO_INPUT !== constants.VIDEO_INPUT && !importDefault;
  if (isMatch) {
    const tmp5 = _modDef1351;
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
    const obj = /^win/i;
    isMatch = obj.test(_modDef1351.os.family);
  }
  if (isMatch) {
    const obj2 = { id, type: AUDIO_INPUT, index: -1, name: "Default" };
    mapped.unshift(obj2);
  }
  return mapped;
};
export const getAudioInputDevices = function getAudioInputDevices() {
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = closure_0(closure_2[2]);
    const voiceEngine = obj.getVoiceEngine();
    const inputDevices = voiceEngine.getInputDevices((arr) => {
      const AUDIO_INPUT = constants.AUDIO_INPUT;
      let c1 = false;
      const mapped = arr.map((item, index) => {
        let guid;
        let name;
        let str2;
        let tmp14;
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          const obj = /^front/i;
          if (obj.test(name)) {
            tmp14 = closure_2_3;
            str2 = "Default";
          }
          let tmp15 = index;
          if (null != index) {
            tmp15 = index;
          }
          return { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
        }
        const obj2 = /^default/;
        if (obj2.test(name)) {
          c1 = true;
          tmp14 = closure_2_3;
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
      let isMatch = AUDIO_INPUT !== constants.VIDEO_INPUT && !c1;
      if (isMatch) {
        const tmp6 = _modDef1351;
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
        const obj = /^win/i;
        isMatch = obj.test(_modDef1351.os.family);
      }
      if (isMatch) {
        const obj2 = { id, type: AUDIO_INPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj2);
      }
      return closure_0(mapped);
    });
  });
  return promise;
};
export const getAudioOutputDevices = function getAudioOutputDevices() {
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = closure_0(closure_2[2]);
    const voiceEngine = obj.getVoiceEngine();
    const outputDevices = voiceEngine.getOutputDevices((arr) => {
      const AUDIO_OUTPUT = constants.AUDIO_OUTPUT;
      let c1 = false;
      const mapped = arr.map((item, index) => {
        let guid;
        let name;
        let str2;
        let tmp14;
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          const obj = /^front/i;
          if (obj.test(name)) {
            tmp14 = closure_2_3;
            str2 = "Default";
          }
          let tmp15 = index;
          if (null != index) {
            tmp15 = index;
          }
          return { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
        }
        const obj2 = /^default/;
        if (obj2.test(name)) {
          c1 = true;
          tmp14 = closure_2_3;
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
      let isMatch = AUDIO_OUTPUT !== constants.VIDEO_INPUT && !c1;
      if (isMatch) {
        const tmp6 = _modDef1351;
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
        const obj = /^win/i;
        isMatch = obj.test(_modDef1351.os.family);
      }
      if (isMatch) {
        const obj2 = { id, type: AUDIO_OUTPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj2);
      }
      return closure_0(mapped);
    });
  });
  return promise;
};
export const getVideoInputDevices = function getVideoInputDevices() {
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = closure_0(closure_2[2]);
    const voiceEngine = obj.getVoiceEngine();
    const videoInputDevices = voiceEngine.getVideoInputDevices((arr) => {
      const VIDEO_INPUT = constants.VIDEO_INPUT;
      let c1 = false;
      const mapped = arr.map((item, index) => {
        let guid;
        let name;
        let str2;
        let tmp14;
        ({ guid, name, index } = item);
        if (VIDEO_INPUT === constants.VIDEO_INPUT) {
          const obj = /^front/i;
          if (obj.test(name)) {
            tmp14 = closure_2_3;
            str2 = "Default";
          }
          let tmp15 = index;
          if (null != index) {
            tmp15 = index;
          }
          return { id: tmp14, type: tmp12, index: tmp15, name: str2, originalName: tmp2, originalId: tmp, facing: tmp3, hardwareId: tmp4, containerId: tmp5, effects: tmp6, macosTransportType: tmp7, windowsEndpointFormFactor: tmp8, windowsDeviceService: tmp9, windowsDeviceDescription: tmp10, windowsDeviceInterfaceFriendlyName: tmp11 };
        }
        const obj2 = /^default/;
        if (obj2.test(name)) {
          c1 = true;
          tmp14 = closure_2_3;
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
        const tmp3 = c1;
        isMatch = !c1;
      }
      if (isMatch) {
        const tmp6 = _modDef1351;
        const tmp7 = null;
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
        isMatch = obj.test(_modDef1351.os.family);
      }
      if (isMatch) {
        let obj2 = { id, type: VIDEO_INPUT, index: -1, name: "Default" };
        arr = mapped.unshift(obj2);
      }
      return closure_0(mapped);
    });
  });
  return promise;
};