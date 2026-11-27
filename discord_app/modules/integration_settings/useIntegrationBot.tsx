// discord_app/modules/integration_settings/useIntegrationBot.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserRecord from "../../records/UserRecord.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_8 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/useIntegrationBot.tsx");

export default function useIntegrationBot(id, bot) {
  _require = id;
  bot = bot.bot;
  items = [bot];
  const memo = roles.useMemo(() => {
    let tmp2 = null;
    if (null != bot) {
      tmp2 = new UserRecord(bot);
    }
    return tmp2;
  }, items);
  id = undefined;
  if (memo != null) {
    id = memo.id;
  }
  const items1 = [GuildMemberStore];
  const items2 = [id, id.id];
  const stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => {
      let member = null;
      if (null != id) {
        member = GuildMemberStore.getMember(user.id, tmp);
      }
      return member;
    },
    items2,
  );
  const obj2 = require("initialize");
  const tmp3 = _require;
  const tmp4 = stateFromStores1;
  const items3 = [GuildRoleStore];
  const items4 = [id];
  stateFromStores1 = require("initialize").useStateFromStores(
    items3,
    () => GuildRoleStore.getEveryoneRole(closure_0),
    items4,
  );
  roles = undefined;
  if (stateFromStores != null) {
    roles = stateFromStores.roles;
  }
  if (roles == null) {
    roles = closure_8;
  }
  const obj3 = require("initialize");
  const items5 = [GuildRoleStore];
  const items6 = [id.id, roles];
  const stateFromStoresArray = tmp3(tmp4[4]).useStateFromStoresArray(
    items5,
    () => GuildRoleStore.getManyRoles(user.id, roles),
    items6,
  );
  const items7 = [id.id, id];
  const effect = obj.useEffect(() => {
    if (null != id) {
      const membersById = GuildActionCreatorsDefault.requestMembersById(user.id, tmp);
    }
  }, items7);
  const items8 = [stateFromStores1, stateFromStoresArray];
  const memo1 = obj.useMemo(() => {
    items = [stateFromStores1.permissions, ...stateFromStoresArray.map((permissions) => permissions.permissions)];
    const grantedPermissions = [];
    const deniedPermissions = [];
    for (const item10030 of tmp3) {
      let obj = BigFlagUtilsAll;
      if (obj.has(applyResult, item10030)) {
        let arr = grantedPermissions.push(item10030);
      } else {
        let arr2 = deniedPermissions.push(item10030);
      }
      continue;
    }
    return { grantedPermissions, deniedPermissions };
  }, items8);
  let tmp14 = null;
  if (null != memo) {
    const obj4 = {
      bot: memo,
      member: stateFromStores,
      roleIds: roles,
      grantedPermissions: tmp12,
      deniedPermissions: tmp13,
    };
    tmp14 = obj4;
  }
  return tmp14;
}
