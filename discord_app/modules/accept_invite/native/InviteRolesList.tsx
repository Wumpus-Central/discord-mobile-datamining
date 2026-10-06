// === Module 12402: InviteRolesList ===

// Module 12402 (InviteRolesList)
import react_native from "react-native" /* 17 */;
import GuildRoleUtils from "GuildRoleUtils" /* 2110 */;
import RolePillDefault from "RolePill" /* 10698 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr2;
  let guild;
  let intl;
  let invite;
  let items1;
  let style;
  let tmp24;
  let obj = guild(576);
  const cResult = obj.c(18);
  ({ invite, style } = arg0);
  const tmp5 = closure_7();
  guild = invite.guild;
  const roles = invite.roles;
  if (null != guild) {
    if (null != roles) {
      if (0 !== roles.length) {
        if (cResult[1] === guild) {
          let tmp7;
          if (cResult[2] === roles) {
            tmp7 = cResult[3];
          }
          arr2 = tmp7;
        }
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
        HermesBuiltin.arraySpread(items, roles, 0);
        const sorted = items.sort(tmp2(2110).sortInviteRoles);
        const mapped = sorted.map(R);
        cResult[1] = guild;
        cResult[2] = roles;
        cResult[3] = mapped;
        tmp7 = mapped;
      }
      if (null != guild) {
        class R {
          constructor(arg0) {
            obj = closure_0(closure_2[6]);
            return obj.inviteRoleToDisplayData(guild.id, arg0);
          }
        }
        if (0 !== arr2.length) {
          let tmp13;
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
            const obj2 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(guild(1126).t.stcSfI) };
            const Text = tmp2(4892).Text;
            intl = tmp2(1126).intl;
            const tmp14 = closure_5(Text, obj2);
            cResult[6] = tmp14;
            tmp13 = tmp14;
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
            if (cResult[12] === tmp5.rolesRow) {
              class R {
                constructor(arg0) {
                  obj = closure_0(closure_2[6]);
                  return obj.inviteRoleToDisplayData(guild.id, arg0);
                }
              }
              if (cResult[15] === style) {
                class R {
                  constructor(arg0) {
                    obj = closure_0(closure_2[6]);
                    return obj.inviteRoleToDisplayData(guild.id, arg0);
                  }
                }
                return tmp24;
              }
              const obj3 = { spacing: 4, style, children: items1 };
              items1 = [tmp13, tmp20];
              const tmp26 = closure_6(guild(5600).Stack, obj3);
              cResult[15] = style;
              cResult[16] = tmp20;
              cResult[17] = tmp26;
              tmp24 = tmp26;
            }
            const obj4 = { style: tmp15, children: tmp16 };
            cResult[12] = tmp5.rolesRow;
            cResult[13] = tmp16;
            cResult[14] = closure_5(View, obj4);
            const tmp23 = closure_5(View, obj4);
          }
          if (cResult[10] !== guild) {
            class R {
              constructor(arg0) {
                obj = closure_0(closure_2[6]);
                return obj.inviteRoleToDisplayData(guild.id, arg0);
              }
            }
            cResult[10] = guild;
            cResult[11] = tmp18;
          } else {
            class R {
              constructor(arg0) {
                obj = closure_0(closure_2[6]);
                return obj.inviteRoleToDisplayData(guild.id, arg0);
              }
            }
          }
          const mapped1 = arr2.map(tmp18);
          cResult[7] = guild;
          cResult[8] = arr2;
          cResult[9] = mapped1;
        }
      }
      return null;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0) {
        obj = closure_0(closure_2[6]);
        return obj.inviteRoleToDisplayData(guild.id, arg0);
      }
    }
    cResult[0] = tmp6;
    arr2 = tmp6;
  } else {
    class R {
      constructor(arg0) {
        obj = closure_0(closure_2[6]);
        return obj.inviteRoleToDisplayData(guild.id, arg0);
      }
    }
  }
}) : ((invite) => {
  let intl;
  let items1;
  invite = invite.invite;
  const style = invite.style;
  const guild = invite.guild;
  const roles = invite.roles;
  let items = [guild, roles];
  const tmp = closure_7();
  const memo = react.useMemo(() => {
    let id;
    if (null != guild) {
      if (null != roles) {
        if (0 !== roles.length) {
          const items = [];
          HermesBuiltin.arraySpread(items, roles, 0);
          const sorted = items.sort(GuildRoleUtils.sortInviteRoles);
          const mapped = sorted.map((item) => {
            const obj = guild(dependencyMap[6]);
            return obj.inviteRoleToDisplayData(id.id, item);
          });
        }
        return [];
      }
    }
  }, items);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (0 !== memo.length) {
      let obj = { spacing: 4, style, children: items1 };
      const Stack = guild(5600).Stack;
      const obj2 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(guild(1126).t.stcSfI) };
      const Text = guild(4892).Text;
      intl = guild(1126).intl;
      items1 = [closure_5(Text, obj2), ];
      const obj3 = {
        style: tmp.rolesRow,
        children: memo.map((role) => {
              const obj = { role, guildId: guild.id };
              return hasOwnProperty(RolePillDefault, obj, role.id);
            })
      };
      items1[1] = closure_5(View, obj3);
      tmp2 = closure_6(Stack, obj);
    }
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default tmp3;