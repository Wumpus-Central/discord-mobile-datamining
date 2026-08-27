// === Module 4888: BaseButton ===

// Module 4888 (BaseButton)
import closure_3 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE" /* 4889 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importDefaultResult from "module_4185" /* 4185 */;

const require = arg1;
let closure_2 = ["style"];
let c4 = importAllResult;
({ Pressable, TouchableOpacity } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ disabled: { opacity: 0.5 } });
let closure_8 = importDefaultResult.createAnimatedComponent(Pressable);
let closure_9 = importDefaultResult.createAnimatedComponent(TouchableOpacity);
const importDefaultResult1 = importDefaultResult;
const forwardRefResult = importAllResult.forwardRef((disabled, ref) => {
  ({ children, variant } = disabled);
  if (variant === undefined) {
    variant = "primary";
  }
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = disabled.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ pressed, onPress, onPressDisabled, onPressIn, onPressOut, onLayout, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityState } = disabled);
  ({ accessibilityElementsHidden, importantForAccessibility, hitSlop, scaleAmountInPx } = disabled);
  closure_2 = undefined;
  let buttonAnimationProps;
  ({ onLongPress, accessibilityValue, accessibilityActions, onAccessibilityAction, pointerEvents } = disabled);
  let tmp2 = flag;
  if (flag) {
    tmp2 = null == onPressDisabled;
  }
  closure_2 = tmp2;
  if (flag) {
    onPress = onPressDisabled;
  }
  let obj = flag2(accessibilityState[7]);
  const buttonPressAnimationProps = obj.useButtonPressAnimationProps(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  if (null == pressed) {
    obj = { animatedScaleStyles: "Array", buttonAnimationProps: 0 };
    obj = { onLayout: null, onPressIn: null, onPressOut: null };
    obj[0] = onLayout;
    obj[1] = onPressIn;
    obj[2] = onPressOut;
    obj[1] = obj;
    obj1 = obj;
  } else {
    obj1 = { animatedScaleStyles: null, buttonAnimationProps: null };
    obj1[0] = buttonPressAnimationProps.style;
    obj1[1] = tmp7;
  }
  buttonAnimationProps = obj1.buttonAnimationProps;
  const items = [accessibilityState, tmp2, flag2];
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityState);
    obj.disabled = closure_2;
    obj.busy = flag2;
    return obj;
  }, items);
  let tmp4Result = tmp4(tmp5[5]);
  let str = "light";
  if ("primary-overlay" !== variant) {
    let str3;
    if ("secondary-overlay" === variant) {
      if ("light" === tmp10) {
        str3 = "dark";
      }
    }
    str = str3;
  }
  let tmp11 = children;
  if (null != str) {
    const obj2 = { theme: null, children: null };
    obj2[0] = str;
    obj2[1] = children;
    tmp11 = jsx(tmp4(tmp5[5]).ThemeContextProvider, { theme: null, children: null });
  }
  const items1 = [disabled.style, , , ];
  if (flag) {
    flag = tmp.disabled;
  }
  items1[1] = flag;
  items1[2] = obj1.animatedScaleStyles;
  items1[3] = IOS_POINTER_STYLE;
  if ("none" !== accessibilityRole) {
    const obj3 = {};
    let merged = Object.assign(buttonAnimationProps);
    obj3.ref = ref;
    obj3.accessible = accessible;
    if (accessibilityRole == null) {
      accessibilityRole = "button";
    }
    obj3.accessibilityRole = accessibilityRole;
    obj3.accessibilityLabel = accessibilityLabel;
    obj3.accessibilityHint = accessibilityHint;
    obj3.accessibilityValue = accessibilityValue;
    obj3.accessibilityState = memo;
    obj3.accessibilityActions = accessibilityActions;
    obj3.onAccessibilityAction = onAccessibilityAction;
    obj3.accessibilityElementsHidden = accessibilityElementsHidden;
    obj3.importantForAccessibility = importantForAccessibility;
    obj3.pointerEvents = pointerEvents;
    obj3.style = items1;
    obj3.onPress = onPress;
    obj3.onLongPress = onLongPress;
    obj3.disabled = tmp2;
    obj3.hitSlop = hitSlop;
    obj3.children = tmp11;
    return <closure_8 />;
  } else {
    let str5 = "";
    if (!accessibilityElementsHidden) {
      const items2 = [accessibilityLabel, accessibilityHint];
      const found = items2.filter(tmp4(tmp5[9]).isNotNullish);
      str5 = found.join(", ");
    }
    const obj4 = {};
    const merged1 = Object.assign(buttonAnimationProps);
    obj4.ref = ref;
    let isAndroidResult = accessible;
    if (accessible == null) {
      tmp4Result = tmp4(tmp5[10]);
      isAndroidResult = tmp4Result.isAndroid();
    }
    obj4.accessible = !isAndroidResult;
    obj4.accessibilityRole = "none";
    obj4.accessibilityLabel = str5;
    obj4.accessibilityElementsHidden = accessibilityElementsHidden;
    obj4.activeOpacity = 1;
    obj4.importantForAccessibility = importantForAccessibility;
    obj4.style = items1;
    obj4.onPress = onPress;
    obj4.onPressIn = function onPressIn(arg0) {
      const onPressIn = buttonAnimationProps.onPressIn;
      if (onPressIn != null) {
        onPressIn(arg0);
      }
    };
    obj4.onPressOut = function onPressOut(arg0) {
      const onPressOut = buttonAnimationProps.onPressOut;
      if (onPressOut != null) {
        onPressOut(arg0);
      }
    };
    obj4.hitSlop = hitSlop;
    obj4.children = tmp11;
    return <closure_9 />;
  }
  tmp = callback();
});
const result = require("set").fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = forwardRefResult;