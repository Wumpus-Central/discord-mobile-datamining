// === Module 18807: openChangelog ===

// Module 18807 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ChangelogConstants from "ChangelogConstants" /* 4874 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5151 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16943, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};