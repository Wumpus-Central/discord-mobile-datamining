// === Module 7445: Card ===

// Module 7445 (Card)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import spring_spring from "spring/spring" /* 5939 */;
import springPresets from "springPresets" /* 5940 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import CardTokens from "CardTokens" /* 7446 */;
import DragHandle from "DragHandle" /* 7447 */;
import AnimatedPressableHighlight from "AnimatedPressableHighlight" /* 7451 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const module_1655 = _mod1655;

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
    str4 = global.padding;
    if (str4 === undefined) {
      str4 = "default";
    }
    flag3 = global.draggable;
    if (flag3 === undefined) {
      flag3 = false;
    }
    ({ dragHandlePressableProps, children } = global);
    merged = Object.assign(global, Object.assign({ start: 0, end: 0, shadow: 0, border: 0, variant: 0, padding: 0, draggable: 0, dragHandlePressableProps: 0, children: 0 }));
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[9]);
    radius = merged.radius;
    if (radius == null) {
      radius = obj.useToken(closure_1(closure_2[5]).modules.mobile.CARD_DEFAULT_RADIUS);
    }
    tmp4 = closure_12(flag, flag2, str3, str, str2, str4, radius);
    items = [, , ];
    items[0] = tmp4.card;
    draggableCard = undefined;
    if (flag3) {
      draggableCard = tmp4.draggableCard;
    }
    items[1] = draggableCard;
    items[2] = merged.style;
    tmp6 = children;
    if (flag3) {
      tmp7 = jsxs;
      tmp8 = Fragment;
      obj1 = { children: null };
      tmp9 = jsx;
      obj7 = { stretch: true, borderRadius: 0 };
      tmp10 = obj7;
      tmp11 = dragHandlePressableProps;
      merged1 = Object.assign(dragHandlePressableProps);
      obj7.style = tmp4.dragHandle;
      items1 = [, ];
      items1[0] = jsx(tmp2(tmp3[10]).DragHandle, obj7);
      tmp13 = View;
      obj8 = { style: null, children: null };
      obj8.style = tmp4.draggableContent;
      obj8.children = children;
      items1[1] = jsx(View, obj8);
      obj1.children = items1;
      tmp6 = jsxs(Fragment, obj1);
    }
    if ("onPress" in merged) {
      if (null != merged.onPress) {
        str5 = merged.accessibilityRole;
        tmp15 = closure_4;
        tmp16 = closure_3;
        tmp17 = closure_4(merged, closure_3);
        tmp18 = jsx;
        tmp19 = PressableCard;
        if (str5 == null) {
          str5 = "button";
        }
        obj9 = { accessibilityRole: null };
        obj9.accessibilityRole = str5;
        tmp20 = obj9;
        tmp21 = tmp17;
        merged2 = Object.assign(tmp17);
        obj9.start = flag;
        obj9.end = flag2;
        obj9.style = items;
        obj9.variant = str3;
        obj9.radius = radius;
        obj9.children = tmp6;
        return tmp18(tmp19, obj9);
      }
    }
    obj10 = {};
    merged3 = Object.assign(merged);
    obj10.style = items;
    obj10.children = tmp6;
    return jsx(View, obj10);
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
    let tmp27 = metroImportDefault(AnimatedPressableHighlight.AnimatedPressableHighlight, obj3);
  } else {
    const onPressIn = start.onPressIn;
    const onPressOut = start.onPressOut;
    ({ radius, start, end } = start);
    ({ children, style, variant } = start);
    const merged2 = Object.assign(start, Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }));
    const sharedValue = _mod1655.useSharedValue(0);
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
    const tmpResult = _mod1655;
    ({ backgroundColor, backgroundColorPressed } = closure_11(variant));
    const tmp11 = closure_11(variant);
    const items3 = [closure_14, spring_spring.withSpring, _mod1655.interpolateColor, sharedValue, backgroundColor, backgroundColorPressed, springPresets.ON_PRESS_SPRING];
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
    const animatedStyle = _mod1655.useAnimatedStyle(CardNativeTsx1);
    const merged3 = Object.assign(merged2);
    obj5.onPressIn = callback;
    obj5.onPressOut = callback1;
    const items5 = [style, animatedStyle];
    obj5.style = items5;
    obj5.unstable_pressDelay = 130;
    obj5.children = children;
    tmp27 = metroImportDefault(closure_10, obj5);
    const tmpResult2 = _mod1655;
  }
  return tmp27;
}
let closure_3 = ["accessibilityRole"];
get_ActivityIndicator = fn(17);
({ View: closure_6, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = module_1655.createAnimatedComponent(Pressable);
let createStyles = fn(5306);
let closure_11 = createStyles.createStyleProperties((arg0) => {
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
createStyles = fn(5306);
const application_id = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
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
  const obj = {};
  const merged = Object.assign(CardTokens.createCardShadowToken(arg3));
  let tmp23;
  if (arg0) {
    tmp23 = arg6;
  }
  obj.borderTopStartRadius = tmp23;
  let tmp24;
  if (arg0) {
    tmp24 = arg6;
  }
  obj.borderTopEndRadius = tmp24;
  let tmp25;
  if (arg1) {
    tmp25 = arg6;
  }
  obj.borderBottomStartRadius = tmp25;
  let tmp26;
  if (arg1) {
    tmp26 = arg6;
  }
  obj.borderBottomEndRadius = tmp26;
  obj.borderColor = BORDER_SUBTLE;
  let num = 0;
  if ("none" !== arg4) {
    num = 1;
  }
  obj.borderWidth = num;
  obj.backgroundColor = BACKGROUND_SURFACE_HIGH;
  let num2 = 0;
  if ("default" === arg5) {
    num2 = 16;
  }
  const obj3 = { card: obj, draggableCard: { flexDirection: "row", alignItems: "stretch", padding: 0, overflow: "hidden" }, draggableContent: null, dragHandle: null };
  obj.padding = num2;
  let num3 = 0;
  if ("default" === arg5) {
    num3 = 16;
  }
  obj3.draggableContent = { flexGrow: 0, flexShrink: 1, flexBasis: "100%", padding: num3, paddingStart: 4 };
  obj3.dragHandle = { flexShrink: 1, flexGrow: 0, minWidth: ButtonConstants.MEDIUM_BUTTON_HEIGHT, height: "100%" };
  return obj3;
});
let closure_14 = { code: "(function CardNativeTsx1(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING]=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;