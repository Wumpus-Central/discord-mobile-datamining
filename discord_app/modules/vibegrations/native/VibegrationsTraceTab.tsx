// === Module 16987: VibegrationsTraceTab ===

// Module 16987 (VibegrationsTraceTab)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3676 from "module_3676" /* 3676 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4689 */;
import Text_Text from "Text/Text" /* 4718 */;
import Card from "Card" /* 5777 */;
import FileManagerUtils from "FileManagerUtils" /* 8435 */;
import VibegrationsTraceFormat from "VibegrationsTraceFormat" /* 16988 */;
import vibegrations_VibegrationsTraceFormat from "vibegrations/VibegrationsTraceFormat" /* 16989 */;
import VibegrationsTraceUtils from "VibegrationsTraceUtils" /* 16990 */;
import VibegrationsTimeFormat from "VibegrationsTimeFormat" /* 16992 */;
import VibegrationsTraceDetailSheet from "VibegrationsTraceDetailSheet" /* 16993 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16851 */;

const require = globalThis.__r;
const VibegrationsTraceDetailSheetDefault = VibegrationsTraceDetailSheet;

require = fn;
function TraceRow(entry) {
  entry = entry.entry;
  const onPress = entry.onPress;
  const tmp = closure_9();
  const traceCategoryTextStyles = VibegrationsTraceFormat.useTraceCategoryTextStyles();
  const traceCategoryResult = VibegrationsTraceUtils.traceCategory(entry);
  const tmp6 = "model" === entry.kind ? entry.model : entry.tool;
  if ("model" === entry.kind) {
    if (null != entry.promptTokens) {
      const intl = util.intl;
      const obj3 = { tokens: vibegrations_VibegrationsTraceFormat.formatTokens(entry.promptTokens) };
      let formatToPlainStringResult = intl.formatToPlainString(_modDef3676["PYO+Jv"], obj3);
      const tmp2Result = vibegrations_VibegrationsTraceFormat;
    }
    const items = [tmp.rowSlot, ];
    let rowNested = "tool" === entry.kind;
    if (rowNested) {
      rowNested = null != entry.parentId;
    }
    if (rowNested) {
      rowNested = tmp.rowNested;
    }
    const obj4 = { style: null, children: null };
    items[1] = rowNested;
    obj4.style = items;
    const obj5 = {
      variant: "primary",
      onPress() {
          return onPress(entry);
        },
      accessibilityLabel: tmp6,
      children: null
    };
    const obj6 = { style: tmp.rowBody, children: null };
    const obj7 = { style: tmp.rowTop, children: null };
    const obj8 = { status: entry.status };
    const items1 = [React5(VibegrationsTraceFormat.TraceStatusDot, obj8), , , ];
    const obj9 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: vibegrations_VibegrationsTraceFormat.categoryLabel(traceCategoryResult) };
    items1[1] = React5(Text_Text.Text, obj9);
    const obj10 = { variant: "text-xs/semibold", color: "text-default", style: tmp.rowTitle, lineClamp: 1, children: tmp6 };
    items1[2] = React5(Text_Text.Text, obj10);
    let tmp10Result = null;
    if (null != formatToPlainStringResult) {
      const obj11 = { variant: "text-xs/normal", color: "text-subtle", children: formatToPlainStringResult };
      tmp10Result = React5(Text_Text.Text, obj11);
    }
    items1[3] = tmp10Result;
    obj7.children = items1;
    const items2 = [React6(View, obj7), , ];
    let tmp10Result3 = null;
    if ("tool" === entry.kind) {
      tmp10Result3 = null;
      if (null != entry.summary) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: entry.summary };
        tmp10Result3 = React5(Text_Text.Text, obj12);
      }
    }
    items2[1] = tmp10Result3;
    let tmp10Result4 = null;
    if (null != entry.error) {
      const obj13 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: entry.error };
      tmp10Result4 = React5(Text_Text.Text, obj13);
    }
    items2[2] = tmp10Result4;
    obj6.children = items2;
    obj5.children = React6(View, obj6);
    obj4.children = React5(Card.Card, obj5);
    return React5(View, obj4);
  }
  formatToPlainStringResult = null;
  if (null != entry.durationMs) {
    formatToPlainStringResult = vibegrations_VibegrationsTraceFormat.formatDuration(entry.durationMs);
    const tmp2Result4 = vibegrations_VibegrationsTraceFormat;
  }
}
function TraceOverview(arg0) {
  const entries = arg0.entries;
  let reduced;
  let tmp = closure_9();
  closure_1 = tmp;
  dependencyMap = entries(16988).useTraceCategoryFillStyles();
  let items = [entries];
  const memo = reduced.useMemo(() => VibegrationsTraceUtils.traceCategoryTotals(entries), items);
  reduced = memo.reduce((acc, ms) => acc + ms.ms, 0);
  let obj2 = { style: tmp.overview, children: null };
  let obj3 = { style: tmp.overviewBar, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  let mapped = null;
  if (0 !== reduced) {
    mapped = memo.map((item) => {
      ({ category, ms } = item);
      let tmp = null;
      if (0 !== ms) {
        const obj = { style: null };
        const items = [dependencyMap[category], ];
        const obj2 = { flex: ms };
        items[1] = obj2;
        obj.style = items;
        tmp = React5(View, obj, category);
      }
      return tmp;
    });
  }
  obj3.children = mapped;
  let items1 = [closure_7(View, obj3), ];
  let obj4 = { style: tmp.legend, children: null };
  const TRACE_CATEGORIES = entries(16990).TRACE_CATEGORIES;
  obj4.children = TRACE_CATEGORIES.map((item) => {
    closure_0 = item;
    const found = memo.find((category) => category.category === closure_0);
    let num;
    if (found != null) {
      num = found.ms;
    }
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    if (0 !== reduced) {
      const _Math = Math;
      num2 = Math.round(num / tmp2 * 100);
    }
    const obj = { style: closure_1.legendItem, children: null };
    const obj2 = { style: null };
    const items = [closure_1.swatch, dependencyMap[item]];
    obj2.style = items;
    const items1 = [React5(View, obj2), , , , ];
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: vibegrations_VibegrationsTraceFormat.categoryLabel(item) };
    items1[1] = React5(Text_Text.Text, obj3);
    const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl = util.intl;
    obj5.children = intl.formatToPlainString(_modDef3676.UffawN, { percent: num2 });
    items1[2] = React5(Text_Text.Text, obj5);
    const intl2 = util.intl;
    let num4;
    if (found != null) {
      num4 = found.calls;
    }
    if (num4 == null) {
      num4 = 0;
    }
    items1[3] = React5(Text_Text.Text, { variant: "text-xs/normal", color: "text-subtle", children: intl2.formatToPlainString(_modDef3676.w8vPbe, { count: num4 }) });
    let tmp6Result = null;
    if (0 !== num) {
      const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: vibegrations_VibegrationsTraceFormat.formatDuration(num) };
      tmp6Result = React5(Text_Text.Text, obj7);
      const tmp7Result = vibegrations_VibegrationsTraceFormat;
    }
    items1[4] = tmp6Result;
    obj.children = items1;
    return React6(View, obj, item);
  });
  items1[1] = closure_7(View, obj4);
  obj2.children = items1;
  return closure_8(View, obj2);
}
function itemKey(key) {
  return key.key;
}
function itemType(kind) {
  return kind.kind;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { list: { paddingHorizontal: nativeDefault.space.PX_16 }, header: null, tools: null, search: null, placeholder: null, overview: null, overviewBar: null, legend: null, legendItem: null, swatch: null, groupHead: null, rowSlot: null, rowNested: null, rowBody: null, rowTop: null, rowTitle: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.tools = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.search = { flex: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.placeholder = { padding: nativeDefault.space.PX_16 };
let obj6 = { padding: nativeDefault.space.PX_16 };
obj2.overview = { gap: nativeDefault.space.PX_8 };
let obj7 = { gap: nativeDefault.space.PX_8 };
obj2.overviewBar = { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj8 = { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.legend = { gap: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4 };
obj2.legendItem = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.swatch = { width: 8, height: 8, borderRadius: 4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.groupHead = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
let obj11 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.rowSlot = { paddingBottom: nativeDefault.space.PX_8 };
let obj12 = { paddingBottom: nativeDefault.space.PX_8 };
obj2.rowNested = { marginLeft: nativeDefault.space.PX_16 };
let obj13 = { marginLeft: nativeDefault.space.PX_16 };
obj2.rowBody = { gap: nativeDefault.space.PX_4 };
let obj14 = { gap: nativeDefault.space.PX_4 };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.rowTitle = { flexShrink: 1 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceTab.tsx");

export default function VibegrationsTraceTab(projectId) {
  projectId = projectId.projectId;
  let stateFromStoresArray;
  let first;
  let onPress;
  const tmp = closure_9();
  importDefault = tmp;
  let items = [VibegrationsProjectStore];
  const items1 = [projectId];
  stateFromStoresArray = projectId(stateFromStoresArray[15]).useStateFromStoresArray(items, () => VibegrationsProjectStore.getTrace(projectId), items1);
  let obj = projectId(stateFromStoresArray[15]);
  const items2 = [VibegrationsProjectStore];
  const items3 = [projectId];
  const stateFromStores = projectId(stateFromStoresArray[15]).useStateFromStores(items2, () => VibegrationsProjectStore.getHistoryState(projectId, "trace"), items3);
  const tmp6 = first(onPress.useState(""), 2);
  first = tmp6[0];
  const items4 = [projectId];
  const effect = onPress.useEffect(() => projectId(stateFromStoresArray[16]).clearTraceDetailCache, items4);
  const items5 = [stateFromStoresArray, first];
  const items6 = [projectId];
  const memo = onPress.useMemo(() => {
    const items = [];
    let obj = projectId(stateFromStoresArray[8]);
    const item = projectId(stateFromStoresArray[8]).groupTraceByTurn(stateFromStoresArray).forEach((turnId, index) => {
      const filterTraceResult = VibegrationsTraceUtils.filterTrace(turnId.entries, first);
      if (0 !== filterTraceResult.length) {
        turnId = turnId.turnId;
        if (turnId == null) {
          turnId = index;
        }
        const obj2 = { kind: "group", key: null, label: null, started: null, spanMs: null };
        const _HermesInternal = HermesInternal;
        obj2.key = "group-" + turnId;
        const intl = util.intl;
        const obj3 = { number: index + 1 };
        obj2.label = intl.formatToPlainString(_modDef3676["Y/j+TD"], obj3);
        obj2.started = VibegrationsTimeFormat.formatClockTime(turnId.startedAt);
        obj2.spanMs = turnId.spanMs;
        items.push(obj2);
        for (const item10041 of filterTraceResult) {
          let obj4 = { kind: "entry", key: item10041.id, entry: item10041 };
          let arr3 = items.push(obj4);
          continue;
        }
        const tmpResult = VibegrationsTimeFormat;
      }
    });
    return items;
  }, items5);
  onPress = onPress.useCallback((entryId) => {
    const obj2 = { key: VibegrationsTraceDetailSheet.VIBEGRATIONS_TRACE_DETAIL_SHEET_KEY, content: React5(VibegrationsTraceDetailSheetDefault, { projectId, entryId: entryId.id, initialEntry: entryId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items6);
  const items7 = [onPress, tmp];
  const items8 = [stateFromStoresArray, projectId];
  const callback1 = onPress.useCallback((item) => {
    item = item.item;
    if ("entry" === item.kind) {
      const obj2 = { entry: item.entry, onPress };
      let tmp9Result = React5(TraceRow, obj2);
    } else {
      const obj3 = { style: groupHead.groupHead, children: null };
      const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: item.label };
      const items = [React5(Text_Text.Text, obj4), , ];
      let tmp2 = null;
      if (null != item.started) {
        const obj = { variant: "text-xs/normal", color: "text-subtle", children: item.started };
        tmp2 = React5(Text_Text.Text, obj);
      }
      items[1] = tmp2;
      let tmp3 = null;
      if (null != item.spanMs) {
        const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: vibegrations_VibegrationsTraceFormat.formatDuration(item.spanMs) };
        tmp3 = React5(Text_Text.Text, obj5);
        const tmp13Result = vibegrations_VibegrationsTraceFormat;
      }
      items[2] = tmp3;
      obj3.children = items;
      tmp9Result = React6(View, obj3);
    }
    return tmp9Result;
  }, items7);
  if (0 === stateFromStoresArray.length) {
    let obj3 = { style: tmp.placeholder, children: null };
    let obj4 = { state: stateFromStores, emptyTitle: null, emptyBody: null };
    let intl = tmp4(tmp3[9]).intl;
    obj4.emptyTitle = intl.string(tmp2(tmp3[10]).Iyt8OJ);
    const intl2 = tmp4(tmp3[9]).intl;
    obj4.emptyBody = intl2.string(tmp2(tmp3[10])["8pdPx5"]);
    obj3.children = closure_7(tmp4(tmp3[22]).VibegrationsHistoryPlaceholder, obj4);
    let tmp15 = closure_7(View, obj3);
  } else {
    let obj5 = { data: memo, keyExtractor: itemKey, getItemType: itemType, renderItem: callback1, ListHeaderComponent: null, ListEmptyComponent: null, contentContainerStyle: null, keyboardShouldPersistTaps: "handled" };
    const obj6 = { style: tmp.header, children: null };
    const obj7 = { entries: stateFromStoresArray };
    const items9 = [closure_7(TraceOverview, obj7), , ];
    const obj8 = { style: tmp.tools, children: null };
    const obj9 = { style: tmp.search, children: null };
    const obj10 = { accessibilityLabel: null, placeholder: null, size: "sm", onChange: null };
    const intl3 = tmp4(tmp3[9]).intl;
    obj10.accessibilityLabel = intl3.string(tmp2(tmp3[10]).NfncNw);
    const intl4 = tmp4(tmp3[9]).intl;
    obj10.placeholder = intl4.string(tmp2(tmp3[10]).NfncNw);
    obj10.onChange = tmp6[1];
    obj9.children = closure_7(tmp4(tmp3[24]).SearchField, obj10);
    const items10 = [closure_7(View, obj9), ];
    const obj11 = { IconComponent: tmp4(tmp3[26]).DownloadIcon, onPress: tmp12, accessibilityLabel: null };
    const intl5 = tmp4(tmp3[9]).intl;
    obj11.accessibilityLabel = intl5.string(tmp2(tmp3[10]).A3Z3ar);
    items10[1] = closure_7(tmp2(tmp3[25]), obj11);
    obj8.children = items10;
    items9[1] = closure_8(View, obj8);
    const obj12 = { state: stateFromStores, hasRows: true };
    items9[2] = closure_7(tmp4(tmp3[22]).VibegrationsHistoryNotice, obj12);
    obj6.children = items9;
    obj5.ListHeaderComponent = closure_8(View, obj6);
    const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl6 = tmp4(tmp3[9]).intl;
    obj13.children = intl6.string(tmp2(tmp3[10])["Cpr+oM"]);
    obj5.ListEmptyComponent = closure_7(tmp4(tmp3[13]).Text, obj13);
    const items11 = [tmp.list, ];
    const obj14 = { paddingBottom: tmp2(tmp3[6]).space.PX_16 + require("useSafeAreaInsets")().bottom };
    items11[1] = obj14;
    obj5.contentContainerStyle = items11;
    tmp15 = closure_7(tmp4(tmp3[23]).FlashList, obj5);
    const tmp2Result = tmp2(tmp3[25]);
  }
  return tmp15;
};