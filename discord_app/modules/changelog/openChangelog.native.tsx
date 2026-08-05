// discord_app/modules/changelog/openChangelog.native.tsx
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4490").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require("../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx") /* navigationToRootTabHelper */.isModalOpen();
    const obj = require("../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx") /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    require("../../actions/ModalActionCreators.tsx").pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(14622, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = require("../../actions/ModalActionCreators.tsx");
  }
};