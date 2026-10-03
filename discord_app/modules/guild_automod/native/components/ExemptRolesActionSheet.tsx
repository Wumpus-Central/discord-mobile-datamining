// discord_app/modules/guild_automod/native/components/ExemptRolesActionSheet.tsx
import RoleNameDefault from "../../../roles/native/RoleName.tsx";
import ExemptionActionSheetDefault from "ExemptionActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";

const require = fn;
function renderRoleName(role) {
  return jsx(RoleNameDefault, { role, children: role.name });
}
function getRoleId(id) {
  return id.id;
}
function getRoleName(name) {
  return name.name;
}
const isEveryoneRole = fn(2107).isEveryoneRole;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptRolesActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(13);
      guildId = guildId.guildId;
      ({ exemptRoles, onSave } = guildId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        let first = items;
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
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] !== stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              return !closure_1_4(guildId);
            }
          }
          cResult[6] = I;
        } else {
          class I {
            constructor(arg0) {
              return !closure_1_4(guildId);
            }
          }
        }
        const found = stateFromStores.filter(I);
        cResult[4] = stateFromStores;
        cResult[5] = found;
      } else {
        class I {
          constructor(arg0) {
            return !closure_1_4(guildId);
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              return !closure_1_4(guildId);
            }
          }
          const stringResult = obj3.string(tmp(1126).t["LPJmL/"]);
          const intl = tmp(1126).intl;
          const stringResult1 = intl.string(tmp(1126).t.aFO1I6);
          cResult[7] = stringResult;
          cResult[8] = stringResult1;
          let tmp13 = stringResult1;
          const tmp12 = stringResult;
        } else {
          class I {
            constructor(arg0) {
              return !closure_1_4(guildId);
            }
          }
          tmp13 = cResult[8];
        }
        if (cResult[9] === exemptRoles) {
          class I {
            constructor(arg0) {
              return !closure_1_4(guildId);
            }
          }
        }
        const obj2 = {
          title: tmp12,
          searchPlaceholder: tmp13,
          listId: "automod-exempt-roles",
          items: tmp8,
          initialSelected: exemptRoles,
          getId: getRoleId,
          getSearchText: getRoleName,
          renderLabel: renderRoleName,
          onSave,
        };
        const tmp22 = jsx(ExemptionActionSheetDefault, {
          title: tmp12,
          searchPlaceholder: tmp13,
          listId: "automod-exempt-roles",
          items: tmp8,
          initialSelected: exemptRoles,
          getId: getRoleId,
          getSearchText: getRoleName,
          renderLabel: renderRoleName,
          onSave,
        });
        cResult[9] = exemptRoles;
        cResult[10] = onSave;
        cResult[11] = tmp8;
        cResult[12] = tmp22;
      }
      const tmpResult = guildId(504);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      ({ exemptRoles, onSave } = guildId);
      const items = [GuildRoleStore];
      const items1 = [guildId];
      const stateFromStores = guildId(504).useStateFromStores(
        items,
        () => GuildRoleStore.getSortedRoles(guildId),
        items1,
      );
      const items2 = [stateFromStores];
      const memo = noop.useMemo(() => stateFromStores.filter((item) => !closure_1_4(item)), items2);
      const obj2 = {
        title: null,
        searchPlaceholder: null,
        listId: "automod-exempt-roles",
        items: null,
        initialSelected: null,
        getId: null,
        getSearchText: null,
        renderLabel: null,
        onSave: null,
      };
      const obj = guildId(504);
      const intl = guildId(1126).intl;
      obj2.title = intl.string(guildId(1126).t["LPJmL/"]);
      const intl2 = guildId(1126).intl;
      obj2.searchPlaceholder = intl2.string(guildId(1126).t.aFO1I6);
      obj2.items = memo;
      obj2.initialSelected = exemptRoles;
      obj2.getId = getRoleId;
      obj2.getSearchText = getRoleName;
      obj2.renderLabel = renderRoleName;
      obj2.onSave = onSave;
      return jsx(stateFromStores(17686), {
        title: null,
        searchPlaceholder: null,
        listId: "automod-exempt-roles",
        items: null,
        initialSelected: null,
        getId: null,
        getSearchText: null,
        renderLabel: null,
        onSave: null,
      });
    };
