// discord_app/modules/instant_invite/native/InviteRolesDisplay.tsx
import RolePillDefault from "../../../components_native/common/RolePill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({
  container: { marginTop: 8 },
  label: { marginBottom: 4 },
  rolesRow: { flexDirection: "row", flexWrap: "wrap" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (roleIds) => {
      const cResult = roleIds(576).c(20);
      roleIds = roleIds.roleIds;
      const guildId = roleIds.guildId;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === roleIds) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
        }
        const stateFromStoresArray = tmp(504).useStateFromStoresArray(first, tmp7, tmp8);
        if (0 === stateFromStoresArray.length) {
          return null;
        } else {
          const _Symbol = Symbol;
          ({ container, label } = tmp4);
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.stcSfI);
            cResult[5] = stringResult;
            let tmp9 = stringResult;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== tmp4.label) {
            const obj2 = { variant: "text-xs/semibold", color: "text-muted", style: label, children: tmp9 };
            const tmp13 = closure_5(tmp(4886).Text, obj2);
            cResult[6] = tmp4.label;
            cResult[7] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === guildId) {
            if (cResult[9] === stateFromStoresArray) {
              if (cResult[13] === tmp4.rolesRow) {
                if (cResult[14] === tmp15) {
                  let tmp19 = cResult[15];
                }
                if (cResult[16] === tmp4.container) {
                  if (cResult[17] === tmp19) {
                    if (cResult[18] === tmp11) {
                      let tmp23 = cResult[19];
                    }
                    return tmp23;
                  }
                }
                const obj3 = { style: container, children: null };
                const items1 = [tmp11, tmp19];
                obj3.children = items1;
                const tmp26 = closure_6(View, obj3);
                cResult[16] = tmp4.container;
                cResult[17] = tmp19;
                cResult[18] = tmp11;
                cResult[19] = tmp26;
                tmp23 = tmp26;
              }
              const obj4 = { style: tmp14, children: cResult[10] };
              const tmp22 = closure_5(View, obj4);
              cResult[13] = tmp4.rolesRow;
              cResult[14] = cResult[10];
              cResult[15] = tmp22;
              tmp19 = tmp22;
            }
          }
          if (cResult[11] !== guildId) {
            const fn2 = function j(role) {
              return hasOwnProperty(RolePillDefault, { role, guildId }, role.id);
            };
            cResult[11] = guildId;
            cResult[12] = fn2;
            let tmp16 = fn2;
          } else {
            tmp16 = cResult[12];
          }
          let mapped = stateFromStoresArray.map(tmp16);
          cResult[8] = guildId;
          cResult[9] = stateFromStoresArray;
          cResult[10] = mapped;
        }
        const tmpResult = tmp(504);
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
      const obj = roleIds(576);
    }
  : (roleIds) => {
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
        const intl = tmp2(1126).intl;
        obj3.children = intl.string(tmp2(1126).t.stcSfI);
        const items2 = [closure_5(tmp2(4886).Text, obj3)];
        const obj4 = {
          style: tmp.rolesRow,
          children: stateFromStoresArray.map((role) => hasOwnProperty(RolePillDefault, { role, guildId }, role.id)),
        };
        items2[1] = closure_5(View, obj4);
        obj2.children = items2;
        tmp4 = closure_6(View, obj2);
      }
      return tmp4;
    };
