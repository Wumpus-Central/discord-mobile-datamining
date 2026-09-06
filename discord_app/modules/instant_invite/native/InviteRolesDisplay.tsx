// discord_app/modules/instant_invite/native/InviteRolesDisplay.tsx
import RolePillDefault from "../../../components_native/common/RolePill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
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
  let obj = roleIds(504);
  const items = [GuildRoleStore];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      const mapped = roleIds.map((item) => role.getRole(guildId, item));
      return mapped.filter((item) => null != item);
    },
    items1,
  );
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.container, children: null };
    obj = { variant: "text-xs/semibold", color: "text-muted", style: tmp.label, children: null };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(tmp2(1114).t.stcSfI);
    const items2 = [closure_5(tmp2(4556).Text, obj)];
    const obj1 = {
      style: tmp.rolesRow,
      children: stateFromStoresArray.map((role) => hasOwnProperty(RolePillDefault, { role, guildId }, role.id)),
    };
    items2[1] = closure_5(View, obj1);
    obj.children = items2;
    tmp4 = closure_6(View, obj);
  }
  return tmp4;
}
