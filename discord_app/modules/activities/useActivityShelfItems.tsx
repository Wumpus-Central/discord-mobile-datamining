// discord_app/modules/activities/useActivityShelfItems.tsx
import react from "../../../_runtime/00019_react.js";
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let dependencyMap, set;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (enableFilter) {
      let tmp6;
      let tmp7;
      let obj = enableFilter(576);
      const cResult = obj.c(9);
      enableFilter = enableFilter.enableFilter;
      let tmp5 = undefined !== enableFilter;
      const guildId = enableFilter.guildId;
      if (tmp5) {
        tmp5 = enableFilter;
      }
      enableFilter = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperActivityShelfStore];
        const fn = function s() {
          const obj = { filter: filter.getFilter() };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmp2Result = enableFilter(504);
      const filter = tmp2Result.useStateFromStoresObject(tmp6, tmp7).filter;
      const tmp2Result3 = enableFilter(11668);
      const activityShelfData = tmp2Result3.useActivityShelfData(guildId);
      const tmp10 = filter(11669)(activityShelfData);
      const tmp2Result4 = enableFilter(11670);
      const developerActivityShelfItems = tmp2Result4.useDeveloperActivityShelfItems();
      if (cResult[2] === tmp5) {
        let tmp12;
        if (cResult[3] === filter) {
          tmp12 = cResult[4];
        }
        if (cResult[5] === developerActivityShelfItems) {
          if (cResult[6] === tmp12) {
            let tmp13;
            if (cResult[7] === tmp10) {
              tmp13 = cResult[8];
            }
            return tmp13;
          }
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items1, developerActivityShelfItems, 0);
        const found = items1.filter(tmp12);
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(found.map((application) => application.application.id));
        for (const item10072 of tmp10) {
          let hasItem = set.has(item10072.application.id);
          let tmp12Result = !hasItem && tmp12(item10072);
          if (tmp12Result) {
            let arr = found.push(item10072);
          }
          continue;
        }
        cResult[5] = developerActivityShelfItems;
        cResult[6] = tmp12;
        cResult[7] = tmp10;
        cResult[8] = found;
        tmp13 = found;
      }
      const fn2 = function p(application) {
        let tmp = !enableFilter;
        if (enableFilter) {
          let hasItem = "" === filter;
          if (!hasItem) {
            const str3 = application.application.name;
            const formatted = str3.toLowerCase();
            hasItem = formatted.includes(filter.toLowerCase());
          }
          tmp = hasItem;
        }
        return tmp;
      };
      cResult[2] = tmp5;
      cResult[3] = filter;
      cResult[4] = fn2;
      tmp12 = fn2;
    }
  : (enableFilter) => {
      let closure_2;
      let flag = enableFilter.enableFilter;
      const guildId = enableFilter.guildId;
      if (flag === undefined) {
        flag = false;
      }
      let obj = flag(504);
      let items = [DeveloperActivityShelfStore];
      const filter = obj.useStateFromStoresObject(items, () => {
        const obj = { filter: filter.getFilter() };
        return obj;
      }).filter;
      const obj2 = flag(11668);
      const activityShelfData = obj2.useActivityShelfData(guildId);
      const tmp2 = filter(11669)(activityShelfData);
      dependencyMap = tmp2;
      const obj3 = flag(11670);
      const developerActivityShelfItems = obj3.useDeveloperActivityShelfItems();
      const items1 = [developerActivityShelfItems, flag, filter, tmp2];
      return developerActivityShelfItems.useMemo(() => {
        function shouldKeepShelfItem(application) {
          let tmp = !flag;
          if (flag) {
            let hasItem = "" === filter;
            if (!hasItem) {
              const str3 = application.application.name;
              const formatted = str3.toLowerCase();
              hasItem = formatted.includes(filter.toLowerCase());
            }
            tmp = hasItem;
          }
          return tmp;
        }
        const items = [...developerActivityShelfItems];
        const found = items.filter(shouldKeepShelfItem);
        set = new Set(found.map((application) => application.application.id));
        for (const item10023 of closure_2) {
          let hasItem = set.has(item10023.application.id);
          let shouldKeepShelfItemResult = !hasItem && shouldKeepShelfItem(item10023);
          if (shouldKeepShelfItemResult) {
            let arr = found.push(item10023);
          }
          continue;
        }
        return found;
      }, items1);
    };
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default tmp2;
