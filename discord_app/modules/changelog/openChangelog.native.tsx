// discord_app/modules/changelog/openChangelog.native.tsx
import set from "../../../_runtime/00002_set.js";
import CHANGELOG_MODAL_KEY2 from "ChangelogConstants.tsx";
import asyncRequireImpl from "../../../_runtime/02010_asyncRequireImpl.js";
import coerceMainRoute from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import _modDef4689 from "../../actions/ModalActionCreators.tsx";

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
    _modDef4689.pushLazy(asyncRequireImpl(15075, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = _modDef4689;
  }
};