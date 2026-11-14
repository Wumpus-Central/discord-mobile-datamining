// discord_app/modules/game_organization_invites/native/openGameOrganizationJoinOutcomeActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GameOrganizationInviteConstants from "../GameOrganizationInviteConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/openGameOrganizationJoinOutcomeActionSheet.tsx",
);

export default function openGameOrganizationJoinOutcomeActionSheet(code, result) {
  return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14094, dependencyMap.paths), closure_3, {
    code,
    result,
  });
}
