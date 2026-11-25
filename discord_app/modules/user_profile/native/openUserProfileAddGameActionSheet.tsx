// === Module 14511: openUserProfileAddGameActionSheet ===

// Module 14511 (openUserProfileAddGameActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const UserProfileAddGameActionSheet = "UserProfileAddGameActionSheet";
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddGameActionSheet.tsx");

export default function openUserProfileAddGameActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14512, dependencyMap.paths), UserProfileAddGameActionSheet, arg0);
};
export const USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY = "UserProfileAddGameActionSheet";