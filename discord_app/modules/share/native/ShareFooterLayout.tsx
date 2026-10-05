// === Module 11331: ShareFooterLayout ===

// Module 11331 (ShareFooterLayout)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { footer: obj2, footerSeparator: obj3, warningWrapper: { display: "flex", flexDirection: "column", gap: 8 }, chatRow: obj4 };
obj2 = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: -nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
let closure_7 = createStyles(obj);
const __initData = { code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,\"respect-motion-settings\")};}" };
const __initData2 = { code: "function ShareFooterLayoutTsx2(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let avoidKeyboard;
  let chatInput;
  let items;
  let items1;
  let items2;
  let items3;
  let preview;
  let sendButton;
  let tmp5;
  let warningText;
  let obj = react2;
  const cResult = obj.c(22);
  ({ preview, chatInput, sendButton, warningText, avoidKeyboard } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== avoidKeyboard) {
    let obj2 = { includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false };
    cResult[0] = avoidKeyboard;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const sum = tmp4.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault(tmp5).insets.bottom;
  const require = sum;
  const fn = function y() {
    let obj2;
    const obj = { paddingBottom: obj2.withSpring(require, springPresets.ON_PRESS_SPRING, "respect-motion-settings") };
    obj2 = spring;
    return obj;
  };
  const tmpResult = ReanimatedRexport;
  fn.__closure = { withSpring: spring.withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: springPresets.ON_PRESS_SPRING };
  fn.__workletHash = 13733030539245;
  fn.__initData = __initData;
  ({ withSpring: spring.withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: springPresets.ON_PRESS_SPRING });
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[2] === animatedStyle) {
    let tmp9;
    if (cResult[3] === tmp4.footer) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === preview) {
      let tmp10;
      if (cResult[6] === tmp4.footerSeparator) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === chatInput) {
        if (cResult[9] === sendButton) {
          let tmp16;
          let tmp20;
          if (cResult[10] === tmp4.chatRow) {
            tmp16 = cResult[11];
          }
          if (cResult[12] !== warningText) {
            let tmp22 = null != warningText;
            if (tmp22) {
              const obj4 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
              tmp22 = closure_4(tmp(4886).Text, obj4);
            }
            cResult[12] = warningText;
            cResult[13] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === tmp4.warningWrapper) {
            if (cResult[15] === tmp16) {
              let tmp24;
              if (cResult[16] === tmp20) {
                tmp24 = cResult[17];
              }
              if (cResult[18] === tmp9) {
                if (cResult[19] === tmp10) {
                  let tmp28;
                  if (cResult[20] === tmp24) {
                    tmp28 = cResult[21];
                  }
                  return tmp28;
                }
              }
              const obj5 = { style: tmp9, children: items };
              items = [tmp10, tmp24];
              const tmp30 = closure_6(ReanimatedRexportDefault.View, obj5);
              cResult[18] = tmp9;
              cResult[19] = tmp10;
              cResult[20] = tmp24;
              cResult[21] = tmp30;
              tmp28 = tmp30;
            }
          }
          const obj6 = { style: tmp4.warningWrapper, children: items1 };
          items1 = [tmp16, tmp20];
          const tmp27 = closure_6(View, obj6);
          cResult[14] = tmp4.warningWrapper;
          cResult[15] = tmp16;
          cResult[16] = tmp20;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj7 = { style: tmp4.chatRow, children: items2 };
      items2 = [chatInput, sendButton];
      const tmp19 = closure_6(View, obj7);
      cResult[8] = chatInput;
      cResult[9] = sendButton;
      cResult[10] = tmp4.chatRow;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    }
    let tmp11 = null;
    if (null != preview) {
      const obj8 = { children: items3 };
      items3 = [preview, ];
      const obj9 = { style: tmp4.footerSeparator };
      items3[1] = closure_4(View, obj9);
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
}) : ((arg0) => {
  let avoidKeyboard;
  let c0;
  let chatInput;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let preview;
  let sendButton;
  let warningText;
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = closure_7();
  const sum = tmp.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  _require = sum;
  let obj = require("ReanimatedRexport");
  const fn = function f() {
    let obj2;
    const obj = { paddingBottom: obj2.withSpring(c0, springPresets.ON_PRESS_SPRING, "respect-motion-settings") };
    obj2 = spring;
    return obj;
  };
  let obj2 = { withSpring: require("spring").withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__closure = obj2;
  fn.__workletHash = 13722943567118;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children: items2 };
  items = [tmp.footer, animatedStyle];
  let tmp6Result = null;
  View = ReanimatedRexportDefault.View;
  const tmp4 = _require;
  if (null != preview) {
    const obj4 = { children: items1 };
    items1 = [preview, ];
    const obj5 = { style: tmp.footerSeparator };
    items1[1] = closure_4(View, obj5);
    tmp6Result = closure_6(closure_5, obj4);
  }
  items2 = [tmp6Result, ];
  const obj7 = { style: tmp.chatRow, children: items3 };
  items3 = [chatInput, sendButton];
  const obj6 = { style: tmp.warningWrapper, children: items4 };
  items4 = [closure_6(View, obj7), ];
  let tmp12 = null != warningText;
  const tmp11 = View;
  if (tmp12) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp12 = closure_4(tmp4(4886).Text, obj8);
  }
  items4[1] = tmp12;
  items2[1] = closure_6(tmp11, obj6);
  return closure_6(View, obj3);
});
const result = size.fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default tmp5;