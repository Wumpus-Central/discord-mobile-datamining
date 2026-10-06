// === Module 11484: MemberRolesList ===

// Module 11484 (MemberRolesList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import RolePillDefault from "RolePill" /* 10698 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tags, userRoles;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ wrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((userRoles) => {
  let first;
  let tmp7;
  let tmp8;
  const obj = userRoles(576);
  const cResult = obj.c(19);
  const tmp = userRoles;
  userRoles = userRoles.userRoles;
  const guild = userRoles.guild;
  const style = userRoles.style;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function u() {
      return GuildRoleStore.getSortedRoles(guild.id);
    };
    let num2 = 1;
    cResult[1] = guild.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = <View />;
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  let tmp12 = tmp8;
  if (null != userRoles) {
    tmp12 = tmp8;
    if (userRoles.length > 0) {
      if (cResult[4] === guild.id) {
        if (cResult[5] === stateFromStores) {
          let tmp13;
          if (cResult[6] === userRoles) {
            tmp13 = cResult[7];
          }
          if (cResult[13] === style) {
            let tmp20;
            if (cResult[14] === tmp4.wrapper) {
              tmp20 = cResult[15];
            }
            if (cResult[16] === tmp13) {
              let tmp21;
              if (cResult[17] === tmp20) {
                tmp21 = cResult[18];
              }
              tmp12 = tmp21;
            }
            const tmp24 = <View style={tmp20}>{tmp13}</View>;
            cResult[16] = tmp13;
            cResult[17] = tmp20;
            cResult[18] = tmp24;
            tmp21 = tmp24;
          }
          const items1 = [tmp4.wrapper, style];
          cResult[13] = style;
          cResult[14] = tmp4.wrapper;
          cResult[15] = items1;
          tmp20 = items1;
        }
      }
      if (cResult[8] !== userRoles) {
        class R {
          constructor(id) {
            return userRoles.includes(id.id);
          }
        }
        cResult[8] = userRoles;
        cResult[9] = R;
      } else {
        class R {
          constructor(id) {
            return userRoles.includes(id.id);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(id) {
            return userRoles.includes(id.id);
          }
        }
        cResult[10] = tmp16;
      } else {
        class R {
          constructor(id) {
            return userRoles.includes(id.id);
          }
        }
      }
      if (cResult[11] !== guild.id) {
        class R {
          constructor(id) {
            return userRoles.includes(id.id);
          }
        }
        cResult[11] = guild.id;
        cResult[12] = tmp18;
      } else {
        class R {
          constructor(id) {
            return userRoles.includes(id.id);
          }
        }
      }
      const found = stateFromStores.filter(R);
      const sorted = found.sort(tmp16);
      const mapped = sorted.map(tmp18);
      cResult[4] = guild.id;
      cResult[5] = stateFromStores;
      cResult[6] = userRoles;
      cResult[7] = mapped;
      tmp13 = mapped;
    }
  }
  return tmp12;
}) : ((userRoles) => {
  userRoles = userRoles.userRoles;
  const guild = userRoles.guild;
  const style = userRoles.style;
  const tmp = closure_6();
  const items = [GuildRoleStore];
  const obj = userRoles(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  const tmp4 = <View />;
  let tmp2Result = tmp4;
  if (null != userRoles) {
    let num = 0;
    tmp2Result = tmp4;
    if (userRoles.length > 0) {
      const found = stateFromStores.filter((id) => userRoles.includes(id.id));
      const sorted = found.sort((tags, tags2) => {
        let num;
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
          if (null === guild_connections) {
            num2 = 0;
            if (null !== guild_connections1) {
              num2 = -1;
            }
          }
          num = num2;
        } else {
          num = 1;
        }
        return num;
      });
      const items1 = [tmp.wrapper, style];
      tmp2Result = <View style={items1}>{sorted.map((role) => jsx(RolePillDefault, { role, guildId: guild.id }, role.id))}</View>;
    }
  }
  return tmp2Result;
});
const result = size.fileFinishedImporting("components_native/MemberRolesList.tsx");

export default tmp3;