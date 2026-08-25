// === Module 4435: constants ===

// Module 4435 (constants)
import importDefaultResult from "enforcing" /* 4436 */;

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
    const obj = importDefaultResult;
  } else {
    setInputDeviceByIdResult = importDefaultResult.setInputDevice(str);
    const obj2 = importDefaultResult;
  }
  return setInputDeviceByIdResult;
};
obj.setOutputDevice = function setOutputDevice(str) {
  if (typeof str === "string") {
    let setOutputDeviceByIdResult = importDefaultResult.setOutputDeviceById(str);
    const obj = importDefaultResult;
  } else {
    setOutputDeviceByIdResult = importDefaultResult.setOutputDevice(str);
    const obj2 = importDefaultResult;
  }
  return setOutputDeviceByIdResult;
};
obj.setVideoInputDevice = function setVideoInputDevice(str) {
  if (typeof str === "string") {
    let result = importDefaultResult.setVideoInputDeviceById(str);
    const obj = importDefaultResult;
  } else {
    result = importDefaultResult.setVideoInputDevice(str);
    const obj2 = importDefaultResult;
  }
  return result;
};
const keys = Object.keys(Object.getPrototypeOf(importDefaultResult));
const found = keys.filter((arg0) => !closure_3.includes(arg0));
const merged1 = Object.assign(Object.fromEntries(found.map((arg0) => {
  closure_0 = arg0;
  let items = [
    arg0,
    () => {
      const items = [...arguments];
      const items1 = [...items];
      return callback(closure_1_1[1])[callback].apply(items1);
    }
  ];
  return items;
})));
const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(importDefaultResult);
let result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx");

export const VoiceEngine = obj;
export const VoiceEngineEmitter = nativeEventEmitter;