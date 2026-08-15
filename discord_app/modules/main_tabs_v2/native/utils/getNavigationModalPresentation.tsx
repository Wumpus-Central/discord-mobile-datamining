// discord_app/modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx
import set from "set";
import set from "set";
import set from "DCDDeviceManager";
import { handleOrientationChange } from "../../../device/native/DeviceOrientation.tsx";

if (set.isAndroid()) {
  const _module1 = require("useIsWindowLarge");
  let str2 = "modal";
  if (_module1.getIsWindowLarge()) {
    str2 = "fullScreenModal";
  }
  let str = str2;
} else {
  const _module2 = require("DCDDeviceManager");
  str = "modal";
  if (_module2.isIpadOS()) {
    str = "fullScreenModal";
  }
}
let obj = { presentation: str, lockOrientation: null };
obj[1] = !set.isAndroid();
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx");

export default function getNavigationModalPresentation() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  let presentation = tmp.presentation;
  if (presentation === undefined) {
    presentation = obj.presentation;
  }
  let lockOrientation = tmp.lockOrientation;
  if (lockOrientation === undefined) {
    let lockOrientation2 = obj.lockOrientation;
    if (lockOrientation2) {
      lockOrientation2 = "transparentModal" !== presentation;
    }
    lockOrientation = lockOrientation2;
  }
  obj = { presentation, orientation: null };
  let tmp4;
  if (lockOrientation) {
    const orientationLock = handleOrientationChange.getOrientationLock();
    let str2 = "landscape";
    let str4 = "landscape";
    if ("LANDSCAPE" !== orientationLock) {
      if (null != orientationLock) {
        str2 = "portrait";
      } else {
        const orientation = tmp5(8671).getOrientation();
        const tmp5Result = tmp5(8671);
      }
      str4 = str2;
    }
    tmp4 = str4;
    const obj2 = handleOrientationChange;
  }
  obj[1] = tmp4;
  return obj;
};