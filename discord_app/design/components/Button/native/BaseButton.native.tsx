// === Module 5068: Button/BaseButton ===

// Module 5068 (Button/BaseButton)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import native from "native" /* 4348 */;
import ButtonHooks from "ButtonHooks" /* 5066 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4374 */;

require = fn;
let closure_2 = ["style"];
get_ActivityIndicator = fn(17);
({ Pressable, TouchableOpacity } = get_ActivityIndicator);
const IOS_POINTER_STYLE = fn(5069).IOS_POINTER_STYLE;
const ThemeTypes = fn(1074).ThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_8 = createStyles.createStyles({ disabled: { opacity: 0.5 } });
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Pressable);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(TouchableOpacity);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = noop.forwardRef((disabled, ref) => {
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
  disabled = undefined;
  let buttonAnimationProps;
  ({ onLongPress, accessibilityValue, accessibilityActions, onAccessibilityAction, pointerEvents } = disabled);
  let tmp2 = flag;
  if (flag) {
    tmp2 = null == onPressDisabled;
  }
  disabled = tmp2;
  if (flag) {
    onPress = onPressDisabled;
  }
  const tmp = closure_8();
  const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  if (null == pressed) {
    const obj2 = { animatedScaleStyles: "Array", buttonAnimationProps: 0 };
    const obj3 = { onLayout, onPressIn, onPressOut };
    obj2.buttonAnimationProps = obj3;
    let obj4 = obj2;
  } else {
    obj4 = { animatedScaleStyles: buttonPressAnimationProps.style, buttonAnimationProps: tmp7 };
  }
  buttonAnimationProps = obj4.buttonAnimationProps;
  const items = [accessibilityState, tmp2, flag2];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityState);
    obj.disabled = disabled;
    obj.busy = flag2;
    return obj;
  }, items);
  native;
  if ("primary-overlay" === variant) {
    let DARK = ThemeTypes.LIGHT;
  } else if ("secondary-overlay" === variant) {
    if (tmp10 === ThemeTypes.LIGHT) {
      DARK = ThemeTypes.DARK;
    }
  }
  let tmp12 = children;
  if (null != DARK) {
    const obj5 = { theme: DARK, children };
    tmp12 = jsx(native.ThemeContextProvider, { theme: DARK, children });
  }
  const items1 = [disabled.style, , , ];
  if (flag) {
    flag = tmp.disabled;
  }
  items1[1] = flag;
  items1[2] = obj4.animatedScaleStyles;
  items1[3] = IOS_POINTER_STYLE;
  if ("none" !== accessibilityRole) {
    const obj6 = {};
    let merged = Object.assign(buttonAnimationProps);
    obj6.ref = ref;
    obj6.accessible = accessible;
    if (accessibilityRole == null) {
      accessibilityRole = "button";
    }
    obj6.accessibilityRole = accessibilityRole;
    obj6.accessibilityLabel = accessibilityLabel;
    obj6.accessibilityHint = accessibilityHint;
    obj6.accessibilityValue = accessibilityValue;
    obj6.accessibilityState = memo;
    obj6.accessibilityActions = accessibilityActions;
    obj6.onAccessibilityAction = onAccessibilityAction;
    obj6.accessibilityElementsHidden = accessibilityElementsHidden;
    obj6.importantForAccessibility = importantForAccessibility;
    obj6.pointerEvents = pointerEvents;
    obj6.style = items1;
    obj6.onPress = onPress;
    obj6.onLongPress = onLongPress;
    obj6.disabled = tmp2;
    obj6.hitSlop = hitSlop;
    obj6.children = tmp12;
    return <closure_9 />;
  } else {
    let str3 = "";
    if (!accessibilityElementsHidden) {
      const items2 = [accessibilityLabel, accessibilityHint];
      const found = items2.filter(GlobalUtils.isNotNullish);
      str3 = found.join(", ");
    }
    const obj7 = {};
    const merged1 = Object.assign(buttonAnimationProps);
    obj7.ref = ref;
    let isAndroidResult = accessible;
    if (accessible == null) {
      isAndroidResult = PlatformUtils.isAndroid();
      const tmp4Result2 = PlatformUtils;
    }
    obj7.accessible = !isAndroidResult;
    obj7.accessibilityRole = "none";
    obj7.accessibilityLabel = str3;
    obj7.accessibilityElementsHidden = accessibilityElementsHidden;
    obj7.activeOpacity = 1;
    obj7.importantForAccessibility = importantForAccessibility;
    obj7.style = items1;
    obj7.onPress = onPress;
    obj7.onPressIn = function onPressIn(arg0) {
      const onPressIn = buttonAnimationProps.onPressIn;
      if (onPressIn != null) {
        onPressIn(arg0);
      }
    };
    obj7.onPressOut = function onPressOut(arg0) {
      const onPressOut = buttonAnimationProps.onPressOut;
      if (onPressOut != null) {
        onPressOut(arg0);
      }
    };
    obj7.hitSlop = hitSlop;
    obj7.children = tmp12;
    return <closure_10 />;
  }
});