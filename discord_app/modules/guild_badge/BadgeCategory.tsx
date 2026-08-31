// === Module 8831: BadgeCategory ===

// Module 8831 (BadgeCategory)
import set from "set" /* 2 */;
import GuildVisibility from "GuildVisibility" /* 8832 */;

const obj = { PARTNERED: 0, [0]: "PARTNERED", VERIFIED: 1, [1]: "VERIFIED", VERIFIED_AND_PARTNERED: 2, [2]: "VERIFIED_AND_PARTNERED", COMMUNITY: 3, [3]: "COMMUNITY", DISCOVERABLE: 4, [4]: "DISCOVERABLE", STAFF: 5, [5]: "STAFF", NONE: 6, [6]: "NONE" };
const result = set.fileFinishedImporting("modules/guild_badge/BadgeCategory.tsx");

export const BadgeCategory = obj;
export const getBadgeCategory = function getBadgeCategory(guildTraits) {
  if (guildTraits.staff) {
    let DISCOVERABLE = obj.STAFF;
  } else {
    if (guildTraits.verified) {
      if (guildTraits.partnered) {
        DISCOVERABLE = obj.VERIFIED_AND_PARTNERED;
      }
    }
    if (guildTraits.verified) {
      DISCOVERABLE = obj.VERIFIED;
    } else if (guildTraits.partnered) {
      DISCOVERABLE = obj.PARTNERED;
    } else {
      if (guildTraits.community) {
        if (guildTraits.visibility === GuildVisibility.GuildVisibility.PUBLIC) {
          DISCOVERABLE = obj.DISCOVERABLE;
        }
      }
      DISCOVERABLE = guildTraits.community ? tmp3.COMMUNITY : tmp3.NONE;
    }
  }
  return DISCOVERABLE;
};