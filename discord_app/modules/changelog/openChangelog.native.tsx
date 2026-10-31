// === Module 19412: openChangelog ===

// Module 19412 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ChangelogConstants from "ChangelogConstants" /* 4916 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17526, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}