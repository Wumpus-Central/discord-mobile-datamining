// discord_app/modules/guild_member_verification/native/openJoinRequestActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { joinRequest };
  obj.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(15568, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};