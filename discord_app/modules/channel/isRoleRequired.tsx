// discord_app/modules/channel/isRoleRequired.tsx
import { GUILD_NON_CATEGORY_CHANNEL_TYPES as closure_2 } from "createChannelRecord";
import { Permissions } from "sum";

const result = require("applyOverwrites").fileFinishedImporting("modules/channel/isRoleRequired.tsx");

export default function isRoleRequired(guild_id) {
  if (null == guild_id) {
    return false;
  } else {
    if (null != guild_id.guild_id) {
      if (set.has(tmp9)) {
        if (guild_id.isGuildVocal()) {
          if (!obj.canEveryoneRole(Permissions.CONNECT, guild_id)) {
            return true;
          }
          obj = importAll(3934);
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = importAll(506).has(tmp4.deny, Permissions.VIEW_CHANNEL);
          const obj2 = importAll(506);
        }
        return hasItem;
      }
    }
    return false;
  }
};