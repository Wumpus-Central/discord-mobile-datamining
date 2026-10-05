// _runtime/07287_react-native.js
import react_native from "00017_react-native.js";
import _mod7288 from "metro/07288__.js";

const NativeModules = react_native.NativeModules;
let closure_1 = {
  mediaType: "photo",
  videoQuality: "high",
  quality: 1,
  maxWidth: 0,
  maxHeight: 0,
  includeBase64: false,
  cameraType: "back",
  selectionLimit: 1,
  saveToPhotos: false,
  durationLimit: 0,
  includeExtra: false,
};
for (const key10017 in _mod7288) {
  exports[key10017] = _mod7288[key10017];
  continue;
}

export const launchCamera = function launchCamera(arg0, arg1) {
  let ImagePickerManager = arg0;
  closure_1 = arg1;
  const promise = new Promise((arg0) => {
    let closure_0;
    ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const launchCamera = ImagePickerManager.launchCamera;
    const obj = {};
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    launchCamera(obj, (arg0) => {
      if (closure_1) {
        tmp(arg0);
      }
      closure_0(arg0);
    });
  });
  return promise;
};
export const launchImageLibrary = function launchImageLibrary(arg0, arg1) {
  let ImagePickerManager = arg0;
  closure_1 = arg1;
  const promise = new Promise((arg0) => {
    let closure_0;
    ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const launchImageLibrary = ImagePickerManager.launchImageLibrary;
    const obj = {};
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    launchImageLibrary(obj, (arg0) => {
      if (closure_1) {
        tmp(arg0);
      }
      closure_0(arg0);
    });
  });
  return promise;
};
