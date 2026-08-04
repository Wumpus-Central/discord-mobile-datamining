// discord_app/modules/guests/GuestUtils.tsx
import { GuildMemberFlags } from "GuildMemberFlags";

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
      const hasFlagResult = require(1384) /* hasFlag */.hasFlag(num, GuildMemberFlags.IS_GUEST);
      let hasFlagResult1 = !hasFlagResult;
      if (hasFlagResult) {
        let num2 = guild.flags;
        if (num2 == null) {
          num2 = 0;
        }
        hasFlagResult1 = tmp2(1384).hasFlag(num2, tmp2(6712).GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = tmp2(1384);
      }
      tmp = hasFlagResult1;
      const obj2 = require(1384) /* hasFlag */;
    }
    return tmp;
  }
};