// discord_app/modules/guild_badge/BadgeCategory.tsx
import GuildTraits from "GuildTraits.tsx";
import size from "../../../_runtime/metro/00002__.js";

const BadgeCategory = {
  PARTNERED: 0,
  [0]: "PARTNERED",
  VERIFIED: 1,
  [1]: "VERIFIED",
  VERIFIED_AND_PARTNERED: 2,
  [2]: "VERIFIED_AND_PARTNERED",
  COMMUNITY: 3,
  [3]: "COMMUNITY",
  DISCOVERABLE: 4,
  [4]: "DISCOVERABLE",
  STAFF: 5,
  [5]: "STAFF",
  NONE: 6,
  [6]: "NONE",
};
const result = size.fileFinishedImporting("modules/guild_badge/BadgeCategory.tsx");

export { BadgeCategory };
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
        if (guildTraits.visibility === GuildTraits.GuildVisibility.PUBLIC) {
          DISCOVERABLE = obj.DISCOVERABLE;
        }
      }
      DISCOVERABLE = guildTraits.community ? tmp3.COMMUNITY : tmp3.NONE;
    }
  }
  return DISCOVERABLE;
};
