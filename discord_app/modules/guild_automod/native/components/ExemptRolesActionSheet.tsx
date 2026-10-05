// discord_app/modules/guild_automod/native/components/ExemptRolesActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import GuildRoleRecord from "../../../../records/GuildRoleRecord.tsx";
import RoleNameDefault from "../../../roles/native/RoleName.tsx";
import ExemptionActionSheetDefault from "ExemptionActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let guildId;

function renderRoleName(role) {
  return jsx(RoleNameDefault, { role, children: role.name });
}
function getRoleId(id) {
  return id.id;
}
function getRoleName(name) {
  return name.name;
}
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let exemptRoles;
      let first;
      let onSave;
      let tmp12;
      let tmp6;
      let tmp7;
      const obj = guildId(576);
      const cResult = obj.c(13);
      guildId = guildId.guildId;
      ({ exemptRoles, onSave } = guildId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function c() {
          return GuildRoleStore.getSortedRoles(guildId);
        };
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] !== stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(role) {
              return !isEveryoneRole(role);
            }
          }
          cResult[6] = I;
        } else {
          class I {
            constructor(role) {
              return !isEveryoneRole(role);
            }
          }
        }
        const found = stateFromStores.filter(I);
        cResult[4] = stateFromStores;
        cResult[5] = found;
      } else {
        class I {
          constructor(role) {
            return !isEveryoneRole(role);
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(role) {
            return !isEveryoneRole(role);
          }
        }
        const stringResult = obj3.string(guildId(1126).t["LPJmL/"]);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(guildId(1126).t.aFO1I6);
        cResult[7] = stringResult;
        cResult[8] = stringResult1;
        tmp12 = stringResult1;
      } else {
        class I {
          constructor(role) {
            return !isEveryoneRole(role);
          }
        }
        tmp12 = cResult[8];
      }
      if (cResult[9] === exemptRoles) {
        class I {
          constructor(role) {
            return !isEveryoneRole(role);
          }
        }
      }
      cResult[9] = exemptRoles;
      cResult[10] = onSave;
      cResult[11] = tmp8;
      cResult[12] = jsx(ExemptionActionSheetDefault, {
        title: tmp11,
        searchPlaceholder: tmp12,
        listId: "automod-exempt-roles",
        items: tmp8,
        initialSelected: exemptRoles,
        getId: getRoleId,
        getSearchText: getRoleName,
        renderLabel: renderRoleName,
        onSave,
      });
      jsx(ExemptionActionSheetDefault, {
        title: tmp11,
        searchPlaceholder: tmp12,
        listId: "automod-exempt-roles",
        items: tmp8,
        initialSelected: exemptRoles,
        getId: getRoleId,
        getSearchText: getRoleName,
        renderLabel: renderRoleName,
        onSave,
      });
    }
  : (guildId) => {
      let exemptRoles;
      let onSave;
      guildId = guildId.guildId;
      ({ exemptRoles, onSave } = guildId);
      const items = [GuildRoleStore];
      const items1 = [guildId];
      const obj = guildId(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
      const items2 = [stateFromStores];
      const memo = react.useMemo(() => stateFromStores.filter((item) => !closure_1_4(item)), items2);
      stateFromStores(17710);
      const intl = guildId(1126).intl;
      const intl2 = guildId(1126).intl;
      return (
        <tmp3
          title={intl.string(guildId(1126).t["LPJmL/"])}
          searchPlaceholder={intl2.string(guildId(1126).t.aFO1I6)}
          listId="automod-exempt-roles"
          items={memo}
          initialSelected={exemptRoles}
          getId={getRoleId}
          getSearchText={getRoleName}
          renderLabel={renderRoleName}
          onSave={onSave}
        />
      );
    };
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptRolesActionSheet.tsx");

export default tmp2;
