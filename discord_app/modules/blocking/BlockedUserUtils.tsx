// discord_app/modules/blocking/BlockedUserUtils.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, closure_5) {
  closure_0 = closure_5;
  const found = mapped.filter((item, index) => callback(table[1]).isNotNullish(item));
  return found.filter((item, index) => {
    const id = item.id;
    if (null != set) {
      let hasItem = set.has(id);
    } else {
      hasItem = closure_1_3.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr) {
  closure_0 = arg1;
  return arr.filter((item, index) => {
    if (null != set) {
      let hasItem = set.has(item);
    } else {
      hasItem = closure_1_3.isBlockedOrIgnored(item);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  return allApplicationStreams.filter((item, index) => !blockedOrIgnored.isBlockedOrIgnored(item.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  closure_0 = blockedOrIgnoredIDs;
  return items.some((item, index) => {
    if (null != blockedOrIgnoredIDs) {
      let hasItem = blockedOrIgnoredIDs.has(item);
    } else {
      hasItem = closure_1_3.isBlockedOrIgnored(item);
    }
    return hasItem;
  });
};
export const voiceStateHasBlockedUsers = function voiceStateHasBlockedUsers(userId) {
  return blockedOrIgnored.isBlockedOrIgnored(userId.userId);
};
export const filterBlockedUsersFromVoiceStates = function filterBlockedUsersFromVoiceStates(voiceStates) {
  const found = applyDefault(voiceStates).filter((item, index) => !blockedOrIgnored.isBlockedOrIgnored(item.userId));
  const arr = applyDefault(voiceStates);
  return found.keyBy("userId").value();
};