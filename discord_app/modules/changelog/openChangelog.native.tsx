// === Module 17335: openChangelog ===

// Module 17335 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ChangelogConstants from "ChangelogConstants" /* 2098 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4722 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15303, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};