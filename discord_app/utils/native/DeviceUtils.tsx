// === Module 4962: DeviceUtils ===

// Module 4962 (DeviceUtils)
import Storage3 from "Storage" /* 510 */;
import NativeDeviceModule from "NativeDeviceModule" /* 1361 */;

require = fn;
const constants = NativeDeviceModule.getConstants();
let closure_4 = null;
const mediaPerformanceClass = "mediaPerformanceClass";
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/DeviceUtils.tsx");

export function isIpadOS() {
  let tmp = "iPad" === closure_3.deviceModel;
  if (!tmp) {
    tmp = "iPhone19,4" === closure_3.deviceProduct;
  }
  return tmp;
}
export function isDuo() {
  return "iPhone19,4" === closure_3.deviceProduct;
}
export function isGestureNavigationEnabled() {
  return closure_3.isGestureNavigationEnabled;
}
export function getSystemVersion() {
  return closure_3.systemVersion;
}
export function getSystemVersionMajor() {
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
}
export function getSystemVersionMinor() {
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
}
export function getDevice() {
  return closure_3.device;
}
export function getDeviceInfo() {
  const device = closure_3.device;
  if (obj.isAndroid()) {
    let text = `${device + " (" + tmp.deviceModel})`;
  } else {
    text = device;
  }
  return text;
}
export function getDeviceMediaPerformanceClass() {
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
}
export function getDeviceModel() {
  return closure_3.deviceModel;
}
export function getDeviceBrand() {
  return closure_3.deviceBrand;
}
export function getDeviceProduct() {
  return closure_3.deviceProduct;
}
export function getDeviceManufacturer() {
  return closure_3.deviceManufacturer;
}
export function getSmallestScreenWidthDp() {
  return closure_3.smallestScreenWidth;
}
export function isOrientationLockSupported() {
  let flag = closure_3.isOrientationLockSupported;
  if (flag == null) {
    flag = true;
  }
  return flag;
}
export function getSocName() {
  return closure_3.socName;
}
export function getRamSize() {
  const ramSize = closure_3.ramSize;
  let parsed;
  if ("" !== ramSize) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(ramSize);
  }
  return parsed;
}
export function getMaxCpuFreq() {
  const maxCpuFreq = closure_3.maxCpuFreq;
  let parsed;
  if ("" !== maxCpuFreq) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(maxCpuFreq);
  }
  return parsed;
}
export function getTimeZone() {
  return closure_3.timeZone;
}
export function getIsRunningOnSimulator() {
  return closure_3.isRunningOnSimulator;
}