// === Module 8937: set ===

// Module 8937 (set)
import BadgeId from "BadgeId" /* 8932 */;
import LEGACY_BADGE_ID_MAP from "LEGACY_BADGE_ID_MAP" /* 8938 */;
import set from "set" /* 2 */;

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
export const isLegacyBadgeId = function isLegacyBadgeId(arg0) {
  return set.has(arg0);
};