// discord_app/modules/guests/GuestUtils.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildMemberConstants from "../guild_member/GuildMemberConstants.tsx";
import GuildInviteFlags from "../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const obj = {
  canAcceptInvite(items, guild) {
    let obj;
    [obj] = items;
    guild = guild.guild;
    let tmp = null == guild;
    if (!tmp) {
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      const selfMember = obj.getSelfMember(guild.id);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = hasFlag(num, GuildMemberFlags.IS_GUEST);
      let hasFlag2Result = !hasFlagResult;
      if (hasFlagResult) {
        let num2 = guild.flags;
        const hasFlag2 = FlagUtils.hasFlag;
        FlagUtils;
        if (num2 == null) {
          num2 = 0;
        }
        hasFlag2Result = hasFlag2(num2, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
      }
      tmp = hasFlag2Result;
    }
    return tmp;
  },
};
const result = size.fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default obj;
