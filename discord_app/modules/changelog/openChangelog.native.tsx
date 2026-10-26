// === Module 18761: openChangelog ===

// Module 18761 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ChangelogConstants from "ChangelogConstants" /* 4873 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16900, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};