// === Module 5287: isRoleRequired ===

// Module 5287 (isRoleRequired)
import obj132 from "obj132" /* 2 */;
import sum from "sum" /* 505 */;
import fromStringAll from "fromString" /* 506 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import applyOverwritesAll from "applyOverwrites" /* 4026 */;

let closure_2 = createChannelRecord.GUILD_NON_CATEGORY_CHANNEL_TYPES;
const Permissions = sum.Permissions;
const result = obj132.fileFinishedImporting("modules/channel/isRoleRequired.tsx");

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
          obj = applyOverwritesAll;
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = fromStringAll.has(tmp4.deny, Permissions.VIEW_CHANNEL);
        }
        return hasItem;
      }
    }
    return false;
  }
};