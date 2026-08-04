import { isGuildOwner } from "GuildNSFWContentLevel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Permissions } from "ME";

function canToggleCommunicationDisableOnUser(id, id2, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [mergeGuildAvatar, createGuildRecordFromRust, getUncachedChannelPermissions];
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
        canResult = importAll(3918).can(obj);
        const obj5 = importAll(3918);
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
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx");

export default function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [mergeGuildAvatar, createGuildRecordFromRust, getUncachedChannelPermissions];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    const items = [outer1_6, outer1_4, outer1_5];
    return outer1_8(closure_0, closure_1, items);
  }, items1);
};
export { canToggleCommunicationDisableOnUser };