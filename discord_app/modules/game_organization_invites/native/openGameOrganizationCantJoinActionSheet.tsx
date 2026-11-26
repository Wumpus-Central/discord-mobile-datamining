// === Module 12329: openGameOrganizationCantJoinActionSheet ===

// Module 12329 (openGameOrganizationCantJoinActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11917 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx");

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12330, dependencyMap.paths), closure_3, { code, reason });
};