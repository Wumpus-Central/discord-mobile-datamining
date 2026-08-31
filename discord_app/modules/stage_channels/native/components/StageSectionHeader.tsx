// discord_app/modules/stage_channels/native/components/StageSectionHeader.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4187 from "../../../reanimated/ReanimatedRexport.tsx";
import registerAssetDefault from "../../../../../_runtime/05911_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsxs: c5, jsx: closure_6 } = jsxProd);
createCacheKey = { section: { height: 48, paddingHorizontal: 4 }, children: { marginLeft: 12 }, collapseButton: { marginLeft: "auto" }, collapseIcon: null, audience: null };
createCacheKey = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: ThemesDefault.radii.xs };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}" };
let obj1 = { height: 48, flex: 1, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, paddingHorizontal: 4, borderRadius: ThemesDefault.radii.xs };
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(collapsed) {
  collapsed = collapsed.collapsed;
  const children = collapsed.children;
  ({ label, count, onToggleCollapse } = collapsed);
  const tmp = callback2();
  let obj = collapsed(4187);
  const fn = function y() {
    let obj = collapsed(closure_1_2[6]);
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
  obj = { withTiming: collapsed(4449).withTiming, collapsed };
  fn.__closure = obj;
  fn.__workletHash = 13855092771739;
  fn.__initData = closure_8;
  obj = { style: tmp.section, children: null };
  obj1 = { style: tmp.audience, onPress: onToggleCollapse, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [label, " \u2014 ", count];
  const items1 = [callback(collapsed(4444).Text, { variant: "text-md/semibold", color: "text-overlay-light", accessibilityRole: "header", children: items }), , ];
  let tmp5Result = null != children;
  if (tmp5Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.children;
    obj2[1] = children;
    tmp5Result = tmp5(tmp6, obj2);
  }
  items1[1] = tmp5Result;
  const obj3 = { style: tmp.collapseButton, children: null };
  const obj4 = { style: animatedStyle, children: closure_6(collapsed(1297).Icon, { source: registerAssetDefault, style: tmp.collapseIcon }) };
  obj3[1] = closure_6(_modDef4187.View, obj4);
  items1[2] = closure_6(closure_4, obj3);
  obj1[2] = items1;
  obj[1] = callback(closure_3, obj1);
  return closure_6(closure_4, obj);
};