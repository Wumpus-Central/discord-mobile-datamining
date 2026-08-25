// === Module 8983: useBadges ===

// Module 8983 (useBadges)
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import closure_2 from "initialize" /* 4225 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const legacy_username = "legacy_username";
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default function useBadges(getBadges) {
  const LegacyUsernameDisabled = explicitContentFromProto.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  let tmpResult = tmp(647);
  const items = [closure_3];
  const stateFromStores = tmpResult.useStateFromStores(items, () => currentUser.getCurrentUser());
  tmpResult = tmp(647);
  [][0] = closure_2;
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
      found = badges.filter((id) => id.id !== closure_4);
    }
    let mapped = found;
    if (tmp6) {
      mapped = found.map((id) => {
        const obj = {};
        const merged = Object.assign(id);
        if (id.id === closure_4) {
          const intl = callback(1236).intl;
          let description = intl.string(callback(1236).t.Br1ls3);
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