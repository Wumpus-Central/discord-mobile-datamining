// discord_app/modules/guests/GuestUtils.tsx
import { GuildMemberFlags } from "GuildMemberFlags";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";

const result = require("set").fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default {
  canAcceptInvite(items, guild) {
    let obj;
    [obj] = items;
    guild = guild.guild;
    let tmp = null == guild;
    if (!tmp) {
      const selfMember = obj.getSelfMember(guild.id);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = hasFlag.hasFlag(num, GuildMemberFlags.IS_GUEST);
      let hasFlagResult1 = !hasFlagResult;
      if (hasFlagResult) {
        let num2 = guild.flags;
        if (num2 == null) {
          num2 = 0;
        }
        hasFlagResult1 = tmp2(1403).hasFlag(num2, tmp2(7774).GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = tmp2(1403);
      }
      tmp = hasFlagResult1;
      const obj2 = hasFlag;
    }
    return tmp;
  }
};