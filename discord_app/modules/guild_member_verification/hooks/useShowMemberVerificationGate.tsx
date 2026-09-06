// === Module 5057: useShowMemberVerificationGate ===

// Module 5057 (useShowMemberVerificationGate)
import MemberVerificationUtils from "MemberVerificationUtils" /* 5058 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function shouldShowMembershipVerificationGate(guildId, items) {
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, UserStore, GuildMemberStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  if (null == guildId) {
    return false;
  } else {
    const guild = obj.getGuild(guildId);
    const currentUser = obj2.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const member = obj3.getMember(guildId, currentUser.id);
      let flag2;
      if (member != null) {
        flag2 = member.isPending;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      flag = flag2;
    }
    if (flag) {
      flag = MemberVerificationUtils.guildHasVerificationGate(guild);
    }
    return flag;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx");

export { shouldShowMembershipVerificationGate };
export const useShowMemberVerificationGate = function useShowMemberVerificationGate(guild_id) {
  _require = guild_id;
  let items = [GuildStore, UserStore, GuildMemberStore];
  const items1 = [guild_id];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const items = [GuildStore, UserStore, GuildMemberStore];
      tmp2 = shouldShowMembershipVerificationGate(tmp, items);
    }
    return tmp2;
  }, items1);
};