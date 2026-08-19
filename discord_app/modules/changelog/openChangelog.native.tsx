// discord_app/modules/changelog/openChangelog.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import CHANGELOG_MODAL_KEY2 from "ChangelogConstants.tsx";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import coerceMainRoute from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";

const CHANGELOG_MODAL_KEY = CHANGELOG_MODAL_KEY2.CHANGELOG_MODAL_KEY;
const result = obj132.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = coerceMainRoute.isModalOpen();
  }
  if (!isModalOpenResult) {
    _modDef5260.pushLazy(asyncRequireImpl(14850, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};