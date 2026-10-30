// discord_app/modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NavigatorHeader from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ChevronSmallRightIcon from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import ConjurePerfTraceStatsHeaderDefault from "ConjurePerfTraceStatsHeader.tsx";
import ConjurePerfTraceFormat from "../ConjurePerfTraceFormat.tsx";
import ConjurePerfTraceStats from "../ConjurePerfTraceStats.tsx";
import useConjurePerfTraceTreeDefault from "../useConjurePerfTraceTree.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../../ConjureDebugStore.tsx";

require = fn;
function WaterfallRow(node) {
  node = node.node;
  ({ extent, collapsed, selected } = node);
  ({ onSelect: dependencyMap, onToggle: noop, onExpandSubtree: closure_4 } = node);
  const tmp = closure_11();
  const detail = tmp;
  const perfCategoryColors = node(12967).usePerfCategoryColors();
  if (collapsed) {
    let ChevronSmallDownIcon = tmp2(7372).ChevronSmallRightIcon;
  } else {
    ChevronSmallDownIcon = tmp2(11377).ChevronSmallDownIcon;
  }
  if (node.failed) {
    let running = tmp.failed;
  } else if (node.running) {
    running = tmp.running;
  } else {
    running = perfCategoryColors[node.category];
  }
  let items = [tmp.row];
  let rowSelected = selected;
  if (selected) {
    rowSelected = tmp.rowSelected;
  }
  let obj2 = {
    style: items,
    onPress() {
      let key = null;
      if (!selected) {
        key = node.key;
      }
      return dependencyMap(key);
    },
    onLongPress() {
      return closure_1_4(node.key);
    },
    accessibilityRole: "button",
    accessibilityState: null,
    children: null,
  };
  items[1] = rowSelected;
  const obj3 = { selected, expanded: null };
  let tmp8;
  if (node.children.length > 0) {
    tmp8 = !collapsed;
  }
  obj3.expanded = tmp8;
  obj2.accessibilityState = obj3;
  const obj4 = { style: null, children: null };
  const items1 = [tmp.rowTop];
  let obj = node(12967);
  items1[1] = { paddingLeft: node.depth * selected(575).space.PX_12 };
  obj4.style = items1;
  if (node.children.length > 0) {
    const obj6 = {
      style: tmp.chevron,
      onPress() {
        return noop(node.key);
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    let str = "Collapse";
    if (collapsed) {
      str = "Expand";
    }
    obj6.accessibilityLabel = str;
    const obj7 = { size: "xs", color: selected(575).colors.ICON_SUBTLE };
    obj6.children = closure_8(ChevronSmallDownIcon, obj7);
    let tmp11Result = closure_8(closure_4, obj6);
    let tmp13 = closure_8;
  } else {
    const obj8 = { style: tmp.chevron };
    tmp11Result = closure_8(closure_6, obj8);
    tmp13 = closure_8;
  }
  const items2 = [tmp11Result, , , , , , ,];
  let tmp13Result = null;
  if (node.descendants > 0) {
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
    tmp13Result = tmp13(tmp2(5619).Text, obj9);
  }
  items2[1] = tmp13Result;
  const obj10 = { style: null };
  const items3 = [tmp.swatch, perfCategoryColors[node.category]];
  obj10.style = items3;
  items2[2] = tmp13(closure_6, obj10);
  items2[3] = tmp13(node(5619).Text, { variant: "text-xs/semibold", color: "text-strong", children: node.service });
  items2[4] = tmp13(node(5619).Text, {
    variant: "text-xs/normal",
    color: "text-default",
    style: tmp.operation,
    lineClamp: 1,
    children: node.operation,
  });
  let tmp13Result4 = null;
  if (node.count > 1) {
    const obj13 = { style: tmp.badge, children: null };
    const obj14 = { variant: "text-xxs/semibold", color: "text-default", children: null };
    const _HermesInternal = HermesInternal;
    obj14.children = "\u00D7" + node.count;
    obj13.children = tmp13(tmp2(5619).Text, obj14);
    tmp13Result4 = tmp13(closure_6, obj13);
  }
  items2[5] = tmp13Result4;
  let tmp13Result5 = null;
  if (node.failed) {
    const obj15 = { size: "xs", color: selected(575).colors.STATUS_DANGER };
    tmp13Result5 = tmp13(tmp2(8018).WarningIcon, obj15);
  }
  items2[6] = tmp13Result5;
  const obj16 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const obj11 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
  const obj12 = {
    variant: "text-xs/normal",
    color: "text-default",
    style: tmp.operation,
    lineClamp: 1,
    children: node.operation,
  };
  const obj5 = { paddingLeft: node.depth * selected(575).space.PX_12 };
  obj16.children = node(12968).perfNodeDuration(node);
  items2[7] = tmp13(node(5619).Text, obj16);
  obj4.children = items2;
  const items4 = [closure_9(closure_6, obj4), ,];
  const obj17 = { style: tmp.track, children: null };
  const obj18 = { style: null };
  const items5 = [
    tmp.bar,
    running,
    { left: `${(node.start / extent) * 100}%`, width: `${((node.end - node.start) / extent) * 100}%` },
  ];
  obj18.style = items5;
  obj17.children = tmp13(closure_6, obj18);
  items4[1] = tmp13(closure_6, obj17);
  let tmp13Result6 = null;
  if (selected) {
    const obj20 = { style: null, children: null };
    const items6 = [tmp.detail];
    const obj21 = { paddingLeft: node.depth * selected(575).space.PX_12 };
    items6[1] = obj21;
    obj20.style = items6;
    const tmp2Result2 = tmp2(12968);
    obj20.children = tmp2(12968)
      .perfNodeSections(node)
      .map((item) => {
        ({ title, rows } = item);
        let obj = { style: detail.detail, children: null };
        let tmp3 = null;
        if (null != title) {
          const obj2 = { variant: "text-xs/semibold", color: "text-strong", children: title };
          tmp3 = React6(Text_Text.Text, obj2);
        }
        let items = [
          tmp3,
          rows.map((children) => {
            const label = children.label;
            if (children.block) {
              let detailLine = detail.detailBlock;
              let tmp4 = detail;
            } else {
              detailLine = detail.detailLine;
              tmp4 = detail;
            }
            const obj = { style: detailLine, children: null };
            const items = [
              closure_2_8(node(5619).Text, { variant: "text-xs/semibold", color: "text-muted", children: label }),
              closure_2_8(node(5619).Text, {
                variant: "text-xs/normal",
                color: "text-default",
                style: tmp4.operation,
                selectable: true,
                children: children.value,
              }),
            ];
            obj.children = items;
            return closure_2_9(closure_2_6, obj, label);
          }),
        ];
        obj.children = items;
        if (title == null) {
          title = "timing";
        }
        return React7(timestampProducer, obj, title);
      });
    tmp13Result6 = tmp13(closure_6, obj20);
    const perfNodeSectionsResult = tmp2(12968).perfNodeSections(node);
  }
  items4[2] = tmp13Result6;
  obj2.children = items4;
  return closure_9(closure_4, obj2);
}
function SmallerRow(row) {
  row = row.row;
  ({ extent, onReveal: importDefault } = row);
  const tmp = closure_11();
  const perfSmallerLabelResult = ConjurePerfTraceFormat.perfSmallerLabel(row);
  const obj2 = {
    style: tmp.row,
    onPress() {
      return importDefault(row.parentKey);
    },
    accessibilityRole: "button",
    accessibilityLabel: perfSmallerLabelResult,
    children: null,
  };
  const obj3 = { style: null, children: null };
  const items = [tmp.rowTop];
  items[1] = { paddingLeft: row.depth * nativeDefault.space.PX_12 };
  obj3.style = items;
  const obj5 = { style: tmp.chevron, children: null };
  const obj4 = { paddingLeft: row.depth * nativeDefault.space.PX_12 };
  obj5.children = React6(ChevronSmallRightIcon.ChevronSmallRightIcon, {
    size: "xs",
    color: nativeDefault.colors.ICON_SUBTLE,
  });
  const items1 = [React6(timestampProducer, obj5), , ,];
  const obj7 = { style: null };
  const items2 = [,];
  ({ swatch: arr3[0], smaller: arr3[1] } = tmp);
  obj7.style = items2;
  items1[1] = React6(timestampProducer, obj7);
  items1[2] = React6(Text_Text.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    style: tmp.operation,
    lineClamp: 1,
    children: perfSmallerLabelResult,
  });
  const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const obj6 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
  const obj8 = {
    variant: "text-xs/normal",
    color: "text-muted",
    style: tmp.operation,
    lineClamp: 1,
    children: perfSmallerLabelResult,
  };
  obj9.children = ConjurePerfTraceFormat.formatPerfMs(row.totalMs);
  items1[3] = React6(Text_Text.Text, obj9);
  obj3.children = items1;
  const items3 = [React7(timestampProducer, obj3)];
  const obj11 = { style: tmp.smallerTrack, children: null };
  const obj12 = { style: null };
  const items4 = [, ,];
  ({ bar: arr5[0], smaller: arr5[1] } = tmp);
  items4[2] = { left: `${(row.start / extent) * 100}%`, width: `${((row.end - row.start) / extent) * 100}%` };
  obj12.style = items4;
  obj11.children = React6(timestampProducer, obj12);
  items3[1] = React6(timestampProducer, obj11);
  obj2.children = items3;
  return React7(React4, obj2);
}
function TraceStats(trace) {
  trace = trace.trace;
  const items = [trace];
  const stats = noop.useMemo(() => ConjurePerfTraceStats.perfTraceStats(trace), items);
  return closure_8(ConjurePerfTraceStatsHeaderDefault, { stats });
}
function Waterfall(trace) {
  trace = trace.trace;
  const tmp = closure_11();
  const tmp3 = useConjurePerfTraceTreeDefault(trace);
  _require = tmp3;
  importDefault = require("ConjurePerfTraceLayout").perfTraceExtent(trace);
  const obj2 = { contentContainerStyle: null, children: null };
  const items = [tmp.content];
  let obj = require("ConjurePerfTraceLayout");
  items[1] = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom };
  obj2.contentContainerStyle = items;
  const obj4 = { style: tmp.section, children: null };
  const obj5 = { variant: "text-md/semibold", color: "text-strong", children: null };
  let obj3 = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom };
  obj5.children = require("ConjurePerfTraceFormat").perfTraceDuration(trace);
  const items1 = [closure_8(require("Text/Text").Text, obj5), , ,];
  const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const obj6 = require("ConjurePerfTraceFormat");
  obj7.children = require("ConjurePerfTraceFormat").perfTraceSummary(trace);
  items1[1] = closure_8(require("Text/Text").Text, obj7);
  let tmp8Result = null;
  if (null != trace.started_by) {
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const _HermesInternal = HermesInternal;
    obj9.children = "Started by " + trace.started_by.trace_name;
    tmp8Result = closure_8(tmp4(5619).Text, obj9);
  }
  items1[2] = tmp8Result;
  let tmp8Result2 = null;
  if (0 !== trace.dropped) {
    const obj10 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
    const _HermesInternal2 = HermesInternal;
    obj10.children = "" + tmp4(12968).formatSpanCount(trace.dropped) + " not recorded";
    tmp8Result2 = closure_8(tmp4(5619).Text, obj10);
    const tmp4Result = tmp4(12968);
  }
  items1[3] = tmp8Result2;
  obj4.children = items1;
  const items2 = [closure_9(closure_6, obj4), closure_8(TraceStats, { trace }), , ,];
  const obj11 = { style: tmp.toolbar, children: null };
  const items3 = [
    closure_8(require("components/Button/Button").Button, {
      size: "sm",
      variant: "secondary",
      text: "Time sinks",
      onPress: tmp3.reset,
    }),
    closure_8(require("components/Button/Button").Button, {
      size: "sm",
      variant: "secondary",
      text: "Expand all",
      onPress: tmp3.expandAll,
    }),
    closure_8(require("components/Button/Button").Button, {
      size: "sm",
      variant: "secondary",
      text: "Collapse all",
      onPress: tmp3.collapseAll,
    }),
  ];
  obj11.children = items3;
  items2[2] = closure_9(closure_6, obj11);
  items2[3] = closure_8(require("Text/Text").Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    children: "Long-press a span to expand everything under it.",
  });
  const obj15 = { children: null };
  const rows = tmp3.rows;
  obj15.children = rows.map((kind) => {
    if ("node" === kind.kind) {
      const obj3 = {
        node: kind.node,
        extent,
        collapsed: null,
        selected: null,
        onSelect: null,
        onToggle: null,
        onExpandSubtree: null,
      };
      const collapsed = closure_0.collapsed;
      obj3.collapsed = collapsed.has(kind.key);
      obj3.selected = kind.key === closure_0.selectedKey;
      ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
      let tmp5 = React6(WaterfallRow, obj3, kind.key);
    } else {
      const obj = { row: kind, extent, onReveal: closure_0.reveal };
      tmp5 = React6(SmallerRow, obj, kind.key);
    }
    return tmp5;
  });
  items2[4] = closure_8(closure_6, obj15);
  obj2.children = items2;
  return closure_9(closure_5, obj2);
}
function PerfTraceScreen(projectId) {
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  const items = [ConjureDebugStore];
  const items1 = [projectId, traceId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => ConjureDebugStore.getTimingTrace(projectId, traceId),
    items1,
  );
  if (null == stateFromStores) {
    let tmp6 = closure_8(projectId(5619).Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: "This trace is no longer available.",
    });
  } else {
    const obj2 = { trace: stateFromStores };
    tmp6 = closure_8(Waterfall, obj2);
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const perf_trace = "perf_trace";
const createStyles = fn(5009);
let obj2 = {
  content: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 },
  section: null,
  toolbar: null,
  row: null,
  rowSelected: null,
  rowTop: null,
  chevron: null,
  operation: null,
  badge: null,
  swatch: null,
  track: null,
  bar: null,
  detail: null,
  detailLine: null,
  detailBlock: null,
  failed: null,
  running: null,
  smaller: null,
  smallerTrack: null,
};
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
obj2.section = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.toolbar = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.row = {
  paddingVertical: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
};
let obj6 = {
  paddingVertical: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
};
obj2.rowSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.chevron = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj2.operation = { flex: 1 };
let obj9 = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj2.badge = {
  paddingHorizontal: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
obj2.swatch = size;
obj2.track = { height: 6 };
const rect = { position: "absolute", top: 0, bottom: 0, minWidth: 2, borderRadius: nativeDefault.radii.xs };
obj2.bar = rect;
let obj10 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.detail = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
let obj11 = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
obj2.detailLine = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.detailBlock = { gap: nativeDefault.space.PX_4 };
let obj13 = { gap: nativeDefault.space.PX_4 };
obj2.failed = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let obj14 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.running = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let obj15 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj2.smaller = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.smallerTrack = { height: 3 };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx");

export default function ConjurePerfTraceModal(projectId) {
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  let stateFromStores;
  const items = [ConjureDebugStore];
  const items1 = [projectId, traceId];
  stateFromStores = projectId(stateFromStores[17]).useStateFromStores(
    items,
    () => {
      const timingTrace = ConjureDebugStore.getTimingTrace(projectId, traceId);
      let str;
      if (timingTrace != null) {
        str = timingTrace.name;
      }
      if (str == null) {
        str = "Perf Trace";
      }
      return str;
    },
    items1,
  );
  const items2 = [projectId, stateFromStores, traceId];
  const memo = noop.useMemo(() => {
    const obj = {};
    const obj2 = {
      title: stateFromStores,
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => traceId(stateFromStores[19]).pop()),
      render() {
        return closure_2_8(PerfTraceScreen, { projectId, traceId });
      },
    };
    obj[perf_trace] = obj2;
    return obj;
  }, items2);
  return closure_8(projectId(stateFromStores[20]).Modal, { initialRouteName: perf_trace, screens: memo });
}
