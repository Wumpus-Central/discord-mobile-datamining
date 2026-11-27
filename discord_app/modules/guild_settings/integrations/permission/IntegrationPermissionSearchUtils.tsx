// discord_app/modules/guild_settings/integrations/permission/IntegrationPermissionSearchUtils.tsx
import fuzzysearchDefault from "../../../../../_runtime/06988_fuzzysearch.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/IntegrationPermissionSearchUtils.tsx",
);

export function filterPermissionSearchItems(memo, channelTerms, substr) {
  if ("" === substr) {
    return memo;
  } else {
    closure_0 = substr.toLowerCase();
    items = [];
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let tmp5 = channelTerms(nextResult);
      let names = tmp5.names;
      if (tmp5.id === substr) {
        let items1 = [tmp4];
        iter.return();
        return items1;
      } else {
        if (names.some((item) => fuzzysearchDefault(closure_0, item.toLowerCase()))) {
          let arr = items.push(tmp4);
        }
        continue;
      }
    }
    return items;
  }
}
