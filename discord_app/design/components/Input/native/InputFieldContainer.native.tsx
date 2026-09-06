// discord_app/design/components/Input/native/InputFieldContainer.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import InputTypes from "InputTypes.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
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
    let INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_SM;
  } else if ("md" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
  }
  let token = useToken.useToken(INPUT_FIELD_RADIUS_LG);
  let tmpResult = useToken;
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
  const token1 = tmpResult.useToken(INPUT_FIELD_TEXT_STYLE_LG);
  return closure_9(
    str,
    flag2,
    flag3,
    token,
    token1,
    useToken.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS),
  );
}
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const RING_SPRING_CONFIG = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
let createStyles = fn(4560);
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
    str2 = "text-md/medium";
  }
  let obj = { sm: InputTypes.InputHeights.SM, md: InputTypes.InputHeights.MD, lg: InputTypes.InputHeights.LG };
  obj = { sm: nativeDefault.space.PX_8, md: nativeDefault.space.PX_12, lg: nativeDefault.space.PX_16 };
  obj = { sm: nativeDefault.space.PX_4, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_8 };
  const obj1 = {
    sm: { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 },
    md: null,
    lg: null,
  };
  const obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
  obj1.md = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
  const obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
  obj1.lg = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 };
  let num2 = 1;
  if (flag) {
    num2 = 0.5;
  }
  const obj5 = { opacity: num2, pointerEvents: null, flexDirection: "row", flexGrow: null, alignItems: "center" };
  let str3 = "auto";
  if (flag) {
    str3 = "none";
  }
  obj5.pointerEvents = str3;
  let num3 = 0;
  if (flag2) {
    num3 = 1;
  }
  const obj6 = {
    container: obj5,
    background: null,
    placeholderText: null,
    minHeight: null,
    radius: null,
    padding: null,
    text: null,
    leadingText: null,
    trailingText: null,
    leadingIcon: null,
    trailingIcon: null,
    splitBorder: null,
  };
  obj5.flexGrow = num3;
  const obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 };
  obj6.background = {
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH,
    borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT,
  };
  const obj7 = {
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH,
    borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT,
  };
  obj6.placeholderText = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj6.minHeight = { minHeight: obj[str] };
  obj6.radius = { borderRadius: num };
  obj6.padding = obj1[str];
  const obj9 = {};
  const merged = Object.assign(Text_Text.TextStyleSheet[str2]);
  obj9.lineHeight = undefined;
  const colors = nativeDefault.colors;
  obj9.color = flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT;
  obj9.flexGrow = 1;
  obj6.text = obj9;
  const obj10 = { position: "absolute", left: 0 };
  const merged1 = Object.assign(tmp6);
  obj10.paddingEnd = obj[str];
  obj10.zIndex = 1;
  obj10.pointerEvents = "none";
  obj6.leadingText = obj10;
  const obj11 = { position: "absolute", right: 0 };
  const merged2 = Object.assign(tmp6);
  obj11.paddingStart = obj[str];
  obj11.zIndex = 1;
  obj11.pointerEvents = "none";
  obj6.trailingText = obj11;
  obj6.leadingIcon = {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    paddingTop: obj[str],
    paddingBottom: obj[str],
    paddingStart: obj[str],
    paddingEnd: obj[str],
    justifyContent: "center",
    zIndex: 1,
    pointerEvents: "none",
  };
  obj6.trailingIcon = {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    paddingTop: obj[str],
    paddingBottom: obj[str],
    paddingStart: obj[str],
    paddingEnd: obj[str],
    justifyContent: "center",
    zIndex: 1,
    pointerEvents: "none",
  };
  const obj12 = {};
  const merged3 = Object.assign(tmp6);
  obj12.borderRightWidth = 1;
  obj12.borderRightColor = nativeDefault.colors.BORDER_STRONG;
  obj6.splitBorder = obj12;
  return obj6;
});
fn(4560);
createStyles = {
  error: nativeDefault.colors.INPUT_BORDER_ERROR_DEFAULT,
  default: "transparent",
  focused: nativeDefault.colors.INPUT_BORDER_ACTIVE,
};
let closure_10 = createStyles.createStyleProperties(createStyles);
const __initData = {
  code: "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export { useInputStyles };
export const InputFieldContainer = function InputFieldContainer(isFocused) {
  const tmp = closure_10();
  _require = tmp;
  isFocused = isFocused.isFocused;
  importDefault = tmp2;
  const status = isFocused.status;
  let str = "default";
  if (undefined !== status) {
    str = status;
  }
  let obj = {
    size: isFocused.size,
    isRound: isFocused.isRound,
    isDisabled: isFocused.isDisabled,
    grow: isFocused.grow,
    hasLeadingIcon: null != isFocused.leadingIcon,
  };
  const tmp3 = useInputStyles(obj);
  let obj1 = require("ReanimatedRexport");
  const fn = function s() {
    if ("default" !== str) {
      str = closure_0.error;
      let num = 2;
    } else {
      str = "transparent";
      num = 0;
      if (closure_1) {
        str = closure_0.focused;
        num = 1;
      }
    }
    const rect = {
      borderWidth: spring.withSpring(num, closure_7),
      borderColor: null,
      left: null,
      right: null,
      top: null,
      bottom: null,
    };
    rect.borderColor = spring.withSpring(str, closure_7);
    rect.left = -num;
    rect.right = -num;
    rect.top = -num;
    rect.bottom = -num;
    return rect;
  };
  obj = { status: str, ringColors: tmp, isFocused: tmp2, withSpring: require("spring").withSpring, RING_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 1037178877006;
  fn.__initData = __initData;
  obj = { style: null, children: null };
  const items = [, , ,];
  ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp3);
  obj.style = items;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj1 = { style: null };
  const items1 = [absoluteFill.absoluteFill, tmp3.radius, animatedStyle];
  obj1.style = items1;
  const items2 = [closure_5(require("ReanimatedRexport").View, obj1), isFocused.children];
  obj.children = items2;
  return closure_6(closure_4, obj);
};
