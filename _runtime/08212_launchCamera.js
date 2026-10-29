// === Module 8212: launchCamera ===

// Module 8212 (launchCamera)
import get_ActivityIndicator from "module_17" /* 17 */;

const require = globalThis.__r;

({ NativeModules: closure_0, Platform } = get_ActivityIndicator);
let closure_1 = { mediaType: "photo", videoQuality: "high", quality: 1, maxWidth: 0, maxHeight: 0, includeBase64: false, cameraType: "back", selectionLimit: 1, saveToPhotos: false, durationLimit: 0, includeExtra: false };
for (const key10018 in require("module_8213")) {
  arg5[key10018] = require("module_8213")[key10018];
  continue;
}

export function launchCamera(arg0, arg1) {
  ImagePickerManager = arg0;
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
}
export function launchImageLibrary(arg0, fn) {
  ImagePickerManager = arg0;
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
}
export function canUseAndroidPhotoPicker(arg0) {
  const obj = {};
  const merged = Object.assign(closure_1);
  const merged1 = Object.assign(arg0);
  let tmp3 = true === obj.enableAndroidPhotoPicker;
  if (tmp3) {
    tmp3 = true !== obj.forceGetContent;
  }
  if (tmp3) {
    tmp3 = "any" !== obj.mediaType;
  }
  if (tmp3) {
    tmp3 = true === ImagePickerManager.ImagePickerManager.isPhotoPickerAvailable;
  }
  return tmp3;
}