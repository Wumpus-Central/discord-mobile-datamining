// discord_app/modules/badges/native/openBadgeDirectoryScreen.tsx
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(11447, dependencyMap.paths),
    { targetUserId: obj.targetUserId },
    c3,
  );
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
