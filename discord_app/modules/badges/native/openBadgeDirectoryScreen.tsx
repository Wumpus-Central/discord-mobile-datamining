// === Module 11419: openBadgeDirectoryScreen ===

// Module 11419 (openBadgeDirectoryScreen)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7106 */;
import size from "module_2" /* 2 */;

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export function isBadgeDirectoryIOSPageSheet() {
  let isIOSResult = PlatformUtils.isIOS();
  if (isIOSResult) {
    isIOSResult = !useIsWindowLarge.getIsWindowLarge();
    const tmpResult = useIsWindowLarge;
  }
  return isIOSResult;
}
export function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { targetUserId: obj.targetUserId };
  const tmp3 = asyncRequireImpl(11420, dependencyMap.paths);
  if (!obj4.isIOS()) {
    const obj5 = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  obj2.pushLazy(tmp3, obj3, c3, obj5);
  obj4 = PlatformUtils;
}
export function closeBadgeDirectoryScreen() {
  ModalActionCreatorsDefault.popWithKey(c3);
}