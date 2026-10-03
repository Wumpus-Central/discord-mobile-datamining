// discord_app/modules/activities/useActivityShelfItems.tsx
import noop from "../../../_runtime/metro/00019__.js";
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (enableFilter) => {
      const cResult = enableFilter(576).c(9);
      enableFilter = enableFilter.enableFilter;
      let tmp4 = undefined !== enableFilter;
      if (tmp4) {
        tmp4 = enableFilter;
      }
      enableFilter = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperActivityShelfStore];
        const fn = function s() {
          return { filter: filter.getFilter() };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = enableFilter(576);
      const filter = enableFilter(504).useStateFromStoresObject(tmp5, tmp6).filter;
      const tmpResult = enableFilter(504);
      const activityShelfData = enableFilter(11654).useActivityShelfData(enableFilter.guildId);
      const tmp9 = filter(11655)(activityShelfData);
      const tmpResult3 = enableFilter(11654);
      const developerActivityShelfItems = enableFilter(11656).useDeveloperActivityShelfItems();
      if (cResult[2] === tmp4) {
        if (cResult[3] === filter) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === developerActivityShelfItems) {
          if (cResult[6] === tmp11) {
            if (cResult[7] === tmp9) {
              let tmp12 = cResult[8];
            }
            return tmp12;
          }
        }
        const items1 = [];
        HermesBuiltin.arraySpread(developerActivityShelfItems, 0);
        const found = items1.filter(tmp11);
        const _Set = Set;
        const set = new Set(found.map((application) => application.application.id));
        for (const item10072 of tmp9) {
          let hasItem = set.has(item10072.application.id);
          let tmp11Result = !hasItem;
          if (!hasItem) {
            tmp11Result = tmp11(item10072);
          }
          if (tmp11Result) {
            let arr = found.push(item10072);
          }
          continue;
        }
        cResult[5] = developerActivityShelfItems;
        cResult[6] = tmp11;
        cResult[7] = tmp9;
        cResult[8] = found;
        tmp12 = found;
      }
      const fn2 = function p(application) {
        let tmp = !enableFilter;
        if (enableFilter) {
          let hasItem = "" === filter;
          if (!hasItem) {
            const formatted = application.application.name.toLowerCase();
            hasItem = formatted.includes(filter.toLowerCase());
          }
          tmp = hasItem;
        }
        return tmp;
      };
      cResult[2] = tmp4;
      cResult[3] = filter;
      cResult[4] = fn2;
      tmp11 = fn2;
      const tmpResult4 = enableFilter(11656);
    }
  : (enableFilter) => {
      let flag = enableFilter.enableFilter;
      if (flag === undefined) {
        flag = false;
      }
      let items = [DeveloperActivityShelfStore];
      const filter = flag(504).useStateFromStoresObject(items, () => ({ filter: filter.getFilter() })).filter;
      const obj = flag(504);
      const activityShelfData = flag(11654).useActivityShelfData(enableFilter.guildId);
      const tmp2 = filter(11655)(activityShelfData);
      dependencyMap = tmp2;
      const obj2 = flag(11654);
      const developerActivityShelfItems = flag(11656).useDeveloperActivityShelfItems();
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
