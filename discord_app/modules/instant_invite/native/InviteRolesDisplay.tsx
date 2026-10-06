// === Module 10697: InviteRolesDisplay ===

// Module 10697 (InviteRolesDisplay)
import react_native from "react-native" /* 17 */;
import RolePillDefault from "RolePill" /* 10698 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let roleIds;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { marginTop: 8 }, label: { marginBottom: 4 }, rolesRow: { flexDirection: "row", flexWrap: "wrap" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((roleIds) => {
  let container;
  let first;
  let items1;
  let label;
  let role;
  let obj = roleIds(576);
  const cResult = obj.c(20);
  roleIds = roleIds.roleIds;
  const guildId = roleIds.guildId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === roleIds) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = roleIds(504);
    const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
    if (0 === stateFromStoresArray.length) {
      return null;
    } else {
      let tmp9;
      let tmp11;
      let tmp16;
      const _Symbol = Symbol;
      ({ container, label } = tmp4);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(roleIds(1126).t.stcSfI);
        cResult[5] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== tmp4.label) {
        const obj2 = { variant: "text-xs/semibold", color: "text-muted", style: label, children: tmp9 };
        const tmp13 = closure_5(roleIds(4892).Text, obj2);
        cResult[6] = tmp4.label;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === guildId) {
        let tmp15;
        if (cResult[9] === stateFromStoresArray) {
          tmp15 = cResult[10];
        }
        if (cResult[13] === tmp4.rolesRow) {
          let tmp18;
          if (cResult[14] === tmp15) {
            tmp18 = cResult[15];
          }
          if (cResult[16] === tmp4.container) {
            if (cResult[17] === tmp18) {
              let tmp22;
              if (cResult[18] === tmp11) {
                tmp22 = cResult[19];
              }
              return tmp22;
            }
          }
          const obj3 = { style: container, children: items1 };
          items1 = [tmp11, tmp18];
          const tmp25 = closure_6(View, obj3);
          cResult[16] = tmp4.container;
          cResult[17] = tmp18;
          cResult[18] = tmp11;
          cResult[19] = tmp25;
          tmp22 = tmp25;
        }
        const obj4 = { style: tmp14, children: tmp15 };
        const tmp21 = closure_5(View, obj4);
        cResult[13] = tmp4.rolesRow;
        cResult[14] = tmp15;
        cResult[15] = tmp21;
        tmp18 = tmp21;
      }
      if (cResult[11] !== guildId) {
        const fn2 = function j(role) {
          const obj = { role, guildId };
          return hasOwnProperty(RolePillDefault, obj, role.id);
        };
        cResult[11] = guildId;
        cResult[12] = fn2;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[12];
      }
      let mapped = stateFromStoresArray.map(tmp16);
      cResult[8] = guildId;
      cResult[9] = stateFromStoresArray;
      cResult[10] = mapped;
      tmp15 = mapped;
    }
  }
  const fn = function f() {
    const mapped = roleIds.map((item) => role.getRole(guildId, item));
    return mapped.filter((item) => null != item);
  };
  const items2 = [roleIds, guildId];
  cResult[1] = guildId;
  cResult[2] = roleIds;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp8 = items2;
  tmp7 = fn;
}) : ((roleIds) => {
  let intl;
  let items2;
  let role;
  roleIds = roleIds.roleIds;
  const guildId = roleIds.guildId;
  const tmp = closure_7();
  let obj = roleIds(504);
  const items = [GuildRoleStore];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mapped = roleIds.map((item) => role.getRole(guildId, item));
    return mapped.filter((item) => null != item);
  }, items1);
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.container, children: items2 };
    const obj3 = { variant: "text-xs/semibold", color: "text-muted", style: tmp.label, children: intl.string(roleIds(1126).t.stcSfI) };
    const Text = tmp2(4892).Text;
    intl = tmp2(1126).intl;
    items2 = [closure_5(Text, obj3), ];
    const obj4 = {
      style: tmp.rolesRow,
      children: stateFromStoresArray.map((role) => {
          const obj = { role, guildId };
          return hasOwnProperty(RolePillDefault, obj, role.id);
        })
    };
    items2[1] = closure_5(View, obj4);
    tmp4 = closure_6(View, obj2);
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default tmp4;