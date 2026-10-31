// discord_app/modules/conjure/debug/native/ConjureDebugPrimitives.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: nativeDefault.space.PX_12,
  },
  toolbarStatus: { flex: 1 },
  section: null,
  statRow: null,
  statRowHead: null,
  statLabel: null,
  statValue: null,
  statGroup: null,
  statValueGroup: null,
  meterTrack: null,
  meterFill: null,
  meterFillCritical: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
};
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.statRow = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.statRowHead = {
  flexDirection: "row",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
};
obj2.statLabel = { flexShrink: 1 };
obj2.statValue = { flexShrink: 1, textAlign: "right" };
let obj6 = {
  flexDirection: "row",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
};
obj2.statGroup = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.statValueGroup = { flexShrink: 1, justifyContent: "flex-end" };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.meterTrack = {
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  overflow: "hidden",
};
const obj8 = {
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  overflow: "hidden",
};
obj2.meterFill = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
const obj9 = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.meterFillCritical = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugPrimitives.tsx");

export function DebugSnapshotToolbar(onRefresh) {
  ({ generatedAt, fetchState } = onRefresh);
  const tmp = closure_7();
  const obj = { style: tmp.toolbar, children: null };
  const obj2 = { style: tmp.toolbarStatus, children: null };
  if ("loading" === fetchState) {
    let tmp4Result = hasOwnProperty(React3, { size: "small" });
  } else if ("failed" === fetchState) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(_modDef3868.ZVByPX);
    tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
  } else {
    tmp4Result = null;
    if (null != generatedAt) {
      const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      const obj6 = { time: ConjureDebugFormat.formatObservedAt(generatedAt) };
      obj4.children = intl.formatToPlainString(_modDef3868.INVO50, obj6);
      tmp4Result = hasOwnProperty(Text_Text.Text, obj4);
    }
  }
  obj2.children = tmp4Result;
  const items = [hasOwnProperty(React4, obj2)];
  const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(_modDef3868.oKEgiu);
  obj7.onPress = onRefresh.onRefresh;
  items[1] = hasOwnProperty(components_Button_Button.Button, obj7);
  obj.children = items;
  return timestampProducer(React4, obj);
}
export function DebugSection(arg0) {
  ({ title, children } = arg0);
  const obj = { style: closure_7().section, children: null };
  const items = [
    hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: title }),
    children,
  ];
  obj.children = items;
  return timestampProducer(React4, obj);
}
export function DebugNote(children) {
  return hasOwnProperty(Text_Text.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: children.children,
  });
}
export function DebugStatRow(arg0) {
  ({ hint, critical } = arg0);
  ({ label, value } = arg0);
  if (critical === undefined) {
    critical = false;
  }
  ({ icon, state } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.statRow, children: null };
  const obj2 = { style: tmp.statRowHead, children: null };
  const obj3 = { style: null, children: null };
  const items = [,];
  ({ statLabel: arr[0], statGroup: arr[1] } = tmp);
  obj3.style = items;
  const items1 = [
    icon,
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }),
  ];
  obj3.children = items1;
  const items2 = [timestampProducer(React4, obj3)];
  const obj4 = { style: null, children: null };
  const items3 = [,];
  ({ statValueGroup: arr4[0], statGroup: arr4[1] } = tmp);
  obj4.style = items3;
  const items4 = [state];
  let str = "text-default";
  if (critical) {
    str = "text-feedback-critical";
  }
  items4[1] = hasOwnProperty(Text_Text.Text, {
    variant: "text-sm/medium",
    color: str,
    style: tmp.statValue,
    children: value,
  });
  obj4.children = items4;
  items2[1] = timestampProducer(React4, obj4);
  obj2.children = items2;
  const items5 = [timestampProducer(React4, obj2)];
  let tmp4Result = null;
  if (null != hint) {
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: hint };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj6);
  }
  items5[1] = tmp4Result;
  obj.children = items5;
  return timestampProducer(React4, obj);
}
export function DebugMeter(arg0) {
  ({ label, used, max, formatValue } = arg0);
  const tmp = closure_7();
  let num = 0;
  if (max > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(1, Math.max(0, used / max));
  }
  let meterFillCritical = num >= 0.9;
  const combined = "" + formatValue(used) + " / " + formatValue(max);
  const obj = {
    style: tmp.statRow,
    accessibilityRole: "progressbar",
    accessibilityLabel: label,
    accessibilityValue: { text: combined },
    children: null,
  };
  const obj2 = { style: tmp.statRowHead, children: null };
  const formatValueResult = formatValue(used);
  const items = [
    hasOwnProperty(React4, {
      style: tmp.statLabel,
      children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }),
    }),
  ];
  let str = "text-default";
  if (meterFillCritical) {
    str = "text-feedback-critical";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: str, children: combined });
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2)];
  const obj4 = { style: tmp.meterTrack, children: null };
  const items2 = [tmp.meterFill, ,];
  if (meterFillCritical) {
    meterFillCritical = tmp.meterFillCritical;
  }
  items2[1] = meterFillCritical;
  items2[2] = { width: `${100 * num}%` };
  obj4.children = hasOwnProperty(React4, { style: items2 });
  items1[1] = hasOwnProperty(React4, obj4);
  obj.children = items1;
  return timestampProducer(React4, obj);
}
