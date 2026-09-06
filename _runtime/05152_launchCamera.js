// _runtime/05152_launchCamera.js
import _mod17 from "metro/00017__.js";

const NativeModules = _mod17.NativeModules;
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
for (const key10017 in require("metro/05153__.js")) {
  arg5[key10017] = require("metro/05153__.js")[key10017];
  continue;
}

export const launchCamera = function launchCamera(arg0, arg1) {
  let ImagePickerManager = arg0;
  closure_1 = arg1;
  return new Promise((arg0) => {
    ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    ImagePickerManager.launchCamera({}, (arg0) => {
      if (closure_1) {
        tmp(arg0);
      }
      closure_0(arg0);
    });
  });
};
export const launchImageLibrary = function launchImageLibrary(arg0, fn) {
  let ImagePickerManager = arg0;
  closure_1 = fn;
  return new Promise((arg0) => {
    ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    ImagePickerManager.launchImageLibrary({}, (arg0) => {
      if (closure_1) {
        tmp(arg0);
      }
      closure_0(arg0);
    });
  });
};
