// === Module 12039: useActivityShelfItems ===

// Module 12039 (useActivityShelfItems)
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8855 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default function useActivityShelfItems(enableFilter) {
  let flag = enableFilter.enableFilter;
  if (flag === undefined) {
    flag = false;
  }
  let items = [DeveloperActivityShelfStore];
  const filter = flag(504).useStateFromStoresObject(items, () => ({ filter: filter.getFilter() })).filter;
  const obj = flag(504);
  const activityShelfData = flag(12040).useActivityShelfData(enableFilter.guildId);
  const tmp2 = filter(12041)(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = flag(12040);
  const developerActivityShelfItems = flag(12042).useDeveloperActivityShelfItems();
  const items1 = [developerActivityShelfItems, flag, filter, tmp2];
  return developerActivityShelfItems.useMemo(() => {
    function shouldKeepShelfItem(application) {
      let tmp = !flag;
      if (flag) {
        let hasItem = "" === filter;
        if (!hasItem) {
          const formatted = application.application.name.toLowerCase();
          hasItem = formatted.includes(filter.toLowerCase());
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