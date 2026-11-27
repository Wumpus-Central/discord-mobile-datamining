// discord_app/modules/guild_settings/integrations/permission/useIntegrationPermissionCommandSearch.tsx
import IntegrationPermissionSearchUtils from "IntegrationPermissionSearchUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import IntegrationPermissionStore from "IntegrationPermissionStore.tsx";

require = fn;
function commandTerms(id) {
  const obj = { id: id.id, names: null };
  items = [id.displayName];
  obj.names = items;
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/useIntegrationPermissionCommandSearch.tsx",
);

export function useIntegrationPermissionCommandSearch() {
  items = [memo2];
  const stateFromStores = stateFromStoresObject(query[3]).useStateFromStores(items, () => null != memo2.getCommands());
  const obj = stateFromStoresObject(query[3]);
  const items1 = [memo2];
  stateFromStoresObject = stateFromStoresObject(query[3]).useStateFromStoresObject(items1, () => {
    let commands = memo2.getCommands();
    if (commands == null) {
      commands = {};
    }
    return Object.values(commands);
  });
  const tmp2 = memo(memo1.useState(""), 2);
  query = tmp2[0];
  const items2 = [stateFromStoresObject];
  memo = memo1.useMemo(
    () =>
      stateFromStoresObject.filter((integration_types) => {
        let hasItem = null == integration_types.integration_types;
        if (!hasItem) {
          integration_types = integration_types.integration_types;
          hasItem = integration_types.includes(stateFromStoresObject(5658).ApplicationIntegrationType.GUILD_INSTALL);
        }
        if (hasItem) {
          let tmp4 = null == integration_types.contexts;
          if (!tmp4) {
            const contexts = integration_types.contexts;
            let hasItem1;
            if (contexts != null) {
              hasItem1 = contexts.includes(stateFromStoresObject(2118).InteractionContextType.GUILD);
            }
            tmp4 = hasItem1;
          }
          hasItem = tmp4;
        }
        return hasItem;
      }),
    items2,
  );
  const items3 = [memo];
  memo1 = memo1.useMemo(() => {
    items = [...memo];
    return items.sort((type, type2) => {
      type = stateFromStoresObject(query[5]).ApplicationCommandType.CHAT + 1;
      type2 = type;
      if (type2.type <= type) {
        type2 = type2.type;
      }
      if (type.type <= type) {
        type = type.type;
      }
      let diff = type2 - type;
      if (0 === diff) {
        const untranslatedName = type.untranslatedName;
        diff = untranslatedName.localeCompare(type2.untranslatedName);
      }
      return diff;
    });
  }, items3);
  const items4 = [query, memo1];
  memo2 = memo1.useMemo(() => {
    if (first.startsWith("/")) {
      let found = memo1.filter((type) => type.type === stateFromStoresObject(query[5]).ApplicationCommandType.CHAT);
    } else {
      found = memo1;
    }
    return found;
  }, items4);
  const items5 = [query];
  const memo3 = memo1.useMemo(() => {
    let substr = first;
    if (first.startsWith("/")) {
      substr = first.substring(1);
    }
    return substr;
  }, items5);
  const items6 = [memo2, memo3];
  const obj2 = stateFromStoresObject(query[3]);
  return {
    query,
    results: memo1.useMemo(
      () => IntegrationPermissionSearchUtils.filterPermissionSearchItems(memo2, commandTerms, memo3),
      items6,
    ),
    setQuery: tmp2[1],
    unfilteredCount: stateFromStoresObject.length,
    isLoaded: stateFromStores,
  };
}
