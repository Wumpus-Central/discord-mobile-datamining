// === Module 20192: openChangelog ===

// Module 20192 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ChangelogConstants from "ChangelogConstants" /* 5208 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18174, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}