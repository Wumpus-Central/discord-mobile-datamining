// === Module 5429: useGuildMemberDisplayRole ===

// Module 5429 (useGuildMemberDisplayRole)
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
function getHighestHoistedRole(arg0, arg1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [GuildStore, GuildMemberStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != arg0) {
    if (null != arg1) {
      const guild = obj.getGuild(arg0);
      if (null == guild) {
        return null;
      } else {
        const member = obj2.getMember(guild.id, arg1);
        let highestHoistedRole = null;
        if (null != member) {
          highestHoistedRole = PermissionUtilsAll.getHighestHoistedRole(guild, member);
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default function useGuildMemberDisplayRole(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [GuildStore, GuildMemberStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    const items = [GuildStore, GuildMemberStore];
    return getHighestHoistedRole(closure_0, closure_1, items);
  }, items1);
};
export { getHighestHoistedRole };