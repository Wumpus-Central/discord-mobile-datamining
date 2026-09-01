// === Module 13361: filterOutBlockedOrIgnoredUsers ===

// Module 13361 (filterOutBlockedOrIgnoredUsers)
import applyDefault from "apply" /* 12 */;
import closure_3 from "markAllUserIdListsStale" /* 4130 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, closure_5) {
  closure_0 = closure_5;
  const found = mapped.filter((channel) => callback(table[1]).isNotNullish(channel));
  return found.filter((id) => {
    id = id.id;
    if (null != closure_0) {
      let hasItem = closure_0.has(id);
    } else {
      hasItem = closure_1_3.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr) {
  closure_0 = arg1;
  return arr.filter((id) => {
    if (null != closure_0) {
      let hasItem = closure_0.has(id);
    } else {
      hasItem = closure_1_3.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  return allApplicationStreams.filter((ownerId) => !blockedOrIgnored.isBlockedOrIgnored(ownerId.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  closure_0 = blockedOrIgnoredIDs;
  return items.some((id) => {
    if (null != closure_0) {
      let hasItem = closure_0.has(id);
    } else {
      hasItem = closure_1_3.isBlockedOrIgnored(id);
    }
    return hasItem;
  });
};
export const voiceStateHasBlockedUsers = function voiceStateHasBlockedUsers(userId) {
  return blockedOrIgnored.isBlockedOrIgnored(userId.userId);
};
export const filterBlockedUsersFromVoiceStates = function filterBlockedUsersFromVoiceStates(voiceStates) {
  const found = applyDefault(voiceStates).filter((userId) => !blockedOrIgnored.isBlockedOrIgnored(userId.userId));
  const arr = applyDefault(voiceStates);
  return found.keyBy("userId").value();
};