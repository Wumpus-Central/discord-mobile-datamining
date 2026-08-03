import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4461").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4106) /* navigationToRootTabHelper */.isModalOpen();
    const obj = require(4106) /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(14589, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4461);
  }
};