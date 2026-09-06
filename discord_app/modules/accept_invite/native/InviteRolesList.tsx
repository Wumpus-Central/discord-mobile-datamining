// discord_app/modules/accept_invite/native/InviteRolesList.tsx
import GuildRoleUtils from "../../../utils/GuildRoleUtils.tsx";
import RolePillDefault from "../../../components_native/common/RolePill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default function InviteRolesList(invite) {
  invite = invite.invite;
  const guild = invite.guild;
  const roles = invite.roles;
  let items = [guild, roles];
  const memo = noop.useMemo(() => {
    if (null != guild) {
      if (null != roles) {
        if (0 !== arr.length) {
          const items = [];
          HermesBuiltin.arraySpread(arr, 0);
          const sorted = items.sort(GuildRoleUtils.sortInviteRoles);
          const mapped = sorted.map((item) => guild(dependencyMap[4]).inviteRoleToDisplayData(id.id, item));
        }
        return [];
      }
    }
  }, items);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (0 !== memo.length) {
      let obj = { spacing: 4, style: invite.style, children: null };
      obj = { variant: "text-sm/semibold", color: "text-default", children: null };
      const intl = guild(1114).intl;
      obj.children = intl.string(guild(1114).t.stcSfI);
      const items1 = [closure_5(guild(4556).Text, obj)];
      obj = {
        style: tmp.rolesRow,
        children: memo.map((role) => hasOwnProperty(RolePillDefault, { role, guildId: guild.id }, role.id)),
      };
      items1[1] = closure_5(View, obj);
      obj.children = items1;
      tmp2 = closure_6(guild(4973).Stack, obj);
    }
  }
  return tmp2;
}
