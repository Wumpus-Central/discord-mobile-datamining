// === Module 11314: openGameOrganizationInvitePicker ===

// Module 11314 (openGameOrganizationInvitePicker)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11030 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11315, dependencyMap.paths), closure_3, { userId });
};