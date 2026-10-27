// === Module 10033: getNavigationModalPresentation ===

// Module 10033 (getNavigationModalPresentation)
import useWindowDimensions from "useWindowDimensions" /* 1496 */;
import DeviceUtils from "DeviceUtils" /* 4929 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7040 */;
import DeviceOrientation from "DeviceOrientation" /* 8820 */;
import PlatformUtils_mod from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

let PlatformUtils = PlatformUtils_mod;
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
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
let tmp3 = !PlatformUtils;
if (!PlatformUtils) {
  const _module4 = DeviceUtils;
  tmp3 = !_module4.isIpadOS();
}
obj.lockOrientation = tmp3;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx");

export default function getNavigationModalPresentation(arg0) {
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
    let str4 = "landscape";
    if ("LANDSCAPE" !== orientationLock) {
      let str5 = "portrait";
      str4 = "portrait";
      if (null == orientationLock) {
        const size = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true });
        if (size.width > size.height) {
          str5 = "landscape";
        }
        str4 = str5;
        const tmp5Result = useWindowDimensions;
      }
    }
    tmp4 = str4;
  }
  obj.orientation = tmp4;
  return obj;
};