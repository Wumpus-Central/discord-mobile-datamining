// === Module 17328: openChangelog ===

// Module 17328 (openChangelog)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import CHANGELOG_MODAL_KEY2 from "CHANGELOG_MODAL_KEY" /* 2010 */;
import coerceMainRoute from "coerceMainRoute" /* 4417 */;
import _modDef4763 from "module_4763" /* 4763 */;

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
    _modDef4763.pushLazy(asyncRequireImpl(15542, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = _modDef4763;
  }
};