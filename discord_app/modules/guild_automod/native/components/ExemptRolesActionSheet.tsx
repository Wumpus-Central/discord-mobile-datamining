// discord_app/modules/guild_automod/native/components/ExemptRolesActionSheet.tsx
import RoleNameDefault from "../../../roles/native/RoleName.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";

const require = fn;
function renderRoleName(role) {
  return jsx(RoleNameDefault, { role, children: role.name });
}
function getRoleId(id) {
  return id.id;
}
function getRoleName(name) {
  return name.name;
}
const isEveryoneRole = fn(2100).isEveryoneRole;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptRolesActionSheet.tsx");

export default function ExemptRolesActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ exemptRoles, onSave } = guildId);
  const items = [GuildRoleStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => stateFromStores.filter((item) => !closure_1_4(item)), items2);
  const obj2 = {
    title: null,
    searchPlaceholder: null,
    listId: "automod-exempt-roles",
    items: null,
    initialSelected: null,
    getId: null,
    getSearchText: null,
    renderLabel: null,
    onSave: null,
  };
  const obj = guildId(504);
  const intl = guildId(1115).intl;
  obj2.title = intl.string(guildId(1115).t["LPJmL/"]);
  const intl2 = guildId(1115).intl;
  obj2.searchPlaceholder = intl2.string(guildId(1115).t.aFO1I6);
  obj2.items = memo;
  obj2.initialSelected = exemptRoles;
  obj2.getId = getRoleId;
  obj2.getSearchText = getRoleName;
  obj2.renderLabel = renderRoleName;
  obj2.onSave = onSave;
  return jsx(stateFromStores(17985), {
    title: null,
    searchPlaceholder: null,
    listId: "automod-exempt-roles",
    items: null,
    initialSelected: null,
    getId: null,
    getSearchText: null,
    renderLabel: null,
    onSave: null,
  });
}
