// discord_app/design/components/Button/native/BaseButton.native.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4054";
import importDefaultResult1 from "module_4054";

let Pressable;
let TouchableOpacity;
const require = arg1;
let closure_3 = ["style"];
let c5 = importAllResult;
({ Pressable, TouchableOpacity } = get_ActivityIndicator);
let closure_8 = createCacheKey.createStyles((arg0) => {
  let prop = {};
  if ("primary-overlay" === arg0) {
    prop = importDefault(712).shadows.SHADOW_BUTTON_OVERLAY;
  }
  let obj = { button: null, disabled: null };
  obj = {};
  const merged = Object.assign(prop);
  obj[0] = obj;
  obj[1] = { opacity: 0.5 };
  return obj;
});
let closure_9 = require("module_4054").createAnimatedComponent(Pressable);
let closure_10 = require("module_4054").createAnimatedComponent(TouchableOpacity);
const forwardRefResult = importAllResult.forwardRef((disabled, ref) => {
  let accessibilityActions;
  let accessibilityElementsHidden;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let accessibilityValue;
  let accessible;
  let children;
  let hitSlop;
  let importantForAccessibility;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let onPressDisabled;
  let onPressIn;
  let onPressOut;
  let pointerEvents;
  let pressed;
  let scaleAmountInPx;
  let variant;
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
  let dependencyMap;
  let buttonAnimationProps;
  ({ onLongPress, accessibilityValue, accessibilityActions, onAccessibilityAction, pointerEvents } = disabled);
  const tmp = callback(variant);
  let tmp2 = flag;
  if (flag) {
    tmp2 = null == onPressDisabled;
  }
  dependencyMap = tmp2;
  if (flag) {
    onPress = onPressDisabled;
  }
  let obj = flag2(4609);
  const buttonPressAnimationProps = obj.useButtonPressAnimationProps(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  if (null == pressed) {
    obj = { animatedScaleStyles: "Array", buttonAnimationProps: 0 };
    obj = { onLayout: null, onPressIn: null, onPressOut: null };
    obj[0] = onLayout;
    obj[1] = onPressIn;
    obj[2] = onPressOut;
    obj[1] = obj;
    let obj1 = obj;
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
    obj.disabled = c2;
    obj.busy = flag2;
    return obj;
  }, items);
  let tmp4Result = tmp4(3905);
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
    tmp11 = jsx(tmp4(3905).ThemeContextProvider, { theme: null, children: null });
  }
  const items1 = [tmp.button, disabled.style, , , ];
  if (flag) {
    flag = tmp.disabled;
  }
  items1[2] = flag;
  items1[3] = obj1.animatedScaleStyles;
  items1[4] = IOS_POINTER_STYLE;
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
    return <closure_9 />;
  } else {
    let str5 = "";
    if (!accessibilityElementsHidden) {
      const items2 = [accessibilityLabel, accessibilityHint];
      const found = items2.filter(tmp4(1351).isNotNullish);
      str5 = found.join(", ");
    }
    const obj4 = {};
    const merged1 = Object.assign(buttonAnimationProps);
    obj4.ref = ref;
    let isAndroidResult = accessible;
    if (accessible == null) {
      tmp4Result = tmp4(500);
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
    return <closure_10 />;
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = forwardRefResult;