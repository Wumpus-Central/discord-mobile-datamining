// === Module 11311: GuestUtils ===

// Module 11311 (GuestUtils)
import FlagUtils from "FlagUtils" /* 1384 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4187 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8392 */;
import size from "module_2" /* 2 */;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const result = size.fileFinishedImporting("modules/guests/GuestUtils.tsx");

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
      const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.IS_GUEST);
      let hasFlagResult1 = !hasFlagResult;
      if (hasFlagResult) {
        let num2 = guild.flags;
        if (num2 == null) {
          num2 = 0;
        }
        hasFlagResult1 = FlagUtils.hasFlag(num2, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = FlagUtils;
      }
      tmp = hasFlagResult1;
    }
    return tmp;
  }
};