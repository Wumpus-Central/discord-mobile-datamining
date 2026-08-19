// === Module 15187: BenchmarkResultsList ===

// Module 15187 (BenchmarkResultsList)
import noopAll from "noop" /* 19 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default function BenchmarkResultsList(results) {
  results = results.results;
  let tmp2 = null;
  if (0 !== results.length) {
    const items = [
      results.map((item, index) => {
          if ("mount" === item.kind) {
            let obj = { label: null, subLabel: null };
            ({ label: obj[0], elapsedMs } = item);
            const _HermesInternal = HermesInternal;
            obj[1] = "" + elapsedMs.toFixed(1) + " ms total";
            let tmp5 = callback2(callback(6291).TableRow, obj, item.id);
          } else {
            obj = { label: null, subLabel: null };
            const meanMs = item.meanMs;
            const toFixedResult = meanMs.toFixed(1);
            const worstMs = item.worstMs;
            const _HermesInternal2 = HermesInternal;
            obj[0] = "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms";
            ({ dropped, frames } = item);
            const FRAME_BUDGET_MS = callback(15183).FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            obj[1] = "" + dropped + "/" + frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms";
            tmp5 = callback2(callback(6291).TableRow, obj, item.id);
          }
          return tmp5;
        }),

    ];
    let obj = { label: "Clear results", variant: "danger", arrow: true, onPress: null };
    obj[3] = tmp;
    items[1] = callback(TableRowInner.TableRow, obj);
    obj[2] = items;
    tmp2 = callback2(TableRowGroupTitle.TableRowGroup, obj);
  }
  return tmp2;
};