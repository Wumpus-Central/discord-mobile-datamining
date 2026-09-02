// discord_app/modules/badges/BadgeIdResolution.tsx
import USER_PROFILE_TOOLTIP_DELAY from "../user_profile/Constants.tsx";
import BadgeId from "../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import DEFAULT_PREMIUM_BADGE_ID from "../premium/tiered_tenure_badging/Constants.tsx";
import LEGACY_BADGE_ID_MAP from "../../../discord_common/js/shared/shared-constants/LegacyBadgeIdMap.tsx";
import BalanceWidgetMode from "../virtual_currency/types.tsx";
import set from "../../../_runtime/00002_set.js";

const getBadgeName = USER_PROFILE_TOOLTIP_DELAY.getBadgeName;
const items = [BadgeId.BadgeId.PREMIUM_TENURE, DEFAULT_PREMIUM_BADGE_ID.DEFAULT_PREMIUM_BADGE_ID];
const items1 = [items];
const items2 = [BadgeId.BadgeId.ORB_PROFILE, BalanceWidgetMode.OrbBadges.ORB_PROFILE_BADGE];
items1[1] = items2;
const map = new Map(items1);
let set = new Set(Object.values(LEGACY_BADGE_ID_MAP.LEGACY_BADGE_ID_MAP));
const result = set.fileFinishedImporting("modules/badges/BadgeIdResolution.tsx");

export const legacyBadgeIdToBadgeId = function legacyBadgeIdToBadgeId(arg0) {
  return LEGACY_BADGE_ID_MAP.LEGACY_BADGE_ID_MAP[arg0];
};
export const resolveProfileBadgeId = function resolveProfileBadgeId(id) {
  const tmp3 = LEGACY_BADGE_ID_MAP.LEGACY_BADGE_ID_MAP[id];
  if (null != tmp3) {
    return tmp3;
  } else {
    const tmp4 = BadgeId.BadgeId[id.toUpperCase(id)];
    let tmp5;
    if (typeof tmp4 === "number") {
      tmp5 = tmp4;
    }
    return tmp5;
  }
  const tmp = require;
};
export const toProfileBadgeLegacyId = function toProfileBadgeLegacyId(badge_id) {
  let value = map.get(badge_id);
  if (value == null) {
    value = getBadgeName(badge_id);
  }
  return value;
};
export const isLegacyBadgeId = function isLegacyBadgeId(arg0) {
  return set.has(arg0);
};
