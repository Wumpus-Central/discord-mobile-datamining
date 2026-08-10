// discord_app/modules/changelog/openChangelog.native.tsx
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
import { navigationToRootTabHelper } from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";

const result = require("module_4509").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = navigationToRootTabHelper.isModalOpen();
    const obj = navigationToRootTabHelper;
  }
  if (!isModalOpenResult) {
    ModalActionCreators.pushLazy(asyncRequireImpl(14728, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = ModalActionCreators;
  }
};