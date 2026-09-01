// === Module 4128: doesThreadMembersActionAffectMe ===

// Module 4128 (doesThreadMembersActionAffectMe)
import closure_0 from "fetchFingerprint" /* 1218 */;

const result = require("set").fileFinishedImporting("modules/threads/ThreadActionUtils.tsx");

export const doesThreadMembersActionAffectMe = function doesThreadMembersActionAffectMe(removedMemberIds) {
  id = id.getId();
  let tmp2 = null != id;
  if (tmp2) {
    removedMemberIds = removedMemberIds.removedMemberIds;
    let hasItem;
    if (removedMemberIds != null) {
      hasItem = removedMemberIds.includes(id);
    }
    let tmp5 = hasItem;
    if (!tmp5) {
      const addedMembers = removedMemberIds.addedMembers;
      let someResult;
      if (addedMembers != null) {
        someResult = addedMembers.some((userId) => userId.userId === id);
      }
      tmp5 = someResult;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};