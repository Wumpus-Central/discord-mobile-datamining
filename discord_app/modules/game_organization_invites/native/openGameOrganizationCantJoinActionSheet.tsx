// discord_app/modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GameOrganizationInviteConstants from "../GameOrganizationInviteConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/openGameOrganizationCantJoinActionSheet.tsx",
);

export default function openGameOrganizationCantJoinActionSheet(code, reason) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13970, dependencyMap.paths), closure_3, { code, reason });
}
