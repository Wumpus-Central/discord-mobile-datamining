// === Module 12205: openGameOrganizationJoinOutcomeActionSheet ===

// Module 12205 (openGameOrganizationJoinOutcomeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11856 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeActionSheet.tsx");

export default function openGameOrganizationJoinOutcomeActionSheet(code, result) {
  return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12206, dependencyMap.paths), closure_3, { code, result });
};