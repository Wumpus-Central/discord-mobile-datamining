// === Module 4972: shouldShowMembershipVerificationGate ===

// Module 4972 (shouldShowMembershipVerificationGate)
import isValidFormResponse from "isValidFormResponse" /* 4973 */;
import closure_2 from "trackCommunicationDisabled" /* 1993 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import closure_4 from "mergeGuildAvatar" /* 1923 */;

require = arg1;
function shouldShowMembershipVerificationGate(guildId, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_3, closure_4, closure_2];
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
      flag = isValidFormResponse.guildHasVerificationGate(guild);
      const obj4 = isValidFormResponse;
    }
    return flag;
  }
}
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx");

export { shouldShowMembershipVerificationGate };
export const useShowMemberVerificationGate = function useShowMemberVerificationGate(guild_id) {
  const _require = guild_id;
  let items = [closure_3, closure_4, closure_2];
  const items1 = [guild_id];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const items = [closure_1_3, closure_1_4, closure_1_2];
      tmp2 = closure_1_5(tmp, items);
    }
    return tmp2;
  }, items1);
};