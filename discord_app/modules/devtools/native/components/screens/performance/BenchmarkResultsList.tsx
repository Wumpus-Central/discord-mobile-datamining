// === Module 15734: BenchmarkResultsList ===

// Module 15734 (BenchmarkResultsList)
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 5605 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5687 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default function BenchmarkResultsList(results) {
  results = results.results;
  let tmp2 = null;
  if (0 !== results.length) {
    let obj = { title: "Results (newest first)", hasIcons: false, children: null };
    const items = [
      results.map((kind) => {
          if ("mount" === kind.kind) {
            let obj = { label: null, subLabel: null };
            ({ label: obj[0], elapsedMs } = kind);
            const _HermesInternal = HermesInternal;
            obj[1] = "" + elapsedMs.toFixed(1) + " ms total";
            let tmp5 = callback2(callback(5605).TableRow, obj, kind.id);
          } else {
            obj = { label: null, subLabel: null };
            const meanMs = kind.meanMs;
            const toFixedResult = meanMs.toFixed(1);
            const worstMs = kind.worstMs;
            const _HermesInternal2 = HermesInternal;
            obj[0] = "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms";
            ({ dropped, frames } = kind);
            const FRAME_BUDGET_MS = callback(15730).FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            obj[1] = "" + dropped + "/" + frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms";
            tmp5 = callback2(callback(5605).TableRow, obj, kind.id);
          }
          return tmp5;
        }),

    ];
    obj = { label: "Clear results", variant: "danger", arrow: true, onPress: null };
    obj[3] = tmp;
    items[1] = callback(TableRowInner.TableRow, obj);
    obj[2] = items;
    tmp2 = callback2(TableRowGroupTitle.TableRowGroup, obj);
  }
  return tmp2;
};