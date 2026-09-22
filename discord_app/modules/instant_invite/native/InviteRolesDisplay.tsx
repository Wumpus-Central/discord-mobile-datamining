// discord_app/modules/instant_invite/native/InviteRolesDisplay.tsx
import RolePillDefault from "../../../components_native/common/RolePill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({
  container: { marginTop: 8 },
  label: { marginBottom: 4 },
  rolesRow: { flexDirection: "row", flexWrap: "wrap" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default function InviteRolesDisplay(roleIds) {
  roleIds = roleIds.roleIds;
  const guildId = roleIds.guildId;
  const tmp = closure_7();
  const items = [GuildRoleStore];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = roleIds(504).useStateFromStoresArray(
    items,
    () => {
      const mapped = roleIds.map((item) => role.getRole(guildId, item));
      return mapped.filter((item) => null != item);
    },
    items1,
  );
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-xs/semibold", color: "text-muted", style: tmp.label, children: null };
    const intl = tmp2(1115).intl;
    obj3.children = intl.string(tmp2(1115).t.stcSfI);
    const items2 = [closure_5(tmp2(4753).Text, obj3)];
    const obj4 = {
      style: tmp.rolesRow,
      children: stateFromStoresArray.map((role) => hasOwnProperty(RolePillDefault, { role, guildId }, role.id)),
    };
    items2[1] = closure_5(View, obj4);
    obj2.children = items2;
    tmp4 = closure_6(View, obj2);
  }
  return tmp4;
}
