// discord_app/modules/blocking/BlockedUserUtils.tsx
import RelationshipStore from "../../stores/RelationshipStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export function filterOutBlockedOrIgnoredUsers(mapped, stateFromStores1) {
  const found = mapped.filter((item) => stateFromStores1(dependencyMap[1]).isNotNullish(item));
  return found.filter((id) => {
    id = id.id;
    if (null != stateFromStores1) {
      let hasItem = stateFromStores1.has(id);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
}
export function filterOutBlockedOrIgnoredUserIds(arr, arg1) {
  return arr.filter((item) => {
    if (null != set) {
      let hasItem = set.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return !hasItem;
  });
}
export function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredUserIds) {
  return items.some((item) => {
    if (null != blockedOrIgnoredUserIds) {
      let hasItem = blockedOrIgnoredUserIds.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return hasItem;
  });
}
