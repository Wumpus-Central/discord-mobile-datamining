// discord_app/modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx
import asyncRequireImpl from "../../../../_runtime/02002_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GameOrganizationInviteConstants from "../GameOrganizationInviteConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/openGameOrganizationInvitePicker.tsx",
);

export default function openGameOrganizationInvitePicker(userId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11314, dependencyMap.paths), closure_3, { userId });
}
