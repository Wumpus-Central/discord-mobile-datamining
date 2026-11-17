// === Module 12757: openGameOrganizationInvitePicker ===

// Module 12757 (openGameOrganizationInvitePicker)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx");

export default function openGameOrganizationInvitePicker(userId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12758, dependencyMap.paths), closure_3, { userId });
};