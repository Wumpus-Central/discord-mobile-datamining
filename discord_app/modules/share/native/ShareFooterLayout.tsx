// discord_app/modules/share/native/ShareFooterLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { footer: null, footerSeparator: null, warningWrapper: null, chatRow: null };
createStyles = {
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.footer = createStyles;
createStyles.footerSeparator = {
  marginHorizontal: -nativeDefault.space.PX_16,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.warningWrapper = { display: "flex", flexDirection: "column", gap: 8 };
let obj1 = {
  marginHorizontal: -nativeDefault.space.PX_16,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.chatRow = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  alignItems: "flex-end",
};
let closure_7 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = closure_7();
  const sum =
    tmp.footer.paddingVertical +
    useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false })
      .insets.bottom;
  _require = sum;
  require("ReanimatedRexport");
  const fn = function f() {
    const obj = { paddingBottom: spring.withSpring(c0, springPresets.ON_PRESS_SPRING, "respect-motion-settings") };
    return obj;
  };
  let obj = {
    withSpring: require("spring").withSpring,
    footerPaddingBottom: sum,
    ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING,
  };
  fn.__closure = obj;
  fn.__workletHash = 2871405301293;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items = [tmp.footer, animatedStyle];
  obj.style = items;
  let tmp6Result = null;
  if (null != preview) {
    const obj1 = { children: null };
    const items1 = [preview];
    const obj2 = { style: tmp.footerSeparator };
    items1[1] = closure_4(View, obj2);
    obj1.children = items1;
    tmp6Result = closure_6(closure_5, obj1);
  }
  const items2 = [tmp6Result];
  const obj3 = { style: tmp.warningWrapper, children: null };
  const obj4 = { style: tmp.chatRow, children: null };
  const items3 = [chatInput, sendButton];
  obj4.children = items3;
  const items4 = [closure_6(View, obj4)];
  let tmp12 = null != warningText;
  if (tmp12) {
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp12 = closure_4(require("Text/Text").Text, obj5);
  }
  items4[1] = tmp12;
  obj3.children = items4;
  items2[1] = closure_6(View, obj3);
  obj.children = items2;
  return closure_6(ReanimatedRexportDefault.View, obj);
}
