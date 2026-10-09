// === Module 17213: ConjurePerfTraceStatsHeader ===

// Module 17213 (ConjurePerfTraceStatsHeader)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 17214 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let createStyles = fn(5091);
let obj2 = { op: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, model: null, tool: null, setup: null, worktree: null, sandbox: null, build: null, platform: null, other: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.model = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_NOTIFICATION };
let obj4 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_NOTIFICATION };
obj2.tool = { backgroundColor: nativeDefault.colors.TEXT_LINK };
let obj5 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
obj2.setup = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_INFO };
const obj6 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_INFO };
obj2.worktree = { backgroundColor: nativeDefault.colors.ICON_STRONG };
const obj7 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
obj2.sandbox = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
const obj8 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj2.build = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj9 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.platform = { backgroundColor: nativeDefault.colors.ICON_MUTED };
const obj10 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.other = { backgroundColor: nativeDefault.colors.ICON_SUBTLE };
const styles = createStyles.createStyles(obj2);
createStyles = fn(5091);
const obj13 = { header: null, bar: null, legend: null, legendItem: null, swatch: null };
const obj11 = { backgroundColor: nativeDefault.colors.ICON_SUBTLE };
obj13.header = { gap: nativeDefault.space.PX_4 };
const obj14 = { gap: nativeDefault.space.PX_4 };
obj13.bar = { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
const obj15 = { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj13.legend = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_12, rowGap: nativeDefault.space.PX_4 };
const obj16 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_12, rowGap: nativeDefault.space.PX_4 };
obj13.legendItem = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
obj13.swatch = size;
let closure_6 = createStyles.createStyles(obj13);
const ReactCompilerGating = fn(558);
const obj17 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatsHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePerfTraceStatsHeader(stats) {
  const cResult = stats(576).c(25);
  stats = stats.stats;
  if (cResult[0] !== stats) {
    const perfModelSummaryResult = tmp(17214).perfModelSummary(stats);
    cResult[0] = stats;
    cResult[1] = perfModelSummaryResult;
    let tmp4 = perfModelSummaryResult;
    const tmpResult = tmp(17214);
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_6();
  const tmp7 = styles();
  dependencyMap = tmp7;
  if (cResult[2] === tmp7) {
    if (cResult[3] === stats.categories) {
      if (cResult[7] === tmp6.bar) {
        if (cResult[8] === tmp10) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] === tmp7) {
          if (cResult[11] === stats) {
            if (cResult[12] === tmp6.legendItem) {
              if (cResult[13] === tmp6.swatch) {
                let tmp18 = cResult[14];
              }
              if (cResult[15] === tmp6.legend) {
                if (cResult[16] === tmp18) {
                  let tmp20 = cResult[17];
                }
                if (cResult[18] !== tmp4) {
                  let tmp25 = null;
                  if (null != tmp4) {
                    let obj2 = { variant: "text-sm/normal", color: "text-default", children: tmp4 };
                    tmp25 = closure_3(tmp(5087).Text, obj2);
                  }
                  cResult[18] = tmp4;
                  cResult[19] = tmp25;
                  let tmp24 = tmp25;
                } else {
                  tmp24 = cResult[19];
                }
                if (cResult[20] === tmp6.header) {
                  if (cResult[21] === tmp13) {
                    if (cResult[22] === tmp20) {
                      if (cResult[23] === tmp24) {
                        let tmp27 = cResult[24];
                      }
                      return tmp27;
                    }
                  }
                }
                let obj3 = { style: tmp8, children: null };
                let items = [tmp13, tmp20, tmp24];
                obj3.children = items;
                const tmp30 = closure_4(dependencyMap, obj3);
                cResult[20] = tmp6.header;
                cResult[21] = tmp13;
                cResult[22] = tmp20;
                cResult[23] = tmp24;
                cResult[24] = tmp30;
                tmp27 = tmp30;
              }
              const obj4 = { style: tmp17, children: tmp18 };
              const tmp23 = closure_3(dependencyMap, obj4);
              cResult[15] = tmp6.legend;
              cResult[16] = tmp18;
              cResult[17] = tmp23;
              tmp20 = tmp23;
            }
          }
        }
        const PERF_CATEGORIES = tmp(13174).PERF_CATEGORIES;
        const mapped = PERF_CATEGORIES.map((item) => {
          const perfCategoryTotalResult = ConjurePerfTraceFormat.perfCategoryTotal(stats, item);
          const obj2 = { style: closure_1.legendItem, children: null };
          const obj3 = { style: null };
          const items = [closure_1.swatch, dependencyMap[item]];
          obj3.style = items;
          const items1 = [React3(View, obj3), , ];
          items1[1] = React3(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item] });
          let tmp6Result = null;
          if (null != perfCategoryTotalResult) {
            const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: perfCategoryTotalResult };
            tmp6Result = React3(Text_Text.Text, obj5);
          }
          items1[2] = tmp6Result;
          obj2.children = items1;
          return React4(View, obj2, item);
        });
        cResult[10] = tmp7;
        cResult[11] = stats;
        cResult[12] = tmp6.legendItem;
        cResult[13] = tmp6.swatch;
        cResult[14] = mapped;
        tmp18 = mapped;
      }
      let obj5 = { style: tmp9, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: cResult[4] };
      const tmp16 = closure_3(dependencyMap, obj5);
      cResult[7] = tmp6.bar;
      cResult[8] = cResult[4];
      cResult[9] = tmp16;
      tmp13 = tmp16;
    }
  }
  if (cResult[5] !== tmp7) {
    const fn = function b(arg0) {
      ({ category, ms } = arg0);
      let tmp = null;
      if (0 !== ms) {
        const obj = { style: null };
        const items = [dependencyMap[category], ];
        const obj2 = { flex: ms };
        items[1] = obj2;
        obj.style = items;
        tmp = React3(View, obj, category);
      }
      return tmp;
    };
    cResult[5] = tmp7;
    cResult[6] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[6];
  }
  const categories = stats.categories;
  const mapped1 = categories.map(tmp11);
  cResult[2] = tmp7;
  cResult[3] = stats.categories;
  cResult[4] = mapped1;
  let obj = stats(576);
}) : (function ConjurePerfTraceStatsHeader(stats) {
  stats = stats.stats;
  const perfModelSummaryResult = stats(17214).perfModelSummary(stats);
  const tmp4 = closure_6();
  dependencyMap = styles();
  let obj2 = { style: tmp4.header, children: null };
  let obj3 = { style: tmp4.bar, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const categories = stats.categories;
  obj3.children = categories.map((item) => {
    ({ category, ms } = item);
    let tmp = null;
    if (0 !== ms) {
      const obj = { style: null };
      const items = [dependencyMap[category], ];
      const obj2 = { flex: ms };
      items[1] = obj2;
      obj.style = items;
      tmp = React3(View, obj, category);
    }
    return tmp;
  });
  let items = [closure_3(dependencyMap, obj3), , ];
  const obj4 = { style: tmp4.legend, children: null };
  const PERF_CATEGORIES = stats(13174).PERF_CATEGORIES;
  obj4.children = PERF_CATEGORIES.map((item) => {
    const perfCategoryTotalResult = ConjurePerfTraceFormat.perfCategoryTotal(stats, item);
    const obj2 = { style: closure_1.legendItem, children: null };
    const obj3 = { style: null };
    const items = [closure_1.swatch, dependencyMap[item]];
    obj3.style = items;
    const items1 = [React3(View, obj3), , ];
    items1[1] = React3(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item] });
    let tmp6Result = null;
    if (null != perfCategoryTotalResult) {
      const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: perfCategoryTotalResult };
      tmp6Result = React3(Text_Text.Text, obj5);
    }
    items1[2] = tmp6Result;
    obj2.children = items1;
    return React4(View, obj2, item);
  });
  items[1] = closure_3(dependencyMap, obj4);
  let tmp7Result = null;
  if (null != perfModelSummaryResult) {
    let obj5 = { variant: "text-sm/normal", color: "text-default", children: perfModelSummaryResult };
    tmp7Result = closure_3(stats(5087).Text, obj5);
  }
  items[2] = tmp7Result;
  obj2.children = items;
  return closure_4(dependencyMap, obj2);
});
export const usePerfCategoryColors = styles;