// === Module 16819: openChangelog ===

// Module 16819 (openChangelog)
import set from "set" /* 2 */;
import CHANGELOG_MODAL_KEY2 from "CHANGELOG_MODAL_KEY" /* 1980 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import coerceMainRoute from "coerceMainRoute" /* 4299 */;
import _modDef4676 from "module_4676" /* 4676 */;

const CHANGELOG_MODAL_KEY = CHANGELOG_MODAL_KEY2.CHANGELOG_MODAL_KEY;
const result = set.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = coerceMainRoute.isModalOpen();
    const obj = coerceMainRoute;
  }
  if (!isModalOpenResult) {
    _modDef4676.pushLazy(asyncRequireImpl(15087, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = _modDef4676;
  }
};