// === Module 10540: openBadgeDirectoryScreen ===

// Module 10540 (openBadgeDirectoryScreen)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6625 */;
import size from "module_2" /* 2 */;

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const isBadgeDirectoryIOSPageSheet = function isBadgeDirectoryIOSPageSheet() {
  let isIOSResult = PlatformUtils.isIOS();
  if (isIOSResult) {
    isIOSResult = !useIsWindowLarge.getIsWindowLarge();
    const tmpResult = useIsWindowLarge;
  }
  return isIOSResult;
};
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { targetUserId: obj.targetUserId };
  const tmp3 = asyncRequireImpl(10541, dependencyMap.paths);
  if (!obj4.isIOS()) {
    const obj5 = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  obj2.pushLazy(tmp3, obj3, c3, obj5);
  obj4 = PlatformUtils;
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  ModalActionCreatorsDefault.popWithKey(c3);
};