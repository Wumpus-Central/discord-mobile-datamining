import { LinearGradient } from "../../../../../_runtime/04706_LinearGradient.js";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { ReanimatedRexport } from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import { map } from "../../../tokens/native/useToken.tsx";
import { MINIMUM_HIT_AREA } from "ButtonConstants.native.tsx";
import { styleProperties } from "ButtonHooks.native.tsx";
// discord_app/design/components/Button/native/ButtonPill.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "SUBTLE_SPRING";
import jsxProd from "jsxProd";
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA";
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA";
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function PillWrapper(expressivePressState) {
  let children;
  let expressiveRiveRef;
  let shiny;
  let size;
  let style;
  let variant;
  ({ children, variant, style, shiny } = expressivePressState);
  if (shiny === undefined) {
    shiny = false;
  }
  expressivePressState = expressivePressState.expressivePressState;
  ({ expressiveRiveRef, size } = expressivePressState);
  let obj = styleProperties /* styleProperties */;
  const buttonPillStyles = obj.useButtonPillStyles(variant, expressivePressState.pressed);
  let obj1 = styleProperties /* styleProperties */;
  const gradientPillStyles = obj1.useGradientPillStyles(variant);
  let obj2 = ManaContext /* ManaContext */;
  const tmp5 = callback3(variant, size);
  let obj3 = map /* map */;
  let items = [obj3.useToken(Themes.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  let obj4 = map /* map */;
  items[1] = obj4.useToken(Themes.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  let obj5 = map /* map */;
  items[2] = obj5.useToken(Themes.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [Themes.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, Themes.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, Themes.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
  let tmp7 = null;
  if (shiny) {
    obj = { variant: null };
    obj[0] = variant;
    tmp7 = callback2(tmp(4705).ButtonShine, obj);
  }
  if ("experimental_premium-primary" !== variant) {
    if ("experimental_premium-basic" !== variant) {
      let tmp11Result = "expressive" === variant;
      if (tmp11Result) {
        obj = { style: null, children: null };
        const items2 = [closure_6.absoluteFill, tmp5.expressivePill];
        obj[0] = items2;
        obj1 = { withReducedMotion: "short-loop", ref: null, fit: "layout", artboard: null, dataBinding: null };
        obj1[1] = expressiveRiveRef;
        let str = "Mobile Expressive Button Dark Mode";
        if (tmpResult.isThemeLight(obj2.useThemeContext().theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj1[3] = str;
        obj2 = { buttonColor: null, cornerRadius: null };
        obj2[0] = tmp5.expressiveRiveFill.color;
        obj2[1] = tmp5.expressivePill.borderRadius;
        const merged = Object.assign(expressivePressState);
        obj1[4] = obj2;
        obj[1] = callback2(tmp(3997).ExpressiveButtonRive, obj1);
        tmp11Result = tmp11(closure_5, obj);
        const tmp12 = closure_5;
        tmpResult = tmp(4131);
      }
      obj3 = { children: null };
      const items3 = [tmp11Result, ];
      obj4 = { style: null, children: null };
      const items4 = [style, buttonPillStyles];
      obj4[0] = items4;
      const items5 = [children, tmp7];
      obj4[1] = items5;
      items3[1] = tmp9(tmp6(4146).View, obj4);
      obj3[0] = items3;
    }
    return tmp9(tmp10, obj3);
  }
  obj5 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items6, colors: null };
  items6 = [style, gradientPillStyles, closure_6.absoluteFill];
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  const obj6 = { children: null };
  obj5[3] = items;
  const items7 = [callback2(LinearGradient, obj5), ];
  const items8 = [style, buttonPillStyles];
  const items9 = [children, tmp7];
  items7[1] = closure_8(ReanimatedRexport.View, { style: items8, children: items9 });
  obj6[0] = items7;
  obj3 = obj6;
}
class BasicButtonPill {
  constructor(arg0) {
    str = global.variant;
    ({ children, style, pressed } = global);
    if (str === undefined) {
      str = "primary";
    }
    DEFAULT_BUTTON_SIZE = global.size;
    if (DEFAULT_BUTTON_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      DEFAULT_BUTTON_SIZE = require("MINIMUM_HIT_AREA").DEFAULT_BUTTON_SIZE;
    }
    flag = global.shiny;
    if (flag === undefined) {
      flag = false;
    }
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = f32805(str, DEFAULT_BUTTON_SIZE);
    obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: items, pressed, shiny: flag, expressiveRiveRef, expressivePressState, children: jsx(View, obj) };
    items = [, ];
    items[0] = tmp3.pill;
    items[1] = style;
    obj = { style: tmp3.childContainer, children };
    return jsx(PillWrapper, obj);
  }
}
class LoadingButtonPill {
  constructor(arg0) {
    str = global.variant;
    ({ children, style, pressed } = global);
    if (str === undefined) {
      str = "primary";
    }
    DEFAULT_BUTTON_SIZE = global.size;
    if (DEFAULT_BUTTON_SIZE === undefined) {
      tmp = c0;
      tmp2 = c2;
      DEFAULT_BUTTON_SIZE = require("MINIMUM_HIT_AREA").DEFAULT_BUTTON_SIZE;
    }
    flag = global.loading;
    if (flag === undefined) {
      flag = false;
    }
    c0 = flag;
    loaderSize = global.loaderSize;
    useRef = undefined;
    c2 = undefined;
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = f32805(str, DEFAULT_BUTTON_SIZE);
    useRef = noop.useRef(null);
    tmp4 = _slicedToArray(noop.useState(flag), 2);
    [tmp5, c2] = tmp4;
    items = [];
    items[0] = flag;
    effect = noop.useEffect(() => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (flag) {
        _undefined(true);
      } else {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          callback(false);
        }, 500);
      }
    }, items);
    tmp7 = _slicedToArray(useLoadingStyles(flag, DEFAULT_BUTTON_SIZE), 2);
    obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: items1, pressed, expressiveRiveRef, expressivePressState, children: null };
    items1 = [, ];
    items1[0] = tmp3.pill;
    items1[1] = style;
    tmp12 = jsx;
    [tmp8, tmp9] = tmp7;
    tmp10 = jsxs;
    tmp11 = PillWrapper;
    tmp13 = c2;
    items2 = [, ];
    items2[0] = tmp3.childContainer;
    items2[1] = tmp8;
    items3 = [, ];
    items3[0] = jsx(require("module_4146").View, { style: items2, children });
    obj = { style: items4, children: null };
    items4 = [, ];
    items4[0] = tmp3.ellipsis;
    items4[1] = tmp9;
    if (tmp12Result) {
      tmp14 = c0;
      obj1 = { variant: null, size: null };
      obj1[0] = str;
      if (loaderSize == null) {
        loaderSize = DEFAULT_BUTTON_SIZE;
      }
      obj1[1] = loaderSize;
      tmp12Result = tmp12(require("EllipsisCircle").Ellipsis, obj1);
    }
    obj[1] = tmp12Result;
    items3[1] = tmp12(require("module_4146").View, obj);
    obj[6] = items3;
    return tmp10(tmp11, obj);
  }
}
function useLoadingStyles(flag, DEFAULT_BUTTON_SIZE) {
  const _require = flag;
  const enabled = React.useContext(_require(num[15]).AccessibilityPreferencesContext).reducedMotion.enabled;
  num = 12;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    num = 18;
  }
  let tmpResult = tmp(tmp2[12]);
  const fn = function o() {
    let obj = callback(num[16]);
    num = 1;
    if (callback) {
      num = 0;
    }
    const withSpringResult = obj.withSpring(num, callback(num[17]).SUBTLE_SPRING, "animate-always");
    obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!tmp3) {
        let tmpResult = tmp(tmp2[12]);
        withDelayResult = tmpResult.withDelay(outer1_10, withSpringResult);
      }
      obj[0] = withDelayResult;
      const items = [{ translateY: 0 }];
      obj[1] = items;
      let tmp6 = obj;
    } else {
      obj[0] = withSpringResult;
      tmpResult = tmp(tmp2[16]);
      let num2 = 0;
      if (tmp3) {
        num2 = -1 * num;
      }
      obj = { translateY: null };
      obj[0] = tmpResult.withSpring(num2, tmp(tmp2[17]).SUBTLE_SPRING);
      const items1 = [obj];
      obj[1] = items1;
      tmp6 = obj;
    }
    return tmp6;
  };
  let obj = { withSpring: tmp(tmp2[16]).withSpring, loading: flag, SUBTLE_SPRING: tmp(tmp2[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: tmp(tmp2[12]).withDelay, FADE_DELAY: c10, offsetY: num };
  fn.__closure = obj;
  fn.__workletHash = 9388603334085;
  fn.__initData = closure_18;
  let items = [tmpResult.useAnimatedStyle(fn), ];
  tmpResult = tmp(tmp2[12]);
  const fn2 = function l() {
    let obj = callback(num[16]);
    num = 0;
    if (callback) {
      num = 1;
    }
    const withSpringResult = obj.withSpring(num, callback(num[17]).SUBTLE_SPRING, "animate-always");
    obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (tmp3) {
        let tmpResult = tmp(tmp2[12]);
        withDelayResult = tmpResult.withDelay(outer1_10, withSpringResult);
      }
      obj[0] = withDelayResult;
      const items = [{ translateY: 0 }];
      obj[1] = items;
      let tmp5 = obj;
    } else {
      obj[0] = withSpringResult;
      tmpResult = tmp(tmp2[16]);
      let num2 = 0;
      if (!tmp3) {
        num2 = num;
      }
      obj = { translateY: null };
      obj[0] = tmpResult.withSpring(num2, tmp(tmp2[17]).SUBTLE_SPRING);
      const items1 = [obj];
      obj[1] = items1;
      tmp5 = obj;
    }
    return tmp5;
  };
  obj = { withSpring: tmp(tmp2[16]).withSpring, loading: flag, SUBTLE_SPRING: tmp(tmp2[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: tmp(tmp2[12]).withDelay, FADE_DELAY: c10, offsetY: num };
  fn2.__closure = obj;
  fn2.__workletHash = 8255420825872;
  fn2.__initData = closure_19;
  items[1] = tmpResult.useAnimatedStyle(fn2);
  return items;
}
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
let c10 = 300;
const buttonPadding = MINIMUM_HIT_AREA.getButtonPadding(require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT, require("MINIMUM_HIT_AREA").SMALL_BUTTON_ICON_SIZE);
const buttonPadding2 = MINIMUM_HIT_AREA.getButtonPadding(require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_ICON_SIZE);
const buttonPadding3 = MINIMUM_HIT_AREA.getButtonPadding(require("MINIMUM_HIT_AREA").LARGE_BUTTON_HEIGHT, require("MINIMUM_HIT_AREA").LARGE_BUTTON_ICON_SIZE);
let closure_14 = createCacheKey.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    let obj = { minHeight: null, minWidth: null, paddingHorizontal: null, paddingVertical: null };
    obj[0] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.SMALL_BUTTON_HEIGHT;
    obj[1] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.SMALL_BUTTON_HEIGHT;
    obj[2] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.SMALL_BUTTON_HORIZONTAL_PADDING;
    obj[3] = closure_11;
  } else if ("md" === arg1) {
    obj = { minHeight: null, minWidth: null, paddingHorizontal: null, paddingVertical: null };
    obj[0] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.MEDIUM_BUTTON_HEIGHT;
    obj[1] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.MEDIUM_BUTTON_HEIGHT;
    obj[2] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.MEDIUM_BUTTON_HORIZONTAL_PADDING;
    obj[3] = closure_12;
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj1 = { minHeight: null, minWidth: null, paddingHorizontal: null, paddingVertical: null };
      obj1[0] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.LARGE_BUTTON_HEIGHT;
      obj1[1] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.LARGE_BUTTON_HEIGHT;
      obj1[2] = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.LARGE_BUTTON_HORIZONTAL_PADDING;
      obj1[3] = closure_13;
      obj = obj1;
    }
  }
  let obj3 = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */;
  const buttonBorderRadius = obj3.getButtonBorderRadius(arg1);
  const obj2 = { pill: null, expressivePill: null, expressiveRiveFill: null, childContainer: null, ellipsis: null };
  obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderWidth: MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.BUTTON_BORDER_WIDTH, borderRadius: buttonBorderRadius };
  const merged = Object.assign(obj);
  obj2[0] = obj3;
  obj2[1] = { overflow: "hidden", borderRadius: buttonBorderRadius };
  obj2[2] = { color: Themes.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
  obj2[3] = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: 1, maxWidth: "100%" };
  obj2[4] = { position: "absolute", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" };
  return obj2;
});
let closure_18 = { code: "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
let closure_19 = { code: "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

export const ButtonPill = function ButtonPill(loading) {
  if (null == loading.loading) {
    let obj = {};
    const merged = Object.assign(loading);
    let tmp6 = callback2(BasicButtonPill, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(loading);
    tmp6 = callback2(LoadingButtonPill, obj);
  }
  return tmp6;
};
export { BasicButtonPill };
export { LoadingButtonPill };
export { useLoadingStyles };