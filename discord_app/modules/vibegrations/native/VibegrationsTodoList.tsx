// === Module 16349: VibegrationsTodoList ===

// Module 16349 (VibegrationsTodoList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import Text_Text from "Text/Text" /* 4825 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16307 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16348 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16350 */;
import noop from "module_19" /* 19 */;

require = fn;
function TodoAgents(agents) {
  const tmp = closure_8();
  _require = tmp;
  let obj = require("VibegrationsTodoAgents");
  ({ shown, overflow } = require("VibegrationsTodoAgents").splitAgentOverflow(agents.agents));
  let items = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: null };
    const items1 = [
      shown.map((key) => {
          const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
          items = [agentMark.agentMark, ];
          items[1] = items[VibegrationsNativeStatusLine.laneTintIndexFor(key.key) % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
          obj.style = items;
          const intl = util.intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3714.yTB8eu, { name: key.name, task: key.task });
          return timestampProducer(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    if (overflow > 0) {
      const obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      let intl = tmp2(1115).intl;
      const obj4 = { count: overflow };
      obj3.accessibilityLabel = intl.formatToPlainString(items(3714).Vpu1Pd, obj4);
      const _HermesInternal = HermesInternal;
      obj3.children = "+" + overflow;
      tmp9 = closure_6(tmp2(4825).Text, obj3);
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
  const items = [tmp.marker, , , ];
  let markerCompleted = tmp4;
  if ("completed" === status) {
    markerCompleted = tmp.markerCompleted;
  }
  items[1] = markerCompleted;
  let markerInProgress = tmp5;
  if ("in_progress" === status) {
    markerInProgress = tmp.markerInProgress;
  }
  items[2] = markerInProgress;
  const obj = { style: items, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items[3] = "unfinished" === status && tmp.markerUnfinished;
  if ("completed" === status) {
    const intl4 = util.intl;
    let stringResult = intl4.string(_modDef3714.TkPGOH);
    let tmp11 = importDefault;
    let tmp12 = require;
  } else if ("in_progress" === status) {
    const intl3 = util.intl;
    stringResult = intl3.string(_modDef3714["oK+fmd"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("unfinished" === status) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3714["1ley3g"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3714.d7lieu);
    tmp11 = importDefault;
    tmp12 = require;
  }
  obj.accessibilityLabel = stringResult;
  let tmp22 = null;
  if ("in_progress" === status) {
    const obj2 = { size: "small", style: tmp.markerSpinner };
    tmp22 = timestampProducer(React4, obj2);
  }
  const items1 = [tmp22, ];
  let tmp25 = null;
  if ("completed" === status) {
    const obj3 = { size: "xs", color: tmp11(576).colors.CHECKBOX_ICON_ACTIVE };
    tmp25 = timestampProducer(tmp12(8734).CheckmarkSmallBoldIcon, obj3);
  }
  items1[1] = tmp25;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { root: { gap: nativeDefault.space.PX_8 }, header: null, headerTrailing: null, list: null, row: null, marker: null, markerCompleted: null, markerUnfinished: null, markerInProgress: null, markerSpinner: null, text: null, agents: null, agentMark: null, agentMarkTint0: null, agentMarkTint1: null, agentMarkTint2: null, agentMarkTint3: null, textCompleted: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.headerTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.list = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.marker = size;
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.markerCompleted = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
let obj8 = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj2.markerUnfinished = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.markerInProgress = { borderWidth: 0 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.markerSpinner = size1;
obj2.text = { flexShrink: 1 };
let obj9 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.agents = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
const size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.agentMark = size2;
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
obj2.agentMarkTint0 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
let obj11 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.agentMarkTint1 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let obj12 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.agentMarkTint2 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let obj13 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.agentMarkTint3 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
obj2.textCompleted = { textDecorationLine: "line-through" };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTodoList.tsx");

export default function VibegrationsTodoList(announceProgress) {
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
  let onToggleExpanded = announceProgress.onToggleExpanded;
  noop = undefined;
  const tmp = closure_8();
  dependencyMap = tmp;
  const length = todos.filter((status) => "completed" === status.status).length;
  let items = [agents];
  noop = noop.useMemo(() => {
    let items = agents;
    if (agents == null) {
      items = [];
    }
    return VibegrationsTodoAgents.groupAgentsByTodo(items);
  }, items);
  if (0 === todos.length) {
    return null;
  }
  let num = 0;
  if (!flag2) {
    num = agents(16350).unfinishedTodoCount(todos);
    const obj = agents(16350);
  }
  if (num > 0) {
    const intl2 = agents(1115).intl;
    let obj2 = { completed: length, total: length2, unfinished: num };
    let formatToPlainStringResult = intl2.formatToPlainString(flag2(3714).gNnrNi, obj2);
    let tmp9 = flag2;
    let tmp10 = agents;
  } else {
    const intl = agents(1115).intl;
    let obj3 = { completed: length, total: length2 };
    formatToPlainStringResult = intl.formatToPlainString(flag2(3714).bQvqly, obj3);
    tmp9 = flag2;
    tmp10 = agents;
  }
  if (num > 0) {
    const intl4 = tmp10(1115).intl;
    let obj4 = { completed: length, total: length2, unfinished: num };
    let formatToPlainStringResult1 = intl4.formatToPlainString(tmp9(3714).j9qAGu, obj4);
  } else {
    const intl3 = tmp10(1115).intl;
    const obj5 = { completed: length, total: length2 };
    formatToPlainStringResult1 = intl3.formatToPlainString(tmp9(3714)["QG/EiF"], obj5);
  }
  if (flag4) {
    let ChevronSmallRightIcon = tmp10(10604).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp10(6625).ChevronSmallRightIcon;
  }
  const obj6 = { style: tmp.root, children: null };
  let tmp15Result = null;
  if (todos.length > 0) {
    const obj7 = { style: tmp.header, children: null };
    const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl5 = tmp10(1115).intl;
    obj8.children = intl5.string(tmp9(3714).qCRC6c);
    let items1 = [closure_6(tmp10(4825).Text, obj8), ];
    const obj9 = { style: tmp.headerTrailing, children: null };
    let str2 = "none";
    if (flag) {
      str2 = "none";
      if (!flag3) {
        str2 = "polite";
      }
    }
    const obj10 = { variant: "text-sm/medium", color: "text-muted", accessibilityLiveRegion: str2, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult };
    let items2 = [closure_6(tmp10(4825).Text, obj10), ];
    let tmp19 = null;
    if (flag3) {
      tmp19 = null;
      if (null != onToggleExpanded) {
        const obj11 = { accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, hitSlop: 8, onPress: null, children: null };
        const obj12 = { expanded: flag4 };
        obj11.accessibilityState = obj12;
        const intl6 = tmp10(1115).intl;
        const tmp9Result = tmp9(3714);
        obj11.accessibilityLabel = intl6.string(flag4 ? tmp9Result.fIBJas : tmp9Result.SVhXLT);
        obj11.onPress = onToggleExpanded;
        const obj13 = { size: "xs", color: tmp9(576).colors.ICON_MUTED };
        onToggleExpanded = closure_6(ChevronSmallRightIcon, obj13);
        obj11.children = onToggleExpanded;
        closure_6(tmp10(5428).PressableOpacity, obj11);
      }
    }
    items2[1] = tmp19;
    obj9.children = items2;
    items1[1] = closure_7(closure_5, obj9);
    obj7.children = items1;
    tmp15Result = closure_7(closure_5, obj7);
  }
  const items3 = [tmp15Result, ];
  let tmp15Result4 = null;
  if (flag4) {
    const obj14 = { style: tmp.list, children: null };
    const items4 = [
      todos.map((children) => {
          const todoMarkResult = VibegrationsTodoState.todoMark(children.status, flag2);
          const obj2 = { style: row.row, children: null };
          const items = [timestampProducer(TodoMarker, { status: todoMarkResult }), , ];
          if ("in_progress" === todoMarkResult) {
            let str = "text-default";
          } else {
            str = "text-muted";
          }
          const obj3 = { variant: "text-sm/normal", color: str, style: null, children: children.text };
          const items1 = [row.text, "completed" === todoMarkResult && row.textCompleted];
          obj3.style = items1;
          items[1] = timestampProducer(Text_Text.Text, obj3);
          let tmp5Result = null;
          if ("in_progress" === todoMarkResult) {
            let items2 = closure_3.get(children.id);
            if (items2 == null) {
              items2 = [];
            }
            const obj4 = { agents: items2 };
            tmp5Result = timestampProducer(TodoAgents, obj4);
          }
          items[2] = tmp5Result;
          obj2.children = items;
          return React5(hasOwnProperty, obj2, children.id);
        }),

    ];
    let tmp15Result3 = null;
    if (null != provisional) {
      tmp15Result3 = null;
      if ("" !== provisional) {
        const obj15 = { style: tmp.row, children: null };
        const items5 = [closure_6(TodoMarker, { status: "pending" }), ];
        const obj16 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
        items5[1] = closure_6(tmp10(4825).Text, obj16);
        obj15.children = items5;
        tmp15Result3 = closure_7(closure_5, obj15);
      }
    }
    items4[1] = tmp15Result3;
    obj14.children = items4;
    tmp15Result4 = closure_7(closure_5, obj14);
  }
  items3[1] = tmp15Result4;
  obj6.children = items3;
  return closure_7(closure_5, obj6);
};
export const todoProgress = function todoProgress(arr) {
  return { completed: arr.filter((status) => "completed" === status.status).length, total: arr.length };
};