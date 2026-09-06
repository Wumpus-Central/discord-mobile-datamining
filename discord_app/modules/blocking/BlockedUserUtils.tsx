// === Module 13709: BlockedUserUtils ===

// Module 13709 (BlockedUserUtils)
import _modDef12 from "module_12" /* 12 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, arg1) {
  const set = arg1;
  const found = mapped.filter((item) => set(dependencyMap[1]).isNotNullish(item));
  return found.filter((id) => {
    id = id.id;
    if (null != set) {
      let hasItem = set.has(id);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr, arg1) {
  const set = arg1;
  return arr.filter((item) => {
    if (null != set) {
      let hasItem = set.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  return allApplicationStreams.filter((ownerId) => !blockedOrIgnored.isBlockedOrIgnored(ownerId.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  return items.some((item) => {
    if (null != blockedOrIgnoredIDs) {
      let hasItem = blockedOrIgnoredIDs.has(item);
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
  const found = _modDef12(voiceStates).filter((userId) => !blockedOrIgnored.isBlockedOrIgnored(userId.userId));
  const arr = _modDef12(voiceStates);
  return found.keyBy("userId").value();
};