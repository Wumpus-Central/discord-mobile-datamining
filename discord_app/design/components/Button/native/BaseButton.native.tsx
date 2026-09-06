// === Module 4983: Button/BaseButton ===

// Module 4983 (Button/BaseButton)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import native from "native" /* 4271 */;
import ButtonHooks from "ButtonHooks" /* 4981 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
let closure_2 = ["style"];
get_ActivityIndicator = fn(17);
({ Pressable, TouchableOpacity } = get_ActivityIndicator);
const IOS_POINTER_STYLE = fn(4984).IOS_POINTER_STYLE;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ disabled: { opacity: 0.5 } });
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_9 = ReanimatedRexport.createAnimatedComponent(TouchableOpacity);
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
  let obj = ButtonHooks;
  const buttonPressAnimationProps = obj.useButtonPressAnimationProps(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  if (null == pressed) {
    obj = { animatedScaleStyles: "Array", buttonAnimationProps: 0 };
    obj = { onLayout, onPressIn, onPressOut };
    obj.buttonAnimationProps = obj;
    let obj1 = obj;
  } else {
    obj1 = { animatedScaleStyles: buttonPressAnimationProps.style, buttonAnimationProps: tmp7 };
  }
  buttonAnimationProps = obj1.buttonAnimationProps;
  const items = [accessibilityState, tmp2, flag2];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityState);
    obj.disabled = disabled;
    obj.busy = flag2;
    return obj;
  }, items);
  let tmp4Result = native;
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
    const obj2 = { theme: str, children };
    tmp11 = jsx(native.ThemeContextProvider, { theme: str, children });
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
      const found = items2.filter(GlobalUtils.isNotNullish);
      str5 = found.join(", ");
    }
    const obj4 = {};
    const merged1 = Object.assign(buttonAnimationProps);
    obj4.ref = ref;
    let isAndroidResult = accessible;
    if (accessible == null) {
      tmp4Result = PlatformUtils;
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
  tmp = closure_7();
});