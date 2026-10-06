// === Module 17499: openChangelog ===

// Module 17499 (openChangelog)
import asyncRequire from "asyncRequire" /* 1987 */;
import ChangelogConstants from "ChangelogConstants" /* 2102 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (isModalOpenResult) {
    const obj = NavigationRouteUtils;
    isModalOpenResult = obj.isModalOpen();
  }
  if (!isModalOpenResult) {
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(15384, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};