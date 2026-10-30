// discord_app/design/components/Button/native/BaseTextButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonHooks from "ButtonHooks.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
function CollapsingText(children) {
  const collapseText = children.collapseText;
  let sharedValue;
  const tmp = closure_10();
  sharedValue = sharedValue(textCollapsed[6]).useSharedValue(0);
  let obj = sharedValue(textCollapsed[6]);
  const fn = function o(nativeEvent) {
    if (0 === sharedValue.get()) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  fn.__closure = { containerWidth: sharedValue };
  fn.__workletHash = 5541458715155;
  fn.__initData = __initData;
  const items = [sharedValue];
  closure_129_0 = sharedValue;
  closure_129_1 = collapseText;
  let obj2 = sharedValue(textCollapsed[6]);
  const workletCallback = sharedValue(textCollapsed[6]).useWorkletCallback(fn, items);
  const fn2 = function o() {
    if (0 === sharedValue.get()) {
      let obj2 = {};
    } else {
      let num2 = 1;
      let num = 0;
      if (1 !== collapseText.get()) {
        num = sharedValue.get();
      }
      obj2 = { width: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), opacity: null };
      if (num2 === collapseText.get()) {
        num2 = 0;
      }
      obj2.opacity = spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always");
      const tmpResult = spring;
    }
    return obj2;
  };
  const obj3 = sharedValue(textCollapsed[6]);
  fn2.__closure = {
    containerWidth: sharedValue,
    withSpring: sharedValue(textCollapsed[8]).withSpring,
    collapsed: collapseText,
    SUBTLE_SPRING: sharedValue(textCollapsed[9]).SUBTLE_SPRING,
  };
  fn2.__workletHash = 493185281611;
  fn2.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  textCollapsed = closure_10().textCollapsed;
  let obj4 = {
    containerWidth: sharedValue,
    withSpring: sharedValue(textCollapsed[8]).withSpring,
    collapsed: collapseText,
    SUBTLE_SPRING: sharedValue(textCollapsed[9]).SUBTLE_SPRING,
  };
  const fn3 = function s() {
    if (0 === collapseText.get()) {
      let obj = {};
    } else {
      obj = {};
      const merged = Object.assign(textCollapsed);
      obj.width = sharedValue.get();
    }
    return obj;
  };
  fn3.__closure = { collapsed: collapseText, textCollapsed, containerWidth: sharedValue };
  fn3.__workletHash = 5824483783888;
  fn3.__initData = __initData3;
  const animatedStyle1 = sharedValue(textCollapsed[6]).useAnimatedStyle(fn3);
  obj6 = {
    style: null,
    onLayout: workletCallback,
    children: closure_7(collapseText(textCollapsed[6]).View, { style: animatedStyle1, children: children.children }),
  };
  const items1 = [tmp.container, animatedStyle];
  obj6.style = items1;
  return closure_7(collapseText(textCollapsed[6]).View, obj6);
}
function BaseTextButtonIcon(arg0) {
  ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(size);
  const obj2 = { source: icon, style: null };
  const items = [style, iconSizeStyles, closure_18(iconPosition, iconOpticalOffsetMargin).offset];
  obj2.style = items;
  return React5(Icon, obj2);
}
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
      size = onPressIn(onLayout[10]).DEFAULT_BUTTON_SIZE;
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
      maxFontSizeMultiplier = onPressIn(onLayout[10]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
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
      obj = onPressIn(onLayout[10]);
      textVariant = obj.getButtonDefaultTextVariant(size);
    }
    tmp9 = onPressIn;
    tmp10 = onLayout;
    tmp11 = onPressIn(onLayout[13]).TextStyleSheet[textVariant];
    tmp12 = closure_9(size, tmp11.fontSize);
    obj2 = closure_4;
    enabled = closure_4.useContext(onPressIn(onLayout[14]).AccessibilityPreferencesContext).reducedMotion.enabled;
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
    items = [,];
    items[0] = onLayout;
    items[1] = startsWithResult;
    items1 = [, ,];
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
    items2 = [,];
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
          const obj = {
            pressed: true,
            posx: nativeEvent.locationX - current.width / 2,
            posy: nativeEvent.locationY - current.height / 2,
          };
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
    tmp9Result1 = tmp9(tmp10[12]);
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
      items3 = [,];
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
      items4 = [, , , ,];
      items4[0] = tmp12.buttonText;
      items4[1] = tmp11;
      tmp24 = closure_7;
      tmp25 = closure_5;
      tmp9Result2 = tmp9(tmp10[11]);
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
    items5 = [, , ,];
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
      tmp9Result3 = tmp9(tmp10[17]);
      accessibilityLabel = tmp9Result3.getNodeText(text);
    }
    obj18.accessibilityLabel = accessibilityLabel;
    obj18.hitSlop = closure_19[size];
    obj19 = {
      variant: str3,
      size,
      loading: merged.loading,
      pressed: sharedValue,
      style: pillStyle,
      shiny: tmp6,
      expressiveRiveRef: null,
      expressivePressState: null,
      children: null,
    };
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
    items6 = [, ,];
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
    obj18.children = tmp27(tmp9(tmp10[18]).ButtonPill, obj19);
    return tmp27(tmp9(tmp10[16]).BaseButton, obj18);
  }
}
get_ActivityIndicator = fn(17);
({ Text: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(5009);
const React7 = createStyles.createStyles((arg0, sm) => {
  const obj = {
    grow: { flexGrow: 1, alignSelf: "stretch" },
    shrink: { flexShrink: 1 },
    buttonText: { flexShrink: 1, flexGrow: 0 },
    androidLineHeight: null,
    icon: null,
    iconLeft: null,
    iconRight: null,
    expressiveButtonContainer: null,
  };
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
createStyles = fn(5009);
let closure_10 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", position: "relative" },
  textCollapsed: { position: "absolute", left: 0 },
});
createStyles = fn(5009);
let obj = {
  entityWrapper: {
    borderWidth: 1,
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    overflow: "hidden",
  },
};
let closure_11 = createStyles.createStyles(obj);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
noop.createContext("md");
const __initData = {
  code: "function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}",
};
const __initData2 = {
  code: "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}",
};
const __initData3 = {
  code: "function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}",
};
createStyles = fn(5009);
let closure_18 = createStyles.createStyles((arg0, marginLeft) => {
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
const LARGE_BUTTON_HEIGHT = fn(5635).LARGE_BUTTON_HEIGHT;
const bound = Math.max((fn(5635).MINIMUM_HIT_AREA - fn(5635).SMALL_BUTTON_HEIGHT) / 2, 0);
const rect = { top: bound, left: "Array", right: "applicationId", bottom: bound };
obj6.sm = rect;
const LARGE_BUTTON_HEIGHT2 = fn(5635).LARGE_BUTTON_HEIGHT;
const bound1 = Math.max((fn(5635).MINIMUM_HIT_AREA - fn(5635).MEDIUM_BUTTON_HEIGHT) / 2, 0);
const rect1 = { top: bound1, left: "Array", right: "applicationId", bottom: bound1 };
obj6.md = rect1;
const bound2 = Math.max((fn(5635).MINIMUM_HIT_AREA - fn(5635).LARGE_BUTTON_HEIGHT) / 2, 0);
const rect2 = { top: bound2, left: "Array", right: "applicationId", bottom: bound2 };
obj6.lg = rect2;
function getTextPlatformLineHeight(arg0, arg1) {}
BaseTextButton.Icon = function TextButtonIcon(source) {
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
  const tmp4 = React5(Icon, {
    source: source.source,
    disableColor: flag,
    style: ButtonHooks.useIconSizeStyles(context),
  });
  let tmp3Result = tmp4;
  if ("entity" === str) {
    const obj3 = { style: tmp2.entityWrapper, children: tmp4 };
    tmp3Result = React5(timestampProducer, obj3);
  }
  return tmp3Result;
};
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export { BaseTextButton };
