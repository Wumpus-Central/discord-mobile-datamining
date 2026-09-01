// === Module 10948: ? ===

// Module 10948
import set from "set" /* 2 */;
import hasFlag from "hasFlag" /* 1399 */;
import GuildMemberFlags2 from "GuildMemberFlags" /* 4109 */;

const GuildMemberFlags = GuildMemberFlags2.GuildMemberFlags;
const result = set.fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default {
  canAcceptInvite(items, guild) {
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
        hasFlagResult1 = tmp2(1399).hasFlag(num2, tmp2(8663).GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = tmp2(1399);
      }
      tmp = hasFlagResult1;
      const obj2 = hasFlag;
    }
    return tmp;
  }
};