// === Module 19577: openChangelog ===

// Module 19577 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ChangelogConstants from "ChangelogConstants" /* 5043 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17682, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}