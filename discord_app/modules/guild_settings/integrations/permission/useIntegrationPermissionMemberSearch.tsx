// discord_app/modules/guild_settings/integrations/permission/useIntegrationPermissionMemberSearch.tsx
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import IntegrationPermissionSearchUtils from "IntegrationPermissionSearchUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function memberTerms(id) {
  items = [id.username];
  let nick;
  if (id != null) {
    nick = id.nick;
  }
  if (null != nick) {
    items.push(id.nick);
  }
  return { id: id.id, names: items };
}
function roleTerms(id) {
  const obj = { id: id.id, names: null };
  items = [id.name];
  obj.names = items;
  return obj;
}
const GuildRoleRecord = fn(4950);
({ hasPermission: closure_6, isEveryoneRole: metroImportDefault } = GuildRoleRecord);
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/useIntegrationPermissionMemberSearch.tsx",
);

export function useIntegrationPermissionMemberSearch(arg0) {
  _require = arg0;
  function isBotRole(nextResult) {
    let managed = nextResult.managed;
    if (managed) {
      const tags = nextResult.tags;
      let bot_id;
      if (tags != null) {
        bot_id = tags.bot_id;
      }
      managed = null != bot_id;
    }
    return managed;
  }
  items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  stateFromStores(stateFromStoresArray[10])(
    null != stateFromStores,
    "guild must be present to be editing its integration settings",
  );
  let obj = require("initialize");
  const items1 = [PermissionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    PermissionStore.getHighestRole(stateFromStores),
  );
  let obj2 = require("initialize");
  const items2 = [memo1];
  const items3 = [arg0];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items2,
    () => GuildMemberStore.getMembers(closure_0),
    items3,
  );
  let obj3 = require("initialize");
  const items4 = [UserStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items4, () => users.getUsers());
  const obj4 = require("initialize");
  const items5 = [query];
  const items6 = [arg0];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items5,
    () => GuildRoleStore.getSortedRoles(closure_0),
    items6,
  );
  const items7 = [stateFromStores, stateFromStoresArray, stateFromStoresObject];
  const memo = stateFromStores2.useMemo(() => {
    items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = stateFromStoresObject[nextResult.userId];
      let tmp6 = tmp5;
      if (null != tmp5) {
        if (!tmp6.bot) {
          let canManageUserResult = tmp6.id !== stateFromStores.ownerId;
          if (canManageUserResult) {
            let obj = PermissionUtilsAll;
            let obj2 = { permission: Permissions.ADMINISTRATOR, user: null, context: null };
            obj2.user = tmp6;
            obj2.context = stateFromStores;
            canManageUserResult = !obj.can(obj2);
          }
          if (canManageUserResult) {
            canManageUserResult = PermissionStore.canManageUser(
              Permissions.USE_APPLICATION_COMMANDS,
              tmp6,
              stateFromStores,
            );
          }
          let obj3 = { id: null, canManage: null, nick: null, username: null };
          obj3.id = tmp6.id;
          obj3.canManage = canManageUserResult;
          obj3.nick = tmp3.nick;
          obj3.username = tmp6.username;
          let arr = items.push(obj3);
        }
      }
      continue;
    }
    return items;
  }, items7);
  const items8 = [stateFromStores2, stateFromStores, stateFromStores1];
  memo1 = stateFromStores2.useMemo(() => {
    items = [];
    const iter = stateFromStores2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (!isBotRole(nextResult)) {
        let tmp8 = timestampProducer(tmp3, Permissions.ADMINISTRATOR);
        let isRoleHigherResult = !tmp8;
        if (!tmp8) {
          isRoleHigherResult = PermissionStore.isRoleHigher(stateFromStores, stateFromStores1, tmp3);
        }
        let obj = { id: null, name: null, canManage: null };
        ({ id: obj.id, name: obj.name } = tmp3);
        obj.canManage = isRoleHigherResult;
        let tmp15 = obj;
        if (metroImportDefault(tmp3)) {
          let arr = items.unshift(tmp15);
        } else {
          let arr3 = items.push(tmp15);
        }
      }
      continue;
    }
    return items;
  }, items8);
  const tmp9 = stateFromStoresObject(stateFromStores2.useState(""), 2);
  query = tmp9[0];
  const items9 = [arg0, memo, query, memo1];
  const memo2 = stateFromStores2.useMemo(() => {
    let substr = first;
    if (first.startsWith("@")) {
      substr = first.substr(1);
    }
    if (first.startsWith("@")) {
      let found = memo1.filter((id) => id.id === closure_1_0);
    } else {
      found = memo1;
    }
    const obj = {
      members: IntegrationPermissionSearchUtils.filterPermissionSearchItems(memo, memberTerms, substr),
      roles: null,
    };
    obj.roles = IntegrationPermissionSearchUtils.filterPermissionSearchItems(found, roleTerms, substr);
    return obj;
  }, items9);
  return { query, results: memo2, setQuery: tmp9[1], unfilteredCount: memo2.members.length + memo2.roles.length };
}
