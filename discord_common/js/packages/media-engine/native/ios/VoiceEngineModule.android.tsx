// === Module 2003: VoiceEngineModule ===

// Module 2003 (VoiceEngineModule)
import react_native from "react-native" /* 17 */;
import react_native2_mod from "react-native" /* 2004 */;
import size from "module_2" /* 2 */;

const NativeEventEmitter = react_native.NativeEventEmitter;
let react_native2 = react_native2_mod;
react_native2 = react_native2.getConstants();
let closure_3 = ["getConstants", "setInputDevice", "setInputDeviceById", "setOutputDevice", "setOutputDeviceById", "setVideoInputDevice", "setVideoInputDeviceById", "addListener", "removeListeners"];
let obj = {
  getConstants() {
    return react_native;
  },
  setInputDevice(str) {
    let setInputDeviceByIdResult;
    if (typeof str === "string") {
      const obj = react_native;
      setInputDeviceByIdResult = obj.setInputDeviceById(str);
    } else {
      const obj2 = react_native;
      setInputDeviceByIdResult = obj2.setInputDevice(str);
    }
    return setInputDeviceByIdResult;
  },
  setOutputDevice(str) {
    let setOutputDeviceByIdResult;
    if (typeof str === "string") {
      const obj = react_native;
      setOutputDeviceByIdResult = obj.setOutputDeviceById(str);
    } else {
      const obj2 = react_native;
      setOutputDeviceByIdResult = obj2.setOutputDevice(str);
    }
    return setOutputDeviceByIdResult;
  },
  setVideoInputDevice(str) {
    let result;
    if (typeof str === "string") {
      const obj = react_native;
      result = obj.setVideoInputDeviceById(str);
    } else {
      const obj2 = react_native;
      result = obj2.setVideoInputDevice(str);
    }
    return result;
  }
};
react_native2 = Object.assign(react_native2);
const keys = Object.keys(Object.getPrototypeOf(react_native2));
const found = keys.filter((item) => !closure_3.includes(item));
const merged1 = Object.assign(fromEntries(found.map((item) => {
  let closure_0 = item;
  let items = [
    item,
    () => {
      const items = [...arguments];
      const items1 = [...items];
      const tmp = react_native;
      return tmp[item].apply(items1);
    }
  ];
  return items;
})));
const nativeEventEmitter = new NativeEventEmitter(react_native2);
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx");

export const VoiceEngine = obj;
export const VoiceEngineEmitter = nativeEventEmitter;