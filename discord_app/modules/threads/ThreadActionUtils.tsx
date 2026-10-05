// discord_app/modules/threads/ThreadActionUtils.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/threads/ThreadActionUtils.tsx");

export const doesThreadMembersActionAffectMe = function doesThreadMembersActionAffectMe(removedMemberIds) {
  const id = AuthenticationStore.getId();
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
