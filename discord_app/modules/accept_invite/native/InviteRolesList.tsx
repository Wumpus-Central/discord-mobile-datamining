// === Module 12402: InviteRolesList ===

// Module 12402 (InviteRolesList)
import GuildRoleUtils from "GuildRoleUtils" /* 2110 */;
import RolePillDefault from "RolePill" /* 10698 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = guild(576).c(18);
  ({ invite, style } = arg0);
  closure_7();
  guild = invite.guild;
  const roles = invite.roles;
  if (null != guild) {
    if (null != roles) {
      if (0 !== roles.length) {
        if (cResult[4] !== guild) {
          class R {
            constructor(arg0) {
              obj = closure_0(closure_2[6]);
              return obj.inviteRoleToDisplayData(guild.id, arg0);
            }
          }
          cResult[4] = guild;
          cResult[5] = R;
        } else {
          class R {
            constructor(arg0) {
              obj = closure_0(closure_2[6]);
              return obj.inviteRoleToDisplayData(guild.id, arg0);
            }
          }
        }
        const items = [];
        HermesBuiltin.arraySpread(roles, 0);
        const sorted = items.sort(tmp(2110).sortInviteRoles);
        const mapped = sorted.map(R);
        cResult[1] = guild;
        cResult[2] = roles;
        cResult[3] = mapped;
      }
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0) {
        obj = closure_0(closure_2[6]);
        return obj.inviteRoleToDisplayData(guild.id, arg0);
      }
    }
    cResult[0] = tmp5;
  } else {
    class R {
      constructor(arg0) {
        obj = closure_0(closure_2[6]);
        return obj.inviteRoleToDisplayData(guild.id, arg0);
      }
    }
  }
  if (null != guild) {
    class R {
      constructor(arg0) {
        obj = closure_0(closure_2[6]);
        return obj.inviteRoleToDisplayData(guild.id, arg0);
      }
    }
    if (0 !== tmp5.length) {
      class R {
        constructor(arg0) {
          obj = closure_0(closure_2[6]);
          return obj.inviteRoleToDisplayData(guild.id, arg0);
        }
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            obj = closure_0(closure_2[6]);
            return obj.inviteRoleToDisplayData(guild.id, arg0);
          }
        }
        const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = tmp(1126).intl;
        obj2.children = intl.string(tmp(1126).t.stcSfI);
        const tmp14 = closure_5(tmp(4892).Text, obj2);
        cResult[6] = tmp14;
      } else {
        class R {
          constructor(arg0) {
            obj = closure_0(closure_2[6]);
            return obj.inviteRoleToDisplayData(guild.id, arg0);
          }
        }
      }
      if (cResult[7] === guild) {
        class R {
          constructor(arg0) {
            obj = closure_0(closure_2[6]);
            return obj.inviteRoleToDisplayData(guild.id, arg0);
          }
        }
      }
      if (cResult[10] !== guild) {
        class R {
          constructor(arg0) {
            obj = closure_0(closure_2[6]);
            return obj.inviteRoleToDisplayData(guild.id, arg0);
          }
        }
        cResult[10] = guild;
        cResult[11] = tmp16;
      } else {
        class R {
          constructor(arg0) {
            obj = closure_0(closure_2[6]);
            return obj.inviteRoleToDisplayData(guild.id, arg0);
          }
        }
      }
      const mapped1 = tmp5.map(tmp16);
      cResult[7] = guild;
      cResult[8] = tmp5;
      cResult[9] = mapped1;
    }
  }
  return null;
}) : ((invite) => {
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
      const items1 = [closure_5(guild(4892).Text, obj2), ];
      const obj3 = { style: tmp.rolesRow, children: memo.map((role) => hasOwnProperty(RolePillDefault, { role, guildId: guild.id }, role.id)) };
      items1[1] = closure_5(View, obj3);
      obj.children = items1;
      tmp2 = closure_6(guild(5600).Stack, obj);
    }
  }
  return tmp2;
});