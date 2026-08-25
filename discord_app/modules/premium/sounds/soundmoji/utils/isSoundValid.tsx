// === Module 4856: isSoundValid ===

// Module 4856 (isSoundValid)
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4043 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "getUncachedChannelPermissions" /* 4025 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME" /* 4852 */;
import { Permissions } from "sum" /* 505 */;

let result = require("set").fileFinishedImporting("modules/premium/sounds/soundmoji/utils/isSoundValid.tsx");

export default function isSoundValid(guildId) {
  channel = channel.getChannel(arg2);
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  if (guildId === DEFAULT_SOUND_GUILD_ID) {
    return true;
  } else {
    let guildId1;
    if (guildId != null) {
      guildId1 = guildId.guildId;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guildId1 !== guild_id) {
      let guildId2;
      if (guildId != null) {
        guildId2 = guildId.guildId;
      }
      if (guildId2 !== arg1) {
        let canResult = null == channel;
        const result = getPremiumPlanItemDefault.canUseSoundboardEverywhere(currentUser.getCurrentUser());
        if (!canResult) {
          canResult = null == channel.guild_id;
        }
        if (!canResult) {
          canResult = closure_3.can(Permissions.USE_EXTERNAL_SOUNDS, channel);
        }
        if (canResult) {
          canResult = result;
        }
        return canResult;
      }
    }
    return true;
  }
};