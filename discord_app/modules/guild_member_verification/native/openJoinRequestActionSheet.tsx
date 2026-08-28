// discord_app/modules/guild_member_verification/native/openJoinRequestActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16098, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};