// discord_app/components_native/MemberRolesList.tsx
import RolePillDefault from "common/RolePill.tsx";
import noop from "../../_runtime/metro/00019__.js";
import GuildRoleStore from "../stores/GuildRoleStore.tsx";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({
  wrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MemberRolesList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MemberRolesList(userRoles) {
      const cResult = userRoles(576).c(19);
      userRoles = userRoles.userRoles;
      let id = userRoles.guild;
      const style = userRoles.style;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function u() {
          return GuildRoleStore.getSortedRoles(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = userRoles(576);
      const stateFromStores = userRoles(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = <View />;
        cResult[3] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      let tmp12 = tmp8;
      if (null != userRoles) {
        tmp12 = tmp8;
        if (userRoles.length > 0) {
          if (cResult[4] === id.id) {
            if (cResult[5] === stateFromStores) {
              if (cResult[6] === userRoles) {
                if (cResult[13] === style) {
                  if (cResult[14] === tmp4.wrapper) {
                    let tmp19 = cResult[15];
                  }
                  if (cResult[16] === tmp13) {
                  }
                  const obj2 = { style: tmp19, children: tmp13 };
                  const tmp23 = <View style={tmp19}>{tmp13}</View>;
                  cResult[16] = tmp13;
                  cResult[17] = tmp19;
                  cResult[18] = tmp23;
                }
                const items1 = [tmp4.wrapper, style];
                cResult[13] = style;
                cResult[14] = tmp4.wrapper;
                cResult[15] = items1;
                tmp19 = items1;
              }
            }
          }
          if (cResult[8] !== userRoles) {
            class R {
              constructor(arg0) {
                return userRoles.includes(userRoles.id);
              }
            }
            cResult[8] = userRoles;
            cResult[9] = R;
            let sorted = R;
          } else {
            class R {
              constructor(arg0) {
                return userRoles.includes(userRoles.id);
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor(arg0) {
                return userRoles.includes(userRoles.id);
              }
            }
            cResult[10] = tmp15;
          } else {
            class R {
              constructor(arg0) {
                return userRoles.includes(userRoles.id);
              }
            }
          }
          if (cResult[11] !== id.id) {
            class M {
              constructor(arg0) {
                obj = { role: userRoles, guildId: guild.id };
                return jsx(closure_1(closure_2[8]), obj, userRoles.id);
              }
            }
            cResult[11] = id.id;
            cResult[12] = M;
          } else {
            class M {
              constructor(arg0) {
                obj = { role: userRoles, guildId: guild.id };
                return jsx(closure_1(closure_2[8]), obj, userRoles.id);
              }
            }
          }
          const found = stateFromStores.filter(sorted);
          sorted = found.sort(tmp15);
          const mapped = sorted.map(M);
          id = id.id;
          cResult[4] = id;
          cResult[5] = stateFromStores;
          cResult[6] = userRoles;
          cResult[7] = mapped;
        }
      }
      return tmp12;
    }
  : function MemberRolesList(userRoles) {
      userRoles = userRoles.userRoles;
      guild = userRoles.guild;
      const tmp = closure_6();
      const items = [GuildRoleStore];
      const stateFromStores = userRoles(504).useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
      const tmp4 = <View />;
      let tmp2Result = tmp4;
      if (null != userRoles) {
        tmp2Result = tmp4;
        if (userRoles.length > 0) {
          const found = stateFromStores.filter((id) => userRoles.includes(id.id));
          const sorted = found.sort((tags, tags2) => {
            tags = tags.tags;
            let guild_connections;
            if (tags != null) {
              guild_connections = tags.guild_connections;
            }
            tags2 = tags2.tags;
            let guild_connections1;
            if (tags2 != null) {
              guild_connections1 = tags2.guild_connections;
            }
            if (null === guild_connections) {
              let num2 = 0;
              if (!tmp3) {
                num2 = 0;
                if (tmp4) {
                  num2 = -1;
                }
              }
              let num = num2;
            } else {
              num = 1;
            }
            return num;
          });
          const obj2 = { style: null, children: null };
          const items1 = [tmp.wrapper, userRoles.style];
          obj2.style = items1;
          obj2.children = sorted.map((role) => jsx(RolePillDefault, { role, guildId: guild.id }, role.id));
          tmp2Result = <View style={null}>{null}</View>;
        }
      }
      return tmp2Result;
    };
