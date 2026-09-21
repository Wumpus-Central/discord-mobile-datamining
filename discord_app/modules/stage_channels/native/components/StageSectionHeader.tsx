// === Module 10310: StageSectionHeader ===

// Module 10310 (StageSectionHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4492 */;
import timing from "timing" /* 4757 */;
import _modDef7403 from "module_7403" /* 7403 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { section: { height: 48, paddingHorizontal: 4 }, children: { marginLeft: 12 }, collapseButton: { marginLeft: "auto" }, collapseIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, audience: null };
let obj3 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.audience = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles.createStyles(obj2);
const __initData = { code: "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(collapsed) {
  collapsed = collapsed.collapsed;
  const children = collapsed.children;
  ({ label, count, onToggleCollapse } = collapsed);
  const tmp = closure_7();
  const fn = function y() {
    let str = "0deg";
    if (collapsed) {
      str = "180deg";
    }
    const obj2 = { transform: null };
    const items = [{ rotate: timing.withTiming(str, { duration: 150 }) }];
    obj2.transform = items;
    return obj2;
  };
  let obj = collapsed(4492);
  const tmp2 = collapsed;
  fn.__closure = { withTiming: collapsed(4757).withTiming, collapsed };
  fn.__workletHash = 13855092771739;
  fn.__initData = __initData;
  const obj3 = { style: tmp.section, children: null };
  const obj4 = { style: tmp.audience, onPress: onToggleCollapse, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj5 = { variant: "text-md/semibold", color: "text-overlay-light", accessibilityRole: "header", children: null };
  let items = [label, " \u2014 ", count];
  obj5.children = items;
  const items1 = [closure_5(collapsed(4752).Text, obj5), , ];
  let tmp5Result = null != children;
  if (tmp5Result) {
    const obj6 = { style: tmp.children, children };
    tmp5Result = closure_6(closure_4, obj6);
  }
  items1[1] = tmp5Result;
  const obj7 = { style: tmp.collapseButton, children: null };
  const obj8 = { style: animatedStyle, children: null };
  let obj2 = { withTiming: collapsed(4757).withTiming, collapsed };
  obj8.children = closure_6(tmp2(1177).Icon, { source: _modDef7403, style: tmp.collapseIcon });
  obj7.children = closure_6(ReanimatedRexportDefault.View, obj8);
  items1[2] = closure_6(closure_4, obj7);
  obj4.children = items1;
  obj3.children = closure_5(closure_3, obj4);
  return closure_6(closure_4, obj3);
};