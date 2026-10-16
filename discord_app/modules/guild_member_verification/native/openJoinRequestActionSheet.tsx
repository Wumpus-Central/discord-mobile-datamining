// === Module 17657: openJoinRequestActionSheet ===

// Module 17657 (openJoinRequestActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(17658, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, { joinRequest });
};