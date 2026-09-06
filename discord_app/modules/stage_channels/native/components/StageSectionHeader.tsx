// === Module 10053: StageSectionHeader ===

// Module 10053 (StageSectionHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import _modDef7158 from "module_7158" /* 7158 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: metroRequire } = jsxProd);
fn(4560);
let createStyles = { section: { height: 48, paddingHorizontal: 4 }, children: { marginLeft: 12 }, collapseButton: { marginLeft: "auto" }, collapseIcon: null, audience: null };
createStyles = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.collapseIcon = createStyles;
createStyles.audience = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles.createStyles(createStyles);
const __initData = { code: "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(collapsed) {
  collapsed = collapsed.collapsed;
  const children = collapsed.children;
  ({ label, count, onToggleCollapse } = collapsed);
  const tmp = closure_7();
  collapsed(4296);
  const fn = function y() {
    let obj = timing;
    let str = "0deg";
    if (collapsed) {
      str = "180deg";
    }
    obj = { transform: null };
    obj = { rotate: obj.withTiming(str, { duration: 150 }) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  let obj = { withTiming: collapsed(4561).withTiming, collapsed };
  fn.__closure = obj;
  fn.__workletHash = 13855092771739;
  fn.__initData = __initData;
  obj = { style: tmp.section, children: null };
  const obj1 = { style: tmp.audience, onPress: onToggleCollapse, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = { variant: "text-md/semibold", color: "text-overlay-light", accessibilityRole: "header", children: null };
  let items = [label, " \u2014 ", count];
  obj2.children = items;
  const items1 = [closure_5(collapsed(4556).Text, obj2), , ];
  let tmp5Result = null != children;
  if (tmp5Result) {
    const obj3 = { style: tmp.children, children };
    tmp5Result = closure_6(closure_4, obj3);
  }
  items1[1] = tmp5Result;
  const obj4 = { style: tmp.collapseButton, children: null };
  const obj5 = { style: animatedStyle, children: closure_6(collapsed(1178).Icon, { source: _modDef7158, style: tmp.collapseIcon }) };
  obj4.children = closure_6(ReanimatedRexportDefault.View, obj5);
  items1[2] = closure_6(closure_4, obj4);
  obj1.children = items1;
  obj.children = closure_5(closure_3, obj1);
  return closure_6(closure_4, obj);
};