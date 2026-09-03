// === Module 17162: openChangelog ===

// Module 17162 (openChangelog)
import set from "set" /* 2 */;
import CHANGELOG_MODAL_KEY2 from "CHANGELOG_MODAL_KEY" /* 1979 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import coerceMainRoute from "coerceMainRoute" /* 4332 */;
import _modDef4724 from "module_4724" /* 4724 */;

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
    _modDef4724.pushLazy(asyncRequireImpl(15384, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = _modDef4724;
  }
};