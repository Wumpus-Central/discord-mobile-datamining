// === Module 16679: openJoinRequestActionSheet ===

// Module 16679 (openJoinRequestActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16680, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};