// === Module 8242: useBadges ===

// Module 8242 (useBadges)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const legacy_username = "legacy_username";
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default function useBadges(getBadges, arg1) {
  const LegacyUsernameDisabled = UserSettings.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  let tmpResult = tmp(563);
  const items = [UserStore];
  const stateFromStores = tmpResult.useStateFromStores(items, () => currentUser.getCurrentUser());
  tmpResult = tmp(563);
  [][0] = StreamerModeStore;
  if (null == getBadges) {
    return [];
  } else {
    let badges;
    if (getBadges != null) {
      badges = getBadges.getBadges();
    }
    if (badges == null) {
      badges = [];
    }
    let found = badges;
    if (tmp7) {
      found = badges.filter((id) => id.id !== legacy_username);
    }
    let mapped = found;
    if (tmp6) {
      mapped = found.map((id) => {
        const obj = {};
        const merged = Object.assign(id);
        if (id.id === legacy_username) {
          const intl = util.intl;
          let description = intl.string(util.t.Br1ls3);
        } else {
          description = id.description;
        }
        obj.description = description;
        return obj;
      });
    }
    return mapped;
  }
};
export const QUEST_COMPLETED_BADGE = "quest_completed";