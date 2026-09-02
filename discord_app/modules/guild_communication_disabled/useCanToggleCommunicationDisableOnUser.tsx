// === Module 8437: canToggleCommunicationDisableOnUser ===

// Module 8437 (canToggleCommunicationDisableOnUser)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1429 */;
import applyOverwritesAll from "applyOverwrites" /* 4125 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import closure_5 from "getUncachedChannelPermissions" /* 4120 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;

function canToggleCommunicationDisableOnUser(id, id2, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_6, closure_4, closure_5];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const guild = obj2.getGuild(id);
  const user = obj.getUser(id2);
  let tmp6 = null != guild && null != user;
  if (tmp6) {
    const isNonUserBotResult = user.isNonUserBot();
    let tmp8 = !isNonUserBotResult;
    if (!isNonUserBotResult) {
      let canResult = isGuildOwner(guild, user);
      if (!canResult) {
        obj = { permission: null, user: null, context: null };
        obj[0] = Permissions.ADMINISTRATOR;
        obj[1] = user;
        obj[2] = guild;
        canResult = applyOverwritesAll.can(obj);
        const obj5 = applyOverwritesAll;
      }
      let canManageUserResult = !canResult;
      if (!canResult) {
        canManageUserResult = obj3.canManageUser(Permissions.MODERATE_MEMBERS, user, guild);
      }
      tmp8 = canManageUserResult;
    }
    tmp6 = tmp8;
  }
  return tmp6;
}
const isGuildOwner = GuildNSFWContentLevel.isGuildOwner;
const Permissions = ME.Permissions;
const result = set.fileFinishedImporting("modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx");

export default function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_6, closure_4, closure_5];
  const items1 = [arg0, arg1];
  return _require(586).useStateFromStores(items, () => {
    const items = [closure_1_6, closure_1_4, closure_1_5];
    return closure_1_8(closure_0, closure_1, items);
  }, items1);
};
export { canToggleCommunicationDisableOnUser };