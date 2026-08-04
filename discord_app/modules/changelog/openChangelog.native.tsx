import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4490").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4136) /* navigationToRootTabHelper */.isModalOpen();
    const obj = require(4136) /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(14622, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4490);
  }
};