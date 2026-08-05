// discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx
import importDefaultResult from "enforcing";

const constants = require("enforcing").getConstants();
let closure_3 = ["getConstants", "setInputDevice", "setInputDeviceById", "setOutputDevice", "setOutputDeviceById", "setVideoInputDevice", "setVideoInputDeviceById", "addListener", "removeListeners"];
let obj = {};
const merged = Object.assign(constants);
obj.getConstants = function getConstants() {
  return constants;
};
obj.setInputDevice = function setInputDevice(str) {
  if (typeof str === "string") {
    let setInputDeviceByIdResult = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx").setInputDeviceById(str);
    const obj = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx");
  } else {
    setInputDeviceByIdResult = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx").setInputDevice(str);
    const obj2 = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx");
  }
  return setInputDeviceByIdResult;
};
obj.setOutputDevice = function setOutputDevice(str) {
  if (typeof str === "string") {
    let setOutputDeviceByIdResult = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx").setOutputDeviceById(str);
    const obj = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx");
  } else {
    setOutputDeviceByIdResult = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx").setOutputDevice(str);
    const obj2 = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx");
  }
  return setOutputDeviceByIdResult;
};
obj.setVideoInputDevice = function setVideoInputDevice(str) {
  if (typeof str === "string") {
    let result = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx").setVideoInputDeviceById(str);
    const obj = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx");
  } else {
    result = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx").setVideoInputDevice(str);
    const obj2 = require("../../../rtn-codegen/js/NativeMediaEngineModule.tsx");
  }
  return result;
};
const keys = Object.keys(Object.getPrototypeOf(require("enforcing")));
const found = keys.filter((arg0) => !closure_3.includes(arg0));
const merged1 = Object.assign(Object.fromEntries(found.map((arg0) => {
  let closure_0 = arg0;
  let items = [
    arg0,
    () => {
      const items = [...arguments];
      const items1 = [...items];
      return callback(outer1_1[1])[callback].apply(items1);
    }
  ];
  return items;
})));
const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(require("enforcing"));
let result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx");

export const VoiceEngine = obj;
export const VoiceEngineEmitter = nativeEventEmitter;