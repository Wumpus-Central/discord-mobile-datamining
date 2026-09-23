// discord_app/modules/vibegrations/native/VibegrationsTodoList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3712 from "../intl/VibegrationsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine.tsx";
import VibegrationsTodoAgents from "../lib/VibegrationsTodoAgents.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function TodoAgents(agents) {
  const tmp = closure_8();
  _require = tmp;
  let obj = require("VibegrationsTodoAgents");
  ({ shown, overflow } = require("VibegrationsTodoAgents").splitAgentOverflow(agents.agents));
  let items = [, , ,];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: null };
    const items1 = [
      shown.map((key) => {
        const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
        items = [agentMark.agentMark];
        items[1] =
          items[VibegrationsNativeStatusLine.laneTintIndexFor(key.key) % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
        obj.style = items;
        const intl = util.intl;
        obj.accessibilityLabel = intl.formatToPlainString(_modDef3712.yTB8eu, { name: key.name, task: key.task });
        return timestampProducer(hasOwnProperty, obj, key.key);
      }),
    ];
    let tmp9 = null;
    if (overflow > 0) {
      const obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      let intl = tmp2(1115).intl;
      const obj4 = { count: overflow };
      obj3.accessibilityLabel = intl.formatToPlainString(items(3712).Vpu1Pd, obj4);
      const _HermesInternal = HermesInternal;
      obj3.children = "+" + overflow;
      tmp9 = closure_6(tmp2(4823).Text, obj3);
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
  const items = [tmp.marker, ,];
  let markerCompleted = tmp4;
  if ("completed" === status) {
    markerCompleted = tmp.markerCompleted;
  }
  items[1] = markerCompleted;
  let markerInProgress = tmp5;
  if ("in_progress" === status) {
    markerInProgress = tmp.markerInProgress;
  }
  const obj = { style: items, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items[2] = markerInProgress;
  if ("completed" === status) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef3712.TkPGOH);
    let tmp10 = importDefault;
    let tmp11 = require;
  } else if ("in_progress" === status) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3712["oK+fmd"]);
    tmp10 = importDefault;
    tmp11 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3712.d7lieu);
    tmp10 = importDefault;
    tmp11 = require;
  }
  obj.accessibilityLabel = stringResult;
  let tmp18 = null;
  if ("in_progress" === status) {
    const obj2 = { size: "small", style: tmp.markerSpinner };
    tmp18 = timestampProducer(React4, obj2);
  }
  const items1 = [tmp18];
  let tmp21 = null;
  if ("completed" === status) {
    const obj3 = { size: "xs", color: tmp10(576).colors.CHECKBOX_ICON_ACTIVE };
    tmp21 = timestampProducer(tmp11(9632).CheckmarkSmallBoldIcon, obj3);
  }
  items1[1] = tmp21;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  root: { gap: nativeDefault.space.PX_8 },
  header: null,
  list: null,
  row: null,
  marker: null,
  markerCompleted: null,
  markerInProgress: null,
  markerSpinner: null,
  text: null,
  agents: null,
  agentMark: null,
  agentMarkTint0: null,
  agentMarkTint1: null,
  agentMarkTint2: null,
  agentMarkTint3: null,
  textCompleted: null,
};
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj2.list = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let size = {
  width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT,
  height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT,
  flexGrow: 0,
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
obj2.marker = size;
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.markerCompleted = {
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT,
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT,
};
obj2.markerInProgress = { borderWidth: 0 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.markerSpinner = size1;
obj2.text = { flexShrink: 1 };
let obj7 = {
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT,
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT,
};
obj2.agents = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  marginLeft: "auto",
  paddingLeft: nativeDefault.space.PX_8,
};
const size2 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
};
obj2.agentMark = size2;
let obj8 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  marginLeft: "auto",
  paddingLeft: nativeDefault.space.PX_8,
};
obj2.agentMarkTint0 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
let obj9 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.agentMarkTint1 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const obj10 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.agentMarkTint2 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const obj11 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
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
  const tmp = closure_8();
  importDefault = tmp;
  const length = todos.filter((status) => "completed" === status.status).length;
  let items = [agents];
  dependencyMap = noop.useMemo(() => {
    let items = agents;
    if (agents == null) {
      items = [];
    }
    return VibegrationsTodoAgents.groupAgentsByTodo(items);
  }, items);
  if (0 !== todos.length) {
    let obj = { style: tmp.root, children: null };
    let tmp4Result = null;
    if (length2 > 0) {
      const obj2 = { style: tmp.header, children: null };
      let obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl = agents(1115).intl;
      obj3.children = intl.string(_modDef3712.qCRC6c);
      let items1 = [closure_6(agents(4823).Text, obj3)];
      let str2 = "none";
      if (flag) {
        str2 = "polite";
      }
      let obj4 = {
        variant: "text-sm/medium",
        color: "text-muted",
        accessibilityLiveRegion: str2,
        accessibilityLabel: null,
        children: null,
      };
      const intl2 = agents(1115).intl;
      const obj5 = { completed: length, total: length2 };
      obj4.accessibilityLabel = intl2.formatToPlainString(_modDef3712["QG/EiF"], obj5);
      const intl3 = agents(1115).intl;
      const obj6 = { completed: length, total: length2 };
      obj4.children = intl3.formatToPlainString(_modDef3712.bQvqly, obj6);
      items1[1] = closure_6(agents(4823).Text, obj4);
      obj2.children = items1;
      tmp4Result = closure_7(closure_5, obj2);
    }
    let items2 = [tmp4Result];
    const obj7 = { style: tmp.list, children: null };
    const items3 = [
      todos.map((status) => {
        const obj = { style: row.row, children: null };
        const items = [timestampProducer(TodoMarker, { status: status.status }), ,];
        let str = "text-default";
        if ("completed" === status.status) {
          str = "text-muted";
        }
        const obj3 = { variant: "text-sm/normal", color: str, style: null, children: status.text };
        const items1 = [row.text, "completed" === status.status && row.textCompleted];
        obj3.style = items1;
        items[1] = timestampProducer(Text_Text.Text, obj3);
        let tmp4Result = null;
        if ("in_progress" === status.status) {
          let items2 = closure_2.get(status.id);
          if (items2 == null) {
            items2 = [];
          }
          const obj4 = { agents: items2 };
          tmp4Result = timestampProducer(TodoAgents, obj4);
        }
        items[2] = tmp4Result;
        obj.children = items;
        return React5(hasOwnProperty, obj, status.id);
      }),
    ];
    let tmp4Result3 = null;
    if (null != provisional) {
      tmp4Result3 = null;
      if ("" !== provisional) {
        const obj8 = { style: tmp.row, children: null };
        const items4 = [closure_6(TodoMarker, { status: "pending" })];
        const obj9 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
        items4[1] = closure_6(agents(4823).Text, obj9);
        obj8.children = items4;
        tmp4Result3 = closure_7(closure_5, obj8);
      }
    }
    items3[1] = tmp4Result3;
    obj7.children = items3;
    items2[1] = closure_7(closure_5, obj7);
    obj.children = items2;
    let tmp4Result4 = closure_7(closure_5, obj);
  } else {
    tmp4Result4 = null;
    if (null != provisional) {
      tmp4Result4 = null;
    }
  }
  return tmp4Result4;
}
export const todoProgress = function todoProgress(arr) {
  return { completed: arr.filter((status) => "completed" === status.status).length, total: arr.length };
};
