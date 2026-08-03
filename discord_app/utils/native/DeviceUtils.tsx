// === Module 4235: DCDDeviceManager ===

// Module 4235 (DCDDeviceManager)
import set from "set";
import set from "enforcing";

if (set.isAndroid()) {
  const importDefaultResult = require("enforcing");
  let constants;
  if (importDefaultResult != null) {
    constants = importDefaultResult.getConstants();
  }
  let DCDDeviceManager = constants;
} else {
  DCDDeviceManager = require("get ActivityIndicator").NativeModules.DCDDeviceManager;
}
let c4 = null;
const mediaPerformanceClass = "mediaPerformanceClass";
function getSystemVersion() {
  return DCDDeviceManager.systemVersion;
}
function getDevice() {
  return DCDDeviceManager.device;
}
let result = set.fileFinishedImporting("utils/native/DeviceUtils.tsx");

export const isIpadOS = function isIpadOS() {
  return "iPad" === DCDDeviceManager.deviceModel;
};
export const isGestureNavigationEnabled = function isGestureNavigationEnabled() {
  return DCDDeviceManager.isGestureNavigationEnabled;
};
export { getSystemVersion };
export const getSystemVersionMajor = function getSystemVersionMajor() {
  const match = DCDDeviceManager.systemVersion.match(/\d+/);
  if (null == match) {
    return 0;
  } else {
    const _Number = Number;
    const parsed = Number.parseInt(match[0], 10);
    const _Number2 = Number;
    let num2 = 0;
    if (!Number.isNaN(parsed)) {
      num2 = parsed;
    }
    return num2;
  }
  const str = DCDDeviceManager.systemVersion;
};
export const getSystemVersionMinor = function getSystemVersionMinor() {
  const match = DCDDeviceManager.systemVersion.match(/\d+/g);
  if (null != match) {
    if (match.length >= 2) {
      const _Number = Number;
      const parsed = Number.parseInt(match[1], 10);
      const _Number2 = Number;
      let num3 = 0;
      if (!Number.isNaN(parsed)) {
        num3 = parsed;
      }
      return num3;
    }
  }
  return 0;
};
export { getDevice };
export const getDeviceInfo = function getDeviceInfo() {
  const device = DCDDeviceManager.device;
  if (obj.isAndroid()) {
    let text = `${device + " (" + tmp.deviceModel})`;
  } else {
    text = device;
  }
  return text;
};
export const getDeviceMediaPerformanceClass = function getDeviceMediaPerformanceClass() {
  let tmp3 = null;
  if (obj.isAndroid()) {
    let tmp5 = null == mediaPerformanceClass2;
    if (tmp5) {
      const Storage = tmp(595).Storage;
      const value = Storage.get(mediaPerformanceClass);
      mediaPerformanceClass2 = value;
      tmp5 = null == value;
    }
    if (tmp5) {
      mediaPerformanceClass2 = importDefault(671).getMediaPerformanceClass();
      const Storage2 = tmp(595).Storage;
      const result = Storage2.set(mediaPerformanceClass, mediaPerformanceClass2);
      const obj2 = importDefault(671);
    }
    tmp3 = mediaPerformanceClass2;
  }
  return tmp3;
};
export const getDeviceModel = function getDeviceModel() {
  return DCDDeviceManager.deviceModel;
};
export const getDeviceBrand = function getDeviceBrand() {
  return DCDDeviceManager.deviceBrand;
};
export const getDeviceProduct = function getDeviceProduct() {
  return DCDDeviceManager.deviceProduct;
};
export const getDeviceManufacturer = function getDeviceManufacturer() {
  return DCDDeviceManager.deviceManufacturer;
};
export const getSmallestScreenWidthDp = function getSmallestScreenWidthDp() {
  return DCDDeviceManager.smallestScreenWidth;
};
export const getSocName = function getSocName() {
  return DCDDeviceManager.socName;
};
export const getRamSize = function getRamSize() {
  const ramSize = DCDDeviceManager.ramSize;
  let parsed;
  if ("" !== ramSize) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(ramSize);
  }
  return parsed;
};
export const getMaxCpuFreq = function getMaxCpuFreq() {
  const maxCpuFreq = DCDDeviceManager.maxCpuFreq;
  let parsed;
  if ("" !== maxCpuFreq) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(maxCpuFreq);
  }
  return parsed;
};
export const getTimeZone = function getTimeZone() {
  return DCDDeviceManager.timeZone;
};
export const getIsRunningOnSimulator = function getIsRunningOnSimulator() {
  return DCDDeviceManager.isRunningOnSimulator;
};