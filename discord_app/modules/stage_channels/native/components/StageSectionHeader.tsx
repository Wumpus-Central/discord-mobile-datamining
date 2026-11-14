// discord_app/modules/stage_channels/native/components/StageSectionHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef7914 from "../../../../../_runtime/metro/07914__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1655 = _mod1655;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  section: { height: 48, paddingHorizontal: 4 },
  children: { marginLeft: 12 },
  collapseButton: { marginLeft: "auto" },
  collapseIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  audience: null,
};
let obj3 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.audience = {
  height: 48,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: 4,
  borderRadius: nativeDefault.radii.xs,
};
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = {
  code: "(function StageSectionHeaderTsx1(){let[withTiming,collapsed]=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default function StageSectionHeader(children) {
  children = children.children;
  ({ label, count, collapsed, onToggleCollapse } = children);
  const tmp = closure_7();
  items = [closure_8, timing_timing.withTiming, collapsed];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class StageSectionHeaderTsx1 {
    constructor() {
      str = "0deg";
      tmp = closure_0;
      if (closure_1) {
        str = "180deg";
      }
      obj = { transform: null };
      obj1 = { rotate: tmp(str, { duration: 150 }) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6];
  StageSectionHeaderTsx1.__closure = items1;
  StageSectionHeaderTsx1.__workletHash = 286379781122;
  StageSectionHeaderTsx1.__initData = tmp4;
  const obj2 = { style: tmp.section, children: null };
  const obj3 = { style: tmp.audience, onPress: onToggleCollapse, children: null };
  const animatedStyle = _mod1655.useAnimatedStyle(StageSectionHeaderTsx1);
  const obj4 = {
    variant: "body-md/semibold",
    color: "text-overlay-light",
    accessibilityRole: "header",
    children: null,
  };
  const items2 = [label, " \u2014 ", count];
  obj4.children = items2;
  const items3 = [hasOwnProperty(Text_Text.Text, obj4), ,];
  let tmp8Result = null != children;
  if (tmp8Result) {
    const obj5 = { style: tmp.children, children };
    tmp8Result = timestampProducer(React4, obj5);
  }
  items3[1] = tmp8Result;
  const obj6 = { style: tmp.collapseButton, children: null };
  const obj7 = { style: animatedStyle, children: null };
  obj7.children = timestampProducer(native.Icon, { source: _modDef7914, style: tmp.collapseIcon });
  obj6.children = timestampProducer(_modDef1655.View, obj7);
  items3[2] = timestampProducer(React4, obj6);
  obj3.children = items3;
  obj2.children = hasOwnProperty(React3, obj3);
  return timestampProducer(React4, obj2);
}
