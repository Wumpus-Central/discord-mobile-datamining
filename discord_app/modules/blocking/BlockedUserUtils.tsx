// === Module 13522: BlockedUserUtils ===

// Module 13522 (BlockedUserUtils)
import _modDef12 from "module_12" /* 12 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import size from "module_2" /* 2 */;

let id, set;

const result = size.fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, stateFromStores1) {
  const found = mapped.filter((item) => {
    const obj = stateFromStores1(dependencyMap[1]);
    return obj.isNotNullish(item);
  });
  return found.filter((id) => {
    let hasItem;
    id = id.id;
    if (null != stateFromStores1) {
      hasItem = stateFromStores1.has(id);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr, arg1) {
  set = arg1;
  return arr.filter((item) => {
    let hasItem;
    if (null != set) {
      hasItem = set.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  let blockedOrIgnored;
  return allApplicationStreams.filter((ownerId) => !blockedOrIgnored.isBlockedOrIgnored(ownerId.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  return items.some((item) => {
    let hasItem;
    if (null != blockedOrIgnoredIDs) {
      hasItem = blockedOrIgnoredIDs.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return hasItem;
  });
};
export const voiceStateHasBlockedUsers = function voiceStateHasBlockedUsers(userId) {
  return RelationshipStore.isBlockedOrIgnored(userId.userId);
};
export const filterBlockedUsersFromVoiceStates = function filterBlockedUsersFromVoiceStates(voiceStates) {
  let blockedOrIgnored;
  const arr = _modDef12(voiceStates);
  const found = arr.filter((userId) => !blockedOrIgnored.isBlockedOrIgnored(userId.userId));
  const iter = found.keyBy("userId");
  return iter.value();
};