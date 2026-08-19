// === Module 15834: openJoinRequestActionSheet ===

// Module 15834 (openJoinRequestActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(15835, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};