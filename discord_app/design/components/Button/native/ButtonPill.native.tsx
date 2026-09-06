// discord_app/design/components/Button/native/ButtonPill.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants2 from "ButtonConstants.native.tsx";
import ButtonHooks from "ButtonHooks.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import ButtonEllipsis from "ButtonEllipsis.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function PillWrapper(expressivePressState) {
  ({ children, variant, style, shiny } = expressivePressState);
  if (shiny === undefined) {
    shiny = false;
  }
  expressivePressState = expressivePressState.expressivePressState;
  ({ expressiveRiveRef, size } = expressivePressState);
  let obj = ButtonHooks;
  const buttonPillStyles = obj.useButtonPillStyles(variant, expressivePressState.pressed);
  let obj1 = ButtonHooks;
  const gradientPillStyles = obj1.useGradientPillStyles(variant);
  let obj2 = native;
  const tmp5 = closure_14(variant, size);
  let obj3 = useToken;
  let items = [obj3.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), ,];
  let obj4 = useToken;
  items[1] = obj4.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  let obj5 = useToken;
  items[2] = obj5.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [
    nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS,
    nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2,
    nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS,
  ];
  let tmp7 = null;
  if (shiny) {
    obj = { variant };
    tmp7 = React5(tmp(4986).ButtonShine, obj);
  }
  if ("experimental_premium-primary" !== variant) {
    if ("experimental_premium-basic" !== variant) {
      let tmp11Result = "expressive" === variant;
      if (tmp11Result) {
        obj = { style: null, children: null };
        const items2 = [timestampProducer.absoluteFill, tmp5.expressivePill];
        obj.style = items2;
        obj1 = {
          withReducedMotion: "short-loop",
          ref: expressiveRiveRef,
          fit: "layout",
          artboard: null,
          dataBinding: null,
        };
        let str = "Mobile Expressive Button Dark Mode";
        if (tmpResult.isThemeLight(obj2.useThemeContext().theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj1.artboard = str;
        obj2 = { buttonColor: tmp5.expressiveRiveFill.color, cornerRadius: tmp5.expressivePill.borderRadius };
        const merged = Object.assign(expressivePressState);
        obj1.dataBinding = obj2;
        obj.children = React5(tmp(4271).ExpressiveButtonRive, obj1);
        tmp11Result = tmp11(hasOwnProperty, obj);
        tmpResult = tmp(4411);
      }
      obj3 = { children: null };
      const items3 = [tmp11Result];
      obj4 = { style: null, children: null };
      const items4 = [style, buttonPillStyles];
      obj4.style = items4;
      const items5 = [children, tmp7];
      obj4.children = items5;
      items3[1] = tmp9(tmp6(4296).View, obj4);
      obj3.children = items3;
    }
    return tmp9(tmp10, obj3);
  }
  obj5 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: null, colors: null };
  const items6 = [style, gradientPillStyles, timestampProducer.absoluteFill];
  obj5.style = items6;
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  const obj6 = { children: null };
  obj5.colors = items;
  const items7 = [React5(LinearGradientDefault, obj5)];
  const obj7 = { style: null, children: null };
  const items8 = [style, buttonPillStyles];
  obj7.style = items8;
  const items9 = [children, tmp7];
  obj7.children = items9;
  items7[1] = React6(ReanimatedRexportDefault.View, obj7);
  obj6.children = items7;
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
      DEFAULT_BUTTON_SIZE = closure_0(closure_2[4]).DEFAULT_BUTTON_SIZE;
    }
    flag = global.shiny;
    if (flag === undefined) {
      flag = false;
    }
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
    obj = {
      variant: str,
      size: DEFAULT_BUTTON_SIZE,
      style: null,
      pressed,
      shiny: flag,
      expressiveRiveRef,
      expressivePressState,
      children: null,
    };
    items = [,];
    items[0] = tmp3.pill;
    items[1] = style;
    obj.style = items;
    obj = { style: tmp3.childContainer, children };
    obj.children = jsx(View, obj);
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
      tmp = closure_0;
      tmp2 = closure_2;
      DEFAULT_BUTTON_SIZE = closure_0(closure_2[4]).DEFAULT_BUTTON_SIZE;
    }
    flag = global.loading;
    if (flag === undefined) {
      flag = false;
    }
    c0 = flag;
    loaderSize = global.loaderSize;
    closure_1 = undefined;
    closure_2 = undefined;
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
    closure_1 = closure_4.useRef(null);
    tmp4 = closure_3(closure_4.useState(flag), 2);
    [tmp5, closure_2] = tmp4;
    items = [];
    items[0] = flag;
    effect = closure_4.useEffect(() => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (flag) {
        _undefined(true);
      } else {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          _undefined(false);
        }, 500);
      }
    }, items);
    tmp7 = closure_3(useLoadingStyles(flag, DEFAULT_BUTTON_SIZE), 2);
    obj = {
      variant: str,
      size: DEFAULT_BUTTON_SIZE,
      style: null,
      pressed,
      expressiveRiveRef,
      expressivePressState,
      children: null,
    };
    items1 = [,];
    items1[0] = tmp3.pill;
    items1[1] = style;
    obj.style = items1;
    tmp12 = jsx;
    [tmp8, tmp9] = tmp7;
    tmp10 = jsxs;
    tmp11 = PillWrapper;
    tmp13 = closure_2;
    obj = { style: null, children };
    items2 = [,];
    items2[0] = tmp3.childContainer;
    items2[1] = tmp8;
    obj.style = items2;
    items3 = [,];
    items3[0] = jsx(closure_1(closure_2[12]).View, obj);
    obj1 = { style: null, children: null };
    items4 = [,];
    items4[0] = tmp3.ellipsis;
    items4[1] = tmp9;
    obj1.style = items4;
    if (tmp12Result) {
      tmp14 = closure_0;
      obj2 = { variant: null, size: null };
      obj2.variant = str;
      if (loaderSize == null) {
        loaderSize = DEFAULT_BUTTON_SIZE;
      }
      obj2.size = loaderSize;
      tmp12Result = tmp12(closure_0(tmp13[14]).Ellipsis, obj2);
    }
    obj1.children = tmp12Result;
    items3[1] = tmp12(closure_1(closure_2[12]).View, obj1);
    obj.children = items3;
    return tmp10(tmp11, obj);
  }
}
function useLoadingStyles(flag, DEFAULT_BUTTON_SIZE) {
  _require = flag;
  const enabled = noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext)
    .reducedMotion.enabled;
  num = 12;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    num = 18;
  }
  let tmpResult = tmp(tmp2[12]);
  const fn = function o() {
    let obj = spring;
    num = 1;
    if (closure_0) {
      num = 0;
    }
    const withSpringResult = obj.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!tmp3) {
        let tmpResult = tmp(4296);
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      let tmp6 = obj;
    } else {
      obj.opacity = withSpringResult;
      tmpResult = tmp(4974);
      let num2 = 0;
      if (tmp3) {
        num2 = -1 * num;
      }
      obj = { translateY: tmpResult.withSpring(num2, tmp(4978).SUBTLE_SPRING) };
      const items1 = [obj];
      obj.transform = items1;
      tmp6 = obj;
    }
    return tmp6;
  };
  let obj = {
    withSpring: tmp(tmp2[16]).withSpring,
    loading: flag,
    SUBTLE_SPRING: tmp(tmp2[17]).SUBTLE_SPRING,
    useReducedMotion: enabled,
    withDelay: tmp(tmp2[12]).withDelay,
    FADE_DELAY,
    offsetY: num,
  };
  fn.__closure = obj;
  fn.__workletHash = 9388603334085;
  fn.__initData = __initData;
  let items = [tmpResult.useAnimatedStyle(fn)];
  tmpResult = tmp(tmp2[12]);
  const fn2 = function l() {
    let obj = spring;
    num = 0;
    if (closure_0) {
      num = 1;
    }
    const withSpringResult = obj.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (tmp3) {
        let tmpResult = tmp(4296);
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      let tmp5 = obj;
    } else {
      obj.opacity = withSpringResult;
      tmpResult = tmp(4974);
      let num2 = 0;
      if (!tmp3) {
        num2 = num;
      }
      obj = { translateY: tmpResult.withSpring(num2, tmp(4978).SUBTLE_SPRING) };
      const items1 = [obj];
      obj.transform = items1;
      tmp5 = obj;
    }
    return tmp5;
  };
  obj = {
    withSpring: tmp(tmp2[16]).withSpring,
    loading: flag,
    SUBTLE_SPRING: tmp(tmp2[17]).SUBTLE_SPRING,
    useReducedMotion: enabled,
    withDelay: tmp(tmp2[12]).withDelay,
    FADE_DELAY,
    offsetY: num,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 8255420825872;
  fn2.__initData = __initData2;
  items[1] = tmpResult.useAnimatedStyle(fn2);
  return items;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 300;
let ButtonConstants = fn(4980);
const paddingVertical = ButtonConstants.getButtonPadding(fn(4980).SMALL_BUTTON_HEIGHT, fn(4980).SMALL_BUTTON_ICON_SIZE);
ButtonConstants = fn(4980);
const paddingVertical2 = ButtonConstants.getButtonPadding(
  fn(4980).MEDIUM_BUTTON_HEIGHT,
  fn(4980).MEDIUM_BUTTON_ICON_SIZE,
);
ButtonConstants = fn(4980);
const paddingVertical3 = ButtonConstants.getButtonPadding(
  fn(4980).LARGE_BUTTON_HEIGHT,
  fn(4980).LARGE_BUTTON_ICON_SIZE,
);
const createStyles = fn(4560);
const value = createStyles.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    let obj = {
      minHeight: ButtonConstants2.SMALL_BUTTON_HEIGHT,
      minWidth: ButtonConstants2.SMALL_BUTTON_HEIGHT,
      paddingHorizontal: ButtonConstants2.SMALL_BUTTON_HORIZONTAL_PADDING,
      paddingVertical,
    };
  } else if ("md" === arg1) {
    obj = {
      minHeight: ButtonConstants2.MEDIUM_BUTTON_HEIGHT,
      minWidth: ButtonConstants2.MEDIUM_BUTTON_HEIGHT,
      paddingHorizontal: ButtonConstants2.MEDIUM_BUTTON_HORIZONTAL_PADDING,
      paddingVertical: paddingVertical2,
    };
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj1 = {
        minHeight: ButtonConstants2.LARGE_BUTTON_HEIGHT,
        minWidth: ButtonConstants2.LARGE_BUTTON_HEIGHT,
        paddingHorizontal: ButtonConstants2.LARGE_BUTTON_HORIZONTAL_PADDING,
        paddingVertical: paddingVertical3,
      };
      obj = obj1;
    }
  }
  let obj3 = ButtonConstants2;
  const buttonBorderRadius = obj3.getButtonBorderRadius(arg1);
  const obj2 = { pill: null, expressivePill: null, expressiveRiveFill: null, childContainer: null, ellipsis: null };
  obj3 = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: ButtonConstants2.BUTTON_BORDER_WIDTH,
    borderRadius: buttonBorderRadius,
  };
  const merged = Object.assign(obj);
  obj2.pill = obj3;
  obj2.expressivePill = { overflow: "hidden", borderRadius: buttonBorderRadius };
  obj2.expressiveRiveFill = { color: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
  obj2.childContainer = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "100%",
  };
  obj2.ellipsis = {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
  return obj2;
});
const __initData = {
  code: "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}",
};
const __initData2 = {
  code: "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

export const ButtonPill = function ButtonPill(loading) {
  if (null == loading.loading) {
    let obj = {};
    const merged = Object.assign(loading);
    let tmp6 = React5(BasicButtonPill, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(loading);
    tmp6 = React5(LoadingButtonPill, obj);
  }
  return tmp6;
};
export { BasicButtonPill };
export { LoadingButtonPill };
export { useLoadingStyles };
