// discord_app/modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx
import DeviceUtils from "../../../../utils/native/DeviceUtils.tsx";
import useIsWindowLarge from "../../../screen/native/useIsWindowLarge.tsx";
import DeviceOrientation from "../../../device/native/DeviceOrientation.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

if (PlatformUtils.isAndroid()) {
  const _module1 = useIsWindowLarge;
  let str2 = "modal";
  if (_module1.getIsWindowLarge()) {
    str2 = "fullScreenModal";
  }
  let str = str2;
} else {
  const _module2 = DeviceUtils;
  str = "modal";
  if (_module2.isIpadOS()) {
    str = "fullScreenModal";
  }
}
let obj = { presentation: str, lockOrientation: null };
obj.lockOrientation = !PlatformUtils.isAndroid();
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx");

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
    const orientationLock = DeviceOrientation.getOrientationLock();
    let str2 = "landscape";
    let str4 = "landscape";
    if ("LANDSCAPE" !== orientationLock) {
      if (null != orientationLock) {
        str2 = "portrait";
      } else {
        const orientation = DeviceOrientation.getOrientation();
        const tmp5Result = DeviceOrientation;
      }
      str4 = str2;
    }
    tmp4 = str4;
  }
  obj.orientation = tmp4;
  return obj;
}
