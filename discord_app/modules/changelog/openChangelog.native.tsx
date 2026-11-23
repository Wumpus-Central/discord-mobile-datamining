// === Module 19459: openChangelog ===

// Module 19459 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ChangelogConstants from "ChangelogConstants" /* 4815 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16961, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}