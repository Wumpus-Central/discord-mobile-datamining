// === Module 17070: VibegrationsDebugPrimitives ===

// Module 17070 (VibegrationsDebugPrimitives)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3678 from "module_3678" /* 3678 */;
import Text_Text from "Text/Text" /* 4752 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 17067 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { toolbar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 }, toolbarStatus: { flex: 1 }, section: null, statRow: null, statRowHead: null, statLabel: null, statValue: null, meterTrack: null, meterFill: null, meterFillCritical: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.statRow = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.statRowHead = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.statLabel = { flexShrink: 1 };
obj2.statValue = { flexShrink: 1, textAlign: "right" };
let obj6 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.meterTrack = { height: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
let obj7 = { height: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
obj2.meterFill = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
const obj8 = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.meterFillCritical = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugPrimitives.tsx");

export const DebugSnapshotToolbar = function DebugSnapshotToolbar(onRefresh) {
  ({ generatedAt, fetchState } = onRefresh);
  const tmp = closure_7();
  const obj = { style: tmp.toolbar, children: null };
  const obj2 = { style: tmp.toolbarStatus, children: null };
  if ("loading" === fetchState) {
    let tmp4Result = hasOwnProperty(React3, { size: "small" });
  } else if ("failed" === fetchState) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(_modDef3678["K+FvtM"]);
    tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
  } else {
    tmp4Result = null;
    if (null != generatedAt) {
      const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      const obj6 = { time: VibegrationsDebugFormat.formatObservedAt(generatedAt) };
      obj4.children = intl.formatToPlainString(_modDef3678["4NpaEk"], obj6);
      tmp4Result = hasOwnProperty(Text_Text.Text, obj4);
    }
  }
  obj2.children = tmp4Result;
  const items = [hasOwnProperty(React4, obj2), ];
  const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(_modDef3678.aw0IJm);
  obj7.onPress = onRefresh.onRefresh;
  items[1] = hasOwnProperty(components_Button_Button.Button, obj7);
  obj.children = items;
  return timestampProducer(React4, obj);
};
export const DebugSection = function DebugSection(arg0) {
  ({ title, children } = arg0);
  const obj = { style: closure_7().section, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: title }), children];
  obj.children = items;
  return timestampProducer(React4, obj);
};
export const DebugNote = function DebugNote(children) {
  return hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
};
export const DebugStatRow = function DebugStatRow(arg0) {
  ({ hint, critical } = arg0);
  ({ label, value } = arg0);
  if (critical === undefined) {
    critical = false;
  }
  const tmp = closure_7();
  const obj = { style: tmp.statRow, children: null };
  const obj2 = { style: tmp.statRowHead, children: null };
  const items = [hasOwnProperty(React4, { style: tmp.statLabel, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }) }), ];
  let str = "text-default";
  if (critical) {
    str = "text-feedback-critical";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: str, style: tmp.statValue, children: value });
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2), ];
  let tmp4Result = null;
  if (null != hint) {
    const obj5 = { variant: "text-xs/normal", color: "text-muted", children: hint };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj5);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  return timestampProducer(React4, obj);
};
export const DebugMeter = function DebugMeter(arg0) {
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
  const obj = { style: tmp.statRow, accessibilityRole: "progressbar", accessibilityLabel: label, accessibilityValue: { text: combined }, children: null };
  const obj2 = { style: tmp.statRowHead, children: null };
  const formatValueResult = formatValue(used);
  const items = [hasOwnProperty(React4, { style: tmp.statLabel, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }) }), ];
  let str = "text-default";
  if (meterFillCritical) {
    str = "text-feedback-critical";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: str, children: combined });
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2), ];
  const obj4 = { style: tmp.meterTrack, children: null };
  const items2 = [tmp.meterFill, , ];
  if (meterFillCritical) {
    meterFillCritical = tmp.meterFillCritical;
  }
  items2[1] = meterFillCritical;
  items2[2] = { width: `${100 * num}%` };
  obj4.children = hasOwnProperty(React4, { style: items2 });
  items1[1] = hasOwnProperty(React4, obj4);
  obj.children = items1;
  return timestampProducer(React4, obj);
};