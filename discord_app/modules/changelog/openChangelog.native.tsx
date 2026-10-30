// === Module 19355: openChangelog ===

// Module 19355 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ChangelogConstants from "ChangelogConstants" /* 4911 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = NavigationRouteUtils.isModalOpen();
  }
  if (!isModalOpenResult) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17466, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}