// discord_app/design/components/Card/native/Card.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import CardTokens from "CardTokens.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

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
    items = [, ,];
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
        obj = { accessibilityRole: null };
        obj.accessibilityRole = str4;
        tmp9 = obj;
        tmp10 = tmp6;
        merged1 = Object.assign(tmp6);
        obj.start = flag;
        obj.end = flag2;
        obj.style = items;
        obj.variant = str3;
        obj.radius = radius;
        return tmp7(tmp8, obj);
      }
    }
    obj1 = {};
    merged2 = Object.assign(merged);
    obj1.style = items;
    return jsx(View, obj1);
  }
}
function PressableCard(start) {
  let obj = onPressIn(sharedValue[9]);
  if (obj.isAndroid()) {
    const start2 = start.start;
    onPressIn = start2;
    const end2 = start.end;
    let onPressOut = end2;
    const radius2 = start.radius;
    sharedValue = radius2;
    obj = {};
    const merged = Object.assign(start, Object.assign({ children: 0, start: 0, end: 0, radius: 0 }));
    let items = [start2, end2, radius2];
    const memo = noop.useMemo(() => {
      if (onPressIn) {
        let cornerRadius = sharedValue;
      } else {
        cornerRadius = 0;
      }
      return { cornerRadius };
    }, items);
    obj = { androidRippleConfig: memo };
    const merged1 = Object.assign(merged);
    obj.children = start.children;
    let tmp19 = jsx(tmp(tmp2[12]).AnimatedPressableHighlight, { androidRippleConfig: memo });
  } else {
    onPressIn = start.onPressIn;
    onPressOut = start.onPressOut;
    ({ radius, start, end } = start);
    ({ children, style, variant } = start);
    const merged2 = Object.assign(
      start,
      Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }),
    );
    let tmpResult = tmp(tmp2[4]);
    sharedValue = tmpResult.useSharedValue(0);
    const items1 = [sharedValue, onPressIn];
    const items2 = [sharedValue, onPressOut];
    const callback = noop.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (onPressIn != null) {
        tmp2(arg0);
      }
    }, items1);
    const callback1 = noop.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (onPressOut != null) {
        tmp2(arg0);
      }
    }, items2);
    const tmp11 = closure_9(variant);
    const backgroundColor = tmp11.backgroundColor;
    const backgroundColorPressed = tmp11.backgroundColorPressed;
    tmpResult = tmp(tmp2[4]);
    class B {
      constructor() {
        obj = { backgroundColor: null };
        obj2 = closure_0(closure_2[10]);
        obj3 = closure_0(closure_2[4]);
        items = [,];
        items[0] = backgroundColor;
        items[1] = backgroundColorPressed;
        interpolateColorResult = obj3.interpolateColor(closure_2.get(), [0, 1], items);
        obj.backgroundColor = obj2.withSpring(
          interpolateColorResult,
          closure_0(closure_2[11]).ON_PRESS_SPRING,
          "animate-always",
        );
        return obj;
      }
    }
    let obj2 = {
      withSpring: tmp(tmp2[10]).withSpring,
      interpolateColor: tmp(tmp2[4]).interpolateColor,
      pressed: sharedValue,
      backgroundColor,
      backgroundColorPressed,
      ON_PRESS_SPRING: tmp(tmp2[11]).ON_PRESS_SPRING,
    };
    B.__closure = obj2;
    B.__workletHash = 14943431549291;
    B.__initData = __initData;
    let obj3 = {};
    const animatedStyle = tmpResult.useAnimatedStyle(B);
    const merged3 = Object.assign(merged2);
    obj3.onPressIn = callback;
    obj3.onPressOut = callback1;
    const items3 = [style, animatedStyle];
    obj3.style = items3;
    obj3.unstable_pressDelay = 130;
    obj3.children = children;
    tmp19 = <closure_8 />;
  }
  return tmp19;
}
let closure_3 = ["accessibilityRole"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = fn(4560);
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
createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4, arg5) => {
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
const __initData = {
  code: "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;
