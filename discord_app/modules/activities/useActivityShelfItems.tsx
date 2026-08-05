// discord_app/modules/activities/useActivityShelfItems.tsx
import noop from "noop";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default function useActivityShelfItems(enableFilter) {
  let flag = enableFilter.enableFilter;
  if (flag === undefined) {
    flag = false;
  }
  let filter;
  let dependencyMap;
  let developerActivityShelfItems;
  let items = [initialize];
  filter = flag(589).useStateFromStoresObject(items, () => ({ filter: filter.getFilter() })).filter;
  const obj = flag(589);
  const activityShelfData = flag(11339).useActivityShelfData(enableFilter.guildId);
  const tmp2 = filter(11340)(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = flag(11339);
  developerActivityShelfItems = flag(11341).useDeveloperActivityShelfItems();
  const items1 = [developerActivityShelfItems, flag, filter, tmp2];
  return developerActivityShelfItems.useMemo(() => {
    function shouldKeepShelfItem(application) {
      let tmp = !closure_0;
      if (closure_0) {
        let hasItem = "" === closure_1;
        if (!hasItem) {
          const formatted = application.application.name.toLowerCase();
          hasItem = formatted.includes(str.toLowerCase());
          const str3 = application.application.name;
        }
        tmp = hasItem;
        str = closure_1;
      }
      return tmp;
    }
    const items = [...developerActivityShelfItems];
    const found = items.filter(shouldKeepShelfItem);
    for (const item10023 of c2) {
      let tmp = item10023;
      let hasItem = set.has(item10023.application.id);
      let shouldKeepShelfItemResult = !hasItem;
      if (!hasItem) {
        let tmp4 = item10023;
        shouldKeepShelfItemResult = shouldKeepShelfItem(tmp);
      }
      if (shouldKeepShelfItemResult) {
        let tmp5 = item10023;
        let arr = found.push(tmp);
      }
      continue;
    }
    return found;
  }, items1);
};