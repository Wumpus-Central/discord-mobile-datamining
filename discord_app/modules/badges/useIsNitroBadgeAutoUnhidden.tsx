// discord_app/modules/badges/useIsNitroBadgeAutoUnhidden.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import BadgeId from "../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import UserStore from "../../stores/UserStore.tsx";
import BadgeDirectoryStore from "BadgeDirectoryStore.tsx";

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
}
