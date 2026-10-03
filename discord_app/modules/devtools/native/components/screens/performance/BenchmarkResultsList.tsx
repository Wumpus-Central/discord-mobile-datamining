// === Module 15612: BenchmarkResultsList ===

// Module 15612 (BenchmarkResultsList)
import c from "c" /* 576 */;
import TableRow from "TableRow" /* 5993 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import startFrameMonitor from "startFrameMonitor" /* 15608 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ results, onClear } = arg0);
  let num = 0;
  if (0 === results.length) {
    return null;
  } else if (cResult[0] !== results) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(kind) {
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
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = results.map(tmp6);
    cResult[num] = results;
    num = 1;
    cResult[1] = mapped;
  } else {
    if (cResult[3] !== onClear) {
      let obj2 = { label: "Clear results", variant: "danger", arrow: true, onPress: onClear };
      const tmp11 = React2(TableRow.TableRow, obj2);
      cResult[3] = onClear;
      cResult[4] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === cResult[1]) {
      if (cResult[6] === tmp9) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { title: "Results (newest first)", hasIcons: false, children: null };
    const items = [cResult[1], tmp9];
    obj3.children = items;
    const tmp14 = React3(TableRowGroup.TableRowGroup, obj3);
    cResult[5] = cResult[1];
    cResult[6] = tmp9;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
}) : ((results) => {
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
});