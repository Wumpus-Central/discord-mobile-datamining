// discord_app/modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import GuildNSFWContentLevel from "../../records/GuildRecord.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import closure_4 from "../../stores/GuildStore.tsx";
import closure_5 from "../../stores/PermissionStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";

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
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_6, closure_1_4, closure_1_5];
    return closure_1_8(closure_0, closure_1, items);
  }, items1);
};
export { canToggleCommunicationDisableOnUser };