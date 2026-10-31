// discord_app/modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatsHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ConjurePerfTraceFormat from "../ConjurePerfTraceFormat.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let createStyles = fn(5014);
let obj2 = {
  op: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND },
  model: null,
  tool: null,
  setup: null,
  worktree: null,
  sandbox: null,
  build: null,
  platform: null,
  other: null,
};
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
createStyles = fn(5014);
const obj13 = { header: null, bar: null, legend: null, legendItem: null, swatch: null };
const obj11 = { backgroundColor: nativeDefault.colors.ICON_SUBTLE };
obj13.header = { gap: nativeDefault.space.PX_4 };
const obj14 = { gap: nativeDefault.space.PX_4 };
obj13.bar = {
  flexDirection: "row",
  height: 6,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
const obj15 = {
  flexDirection: "row",
  height: 6,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj13.legend = {
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_12,
  rowGap: nativeDefault.space.PX_4,
};
const obj16 = {
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_12,
  rowGap: nativeDefault.space.PX_4,
};
obj13.legendItem = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
obj13.swatch = size;
let closure_6 = createStyles.createStyles(obj13);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatsHeader.tsx");

export default function ConjurePerfTraceStatsHeader(stats) {
  stats = stats.stats;
  const perfModelSummaryResult = stats(13003).perfModelSummary(stats);
  const tmp4 = closure_6();
  dependencyMap = styles();
  let obj2 = { style: tmp4.header, children: null };
  let obj3 = {
    style: tmp4.bar,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const categories = stats.categories;
  obj3.children = categories.map((item) => {
    ({ category, ms } = item);
    let tmp = null;
    if (0 !== ms) {
      const obj = { style: null };
      const items = [dependencyMap[category]];
      const obj2 = { flex: ms };
      items[1] = obj2;
      obj.style = items;
      tmp = React3(View, obj, category);
    }
    return tmp;
  });
  let items = [closure_3(dependencyMap, obj3), ,];
  const obj4 = { style: tmp4.legend, children: null };
  const PERF_CATEGORIES = stats(10894).PERF_CATEGORIES;
  obj4.children = PERF_CATEGORIES.map((item) => {
    const perfCategoryTotalResult = ConjurePerfTraceFormat.perfCategoryTotal(stats, item);
    const obj2 = { style: closure_1.legendItem, children: null };
    const obj3 = { style: null };
    const items = [closure_1.swatch, dependencyMap[item]];
    obj3.style = items;
    const items1 = [React3(View, obj3), ,];
    items1[1] = React3(Text_Text.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item],
    });
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
    tmp7Result = closure_3(stats(5624).Text, obj5);
  }
  items[2] = tmp7Result;
  obj2.children = items;
  return closure_4(dependencyMap, obj2);
}
export const usePerfCategoryColors = styles;
