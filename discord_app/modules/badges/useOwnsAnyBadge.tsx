// === Module 16913: useOwnsAnyBadge ===

// Module 16913 (useOwnsAnyBadge)
import useBadgesDefault from "useBadges" /* 8358 */;
import UserStore from "UserStore" /* 1371 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8309 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useOwnsAnyBadge.tsx");

export default function useOwnsAnyBadge() {
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj = stateFromStores(504);
  const items1 = [BadgeDirectoryStore];
  const items2 = [stateFromStores];
  let stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
    let someResult = null;
    if (null != stateFromStores) {
      someResult = null;
      if (BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badges = BadgeDirectoryStore.getBadges(stateFromStores);
        someResult = badges.some((owned) => owned.owned);
      }
    }
    return someResult;
  }, items2);
  const obj2 = stateFromStores(504);
  if (stateFromStores1 == null) {
    stateFromStores1 = useBadgesDefault(tmp3).length > 0;
  }
  return stateFromStores1;
};