// === Module 16636: openChangelog ===

// Module 16636 (openChangelog)
import set from "set" /* 2 */;
import CHANGELOG_MODAL_KEY2 from "CHANGELOG_MODAL_KEY" /* 1979 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import coerceMainRoute from "coerceMainRoute" /* 4233 */;
import _modDef5265 from "module_5265" /* 5265 */;

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
    _modDef5265.pushLazy(asyncRequireImpl(14914, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = _modDef5265;
  }
};