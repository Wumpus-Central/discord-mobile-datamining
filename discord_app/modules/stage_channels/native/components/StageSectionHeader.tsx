// discord_app/modules/stage_channels/native/components/StageSectionHeader.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/05757_registerAsset.js";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsxs: c5, jsx: closure_6 } = jsxProd);
createCacheKey = { section: { height: 48, paddingHorizontal: 4 }, children: { marginLeft: 12 }, collapseButton: { marginLeft: "auto" }, collapseIcon: null, audience: null };
createCacheKey = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: require("Themes").radii.xs };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}" };
let obj1 = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: require("Themes").radii.xs };
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(collapsed) {
  let count;
  let label;
  let onToggleCollapse;
  collapsed = collapsed.collapsed;
  const children = collapsed.children;
  ({ label, count, onToggleCollapse } = collapsed);
  const tmp = createCacheKey();
  let obj = collapsed(4083);
  const fn = function y() {
    let obj = collapsed(outer1_2[6]);
    let str = "0deg";
    if (collapsed) {
      str = "180deg";
    }
    obj = { transform: null };
    obj = { rotate: obj.withTiming(str, { duration: 150 }) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { withTiming: collapsed(4345).withTiming, collapsed };
  fn.__closure = obj;
  fn.__workletHash = 13855092771739;
  fn.__initData = closure_8;
  obj = { style: tmp.section, children: null };
  const obj1 = { style: tmp.audience, onPress: onToggleCollapse, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [label, " \u2014 ", count];
  const items1 = [callback(collapsed(4340).Text, { variant: "text-md/semibold", color: "text-overlay-light", accessibilityRole: "header", children: items }), , ];
  let tmp5Result = null != children;
  if (tmp5Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.children;
    obj2[1] = children;
    tmp5Result = tmp5(tmp6, obj2);
  }
  items1[1] = tmp5Result;
  const obj3 = { style: tmp.collapseButton, children: null };
  const obj4 = { style: animatedStyle, children: null };
  const obj5 = { source: null, style: null };
  obj5[0] = registerAsset;
  obj5[1] = tmp.collapseIcon;
  obj4[1] = closure_6(collapsed(1297).Icon, obj5);
  obj3[1] = closure_6(ReanimatedRexport.View, obj4);
  items1[2] = closure_6(closure_4, obj3);
  obj1[2] = items1;
  obj[1] = callback(closure_3, obj1);
  return closure_6(closure_4, obj);
};