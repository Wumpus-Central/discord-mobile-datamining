// discord_app/modules/changelog/openChangelog.native.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ChangelogConstants from "ChangelogConstants.tsx";
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = NavigationRouteUtils.isModalOpen();
  }
  if (!isModalOpenResult) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15542, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
