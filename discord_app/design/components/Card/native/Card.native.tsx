// discord_app/design/components/Card/native/Card.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import map from "../../../tokens/native/useToken.tsx";
import createCardShadowToken from "CardTokens.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../modules/reanimated/ReanimatedRexport.tsx";

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
    merged = Object.assign(global, Object.create(null));
    tmp2 = require("useIsMobileVisualRefreshExperimentEnabled")("Card");
    obj = require("map");
    radius = merged.radius;
    if (radius == null) {
      radius = obj.useToken(require("Themes").modules.mobile.CARD_DEFAULT_RADIUS);
    }
    tmp3 = closure_10(flag, flag2, str3, str, str2, radius);
    items = [, , ];
    ({ spacing: arr[0], card: arr[1] } = tmp3);
    items[2] = merged.style;
    if ("onPress" in merged) {
      if (null != merged.onPress) {
        str4 = merged.accessibilityRole;
        tmp5 = closure_4;
        tmp6 = closure_3;
        tmp7 = closure_4(merged, closure_3);
        tmp8 = jsx;
        tmp9 = PressableCard;
        if (str4 == null) {
          str4 = "button";
        }
        obj = { accessibilityRole: null };
        obj[0] = str4;
        tmp10 = obj;
        tmp11 = tmp7;
        merged1 = Object.assign(tmp7);
        obj.start = flag;
        obj.end = flag2;
        obj.style = items;
        obj.variant = str3;
        obj.isRefreshEnabled = tmp2;
        obj.radius = radius;
        return tmp8(tmp9, obj);
      }
    }
    obj1 = {};
    merged2 = Object.assign(merged);
    obj1.style = items;
    return jsx(View, obj1);
  }
}
function PressableCard(start) {
  let obj = onPressIn(sharedValue[10]);
  if (obj.isAndroid()) {
    const start2 = start.start;
    onPressIn = start2;
    const end2 = start.end;
    let onPressOut = end2;
    const radius2 = start.radius;
    sharedValue = radius2;
    const isRefreshEnabled2 = start.isRefreshEnabled;
    const merged = Object.assign(start, Object.create(null));
    let items = [start2, end2, radius2];
    const memo = React.useMemo(() => {
      if (onPressIn) {
        let cornerRadius = sharedValue;
      } else {
        cornerRadius = 0;
      }
      return { cornerRadius };
    }, items);
    obj = { androidRippleConfig: null };
    obj[0] = memo;
    const merged1 = Object.assign(merged);
    obj.children = start.children;
    let tmp19 = jsx(tmp(tmp2[13]).AnimatedPressableHighlight, { androidRippleConfig: null });
  } else {
    onPressIn = start.onPressIn;
    onPressOut = start.onPressOut;
    ({ radius, start, end } = start);
    ({ children, style, variant, isRefreshEnabled } = start);
    const merged2 = Object.assign(start, Object.create(null));
    let tmpResult = tmp(tmp2[4]);
    sharedValue = tmpResult.useSharedValue(0);
    const items1 = [sharedValue, onPressIn];
    const items2 = [sharedValue, onPressOut];
    const callback = React.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (onPressIn != null) {
        tmp2(arg0);
      }
    }, items1);
    const callback1 = React.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (onPressOut != null) {
        tmp2(arg0);
      }
    }, items2);
    const tmp11 = callback2(variant, isRefreshEnabled);
    const backgroundColor = tmp11.backgroundColor;
    const backgroundColorPressed = tmp11.backgroundColorPressed;
    tmpResult = tmp(tmp2[4]);
    class B {
      constructor() {
        obj = { backgroundColor: null };
        obj2 = onPressIn(closure_2[11]);
        obj3 = onPressIn(closure_2[4]);
        items = [, ];
        items[0] = backgroundColor;
        items[1] = backgroundColorPressed;
        interpolateColorResult = obj3.interpolateColor(closure_2.get(), [0, 1], items);
        obj[0] = obj2.withSpring(interpolateColorResult, onPressIn(closure_2[12]).ON_PRESS_SPRING, "animate-always");
        return obj;
      }
    }
    let obj2 = { withSpring: null, interpolateColor: null, pressed: null, backgroundColor: null, backgroundColorPressed: null, ON_PRESS_SPRING: null };
    obj2[0] = tmp(tmp2[11]).withSpring;
    obj2[1] = tmp(tmp2[4]).interpolateColor;
    obj2[2] = sharedValue;
    obj2[3] = backgroundColor;
    obj2[4] = backgroundColorPressed;
    obj2[5] = tmp(tmp2[12]).ON_PRESS_SPRING;
    B.__closure = obj2;
    B.__workletHash = 14943431549291;
    B.__initData = closure_12;
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
({ View: closure_6, Pressable } = get_ActivityIndicator);
let closure_8 = importDefaultResult.createAnimatedComponent(Pressable);
let closure_9 = createCacheKey.createStyleProperties((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if ("primary" === arg0) {
    let backgroundColor = ThemesDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg0) {
    backgroundColor = ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg0) {
    backgroundColor = ThemesDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg0) {
    backgroundColor = ThemesDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg0) {
    backgroundColor = ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg0) {
    backgroundColor = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  if (flag === undefined) {
    flag = false;
  }
  if ("primary" === arg0) {
    let backgroundColorPressed = ThemesDefault.colors.TABLEROW_BACKGROUND_PRESSED;
  } else if ("secondary" === arg0) {
    backgroundColorPressed = ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("muted" === arg0) {
    backgroundColorPressed = ThemesDefault.colors.CARD_MUTED_PRESSED_BG;
  } else if ("transparent" === arg0) {
    const tmp15 = ThemesDefault;
    if (flag) {
      let TRANSPARENT = tmp15.colors.BACKGROUND_MOD_SUBTLE;
    } else {
      TRANSPARENT = tmp15.unsafe_rawColors.TRANSPARENT;
    }
    backgroundColorPressed = TRANSPARENT;
  } else if ("control-secondary" === arg0) {
    backgroundColorPressed = ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("surface-high" === arg0) {
    backgroundColorPressed = ThemesDefault.colors.BACKGROUND_BASE_LOW;
  }
  return { backgroundColor, backgroundColorPressed };
});
let closure_10 = createCacheKey.createStyles((arg0, arg1, arg2, arg3, arg4, arg5) => {
  if ("primary" === arg2) {
    let BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg2) {
    BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg2) {
    BACKGROUND_SURFACE_HIGH = ThemesDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg2) {
    BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  let BORDER_SUBTLE = null;
  if ("none" !== arg4) {
    if ("subtle" === arg4) {
      BORDER_SUBTLE = ThemesDefault.colors.BORDER_SUBTLE;
    } else if ("strong" === arg4) {
      BORDER_SUBTLE = ThemesDefault.colors.BORDER_STRONG;
    } else if ("faint" === arg4) {
      BORDER_SUBTLE = ThemesDefault.colors.BORDER_MUTED;
    } else if ("control-secondary" === arg4) {
      BORDER_SUBTLE = ThemesDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT;
    }
  }
  if (BORDER_SUBTLE == null) {
    BORDER_SUBTLE = BACKGROUND_SURFACE_HIGH;
  }
  const card = {};
  const merged = Object.assign(createCardShadowToken.createCardShadowToken(arg3));
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
let closure_12 = { code: "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}" };
let result = require("obj132").fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;