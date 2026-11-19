// === Module 19510: openChangelog ===

// Module 19510 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ChangelogConstants from "ChangelogConstants" /* 4694 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4968 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17014, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}