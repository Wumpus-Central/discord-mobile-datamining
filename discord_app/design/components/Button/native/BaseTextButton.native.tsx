// === Module 5377: BaseTextButton ===

// Module 5377 (BaseTextButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4811 */;
import HapticUtils from "HapticUtils" /* 5056 */;
import spring from "spring" /* 5375 */;
import IconDefault from "Icon" /* 5378 */;
import springPresets from "springPresets" /* 5379 */;
import ButtonHooks from "ButtonHooks" /* 5382 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ Text: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(5091);
const options = createStyles.createStyles((arg0, sm) => {
  const obj = { grow: { flexGrow: 1, alignSelf: "stretch" }, shrink: { flexShrink: 1 }, buttonText: { flexShrink: 1, flexGrow: 0 }, androidLineHeight: null, icon: null, iconLeft: null, iconRight: null, expressiveButtonContainer: null };
  if (typeof getTextPlatformLineHeight === "function") {
    if (null != sm) {
      const obj2 = { sm, md: sm + 0.5, lg: sm + 1.9 };
      const tmp3 = obj2[arg0];
    }
    let tmp7;
    if (obj3.isAndroid()) {
      tmp7 = tmp3;
    }
    const obj4 = { lineHeight: tmp7 };
    obj.androidLineHeight = obj4;
    obj.icon = { flexShrink: 0, flexGrow: 0 };
    obj.iconLeft = { paddingLeft: 4 };
    obj.iconRight = { paddingRight: 4 };
    obj.expressiveButtonContainer = { position: "relative" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
createStyles = fn(5091);
let closure_10 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", position: "relative" }, textCollapsed: { position: "absolute", left: 0 } });
createStyles = fn(5091);
let obj = { entityWrapper: { borderWidth: 1, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" } };
let closure_11 = createStyles.createStyles(obj);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
noop.createContext("md");
const __initData = { code: "function BaseTextButtonNativeTsx1(t1){const{containerWidth}=this.__closure;const{nativeEvent:nativeEvent}=t1;if(containerWidth.get()!==0){return;}const{width:width}=nativeEvent.layout;containerWidth.set(width);}" };
const __initData2 = { code: "function BaseTextButtonNativeTsx2({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollapsingText(arg0) {
  const cResult = c.c(10);
  ({ children, collapseText } = arg0);
  const tmp3 = closure_10();
  const sharedValue = ReanimatedRexport2.useSharedValue(0);
  const fn = function n(nativeEvent) {
    if (0 === sharedValue.get()) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  fn.__closure = { containerWidth: sharedValue };
  fn.__workletHash = 14011826491350;
  fn.__initData = __initData;
  const items = [sharedValue];
  const workletCallback = ReanimatedRexport2.useWorkletCallback(fn, items);
  const tmp6 = closure_19(sharedValue, collapseText);
  const tmp7 = closure_22(sharedValue, collapseText);
  if (cResult[0] === tmp6) {
    if (cResult[1] === tmp3.container) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp7) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === workletCallback) {
        if (cResult[7] === tmp8) {
          if (cResult[8] === tmp9) {
            let tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
      const obj4 = { style: tmp8, onLayout: workletCallback, children: tmp9 };
      const tmp16 = React5(ReanimatedRexport.View, obj4);
      cResult[6] = workletCallback;
      cResult[7] = tmp8;
      cResult[8] = tmp9;
      cResult[9] = tmp16;
      tmp13 = tmp16;
    }
    const obj5 = { style: tmp7, children };
    const tmp12 = React5(ReanimatedRexport.View, obj5);
    cResult[3] = children;
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  const items1 = [tmp3.container, tmp6];
  cResult[0] = tmp6;
  cResult[1] = tmp3.container;
  cResult[2] = items1;
  tmp8 = items1;
}) : (function CollapsingText(children) {
  const collapseText = children.collapseText;
  const tmp = closure_10();
  const sharedValue = ReanimatedRexport2.useSharedValue(0);
  const fn = function o(nativeEvent) {
    if (0 === sharedValue.get()) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  fn.__closure = { containerWidth: sharedValue };
  fn.__workletHash = 14617966668944;
  fn.__initData = __initData2;
  const items = [sharedValue];
  const workletCallback = ReanimatedRexport2.useWorkletCallback(fn, items);
  const tmp4 = closure_19(sharedValue, collapseText);
  const obj3 = { style: null, onLayout: workletCallback, children: React5(ReanimatedRexport.View, { style: closure_22(sharedValue, collapseText), children: children.children }) };
  const items1 = [tmp.container, tmp4];
  obj3.style = items1;
  return React5(ReanimatedRexport.View, obj3);
});
const __initData3 = { code: "function BaseTextButtonNativeTsx3(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0){return{};}return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,\"animate-always\"),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,\"animate-always\")};}" };
const __initData4 = { code: "function BaseTextButtonNativeTsx4(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}" };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCollapsingTextContainerStyles(containerWidth, collapsed) {
  _require = containerWidth;
  const fn = function o() {
    if (0 === containerWidth.get()) {
      let obj2 = {};
    } else {
      let num2 = 1;
      let num = 0;
      if (1 !== collapsed.get()) {
        num = containerWidth.get();
      }
      obj2 = { width: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), opacity: null };
      if (num2 === collapsed.get()) {
        num2 = 0;
      }
      obj2.opacity = spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always");
      const tmpResult = spring;
    }
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { containerWidth, withSpring: require("spring").withSpring, collapsed, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn.__workletHash = 11030023180396;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : (function useCollapsingTextContainerStyles(containerWidth, collapsed) {
  _require = containerWidth;
  const fn = function o() {
    if (0 === containerWidth.get()) {
      let obj2 = {};
    } else {
      let num2 = 1;
      let num = 0;
      if (1 !== collapsed.get()) {
        num = containerWidth.get();
      }
      obj2 = { width: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), opacity: null };
      if (num2 === collapsed.get()) {
        num2 = 0;
      }
      obj2.opacity = spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always");
      const tmpResult = spring;
    }
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { containerWidth, withSpring: require("spring").withSpring, collapsed, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn.__workletHash = 5528763277901;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});
const __initData5 = { code: "function BaseTextButtonNativeTsx5(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0){return{};}return{...textCollapsed,width:containerWidth.get()};}" };
const __initData6 = { code: "function BaseTextButtonNativeTsx6(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}" };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCollapsingTextStyles(containerWidth, collapsed) {
  const textCollapsed = closure_10().textCollapsed;
  const fn = function o() {
    if (0 === collapsed.get()) {
      let obj = {};
    } else {
      obj = {};
      const merged = Object.assign(textCollapsed);
      obj.width = containerWidth.get();
    }
    return obj;
  };
  fn.__closure = { collapsed, textCollapsed, containerWidth };
  fn.__workletHash = 15223478677680;
  fn.__initData = __initData5;
  return ReanimatedRexport2.useAnimatedStyle(fn);
}) : (function useCollapsingTextStyles(containerWidth, collapsed) {
  const textCollapsed = closure_10().textCollapsed;
  const fn = function o() {
    if (0 === collapsed.get()) {
      let obj = {};
    } else {
      obj = {};
      const merged = Object.assign(textCollapsed);
      obj.width = containerWidth.get();
    }
    return obj;
  };
  fn.__closure = { collapsed, textCollapsed, containerWidth };
  fn.__workletHash = 4732498665045;
  fn.__initData = __initData6;
  return ReanimatedRexport2.useAnimatedStyle(fn);
});
createStyles = fn(5091);
let closure_23 = createStyles.createStyles((arg0, marginLeft) => {
  if (0 === marginLeft) {
    const obj2 = { offset: {} };
    return obj2;
  } else if ("start" === arg0) {
    const obj3 = { offset: null };
    const obj4 = { marginLeft };
    obj3.offset = obj4;
    return obj3;
  } else if ("end" === arg0) {
    const obj5 = { offset: null };
    obj6 = { marginRight: marginLeft };
    obj5.offset = obj6;
    return obj5;
  } else {
    const obj = { offset: {} };
    return obj;
  }
});
let obj6 = { sm: null, md: null, lg: null };
const LARGE_BUTTON_HEIGHT = fn(5381).LARGE_BUTTON_HEIGHT;
const bound = Math.max((fn(5381).MINIMUM_HIT_AREA - fn(5381).SMALL_BUTTON_HEIGHT) / 2, 0);
const rect = { top: bound, left: "Array", right: "code", bottom: bound };
obj6.sm = rect;
const LARGE_BUTTON_HEIGHT2 = fn(5381).LARGE_BUTTON_HEIGHT;
const bound1 = Math.max((fn(5381).MINIMUM_HIT_AREA - fn(5381).MEDIUM_BUTTON_HEIGHT) / 2, 0);
const rect1 = { top: bound1, left: "Array", right: "code", bottom: bound1 };
obj6.md = rect1;
const bound2 = Math.max((fn(5381).MINIMUM_HIT_AREA - fn(5381).LARGE_BUTTON_HEIGHT) / 2, 0);
const rect2 = { top: bound2, left: "Array", right: "code", bottom: bound2 };
obj6.lg = rect2;
function getTextPlatformLineHeight(arg0, arg1) {

}
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseTextButtonIcon(arg0) {
  const cResult = c.c(7);
  ({ icon, style, size, iconPosition, iconOpticalOffsetMargin } = arg0);
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(size);
  const tmp3 = closure_23(iconPosition, iconOpticalOffsetMargin);
  if (cResult[0] === tmp3.offset) {
    if (cResult[1] === iconSizeStyles) {
      if (cResult[2] === style) {
        let tmp4 = cResult[3];
      }
      if (cResult[4] === icon) {
        if (cResult[5] === tmp4) {
          let tmp5 = cResult[6];
        }
        return tmp5;
      }
      const obj3 = { source: icon, style: tmp4 };
      const tmp8 = React5(Icon, obj3);
      cResult[4] = icon;
      cResult[5] = tmp4;
      cResult[6] = tmp8;
      tmp5 = tmp8;
    }
  }
  const items = [style, iconSizeStyles, tmp3.offset];
  cResult[0] = tmp3.offset;
  cResult[1] = iconSizeStyles;
  cResult[2] = style;
  cResult[3] = items;
  tmp4 = items;
}) : (function BaseTextButtonIcon(arg0) {
  ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(size);
  const obj2 = { source: icon, style: null };
  const items = [style, iconSizeStyles, closure_23(iconPosition, iconOpticalOffsetMargin).offset];
  obj2.style = items;
  return React5(Icon, obj2);
});
ReactCompilerGating = fn(558);
class BaseTextButton {
  constructor(arg0) {
    merged = Object.assign(global, Object.assign({ ref: 0 }));
    onPressIn = undefined;
    onPressOut = undefined;
    onLayout = undefined;
    enabled = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    ({ text, textElement, size, style, pillStyle } = merged);
    if (undefined === size) {
      tmp2 = onPressIn;
      tmp3 = onLayout;
      size = onPressIn(onLayout[12]).DEFAULT_BUTTON_SIZE;
    }
    ({ icon, iconPosition } = merged);
    str = "start";
    if (undefined !== iconPosition) {
      str = iconPosition;
    }
    iconOpticalOffsetMargin = merged.iconOpticalOffsetMargin;
    num = 0;
    if (undefined !== iconOpticalOffsetMargin) {
      num = iconOpticalOffsetMargin;
    }
    grow = merged.grow;
    grow2 = undefined !== grow && grow;
    shrink = merged.shrink;
    shrink2 = undefined !== shrink && shrink;
    ({ collapseText, accessibilityRole } = merged);
    str2 = "button";
    if (undefined !== accessibilityRole) {
      str2 = accessibilityRole;
    }
    ({ accessibilityLabel, maxFontSizeMultiplier } = merged);
    if (undefined === maxFontSizeMultiplier) {
      tmp4 = onPressIn;
      tmp5 = onLayout;
      maxFontSizeMultiplier = onPressIn(onLayout[12]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    }
    shiny = merged.shiny;
    tmp6 = undefined !== shiny && shiny;
    onPressIn = merged.onPressIn;
    onPressOut = merged.onPressOut;
    onLayout = merged.onLayout;
    if (null != merged.textVariant) {
      textVariant = merged.textVariant;
    } else {
      tmp7 = onPressIn;
      tmp8 = onLayout;
      obj = onPressIn(onLayout[12]);
      textVariant = obj.getButtonDefaultTextVariant(size);
    }
    tmp9 = onPressIn;
    tmp10 = onLayout;
    tmp11 = onPressIn(onLayout[15]).TextStyleSheet[textVariant];
    tmp12 = closure_9(size, tmp11.fontSize);
    obj2 = closure_4;
    enabled = closure_4.useContext(onPressIn(onLayout[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
    str3 = merged.variant;
    if (str3 == null) {
      str3 = "primary";
    }
    if ("tertiary" === str3) {
      str3 = "secondary";
    }
    tmp9Result = tmp9(tmp10[6]);
    sharedValue = tmp9Result.useSharedValue(0);
    startsWithResult = str3.startsWith("expressive");
    closure_4 = startsWithResult;
    ref = obj2.useRef(null);
    closure_5 = ref;
    closure_6 = obj2.useRef({ width: 0, height: 0 });
    tmp16 = enabled(obj2.useState({ pressed: false, posx: 0, posy: 0 }), 2);
    closure_7 = tmp16[1];
    items = [, ];
    items[0] = onLayout;
    items[1] = startsWithResult;
    items1 = [, , ];
    items1[0] = startsWithResult;
    items1[1] = onPressIn;
    items1[2] = enabled;
    callback = obj2.useCallback((nativeEvent) => {
      if (onLayout != null) {
        tmp(nativeEvent);
      }
      if (c4) {
        const size = { width: null, height: null };
        ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
        closure_6.current = size;
      }
    }, items);
    items2 = [, ];
    items2[0] = startsWithResult;
    items2[1] = onPressOut;
    callback1 = obj2.useCallback((nativeEvent) => {
      if (onPressIn != null) {
        tmp(nativeEvent);
      }
      if (c4) {
        if (enabled) {
          const current2 = ref.current;
          if (current2 != tmp2) {
            current2.play();
          }
        } else {
          nativeEvent = nativeEvent.nativeEvent;
          const current = ref.current;
          const obj = { pressed: true, posx: nativeEvent.locationX - current.width / 2, posy: nativeEvent.locationY - current.height / 2 };
          closure_7(obj);
        }
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
      }
    }, items1);
    callback2 = obj2.useCallback((arg0) => {
      if (onPressOut != null) {
        tmp(arg0);
      }
      if (c4) {
        closure_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.pressed = false;
          return obj;
        });
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, items2);
    tmp9Result1 = tmp9(tmp10[14]);
    buttonTextColorStyles = tmp9Result1.useButtonTextColorStyles(str3);
    if (null == icon) {
      obj1 = {};
    } else {
      obj1 = "start" === str ? tmp12.iconLeft : tmp12.iconRight;
    }
    if (null == icon) {
      tmp22 = closure_7;
      tmp23 = BaseTextButtonIcon;
      obj15 = { icon: null, size: null, style: null, iconOpticalOffsetMargin: null, iconPosition: null };
      obj15.icon = icon;
      obj15.size = size;
      items3 = [, ];
      items3[0] = tmp12.icon;
      obj16 = { tintColor: null };
      obj16.tintColor = buttonTextColorStyles.color;
      items3[1] = obj16;
      obj15.style = items3;
      obj15.iconOpticalOffsetMargin = num;
      obj15.iconPosition = str;
      tmp21 = closure_7(BaseTextButtonIcon, obj15);
    } else {
      tmp21 = icon;
    }
    if (null == textElement) {
      obj17 = { maxFontSizeMultiplier: null, numberOfLines: 1, style: null, children: null };
      obj17.maxFontSizeMultiplier = maxFontSizeMultiplier;
      items4 = [, , , , ];
      items4[0] = tmp12.buttonText;
      items4[1] = tmp11;
      tmp24 = closure_7;
      tmp25 = closure_5;
      tmp9Result2 = tmp9(tmp10[13]);
      androidLineHeight = null;
      if (tmp9Result2.isAndroid()) {
        androidLineHeight = tmp12.androidLineHeight;
      }
      items4[2] = androidLineHeight;
      items4[3] = buttonTextColorStyles;
      items4[4] = obj1;
      obj17.style = items4;
      obj17.children = text;
      textElement = tmp24(tmp25, obj17);
    }
    tmp27 = closure_7;
    obj18 = { ref: global.ref };
    merged1 = Object.assign(merged);
    obj18.onPressIn = callback1;
    obj18.onPressOut = callback2;
    obj18.onLayout = callback;
    if (grow2) {
      grow2 = tmp12.grow;
    }
    items5 = [, , , ];
    items5[0] = grow2;
    if (shrink2) {
      shrink2 = tmp12.shrink;
    }
    items5[1] = shrink2;
    items5[2] = style;
    expressiveButtonContainer = startsWithResult;
    if (startsWithResult) {
      expressiveButtonContainer = tmp12.expressiveButtonContainer;
    }
    items5[3] = expressiveButtonContainer;
    obj18.style = items5;
    str4 = "box-only";
    if (!startsWithResult) {
      str4 = merged.pointerEvents;
    }
    obj18.pointerEvents = str4;
    obj18.pressed = sharedValue;
    obj18.accessibilityRole = str2;
    if (accessibilityLabel == null) {
      tmp9Result3 = tmp9(tmp10[19]);
      accessibilityLabel = tmp9Result3.getNodeText(text);
    }
    obj18.accessibilityLabel = accessibilityLabel;
    obj18.hitSlop = closure_24[size];
    obj19 = { variant: str3, size, loading: merged.loading, pressed: sharedValue, style: pillStyle, shiny: tmp6, expressiveRiveRef: null, expressivePressState: null, children: null };
    tmp29 = undefined;
    if (startsWithResult) {
      tmp29 = ref;
    }
    obj19.expressiveRiveRef = tmp29;
    first = undefined;
    if (startsWithResult) {
      first = tmp16[0];
    }
    obj19.expressivePressState = first;
    obj20 = { value: size, children: null };
    tmp32 = null != icon;
    tmp31 = jsxs;
    if (tmp32) {
      tmp32 = "start" === str;
    }
    if (tmp32) {
      tmp32 = tmp21;
    }
    items6 = [, , ];
    items6[0] = tmp32;
    tmp27Result = textElement;
    if (undefined !== collapseText) {
      tmp34 = CollapsingText;
      obj21 = { collapseText: null, children: null };
      obj21.collapseText = collapseText;
      obj21.children = textElement;
      tmp27Result = tmp27(CollapsingText, obj21);
    }
    items6[1] = tmp27Result;
    tmp35 = null != icon;
    if (tmp35) {
      str5 = "end";
      tmp35 = "end" === str;
    }
    if (tmp35) {
      tmp35 = tmp21;
    }
    items6[2] = tmp35;
    obj20.children = items6;
    obj19.children = tmp31(closure_13.Provider, obj20);
    obj18.children = tmp27(tmp9(tmp10[20]).ButtonPill, obj19);
    return tmp27(tmp9(tmp10[18]).BaseButton, obj18);
  }
}
BaseTextButton.Icon = ReactCompilerGating.isReactCompilerEnabled() ? (function TextButtonIcon(arg0) {
  const cResult = c.c(7);
  ({ source, variant, disableColor } = arg0);
  let str = "icon";
  if (undefined !== variant) {
    str = variant;
  }
  const context = noop.useContext(closure_13);
  let entityWrapper = closure_11();
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(context);
  if (cResult[0] === (undefined === disableColor || disableColor)) {
    if (cResult[1] === iconSizeStyles) {
      if (cResult[2] === source) {
        let tmp7 = cResult[3];
      }
      if ("entity" !== str) {
        return tmp7;
      } else {
        if (cResult[4] === tmp7) {
        }
        const obj2 = { style: entityWrapper.entityWrapper, children: tmp7 };
        const tmp13 = React5(timestampProducer, obj2);
        cResult[4] = tmp7;
        entityWrapper = entityWrapper.entityWrapper;
        cResult[5] = entityWrapper;
        cResult[6] = tmp13;
      }
    }
  }
  const tmp8 = React5(Icon, { source, disableColor: undefined === disableColor || disableColor, style: iconSizeStyles });
  cResult[0] = undefined === disableColor || disableColor;
  cResult[1] = iconSizeStyles;
  cResult[2] = source;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const tmpResult = ButtonHooks;
}) : (function TextButtonIcon(source) {
  let str = source.variant;
  if (str === undefined) {
    str = "icon";
  }
  let flag = source.disableColor;
  if (flag === undefined) {
    flag = true;
  }
  const context = noop.useContext(closure_13);
  const tmp2 = closure_11();
  const tmp4 = React5(Icon, { source: source.source, disableColor: flag, style: ButtonHooks.useIconSizeStyles(context) });
  let tmp3Result = tmp4;
  if ("entity" === str) {
    const obj3 = { style: tmp2.entityWrapper, children: tmp4 };
    tmp3Result = React5(timestampProducer, obj3);
  }
  return tmp3Result;
});
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export { BaseTextButton };