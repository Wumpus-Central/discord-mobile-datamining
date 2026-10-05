// === Module 15616: BenchmarkResultsList ===

// Module 15616 (BenchmarkResultsList)
import react2 from "react" /* 576 */;
import TableRow3 from "TableRow" /* 5993 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import startFrameMonitor from "startFrameMonitor" /* 15612 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let onClear;
  let results;
  let obj = react2;
  const cResult = obj.c(8);
  ({ results, onClear } = arg0);
  if (0 === results.length) {
    return null;
  } else {
    let tmp4;
    let tmp8;
    if (cResult[0] !== results) {
      let tmp6;
      let tmp5 = globalThis;
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(kind) {
          let FRAME_BUDGET_MS;
          let dropped;
          let elapsedMs;
          let frames;
          let tmp5;
          let toFixedResult;
          let worstMs;
          if ("mount" === kind.kind) {
            const obj = { label: null, subLabel: "" + elapsedMs.toFixed(1) + " ms total" };
            ({ label: obj.label, elapsedMs } = kind);
            const TableRow = TableRow3.TableRow;
            const _HermesInternal = HermesInternal;
            tmp5 = closure_1_2(TableRow, obj, kind.id);
          } else {
            const meanMs = kind.meanMs;
            const obj2 = { label: "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms", subLabel: "" + dropped + "/" + frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms" };
            const TableRow2 = TableRow3.TableRow;
            worstMs = kind.worstMs;
            const _HermesInternal2 = HermesInternal;
            ({ dropped, frames } = kind);
            toFixedResult = meanMs.toFixed(1);
            FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            tmp5 = closure_1_2(TableRow2, obj2, kind.id);
          }
          return tmp5;
        };
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const mapped = results.map(tmp6);
      cResult[0] = results;
      cResult[1] = mapped;
      tmp4 = mapped;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[3] !== onClear) {
      let obj2 = { label: "Clear results", variant: "danger", arrow: true, onPress: onClear };
      const tmp10 = React2(TableRow3.TableRow, obj2);
      cResult[3] = onClear;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
    const obj3 = { title: "Results (newest first)", hasIcons: false, children: items };
    items = [tmp4, tmp8];
    const tmp13 = _false(TableRowGroup2.TableRowGroup, obj3);
    cResult[5] = tmp4;
    cResult[6] = tmp8;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
}) : ((results) => {
  let items;
  results = results.results;
  let tmp2 = null;
  if (0 !== results.length) {
    let obj = { title: "Results (newest first)", hasIcons: false, children: items };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    items = [
      results.map((kind) => {
          let FRAME_BUDGET_MS;
          let dropped;
          let elapsedMs;
          let frames;
          let tmp5;
          let toFixedResult;
          let worstMs;
          if ("mount" === kind.kind) {
            const obj = { label: null, subLabel: "" + elapsedMs.toFixed(1) + " ms total" };
            ({ label: obj.label, elapsedMs } = kind);
            const TableRow = TableRow3.TableRow;
            const _HermesInternal = HermesInternal;
            tmp5 = closure_1_2(TableRow, obj, kind.id);
          } else {
            const meanMs = kind.meanMs;
            const obj2 = { label: "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms", subLabel: "" + dropped + "/" + frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms" };
            const TableRow2 = TableRow3.TableRow;
            worstMs = kind.worstMs;
            const _HermesInternal2 = HermesInternal;
            ({ dropped, frames } = kind);
            toFixedResult = meanMs.toFixed(1);
            FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            tmp5 = closure_1_2(TableRow2, obj2, kind.id);
          }
          return tmp5;
        }),

    ];
    let obj2 = { label: "Clear results", variant: "danger", arrow: true, onPress: tmp };
    items[1] = React2(TableRow3.TableRow, obj2);
    tmp2 = _false(TableRowGroup, obj);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default tmp4;