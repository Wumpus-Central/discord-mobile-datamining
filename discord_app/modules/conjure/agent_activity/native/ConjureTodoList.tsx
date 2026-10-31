// === Module 12717: ConjureTodoList ===

// Module 12717 (ConjureTodoList)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import ConjureTodoState from "ConjureTodoState" /* 12586 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12601 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12622 */;
import noop from "module_19" /* 19 */;

require = fn;
function TodoAgents(agents) {
  const tmp = closure_8();
  _require = tmp;
  let obj = require("ConjureTodoAgents");
  ({ shown, overflow } = require("ConjureTodoAgents").splitAgentOverflow(agents.agents));
  let items = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: null };
    const items1 = [
      shown.map((key) => {
          const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
          items = [agentMark.agentMark, ];
          items[1] = items[ConjureNativeStatusLine.laneTintIndexFor(key.key) % ConjureNativeStatusLine.LANE_TINT_COUNT];
          obj.style = items;
          const intl = util.intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3868.TVvPCJ, { name: key.name, task: key.task });
          return timestampProducer(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    if (overflow > 0) {
      const obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      let intl = tmp2(1113).intl;
      const obj4 = { count: overflow };
      obj3.accessibilityLabel = intl.formatToPlainString(items(3868).SPGdDc, obj4);
      const _HermesInternal = HermesInternal;
      obj3.children = "+" + overflow;
      tmp9 = closure_6(tmp2(5624).Text, obj3);
    }
    items1[1] = tmp9;
    obj2.children = items1;
    tmp10Result = closure_7(closure_5, obj2);
  }
  return tmp10Result;
}
function TodoMarker(status) {
  status = status.status;
  const tmp = closure_8();
  if ("completed" !== status) {
    if ("pending" !== status) {
      const items = [tmp.marker, , ];
      let markerInProgress = tmp34;
      if ("in_progress" === status) {
        markerInProgress = tmp.markerInProgress;
      }
      items[1] = markerInProgress;
      const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null, children: null };
      items[2] = "unfinished" === status && tmp.markerUnfinished;
      obj.style = items;
      if ("completed" === status) {
        const intl4 = util.intl;
        let stringResult = intl4.string(_modDef3868.KvBdun);
      } else if ("in_progress" === status) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef3868["m5G9+S"]);
      } else if ("unfinished" === status) {
        const intl2 = util.intl;
        stringResult = intl2.string(_modDef3868.lRpwhD);
      } else {
        const intl = util.intl;
        stringResult = intl.string(_modDef3868.sPGeWi);
      }
      obj.accessibilityLabel = stringResult;
      let tmp2Result = null;
      if ("in_progress" === status) {
        const obj2 = { size: "small", style: tmp.markerSpinner };
        tmp2Result = timestampProducer(React4, obj2);
      }
      obj.children = tmp2Result;
      return timestampProducer(tmp3, obj);
    }
  }
  if ("completed" === status) {
    const intl8 = util.intl;
    let stringResult1 = intl8.string(_modDef3868.KvBdun);
    let tmp21 = require;
  } else {
    if ("in_progress" === status) {
      const intl7 = util.intl;
      stringResult1 = intl7.string(_modDef3868["m5G9+S"]);
      tmp21 = require;
    } else if ("unfinished" !== status) {
      tmp21 = require;
      const intl5 = util.intl;
      stringResult1 = intl5.string(_modDef3868.sPGeWi);
    }
    const intl6 = util.intl;
    stringResult1 = intl6.string(_modDef3868.lRpwhD);
    tmp21 = require;
  }
  { accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult1, children: timestampProducer(tmp21(6989).FormCheckbox, { checked: "completed" === status }) };
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { list: { gap: nativeDefault.space.PX_8 }, row: null, marker: null, markerUnfinished: null, markerInProgress: null, markerSpinner: null, text: null, agents: null, agentMark: null, agentMarkTint0: null, agentMarkTint1: null, agentMarkTint2: null, agentMarkTint3: null, textCompleted: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj2.marker = size;
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.markerUnfinished = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.markerInProgress = { borderWidth: 0 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.markerSpinner = size1;
obj2.text = { flexShrink: 1 };
let obj5 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.agents = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
const size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.agentMark = size2;
const obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
obj2.agentMarkTint0 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
const obj7 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.agentMarkTint1 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const obj8 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.agentMarkTint2 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const obj9 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.agentMarkTint3 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
obj2.textCompleted = { textDecorationLine: "line-through" };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureTodoList.tsx");

export default function ConjureTodoList(announceProgress) {
  ({ todos, provisional, agents } = announceProgress);
  let flag = announceProgress.announceProgress;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = announceProgress.live;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = announceProgress.superseded;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = announceProgress.expanded;
  if (flag4 === undefined) {
    flag4 = true;
  }
  noop = undefined;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = agents(12586);
  ({ completed, total } = agents(12586).todoProgress(todos));
  let items = [agents];
  noop = noop.useMemo(() => {
    let items = agents;
    if (agents == null) {
      items = [];
    }
    return ConjureTodoAgents.groupAgentsByTodo(items);
  }, items);
  if (0 === total) {
    return null;
  }
  const intl = agents(1113).intl;
  const todoProgressResult = agents(12586).todoProgress(todos);
  const intl2 = agents(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3868)["P/I+JW"], { completed, total });
  let obj2 = { title: null, meta: null, showHeader: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
  const formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3868)["7tzwKB"], { completed, total });
  const intl3 = agents(1113).intl;
  obj2.title = intl3.string(flag2(3868).RtzECX);
  let str = "none";
  if (flag) {
    str = "none";
    if (!flag3) {
      str = "polite";
    }
  }
  obj2.meta = closure_6(agents(12718).ConjureNativeCollapsibleMeta, { accessibilityLiveRegion: str, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult });
  obj2.showHeader = total > 0;
  obj2.superseded = flag3;
  obj2.expanded = flag4;
  obj2.onToggleExpanded = announceProgress.onToggleExpanded;
  const intl4 = agents(1113).intl;
  obj2.showLabel = intl4.string(flag2(3868).RKyN9q);
  const intl5 = agents(1113).intl;
  obj2.hideLabel = intl5.string(flag2(3868).xydHoj);
  let obj3 = { style: tmp.list, children: null };
  let items1 = [
    todos.map((status) => {
      const todoMarkResult = ConjureTodoState.todoMark(status.status, flag2);
      const obj2 = { style: row.row, children: null };
      const items = [timestampProducer(TodoMarker, { status: todoMarkResult }), , ];
      if ("in_progress" === todoMarkResult) {
        let str = "text-default";
      } else {
        str = "text-muted";
      }
      const obj3 = { variant: "text-sm/normal", color: str, style: null, children: null };
      const items1 = [row.text, "completed" === todoMarkResult && row.textCompleted];
      obj3.style = items1;
      obj3.children = ConjureTodoState.todoLabel(status, todoMarkResult);
      items[1] = timestampProducer(Text_Text.Text, obj3);
      let tmp7Result = null;
      if ("completed" !== todoMarkResult) {
        let items2 = closure_3.get(status.id);
        if (items2 == null) {
          items2 = [];
        }
        const obj4 = { agents: items2 };
        tmp7Result = timestampProducer(TodoAgents, obj4);
      }
      items[2] = tmp7Result;
      obj2.children = items;
      return React5(hasOwnProperty, obj2, status.id);
    }),

  ];
  let tmp11Result = null;
  if (null != provisional) {
    tmp11Result = null;
    if ("" !== provisional) {
      let obj4 = { style: tmp.row, children: null };
      let items2 = [closure_6(TodoMarker, { status: "pending" }), ];
      const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
      items2[1] = closure_6(agents(5624).Text, obj5);
      obj4.children = items2;
      tmp11Result = closure_7(closure_5, obj4);
    }
  }
  items1[1] = tmp11Result;
  obj3.children = items1;
  obj2.children = closure_7(closure_5, obj3);
  return closure_6(flag2(12718), obj2);
};