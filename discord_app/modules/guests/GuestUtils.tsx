// discord_app/modules/guests/GuestUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildMemberFlags2 from "../guild_member/GuildMemberConstants.tsx";
import set from "../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";

const GuildMemberFlags = GuildMemberFlags2.GuildMemberFlags;
const result = obj132.fileFinishedImporting("modules/guests/GuestUtils.tsx");

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
        hasFlagResult1 = hasFlag.hasFlag(num2, set.GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = hasFlag;
      }
      tmp = hasFlagResult1;
    }
    return tmp;
  }
};