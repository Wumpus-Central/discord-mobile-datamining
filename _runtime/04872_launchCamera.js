// _runtime/04872_launchCamera.js
import { NativeModules } from "get ActivityIndicator";

let closure_1 = { mediaType: "photo", videoQuality: "high", quality: 1, maxWidth: 0, maxHeight: 0, includeBase64: false, cameraType: "back", selectionLimit: 1, saveToPhotos: false, durationLimit: 0, includeExtra: false };
for (const key10017 in require("module_4873")) {
  let tmp2 = key10017;
  arg5[key10017] = require("module_4873")[key10017];
  continue;
}

export const launchCamera = function launchCamera(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    let ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    ImagePickerManager.launchCamera({}, (arg0) => {
      if (outer1_1) {
        tmp(arg0);
      }
      callback(arg0);
    });
  });
};
export const launchImageLibrary = function launchImageLibrary(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    let ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    ImagePickerManager.launchImageLibrary({}, (arg0) => {
      if (outer1_1) {
        tmp(arg0);
      }
      callback(arg0);
    });
  });
};