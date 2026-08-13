// discord_app/design/components/Input/native/InputFieldContainer.native.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../tokens/native/useToken.tsx";
import { InputHeights } from "InputTypes.native.tsx";

let Platform;
let c3;
let c4;
let c5;
let closure_6;
let require = arg1;
function useInputStyles(size) {
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  let flag = size.isRound;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = size.isDisabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = size.grow;
  if (flag3 === undefined) {
    flag3 = true;
  }
  if ("sm" === str) {
    let INPUT_FIELD_RADIUS_LG = Themes.modules.mobile.INPUT_FIELD_RADIUS_SM;
  } else if ("md" === str) {
    INPUT_FIELD_RADIUS_LG = Themes.modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_RADIUS_LG = Themes.modules.mobile.INPUT_FIELD_RADIUS_LG;
  }
  let token = map.useToken(INPUT_FIELD_RADIUS_LG);
  let tmpResult = tmp(4065);
  if (flag) {
    token = tmpResult.useToken(Themes.modules.mobile.INPUT_FIELD_ROUND_RADIUS);
  }
  tmpResult = tmp(4065);
  if ("sm" === str) {
    let INPUT_FIELD_TEXT_STYLE_LG = tmp7(712).modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
  } else if ("md" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = tmp7(712).modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = tmp7(712).modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
  }
  const token1 = tmpResult.useToken(INPUT_FIELD_TEXT_STYLE_LG);
  const obj = map;
  return callback3(str, flag2, flag3, token, token1, map.useToken(Themes.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
}
({ Platform, StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
let closure_9 = createCacheKey.createStyles(() => {
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
    str2 = "text-md/medium";
  }
  let obj = { sm: InputHeights.InputHeights.SM, md: InputHeights.InputHeights.MD, lg: InputHeights.InputHeights.LG };
  obj = { sm: Themes.space.PX_8, md: Themes.space.PX_12, lg: Themes.space.PX_16 };
  obj = { sm: Themes.space.PX_4, md: Themes.space.PX_8, lg: Themes.space.PX_8 };
  const obj1 = { sm: null, md: null, lg: null };
  obj1[0] = { paddingHorizontal: Themes.space.PX_8, paddingVertical: Themes.space.PX_4 };
  const obj2 = { paddingHorizontal: Themes.space.PX_8, paddingVertical: Themes.space.PX_4 };
  const tmp = require;
  obj1[1] = { paddingHorizontal: Themes.space.PX_12, paddingVertical: Themes.space.PX_8 };
  const obj3 = { paddingHorizontal: Themes.space.PX_12, paddingVertical: Themes.space.PX_8 };
  obj1[2] = { paddingHorizontal: Themes.space.PX_16, paddingVertical: Themes.space.PX_8 + 2 };
  let num2 = 1;
  if (flag) {
    num2 = 0.5;
  }
  const obj5 = { opacity: num2, pointerEvents: null, flexDirection: "row", flexGrow: null, alignItems: "center" };
  let str3 = "auto";
  if (flag) {
    str3 = "none";
  }
  obj5[1] = str3;
  let num3 = 0;
  if (flag2) {
    num3 = 1;
  }
  const obj6 = { container: obj5, background: null, placeholderText: null, minHeight: null, radius: null, padding: null, text: null, leadingText: null, trailingText: null, leadingIcon: null, trailingIcon: null, splitBorder: null };
  obj5[3] = num3;
  const obj4 = { paddingHorizontal: Themes.space.PX_16, paddingVertical: Themes.space.PX_8 + 2 };
  obj6[1] = { backgroundColor: Themes.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: Themes.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: Themes.colors.INPUT_BORDER_DEFAULT };
  const obj7 = { backgroundColor: Themes.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: Themes.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: Themes.colors.INPUT_BORDER_DEFAULT };
  obj6[2] = { color: Themes.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj6[3] = { minHeight: obj[str] };
  obj6[4] = { borderRadius: num };
  obj6[5] = obj1[str];
  const obj9 = {};
  const merged = Object.assign(tmp(4338).TextStyleSheet[str2]);
  obj9.lineHeight = undefined;
  const colors = tmp3(712).colors;
  obj9.color = flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT;
  obj9.flexGrow = 1;
  obj6[6] = obj9;
  const obj10 = { position: "absolute", left: 0 };
  const merged1 = Object.assign(tmp6);
  obj10.paddingEnd = obj[str];
  obj10.zIndex = 1;
  obj10.pointerEvents = "none";
  obj6[7] = obj10;
  const obj11 = { position: "absolute", right: 0 };
  const merged2 = Object.assign(tmp6);
  obj11.paddingStart = obj[str];
  obj11.zIndex = 1;
  obj11.pointerEvents = "none";
  obj6[8] = obj11;
  obj6[9] = { position: "absolute", left: 0, top: 0, bottom: 0, paddingTop: obj[str], paddingBottom: obj[str], paddingStart: obj[str], paddingEnd: obj[str], justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  obj6[10] = { position: "absolute", right: 0, top: 0, bottom: 0, paddingTop: obj[str], paddingBottom: obj[str], paddingStart: obj[str], paddingEnd: obj[str], justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  const obj12 = {};
  const merged3 = Object.assign(tmp6);
  obj12.borderRightWidth = 1;
  obj12.borderRightColor = Themes.colors.BORDER_STRONG;
  obj6[11] = obj12;
  return obj6;
});
createCacheKey = { error: require("Themes").colors.INPUT_BORDER_ERROR_DEFAULT, default: "transparent", focused: require("Themes").colors.INPUT_BORDER_ACTIVE };
createCacheKey = createCacheKey.createStyleProperties(createCacheKey);
let closure_11 = { code: "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export { useInputStyles };
export const InputFieldContainer = function InputFieldContainer(isFocused) {
  const tmp = createCacheKey();
  const require = tmp;
  isFocused = isFocused.isFocused;
  const importDefault = tmp2;
  const status = isFocused.status;
  let str = "default";
  if (undefined !== status) {
    str = status;
  }
  let obj = { size: isFocused.size, isRound: isFocused.isRound, isDisabled: isFocused.isDisabled, grow: isFocused.grow, hasLeadingIcon: null != isFocused.leadingIcon };
  const tmp3 = useInputStyles(obj);
  const fn = function s() {
    if ("default" !== str) {
      str = tmp.error;
      let num = 2;
    } else {
      str = "transparent";
      num = 0;
      if (closure_1) {
        str = tmp.focused;
        num = 1;
      }
    }
    const obj = { borderWidth: null, borderColor: null, left: null, right: null, top: null, bottom: null };
    obj[0] = tmp(str[9]).withSpring(num, outer1_7);
    const obj2 = tmp(str[9]);
    obj[1] = tmp(str[9]).withSpring(str, outer1_7);
    obj[2] = -num;
    obj[3] = -num;
    obj[4] = -num;
    obj[5] = -num;
    return obj;
  };
  obj = { status: str, ringColors: tmp, isFocused: tmp2, withSpring: require(str[9]).withSpring, RING_SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 1037178877006;
  fn.__initData = closure_11;
  obj = { style: items, children: null };
  items = [, , , ];
  ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp3);
  const animatedStyle = require(str[8]).useAnimatedStyle(fn);
  const items1 = [absoluteFill.absoluteFill, tmp3.radius, animatedStyle];
  const items2 = [callback(importDefault(str[8]).View, { style: items1 }), isFocused.children];
  obj[1] = items2;
  return callback2(closure_4, obj);
};