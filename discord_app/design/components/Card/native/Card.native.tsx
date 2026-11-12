// === Module 7381: Card ===

// Module 7381 (Card)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5839 */;
import spring_spring from "spring/spring" /* 5876 */;
import springPresets from "springPresets" /* 5877 */;
import CardTokens from "CardTokens" /* 7382 */;
import AnimatedPressableHighlight from "AnimatedPressableHighlight" /* 7383 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const module_1652 = _mod1652;

require = fn;
class Card {
  constructor(arg0) {
    flag = global.start;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.end;
    if (flag2 === undefined) {
      flag2 = true;
    }
    str = global.shadow;
    if (str === undefined) {
      str = "none";
    }
    str2 = global.border;
    if (str2 === undefined) {
      str2 = "faint";
    }
    str3 = global.variant;
    if (str3 === undefined) {
      str3 = "primary";
    }
    merged = Object.assign(global, Object.assign({ start: 0, end: 0, shadow: 0, border: 0, variant: 0 }));
    obj = closure_0(closure_2[8]);
    radius = merged.radius;
    if (radius == null) {
      radius = obj.useToken(closure_1(closure_2[5]).modules.mobile.CARD_DEFAULT_RADIUS);
    }
    tmp2 = closure_10(flag, flag2, str3, str, str2, radius);
    items = [, , ];
    ({ spacing: arr[0], card: arr[1] } = tmp2);
    items[2] = merged.style;
    if ("onPress" in merged) {
      if (null != merged.onPress) {
        str4 = merged.accessibilityRole;
        tmp4 = closure_4;
        tmp5 = closure_3;
        tmp6 = closure_4(merged, closure_3);
        tmp7 = jsx;
        tmp8 = PressableCard;
        if (str4 == null) {
          str4 = "button";
        }
        obj1 = { accessibilityRole: null };
        obj1.accessibilityRole = str4;
        tmp9 = obj1;
        tmp10 = tmp6;
        merged1 = Object.assign(tmp6);
        obj1.start = flag;
        obj1.end = flag2;
        obj1.style = items;
        obj1.variant = str3;
        obj1.radius = radius;
        return tmp7(tmp8, obj1);
      }
    }
    obj4 = {};
    merged2 = Object.assign(merged);
    obj4.style = items;
    return jsx(View, obj4);
  }
}
function PressableCard(start) {
  if (obj.isAndroid()) {
    const start2 = start.start;
    c0 = start2;
    const end2 = start.end;
    c1 = end2;
    const radius2 = start.radius;
    c2 = radius2;
    const merged = Object.assign(start, Object.assign({ children: 0, start: 0, end: 0, radius: 0 }));
    items = [start2, end2, radius2];
    const memo = noop.useMemo(() => {
      if (c0) {
        let cornerRadius = c2;
      } else {
        cornerRadius = 0;
      }
      return { cornerRadius };
    }, items);
    const obj3 = { androidRippleConfig: memo };
    const merged1 = Object.assign(merged);
    obj3.children = start.children;
    let tmp27 = jsx(AnimatedPressableHighlight.AnimatedPressableHighlight, { androidRippleConfig: memo });
  } else {
    const onPressIn = start.onPressIn;
    const onPressOut = start.onPressOut;
    ({ radius, start, end } = start);
    ({ children, style, variant } = start);
    const merged2 = Object.assign(start, Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }));
    const sharedValue = _mod1652.useSharedValue(0);
    const items1 = [sharedValue, onPressIn];
    const items2 = [sharedValue, onPressOut];
    const callback = noop.useCallback((arg0) => {
      const result = _undefined3.set(1);
      if (c0 != null) {
        tmp2(arg0);
      }
    }, items1);
    const callback1 = noop.useCallback((arg0) => {
      const result = _undefined3.set(0);
      if (c1 != null) {
        tmp2(arg0);
      }
    }, items2);
    const tmpResult = _mod1652;
    ({ backgroundColor, backgroundColorPressed } = closure_9(variant));
    const tmp11 = closure_9(variant);
    const items3 = [closure_12, spring_spring.withSpring, _mod1652.interpolateColor, sharedValue, backgroundColor, backgroundColorPressed, springPresets.ON_PRESS_SPRING];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items3;
    class CardNativeTsx1 {
      constructor() {
        obj = { backgroundColor: null };
        items = [, ];
        items[0] = closure_3;
        items[1] = closure_4;
        obj.backgroundColor = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_5, "animate-always");
        return obj;
      }
    }
    const items4 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
    CardNativeTsx1.__closure = items4;
    CardNativeTsx1.__workletHash = 12443532750962;
    CardNativeTsx1.__initData = tmp14;
    const obj5 = {};
    const animatedStyle = _mod1652.useAnimatedStyle(CardNativeTsx1);
    const merged3 = Object.assign(merged2);
    obj5.onPressIn = callback;
    obj5.onPressOut = callback1;
    const items5 = [style, animatedStyle];
    obj5.style = items5;
    obj5.unstable_pressDelay = 130;
    obj5.children = children;
    tmp27 = <closure_8 />;
    const tmpResult2 = _mod1652;
  }
  return tmp27;
}
let closure_3 = ["accessibilityRole"];
get_ActivityIndicator = fn(17);
({ View: closure_6, Pressable } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_8 = module_1652.createAnimatedComponent(Pressable);
let createStyles = fn(5243);
let closure_9 = createStyles.createStyleProperties((arg0) => {
  if ("primary" === arg0) {
    let backgroundColor = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg0) {
    backgroundColor = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg0) {
    backgroundColor = nativeDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg0) {
    backgroundColor = nativeDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg0) {
    backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg0) {
    backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  if ("primary" === arg0) {
    let backgroundColorPressed = nativeDefault.colors.TABLEROW_BACKGROUND_PRESSED;
  } else if ("secondary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("muted" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CARD_MUTED_PRESSED_BG;
  } else if ("transparent" === arg0) {
    backgroundColorPressed = nativeDefault.colors.BACKGROUND_MOD_SUBTLE;
  } else if ("control-secondary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("surface-high" === arg0) {
    backgroundColorPressed = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  return { backgroundColor, backgroundColorPressed };
});
createStyles = fn(5243);
const refs = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4, arg5) => {
  if ("primary" === arg2) {
    let BACKGROUND_SURFACE_HIGH = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  let BORDER_SUBTLE = null;
  if ("none" !== arg4) {
    if ("subtle" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_SUBTLE;
    } else if ("strong" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_STRONG;
    } else if ("faint" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_MUTED;
    } else if ("control-secondary" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT;
    }
  }
  if (BORDER_SUBTLE == null) {
    BORDER_SUBTLE = BACKGROUND_SURFACE_HIGH;
  }
  const card = {};
  const merged = Object.assign(CardTokens.createCardShadowToken(arg3));
  let tmp21;
  if (arg0) {
    tmp21 = arg5;
  }
  card.borderTopStartRadius = tmp21;
  let tmp22;
  if (arg0) {
    tmp22 = arg5;
  }
  card.borderTopEndRadius = tmp22;
  let tmp23;
  if (arg1) {
    tmp23 = arg5;
  }
  card.borderBottomStartRadius = tmp23;
  let tmp24;
  if (arg1) {
    tmp24 = arg5;
  }
  card.borderBottomEndRadius = tmp24;
  card.borderColor = BORDER_SUBTLE;
  let num = 0;
  if ("none" !== arg4) {
    num = 1;
  }
  card.borderWidth = num;
  card.backgroundColor = BACKGROUND_SURFACE_HIGH;
  return { card, spacing: { padding: 16 } };
});
let closure_12 = { code: "(function CardNativeTsx1(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING]=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;