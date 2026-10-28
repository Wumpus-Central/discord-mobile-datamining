// === Module 19059: openChangelog ===

// Module 19059 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ChangelogConstants from "ChangelogConstants" /* 4906 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5186 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = NavigationRouteUtils.isModalOpen();
  }
  if (!isModalOpenResult) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17173, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};