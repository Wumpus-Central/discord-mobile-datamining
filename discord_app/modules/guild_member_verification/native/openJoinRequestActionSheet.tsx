// discord_app/modules/guild_member_verification/native/openJoinRequestActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(15835, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};