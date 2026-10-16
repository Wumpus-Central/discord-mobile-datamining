// === Module 14707: BlockedUserUtils ===

// Module 14707 (BlockedUserUtils)
import RelationshipStore from "RelationshipStore" /* 4819 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, afkChannelId) {
  const found = mapped.filter((item) => afkChannelId(dependencyMap[1]).isNotNullish(item));
  return found.filter((id) => {
    id = id.id;
    if (null != afkChannelId) {
      let hasItem = afkChannelId.has(id);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr, arg1) {
  return arr.filter((item) => {
    if (null != set) {
      let hasItem = set.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return !hasItem;
  });
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredUserIds) {
  return items.some((item) => {
    if (null != blockedOrIgnoredUserIds) {
      let hasItem = blockedOrIgnoredUserIds.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return hasItem;
  });
};