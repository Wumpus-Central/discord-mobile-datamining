// === Module 16079: openJoinRequestActionSheet ===

// Module 16079 (openJoinRequestActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16080, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};