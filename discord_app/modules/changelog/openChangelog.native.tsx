// discord_app/modules/changelog/openChangelog.native.tsx
import set from "set" /* 2 */;
import CHANGELOG_MODAL_KEY2 from "CHANGELOG_MODAL_KEY" /* 1978 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import _modDef5260 from "module_5260" /* 5260 */;

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
    _modDef5260.pushLazy(asyncRequireImpl(14850, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = _modDef5260;
  }
};