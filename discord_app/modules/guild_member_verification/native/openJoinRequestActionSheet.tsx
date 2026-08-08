// discord_app/modules/guild_member_verification/native/openJoinRequestActionSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(15686, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};