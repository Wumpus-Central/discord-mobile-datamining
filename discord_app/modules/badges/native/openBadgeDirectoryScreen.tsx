// === Module 10856: openBadgeDirectoryScreen ===

// Module 10856 (openBadgeDirectoryScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10857, dependencyMap.paths), { targetUserId: obj.targetUserId }, c3);
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  ModalActionCreatorsDefault.popWithKey(c3);
};