// discord_app/modules/share/native/ShareFooterLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
const obj2 = {
  footer: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
    borderTopWidth: 1,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  footerSeparator: null,
  warningWrapper: null,
  chatRow: null,
};
let obj3 = {
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
obj2.footerSeparator = {
  marginHorizontal: -nativeDefault.space.PX_16,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.warningWrapper = { display: "flex", flexDirection: "column", gap: 8 };
let obj4 = {
  marginHorizontal: -nativeDefault.space.PX_16,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.chatRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
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
  const fn = function f() {
    const obj = { paddingBottom: spring.withSpring(c0, springPresets.ON_PRESS_SPRING, "respect-motion-settings") };
    return obj;
  };
  let obj = require("ReanimatedRexport");
  const tmp4 = _require;
  fn.__closure = {
    withSpring: require("spring").withSpring,
    footerPaddingBottom: sum,
    ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING,
  };
  fn.__workletHash = 2871405301293;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [tmp.footer, animatedStyle];
  obj3.style = items;
  let tmp6Result = null;
  if (null != preview) {
    const obj4 = { children: null };
    const items1 = [preview];
    const obj5 = { style: tmp.footerSeparator };
    items1[1] = closure_4(View, obj5);
    obj4.children = items1;
    tmp6Result = closure_6(closure_5, obj4);
  }
  const items2 = [tmp6Result];
  const obj6 = { style: tmp.warningWrapper, children: null };
  const obj7 = { style: tmp.chatRow, children: null };
  const items3 = [chatInput, sendButton];
  obj7.children = items3;
  const items4 = [closure_6(View, obj7)];
  let tmp12 = null != warningText;
  if (tmp12) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp12 = closure_4(tmp4(4718).Text, obj8);
  }
  items4[1] = tmp12;
  obj6.children = items4;
  items2[1] = closure_6(View, obj6);
  obj3.children = items2;
  return closure_6(ReanimatedRexportDefault.View, obj3);
}
