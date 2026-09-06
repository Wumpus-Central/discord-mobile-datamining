// discord_app/modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx
import Constants from "../../Constants.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function canToggleCommunicationDisableOnUser(id, id2) {
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, GuildStore, PermissionStore];
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
        obj = { permission: Permissions.ADMINISTRATOR, user, context: guild };
        canResult = PermissionUtilsAll.can(obj);
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
const isGuildOwner = GuildRecord.isGuildOwner;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting(
  "modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx",
);

export default function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [UserStore, GuildStore, PermissionStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const items = [UserStore, GuildStore, PermissionStore];
      return canToggleCommunicationDisableOnUser(closure_0, closure_1, items);
    },
    items1,
  );
}
export { canToggleCommunicationDisableOnUser };
