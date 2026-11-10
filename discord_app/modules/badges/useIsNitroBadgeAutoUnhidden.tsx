// === Module 19273: useIsNitroBadgeAutoUnhidden ===

// Module 19273 (useIsNitroBadgeAutoUnhidden)
import initialize from "initialize" /* 504 */;
import BadgeId from "BadgeId" /* 8832 */;
import UserStore from "UserStore" /* 1385 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8840 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useIsNitroBadgeAutoUnhidden.tsx");

export default function useIsNitroBadgeAutoUnhidden() {
  items = [UserStore, BadgeDirectoryStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      badgeById = badgeById.getBadgeById(BadgeId.BadgeId.PREMIUM_TENURE, id);
      let flag;
      if (badgeById != null) {
        flag = badgeById.auto_unhidden;
      }
      if (flag == null) {
        flag = false;
      }
      tmp3 = flag;
    }
    return tmp3;
  });
};