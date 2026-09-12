// === Module 4615: DeviceUtils ===

// Module 4615 (DeviceUtils)
import Storage3 from "Storage" /* 510 */;
import NativeDeviceModule from "NativeDeviceModule" /* 1343 */;

require = fn;
const constants = NativeDeviceModule.getConstants();
let closure_4 = null;
const mediaPerformanceClass = "mediaPerformanceClass";
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/DeviceUtils.tsx");

export const isIpadOS = function isIpadOS() {
  return "iPad" === closure_3.deviceModel;
};
export const isGestureNavigationEnabled = function isGestureNavigationEnabled() {
  return closure_3.isGestureNavigationEnabled;
};
export const getSystemVersion = function getSystemVersion() {
  return closure_3.systemVersion;
};
export const getSystemVersionMajor = function getSystemVersionMajor() {
  const match = closure_3.systemVersion.match(/\d+/);
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
};
export const getSystemVersionMinor = function getSystemVersionMinor() {
  const match = closure_3.systemVersion.match(/\d+/g);
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
export const getDevice = function getDevice() {
  return closure_3.device;
};
export const getDeviceInfo = function getDeviceInfo() {
  const device = closure_3.device;
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
      const Storage = Storage3.Storage;
      value = Storage.get(mediaPerformanceClass);
      mediaPerformanceClass2 = value;
      tmp5 = null == value;
    }
    if (tmp5) {
      mediaPerformanceClass2 = NativeDeviceModule.getMediaPerformanceClass();
      const Storage2 = Storage3.Storage;
      const result = Storage2.set(mediaPerformanceClass, mediaPerformanceClass2);
    }
    tmp3 = mediaPerformanceClass2;
  }
  return tmp3;
};
export const getDeviceModel = function getDeviceModel() {
  return closure_3.deviceModel;
};
export const getDeviceBrand = function getDeviceBrand() {
  return closure_3.deviceBrand;
};
export const getDeviceProduct = function getDeviceProduct() {
  return closure_3.deviceProduct;
};
export const getDeviceManufacturer = function getDeviceManufacturer() {
  return closure_3.deviceManufacturer;
};
export const getSmallestScreenWidthDp = function getSmallestScreenWidthDp() {
  return closure_3.smallestScreenWidth;
};
export const isOrientationLockSupported = function isOrientationLockSupported() {
  let flag = closure_3.isOrientationLockSupported;
  if (flag == null) {
    flag = true;
  }
  return flag;
};
export const getSocName = function getSocName() {
  return closure_3.socName;
};
export const getRamSize = function getRamSize() {
  const ramSize = closure_3.ramSize;
  let parsed;
  if ("" !== ramSize) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(ramSize);
  }
  return parsed;
};
export const getMaxCpuFreq = function getMaxCpuFreq() {
  const maxCpuFreq = closure_3.maxCpuFreq;
  let parsed;
  if ("" !== maxCpuFreq) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(maxCpuFreq);
  }
  return parsed;
};
export const getTimeZone = function getTimeZone() {
  return closure_3.timeZone;
};
export const getIsRunningOnSimulator = function getIsRunningOnSimulator() {
  return closure_3.isRunningOnSimulator;
};