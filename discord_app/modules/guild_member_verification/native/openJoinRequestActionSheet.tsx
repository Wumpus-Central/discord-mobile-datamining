// === Module 16655: openJoinRequestActionSheet ===

// Module 16655 (openJoinRequestActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16656, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};