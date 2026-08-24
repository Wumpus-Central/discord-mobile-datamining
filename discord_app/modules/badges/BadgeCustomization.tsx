// discord_app/modules/badges/BadgeCustomization.tsx
import BadgeId from "../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import set from "../../../_runtime/00002_set.js";

let items = [BadgeId.BadgeId.STAFF];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/badges/BadgeCustomization.tsx");

export const NON_CUSTOMIZABLE_BADGE_IDS = set;
export const getUnhideableBadgeIds = function getUnhideableBadgeIds(tenureBadgeHideable) {
  if (!tenureBadgeHideable.tenureBadgeHideable) {
    const _Set = Set;
    const items = [];
    items[HermesBuiltin.arraySpread(set, 0)] = BadgeId.BadgeId.PREMIUM_TENURE;
    set = new Set(items);
    const arraySpreadResult = HermesBuiltin.arraySpread(set, 0);
  }
  return set;
};
export const getHideableBadges = function getHideableBadges(memo, unhideableBadgeIds) {
  closure_0 = unhideableBadgeIds;
  const found = memo.filter((owned) => {
    owned = owned.owned;
    if (owned) {
      owned = !unhideableBadgeIds.has(owned.badge_id);
    }
    return owned;
  });
  return found.sort((hidden, hidden2) => {
    let flag = hidden.hidden;
    if (flag == null) {
      flag = false;
    }
    let flag2 = hidden2.hidden;
    if (flag2 == null) {
      flag2 = false;
    }
    return Number(flag) - Number(flag2);
  });
};