// discord_app/modules/premium/sounds/soundmoji/utils/isSoundValid.tsx
import getPremiumPlanItemDefault from "../../../../../utils/PremiumUtils.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../../../../stores/PermissionStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { DEFAULT_SOUND_GUILD_ID } from "../../../../soundboard/SoundboardConstants.tsx";
import { Permissions } from "../../../../../../discord_common/js/shared/Constants.tsx";

let result = require("obj132").fileFinishedImporting("modules/premium/sounds/soundmoji/utils/isSoundValid.tsx");

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