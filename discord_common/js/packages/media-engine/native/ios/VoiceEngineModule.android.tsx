// === Module 4501: constants ===

// Module 4501 (constants)
import importDefaultResult from "enforcing" /* 4502 */;

const constants = importDefaultResult.getConstants();
let closure_3 = ["getConstants", "setInputDevice", "setInputDeviceById", "setOutputDevice", "setOutputDeviceById", "setVideoInputDevice", "setVideoInputDeviceById", "addListener", "removeListeners"];
let obj = {};
const merged = Object.assign(constants);
obj.getConstants = function getConstants() {
  return constants;
};
obj.setInputDevice = function setInputDevice(str) {
  if (typeof str === "string") {
    let setInputDeviceByIdResult = importDefaultResult.setInputDeviceById(str);
  } else {
    setInputDeviceByIdResult = importDefaultResult.setInputDevice(str);
  }
  return setInputDeviceByIdResult;
};
obj.setOutputDevice = function setOutputDevice(str) {
  if (typeof str === "string") {
    let setOutputDeviceByIdResult = importDefaultResult.setOutputDeviceById(str);
  } else {
    setOutputDeviceByIdResult = importDefaultResult.setOutputDevice(str);
  }
  return setOutputDeviceByIdResult;
};
obj.setVideoInputDevice = function setVideoInputDevice(str) {
  if (typeof str === "string") {
    let result = importDefaultResult.setVideoInputDeviceById(str);
  } else {
    result = importDefaultResult.setVideoInputDevice(str);
  }
  return result;
};
const keys = Object.keys(Object.getPrototypeOf(importDefaultResult));
const found = keys.filter((item, index) => !closure_3.includes(item));
const merged1 = Object.assign(Object.fromEntries(found.map((item, index) => {
  closure_0 = item;
  let items = [
    item,
    () => {
      const items = [...arguments];
      const items1 = [...items];
      return item(dependencyMap[1])[item].apply(items1);
    }
  ];
  return items;
})));
const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(importDefaultResult);
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx");

export const VoiceEngine = obj;
export const VoiceEngineEmitter = nativeEventEmitter;