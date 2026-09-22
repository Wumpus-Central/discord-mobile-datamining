// === Module 17077: VibegrationsDebugLogsTab ===

// Module 17077 (VibegrationsDebugLogsTab)
import nativeDefault from "native" /* 576 */;
import _modDef3678 from "module_3678" /* 3678 */;
import VibegrationsDebugJson from "VibegrationsDebugJson" /* 17078 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 17079 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 17080 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9314 */;

require = fn;
function keyOf(key) {
  return String(key.key);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj = { list: { paddingHorizontal: nativeDefault.space.PX_16 }, header: null, row: null, rowHead: null, badge: null, jsonToggle: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.header = { gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj.row = { gap: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8 };
obj.rowHead = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
obj.badge = { textTransform: "uppercase" };
let obj6 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
obj.jsonToggle = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, alignSelf: "flex-start" };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = noop.memo((entry) => {
  entry = entry.entry;
  ({ logKey: importDefault, expanded, onToggle: dependencyMap } = entry);
  const tmp = closure_10();
  const items = [entry.message];
  const memo = noop.useMemo(() => VibegrationsDebugJson.extractLogJson(entry.message), items);
  let str = "text-default";
  if ("error" === entry.level) {
    str = "text-feedback-critical";
  }
  if (expanded) {
    let ChevronSmallRightIcon = tmp3(11424).ChevronSmallDownIcon;
    let tmp6 = tmp3;
  } else {
    ChevronSmallRightIcon = tmp3(7456).ChevronSmallRightIcon;
    tmp6 = tmp3;
  }
  const obj = { style: tmp.row, children: null };
  const obj2 = { style: tmp.rowHead, children: null };
  const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp6(17079).formatClockTime(entry.ts) };
  const items1 = [closure_7(tmp6(4753).Text, obj3), , , ];
  const level = entry.level;
  let str2 = "text-feedback-critical";
  if ("error" !== level) {
    let str3 = "text-muted";
    if ("warn" === level) {
      str3 = "text-feedback-warning";
    }
    str2 = str3;
  }
  items1[1] = closure_7(tmp6(4753).Text, { variant: "text-xxs/semibold", color: str2, style: tmp.badge, children: entry.level });
  let tmp9Result = null;
  if (entry.showSource) {
    tmp9Result = null;
    if (null != entry.source) {
      const obj5 = { variant: "text-xxs/semibold", color: "text-subtle", style: tmp.badge, children: entry.source };
      tmp9Result = closure_7(tmp6(4753).Text, obj5);
    }
  }
  items1[2] = tmp9Result;
  let tmp9Result4 = null;
  if (null != entry.kind) {
    const obj6 = { variant: "text-xxs/semibold", color: "text-feedback-critical", style: tmp.badge, children: null };
    const intl = tmp6(1115).intl;
    obj6.children = intl.string(_modDef3678.GO6JcR);
    tmp9Result4 = closure_7(tmp6(4753).Text, obj6);
  }
  items1[3] = tmp9Result4;
  obj2.children = items1;
  const items2 = [closure_8(View, obj2), ];
  if (null != memo) {
    let tmp9Result5 = null;
    if ("" !== memo.prefix) {
      const obj7 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.prefix };
      tmp9Result5 = closure_7(tmp6(4753).Text, obj7);
    }
    const items3 = [tmp9Result5, , ];
    const obj8 = { style: tmp.jsonToggle, accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, onPress: null, children: null };
    const obj9 = { expanded };
    obj8.accessibilityState = obj9;
    const intl2 = tmp6(1115).intl;
    obj8.accessibilityLabel = intl2.string(_modDef3678.ehmgbH);
    obj8.onPress = function onPress() {
      return dependencyMap(importDefault);
    };
    const obj10 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items4 = [closure_7(ChevronSmallRightIcon, obj10), ];
    const items5 = [memo.marker, " ", ];
    const intl3 = tmp6(1115).intl;
    if ("[\u2026]" === memo.marker) {
      let wkbYxG = _modDef3678.lXkB6Z;
    } else {
      wkbYxG = _modDef3678.wkbYxG;
    }
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const obj12 = { count: memo.size };
    items5[2] = intl3.formatToPlainString(wkbYxG, obj12);
    obj11.children = items5;
    items4[1] = closure_8(tmp6(4753).Text, obj11);
    obj8.children = items4;
    items3[1] = closure_8(tmp6(5341).PressableOpacity, obj8);
    let tmp9Result6 = null;
    if (expanded) {
      const obj13 = { variant: "primary", children: null };
      const obj14 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.pretty };
      obj13.children = closure_7(tmp6(4753).Text, obj14);
      tmp9Result6 = closure_7(tmp6(5826).Card, obj13);
    }
    const obj15 = { children: null };
    items3[2] = tmp9Result6;
    obj15.children = items3;
    let tmp9Result7 = closure_8(closure_9, obj15);
  } else {
    const obj16 = { variant: "text-xs/normal", color: str, selectable: true, children: entry.message };
    tmp9Result7 = closure_7(tmp6(4753).Text, obj16);
  }
  items2[1] = tmp9Result7;
  obj.children = items2;
  return closure_8(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugLogsTab.tsx");

export default function VibegrationsDebugLogsTab(projectId) {
  projectId = projectId.projectId;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  let first2;
  const tmp = closure_10();
  const items = [first2];
  const items1 = [projectId];
  const stateFromStores = projectId(first[17]).useStateFromStores(items, () => VibegrationsProjectStore.getLogs(projectId), items1);
  let obj = projectId(first[17]);
  const items2 = [first2];
  const items3 = [projectId];
  const stateFromStores1 = projectId(first[17]).useStateFromStores(items2, () => VibegrationsProjectStore.getHistoryState(projectId, "logs"), items3);
  [first, _slicedToArray] = first1.useState("all");
  [first1, obj6.onChange] = first1.useState("");
  const obj2 = projectId(first[17]);
  const obj4 = { pageWidth: 0, items: null, onSetActiveIndex: null };
  const DEBUG_LOG_FILTERS = projectId(first[19]).DEBUG_LOG_FILTERS;
  obj4.items = DEBUG_LOG_FILTERS.map((id) => {
    const obj = { id, label: projectId(first[19]).debugLogFilterLabel(id), page: null };
    return obj;
  });
  obj4.onSetActiveIndex = function onSetActiveIndex(arg0) {
    let str = VibegrationsDebugLabels.DEBUG_LOG_FILTERS[arg0];
    if (str == null) {
      str = "all";
    }
    return closure_3(str);
  };
  const items4 = [stateFromStores, first, first1];
  const segmentedControlState = projectId(first[18]).useSegmentedControlState(obj4);
  const showSource = tmp12;
  const memo = first1.useMemo(() => {
    closure_0 = first1.trim().toLowerCase();
    return stateFromStores.filter((log) => {
      let isRenderableLogResult = VibegrationsDebugLabels.isRenderableLog(log.log);
      if (isRenderableLogResult) {
        let tmp5 = "all" === first;
        if (!tmp5) {
          tmp5 = VibegrationsDebugFormat.debugLogEnv(log.log.source) === tmp4;
          const tmpResult = VibegrationsDebugFormat;
        }
        if (tmp5) {
          let tmp7 = "" === closure_0;
          if (!tmp7) {
            const formatted = log.log.message.toLowerCase();
            let hasItem = formatted.includes(closure_0);
            if (!hasItem) {
              const level = log.log.level;
              hasItem = level.includes(closure_0);
            }
            if (!hasItem) {
              let flag;
              if (log.log.source != null) {
                const formatted1 = str4.toLowerCase();
                flag = formatted1.includes(closure_0);
              }
              if (flag == null) {
                flag = false;
              }
              hasItem = flag;
            }
            tmp7 = hasItem;
          }
          tmp5 = tmp7;
        }
        isRenderableLogResult = tmp5;
      }
      return isRenderableLogResult;
    });
  }, items4);
  const tmp13 = _slicedToArray(first1.useState(() => new Set()), 2);
  first2 = tmp13[0];
  closure_7 = tmp13[1];
  const onToggle = first1.useCallback((arg0) => {
    closure_0 = arg0;
    closure_7((items) => {
      const set = new Set(items);
      if (!set.delete(closure_0)) {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
  const items5 = ["all" === first, first2, onToggle];
  const callback1 = first1.useCallback((item) => {
    item = item.item;
    return React5(closure_11, { entry: item.log, logKey: item.key, showSource, expanded: first2.has(item.key), onToggle });
  }, items5);
  const obj5 = { style: tmp.header, children: null };
  const items6 = [closure_7(projectId(first[20]).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }), , ];
  const obj6 = { accessibilityLabel: null, placeholder: null, size: "sm", onChange: null };
  const intl = projectId(first[12]).intl;
  obj6.accessibilityLabel = intl.string(stateFromStores(first[13])["MX4vr/"]);
  const intl2 = projectId(first[12]).intl;
  obj6.placeholder = intl2.string(stateFromStores(first[13])["MX4vr/"]);
  items6[1] = closure_7(projectId(first[21]).SearchField, obj6);
  items6[2] = closure_7(projectId(first[22]).VibegrationsHistoryNotice, { state: stateFromStores1, hasRows: stateFromStores.length > 0 });
  obj5.children = items6;
  const obj3 = projectId(first[18]);
  const obj7 = { state: stateFromStores1, hasRows: stateFromStores.length > 0 };
  if (0 === stateFromStores.length) {
    const obj8 = { state: stateFromStores1, emptyTitle: null, emptyBody: null };
    const intl4 = tmp4(tmp3[12]).intl;
    obj8.emptyTitle = intl4.string(tmp2(tmp3[13]).mcFyYc);
    const intl5 = tmp4(tmp3[12]).intl;
    obj8.emptyBody = intl5.string(tmp2(tmp3[13]).RNN8pX);
    let tmp17Result = tmp17(tmp4(tmp3[22]).VibegrationsHistoryPlaceholder, obj8);
  } else {
    const obj9 = { children: null };
    const intl3 = tmp4(tmp3[12]).intl;
    obj9.children = intl3.string(tmp2(tmp3[13]).oIJbFa);
    tmp17Result = tmp17(tmp4(tmp3[23]).DebugNote, obj9);
  }
  const obj10 = { data: memo, keyExtractor: keyOf, renderItem: callback1, extraData: callback1, ListHeaderComponent: onToggle(showSource, obj5), ListEmptyComponent: tmp17Result, contentContainerStyle: null, keyboardShouldPersistTaps: "handled" };
  const items7 = [tmp.list, ];
  const tmp18 = onToggle(showSource, obj5);
  items7[1] = { paddingBottom: stateFromStores(first[6]).space.PX_16 + stateFromStores(first[16])().bottom };
  obj10.contentContainerStyle = items7;
  return closure_7(projectId(first[24]).FlashList, obj10);
};