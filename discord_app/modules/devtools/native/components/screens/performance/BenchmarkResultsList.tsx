// === Module 16060: BenchmarkResultsList ===

// Module 16060 (BenchmarkResultsList)
import TableRow from "TableRow" /* 5824 */;
import TableRowGroup from "TableRowGroup" /* 5906 */;
import startFrameMonitor from "startFrameMonitor" /* 16056 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default function BenchmarkResultsList(results) {
  results = results.results;
  let tmp2 = null;
  if (0 !== results.length) {
    let obj = { title: "Results (newest first)", hasIcons: false, children: null };
    const items = [
      results.map((kind) => {
          if ("mount" === kind.kind) {
            const obj = { label: null, subLabel: null };
            ({ label: obj.label, elapsedMs } = kind);
            const _HermesInternal = HermesInternal;
            obj.subLabel = "" + elapsedMs.toFixed(1) + " ms total";
            let tmp5 = closure_1_2(TableRow.TableRow, obj, kind.id);
          } else {
            const obj2 = { label: null, subLabel: null };
            const meanMs = kind.meanMs;
            const toFixedResult = meanMs.toFixed(1);
            const worstMs = kind.worstMs;
            const _HermesInternal2 = HermesInternal;
            obj2.label = "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms";
            ({ dropped, frames } = kind);
            const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            obj2.subLabel = "" + dropped + "/" + frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms";
            tmp5 = closure_1_2(TableRow.TableRow, obj2, kind.id);
          }
          return tmp5;
        }),

    ];
    let obj2 = { label: "Clear results", variant: "danger", arrow: true, onPress: tmp };
    items[1] = React2(TableRow.TableRow, obj2);
    obj.children = items;
    tmp2 = React3(TableRowGroup.TableRowGroup, obj);
  }
  return tmp2;
};