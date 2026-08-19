// discord_app/modules/activities/useActivityShelfItems.tsx
import noop from "../../../_runtime/00019_noop.js";
import initialize from "DeveloperActivityShelfStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default function useActivityShelfItems(enableFilter) {
  let flag = enableFilter.enableFilter;
  if (flag === undefined) {
    flag = false;
  }
  let items = [closure_4];
  const filter = flag(589).useStateFromStoresObject(items, () => ({ filter: filter.getFilter() })).filter;
  const obj = flag(589);
  const activityShelfData = flag(11213).useActivityShelfData(enableFilter.guildId);
  const tmp2 = filter(11214)(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = flag(11213);
  const developerActivityShelfItems = flag(11215).useDeveloperActivityShelfItems();
  const items1 = [developerActivityShelfItems, flag, filter, tmp2];
  return developerActivityShelfItems.useMemo(() => {
    function shouldKeepShelfItem(item, index) {
      let tmp = !closure_0;
      if (closure_0) {
        let hasItem = "" === closure_1;
        if (!hasItem) {
          const formatted = item.application.name.toLowerCase();
          hasItem = formatted.includes(closure_1.toLowerCase());
        }
        tmp = hasItem;
      }
      return tmp;
    }
    const items = [...developerActivityShelfItems];
    const found = items.filter(shouldKeepShelfItem);
    for (const item10023 of closure_2) {
      let hasItem = set.has(item10023.application.id);
      let shouldKeepShelfItemResult = !hasItem;
      if (!hasItem) {
        shouldKeepShelfItemResult = shouldKeepShelfItem(item10023);
      }
      if (shouldKeepShelfItemResult) {
        let arr = found.push(item10023);
      }
      continue;
    }
    return found;
  }, items1);
};