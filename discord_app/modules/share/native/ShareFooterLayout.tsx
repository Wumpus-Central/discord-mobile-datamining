// === Module 11590: ShareFooterLayout ===

// Module 11590 (ShareFooterLayout)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import springPresets from "springPresets" /* 5382 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6664 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { footer: { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, footerSeparator: null, warningWrapper: null, chatRow: null };
let obj3 = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.footerSeparator = { marginHorizontal: -nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.warningWrapper = { display: "flex", flexDirection: "column", gap: 8 };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.chatRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const __initData = { code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,\"respect-motion-settings\")};}" };
const __initData2 = { code: "function ShareFooterLayoutTsx2(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}" };
const ReactCompilerGating = fn(558);
let obj5 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ShareFooterLayout(arg0) {
  const cResult = c.c(22);
  ({ preview, chatInput, sendButton, warningText, avoidKeyboard } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== avoidKeyboard) {
    const obj2 = { includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false };
    cResult[0] = avoidKeyboard;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const sum = tmp4.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault(tmp5).insets.bottom;
  const require = sum;
  const fn = function y() {
    const obj = { paddingBottom: spring.withSpring(sum, springPresets.ON_PRESS_SPRING, "respect-motion-settings") };
    return obj;
  };
  const tmpResult = ReanimatedRexport;
  fn.__closure = { withSpring: spring.withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: springPresets.ON_PRESS_SPRING };
  fn.__workletHash = 13733030539245;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp4.footer) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === preview) {
      if (cResult[6] === tmp4.footerSeparator) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === chatInput) {
        if (cResult[9] === sendButton) {
          if (cResult[10] === tmp4.chatRow) {
            let tmp16 = cResult[11];
          }
          if (cResult[12] !== warningText) {
            let tmp22 = null != warningText;
            if (tmp22) {
              const obj4 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
              tmp22 = closure_4(tmp(5088).Text, obj4);
            }
            cResult[12] = warningText;
            cResult[13] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === tmp4.warningWrapper) {
            if (cResult[15] === tmp16) {
              if (cResult[16] === tmp20) {
                let tmp24 = cResult[17];
              }
              if (cResult[18] === tmp9) {
                if (cResult[19] === tmp10) {
                  if (cResult[20] === tmp24) {
                    let tmp28 = cResult[21];
                  }
                  return tmp28;
                }
              }
              const obj5 = { style: tmp9, children: null };
              const items = [tmp10, tmp24];
              obj5.children = items;
              const tmp30 = closure_6(ReanimatedRexportDefault.View, obj5);
              cResult[18] = tmp9;
              cResult[19] = tmp10;
              cResult[20] = tmp24;
              cResult[21] = tmp30;
              tmp28 = tmp30;
            }
          }
          const obj6 = { style: tmp4.warningWrapper, children: null };
          const items1 = [tmp16, tmp20];
          obj6.children = items1;
          const tmp27 = closure_6(View, obj6);
          cResult[14] = tmp4.warningWrapper;
          cResult[15] = tmp16;
          cResult[16] = tmp20;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj7 = { style: tmp4.chatRow, children: null };
      const items2 = [chatInput, sendButton];
      obj7.children = items2;
      const tmp19 = closure_6(View, obj7);
      cResult[8] = chatInput;
      cResult[9] = sendButton;
      cResult[10] = tmp4.chatRow;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    }
    let tmp11 = null;
    if (null != preview) {
      const obj8 = { children: null };
      const items3 = [preview, ];
      const obj9 = { style: tmp4.footerSeparator };
      items3[1] = closure_4(View, obj9);
      obj8.children = items3;
      tmp11 = closure_6(closure_5, obj8);
    }
    cResult[5] = preview;
    cResult[6] = tmp4.footerSeparator;
    cResult[7] = tmp11;
    tmp10 = tmp11;
  }
  const items4 = [tmp4.footer, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.footer;
  cResult[4] = items4;
  tmp9 = items4;
  const obj3 = { withSpring: spring.withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: springPresets.ON_PRESS_SPRING };
}) : (function ShareFooterLayout(arg0) {
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = closure_7();
  const sum = tmp.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  _require = sum;
  const fn = function f() {
    const obj = { paddingBottom: spring.withSpring(c0, springPresets.ON_PRESS_SPRING, "respect-motion-settings") };
    return obj;
  };
  let obj = require("ReanimatedRexport");
  const tmp4 = _require;
  fn.__closure = { withSpring: require("spring").withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__workletHash = 13722943567118;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [tmp.footer, animatedStyle];
  obj3.style = items;
  let tmp6Result = null;
  if (null != preview) {
    const obj4 = { children: null };
    const items1 = [preview, ];
    const obj5 = { style: tmp.footerSeparator };
    items1[1] = closure_4(View, obj5);
    obj4.children = items1;
    tmp6Result = closure_6(closure_5, obj4);
  }
  const items2 = [tmp6Result, ];
  const obj6 = { style: tmp.warningWrapper, children: null };
  const obj7 = { style: tmp.chatRow, children: null };
  const items3 = [chatInput, sendButton];
  obj7.children = items3;
  const items4 = [closure_6(View, obj7), ];
  let tmp12 = null != warningText;
  if (tmp12) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp12 = closure_4(tmp4(5088).Text, obj8);
  }
  items4[1] = tmp12;
  obj6.children = items4;
  items2[1] = closure_6(View, obj6);
  obj3.children = items2;
  return closure_6(ReanimatedRexportDefault.View, obj3);
});