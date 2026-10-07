// discord_app/modules/guests/GuestUtils.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildMemberConstants from "../guild_member/GuildMemberConstants.tsx";
import GuildInviteFlags from "../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
