import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
// discord_app/modules/guild_member_verification/native/openJoinRequestActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl /* asyncRequireImpl */(15568, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};