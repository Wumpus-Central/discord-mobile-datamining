// === Module 7168: InputFieldContainer ===

// Module 7168 (InputFieldContainer)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5724 */;
import Text_Text from "Text/Text" /* 5751 */;
import spring_spring from "spring/spring" /* 5761 */;
import InputTypes from "InputTypes" /* 7169 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
function useInputStyles(size) {
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  let flag = size.round;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = size.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = size.grow;
  if (flag3 === undefined) {
    flag3 = true;
  }
  if ("sm" === str) {
    let INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_SM;
  } else if ("md" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
  }
  let token = useToken.useToken(INPUT_FIELD_RADIUS_LG);
  if (flag) {
    token = tmpResult.useToken(nativeDefault.modules.mobile.INPUT_FIELD_ROUND_RADIUS);
  }
  tmpResult = useToken;
  if ("sm" === str) {
    let INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
  } else if ("md" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
  }
  const token1 = useToken.useToken(INPUT_FIELD_TEXT_STYLE_LG);
  const tmpResult3 = useToken;
  return closure_9(str, flag2, flag3, token, token1, useToken.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
}
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
let createStyles = fn(5140);
let closure_9 = createStyles.createStyles(() => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let num = arg3;
  if (arg3 === undefined) {
    num = 12;
  }
  let str2 = arg4;
  if (arg4 === undefined) {
    str2 = "body-md/medium";
  }
  const obj = { sm: InputTypes.InputHeights.SM, md: InputTypes.InputHeights.MD, lg: InputTypes.InputHeights.LG };
  const tmp4 = { sm: nativeDefault.space.PX_8, md: nativeDefault.space.PX_12, lg: nativeDefault.space.PX_16 }[str];
  const obj2 = { sm: nativeDefault.space.PX_8, md: nativeDefault.space.PX_12, lg: nativeDefault.space.PX_16 };
  const tmp5 = { sm: nativeDefault.space.PX_4, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_8 }[str];
  const obj4 = { sm: null, md: null, lg: null };
  const obj3 = { sm: nativeDefault.space.PX_4, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_8 };
  obj4.sm = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
  const obj5 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
  obj4.md = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
  const obj6 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
  obj4.lg = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 };
  let num2 = 1;
  if (flag) {
    num2 = 0.5;
  }
  const obj8 = { opacity: num2, pointerEvents: null, flexDirection: "row", flexGrow: null, alignItems: "center" };
  let str3 = "auto";
  if (flag) {
    str3 = "none";
  }
  obj8.pointerEvents = str3;
  let num3 = 0;
  if (flag2) {
    num3 = 1;
  }
  const obj9 = { container: obj8, background: null, placeholderText: null, minHeight: null, radius: null, padding: null, text: null, leadingText: null, trailingText: null, leadingIcon: null, trailingIcon: null, splitBorder: null };
  obj8.flexGrow = num3;
  const obj7 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 };
  obj9.background = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
  const obj10 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
  obj9.placeholderText = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj9.minHeight = { minHeight: obj[str] };
  obj9.radius = { borderRadius: num };
  obj9.padding = obj4[str];
  const obj12 = {};
  const merged = Object.assign(Text_Text.TextStyleSheet[str2]);
  obj12.lineHeight = undefined;
  const colors = nativeDefault.colors;
  obj12.color = flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT;
  obj12.flexGrow = 1;
  obj9.text = obj12;
  const obj13 = { position: "absolute", left: 0 };
  const merged1 = Object.assign(tmp6);
  obj13.paddingEnd = tmp5;
  obj13.zIndex = 1;
  obj13.pointerEvents = "none";
  obj9.leadingText = obj13;
  const obj14 = { position: "absolute", right: 0 };
  const merged2 = Object.assign(tmp6);
  obj14.paddingStart = tmp5;
  obj14.zIndex = 1;
  obj14.pointerEvents = "none";
  obj9.trailingText = obj14;
  obj9.leadingIcon = { position: "absolute", left: 0, top: 0, bottom: 0, paddingTop: tmp4, paddingBottom: tmp4, paddingStart: tmp4, paddingEnd: tmp5, justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  obj9.trailingIcon = { position: "absolute", right: 0, top: 0, bottom: 0, paddingTop: tmp4, paddingBottom: tmp4, paddingStart: tmp5, paddingEnd: tmp4, justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  const obj15 = {};
  const merged3 = Object.assign(tmp6);
  obj15.borderRightWidth = 1;
  obj15.borderRightColor = nativeDefault.colors.BORDER_STRONG;
  obj9.splitBorder = obj15;
  return obj9;
});
createStyles = fn(5140);
let closure_10 = createStyles.createStyleProperties({ error: nativeDefault.colors.INPUT_BORDER_ERROR_DEFAULT, default: "transparent", focused: nativeDefault.colors.INPUT_BORDER_ACTIVE });
let closure_11 = { code: "(function InputFieldContainerNativeTsx1(){let[status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG]=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export { useInputStyles };
export function InputFieldContainer(isFocused) {
  isFocused = isFocused.isFocused;
  let tmp2 = undefined !== isFocused;
  if (tmp2) {
    tmp2 = isFocused;
  }
  const status = isFocused.status;
  let str = "default";
  if (undefined !== status) {
    str = status;
  }
  const round = isFocused.round;
  let tmp3 = undefined !== round;
  ({ children, size, grow, leadingIcon } = isFocused);
  if (tmp3) {
    tmp3 = round;
  }
  const disabled = isFocused.disabled;
  const obj = { size, round: tmp3, disabled: null, grow: null, hasLeadingIcon: null };
  let tmp5 = undefined !== disabled;
  if (tmp5) {
    tmp5 = disabled;
  }
  obj.disabled = tmp5;
  obj.grow = grow;
  obj.hasLeadingIcon = null != leadingIcon;
  const tmp4Result = useInputStyles(obj);
  const tmp = closure_10();
  items = [closure_11, str, tmp, tmp2, spring_spring.withSpring, closure_7];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  class InputFieldContainerNativeTsx1 {
    constructor() {
      if ("default" !== closure_0) {
        tmp3 = closure_1;
        str = closure_1.error;
        num = 2;
      } else {
        tmp = closure_2;
        str = "transparent";
        num = 0;
        if (closure_2) {
          tmp2 = closure_1;
          str = closure_1.focused;
          num = 1;
        }
      }
      rect = { borderWidth: closure_3(num, closure_4), borderColor: closure_3(str, closure_4), left: null, right: null, top: null, bottom: null };
      tmp4 = -num;
      rect.left = tmp4;
      rect.right = tmp4;
      rect.top = tmp4;
      rect.bottom = tmp4;
      return rect;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13];
  InputFieldContainerNativeTsx1.__closure = items1;
  InputFieldContainerNativeTsx1.__workletHash = 14166610550327;
  InputFieldContainerNativeTsx1.__initData = tmp8;
  const obj3 = { style: null, children: null };
  const items2 = [, , , ];
  ({ container: arr3[0], background: arr3[1], radius: arr3[2], minHeight: arr3[3] } = tmp4Result);
  obj3.style = items2;
  const animatedStyle = _mod1652.useAnimatedStyle(InputFieldContainerNativeTsx1);
  const obj4 = { style: null };
  const items3 = [React3.absoluteFill, tmp4Result.radius, animatedStyle];
  obj4.style = items3;
  const items4 = [hasOwnProperty(_modDef1652.View, obj4), children];
  obj3.children = items4;
  return timestampProducer(React4, obj3);
}