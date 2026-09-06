// discord_app/design/components/Button/native/BaseTextButton.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import IconSizesDefault from "../../../void/Icon/native/Icon.tsx";
import styleProperties from "ButtonHooks.native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import { LARGE_BUTTON_HEIGHT, LARGE_BUTTON_HEIGHT as LARGE_BUTTON_HEIGHT2 } from "ButtonConstants.native.tsx";
import importDefaultResult from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = arg1;
function CollapsingText(children) {
  const collapseText = children.collapseText;
  let sharedValue;
  let obj = sharedValue(textCollapsed[6]);
  sharedValue = obj.useSharedValue(0);
  const tmp = callback3();
  const fn = function o(nativeEvent) {
    if (0 === sharedValue.get()) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  fn.__closure = { containerWidth: sharedValue };
  fn.__workletHash = 5541458715155;
  fn.__initData = closure_14;
  const items = [sharedValue];
  const obj2 = sharedValue(textCollapsed[6]);
  const workletCallback = sharedValue(textCollapsed[6]).useWorkletCallback(fn, items);
  const fn2 = function o() {
    let obj = sharedValue;
    if (0 === sharedValue.get()) {
      obj = {};
    } else {
      let num2 = 1;
      let num = 0;
      if (1 !== collapseText.get()) {
        num = obj.get();
      }
      obj = { width: null, opacity: null };
      obj[0] = sharedValue(textCollapsed[8]).withSpring(
        num,
        sharedValue(textCollapsed[9]).SUBTLE_SPRING,
        "animate-always",
      );
      const obj4 = sharedValue(textCollapsed[8]);
      const obj5 = collapseText;
      if (num2 === obj5.get()) {
        num2 = 0;
      }
      obj[1] = sharedValue(textCollapsed[8]).withSpring(
        num2,
        sharedValue(textCollapsed[9]).SUBTLE_SPRING,
        "animate-always",
      );
      const tmpResult = sharedValue(textCollapsed[8]);
    }
    return obj;
  };
  obj = {
    containerWidth: sharedValue,
    withSpring: sharedValue(textCollapsed[8]).withSpring,
    collapsed: collapseText,
    SUBTLE_SPRING: sharedValue(textCollapsed[9]).SUBTLE_SPRING,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 493185281611;
  fn2.__initData = closure_16;
  textCollapsed = undefined;
  const animatedStyle = sharedValue(textCollapsed[6]).useAnimatedStyle(fn2);
  textCollapsed = callback3().textCollapsed;
  const obj3 = sharedValue(textCollapsed[6]);
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
  fn3.__initData = closure_17;
  const animatedStyle1 = sharedValue(textCollapsed[6]).useAnimatedStyle(fn3);
  obj = {
    style: items1,
    onLayout: workletCallback,
    children: callback(collapseText(textCollapsed[6]).View, { style: animatedStyle1, children: children.children }),
  };
  items1 = [tmp.container, animatedStyle];
  return callback(collapseText(textCollapsed[6]).View, obj);
}
function BaseTextButtonIcon(arg0) {
  ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
  let obj = styleProperties;
  const iconSizeStyles = obj.useIconSizeStyles(size);
  obj = { source: icon, style: null };
  const items = [style, iconSizeStyles, callback5(iconPosition, iconOpticalOffsetMargin).offset];
  obj[1] = items;
  return callback(closure_12, obj);
}
let c4 = importAllResult;
({ Text: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = {
    grow: { flexGrow: 1, alignSelf: "stretch" },
    shrink: { flexShrink: 1 },
    buttonText: { flexShrink: 1, flexGrow: 0 },
    androidLineHeight: null,
    icon: null,
    iconLeft: null,
    iconRight: null,
    expressiveButtonContainer: null,
  };
  if (typeof getTextPlatformLineHeight !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (null != arg1) {
    obj = { sm: null, md: null, lg: null };
    obj[0] = arg1;
    obj[1] = arg1 + 0.5;
    obj[2] = arg1 + 1.9;
    const tmp = obj[arg0];
  }
  let tmp3;
  if (obj3.isAndroid()) {
    tmp3 = tmp;
  }
  obj[3] = { lineHeight: tmp3 };
  obj[4] = { flexShrink: 0, flexGrow: 0 };
  obj[5] = { paddingLeft: 4 };
  obj[6] = { paddingRight: 4 };
  obj[7] = { position: "relative" };
  return obj;
});
let closure_10 = createCacheKey.createStyles({
  container: { flexDirection: "row", alignItems: "center", position: "relative" },
  textCollapsed: { position: "absolute", left: 0 },
});
let obj = { entityWrapper: null };
obj = {
  borderWidth: 1,
  borderRadius: ThemesDefault.radii.round,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = importDefaultResult.createAnimatedComponent(IconSizesDefault);
let context = importAllResult.createContext("md");
let closure_14 = {
  code: "function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}",
};
let closure_16 = {
  code: "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}",
};
let closure_17 = {
  code: "function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}",
};
let closure_18 = createCacheKey.createStyles((arg0, arg1) => {
  if (0 === arg1) {
    let obj = { offset: null };
    obj[0] = {};
    return obj;
  } else if ("start" === arg0) {
    obj = { offset: null };
    obj1 = { marginLeft: null };
    obj1[0] = arg1;
    obj[0] = obj1;
    return obj;
  } else if ("end" === arg0) {
    const obj2 = { offset: null };
    const obj3 = { marginRight: null };
    obj3[0] = arg1;
    obj2[0] = obj3;
    return obj2;
  } else {
    obj = { offset: null };
    obj[0] = {};
    return obj;
  }
});
createCacheKey = { sm: null, md: null, lg: null };
const bound = Math.max(
  (require("MINIMUM_HIT_AREA").MINIMUM_HIT_AREA - require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT) / 2,
  0,
);
createCacheKey = { top: bound, left: "Array", right: "isArray", bottom: -11665405 };
createCacheKey[3] = bound;
createCacheKey[0] = createCacheKey;
const bound1 = Math.max(
  (require("MINIMUM_HIT_AREA").MINIMUM_HIT_AREA - require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT) / 2,
  0,
);
createCacheKey = { top: bound1, left: "Array", right: "isArray", bottom: -11665405 };
createCacheKey[3] = bound1;
createCacheKey[1] = createCacheKey;
const bound2 = Math.max(
  (require("MINIMUM_HIT_AREA").MINIMUM_HIT_AREA - require("MINIMUM_HIT_AREA").LARGE_BUTTON_HEIGHT) / 2,
  0,
);
let obj4 = { top: bound2, left: "Array", right: "isArray", bottom: -11665405 };
obj4[3] = bound2;
createCacheKey[2] = obj4;
function getTextPlatformLineHeight(arg0, arg1) {}
let merged = Object.assign(
  {},
  importAllResult.forwardRef((iconOpticalOffsetMargin, ref) => {
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
      let obj = onPressIn(onLayout[10]);
      textVariant = obj.getButtonDefaultTextVariant(size);
    }
    const tmp10 = onPressIn(onLayout[13]).TextStyleSheet[textVariant];
    const tmp11 = callback2(size, tmp10.fontSize);
    obj1 = importAllResult;
    const enabled = importAllResult.useContext(onPressIn(onLayout[14]).AccessibilityPreferencesContext).reducedMotion
      .enabled;
    let str3 = iconOpticalOffsetMargin.variant;
    if (str3 == null) {
      str3 = "primary";
    }
    if ("tertiary" === str3) {
      str3 = "secondary";
    }
    let tmp8Result = tmp8(tmp9[6]);
    const sharedValue = tmp8Result.useSharedValue(0);
    const startsWithResult = str3.startsWith("expressive");
    ref = obj1.useRef(null);
    closure_6 = obj1.useRef({ width: 0, height: 0 });
    const tmp15 = enabled(obj1.useState({ pressed: false, posx: 0, posy: 0 }), 2);
    let callback = tmp15[1];
    const items = [onLayout, startsWithResult];
    const items1 = [startsWithResult, onPressIn, enabled];
    callback = obj1.useCallback((nativeEvent) => {
      if (onLayout != null) {
        tmp(nativeEvent);
      }
      if (closure_4) {
        const obj = { width: null, height: null };
        ({ width: obj[0], height: obj[1] } = nativeEvent.nativeEvent.layout);
        closure_6.current = obj;
      }
    }, items);
    const items2 = [startsWithResult, onPressOut];
    const callback1 = obj1.useCallback((nativeEvent) => {
      if (onPressIn != null) {
        tmp(nativeEvent);
      }
      if (closure_4) {
        if (enabled) {
          const current2 = ref.current;
          if (current2 != tmp2) {
            current2.play();
          }
        } else {
          nativeEvent = nativeEvent.nativeEvent;
          const current = ref.current;
          const obj = { pressed: true, posx: null, posy: null };
          obj[1] = nativeEvent.locationX - current.width / 2;
          obj[2] = nativeEvent.locationY - current.height / 2;
          callback(obj);
        }
        const result = onPressIn(onLayout[15]).triggerHapticFeedback(
          onPressIn(onLayout[15]).HapticFeedbackTypes.IMPACT_HEAVY,
        );
        const obj2 = onPressIn(onLayout[15]);
      }
    }, items1);
    callback2 = obj1.useCallback((arg0) => {
      if (onPressOut != null) {
        tmp(arg0);
      }
      if (closure_4) {
        callback((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.pressed = false;
          return obj;
        });
        const result = onPressIn(onLayout[15]).triggerHapticFeedback(
          onPressIn(onLayout[15]).HapticFeedbackTypes.IMPACT_MEDIUM,
        );
        let obj = onPressIn(onLayout[15]);
      }
    }, items2);
    tmp8Result = tmp8(tmp9[12]);
    const buttonTextColorStyles = tmp8Result.useButtonTextColorStyles(str3);
    if (null == icon) {
      obj = {};
    } else {
      obj = "start" === str ? tmp11.iconLeft : tmp11.iconRight;
    }
    if (null == icon) {
      obj = { icon: null, size: null, style: null, iconOpticalOffsetMargin: null, iconPosition: null };
      obj[0] = icon;
      obj[1] = size;
      const items3 = [tmp11.icon];
      obj1 = { tintColor: null };
      obj1[0] = buttonTextColorStyles.color;
      items3[1] = obj1;
      obj[2] = items3;
      obj[3] = num;
      obj[4] = str;
      let tmp20 = callback(BaseTextButtonIcon, obj);
    } else {
      tmp20 = icon;
    }
    if (null == textElement) {
      let obj2 = { maxFontSizeMultiplier: null, numberOfLines: 1, style: null, children: null };
      obj2[0] = maxFontSizeMultiplier;
      const items4 = [tmp11.buttonText, tmp10, , ,];
      let androidLineHeight = null;
      if (tmp8Result1.isAndroid()) {
        androidLineHeight = tmp11.androidLineHeight;
      }
      items4[2] = androidLineHeight;
      items4[3] = buttonTextColorStyles;
      items4[4] = obj;
      obj2[2] = items4;
      obj2[3] = text;
      textElement = callback(ref, obj2);
      const tmp23 = callback;
      const tmp24 = ref;
      tmp8Result1 = tmp8(tmp9[11]);
    }
    const obj3 = { ref };
    let merged = Object.assign(iconOpticalOffsetMargin);
    obj3.onPressIn = callback1;
    obj3.onPressOut = callback2;
    obj3.onLayout = callback;
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
    obj3.style = items5;
    let str4 = "box-only";
    if (!startsWithResult) {
      str4 = iconOpticalOffsetMargin.pointerEvents;
    }
    obj3.pointerEvents = str4;
    obj3.pressed = sharedValue;
    obj3.accessibilityRole = str2;
    if (accessibilityLabel == null) {
      accessibilityLabel = tmp8(tmp9[17]).getNodeText(text);
      const tmp8Result2 = tmp8(tmp9[17]);
    }
    obj3.accessibilityLabel = accessibilityLabel;
    obj3.hitSlop = createCacheKey[size];
    const obj4 = {
      variant: str3,
      size,
      loading: iconOpticalOffsetMargin.loading,
      pressed: sharedValue,
      style: pillStyle,
      shiny: undefined !== shiny && shiny,
      expressiveRiveRef: null,
      expressivePressState: null,
      children: null,
    };
    let tmp28;
    if (startsWithResult) {
      tmp28 = ref;
    }
    obj4[6] = tmp28;
    let first;
    if (startsWithResult) {
      first = tmp15[0];
    }
    obj4[7] = first;
    const obj5 = { value: size, children: null };
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
      const obj6 = { collapseText: null, children: null };
      obj6[0] = collapseText;
      obj6[1] = textElement;
      tmp26Result = tmp26(CollapsingText, obj6);
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
    obj5[1] = items6;
    obj4[8] = closure_8(redux.Provider, obj5);
    obj3.children = callback(onPressIn(onLayout[18]).ButtonPill, obj4);
    return callback(onPressIn(onLayout[16]).BaseButton, obj3);
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
      const context = importAllResult.useContext(closure_13);
      let obj = styleProperties;
      obj = { source: source.source, disableColor: flag, style: obj.useIconSizeStyles(context) };
      const tmp4 = callback(closure_12, obj);
      let tmp3Result = tmp4;
      if ("entity" === str) {
        obj = { style: null, children: null };
        obj[0] = tmp2.entityWrapper;
        obj[1] = tmp4;
        tmp3Result = callback(closure_6, obj);
      }
      return tmp3Result;
    },
  },
);
let obj5 = {
  Icon: function TextButtonIcon(source) {
    let str = source.variant;
    if (str === undefined) {
      str = "icon";
    }
    let flag = source.disableColor;
    if (flag === undefined) {
      flag = true;
    }
    const context = importAllResult.useContext(closure_13);
    let obj = styleProperties;
    obj = { source: source.source, disableColor: flag, style: obj.useIconSizeStyles(context) };
    const tmp4 = callback(closure_12, obj);
    let tmp3Result = tmp4;
    if ("entity" === str) {
      obj = { style: null, children: null };
      obj[0] = tmp2.entityWrapper;
      obj[1] = tmp4;
      tmp3Result = callback(closure_6, obj);
    }
    return tmp3Result;
  },
};
let result = require("set").fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export const BaseTextButton = merged;
