// discord_app/design/components/Button/native/BaseTextButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
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
get_ActivityIndicator = fn(17);
({ Text: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4829);
let closure_9 = createStyles.createStyles((arg0, sm) => {
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
createStyles = fn(4829);
let closure_10 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", position: "relative" },
  textCollapsed: { position: "absolute", left: 0 },
});
createStyles = fn(4829);
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
const redux = noop.createContext("md");
const __initData = {
  code: "function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}",
};
const __initData2 = {
  code: "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}",
};
const __initData3 = {
  code: "function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}",
};
createStyles = fn(4829);
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
const LARGE_BUTTON_HEIGHT = fn(5279).LARGE_BUTTON_HEIGHT;
const bound = Math.max((fn(5279).MINIMUM_HIT_AREA - fn(5279).SMALL_BUTTON_HEIGHT) / 2, 0);
const rect = { top: bound, left: "Array", right: "ao", bottom: bound };
obj6.sm = rect;
const LARGE_BUTTON_HEIGHT2 = fn(5279).LARGE_BUTTON_HEIGHT;
const bound1 = Math.max((fn(5279).MINIMUM_HIT_AREA - fn(5279).MEDIUM_BUTTON_HEIGHT) / 2, 0);
const rect1 = { top: bound1, left: "Array", right: "ao", bottom: bound1 };
obj6.md = rect1;
const bound2 = Math.max((fn(5279).MINIMUM_HIT_AREA - fn(5279).LARGE_BUTTON_HEIGHT) / 2, 0);
const rect2 = { top: bound2, left: "Array", right: "ao", bottom: bound2 };
obj6.lg = rect2;
function getTextPlatformLineHeight(arg0, arg1) {}
let merged = Object.assign(
  {},
  noop.forwardRef((iconOpticalOffsetMargin, ref) => {
    ({ text, textElement, size } = iconOpticalOffsetMargin);
    ({ style, pillStyle } = iconOpticalOffsetMargin);
    if (undefined === size) {
      size = onPressIn(onLayout[10]).DEFAULT_BUTTON_SIZE;
    }
    ({ icon, iconPosition } = iconOpticalOffsetMargin);
    let str = "start";
    if (undefined !== iconPosition) {
      str = iconPosition;
    }
    iconOpticalOffsetMargin = iconOpticalOffsetMargin.iconOpticalOffsetMargin;
    let num = 0;
    if (undefined !== iconOpticalOffsetMargin) {
      num = iconOpticalOffsetMargin;
    }
    const grow = iconOpticalOffsetMargin.grow;
    let grow2 = undefined !== grow && grow;
    const shrink = iconOpticalOffsetMargin.shrink;
    let shrink2 = undefined !== shrink && shrink;
    ({ collapseText, accessibilityRole } = iconOpticalOffsetMargin);
    let str2 = "button";
    if (undefined !== accessibilityRole) {
      str2 = accessibilityRole;
    }
    ({ accessibilityLabel, maxFontSizeMultiplier } = iconOpticalOffsetMargin);
    if (undefined === maxFontSizeMultiplier) {
      maxFontSizeMultiplier = onPressIn(onLayout[10]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    }
    const shiny = iconOpticalOffsetMargin.shiny;
    onPressIn = iconOpticalOffsetMargin.onPressIn;
    const onPressOut = iconOpticalOffsetMargin.onPressOut;
    onLayout = iconOpticalOffsetMargin.onLayout;
    if (null != iconOpticalOffsetMargin.textVariant) {
      let textVariant = iconOpticalOffsetMargin.textVariant;
    } else {
      textVariant = onPressIn(onLayout[10]).getButtonDefaultTextVariant(size);
      let obj = onPressIn(onLayout[10]);
    }
    const tmp10 = onPressIn(onLayout[13]).TextStyleSheet[textVariant];
    const tmp11 = closure_9(size, tmp10.fontSize);
    const enabled = noop.useContext(onPressIn(onLayout[14]).AccessibilityPreferencesContext).reducedMotion.enabled;
    let str3 = iconOpticalOffsetMargin.variant;
    if (str3 == null) {
      str3 = "primary";
    }
    if ("tertiary" === str3) {
      str3 = "secondary";
    }
    const sharedValue = onPressIn(onLayout[6]).useSharedValue(0);
    const startsWithResult = str3.startsWith("expressive");
    noop = startsWithResult;
    obj2.useRef(null);
    ref = obj2.useRef({ width: 0, height: 0 });
    const tmp15 = enabled(noop.useState({ pressed: false, posx: 0, posy: 0 }), 2);
    closure_7 = tmp15[1];
    const items = [onLayout, startsWithResult];
    const items1 = [startsWithResult, onPressIn, enabled];
    const callback = obj2.useCallback((nativeEvent) => {
      if (onLayout != null) {
        tmp(nativeEvent);
      }
      if (startsWithResult) {
        const size = { width: null, height: null };
        ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
        closure_6.current = size;
      }
    }, items);
    const items2 = [startsWithResult, onPressOut];
    const callback1 = obj2.useCallback((nativeEvent) => {
      if (onPressIn != null) {
        tmp(nativeEvent);
      }
      if (startsWithResult) {
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
    const callback2 = obj2.useCallback((arg0) => {
      if (onPressOut != null) {
        tmp(arg0);
      }
      if (startsWithResult) {
        closure_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.pressed = false;
          return obj;
        });
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, items2);
    const tmp5 = undefined !== shiny && shiny;
    const tmp8Result = onPressIn(onLayout[6]);
    const buttonTextColorStyles = onPressIn(onLayout[12]).useButtonTextColorStyles(str3);
    if (null == icon) {
      let obj3 = {};
    } else {
      obj3 = "start" === str ? tmp11.iconLeft : tmp11.iconRight;
    }
    if (null == icon) {
      const obj4 = { icon, size, style: null, iconOpticalOffsetMargin: null, iconPosition: null };
      const items3 = [tmp11.icon];
      const obj5 = { tintColor: buttonTextColorStyles.color };
      items3[1] = obj5;
      obj4.style = items3;
      obj4.iconOpticalOffsetMargin = num;
      obj4.iconPosition = str;
      let tmp20 = closure_7(BaseTextButtonIcon, obj4);
    } else {
      tmp20 = icon;
    }
    if (null == textElement) {
      obj6 = { maxFontSizeMultiplier, numberOfLines: 1, style: null, children: null };
      const items4 = [tmp11.buttonText, tmp10, , ,];
      let androidLineHeight = null;
      if (tmp8Result5.isAndroid()) {
        androidLineHeight = tmp11.androidLineHeight;
      }
      items4[2] = androidLineHeight;
      items4[3] = buttonTextColorStyles;
      items4[4] = obj3;
      obj6.style = items4;
      obj6.children = text;
      textElement = closure_7(ref, obj6);
      tmp8Result5 = tmp8(tmp9[11]);
    }
    const obj7 = { ref };
    let merged = Object.assign(iconOpticalOffsetMargin);
    obj7.onPressIn = callback1;
    obj7.onPressOut = callback2;
    obj7.onLayout = callback;
    if (grow2) {
      grow2 = tmp11.grow;
    }
    const items5 = [grow2, , ,];
    if (shrink2) {
      shrink2 = tmp11.shrink;
    }
    items5[1] = shrink2;
    items5[2] = style;
    let expressiveButtonContainer = startsWithResult;
    if (startsWithResult) {
      expressiveButtonContainer = tmp11.expressiveButtonContainer;
    }
    items5[3] = expressiveButtonContainer;
    obj7.style = items5;
    let str4 = "box-only";
    if (!startsWithResult) {
      str4 = iconOpticalOffsetMargin.pointerEvents;
    }
    obj7.pointerEvents = str4;
    obj7.pressed = sharedValue;
    obj7.accessibilityRole = str2;
    if (accessibilityLabel == null) {
      accessibilityLabel = tmp8(tmp9[17]).getNodeText(text);
      const tmp8Result6 = tmp8(tmp9[17]);
    }
    obj7.accessibilityLabel = accessibilityLabel;
    obj7.hitSlop = obj6[size];
    const obj8 = {
      variant: str3,
      size,
      loading: iconOpticalOffsetMargin.loading,
      pressed: sharedValue,
      style: pillStyle,
      shiny: tmp5,
      expressiveRiveRef: null,
      expressivePressState: null,
      children: null,
    };
    let tmp28;
    if (startsWithResult) {
      tmp28 = ref;
    }
    obj8.expressiveRiveRef = tmp28;
    let first;
    if (startsWithResult) {
      first = tmp15[0];
    }
    obj8.expressivePressState = first;
    const obj9 = { value: size, children: null };
    let tmp31 = null != icon;
    if (tmp31) {
      tmp31 = "start" === str;
    }
    if (tmp31) {
      tmp31 = tmp20;
    }
    const items6 = [tmp31, ,];
    let tmp26Result = textElement;
    if (undefined !== collapseText) {
      const obj10 = { collapseText, children: textElement };
      tmp26Result = tmp26(CollapsingText, obj10);
    }
    items6[1] = tmp26Result;
    let tmp34 = null != icon;
    if (tmp34) {
      tmp34 = "end" === str;
    }
    if (tmp34) {
      tmp34 = tmp20;
    }
    items6[2] = tmp34;
    obj9.children = items6;
    obj8.children = closure_8(redux.Provider, obj9);
    obj7.children = closure_7(onPressIn(onLayout[18]).ButtonPill, obj8);
    return closure_7(onPressIn(onLayout[16]).BaseButton, obj7);
  }),
  {
    Icon: function TextButtonIcon(source) {
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
    },
  },
);
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export const BaseTextButton = merged;
