// === Module 19612: openChangelog ===

// Module 19612 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ChangelogConstants from "ChangelogConstants" /* 4914 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17114, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}