// === Module 17219: ConjurePerfTraceList ===

// Module 17219 (ConjurePerfTraceList)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceList.tsx");

export const filterPerfTraces = function filterPerfTraces(stateFromStoresArray, first1) {
  const formatted = first1.trim().toLowerCase();
  let found = stateFromStoresArray;
  if ("" !== formatted) {
    found = stateFromStoresArray.filter((item) => (function perfTraceText(item) {
      const items = [];
      ({ name: arr[0], spans } = item);
      const iter = spans[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let str = nextResult.error;
        if (str == null) {
          str = "";
        }
        let arr2 = items.push(nextResult.name, str);
        let attrs = tmp2.attrs;
        if (attrs == null) {
          attrs = {};
        }
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(Object.values(attrs), 0);
        let details = tmp2.details;
        if (details == null) {
          details = {};
        }
        let arraySpreadResult2 = HermesBuiltin.arraySpread(Object.values(details), arraySpreadResult);
        for (const item10039 of items1) {
          let _String = String;
          let arr4 = items.push(String(item10039));
          continue;
        }
        continue;
      }
      return items.join(" ").toLowerCase();
    })(item).includes(formatted));
  }
  return found;
};
export const perfTraceExport = function perfTraceExport(projectId, memo, date) {
  return JSON.stringify({ kind: "conjure.timing_traces", version: 1, project_id: projectId, exported_at: date, traces: memo });
};