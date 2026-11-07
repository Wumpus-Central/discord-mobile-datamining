// discord_app/design/components/Button/native/ButtonPill.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import shared from "../../../shared.tsx";
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05715_LinearGradient.js";
import useToken from "../../../tokens/native/useToken.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants2 from "ButtonConstants.native.tsx";
import ButtonHooks from "ButtonHooks.native.tsx";
import ButtonShine from "ButtonShine.native.tsx";
import ButtonEllipsis from "ButtonEllipsis.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function PillWrapper(expressivePressState) {
  ({ children, variant, style, shiny } = expressivePressState);
  if (shiny === undefined) {
    shiny = false;
  }
  expressivePressState = expressivePressState.expressivePressState;
  ({ expressiveRiveRef, size } = expressivePressState);
  const buttonPillStyles = ButtonHooks.useButtonPillStyles(variant, expressivePressState.pressed);
  const gradientPillStyles = ButtonHooks.useGradientPillStyles(variant);
  const tmp5 = closure_13(variant, size);
  const obj3 = native;
  items = [useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), ,];
  items[1] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  items[2] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [
    nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS,
    nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2,
    nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS,
  ];
  let tmp7 = null;
  if (shiny) {
    const obj7 = { variant };
    tmp7 = metroImportDefault(ButtonShine.ButtonShine, obj7);
  }
  if ("experimental_premium-primary" !== variant) {
    if ("experimental_premium-basic" !== variant) {
      let tmp11Result = "expressive" === variant;
      if (tmp11Result) {
        const obj8 = { style: null, children: null };
        const items2 = [timestampProducer.absoluteFill, tmp5.expressivePill];
        obj8.style = items2;
        const obj9 = {
          withReducedMotion: "short-loop",
          ref: expressiveRiveRef,
          fit: "layout",
          artboard: null,
          dataBinding: null,
        };
        let str = "Mobile Expressive Button Dark Mode";
        if (tmpResult.isThemeLight(obj3.useThemeContext().theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj9.artboard = str;
        const obj10 = { buttonColor: tmp5.expressiveRiveFill.color, cornerRadius: tmp5.expressivePill.borderRadius };
        const merged = Object.assign(expressivePressState);
        obj9.dataBinding = obj10;
        obj8.children = metroImportDefault(native.ExpressiveButtonRive, obj9);
        tmp11Result = metroImportDefault(hasOwnProperty, obj8);
        tmpResult = shared;
      }
      let obj11 = { children: null };
      const items3 = [tmp11Result];
      const obj12 = { style: null, children: null };
      const items4 = [style, buttonPillStyles];
      obj12.style = items4;
      const items5 = [children, tmp7];
      obj12.children = items5;
      items3[1] = React5(_modDef1652.View, obj12);
      obj11.children = items3;
    }
    return React5(tmp10, obj11);
  }
  const obj13 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: null, colors: null };
  const items6 = [style, gradientPillStyles, timestampProducer.absoluteFill];
  obj13.style = items6;
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  const obj14 = { children: null };
  obj13.colors = items;
  const items7 = [metroImportDefault(LinearGradientDefault, obj13)];
  const obj15 = { style: null, children: null };
  const items8 = [style, buttonPillStyles];
  obj15.style = items8;
  const items9 = [children, tmp7];
  obj15.children = items9;
  items7[1] = React5(_modDef1652.View, obj15);
  obj14.children = items7;
  obj11 = obj14;
  const tmp6Result = LinearGradientDefault;
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
    tmp3 = closure_13(str, DEFAULT_BUTTON_SIZE);
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
    obj1 = { style: tmp3.childContainer, children };
    obj.children = jsx(View, obj1);
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
    tmp3 = closure_13(str, DEFAULT_BUTTON_SIZE);
    closure_1 = closure_4.useRef(null);
    tmp4 = closure_3(closure_4.useState(flag), 2);
    [tmp5, closure_2] = tmp4;
    items = [];
    items[0] = flag;
    effect = closure_4.useEffect(() => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      if (flag) {
        _undefined(true);
      } else {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
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
    obj1 = { style: null, children };
    items2 = [,];
    items2[0] = tmp3.childContainer;
    items2[1] = tmp8;
    obj1.style = items2;
    items3 = [,];
    items3[0] = jsx(closure_1(closure_2[12]).View, obj1);
    obj5 = { style: null, children: null };
    items4 = [,];
    items4[0] = tmp3.ellipsis;
    items4[1] = tmp9;
    obj5.style = items4;
    if (tmp12Result) {
      tmp14 = closure_0;
      obj6 = { variant: null, size: null };
      obj6.variant = str;
      if (loaderSize == null) {
        loaderSize = DEFAULT_BUTTON_SIZE;
      }
      obj6.size = loaderSize;
      tmp12Result = tmp12(closure_0(tmp13[14]).Ellipsis, obj6);
    }
    obj5.children = tmp12Result;
    items3[1] = tmp12(closure_1(closure_2[12]).View, obj5);
    obj.children = items3;
    return tmp10(tmp11, obj);
  }
}
function useLoadingStyles(flag, DEFAULT_BUTTON_SIZE) {
  const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
    .enabled;
  let num = 12;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    num = 18;
  }
  items = [
    closure_17,
    spring_spring.withSpring,
    flag,
    springPresets.SUBTLE_SPRING,
    enabled,
    _mod1652.withDelay,
    300,
    num,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class ButtonPillNativeTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      num = 1;
      if (closure_1) {
        num = 0;
      }
      tmp3 = closure_2;
      tmpResult = tmp(num, closure_2, "animate-always");
      obj = { opacity: null, transform: null };
      if (closure_3) {
        tmp7 = tmpResult;
        if (!tmp2) {
          tmp8 = closure_4;
          tmp9 = closure_5;
          tmp7 = closure_4(closure_5, tmpResult);
        }
        obj.opacity = tmp7;
        items = [];
        items[0] = { translateY: 0 };
        obj.transform = items;
        tmp6 = obj;
      } else {
        obj.opacity = tmpResult;
        num2 = 0;
        if (tmp2) {
          tmp5 = closure_6;
          num3 = -1;
          num2 = -1 * closure_6;
        }
        obj1 = { translateY: null };
        obj1.translateY = tmp(num2, tmp3);
        items1 = [];
        items1[0] = obj1;
        obj.transform = items1;
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  let items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  ButtonPillNativeTsx1.__closure = items1;
  ButtonPillNativeTsx1.__workletHash = 14635715851420;
  ButtonPillNativeTsx1.__initData = tmp3;
  const animatedStyle = _mod1652.useAnimatedStyle(ButtonPillNativeTsx1);
  let tmpResult = _mod1652;
  const items2 = [
    closure_18,
    spring_spring.withSpring,
    flag,
    springPresets.SUBTLE_SPRING,
    enabled,
    _mod1652.withDelay,
    300,
    num,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
  class ButtonPillNativeTsx2 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      num = 0;
      if (closure_1) {
        num = 1;
      }
      tmp3 = closure_2;
      tmpResult = tmp(num, closure_2, "animate-always");
      obj = { opacity: null, transform: null };
      if (closure_3) {
        tmp6 = tmpResult;
        if (tmp2) {
          tmp7 = closure_4;
          tmp8 = closure_5;
          tmp6 = closure_4(closure_5, tmpResult);
        }
        obj.opacity = tmp6;
        items = [];
        items[0] = { translateY: 0 };
        obj.transform = items;
        tmp5 = obj;
      } else {
        obj.opacity = tmpResult;
        num2 = 0;
        if (!tmp2) {
          num2 = closure_6;
        }
        obj1 = { translateY: null };
        obj1.translateY = tmp(num2, tmp3);
        items1 = [];
        items1[0] = obj1;
        obj.transform = items1;
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  ButtonPillNativeTsx2.__closure = items3;
  ButtonPillNativeTsx2.__workletHash = 5746320300361;
  ButtonPillNativeTsx2.__initData = tmp12;
  const items4 = [animatedStyle, _mod1652.useAnimatedStyle(ButtonPillNativeTsx2)];
  return items4;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let ButtonConstants = fn(5764);
const paddingVertical = ButtonConstants.getButtonPadding(fn(5764).SMALL_BUTTON_HEIGHT, fn(5764).SMALL_BUTTON_ICON_SIZE);
ButtonConstants = fn(5764);
const paddingVertical2 = ButtonConstants.getButtonPadding(
  fn(5764).MEDIUM_BUTTON_HEIGHT,
  fn(5764).MEDIUM_BUTTON_ICON_SIZE,
);
ButtonConstants = fn(5764);
const paddingVertical3 = ButtonConstants.getButtonPadding(
  fn(5764).LARGE_BUTTON_HEIGHT,
  fn(5764).LARGE_BUTTON_ICON_SIZE,
);
const createStyles = fn(5140);
const state = createStyles.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    const obj2 = {
      minHeight: ButtonConstants2.SMALL_BUTTON_HEIGHT,
      minWidth: ButtonConstants2.SMALL_BUTTON_HEIGHT,
      paddingHorizontal: ButtonConstants2.SMALL_BUTTON_HORIZONTAL_PADDING,
      paddingVertical,
    };
    let obj = obj2;
  } else if ("md" === arg1) {
    const obj3 = {
      minHeight: ButtonConstants2.MEDIUM_BUTTON_HEIGHT,
      minWidth: ButtonConstants2.MEDIUM_BUTTON_HEIGHT,
      paddingHorizontal: ButtonConstants2.MEDIUM_BUTTON_HORIZONTAL_PADDING,
      paddingVertical: paddingVertical2,
    };
    obj = obj3;
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj5 = {
        minHeight: ButtonConstants2.LARGE_BUTTON_HEIGHT,
        minWidth: ButtonConstants2.LARGE_BUTTON_HEIGHT,
        paddingHorizontal: ButtonConstants2.LARGE_BUTTON_HORIZONTAL_PADDING,
        paddingVertical: paddingVertical3,
      };
      obj = obj5;
    }
  }
  const buttonBorderRadius = ButtonConstants2.getButtonBorderRadius(arg1);
  const obj6 = { pill: null, expressivePill: null, expressiveRiveFill: null, childContainer: null, ellipsis: null };
  const merged = Object.assign(obj);
  obj6.pill = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: ButtonConstants2.BUTTON_BORDER_WIDTH,
    borderRadius: buttonBorderRadius,
  };
  obj6.expressivePill = { overflow: "hidden", borderRadius: buttonBorderRadius };
  const obj7 = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: ButtonConstants2.BUTTON_BORDER_WIDTH,
    borderRadius: buttonBorderRadius,
  };
  obj6.expressiveRiveFill = { color: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
  obj6.childContainer = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "100%",
  };
  obj6.ellipsis = {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
  return obj6;
});
let closure_17 = {
  code: "(function ButtonPillNativeTsx1(){let[withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY]=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};})",
};
let closure_18 = {
  code: "(function ButtonPillNativeTsx2(){let[withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY]=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

export function ButtonPill(loading) {
  if (null == loading.loading) {
    const obj2 = {};
    const merged = Object.assign(loading);
    let tmp6 = metroImportDefault(BasicButtonPill, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(loading);
    tmp6 = metroImportDefault(LoadingButtonPill, obj);
  }
  return tmp6;
}
export { BasicButtonPill };
export { LoadingButtonPill };
export { useLoadingStyles };
