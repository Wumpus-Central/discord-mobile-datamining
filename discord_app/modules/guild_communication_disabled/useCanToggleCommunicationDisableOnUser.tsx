// discord_app/modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx
import Constants from "../../Constants.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function canToggleCommunicationDisableOnUser(id, id1) {
  let items;
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, GuildStore, PermissionStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const guild = obj2.getGuild(id);
  const user = obj.getUser(id1);
  let tmp6 = null != guild && null != user;
  if (tmp6) {
    let tmp8 = !user.isNonUserBot();
    user.isNonUserBot();
    if (tmp8) {
      let canResult = isGuildOwner(guild, user);
      if (!canResult) {
        const obj4 = { permission: Permissions.ADMINISTRATOR, user, context: guild };
        const obj5 = PermissionUtilsAll;
        canResult = obj5.can(obj4);
      }
      tmp8 = !canResult && obj3.canManageUser(Permissions.MODERATE_MEMBERS, user, guild);
      const canManageUserResult = !canResult && obj3.canManageUser(Permissions.MODERATE_MEMBERS, user, guild);
    }
    tmp6 = tmp8;
  }
  return tmp6;
}
const isGuildOwner = GuildRecord.isGuildOwner;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore, GuildStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp8;
        let tmp9;
        if (cResult[2] === arg1) {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp8, tmp9);
      }
      const fn = function c() {
        const items = [UserStore, GuildStore, PermissionStore];
        return canToggleCommunicationDisableOnUser(closure_0, closure_1, items);
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp9 = items1;
      tmp8 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      let items = [UserStore, GuildStore, PermissionStore];
      const items1 = [arg0, arg1];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const items = [UserStore, GuildStore, PermissionStore];
          return canToggleCommunicationDisableOnUser(closure_0, closure_1, items);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting(
  "modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx",
);

export default tmp2;
export { canToggleCommunicationDisableOnUser };
