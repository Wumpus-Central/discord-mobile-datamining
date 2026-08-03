import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
function shouldShowMembershipVerificationGate(guildId, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [createGuildRecordFromRust, mergeGuildAvatar, trackCommunicationDisabled];
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
      flag = require(4743) /* isValidFormResponse */.guildHasVerificationGate(guild);
      const obj4 = require(4743) /* isValidFormResponse */;
    }
    return flag;
  }
}
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx");

export { shouldShowMembershipVerificationGate };
export const useShowMemberVerificationGate = function useShowMemberVerificationGate(guild_id) {
  const _require = guild_id;
  let items = [createGuildRecordFromRust, mergeGuildAvatar, trackCommunicationDisabled];
  const items1 = [guild_id];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const items = [outer1_3, outer1_4, outer1_2];
      tmp2 = outer1_5(tmp, items);
    }
    return tmp2;
  }, items1);
};