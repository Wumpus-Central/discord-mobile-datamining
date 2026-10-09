// === Module 12435: InviteRolesList ===

// Module 12435 (InviteRolesList)
import GuildRoleUtils from "GuildRoleUtils" /* 2122 */;
import RolePillDefault from "RolePill" /* 10271 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InviteRolesList(arg0) {
  const cResult = guild(576).c(18);
  ({ invite, style } = arg0);
  const tmp4 = closure_7();
  guild = invite.guild;
  const roles = invite.roles;
  if (null != guild) {
    if (null != roles) {
      if (0 !== roles.length) {
        if (cResult[4] !== guild) {
          const fn = function x(id) {
            return GuildRoleUtils.inviteRoleToDisplayData(guild.id, id);
          };
          cResult[4] = guild;
          cResult[5] = fn;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[5];
        }
        const items = [];
        HermesBuiltin.arraySpread(roles, 0);
        const sorted = items.sort(tmp(2122).sortInviteRoles);
        const mapped = sorted.map(tmp5);
        cResult[1] = guild;
        cResult[2] = roles;
        cResult[3] = mapped;
      }
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[0] = items1;
    let first = items1;
  } else {
    first = cResult[0];
  }
  if (null != guild) {
    if (0 !== first.length) {
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = tmp(1126).intl;
        obj2.children = intl.string(tmp(1126).t.stcSfI);
        const tmp14 = closure_5(tmp(5087).Text, obj2);
        cResult[6] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === guild) {
        if (cResult[8] === first) {
          if (cResult[12] === tmp4.rolesRow) {
            if (cResult[13] === tmp16) {
              let tmp20 = cResult[14];
            }
            if (cResult[15] === style) {
              if (cResult[16] === tmp20) {
                let tmp24 = cResult[17];
              }
              return tmp24;
            }
            const obj3 = { spacing: 4, style, children: null };
            const items2 = [tmp12, tmp20];
            obj3.children = items2;
            const tmp26 = closure_6(tmp(5374).Stack, obj3);
            cResult[15] = style;
            cResult[16] = tmp20;
            cResult[17] = tmp26;
            tmp24 = tmp26;
          }
          const obj4 = { style: tmp15, children: cResult[9] };
          const tmp23 = closure_5(View, obj4);
          cResult[12] = tmp4.rolesRow;
          cResult[13] = cResult[9];
          cResult[14] = tmp23;
          tmp20 = tmp23;
        }
      }
      if (cResult[10] !== guild) {
        const fn2 = function b(role) {
          return hasOwnProperty(RolePillDefault, { role, guildId: guild.id }, role.id);
        };
        cResult[10] = guild;
        cResult[11] = fn2;
        let tmp17 = fn2;
      } else {
        tmp17 = cResult[11];
      }
      const mapped1 = first.map(tmp17);
      cResult[7] = guild;
      cResult[8] = first;
      cResult[9] = mapped1;
    }
  }
  return null;
}) : (function InviteRolesList(invite) {
  invite = invite.invite;
  guild = invite.guild;
  const roles = invite.roles;
  let items = [guild, roles];
  const memo = noop.useMemo(() => {
    if (null != guild) {
      if (null != roles) {
        if (0 !== roles.length) {
          const items = [];
          HermesBuiltin.arraySpread(roles, 0);
          const sorted = items.sort(GuildRoleUtils.sortInviteRoles);
          const mapped = sorted.map((item) => guild(dependencyMap[6]).inviteRoleToDisplayData(id.id, item));
        }
        return [];
      }
    }
  }, items);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (0 !== memo.length) {
      const obj = { spacing: 4, style: invite.style, children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
      const intl = guild(1126).intl;
      obj2.children = intl.string(guild(1126).t.stcSfI);
      const items1 = [closure_5(guild(5087).Text, obj2), ];
      const obj3 = { style: tmp.rolesRow, children: memo.map((role) => hasOwnProperty(RolePillDefault, { role, guildId: guild.id }, role.id)) };
      items1[1] = closure_5(View, obj3);
      obj.children = items1;
      tmp2 = closure_6(guild(5374).Stack, obj);
    }
  }
  return tmp2;
});