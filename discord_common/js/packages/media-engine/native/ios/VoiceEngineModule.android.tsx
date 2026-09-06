// discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx
import NativeMediaEngineModule from "../../../rtn-codegen/js/NativeMediaEngineModule.tsx";

NativeMediaEngineModule = NativeMediaEngineModule.getConstants();
let closure_3 = [
  "getConstants",
  "setInputDevice",
  "setInputDeviceById",
  "setOutputDevice",
  "setOutputDeviceById",
  "setVideoInputDevice",
  "setVideoInputDeviceById",
  "addListener",
  "removeListeners",
];
let obj = {};
NativeMediaEngineModule = Object.assign(NativeMediaEngineModule);
obj.getConstants = function getConstants() {
  return NativeMediaEngineModule;
};
obj.setInputDevice = function setInputDevice(str) {
  if (typeof str === "string") {
    let setInputDeviceByIdResult = NativeMediaEngineModule.setInputDeviceById(str);
  } else {
    setInputDeviceByIdResult = NativeMediaEngineModule.setInputDevice(str);
  }
  return setInputDeviceByIdResult;
};
obj.setOutputDevice = function setOutputDevice(str) {
  if (typeof str === "string") {
    let setOutputDeviceByIdResult = NativeMediaEngineModule.setOutputDeviceById(str);
  } else {
    setOutputDeviceByIdResult = NativeMediaEngineModule.setOutputDevice(str);
  }
  return setOutputDeviceByIdResult;
};
obj.setVideoInputDevice = function setVideoInputDevice(str) {
  if (typeof str === "string") {
    let result = NativeMediaEngineModule.setVideoInputDeviceById(str);
  } else {
    result = NativeMediaEngineModule.setVideoInputDevice(str);
  }
  return result;
};
const keys = Object.keys(Object.getPrototypeOf(NativeMediaEngineModule));
const found = keys.filter((item) => !closure_3.includes(item));
const merged1 = Object.assign(
  Object.fromEntries(
    found.map((item) => {
      closure_0 = item;
      let items = [
        item,
        () => {
          const items = [...arguments];
          const items1 = [...items];
          return NativeMediaEngineModule[closure_0].apply(items1);
        },
      ];
      return items;
    }),
  ),
);
const nativeEventEmitter = new fn(17).NativeEventEmitter(NativeMediaEngineModule);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx",
);

export const VoiceEngine = obj;
export const VoiceEngineEmitter = nativeEventEmitter;
