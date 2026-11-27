// === Module 19691: openChangelog ===

// Module 19691 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ChangelogConstants from "ChangelogConstants" /* 4945 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17172, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}