// === Module 10085: openUserProfileAddGameActionSheet ===

// Module 10085 (openUserProfileAddGameActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const UserProfileAddGameActionSheet = "UserProfileAddGameActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddGameActionSheet.tsx");

export default function openUserProfileAddGameActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10086, dependencyMap.paths), UserProfileAddGameActionSheet, arg0);
};
export const USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY = "UserProfileAddGameActionSheet";